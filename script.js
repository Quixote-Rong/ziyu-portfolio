/* Consolidated from two identical Cargo scripts: load one star-trail listener. */
(function () {
  if (window.ziyuStarTrailLoaded) return;
  window.ziyuStarTrailLoaded = true;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let lastTime = 0;
  const symbols = ['✦', '✧', '☆'];

  function createStar(x, y) {
    const star = document.createElement('span');
    star.className = 'cursor-star';
    star.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    star.style.left = x + 'px';
    star.style.top = y + 'px';
    star.style.fontSize = (12 + Math.random() * 10) + 'px';
    document.body.appendChild(star);
    window.setTimeout(function () { star.remove(); }, 900);
  }

  window.addEventListener('mousemove', function (e) {
    const now = Date.now();
    if (now - lastTime < 85) return;
    lastTime = now;
    createStar(e.clientX, e.clientY);
  }, { passive: true });
})();
