import React from "react";
import AppLayout from "../../../layout/AppLayout";
import CustomersTopNav from "../../../containers/customers/customersTopNav";
import CustomersTable from "../../../containers/customers/customersTable";

const CustomerView = () => (
  <div className='servicesview-container'>
    <CustomersTopNav />
    <CustomersTable />
  </div>
);

function Customers() {
  return (
    <AppLayout
      url={"/customers"}
      pageName={"Customers"}
      children={<CustomerView />}
    />
  );
}

export default Customers;
