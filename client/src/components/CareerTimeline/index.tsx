import React from 'react';
import { SlideFromLeft, SlideFromRight, SlideUpOnScroll } from '../animations';
import { careerStages } from '../../utils/data';
import { useLanguage } from '../../contexts';
import CareerCard from './CareerCard';

const CareerTimeline: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative z-10 sm:px-4" id="career-section">
      <SlideUpOnScroll className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
          {t('career.title')}
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          {t('career.subtitle')}
        </p>
      </SlideUpOnScroll>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {careerStages.map((stage, index) => {
            // Determine which animation to use based on position
            const AnimationWrapper =
              index % 2 === 0 ? SlideFromLeft : SlideFromRight;
            const delay = 0.1 * (index + 1);

            return (
              <CareerCard
                key={stage.id}
                stageId={stage.id}
                icon={stage.icon}
                animationWrapper={AnimationWrapper}
                delay={delay}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;
