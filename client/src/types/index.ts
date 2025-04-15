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
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  technologies: TechnologyType[];
  demoUrl?: string;
  codeUrl?: string;
  image?: string;
}

// Navigation item structure
export interface NavItem {
  sectionId: string;
  labelKey: string;
}

export type ServiceIconName = 'shopping-bag' | 'browser' | 'clipboard';
export interface ServiceItem {
  id: string;
  icon: ServiceIconName;
}

export type CareerIconName = 'code' | 'flask' | 'briefcase' | 'lightning';
export interface CareerStageItem {
  id: string;
  icon: CareerIconName;
}
