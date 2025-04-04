import { useState } from 'react';
import { SlideUpOnScroll, HoverScale } from '../animations';

const ProjectCard = ({ project, index, icon }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isEven = index % 2 === 0;

  // Toggle expanded state
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <SlideUpOnScroll
      delay={0.1 * index}
      className={`mb-8 last:mb-0 transform transition-all duration-500 ${isExpanded ? 'scale-102' : ''}`}
    >
      <div
        className={`relative bg-gradient-to-br from-[#1a0b2e] to-[#11071f] rounded-2xl border border-[#2c1250] overflow-hidden transition-all duration-500 ${
          isExpanded ? 'shadow-xl shadow-[#7127ba]/20' : ''
        }`}
      >
        {/* Highlight glow */}
        <div
          className={`absolute inset-0 bg-gradient-to-r from-[#7127ba]/0 via-[#7127ba]/10 to-[#4f228d]/0 opacity-0 transition-opacity duration-700 ${
            isExpanded ? 'opacity-100' : ''
          }`}
        ></div>

        <div className="p-6 md:p-8">
          <div
            className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6`}
          >
            {/* Icon Section */}
            <div className="flex-shrink-0">
              <HoverScale>{icon}</HoverScale>
            </div>

            {/* Content Section */}
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-zinc-400 mb-4">{project.description}</p>

              {/* Only show button if not expanded */}
              {!isExpanded && (
                <button
                  onClick={toggleExpand}
                  className="px-4 py-2 bg-[#251c31] border border-[#4f228d] rounded-lg text-white text-sm font-medium hover:bg-[#2c1250] transition-colors"
                >
                  View Details
                </button>
              )}
            </div>
          </div>

          {/* Expanded Content */}
          {isExpanded && (
            <div className="mt-6 border-t border-[#2c1250] pt-6 transition-all duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-purple-300">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2 mt-1">•</span>
                      <span className="text-zinc-300">
                        Smart booking system with real-time availability checks
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2 mt-1">•</span>
                      <span className="text-zinc-300">
                        Secure payment processing integration
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2 mt-1">•</span>
                      <span className="text-zinc-300">
                        User management with custom permission levels
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-purple-300">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#251c31] rounded-full text-sm text-white">
                      React
                    </span>
                    <span className="px-3 py-1 bg-[#251c31] rounded-full text-sm text-white">
                      Node.js
                    </span>
                    <span className="px-3 py-1 bg-[#251c31] rounded-full text-sm text-white">
                      MongoDB
                    </span>
                    <span className="px-3 py-1 bg-[#251c31] rounded-full text-sm text-white">
                      Express
                    </span>
                    <span className="px-3 py-1 bg-[#251c31] rounded-full text-sm text-white">
                      Stripe API
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-right">
                <button
                  onClick={toggleExpand}
                  className="px-4 py-2 text-purple-300 text-sm font-medium hover:text-white transition-colors"
                >
                  Close Details
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </SlideUpOnScroll>
  );
};

export default ProjectCard;
