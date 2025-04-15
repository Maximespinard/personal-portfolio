import React from 'react';
import { handleNavLinks } from '../../../utils/functions';
import { navLinks } from '../../../utils/data';
import { useLanguage } from '../../../contexts';
import LanguageSwitcher from '../LanguageSwitcher';

const NavDesktopLinks: React.FC = () => {
  const { t } = useLanguage();

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    handleNavLinks(e, sectionId);
  };

  return (
    <div className="flex flex-row justify-between w-full basis-3/5 lg:basis-2/5 text-base">
      <ul className="flex flex-row justify-between w-full mr-6">
        {navLinks.map((link) => {
          const { sectionId, labelKey } = link;
          return (
            <li key={sectionId}>
              <a
                href={`#${sectionId}`}
                className="hover:text-primary transition-colors text-secondary"
                onClick={(e) => handleClick(e, sectionId)}
              >
                {t(labelKey)}
              </a>
            </li>
          );
        })}
      </ul>
      <LanguageSwitcher />
    </div>
  );
};

export default NavDesktopLinks;
