import React from 'react';
import './FaqsSection.css'

function FaqsSection() {
  return (
    <div className="section-faqs section-spacing-lg">
      <div className="container">
        <div className="heading-section center">
          <div className="heading-sub fw-semibold effectFade fadeUp">FAQs</div>
          <div className="heading-title text-gradient-3 effectFade fadeRotateX">
            Frequently Asked <br />Questions
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="accordion-asked" id="accordion-asked">
              <div className="accordion-asked-item ">
                <div className="accordion-asked-title" id="asked1">
                  <button className="accordion-button text-body-1 fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                    What does Virtual Galaxy Infotech do, and who do you work with?
                    <span className="right-icon"></span>
                  </button>
                </div>
                <div id="collapse1" role="region" className="accordion-collapse collapse show" aria-labelledby="asked1" data-bs-parent="#accordion-asked">
                  <div className="accordion-body">
                    Virtual Galaxy Infotech Ltd (VGIL) has been building software since 1997, with 450+ employees and 200+ satisfied clients. We make products for banking and finance, including Core Banking, Digital Payments, e-LOS, e-CRM and Audit Flux. We also offer ERP, cybersecurity, AI solutions and IT infrastructure services for banks, financial institutions, government and enterprises, and we take on projects worldwide.
                  </div>
                </div>
              </div>
              <div className="accordion-asked-item " data-delay="0.1">
                <div className="accordion-asked-title" id="asked2">
                  <button className="accordion-button text-body-1 fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                    How do you keep our data secure?
                    <span className="right-icon"></span>
                  </button>
                </div>
                <div id="collapse2" role="region" className="accordion-collapse collapse" aria-labelledby="asked2" data-bs-parent="#accordion-asked">
                  <div className="accordion-body">
                    Security is built into our solutions from the start, not added later. Every solution comes with PII handling, SSO/SAML login, role-based access control, encryption and complete audit trails, making it enterprise-ready from day one.
                  </div>
                </div>
              </div>
              <div className="accordion-asked-item " data-delay="0.2">
                <div className="accordion-asked-title" id="asked3">
                  <button className="accordion-button text-body-1 fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                     Do you offer ready products or custom development?
                    <span className="right-icon"></span>
                  </button>
                </div>
                <div id="collapse3" role="region" className="accordion-collapse collapse" aria-labelledby="asked3" data-bs-parent="#accordion-asked">
                  <div className="accordion-body">
                    We do both. You can choose from our ready-to-deploy products, or we can build solutions around your needs through our services: Application Development, Mobile Computing, Digital Solutions, AI/ML, IT Infrastructure Development and DC-DR (Data Centre and Disaster Recovery).
                  </div>
                </div>
              </div>
              <div className="accordion-asked-item " data-delay="0.3">
                <div className="accordion-asked-title" id="asked4">
                  <button className="accordion-button text-body-1 fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                    How do you deliver a project?
                    <span className="right-icon"></span>
                  </button>
                </div>
                <div id="collapse4" role="region" className="accordion-collapse collapse" aria-labelledby="asked4" data-bs-parent="#accordion-asked">
                  <div className="accordion-body">
                    We follow our 4D Framework. Discover: we bring your scattered data and systems into one clear view. Design: we map user journeys and build simple, user-friendly interfaces. Develop: we build and connect reliable, high-performance systems. Deliver: we handle rollout, user adoption and ongoing performance.
                  </div>
                </div>
              </div>
              <div className="accordion-asked-item " data-delay="0.4">
                <div className="accordion-asked-title" id="asked5">
                  <button className="accordion-button text-body-1 fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                    What support do you provide after go-live?
                    <span className="right-icon"></span>
                  </button>
                </div>
                <div id="collapse5" role="region" className="accordion-collapse collapse" aria-labelledby="asked5" data-bs-parent="#accordion-asked">
                  <div className="accordion-body">
                    Our work continues after launch. We provide continuous monitoring, improvements and support, so your solution keeps performing well and delivers long-term value.
                  </div>
                </div>
              </div>
              <div className="accordion-asked-item " data-delay="0.5">
                <div className="accordion-asked-title" id="asked6">
                  <button className="accordion-button text-body-1 fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                    I’m an investor. Where can I find company information?
                    <span className="right-icon"></span>
                  </button>
                </div>
                <div id="collapse6" role="region" className="accordion-collapse collapse" aria-labelledby="asked6" data-bs-parent="#accordion-asked">
                  <div className="accordion-body">
                    Our Investors section has annual reports, financial information, announcements, notices of meetings, dividend details, corporate governance documents and board and management information. For queries or grievances, visit the Investor Contacts & Grievances page.
                  </div>
                </div>
              </div>
              <div className="accordion-asked-item " data-delay="0.6">
                <div className="accordion-asked-title" id="asked7">
                  <button className="accordion-button text-body-1 fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                    How can I get a demo, talk to sales, or apply for a job?
                    <span className="right-icon"></span>
                  </button>
                </div>
                <div id="collapse7" role="region" className="accordion-collapse collapse" aria-labelledby="asked7" data-bs-parent="#accordion-asked">
                  <div className="accordion-body">
                    For demos and business enquiries, email info@vginfotech.ai, call +91 62626 86865 or use our Contact page. If you’d like to join us, visit our Careers section to learn why to join VGIL, meet our people and explore career paths.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqsSection;
