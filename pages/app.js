import React from 'react';
import Signup from '../public/js/Signup';
import Login from "../public/js/Login"
import { Account } from "../public/js/Account"
import Status from "../public/js/Status";

const App = () => {
  return (
    <Account>
      <Status />
      <Signup />
      <Login />
    </Account>
  );
}

export default App;