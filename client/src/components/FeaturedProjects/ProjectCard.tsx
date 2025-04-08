import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FeaturedProject } from '../../types';
import CardFront from './CardFront';
import CardBack from './CardBack';

interface ProjectCardProps {
  project: FeaturedProject;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isFlipped &&
        e.target instanceof Element &&
        !e.target.closest('.flip-card-content')
      ) {
        setIsFlipped(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isFlipped]);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="h-full perspective">
      <motion.div
        className="w-full h-full relative preserve-3d cursor-pointer flip-card-content"
        onClick={handleFlip}
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, easings: ['easeIn', 'easeOut'] }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <CardFront project={project} />
        <CardBack project={project} />
      </motion.div>
    </div>
  );
};

export default ProjectCard;
