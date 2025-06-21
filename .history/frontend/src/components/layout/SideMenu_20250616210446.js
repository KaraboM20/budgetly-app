import React, { useContext } from 'react';
import { SIDE_MENU_DATA } from '../../utils/data';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

const SideMenu = () => {
    const { user, clearUser } = useContext(UserContext);
    const navigate = useNavigate();
    const handleClick = (route) => {
        if (route === "logout") {
            handleLogout()
        }
    }
  return (
    <div>
      
    </div>
  )
}

export default SideMenu
