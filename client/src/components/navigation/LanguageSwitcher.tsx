import React from 'react';
import { useLanguage } from '../../contexts/';
import { HoverScale } from '../animations';

interface LanguageSwitcherProps {
  isMobile?: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  isMobile = false,
}) => {
  const { language, setLanguage } = useLanguage();

  // Simpler toggle function
  const switchToLanguage = (lang: 'fr' | 'en') => {
    if (language !== lang) {
      setLanguage(lang);
    }
  };

  if (isMobile) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="flex rounded-md overflow-hidden border border-[#2c1250]">
          <button
            onClick={() => switchToLanguage('fr')}
            className={`px-2 py-1 text-xs font-medium transition-colors ${
              language === 'fr'
                ? 'bg-[#4f228d] text-white'
                : 'bg-transparent text-gray-400 hover:text-white'
            }`}
            aria-label="Français"
          >
            FR
          </button>
          <button
            onClick={() => switchToLanguage('en')}
            className={`px-2 py-1 text-xs font-medium transition-colors ${
              language === 'en'
                ? 'bg-[#4f228d] text-white'
                : 'bg-transparent text-gray-400 hover:text-white'
            }`}
            aria-label="English"
          >
            EN
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center h-full">
      <div className="flex rounded-md overflow-hidden border border-[#2c1250] hover:border-[#693b93] transition-colors">
        <HoverScale scale={1.02}>
          <button
            onClick={() => switchToLanguage('fr')}
            className={`px-2 py-1 text-xs font-medium transition-colors ${
              language === 'fr'
                ? 'bg-[#4f228d] text-white'
                : 'bg-transparent text-gray-400 hover:text-white'
            }`}
            aria-label="Français"
          >
            FR
          </button>
        </HoverScale>
        <HoverScale scale={1.02}>
          <button
            onClick={() => switchToLanguage('en')}
            className={`px-2 py-1 text-xs font-medium transition-colors ${
              language === 'en'
                ? 'bg-[#4f228d] text-white'
                : 'bg-transparent text-gray-400 hover:text-white'
            }`}
            aria-label="English"
          >
            EN
          </button>
        </HoverScale>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
