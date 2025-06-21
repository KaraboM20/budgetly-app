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
            onAddIncome={() => setOpenAdd}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Income
