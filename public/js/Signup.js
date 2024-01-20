import React, { useState } from 'react';
import { useRouter } from 'next/router';
import UserPool from './UserPool';
import '../css/login.css';

const Signup = () => {
  const router = useRouter();
  const [emailInputRegister, setEmail] = useState("");
  const [passwordInputRegister, setPassword] = useState("");


  const onSubmit = async (event) => {
    event.preventDefault();
  
    UserPool.signUp(emailInputRegister, passwordInputRegister, [], null, (err, data) => {
      if (err) {
        console.error(err);
      } else {
      console.log(data);
      router.push('/verify');
      }
    });
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
            </div>
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