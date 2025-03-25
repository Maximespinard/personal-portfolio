import { useState } from 'react';
import NavMobileHeader from './NavMobileHeader';
import NavMobileDrawer from './NavMobileDrawer';
import NavMobileLinks from './NavMobileLinks';

const NavMobile = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="relative">
      <NavMobileHeader
        toggleDrawer={toggleDrawer}
        isDrawerOpen={isDrawerOpen}
      />

      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleDrawer}
        />
      )}

      <NavMobileDrawer toggleDrawer={toggleDrawer} isDrawerOpen={isDrawerOpen}>
        <NavMobileLinks toggleDrawer={toggleDrawer} />
      </NavMobileDrawer>
    </nav>
  );
};

export default NavMobile;
