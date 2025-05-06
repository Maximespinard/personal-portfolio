import React, { useState } from 'react';
import { FeaturedProject } from '../../types';
import { featuredProjects as defaultProjects } from '../../utils/data';
import { useLanguage } from '../../contexts';
import { SlideUpOnScroll, FadeIn } from '../animations';
import ProjectCard from './ProjectCard';
import useBreakPoint from '../../hooks/useBreakPoint';

interface FeaturedProjectsProps {
  projects?: FeaturedProject[];
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  projects = defaultProjects,
}) => {
  const { t } = useLanguage();
  const [animated, setAnimated] = useState<Record<string, boolean>>({});
  const { isMobile } = useBreakPoint();

  // Animation for cards appearing one by one
  React.useEffect(() => {
    const timer = setTimeout(() => {
      projects.forEach((project, index) => {
        setTimeout(() => {
          setAnimated((prev) => ({ ...prev, [project.id]: true }));
        }, index * 200);
      });
    }, 300);

    return () => clearTimeout(timer);
  }, [projects]);

  return (
    <section id="projects-section" className="relative py-20 px-6 z-10">
      <SlideUpOnScroll className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
          {t('projects.title')}
        </h2>
        <FadeIn delay={0.2}>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            {t('projects.subtitle')}
          </p>
        </FadeIn>
      </SlideUpOnScroll>

      {isMobile ? (
        <div className="overflow-x-auto pb-8 hide-scrollbar">
          <div className="flex space-x-5 px-2">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`min-w-[300px] transition-all duration-700 ${
                  animated[project.id]
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
              >
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="sm:grid sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`transition-all duration-700 ${
                animated[project.id]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      )}
      {/* Desktop Grid View */}

      {/* Mobile Horizontal Scroll - Only for small screens */}
    </section>
  );
};

export default FeaturedProjects;
