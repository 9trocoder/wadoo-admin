import React, { useState } from "react";
import InputField from "../../components/InputField";

function SettingsBody() {
  const [activeBtn, setActiveBtn] = useState("profile");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setSelectedImage(file);
  };

  const handleDeletImage = () => {
    setSelectedImage(null);
  };
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
      </div>
    </>
  );
}

export default SettingsBody;
