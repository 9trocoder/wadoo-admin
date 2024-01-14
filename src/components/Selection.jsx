import React from "react";
import { dropdownIcon } from "../constants/defaultValues";

function Selection({
  options,
  showOptions,
  toggleOptions,
  selectedOption,
  handleOptionClick,
  label,
}) {
  return (
    <>
      <div className='flex-column'>
        <label htmlFor=''>{label}</label>
      </div>
      <div className='selection-input-container'>
        <div className='inputForm'>
          <input
            className='input selectioninput'
            value={selectedOption}
            onClick={toggleOptions}
            placeholder={selectedOption || "Select Business"}
            readOnly
          />

          {dropdownIcon}
        </div>
        {showOptions && (
          <>
            <div className='selection-overlay' onClick={toggleOptions} />
            <div className='selection-options'>
              {options.map((option) => (
                <p key={option} onClick={() => handleOptionClick(option)}>
                  {option}
                </p>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Selection;
