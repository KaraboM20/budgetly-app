import React from 'react';
import { LuUtensils, LuTrendingDown, LuTrendingUp, LuTrash2 } from 'react-icons/lu';
import './TransactionInfoCard.css';

const TransactionInfoCard = ({title, icon, date, amount, type, hideDeleteBtn, onDelete}) => {
    
  return (
    <div className="transaction-card">
      <div className="transaction-icon">
        {icon? (
            <img src={icon} alt={title} />
        ) : (
            <LuUtensils />
        )}
      </div>

      <div className="transaction-details">
        <p className="transaction-title">{title}</p>
        <p className="transaction-date">{date}</p>
      </div>

      <div className="transaction-right">
        {!hideDeleteBtn && (
            <button className="delete-button" onClick={onDelete}><LuTrash2 size={18} /></button>
        )}

        <div className='transaction-amount'><h6>{type === "income" ? "+" : "-"} ${amount}</h6>
        {type === "income" ? <LuTrendingUp /> : <LuTrendingDown />}
        </div>
      </div>
    </div>
  )
}

export default TransactionInfoCard
