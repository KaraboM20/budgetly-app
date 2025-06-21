import React, { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

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

      {/* Your side menu here, controlled by isMenuOpen */}
      <div className={`side-menu-wrapper ${isMenuOpen ? 'open' : ''}`}>
        {/* Side menu content */}
      </div>
    </div>
  );
};

export default Navbar;
