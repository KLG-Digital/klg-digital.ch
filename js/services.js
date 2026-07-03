// ======================== SERVICES — SOURCE UNIQUE ========================
// Utilisé par pages/it/, pages/photo/, pages/video/ et pages/services/
// Modifier ici suffit à mettre à jour toutes les pages qui l'utilisent.

const SERVICES_DATA = {

  // --------------------- IT & Infrastructure ---------------------
  it: [
    {
      icon: "fa-solid fa-screwdriver-wrench",
      price: "55.- / h",
      priceClass: "price-fixed",
      name: "Support informatique",
      desc: "Diagnostic et résolution de tous vos soucis informatiques — virus, lenteur, périphérique, panne matérielle, logicielle ou réseau.",
      includes: [
        "Diagnostic complet du problème",
        "Suppression de logiciels indésirables ou malveillants",
        "Configuration de comptes et services en ligne",
        "Configuration d'imprimantes et périphériques",
        "Résolution logicielle (virus, lenteurs, erreurs système)",
        "Résolution matérielle (périphériques, connexions, pannes)",
        "Résolution de problèmes réseau (Wi-Fi, connexion, configuration)",
        "Vérification de la sécurité et des sauvegardes",
        "Conseils pour éviter les problèmes futurs",
        "Installation et configuration de logiciels et périphériques",
        "Assistance pour la récupération de données",
        "Optimisation des performances de votre système",
        "Support à distance disponible",
        "Rapport d'intervention sur demande"
      ],
      note: "Facturation par tranche de 15 min. Déplacement selon distance."
    },
    {
      icon: "fa-solid fa-wrench",
      price: "55.- / h",
      priceClass: "price-fixed",
      name: "Maintenance PC",
      desc: "Nettoyage système, mise à jour, optimisation des performances et vérification matérielle.",
      includes: [
        "Vérification et mise à jour du BIOS/UEFI si nécessaire",
        "Sauvegarde préventive avant intervention",
        "Suppression des fichiers temporaires, cache et résidus inutiles",
        "Mise à jour du système d'exploitation et des pilotes (drivers)",
        "Vérification de l'état des disques (SMART)",
        "Désactivation des programmes inutiles au démarrage pour accélérer l'allumage",
        "Optimisation des paramètres système pour de meilleures performances",
        "Vérification de la sécurité et des logiciels antivirus",
        "Conseils pour prolonger la durée de vie de votre PC",
        "Rapport d'intervention et recommandations sur demande",
        "Vérification de la connectivité réseau et des périphériques",
        "Vérification thermique et nettoyage physique si nécessaire"
      ],
      note: "Facturation par tranche de 15 min."
    },
    {
      icon: "fa-solid fa-desktop",
      price: "Sur demande",
      priceClass: "price-demand",
      name: "Montage PC sur mesure",
      desc: "Sélection des composants, assemblage et configuration selon votre budget et vos besoins.",
      includes: [
        "Analyse de vos besoins et de votre budget",
        "Sélection des composants compatibles et optimisés",
        "Assemblage complet du PC",
        "Câblage soigné et gestion des câbles",
        "Installation du système d'exploitation",
        "Installation des pilotes et logiciels essentiels",
        "Installation de logiciels supplémentaires sur demande",
        "Mise en réseau et configuration Wi-Fi/Ethernet",
        "Tests de stabilité et de performance",
        "Conseils d'entretien et de maintenance future",
        "Livraison et mise en service sur place"
      ],
      note: "Le prix dépend des composants choisis. Devis gratuit sur demande."
    },
    {
      icon: "fa-solid fa-bolt",
      price: "55.- / h + matériel",
      priceClass: "price-fixed",
      name: "Upgrade matériel",
      desc: "Ajout de RAM, remplacement de disque, installation de carte graphique ou autre composant.",
      includes: [
        "Ajout ou remplacement de RAM",
        "Remplacement de disque",
        "Installation d'une carte graphique",
        "Installation d'une carte son",
        "Installation d'une carte réseau",
        "Remplacement du processeur",
        "Remplacement de la carte mère (peut nécessiter de changer également le processeur, la RAM et d'autres composants)",
        "Remplacement de l'alimentation",
        "Amélioration du système de refroidissement (ventirad, ventilateurs, watercooling)",
        "Vérification de compatibilité avant intervention",
        "Tests post-installation"
      ],
      note: "Le matériel est facturé séparément au prix d'achat. Certaines options ne sont pas disponibles sur ordinateur portable, et la compatibilité n'est pas garantie sur tous les modèles. Conseil d'achat gratuit."
    },
    {
      icon: "fa-solid fa-building",
      price: "Sur demande",
      priceClass: "price-demand",
      name: "Renouvellement parc informatique",
      desc: "Audit, recommandation, migration et déploiement de nouveaux postes en entreprise.",
      includes: [
        "Audit de l'existant",
        "Recommandation de matériel adapté à votre activité (postes, écrans, réseau)",
        "Déploiement des nouveaux postes",
        "Migration des données et des profils utilisateurs",
        "Configuration réseau et domaine",
        "Renouvellement d'infrastructure réseau (switchs, routeurs, câblage)",
        "Reprise et recyclage de l'ancien matériel",
        "Formation des utilisateurs sur demande"
      ],
      note: "Devis personnalisé selon l'ampleur du projet (nombre de postes, équipements réseau, complexité de la migration)."
    },
    {
      icon: "fa-solid fa-lightbulb",
      price: "55.- / h",
      priceClass: "price-fixed",
      name: "Conseils & accompagnement",
      desc: "Aide à la décision avant un achat, comparaison d'offres et conseils personnalisés pour votre matériel.",
      includes: [
        "Conseil avant achat (PC, composants, périphériques)",
        "Aide à la comparaison de devis et d'offres",
        "Recommandations personnalisées selon votre budget et vos besoins",
        "Explications techniques pour vous aider à décider",
        "Conseils généraux sur la sécurité et les bonnes pratiques"
      ],
      note: "Première consultation de 30 minutes offerte pour évaluer votre besoin. Au-delà, facturation par tranche de 15 min (55.- CHF/h)."
    },
    {
      icon: "fa-solid fa-book-open",
      price: "50.- / h",
      priceClass: "price-fixed",
      name: "Cours informatique",
      desc: "Formation personnalisée sur l'utilisation de votre ordinateur, logiciels ou outils bureautiques.",
      includes: [
        "Bases de l'informatique pour débutants",
        "Initiation à l'utilisation de Windows / macOS",
        "Maîtrise des logiciels bureautiques (Word, Excel, etc.)",
        "Navigation internet sécurisée",
        "Gestion des fichiers et sauvegardes",
        "Introduction à la cybersécurité",
        "Comment monter un PC soi-même",
        "Autres sujets sur demande, selon mes compétences"
      ],
      note: "Cours à domicile ou à distance. Rythme adapté à votre niveau."
    }
  ],

  // --------------------- Photo & Visuel ---------------------
  photo: [
    {
      icon: "fa-solid fa-palette",
      price: "Sur demande",
      priceClass: "price-demand",
      name: "Retouche photo",
      desc: "Retouche, correction colorimétrique et modification d'images — des résultats soignés pour vos projets personnels ou professionnels.",
      includes: [
        "Correction colorimétrique et retouche esthétique (luminosité, contraste, peau)",
        "Changement ou remplacement de couleurs",
        "Montage simple (recadrage, ajout de texte, superposition basique)",
        "Montage avancé / compositing (fusion d'images, mise en situation créative, remplacement complexe)",
        "Suppression d'éléments indésirables",
        "Modification ou remplacement du fond",
        "Traitement de lots d'images",
        "Export dans les formats souhaités",
        "Livrables en haute résolution"
      ],
      note: "Sur demande. Devis gratuit selon la complexité."
    },
    {
      icon: "fa-solid fa-pen-nib",
      price: "Sur demande",
      priceClass: "price-demand",
      name: "Création logo",
      desc: "Conception d'une identité visuelle adaptée à votre image et vos supports de communication.",
      includes: [
        "Brief et analyse de vos besoins",
        "2 propositions de concepts",
        "2 révisions incluses par concept",
        "Prévisualisation watermarkée avant livraison finale",
        "Livraison en formats vectoriels (SVG, AI) et PNG",
        "Charte graphique simplifiée offerte (couleurs, polices)"
      ],
      note: "Au-delà des 2 révisions incluses, chaque révision supplémentaire est facturée au taux horaire (55.- CHF/h). Devis personnalisé selon la complexité."
    },
    {
      icon: "fa-solid fa-image",
      price: "Sur demande",
      priceClass: "price-demand",
      name: "Création média visuel",
      desc: "Création de supports graphiques pour vos projets personnels, professionnels ou réseaux sociaux.",
      includes: [
        "Affiches et flyers — livrés en haute résolution, prêts à l'impression ou adaptés au format numérique selon vos besoins",
        "Visuels pour réseaux sociaux (Instagram, Facebook, Twitter/X, etc.)",
        "Habillage de chaîne YouTube (bannière, miniatures, écrans de fin)",
        "Habillage Twitch (overlays, panels, bannière, écran hors ligne)",
        "Bannières web",
        "Supports de présentation",
        "Tout autre support graphique sur demande"
      ],
      note: "Sur demande. Devis gratuit selon le nombre de visuels et la complexité."
    }
  ],

  // --------------------- Vidéo ---------------------
  video: [
    {
      icon: "fa-solid fa-scissors",
      price: "Sur demande",
      priceClass: "price-demand",
      name: "Montage vidéo",
      desc: "Cut, étalonnage, habillage sonore et export selon votre plateforme cible.",
      includes: [
        "Montage et cut du rush",
        "Synchronisation audio/vidéo",
        "Étalonnage colorimétrique",
        "Correction de vitesse (ralenti, accéléré)",
        "Ajout de textes, titres et transitions",
        "Ajout de musique ou effets sonores",
        "Habillage sonore et mixage",
        "Sous-titres",
        "Export selon la plateforme (YouTube, Instagram, etc.)",
        "Formats multiples sur demande"
      ],
      note: "Sur demande. Devis gratuit selon la durée et la complexité du projet."
    },
    {
      icon: "fa-solid fa-clapperboard",
      price: "Sur demande",
      priceClass: "price-demand",
      name: "Création média animé",
      desc: "Création d'éléments visuels animés pour vos vidéos ou votre stream.",
      includes: [
        "Intros animées",
        "Outros animées",
        "Images de fond (statiques ou en boucle)",
        "Overlays et panels pour stream",
        "Thèmes OBS complets (scènes et overlays configurés)",
        "Écrans de chargement / hors ligne pour stream",
        "Tout autre élément animé sur demande"
      ],
      note: "Sur demande. Devis gratuit selon la complexité."
    }
  ]
};


// ================================================= //


// ======================== RENDU DES CARTES ========================
// Génère le HTML des cartes accordion depuis SERVICES_DATA

function renderServiceCard(service) {
  const includesHTML = service.includes
    .map(item => `<li>${item}</li>`)
    .join("");

  return `
    <div class="service-card">
      <div class="service-header">
        <span class="service-icon"><i class="${service.icon}"></i></span>
        <span class="service-price ${service.priceClass}">${service.price}</span>
      </div>
      <div class="service-name">${service.name}</div>
      <p class="service-desc">${service.desc}</p>
      <div class="service-toggle"><i class="fa-solid fa-chevron-down"></i> Voir le détail</div>
      <div class="service-details">
        <div class="service-details-inner">
          <div>
            <div class="service-details-title">Ce qui est inclus</div>
            <ul>${includesHTML}</ul>
          </div>
          <div class="service-note">${service.note}</div>
        </div>
      </div>
    </div>
  `;
}

function renderServicesGrid(targetId, category) {
  const grid = document.getElementById(targetId);
  if (!grid || !SERVICES_DATA[category]) return;

  grid.innerHTML = SERVICES_DATA[category]
    .map(renderServiceCard)
    .join("");

  // --- Accordion listeners ---
  grid.querySelectorAll(".service-card").forEach(card => {
    card.addEventListener("click", () => card.classList.toggle("open"));
  });
}

// ================================================= //