import React, { createContext, useState, ReactNode, useEffect } from 'react';
import translations, { TranslationKey } from '../translations';

// Define available languages
export type Language = 'fr' | 'en';

// Local storage key
const LANGUAGE_STORAGE_KEY = 'portfolio_language_preference';

// Context type
interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey | string) => string;
}

// Create context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'fr',
  setLanguage: () => {},
  t: () => '',
});

// Provider component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Initialize with stored preference or default to French
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
      return (savedLanguage as Language) || 'fr';
    } catch {
      // In case localStorage is not available (e.g., incognito mode)
      return 'fr';
    }
  });

  // Update localStorage when language changes
  useEffect(() => {
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch {
      console.warn('Failed to save language preference to localStorage');
    }
  }, [language]);

  // Custom setter that updates state
  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
  };

  // Translation function
  const t = (key: TranslationKey | string): string => {
    if (!translations[language]) {
      return key;
    }
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
