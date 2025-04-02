import React from 'react';
import { NavLink } from 'react-router-dom';

interface MobileLinksProps {
  toggleDrawer: () => void;
}

const MobileLinks: React.FC<MobileLinksProps> = ({ toggleDrawer }) => {
  const scrollToContact = (): void => {
    toggleDrawer();
    // Wait for drawer animation to complete, then scroll
    setTimeout(() => {
      const contactSection = document.querySelector('#contact-section');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  const scrollToTop = (): void => {
    toggleDrawer();
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  };

  return (
    <ul className="p-4 flex flex-col">
      <li className="mb-4">
        <NavLink
          to="/"
          className="block p-3 hover:bg-gray-800 rounded transition duration-200"
          onClick={scrollToTop}
        >
          Home
        </NavLink>
      </li>
      <li className="mb-4">
        <NavLink
          to="/journey"
          className="block p-3 hover:bg-gray-800 rounded transition duration-200"
          onClick={toggleDrawer}
        >
          Journey
        </NavLink>
      </li>
      <li className="mb-4">
        <a
          onClick={scrollToContact}
          className="block p-3 hover:bg-gray-800 rounded transition duration-200 cursor-pointer"
          aria-label="Scroll to contact section"
        >
          Connect
        </a>
      </li>
    </ul>
  );
};

export default MobileLinks;
