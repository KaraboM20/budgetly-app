import React, { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import SideMenu from './SideMenu';
import './Navbar.css';

const Navbar = ({activeMenu}) => {
    const [openSideMenu, setOpenSideMenu] = useState(false);
    const toggleMenu = () => {
    setOpenSideMenu((prev) => !prev);
  };

  return (
    <div className="navbar-container">
      <button 
      className='menu-button'
      onClick={(togg) => {
        setOpenSideMenu(!openSideMenu);
      }}
      >
        {openSideMenu ? (
            <HiOutlineX className="menu-icon" />
        ) : (
            <HiOutlineMenu className="menu-icon" />
        )}
      </button>

      <h2 className="logo">Budgetly</h2>

      {openSideMenu && (
        <div className="side-menu-wrapper">
            <SideMenu activeMenu={activeMenu} />
        </div>
      )}
    </div>
  )
}

export default Navbar
