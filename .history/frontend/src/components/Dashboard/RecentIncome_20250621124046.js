import React from 'react'
import { LuArrowRight } from 'react-icons/lu'
import TransactionInfoCard from '../Cards/TransactionInfoCard';
import mo

const RecentIncome = ({transactions, onSeeMore}) => {
  return (
    <div>
      <div>
        <h5>Income</h5>

        <button onClick={onSeeMore}>
            See All <LuArrowRight />
        </button>
      </div>

      <div>
        {transactions?.slice(0,5).map((item) => {
            <TransactionInfoCard key={item._id}
            title={item.source}
            icon={item.icon}
            date={moment(item.date).format("Do MMM YYYY")}
            amount={item.amount}
            type="income"
            hideDeleteBtn
            />
        })}
      </div>
    </div>
  );
};

export default RecentIncome
