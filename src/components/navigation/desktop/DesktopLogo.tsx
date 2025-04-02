import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../../assets/icons/rest/logo.svg';

const NavDesktopLogo: React.FC = () => {
  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <span className="basis-3/5 cursor-pointer">
      <NavLink
        to="/"
        className="basis-3/5 cursor-pointer"
        onClick={scrollToTop}
      >
        <Logo />
      </NavLink>
    </span>
  );
};

export default NavDesktopLogo;
