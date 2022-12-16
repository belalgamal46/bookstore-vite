import './styles/navbar.css';
import { FaUserAlt } from 'react-icons/fa';
import { Outlet, Link, useLocation } from 'react-router-dom';
import navLinks from '../../fixtures/navLinks';

const Navbar = () => {
  const { pathname } = useLocation();
  const activeLink = (url = '') => (pathname === url ? 'active' : '');

  return (
    <>
      <header>
        <nav>
          <h1>
            <Link to="/">Bookstore CMS</Link>
          </h1>
          <ul className="nav-links">
            {navLinks.map(({ text, url }) => (
              <li key={url}>
                <Link to={url} className={`${activeLink(url)} nav-link`}>
                  {text}
                </Link>
              </li>
            ))}
          </ul>
          <button type="button" className="icon-button">
            <span>
              {' '}
              <FaUserAlt />
              {' '}
            </span>
          </button>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Navbar;
