import React from 'react';
import Link from "next/link";

import {
  Calendar,
  FileText,
  Info,
  ArrowRight
} from 'lucide-react';


const Dividend = () => {

  /*
   * ============================================================
   * Dividend Data
   * ============================================================
   *
   * Replace this demo data with your actual dividend documents.
   *
   * You can add multiple documents inside the `files` array
   * if a particular financial year has more than one document.
   */

  const dividends = [
    {
      id: 'dividend-1',
      year: 'Dividend Documents',
      theme: 'orange',
      iconName: 'calendar',

      files: [
        {
          title: 'Record Date',
          type: 'PDF',
          url: '/assets/.pdf/Dividend Informations/Dividend Documents/Record Date.pdf',
          iconType: 'pdf'
        }
      ]
    },
  ];


  // Helper to retrieve the appropriate Lucide icon
  const getDividendIcon = (iconName) => {

    switch (iconName) {

      case 'calendar':
      default:
        return <Calendar className="company-icon-svg" />;

    }

  };


  return (

    <div
      className="promotion-related-entities-container"
      style={{ marginTop: '0' }}
    >

      <div className="company-rows-list">

        {dividends.map((dividend, idx) => (

          <div
            key={dividend.id}
            className="company-row-card effect-fade-up"
            style={{
              animationDelay: `${idx * 0.08}s`,
              flexDirection: 'column',
              alignItems: 'stretch'
            }}
          >

            {/* ==================================================
                Top Row
               ================================================== */}

            <div
              className="d-flex flex-column flex-md-row align-items-md-center w-100 gap-4"
              style={{ gap: '24px' }}
            >

              {/* ==================================================
                  Left: Financial Year
                 ================================================== */}

              <div
                className="company-info-col"
                style={{
                  width: '100%',
                  maxWidth: '280px'
                }}
              >

                <div
                  className={`company-brand-icon theme-${dividend.theme}`}
                >
                  {getDividendIcon(dividend.iconName)}
                </div>

                <h3 className="company-name">
                  {dividend.year}
                </h3>

              </div>


              {/* ==================================================
                  Divider
                 ================================================== */}

              <div
                className="company-vertical-divider d-none d-md-block"
                style={{ height: '48px' }}
              />


              {/* ==================================================
                  Right: Documents
                 ================================================== */}

              <div className="company-docs-col">

                {dividend.files.map((file, fIdx) => (

                  <div
                    key={fIdx}
                    className="fy-doc-card"
                    style={{
                      width: '100%',
                      maxWidth: '300px'
                    }}
                  >

                    <div
                      className="fy-doc-info"
                      style={{
                        flex: '1',
                        minWidth: '0',
                        marginRight: '12px'
                      }}
                    >

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

                      <span className="fy-doc-label">
                        {file.type}
                      </span>

                    </div>


                    {/* PDF Open Button */}

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

          </div>

        ))}

      </div>


      {/* ========================================================
          Bottom Support Banner
         ======================================================== */}

      <div
        className="investor-help-banner effect-fade-up"
        style={{
          animationDelay: `${dividends.length * 0.08}s`
        }}
      >

        <div className="help-banner-left">

          <div className="help-banner-icon-wrap">
            <Info className="help-banner-icon" />
          </div>

          <div className="help-banner-text">

            <h4 className="help-banner-title">
              Need any help?
            </h4>

            <p className="help-banner-desc">
              If you need any specific document or have any queries,
              feel free to contact our investor relations team.
            </p>

          </div>

        </div>


        <div className="help-banner-right">

          <Link
            href="/contact"
            className="btn-help-banner-cta"
          >
            Get in Touch

            <span className="btn-help-banner-icon-wrap">
              <ArrowRight className="w-3 h-3" />
            </span>

          </Link>

        </div>

      </div>

    </div>

  );

};


export default Dividend;