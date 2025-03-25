import NavDesktop from '../components/NavBar/NavDesktop';
import NavMobile from '../components/NavBar/NavMobile';

import useBreakPoint from '../hooks/useBreakPoint';

const NavBar = () => {
  const { isMobile } = useBreakPoint();

  return <nav>{isMobile ? <NavMobile /> : <NavDesktop />}</nav>;
};

export default NavBar;
