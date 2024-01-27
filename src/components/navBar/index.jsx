import React, { useState } from 'react';
import { FaBars, FaReact } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './styles.scss';

const data = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'About',
    to: '/about',
  },
  {
    label: 'Resume',
    to: '/resume',
  },
  {
    label: 'Skills',
    to: '/skills',
  },
  {
    label: 'Portfolio',
    to: '/portfolio',
  },
  {
    label: 'Contact',
    to: '/contact',
  },
];

const NavBar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const handlerToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={'/'} className="navbar__container__logo">
            <FaReact size={30} />
          </Link>

          <ul
            className={`navbar__container__menu ${toggleIcon ? 'active' : ''}`}
          >
            {data.map((item, key) => (
              <li key={key} className="navbar__container__menu__item">
                <Link
                  to={item.to}
                  className="navbar__container__menu__item__links"
                  onClick={handlerToggleIcon}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="nav-icon" onClick={handlerToggleIcon}>
            {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
