import React from 'react';
import NavBar from './components/navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import CareerTimeline from './components/CareerTimeline';
import FeaturedProjects from './components/FeaturedProjects';
import Skills from './components/Skills';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <div className="bg-main-background">
        <header>
          <NavBar />
        </header>
        <main className="min-h-screen overflow-hidden">
          <div className="py-6 px-10 sm:py-10 lg:px-20 2xl:px-[20%]">
            <div className="space-y-12">
              <Hero />
              <Services />
              <CareerTimeline />
              <FeaturedProjects />
              <Skills />
            </div>
          </div>
          {/* Contact form en dehors des paddings */}
          <ContactForm />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default App;
