import React from "react";
import { optionIcon } from "../../constants/defaultValues";
import { commissionData } from "../../data/commission";

function CommissionTable() {
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
            <td className='service-action'>{optionIcon}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default CommissionTable;
