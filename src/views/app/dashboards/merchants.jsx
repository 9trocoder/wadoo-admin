import React from "react";
import AppLayout from "../../../layout/AppLayout";
import MerchantsTopNav from "../../../containers/merchants/merchantsTopNav";
import MerchantsTable from "../../../containers/merchants/merchantsTable";

const MerchantsView = () => (
  <div className='servicesview-container'>
    <MerchantsTopNav />
    <MerchantsTable />
  </div>
);

function Merchants() {
  return (
    <AppLayout
      url={"/merchants"}
      pageName={"Merchants"}
      children={<MerchantsView />}
    />
  );
}

export default Merchants;
