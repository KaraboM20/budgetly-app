import React from 'react'

const CustomLegend = ({payload}) => {
  return (
    <div>
      {payload.map((entry, index) => {
        <div key={`legend=${index}`}>
          <div style={{ backgroundColor}}></div>  
        </div>
      })}
    </div>
  )
}

export default CustomLegend
