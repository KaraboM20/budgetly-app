import React from 'react'

const DashboardLayout = () => {
  return (
    <div>
      <Navbar activeMenu={activeMenu} />

      {user && (
        <div className='flex'>
          <div className=''>
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
