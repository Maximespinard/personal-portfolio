import { ServiceItem } from '../../types';

/**
 * Services data
 * Note: Text content is stored in translation files (en.ts/fr.ts)
 * Access via t(`services.${service.id}.title`) etc.
 */
export const servicesData: ServiceItem[] = [
  {
    id: 'ecommerce',
    icon: 'shopping-bag',
  },
  {
    id: 'portfolio',
    icon: 'browser',
  },
  {
    id: 'business',
    icon: 'clipboard',
  },
];
