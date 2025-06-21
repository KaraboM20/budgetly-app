import React from 'react'
import { useUserAuth } from '../../hooks/useUserAuth'
import DashboardLayout from '../../components/layout/DashboardLayout';

const Expense = () => {
  useUserAuth();
  return (
    <DashboardLayout
  )
}

export default Expense
