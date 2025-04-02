import React, { useState, useEffect, useRef } from 'react';
import DesktopLogo from './DesktopLogo';
import DesktopLinks from './DesktopLinks';

const Desktop: React.FC = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const [navHeight, setNavHeight] = useState<number>(0);

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
  }, []);

  return (
    <>
      <div
        ref={navRef}
        className="fixed w-full top-0 bg-main-background h-20 flex flex-row items-center px-30 py-5 z-100"
      >
        <DesktopLogo />
        <DesktopLinks />
      </div>
      <div style={{ height: navHeight }}></div>
    </>
  );
};

export default Desktop;
