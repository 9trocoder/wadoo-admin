import React, { useState } from "react";
import { merchantData } from "../../data/merchant";
import { optionIcon } from "../../constants/defaultValues";
import BigModalLayout from "../../layout/BigModalLayout";
import "../../assets/css/merchant.css";

function MerchantsTable() {
  const [clickedMenu, setClickedMenu] = useState("0");
  const [showModal, setShowModal] = useState(false);

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
        ></BigModalLayout>
      )}
    </div>
  );
}

export default MerchantsTable;
