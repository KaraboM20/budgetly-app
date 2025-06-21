import React from 'react';
import { LuDownload } from 'react-icons/lu';
import TransactionInfoCard from '../Cards/TransactionInfoCard';
import moment from 'moment';

const IncomeList = ({transactions, onDelete, onDownload}) => {
  return (
    <div>
      

      <div>
        {transactions?.map((income) => {
            <TransactionInfoCard
            key={income._id}
            title={income.source}
            icon={income.icon}
            date={moment(income.date).format("Do MMM YYYY")}
            amount={income.amount}
            type="income"
            onDelete={() => onDelete(income._id)}
            />
        })}
      </div>
    </div>
  )
}

export default IncomeList
