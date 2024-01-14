import React, { useState } from "react";
import { servicesIcon } from "../../constants/defaultValues";
import InputField from "../../components/InputField";
import TextArea from "../../components/TextArea";
import ModalLayout from "../../layout/ModalLayout";
import ToastMessage from "../../components/ToastMessage";

function Payout() {
  const [showPayout, setShowPayout] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const showToastMessage = () => {
    setShowToast(true);

    // Automatically hide the toast after 3000ms (3 seconds)
    setTimeout(() => {
      setShowToast(false);
    }, 4000);
  };

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
          <ModalLayout
            btnbool={true}
            onCloseModal={() => setShowPayout(false)}
            btnTxt='Payout'
            title='Payout'
            btnClick={() => {
              setShowPayout(false);
              showToastMessage();
            }}
          >
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
          </ModalLayout>
        </>
      )}

      <ToastMessage
        message={`Payout to [Name] was successful`}
        type='successful'
        showToast={showToast}
      />
    </div>
  );
}

export default Payout;
