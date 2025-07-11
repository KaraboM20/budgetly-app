import React from 'react';
import { LuUtensils, LuTrendingDown, LuTrendingUp, LuTrash2 } from 'react-icons/lu';

const TransactionInfoCard = ({title, icon, date, amount, type, hideDeleteBtn}) => {
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
        !hideDeleteBtn && ()
      </div>
    </div>
  )
}

export default TransactionInfoCard
