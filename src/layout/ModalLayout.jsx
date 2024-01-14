import React from "react";
import { closeIcon } from "../constants/defaultValues";

function ModalLayout({ onCloseModal, children, title, btnbool, btnClick, btnTxt }) {
  return (
    <>
      <div className='payout-modal-overlay' onClick={onCloseModal} />
      <div className='payout-modal-body'>
        <div className='payout-modal-top'>
          <label htmlFor='' className='payout-modal-title'>
            {title}
          </label>
          <div onClick={onCloseModal} className='payout-modal-closebtn'>
            {closeIcon}
          </div>
        </div>
        <div className='payout-modal-content'>
          <div className='payout-modal-form'>{children}</div>
          {btnbool ? (
            <button className='payout-modal-btn' onClick={btnClick}>
              {btnTxt}
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default ModalLayout;
