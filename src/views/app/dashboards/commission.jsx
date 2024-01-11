import React from 'react'
import AppLayout from '../../../layout/AppLayout';
import CommissionTopNav from '../../../containers/transactions/commissionTopNav';
import CommissionTable from '../../../containers/transactions/commissionTable';

const CommissionView = () => (
    <div className="servicesview-container">
        <CommissionTopNav />
        <CommissionTable />
    </div>
)

function Commission() {
  return (
    <AppLayout url={"/transactions/commission"} pageName={"Commission"} children={<CommissionView />} />
  )
}

export default Commission;