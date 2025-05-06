import React from 'react';
import { FeaturedProject } from '../../types';
import { useLanguage } from '../../contexts';
import { MotionDiv } from '../animations/MotionElement';
import {
  CardTitle,
  CardDescription,
  CloseButton,
  FullFeaturesList,
  FullTechnologiesList,
  ProjectMetadata,
  ProjectInsights,
  ProjectOutcomes,
} from './CardComponents';

interface CardBackProps {
  project: FeaturedProject;
}

const CardBack: React.FC<CardBackProps> = ({ project }) => {
  const { t } = useLanguage();
  const { id, technologies = [] } = project;

  const title = t(`projects.${id}.title`);
  const description = t(`projects.${id}.description`);
  const keyFeatures = Array(6).fill('');
  const insights = Array(3).fill('');
  const outcomes = Array(3).fill('');

  return (
    <MotionDiv
      className="absolute w-full h-full rounded-2xl backface-hidden overflow-auto"
      style={{
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        rotateY: 180,
        transformStyle: 'preserve-3d',
      }}
    >
      <div className="h-full bg-gradient-to-br from-[#1a0b2e] to-[#11071f] border-2 border-[#7127ba]/30 shadow-lg shadow-[#7127ba]/20 rounded-2xl p-5 md:p-6 flex flex-col relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-gradient-radial from-[#7127ba]/15 to-transparent rounded-full opacity-80 pointer-events-none"></div>
        <div className="absolute -left-10 -top-10 w-32 h-32 bg-gradient-radial from-[#4f228d]/10 to-transparent rounded-full opacity-50 pointer-events-none"></div>

        <div className="flex justify-between items-center mb-4">
          <CardTitle title={title} />
          <CloseButton />
        </div>

        <div className="overflow-y-auto flex-grow hide-scrollbar">
          <CardDescription description={description} />

          {keyFeatures.length > 0 && (
            <FullFeaturesList features={keyFeatures} projectId={id} />
          )}

          {technologies.length > 0 && (
            <FullTechnologiesList technologies={technologies} />
          )}

          <ProjectInsights insights={insights} projectId={id} />

          <ProjectOutcomes outcomes={outcomes} projectId={id} />

          <ProjectMetadata projectId={id} duration="duration" role="role" />
        </div>
      </div>
    </MotionDiv>
  );
};

export default CardBack;
