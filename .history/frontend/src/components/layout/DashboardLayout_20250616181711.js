import React from 'react'

const DashboardLayout = () => {
  return (
    <div>
      <Navbar activeMenu={activeMenu} />

      {user && (
        <div>
          <div>
            <SideMenu activeMenu={act}
          </div>
        </div>
      )
      }
    </div>
  )
}

export default DashboardLayout
