import React from "react";
import { invoiceData } from "../../data/invoice";
import { optionIcon } from "../../constants/defaultValues";

function InvoiceTable() {
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
            <td className='service-action'>{optionIcon}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default InvoiceTable;
