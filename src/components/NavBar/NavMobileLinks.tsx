import { NavLink } from 'react-router-dom';

interface NavMobileLinksProps {
  toggleDrawer: () => void;
}

const NavMobileLinks: React.FC<NavMobileLinksProps> = ({ toggleDrawer }) => {
  return (
    <ul className="p-4 flex flex-col">
      <li className="mb-4">
        <NavLink
          to="/"
          className="block p-3 hover:bg-gray-800 rounded transition duration-200"
          onClick={toggleDrawer}
        >
          Home
        </NavLink>
      </li>
      <li className="mb-4">
        <NavLink
          to="/journey"
          className="block p-3 hover:bg-gray-800 rounded transition duration-200"
          onClick={toggleDrawer}
        >
          Journey
        </NavLink>
      </li>
      <li className="mb-4">
        <a
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            toggleDrawer();
          }}
          className="block p-3 hover:bg-gray-800 rounded transition duration-200 cursor-pointer"
          aria-label="Scroll to top"
        >
          Connect
        </a>
      </li>
    </ul>
  );
};

export default NavMobileLinks;
