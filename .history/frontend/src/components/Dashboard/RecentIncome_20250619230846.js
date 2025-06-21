import React from 'react'
import { LuArrowRight } from 'react-icons/lu'
import TransactionInfoCard from '../Cards/TransactionInfoCard';

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
            <TransactionInfoCard key=
        })}
      </div>
    </div>
  );
};

export default RecentIncome
