import React from 'react';

const COLORS = ["#875CF5", "#FA2C37", "#FF6900"];

const FinanceOverview = ({totalBalance, totalIncome, totalExpense}) => {

    const balanceData = [
    { name: "Total Balance", amount: totalBalance},
    { name: "Total Expense", amount: totalExpense},
    { name: "Total Income", amount: totalIncome},
    ];

  return (
    <div>
        <div>
           <h5>Financial Overview</h5> 
        </div>

        <CustomPieChart
        data={balanceData}
    </div>
  )
}

export default FinanceOverview
