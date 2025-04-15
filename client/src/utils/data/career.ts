import { CareerStageItem } from '../../types';

/**
 * Career stages data
 * Note: Text content is stored in translation files (en.ts/fr.ts)
 * Access via t(`career.stages.${stage.id}.title`) etc.
 */
export const careerStages: CareerStageItem[] = [
  {
    id: 'foundations',
    icon: 'code',
  },
  {
    id: 'fullstack',
    icon: 'flask',
  },
  {
    id: 'professional',
    icon: 'briefcase',
  },
  {
    id: 'consultant',
    icon: 'lightning',
  },
];
