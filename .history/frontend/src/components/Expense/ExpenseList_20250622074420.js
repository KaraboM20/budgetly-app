import React from 'react';
import TransactionInfoCard from '../Cards/TransactionInfoCard';
import moment from 'moment';

const ExpenseList = ({ transactions, onDelete, onDownload }) => {
  return (
    <div>
      <div>
        {/* You can add a download button here if needed */}
      </div>

      <div>
        {transactions?.map((expense) => (
          <TransactionInfoCard
            key={expense._id}
            title={expense.category}
            date={moment(expense.date).format("Do MMM YYYY")}
            amount={expense.amount}
            type="expense"
            onDelete={() => onDelete(expense._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpenseList;
