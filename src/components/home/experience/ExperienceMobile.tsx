import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Pagination, Autoplay } from 'swiper/modules';
import { experiences } from '../../../utils/data';
import useSwiperNavigation from '../../../hooks/useSwiperNavigation';
import ArrowLeft from '../../../assets/icons/rest/arrow-left.svg';
import ArrowRight from '../../../assets/icons/rest/arrow-right.svg';
import ExperienceCard from './ExperienceCard';

const ExperienceMobile: React.FC = () => {
  useSwiperNavigation();

  return (
    <div className="px-4 py-2">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards, Pagination, Autoplay]}
        className="experience-swiper"
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        {experiences.map((item, index) => (
          <SwiperSlide
            key={index}
            className="experience-slide rounded-3xl overflow-hidden shadow-lg"
          >
            <ExperienceCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation buttons */}
      <div className="flex justify-center items-center gap-6 mt-6">
        <button className="swiper-custom-prev bg-button-bg border-2 border-button-border rounded-full p-3 text-white hover:bg-purple-900 transition-colors">
          <ArrowLeft />
        </button>
        <button className="swiper-custom-next bg-button-bg border-2 border-button-border rounded-full p-3 text-white hover:bg-purple-900 transition-colors">
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ExperienceMobile;
