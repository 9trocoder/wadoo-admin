import React from "react";

const Notificationitems = ({ item, onToggle, active }) => {
  const { title, date, time, infolist } = item;
  return (
    <button className='topnav-notification-item' onClick={onToggle}>
      <div className='topnav-notification-item-top' onClick={onToggle}>
        <div className='topnav-notification-title'>{title}</div>
        <div className='topnav-notification-datetime'>
          <div className='topnav-notification-date'>{date}</div>
          {","}
          <div className='topnav-notification-time'>{time}</div>
        </div>
      </div>

      <div
        className={`topnav-notification-items ${
          active ? "topnav-notification-itemsopen" : ""
        }`}
      >
        <div className='topnav-notification-items-content'>
          {infolist.map((item, index) => (
            <button className='topnav-notification-items-btn' key={index}>
              {item.title}
            </button>
          ))}
        </div>
      </div>
    </button>
  );
};

export default Notificationitems;
