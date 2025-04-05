import React, { useState, useRef } from 'react';
import {
  HoverScale,
  FadeIn,
  SlideFromLeft,
  SlideFromRight,
} from '../animations';
import { FeaturedProject } from '../../types';

interface ProjectCardProps {
  project: FeaturedProject;
  index: number;
  icon: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, icon }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const previewFeatures = project.keyFeatures?.slice(0, 2) || [];
  const previewTechnologies = project.technologies?.slice(0, 3) || [];

  return (
    <div
      id={`project-${project.id}`}
      ref={cardRef}
      className={`group relative rounded-2xl overflow-hidden transition-all duration-500 h-full ${
        isExpanded
          ? 'bg-gradient-to-br from-[#1a0b2e] to-[#11071f] border-2 border-[#7127ba]/30 shadow-2xl shadow-[#7127ba]/20 transform'
          : 'bg-gradient-to-br from-[#1a0b2e] to-[#11071f] border border-[#2c1250] hover:border-[#7127ba]/20 hover:shadow-lg hover:shadow-[#7127ba]/10'
      }`}
    >
      {/* Animated glow effect on hover */}
      <div
        className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#7127ba]/0 via-[#7127ba]/5 to-[#4f228d]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${isExpanded ? 'opacity-100' : ''}`}
      ></div>

      {/* Card content */}
      <div className="p-5 md:p-6 h-full flex flex-col">
        <div className="flex items-center gap-4 mb-4">
          {/* Icon Section */}
          <div className="flex-shrink-0">
            <HoverScale scale={1.08}>
              <div
                onClick={toggleExpand}
                className={`p-2 rounded-xl ${
                  isExpanded ? 'bg-[#251c31]' : 'bg-transparent'
                } transition-all duration-300 cursor-pointer`}
              >
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

        {/* Preview of key features (only visible when not expanded) */}
        {!isExpanded && previewFeatures.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-purple-300 mb-1">
              Key Features
            </h4>
            <ul className="space-y-1">
              {previewFeatures.map((feature, i) => (
                <li key={i} className="flex items-start text-sm">
                  <span className="text-purple-400 mr-2">•</span>
                  <span className="text-zinc-300 line-clamp-1">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Preview technologies (only visible when not expanded) */}
        {!isExpanded && previewTechnologies.length > 0 && (
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
              {project.technologies && project.technologies.length > 3 && (
                <span className="px-2 py-1 bg-[#251c31] rounded-full text-xs text-white">
                  +{project.technologies.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Button to toggle expand (only visible when not expanded) */}
        {!isExpanded && (
          <div className="mt-auto">
            <HoverScale scale={1.05}>
              <button
                onClick={toggleExpand}
                className="w-full px-4 py-2 bg-[#251c31] border border-[#4f228d] rounded-lg text-white text-sm font-medium transition-colors focus:outline-none cursor-pointer hover:bg-[#2c1250] hover:border-[#7127ba]/20"
              >
                View Details
              </button>
            </HoverScale>
          </div>
        )}

        {/* Expanded Content */}
        {isExpanded && (
          <div className="mt-4 border-t border-[#2c1250] pt-4 overflow-auto">
            {/* Project Description */}
            <FadeIn delay={0.1} className="mb-6">
              <p className="text-zinc-300 leading-relaxed">
                {project.description}
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 gap-6">
              {/* Key Features */}
              <SlideFromLeft delay={0.2}>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-purple-300">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.keyFeatures?.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-purple-400 mr-2 mt-1">•</span>
                        <span className="text-zinc-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SlideFromLeft>

              <SlideFromRight delay={0.3}>
                <div>
                  {/* Technologies Used */}
                  <h4 className="text-lg font-semibold mb-3 text-purple-300">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies?.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#251c31] rounded-full text-sm text-white hover:bg-[#2c1250] transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project metadata */}
                  {(project.duration || project.role) && (
                    <div className="space-y-2">
                      {project.duration && (
                        <div className="flex items-center text-zinc-400">
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
                        <div className="flex items-center text-zinc-400">
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
              </SlideFromRight>
            </div>

            {/* Project Insights */}
            {project.insights && (
              <FadeIn delay={0.4} className="mt-6">
                <h4 className="text-lg font-semibold mb-3 text-purple-300">
                  Key Insights
                </h4>
                <ul className="space-y-2">
                  {project.insights.map((insight, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-purple-400 mr-2 mt-1">•</span>
                      <span className="text-zinc-300">{insight}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            )}

            {/* Close Button */}
            <div className="mt-6 text-right">
              <button
                onClick={toggleExpand}
                className="px-4 py-2 bg-[#251c31] border border-[#4f228d] rounded-lg text-white text-sm font-medium hover:bg-[#2c1250] transition-colors"
              >
                Close Details
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
