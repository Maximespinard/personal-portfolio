import React from 'react';
import { SlideUpOnScroll } from '../animations';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <SlideUpOnScroll className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
        {title}
      </h2>
      <p className="text-zinc-300 max-w-2xl mx-auto text-lg">{subtitle}</p>
    </SlideUpOnScroll>
  );
};

export default SectionHeader;
