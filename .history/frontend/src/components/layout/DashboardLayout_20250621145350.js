import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import Navbar from './Navbar';

const DashboardLayout = ({ children, activeMenu }) => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <Navbar activeMenu={activeMenu} />

      {user && (
        <div className="flex">
          

          <div className="flex-1">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
