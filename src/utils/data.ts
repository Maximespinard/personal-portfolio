import coffeeIcon from '../assets/icons/rest/coffee-icon.png';
import lightBall from '../assets/icons/rest/lightball.png';
import thing from '../assets/icons/rest/thing.png';

import CssIcon from '../assets/icons/stacks/css.svg';
import ExpressIcon from '../assets/icons/stacks/express.svg';
import FigmaIcon from '../assets/icons/stacks/figma.svg';
import HtmlIcon from '../assets/icons/stacks/html.svg';
import JavascriptIcon from '../assets/icons/stacks/javascript.svg';
import MongodbIcon from '../assets/icons/stacks/mongodb.svg';
import MuiIcon from '../assets/icons/stacks/mui.svg';
import NextjIcons from '../assets/icons/stacks/nextjs.svg';
import NodeIcon from '../assets/icons/stacks/node.svg';
import ReactIcon from '../assets/icons/stacks/react.svg';
import ReduxIcon from '../assets/icons/stacks/redux.svg';
import TailwindIcon from '../assets/icons/stacks/tailwind.svg';
import ViteJsIcon from '../assets/icons/stacks/vitejs.svg';

import ecommerceImage from '../assets/ui/ecommerce-example.png';
import portfolioImage from '../assets/ui/portfolio-example.png';

import {
  ExperienceItem,
  StackItem,
  ProjectExample,
  FeaturedProject,
} from '../types';

export const experiences: ExperienceItem[] = [
  {
    icon: coffeeIcon,
    title: 'Smart Car-Sharing Platform',
    description:
      'Seamless vehicle booking system with real-time availability checks and integrated payment flows.',
  },
  {
    icon: lightBall,
    title: 'E-Learning Ecosystem',
    description:
      'All-in-one education portal handling enrollments, schedules, assignments and progress tracking.',
  },
  {
    icon: thing,
    title: 'Visual Asset Hub',
    description:
      'Advanced photo management webapp with AI tagging, batch uploads and smart filtering capabilitiess.',
  },
  {
    icon: coffeeIcon,
    title: 'Auto Rental Engine',
    description:
      'Seamless vehicle booking system with real-time availability checks and integrated payment flows.',
  },
];

export const stacksData: StackItem[] = [
  {
    icon: ReactIcon,
    description: 'React',
  },
  {
    icon: NextjIcons,
    description: 'Next.js',
  },
  {
    icon: ViteJsIcon,
    description: 'Vite.js',
  },
  {
    icon: NodeIcon,
    description: 'Node.js',
  },
  {
    icon: ExpressIcon,
    description: 'Express.js',
  },
  {
    icon: MongodbIcon,
    description: 'MongoDB',
  },
  {
    icon: ReduxIcon,
    description: 'Redux Toolkit',
  },
  {
    icon: TailwindIcon,
    description: 'Tailwind CSS',
  },
  {
    icon: MuiIcon,
    description: 'Material UI',
  },
  {
    icon: FigmaIcon,
    description: 'Figma',
  },
  {
    icon: HtmlIcon,
    description: 'HTML5',
  },
  {
    icon: CssIcon,
    description: 'CSS3',
  },
  {
    icon: JavascriptIcon,
    description: 'JavaScript',
  },
];

export const projectsData: ProjectExample[] = [
  {
    title: 'Custom Online Stores',
    image: ecommerceImage,
    description: `Build conversion-focused shopping experiences with intuitive 
    product browsing, secure checkout flows, and mobile-first 
    design. Includes real-time inventory management and analytics 
    for smarter business decisions`,
  },
  {
    title: 'Digital Showcases',
    image: portfolioImage,
    description: `Elevate your work with clean, interactive portfolios. Highlight 
      projects through case studies, client testimonials, and immersive 
      galleries. Responsive design ensures your talent shines on any device.`,
  },
];

// Enhanced featured projects data with detailed information
export const featuredProjects: FeaturedProject[] = [
  {
    id: 'car-sharing-platform',
    title: 'Smart Car-Sharing Platform',
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
