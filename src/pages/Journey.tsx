import React from 'react';
import SkillsSpotlight from '../components/journey/SkillsSpotlight';
import Header from '../components/journey/Header';
import CareerTimeline from '../components/journey/CareerTimeline';
import FeaturedProjects from '../components/journey/FeaturedProjects';
import Services from '../components/journey/Services';
import BackgroundElements from '../components/journey/BackgroundElements';
import { useLocation, useNavigate } from 'react-router';

const Journey: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Function to handle clicking "Hire Me"
  const handleHireMeClick = (e: React.MouseEvent) => {
    e.preventDefault();

    // If already on homepage, just scroll to contact section
    if (location.pathname === '/') {
      const contactSection = document.getElementById('contact-section');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to homepage and then scroll to contact section after page loads
      navigate('/');
      // Use setTimeout to ensure the navigation completes and the element exists
      setTimeout(() => {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };
  return (
    <div className="space-y-16 relative">
      <Header handleHireMeClick={handleHireMeClick} />
      <CareerTimeline />
      <FeaturedProjects />
      <SkillsSpotlight />
      <Services />
      <BackgroundElements />
    </div>
  );
};

export default Journey;
