import { useState, useEffect, useRef } from 'react';
import NavDesktopLogo from './NavDesktopLogo';
import NavDesktopLinks from './NavDesktopLinks';

const NavDesktop = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
  }, []);

  return (
    <>
      <div
        ref={navRef}
        className="fixed w-full top-0 bg-navbar h-20 flex flex-row items-center px-30 py-5 z-100"
      >
        <NavDesktopLogo />
        <NavDesktopLinks />
      </div>
      <div style={{ height: navHeight }}></div>
    </>
  );
};

export default NavDesktop;
