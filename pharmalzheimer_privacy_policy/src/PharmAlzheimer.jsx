import { useState, useRef, useEffect } from 'react'
import './PharmAlzheimer.css'

// PharmAlzheimer
function PharmAlzheimer() {

  return (
    <>
      <main>
        <nav className="navbar fixed-top bg-dark border-bottom border-body" data-bs-theme="dark">
          <div className="container-fluid">
            <div className="navbar-brand">
              <img width="46px" src="/assets/pharmalzheimer/favicon.ico" className="d-inline-block ms-4 me-3" alt=""/>
              PharmAlzheimer
            </div>
          </div>
        </nav>
        <section className="content">
          <div className="container">
            <div className="row">
              <div className="col">

                <h1>Privacy Policy for PharmAlzheimer</h1>
                <hr className="my-4" />

                <h2>Privacy Policy</h2>
                <p className="mt-4">Last updated: February 24, 2024.</p>
                <p>This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my app PharmAlzheimer:</p>

                <h3>What information do we collect?</h3>
                <p>I do not collect any data from anybody.</p>

                <h3>What information do our trusted business partners collect?</h3>
                <p>Non-personally identifiable information (for example your device model, or your country/continent level location) may be collected by our trusted business partners.</p>
                <p>Our app PharmAlzheimer will not collect personal information.</p>
                <p>Please check the list below, if you wish to have further information about our partners.</p>
                <ul>
                  <li>Google: <a href="https://www.google.com/policies/privacy/">Google</a> (<a href="https://www.google.com/policies/privacy/">privacy policy</a>) </li>
                </ul>
                <p>Apart from the trusted partners listed above, no information is disclosed to third parties.</p>

                <h3>Your Consent</h3>
                <p>By using our app PharmAlzheimer, you consent to the terms in this privacy policy.</p>

                <h3>Changes to our Privacy Policy</h3>
                <p>We may change this Privacy Policy at any time, at our sole discretion. If we decide to change anything in this document, we will update the Privacy Policy modification date.</p>

                <h3>Contacting Us</h3>
                <p>If there are any questions regarding this privacy policy, you may contact us using by emailing us:</p>
                <a href="mailto:pharmalzheimer@gmail.com">pharmalzheimer@gmail.com</a>

              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default PharmAlzheimer
