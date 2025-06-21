import React from 'react';
import CustomPieChart from '../Charts/CustomPieChart';
import ''

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
        label="Total Balance"
        totalAmount={`$${totalBalance}`}
        colors={COLORS}
        showTextAnchor
        />

    </div>
  )
}

export default FinanceOverview
