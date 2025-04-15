import React from 'react';
import { motion } from 'framer-motion';
import { FeaturedProject } from '../../types';
import { useLanguage } from '../../contexts';
import {
  CardIcon,
  CardTitle,
  CardDescription,
  FeaturesList,
  TechnologiesList,
  ViewDetailsButton,
} from './CardComponents';

interface CardFrontProps {
  project: FeaturedProject;
}

const CardFront: React.FC<CardFrontProps> = ({ project }) => {
  const { t } = useLanguage();
  const { id, icon, technologies = [] } = project;

  // We now use translation keys for all project text content
  const title = t(`projects.${id}.title`);
  const brief = t(`projects.${id}.brief`);
  const keyFeatures = Array(6).fill(''); // Just need the array length for mapping

  return (
    <motion.div
      className="absolute w-full h-full rounded-2xl backface-hidden group overflow-hidden"
      style={{
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
      }}
    >
      <div className="h-full bg-gradient-to-br from-[#1a0b2e] to-[#11071f] border border-[#2c1250] hover:border-[#7127ba]/20 hover:shadow-lg hover:shadow-[#7127ba]/10 transition-all duration-300 rounded-2xl p-5 md:p-6 flex flex-col relative overflow-hidden">
        {/* Background graphic elements */}
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-radial from-[#7127ba]/10 to-transparent rounded-full opacity-50 pointer-events-none"></div>
        <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-gradient-radial from-[#4f228d]/10 to-transparent rounded-full opacity-50 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#7127ba]/0 via-[#7127ba]/5 to-[#4f228d]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

        <div className="flex items-center gap-4 mb-4">
          <CardIcon icon={icon} />
          <CardTitle title={title} />
        </div>

        <CardDescription description={brief} />

        {keyFeatures.length > 0 && (
          <FeaturesList features={keyFeatures} projectId={id} />
        )}

        {technologies.length > 0 && (
          <TechnologiesList technologies={technologies} />
        )}

        <ViewDetailsButton />
      </div>
    </motion.div>
  );
};

export default CardFront;
