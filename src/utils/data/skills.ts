import ReactIcon from '../../assets/icons/stacks/react.svg';
import NextjIcons from '../../assets/icons/stacks/nextjs.svg';
import ViteJsIcon from '../../assets/icons/stacks/vitejs.svg';
import NodeIcon from '../../assets/icons/stacks/node.svg';
import ExpressIcon from '../../assets/icons/stacks/express.svg';
import MongodbIcon from '../../assets/icons/stacks/mongodb.svg';
import ReduxIcon from '../../assets/icons/stacks/redux.svg';
import TailwindIcon from '../../assets/icons/stacks/tailwind.svg';
import { StackItem } from '../../types';

export const stacksData: StackItem[] = [
  {
    icon: ReactIcon,
    description: 'React',
    proficiency: 90,
    category: 'Frontend',
  },
  {
    icon: NextjIcons,
    description: 'Next.js',
    proficiency: 85,
    category: 'Frontend',
  },
  {
    icon: ViteJsIcon,
    description: 'Vite.js',
    proficiency: 75,
    category: 'Frontend',
  },
  {
    icon: NodeIcon,
    description: 'Node.js',
    proficiency: 85,
    category: 'Backend',
  },
  {
    icon: ExpressIcon,
    description: 'Express.js',
    proficiency: 80,
    category: 'Backend',
  },
  {
    icon: MongodbIcon,
    description: 'MongoDB',
    proficiency: 75,
    category: 'Backend',
  },
  {
    icon: ReduxIcon,
    description: 'Redux Toolkit',
    proficiency: 85,
    category: 'Frontend',
  },
  {
    icon: TailwindIcon,
    description: 'Tailwind CSS',
    proficiency: 95,
    category: 'Frontend',
  },
  {
    icon: undefined,
    description: 'Rest API',
    proficiency: 95,
    category: 'Backend',
  },
  {
    icon: undefined,
    description: 'SQL',
    proficiency: 95,
    category: 'Backend',
  },
];

export const FRONTEND_SKILLS = stacksData
  .filter((item) => item.category === 'Frontend')
  .map((item) => ({
    name: item.description,
    proficiency: item.proficiency,
    icon: item.icon,
  }));

export const BACKEND_SKILLS = stacksData
  .filter((item) => item.category === 'Backend')
  .map((item) => ({
    name: item.description,
    proficiency: item.proficiency,
    icon: item.icon,
  }));
