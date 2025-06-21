import React, { useEffect, useState } from 'react';
import { prepareExpenseBarChartData } from '../../utils/helper';
import CustomBarChart from '../Charts/CustomBarChart';

const Last30DaysExpense = ({data}) => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
      
        const result = prepareExpenseBarChartData(data);
        setChartData(result);

        return() => {};
    }, [data]);


  return (
    <div>
      <div>
        <h5>Last 30 Days Expenses</h5>
      </div>


      <CustomBarChart data={chartData} />
    </div>
  )
}

export default Last30DaysExpense
