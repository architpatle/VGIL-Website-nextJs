import React, { useState } from "react";
import Link from "next/link";

function PerformanceComparison() {

  const [withVG, setWithVG] = useState(true);

  const withoutList = [
    "Unclear costs and limited visibility",
    "Resources not fully optimized",
    "Security and governance handled separately",
    "Disconnected tools and manual workflows",
    "Slower delivery cycles",
    "Limited coordination across teams",
    "Scattered data and inconsistent insights",
    "Key knowledge locked in silos",
    "Decisions based on incomplete information"
  ];

  const withList = [
    "Transparent, scalable infrastructure from day one",
    "Efficient resource utilization with better performance",
    "Built-in security, governance, and reliability",
    "Seamless workflows across systems and teams",
    "Faster, automated execution at scale",
    "Real-time coordination and visibility",
    "Unified data across the organization",
    "Connected systems with shared intelligence",
    "Clear, insight-driven decision making"
  ];

  return (
    <div
      id="performance"
      className="section-pricing section-spacing"
    >
      <div className="container">

        <div className="heading-section mb-80">

          <div className="heading-sub fw-semibold effectFade fadeUp">
            Business Transformation
          </div>

          <div className="heading-title text-gradient-3 gap-8 effectFade fadeRotateX">

            Experience the difference between
            <br />

            traditional operations and an
            <br />

            AI-powered enterprise.

            <div className="h-8 d-none d-lg-block"></div>

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
              : "Without Virtual Galaxy"}

          </div>

        </div>

        <div className="row">

          <div className="col-lg-6 lg-mb-24">

  <div
    className={`pricing-item h-100 effectFade fadeRotateX ${
      !withVG ? "" : ""
    }`}
  >

    <div className="top d-flex gap-12 align-items-center">

      <div className="d-flex gap-8 align-items-center">

        <i className="icon icon-close-circle fs-24 text-danger"></i>

        <div className="fw-semibold text">

          Without Virtual Galaxy

        </div>

      </div>

      <div className="line"></div>

      <div className="fw-semibold text-secondary">

        Traditional Operations

      </div>

    </div>

    <div className="heading">

      <div className="d-flex gap-14 align-items-end">

        <div
          className="price-number fw-bold"
          style={{
            fontSize: "40px",
            lineHeight: 1.1,
          }}
        >

          Legacy
          <br />
          Systems

        </div>

      </div>

      <Link
        to="/contact"
        className="tf-btn"
      >

        View Challenges

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

      <ul className="list-text type-check">

        {withoutList.map((item, index) => (

          <li key={index}>

            <i className="icon icon-close-circle text-danger"></i>

            {item}

          </li>

        ))}

      </ul>

    </div>

  </div>

</div>

<div className="col-lg-6">

  <div
    className="pricing-item h-100 style-black effectFade fadeRotateX"
    data-delay="0.1"
  >

    <div className="top d-flex gap-12 align-items-center">

      <div className="d-flex gap-8 align-items-center">

        <i className="icon icon-check-circle fs-24"></i>

        <div className="fw-semibold text">

          With Virtual Galaxy

        </div>

      </div>

      <div className="line"></div>

      <div className="fw-semibold text-neutral-400">

        AI-Powered Enterprise

      </div>

    </div>

    <div className="heading">

      <div className="d-flex gap-14 align-items-end">

        <div
          className="price-number fw-bold"
          style={{
            fontSize: "40px",
            lineHeight: 1.1,
          }}
        >

          Connected
          <br />
          Intelligence

        </div>

      </div>

      <Link
        to="/contact"
        className="tf-btn"
      >

        Explore Benefits

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

      <ul className="list-text type-check">

        {withList.map((item, index) => (

          <li key={index}>

            <i className="icon icon-check-solid"></i>

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