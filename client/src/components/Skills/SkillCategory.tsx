import React from 'react';
import { SlideFromLeft, SlideFromRight } from '../animations';
import SkillBar, { SkillBarProps } from './SkillBar';

interface SkillCategoryProps {
  title: string;
  skills: SkillBarProps['skill'][];
  isRight?: boolean;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({
  title,
  skills,
  isRight = false,
}) => {
  const Animation = isRight ? SlideFromRight : SlideFromLeft;

  return (
    <Animation
      delay={0.2}
      className="bg-gradient-to-br from-[#1a0b2e] to-[#11071f] rounded-2xl p-6 shadow-xl border border-[#2c1250]"
    >
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <SkillBar key={index} skill={skill} />
        ))}
      </div>
    </Animation>
  );
};

export default SkillCategory;
