import React from 'react';
import Link from "next/link";
import { CAREERS_DATA } from '../../data/careersData';

function CareersList() {
  return (
    <div id="openings" className="section-careers-list" style={{ backgroundColor: '#ffffff', paddingBottom: '60px', paddingTop: '40px' }}>
      <div className="container">
        
        {/* Top Section Matching Screenshot */}
        <div className="row mb-48">
          <div className="col-lg-8">
            <div className="heading-section text-start">
              <div className="heading-sub fw-semibold mb-12" style={{ color: '#1f2937', fontSize: '14px' }}>Careers</div>
              <h2 className="heading-title mb-16" style={{ fontWeight: '700', fontSize: '32px', color: '#1f2937' }}>
                Discover Your Next Career Move with <span style={{ color: '#ff2d15' }}>Virtual Galaxy</span>
                <br />
                and Join Our Innovative Team
              </h2>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="d-flex flex-column align-items-lg-end gap-12 pt-20">
              <a href="mailto:hr@vginfotech.ai" className="d-flex align-items-center gap-10 fw-semibold" style={{ color: '#ff2d15', textDecoration: 'none', fontSize: '15px' }}>
                <div style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="icon icon-envelope"></i>
                </div>
                <span>hr@vginfotech.ai</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center gap-10 fw-semibold" style={{ color: '#ff2d15', textDecoration: 'none', fontSize: '15px' }}>
                <div style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0077b5', borderRadius: '4px' }}>
                  <i className="icon icon-linkedin" style={{ color: '#ffffff', fontSize: '12px' }}></i>
                </div>
                <span>Linkedin</span>
              </a>
            </div>
          </div>
        </div>

        <div className="job-list-container" style={{ borderTop: '1px solid #e5e7eb' }}>
          {CAREERS_DATA.map((job) => (
            <div key={job.id} className="job-item-screenshot" style={{ borderBottom: '1px solid #e5e7eb' }}>
              <div className="py-32 d-flex justify-content-between align-items-center flex-wrap gap-20">
                <div className="job-info">
                  <h4 className="title fw-semibold mb-16" style={{ fontSize: '20px', color: '#1f2937' }}>{job.title}</h4>
                  <div className="d-flex flex-wrap gap-12">
                    <div className="badge-custom d-flex align-items-center gap-8" style={{ border: '1px solid #1f2937', borderRadius: '100px', padding: '6px 16px', fontSize: '13px' }}>
                      <i className="icon icon-briefcase-solid"></i>
                      <span>{job.category}</span>
                    </div>
                    <div className="badge-custom d-flex align-items-center gap-8" style={{ border: '1px solid #1f2937', borderRadius: '100px', padding: '6px 16px', fontSize: '13px' }}>
                      <i className="icon icon-briefcase-solid"></i>
                      <span>{job.type}</span>
                    </div>
                    <div className="badge-custom d-flex align-items-center gap-8" style={{ border: '1px solid #1f2937', borderRadius: '100px', padding: '6px 16px', fontSize: '13px' }}>
                      <i className="icon icon-map-marker-alt"></i>
                      <span>{job.locations.join(', ')}</span>
                    </div>
                  </div>
                </div>
                <div className="job-action">
                  <Link to={`/careers/${job.slug}`} className="d-flex align-items-center gap-8 fw-bold" style={{ color: '#ff2d15', textDecoration: 'none' }}>
                    <span>Apply</span>
                    <i className="icon icon-arrow-top-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-32">
          <button className="fw-bold" style={{ color: '#ff2d15', background: 'none', border: 'none', fontSize: '16px' }}>Show More</button>
        </div>
      </div>
    </div>
  );
}

export default CareersList;
