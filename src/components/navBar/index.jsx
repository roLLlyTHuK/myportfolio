import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import { data } from '../../utils/navData';
import './styles.scss';

const NavBar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handlerToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <NavLink to={'/'} className="navbar__container__logo">
            <img src="../images/logo.svg" alt="logo" width={40} height={40} />
          </NavLink>

          <ul
            className={`navbar__container__menu ${toggleIcon ? 'active' : ''}`}
          >
            {data.map((item, key) => (
              <li key={key} className={`navbar__container__menu__item `}>
                <NavLink
                  to={item.to}
                  className="navbar__container__menu__item__links"
                  onClick={handlerToggleIcon}
                >
                  {item.label}
                </NavLink>
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
