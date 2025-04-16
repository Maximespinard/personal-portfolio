// src/contexts/useLanguageState.ts
import { useState, useEffect } from 'react';
import enTranslations from '../locales/en';
import frTranslations from '../locales/fr';
import { Language, Translations } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}

// Translations object
const translations: Record<Language, Translations> = {
  en: enTranslations,
  fr: frTranslations,
};

// Try to get language from local storage or use browser language or default to English
const getBrowserLanguage = (): Language => {
  const browserLang = navigator.language.split('-')[0];
  return browserLang === 'fr' ? 'fr' : 'en';
};

export const useLanguageState = (): LanguageContextType => {
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null;
    return (savedLanguage as Language) || getBrowserLanguage();
  });

  // Update local storage when language changes
  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem('language', language);
  }, [language]);

  // Set language function
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  // Translation function that supports nested keys (e.g., 'nav.home')
  const t = (key: string, params?: Record<string, string | number>): string => {
    const keys = key.split('.');
    let value: unknown = translations[language];

    // Navigate through nested objects
    for (const k of keys) {
      if (value === undefined) return key;
      value = (value as Record<string, unknown>)[k];
    }

    // If value not found, return the key
    if (value === undefined) return key;

    // If it's not a string, convert it
    if (typeof value !== 'string') {
      return JSON.stringify(value);
    }

    // Replace parameters if provided
    if (params) {
      return Object.entries(params).reduce((acc, [paramKey, paramValue]) => {
        return acc.replace(
          new RegExp(`{${paramKey}}`, 'g'),
          paramValue.toString()
        );
      }, value);
    }

    return value;
  };

  return { language, setLanguage, t };
};
