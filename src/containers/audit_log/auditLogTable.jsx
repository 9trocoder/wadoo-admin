import React from "react";
import { auditLogData } from "../../data/auditlog";

function AuditLogTable() {
  return (
    <div className='servicesview-container-table'>
      <table className='tptable'>
        <tr>
          <th>S/N</th>
          <th>User</th>
          <th>Activity</th>
          <th>Date</th>
          <th>Time</th>
        </tr>
        {auditLogData.map((item, index) => (
          <tr key={index}>
            <td>{item.s_n}</td>
            <td className='tptable-service-td'>
              <p className='tptable-service-name'>{item.full_name}</p>
              <p className='tptable-merchant-name'>{item.email_address}</p>
            </td>
            <td>{item.activity}</td>
            <td>{item.date}</td>
            <td>{item.time}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default AuditLogTable;
