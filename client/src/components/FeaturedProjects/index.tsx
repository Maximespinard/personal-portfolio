import React, { useRef } from 'react';
import { FeaturedProject } from '../../types';
import { featuredProjects as defaultProjects } from '../../utils/data';

import { SlideUpOnScroll, FadeIn } from '../animations';
import ProjectsScrollContainer from './ProjectsScrollContainer';

interface FeaturedProjectsProps {
  projects?: FeaturedProject[];
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  projects = defaultProjects,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="projects-section" className="relative z-10 sm:px-4">
      <SlideUpOnScroll className="text-center mb-12 relative z-10">
        <h2 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
          Featured Projects
        </h2>
        <FadeIn delay={0.2}>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Scroll to explore projects or click to view details
          </p>
        </FadeIn>
      </SlideUpOnScroll>

      <div className="relative max-w-full mx-auto">
        <ProjectsScrollContainer
          scrollContainerRef={scrollContainerRef}
          projects={projects}
        />
      </div>
    </section>
  );
};

export default FeaturedProjects;
