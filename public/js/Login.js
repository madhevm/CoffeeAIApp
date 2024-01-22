import React, { useState, useContext } from 'react';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import { useRouter } from 'next/router';
import UserPool from './UserPool';
import { AccountContext } from "./Account";
import '../css/login.css';

const Login = () => {
  const router = useRouter();
  const [emailInputSignin, setEmail] = useState("");
  const [passwordInputSignin, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [notRegisteredError, setNotRegisteredError] = useState("");
  const [submissionMessage, setSubmissionMessage] = useState("");

  const { authenticate } = useContext(AccountContext);

  const onSubmit = (event) => {
    event.preventDefault();
  
  // Validate email format
      if (!validateEmail(emailInputSignin)) {
        setEmailError("Invalid email format");
        return;
      } else {
        setEmailError("");
      }

    // Validate password
    const passwordValidationResult = validatePassword(passwordInputSignin);
    if (passwordValidationResult !== "valid") {
      setPasswordError(passwordValidationResult);
      return;
    } else {
      setPasswordError("");
    }

    authenticate(emailInputSignin, passwordInputSignin)
      .then(data => {
        console.log("logged in!", data);
        setNotRegisteredError("");
        setSubmissionMessage("Login successful!"); 
      })
      .catch(err => {
        console.error("Failed to login", err);
         // Handle specific errors returned by Amazon Cognito
         if (err.code === "UserNotConfirmedException") {
          console.error("User not confirmed. Please check your email for confirmation.");
          setNotRegisteredError("User not confirmed. Please check your email for confirmation.");
          setSubmissionMessage(""); // Reset submission message
        } else if (err.code === "NotAuthorizedException") {
          console.error("Incorrect username or password");
          setPasswordError("Incorrect username or password");
          setSubmissionMessage(""); // Reset submission message
        } else {
          console.error("Unexpected error:", err.message);
          setNotRegisteredError(""); // Reset not registered error
          setPasswordError(""); // Reset password error
          setSubmissionMessage(""); // Reset submission message
        }
      })

    const user = new CognitoUser({
      Username: emailInputSignin,
      Pool: UserPool
    });

    const authDetails = new AuthenticationDetails({
      Username: emailInputSignin,
      Password: passwordInputSignin,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        console.log("onSuccess: ", data);
        router.push('/coffeeai');
      },
      onFailure: (err) => {
        console.error("onFailure: ", err);
      },
      newPasswordRequired: (data) => {
        console.log("newPasswordRequired: ", data);
      },
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
          action="/coffeeai"
          autoComplete="off"
          className="sign-in-form"
          id="signinForm"
        >
          <div className="logo">
            <img src="/images/image2_man_icon.png" alt="coffeeai" />
            <h4>coffee.ai</h4>
          </div>
          <div className="heading">
            <h2>Welcome Back!</h2>
            <h6>Not registered yet? </h6>
            <a href="#" className="toggle">
               Sign up
            </a>
          </div>
          <div className="actual-form">
            <div className="input-wrap">
              <input
                 value={emailInputSignin}
                 onChange={(event) => setEmail(event.target.value)}                      
                type="email"
                id="emailInputSignin"
                minLength={8}
                className="input-field"
                autoComplete="off"
                required=""
              />
              <label>e-mail</label>
              <p className="error-message">{emailError}</p>
            </div>
            <div className="input-wrap">
              <input
                value={passwordInputSignin}
                onChange={(event) => setPassword(event.target.value)}             
                type="password"
                id="passwordInputSignin"
                minLength={8}
                className="input-field"
                autoComplete="off"
                required=""
              />
              <label>Password</label>
              <p className="error-message">{passwordError}</p>
            </div>
            <p className="error-message">{notRegisteredError}</p>
            <p className="submission-message">{submissionMessage}</p>
            <input type="submit" defaultValue="Login" className="sign-btn" />
            <p className="text">
              Forgotten your password or your login details?
              <a href="#">Get help</a> signing in
            </p>
          </div>
        </form>
);
};
export default Login;