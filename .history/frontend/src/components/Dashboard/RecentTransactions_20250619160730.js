import React from 'react';
import { LuArrowRight } from 'react-icons/lu';

const RecentTransactions = ({transactions, onSeeMore}) => {
  return (
    <div>
      <div>
        <h5>Recent Transactions</h5>

        <button onClick={onSeeMore}>
            See All <LuArrowRight />
            </button>
      </div>

      
    </div>
  );
};

export default RecentTransactions
