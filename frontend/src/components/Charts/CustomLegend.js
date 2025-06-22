import React from 'react';

const CustomLegend = ({ payload }) => {
  return (
    <div>
      {payload.map((entry, index) => (
        <div key={`legend=${index}`} style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
          <div style={{ backgroundColor: entry.color, width: 16, height: 16, marginRight: 8 }}></div>
          <span>{entry.value}</span>
        </div>
      ))}
    </div>
  );
};

export default CustomLegend;
