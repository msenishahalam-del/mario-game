const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const PORT = process.env.PORT || 5501;
const ROOT = __dirname;
const GSHEET_URL = 'https://script.google.com/macros/s/AKfycbxYmCknF6nHT3fElPjSt86BxWaiHO6QhYgTGLr1tp7G72pZFtHO5evYWDpPovJLr6eP/exec';
const BOOT_TIME = new Date();  // proksi untuk masa deploy (Railway restart pada setiap push)

function buildVersion() {
  const opts = { timeZone: 'Asia/Kuala_Lumpur' };
  const date = BOOT_TIME.toLocaleDateString('en-CA', opts);
  const time = BOOT_TIME.toLocaleTimeString('en-GB', { ...opts, hour12: false, hour: '2-digit', minute: '2-digit' });
  return `V${date} ${time}`;
}
const VERSION = buildVersion();

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'text/javascript; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif':  'image/gif',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.mp3':  'audio/mpeg',
  '.wav':  'audio/wav',
  '.ogg':  'audio/ogg',
  '.json': 'application/json'
};

function proxyToSheets({ method, body }) {
  return new Promise((resolve) => {
    const u = new URL(GSHEET_URL);
    const opts = {
      method,
      hostname: u.hostname,
      path: u.pathname + u.search,
      headers: {}
    };
    if (body) {
      opts.headers['Content-Type'] = 'application/json';
      opts.headers['Content-Length'] = Buffer.byteLength(body);
    }
    const req = https.request(opts, (res) => {
      let chunks = [];
      if ([301, 302, 303, 307, 308].includes(res.statusCode) && res.headers.location) {
        const redirectUrl = new URL(res.headers.location);
        const r2 = https.request({
          method: 'GET',
          hostname: redirectUrl.hostname,
          path: redirectUrl.pathname + redirectUrl.search
        }, (res2) => {
          let chunks2 = [];
          res2.on('data', c => chunks2.push(c));
          res2.on('end', () => resolve({ status: res2.statusCode, body: Buffer.concat(chunks2).toString() }));
        });
        r2.on('error', () => resolve({ status: 500, body: '{"error":"proxy failed"}' }));
        r2.end();
        return;
      }
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve({ status: res.statusCode, body: Buffer.concat(chunks).toString() }));
    });
    req.on('error', () => resolve({ status: 500, body: '{"error":"proxy failed"}' }));
    if (body) req.write(body);
    req.end();
  });
}

function readBody(req) {
  return new Promise((resolve) => {
    let chunks = [];
    req.on('data', c => chunks.push(c));
    req.on('end', () => resolve(Buffer.concat(chunks).toString()));
  });
}

http.createServer(async (req, res) => {
  const urlPath = decodeURIComponent(req.url.split('?')[0]);

  if (req.method === 'POST' && urlPath === '/api/score') {
    const raw = await readBody(req);
    let entry;
    try {
      const parsed = JSON.parse(raw);
      if (!parsed.name || parsed.score === undefined) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        return res.end('{"error":"Name dan score diperlukan"}');
      }
      entry = {
        id: Date.now(),
        name: String(parsed.name).trim().toUpperCase().slice(0, 10),
        score: parsed.score,
        coins: parsed.coins,
        date: new Date().toLocaleDateString('ms-MY')
      };
    } catch {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      return res.end('{"error":"Invalid JSON"}');
    }
    await proxyToSheets({ method: 'POST', body: JSON.stringify(entry) });
    console.log(`[NEW SCORE] ${entry.name}: ${entry.score}`);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ success: true, entry }));
  }

  if (req.method === 'GET' && urlPath === '/api/version') {
    res.writeHead(200, { 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' });
    return res.end(JSON.stringify({ version: VERSION }));
  }

  if (req.method === 'GET' && urlPath === '/api/leaderboard') {
    const result = await proxyToSheets({ method: 'GET' });
    res.writeHead(result.status === 200 ? 200 : 500, { 'Content-Type': 'application/json' });
    return res.end(result.status === 200 ? result.body : '[]');
  }

  const safePath = urlPath === '/' ? '/index.html' : urlPath;
  const filePath = path.join(ROOT, safePath);
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403); return res.end('Forbidden');
  }
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      return res.end('Not found: ' + safePath);
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(PORT, () => {
  console.log(`Math Game + Arcade running at http://127.0.0.1:${PORT}`);
});
