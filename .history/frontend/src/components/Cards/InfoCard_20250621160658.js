import React from 'react';
import './InfoCard.css';

const InfoCard = ({icon, label, value}) => {
  return (
    <div className="info-card">
      <div className="icon-box">{icon}</div>
      <div className="info-text">
        <h6>{label}</h6>
        <span>${value}</span>
      </div>
    </div>
  )
}

export default InfoCard
