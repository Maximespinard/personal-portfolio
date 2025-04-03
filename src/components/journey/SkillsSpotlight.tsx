import React from 'react';
import {
  SlideFromLeft,
  SlideFromRight,
  HoverScale,
} from '../../components/animations';
import { stacksData } from '../../utils/data';

interface SkillCategoryProps {
  title: string;
  skills: {
    name: string;
    proficiency: number; // 1-100
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  }[];
  isRight?: boolean;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({
  title,
  skills,
  isRight = false,
}) => {
  const AnimationComponent = isRight ? SlideFromRight : SlideFromLeft;

  return (
    <AnimationComponent
      delay={0.2}
      className="bg-gradient-to-br from-[#1a0b2e] to-[#11071f] rounded-2xl p-6 shadow-xl border border-[#2c1250]"
    >
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {skill.icon && (
                  <skill.icon className="w-5 h-5 text-purple-400" />
                )}
                <span className="text-zinc-300">{skill.name}</span>
              </div>
              <span className="text-xs text-zinc-400">
                {skill.proficiency}%
              </span>
            </div>
            <div className="w-full bg-[#251c31] rounded-full h-2.5">
              <div
                className="bg-gradient-to-r from-[#7127ba] to-[#4f228d] h-2.5 rounded-full"
                style={{ width: `${skill.proficiency}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </AnimationComponent>
  );
};

interface AchievementProps {
  icon: string;
  title: string;
  value: string | number;
}

const Achievement: React.FC<AchievementProps> = ({ icon, title, value }) => {
  return (
    <HoverScale className="bg-[#1a0b2e] rounded-xl p-6 border border-[#2c1250] text-center">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 bg-gradient-to-br from-[#7127ba] to-[#4f228d] rounded-full flex items-center justify-center mb-4">
          <span className="text-white text-xl">{icon}</span>
        </div>
        <span className="text-3xl font-bold text-white mb-1">{value}</span>
        <span className="text-zinc-400 text-sm">{title}</span>
      </div>
    </HoverScale>
  );
};

const SkillsSpotlight: React.FC = () => {
  return (
    <section className="my-16">
      <SlideFromLeft className="mb-12 text-center">
        <h2 className="text-3xl font-bold">Skills & Achievements</h2>
        <p className="text-zinc-400 mt-2">
          Technical expertise and professional highlights
        </p>
      </SlideFromLeft>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <SkillCategory
          title="Frontend Development"
          skills={[
            { name: 'React', proficiency: 90, icon: stacksData[0].icon },
            { name: 'Next.js', proficiency: 85, icon: stacksData[1].icon },
            { name: 'Tailwind CSS', proficiency: 95, icon: stacksData[7].icon },
            { name: 'JavaScript', proficiency: 95, icon: stacksData[12].icon },
            { name: 'HTML/CSS', proficiency: 90 },
          ]}
        />

        <SkillCategory
          title="Backend Development"
          skills={[
            { name: 'Node.js', proficiency: 85, icon: stacksData[3].icon },
            { name: 'Express', proficiency: 80, icon: stacksData[4].icon },
            { name: 'MongoDB', proficiency: 75, icon: stacksData[5].icon },
            { name: 'RESTful APIs', proficiency: 90 },
            { name: 'SQL', proficiency: 70 },
          ]}
          isRight={true}
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Achievement icon="🚀" title="Projects Completed" value="25+" />
        <Achievement icon="⏱️" title="Years Experience" value="7+" />
        <Achievement icon="👥" title="Happy Clients" value="20+" />
        <Achievement icon="🔄" title="Daily Deployments" value="3+" />
      </div>
    </section>
  );
};

export default SkillsSpotlight;
