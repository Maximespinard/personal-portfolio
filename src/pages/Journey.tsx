import React from 'react';
import { experiences } from '../utils/data';
import SkillsSpotlight from '../components/journey/SkillsSpotlight';
import Header from '../components/journey/Header';
import CareerTimeline from '../components/journey/CareerTimeline';
import FeaturedProjects from '../components/journey/FeaturedProjects';
import Services from '../components/journey/Services';
import BackgroundElements from '../components/journey/BackgroundElements';

const Journey: React.FC = () => {
  return (
    <div className="space-y-16 relative">
      <Header />
      <CareerTimeline />
      <FeaturedProjects experiences={experiences} />
      <SkillsSpotlight />
      <Services />
      <BackgroundElements />
    </div>
  );
};

export default Journey;
