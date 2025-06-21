import React, { useContext } from 'react';
import { UserContextserContext } from '../../context/UserContext';

const DashboardLayout = () => {
  const {user} = useContext{userContext}
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
