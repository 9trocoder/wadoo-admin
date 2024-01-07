import React from "react";
import { productData } from "../../data/product";
import { optionIcon } from "../../constants/defaultValues";

function ProductTable() {
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
            <td className='service-action'>{optionIcon}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default ProductTable;
