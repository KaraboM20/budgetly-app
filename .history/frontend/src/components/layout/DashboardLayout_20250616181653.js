import React from 'react'

const DashboardLayout = () => {
  return (
    <div>
      <Navbar activeMenu={activeMenu} />

      {user && (
        <div>
          <div>
            <SideMenu active
          </div>
        </div>
      )
      }
    </div>
  )
}

export default DashboardLayout
