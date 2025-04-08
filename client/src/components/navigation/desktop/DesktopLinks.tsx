import React from 'react';
import { handleNavLinks } from '../../../utils/functions';
import { navLinks } from '../../../utils/data';

const NavDesktopLinks: React.FC = () => {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    handleNavLinks(e, sectionId);
  };

  return (
    <ul className="flex flex-row justify-between w-full basis-3/5 lg:basis-2/5 text-base">
      {navLinks.map((link) => {
        const { sectionId, label } = link;
        return (
          <li key={sectionId}>
            <a
              href={`#${sectionId}`}
              className="hover:text-primary transition-colors text-secondary"
              onClick={(e) => handleClick(e, sectionId)}
            >
              {label}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavDesktopLinks;
