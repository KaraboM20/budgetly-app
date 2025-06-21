import React, { useContext, useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { SIDE_MENU_DATA } from '../../utils/data'; // your menu items
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import CharAvatar from '../Cards/CharAvatar';
import './Navbar.css';

const Navbar = ({ activeMenu }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  const toggleMenu = () => setOpenSideMenu(!openSideMenu);

  const handleClick = (route) => {
    if (route === 'logout') {
      handleLogout();
      return;
    }
    navigate(route);
    setOpenSideMenu(false); // close menu on navigation
  };

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate('/login');
    setOpenSideMenu(false);
  };

  return (
    <div className="navbar-container">
      {/* Hamburger button */}
      <button
        className="menu-button"
        onClick={toggleMenu}
        aria-label={openSideMenu ? 'Close Menu' : 'Open Menu'}
      >
        {openSideMenu ? (
          <HiOutlineX className="menu-icon" />
        ) : (
          <HiOutlineMenu className="menu-icon" />
        )}
      </button>

      {/* Logo */}
      <h2 className="logo">Budgetly</h2>

      {/* Side menu - toggled */}
      <div className={`side-menu-wrapper ${openSideMenu ? 'open' : ''}`}>
        <div className="side-menu-container">
          <div className="profile-section">
            {user?.profileImageUrl ? (
              <img
                src={user.profileImageUrl}
                alt="Profile"
                className="profile-image"
              />
            ) : (
              <CharAvatar
                fullName={user?.fullName}
                width="64px"
                height="64px"
                style="text-xl"
              />
            )}
            <h5 className="user-name">{user?.fullName || ''}</h5>
          </div>

          <div className="menu-items">
            {SIDE_MENU_DATA.map((item, index) => (
              <button
                key={`menu_${index}`}
                className={`menu-button ${activeMenu === item.path ? 'active' : ''}`}
                onClick={() => handleClick(item.path)}
              >
                <item.icon className="menu-icon" />
                <span className="menu-label">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
