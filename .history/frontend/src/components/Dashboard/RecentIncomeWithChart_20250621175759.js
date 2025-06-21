import React, { useEffect, useState } from 'react';
import CustomPieChart from '../Charts/CustomPieChart';
import './RecentIncomeWithChart.css'; // <-- for styles

const COLORS = ["#875CF5", "#FA2C37", "#4f39f6"];

const RecentIncomeWithChart = ({ data, totalIncome }) => {
  const [chartData, setChartData] = useState([]);

  const prepareChartData = () => {
    const dataArr = data?.map((item) => ({
      name: item?.category || item?.source || "Unknown",
      amount: item?.amount || 0,
    }));
    setChartData(dataArr);
  };

  useEffect(() => {
    prepareChartData();
    return () => {};
  }, [data]);

  return (
    <div className="income-chart-card">
      <h5>Last 60 Days Income</h5>

      <CustomPieChart
        data={chartData}
        label="Total Income"
        totalAmount={`$${totalIncome}`}
        showTextAnchor
        colors={COLORS}
      />

      {/* Color Legends */}
      <div className="color-legend">
        {chartData.map((entry, index) => (
          <div key={index} className="legend-item">
            <span
              className="legend-color"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            ></span>
            <span className="legend-label">{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentIncomeWithChart;
