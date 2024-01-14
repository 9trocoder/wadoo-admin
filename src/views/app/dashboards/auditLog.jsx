import React from "react";
import AppLayout from "../../../layout/AppLayout";
import AuditLogTopNav from "../../../containers/audit_log/auditLogTopNav";
import AuditLogTable from "../../../containers/audit_log/auditLogTable";

const AuditLogView = () => (
  <div className='servicesview-container'>
    <AuditLogTopNav />
    <AuditLogTable />
  </div>
);

function AuditLog() {
  return (
    <AppLayout
      url={"/audit-log"}
      pageName={"Audit Log"}
      children={<AuditLogView />}
    />
  );
}

export default AuditLog;
