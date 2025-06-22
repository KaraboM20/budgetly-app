import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import Navbar from './Navbar';
import './DashboardLayout.css';

const DashboardLayout = ({ children, activeMenu }) => {
  

  return (
    <div className="dashboard-wrapper">
      <Navbar activeMenu={activeMenu} />
      <div className="main-content">
        <div className="page-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;