import React from 'react';
import AboutMe from '../components/home/AboutMe.tsx';
import Header from '../components/home/Header.tsx';
import Experience from '../components/home/Experience.tsx';
import Stacks from '../components/home/Stacks.tsx';
import ProjectExamples from '../components/home/ProjectExamples.tsx';
import ContactForm from '../components/home/ContactForm.tsx';
import PurpleBg from '../assets/ui/purple-bg.svg';

const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="relative md:min-h-[75vh] md:pt-10">
        <div className="absolute inset-0 top-0 z-0 pointer-events-none">
          <PurpleBg className="w-full h-full" />
        </div>
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
