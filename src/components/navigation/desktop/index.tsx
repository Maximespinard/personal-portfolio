import React from 'react';
import DesktopLogo from './DesktopLogo';
import DesktopLinks from './DesktopLinks';
import useNavHeight from '../../../hooks/useNavHeight';

const Desktop: React.FC = () => {
  const { navRef, navHeight } = useNavHeight();

  return (
    <>
      <div
        ref={navRef}
        className="fixed w-full top-0 bg-main-background h-20 flex flex-row items-center px-30 py-5 z-100"
      >
        <DesktopLogo />
        <DesktopLinks />
      </div>
      <div style={{ height: navHeight }} />
    </>
  );
};

export default Desktop;
