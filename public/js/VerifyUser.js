import { CognitoUser, CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { useRouter } from 'next/router';
import { useState } from 'react';
import UserPool from './UserPool';
import '../css/verify.css'
 
function Verify() {
  const router = useRouter();
  const [emailInputSignin, setEmail] = useState('');
  const [OTP, setOTP] = useState('');
  const [verifyProcess, setVerifyProcess] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState('');
  const [emailError, setEmailError] = useState('');
  const [otpError, setOtpError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
 
  const onSubmit = (e) => {
    e.preventDefault();

// Validate email format
      if (!validateEmail(emailInputSignin)) {
        setEmailError("Invalid email format");
        return;
      } else {
        setEmailError("");
      }

    const attributeList = [];
    attributeList.push(
      new CognitoUserAttribute({
        Name: 'email',
        Value: emailInputSignin,
      })
    );
  };
 
  const verifyAccount = (e) => {
    e.preventDefault();

        // Validate OTP (Verification Code)
        if (!validateOTP(OTP)) {
          setOtpError("Invalid OTP format");
          return;
        } else {
          setOtpError("");
        }
    const user = new CognitoUser({
      Username: emailInputSignin,
      Pool: UserPool,
    });
    console.log(user);
    user.confirmRegistration(OTP, true, (err, data) => {
      if (err) {
        console.log(err);
        setVerificationStatus("Couldn't verify account. Please check the OTP.");
        setSuccessMessage('');
      } else {
        console.log(data);
        setVerificationStatus('Account verified successfully');
        setSuccessMessage('You have successfully verified your account!');
        router.push('/coffeeai');
      }
    });
  };
   // Email validation function
   const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // OTP (Verification Code) validation function
  const validateOTP = (otp) => {
    return otp.length >= 6;
  };

  return (
    <form onSubmit={verifyAccount}
      autoComplete="off"
      className="sign-in-form"
      id="signinForm">
      <div className="logo">
        <img src="/images/image2_man_icon.png" alt="coffeeai" />
        <h4>coffee.ai</h4>
      </div>
      <div className="heading">
        <h2>Verification</h2>
          <h6>Verify yourself before you brew! Do you already have an account? </h6>
          <a href="/login" className="toggle">
              Sign in
          </a>
      </div>
      <div className="actual-form">      
      <div className="input-wrap">
          <input
            value={emailInputSignin}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="input-field"
            autoComplete="off"
            required=""
          ></input>
          <label>eMail</label>
          <p className="error-message">{emailError}</p>
        </div>
        <div className="input-wrap">
          <input
            value={OTP}
            onChange={(e) => setOTP(e.target.value)}
            type="text"
            pattern=".*"
            minLength={4}
            className="input-field"
            autoComplete="off"
            required=""
          ></input>
          <label>Verification Code</label>
          <p className="error-message">{otpError}</p>
        </div>
        {verificationStatus && <p className={`error-message ${verificationStatus.includes('Couldn\'t') ? 'error' : 'success'}`}>{verificationStatus}</p>}
          {successMessage && <p className="success">{successMessage}</p>}
          <input type="submit" defaultValue="Verify" className="verify-btn" />
          <p class="text">
                Didn't get a verification code? Check your spam mail or try again by <a href="/login.html">registering your account</a> with us.
          </p>
    </div>
  </form>
);
};
 
export default Verify;