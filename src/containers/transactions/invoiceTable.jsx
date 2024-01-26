import React, { useState } from "react";
import { invoiceData } from "../../data/invoice";
import { optionIcon } from "../../constants/defaultValues";
import { transactionsViewInvoiceData } from "../../data/transactions_view_invoice_data";
import ModalLayout from "../../layout/ModalLayout";

function InvoiceTable() {
  const [clickedMenu, setClickedMenu] = useState("0");
  const [viewInvoice, setViewInvoice] = useState(false);
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
          <th>Date</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Next Invoice Date</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
        {invoiceData.map((item, index) => (
          <tr key={index}>
            <td>{item.s_n}</td>
            <td>{item.merchant_name}</td>
            <td>{item.date}</td>
            <td>{item.description}</td>
            <td>{item.amount}</td>
            <td>{item.next_invoice_date}</td>
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
                      Verify Invoice
                    </p>
                    <p
                      className='optionmenu-itemm'
                      onClick={() => {
                        setClickedMenu("0");
                        setViewInvoice(true);
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
        {viewInvoice && (
          <ModalLayout
            btnbool={true}
            onCloseModal={() => {
              setViewInvoice(false);
            }}
            title='View Invoice Transaction'
            btnClick={() => setViewInvoice(false)}
            btnTxt='Download Transaction'
          >
            <table className='service-details-table viewpros'>
              {transactionsViewInvoiceData.map((item, index) => (
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
                    <th>Date</th>
                    <td>{item.date}</td>
                  </tr>
                  <tr>
                    <th>Description</th>
                    <td>{item.description}</td>
                  </tr>

                  <tr>
                    <th>Amount </th>
                    <td>{item.amount}</td>
                  </tr>
                  <tr>
                    <th>Next Invoice Date </th>
                    <td>{item.next_invoice_date}</td>
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

export default InvoiceTable;
