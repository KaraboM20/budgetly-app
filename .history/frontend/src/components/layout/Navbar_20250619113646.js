import React, { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import SideMenu from './SideMenu';
import './Navbar.css';

const Navbar = ({activeMenu}) => {
    const [openSideMenu, setOpenSideMenu] = useState(false);
    const toggleMenu = () => setOpenSideMenu(!openSideMenu);

  return (
    <div className="navbar-container">
      <button 
      className='menu-button'
      onClick={toggleMenu}
      >
        {openSideMenu ? (
            <HiOutlineX className="menu-icon" />
        ) : (
            <HiOutlineMenu className="menu-icon" />
        )}
      </button>

      <h2 className="logo">Budgetly</h2>

      
    </div>
  )
}

export default Navbar
