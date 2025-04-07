import React from 'react';

export interface SkillBarProps {
  skill: {
    name: string;
    proficiency: number;
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  };
}

const SkillBar: React.FC<SkillBarProps> = ({ skill }) => (
  <div className="space-y-1">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        {skill.icon && <skill.icon className="w-5 h-5 text-purple-400" />}
        <span className="text-zinc-300">{skill.name}</span>
      </div>
      <span className="text-xs text-zinc-400">{skill.proficiency}%</span>
    </div>
    <div className="w-full bg-[#251c31] rounded-full h-2.5">
      <div
        className="bg-gradient-to-r from-[#7127ba] to-[#4f228d] h-2.5 rounded-full"
        style={{ width: `${skill.proficiency}%` }}
      />
    </div>
  </div>
);

export default SkillBar;
