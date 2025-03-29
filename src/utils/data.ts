import coffeeIcon from '../assets/icons/coffee-icon.png';
import lightBall from '../assets/icons/lightball.png';
import thing from '../assets/icons/thing.png';

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

import { ExperienceItem, StackItem } from '../types';

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
