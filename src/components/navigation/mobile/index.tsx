import React, { useState } from 'react';
import MobileHeader from './MobileHeader';
import MobileDrawer from './MobileDrawer';
import MobileLinks from './MobileLinks';

const Mobile: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = (): void => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="relative">
      <MobileHeader toggleDrawer={toggleDrawer} isDrawerOpen={isDrawerOpen} />

      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-main-background opacity-50 z-40"
          onClick={toggleDrawer}
        />
      )}

      <MobileDrawer toggleDrawer={toggleDrawer} isDrawerOpen={isDrawerOpen}>
        <MobileLinks toggleDrawer={toggleDrawer} />
      </MobileDrawer>
    </nav>
  );
};

export default Mobile;
