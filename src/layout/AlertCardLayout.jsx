import React from "react";
import { closeIcon } from "../constants/defaultValues";
import "../assets/css/layout.css"

function AlertCardLayout({
  title,
  text,
  acceptClick,
  declineClick,
  closeModal,
}) {
  return (
    <>
      <div className='alertcardlayout_overlay' />
      <div className="alertcardlayout_body">
        <div className='alertcardlayout_container'>
        <div className='alertcard_top'>
          <p className='alertcard_top_title'>{title}</p>
          <div className='alertcard_top_close' onClick={closeModal}>{closeIcon}</div>
        </div>
        <div className='alertcard_middle'>
          <p className='alertcard_middle_title'>{text}</p>
        </div>
        <div className='alertcard_bottom'>
          <button className='alertcard_btn alertcard_btn_decline' onClick={declineClick}>No</button>
          <button className='alertcard_btn alertcard_btn_accept'onClick={acceptClick}>Yes</button>
        </div>
      </div>
      </div>
      
    </>
  );
}

export default AlertCardLayout;
