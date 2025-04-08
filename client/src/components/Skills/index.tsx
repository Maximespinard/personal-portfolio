import React from 'react';
import { SlideFromLeft } from '../animations';
import SkillCategory from './SkillCategory';
import { FRONTEND_SKILLS, BACKEND_SKILLS } from '../../utils/data';

const SkillsSpotlight: React.FC = () => (
  <section className="my-16">
    <SlideFromLeft className="mb-12 text-center">
      <h2 className="text-3xl font-bold custom-title-gradient">
        Technical Skills
      </h2>
      <p className="text-zinc-400 mt-2">
        My expertise across frontend and backend technologies
      </p>
    </SlideFromLeft>

    <div className="grid md:grid-cols-2 gap-6 mb-12">
      <SkillCategory title="Frontend Development" skills={FRONTEND_SKILLS} />
      <SkillCategory
        title="Backend Development"
        skills={BACKEND_SKILLS}
        isRight={true}
      />
    </div>
  </section>
);

export default SkillsSpotlight;
