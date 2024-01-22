import React, { useState } from 'react';
import { useRouter } from 'next/router';
import UserPool from './UserPool';
import '../css/login.css';

const Signup = () => {
  const router = useRouter();
  const [emailInputRegister, setEmail] = useState("");
  const [passwordInputRegister, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [registrationSuccessMessage, setRegistrationSuccessMessage] = useState("");
  const [registrationErrorMessage, setRegistrationErrorMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
  
  // Validate email format
  if (!validateEmail(emailInputRegister)) {
    setEmailError("Invalid email format");
    return;
  } else {
    setEmailError("");
  }

  // Validate password
  const passwordValidationResult = validatePassword(passwordInputRegister);
  if (passwordValidationResult !== "valid") {
    setPasswordError(passwordValidationResult);
    return;
  } else {
    setPasswordError("");
  }

    UserPool.signUp(emailInputRegister, passwordInputRegister, [], null, (err, data) => {
      if (err) {
        console.error(err);
        setRegistrationErrorMessage("Registration failed. Please try again.");
        setRegistrationSuccessMessage("");
      } else {
      console.log(data);
      setRegistrationSuccessMessage("Registration successful! Check your email for verification.");
        setRegistrationErrorMessage("");
      router.push('/verify');
      }
    });
  };
  // Email validation function
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Password validation function
  const validatePassword = (password) => {
// Password must be at least 8 characters long
if (password.length < 8) {
  return "Password must be at least 8 characters long";
}

// Check for at least 1 number
if (!/\d/.test(password)) {
  return "Password must contain at least 1 number";
}

// Check for at least 1 special character
if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
  return "Password requires at least 1 special character";
}

// Check for at least 1 uppercase letter
if (!/[A-Z]/.test(password)) {
  return "Password must contain at least 1 uppercase letter";
}

// Check for at least 1 lowercase letter
if (!/[a-z]/.test(password)) {
  return "Password must contain at least 1 lowercase letter";
}
// If all requirements are met, return "valid"
return "valid";
};

return (
        <form onSubmit={onSubmit} 
          autoComplete="off"
          className="sign-up-form"
          id="registrationForm"
        >
          <div className="logo">
            <img src="/images/image2_man_icon.png" alt="coffeeai" />
            <h4>coffee.ai</h4>
          </div>
          <div className="heading">
            <h2>Get Started</h2>
            <h6>Already registed your account? </h6>
            <a href="#" className="toggle">
              Sign in
            </a>
          </div>
          <div className="actual-form">
            <div className="input-wrap">
              <input
                value={emailInputRegister}
                onChange={(event) => setEmail(event.target.value)}              
                type="email"
                id="emailInputRegister"
                pattern=".*"
                minLength={4}
                className="input-field"
                autoComplete="off"
                required=""
              ></input>
              <label>eMail</label>
              <p className="error-message">{emailError}</p>
            </div>
            <div className="input-wrap">
              <input
                value={passwordInputRegister}
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                id="passwordInputRegister"
                pattern=".*"
                minLength={4}
                className="input-field"
                autoComplete="off"
                required=""
              ></input>
              <label>Password</label>
              <p className="error-message">{passwordError}</p>
            </div>
            <p class = "p-requirements">Password Requirements: 
              <br />*Contains at least 1 number 
              <br />*Contains at least 1 special character
              <br />*Contains at least 1 uppercase letter
              <br />*Contains at least 1 lowercase letter </p> <br />
            <p className="success-message">{registrationSuccessMessage}</p>
            <p className="error-message">{registrationErrorMessage}</p>
            <input type="submit" defaultValue="Sign Up" className="sign-btn" />
            <p className="text">
              By signing up, I agree to <a href="/">Brew the Best Coffee</a> and
              share it with others!
            </p>
          </div>
        </form>
);
};
export default Signup;