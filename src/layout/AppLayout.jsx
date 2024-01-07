import React from "react";
import "../assets/css/layout.css";
import Topnav from "../containers/navs/Topnav";
import Sidebar from "../containers/navs/Sidebar";

function AppLayout({ children, url, pageName }) {
  return (
    <div className='app-container'>
      <Sidebar url={url} />
      <main className="page-content">
        <Topnav pageName={pageName} />
        <div className='app-container-fluid'>{children}</div>
      </main>
    </div>
  );
}

export default AppLayout;
