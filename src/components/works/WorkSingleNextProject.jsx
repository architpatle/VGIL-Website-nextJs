import React from 'react';
import Link from "next/link";

function WorkSingleNextProject() {
  return (
    <div className="section-featured-works flat-spacing">
      <div className="container">
        <div className="heading-section center mb-64">
          <div className="heading-sub fw-semibold effectFade fadeUp">Project</div>
          <div className="heading-title text-gradient-3 effectFade fadeRotateX">Next Project</div>
        </div>
        <div className="featured-works-list position-relative">
          <div className="element effectFade fadeUp">
            <div className="featured-works-item">
              <div className="image main-mouse-hover">
                <img src="/assets/images/section/featured-works-3.jpg" alt="" />
                <Link href="/work-single" className="tf-mouse view-project h6">
                  View Project
                  <i className="icon icon-arrow-top-right"></i>
                </Link>
              </div>
              <div className="content">
                <div className="pagi-dot">
                  <span></span>
                  <span></span>
                  <span className="active"></span>
                  <span></span>
                </div>
                <div className="bot">
                  <h4 className="heading fw-semibold">Clinical Note <br /> Summarizer</h4>
                  <div className="grid-text">
                    <div className="item">
                      <div className="title text-secondary">DESCRIPTION</div>
                      <div className="text-body-3 fw-semibold">Clinic-lobby assistant answering pre-visit questions; decreased front-desk calls by 28%.</div>
                    </div>
                    <div className="item">
                      <div className="title text-secondary">DELIVERABLES</div>
                      <div className="fw-semibold">PHI-safe RAG, HIPAA-aligned workflows</div>
                    </div>
                    <div className="item">
                      <div className="title text-secondary">INDUSTRY</div>
                      <div className="fw-semibold">Healthcare</div>
                    </div>
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

export default WorkSingleNextProject;
