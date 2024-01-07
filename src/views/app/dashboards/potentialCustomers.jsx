import React from 'react'
import PotentialCustomersNav from '../../../containers/customers/potentialCustomersTopNav'
import PotentialCustomersTable from '../../../containers/customers/potentialCustomersTable'
import AppLayout from '../../../layout/AppLayout'

const PotentialCustomersView = () => (
    <div className="servicesview-container">
        <PotentialCustomersNav />
        <PotentialCustomersTable />
    </div>
)

function PotentialCustomers() {
  return (
    <AppLayout url={"/customers/potential-customers"} pageName={"Customers"} children={<PotentialCustomersView />} />
  )
}

export default PotentialCustomers