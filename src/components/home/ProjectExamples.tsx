import React from 'react';
import { projectsData } from '../../utils/data';
import { ProjectExample } from '../../types/index';
import {
  SlideUpOnScroll,
  SlideFromLeft,
  SlideFromRight,
  HoverScale,
} from '../animations';

/**
 * Component that displays project examples with animations
 */
const ProjectExamples: React.FC = () => {
  return (
    <>
      {projectsData.map((project: ProjectExample, index: number) => {
        const { title, description, image } = project;
        const isSecondExample: boolean = index === 1;

        return (
          <SlideUpOnScroll
            key={index}
            delay={index * 0.1}
            className={`z-0 lg:flex ${isSecondExample ? 'lg:flex-row-reverse lg:text-right' : ''}`}
            style={{ position: 'relative' }} // Ensure parent establishes stacking context
          >
            {/* Content section */}
            {isSecondExample ? (
              <SlideFromRight
                delay={0.2}
                className="lg:basis-1/2 relative z-20" // Increased z-index
              >
                <p className="text-main-purple text-xl">Project example</p>
                <h5 className="text-4xl font-semibold mt-1">{title}</h5>

                <HoverScale
                  style={{ position: 'relative', zIndex: 30 }} // Explicitly set high z-index during hover
                >
                  <div
                    className={`lg:bg-main-background text-base p-3 lg:p-7 mt-2 lg:mt-10 lg:w-[115%] rounded-2xl relative lg:z-10 
                    backdrop-blur-sm shadow-xl border border-slate-700/50
                    lg:absolute lg:-left-20 lg:text-right`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 to-purple-900/20 rounded-2xl"></div>
                    <p className="relative z-10">{description}</p>
                  </div>
                </HoverScale>
              </SlideFromRight>
            ) : (
              <SlideFromLeft
                delay={0.2}
                className="lg:basis-1/2 relative z-20" // Increased z-index
              >
                <p className="text-main-purple text-xl">Project example</p>
                <h5 className="text-4xl font-semibold mt-1">{title}</h5>

                <HoverScale
                  style={{ position: 'relative', zIndex: 30 }} // Explicitly set high z-index during hover
                >
                  <div
                    className={`lg:bg-main-background text-base p-3 lg:p-7 mt-2 lg:mt-10 lg:w-[115%] rounded-2xl relative lg:z-10 
                    backdrop-blur-sm shadow-xl border border-slate-700/50`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 to-purple-900/20 rounded-2xl"></div>
                    <p className="relative z-10">{description}</p>
                  </div>
                </HoverScale>
              </SlideFromLeft>
            )}

            {/* Image section */}
            {image &&
              (isSecondExample ? (
                <SlideFromLeft
                  delay={0.3 + index * 0.1}
                  className="relative mt-4 lg:w-1/2 z-10" // Lower z-index than content
                >
                  <img className="w-full" alt={title} src={image} />
                  <div className="absolute inset-0 bg-purple-overlay-intense blend-multiply"></div>
                </SlideFromLeft>
              ) : (
                <SlideFromRight
                  delay={0.3 + index * 0.1}
                  className="relative mt-4 lg:w-1/2 z-10" // Lower z-index than content
                >
                  <img className="w-full" alt={title} src={image} />
                  <div className="absolute inset-0 bg-purple-overlay-intense blend-multiply"></div>
                </SlideFromRight>
              ))}
          </SlideUpOnScroll>
        );
      })}
    </>
  );
};

export default ProjectExamples;
