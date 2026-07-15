// ======================== FOOTER PARTAGÉ ========================

(function () {

  // --- Racine du site (fonctionne depuis / et depuis /contact/, /it/, etc.) ---
  const path  = window.location.pathname;
  const depth = path.split('/').filter(Boolean).length;
  const root  = depth >= 1 ? '../' : './';

  const year = new Date().getFullYear();

  // --- Template HTML du footer ---
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
          <a href="${root}privacy/">Politique de confidentialité</a>
        </div>
      </div>
    </footer>
  `;

  document.body.insertAdjacentHTML('beforeend', footerHTML);

})();

// ================================================= //