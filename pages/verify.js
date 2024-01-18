import React from 'react'
import Head from 'next/head'
import Script from 'next/script'

function Verify() {
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
        <form
          action="/verify"
          autoComplete="off"
          className="verify-form"
          id="verifyForm"
        >
          <div className="logo">
            <img src="/images/image2_man_icon.png" alt="coffeeai" />
            <h4>coffee.ai</h4>
          </div>
          <div className="heading">
            <h2>Verification</h2>
            <h6>Verify yourself before you brew!</h6>
          </div>
          <div className="actual-form">
            <div className="input-wrap">
              <input
                type="eMail"
                id="emailInputVerify"
                pattern=".*"
                minLength={4}
                className="input-field"
                autoComplete="off"
                required=""
              />
              <label>eMail</label>
            </div>
            <div className="input-wrap">
              <input
                type="text"
                id="codeInputVerify"
                pattern=".*"
                minLength={4}
                className="input-field"
                autoComplete="off"
                required=""
              />
              <label>Verification Code</label>
            </div>
            <input type="submit" defaultValue="Verify" className="verify-btn" />
            <p className="text">
              Didn't get a verification code? Check your spam mail or try again
              by <a href="/login">registering your account</a> with us.
            </p>
          </div>
        </form>
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
<Script src="/js/vendor/jquery-3.1.0.js"></Script>
<Script src="/js/vendor/aws-cognito-sdk.min.js"></Script>
<Script src="/js/vendor/amazon-cognito-identity.min.js"></Script>
<Script src="/js/config.js"></Script>
<Script src="/js/cognito-auth.js"></Script>
</>
  )
}

export default Verify