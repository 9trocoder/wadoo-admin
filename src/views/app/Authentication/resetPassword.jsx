import React from 'react'
import "../../../assets/css/authentication.css";
import logo from "../../../assets/logos/logo.svg";

function Resetpassword() {
  return (
    <div className='signin-container'>
      <div className='signin-container-fluid'>
        <img src={logo} alt='' className='signin-logo' />
        <div className='signin-authentication'>
          <div className='signin-auth-body'>
            <p className='signin-header'>Reset Password</p>
            <form action='' className='signin-form'>
              <div className='flex-column'>
                <label htmlFor=''>Password</label>
              </div>
              <div className='inputForm'>
                <input
                  type='password'
                  className='input'
                  placeholder='Password'
                />
              </div>
              <div className='flex-column'>
                <label htmlFor=''>Confirm Password</label>
              </div>
              <div className='inputForm'>
                <input
                  type='password'
                  className='input'
                  placeholder='Confirm Password'
                />
              </div>
            </form>
            <button className='signin-button'>Reset</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resetpassword