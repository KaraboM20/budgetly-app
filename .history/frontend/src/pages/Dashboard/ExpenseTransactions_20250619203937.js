import React from 'react'
import { LuArrowRight } from 'react-icons/lu'
import TransactionInfoCard from '../../components/Cards/TransactionInfoCard';

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
          <TransactionInfoCard
          key={expense._id} title={expense.category} 
          icon={expense.icon}
          date
        })}
      </div>
    </div>
  );
};

export default ExpenseTransactions
