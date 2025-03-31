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
