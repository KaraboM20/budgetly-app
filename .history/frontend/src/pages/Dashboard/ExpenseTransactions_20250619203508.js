import React from 'react'
import { LuArrowRight } from 'react-icons/lu'

const ExpenseTransactions = ({transactions, onSeeMore}) => {
  return (
    <div>
      <div>
        <h5>Expenses</h5>

        <button onClick={onSeeMore}>
            See All
            <LuArrowRight />
        </button>

      </div>
      <div>
        {transactions?.slice(0,5)?.map((expense) => {
          <Tr  
        })}
      </div>
    </div>
  );
};

export default ExpenseTransactions
