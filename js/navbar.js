// ======================== NAVBAR PARTAGÉE ========================
// Modifier ce fichier met à jour la navbar sur toutes les pages.
// Compatible Live Server, file://, et GitHub Pages.

(function () {

  // --------------------- Racine du site ---------------------
  // Remonte jusqu'au dossier qui contient index.html
  // Fonctionne depuis racine ET depuis pages/nom/

  const path    = window.location.pathname;
  const inPages = path.includes('/pages/');
  const root    = inPages
    ? path.substring(0, path.indexOf('/pages/')) + '/'
    : path.substring(0, path.lastIndexOf('/') + 1);

  // --------------------- Page courante ---------------------
  // /pages/it/ → currentPage = 'it'

  const pathParts   = path.split('/').filter(Boolean);
  const currentPage = pathParts[pathParts.length - 1] || 'index';

  // --------------------- Liens de navigation ---------------------

  const links = [
    { label: 'Accueil',      href: root + 'index.html' },
    { label: 'Mon parcours', href: root + 'pages/parcours/' },
    { label: 'Programmes',   href: root + 'pages/programmes/' },
    { label: 'Services',     href: root + 'pages/services/' },
    { label: 'À propos',     href: root + 'pages/apropos/' },
    { label: 'Contact',      href: root + 'pages/contact/' },
  ];

  // --------------------- Logo ---------------------
  // Suit le thème actuel (data-theme)

  const imgRoot  = inPages ? '../../' : '';
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