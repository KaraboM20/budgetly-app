import React from 'react'

const CustomLegend = ({payload}) => {
  return (
    <div>
      {payload.map((entry, index) => {
        <div key={`legend=${}`}
      })}
    </div>
  )
}

export default CustomLegend
