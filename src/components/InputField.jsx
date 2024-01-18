import React from "react";

function InputField({ label, type, onChange, placeholder }) {
  return (
    <div>
      <div className='flex-column'>
        <label htmlFor=''>{label}</label>
      </div>
      <div className='inputForm'>
        <input
          type={type}
          className='input'
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default InputField;
