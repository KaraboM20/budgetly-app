import React from 'react';
import {PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const CustomPieChart = ({data, labels, totalAmount, colors, showTextAnchor }) => {
  return <ResponsiveContainer width="100%" height={300}>
    <PieChart>
        <Pie data={data} dataKey="amount" nameKey=>

        </Pie>
    </PieChart>
  </ResponsiveContainer>
}

export default CustomPieChart
