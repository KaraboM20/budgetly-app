// import React, { useContext } from 'react';
// import { SIDE_MENU_DATA } from '../../utils/data';
// import { UserContext } from '../../context/UserContext';
// import { useNavigate } from 'react-router-dom';
// import './SideMenu.css';
// import CharAvatar from '../Cards/CharAvatar';


// const SideMenu = ({activeMenu}) => {
//     const { user, clearUser } = useContext(UserContext);
//     const navigate = useNavigate();
//     const handleClick = (route) => {
//         if (route === "logout") {
//             handleLogout();
//             return;
//         }

//         navigate(route);
//     };

//     const handleLogout = () => {
//         localStorage.clear();
//         clearUser();
//         navigate("/login");
//     };


//   return (
//     <div className="side-menu-container">
//       <div className="profile-section">
//         {user?.profileImageUrl ? (
//             <img
//             src={user?.profileImageUrl || ""}
//             alt="Profile Image"
//             className='profile-image'
//             />
//         ) : (<CharAvatar
//         fullName={user?.fullName}
//         width="20px"
//     height="20px"
// style="text-xl"
// />)}

//         <h5 className="user-name">
//             {user?.fullName || ""}
//         </h5>
//       </div>

// <div className="menu-items">
//       {SIDE_MENU_DATA.map((item, index) => (
//         <button
//         key={`menu_${index}`}
//         className={`menu-button ${activeMenu === item.path ? 'active' : ''}`}
//         onClick={() => handleClick(item.path)}
//         >
//           <item.icon className="menu-icon" />
//           <span className="menu-label">{item.label}</span>  
//         </button>
// ))}
// </div>
//     </div>
//   );
// };

// export default SideMenu
