import React from 'react';
import Link from "next/link";

import {
  Calendar,
  FileText,
  Info,
  ArrowRight
} from 'lucide-react';


const NoticeOfMeeting = () => {

  /*
   * ============================================================
   * Notice of Meeting Data
   * ============================================================
   *
   * Replace this demo data with your actual notices.
   *
   * You can add multiple documents inside the `files` array
   * if a particular meeting/year has more than one document.
   */

  const meetings = [
    {
      id: 'meeting-1',
      year: 'September 2026',
      theme: 'orange',
      iconName: 'calendar',

      files: [
        {
          title: 'Notice of Annual General Meeting Dated - 24 September 2026',
          type: 'PDF',
          url: '/assets/.pdf/Notice of Meetings/notice_of_annual_general_meeting_dated_24Sept2026.pdf',
          iconType: 'pdf'
        },
        {
          title: 'Corrigendum to the Notice of the 29th AGM - 24 September 2026',
          type: 'PDF',
          url: '/assets/.pdf/Notice of Meetings/corrigendum_to_the_notice_of_the_29th_agm_24_september_2026.pdf',
          iconType: 'pdf'
        },
        {
          title: 'Newspaper Advertisement AGM Notice - 24 September 2026',
          type: 'PDF',
          url: '/assets/.pdf/Notice of Meetings/Newspaper_Advertisement_AGM_Notice_24_September_2026.pdf',
          iconType: 'pdf'
        },
        {
          title: 'Scrutinizers Report 29th AGM VGIL',
          type: 'PDF',
          url: '/assets/.pdf/Notice of Meetings/Scrutinizers_Report_29th_AGM_VGIL.pdf',
          iconType: 'pdf'
        },
        {
          title: 'Transcript of The 29th Annual General Meeting',
          type: 'PDF',
          url: '/assets/.pdf/Notice of Meetings/transcript_of_the_29th_annual_general_meeting.pdf',
          iconType: 'pdf'
        }
      ]
    },

    {
      id: 'meeting-2',
      year: 'March 2026',
      theme: 'orange',
      iconName: 'calendar',

      files: [
        {
          title: 'Notice of Extra Ordinary General Meeting - 17 March 2026',
          type: 'PDF',
          url: '/assets/.pdf/Notice of Meetings/Notice of Extra Ordinary General Meeting - 17 March 2026.pdf',
          iconType: 'pdf'
        },
        {
          title: 'Newspaper Advertisements - Extra Ordinary General Meeting Notice - 17 March 2026',
          type: 'PDF',
          url: '/assets/.pdf/Notice of Meetings/Newspaper Advertisements - Extra Ordinary General Meeting Notice - 17 March 2026.pdf',
          iconType: 'pdf'
        },
        {
          title: 'Corrigendum to the Notice of Extra Ordinary General Meeting - 17 March 2026',
          type: 'PDF',
          url: '/assets/.pdf/Notice of Meetings/Corrigendum to the Notice of Extra Ordinary General Meeting - 17 March 2026.pdf',
          iconType: 'pdf'
        },
        {
          title: 'Newspaper Advertisements Corrigendum EGM Notice - 17 March 2026',
          type: 'PDF',
          url: '/assets/.pdf/Notice of Meetings/Newspaper Advertisements Corrigendum EGM Notice - 17 March 2026.pdf',
          iconType: 'pdf'
        },
        {
          title: 'Scrutinizer Report - EGM 17 March 2026',
          type: 'PDF',
          url: '/assets/.pdf/Notice of Meetings/Scrutinizer Report - EGM 17 March 2026.pdf',
          iconType: 'pdf'
        }
      ]
    },

    {
      id: 'meeting-3',
      year: 'September 2025',
      theme: 'orange',
      iconName: 'calendar',

      files: [
        {
          title: 'Notice of Extra Ordinary General Meeting - 29 September 2025',
          type: 'PDF',
          url: '/assets/.pdf/Notice of Meetings/Notice of Extra Ordinary General Meeting - 29 September 2025.pdf',
          iconType: 'pdf'
        },
        {
          title: 'Scrutinizers Report - EGM 29-09-2025',
          type: 'PDF',
          url: '/assets/.pdf/Notice of Meetings/Scrutinizers Report - EGM 29-09-2025.pdf',
          iconType: 'pdf'
        },
        {
          title: 'Newspaper Advertisement - EGM 10-09-2025',
          type: 'PDF',
          url: '/assets/.pdf/Notice of Meetings/Newspaper Advertisement - EGM 10-09-2025.pdf',
          iconType: 'pdf'
        },

      ]
    },
  ];


  // Helper to retrieve the appropriate Lucide icon
  const getMeetingIcon = (iconName) => {

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

        {meetings.map((meeting, idx) => (

          <div
            key={meeting.id}
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
                  Left: Meeting Year
                 ================================================== */}

              <div
                className="company-info-col"
                style={{
                  width: '100%',
                  maxWidth: '280px'
                }}
              >

                <div
                  className={`company-brand-icon theme-${meeting.theme}`}
                >
                  {getMeetingIcon(meeting.iconName)}
                </div>

                <h3 className="company-name">
                  {meeting.year}
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

                {meeting.files.map((file, fIdx) => (

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
          animationDelay: `${meetings.length * 0.08}s`
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


export default NoticeOfMeeting;