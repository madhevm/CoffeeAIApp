import React from 'react'
import Head from 'next/head'
import Script from 'next/script'

if (typeof window === 'object') {
  // Check if document is finally loaded
     document.addEventListener("DOMContentLoaded", function () {
       });
    }

function Login() {
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
        <form
          action="/coffeeai"
          autoComplete="off"
          className="sign-in-form"
          id="signinForm"
        >
          <div className="logo">
            <img src="/images/image2_man_icon.png" alt="coffeeai" />
            <h4>coffee.ai</h4>
          </div>
          <div className="heading">
            <h2>Welcome Back!</h2>
            <h6>Not registered yet? </h6>
            <a href="#" className="toggle">
               Sign up
            </a>
          </div>
          <div className="actual-form">
            <div className="input-wrap">
              <input
                type="email"
                id="emailInputSignin"
                minLength={4}
                className="input-field"
                autoComplete="off"
                required=""
              />
              <label>e-mail</label>
            </div>
            <div className="input-wrap">
              <input
                type="password"
                id="passwordInputSignin"
                minLength={4}
                className="input-field"
                autoComplete="off"
                required=""
              />
              <label>Password</label>
            </div>
            <input type="submit" defaultValue="Sign in" className="sign-btn" />
            <p className="text">
              Forgotten your password or your login details?
              <a href="#">Get help</a> signing in
            </p>
          </div>
        </form>
        <form
          action="/login"
          autoComplete="off"
          className="sign-up-form"
          id="registrationForm"
        >
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
                type="email"
                id="emailInputRegister"
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
                type="password"
                id="passwordInputRegister"
                pattern=".*"
                minLength={4}
                className="input-field"
                autoComplete="off"
                required=""
              />
              <label>Password</label>
            </div>
            <div className="input-wrap">
              <input
                type="password"
                id="password2InputRegister"
                pattern=".*"
                minLength={4}
                className="input-field"
                autoComplete="off"
                required=""
              />
              <label>Confirm Password</label>
            </div>
            <input type="submit" defaultValue="Sign Up" className="sign-btn" />
            <p className="text">
              By signing up, I agree to <a href="#">Brew the Best Coffee</a> and
              share it with others!
            </p>
          </div>
        </form>
      </div>
      <div className="carousel">
        <div className="images-wrapper">
          <img
            src="/images/carousel_1.png"
            className="image img-1 show"
            alt=""
          />
          <img src="/images/carousel_2.png" className="image img-2" alt="" />
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

<Script src="/js/cognito-auth.js"></Script>
<Script src="/js/config.js"></Script>
<Script src="/js/login_page.js"></Script>
</>
  )
}
export default Login
