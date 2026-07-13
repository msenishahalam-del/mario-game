// ─── LEADERBOARD (GitHub Pages — tiada server, panggil Google Sheet terus) ───
// Menggantikan endpoint /api/score & /api/leaderboard yang dahulu diproksi oleh server.js.
(function () {
  const GSHEET_URL = 'https://script.google.com/macros/s/AKfycbxYmCknF6nHT3fElPjSt86BxWaiHO6QhYgTGLr1tp7G72pZFtHO5evYWDpPovJLr6eP/exec';

  window.GameScores = {
    // Hantar skor. Guna text/plain + no-cors supaya tiada CORS preflight —
    // penulisan ke Sheet tetap berjaya walau respons tak boleh dibaca.
    async submit({ name, score, coins }) {
      try {
        const entry = {
          id: Date.now(),
          name: String(name || '').trim().toUpperCase().slice(0, 10),
          score,
          coins,
          date: new Date().toLocaleDateString('ms-MY')
        };
        await fetch(GSHEET_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(entry)
        });
      } catch (e) { /* senyap — skor tetap dihantar walau respons tak dibaca */ }
      return null;
    },

    // Ambil senarai skor. Kalau CORS menyekat bacaan, pulangkan [] (leaderboard sekadar tak muncul).
    async top() {
      try {
        const res = await fetch(GSHEET_URL, { cache: 'no-store' });
        const data = await res.json();
        return Array.isArray(data) ? data : [];
      } catch (e) { return []; }
    }
  };
})();
