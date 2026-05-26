(function () {
  const KEY = 'rewardDeadline';
  const HOME = '/index.html';

  function readDeadline() {
    const v = localStorage.getItem(KEY);
    if (!v) return 0;
    const n = parseInt(v, 10);
    return Number.isFinite(n) ? n : 0;
  }

  const deadline = readDeadline();
  if (!deadline || deadline <= Date.now()) {
    if (deadline) localStorage.removeItem(KEY);
    if (location.pathname !== HOME && location.pathname !== '/') {
      location.replace(HOME);
    }
    return;
  }

  const box = document.createElement('div');
  box.id = 'rewardTimerBox';
  box.style.cssText = [
    'position:fixed', 'top:12px', 'right:12px', 'z-index:2147483647',
    'background:rgba(0,0,0,0.85)', 'color:#fff',
    'font-family:monospace', 'font-size:18px', 'font-weight:bold',
    'padding:10px 16px', 'border-radius:12px',
    'border:2px solid #38ef7d', 'box-shadow:0 4px 16px rgba(0,0,0,0.5)',
    'pointer-events:none', 'min-width:130px', 'text-align:center'
  ].join(';');
  box.innerHTML = '⏰ <span id="rtTime">--:--</span>';

  function mount() {
    if (document.body) document.body.appendChild(box);
    else document.addEventListener('DOMContentLoaded', () => document.body.appendChild(box));
  }
  mount();

  function fmt(sec) {
    sec = Math.max(0, Math.floor(sec));
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return m + ':' + String(s).padStart(2, '0');
  }

  function tick() {
    const remainMs = readDeadline() - Date.now();
    if (remainMs <= 0) {
      localStorage.removeItem(KEY);
      location.replace(HOME);
      return;
    }
    const t = box.querySelector('#rtTime');
    if (t) t.textContent = fmt(remainMs / 1000);
    if (remainMs <= 30000) {
      box.style.borderColor = '#ef5350';
      box.style.background = 'rgba(198,40,40,0.85)';
    } else if (remainMs <= 60000) {
      box.style.borderColor = '#ffa000';
    }
  }

  tick();
  setInterval(tick, 500);
})();
