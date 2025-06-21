import React from 'react'
import { LuArrowRight } from 'react-icons/lu'

const RecentIncome = ({transactions, onSeeMore}) => {
  return (
    <div>
      <div>
        <h5>Income</h5>

        <button onClick={onSeeMore}>
            See All <LuArrowRight />
        </button>
      </div>
    </div>
  );
}

export default RecentIncome
