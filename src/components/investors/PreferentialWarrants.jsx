import React from 'react';
import Link from "next/link";
import { Calendar, Users, BarChart3, FileText, Info, ArrowRight } from 'lucide-react';
import ContactSection from '../home/ContactSection';
import '../../pages/BoardManagement.css';

import preferentailWarrants from '../../assets/Investors-Info-img/Preferential Allotment of Warrants.png'


const warrantGroups = [
  {
    id: 'group-1',
    title: 'Certifications & Valuation',
    theme: 'orange',
    iconName: 'calendar',
    files: [
      {
        title: 'Compliance Certificate Under Reg 163(2)',
        type: 'PDF',
        url: '/assets/.pdf/Preferential Allotment of Warrants/Compliance Certificate Under Reg 163(2).pdf'
      },
      {
        title: 'Valuation Report',
        type: 'PDF',
        url: '/assets/.pdf/Preferential Allotment of Warrants/Valuation Report.pdf'
      }
    ]
  },
  {
    id: 'group-2',
    title: 'EGM Notices & Proceedings',
    theme: 'orange',
    iconName: 'calendar',
    files: [
      {
        title: 'Notice of Extra Ordinary General Meeting - 17 March 2026',
        type: 'PDF',
        url: '/assets/.pdf/Preferential Allotment of Warrants/Notice of Extra Ordinary General Meeting - 17 March 2026.pdf'
      },
      {
        title: 'Scrutinizer Report - EGM 17 March 2026',
        type: 'PDF',
        url: '/assets/.pdf/Preferential Allotment of Warrants/Scrutinizer Report - EGM 17 March 2026.pdf'
      }
    ]
  },
  {
    id: 'group-3',
    title: 'Approvals & Resolutions',
    theme: 'orange',
    iconName: 'calendar',
    files: [
      {
        title: 'In-principle Approval',
        type: 'PDF',
        url: '/assets/.pdf/Preferential Allotment of Warrants/In-principle Approval.pdf'
      },
      {
        title: 'CTC BR Allotment of Warrants',
        type: 'PDF',
        url: '/assets/.pdf/Preferential Allotment of Warrants/CTC BR Allotment of Warrants.pdf'
      }
    ]
  }
];

const getIcon = (iconName) => {
  switch (iconName) {
    case 'chart':
      return <BarChart3 className="company-icon-svg" />;
    case 'users':
      return <Users className="company-icon-svg" />;
    case 'calendar':
    default:
      return <Calendar className="company-icon-svg" />;
  }
};

function PreferentialWarrants() {
  return (
    <div className="board-mgmt-wrapper">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-glow-1"></div>
        <div className="hero-glow-2"></div>
        <div className="container">
          {/* Breadcrumbs */}
          <div className="row mb-3">
            <div className="col-12 text-left">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb bg-transparent p-0 m-0" style={{ fontSize: '13px' }}>
                  <li className="breadcrumb-item">
                    <Link href="/" className="text-secondary hover:text-[#ff4d00] transition-colors no-underline">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="/investors/board-and-management" className="text-secondary hover:text-[#ff4d00] transition-colors no-underline">Investors</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <span className="text-primary font-weight-bold">Preferential Allotment of Warrants</span>
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <div className="row align-items-center mt-3">
            {/* Left Column: Text */}
            <div className="col-lg-7 col-12 text-left effect-fade-up">
              <div className="tag-badge">
                <span className="tag-dot" />
                <span className="tag-text">Investor Relations</span>
              </div>
              <h1 className="hero-title">
                <span>Preferential</span>{' '}
                <span className="highlight">Allotment of Warrants</span>
                <div className="hero-title-underline"></div>
              </h1>
              <p className="hero-desc">
                Information on the preferential allotment of warrants and related disclosures.
              </p>
            </div>
            <div className="col-lg-5 col-12 text-center mt-4 mt-lg-0 effect-fade-up" style={{ animationDelay: '0.1s' }}>
                <div className="hero-img-wrap" style={{ maxWidth: '100%' }}>
                  <img src={preferentailWarrants.src} alt={preferentailWarrants} />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid / Disclosures Section */}
      <section className="explore-section">
        <div className="container">
          <div className="explore-divider"></div>

          <div className="promotion-related-entities-container" style={{ marginTop: '0' }}>
            <div className="company-rows-list">
              {warrantGroups.map((group, idx) => (
                <div
                  key={group.id}
                  className="company-row-card effect-fade-up"
                  style={{ animationDelay: `${idx * 0.08}s` }}
                >
                  {/* Left Brand Badge & Name */}
                  <div className="company-info-col" style={{ width: '100%', maxWidth: '280px' }}>
                    <div className={`company-brand-icon theme-${group.theme}`}>
                      {getIcon(group.iconName)}
                    </div>
                    <h3 className="company-name">{group.title}</h3>
                  </div>

                  {/* Vertical divider on desktop, hidden or modified on mobile */}
                  <div className="company-vertical-divider d-none d-md-block" style={{ height: '48px' }}></div>

                  {/* Right Cards List */}
                  <div className="company-docs-col">
                    {group.files.map((file, fIdx) => (
                      <div key={fIdx} className="fy-doc-card" style={{ width: '100%', maxWidth: '320px' }}>
                        <div className="fy-doc-info" style={{ flex: '1', minWidth: '0', marginRight: '12px' }}>
                          <span
                            className="fy-doc-year"
                            title={file.title}
                            style={{
                              display: 'block',
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              width: '100%'
                            }}
                          >
                            {file.title}
                          </span>
                          <span className="fy-doc-label">{file.type}</span>
                        </div>
                        <a
                          href={file.url}
                          target="_blank"
                          className="fy-doc-download-btn"
                          aria-label={`Open ${file.title}`}
                        >
                          <FileText className="fy-download-icon" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Support Banner */}
            <div
              className="investor-help-banner effect-fade-up"
              style={{ animationDelay: `${warrantGroups.length * 0.08}s` }}
            >
              <div className="help-banner-left">
                <div className="help-banner-icon-wrap">
                  <Info className="help-banner-icon" />
                </div>
                <div className="help-banner-text">
                  <h4 className="help-banner-title">Need any help?</h4>
                  <p className="help-banner-desc">
                    If you need any specific document or have any queries, feel free to contact our investor relations team.
                  </p>
                </div>
              </div>
              <div className="help-banner-right">
                <Link href="/contact" className="btn-help-banner-cta">
                  Get in Touch
                  <span className="btn-help-banner-icon-wrap">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}

export default PreferentialWarrants;
