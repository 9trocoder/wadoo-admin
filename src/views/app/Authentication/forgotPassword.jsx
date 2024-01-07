import React from "react";
import "../../../assets/css/authentication.css";
import logo from "../../../assets/logos/logo.svg";
import { useNavigate } from "react-router-dom";

function Forgotpassword() {
  const navigate = useNavigate();
  return (
    <div className='signin-container'>
      <div className='signin-container-fluid'>
        <img src={logo} alt='' className='signin-logo' />
        <div className='signin-authentication'>
          <div className='signin-auth-body'>
            <p className='signin-header'>Reset Password</p>
            <form action='' className='signin-form'>
              <div className='flex-column'>
                <label htmlFor=''>Email Address</label>
              </div>
              <div className='inputForm'>
                <input
                  type='text'
                  className='input'
                  placeholder='Email Address'
                />
              </div>
            </form>
            <button
              className='signin-button'
              onClick={() => navigate("/reset-password")}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forgotpassword;
