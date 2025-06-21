import React from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'

const Income = () => {

  const [open, setOpen]
  return (
    <DashboardLayout activeMenu="Income">
      <div>
        <div>
          <div>
            <IncomeOverview
            transactions={incomeData}
            onAddIncome={() => setOpenAddIncomeModal(true)}
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Income
