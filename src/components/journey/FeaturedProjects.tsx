import React from 'react';
import { SlideUpOnScroll, FadeIn } from '../animations';
import ProjectCard from './ProjectCard';
import { FeaturedProject } from '../../types';
import { featuredProjects as defaultProjects } from '../../utils/data';

// Custom icons for projects (SVG components)
const CarSharingIcon: React.FC = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="40" cy="40" r="40" fill="#251c31" />
    <path
      d="M58 42.8V56H53V51H27V56H22V42.8C22 41.12 22.64 39.52 23.76 38.4L28 34.16V25C28 21.68 30.68 19 34 19H46C49.32 19 52 21.68 52 25V34.16L56.24 38.4C57.36 39.52 58 41.12 58 42.8ZM30 56H50V61H30V56ZM34 43C32.34 43 31 44.34 31 46C31 47.66 32.34 49 34 49C35.66 49 37 47.66 37 46C37 44.34 35.66 43 34 43ZM46 43C44.34 43 43 44.34 43 46C43 47.66 44.34 49 46 49C47.66 49 49 47.66 49 46C49 44.34 47.66 43 46 43ZM52 34H28V42H52V34Z"
      fill="#7127ba"
    />
  </svg>
);

const ELearningIcon: React.FC = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="40" cy="40" r="40" fill="#251c31" />
    <path
      d="M52 21H28C25.8 21 24 22.8 24 25V49C24 51.2 25.8 53 28 53H40V57H36V61H44V57H40V53H52C54.2 53 56 51.2 56 49V25C56 22.8 54.2 21 52 21ZM52 49H28V25H52V49ZM40 45.14L48 41V35.6L40 39.75L32 35.6V41L40 45.14Z"
      fill="#7127ba"
    />
  </svg>
);

const VisualHubIcon: React.FC = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="40" cy="40" r="40" fill="#251c31" />
    <path
      d="M40 47.5C44.14 47.5 47.5 44.14 47.5 40C47.5 35.86 44.14 32.5 40 32.5C35.86 32.5 32.5 35.86 32.5 40C32.5 44.14 35.86 47.5 40 47.5ZM40 35C42.76 35 45 37.24 45 40C45 42.76 42.76 45 40 45C37.24 45 35 42.76 35 40C35 37.24 37.24 35 40 35ZM24.06 30L27.5 26.56L30.94 30L33 27.94L29.56 24.5L33 21.06L30.94 19L27.5 22.44L24.06 19L22 21.06L25.44 24.5L22 27.94L24.06 30ZM54 39H59V41H54V39ZM40 21H42V26H40V21ZM40 54H42V59H40V54ZM21 39H26V41H21V41ZM49.94 30L53.38 26.56L56.82 30L58.88 27.94L55.44 24.5L58.88 21.06L56.82 19L53.38 22.44L49.94 19L47.88 21.06L51.32 24.5L47.88 27.94L49.94 30Z"
      fill="#7127ba"
    />
  </svg>
);

const AutoRentalIcon: React.FC = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="40" cy="40" r="40" fill="#251c31" />
    <path
      d="M55 24L50 19H30L25 24H17V27H20.76C19.65 28.55 19 30.41 19 32.5V54C19 55.1 19.9 56 21 56H25C26.1 56 27 55.1 27 54V50H53V54C53 55.1 53.9 56 55 56H59C60.1 56 61 55.1 61 54V32.5C61 30.41 60.35 28.55 59.24 27H63V24H55ZM31.5 24H48.5L51.5 27H28.5L31.5 24ZM23 42.5C20.51 42.5 18.5 40.49 18.5 38C18.5 35.51 20.51 33.5 23 33.5C25.49 33.5 27.5 35.51 27.5 38C27.5 40.49 25.49 42.5 23 42.5ZM57 42.5C54.51 42.5 52.5 40.49 52.5 38C52.5 35.51 54.51 33.5 57 33.5C59.49 33.5 61.5 35.51 61.5 38C61.5 40.49 59.49 42.5 57 42.5ZM23 46H57V50H23V46Z"
      fill="#7127ba"
    />
  </svg>
);

// Define props interface for FeaturedProjects component
interface FeaturedProjectsProps {
  projects?: FeaturedProject[];
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  projects = defaultProjects,
}) => {
  // Map of project IDs to their respective icons
  const projectIcons: Record<string, React.ReactNode> = {
    'car-sharing-platform': <CarSharingIcon />,
    'elearning-ecosystem': <ELearningIcon />,
    'visual-asset-hub': <VisualHubIcon />,
    'auto-rental-engine': <AutoRentalIcon />,
  };

  return (
    <section id="projects" className="relative z-10 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-indigo-900/10 rounded-full blur-3xl"></div>
      </div>

      <SlideUpOnScroll className="text-center mb-12 relative z-10">
        <h2 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
          Featured Projects
        </h2>
        <FadeIn delay={0.2}>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Click on a project to explore details
          </p>
        </FadeIn>
      </SlideUpOnScroll>

      <div className="max-w-5xl mx-auto relative z-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            icon={
              projectIcons[project.id] ||
              (index === 0 ? (
                <CarSharingIcon />
              ) : index === 1 ? (
                <ELearningIcon />
              ) : index === 2 ? (
                <VisualHubIcon />
              ) : (
                <AutoRentalIcon />
              ))
            }
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
