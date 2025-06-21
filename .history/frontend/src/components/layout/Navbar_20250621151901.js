import React, { useState, useContext } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { SIDE_MENU_DATA } from '../../utils/data';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ activeMenu }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  const toggleMenu = () => setOpenMenu(!openMenu);

  const handleClick = (route) => {
    if (route === 'logout') {
      handleLogout();
      return;
    }
    navigate(route);
    setOpenMenu(false);
  };

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate('/login');
    setOpenMenu(false);
  };

  const firstLetter = user?.fullName ? user.fullName.charAt(0).toUpperCase() : '';

  return (
    <div className="navbar-container">
      <h2 className="logo">Budgetly</h2>

      <button
        className="menu-button"
        onClick={toggleMenu}
        aria-label={openMenu ? 'Close Menu' : 'Open Menu'}
      >
        {openMenu ? (
          <HiOutlineX className="menu-icon" />
        ) : (
          <HiOutlineMenu className="menu-icon" />
        )}
      </button>

      <div className={`nav-menu ${openMenu ? 'open' : ''}`}>
        <div className="profile-section">
          {user?.profileImageUrl ? (
            <img
              src={user?.profileImageUrl || ''}
              alt="Profile Image"
              className="profile-image"
            />
          ) : (
            <div className="letter-avatar">{firstLetter}</div>
          )}
          <span className="user-name">{user?.fullName || ''}</span>
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
  );
};

export default Navbar;