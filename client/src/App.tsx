// src/App.tsx
import React from 'react';
import NavBar from './components/navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import lazyLoad from './components/shared/LazyLoadComponent';
import { LanguageProvider } from './contexts/LanguageContext';

// Lazy load non-critical components
const CareerTimeline = lazyLoad(() => import('./components/CareerTimeline'));
const FeaturedProjects = lazyLoad(
  () => import('./components/FeaturedProjects')
);
const Skills = lazyLoad(() => import('./components/Skills'));
const ContactForm = lazyLoad(() => import('./components/Contact'));
const Footer = lazyLoad(() => import('./components/Footer'));

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="bg-main-background">
        <header>
          <NavBar />
        </header>
        <main className="min-h-screen overflow-hidden">
          <div className="py-6 px-10 sm:py-10 lg:px-20 2xl:px-[20%]">
            <div className="space-y-12">
              {/* Critical components that should load immediately */}
              <Hero />
              <Services />

              {/* Non-critical components that can be lazy loaded */}
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
    </LanguageProvider>
  );
};

export default App;
