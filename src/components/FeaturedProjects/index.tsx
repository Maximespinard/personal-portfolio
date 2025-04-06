import React, { useRef } from 'react';
import { SlideUpOnScroll, FadeIn, HoverScale } from '../animations';
import ProjectCard from './ProjectCard';
import { FeaturedProject } from '../../types';
import { featuredProjects as defaultProjects } from '../../utils/data';

import CarSharingIcon from '../../assets/icons/rest/car-sharing.svg';
import ELearningIcon from '../../assets/icons/rest/elearning.svg';
import VisualHubIcon from '../../assets/icons/rest/visual-hub.svg';
import AutoRentalIcon from '../../assets/icons/rest/auto-rental.svg';

interface FeaturedProjectsProps {
  projects?: FeaturedProject[];
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  projects = defaultProjects,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Map of project IDs to their respective icons
  const projectIcons: Record<string, React.ReactNode> = {
    'car-sharing-platform': <CarSharingIcon />,
    'elearning-ecosystem': <ELearningIcon />,
    'visual-asset-hub': <VisualHubIcon />,
    'auto-rental-engine': <AutoRentalIcon />,
  };

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="projects-section" className="relative z-10 sm:px-4">
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
            Scroll to explore projects or click to view details
          </p>
        </FadeIn>
      </SlideUpOnScroll>

      <div className="relative max-w-full mx-auto">
        {/* Horizontal scrolling container with absolute positioned buttons */}
        <div className="relative">
          {/* Left scroll button - positioned outside the cards */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 -translate-x-5 lg:-translate-x-10">
            <HoverScale>
              <button
                onClick={handleScrollLeft}
                className="bg-[#251c31] border border-[#4f228d] rounded-full p-2 md:p-3 text-white shadow-lg hover:bg-[#2c1250] transition-colors"
                aria-label="Scroll left"
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            </HoverScale>
          </div>

          {/* Right scroll button - positioned outside the cards */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 translate-x-5 lg:translate-x-10">
            <HoverScale>
              <button
                onClick={handleScrollRight}
                className="bg-[#251c31] border border-[#4f228d] rounded-full p-2 md:p-3 text-white shadow-lg hover:bg-[#2c1250] transition-colors"
                aria-label="Scroll right"
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </HoverScale>
          </div>

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
                  <ProjectCard
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
