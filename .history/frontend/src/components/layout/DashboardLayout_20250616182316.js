import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const DashboardLayout = ({children, activeMenu}) => {
  const {user} = useContext (UserContext);
  return (
    <div>
      <Navbar activeMenu={activeMenu} />

      {user && (
        <div className='flex'>
          <div className='max-[1080px]:hidden'>
            <SideMenu activeMenu={activeMenu} />
          </div>

          <div>
            {children}
          </div>
        </div>
      )
      }
    </div>
  )
}

export default DashboardLayout
