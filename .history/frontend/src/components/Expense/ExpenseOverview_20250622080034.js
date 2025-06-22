import React, { useEffect, useState } from 'react';
import { LuPlus } from 'react-icons/lu';
import { prepareExpenseBarLineData } from '../../utils/helper';
import CustomLineChart from '../Charts/CustomLineChart';

const ExpenseOverview = ({ transactions, onExpenseIncome }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const result = prepareExpenseBarLineData(transactions);
    setChartData(result);

    return () => {};
  }, [transactions]);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h5>Expense Overview</h5>
          <p>
            Track your spending trends over time and gain insights into where your money goes.
          </p>
        </div>

        <button 
          onClick={onExpenseIncome} 
          style={{ 
            backgroundColor: '#4CAF50', 
            border: 'none', 
            color: 'white', 
            padding: '8px 12px', 
            borderRadius: '4px', 
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <LuPlus size={18} />
          Add Expense
        </button>
      </div>

      <div>
        <CustomLineChart data={chartData} />
      </div>
    </div>
  );
};

export default ExpenseOverview;
