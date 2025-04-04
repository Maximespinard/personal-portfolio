import React from 'react';
import { SlideUpOnScroll, FadeIn } from '../animations';
import ProjectCard from './ProjectCard';
import { FeaturedProject } from '../../types';
import { featuredProjects as defaultProjects } from '../../utils/data';

import CarSharingIcon from '../../assets/icons/rest/car-sharing.svg';
import ELearningIcon from '../../assets/icons/rest/elearning.svg';
import VisualHubIcon from '../../assets/icons/rest/visual-hub.svg';
import AutoRentalIcon from '../../assets/icons/rest/auto-rental.svg';

// Define props interface for FeaturedProjects component
interface FeaturedProjectsProps {
  projects?: FeaturedProject[];
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  projects = defaultProjects,
}) => {
  // Map of project IDs to their respective icons
  const projectIcons: Record<string, React.ReactNode> = {
    'car-sharing-platform': <CarSharingIcon />,
    'elearning-ecosystem': <ELearningIcon />,
    'visual-asset-hub': <VisualHubIcon />,
    'auto-rental-engine': <AutoRentalIcon />,
  };

  return (
    <section id="projects" className="relative z-10 sm:px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-indigo-900/10 rounded-full blur-3xl"></div>
      </div>

      <SlideUpOnScroll className="text-center mb-12 relative z-10">
        <h2 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
          Featured Projects
        </h2>
        <FadeIn delay={0.2}>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Click on a project to explore details
          </p>
        </FadeIn>
      </SlideUpOnScroll>

      <div className="max-w-5xl mx-auto relative z-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            icon={
              projectIcons[project.id] ||
              (index === 0 ? (
                <CarSharingIcon />
              ) : index === 1 ? (
                <ELearningIcon />
              ) : index === 2 ? (
                <VisualHubIcon />
              ) : (
                <AutoRentalIcon />
              ))
            }
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
