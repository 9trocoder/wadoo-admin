import React, { useState } from "react";
import { merchantData } from "../../data/merchant";
import { optionIcon } from "../../constants/defaultValues";
import BigModalLayout from "../../layout/BigModalLayout";
import "../../assets/css/merchant.css";
import { merchantGeneralData } from "../../data/merchant_general_data";

function MerchantsTable() {
  const [clickedMenu, setClickedMenu] = useState("0");
  const [showModal, setShowModal] = useState(false);
  const [activeBtn, setActiveBtn] = useState(0);
  const [showOptionMenu, setShowOptionMenu] = useState(false);
  const btnList = [
    {
      id: 0,
      btn_name: "General",
    },
    {
      id: 1,
      btn_name: "Products",
    },
    {
      id: 2,
      btn_name: "Transactions",
    },
    {
      id: 3,
      btn_name: "Invoice",
    },
    {
      id: 4,
      btn_name: "Subscription & Commission",
    },
  ];

  const handleIt = (index) => {
    if (clickedMenu === index) {
      return setClickedMenu("0");
    }
    setClickedMenu(index);
  };
  return (
    <div className='servicesview-container-table'>
      <table className='tptable'>
        <tr>
          <th>S/N</th>
          <th>Name</th>
          <th>Contact Details</th>
          <th>Address</th>
          <th>Subscription Plan</th>
          <th>Last Login Date</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
        {merchantData.map((item, index) => (
          <tr key={index}>
            <td>{item.s_n}</td>
            <td>
              <div className='tptable-nameimage'>
                <div className='tptable-text-image'>
                  {item.business_name[0] ? item.business_name[0].charAt(0) : ""}
                </div>
                <div className='tptable-service-td'>
                  <p className='tptable-service-name'>{item.business_name}</p>
                  <p className='tptable-merchant-name'>{item.business_type}</p>
                </div>
              </div>
            </td>
            <td>
              <div className='tptable-service-td'>
                <p className='tptable-service-name'>{item.business_email}</p>
                <p className='tptable-merchant-name'>{item.phone_number}</p>
              </div>
            </td>
            <td>{item.address}</td>
            <td>{item.subscription_plan}</td>
            <td>
              <div className='tptable-service-td'>
                <p className='tptable-service-name'>{item.last_login_date}</p>
                <p className='tptable-merchant-name'>{item.date_joined}</p>
              </div>
            </td>
            <td className='rttable-status'>
              <p className='rttable-status-container'>{item.status}</p>
            </td>
            <td className='optionbtn-modal'>
              <div
                className='optionbtn'
                key={index}
                onClick={() => handleIt(index)}
              >
                {optionIcon}
              </div>
              {clickedMenu === index && (
                <>
                  <div
                    className='optionmenu-overlay'
                    onClick={() => setClickedMenu("0")}
                  />
                  <div className='optionmmenu-body'>
                    <p
                      onClick={() => setClickedMenu("0")}
                      className='optionmenu-itemm'
                    >
                      Verify Merchant
                    </p>
                    <p
                      className='optionmenu-itemm'
                      onClick={() => {
                        setClickedMenu("0");
                        setShowModal(true);
                      }}
                    >
                      View
                    </p>
                    <p className='optionmenu-itemm'>Suspend</p>
                    <p className='optionmenu-itemm'>Delete</p>
                  </div>
                </>
              )}
            </td>
          </tr>
        ))}
      </table>
      {showModal && (
        <BigModalLayout
          onCloseModal={() => setShowModal(false)}
          title='Business Name'
        >
          <div className='merchant_nav'>
            {btnList.map((item, index) => (
              <button
                onClick={() => setActiveBtn(index)}
                className={`merchant_nav_btn ${
                  activeBtn === index
                    ? "merchant_nav_activebtn"
                    : "merchant_nav_notactivebtn"
                }`}
              >
                {item.btn_name}
              </button>
            ))}
          </div>
          {activeBtn === 0 && <div className='merchant_general'>
            <div className='merchant_general_left'>
              <div className='merchant_general_profileimg'>
                <span>BL</span>
              </div>
              <label className='merchant_edit_profile'>Edit Profile</label>

              <div className='merchant_business_profile'>
                <p className='merchant_bus_name'>Business Name</p>
                <p className='merchant_bus_type'>Business Type</p>
                <div className='merchant_bus_status'>
                  <span>Active</span>
                </div>
              </div>
            </div>
            <div className='merchant_general_right'>
              <table className='service-details-table'>
                {merchantGeneralData.map((item, index) => (
                  <div key={index}>
                    <tr>
                      <th>Merchant ID</th>
                      <td>{item.merchant_id}</td>
                    </tr>
                    <tr>
                      <th>Wallet Balance</th>
                      <td>{item.wallet_balance}</td>
                    </tr>
                    <tr>
                      <th>Email Address</th>
                      <td>{item.email_address}</td>
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
                      <th>Opening Days</th>
                      <td>{item.opening_days}</td>
                    </tr>
                    <tr>
                      <th>Opening Hours</th>
                      <td>{item.opening_hours}</td>
                    </tr>
                    <tr>
                      <th>Subscription Plan</th>
                      <td>{item.subscription_plan}</td>
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
                              <p onClick={() => {}} className='optionmenu-item'>
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
            </div>
          </div>}
        </BigModalLayout>
      )}
    </div>
  );
}

export default MerchantsTable;
