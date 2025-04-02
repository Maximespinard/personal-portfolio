import React from 'react';
import { ExperienceItem } from '../../../types';
import { SlideUpOnScroll, FadeIn } from '../../animations';
import useBreakPoint from '../../../hooks/useBreakPoint';

const ExperienceCard: React.FC<{ item: ExperienceItem }> = ({ item }) => {
  const { isDesktop } = useBreakPoint();

  return (
    <SlideUpOnScroll className="bg-custom-gradient py-8 px-5 border-t-2 border-bright-purple rounded-3xl h-full">
      <div className="space-y-4 relative lg:flex lg:items-center lg:justify-center lg:space-x-4">
        {/* Icon at the top for mobile, left side for desktop */}
        <FadeIn delay={0.2}>
          <div
            className={`${isDesktop ? 'max-lg:hidden w-[150px]' : 'flex justify-center mb-4'}`}
          >
            <img
              src={item.icon}
              alt={`${item.title} icon`}
              className="rounded-full border-2 border-main-purple/30 w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] object-cover"
            />
          </div>
        </FadeIn>

        <div className="space-y-4 md:space-y-3 flex flex-col items-center lg:items-start">
          <FadeIn delay={0.3}>
            <h3 className="text-xl font-semibold text-center lg:text-left text-white">
              {item.title}
            </h3>

            <p className="text-sm text-center lg:text-left text-zinc-300 mt-2">
              {item.description}
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <button
              type="button"
              className="mt-4 w-fit px-6 py-3 md:px-10 bg-button-bg rounded-xl border-2 border-button-border uppercase
              transition-all duration-300
              hover:bg-purple-900 hover:scale-105 hover:border-button-border-hover
              active:scale-95 cursor-pointer text-xs font-medium"
            >
              Learn more
            </button>
          </FadeIn>
        </div>
      </div>
    </SlideUpOnScroll>
  );
};

export default ExperienceCard;
