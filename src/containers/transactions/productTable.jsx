import React, { useState } from "react";
import { productData } from "../../data/product";
import { optionIcon } from "../../constants/defaultValues";
import ModalLayout from "../../layout/ModalLayout";
import { transactionsViewProductData } from "../../data/transactions_view_product_data";

function ProductTable() {
  const [clickedMenu, setClickedMenu] = useState("0");
  const [viewProduct, setViewProduct] = useState(false);
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
          <th>Service Name</th>
          <th>Amount</th>
          <th>Type</th>
          <th>Date Created</th>
          <th>Wallet Balance</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
        {productData.map((item, index) => (
          <tr key={index}>
            <td>{item.s_n}</td>
            <td>
              <div className='tptable-service-td'>
                <p className='tptable-service-name'>{item.service_name}</p>
                <p className='tptable-merchant-name'>{item.merchant_name}</p>
              </div>
            </td>
            <td>{item.amount}</td>
            <td>{item.type}</td>
            <td>{item.date_created}</td>
            <td>{item.wallet_balance}</td>
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
                      Verify Product
                    </p>
                    <p
                      className='optionmenu-itemm'
                      onClick={() => {
                        setClickedMenu("0");
                        setViewProduct(true);
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
        {viewProduct && (
          <ModalLayout
            btnbool={true}
            btnTxt="Download Transaction"
            onCloseModal={() => {
              setViewProduct(false);
            }}
            btnClick={() => setViewProduct(false)}
            title='View Product Transaction'
          >
            <table className='service-details-table viewpros'>
              {transactionsViewProductData.map((item, index) => (
                <div key={index}>
                  <tr>
                    <th>Transaction ID</th>
                    <td>{item.transaction_id}</td>
                  </tr>
                  <tr>
                    <th>Product Name</th>
                    <td>{item.product_name}</td>
                  </tr>
                  <tr>
                    <th>Merchant Name</th>
                    <td>{item.merchant_name}</td>
                  </tr>
                  <tr>
                    <th>Amount</th>
                    <td>{item.amount}</td>
                  </tr>
                  <tr>
                    <th>Transaction Type</th>
                    <td>{item.transaction_type}</td>
                  </tr>
                  <tr>
                    <th>Date Created</th>
                    <td>{item.date_created}</td>
                  </tr>
                  <tr>
                    <th>Wallet Balance</th>
                    <td>{item.wallet_balance}</td>
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

export default ProductTable;
