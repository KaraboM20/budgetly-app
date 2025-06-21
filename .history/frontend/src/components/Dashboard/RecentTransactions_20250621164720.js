import React from 'react';
import { IoMdDocument } from 'react-icons/io';
import { LuArrowRight } from 'react-icons/lu';
import moment from 'moment';
import TransactionInfoCard from '../Cards/TransactionInfoCard';
import './.recent-transactions-container {
  padding: 20px;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.recent-transactions-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.recent-transactions-header h5 {
  font-size: 18px;
  font-weight: 600;
  color: #333;
}

.recent-transactions-header button {
  background: none;
  border: none;
  color: #007bff;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
}
'

const RecentTransactions = ({transactions, onSeeMore}) => {
  return (
    <div>
      <div>
        <h5>Recent Transactions</h5>

        <button onClick={onSeeMore}>
            See All <LuArrowRight />
            </button>
      </div>

      <div>
        {transactions?.slice(0, 5)?.map((item) => (
        <TransactionInfoCard
        key={item._id}
        title={item.type == 'expense' ? item.category : item.source}
        icon={item.icon}
        date={moment(item.date).format("Do MMM YYYY")}
        amount={item.amount}
        type={item.type}
        hideDeleteBtn
        />
      ))}
     </div>

    </div>
  );
};

export default RecentTransactions
