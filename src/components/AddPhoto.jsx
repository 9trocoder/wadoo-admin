import React from "react";
import {
  addYellowIcon,
  cameraIcon,
  imageCloseIcon,
} from "../constants/defaultValues";

function AddPhoto({ selectedImage, handleSelectedImage, handleDeletImage }) {
  return (
    <div className='addimage-container'>
      {selectedImage ? (
        <div className='addimage-isselected'>
          <div className='selectedAddimage'>
            <img
              src={URL.createObjectURL(selectedImage)}
              alt=''
              className='addimage-input'
            />
            <div className='delete-add-image' onClick={handleDeletImage}>
              {imageCloseIcon}
            </div>
          </div>
        </div>
      ) : (
        <div className='select-add-image'>
          <div className='cameraimage-container'>{cameraIcon}</div>
          <label for='addImageInput' className='addimage-selection'>
            {addYellowIcon}
            <span>Add Photo</span>
          </label>
        </div>
      )}

      <input
        type='file'
        id='addImageInput'
        accept='image/*'
        onChange={handleSelectedImage}
        className='imageselectinput'
      />
    </div>
  );
}

export default AddPhoto;
