import React, { useEffect, useState } from 'react';
import { prepareExpenseBarChartData } from '../../utils/helper';
import CustomBarChart from '../Charts/CustomBarChart';

const Last30DaysExpense = ({data}) => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
       console.log('Raw data:', data);
        const result = prepareExpenseBarChartData(data);
        console.log('Prepared chart data:', result);
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
