import React from "react";
import { approvalData } from "../../data/approvals";
import { optionIcon } from "../../constants/defaultValues";

function ApprovalTable() {
  return (
    <div className='servicesview-container-table'>
      <table className='tptable'>
        <tr>
          <th>S/N</th>
          <th>Activity</th>
          <th>Initiated by</th>
          <th>Date</th>
          <th>Time</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
        {approvalData.map((item, index) => (
          <tr key={index}>
            <td>{item.s_n}</td>
            <td>{item.activity}</td>
            <td>{item.initiated_by}</td>
            <td>{item.date}</td>
            <td>{item.time}</td>
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

export default ApprovalTable;
