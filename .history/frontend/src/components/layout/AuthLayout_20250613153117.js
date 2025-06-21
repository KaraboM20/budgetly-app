import React, { Children } from 'react'
import './AuthLayout.css';

const AuthLayout = ({children}) => {
  return (
    <div className='auth-layout'>
        <div>
            <h2 className='h2-'>Budgetly</h2>
            {children}
        </div>
    </div>
  )
}

export default AuthLayout
