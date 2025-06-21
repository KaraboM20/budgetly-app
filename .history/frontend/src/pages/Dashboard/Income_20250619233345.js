import React, { useState } from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'

const Income = () => {

  const [incomeData, seIncomeData] = useState([]);
  const [loading, setLoading] = us

  const [openAddIncomeModal, setOpenAddIncomeModal] = useState(false)

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
