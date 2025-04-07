import React from 'react';
import { handleNavLinks } from '../../../utils/functions';
import { navLinks } from '../../../utils/data';

interface MobileLinksProps {
  toggleDrawer: () => void;
}

const MobileLinks: React.FC<MobileLinksProps> = ({ toggleDrawer }) => {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    handleNavLinks(e, sectionId);
    toggleDrawer();
  };

  return (
    <ul className="p-4 flex flex-col">
      {navLinks.map((link) => {
        const { sectionId, label } = link;
        return (
          <li key={sectionId} className="py-2">
            <a
              href={`#${sectionId}`}
              className="block p-3 hover:bg-gray-800 rounded transition duration-200"
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

export default MobileLinks;
