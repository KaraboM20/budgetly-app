import React from 'react';
import { XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Area, AreaChart } from 'recharts';

const CustomLineChart = ({ data }) => {
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div>
                    <p>{payload[0].payload.category}</p>
                    <p>Amount:</p>
                </div>
            )
        }
    }
  return (
    <div>
      
    </div>
  )
}

export default CustomLineChart
