import React from 'react';
import { useLanguage } from '../../contexts/';

interface LanguageSwitcherProps {
  isMobile?: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  isMobile = false,
}) => {
  const { language, setLanguage } = useLanguage();

  const switchToLanguage = (lang: 'fr' | 'en') => {
    if (language !== lang) {
      setLanguage(lang);
    }
  };

  const baseButtonClass =
    'px-2 py-1 font-medium transition-colors duration-200';
  const activeClass = 'bg-[#7127ba] text-white rounded-md';
  const inactiveClass = 'text-gray-400 hover:text-white';

  // For desktop nav which looks like your screenshot
  if (!isMobile) {
    return (
      <div className="basis-1/5 flex justify-end">
        <button
          onClick={() => switchToLanguage('fr')}
          className={`${baseButtonClass} ${language === 'fr' ? activeClass : inactiveClass}`}
          aria-label="Français"
        >
          FR
        </button>
        <button
          onClick={() => switchToLanguage('en')}
          className={`${baseButtonClass} ${language === 'en' ? activeClass : inactiveClass}`}
          aria-label="English"
        >
          EN
        </button>
      </div>
    );
  }

  // Mobile version, slightly more compact
  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => switchToLanguage('fr')}
        className={`${baseButtonClass} text-sm ${language === 'fr' ? activeClass : inactiveClass}`}
        aria-label="Français"
      >
        FR
      </button>
      <button
        onClick={() => switchToLanguage('en')}
        className={`${baseButtonClass} text-sm ${language === 'en' ? activeClass : inactiveClass}`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
