import { CognitoUser, CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { useState } from 'react';
import UserPool from './UserPool';
import '../css/verify.css'
 
function Verify() {
  const [emailInputSignin, setEmail] = useState('');
  const [OTP, setOTP] = useState('');
  const [verifyProcess, setVerifyProcess] = useState(false);
 
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
        alert("Couldn't verify account");
      } else {
        console.log(data);
        alert('Account verified successfully');
        window.location.href = '/login';
      }
    });
  };
 
  return (
    <div>
        (<form onSubmit={verifyAccount}>
          Enter email:
          <input
            value={emailInputSignin}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
          Enter the OTP:
          <input
            value={OTP}
            onChange={(e) => setOTP(e.target.value)}
            type="text"
          />
          <input type="submit" defaultValue="Verify" className="sign-btn" />
        </form>
        );
    </div>
  );
}
 
export default Verify;