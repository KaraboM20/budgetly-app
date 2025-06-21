import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import Navbar from './Navbar';
import SideMenu from './SideMenu'; 
import './DashboardLayout.css'; // for layout styles

const DashboardLayout = ({ children, activeMenu }) => {
  const { user } = useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="dashboard-wrapper">
      <Navbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <div className={`main-content ${isMenuOpen ? 'menu-open' : ''}`}>
        {isMenuOpen && (
          <SideMenu activeMenu={activeMenu} />
        )}

        <div className="page-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
