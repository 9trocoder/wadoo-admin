import React from "react";
import "../../../assets/css/settings.css";
import AppLayout from "../../../layout/AppLayout";
import SettingsBody from "../../../containers/settings/settingsBody";
const SettingsView = () => (
  <div className=''>
    <SettingsBody />
  </div>
);
function Settings() {
  return (
    <AppLayout
      url={"/settings"}
      pageName={"Settings"}
      children={<SettingsView />}
    />
  );
}

export default Settings;
