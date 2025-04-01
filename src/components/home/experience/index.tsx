import React from 'react';
import PurpleBg from '../../../assets/ui/purple-bg.svg';
import useBreakPoint from '../../../hooks/useBreakPoint';
import { experiences } from '../../../utils/data';
import ExperienceCard from './ExperienceCard';
import { SlideUp } from '../../animations';

// Import the enhanced mobile component
import ExperienceMobile from './ExperienceMobile';

const ExperienceDesktop: React.FC = () => {
  return (
    <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl relative">
      <div className="absolute inset-0 flex items-center justify-center z-[-1] opacity-70">
        <PurpleBg />
      </div>
      {experiences.map((item, index) => (
        <ExperienceCard key={index} item={item} />
      ))}
    </div>
  );
};

const Experience: React.FC = () => {
  const { isDesktop } = useBreakPoint();

  return (
    <section className="relative z-0 mt-16">
      <SlideUp duration={0.75} delay={0.5}>
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 lg:text-left lg:ml-4">
          Work Experience
        </h2>
      </SlideUp>

      <div className="relative">
        {!isDesktop ? <ExperienceMobile /> : <ExperienceDesktop />}
      </div>
    </section>
  );
};

export default Experience;
