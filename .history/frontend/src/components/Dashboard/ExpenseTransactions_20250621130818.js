import React from 'react';
import moment from 'moment';
import { LuArrowRight } from 'react-icons/lu';
import TransactionInfoCard from '../Cards/TransactionInfoCard';

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
        
      </div>
    </div>
  );
};

export default ExpenseTransactions
