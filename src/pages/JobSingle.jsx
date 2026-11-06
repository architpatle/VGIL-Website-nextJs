"use client";

import React from "react";
import Link from "next/link";

import { CAREERS_DATA } from '../data/careersData';
import ContactSection from '../components/home/ContactSection';

function JobSingle({ slug }) {
  const job = CAREERS_DATA.find(j => j.slug === slug);

  if (!job) {
    return null;
  }

  return (
    <>
      <div className="section-hero v2 pt-180 pb-100" style={{ background: '#fdfcfb' }}>
        <div className="container">
          <Link href="/careers" className="d-flex align-items-center gap-8 mb-32 text-secondary" style={{ textDecoration: 'none' }}>
            <i className="icon icon-long-arrow-alt-left-solid"></i>
            <span>Back to Careers</span>
          </Link>
          <div className="row">
            <div className="col-lg-8">
              <h1 className="title text-display-3 mb-24 fw-bold">{job.title}</h1>
              <div className="d-flex flex-wrap gap-24 mb-48">
                <div className="d-flex align-items-center gap-8 text-secondary">
                  <i className="icon icon-folder-open"></i>
                  <span>{job.category}</span>
                </div>
                <div className="d-flex align-items-center gap-8 text-secondary">
                  <i className="icon icon-clock"></i>
                  <span>{job.type}</span>
                </div>
                <div className="d-flex align-items-center gap-8 text-secondary">
                  <i className="icon icon-map-marker-alt"></i>
                  <span>{job.locations.join(', ')}</span>
                </div>
              </div>
              
              <div className="job-content">
                <h4 className="fw-bold mb-16">About the Role</h4>
                <p className="text-secondary mb-32">{job.description}</p>
                
                <h4 className="fw-bold mb-16">Requirements</h4>
                <ul className="list-text type-check mb-48">
                  {job.requirements.map((req, idx) => (
                    <li key={idx} className="mb-8">
                      <i className="icon icon-check-solid me-10 text-primary"></i>
                      {req}
                    </li>
                  ))}
                </ul>
                
                <a href="mailto:hr@vginfotech.ai" className="tf-btn" style={{ padding: '15px 40px', borderRadius: '100px' }}>
                  Apply for this position
                </a>
              </div>
            </div>
            <div className="col-lg-4 mt-60 mt-lg-0">
              <div className="sidebar-box p-40" style={{ backgroundColor: '#ffffff', borderRadius: '24px', border: '1px solid #f1f1f1' }}>
                <h5 className="fw-bold mb-24">Job Overview</h5>
                <ul className="d-grid gap-16">
                  <li className="d-flex justify-content-between">
                    <span className="text-secondary">Location:</span>
                    <span className="fw-semibold">{job.locations[0]}</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <span className="text-secondary">Type:</span>
                    <span className="fw-semibold">{job.type}</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <span className="text-secondary">Category:</span>
                    <span className="fw-semibold">{job.category}</span>
                  </li>
                </ul>
                <hr className="my-24" />
                <div className="text-center">
                  <p className="text-secondary mb-16">Questions? Contact HR</p>
                  <a href="mailto:hr@vginfotech.ai" className="fw-bold" style={{ color: '#ff2d15' }}>hr@vginfotech.ai</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactSection />
    </>
  );
}

export default JobSingle;
