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

  // Hero Section
  hero: {
    greeting: 'Bonjour ! Je suis',
    name: 'Maxime Spinard',
    subtitle: 'Un Développeur qui',
    headline: 'Crée des solutions',
    accent: 'ligne par ligne',
    tagline:
      "Parce qu'un code propre aujourd'hui signifie des systèmes évolutifs demain.",
    cta: {
      projects: 'Voir mes Projets',
      hire: 'Me Recruter',
    },
  },

  // Intro Showcase
  intro: {
    title: 'Transformer des Idées en Solutions Digitales',
    description:
      "De la conception au déploiement, je développe des applications web sur mesure qui résolvent de véritables défis d'entreprise. Mon expertise couvre l'ensemble du cycle de développement, en mettant l'accent sur la création de solutions évolutives et maintenables.",
  },

  // Services Section
  services: {
    title: 'Services Proposés',
    subtitle: 'Transformer des idées en expériences digitales exceptionnelles',
    cta: 'Travaillons Ensemble',

    // Individual Services
    ecommerce: {
      title: 'Solutions E-Commerce',
      description:
        'Boutiques en ligne personnalisées avec traitement sécurisé des paiements, gestion des stocks et expériences utilisateur axées sur la conversion.',
      features: [
        'Passerelles de paiement sécurisées',
        'Systèmes de suivi des stocks',
        'Shopping optimisé pour mobile',
      ],
    },
    portfolio: {
      title: "Portfolios & Pages d'Atterrissage",
      description:
        'Sites web impressionnants et à fort taux de conversion, conçus pour mettre en valeur votre travail et transformer les visiteurs en clients.',
      features: [
        'Mises en page optimisées pour la conversion',
        'Expériences utilisateur interactives',
        'Architecture favorable au référencement',
      ],
    },
    business: {
      title: "Outils d'Entreprise Personnalisés",
      description:
        "Applications sur mesure comme des générateurs de factures, des tableaux de bord CRM et des outils d'automatisation des flux de travail.",
      features: [
        'Systèmes de gestion de factures',
        'Tableaux de bord administratifs personnalisés',
        'Automatisation des flux de travail',
      ],
    },
  },

  // Career Section
  career: {
    title: 'Parcours Professionnel',
    subtitle:
      "Mon voyage de l'exploration du code à la livraison de solutions d'entreprise",

    // Career Stages
    stages: {
      foundations: {
        title: 'Fondations Autodidactes',
        description:
          "Débuté avec les bases du frontend (HTML, CSS, JavaScript), en construisant de petits sites web et en explorant les bibliothèques UI. Développé une passion pour la création d'expériences utilisateur intuitives.",
      },
      fullstack: {
        title: 'Évolution Fullstack',
        description:
          "Élargi vers le développement backend avec Node.js, Express et MongoDB. Maîtrisé l'art de construire des applications full-stack et des API RESTful.",
      },
      professional: {
        title: 'Croissance Professionnelle',
        description:
          'Dirigé des équipes de développement sur des projets complexes, en implémentant des frameworks modernes comme React et Next.js. Affiné mes compétences en architecture système et gestion de projet.',
      },
      consultant: {
        title: 'Consultant Indépendant',
        description:
          "Je fournis désormais des services de développement spécialisés pour les entreprises nécessitant des solutions web personnalisées. Concentré sur la livraison d'applications évolutives de haute qualité qui génèrent des résultats concrets.",
      },
    },
  },

  // Projects Section
  projects: {
    title: 'Projets Phares',
    subtitle:
      'Faites défiler pour explorer les projets ou cliquez pour voir les détails',

    // Project metadata
    metadata: {
      duration: 'Durée',
      role: 'Rôle',
      features: 'Fonctionnalités Clés',
      technologies: 'Technologies',
      viewDetails: 'Voir les Détails',
      insights: 'Analyses',
      outcomes: 'Résultats',
    },

    // Individual Projects by ID
    'car-sharing-platform': {
      title: "Plateforme Intelligente d'Autopartage",
      brief:
        'Système de réservation de véhicules fluide avec vérifications de disponibilité en temps réel et flux de paiement intégrés.',
      description:
        "Une solution complète d'autopartage qui optimise l'utilisation des véhicules grâce à des algorithmes intelligents de planification et de routage. La plateforme gère tout, de l'inscription des utilisateurs et de la sélection des véhicules aux paiements et aux commentaires post-location.",
      keyFeatures: [
        'Suivi de la disponibilité des véhicules en temps réel avec intégration de géolocalisation',
        "Tarification intelligente basée sur la demande, l'emplacement et le type de véhicule",
        'Processus de réservation fluide avec confirmation instantanée',
        'Traitement sécurisé des paiements avec plusieurs options de paiement',
        'Profils utilisateurs complets avec système de vérification',
        "Système d'évaluation et de commentaires pour les locataires et les véhicules",
      ],
      insights: [
        "La mise en œuvre des mises à jour en temps réel a nécessité une gestion minutieuse de l'état dans toute l'application",
        "L'optimisation de l'algorithme de réservation a réduit le temps moyen de réservation de 40%",
        "Les services basés sur la localisation ont considérablement amélioré les indicateurs d'engagement des utilisateurs",
      ],
      outcomes: [
        "Augmentation de 30% du taux d'utilisation des véhicules",
        'Réduction des coûts opérationnels de 25% grâce aux processus automatisés',
        'Score de satisfaction client de 4,8/5 basé sur les enquêtes post-location',
      ],
      duration: '6 mois',
      role: 'Développeur Full Stack Principal',
    },
    'elearning-ecosystem': {
      title: 'Écosystème E-Learning',
      brief:
        'Portail éducatif tout-en-un gérant les inscriptions, les horaires, les devoirs et le suivi des progrès.',
      description:
        "Un système complet de gestion de l'apprentissage conçu pour les établissements d'enseignement afin de rationaliser leurs offres d'apprentissage numérique. La plateforme fournit une interface unifiée pour les administrateurs, les instructeurs et les étudiants pour gérer tous les aspects de l'éducation en ligne.",
      keyFeatures: [
        'Tableau de bord intuitif pour la création et la gestion de cours',
        "Sessions en direct interactives avec capacités d'enregistrement",
        'Système automatisé de distribution et de notation des devoirs',
        'Suivi des progrès avec analyses détaillées',
        'Salles de classe virtuelles avec outils de collaboration',
        'Bibliothèque de ressources avec recherche et filtrage',
      ],
      insights: [
        "La conception pour plusieurs rôles d'utilisateurs a nécessité une planification minutieuse des systèmes de permission",
        "L'optimisation du streaming vidéo était cruciale pour servir les utilisateurs avec des vitesses de connexion variables",
        "L'implémentation des fonctionnalités d'accessibilité dès le départ était plus efficace que la mise à niveau ultérieure",
      ],
      outcomes: [
        'Réduction de la charge administrative de 35%',
        "Augmentation de l'engagement des étudiants de 45% par rapport aux systèmes précédents",
        'Capacité à supporter plus de 10 000 utilisateurs simultanés',
      ],
      duration: '8 mois',
      role: 'Développeur Full Stack & Consultant UI/UX',
    },
    'visual-asset-hub': {
      title: "Hub d'Actifs Visuels",
      brief:
        'Application web avancée de gestion de photos avec balisage IA, téléchargements par lots et capacités de filtrage intelligent.',
      description:
        "Une plateforme sophistiquée de gestion d'actifs numériques qui utilise l'IA pour rationaliser l'organisation et la découverte de contenu visuel. Conçue pour les photographes, les spécialistes du marketing et les créateurs de contenu qui doivent gérer efficacement de grandes collections d'images.",
      keyFeatures: [
        "Balisage et catégorisation automatiques d'images par IA",
        'Recherche intelligente avec traitement du langage naturel',
        "Fonctionnalité de téléchargement et d'édition par lots",
        "Champs de métadonnées personnalisés et système d'organisation",
        "Contrôles d'accès basés sur les rôles et options de partage",
        "Intégration avec Adobe Creative Cloud et d'autres outils de conception",
      ],
      insights: [
        "L'implémentation du traitement d'images côté client a considérablement réduit la charge du serveur",
        "La décomposition du monolithe en microservices a amélioré l'évolutivité et la maintenance",
        'Les stratégies de mise en cache personnalisées ont réduit les appels API de 60%',
      ],
      outcomes: [
        'Temps de recherche moyen réduit de minutes à secondes',
        "Temps d'organisation des actifs diminué de 75% avec l'assistance IA",
        'Plateforme adoptée avec succès par plusieurs grandes agences de marketing',
      ],
      duration: '10 mois',
      role: 'Développeur Backend & Spécialiste Intégration IA',
    },
    'auto-rental-engine': {
      title: 'Moteur de Location Automobile',
      brief:
        'Système de réservation de véhicules fluide avec vérifications de disponibilité en temps réel et flux de paiement intégrés.',
      description:
        'Un puissant système de gestion de location construit spécifiquement pour les entreprises de location automobile, combinant la gestion des stocks, les systèmes de réservation et les outils de relation client en une plateforme complète.',
      keyFeatures: [
        'Gestion dynamique des stocks avec planification de maintenance',
        'Système de réservation avancé avec résolution de conflits',
        'Facturation automatisée et traitement des paiements',
        'Gestion des clients avec intégration de programme de fidélité',
        "Tableau de bord d'analyse avec informations sur l'intelligence d'affaires",
        'Application mobile pour la commodité des clients et les opérations de terrain',
      ],
      insights: [
        "L'implémentation d'une architecture headless a permis des expériences cohérentes sur le web et le mobile",
        'La conception axée sur les événements a considérablement amélioré la fiabilité du système',
        'Les tests automatisés ont réduit les rapports de bugs de 40% après le lancement',
      ],
      outcomes: [
        'Augmentation du taux de conversion des réservations de 28%',
        "Réduction des temps d'arrêt des véhicules de 35% grâce à la planification de maintenance préventive",
        "Économie de temps administratif de 20 heures par semaine grâce à l'automatisation",
      ],
      duration: '7 mois',
      role: 'Architecte Technique & Développeur Principal',
    },
  },

  // Skills Section
  skills: {
    title: 'Compétences Techniques',
    subtitle: 'Mon expertise dans les technologies frontend et backend',
    frontend: 'Développement Frontend',
    backend: 'Développement Backend',
  },

  // Contact Section
  contact: {
    title: 'Collaborons Ensemble',
    subtitle:
      "Prêt à construire quelque chose d'exceptionnel ? Contactez-moi dès maintenant pour des services de développement rapides et professionnels qui livrent des résultats.",
    form: {
      name: 'Votre nom',
      email: 'Votre email',
      message: 'Votre message',
      send: 'Envoyer le Message',
      sending: 'Envoi en cours...',
    },
    success: {
      title: 'Merci !',
      message:
        'Votre message a été envoyé avec succès.\nJe vous recontacterai bientôt.',
      button: "Retour à l'Accueil",
    },
    error: {
      title: 'Oups !',
      defaultMessage: "Échec de l'envoi de votre message. Veuillez réessayer.",
      button: 'Réessayer',
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
