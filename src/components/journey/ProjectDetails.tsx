import React, { ComponentType, SVGProps, useState } from 'react';
import {
  SlideFromLeft,
  SlideUpOnScroll,
  FadeIn,
  HoverScale,
} from '../../components/animations';
import { projectsData } from '../../utils/data';
import StackItems from '../home/stacks/StackItems';

import ReactIcon from '../../assets/icons/stacks/react.svg';
import NextjsIcon from '../../assets/icons/stacks/nextjs.svg';
import TailwindIcon from '../../assets/icons/stacks/tailwind.svg';
import NodeIcon from '../../assets/icons/stacks/node.svg';
import MongodbIcon from '../../assets/icons/stacks/mongodb.svg';

interface ProjectTabProps {
  isActive: boolean;
  title: string;
  onClick: () => void;
}

const ProjectTab: React.FC<ProjectTabProps> = ({
  isActive,
  title,
  onClick,
}) => {
  return (
    <HoverScale scale={1.03}>
      <button
        onClick={onClick}
        className={`px-4 py-3 rounded-xl transition-all duration-200 ${
          isActive
            ? 'bg-gradient-to-r from-[#7127ba] to-[#4f228d] text-white font-medium border border-[#693b93]'
            : 'bg-[#1a0b2e] text-zinc-400 border border-[#2c1250]'
        }`}
      >
        {title}
      </button>
    </HoverScale>
  );
};

interface ProjectTech {
  name: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

interface ProjectDetailData {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: ProjectTech[];
  challenges: string[];
  role: string;
  outcome: string;
}

const ProjectDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Extended project data with more details
  const extendedProjectData: ProjectDetailData[] = [
    {
      id: 0,
      title: projectsData[0].title,
      description: projectsData[0].description,
      image: projectsData[0].image,
      technologies: [
        { name: 'React', icon: ReactIcon },
        { name: 'Node.js', icon: NodeIcon },
        { name: 'MongoDB', icon: MongodbIcon },
        { name: 'Tailwind CSS', icon: TailwindIcon },
      ],
      challenges: [
        'Implementing a secure payment gateway integration',
        'Building a responsive product catalog with filtering options',
        'Creating an intuitive admin dashboard for inventory management',
      ],
      role: 'As the lead developer, I designed the architecture, implemented the frontend components, and connected them to a RESTful API backend.',
      outcome:
        'Delivered a fully functional e-commerce solution that increased client sales by 35% and improved customer engagement metrics.',
    },
    {
      id: 1,
      title: projectsData[1].title,
      description: projectsData[1].description,
      image: projectsData[1].image,
      technologies: [
        { name: 'Next.js', icon: NextjsIcon },
        { name: 'React', icon: ReactIcon },
        { name: 'Tailwind CSS', icon: TailwindIcon },
      ],
      challenges: [
        'Creating smooth, interactive animations for project showcases',
        'Optimizing image loading for fast performance',
        'Designing an intuitive contact form with validation',
      ],
      role: 'I handled both design and development, focusing on creating a visually stunning portfolio that showcases projects effectively.',
      outcome:
        'The portfolio significantly improved client acquisition, with a 40% increase in project inquiries and positive feedback on the design.',
    },
  ];

  const activeProject = extendedProjectData[activeTab];

  return (
    <section className="my-16">
      <SlideFromLeft className="mb-12 text-center">
        <h2 className="text-3xl font-bold">Project Showcase</h2>
        <p className="text-zinc-400 mt-2">Detailed look at selected projects</p>
      </SlideFromLeft>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {extendedProjectData.map((project, index) => (
          <ProjectTab
            key={project.id}
            isActive={activeTab === index}
            title={project.title}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </div>

      <SlideUpOnScroll className="bg-gradient-to-br from-[#1a0b2e] to-[#11071f] rounded-3xl shadow-2xl p-6 md:p-10 border border-[#2c1250]">
        <div className="grid md:grid-cols-2 gap-8">
          <FadeIn className="space-y-6">
            <h3 className="text-2xl font-bold">{activeProject.title}</h3>
            <p className="text-zinc-300">{activeProject.description}</p>

            <div>
              <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
              <div className="mb-6">
                <StackItems
                  stacks={activeProject.technologies.map((tech) => ({
                    icon: tech.icon,
                    description: tech.name,
                  }))}
                />
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3">My Role</h4>
              <p className="text-zinc-400">{activeProject.role}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3">Outcome</h4>
              <p className="text-zinc-400">{activeProject.outcome}</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="space-y-6">
            <div className="rounded-xl overflow-hidden mb-6">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-auto rounded-xl border border-[#2c1250]"
              />
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3">Key Challenges</h4>
              <ul className="space-y-2 text-zinc-400">
                {activeProject.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-purple-400">•</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </SlideUpOnScroll>
    </section>
  );
};

export default ProjectDetails;
