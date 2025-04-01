import { NavLink } from 'react-router-dom';

const NavDesktopLinks = () => {
  return (
    <ul className="flex flex-row justify-between basis-2/5 text-base">
      <li>
        <NavLink
          to="/"
          className="hover:text-primary transition-colors text-secondary"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/journey"
          className="hover:text-primary transition-colors text-secondary"
        >
          Journey
        </NavLink>
      </li>
      <li className="cursor-pointer">
        <a
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="hover:text-primary transition-colors cursor-pointer"
          aria-label="Scroll to top"
        >
          Connect
        </a>
      </li>
    </ul>
  );
};

export default NavDesktopLinks;
