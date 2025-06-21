import React, { useContext } from 'react';
import { SIDE_MENU_DATA } from '../../utils/data';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';


const SideMenu = ({activeMenu}) => {
    const { user, clearUser } = useContext(UserContext);
    const navigate = useNavigate();
    const handleClick = (route) => {
        if (route === "logout") {
            handleLogout();
            return;
        }

        navigate(route);
    };

    const handleLogout = () => {
        localStorage.clear();
        clearUser();
        navigate("/login");
    };


  return (
    <div>
      <div>
        {user?.profileImageUrl ? (
            <img
            src={user?.profileImageUrl || ""}
            alt="Profile Image"
            className=''
            />
        ) : <></>}

        <h5 className=''>
            {user?.fullName || ""}
        </h5>
      </div>

      {SIDE_MENU_DATA.map((item, index)) => {
        <button
        key={`menu_${index}`}
        className=''
        activeMenu
        onClick={() => handleClick(item.path)}
        >
          <item.icon />
            
        </button>
      }}
    </div>
  )
}

export default SideMenu
