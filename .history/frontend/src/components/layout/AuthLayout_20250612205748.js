import React, { Children } from 'react'
import

const AuthLayout = ({children}) => {
  return (
    <div>
        <div>
            <h2>Expense Tracker</h2>
            {children}
        </div>
    </div>
  )
}

export default AuthLayout
