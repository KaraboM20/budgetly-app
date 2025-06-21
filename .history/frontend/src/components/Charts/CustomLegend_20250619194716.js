import React from 'react'

const CustomLegend = ({payload}) => {
  return (
    <div>
      {payload.map((entry))}
    </div>
  )
}

export default CustomLegend
