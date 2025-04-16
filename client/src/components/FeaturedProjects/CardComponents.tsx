import React, { ComponentType, SVGProps } from 'react';
import { HoverScale } from '../animations';
import { useLanguage } from '../../contexts';

// Common Components
export const CardTitle: React.FC<{ title: string }> = ({ title }) => (
  <div>
    <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
      {title}
    </h3>
  </div>
);

export const CardDescription: React.FC<{
  description: string;
  isFront?: boolean;
}> = ({ description, isFront }) => (
  <p className={`text-zinc-400 mb-4 ${isFront && 'line-clamp-2'}`}>
    {description}
  </p>
);

// Front Card Components
export const CardIcon: React.FC<{
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}> = ({ icon: Icon }) => (
  <div className="flex-shrink-0">
    <HoverScale scale={1.05}>
      <div className="p-2 rounded-xl bg-transparent transition-all duration-300">
        <Icon />
      </div>
    </HoverScale>
  </div>
);

export const FeaturesList: React.FC<{
  features: string[];
  projectId: string;
}> = ({ features, projectId }) => {
  const { t } = useLanguage();

  return (
    <div className="mb-4">
      <h4 className="text-sm font-semibold text-purple-300 mb-2">
        {t('projects.metadata.features')}
      </h4>
      <ul className="space-y-1">
        {features.slice(0, 2).map((_, i) => (
          <li key={i} className="flex items-start text-sm">
            <span className="text-purple-400 mr-2">•</span>
            <span className="text-zinc-300 line-clamp-1">
              {t(`projects.${projectId}.keyFeatures.${i}`)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const TechnologiesList: React.FC<{ technologies: string[] }> = ({
  technologies,
}) => {
  const { t } = useLanguage();
  const previewTechnologies = technologies.slice(0, 4);

  return (
    <div className="mb-4">
      <h4 className="text-sm font-semibold text-purple-300 mb-2">
        {t('projects.metadata.technologies')}
      </h4>
      <div className="flex flex-wrap gap-2">
        {previewTechnologies.map((tech, i) => (
          <span
            key={i}
            className="px-2 py-1 bg-[#251c31] rounded-full text-xs text-white"
          >
            {tech}
          </span>
        ))}
        {technologies.length > 4 && (
          <span className="px-2 py-1 bg-[#251c31] rounded-full text-xs text-white">
            +{technologies.length - 4} {t('projects.metadata.more')}
          </span>
        )}
      </div>
    </div>
  );
};

export const ViewDetailsButton: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="mt-auto">
      <HoverScale scale={1.05}>
        <button className="w-full px-4 py-2 bg-gradient-to-r from-[#251c31] to-[#2c1250] border border-[#4f228d] rounded-lg text-white text-sm font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-[#2c1250] hover:to-[#3d1a68] hover:border-[#7127ba]/40 hover:shadow-md hover:shadow-[#7127ba]/20 group">
          <span className="inline-flex items-center">
            {t('projects.metadata.viewDetails')}
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
  );
};

// Back Card Components
export const CloseButton: React.FC = () => (
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
);

export const FullFeaturesList: React.FC<{
  features: string[];
  projectId: string;
}> = ({ features, projectId }) => {
  const { t } = useLanguage();

  return (
    <div className="mb-4">
      <h4 className="text-sm font-semibold text-purple-300 mb-2">
        {t('projects.metadata.features')}
      </h4>
      <ul className="space-y-1">
        {features.map((_, i) => (
          <li key={i} className="flex items-start text-sm">
            <span className="text-purple-400 mr-2">•</span>
            <span className="text-zinc-300">
              {t(`projects.${projectId}.keyFeatures.${i}`)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const FullTechnologiesList: React.FC<{ technologies: string[] }> = ({
  technologies,
}) => {
  const { t } = useLanguage();

  return (
    <div className="mb-4">
      <h4 className="text-sm font-semibold text-purple-300 mb-2">
        {t('projects.metadata.technologies')}
      </h4>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, i) => (
          <span
            key={i}
            className="px-2 py-1 bg-[#251c31] rounded-full text-xs text-white"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export const ProjectInsights: React.FC<{
  insights: string[];
  projectId: string;
}> = ({ insights, projectId }) => {
  const { t } = useLanguage();

  if (!insights?.length) return null;

  return (
    <div className="mb-4">
      <h4 className="text-sm font-semibold text-purple-300 mb-2">
        {t('projects.metadata.insights')}
      </h4>
      <ul className="space-y-1">
        {insights.map((_, i) => (
          <li key={i} className="flex items-start text-sm">
            <span className="text-purple-400 mr-2">•</span>
            <span className="text-zinc-300">
              {t(`projects.${projectId}.insights.${i}`)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const ProjectOutcomes: React.FC<{
  outcomes: string[];
  projectId: string;
}> = ({ outcomes, projectId }) => {
  const { t } = useLanguage();

  if (!outcomes?.length) return null;

  return (
    <div className="mb-4">
      <h4 className="text-sm font-semibold text-purple-300 mb-2">
        {t('projects.metadata.outcomes')}
      </h4>
      <ul className="space-y-1">
        {outcomes.map((_, i) => (
          <li key={i} className="flex items-start text-sm">
            <span className="text-purple-400 mr-2">•</span>
            <span className="text-zinc-300">
              {t(`projects.${projectId}.outcomes.${i}`)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const ProjectMetadata: React.FC<{
  duration?: string;
  role?: string;
  projectId: string;
}> = ({ duration, role, projectId }) => {
  const { t } = useLanguage();

  if (!duration && !role) return null;

  return (
    <div className="space-y-2 mb-4">
      {duration && (
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
            <span className="text-purple-300">
              {t('projects.metadata.duration')}:
            </span>{' '}
            {t(`projects.${projectId}.duration`)}
          </span>
        </div>
      )}
      {role && (
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
            <span className="text-purple-300">
              {t('projects.metadata.role')}:
            </span>{' '}
            {t(`projects.${projectId}.role`)}
          </span>
        </div>
      )}
    </div>
  );
};
