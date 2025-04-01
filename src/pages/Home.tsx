import React from 'react';
import AboutMe from '../components/home/AboutMe.tsx';
import Header from '../components/home/Header.tsx';
import Experience from '../components/home/experience/index.tsx';
import Stacks from '../components/home/stacks/index.tsx';
import ProjectExamples from '../components/home/projectExample/index.tsx';
import ContactForm from '../components/home/contact/index.tsx';
import { FadeIn } from '../components/animations/FadeIn.tsx';
import PurpleBg from '../assets/ui/purple-bg.svg';

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
      <Experience />
      <Stacks />
      <ProjectExamples />
      <ContactForm />
    </div>
  );
};

export default Home;
