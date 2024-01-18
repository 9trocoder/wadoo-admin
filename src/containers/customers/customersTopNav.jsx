import React, { useState } from "react";
import { addIcon, circleIcon, filterIcon } from "../../constants/defaultValues";
import InputField from "../../components/InputField";
import ModalLayout from "../../layout/ModalLayout";
import AddPhoto from "../../components/AddPhoto";
import "../../assets/css/customers.css";

function CustomersTopNav() {
  const [showAddCustomer, setShowAddCustomer] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setSelectedImage(file);
  };

  const handleDeletImage = () => {
    setSelectedImage(null);
  };
  return (
    <div className='servicetopnav-container-body'>
      <div className='servicestopnav-container'>
        <div className='servicestopnav-container-left'>
          <div className='services-inputForm'>
            {circleIcon}
            <input
              type='text'
              placeholder='Search'
              className='services-input'
            />
          </div>
          <div className='services-filter'>{filterIcon}</div>
        </div>
        <button
          className='services-add-btn'
          onClick={() => setShowAddCustomer(!showAddCustomer)}
        >
          {addIcon} Add New Customer
        </button>
      </div>
      {showAddCustomer && (
        <>
          <ModalLayout
            btnbool={true}
            onCloseModal={() => setShowAddCustomer(false)}
            btnTxt='Add Customer'
            title='Add Customers'
            btnClick={() => {}}
          >
            <AddPhoto
              selectedImage={selectedImage}
              handleSelectedImage={handleImageChange}
              handleDeletImage={handleDeletImage}
            />
            <div className='spacer'></div>
            <div className='add-customer-input-container'>
              <InputField
                label='First Name'
                type='text'
                placeholder='First Name'
              />
              <InputField
                label='Last Name'
                type='text'
                placeholder='Last Name'
              />
            </div>
            <div className='add-customer-input-container'>
              <InputField
                label='Email Address'
                type='email'
                placeholder='Email Address'
              />
              <InputField
                label='Phone Number'
                type='tel'
                placeholder='Phone Number'
              />
            </div>
            <InputField label='Address' type='text' placeholder='Address' />
          </ModalLayout>
        </>
      )}
    </div>
  );
}

export default CustomersTopNav;
