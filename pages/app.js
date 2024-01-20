import React from 'react';
import Signup from '../public/js/Signup';
import Login from "../public/js/Login"
import Verify from "../public/js/Verify"
import { Account } from "../public/js/Account"
import Status from "../public/js/Status";

function Signin() {
  return(
<Head>
    
<meta charSet="UTF-8" />
<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Register &amp; Login</title>
<link rel="stylesheet" href="/css/login.css" />
<link
  href="https://api.fontshare.com/v2/css?f[]=excon@400,900,700,500,300,100&f[]=tanker@400&display=swap"
  rel="stylesheet"
/>
<link rel="icon" type="image/x-icon" href="/images/favicon.svg" />

</Head>
  )}

const App = () => {
  return (
    <Account>
      <Status />
      <Signup />
      <Login />
      <Verify />
    </Account>
);
  };

export default App;