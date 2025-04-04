import React from 'react';
import AboutMe from '../components/home/AboutMe.tsx';
import Header from '../components/home/Header.tsx';
import ContactForm from '../components/home/contact/index.tsx';
import { FadeIn } from '../components/animations/FadeIn.tsx';
import PurpleBg from '../assets/ui/purple-bg.svg';
import ProfileBanner from '../components/journey/ProfileBanner.tsx';
import Services from '../components/journey/Services.tsx';
import CareerTimeline from '../components/journey/CareerTimeline.tsx';
import FeaturedProjects from '../components/journey/FeaturedProjects.tsx';
import SkillsSpotlight from '../components/journey/SkillsSpotlight.tsx';

const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="relative md:min-h-[75vh] md:pt-10">
        <FadeIn className="absolute inset-0 top-0 z-0 pointer-events-none">
          <PurpleBg className="w-full h-full" />
        </FadeIn>
        {/* Content positioned relative to appear above the background */}
        <div className="relative z-10">
          <Header />
          <AboutMe />
        </div>
      </div>
      <ProfileBanner />
      <Services />
      <CareerTimeline />
      <FeaturedProjects />
      <SkillsSpotlight />
      <ContactForm />
    </div>
  );
};

export default Home;
