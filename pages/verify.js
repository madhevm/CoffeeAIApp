import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import { Account } from "../public/js/Account"
import Verify from "../public/js/VerifyUser"
import Signup from '../public/js/Signup';
import moveSlider from '../public/js/verify_page';
import toggle from '../public/js/verify_page';

if (typeof window === 'object') {
  // Check if document is finally loaded
     document.addEventListener("DOMContentLoaded", function () {
       });
    }
    
function UserVerification() {
  return(
<>
<Head>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Verify Me</title>
  <link rel="stylesheet" href="/css/verify.css" />
  <link
    href="https://api.fontshare.com/v2/css?f[]=excon@400,900,700,500,300,100&f[]=tanker@400&display=swap"
    rel="stylesheet"
  />
  <link rel="icon" type="image/x-icon" href="/images/favicon.svg" />
</Head>

<main>
  <div className="box">
    <div className="inner-box">
      <div className="forms-wrap">
      <Account>
          <Verify />
      </Account> 
      </div>
      <div className="carousel">
        <div className="images-wrapper">
          <img
            src="/images/carousel_4.png"
            className="image img-1 show"
            alt=""
          />
          </div>
        </div>
      </div>  
  </div>
</main>
<Script src="/js/verify_page.js"></Script>
</>
  )
}

export default UserVerification
