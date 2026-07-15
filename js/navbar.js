// ======================== NAVBAR PARTAGÉE ========================
// Modifier ce fichier met à jour la navbar sur toutes les pages.
// Compatible Live Server, file://, et GitHub Pages.

(function () {

  // --------------------- Racine du site ---------------------
  // Remonte jusqu'au dossier qui contient index.html
  // Fonctionne depuis la racine (/) et depuis les pages directes (/contact/, /it/, etc.)

  const path  = window.location.pathname;
  const depth = path.split('/').filter(Boolean).length;
  const root  = depth >= 1 ? '../' : './';

  // --------------------- Page courante ---------------------
  // /it/ → currentPage = 'it'

  const pathParts   = path.split('/').filter(Boolean);
  const currentPage = pathParts[pathParts.length - 1] || 'index';

  // --------------------- Liens de navigation ---------------------

  const links = [
    { label: 'Accueil',      href: root + 'index.html' },
    { label: 'Mon parcours', href: root + 'parcours/' },
    { label: 'Programmes',   href: root + 'programmes/' },
    { label: 'Services',     href: root + 'services/' },
    { label: 'À propos',     href: root + 'apropos/' },
    { label: 'Contact',      href: root + 'contact/' },
  ];

  // --------------------- Logo ---------------------
  // Suit le thème actuel (data-theme)

  const imgRoot = depth >= 1 ? '../' : '';
  const isDark   = document.documentElement.getAttribute('data-theme') !== 'light';
  const logoFile = isDark ? 'KLG-Digital-blanc.png' : 'KLG-Digital-noir.png';

  // --------------------- HTML de la navbar ---------------------

  const navHTML = `
    <nav class="navbar" role="navigation" aria-label="Navigation principale">
      <a href="${root}index.html" class="logo" aria-label="KLG Digital — Accueil">
        <img src="${imgRoot}images/${logoFile}" alt="KLG Digital" class="logo-img">
      </a>
      <button class="menu-toggle" aria-label="Ouvrir le menu" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul class="nav-links" role="list">
        ${links.map(link => {
          const isActive = link.href.includes('/' + currentPage + '/') || link.href.endsWith(currentPage) || link.href.endsWith(currentPage + '/');
          return `<li><a href="${link.href}"${isActive ? ' class="active"' : ''}>${link.label}</a></li>`;
        }).join('\n        ')}
      </ul>
    </nav>
  `;

  // --------------------- Injection ---------------------

  document.body.insertAdjacentHTML('afterbegin', navHTML);

  // --------------------- Hamburger mobile ---------------------

  const toggle   = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('mobile-menu');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen);
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('mobile-menu');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
    });
  });

  // --------------------- Logo dynamique ---------------------
  // Si pas de thème sauvegardé, suit la préférence système en temps réel

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (localStorage.getItem('klg-theme')) return;
    const logoImg = document.querySelector('.logo-img');
    if (logoImg) {
      logoImg.src = imgRoot + 'images/' + (e.matches ? 'KLG-Digital-blanc.png' : 'KLG-Digital-noir.png');
    }
  });

})();

// ================================================= //