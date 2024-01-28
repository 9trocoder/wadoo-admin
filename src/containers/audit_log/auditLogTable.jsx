import React, { useState } from "react";
import { auditLogData } from "../../data/auditlog";
import ModalLayout from "../../layout/ModalLayout";
import { auditViewAuditData } from "../../data/audit_view_audit_data";

function AuditLogTable() {
  const [clickedTable, setClickedTable] = useState("0");

  const handleIt = (index) => {
    if (clickedTable === index) {
      return setClickedTable("0");
    }
    setClickedTable(index);
  };
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
          <>
            <tr
              key={index}
              onClick={() => {
                handleIt(index);
              }}
            >
              <td>{item.s_n}</td>
              <td className='tptable-service-td'>
                <p className='tptable-service-name'>{item.full_name}</p>
                <p className='tptable-merchant-name'>{item.email_address}</p>
              </td>
              <td>{item.activity}</td>
              <td>{item.date}</td>
              <td>{item.time}</td>
            </tr>
            {clickedTable === index && (
              <ModalLayout
                title='View Audit Log'
                onCloseModal={() => {
                  setClickedTable("0");
                }}
              >
                  <table className='service-details-table viewpros'>
              {auditViewAuditData.map((item, index) => (
                <div key={index}>
                  <tr>
                    <th>User Name</th>
                    <td>{item.user_name}</td>
                  </tr>
                  <tr>
                    <th>Email Address</th>
                    <td>{item.email}</td>
                  </tr>
                  <tr>
                    <th>Activity</th>
                    <td>{item.activity}</td>
                  </tr>
                  <tr>
                    <th>Date</th>
                    <td>{item.date}</td>
                  </tr>
                  <tr>
                    <th>Time</th>
                    <td>{item.time}</td>
                  </tr>
                </div>
              ))}
            </table>
              </ModalLayout>
            )}
          </>
        ))}
      </table>
    </div>
  );
}

export default AuditLogTable;
