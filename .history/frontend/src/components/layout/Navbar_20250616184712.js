import React, { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import SideMenu from './SideMenu';
import './Navbar.css';

const Navbar = ({activeMenu}) => {
    const [openSideMenu, setOpenSideMenu] = useState(false);
  return (
    <div>
      <button 
      ClassName=''
      onClick={() => {
        setOpenSideMenu(!openSideMenu);
      }}
      >
        {openSideMenu ? (
            <HiOutlineX />
        ) : (
            <HiOutlineMenu />
        )}
      </button>

      <h2>Budgetly</h2>

      {openSideMenu && (
        <div>
            <SideMenu activeMenu={activeMenu} />
        </div>
      )}
    </div>
  )
}

export default Navbar
