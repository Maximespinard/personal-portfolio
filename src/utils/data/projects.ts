import CarSharingIcon from '../../assets/icons/rest/car-sharing.svg';
import ELearningIcon from '../../assets/icons/rest/elearning.svg';
import VisualHubIcon from '../../assets/icons/rest/visual-hub.svg';
import AutoRentalIcon from '../../assets/icons/rest/auto-rental.svg';
import { FeaturedProject } from '../../types';

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'car-sharing-platform',
    title: 'Smart Car-Sharing Platform',
    icon: CarSharingIcon,
    brief:
      'Seamless vehicle booking system with real-time availability checks and integrated payment flows.',
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
    technologies: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Redux',
      'Stripe API',
      'Google Maps API',
      'Socket.io',
      'JWT Authentication',
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
    duration: '6 months',
    role: 'Lead Full Stack Developer',
    demoUrl: 'https://car-sharing-demo.com',
  },
  {
    id: 'elearning-ecosystem',
    title: 'E-Learning Ecosystem',
    icon: ELearningIcon,
    brief:
      'All-in-one education portal handling enrollments, schedules, assignments and progress tracking.',
    description:
      'A comprehensive learning management system designed for educational institutions to streamline their digital learning offerings. The platform provides a unified interface for administrators, instructors, and students to manage all aspects of online education.',
    keyFeatures: [
      'Intuitive course creation and management dashboard',
      'Interactive live sessions with recording capabilities',
      'Automated assignment distribution and grading system',
      'Progress tracking with detailed analytics',
      'Virtual classrooms with collaboration tools',
      'Resource library with search and filtering capabilities',
    ],
    technologies: [
      'React',
      'Next.js',
      'Node.js',
      'PostgreSQL',
      'WebRTC',
      'Material UI',
      'AWS S3',
      'SendGrid API',
    ],
    insights: [
      'Designing for multiple user roles required careful planning of permission systems',
      'Video streaming optimization was crucial for serving users with varying connection speeds',
      'Implementing accessibility features from the start was more efficient than retrofitting',
    ],
    outcomes: [
      'Reduced administrative workload by 35%',
      'Increased student engagement by 45% compared to previous systems',
      'Successfully scaled to support 10,000+ concurrent users',
    ],
    duration: '8 months',
    role: 'Full Stack Developer & UI/UX Consultant',
  },
  {
    id: 'visual-asset-hub',
    title: 'Visual Asset Hub',
    icon: VisualHubIcon,
    brief:
      'Advanced photo management webapp with AI tagging, batch uploads and smart filtering capabilities.',
    description:
      'A sophisticated digital asset management platform that leverages AI to streamline the organization and discovery of visual content. Built for photographers, marketers, and content creators who need to efficiently manage large collections of images.',
    keyFeatures: [
      'AI-powered automatic image tagging and categorization',
      'Smart search with natural language processing',
      'Batch upload and editing functionality',
      'Custom metadata fields and organization system',
      'Role-based access controls and sharing options',
      'Integration with Adobe Creative Cloud and other design tools',
    ],
    technologies: [
      'React',
      'Redux',
      'Node.js',
      'Express',
      'MongoDB',
      'TensorFlow.js',
      'AWS Rekognition',
      'Cloudinary API',
      'GraphQL',
    ],
    insights: [
      'Implementing client-side image processing significantly reduced server load',
      'Breaking the monolith into microservices improved scalability and maintenance',
      'Custom caching strategies reduced API calls by 60%',
    ],
    outcomes: [
      'Average search time reduced from minutes to seconds',
      'Asset organization time decreased by 75% with AI assistance',
      'Platform successfully adopted by several major marketing agencies',
    ],
    duration: '10 months',
    role: 'Backend Developer & AI Integration Specialist',
    demoUrl: 'https://visual-asset-hub.com',
  },
  {
    id: 'auto-rental-engine',
    title: 'Auto Rental Engine',
    icon: AutoRentalIcon,
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
    technologies: [
      'React Native',
      'Redux',
      'Node.js',
      'MongoDB',
      'Express',
      'Stripe API',
      'AWS Lambda',
      'Twilio API',
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
];
