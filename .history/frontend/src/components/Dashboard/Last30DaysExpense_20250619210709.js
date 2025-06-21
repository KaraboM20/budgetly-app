import React, { useState } from 'react';

const Last30DaysExpense = ({data}) => {
    const [chartData, setChartData] = useState([])
  return (
    <div>
      <div>
        <h5>Last 30 Days Expenses</h5>
      </div>
    </div>
  )
}

export default Last30DaysExpense
