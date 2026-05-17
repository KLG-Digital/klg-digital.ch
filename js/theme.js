// ===================== THÈME SOMBRE / CLAIR =====================
// Mode sombre : étoiles animées (stars.js)
// Mode clair  : surface lunaire — fond clair avec texture de cratères subtils
// Bouton thème : dernier lien navbar (desktop) + dernier item menu mobile

(function () {

  const STORAGE_KEY = 'klg-theme';

  // ── Préférence système ou sauvegardée ──────────────────────
  function getPreferredTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  // ── Appliquer le thème sur <html> ──────────────────────────
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }

  // ── Canvas lune : fond clair avec micro-cratères ───────────
  function createMoonCanvas() {
    let canvas = document.getElementById('starCanvas');
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.id = 'starCanvas';
      document.body.insertAdjacentElement('afterbegin', canvas);
    }
    drawMoon(canvas);
    window.addEventListener('resize', () => drawMoon(canvas), { passive: true });
  }

  function drawMoon(canvas) {
    const ctx = canvas.getContext('2d');
    const W = canvas.width  = window.innerWidth;
    const H = canvas.height = window.innerHeight;

    // Fond clair uniforme
    ctx.fillStyle = '#c8c8d0';
    ctx.fillRect(0, 0, W, H);

    // Générateur pseudo-aléatoire stable
    let seed = 42;
    function rand() {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    }

    // Micro-cratères — très petits et très subtils
    for (let i = 0; i < 80; i++) {
      const x = rand() * W;
      const y = rand() * H;
      const r = rand() * 6 + 2;

      // Ombre portée (bas-droite)
      ctx.beginPath();
      ctx.arc(x + 1, y + 1, r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(90, 85, 105, ${rand() * 0.12 + 0.04})`;
      ctx.fill();

      // Bord éclairé (haut-gauche)
      ctx.beginPath();
      ctx.arc(x - 0.5, y - 0.5, r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(220, 220, 230, ${rand() * 0.15 + 0.05})`;
      ctx.fill();

      // Intérieur légèrement plus sombre
      ctx.beginPath();
      ctx.arc(x, y, r * 0.6, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(100, 95, 115, ${rand() * 0.08 + 0.03})`;
      ctx.fill();
    }

    // Très petits points (poussière lunaire)
    for (let i = 0; i < 150; i++) {
      const x = rand() * W;
      const y = rand() * H;
      const r = rand() * 0.8 + 0.2;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(90, 85, 110, ${rand() * 0.15 + 0.05})`;
      ctx.fill();
    }
  }

  // ── Injecter le bouton dans la navbar ──────────────────────
  // Position : fin des liens (comme Dracula Theme)
  function injectToggleButton() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    const theme = getPreferredTheme();

    // Créer le bouton
    const btn = document.createElement('button');
    btn.className = 'theme-toggle';
    btn.setAttribute('aria-label', 'Changer de thème');
    btn.innerHTML = theme === 'dark'
      ? '<i class="fa-solid fa-sun"></i>'
      : '<i class="fa-solid fa-moon"></i>';

    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      applyTheme(current === 'dark' ? 'light' : 'dark');
      location.reload();
    });

    // Desktop : insérer après les nav-links (fin de navbar)
    const navLinks = navbar.querySelector('.nav-links');
    if (navLinks) {
      navLinks.after(btn);
    } else {
      // Fallback : avant le menu-toggle
      const menuToggle = navbar.querySelector('.menu-toggle');
      navbar.insertBefore(btn, menuToggle);
    }

    // Mobile : ajouter comme dernier item du menu
    if (navLinks) {
      const li = document.createElement('li');
      li.className = 'theme-toggle-mobile';

      const mobileBtn = document.createElement('button');
      mobileBtn.className = 'theme-toggle-mobile-btn';
      mobileBtn.innerHTML = theme === 'dark'
        ? '<i class="fa-solid fa-sun"></i> Mode clair'
        : '<i class="fa-solid fa-moon"></i> Mode sombre';

      mobileBtn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'dark';
        applyTheme(current === 'dark' ? 'light' : 'dark');
        location.reload();
      });

      li.appendChild(mobileBtn);
      navLinks.appendChild(li);
    }
  }

  // ── Point d'entrée ─────────────────────────────────────────
  const theme = getPreferredTheme();
  applyTheme(theme);

  document.addEventListener('DOMContentLoaded', () => {
    injectToggleButton();
    if (theme === 'light') createMoonCanvas();
  });

  // Changement système sans override manuel
  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      applyTheme(e.matches ? 'light' : 'dark');
      location.reload();
    }
  });

})();
// ===============================================================