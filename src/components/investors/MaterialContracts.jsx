import React from 'react';
import Link from "next/link";
import { Calendar, Users, BarChart3, FileText, Info, ArrowRight } from 'lucide-react';
import ContactSection from '../home/ContactSection';
import '../../pages/BoardManagement.css';

import imgMaterialContracts from '../../assets/Investors-Info-img/Material Contracts.png';



const contractGroups = [
  {
    id: 'group-1',
    title: 'Issuer & Registry Agreements',
    theme: 'orange',
    iconName: 'calendar',
    files: [
      {
        title: 'Issuer Agreement',
        type: 'PDF',
        url: '/assets/.pdf/Material Contracts/Material Contracts/Issuer Agreement.pdf'
      },
      {
        title: 'RTA Agreement - Maashitla',
        type: 'PDF',
        url: '/assets/.pdf/Material Contracts/Material Contracts/RTA AGREEMENT - Maashitla - signed.pdf'
      }
    ]
  },
  {
    id: 'group-2',
    title: 'Banking & Escrow Agreements',
    theme: 'orange',
    iconName: 'calendar',
    files: [
      {
        title: 'Banker to the Issuer Agreement',
        type: 'PDF',
        url: '/assets/.pdf/Material Contracts/Material Contracts/Banker to the issuer Agreement.pdf'
      },
      {
        title: 'Amendment in Banker Agreement',
        type: 'PDF',
        url: '/assets/.pdf/Material Contracts/Material Contracts/Amendment in the Banker to the issuer agreement.pdf'
      }
    ]
  },
  {
    id: 'group-3',
    title: 'Market Making & Underwriting',
    theme: 'orange',
    iconName: 'calendar',
    files: [
      {
        title: 'Market Maker Agreement',
        type: 'PDF',
        url: '/assets/.pdf/Material Contracts/Material Contracts/Market Maker Agreement.pdf'
      },
      {
        title: 'Underwriting Agreement',
        type: 'PDF',
        url: '/assets/.pdf/Material Contracts/Material Contracts/Underwriting Agreement.pdf'
      },
      {
        title: 'Syndicate Agreement',
        type: 'PDF',
        url: '/assets/.pdf/Material Contracts/Material Contracts/Syndicate Agreement.pdf'
      }
    ]
  },
  {
    id: 'group-4',
    title: 'Monitoring & Depository Agreements',
    theme: 'orange',
    iconName: 'calendar',
    files: [
      {
        title: 'Monitoring Agency Agreement',
        type: 'PDF',
        url: '/assets/.pdf/Material Contracts/Material Contracts/Monitoring Agency Agreement.pdf'
      },
      {
        title: 'CDSL Agreement',
        type: 'PDF',
        url: '/assets/.pdf/Material Contracts/Material Contracts/CDSL Agreement.pdf'
      },
      {
        title: 'NSDL Agreement (30.04.2024)',
        type: 'PDF',
        url: '/assets/.pdf/Material Contracts/Material Contracts/NSDL Agreement_30.04.2024.pdf'
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

function MaterialContracts() {
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
                    <span className="text-primary font-weight-bold">Material Contracts</span>
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
                <span>Material</span>{' '}
                <span className="highlight">Contracts</span>
                <div className="hero-title-underline"></div>
              </h1>
              <p className="hero-desc">
                Key material contracts that govern our strategic partnerships and business operations.
              </p>
            </div>
            <div className="col-lg-5 col-12 text-center mt-4 mt-lg-0 effect-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="hero-img-wrap" style={{ maxWidth: '100%' }}>
                <img src={imgMaterialContracts.src} alt={imgMaterialContracts} />
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
              {contractGroups.map((group, idx) => (
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
              style={{ animationDelay: `${contractGroups.length * 0.08}s` }}
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

export default MaterialContracts;
