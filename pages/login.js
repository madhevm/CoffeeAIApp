import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import { Account } from "../public/js/Account"
import Login from "../public/js/Login"
import Signup from '../public/js/Signup';
import moveSlider from '../public/js/login_page';
import toggle from '../public/js/login_page';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

if (typeof window === 'object') {
  // Check if document is finally loaded
     document.addEventListener("DOMContentLoaded", function () {
       });
    }

function Signin() {
  return(

<>
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

<main>

  <div className="box">
    <div className="inner-box">
      <div className="forms-wrap">
        <Account>
          <Login />
          <Signup />
        </Account> 
      </div>
      <div className="carousel">
        <div className="images-wrapper">
          <img
            src="/images/carousel_2.png"
            className="image img-1 show"
            alt=""
          />
          <img src="/images/carousel_1.png" className="image img-2" alt="" />
          <img src="/images/carousel_3.png" className="image img-3" alt="" />
        </div>
        <div className="text-wrap">
          <div className="text-group">
            <h2>Brewing Brilliance, One Cup at a Time!</h2>
            <h2>Discover Your Perfect Blend using AI.</h2>
            <h2>Brewed by AI, Crafted for You!</h2>
          </div>
        </div>
        <div className="bullets">
          <span className="active" data-value={1} />
          <span data-value={2} />
          <span data-value={3} />
        </div>
      </div>
    </div>
  </div>
</main>

<Script src="../public/js/login_page.js"></Script>
</>
  )
}
export default Signin
