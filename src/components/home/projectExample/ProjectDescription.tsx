import React from 'react';
import { FadeIn } from '../../animations';
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

      <FadeIn style={{ position: 'relative', zIndex: 30 }}>
        <div
          className={`project-card ${isSecondExample ? 'project-card-right' : ''}`}
        >
          <p className="relative z-10">{description}</p>
        </div>
      </FadeIn>
    </>
  );
};

export default ProjectDescription;
