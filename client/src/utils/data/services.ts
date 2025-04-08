import { ServiceItem } from '../../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'ecommerce',
    title: 'E-Commerce Solutions',
    description:
      'Custom online stores with secure payment processing, inventory management, and conversion-focused user experiences.',
    features: [
      'Secure payment gateways',
      'Inventory tracking systems',
      'Mobile-optimized shopping',
    ],
    icon: 'shopping-bag',
  },
  {
    id: 'portfolio',
    title: 'Portfolio & Landing Pages',
    description:
      'Stunning, high-converting websites designed to showcase your work and turn visitors into clients.',
    features: [
      'Conversion-optimized layouts',
      'Interactive user experiences',
      'SEO-friendly architecture',
    ],
    icon: 'browser',
  },
  {
    id: 'business-tools',
    title: 'Custom Business Tools',
    description:
      'Tailored applications like invoice generators, CRM dashboards, and workflow automation tools.',
    features: [
      'Invoice management systems',
      'Custom admin dashboards',
      'Workflow automation',
    ],
    icon: 'clipboard',
  },
];
