import React from 'react';
import { ProjectExample } from '../../../types/index';

interface ProjectImageProps {
  project: ProjectExample;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ project }) => {
  const { title, image } = project;

  if (!image) return null;

  return <img className="w-full" alt={title} src={image} />;
};

export default ProjectImage;
