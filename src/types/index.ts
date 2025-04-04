import React from 'react';

export * from './animations';

// Project data types
export interface ExperienceItem {
  icon: string;
  title: string;
  description: string;
}

export interface StackItem {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
}

export interface ProjectExample {
  title: string;
  image: string;
  description: string;
}

// Technologies used in projects
export type TechnologyType =
  | 'React'
  | 'Node.js'
  | 'Express'
  | 'MongoDB'
  | 'Firebase'
  | 'AWS'
  | 'Stripe'
  | 'Next.js'
  | 'TypeScript'
  | 'Redux'
  | 'Material UI'
  | 'Tailwind CSS'
  | 'GraphQL'
  | 'PostgreSQL'
  | 'Docker'
  | 'Netlify'
  | 'Vercel'
  | 'Auth0'
  | string;

// Featured project structure with detailed information
export interface FeaturedProject {
  id: string;
  title: string;
  brief: string; // Short description (used in cards/previews)
  description: string; // Longer description for expanded view
  keyFeatures: string[]; // List of key features
  technologies: TechnologyType[]; // Technology stack used
  insights: string[]; // Lessons learned or interesting insights
  outcomes?: string[]; // Results or business outcomes (optional)
  duration?: string; // Project duration (optional)
  role?: string; // Your role in the project (optional)
  demoUrl?: string; // Demo URL (optional)
  codeUrl?: string; // Code repository URL (optional)
  image?: string; // Project image (optional)
}
