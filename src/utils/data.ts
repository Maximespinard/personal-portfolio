import coffeeIcon from '../assets/icons/coffee-icon.png';
import lightBall from '../assets/icons/lightball.png';
import thing from '../assets/icons/thing.png';

export interface ExperienceItem {
  icon: string;
  title: string;
  description: string;
}

export const experience: ExperienceItem[] = [
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
