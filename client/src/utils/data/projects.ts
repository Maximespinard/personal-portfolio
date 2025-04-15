import CarSharingIcon from '../../assets/icons/rest/car-sharing.svg';
import ELearningIcon from '../../assets/icons/rest/elearning.svg';
import VisualHubIcon from '../../assets/icons/rest/visual-hub.svg';
import AutoRentalIcon from '../../assets/icons/rest/auto-rental.svg';
import { FeaturedProject } from '../../types';

/**
 * Featured projects data
 * Note: Text content is stored in translation files (en.ts/fr.ts)
 * Access via t(`projects.${project.id}.title`) etc.
 */
export const featuredProjects: FeaturedProject[] = [
  {
    id: 'car-sharing-platform',
    icon: CarSharingIcon,
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
    demoUrl: 'https://car-sharing-demo.com',
  },
  {
    id: 'elearning-ecosystem',
    icon: ELearningIcon,
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
  },
  {
    id: 'visual-asset-hub',
    icon: VisualHubIcon,
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
    demoUrl: 'https://visual-asset-hub.com',
  },
  {
    id: 'auto-rental-engine',
    icon: AutoRentalIcon,
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
  },
];
