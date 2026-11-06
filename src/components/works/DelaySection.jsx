import React from 'react';

function DelaySection() {
  return (
    <div className="section-delay flat-spacing">
      <div className="container">
        <div className="heading-section center mb-64">
          <div className="heading-sub fw-semibold effectFade fadeUp">Why Delay Hurts</div>
          <div className="heading-title text-gradient-3 effectFade fadeRotateX">The longer you wait, the harder <br /> it is to catch up.</div>
        </div>
        <div className="delay-wrap">
          <div className="delay-item">
            <div className="left">
              <h6 className="effectFade fadeUp title fw-semibold mb-12">Manual Operations Slow Progress</h6>
              <h6 className="effectFade fadeUp title fw-semibold">/ 01</h6>
            </div>
            <div className="right">
              <div className="delay-progress mb-12">
                <div className="progress-line" data-progress="80"></div>
                <h4 className="number-progress fw-semibold text-white">80%</h4>
              </div>
              <div className="text text-secondary text-end">/Workload</div>
            </div>
          </div>
          <div className="delay-item">
            <div className="left">
              <h6 className="effectFade fadeUp title fw-semibold mb-12">Competitors Outpace Innovation</h6>
              <h6 className="effectFade fadeUp title fw-semibold">/ 02</h6>
            </div>
            <div className="right">
              <div className="delay-progress mb-12">
                <div className="progress-line" data-progress="65"></div>
                <h4 className="number-progress fw-semibold text-white">65%</h4>
              </div>
              <div className="text text-secondary text-end">/Growth</div>
            </div>
          </div>
          <div className="delay-item">
            <div className="left">
              <h6 className="effectFade fadeUp title fw-semibold mb-12">Automation Potential Remains Untapped</h6>
              <h6 className="effectFade fadeUp title fw-semibold">/ 03</h6>
            </div>
            <div className="right">
              <div className="delay-progress mb-12">
                <div className="progress-line" data-progress="70"></div>
                <h4 className="number-progress fw-semibold text-white">70%</h4>
              </div>
              <div className="text text-secondary text-end">/Opportunities</div>
            </div>
          </div>
          <div className="delay-item">
            <div className="left">
              <h6 className="effectFade fadeUp title fw-semibold mb-12">Repetition Replaces Creativity</h6>
              <h6 className="effectFade fadeUp title fw-semibold">/ 04</h6>
            </div>
            <div className="right">
              <div className="delay-progress mb-12">
                <div className="progress-line" data-progress="49"></div>
                <h4 className="number-progress fw-semibold text-white">49%</h4>
              </div>
              <div className="text text-secondary text-end">/Draining Time</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DelaySection;
