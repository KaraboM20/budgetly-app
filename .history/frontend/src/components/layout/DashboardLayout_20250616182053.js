import React, { useContext } from 'react'

const DashboardLayout = () => {
  const {user} = useContext{}
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
