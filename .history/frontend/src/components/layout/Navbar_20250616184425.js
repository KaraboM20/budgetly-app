import React, { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import SideMenu from './SideMenu';

const Navbar = ({activeMenu}) => {
    const [openSideMenu, setOpenSideMenu] = useState(false);
  return (
    <div ClassName='flex'>
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
