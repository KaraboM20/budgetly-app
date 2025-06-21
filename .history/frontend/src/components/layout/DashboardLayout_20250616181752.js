import React from 'react'

const DashboardLayout = () => {
  return (
    <div>
      <Navbar activeMenu={activeMenu} />

      {user && (
        <div>
          <div>
            <SideMenu activeMenu={activeMenu} />
          </div>

          <div></d
        </div>
      )
      }
    </div>
  )
}

export default DashboardLayout
