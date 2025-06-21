import React, { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import './Navbar.css';

const Navbar = ({ toggleMenu, isMenuOpen }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);

const toggleMenu = () => setOpenSideMenu(prev => !prev);

  return (
    <div className="navbar-container">
      <button
        className="menu-button"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
      >
        {isMenuOpen ? (
          <HiOutlineX className="menu-icon" />
        ) : (
          <HiOutlineMenu className="menu-icon" />
        )}
      </button>

      <h2 className="logo">Budgetly</h2>
    </div>
  );
};

export default Navbar;
