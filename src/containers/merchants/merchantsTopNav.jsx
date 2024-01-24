import React, { useState } from "react";
import { addIcon, circleIcon, filterIcon } from "../../constants/defaultValues";
import ModalLayout from "../../layout/ModalLayout";
import AddPhoto from "../../components/AddPhoto";
import InputField from "../../components/InputField";
import Selection from "../../components/Selection";

function MerchantsTopNav() {
  const [showAddMerchants, setShowAddMerchants] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const options = ["Option 1", "Option 2", "Option 3"];
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setSelectedImage(file);
  };
  const handleDeletImage = () => {
    setSelectedImage(null);
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
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
          onClick={() => setShowAddMerchants(!showAddMerchants)}
        >
          {addIcon} Add New Merchant
        </button>
      </div>
      {showAddMerchants && (
        <>
          <ModalLayout
            btnbool={true}
            onCloseModal={() => setShowAddMerchants(false)}
            btnTxt='Add Merchant'
            title='Add Merchant'
            btnClick={() => {}}
            zindex={1}
          >
            <AddPhoto
              selectedImage={selectedImage}
              handleSelectedImage={handleImageChange}
              handleDeletImage={handleDeletImage}
            />
            <div className='spacer'></div>
            <InputField
              label='Business Name'
              type='text'
              placeholder='Business Name'
            />
            <Selection
              label='Business Type'
              options={options}
              showOptions={showOptions}
              toggleOptions={toggleOptions}
              selectedOption={selectedOption}
              handleOptionClick={handleOptionClick}
            />
            <div className='add-customer-input-container'>
              <InputField
                label='Business Email'
                type='text'
                placeholder='Business Email'
              />
              <InputField
                label='Phone Number'
                type='tel'
                placeholder='Phone Number'
              />
            </div>
            <InputField label='Address' type='text' placeholder='Address' />
            <InputField
              label='Working Days'
              placeholder='Select Working Days'
              type='text'
            />
          </ModalLayout>
        </>
      )}
    </div>
  );
}

export default MerchantsTopNav;
