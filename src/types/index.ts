import React from 'react';

export * from './animations';

export interface StackItem {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>> | undefined;
  proficiency: number;
  description: string;
  category: string;
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
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
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

// Navigation item structure
export interface NavItem {
  sectionId: string; // ID of the section to scroll to
  label: string;
}

export type ServiceIconName = 'shopping-bag' | 'browser' | 'clipboard';
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: ServiceIconName;
}

export type CareerIconName = 'code' | 'flask' | 'briefcase' | 'lightning';
export interface CareerStageItem {
  id: string;
  title: string;
  description: string;
  icon: CareerIconName;
}
