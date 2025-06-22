import React, { useEffect, useState } from 'react';
import { prepareExpenseBarLineData } from '../../utils/helper';
import CustomLineChart from '../Charts/CustomLineChart';

const ExpenseOverview = ({transactions, onExpenseIncome}) => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const result = prepareExpenseBarLineData(transactions);
        setChartData(result);

        return() => {};
    }, [transactions]);

  return (
    <div>
    <div>
      <div>
        <h5>Expense Overview</h5>
        <p>Track your spending trends over time and gain insights into where
            your money goes.
        </p>
      </div>

     
    </div>

    <div>
      <CustomLineChart data={chartData} /> 
    </div>
    </div>
  )
}

export default ExpenseOverview
