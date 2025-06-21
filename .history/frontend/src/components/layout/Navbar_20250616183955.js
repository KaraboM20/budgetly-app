import React, { useState } from 'react';
import { HiOutlineMenu, HiOutlinex } from 'react-icons/hi';
import SideMenu from './SideMenu';

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
            <HiOutlinex />
        ) : (
            <HiOutlineMenu />
        )}
      </button>

      <h2>Budgetly</h2>

      {openSideMenu && (
        <div>
            <SideMenu activeMenu
        </div>
      )}
    </div>
  )
}

export default Navbar
