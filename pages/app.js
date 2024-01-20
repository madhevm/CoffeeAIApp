import React from 'react';
import Signup from '../public/js/Signup';
import Login from "../public/js/Login"
import Verify from "../public/js/VerifyUser"
import { Account } from "../public/js/Account"
import Status from "../public/js/Status";
import '../public/css/login.css';

const App = () => {
  return(
          <Account>
              <Login />
          </Account>
)};

export default App;