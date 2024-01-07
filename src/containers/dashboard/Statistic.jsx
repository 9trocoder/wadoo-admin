import React from "react";
import "../../assets/css/statistic.css";
import { statisData } from "../../data/statistic";
import StatisticCard from "../../components/StatisticCard";

function Statistic() {
  return (
    <div className='statics-container-fluid'>
      {statisData.map((items, index) => (
        <StatisticCard items={items} key={index} />
      ))}
    </div>
  );
}

export default Statistic;
