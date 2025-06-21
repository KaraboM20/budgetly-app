import React, { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import SideMenu from './SideMenu';
import './Navbar.css';

const Navbar = ({ activeMenu }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const toggleMenu = () => setOpenSideMenu(!openSideMenu);

  return (
    <div className={`sidebar-container ${openSideMenu ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <button
          className="menu-button"
          onClick={toggleMenu}
          aria-label={openSideMenu ? 'Close Menu' : 'Open Menu'}
        >
          {openSideMenu ? <HiOutlineX className="menu-icon" /> : <HiOutlineMenu className="menu-icon" />}
        </button>
        <h2 className="logo">Budgetly</h2>
      </div>

      {openSideMenu && (
        <SideMenu activeMenu={activeMenu} toggleMenu={toggleMenu} />
      )}
    </div>
  );
};

export default Navbar;
