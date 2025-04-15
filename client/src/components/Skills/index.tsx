import React from 'react';
import { FRONTEND_SKILLS, BACKEND_SKILLS } from '../../utils/data';
import { useLanguage } from '../../contexts';
import { SlideFromLeft } from '../animations';
import SkillCategory from './SkillCategory';

const SkillsSpotlight: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="my-16">
      <SlideFromLeft className="mb-12 text-center">
        <h2 className="text-3xl font-bold custom-title-gradient">
          {t('skills.title')}{' '}
        </h2>
        <p className="text-zinc-400 mt-2">{t('skills.subtitle')} </p>
      </SlideFromLeft>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <SkillCategory title={t('skills.frontend')} skills={FRONTEND_SKILLS} />
        <SkillCategory
          title={t('skills.backend')}
          skills={BACKEND_SKILLS}
          isRight={true}
        />
      </div>
    </section>
  );
};

export default SkillsSpotlight;
