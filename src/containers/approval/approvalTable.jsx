import React, { useState } from "react";
import { approvalData } from "../../data/approvals";
import { optionIcon } from "../../constants/defaultValues";
import ModalLayout from "../../layout/ModalLayout";
import { approvalViewApprovalData } from "../../data/approval_view_approval_data";

function ApprovalTable() {
  const [clickedMenu, setClickedMenu] = useState("0");
  const [viewApproval, setViewApproval] = useState(false);

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
                      Verify Approval
                    </p>
                    <p
                      className='optionmenu-itemm'
                      onClick={() => {
                        setClickedMenu("0");
                        setViewApproval(true);
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
        {viewApproval && (
          <ModalLayout
            btnbool={false}
            onCloseModal={() => {
              setViewApproval(false);
            }}
            title='View Approval'
          >
            <table className='service-details-table viewpros'>
              {approvalViewApprovalData.map((item, index) => (
                <div key={index}>
                  <tr>
                    <th>Activity</th>
                    <td>{item.activity}</td>
                  </tr>
                  <tr>
                    <th>Initiated by</th>
                    <td>{item.initiated_by}</td>
                  </tr>
                  <tr>
                    <th>Date</th>
                    <td>{item.date}</td>
                  </tr>
                  <tr>
                    <th>Time</th>
                    <td>{item.time}</td>
                  </tr>
                 
                  <tr>
                    <th>Status</th>
                    <td className='rttable-status'>
                      <p className='rttable-status-container'>{item.status}</p>
                    </td>
                  </tr>
                  <tr>
                    <th>Actions</th>
                    <td className='optionbtn-modal'>
                      <div className='optionbtn'>{optionIcon}</div>
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

export default ApprovalTable;
