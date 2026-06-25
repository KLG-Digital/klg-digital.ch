// ===================== NAVBAR PARTAGÉE =====================
// Modifier ce fichier met à jour la navbar sur toutes les pages.
// Compatible Live Server, file://, et GitHub Pages.

(function () {

  // ── Calculer la racine du site ────────────────────────────
  // On remonte jusqu'au dossier qui contient index.html
  // Fonctionne depuis racine ET depuis pages/
  const path    = window.location.pathname;
  const inPages = path.includes('/pages/');
  // Nouvelle structure : pages/nom/index.html — remonter de 2 niveaux
  // Depuis pages/nom/ on remonte 2 niveaux pour trouver la racine
  const root    = inPages
    ? path.substring(0, path.indexOf('/pages/')) + '/'
    : path.substring(0, path.lastIndexOf('/') + 1);

  // Vérification : si on est dans pages/nom/, root doit finir par /
  // ex: /klg-digital.ch/pages/parcours/ → root = /klg-digital.ch/

  // ── Détecter la page courante ─────────────────────────────
  // Nouvelle structure : /pages/it/ → currentPage = 'it'
  // Ancienne structure : /pages/it.html → currentPage = 'it.html'
  const pathParts   = path.split('/').filter(Boolean);
  const currentPage = pathParts[pathParts.length - 1] || 'index';

  // ── Liens de navigation ───────────────────────────────────
  const links = [
    { label: 'Accueil',      href: root + 'index.html' },
    { label: 'Mon parcours', href: root + 'pages/parcours/' },
    { label: 'Programmes',   href: root + 'pages/programmes/' },
    { label: 'Services',     href: root + 'pages/services/' },
    { label: 'À propos',     href: root + 'pages/apropos/' },
    { label: 'Contact',      href: root + 'pages/contact/' },
  ];

  // ── Logo : suit le thème actuel (data-theme) ──────────────
  const imgRoot  = inPages ? '../../' : '';
  const isDark   = document.documentElement.getAttribute('data-theme') !== 'light';
  const logoFile = isDark ? 'KLG-Digital-blanc.png' : 'KLG-Digital-noir.png';

  // ── Générer le HTML de la navbar ──────────────────────────
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

  // ── Injecter la navbar au début du body ───────────────────
  document.body.insertAdjacentHTML('afterbegin', navHTML);

  // ── Hamburger mobile ──────────────────────────────────────
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

  // ── Logo dynamique selon couleur système ──────────────────
  // Si pas de thème sauvegardé, on suit la préférence système en temps réel
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (localStorage.getItem('klg-theme')) return; // thème manuel → ignorer
    const logoImg = document.querySelector('.logo-img');
    if (logoImg) {
      logoImg.src = imgRoot + 'images/' + (e.matches ? 'KLG-Digital-blanc.png' : 'KLG-Digital-noir.png');
    }
  });

})();
// ===========================================================