import React, { useState } from "react";
import InputField from "../../components/InputField";
import {
  addIcon,
  circleIcon,
  filterIcon,
  optionIcon,
} from "../../constants/defaultValues";
import { settingsUserData } from "../../data/settings_user_data";
import ModalLayout from "../../layout/ModalLayout";
import Selection from "../../components/Selection";

function SettingsBody() {
  const [activeBtn, setActiveBtn] = useState("profile");
  const [clickedMenu, setClickedMenu] = useState("0");
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAddUser, setShowAddUser] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const options = ["Option 1", "Option 2", "Option 3"];

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setSelectedImage(file);
  };

  //   const handleDeletImage = () => {
  //     setSelectedImage(null);
  //   };
  const settingsBtnList = [
    {
      id: "profile",
      btn_name: "Profile",
    },
    {
      id: "users",
      btn_name: "Users",
    },
    {
      id: "security",
      btn_name: "Security",
    },
    {
      id: "configurations",
      btn_name: "Configurations",
    },
  ];
  const handleIt = (index) => {
    if (clickedMenu === index) {
      return setClickedMenu("0");
    }
    setClickedMenu(index);
  };
  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
  };
  return (
    <>
      <div className='merchant_nav'>
        {settingsBtnList.map((item, index) => (
          <button
            onClick={() => setActiveBtn(item.id)}
            className={`merchant_nav_btn ${
              activeBtn === item.id
                ? "merchant_nav_activebtn"
                : "merchant_nav_notactivebtn"
            }`}
          >
            {item.btn_name}
          </button>
        ))}
      </div>

      <div className='settings_body'>
        {activeBtn === "profile" && (
          <div className='settings_general'>
            <div className='settings_profile'>
              <div className='settings_profile_image'>
                <img
                  src={
                    selectedImage != null
                      ? URL.createObjectURL(selectedImage)
                      : ""
                  }
                  alt=''
                  className='service-img'
                />
                <label for='addImageInput' className='service-img-edit'>
                  Change Photo
                </label>
                <input
                  type='file'
                  id='addImageInput'
                  className='imageselectinput'
                  accept='image/*'
                  onChange={handleImageChange}
                />
              </div>

              <div className='settings_profile_form'>
                <InputField
                  label='Full Name'
                  placeholder='Full Name'
                  type='text'
                />
                <InputField
                  label='Email Address'
                  placeholder='Email Address'
                  type='text'
                />
                <InputField label='Role' placeholder='Role' type='text' />
              </div>
              <button className='merchant_subscription_btn'>Save</button>
            </div>
          </div>
        )}
        {activeBtn === "users" && (
          <div className='settings_general'>
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
                onClick={() => setShowAddUser(true)}
                className='services-add-btn'
              >
                {addIcon} Add New User
              </button>
            </div>
            <div className='servicesview-container-table settingusertablebody'>
              <table className='tptable'>
                <tr>
                  <th>S/N</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Email Address</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
                {settingsUserData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.s_n}</td>
                    <td>
                      <img src={item.image} alt='' className='tptable-image' />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.email_address}</td>
                    <td>{item.role}</td>
                    <td className='rttable-status'>
                      <p className='rttable-status-container'>{item.status}</p>
                    </td>
                    <td className='optionbtn-modal'>
                      <div className='optionbtn' key={index}>
                        {optionIcon}
                      </div>
                    </td>
                  </tr>
                ))}
              </table>
            </div>

            {showAddUser && (
              <ModalLayout
                title='Add User'
                btnbool={true}
                btnTxt='Add User'
                onCloseModal={() => {
                  setActiveBtn("users");
                  setShowAddUser(false);
                }}
              >
                <InputField
                  label='Email Address'
                  placeholder='Email Address'
                  type='email'
                />
                <Selection
                  label='Role'
                  options={options}
                  showOptions={showOptions}
                  toggleOptions={toggleOptions}
                  selectedOption={selectedOption}
                  handleOptionClick={handleOptionClick}
                />
              </ModalLayout>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default SettingsBody;
