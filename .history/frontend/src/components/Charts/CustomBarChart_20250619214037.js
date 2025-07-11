import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
const CustomBarChart = ({data}) => {
  return (
    <div>
      <ResponsiveContainer width="100" height={300}>
        <BarChart data={data}>
            <CartesianGrid stroke='none' />
            <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#555" }} stroke='none' />
            <YAxis tick={{ fontSize:12, fill:"#555" }} stroke='none' />

            <Tooltip content={CustomTooltip} />
            <Bar dataKey="amount"
            fill="#FF804"
            radius={(10, 10, 0, 0)}
            activeDot={{r:8, fill: "yellow" }}
            activeStyle={{ fill: "green"}}
            >
                {data.map(())}
            </Bar>

        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default CustomBarChart
