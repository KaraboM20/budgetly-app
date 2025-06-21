import React from 'react';
import { LuDownload } from 'react-icons/lu';
import TransactionInfoCard from '../Cards/TransactionInfoCard';

const IncomeList = ({transactions, onDelete, onDownload}) => {
  return (
    <div>
      <div>
        <h5>Income Sources</h5>

        <button onClick={onDownload}>
            <LuDownload />Download
        </button>
      </div>

      <div>
        {transactions?.map((income) => {
            <TransactionInfoCard
            key={income._id}
            title={income.source}
            icon={income.icon}
            date={moment(income.date).format("Do MMM YYYY")}
            amount={income.amount}
            type="income"
            
        })}
      </div>
    </div>
  )
}

export default IncomeList
