import React from 'react';
import { XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Area, AreaChart } from 'recharts';

const CustomLineChart = ({ data }) => {
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div>
                    <p>{payload[0].payload.category}</p>
                    <p>
                    Amount: <span>${payload[0].payload.amount}</span>
                    </p>
                </div>
            );
        }
        return null;
    };

  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        
      </ResponsiveContainer>
    </div>
  )
}

export default CustomLineChart
