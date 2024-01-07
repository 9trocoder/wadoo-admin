import React, { useState } from "react";
import userimg from "../../assets/img/Avatar.png";
import { notificationicon } from "../../constants/defaultValues";
import { notificationData } from "../../data/notification";
import Notificationitems from "../../components/Notificationitems";

function Topnav({ pageName }) {
  const [showNotification, setShowNotification] = useState(false);
  const [clickedNotification, setClickedNotification] = useState("0");

  // Hide notification
  const hidenotification = () => {
    setShowNotification(!showNotification);
  };

  // Show sub notification info
  const handleClickedNotification = (index) => {
    if (clickedNotification === index) {
      return setClickedNotification("0");
    }
    setClickedNotification(index);
  };

  return (
    <div className='topnav-container'>
      <label className='topnav-title'>{pageName}</label>
      <div className='topnav-right'>
        <div className='topnav-notification'>
          <div
            className='topnav-notification-btn'
            onClick={() => {
              hidenotification();
              setClickedNotification("0");
            }}
          >
            {notificationicon}
          </div>
          {showNotification && (
            <>
              <div
                className='topnav-notification-overlay'
                onClick={hidenotification}
              />
              <div className='topnav-notification-body'>
                {notificationData.map((item, index) => (
                  <Notificationitems
                    key={index}
                    item={item}
                    onToggle={() => handleClickedNotification(index)}
                    active={clickedNotification === index}
                  />
                ))}
                <label htmlFor='' className='seemore'>
                  See more
                </label>
              </div>
            </>
          )}
        </div>
        <div className='topnav-user'>
          <img src={userimg} alt='You' className='topnav-userimg' />
        </div>
      </div>
    </div>
  );
}

export default Topnav;
