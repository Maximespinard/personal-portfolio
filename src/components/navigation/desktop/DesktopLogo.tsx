import React from 'react';
import Logo from '../../../assets/icons/rest/logo.svg';

const NavDesktopLogo: React.FC = () => {
  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <span className="basis-3/5 cursor-pointer">
      <a
        href="#"
        className="basis-3/5 cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          scrollToTop();
        }}
      >
        <Logo />
      </a>
    </span>
  );
};

export default NavDesktopLogo;
