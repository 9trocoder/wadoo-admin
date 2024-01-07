import React, { useState } from "react";
import "../../../assets/css/authentication.css";
import logo from "../../../assets/logos/logo.svg";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function Signin() {
  let navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Toggle show password & hide password
  const handleTogglePassword = () => {
    if (password.length === 0) {
      setShowPassword(false);
    } else {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    }
  };

  return (
    <div className='signin-container'>
      <div className='signin-container-fluid'>
        <img src={logo} alt='WADOO' className='signin-logo' />
        <div className='signin-authentication'>
          <div className='signin-auth-body'>
            <p className='signin-header'>Sign in</p>
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

              <div className='flex-column'>
                <label htmlFor=''>Password</label>{" "}
              </div>
              <div className='inputForm'>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  placeholder='Password'
                  onChange={(e) => setPassword(e.target.value)}
                  className='input'
                />
                {showPassword ? (
                  <FiEyeOff
                    className='hide-password'
                    onClick={handleTogglePassword}
                  />
                ) : (
                  <FiEye
                    className='show-password'
                    onClick={handleTogglePassword}
                  />
                )}
              </div>
              <p
                className='forgot-password'
                onClick={() => navigate("/forgot-password")}
              >
                Forgot Password?
              </p>
            </form>
            <button
              className='signin-button'
              onClick={() => navigate("/dashboard")}
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
