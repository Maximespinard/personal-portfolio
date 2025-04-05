import React from 'react';
import NavBar from './components/navigation';
import Hero from './components/Hero';
import IntroShowCase from './components/IntroShowcase';
import Services from './components/Services';
import CareerTimeline from './components/CareerTimeline';
import FeaturedProjects from './components/FeaturedProjects';
import Skills from './components/Skills';
import ContactForm from './components/Contact';

const App: React.FC = () => {
  return (
    <>
      <div className="bg-main-background">
        <header>
          <NavBar />
        </header>
        <main className="min-h-screen py-6 px-10 sm:p-20 md:px-30 lg:px-20 2xl:px-[20%] overflow-hidden">
          <div className="space-y-12">
            <Hero />
            <IntroShowCase />
            <Services />
            <CareerTimeline />
            <FeaturedProjects />
            <Skills />
            <ContactForm />
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
