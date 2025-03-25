import NavDesktopLogo from './NavDesktopLogo';
import NavDesktopLinks from './NavDesktopLinks';

const NavDesktop = () => {
  return (
    <div className="bg-navbar h-20 flex flex-row items-center px-30 py-5 font-mono">
      <NavDesktopLogo />
      <NavDesktopLinks />
    </div>
  );
};

export default NavDesktop;
