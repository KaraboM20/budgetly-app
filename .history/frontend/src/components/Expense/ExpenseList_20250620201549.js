import React from 'react'
import { LuDownload } from 'react-icons/lu'
import TransactionInfoCard from '../Cards/TransactionInfoCard'

const ExpenseList = ({transactions, onDelete, onDownload}) => {
  return (
    <div>
      <div>
        <h5>
            All Expense
        </h5>
        <button onClick={onDownload}>
            <LuDownload /> Download
        </button>
      </div>

      <div>
        {transactions?.map((expense) => {
          <TransactionInfoCard
          key={expense._id} 
          title={expense.category}
          date={moment(expense.date).format("Do MMM YYYY")}
          amount={expense.amount}
          type="expense"
          onDelete={() => onDelete(expense._id)}
          />
        })}
      </div>
    </div>
  )
}

export default ExpenseList
