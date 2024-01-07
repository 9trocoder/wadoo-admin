import React from "react";

function StatisticCard({ items }) {
  const { num, icon, statsname } = items;
  return (
    <div className='static-card-container'>
      <div className='static-card-icon'>{icon}</div>
      <div className='static-card-info'>
        <p className='static-card-info-num'>{num}</p>
        <p className='static-card-info-name'>{statsname}</p>
      </div>
    </div>
  );
}

export default StatisticCard;
