import React, { useState, useContext } from 'react';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import UserPool from './UserPool';
import { AccountContext } from "./Account";

const Login = () => {
  const [emailInputSignin, setEmail] = useState("");
  const [passwordInputSignin, setPassword] = useState("");

  const { authenticate } = useContext(AccountContext);

  const onSubmit = (event) => {
    event.preventDefault();

    authenticate(emailInputSignin, passwordInputSignin)
      .then(data => {
        console.log("logged in!", data);
      })
      .catch(err => {
        console.error("Failed to login", err);
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
      },
      onFailure: (err) => {
        console.error("onFailure: ", err);
      },
      newPasswordRequired: (data) => {
        console.log("newPasswordRequired: ", data);
      },
    });
  };
return (
  <div>
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
                minLength={4}
                className="input-field"
                autoComplete="off"
                required=""
              />
              <label>e-mail</label>
            </div>
            <div className="input-wrap">
              <input
                value={passwordInputSignin}
                onChange={(event) => setPassword(event.target.value)}             
                type="password"
                id="passwordInputSignin"
                minLength={4}
                className="input-field"
                autoComplete="off"
                required=""
              />
              <label>Password</label>
            </div>
            <input type="submit" defaultValue="Login" className="sign-btn" />
            <p className="text">
              Forgotten your password or your login details?
              <a href="#">Get help</a> signing in
            </p>
          </div>
        </form>
  </div>
);
};
export default Login;