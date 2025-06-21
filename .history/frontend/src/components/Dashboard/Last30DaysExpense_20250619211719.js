import React, { useEffect, useState } from 'react';

const Last30DaysExpense = ({data}) => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const result = prepareExpenseBarChartDat(data);
        setChartData(result);

        return() => {};
    }, [data]);


  return (
    <div>
      <div>
        <h5>Last 30 Days Expenses</h5>
      </div>
    </div>
  )
}

export default Last30DaysExpense
