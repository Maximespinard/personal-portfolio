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
    <>
      {' '}
      <div className="flex flex-row items-center justify-between w-full basis-3/5 text-base">
        <ul className="flex flex-row justify-between w-full mr-6 gap-4">
          {navLinks.map((link) => {
            const { sectionId, labelKey } = link;
            return (
              <li key={sectionId}>
                <a
                  href={`#${sectionId}`}
                  className="hover:text-primary transition-colors text-secondary relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-[#7127ba] after:transition-all after:duration-300 hover:after:w-full"
                  onClick={(e) => handleClick(e, sectionId)}
                >
                  {t(labelKey)}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="basis-1/5">
        <LanguageSwitcher />
      </div>
    </>
  );
};

export default NavDesktopLinks;
