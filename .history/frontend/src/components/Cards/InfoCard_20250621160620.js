import React from 'react';
import './InfoCard.css';

const InfoCard = ({icon, label, value}) => {
  return (
    <div>
      <div>{icon}</div>
      <div>
        <h6>{label}</h6>
        <span>${value}</span>
      </div>
    </div>
  )
}

export default InfoCard
