import React, { useState } from "react";

import {
  addIcon,
  circleIcon,
  filterIcon,
  optionIcon,
} from "../../constants/defaultValues";
import InputField from "../../components/InputField";
import TextArea from "../../components/TextArea";
import Selection from "../../components/Selection";
import ModalLayout from "../../layout/ModalLayout";
import Checkbox from "../../components/Checkbox";
import ImageInput from "../../components/ImageInput";
import { serviceDetailsData } from "../../data/service_details_dadta";

function ServicesTopNav() {
  const [showAddService, setShowAddService] = useState(false);
  const [showServiceDetails, setShowServiceDetails] = useState(false);
  const [showOptionMenu, setShowOptionMenu] = useState(false);
  const options = ["Option 1", "Option 2", "Option 3"];
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleCheckbox = (isChecked) => {
    console.log("I just checked 9trocoder" + isChecked);
  };

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
          onClick={() => setShowAddService(!showAddService)}
        >
          {addIcon} Add New Service
        </button>
      </div>
      {showAddService && (
        <>
          <ModalLayout
            btnbool={true}
            onCloseModal={() => setShowAddService(false)}
            btnTxt='Add Service'
            title='Add Service'
            btnClick={() => {
              setShowServiceDetails(true);
              setShowAddService(false);
              setSelectedImage(null);
            }}
          >
            <Selection
              options={options}
              showOptions={showOptions}
              toggleOptions={toggleOptions}
              selectedOption={selectedOption}
              handleOptionClick={handleOptionClick}
              label='Business Name'
            />
            <InputField label='Service Name' placeholder='Service Name' />
            <TextArea placeholder='Description' label='Description' />
            <InputField label='Price' placeholder='Price' type='number' />
            <Checkbox label='Negotiable' onChange={handleCheckbox} />

            <div className='service-image'>
              <p className='service-image-text'>Service Images</p>
              <ImageInput
                selectedImage={selectedImage}
                handleSelectedImage={handleImageChange}
                handleDeletImage={handleDeletImage}
              />
            </div>
          </ModalLayout>
        </>
      )}

      {showServiceDetails && (
        <ModalLayout
          btnbool={false}
          onCloseModal={() => {
            setShowServiceDetails(false);
          }}
          title='Service Details'
        >
          <table className='service-details-table'>
            {serviceDetailsData.map((item, index) => (
              <div key={index}>
                <tr>
                  <th>Business Name</th>
                  <td>{item.business_name}</td>
                </tr>
                <tr>
                  <th>Service Name</th>
                  <td>{item.service_name}</td>
                </tr>
                <tr>
                  <th>Description</th>
                  <td>{item.description}</td>
                </tr>
                <tr>
                  <th>Price</th>
                  <td>{item.price}</td>
                </tr>
                <tr>
                  <th>Negotiable</th>
                  <td>{item.negotiable}</td>
                </tr>
                <tr>
                  <th>Date Created</th>
                  <td>{item.date_created}</td>
                </tr>
                <tr>
                  <th>Actions</th>
                  <td className='optionbtn-modal'>
                    <div
                      className='optionbtn'
                      onClick={() => setShowOptionMenu(true)}
                    >
                      {optionIcon}
                    </div>
                    {showOptionMenu && (
                      <>
                        <div
                          className='optionmenu-overlay'
                          onClick={() => setShowOptionMenu(false)}
                        />
                        <div className='optionmenu-body'>
                          <p className='optionmenu-item'>Edit</p>
                          <p className='optionmenu-item'>Suspend</p>
                          <p className='optionmenu-item'>Delete</p>
                        </div>
                      </>
                    )}
                  </td>
                </tr>
              </div>
            ))}
          </table>
          <div className='service-image'>
            <p className='service-image-text'>Service Images</p>
            <img
              src={
                selectedImage !== null ? URL.createObjectURL(selectedImage) : ""
              }
              alt=''
              className='imageinput-selection-box'
            />
          </div>
        </ModalLayout>
      )}
    </div>
  );
}

export default ServicesTopNav;
