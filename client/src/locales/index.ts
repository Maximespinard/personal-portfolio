import en from './en';
import fr from './fr';

// Export all translations
const translations = {
  en,
  fr,
};

export default translations;

// Types for translation keys
export type TranslationKey = keyof typeof en | keyof typeof fr;
