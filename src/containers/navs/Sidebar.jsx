import React, { useState } from "react";
import logo from "../../assets/logos/logo.svg";
import {
  Dashboardicon,
  Producticon,
  Customericon,
  Merchanticon,
  Transactionicon,
  Auditicon,
  Approveicon,
  Settingsicon,
  logouticon,
} from "../../constants/defaultValues";
import { useNavigate } from "react-router-dom";

function Sidebar({ url }) {
  const navigate = useNavigate();
  const [showCustomerLink, setShowCustomerLink] = useState(false);
  const [showTransactionLink, setShowTransactionLink] = useState(false);

  const handleCustomerClick = () => {
    if (url === "/customers" || "/customers/potential_customers") {
      setShowCustomerLink(!showCustomerLink);
      setShowTransactionLink(false);
    } else {
      setShowCustomerLink(!showCustomerLink);
      setShowTransactionLink(false);
    }
  };

  const handleTransactionClick = () => {
    if (
      url === "/transactions/product" ||
      "/transactions/commission" ||
      "/transactions/invoice"
    ) {
      setShowTransactionLink(!showTransactionLink);
      setShowCustomerLink(false);
    } else {
      setShowTransactionLink(!showTransactionLink);
      setShowCustomerLink(false);
    }
  };

  const transactionshow =
    url === "/transactions" ||
    url === "/transactions/product" ||
    url === "/transactions/commission" ||
    url === "/transactions/invoice"
      ? "#fdbe2c"
      : "#959597";

  const customershow =
    url === "/customers" || url === "/customers/potential-customers"
      ? "#fdbe2c"
      : "#959597";

  return (
    <div className='sidebar-container'>
      <div className='sidebar-top'>
        <div
          className='sidebar-item-icon'
          onClick={() => navigate("/dashboard")}
        >
          <Dashboardicon color={url === "/dashboard" ? "#fdbe2c" : "#959597"} />
          <span
            className='sidebar-item-name'
            style={{ color: url === "/dashboard" ? "#fdbe2c" : "#959597" }}
          >
            Dashboard
          </span>
        </div>
        <div
          className='sidebar-item-icon'
          onClick={() => navigate("/services")}
        >
          <Producticon color={url === "/services" ? "#fdbe2c" : "#959597"} />
          <span
            className='sidebar-item-name'
            style={{ color: url === "/services" ? "#fdbe2c" : "#959597" }}
          >
            Services
          </span>
        </div>
        <div className='sidebar-item-icon' onClick={handleCustomerClick}>
          <Customericon color={customershow} />
          <span
            className='sidebar-item-name'
            style={{
              color: customershow,
            }}
          >
            Customers
          </span>
        </div>
        {showCustomerLink && (
          <>
            <div
              className='sidebar-item-icon'
              onClick={() => navigate("/customers")}
            >
              <div
                className='sidebar-item-special'
                color={url === "/customers" ? "#fdbe2c" : "#959597"}
              />
              <span
                className='sidebar-item-name'
                style={{
                  color: url === "/customers" ? "#fdbe2c" : "#959597",
                }}
              >
                Customers
              </span>
            </div>

            <div
              className='sidebar-item-icon'
              onClick={() => navigate("/customers/potential-customers")}
            >
              <div
                className='sidebar-item-special'
                color={
                  url === "/customers/potential-customers"
                    ? "#fdbe2c"
                    : "#959597"
                }
              />
              <span
                className='sidebar-item-name'
                style={{
                  color:
                    url === "/customers/potential-customers"
                      ? "#fdbe2c"
                      : "#959597",
                }}
              >
                Potential Customers
              </span>
            </div>
          </>
        )}
        <div
          className='sidebar-item-icon'
          onClick={() => navigate("/merchants")}
        >
          <Merchanticon color={url === "/merchants" ? "#fdbe2c" : "#959597"} />
          <span
            className='sidebar-item-name'
            style={{ color: url === "/merchants" ? "#fdbe2c" : "#959597" }}
          >
            Merchants
          </span>
        </div>
        <div className='sidebar-item-icon' onClick={handleTransactionClick}>
          <Transactionicon color={transactionshow} />
          <span
            className='sidebar-item-name'
            style={{
              color: transactionshow,
            }}
          >
            Transactions
          </span>
        </div>
        {showTransactionLink && (
          <>
            <div
              className='sidebar-item-icon'
              onClick={() => navigate("/transactions/product")}
            >
              <div
                className='sidebar-item-special'
                color={
                  url === "/transactions" || "/transactions/product"
                    ? "#fdbe2c"
                    : "#959597"
                }
              />
              <span
                className='sidebar-item-name'
                style={{
                  color:
                    url === "/transactions/product" ? "#fdbe2c" : "#959597",
                }}
              >
                Product
              </span>
            </div>
            <div
              className='sidebar-item-icon'
              onClick={() => navigate("/transactions/commission")}
            >
              <div
                className='sidebar-item-special'
                color={
                  url === "/transactions/commission" ? "#fdbe2c" : "#959597"
                }
              />
              <span
                className='sidebar-item-name'
                style={{
                  color:
                    url === "/transactions/commission" ? "#fdbe2c" : "#959597",
                }}
              >
                Commission
              </span>
            </div>
            <div
              className='sidebar-item-icon'
              onClick={() => navigate("/transactions/invoice")}
            >
              <div
                className='sidebar-item-special'
                color={url === "/transactions/invoice" ? "#fdbe2c" : "#959597"}
              />
              <span
                className='sidebar-item-name'
                style={{
                  color:
                    url === "/transactions/invoice" ? "#fdbe2c" : "#959597",
                }}
              >
                Invoice
              </span>
            </div>
          </>
        )}
        <div className='sidebar-item-icon'>
          <Auditicon color={url === "/audit_log" ? "#fdbe2c" : "#959597"} />
          <span
            className='sidebar-item-name'
            style={{ color: url === "/audit_log" ? "#fdbe2c" : "#959597" }}
          >
            Audit Log
          </span>
        </div>
        <div className='sidebar-item-icon'>
          <Approveicon color={url === "/approvals" ? "#fdbe2c" : "#959597"} />
          <span
            className='sidebar-item-name'
            style={{ color: url === "/approvals" ? "#fdbe2c" : "#959597" }}
          >
            Approvals
          </span>
        </div>
        <div className='sidebar-item-icon'>
          <Settingsicon color={url === "/settings" ? "#fdbe2c" : "#959597"} />
          <span
            className='sidebar-item-name'
            style={{ color: url === "/settings" ? "#fdbe2c" : "#959597" }}
          >
            Settings
          </span>
        </div>
        <div className='sidebar-item-icon'>
          {logouticon}
          <span className='sidebar-item-name logout-text'>Logout</span>
        </div>
      </div>
      <div className='sidebar-bottom'>
        <img src={logo} alt='WADOO' className='sidebar-logo' />
        <p className='sidebar-copyright'>©2022 Wadoo.</p>
      </div>
    </div>
  );
}

export default Sidebar;
