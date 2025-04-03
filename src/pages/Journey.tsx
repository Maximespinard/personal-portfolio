import React from 'react';
import {
  FadeIn,
  SlideFromLeft,
  SlideUpOnScroll,
} from '../components/animations';
import PurpleBg from '../assets/ui/purple-bg.svg';
import Timeline from '../components/journey/Timeline';
import ProjectDetails from '../components/journey/ProjectDetails';
import SkillsSpotlight from '../components/journey/SkillsSpotlight';

const Journey: React.FC = () => {
  return (
    <div className="space-y-20">
      <div className="relative md:min-h-[30vh] md:pt-10">
        <FadeIn className="absolute inset-0 top-0 z-0 pointer-events-none">
          <PurpleBg className="w-full h-full" />
        </FadeIn>

        {/* Header section */}
        <div className="relative z-10 text-center">
          <SlideFromLeft delay={0.2} className="mt-12">
            <h1 className="text-4xl md:text-5xl font-bold">My Journey</h1>
            <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
              From coding enthusiast to professional developer - a 7-year
              evolution
            </p>
          </SlideFromLeft>
        </div>
      </div>

      {/* Timeline section */}
      <SlideUpOnScroll className="relative z-10">
        <Timeline />
      </SlideUpOnScroll>

      {/* Project Details section */}
      <SlideUpOnScroll className="relative z-10">
        <ProjectDetails />
      </SlideUpOnScroll>

      {/* Skills Spotlight section */}
      <SlideUpOnScroll className="relative z-10">
        <SkillsSpotlight />
      </SlideUpOnScroll>
    </div>
  );
};

export default Journey;
