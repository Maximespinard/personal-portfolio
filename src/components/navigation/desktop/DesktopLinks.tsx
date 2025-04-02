import React from 'react';
import { NavLink } from 'react-router-dom';

const NavDesktopLinks: React.FC = () => {
  const scrollToContact = (): void => {
    // Find the contact form section and scroll to it
    const contactSection = document.querySelector('#contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ul className="flex flex-row justify-between basis-2/5 text-base">
      <li>
        <NavLink
          to="/"
          className="hover:text-primary transition-colors text-secondary"
          onClick={scrollToTop}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/journey"
          className="hover:text-primary transition-colors text-secondary"
        >
          Journey
        </NavLink>
      </li>
      <li className="cursor-pointer">
        <a
          onClick={scrollToContact}
          className="hover:text-primary transition-colors cursor-pointer"
          aria-label="Scroll to contact section"
        >
          Connect
        </a>
      </li>
    </ul>
  );
};

export default NavDesktopLinks;
