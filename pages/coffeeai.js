import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import Script from 'next/script'
import Status from "../public/js/Status";
import { Account } from "../public/js/Account"
import "../public/css/coffeeai.css";
import { useRouter } from 'next/router';
import main from "../public/css/coffeeai.css";

if (typeof window === 'object') {
  // Check if document is finally loaded
     document.addEventListener("DOMContentLoaded", function () {
       });
    }

function CoffeeAI() {
  const router = useRouter();
  const [accountStatus, setAccountStatus] = useState('');
  useEffect(() => {
    // Fetch or set the account status, for example, from an API or another source
    const fetchedAccountStatus = 'Please Login'; // Replace this with your actual logic
    setAccountStatus(fetchedAccountStatus);

    // Check if the user is not logged in, then redirect to the login page
    if (fetchedAccountStatus === 'Please Login') {
    }
  }, []);
  
  const handleHomeButtonClick = () => {
    router.push('/').then(() => router.reload());
  };

  return(
<>
<Head>

  <meta charSet="UTF-8" />
  <title>Coffee AI</title>
  <link rel="stylesheet" href="/css/coffeeai.css" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link
    href="https://api.fontshare.com/v2/css?f[]=excon@400,900,700,500,300,100&f[]=tanker@400&display=swap"
    rel="stylesheet"
  />
  <link rel="icon" type="image/x-icon" href="/images/favicon.svg" />

  </Head>

  <section className="side-bar">
    <button className="button" id="homeElement" onClick={handleHomeButtonClick}>
      Back to Home
    </button>
    <p className="miniTitle" />
    <div className="history" />
    <form autoComplete="off" className="input-form">
      <div className="actual-form"></div>
      <div className="input-wrap">
        <input
          type="text"
          id="blend"
          required=""
          className="input-field"
          autoComplete="off"
        />
        <label>Blend:</label>
      </div>
      <div className="input-wrap">
        <input
          type="text"
          id="flavor"
          required=""
          className="input-field"
          autoComplete="off"
        />
        <label>Flavor:</label>
      </div>
      <div className="input-wrap">
        <input
          type="text"
          id="roast_level"
          required=""
          className="input-field"
          autoComplete="off"
        />
        <label>Level of Roast:</label>
      </div>
      <div id="submit" value="Search" className="sign-btn">
      ✧ Find My Coffee
      </div>
    </form>
    <div id="loadingContainer" />
    <div class="account-status">
      <Account>
        <Status />
      </Account>
    </div>
  </section>
  <section className="main">
    <h1>CoffeeAI</h1>
    <p className="text">
      Prompt CoffeeAI by inputting your favourite{" "}
      <a href="https://www.ncausa.org/About-Coffee/Coffee-Around-the-World">
        <b>blend</b>
      </a>
      ,{" "}
      <a href="https://foamaroma.com/top-10-most-popular-coffee-flavors/">
        <b>flavor</b>
      </a>{" "}
      and{" "}
      <a href="https://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide">
        <b>type of roast</b>
      </a>{" "}
      to find the best coffee recipe just for you!
    </p>
    <div className="output-container" id="outPutElement" />
    <p id="outPut" />
    <div className="bottom-section">
      <div className="input-container"></div>
    </div>
    <p className="info">
      Powered with ChatGPT by OpenAI. Chat GPT Mar 14 Version. CoffeeAI can make
      mistakes. Consider checking important information and a variety of sources
      before brewing!
    </p>
  </section>

  <Script src="/js/app_page.js"></Script>
</>
  )
}
export default CoffeeAI