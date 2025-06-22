import React, { useEffect, useState } from 'react';
import CustomBarChart from "../Charts/CustomBarChart";
import { prepareIncomeBarChartData } from '../../utils/helper';
import './IncomeOverview.css'; 

const IncomeOverview = ({ transactions }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const result = prepareIncomeBarChartData(transactions);
    setChartData(result);
  }, [transactions]);

  return (
    <div className="income-overview-section">
      <div className="income-overview-header">
        <div>
          <h5 className="income-title">Income Overview</h5>
          <p className="income-description">
            Track your earning over time and analyze your income trend
          </p>
        </div>

        
      </div>

      <div className="income-chart-wrapper">
        <CustomBarChart data={chartData} />
      </div>
    </div>
  );
};

export default IncomeOverview;
