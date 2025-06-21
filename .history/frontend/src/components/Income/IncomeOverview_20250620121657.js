import React, { useEffect, useState } from 'react';
import { LuPlus } from "react-icons/lu";
import CustomBarChart from "../Charts/CustomBarChart";
import { prepareExpenseBarChartData, prepareIncomeBarChartData } from '../../utils/helper';

const IncomeOverview = ({transactions, onAddIncome}) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const result = prepareIncomeBarChartData(transactions);
    setChartData(result);

    return () => {};
  }, [transactions]);

  return (
    <div>
      <div>
        <div>
        <h5>Income Overview</h5>
        <p>Track your earning over time and analyze your income trend</p>
      </div>

      <button onClick={onAddIncome}>
        <LuPlus />
        Add Income
      </button>
      </div>
      
    </div>
  )
}

export default IncomeOverview
