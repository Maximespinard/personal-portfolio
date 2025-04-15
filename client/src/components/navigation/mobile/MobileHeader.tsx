import React from 'react';
import Logo from '../../../assets/icons/rest/logo.svg';
import useNavHeight from '../../../hooks/useNavHeight';
import LanguageSwitcher from '../LanguageSwitcher';

interface MobileHeaderProps {
  toggleDrawer: () => void;
  isDrawerOpen: boolean;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({
  toggleDrawer,
  isDrawerOpen,
}) => {
  const { navRef, navHeight } = useNavHeight();
  return (
    <>
      <div
        ref={navRef}
        className="fixed bg-main-background top-0 w-full flex items-center justify-between p-4 z-100"
      >
        {/* Left section - Menu button */}
        <div className="w-16 flex justify-start">
          <button
            onClick={toggleDrawer}
            className="text-white focus:outline-none cursor-pointer"
            aria-label="Ouvrir le menu"
            aria-expanded={isDrawerOpen}
          >
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Center section - Logo */}
        <div className="flex-grow-0 flex justify-center">
          <a
            href="#/"
            className="cursor-pointer scale-90"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <Logo />
          </a>
        </div>

        {/* Right section - Language switcher */}
        <div className="w-16 flex justify-end items-center">
          <LanguageSwitcher isMobile={true} />
        </div>
      </div>
      <div style={{ height: navHeight }} />
    </>
  );
};

export default MobileHeader;
