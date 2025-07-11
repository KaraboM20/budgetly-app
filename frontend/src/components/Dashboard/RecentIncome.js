import React from 'react'
import { LuArrowRight } from 'react-icons/lu'
import TransactionInfoCard from '../Cards/TransactionInfoCard';
import moment from 'moment';
import './RecentIncome.css';

const RecentIncome = ({transactions, onSeeMore}) => {
  return (
    <div className="recent-income-card">
      <div className="recent-income-header">
        <h5>Income</h5>

        <button className="see-all-btn" onClick={onSeeMore}>
            See All <LuArrowRight size={16} />
        </button>
      </div>

      <div className="recent-income-list">
        {transactions?.slice(0,5).map((item) => (
            <TransactionInfoCard 
            key={item._id}
            title={item.category}
            icon={item.icon}
            date={moment(item.date).format("Do MMM YYYY")}
            amount={item.amount}
            type="income"
            hideDeleteBtn
            />
        ))}
      </div>
    </div>
  );
};

export default RecentIncome
