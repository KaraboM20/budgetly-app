import React from 'react'

const RecentIncome = ({transactions, onSeeMore}) => {
  return (
    <div>
      <div>
        <h5>Income</h5>

        <button onClick={onSeeMore}>
            See All <LuArrowRi
        </button>
      </div>
    </div>
  )
}

export default RecentIncome
