import React from "react";
import { pontentialCustomersData } from "../../data/potential_customer";
import { optionIcon } from "../../constants/defaultValues";

function PotentialCustomersTable() {
  return (
    <div className='servicesview-container-table'>
      <table className='tptable'>
        <tr>
          <th>S/N</th>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Actions</th>
        </tr>
        {pontentialCustomersData.map((item, index) => (
          <tr key={index}>
            <td>{item.s_n}</td>
            <td>
              <div className='tptable-nameimage'>
                <div className='tptable-text-image'>
                  {item.first_name[0] ? item.first_name[0].charAt(0) : ""}
                  {item.last_name[0] ? item.last_name[0].charAt(0) : ""}
                </div>
                <p className='tptable-service-name'>
                  {item.first_name}, {item.last_name}
                </p>
              </div>
            </td>

            <td>{item.phone_number}</td>

            <td className='service-action'>{optionIcon}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default PotentialCustomersTable;
