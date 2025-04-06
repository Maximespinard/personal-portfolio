import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HoverScale } from '../animations';
import { FeaturedProject } from '../../types';

interface ProjectCardProps {
  project: FeaturedProject;
  index: number;
  icon: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, icon }) => {
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

  const previewTechnologies = project.technologies?.slice(0, 4) || [];

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
        {/* Front Side */}
        <motion.div
          className="absolute w-full h-full rounded-2xl backface-hidden group overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          <div className="h-full bg-gradient-to-br from-[#1a0b2e] to-[#11071f] border border-[#2c1250] hover:border-[#7127ba]/20 hover:shadow-lg hover:shadow-[#7127ba]/10 transition-all duration-300 rounded-2xl p-5 md:p-6 flex flex-col relative overflow-hidden">
            {/* Background graphic element */}
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-radial from-[#7127ba]/10 to-transparent rounded-full opacity-50 pointer-events-none"></div>
            <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-gradient-radial from-[#4f228d]/10 to-transparent rounded-full opacity-50 pointer-events-none"></div>
            {/* Glow effect on hover */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#7127ba]/0 via-[#7127ba]/5 to-[#4f228d]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            <div className="flex items-center gap-4 mb-4">
              {/* Icon Section */}
              <div className="flex-shrink-0">
                <HoverScale scale={1.05}>
                  <div className="p-2 rounded-xl bg-transparent transition-all duration-300">
                    {icon}
                  </div>
                </HoverScale>
              </div>

              {/* Title */}
              <div>
                <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
                  {project.title}
                </h3>
              </div>
            </div>

            {/* Brief description */}
            <p className="text-zinc-400 mb-4 line-clamp-2">
              {project.brief || project.description}
            </p>

            {/* Key Features Preview */}
            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-purple-300 mb-2">
                  Key Features
                </h4>
                <ul className="space-y-1">
                  {project.keyFeatures.slice(0, 2).map((feature, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <span className="text-purple-400 mr-2">•</span>
                      <span className="text-zinc-300 line-clamp-1">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            {previewTechnologies.length > 0 && (
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {previewTechnologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-[#251c31] rounded-full text-xs text-white"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies && project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-[#251c31] rounded-full text-xs text-white">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Flip Button */}
            <div className="mt-auto">
              <HoverScale scale={1.05}>
                <button className="w-full px-4 py-2 bg-gradient-to-r from-[#251c31] to-[#2c1250] border border-[#4f228d] rounded-lg text-white text-sm font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-[#2c1250] hover:to-[#3d1a68] hover:border-[#7127ba]/40 hover:shadow-md hover:shadow-[#7127ba]/20 group">
                  <span className="inline-flex items-center">
                    View Details
                    <svg
                      className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </button>
              </HoverScale>
            </div>
          </div>
        </motion.div>

        {/* Back Side */}
        <motion.div
          className="absolute w-full h-full rounded-2xl backface-hidden overflow-auto"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            rotateY: 180,
            transformStyle: 'preserve-3d',
          }}
        >
          <div className="h-full bg-gradient-to-br from-[#1a0b2e] to-[#11071f] border-2 border-[#7127ba]/30 shadow-lg shadow-[#7127ba]/20 rounded-2xl p-5 md:p-6 flex flex-col relative overflow-hidden">
            {/* Back side decorative elements */}
            <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-gradient-radial from-[#7127ba]/15 to-transparent rounded-full opacity-80 pointer-events-none"></div>
            <div className="absolute -left-10 -top-10 w-32 h-32 bg-gradient-radial from-[#4f228d]/10 to-transparent rounded-full opacity-50 pointer-events-none"></div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
                {project.title}
              </h3>
              <HoverScale scale={1.1}>
                <button
                  className="p-2 rounded-full bg-[#251c31] text-white hover:bg-[#2c1250] transition-colors border border-[#4f228d]/50 shadow-sm"
                  aria-label="Close details"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </HoverScale>
            </div>

            {/* Project details */}
            <div className="overflow-y-auto flex-grow hide-scrollbar">
              {/* Description */}
              <p className="text-zinc-300 leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Key Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-purple-300 mb-2">
                  Key Features
                </h4>
                <ul className="space-y-1">
                  {project.keyFeatures?.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <span className="text-purple-400 mr-2">•</span>
                      <span className="text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-purple-300 mb-2">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies?.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-[#251c31] rounded-full text-xs text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project metadata */}
              {(project.duration || project.role) && (
                <div className="space-y-2 mb-4">
                  {project.duration && (
                    <div className="flex items-center text-zinc-400 text-sm">
                      <svg
                        className="w-4 h-4 mr-2 text-purple-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>
                        <span className="text-purple-300">Duration:</span>{' '}
                        {project.duration}
                      </span>
                    </div>
                  )}
                  {project.role && (
                    <div className="flex items-center text-zinc-400 text-sm">
                      <svg
                        className="w-4 h-4 mr-2 text-purple-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <span>
                        <span className="text-purple-300">Role:</span>{' '}
                        {project.role}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
