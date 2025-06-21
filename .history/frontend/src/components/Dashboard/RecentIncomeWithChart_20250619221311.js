import React from 'react'
import CustomPieChart from '../Charts/CustomPieChart'

const RecentIncomeWithChart = ({data, totalIncome}) => {
  return (
    <div>
      <div>
        <h5>Last 60 Days Income</h5>
      </div>

      <CustomPieChart data={chartData}
      label="Total Income" totalAmount={`$${totalIncome}`}
      showTextAnchor
      colors={COLORS}
      />
    </div>
  )
}

export default RecentIncomeWithChart
