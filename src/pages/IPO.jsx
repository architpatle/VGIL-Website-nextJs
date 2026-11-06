"use client";

import React from 'react';
import Link from "next/link";
import vgilLogo from '../assets/home/vgil-logo.png';
import ContactSection from '../components/home/ContactSection';

const ipoDocuments = [
  {
    title: "Draft Red Herring Prospectus (DRHP)",
    date: "29 Oct 2024",
    link: "https://www.vgipl.com/documents/VirtualGalaxy-DRHP-29-10-2024.pdf",
    thumbnail: "/assets/images/prospectus_thumbnail.png"
  },
  {
    title: "Addendum to the DRHP",
    date: "2024",
    link: "https://www.vgipl.com/documents/Addendum-to-the-DRHP.pdf",
    thumbnail: "/assets/images/prospectus_thumbnail.png"
  },
  {
    title: "Red Herring Prospectus (RHP)",
    date: "2025",
    link: "https://www.vgipl.com/documents/RHP-%20Virtual%20Galaxy%20Infotech%20Limited.pdf",
    thumbnail: "/assets/images/prospectus_thumbnail.png"
  },
  {
    title: "Investor Presentation",
    date: "25 Mar 2025",
    link: "https://www.vgipl.com/documents/Virtual%20Galaxy%20Investor%20Presentation%20-%2025032025.pdf",
    thumbnail: "/assets/images/investor_presentation_thumbnail.png"
  },
  {
    title: "Prospectus",
    date: "2025",
    link: "https://www.vgipl.com/documents/Virtual%20Galaxy_Prospectus.pdf",
    thumbnail: "/assets/images/prospectus_thumbnail.png"
  }
];

function IPO() {
  return (
    <div className="ipo-page-wrapper">
      {/* Hero Section */}
      <section className="tf-section ipo-hero" style={{ 
        padding: '120px 0 45px', 
        textAlign: 'center'
      }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 reveal-up active">
              <div className="mb-24 d-inline-flex align-items-center gap-10 px-4 py-2r" style={{ background: '#fff', borderRadius: '100px', border: '1px solid #fee2e2' }}>
                <div style={{ width: '10px', height: '10px', background: '#ff2d15', borderRadius: '50%' }}></div>
                <span style={{ fontSize: '12px', fontWeight: '800', color: '#ff2d15', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Investor Relations
                </span>
              </div>
              <h1 className="premium-heading mb-24" style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: '800', color: '#111827' }}>
                IPO Documents & <span style={{ color: '#ff2d15' }}>Prospectus</span>
              </h1>
              <p className="text-body-1" style={{ color: '#4b5563', maxWidth: '600px', margin: '0 auto', fontSize: '18px' }}>
                Access all official filings, investor presentations, and prospectus related to Virtual Galaxy Infotech Limited's IPO.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="tf-section documents-list section-spacing-lg" >
        <div className="container">
          <div className="row g-4">
            {ipoDocuments.map((doc, idx) => (
              <div key={idx} className="col-lg-4 col-md-6 reveal-up active" style={{ transitionDelay: `${idx * 0.1}s` }}>
                <a 
                  href={doc.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="ipo-doc-card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '30px',
                    background: '#fff',
                    borderRadius: '24px',
                    border: '1px solid #f1f1f1',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.borderColor = '#ff2d15';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 45, 21, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#f1f1f1';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.03)';
                  }}
                >
                  <div className="d-flex align-items-center justify-content-between mb-24">
                    {/* <img src={vgilLogo} alt="VGI Logo" style={{ height: '35px', width: 'auto', objectFit: 'contain' }} /> */}
                    <div style={{ 
                      width: '40px', 
                      height: '40px', 
                      background: '#fff5f4', 
                      borderRadius: '12px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      border: '1.5px solid #ff2d15'
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff2d15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </svg>
                    </div>
                  </div>
                  
                  <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#111827', marginBottom: '12px', lineHeight: '1.4' }}>
                    {doc.title}
                  </h3>
                  
                  <div className="d-flex align-items-center gap-10 mt-auto">
                    <div style={{ padding: '4px 12px', background: '#f3f4f6', borderRadius: '100px', fontSize: '12px', color: '#6b7280', fontWeight: '600' }}>
                      {doc.date}
                    </div>
                    <div style={{ marginLeft: 'auto', color: '#ff2d15', fontWeight: '700', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      View PDF <i className="icon icon-long-arrow-alt-right-solid"></i>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}

export default IPO;
