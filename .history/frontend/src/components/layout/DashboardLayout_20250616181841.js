import React from 'react'

const DashboardLayout = () => {
  return (
    <div>
      <Navbar activeMenu={activeMenu} />

      {user && (
        <div C>
          <div>
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
