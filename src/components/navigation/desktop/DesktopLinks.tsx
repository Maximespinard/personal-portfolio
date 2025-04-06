import React from 'react';
import { scrollToSection } from '../../../utils/functions';

const NavDesktopLinks: React.FC = () => {
  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ul className="flex flex-row justify-between w-full basis-3/5 lg:basis-2/5 text-base">
      <li>
        <a
          href="#"
          className="hover:text-primary transition-colors text-secondary"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#services-section"
          className="hover:text-primary transition-colors text-secondary"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('services-section');
          }}
        >
          Services
        </a>
      </li>
      <li>
        <a
          href="#career-section"
          className="hover:text-primary transition-colors text-secondary"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('career-section');
          }}
        >
          Journey
        </a>
      </li>
      <li className="cursor-pointer">
        <a
          href="#contact-section"
          className="hover:text-primary transition-colors cursor-pointer"
          aria-label="Scroll to contact section"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('contact-section');
          }}
        >
          Connect
        </a>
      </li>
    </ul>
  );
};

export default NavDesktopLinks;
