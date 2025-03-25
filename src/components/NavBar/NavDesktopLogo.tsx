import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.svg';

const NavDesktopLogo = () => {
  return (
    <span className="basis-3/5 cursor-pointer">
      <NavLink to="/" className="basis-3/5 cursor-pointer">
        <Logo />
      </NavLink>
    </span>
  );
};

export default NavDesktopLogo;
