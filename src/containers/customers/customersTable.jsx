import React from "react";
import { customerData } from "../../data/customer";
import { optionIcon } from "../../constants/defaultValues";

function CustomersTable() {
  return (
    <div className='servicesview-container-table'>
      <table className='tptable'>
        <tr>
          <th>S/N</th>
          <th>Name</th>
          <th>Contact Details</th>
          <th>Address</th>
          <th>Last Login Date</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
        {customerData.map((item, index) => (
          <tr key={index}>
            <td>{item.s_n}</td>
            <td>
              <div className='tptable-nameimage'>
                <div className='tptable-text-image'>
                  {item.name[0] ? item.name[0].charAt(0) : ""}
                  {item.last_name[0] ? item.last_name[0].charAt(0) : ""}
                </div>
                <p className='tptable-service-name'>
                  {item.name}, {item.last_name}
                </p>
              </div>
            </td>
            <td className='tptable-service-td'>
              <p className='tptable-service-name'>{item.customer_email}</p>
              <p className='tptable-merchant-name'>{item.phone_number}</p>
            </td>
            <td>{item.address}</td>
            <td className='tptable-service-td'>
              <p className='tptable-service-name'>{item.last_login_date}</p>
              <p className='tptable-merchant-name'>{item.date_joined}</p>
            </td>
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

export default CustomersTable;
