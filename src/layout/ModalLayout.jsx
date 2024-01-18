import React from "react";
import { closeIcon, leftArrowIcon } from "../constants/defaultValues";

function ModalLayout({
  onCloseModal,
  children,
  title,
  btnbool,
  btnClick,
  btnTxt,
  zindex,
  backbtn,
  backbtnClicked,
}) {
  let secondIndex = zindex + 1;
  return (
    <>
      <div className='payout-modal-overlay' style={{ zIndex: `${zindex}` }} />
      <div className='payout-modal-body' style={{ zIndex: `${secondIndex}` }}>
        <div className='payout-modal-top'>
          <div className='payout-modal-backtitle'>
            {backbtn && (
              <div className='modal-backbtn' onClick={backbtnClicked}>
                {leftArrowIcon}
              </div>
            )}
            <label htmlFor='' className='payout-modal-title'>
              {title}
            </label>
          </div>

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
