import React from "react";
import AppLayout from "../../../layout/AppLayout";
import InvoiceTopNav from "../../../containers/transactions/invoiceTopNav";
import InvoiceTable from "../../../containers/transactions/invoiceTable";

const InvoiceView = () => (
  <div className='servicesview-container'>
    <InvoiceTopNav />
    <InvoiceTable />
  </div>
);

function Invoice() {
  return (
    <AppLayout
      url={"/transactions/invoice"}
      pageName={"Invoice"}
      children={<InvoiceView />}
    />
  );
}

export default Invoice;
