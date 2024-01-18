import React from 'react'
import Head from 'next/head'
import Script from 'next/script'

if (typeof window === 'object') {
  // Check if document is finally loaded
     document.addEventListener("DOMContentLoaded", function () {
       });
    }

function Home() {
  return(
<>
    <Head>

  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="shortcut icon" href="/images/favicon.svg" type="image/png" />
  {/*=============== REMIXICONS ===============*/}
  <link
    href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
    rel="stylesheet"
  />
  {/*=============== SWIPER CSS ===============*/}
  <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
  {/*=============== CSS ===============*/}
  <link rel="stylesheet" href="/css/home.css" />
  <title>CoffeeAI</title>

    </Head>
  <header className="header" id="header">
    <nav className="nav container">
      <a href="#" className="nav__logo">
        CoffeeAI
      </a>
      <div className="nav__menu" id="nav-menu">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link active-link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="/login" className="nav__link">
              Login
            </a>
          </li>
        </ul>
        <i className="ri-close-line nav__close" id="nav-close" />
      </div>
      <div className="nav__toggle" id="nav-toggle">
        <i className="ri-function-line" />
      </div>
    </nav>
  </header>
  <main className="main">
    {/*==================== HOME ====================*/}
    <section className="home" id="home">
      <img
        src="/images/isaac-benhesed-onLbXleIkds-unsplash.jpg"
        alt=""
        className="home__img"
      />
      <div className="home__container container grid">
        <div className="home__data">
          <span className="home__data-subtitle">
            Generating the perfect coffee recipes based on your preferences
          </span>
          <h1 className="home__data-title">
            Your Coffee, Your Rules
            <br />
            <b>Artificially Crafted</b>
          </h1>
          <a href="/login" className="button">
            Find Your Coffee Now!
          </a>
        </div>
      </div>
    </section>
    {/*==================== EXPERIENCE ====================*/}
    <section className="experience section">
      <div className="experience__container container grid">
        <div className="experience__content grid">
          <div className="experience__data">
            <h2 className="experience__number">
              <img src="/images/open-ai.svg" alt="" />
            </h2>
            <span className="experience__description">
              Aroma <br /> Insights by <br />
              OpenAI
            </span>
          </div>
          <div className="experience__data">
            <h2 className="experience__number">
              <img src="/images/lambda.svg" alt="" />
            </h2>
            <span className="experience__description">
              Lambda <br /> powered <br /> sip advisor
            </span>
          </div>
          <div className="experience__data">
            <h2 className="experience__number">
              <img src="/images/elasticbeanstalk.svg" alt="" />
            </h2>
            <span className="experience__description">
              Elastic Beakstalk <br />
              magical brewing <br /> wizard
            </span>
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer className="footer section">
    <div className="footer__container container grid">
      <div className="footer__content grid">
        <div className="footer__data">
          <h3 className="footer__title">CoffeeAI</h3>
          <p className="footer__description">
            Brewing brilliance one <br /> cup at a time, for an enjoyable
            drinking <br /> experience.
          </p>
          <div>
            <a
              href="https://www.gmail.com/"
              target="_blank"
              className="footer__social"
            >
              <i className="ri-mail-fill" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="footer__social"
            >
              <i className="ri-linkedin-fill" />
            </a>
          </div>
        </div>
        <div className="footer__data">
          <h3 className="footer__subtitle">Tools Used</h3>
          <ul>
            <li className="footer__item">
              <a href="https://openai.com" className="footer__link">
                OpenAI
              </a>
            </li>
            <li className="footer__item">
              <a href="https://aws.amazon.com" className="footer__link">
                AWS
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__data">
          <h3 className="footer__subtitle">Services Used</h3>
          <ul>
            <li className="footer__item">
              <a
                href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjyhOr69t2DAxXFGa0GHWF8A4MYABAAGgJwdg&ae=2&gclid=CjwKCAiAqY6tBhAtEiwAHeRopYP4ANRg_aVCC736P4gQ-zoIQQF_l6V8S929vlZTXLnm-FguQreGwBoC_BwQAvD_BwE&ohost=www.google.com&cid=CAESVeD2fx9fu4KT5b8hvJvhv9Br5xUf0HBivUPN0ANV_5VEEPJA9iTI5om3KJS-i5YG4W-wEH6O1V2EettIurEENuEcoonUNobXplieaIYZ7XuY81Niw1E&sig=AOD64_1-tC-TVHaK-phUHQqJyYiBkpQ2Xg&q&adurl&ved=2ahUKEwiZg-T69t2DAxXIMjQIHRYqA68Q0Qx6BAgFEAE&nis=8&dct=1"
                className="footer__link"
              >
                Lambda
              </a>
            </li>
            <li className="footer__item">
              <a
                href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiQ6Zjx9t2DAxUyMq0GHdnjCG8YABAAGgJwdg&ae=2&gclid=CjwKCAiAqY6tBhAtEiwAHeRopUlJipjvvZPeXZ2XysFHrKb5bUMz7TLjw42PlCVcFYlVBmTMTxRxvBoC7MYQAvD_BwE&ohost=www.google.com&cid=CAESVeD2RIe2usZ0Cybj_lz0ADIVi3WRBfTettGNqxWV_d1bauh44afvfmxY2GEJV-CEAym-03PvrpqfEhBHknZlFa2-xoJqlnGb8_vrIkLN2RD6NdcFs0g&sig=AOD64_1eJJhY8wRiHU7zK7jru-C2RLlKlg&q&adurl&ved=2ahUKEwidj5Tx9t2DAxV2MDQIHdIEBBsQ0Qx6BAgIEAE&nis=8&dct=1"
                className="footer__link"
              >
                Cognito
              </a>
            </li>
            <li className="footer__item">
              <a
                href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwi97JWC992DAxWOFa0GHT1IDBgYABAAGgJwdg&ae=2&gclid=CjwKCAiAqY6tBhAtEiwAHeRopfftsNnFPxB01cHUVNnSFuJ8vr13BWdS-YHqOOCJTYbmfnuiyryiKhoCVxkQAvD_BwE&ohost=www.google.com&cid=CAESVeD27zH6SfdndDpVKIrSn8PfUujUr2DAB43HeyV3jZnMWrw2EZa3lnCwdO4mZOYFP5W2ofKIK3R_ulc4ql3XG_8Lbv38nZwx8umnTLmOjkpg9Q20NzQ&sig=AOD64_1Wk6QQyvmj4yzlkp5udQI3xo-3Ow&q&adurl&ved=2ahUKEwiUrpCC992DAxWrLTQIHdZACjcQ0Qx6BAgFEAE&nis=8&dct=1"
                className="footer__link"
              >
                Elastic Beanstalk
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__data">
          <h3 className="footer__subtitle">Support</h3>
          <ul>
            <li className="footer__item">
              <a
                href="https://www.ncausa.org/About-Coffee/Coffee-Around-the-World"
                className="footer__link"
              >
                Blends
              </a>
            </li>
            <li className="footer__item">
              <a
                href="https://www.theknowledgeacademy.com/blog/types-of-coffee/"
                className="footer__link"
              >
                Flavors
              </a>
            </li>
            <li className="footer__item">
              <a
                href="https://www.ncausa.org/about-coffee/coffee-roasts-guide"
                className="footer__link"
              >
                Roasts
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__rights">
        <p className="footer__copy">© 2024 CoffeeAI. All rigths reserved.</p>
        <div className="footer__terms">
          <a href="#" className="footer__terms-link">
            Happy Brewing!
          </a>
        </div>
      </div>
    </div>
  </footer>
  {/*========== SCROLL UP ==========*/}
  <a href="#" className="scrollup" id="scroll-up">
    <i className="ri-arrow-up-line scrollup__icon" />
  </a>

</>

  )
}
export default Home