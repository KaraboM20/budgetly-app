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
        <AreaChart data={data}>
        <defs>
            <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
             <stop offset="5%"  stopColor="#875cf5" stopOpacity={0.4} />
             <stop offset="95%" stopcolor="#87cf5" stopOpacity={0} />
            </linearGradient>
        </defs>

        <CartesianGrid stroke="none" />
        <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#55"}}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default CustomLineChart
