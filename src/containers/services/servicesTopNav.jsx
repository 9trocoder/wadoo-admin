import React, { useState } from "react";

import {
  addIcon,
  circleIcon,
  closeIcon,
  filterIcon,
} from "../../constants/defaultValues";
import InputField from "../../components/InputField";
import TextArea from "../../components/TextArea";
import Selection from "../../components/Selection";

function ServicesTopNav() {
  const [showAddService, setShowAddService] = useState(false);
  const options = ["Option 1", "Option 2", "Option 3"];
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
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
          onClick={() => setShowAddService(!showAddService)}
        >
          {addIcon} Add New Customer
        </button>
      </div>
      {showAddService && (
        <>
          <div
            className='payout-modal-overlay'
            onClick={() => setShowAddService(false)}
          />
          <div className='payout-modal-body'>
            <div className='payout-modal-top'>
              <label htmlFor='' className='payout-modal-title'>
                Add Service
              </label>
              <div
                className='payout-modal-closebtn'
                onClick={() => setShowAddService(false)}
              >
                {closeIcon}
              </div>
            </div>
            <div className='payout-modal-content'>
              <div className='payout-modal-form'>
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
              </div>
              <button className='payout-modal-btn'>Add Service</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ServicesTopNav;
