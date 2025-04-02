import { useEffect } from 'react';

interface SwiperInstance {
  slidePrev: () => void;
  slideNext: () => void;
}

interface SwiperElement extends HTMLElement {
  swiper?: SwiperInstance;
}

const useSwiperNavigation = (
  prevButtonClass: string = '.swiper-custom-prev',
  nextButtonClass: string = '.swiper-custom-next',
  swiperClass: string = '.experience-swiper'
): void => {
  useEffect(() => {
    let swiper: SwiperInstance | null = null;

    const prevButton = document.querySelector(prevButtonClass);
    const nextButton = document.querySelector(nextButtonClass);

    const interval = setInterval(() => {
      const swiperElement = document.querySelector(
        swiperClass
      ) as SwiperElement | null;

      if (swiperElement && swiperElement.swiper) {
        swiper = swiperElement.swiper;
        clearInterval(interval);

        if (prevButton) {
          const slidePrev = () => swiper!.slidePrev();
          prevButton.addEventListener('click', slidePrev);
        }

        if (nextButton) {
          const slideNext = () => swiper!.slideNext();
          nextButton.addEventListener('click', slideNext);
        }
      }
    }, 100);

    return () => {
      clearInterval(interval);

      if (prevButton && swiper) {
        const slidePrev = () => swiper?.slidePrev();
        prevButton.removeEventListener('click', slidePrev);
      }

      if (nextButton && swiper) {
        const slideNext = () => swiper?.slideNext();
        nextButton.removeEventListener('click', slideNext);
      }
    };
  }, [prevButtonClass, nextButtonClass, swiperClass]);
};

export default useSwiperNavigation;
