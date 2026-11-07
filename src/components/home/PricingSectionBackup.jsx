import React, { useState } from 'react';
import Link from "next/link";
import  './PricingSection.css';

function PricingSection() {
  return (
    <div id="pricing" className="section-pricing section-spacing">
      <div className="container">
        <div className="heading-section mb-80">
          <div className="heading-sub fw-semibold effectFade fadeUp">AI-Powered System</div>
          <div className="heading-title text-gradient-3 gap-8 effectFade fadeRotateX">
            Switch from Disconnected Legacy Systems to  <br />
            <input type="checkbox" id="pricingSwitch" className="tf-switch-check" defaultChecked />&nbsp;
             AI-Enabled Cybersecurity.
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 lg-mb-24">
            <div className="pricing-item h-100 effectFade fadeRotateX">
              <div className="top d-flex gap-12 align-items-center">
                <div className="d-flex gap-8 align-items-center">
                  <i className="icon icon-user-friends-solid fs-24"></i>
                  <div className="fw-semibold text">Security Without Intelligence <br /> Slows Everything Down</div>
                </div>
                {/* <div className="line"></div>
                <div className="fw-semibold text-secondary">For startups</div> */}
              </div>
              {/* <div className="heading">
                <div className="d-flex gap-14 align-items-end">
                  <div className="price-number fw-bold" data-month="1000" data-year="9900">$9,900</div>
                  <h6 className="price-per">/ year</h6>
                </div>
                <Link href="/contact" className="tf-btn">
                  Get Started
                </Link>
              </div> */}
              <div className="line"></div>
              <div className="content">
                <div>
                  {/* <div className="title fw-semibold mb-4">What’s included</div> */}
                  <div className="text fw-semibold">
                    Without centralized
                    detection, automation, or real-time
                    visibility, traditional systems rely
                    heavily on manual monitoring and
                    delayed responses—making it easier
                    for threats to go unnoticed and harder
                    to prevent damage in time.
                  </div>
                </div>
                <ul className="list-text type-check">
                  <li>
                    <i className="icon icon-check-solid"></i>
                    No centralized threat detection
                  </li>
                  <li>
                    <i className="icon icon-check-solid"></i>
                    Manual monitoring and response
                  </li>
                  <li>
                    <i className="icon icon-check-solid"></i>
                    No automated incident handling
                  </li>
                  <li>
                    <i className="icon icon-check-solid"></i>
                    Limited visibility across systems
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="pricing-item h-100 style-blue effectFade fadeRotateX" data-delay="0.1">
              <div className="top d-flex gap-12 align-items-center">
                <div className="d-flex gap-8 align-items-center">
                  <i className="icon icon-building fs-24"></i>
                  <div className="fw-semibold text">Smarter Security Built for Modern
                    Threats <br />(With AI-Enabled Cybersecurity)</div>
                </div>
                {/* <div className="line"></div>
                <div className="fw-semibold text-neutral-400">For organisations</div> */}
              </div>
              {/* <div className="heading">
                <div className="d-flex gap-14 align-items-end">
                  <div className="price-number fw-bold" data-month="1700" data-year="19900">$19,900</div>
                  <h6 className="price-per">/ year</h6>
                </div>
                <Link href="/contact" className="tf-btn">
                  Get Started
                </Link>
              </div> */}
              <div className="line"></div>
              <div className="content">
                <div>
                  {/* <div className="title fw-semibold mb-4">What’s included</div> */}
                  <div className="text fw-semibold">
                    AI-powered cybersecurity
                    brings real-time threat detection,
                    automated response, and complete system
                    visibility— ensuring faster decisions,
                    stronger protection, and a more resilient
                    digital environment.
                  </div>
                </div>
                <ul className="list-text type-check">
                  <li>
                    <i className="icon icon-check-solid"></i>
                    AI-driven threat detection
                  </li>
                  <li>
                    <i className="icon icon-check-solid"></i>
                    Automated incident response
                  </li>
                  <li>
                    <i className="icon icon-check-solid"></i>
                    Behaviour and anomaly analysis
                  </li>
                  <li>
                    <i className="icon icon-check-solid"></i>
                    Centralized security visibility 
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default PricingSection;
