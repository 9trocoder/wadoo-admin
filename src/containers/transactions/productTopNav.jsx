import React from "react";
import { circleIcon, filterIcon } from "../../constants/defaultValues";

function ProductTopNav() {
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
      </div>
    </div>
  );
}

export default ProductTopNav;
