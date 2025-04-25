import React from 'react';
import Logo from '../../../assets/icons/rest/logo.svg';
import { scrollToTop } from '../../../utils/functions';

const NavDesktopLogo: React.FC = () => {
  return (
    <span className="basis-1/4 cursor-pointer">
      <a
        href="#"
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
