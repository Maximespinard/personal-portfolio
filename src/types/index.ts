import React from 'react';

export interface ExperienceItem {
  icon: string;
  title: string;
  description: string;
}

export interface StackItem {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
}
