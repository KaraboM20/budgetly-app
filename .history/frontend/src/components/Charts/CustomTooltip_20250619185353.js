import React from 'react'

const CustomTooltip = ({active, payload}) => {
    if (active && payload && payload.length) {
       return (
        <div>
            <p>{payload[0].name}</p>
            <p>
                Amount:<span>${pay</span>
            </p>
        </div>
       )
    }
  
}

export default CustomTooltip
