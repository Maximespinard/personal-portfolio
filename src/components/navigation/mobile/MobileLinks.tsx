import React from 'react';

interface MobileLinksProps {
  toggleDrawer: () => void;
}

const MobileLinks: React.FC<MobileLinksProps> = ({ toggleDrawer }) => {
  const scrollToSection = (sectionId: string): void => {
    toggleDrawer();
    // Wait for drawer animation to complete, then scroll
    setTimeout(() => {
      const section = document.querySelector(`#${sectionId}`);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
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
        <a
          href="#"
          className="block p-3 hover:bg-gray-800 rounded transition duration-200"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
        >
          Home
        </a>
      </li>
      <li className="mb-4">
        <a
          href="#services-section"
          className="block p-3 hover:bg-gray-800 rounded transition duration-200"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('services-section');
          }}
        >
          Services
        </a>
      </li>
      <li className="mb-4">
        <a
          href="#career-section"
          className="block p-3 hover:bg-gray-800 rounded transition duration-200"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('career-section');
          }}
        >
          Journey
        </a>
      </li>
      <li className="mb-4">
        <a
          href="#contact-section"
          className="block p-3 hover:bg-gray-800 rounded transition duration-200 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('contact-section');
          }}
          aria-label="Scroll to contact section"
        >
          Connect
        </a>
      </li>
    </ul>
  );
};

export default MobileLinks;
