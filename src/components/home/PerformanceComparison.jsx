"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShieldX, Sparkles } from "lucide-react";

import "./PerformanceComparison.css"

function PerformanceComparison() {

  const [withVG, setWithVG] = useState(true);

  const withoutList = [
    "Disconnected systems and workflows",
    "Limited operational visibility",
    "Manual and repetitive processes",
    "Fragmented data across departments",
    "Slow business decisions"
  ];

  const withList = [
    "Unified enterprise operations",
    "Real-time business visibility",
    "Intelligent workflow automation",
    "Connected data and AI insights",
    "Faster, confident decision-making"
  ];

  return (
    <div
      id="performance"
      className="section-pricing section-spacing-lg"
    >
      <div className="container">

        <div className="heading-section mb-4">

          <div className="heading-sub fw-semibold effectFade fadeUp">
            Business Transformation
          </div>

          <div className="heading-title text-gradient-3 gap-8 effectFade fadeRotateX">

            Compare the Difference <br />
            with Virtual Galaxy
            {/* <input
              type="checkbox"
              id="pricingSwitch"
              className="tf-switch-check mx-3"
              checked={withVG}
              onChange={() => setWithVG(!withVG)}
            /> */}


            {/* <div className="h-8 d-none d-lg-block"></div>

            <input
              type="checkbox"
              id="pricingSwitch"
              className="tf-switch-check"
              checked={withVG}
              onChange={() => setWithVG(!withVG)}
            />

            &nbsp;

            {withVG
              ? "With Virtual Galaxy"
              : "Without Virtual Galaxy"} */}

          </div>

        </div>

        <div className="row">

          <div className="col-lg-6 lg-mb-24">

            <div
              className={`pricing-item h-100 effectFade fadeRotateX ${withVG
                ? "comparison-inactive"
                : "comparison-active"
                }`}
            >

              <div className="top d-flex gap-12 align-items-center pc-eyebrow-heading-section" >

                <div className="d-flex gap-8 align-items-center">

                  <ShieldX size={24} color="#ef4444" />

                  <div className="fw-semibold text pc-eyebrow-heading">

                    Without Virtual Galaxy

                  </div>

                </div>

                <div className="line"></div>

                <div className="fw-semibold text-secondary pc-eyebrow-heading">

                  Traditional Operations

                </div>

              </div>

              <div className="heading">

                <div className="d-flex gap-14 align-items-end">

                  <div
                    className="price-number-pc fw-bold"
                    style={{
                      fontSize: "28px",
                      lineHeight: 1.1,
                    }}
                  >

                    Legacy Systems

                  </div>

                </div>

                <Link
                  href="/contact"
                  className="tf-btn-2 pc-btn"
                >

                  Get In Touch

                </Link>

              </div>

              <div className="line"></div>

              <div className="content">

                <div>

                  <div className="title fw-semibold mb-4">

                    Current Business Challenges

                  </div>

                  <div className="text fw-semibold">

                    Fragmented systems and manual
                    processes create operational
                    inefficiencies that slow business
                    growth and reduce visibility.

                  </div>

                </div>

                <ul className="list-text type-check pc-list">

                  {withoutList.map((item, index) => (

                    <li key={index}>

                      <i className="icon icon-close-circle" style={{backgroundColor:"#ef4444"}}></i>

                      {item}

                    </li>

                  ))}

                </ul>

              </div>

            </div>

          </div>

          <div className="col-lg-6">

            <div
              className={`pricing-item h-100 style-blue effectFade fadeRotateX ${withVG
                  ? "comparison-active"
                  : "comparison-inactive"
                }`}
            >

              <div className="top d-flex gap-12 align-items-center  pc-eyebrow-heading-section" >

                <div className="d-flex gap-8 align-items-center">

                  <Sparkles size={24} color="#f97316" />

                  <div className="fw-semibold text pc-eyebrow-heading">

                    With Virtual Galaxy

                  </div>

                </div>

                <div className="line"></div>

                <div className="fw-semibold text-neutral-400 pc-eyebrow-heading">

                  AI-Powered Enterprise

                </div>

              </div>

              <div className="heading">

                <div className="d-flex gap-14 align-items-end">

                  <div
                    className="price-number-pc fw-bold"
                    style={{
                      fontSize: "28px",
                      lineHeight: 1.1,
                    }}
                  >

                    AI-Driven Growth

                  </div>

                </div>

                <Link
                  href="/ai"
                  className="tf-btn pc-btn"
                >
                  Know More
                </Link>

              </div>

              <div className="line"></div>

              <div className="content">

                <div>

                  <div className="title fw-semibold mb-4">

                    Business Outcomes

                  </div>

                  <div className="text fw-semibold">

                    Transform your organization with
                    intelligent automation, connected
                    systems and scalable enterprise
                    solutions designed for sustainable
                    growth.

                  </div>

                </div>

                <ul className="list-text type-check pc-list">

                  {withList.map((item, index) => (

                    <li key={index}>

                      <i className="icon icon-check-solid" style={{backgroundColor:"#83e671", color:"var(--primary)"}}></i>

                      {item}

                    </li>

                  ))}

                </ul>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default PerformanceComparison;