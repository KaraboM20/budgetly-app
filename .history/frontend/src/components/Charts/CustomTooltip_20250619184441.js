import React from 'react'

const CustomTooltip = ({active, payload}) => {
    if (active && payload && payload.length) {
       return (
        <div>
            <p></p>
        </div>
       )
    }
  
}

export default CustomTooltip
