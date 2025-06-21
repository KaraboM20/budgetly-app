import React from 'react'

const DashboardLayout = () => {
  return (
    <div>
      <Navbar activeMenu={activeMenu} />

      {user && (
        <div>
          <div>
            <Side
          </div>
        </div>
      )
      }
    </div>
  )
}

export default DashboardLayout
