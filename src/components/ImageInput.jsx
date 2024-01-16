import React from "react";
import { imageCloseIcon, uploadImageIcon } from "../constants/defaultValues";

function ImageInput({ selectedImage, handleSelectedImage, handleDeletImage }) {
  return (
    <div className='imageinput-container'>
      {selectedImage ? (
        <div className='imageinput-isselected'>
          <div className='dselected-image'>
            <img
              src={URL.createObjectURL(selectedImage)}
              alt=''
              className='imageinput-selection-box'
            />
            <div className='delet-selectedimage' onClick={handleDeletImage}>
              {imageCloseIcon}
            </div>
          </div>
        </div>
      ) : (
        <label for='imageInput' className='imageinput-selection-box'>
          {uploadImageIcon}
        </label>
      )}

      <input
        type='file'
        id='imageInput'
        className='imageselectinput'
        accept='image/*'
        onChange={handleSelectedImage}
      />
    </div>
  );
}

export default ImageInput;
