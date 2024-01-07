import React from "react";
import "../../../assets/css/dashboard.css";
import AppLayout from "../../../layout/AppLayout";
import Statistic from "../../../containers/dashboard/Statistic";
import Report from "../../../containers/dashboard/report";
import Payout from "../../../containers/dashboard/payout";
import { transactionIcon } from "../../../constants/defaultValues";
import RecentTransaction from "../../../containers/dashboard/recentTransaction";
import TopProducts from "../../../containers/dashboard/topProducts";

const DashboardView = () => (
  <div className='dashboardview-container'>
    <Statistic />
    <div className='dashboardview-container-center'>
      <Report />
      <div className='dashboardview-container-center-right'>
        <Payout />
        <div className='static-card-container'>
          <div className='static-card-icon'>{transactionIcon}</div>
          <div className='static-card-info'>
            <p className='static-card-info-num'>156</p>
            <p className='static-card-info-name'>Transactions</p>
          </div>
        </div>
      </div>
    </div>
    <div className="dashboardview-container-bottom">
      <RecentTransaction />
      <TopProducts />
    </div>
  </div>
);

function Dashboards() {
  return (
    <AppLayout
      url={"/dashboard"}
      pageName={"Dashboard"}
      children={<DashboardView />}
    />
  );
}

export default Dashboards;
