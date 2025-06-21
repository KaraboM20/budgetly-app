import React from 'react'
import { LuDownload } from 'react-icons/lu'

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
          <Tran  
        })}
      </div>
    </div>
  )
}

export default ExpenseList
