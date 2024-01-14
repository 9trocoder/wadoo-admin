import React from "react";
import AppLayout from "../../../layout/AppLayout";
import ApprovalTopNav from "../../../containers/approval/approvalTopNav";
import ApprovalTable from "../../../containers/approval/approvalTable";

const ApprovalView = () => (
  <div className='servicesview-container'>
    <ApprovalTopNav />
    <ApprovalTable />
  </div>
);

function Approval() {
  return (
    <AppLayout
      url={"/approvals"}
      pageName={"Approvals"}
      children={<ApprovalView />}
    />
  );
}

export default Approval;
