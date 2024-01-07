import React from "react";
import AppLayout from "../../../layout/AppLayout";
import "../../../assets/css/services.css"
import ServicesTopNav from "../../../containers/services/servicesTopNav";
import ServicesTable from "../../../containers/services/serviceTable";

const ServicesView = () => (
  <div className='servicesview-container'>
    <ServicesTopNav />
    <ServicesTable />
  </div>
);

function Services() {
  return (
    <AppLayout
      url={"/services"}
      pageName={"Services"}
      children={<ServicesView />}
    />
  );
}

export default Services;
