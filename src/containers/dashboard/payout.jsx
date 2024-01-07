import React, { useState } from "react";
import { closeIcon, servicesIcon } from "../../constants/defaultValues";
import InputField from "../../components/InputField";
import TextArea from "../../components/TextArea";

function Payout() {
  const [showPayout, setShowPayout] = useState(false);
  return (
    <div className='payout-container-body'>
      <div className='payout-container'>
        <div className='static-card-container'>
          <div className='static-card-icon'>{servicesIcon}</div>
          <div className='static-card-info'>
            <p className='static-card-info-num'>N265,244</p>
            <p className='static-card-info-name'>Revenue</p>
          </div>
        </div>
        <button
          className='payout-btn pyb'
          onClick={() => setShowPayout(!showPayout)}
        >
          Payout
        </button>
      </div>

      {showPayout && (
        <>
          <div
            className='payout-modal-overlay'
            onClick={() => setShowPayout(false)}
          />
          <div className='payout-modal-body'>
            <div className='payout-modal-top'>
              <label htmlFor='' className='payout-modal-title'>
                Payout
              </label>
              <div
                onClick={() => setShowPayout(false)}
                className='payout-modal-closebtn'
              >
                {closeIcon}
              </div>
            </div>
            <div className='payout-modal-content'>
              <div className='payout-modal-form'>
                <InputField label='Bank Name' placeholder='Select Bank' />
                <InputField
                  label='Account Number'
                  placeholder='Account Number'
                  type='text'
                />
                <InputField
                  label='Account Name'
                  placeholder='Account Name (Filled after account first two inputs)'
                  type='text'
                />
                <InputField label='Amount' type='number' placeholder='Amount' />
                <TextArea label='Description' placeholder='Description' />
              </div>
              <button
                className='payout-modal-btn'
                onClick={() => setShowPayout(!showPayout)}
              >
                Payout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Payout;
