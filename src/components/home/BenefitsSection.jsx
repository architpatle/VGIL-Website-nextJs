import React from 'react';

function BenefitsSection() {
  return (
    <div className="section-benefits section-spacing-grouped">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section center mb-48">
              <div className="heading-sub fw-semibold effectFade fadeUp">Benefits</div>
              <div className="heading-title text-gradient-3 effectFade fadeRotateX">Enterprise-Grade, <br /> From Day One</div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 lg-mb-24">
            <div className="benefits-item h-100 effectFade fadeUp">
              <div className="inner">
                <i className="icon icon-lock-solid"></i>
                <div className="content">
                  <h6 className="title fw-semibold">Secure by Design</h6>
                  <p className="text">All models hosted securely; no training on your IP.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 lg-mb-24">
            <div className="benefits-item h-100 effectFade fadeUp" data-delay="0.1">
              <div className="inner">
                <i className="icon icon-shield-check-solid"></i>
                <div className="content">
                  <h6 className="title fw-semibold">Compliance Ready</h6>
                  <p className="text">GDPR, SOC2, HIPAA frameworks built into the architecture.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="benefits-item h-100 effectFade fadeUp" data-delay="0.2">
              <div className="inner">
                <i className="icon icon-layer-group-solid"></i>
                <div className="content">
                  <h6 className="title fw-semibold">Model Agnostic</h6>
                  <p className="text">Easily swap between OpenAI, Anthropic, or open-source.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BenefitsSection;
