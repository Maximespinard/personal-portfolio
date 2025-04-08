import React from 'react';
import Desktop from './desktop';
import Mobile from './mobile';
import useBreakPoint from '../../hooks/useBreakPoint';

const NavBar: React.FC = () => {
  const { isMobile } = useBreakPoint();

  return <nav>{isMobile ? <Mobile /> : <Desktop />}</nav>;
};

export default NavBar;
