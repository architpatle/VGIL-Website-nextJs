import React from 'react';
import Link from "next/link";

import {
  Calendar,
  FileText,
  Info,
  ArrowRight
} from 'lucide-react';


const AnnualReports = () => {


  const reports = [
    {
      id: 'report-1',
      year: '2026',
      theme: 'orange',
      iconName: 'calendar',

      files: [
        {
          title: 'Annual Report 2026',
          type: 'PDF',
          url: '/assets/.pdf/Annual Reports/Annual Reports/Annual Report 2026.pdf',
          iconType: 'pdf'
        }
      ]
    },

    {
      id: 'report-2',
      year: '2025',
      theme: 'orange',
      iconName: 'calendar',

      files: [
        {
          title: 'Annual Report 2025',
          type: 'PDF',
          url: '/assets/.pdf/Annual Reports/Annual Reports/Annual Report 2025.pdf',
          iconType: 'pdf'
        },
        {
          title: 'Annual General Meeting Scrutinizer Report',
          type: 'PDF',
          url: '/assets/.pdf/Annual Reports/Annual Reports/Annual General Meeting Scrutinizer Report.pdf',
          iconType: 'pdf'
        }
      ]
    },

    {
      id: 'report-3',
      year: '2024',
      theme: 'orange',
      iconName: 'calendar',

      files: [
        {
          title: 'Annual Report 2024',
          type: 'PDF',
          url: '/assets/.pdf/Annual Reports/Annual Reports/Annual Report 2024.pdf',
          iconType: 'pdf'
        }
      ]
    },

    {
      id: 'report-4',
      year: '2023',
      theme: 'orange',
      iconName: 'calendar',

      files: [
        {
          title: 'Annual Report 2023',
          type: 'PDF',
          url: '/assets/.pdf/Annual Reports/Annual Reports/Annual Report 2023.pdf',
          iconType: 'pdf'
        }
      ]
    },
    {
      id: 'report-4',
      year: '2022',
      theme: 'orange',
      iconName: 'calendar',

      files: [
        {
          title: 'Annual Report 2022',
          type: 'PDF',
          url: '/assets/.pdf/Annual Reports/Annual Reports/Annual Report 2022.pdf',
          iconType: 'pdf'
        }
      ]
    },
    {
      id: 'report-4',
      year: '2021',
      theme: 'orange',
      iconName: 'calendar',

      files: [
        {
          title: 'Annual Report 2021',
          type: 'PDF',
          url: '/assets/.pdf/Annual Reports/Annual Reports/Annual Report 2021.pdf',
          iconType: 'pdf'
        }
      ]
    },
    {
      id: 'report-4',
      year: '2020',
      theme: 'orange',
      iconName: 'calendar',

      files: [
        {
          title: 'Annual Report 2020',
          type: 'PDF',
          url: '/assets/.pdf/Annual Reports/Annual Reports/Annual Report 2020.pdf',
          iconType: 'pdf'
        }
      ]
    }
  ];


  // Helper to retrieve the appropriate Lucide icon
  const getReportIcon = (iconName) => {

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

        {reports.map((report, idx) => (

          <div
            key={report.id}
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
                  Left: Year
                 ================================================== */}

              <div
                className="company-info-col"
                style={{
                  width: '100%',
                  maxWidth: '280px'
                }}
              >

                <div
                  className={`company-brand-icon theme-${report.theme}`}
                >
                  {getReportIcon(report.iconName)}
                </div>

                <h3 className="company-name">
                  {report.year}
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

                {report.files.map((file, fIdx) => (

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
          animationDelay: `${reports.length * 0.08}s`
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


export default AnnualReports;