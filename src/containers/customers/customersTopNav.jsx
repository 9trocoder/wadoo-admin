import React, { useState } from "react";
import {
  addIcon,
  circleIcon,
  filterIcon,
  optionIcon,
} from "../../constants/defaultValues";
import InputField from "../../components/InputField";
import ModalLayout from "../../layout/ModalLayout";
import AddPhoto from "../../components/AddPhoto";
import "../../assets/css/customers.css";
import { customerDetailsData } from "../../data/customer_details_data";

function CustomersTopNav() {
  const [showAddCustomer, setShowAddCustomer] = useState(false);
  const [showCustomerDetails, setShowCustomerDetails] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showOptionMenu, setShowOptionMenu] = useState(false);
  const [showEditCustomer, setShowEditCustomer] = useState(false);

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
            btnClick={() => {
              setShowAddCustomer(false);
              setShowCustomerDetails(true);
            }}
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

      {showCustomerDetails && (
        <ModalLayout
          btnbool={false}
          onCloseModal={() => setShowCustomerDetails(false)}
          title='Customer Details'
        >
          <div className='service-image-details'>
            <img
              src={
                selectedImage != null ? URL.createObjectURL(selectedImage) : ""
              }
              alt='Profile'
              className='service-img'
            />
            <label
              onClick={() => {
                setShowEditCustomer(true);
              }}
              className='service-img-edit'
            >
              Edit Profile
            </label>
          </div>
          <table className='service-details-table'>
            {customerDetailsData.map((item, index) => (
              <div key={index}>
                <tr>
                  <th>First Name</th>
                  <td>{item.first_name}</td>
                </tr>
                <tr>
                  <th>Last Name</th>
                  <td>{item.last_name}</td>
                </tr>
                <tr>
                  <th>Email Address</th>
                  <td>{item.email}</td>
                </tr>
                <tr>
                  <th>Phone Number</th>
                  <td>{item.phone_number}</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>{item.address}</td>
                </tr>
                <tr>
                  <th>Date Created</th>
                  <td>{item.date_created}</td>
                </tr>
                <tr>
                  <th>Last Login Date</th>
                  <td>{item.last_login_date}</td>
                </tr>
                <tr>
                  <th>Status</th>
                  <td className='rttable-status'>
                    <p className='rttable-status-container'>{item.status}</p>
                  </td>
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
                          <p
                            onClick={() => {
                              setShowEditCustomer(true);
                              setShowOptionMenu(false);
                            }}
                            className='optionmenu-item'
                          >
                            Edit
                          </p>
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
        </ModalLayout>
      )}
      {showEditCustomer && (
        <ModalLayout
          btnbool={true}
          btnTxt='Save'
          btnClick={() => setShowEditCustomer(false)}
          onCloseModal={() => setShowEditCustomer(false)}
          backbtn={true}
          title='Edit Customers'
          backbtnClicked={() => setShowEditCustomer(false)}
        >
          <div className='service-image-details'>
            <img
              src={
                selectedImage != null ? URL.createObjectURL(selectedImage) : ""
              }
              alt='Profile'
              className='service-img'
            />
            <label for='addImageInput' className='service-img-edit'>
              Change Photo
            </label>
            <input
              type='file'
              id='addImageInput'
              accept='image/*'
              onChange={handleImageChange}
              className='imageselectinput'
            />
          </div>
          <div className='spacer'></div>
          <div className='add-customer-input-container'>
            <InputField
              label='First Name'
              type='text'
              placeholder='First Name'
            />
            <InputField label='Last Name' type='text' placeholder='Last Name' />
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
      )}
    </div>
  );
}

export default CustomersTopNav;
