import React from 'react'

const ExpenseTransactions = ({transactions, onSeeMore}) => {
  return (
    <div>
      <div>
        <h5>Expenses</h5>

        <button onClick={onSeeMore}>
            See All
            
        </button>
      </div>
    </div>
  )
}

export default ExpenseTransactions
