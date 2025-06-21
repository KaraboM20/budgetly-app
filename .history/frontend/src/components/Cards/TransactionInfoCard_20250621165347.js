import React from 'react';
import { LuUtensils, LuTrendingDown, LuTrendingUp, LuTrash2 } from 'react-icons/lu';
import './TransactionInfoCard.css';

const TransactionInfoCard = ({title, icon, date, amount, type, hideDeleteBtn, onDelete}) => {
    
  return (
    <div>
      <div>
        {icon? (
            <img src={icon} alt={title} />
        ) : (
            <LuUtensils />
        )}
      </div>

      <div>
        <p>{title}</p>
        <p>{date}</p>
      </div>

      <div>
        {!hideDeleteBtn && (
            <button onClick={onDelete}><LuTrash2 size={18} /></button>
        )}

        <div><h6>{type === "income" ? "+" : "-"} ${amount}</h6>
        {type === "income" ? <LuTrendingUp /> : <LuTrendingDown />}
        </div>
      </div>
    </div>
  )
}

export default TransactionInfoCard
