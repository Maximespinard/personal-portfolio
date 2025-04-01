import React from 'react';
import { HoverScale } from '../../animations';
import { ProjectExample } from '../../../types/index';

interface ProjectDescriptionProps {
  project: ProjectExample;
  isSecondExample: boolean;
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
  project,
  isSecondExample,
}) => {
  const { title, description } = project;

  return (
    <>
      <p className="text-main-purple text-xl">Project example</p>
      <h5 className="text-4xl font-semibold mt-1">{title}</h5>

      <HoverScale style={{ position: 'relative', zIndex: 30 }}>
        <div
          className={`lg:bg-main-background text-base p-3 lg:p-7 mt-2 lg:mt-10 lg:w-[115%] rounded-2xl relative lg:z-10 
          backdrop-blur-sm shadow-xl border border-slate-700/50
          ${isSecondExample ? 'lg:absolute lg:-left-20 lg:text-right' : ''}`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 to-purple-900/20 rounded-2xl"></div>
          <p className="relative z-10">{description}</p>
        </div>
      </HoverScale>
    </>
  );
};

export default ProjectDescription;
