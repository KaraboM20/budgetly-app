import React from 'react'
import { useUserAuth } from '../../hooks/useUserAuth'
import DashboardLayout from '../../components/layout/DashboardLayout';

const Expense = () => {
  useUserAuth();

  
  return (
    <DashboardLayout activeMenu="Expense">
      <div>

      </div>
    </DashboardLayout>
  )
}

export default Expense
