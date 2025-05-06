import React, { useState } from 'react';
import { FeaturedProject } from '../../types';
import { useLanguage } from '../../contexts';
import { MotionDiv } from '../animations/MotionElement';

const colorMap: Record<string, string> = {
  'car-sharing-platform': 'from-indigo-700 to-blue-800',
  'elearning-ecosystem': 'from-purple-700 to-pink-700',
  'visual-asset-hub': 'from-emerald-700 to-teal-800',
  'auto-rental-engine': 'from-amber-600 to-orange-700',
};

interface ProjectCardProps {
  project: FeaturedProject;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('features');
  const [isFlipped, setIsFlipped] = useState(false);

  const { id, icon, technologies = [] } = project;
  const title = t(`projects.${id}.title`);
  const description = t(`projects.${id}.description`);
  const color = colorMap[id] || 'from-purple-700 to-violet-800';

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="h-full w-full perspective">
      <MotionDiv
        className="relative w-full rounded-2xl preserve-3d cursor-pointer"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, easings: ['easeIn', 'easeOut'] }}
        style={{
          transformStyle: 'preserve-3d',
          height: isFlipped ? '550px' : '450px',
        }}
      >
        {/* Front Card */}
        <MotionDiv
          className="absolute w-full h-full rounded-2xl backface-hidden group overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
          onClick={handleFlip}
        >
          <div className="h-full relative overflow-hidden rounded-2xl shadow-lg">
            {/* Gradient background with pattern overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${color} opacity-90`}
            >
              <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJ3aGl0ZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMzYgMzRoLTJWMTZoMnYxOHpNNDAgNDBoLTJ2MTRoMnpNNDYgMjhoLTJ2MThoMnpNNDcgMjN2MmgxMHYtMnpNMjIgNDBIMHYyaDIyeiIvPjwvZz48L3N2Zz4=')]"></div>
            </div>

            {/* Corner decorations */}
            <div className="absolute top-0 right-0 w-24 h-24 transform translate-x-8 -translate-y-8">
              <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-16 h-16 transform -translate-x-8 translate-y-8">
              <div className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-sm"></div>
            </div>

            <div className="relative z-10 p-8 h-full flex flex-col">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:translate-x-1 transition-transform">
                    {title}
                  </h3>
                  <div className="flex items-center text-white/80 text-sm">
                    <span className="mr-4">
                      <span className="opacity-75">
                        {t('projects.metadata.duration')}:
                      </span>{' '}
                      {t(`projects.${id}.duration`)}
                    </span>
                    <span>
                      <span className="opacity-75">
                        {t('projects.metadata.role')}:
                      </span>{' '}
                      {t(`projects.${id}.role`).split(' & ')[0]}
                    </span>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm h-16 w-16 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                  {React.createElement(project.icon, { className: 'w-8 h-8' })}
                </div>
              </div>

              <p className="text-white/90 mb-6 text-base leading-relaxed">
                {description.length > 120
                  ? `${description.substring(0, 120)}...`
                  : description}
              </p>

              {/* Features */}
              <div className="mb-6">
                {Array(2)
                  .fill('')
                  .map((_, idx) => (
                    <div
                      key={idx}
                      className="flex items-center mb-2 text-white/90 text-sm"
                    >
                      <div className="w-2 h-2 rounded-full bg-white/90 mr-2"></div>
                      {t(`projects.${id}.keyFeatures.${idx}`)}
                    </div>
                  ))}
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {technologies.slice(0, 3).map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white/10 backdrop-blur-sm text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                {technologies.length > 3 && (
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-xs rounded-full">
                    +{technologies.length - 3} {t('projects.metadata.more')}
                  </span>
                )}
              </div>

              <button className="mt-auto w-full py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl text-sm font-medium transition-all group-hover:shadow-lg flex items-center justify-center">
                <span>{t('projects.metadata.viewDetails')}</span>
                <svg
                  className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </MotionDiv>

        {/* Back Card */}
        <MotionDiv
          className="absolute w-full h-full rounded-2xl backface-hidden overflow-auto"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            rotateY: 180,
            transformStyle: 'preserve-3d',
          }}
        >
          <div className="h-full bg-gray-900 rounded-2xl shadow-xl border border-gray-800 overflow-hidden">
            {/* Header with gradient */}
            <div
              className={`h-20 bg-gradient-to-r ${color} relative overflow-hidden`}
            >
              <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJ3aGl0ZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMzYgMzRoLTJWMTZoMnYxOHpNNDAgNDBoLTJ2MTRoMnpNNDYgMjhoLTJ2MThoMnpNNDcgMjN2MmgxMHYtMnpNMjIgNDBIMHYyaDIyeiIvPjwvZz48L3N2Zz4=')]"></div>

              <div className="absolute p-6 flex items-center">
                <div className="bg-white/20 backdrop-blur-sm h-12 w-12 rounded-xl flex items-center justify-center shadow-lg mr-4">
                  {React.createElement(project.icon, { className: 'w-6 h-6' })}
                </div>
                <h2 className="text-xl font-bold text-white">{title}</h2>
              </div>

              <button
                onClick={handleFlip}
                className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-2 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-gray-300 text-base mb-6 leading-relaxed">
                {description}
              </p>

              <div className="flex space-x-2 items-center mb-4">
                <div className="flex items-center text-gray-300">
                  <svg
                    className="w-4 h-4 mr-2 text-gray-500"
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
                  <span className="text-sm">
                    <span className="font-medium mr-1 text-gray-400">
                      {t('projects.metadata.duration')}:
                    </span>{' '}
                    {t(`projects.${id}.duration`)}
                  </span>
                </div>

                <div className="flex items-center text-gray-300">
                  <svg
                    className="w-4 h-4 mr-2 text-gray-500"
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
                  <span className="text-sm">
                    <span className="font-medium mr-1 text-gray-400">
                      {t('projects.metadata.role')}:
                    </span>{' '}
                    {t(`projects.${id}.role`)}
                  </span>
                </div>
              </div>

              {/* Tabs Navigation */}
              <div className="border-b border-gray-800 mb-6">
                <nav className="flex space-x-4 -mb-px">
                  <button
                    onClick={() => setActiveTab('features')}
                    className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === 'features'
                        ? 'border-purple-500 text-purple-400'
                        : 'border-transparent text-gray-400 hover:text-gray-300'
                    }`}
                  >
                    {t('projects.metadata.features')}
                  </button>

                  <button
                    onClick={() => setActiveTab('insights')}
                    className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === 'insights'
                        ? 'border-purple-500 text-purple-400'
                        : 'border-transparent text-gray-400 hover:text-gray-300'
                    }`}
                  >
                    {t('projects.metadata.insights')}
                  </button>

                  <button
                    onClick={() => setActiveTab('outcomes')}
                    className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === 'outcomes'
                        ? 'border-purple-500 text-purple-400'
                        : 'border-transparent text-gray-400 hover:text-gray-300'
                    }`}
                  >
                    {t('projects.metadata.outcomes')}
                  </button>

                  <button
                    onClick={() => setActiveTab('technologies')}
                    className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === 'technologies'
                        ? 'border-purple-500 text-purple-400'
                        : 'border-transparent text-gray-400 hover:text-gray-300'
                    }`}
                  >
                    {t('projects.metadata.technologies')}
                  </button>
                </nav>
              </div>

              {/* Tab Content */}
              <div className="mb-6 overflow-auto max-h-[200px] pr-2 hide-scrollbar">
                {activeTab === 'features' && (
                  <div className="space-y-2">
                    {Array(6)
                      .fill('')
                      .map((_, idx) => {
                        const feature = t(`projects.${id}.keyFeatures.${idx}`);
                        if (!feature) return null;
                        return (
                          <div key={idx} className="flex items-start">
                            <div className="text-purple-500 mr-2 mt-1">•</div>
                            <p className="text-gray-300 text-sm">{feature}</p>
                          </div>
                        );
                      })}
                  </div>
                )}

                {activeTab === 'insights' && (
                  <div className="space-y-2">
                    {Array(3)
                      .fill('')
                      .map((_, idx) => {
                        const insight = t(`projects.${id}.insights.${idx}`);
                        if (!insight) return null;
                        return (
                          <div key={idx} className="flex items-start">
                            <div className="text-purple-500 mr-2 mt-1">•</div>
                            <p className="text-gray-300 text-sm">{insight}</p>
                          </div>
                        );
                      })}
                  </div>
                )}

                {activeTab === 'outcomes' && (
                  <div className="space-y-2">
                    {Array(3)
                      .fill('')
                      .map((_, idx) => {
                        const outcome = t(`projects.${id}.outcomes.${idx}`);
                        if (!outcome) return null;
                        return (
                          <div key={idx} className="flex items-start">
                            <div className="text-purple-500 mr-2 mt-1">•</div>
                            <p className="text-gray-300 text-sm">{outcome}</p>
                          </div>
                        );
                      })}
                  </div>
                )}

                {activeTab === 'technologies' && (
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-2 bg-gray-800 text-gray-300 rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex justify-center mt-4">
                <button
                  onClick={handleFlip}
                  className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-xl text-sm font-medium transition-colors flex items-center"
                >
                  <span>{t('projects.metadata.viewDetails')}</span>
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </MotionDiv>
      </MotionDiv>
    </div>
  );
};

export default ProjectCard;
