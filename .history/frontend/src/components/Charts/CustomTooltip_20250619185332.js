import React from 'react'

const CustomTooltip = ({active, payload}) => {
    if (active && payload && payload.length) {
       return (
        <div>
            <p>{payload[0].name}</p>
            <p>
                Amount:<
            </p>
        </div>
       )
    }
  
}

export default CustomTooltip
