import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
const CustomBarChart = ({data}) => {
  return (
    <div>
      <ResponsiveContainer width="100" height={300}>
        <BarChart data={data}>
            <CartesianGrid stroke='none' />
            <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#555" }} stroke='none' />
            <YAxis tick={{ fontSize:12, fill:}}
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default CustomBarChart
