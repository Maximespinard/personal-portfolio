import { NavLink } from 'react-router-dom';
import Logo from '../../assets/icons/logo.svg';

interface NavMobileHeaderProps {
  toggleDrawer: () => void;
  isDrawerOpen: boolean;
}

const NavMobileHeader: React.FC<NavMobileHeaderProps> = ({
  toggleDrawer,
  isDrawerOpen,
}) => {
  return (
    <div className="bg-navbar flex items-center justify-between p-4">
      <button
        onClick={toggleDrawer}
        className="text-white focus:outline-none cursor-pointer"
        aria-label="Ouvrir le menu"
        aria-expanded={isDrawerOpen}
      >
        <svg
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div className="flex-grow flex justify-center">
        <NavLink to="/" className="cursor-pointer">
          <Logo />
        </NavLink>
      </div>
      <div className="w-6" />
    </div>
  );
};

export default NavMobileHeader;
