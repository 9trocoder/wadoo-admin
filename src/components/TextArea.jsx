import React from "react";

function TextArea({ label, placeholder, onChange }) {
  return (
    <>
      <div className='flex-column'>
        <label htmlFor=''>{label}</label>
      </div>
      <div className='inputForm'>
        <textarea
          className='input text-area'
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </>
  );
}

export default TextArea;
