import React from 'react';
import elipse from '../../assets/ui/elipse.png';
import { useLanguage } from '../../contexts';
import useBreakPoint from '../../hooks/useBreakPoint';
import { SlideFromLeft, FadeIn, SlideFromRight } from '../animations';
import ProfileImage from './ProfileImage';

const Introduction: React.FC = () => {
  const { t } = useLanguage();
  const { isMobile } = useBreakPoint();
  return (
    <div className="container mx-auto flex items-center justify-center">
      <div className="flex flex-col sm:flex-row items-center">
        <SlideFromRight
          duration={1}
          className="sm:ml-8 sm:relative mt-8 sm:mt-5 text-center sm:text-left sm:order-last"
        >
          <div className="flex flex-col">
            <FadeIn delay={0.2}>
              <span className="text-xl sm:absolute sm:-top-10 lg:-top-16 block">
                {t('hero.greeting')}
                <span className="text-main-purple"> {t('hero.name')}</span>
              </span>
            </FadeIn>
            <div className="mt-4 sm:mt-10 space-y-1 sm:space-y-2">
              <FadeIn delay={0.4} duration={1}>
                <p className="text-base md:text-base text-gray-300">
                  {t('hero.subtitle')}
                </p>
                <p
                  className="text-3xl font-bold md:text-5xl whitespace-nowrap custom-title-gradient"
                  role="heading"
                  aria-level={2}
                >
                  {t('hero.headline')}
                </p>
                <p className="text-4xl font-bold md:text-5xl relative custom-title-gradient">
                  {t('hero.accent').split(' ')[0]}{' '}
                  {t('hero.accent').split(' ')[1]}
                  <span className="relative inline-flex items-center whitespace-nowrap left-3 top-0.5">
                    <img
                      src={elipse}
                      alt="Ellipse"
                      className="absolute z-[3] right-9 w-[130px] sm:w-[150px] sm:right-6 md:right-16 h-auto"
                      width="150"
                      height="50"
                      style={{ objectFit: 'contain' }}
                    />
                    <span className="text-main-purple relative z-10 text-4xl md:text-5xl custom-title-gradient">
                      {t('hero.accent').split(' ')[2]}
                    </span>
                    <span className="text-4xl md:text-5xl md:relative md:top-1 md:left-1 custom-title-gradient">
                      ...
                    </span>
                  </span>
                </p>
                <p className="text-base mt-2 max-w-xs mx-auto sm:mx-0 text-gray-300">
                  {t('hero.tagline')}
                </p>
              </FadeIn>
            </div>
          </div>
        </SlideFromRight>
        <SlideFromLeft
          duration={1}
          className="relative flex flex-col items-center order-last sm:order-first sm:ml-8 mt-8 sm:mt-12"
        >
          <FadeIn delay={0.6}>
            {isMobile ? (
              <ProfileImage size="medium" />
            ) : (
              <ProfileImage size="large" />
            )}
          </FadeIn>
        </SlideFromLeft>
      </div>
    </div>
  );
};

export default Introduction;
