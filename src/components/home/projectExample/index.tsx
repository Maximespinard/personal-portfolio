import React from 'react';
import { projectsData } from '../../../utils/data';
import {
  SlideUpOnScroll,
  SlideFromRight,
  FadeInOnScroll,
} from '../../animations';
import ProjectDescription from './ProjectDescription';
import ProjectImage from './ProjectImage';

const ProjectExamples: React.FC = () => {
  return (
    <div className="md:mt-25 space-y-10">
      {projectsData.map((project, index) => {
        const isSecondExample = index === 1;

        return (
          <SlideUpOnScroll
            key={index}
            delay={0.25}
            duration={0.5}
            className={`z-0 lg:flex ${isSecondExample ? 'lg:flex-row-reverse lg:text-right' : ''}`}
            style={{ position: 'relative' }}
          >
            {/* Content section */}
            <FadeInOnScroll
              delay={0.2}
              duration={1}
              className="lg:basis-1/2 relative z-20"
            >
              <ProjectDescription
                project={project}
                isSecondExample={isSecondExample}
              />
            </FadeInOnScroll>

            {/* Image section */}
            {project.image && (
              <SlideFromRight
                delay={0.3 + index * 0.1}
                className="relative mt-4 lg:w-1/2 z-10"
              >
                <ProjectImage project={project} />
                <div className="absolute inset-0 bg-purple-overlay-intense blend-multiply"></div>
              </SlideFromRight>
            )}
          </SlideUpOnScroll>
        );
      })}
    </div>
  );
};

export default ProjectExamples;
