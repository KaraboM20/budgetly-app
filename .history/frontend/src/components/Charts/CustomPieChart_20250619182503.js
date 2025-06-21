import React from 'react';
import {PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const CustomPieChart = ({data, labels, totalAmount, colors, showTextAnchor }) => {
  return <ResponsiveContainer width="100%" height={300}>
    <PieChart>
        <Pie data={data} dataKey="amount" nameKey="name" cx="50%" cy="50%"
        outerRadius={130} innerRadius={100} labelLine={false}>
          {data.map((entry, index) => {
            <Cell key={`cell-${index}`} fill={colors[]}
          })}  

        </Pie>
    </PieChart>
  </ResponsiveContainer>
}

export default CustomPieChart
