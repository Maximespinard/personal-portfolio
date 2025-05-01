export default {
  // Navigation
  nav: {
    home: 'Accueil',
    services: 'Services',
    journey: 'Parcours',
    projects: 'Projets',
    skills: 'Compétences',
    connect: 'Contact',
  },

  // Section Hero
  hero: {
    greeting: 'Bonjour ! Je suis',
    name: 'Maxime Spinard',
    subtitle: 'Un développeur qui',
    headline: 'Crée des solutions',
    accent: 'ligne par ligne',
    tagline:
      'Parce que du code propre aujourd’hui signifie des systèmes évolutifs demain.',
    cta: {
      projects: 'Voir les projets',
      hire: 'Engagez-moi',
    },
  },

  // Introduction Showcase
  intro: {
    title: 'Transformer les idées en solutions numériques',
    description:
      "De la conception au déploiement, je crée des applications web sur mesure qui résolvent de réels défis d'affaires. Mon expertise couvre l'ensemble du cycle de développement avec un accent sur la création de solutions évolutives et maintenables.",
  },

  // Section Services
  services: {
    title: 'Services proposés',
    subtitle: 'Transformer les idées en expériences numériques exceptionnelles',
    cta: 'Travaillons ensemble',

    ecommerce: {
      title: 'Site E-Commerce',
      description:
        'Une boutique en ligne performante adaptée à votre image. Responsive, sécurisée et optimisée pour la conversion.',
      price: 'À partir de 2500€',
      features: [
        'Design responsive personnalisé',
        'Paiement sécurisé intégré',
        "Interface d'administration intuitive",
      ],
      button: 'Voir un exemple',
    },

    portfolio: {
      title: 'Portfolio / Landing Page',
      description:
        'Un site fluide et performant pour présenter votre activité ou vos compétences avec impact.',
      price: 'À partir de 750€',
      features: [
        'Mise en page claire et responsive',
        'Structure optimisée pour le SEO',
        "Appel à l'action clair",
      ],
      button: 'Voir un exemple',
    },

    business: {
      title: "Outils d'affaires personnalisés",
      description:
        'Applications web sur mesure (CRM, tableaux de bord, automatisation de tâches) pour répondre à vos besoins métier.',
      price: 'À partir de 1750€',
      features: [
        "Dashboards d'administration sur mesure",
        'Authentification et gestion des rôles',
        'Automatisation des processus',
      ],
      button: 'Voir un exemple',
    },
  },
  // Section Carrière
  career: {
    title: 'Parcours Professionnel',
    subtitle:
      "Mon parcours, de l'exploration du code à la livraison de solutions d'entreprise",

    // Stades de carrière
    stages: {
      foundations: {
        title: 'Fondations autodidactes',
        description:
          "J'ai commencé par les bases du front-end (HTML, CSS, JavaScript), en créant des petits sites web et en explorant les bibliothèques d'interface utilisateur. J'ai développé une passion pour la création d'expériences utilisateurs intuitives.",
      },
      fullstack: {
        title: 'Évolution Fullstack',
        description:
          "Je me suis orienté vers le développement backend avec Node.js, Express et MongoDB. J'ai maîtrisé l'art de construire des applications full-stack et des API RESTful.",
      },
      professional: {
        title: 'Croissance professionnelle',
        description:
          "J'ai dirigé des équipes de développement sur des projets complexes, en mettant en œuvre des frameworks modernes comme React et Next.js. J'ai affiné mes compétences en architecture de systèmes et gestion de projet.",
      },
      consultant: {
        title: 'Consultant indépendant',
        description:
          "Aujourd'hui, je fournis des services de développement spécialisés pour les entreprises nécessitant des solutions web personnalisées. Je me concentre sur la livraison d'applications de haute qualité et évolutives qui génèrent de réels résultats.",
      },
    },
  },

  // Section Projets
  projects: {
    title: 'Projets en vedette',
    subtitle:
      'Faites défiler pour explorer les projets ou cliquez pour voir les détails',

    // Métadonnées de projet
    metadata: {
      duration: 'Durée',
      role: 'Rôle',
      features: 'Caractéristiques clés',
      technologies: 'Technologies',
      viewDetails: 'Voir les détails',
      insights: 'Aperçus',
      outcomes: 'Résultats',
      more: 'plus',
    },

    // Projets individuels par ID
    'car-sharing-platform': {
      title: 'Smart réservation de véhicules',
      description:
        "Une solution complète de partage de voiture qui optimise l'utilisation des véhicules grâce à des algorithmes de planification et de routage intelligents. La plateforme gère tout, de l'inscription de l'utilisateur à la sélection du véhicule, aux paiements et aux retours après location.",
      keyFeatures: [
        'Suivi de la disponibilité des véhicules en temps réel avec intégration de géolocalisation',
        'Tarification intelligente en fonction de la demande, de la localisation et du type de véhicule',
        'Processus de réservation sans friction avec confirmation instantanée',
        'Traitement sécurisé des paiements avec plusieurs options de paiement',
        'Profils utilisateurs complets avec système de vérification',
        'Système de notation et de feedback pour les locataires et les véhicules',
      ],
      insights: [
        "La mise en œuvre des mises à jour en temps réel a nécessité une gestion soignée de l'état à travers l'application",
        "L'optimisation de l'algorithme de réservation a réduit le temps moyen de réservation de 40%",
        "Les services basés sur la localisation ont considérablement amélioré les indicateurs d'engagement des utilisateurs",
      ],
      outcomes: [
        "Augmentation de 30% du taux d'utilisation des véhicules",
        'Réduction des coûts opérationnels de 25% grâce aux processus automatisés',
        'Score de satisfaction client de 4.8/5 basé sur les enquêtes post-location',
      ],
      duration: '+2 ans',
      role: 'Développeur Front-end',
    },
    'elearning-ecosystem': {
      title: 'Écosystème E-Learning',
      brief:
        'Portail éducatif tout-en-un gérant les inscriptions, les emplois du temps, les devoirs et le suivi des progrès.',
      description:
        "Un système de gestion de l'apprentissage conçu pour les institutions éducatives afin de rationaliser leurs offres d'apprentissage numérique. La plateforme offre une interface unifiée pour les administrateurs, les enseignants et les étudiants pour gérer tous les aspects de l'éducation en ligne.",
      keyFeatures: [
        'Tableau de bord intuitif pour la création et la gestion des cours',
        'Système automatisé de distribution et de notation des devoirs',
        'Suivi complet des progrès avec analyses détaillées et accès des parents aux notes',
        'Bibliothèque de ressources centralisée avec options de téléchargement pour les enseignants et options de recherche/filtrage avancées',
        "Gestion des cursus scolaires annuels avec outils d'administration et visibilité des emplois du temps des étudiants",
      ],
      insights: [
        'La conception pour plusieurs rôles utilisateurs a nécessité une planification minutieuse des systèmes de permission',
        "Le suivi de l'engagement des utilisateurs a fourni des informations précieuses pour améliorer l'expérience de la plateforme",
        "Mettre en œuvre les fonctionnalités d'accessibilité dès le début a été plus efficace que de les ajouter après coup",
      ],
      outcomes: [
        'Réduction de 35% de la charge administrative',
        "Augmentation de 45% de l'engagement des étudiants par rapport aux systèmes précédents",
        'Satisfaction accrue des utilisateurs sur la base des retours des enseignants, des parents et des étudiants',
      ],
      duration: '8 mois',
      role: 'Développeur Full Stack & Consultant UI/UX',
    },
    'visual-asset-hub': {
      title: "Hub d'actifs visuels",
      brief:
        'Webapp avancée de gestion de photos, téléchargements par lots et capacités de filtrage intelligentes.',
      description:
        "Une puissante plateforme de gestion des actifs numériques construite spécifiquement pour les photographes, les marketeurs et les créateurs de contenu afin d'organiser, rechercher et accéder efficacement à de grandes collections de photos. Conçue pour rationaliser les flux de travail et améliorer la collaboration.",
      keyFeatures: [
        'Étiquetage et catégorisation automatiques des photos pour un accès rapide',
        'Fonctionnalité de recherche avancée avec filtres et options de tri personnalisables',
        "Téléchargement en masse et outils d'édition par lots pour une gestion des actifs optimisée",
        "Champs de métadonnées personnalisables pour améliorer l'organisation des photos",
        "Contrôles d'accès basés sur les rôles avec paramètres de partage sécurisé",
        'Intégration avec Adobe Creative Cloud et autres outils de conception pour une édition transparente',
      ],
      insights: [
        "Le traitement des images côté client a permis d'optimiser la charge du serveur et les performances",
        "Le passage à une architecture microservices a amélioré l'évolutivité du système et la facilité des mises à jour",
        'Les stratégies de mise en cache personnalisées ont réduit les appels API de 60%, améliorant la vitesse de la plateforme',
      ],
      outcomes: [
        'Réduction des temps de recherche de minutes à secondes, accélérant le flux de travail',
        "Réduction de 75% du temps d'organisation des photos grâce aux outils de catégorisation efficaces",
        "Adopté par de grands studios de photographie et agences créatives pour ses performances et sa facilité d'utilisation",
      ],
      duration: '10 mois',
      role: 'Développeur Full Stack',
    },
    'auto-rental-engine': {
      title: 'Moteur de location de voitures',
      brief:
        'Système de réservation de véhicules avec vérification de disponibilité en temps réel et flux de paiements intégrés.',
      description:
        'Un puissant système de gestion de location conçu spécifiquement pour les entreprises de location de voitures, combinant gestion des stocks, systèmes de réservation et outils de gestion de la relation client en une plateforme complète.',
      keyFeatures: [
        'Gestion dynamique des stocks avec planification de maintenance',
        'Système de réservation avancé avec résolution des conflits',
        'Facturation et traitement des paiements automatisés',
        'Gestion des clients avec intégration du programme de fidélité',
        "Tableau de bord d'analyse avec insights de business intelligence",
        'Application mobile pour la commodité des clients et des opérations sur le terrain',
      ],
      insights: [
        "La mise en œuvre d'une architecture sans tête a permis une expérience cohérente sur le web et mobile",
        'La conception événementielle a considérablement amélioré la fiabilité du système',
        'Les tests automatisés ont réduit les rapports de bogues de 40% après le lancement',
      ],
      outcomes: [
        'Augmentation du taux de conversion des réservations de 28%',
        "Réduction du temps d'arrêt des véhicules de 35% grâce à la planification préventive de la maintenance",
        "Économies de temps administratif de 20 heures par semaine grâce à l'automatisation",
      ],
      duration: '7 mois',
      role: 'Architecte technique & Développeur principal',
    },
  },

  // Section Compétences
  skills: {
    title: 'Compétences techniques',
    subtitle: 'Mon expertise en développement frontend et backend',
    frontend: 'Développement Frontend',
    backend: 'Développement Backend',
  },

  // Section Contact
  contact: {
    title: 'Collaborons',
    subtitle:
      "Prêt à créer quelque chose d'exceptionnel ? Contactez-moi dès maintenant pour des services de développement rapides et professionnels qui donnent des résultats.",
    form: {
      name: 'Votre nom',
      email: 'Votre email',
      message: 'Votre message',
      send: 'Envoyer le message',
      sending: 'Envoi en cours...',
    },
    success: {
      title: 'Merci !',
      message:
        'Votre message a été envoyé avec succès.\nJe reviendrai vers vous bientôt.',
      button: "Retour à l'accueil",
    },
    error: {
      title: 'Oups !',
      defaultMessage: "Échec de l'envoi du message. Veuillez réessayer.",
      button: 'Réessayer',
    },
    validation: {
      name: {
        min: 'Le nom doit comporter au moins 2 caractères',
        max: 'Le nom ne peut pas dépasser 50 caractères',
        format: 'Le nom ne peut contenir que des lettres et des espaces',
      },
      email: {
        required: "L'email est requis",
        invalid: 'Adresse email invalide',
        max: "L'email ne peut pas dépasser 100 caractères",
      },
      message: {
        min: 'Le message doit comporter au moins 10 caractères',
        max: 'Le message ne peut pas dépasser 500 caractères',
      },
    },
  },

  // Footer
  footer: {
    copyright: '© {year} Maxime Spinard. Tous droits réservés.',
    services: 'Services',
    journey: 'Parcours',
    projects: 'Projets',
  },
};
