import imgBoardManagement from '../assets/Investors-Info-img/Board_Managment.png';
import imgGroupCompanies from '../assets/Investors-Info-img/Group_Companies.png';
import imgFinancialInfo from '../assets/Investors-Info-img/Financial_Information_Statutory_Reports.png';
import imgCorporateGovernance from '../assets/Investors-Info-img/Corporate_Governance.png';
import imgInvestorContacts from '../assets/Investors-Info-img/Investor_Contacts_Grievances.png';
import imgMaterialCreditors from '../assets/Investors-Info-img/Material_Creditors.png';
import imgPreferentialAllotmentofWarrants from '../assets/Investors-Info-img/Preferential Allotment of Warrants.png';
import imgMaterialContracts from '../assets/Investors-Info-img/Material Contracts.png';
import imgMaterialDocuments from '../assets/Investors-Info-img/Material Documents.png';
import imgInvestorAnalystMeet from '../assets/Investors-Info-img/Investor Analyst Meet.png';
import imgAnnualReports from '../assets/Investors-Info-img/Annual Reports.png';
import imgNoticeofMeetings from '../assets/Investors-Info-img/Notice of Meetings.png';
import imgDividend from '../assets/Investors-Info-img/Dividend.png';
import imgAnnouncement from '../assets/Investors-Info-img/Announcement.png';

import imgBlog from '../assets/Investors-Info-img/Blog.png';

export const INVESTORS_DATA = [
  {
    slug: 'board-and-management',
    title: 'Board and Management',
    icon: 'user-friends-solid',
    heroImage:imgBoardManagement,
    logo: imgBoardManagement,
    desc: 'Meet our leadership team dedicated to guiding Virtual Galaxy towards innovation, sustainable growth, and long-term success.',
    gridItems: [
      { title: 'Board of Directors', link: '#' },
      { title: 'Committees', link: '#' },
      { title: 'Key Managerial Personnel', link: '#' },
      { title: 'Advisors', link: '#' },
    ]
  },
  {
    slug: 'promotion-related-entities',
    title: 'Promotion Related Entities',
    icon: 'building',
    heroImage: imgGroupCompanies,
    logo: imgGroupCompanies.src,
    desc: 'Information about our promotion related entities companies and subsidiaries working synergistically across various sectors.',
    gridItems: []
  },
  {
    slug: 'financial-information-reports',
    title: 'Financial Information & Statutory Reports',
    icon: 'chart-line-solid',
    heroImage: imgFinancialInfo,
    logo: imgFinancialInfo.src,
    desc: 'Review our financial performance, quarterly results, and statutory reports.',
    gridItems: []
  },
  {
    slug: 'corporate-governance',
    title: 'Corporate Governance',
    icon: 'shield-alt-solid',
    heroImage: imgCorporateGovernance,
    logo: imgCorporateGovernance.src,
    desc: 'Our commitment to ethical business practices, transparency, and accountability.',
    gridItems: []
  },
  {
    slug: 'investor-contacts-grievances',
    title: 'Investor Contacts/Grievances',
    icon: 'headset-solid',
    heroImage: imgInvestorContacts,
    logo: imgInvestorContacts,
    desc: 'Get in touch with our investor relations team or submit any grievances for prompt resolution.',
    gridItems: []
  },
  {
    slug: 'material-creditors',
    title: 'Material Creditors',
    icon: 'coins-solid',
    heroImage: imgMaterialCreditors,
    logo: imgMaterialCreditors,
    desc: 'Details regarding our material creditors and outstanding financial obligations.',
    gridItems: []
  },
  {
    slug: 'preferential-allotment-warrants',
    title: 'Preferential Allotment of Warrants',
    icon: 'clipboard-check-solid',
    heroImage: imgPreferentialAllotmentofWarrants,
    logo: imgPreferentialAllotmentofWarrants.src,
    desc: 'Information on the preferential allotment of warrants and related disclosures.',
    gridItems: []
  },
  {
    slug: 'material-contracts',
    title: 'Material Contracts',
    icon: 'book-solid',
    heroImage: imgMaterialContracts,
    logo: imgMaterialContracts,
    desc: 'Key material contracts that govern our strategic partnerships and business operations.',
    gridItems: []
  },
  {
    slug: 'material-documents',
    title: 'Material Documents',
    icon: 'paperclip-solid',
    heroImage: imgMaterialDocuments,
    logo: imgMaterialDocuments,
    desc: 'Important material documents available for investor review and compliance.',
    gridItems: []
  },
  {
    slug: 'investor-analyst-meet',
    title: 'Investor Analyst Meet',
    icon: 'comments-solid',
    heroImage: imgInvestorAnalystMeet,
    logo: imgInvestorAnalystMeet.src,
    desc: 'Presentations, transcripts, and schedules for our investor and analyst meetings.',
    gridItems: []
  },
  {
    slug: 'annual-reports',
    title: 'Annual Reports',
    icon: 'book-open-solid',
    heroImage: imgAnnualReports,
    logo: imgAnnualReports.src,
    desc: 'Comprehensive annual reports detailing our financial health, achievements, and strategic outlook.',
    gridItems: []
  },
  {
    slug: 'notice-of-meetings',
    title: 'Notice of Meetings',
    icon: 'bell',
    heroImage: imgNoticeofMeetings,
    logo: imgNoticeofMeetings.src,
    desc: 'Official notices for Annual General Meetings (AGMs) and Extraordinary General Meetings (EGMs).',
    gridItems: []
  },
  {
    slug: 'dividend',
    title: 'Dividend',
    icon: 'coins-solid',
    heroImage: imgDividend,
    logo: imgDividend.src,
    desc: 'Information regarding our dividend policy, declarations, and historical payouts.',
    gridItems: []
  },
  {
    slug: 'announcement',
    title: 'Announcement',
    icon: 'bullseye-solid',
    heroImage: imgAnnouncement,
    logo: imgAnnouncement.src,
    desc: 'Latest corporate announcements, press releases, and regulatory filings.',
    gridItems: []
  }
];
