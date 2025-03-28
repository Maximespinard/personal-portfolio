import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import PurpleBg from '../../assets/ui/purple-bg.svg'; // Assurez-vous que le chemin d'accès est correct

import useBreakPoint from '../../hooks/useBreakPoint';
import { experiences } from '../../utils/data';

import HomeExperienceCard from './HomeExperienceCard';

const HomeExperienceMobile = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {experiences.map((item, index) => (
        <SwiperSlide key={index}>
          <HomeExperienceCard item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
const HomeExperienceDesktop = () => {
  return (
    <div className="container mx-auto py-8 grid grid-cols-2 gap-4 max-w-800px relative">
      <div className="absolute inset-0 flex items-center justify-center z-[-1]">
        <PurpleBg />
      </div>
      {experiences.map((item, index) => (
        <HomeExperienceCard key={index} item={item} />
      ))}
    </div>
  );
};

const HomeExperience = () => {
  const { isDesktop } = useBreakPoint();
  return (
    <section className="relative z-0">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-5 md:mb-3 lg:text-left">
        Work Experience
      </h2>
      {!isDesktop ? <HomeExperienceMobile /> : <HomeExperienceDesktop />}
    </section>
  );
};

export default HomeExperience;
