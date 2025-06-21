import React, { useEffect, useState } from 'react';
import { LuPlus } from "react-icons/lu";
import CustomBarChart from "../Charts/CustomBarChart";
import { prepareExpenseBarChartData } from '../../utils/helper';

const IncomeOverview = ({transactions, onAddIncome}) => {
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    const result = prepareExpenseBarChartData(transactions);
    setChartData(result);

    return () => {};
  }, [])
  return (
    <div>
      
    </div>
  )
}

export default IncomeOverview
