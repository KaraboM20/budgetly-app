import React from 'react';
import { IoMdDocument } from 'react-icons/io';
import { LuArrowRight } from 'react-icons/lu';
import moment from 'moment';
import TransactionInfoCard from '../Cards/TransactionInfoCard';

const RecentTransactions = ({transactions, onSeeMore}) => {
  return (
    <div>
      <div>
        <h5>Recent Transactions</h5>

        <button onClick={onSeeMore}>
            See All <LuArrowRight />
            </button>
      </div>

      <div>{transactions?.slice(0,5)?.map((item) => {
        <TransactionInfoCard
        key={item._id}
        title={item.type == 'expense' ? item.category : item.source}
        icon={item.icon}
        date={moment(item.date).format("Do MMM YYYY")}
        amount={item.amount}
        type={item.type}
        hideDeleteBtn
        />
      })}
     </div>
    </div>
  );
};

export default RecentTransactions
