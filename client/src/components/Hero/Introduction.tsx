import React from 'react';
import { SlideFromLeft, FadeIn, SlideFromRight } from '../animations';
import meIcon from '../../assets/icons/rest/me-icon.png';
import meIconWebp from '../../assets/icons/rest/me-icon.webp';
import meIconAvif from '../../assets/icons/rest/me-icon.avif';
import elipse from '../../assets/ui/elipse.png';
import elipseWebp from '../../assets/ui/elipse.webp';
import OptimizedImage from '../common/OptimizedImage';

const Introduction: React.FC = () => {
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
                Hello! I am
                <span className="text-main-purple"> Maxime Spinard</span>
              </span>
            </FadeIn>
            <div className="mt-4 sm:mt-10 space-y-1 sm:space-y-2">
              <FadeIn delay={0.4} duration={1}>
                <p className="text-base md:text-base text-gray-300">
                  A Developer who
                </p>
                <p
                  className="text-3xl font-bold md:text-5xl whitespace-nowrap custom-title-gradient"
                  role="heading"
                  aria-level={2}
                >
                  Builds solutions
                </p>
                <p className="text-4xl font-bold md:text-5xl relative custom-title-gradient">
                  line by
                  <span className="relative inline-flex items-center whitespace-nowrap left-3 top-0.5">
                    <OptimizedImage
                      src={elipse}
                      alt="Ellipse"
                      className="absolute z-[3] right-2 w-[130px] sm:w-[150px] h-auto"
                      width={150}
                      height={30}
                      sources={[{ src: elipseWebp, type: 'image/webp' }]}
                    />
                    <span className="text-main-purple relative z-10 text-4xl md:text-5xl custom-title-gradient">
                      line
                    </span>
                    <span className="text-4xl md:text-5xl md:relative md:top-1 md:left-1 custom-title-gradient">
                      ...
                    </span>
                  </span>
                </p>
                <p className="text-base mt-2 max-w-xs mx-auto sm:mx-0 text-gray-300">
                  Because clean code today means scalable systems tomorrow.
                </p>
              </FadeIn>
            </div>
          </div>
        </SlideFromRight>
        <SlideFromLeft
          duration={1}
          className="relative flex flex-col items-center order-last sm:order-first sm:ml-8 mt-8 sm:mt-12"
        >
          <FadeIn delay={0.6} className="relative">
            <OptimizedImage
              src={meIcon}
              alt="Maxime Spinard"
              className="min-w-[180px] max-w-[180px] sm:min-w-[200px] sm:max-w-[200px] lg:min-w-[250px] lg:max-w-[250px]"
              width={250}
              height={250}
              sources={[
                { src: meIconAvif, type: 'image/avif' },
                { src: meIconWebp, type: 'image/webp' },
              ]}
            />
          </FadeIn>
        </SlideFromLeft>
      </div>
    </div>
  );
};

export default Introduction;
