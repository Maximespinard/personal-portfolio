import React from 'react';
import { SlideFromLeft, SlideFromRight, SlideUpOnScroll } from '../animations';
import { scrollToSection } from '../../utils/functions';
import { servicesData } from '../../utils/data';

// Imported components
import ServiceCard from './ServiceCard';
import BackgroundGrid from './BackgroundGrid';
import SectionHeader from './SectionHeader';
import CallToActionButton from './CallToActionButton';

const Services: React.FC = () => {
  const handleContactClick = () => {
    scrollToSection('contact-section');
  };

  return (
    <section
      className="relative z-10 md:py-10 lg:py-20 overflow-hidden"
      id="services-section"
    >
      {/* Background Grid with animations */}
      <BackgroundGrid />

      <div className="container mx-auto sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          title="Services Offered"
          subtitle="Transforming ideas into exceptional digital experiences"
        />

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map through service data with appropriate animations */}
          {servicesData.map((service, index) => {
            // Select the appropriate animation based on position
            const AnimationWrapper =
              index === 0
                ? SlideFromLeft
                : index === servicesData.length - 1
                  ? SlideFromRight
                  : SlideUpOnScroll;

            return (
              <AnimationWrapper key={service.id} delay={0.1 * (index + 1)}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                />
              </AnimationWrapper>
            );
          })}
        </div>

        {/* Call to Action Button */}
        <CallToActionButton
          onClick={handleContactClick}
          text="Let's Work Together"
        />
      </div>
    </section>
  );
};

export default Services;
