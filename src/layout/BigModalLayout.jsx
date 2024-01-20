import React from "react";
import { closeIcon } from "../constants/defaultValues";

function BigModalLayout({ onCloseModal, children, title, zindex }) {
  let secondIndex = zindex + 1;
  return (
    <>
      <div className='payout-modal-overlay' style={{ zIndex: `${zindex}` }} />
      <div
        className='payout-bigmodal-body'
        style={{ zIndex: `${secondIndex}` }}
      >
        <div className='payout-modal-top'>
          <label className='payout-modal-title'>{title}</label>
          <div className='payout-modal-closebtn' onClick={onCloseModal}>{closeIcon}</div>
        </div>
        <div className='payout-modal-content'>
          <div className='payout-modal-container'>{children}</div>
        </div>
      </div>
    </>
  );
}

export default BigModalLayout;
