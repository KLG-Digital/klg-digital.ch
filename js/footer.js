// ===================== FOOTER PARTAGÉ =====================

(function () {

  const path    = window.location.pathname;
  const inPages = path.includes('/pages/');
  const root    = inPages
    ? path.substring(0, path.indexOf('/pages/')) + '/'
    : path.substring(0, path.lastIndexOf('/') + 1);

  const year = new Date().getFullYear();

  const footerHTML = `
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-left">
          <span class="footer-copy">© ${year} KLG Digital — Tous droits réservés</span>
          <span class="footer-location"><i class="fa-solid fa-location-dot"></i> Yvorne, 1853 Chablais vaudois — Suisse</span>
        </div>
        <div class="footer-links">
          <a href="mailto:kevin@klg-digital.ch">kevin@klg-digital.ch</a>
          <span class="footer-sep">·</span>
          <a href="${root}pages/privacy/">Politique de confidentialité</a>
        </div>
      </div>
    </footer>
  `;

  document.body.insertAdjacentHTML('beforeend', footerHTML);

})();
// ==========================================================