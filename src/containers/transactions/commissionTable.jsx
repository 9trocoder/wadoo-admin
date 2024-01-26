import React, { useState } from "react";
import { optionIcon } from "../../constants/defaultValues";
import { commissionData } from "../../data/commission";
import ModalLayout from "../../layout/ModalLayout";
import { transactionsViewCommissionData } from "../../data/transactions_view_commission_data";

function CommissionTable() {
  const [clickedMenu, setClickedMenu] = useState("0");
  const [viewCommission, setViewCommission] = useState(false);

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
          <th>Merchant Name</th>
          <th>Amount</th>
          <th>Commission</th>
          <th>Commission Amount</th>
          <th>Amout Paid</th>
          <th>Date</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
        {commissionData.map((item, index) => (
          <tr key={index}>
            <td>{item.s_n}</td>
            <td>{item.merchant_name}</td>
            <td>{item.amount}</td>
            <td>{item.commission}</td>
            <td>{item.commission_amount}</td>
            <td>{item.amount_paid}</td>
            <td>{item.date}</td>
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
                      Verify Commission
                    </p>
                    <p
                      className='optionmenu-itemm'
                      onClick={() => {
                        setClickedMenu("0");
                        setViewCommission(true);
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
        {viewCommission && (
          <ModalLayout
            btnbool={true}
            onCloseModal={() => {
              setViewCommission(false);
            }}
            title='View Commission Transaction'
            btnClick={() => setViewCommission(false)}
            btnTxt="Download Transaction"
          >
            <table className='service-details-table viewpros'>
              {transactionsViewCommissionData.map((item, index) => (
                <div key={index}>
                  <tr>
                    <th>Transaction ID</th>
                    <td>{item.transaction_id}</td>
                  </tr>
                  <tr>
                    <th>Merchant Name</th>
                    <td>{item.merchant_name}</td>
                  </tr>
                  <tr>
                    <th>Commission</th>
                    <td>{item.commission}</td>
                  </tr>
                  <tr>
                    <th>Commission Amount</th>
                    <td>{item.commission_amount}</td>
                  </tr>
                  <tr>
                    <th>Amount Paid</th>
                    <td>{item.amount_paid}</td>
                  </tr>
                  <tr>
                    <th>Date</th>
                    <td>{item.date}</td>
                  </tr>
                  <tr>
                    <th>Status</th>
                    <td className='rttable-status'>
                      <p className='rttable-status-container'>{item.status}</p>
                    </td>
                  </tr>
                </div>
              ))}
            </table>
          </ModalLayout>
        )}
      </table>
    </div>
  );
}

export default CommissionTable;
