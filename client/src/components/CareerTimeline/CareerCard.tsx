import React, { ReactNode } from 'react';
import CareerIcon from './CareerIcon';
import { CareerIconName } from '../../types';
import { useLanguage } from '../../contexts';

interface CareerCardProps {
  stageId: string;
  icon: CareerIconName;
  animationWrapper: React.FC<{
    delay: number;
    className?: string;
    children: ReactNode;
  }>;
  delay: number;
}

const CareerCard: React.FC<CareerCardProps> = ({
  stageId,
  icon,
  animationWrapper: AnimationWrapper,
  delay,
}) => {
  const { t } = useLanguage();

  // Get title and description from translations
  const title = t(`career.stages.${stageId}.title`);
  const description = t(`career.stages.${stageId}.description`);

  return (
    <AnimationWrapper
      delay={delay}
      className="bg-gradient-to-br from-[#1a0b2e] to-[#11071f] p-6 rounded-xl border border-[#2c1250]"
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-[#251c31] rounded-xl flex items-center justify-center mr-4">
          <CareerIcon name={icon} />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-zinc-400">{description}</p>
    </AnimationWrapper>
  );
};

export default CareerCard;
