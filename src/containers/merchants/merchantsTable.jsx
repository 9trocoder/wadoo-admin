import React, { useState } from "react";
import { merchantData } from "../../data/merchant";
import {
  addIcon,
  circleIcon,
  filterIcon,
  optionIcon,
} from "../../constants/defaultValues";
import BigModalLayout from "../../layout/BigModalLayout";
import "../../assets/css/merchant.css";
import { merchantGeneralData } from "../../data/merchant_general_data";
import { merchantProductsData } from "../../data/merchant_products_data";
import { merchantInvoiceData } from "../../data/merchant_invoice_data";
import { merchantTransactionsData } from "../../data/merchant_transactions_data";
import InputField from "../../components/InputField";
import ModalLayout from "../../layout/ModalLayout";

function MerchantsTable() {
  const [clickedMenu, setClickedMenu] = useState("0");
  const [showModal, setShowModal] = useState(false);
  const [activeBtn, setActiveBtn] = useState("general");
  const [showOptionMenu, setShowOptionMenu] = useState(false);
  const [showEditMerchant, setShowEditMerchant] = useState(false);
  const btnList = [
    {
      id: "general",
      btn_name: "General",
    },
    {
      id: "products",
      btn_name: "Products",
    },
    {
      id: "transactions",
      btn_name: "Transactions",
    },
    {
      id: "invoice",
      btn_name: "Invoice",
    },
    {
      id: "subscription",
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
      {showEditMerchant && (
        <ModalLayout
          onCloseModal={() => {
            setShowEditMerchant(false);
            setShowModal(true);
          }}
        ></ModalLayout>
      )}
      {showModal && (
        <BigModalLayout
          onCloseModal={() => setShowModal(false)}
          title='Business Name'
        >
          <div className='merchant_nav'>
            {btnList.map((item, index) => (
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
          {activeBtn === "general" && (
            <div className='merchant_general'>
              <div className='merchant_general_left'>
                <div className='merchant_general_profileimg'>
                  <span>BL</span>
                </div>
                <label
                  className='merchant_edit_profile'
                  onClick={() => {
                    setShowEditMerchant(true);
                    setShowModal(false);
                  }}
                >
                  Edit Profile
                </label>

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
                                <p
                                  onClick={() => {}}
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
              </div>
            </div>
          )}
          {activeBtn === "products" && (
            <div className='merchant_products'>
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
                <button className='services-add-btn' onClick={() => {}}>
                  {addIcon} Add New Service
                </button>
              </div>
              <div className='servicesview-container-table'>
                <table className='tptable'>
                  <tr>
                    <th>S/N</th>
                    <th>Image</th>
                    <th>Service Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Negotiable</th>
                    <th>Date Created</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                  {merchantProductsData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.s_n}</td>
                      <td>
                        <img
                          src={item.image}
                          alt=''
                          className='tptable-image'
                        />
                      </td>
                      <td>{item.service_name}</td>
                      <td>{item.description}</td>
                      <td>{item.price}</td>
                      <td>{item.negotiable}</td>
                      <td>{item.date_created}</td>
                      <td className='rttable-status'>
                        <p className='rttable-status-container'>
                          {item.status}
                        </p>
                      </td>
                      <td className='service-action'>{optionIcon}</td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          )}
          {activeBtn === "transactions" && (
            <div className='merchant_products'>
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
              <div className='servicesview-container-table'>
                <table className='tptable'>
                  <tr>
                    <th>S/N</th>
                    <th>Service Name</th>
                    <th>Amount</th>
                    <th>Type</th>
                    <th>Date Created</th>
                    <th>Wallet Balance</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                  {merchantTransactionsData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.s_n}</td>
                      <td>{item.service_name}</td>
                      <td>{item.amount}</td>
                      <td>{item.type}</td>
                      <td>{item.date_created}</td>
                      <td>{item.wallet_balance}</td>
                      <td className='rttable-status'>
                        <p className='rttable-status-container'>
                          {item.status}
                        </p>
                      </td>
                      <td className='service-action'>{optionIcon}</td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          )}
          {activeBtn === "invoice" && (
            <div className='merchant_products'>
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
              <div className='servicesview-container-table'>
                <table className='tptable'>
                  <tr>
                    <th>S/N</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Next Invoice Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                  {merchantInvoiceData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.s_n}</td>
                      <td>{item.date}</td>
                      <td>{item.description}</td>
                      <td>{item.amount}</td>
                      <td>{item.next_invoice_date}</td>
                      <td className='rttable-status'>
                        <p className='rttable-status-container'>
                          {item.status}
                        </p>
                      </td>
                      <td className='service-action'>{optionIcon}</td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          )}

          {activeBtn === "subscription" && (
            <div className='merchant_products'>
              <div className='merchant_subscription'>
                <div className='merchant_subscription_left'>
                  <InputField
                    label='Subscription Plan'
                    placeholder='Subscription plan (Cannot be edited)'
                    type='text'
                  />
                  <InputField
                    label='Commission on in-app Payment'
                    type='number'
                    placeholder='Commission percentage'
                  />
                  <button className='merchant_subscription_btn'>Save</button>
                </div>
                <div className='merchant_subscription_right'></div>
              </div>
            </div>
          )}
        </BigModalLayout>
      )}
    </div>
  );
}

export default MerchantsTable;
