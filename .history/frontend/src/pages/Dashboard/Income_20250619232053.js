import React from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'

const Income = () => {
  return (
    <DashboardLayout activeMenu="Income">
      <div>
        <div>
          <div>
            <IncomeOverview
            transactions={incomeData}
            onAdd
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Income
