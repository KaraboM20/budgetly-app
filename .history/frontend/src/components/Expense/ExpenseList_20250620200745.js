import React from 'react'

const ExpenseList = ({transactions, onDelete, onDownload}) => {
  return (
    <div>
      <div>
        <h5>
            All Expense
        </h5>
        <button onClick={onDownload}>
            <LuDo
        </button>
      </div>
    </div>
  )
}

export default ExpenseList
