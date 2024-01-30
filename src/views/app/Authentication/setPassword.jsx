import React, { useState } from "react";
import logo from "../../../assets/logos/logo.svg";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function SetPassword() {
  let navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Toggle show password & hide password
  const handleTogglePassword = () => {
    if (password.length === 0) {
      setShowPassword(false);
    } else {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    }
  };

  const handleToggleConfirmPassword = () => {
    if (confirmPassword.length === 0) {
      setShowConfirmPassword(false);
    } else {
      setShowConfirmPassword(
        (prevShowConfirmPassword) => !prevShowConfirmPassword
      );
    }
  };
  return (
    <div className='signin-container'>
      <div className='signin-container-fluid'>
        <img src={logo} alt='' className='signin-logo' />
        <div className='signin-authentication'>
          <div className='signin-auth-body'>
            <p className='signin-header'>Reset Password</p>
            <form action='' className='signin-form'>
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
                  <FiEye
                    className='show-password'
                    onClick={handleTogglePassword}
                  />
                ) : (
                  <FiEyeOff
                    className='hide-password'
                    onClick={handleTogglePassword}
                  />
                )}
              </div>
              <div className='flex-column'>
                <label htmlFor=''>Confirm Password</label>{" "}
              </div>
              <div className='inputForm'>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  placeholder='Confirm Password'
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className='input'
                />
                {showPassword ? (
                  <FiEye
                    className='show-password'
                    onClick={handleToggleConfirmPassword}
                  />
                ) : (
                  <FiEyeOff
                    className='hide-password'
                    onClick={handleToggleConfirmPassword}
                  />
                )}
              </div>
            </form>
            <button
              onClick={() => navigate("/settings")}
              className='signin-button'
            >
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SetPassword;
