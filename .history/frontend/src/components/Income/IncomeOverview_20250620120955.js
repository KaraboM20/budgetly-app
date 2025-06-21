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
        <h5></h5>
      </div>
    </div>
  )
}

export default IncomeOverview
