// ===================== THÈME SOMBRE / CLAIR =====================
// Détection automatique du système + bouton de bascule dans la navbar.
// Mode sombre : étoiles animées (stars.js)
// Mode clair  : lune avec cratères statiques dessinés en canvas

(function () {

  const STORAGE_KEY = 'klg-theme';

  // ─── Préférence système ou sauvegardée ──────────────────────
  function getPreferredTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  // ─── Appliquer le thème sur <html> ──────────────────────────
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }

  // ─── Créer le canvas lune et le dessiner ────────────────────
  function createMoonCanvas() {
    // Créer le canvas et l'injecter (stars.js ne le fait pas en mode clair)
    let canvas = document.getElementById('starCanvas');
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.id = 'starCanvas';
      document.body.insertAdjacentElement('afterbegin', canvas);
    }

    drawMoon(canvas);

    window.addEventListener('resize', () => drawMoon(canvas), { passive: true });
  }

  // ─── Dessiner la surface lunaire ────────────────────────────
  function drawMoon(canvas) {
    const ctx = canvas.getContext('2d');
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Générateur pseudo-aléatoire stable — même résultat à chaque redraw
    let seed = 42;
    function rand() {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    }

    // Cratères (cercle + intérieur sombre)
    for (let i = 0; i < 60; i++) {
      const x = rand() * canvas.width;
      const y = rand() * canvas.height;
      const r = rand() * 18 + 4;

      // Bord
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(80, 75, 95, ${rand() * 0.5 + 0.25})`;
      ctx.lineWidth   = rand() * 1.5 + 0.5;
      ctx.stroke();

      // Intérieur
      ctx.beginPath();
      ctx.arc(x, y, r * 0.75, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(70, 65, 85, ${rand() * 0.3 + 0.1})`;
      ctx.fill();
    }

    // Poussière lunaire (petits points)
    for (let i = 0; i < 120; i++) {
      const x = rand() * canvas.width;
      const y = rand() * canvas.height;
      const r = rand() * 1.5 + 0.3;

      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(75, 70, 90, ${rand() * 0.4 + 0.15})`;
      ctx.fill();
    }
  }

  // ─── Bouton thème dans la navbar ────────────────────────────
  function injectToggleButton() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    const btn = document.createElement('button');
    btn.className = 'theme-toggle';
    btn.setAttribute('aria-label', 'Changer de thème');

    function updateIcon(theme) {
      btn.innerHTML = theme === 'dark'
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
    }

    updateIcon(getPreferredTheme());

    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next    = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      location.reload();
    });

    // Insérer avant le bouton hamburger
    const menuToggle = navbar.querySelector('.menu-toggle');
    navbar.insertBefore(btn, menuToggle);
  }

  // ─── Point d'entrée ─────────────────────────────────────────
  const theme = getPreferredTheme();
  applyTheme(theme);

  document.addEventListener('DOMContentLoaded', () => {
    injectToggleButton();
    // En mode clair : créer le canvas lune
    if (theme === 'light') createMoonCanvas();
  });

  // Changement système en temps réel (sans override manuel)
  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      applyTheme(e.matches ? 'light' : 'dark');
      location.reload();
    }
  });

})();
// ===============================================================