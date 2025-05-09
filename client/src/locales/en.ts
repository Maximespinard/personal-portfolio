export default {
  // Navigation
  nav: {
    home: 'Home',
    services: 'Services',
    journey: 'Journey',
    projects: 'Projects',
    skills: 'Skills',
    connect: 'Contact',
  },

  // Hero Section
  hero: {
    greeting: 'Hello! I am',
    name: 'Maxime Spinard',
    subtitle: 'A Developer who',
    headline: 'Builds solutions',
    accent: 'line by line',
    tagline: 'Because clean code today means scalable systems tomorrow.',
    cta: {
      projects: 'View Projects',
      hire: 'Hire Me',
    },
  },

  // Intro Showcase
  intro: {
    title: 'Transforming Ideas Into Digital Solutions',
    description:
      'From concept to deployment, I craft tailor-made web applications that solve real business challenges. My expertise spans the entire development lifecycle with a focus on creating scalable, maintainable solutions.',
  },

  // Services Section
  services: {
    title: 'Services Offered',
    subtitle: 'Transforming ideas into exceptional digital experiences',
    cta: "Let's Work Together",

    ecommerce: {
      title: 'E-Commerce Website',
      description:
        'A high-converting online store tailored to your brand. Fully responsive, secure, and built for performance.',
      price: 'Starting at €2500',
      features: [
        'Custom responsive design',
        'Integrated secure payments',
        'Easy-to-use admin panel',
      ],
      button: 'See Example',
    },

    portfolio: {
      title: 'Portfolio / Landing Page',
      description:
        'A sleek and high-performing site to showcase your brand, skills, SaaS product, or service offering.',
      price: 'Starting at €750',
      features: [
        'Clean responsive layout',
        'SEO-friendly architecture',
        'Clear call-to-action',
      ],
      button: 'See Example',
    },

    business: {
      title: 'Custom Business Tools',
      description:
        'Tailor-made web apps such as dashboards, CRMs, or workflow tools designed to solve real business problems.',
      price: 'Starting at €1750',
      features: [
        'Custom admin dashboards',
        'Authentication & user roles',
        'Workflow automation',
      ],
      button: 'See Example',
    },
  },

  // Career Section
  career: {
    title: 'Professional Path',
    subtitle:
      'My journey from exploring code to delivering enterprise solutions',

    // Career Stages
    stages: {
      foundations: {
        title: 'Self-Taught Foundations',
        description:
          'Started with frontend basics (HTML, CSS, JavaScript), building small websites and exploring UI libraries. Developed a passion for creating intuitive user experiences.',
      },
      fullstack: {
        title: 'Fullstack Evolution',
        description:
          'Expanded into backend development with Node.js, Express and MongoDB. Mastered the art of building full-stack applications and RESTful APIs.',
      },
      professional: {
        title: 'Professional Growth',
        description:
          'Led development teams on complex projects, implementing modern frameworks like React and Next.js. Refined skills in system architecture and project management.',
      },
      consultant: {
        title: 'Independent Consultant',
        description:
          'Now providing specialized development services for businesses needing custom web solutions. Focused on delivering high-quality, scalable applications that drive real results.',
      },
    },
  },

  // Projects Section
  projects: {
    title: 'Featured Projects',
    subtitle: 'Scroll to explore projects or click to view details',

    // Project metadata
    metadata: {
      duration: 'Duration',
      role: 'Role',
      features: 'Key Features',
      technologies: 'Technologies',
      viewDetails: 'View Details',
      insights: 'Insights',
      outcomes: 'Outcomes',
      more: 'more',
    },

    // Individual Projects by ID
    'car-sharing-platform': {
      title: 'Smart Car-Sharing Platform',
      description:
        'A comprehensive car-sharing solution that optimizes vehicle utilization through intelligent scheduling and routing algorithms. The platform handles everything from user registration and vehicle selection to payments and post-rental feedback.',
      keyFeatures: [
        'Real-time vehicle availability tracking with geolocation integration',
        'Intelligent pricing based on demand, location, and vehicle type',
        'Seamless booking process with instant confirmation',
        'Secure payment processing with multiple payment options',
        'Comprehensive user profiles with verification system',
        'Rating and review system for both renters and vehicles',
      ],
      insights: [
        'Implementing real-time updates required careful state management across the application',
        'Optimizing the booking algorithm reduced average booking time by 40%',
        'Location-based services significantly improved user engagement metrics',
      ],
      outcomes: [
        '30% increase in vehicle utilization rate',
        'Reduced operational costs by 25% through automated processes',
        'Customer satisfaction score of 4.8/5 based on post-rental surveys',
      ],
      duration: '+2 years',
      role: 'Front end Developer',
    },
    'elearning-ecosystem': {
      title: 'E-Learning Ecosystem',
      brief:
        'All-in-one education portal handling enrollments, schedules, assignments and progress tracking.',
      description:
        'A comprehensive learning management system designed for educational institutions to streamline their digital learning offerings. The platform provides a unified interface for administrators, instructors, and students to manage all aspects of online education.',
      keyFeatures: [
        'Intuitive course creation and management dashboard',
        'Automated homework distribution and grading system',
        'Comprehensive progress tracking with detailed analytics and parent access to grades',
        'Centralized resource library with upload capabilities for teachers and advanced search/filter options',
        'Yearly school cursus management with admin tools and student schedule visibility',
      ],
      insights: [
        'Designing for multiple user roles required careful planning of permission systems',
        'Tracking user engagement provided valuable insights for improving the platform experience',
        'Implementing accessibility features from the start was more efficient than retrofitting',
      ],
      outcomes: [
        '35% reduction in administrative workload',
        '45% increase in student engagement compared to previous systems',
        'Improved user satisfaction based on feedback from teachers, parents, and students',
      ],

      duration: '8 months',
      role: 'Full Stack Developer & UI/UX Consultant',
    },
    'visual-asset-hub': {
      title: 'Visual Asset Hub',
      brief:
        'Advanced photo management webapp, batch uploads and smart filtering capabilities.',
      description:
        'A powerful digital asset management platform built specifically for photographers, marketers, and content creators to efficiently organize, search, and access large collections of photos. Designed to streamline workflows and enhance collaboration.',

      keyFeatures: [
        'Automatic photo tagging and categorization for quick access',
        'Advanced search functionality with customizable filters and sorting options',
        'Bulk upload and batch editing tools for streamlined asset management',
        'Customizable metadata fields to enhance photo organization',
        'Role-based access controls with secure sharing settings',
        'Integration with Adobe Creative Cloud and other design tools for seamless editing',
      ],

      insights: [
        'Client-side image processing helped optimize server load and performance',
        'Switching to a microservices architecture improved system scalability and ease of updates',
        'Custom caching strategies reduced API calls by 60%, enhancing platform speed',
      ],

      outcomes: [
        'Search times reduced from minutes to seconds, speeding up workflow',
        'Photo organization time decreased by 75% thanks to efficient categorization tools',
        'Adopted by major photography studios and creative agencies for its performance and ease of use',
      ],
      duration: '10 months',
      role: 'Full Stack Developer',
    },
    'auto-rental-engine': {
      title: 'Auto Rental Engine',
      brief:
        'Seamless vehicle booking system with real-time availability checks and integrated payment flows.',
      description:
        'A powerful rental management system built specifically for auto rental businesses, combining inventory management, booking systems, and customer relationship tools in one comprehensive platform.',
      keyFeatures: [
        'Dynamic inventory management with maintenance scheduling',
        'Advanced booking system with conflict resolution',
        'Automated billing and payment processing',
        'Customer management with loyalty program integration',
        'Analytics dashboard with business intelligence insights',
        'Mobile app for customer convenience and field operations',
      ],
      insights: [
        'Implementing a headless architecture enabled consistent experiences across web and mobile',
        'Event-driven design significantly improved system reliability',
        'Automated testing reduced bug reports by 40% after launch',
      ],
      outcomes: [
        'Increased booking conversion rate by 28%',
        'Reduced vehicle downtime by 35% through preventive maintenance scheduling',
        'Administrative time savings of 20 hours per week through automation',
      ],
      duration: '7 months',
      role: 'Technical Architect & Lead Developer',
    },
  },

  // Skills Section
  skills: {
    title: 'Technical Skills',
    subtitle: 'My expertise across frontend and backend technologies',
    frontend: 'Frontend Development',
    backend: 'Backend Development',
  },

  // Contact Section
  contact: {
    title: "Let's Collaborate",
    subtitle:
      'Ready to build something exceptional? Contact me now for fast, professional development services that deliver results.',
    form: {
      name: 'Your name',
      email: 'Your email',
      message: 'Your message',
      send: 'Send Message',
      sending: 'Sending...',
    },
    success: {
      title: 'Thank You!',
      message:
        "Your message has been sent successfully.\nI'll get back to you soon.",
      button: 'Back to Home',
    },
    error: {
      title: 'Oops!',
      defaultMessage: 'Failed to send your message. Please try again.',
      button: 'Try Again',
    },
    validation: {
      name: {
        min: 'Name must be at least 2 characters',
        max: 'Name cannot exceed 50 characters',
        format: 'Name can only contain letters and spaces',
      },
      email: {
        required: 'Email is required',
        invalid: 'Invalid email address',
        max: 'Email cannot exceed 100 characters',
      },
      message: {
        min: 'Message must be at least 10 characters',
        max: 'Message cannot exceed 500 characters',
      },
    },
  },

  // Footer
  footer: {
    copyright: '© {year} Maxime Spinard. All rights reserved.',
    services: 'Services',
    journey: 'Journey',
    projects: 'Projects',
  },
};
