import React, { RefObject } from 'react';
import { FeaturedProject } from '../../types';
import ProjectCard from './ProjectCard';
import ScrollButton from './ScrollButton';

interface ProjectsScrollContainerProps {
  scrollContainerRef: RefObject<HTMLDivElement | null>;
  projects: FeaturedProject[];
}

const ProjectsScrollContainer: React.FC<ProjectsScrollContainerProps> = ({
  scrollContainerRef,
  projects,
}) => {
  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -350,
        behavior: 'smooth',
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 350,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative">
      {/* Scroll buttons */}
      <ScrollButton direction="left" onClick={handleScrollLeft} />
      <ScrollButton direction="right" onClick={handleScrollRight} />

      {/* Horizontal scrolling container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto pb-8 pt-2 scrollbar-hide snap-x snap-mandatory scroll-smooth"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <div className="flex space-x-6 px-4 md:px-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="min-w-[320px] sm:min-w-[380px] md:min-w-[420px] h-[500px] snap-start"
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsScrollContainer;
