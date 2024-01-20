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
 
  const onSubmit = (e) => {
    e.preventDefault();

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
    const user = new CognitoUser({
      Username: emailInputSignin,
      Pool: UserPool,
    });
    console.log(user);
    user.confirmRegistration(OTP, true, (err, data) => {
      if (err) {
        console.log(err);
        setVerificationStatus("Couldn't verify account. Please check the entered OTP.");
      } else {
        console.log(data);
        setVerificationStatus('Account verified successfully');
        router.push('/login').then(() => window.location.reload());
      }
    });
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
        <h2>Get Started</h2>
          <h6>Already registed your account? </h6>
          <a href="#" className="toggle">
              Sign in
          </a>
      </div>
      <div className="actual-form">      
      <div className="input-wrap">
          <input
            value={emailInputSignin}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
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
            value={OTP}
            onChange={(e) => setOTP(e.target.value)}
            type="text"
            pattern=".*"
            minLength={4}
            className="input-field"
            autoComplete="off"
            required=""
          ></input>
          <label>OTP</label>
        </div>
          {verificationStatus && <p className={verificationStatus.includes('successfully') ? 'success' : 'error'}>{verificationStatus}</p>}
          <input type="submit" defaultValue="Verify" className="verify-btn" />
    </div>
  </form>
);
};
 
export default Verify;