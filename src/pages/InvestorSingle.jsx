"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import PageTitle from '../components/common/PageTitle';
import ContactSection from '../components/home/ContactSection';
import AnalystMeetContent from '../components/investors/AnalystMeetContent';
import { INVESTORS_DATA } from '../data/investorsData';
import { motion, AnimatePresence } from 'framer-motion';
import InvestorContacts from '../components/investors/InvestorContacts';
import MaterialCreditors from '../components/investors/MaterialCreditors';
import PreferentialWarrants from '../components/investors/PreferentialWarrants';
import MaterialContracts from '../components/investors/MaterialContracts';
import MaterialDocuments from '../components/investors/MaterialDocuments';
import AnnualReports from '../components/investors/AnnualReports';
import NoticeOfMeeting from '../components/investors/NoticeOfMeeting';
import Dividend from '../components/investors/Dividend';
import Announcement from '../components/investors/Announcement';
import ShareholdingPattern from "../components/investors/shareholding pattern/ShareholdingPattern";
import {
  Building2,
  TrendingUp,
  ShieldCheck,
  Info,
  Download,
  ArrowRight,
  BookOpen,
  Users,
  Percent,
  Award,
  Megaphone,
  FileText,
  CreditCard,
  Handshake,
  FolderOpen,
  Lock,
  BarChart3,
  GitBranch,
  Heart,
  ChevronDown,
  ChevronUp,
  Headphones,
  FileCode
} from 'lucide-react';

import {
  Calendar
} from 'lucide-react';

import './BoardManagement.css';

const GROUP_COMPANIES_DATA = [
  {
    name: "Paynext Private Limited",
    icon: "calendar",
    theme: "orange",
    docs: [
      { year: "FY 2024-2025", link: "/assets/.pdf/Group Companies/Paynext Private Limited/FY 2024-2025.pdf" },
      { year: "FY 2023-2024", link: "/assets/.pdf/Group Companies/Paynext Private Limited/FY 2023-2024.pdf" },
      { year: "FY 2022-2023", link: "/assets/.pdf/Group Companies/Paynext Private Limited/FY 2022-2023.pdf" },
      { year: "FY 2021-2022", link: "/assets/.pdf/Group Companies/Paynext Private Limited/FY 2021-2022.pdf" }
    ]
  },
  {
    name: "Sampada Infrasolutions Private Limited",
    icon: "calendar",
    theme: "orange",
    docs: [
      { year: "FY 2023-24", link: "/assets/.pdf/Group Companies/Sampada Infosolutions Private Limited/FY 2023-24.pdf" },
      { year: "FY 2022-23", link: "/assets/.pdf/Group Companies/Sampada Infosolutions Private Limited/FY 2022-23.pdf" },
      { year: "FY 2021-22", link: "/assets/.pdf/Group Companies/Sampada Infosolutions Private Limited/FY 2021-22.pdf" }
    ]
  },
  {
    name: "SIP Fund Private Limited",
    icon: "calendar",
    theme: "orange",
    docs: [
      { year: "FY 2023-2024", link: "/assets/.pdf/Group Companies/SIP Fund Private Limited/FY 2023-2024.pdf" },
      { year: "FY 2022-2023", link: "/assets/.pdf/Group Companies/SIP Fund Private Limited/FY 2022-2023.pdf" },
      { year: "FY 2021-2022", link: "/assets/.pdf/Group Companies/SIP Fund Private Limited/FY 2021-2022.pdf" }
    ]
  },
  {
    name: "Virtual Galaxy Fintech Private Limited",
    icon: "calendar",
    theme: "orange",
    docs: [
      { year: "FY 2024-2025", link: "/assets/.pdf/Group Companies/Virtual Galaxy Fintech Private Limited/FY 2024-2025.pdf" },
      { year: "FY 2023-2024", link: "/assets/.pdf/Group Companies/Virtual Galaxy Fintech Private Limited/FY 2023-2024.pdf" },
      { year: "FY 2022-2023", link: "/assets/.pdf/Group Companies/Virtual Galaxy Fintech Private Limited/FY 2022-2023.pdf" },
      { year: "FY 2021-2022", link: "/assets/.pdf/Group Companies/Virtual Galaxy Fintech Private Limited/FY 2021-2022.pdf" }
    ]
  },
  {
    name: "Virtual Galaxy Insurance Brokers Private Limited",
    icon: "calendar",
    theme: "orange",
    docs: [
      { year: "FY 2023-2024", link: "/assets/.pdf/Group Companies/Virtual Galaxy Insurance Brokers Private Limited/FY 2023-2024.pdf" },
      { year: "FY 2022-2023", link: "/assets/.pdf/Group Companies/Virtual Galaxy Insurance Brokers Private Limited/FY 2022-2023.pdf" },
      { year: "FY 2021-2022", link: "/assets/.pdf/Group Companies/Virtual Galaxy Insurance Brokers Private Limited/FY 2021-2022.pdf" }
    ]
  }
];

const FINANCIAL_REPORTS_DATA = [
  {
    name: "FY 2025-2026",
    icon: "calendar",
    theme: "orange",
    docs: [
      { year: "Independent Auditor's Report", link: "/assets/.pdf/Financial Information Statutory Reports of VGIL/FY 2025-2026/Independent Auditor's Report.pdf" },
      { year: "Year End Results", link: "/assets/.pdf/Financial Information Statutory Reports of VGIL/FY 2025-2026/Year End Results.pdf" },
      { year: "Unaudited Financial Result (30.09.25)", link: "/assets/.pdf/Financial Information Statutory Reports of VGIL/FY 2025-2026/Unaudited Financial Result as on 30.09.2025.pdf" },
      { year: "Unaudited Financial Result (31.12.25)", link: "/assets/.pdf/Financial Information Statutory Reports of VGIL/FY 2025-2026/Unaudited Financial Result as on 31.12.2025.pdf" }
    ]
  },
  {
    name: "FY 2024-2025",
    icon: "calendar",
    theme: "orange",
    docs: [
      { year: "Independent Auditor's Report", link: "/assets/.pdf/Financial Information Statutory Reports of VGIL/FY 2024-2025/Independent Auditor's Report.pdf" },
      { year: "Year End Results", link: "/assets/.pdf/Financial Information Statutory Reports of VGIL/FY 2024-2025/Year End Results.pdf" }
    ]
  },
  {
    name: "FY 2023-2024",
    icon: "calendar",
    theme: "orange",
    docs: [
      { year: "VGIPL Audited Financials", link: "/assets/.pdf/Financial Information Statutory Reports of VGIL/FY 2023-2024/VGIPL Audited Financials.pdf" },
      { year: "VGIPL CFS", link: "/assets/.pdf/Financial Information Statutory Reports of VGIL/FY 2023-2024/VGIPL CFS.pdf" }
    ]
  },
  {
    name: "FY 2022-2023",
    icon: "calendar",
    theme: "orange",
    docs: [
      { year: "VGIPL Audited Financials", link: "/assets/.pdf/Financial Information Statutory Reports of VGIL/FY 2022-2023/VGIPL Audited Financials.pdf" },
      { year: "VGIPL CFS", link: "/assets/.pdf/Financial Information Statutory Reports of VGIL/FY 2022-2023/VGIPL CFS.pdf" }
    ]
  },
  {
    name: "FY 2021-2022",
    icon: "calendar",
    theme: "orange",
    docs: [
      { year: "VGIPL Audited Financials", link: "/assets/.pdf/Financial Information Statutory Reports of VGIL/FY 2021-2022/VGIPL Audited Financials.pdf" },
      { year: "VGIPL CFS", link: "/assets/.pdf/Financial Information Statutory Reports of VGIL/FY 2021-2022/VGIPL CFS.pdf" }
    ]
  },
  {
    name: "other",
    icon: "calendar",
    theme: "orange",
    docs: [
      { year: "AFS Apr-Dec-2024", link: "/assets/.pdf/Financial Information Statutory Reports of VGIL/Other/AFS-Apr-Dec-2024.pdf" }
    ]
  }
];

const POLICIES_DATA = [
  {
    name: "Dividend Distribution Policy",
    icon: "percent",
    sections: [
      {
        title: "1. INTRODUCTION",
        text: "In terms of the Securities and Exchange Board of India (Depositories and Participants) Regulations, 2018, the disclosure requirements and corporate governance norms as specified for SME listed companies shall mutatis mutandis apply to Virtual Galaxy Infotech Limited (hereinafter referred to as \"the Company\"). Accordingly, this Dividend Distribution Policy (hereinafter referred to as \"this Policy\") is framed for voluntary adoption of practices applicable to SME listed companies under the Securities and Exchange Board of India (Listing Obligations and Disclosure Requirements) Regulations, 2015 (\"LODR Regulations\") as amended from time to time."
      },
      {
        title: "2. OBJECTIVE",
        text: "The objective of this Policy is to lay down the parameters to be considered by the Board of Directors of the Company before declaring or recommending dividend to its shareholders for a financial year. Dividend for the purpose of this Policy shall include Interim Dividend."
      },
      {
        title: "3. PARAMETERS TO BE CONSIDERED WHILE DECLARING OR RECOMMENDING DIVIDEND",
        text: "The Board of Directors of the Company shall generally consider the following parameters while declaring or recommending dividend to shareholders:",
        subsections: [
          {
            title: "3.1 Financial Factors:",
            bullets: [
              "Current year's profit arrived at after providing for depreciation in accordance with the provisions of Section 123 and other applicable provisions, if any, of the Companies Act, 2013 read with the Rules issued thereunder; and/or",
              "Profit from any of the previous financial year(s) arrived at after providing for depreciation in accordance with the provisions of Section 123 and other applicable provisions, if any, of the Companies Act, 2013 read with the Rules issued thereunder;",
              "Fund requirements to finance the working capital needs of the business;",
              "Fund requirements to meet expense to upgrade and maintain the infrastructure of the Company;",
              "Investment opportunities in subsidiaries/ associates/ joint ventures, mergers and acquisitions;",
              "Optimal free cash to fund any exigencies, if any;",
              "Any other relevant factors or events."
            ]
          },
          {
            title: "3.2 Internal / External Factors:",
            bullets: [
              "Internal factors such as business expansion plan, investment plans, contractual restrictions, or other strategic priorities as may be considered prudent by the Board;",
              "External factors such as market conditions, macro-economic environment, competition intensity, technological changes, regulatory changes, adherence to requirements stipulated under the regulations formulated by the Securities and Exchange Board of India, the Companies Act, 2013 and rules thereunder, as amended from time to time, taxation;",
              "Any other factors or events considered relevant by the Board."
            ]
          }
        ]
      },
      {
        title: "4. CIRCUMSTANCES UNDER WHICH THE SHAREHOLDERS MAY OR MAY NOT EXPECT DIVIDEND",
        paragraphs: [
          "The Board of Directors of the Company, while declaring or recommending dividend shall ensure compliance with statutory requirements under applicable laws including the provisions of the Companies Act, 2013 and LODR Regulations. The Board of Directors, while determining the dividend to be declared or recommended, shall take into consideration the advice of the management of the Company and the planned and further investments for growth apart from other parameters set out in this Policy.",
          "Dividend for any financial year shall generally be paid once a year, out of net profit earned during the said year. However, the Board may at its discretion, declare interim dividend and may also declare dividend out of retained earnings.",
          "The Board of Directors of the Company may not declare or recommend dividend for a particular period if it is of the view that it would be prudent to conserve capital due to circumstances or factors such as adverse market conditions, business uncertainty, inadequacy of profits earned during the fiscal year, inadequacy of cash balance, large forthcoming capital requirements which are best funded through internal accruals, regulatory / market exigencies, changing regulations, etc.",
          "The Board of Directors may in extraordinary circumstances, deviate from the parameters listed in this Policy."
        ]
      },
      {
        title: "5. POLICY AS TO HOW THE RETAINED EARNINGS SHALL BE UTILIZED",
        text: "The profits earned by the Company can either be retained in the business or used for various purposes as outlined below or it can be distributed to the shareholders.",
        bullets: [
          "Fund requirements to maintain Net Worth of the Company as prescribed by regulators from time to time;",
          "Fund requirements to finance the working capital needs of the business;",
          "Fund requirements to meet expense to upgrade and maintain the infrastructure of the Company;",
          "Fund requirements for development / enhancement of products and services;",
          "Fund requirements to maintain and improve security of client data and transactions;",
          "Investment opportunities in subsidiaries / associates / joint ventures, mergers and acquisitions;",
          "Optimal free cash to fund any exigencies, if any;",
          "Any other relevant factors or events."
        ]
      },
      {
        title: "6. PROVISIONS IN REGARD TO VARIOUS CLASSES OF SHARES",
        text: "The provisions contained in this policy shall apply to all classes of Shares of the Company. It may be noted that currently the Company has only one class of shares, namely, Equity Shares."
      },
      {
        title: "7. DISCLOSURES",
        text: "The Policy shall be disclosed on the website of the Company i.e. at https://www.vgipl.com/"
      },
      {
        title: "8. AMENDMENT AND CONFLICT",
        text: "The adequacy of this Policy shall be reviewed and reassessed periodically, based on the changes that may be brought about due to any regulatory amendments or otherwise. In the event of any conflict between the provisions of this policy and of the Companies Act, 2013 and the LODR Regulations, or any other statutory enactments, rules, the provisions of such Act or LODR Regulations or statutory enactments, rules etc. including any amendments/modifications thereto shall prevail over this Policy."
      }
    ]
  },
  {
    name: "Familiarization Programme of ID",
    icon: "award",
    sections: [
      {
        title: "Preamble",
        text: "The Companies Act, 2013, read with Regulation 25(7) of the SEBI Listing Regulations places increased responsibilities on Independent Directors of the Company. In accordance with the requirements of this Regulation, the Company needs to familiarize the Independent Directors (here in after referred as \"Directors\") through Familiarization Programme (here in after referred as \"Programme\") and provide an insight into the Company to enable the Directors to understand the business of the Company in depth and its strategy, operations and functions whereby they can contribute significantly to the growth of the Company."
      },
      {
        title: "APPLICABILITY",
        text: "This Policy applies to the Independent Directors of Virtual Galaxy Infotech Limited."
      },
      {
        title: "Purpose & Objective",
        text: "By means of the Programme, the Company intends to achieve the following objectives:",
        bullets: [
          "1. To appraise the Directors about the operating system of the Company for its business operations;",
          "2. To inform them of all the laws, rules, regulations and guidelines applicable to the Company;",
          "3. To make them aware of the rules, responsibilities, liabilities pursuant to the Listing Agreement and the Companies Act, 2013 and Rules made thereunder;",
          "4. To generate and obtain valuable and informed decision from the Directors on the matters to be brought or discussed at the Board Meetings."
        ]
      },
      {
        title: "Contents of the Programme",
        text: "The basic theme of the programme would, inter alia, include –",
        bullets: [
          "1. Roles, Rights, Duties, Responsibilities and Liabilities of the Directors;",
          "2. Business Model of the Company thereby including the nature of industry in which the Company falls, its product and services, geographical area of operation of the Company;",
          "3. Management Techniques.",
          "4. Visit to the operating units to make them understand the operations, etc."
        ]
      },
      {
        title: "Amendment",
        text: "Any change in the Policy shall be approved by the Board. The Board shall have the right to withdraw and/or amend any part of this Policy or the entire Policy, at any time, as it deems fit, or from time to time, and the decision of the Board in this respect shall be final and binding. Any subsequent amendment/modification in the Act or the rules framed thereunder or the SEBI Listing Regulations and/or any other laws in this regard shall automatically apply to this Policy."
      },
      {
        title: "Interpretation",
        text: "In any circumstance where the terms of this Policy are inconsistent with any existing or newly enacted law, rule, regulation or standard governing the Company, the said law, rule, regulation or standard will take precedence over this Policy."
      },
      {
        title: "Compliance",
        text: "The Compliance Officer shall be responsible for supervision of the Policy. Any queries regarding the policy shall be referred to the Compliance Officer, who is in charge of administering, enforcing and updating the Policy."
      },
      {
        title: "Program and Disclosure",
        text: "Requisite disclosure in the website of the Company would be made as and when such programmes conducted"
      }
    ]
  },
  {
    name: "Nomination and Remuneration Committee (Term of Reference, Procedure and Policies)",
    icon: "users",
    sections: [
      {
        title: "1. MEMBERSHIP",
        text: "The Committee shall consist of a minimum 3 non-executive directors, majority of them being independent. Minimum two members or one third of the members of the Committee whichever is greater, shall constitute a quorum for the Committee meeting. The members of the Committee shall be appointed or removed by the Board of Directors."
      },
      {
        title: "2. CHAIRMAN",
        text: "The Chairman of the Committee shall be an independent director. In the absence of the Chairman, the members of the Committee present at the meeting shall choose one amongst them to act as Chairman. The Chairman of the Committee could be present at the Annual General Meeting of the Company to answer shareholders queries or may nominate some other member to answer the shareholders’ queries. However, the Chairman of the Board shall decide who would answer the queries."
      },
      {
        title: "3. TERM OF REFERENCE",
        bullets: [
          "a) To formulate criteria for determining qualifications, positive attributes and independence of a director and recommend to the Board a policy, relating to the remuneration of the directors, key managerial personnel and other employees;",
          "b) Formulation of criteria for evaluation of Directors;",
          "c) Devising a policy on Board Diversity;",
          "d) While formulating the remuneration policy, to ensure that -\n- the level and composition of remuneration is reasonable and sufficient to attract, retain and motivate directors of the quality required to run the company successfully;\n- relationship of remuneration to performance is clear and meets appropriate performance benchmarks; and\n- Remuneration to Directors, Key Managerial Personnel and Senior Management involves a balance between fixed and incentive pay reflecting short and long-term performance objectives appropriate to the working of the company and its goals.",
          "e) Identifying the person who is qualified to become a Director or senior managers in accordance with criteria let down and recommend to the Board their appointment and removal. The Company shall disclose remuneration policy and evaluation criteria in its annual reports.",
          "f) To have relevant experience of contributions to the deliberations of the Board and Corporate Governance."
        ]
      },
      {
        title: "4. SELECTION OF NEW DIRECTORS",
        text: "Factors to be considered when reviewing a potential candidate for Board appointment include without limitation:",
        bullets: [
          "To have relevant experience in Finance/ Law/ Management/ Sales/Marketing/ Administration/ deliberations of Board/ Corporate Governance or the other disciplines related to company’s business.",
          "The capability of the candidate to devote the necessary time and commitment to the role. This involves a consideration of matters such as other Board or executive appointments; and",
          "Potential conflicts of interest, and independence."
        ]
      },
      {
        title: "5. CRITERIA FOR DETERMINING QUALIFICATIONS, POSITIVE ATTRIBUTES & INDEPENDENCE OF DIRECTOR",
        subsections: [
          {
            title: "a. Qualifications of Independent Directors:-",
            bullets: [
              "An Independent director shall possess appropriate skills, experience and knowledge in one or more fields of finance, law, management, sales, marketing, administration, research, corporate governance, operations or other disciplines related and beneficial to the company’s business."
            ]
          },
          {
            title: "b. Positive attributes of Independent Directors:-",
            bullets: [
              "An independent director shall be a person of integrity, who possesses relevant expertise & experience and who shall uphold ethical standards of integrity and probity; act objectively and constructively; exercise his responsibilities in a bona-fide manner in the interest of the company; devote sufficient time and attention to his professional obligations for informed and balanced decision making; and assist the company in implementing the best corporate governance practices."
            ]
          },
          {
            title: "c. Independence criteria of Independent Directors:-",
            bullets: [
              "An Independent director should meet the requirements of the Companies Act, 2013 and SEBI (Listing Obligations and Disclosure Requirements) Regulations 2015, concerning independence of directors."
            ]
          }
        ]
      },
      {
        title: "6. POLICY ON BOARD DIVERSITY",
        bullets: [
          "The candidate should possess adequate qualification, expertise, knowledge, skills, background and industry experience for the position against which he/ she is considered for appointment. The Committee has the discretion to decide whether the above requirements possessed by a person are sufficient/ satisfactory for the concerned position.",
          "The Company should endeavor to have mix of Directors with experience in diverse field’s viz. Finance, Law, Management, Sales and Marketing, Technical, Administration, Corporate Governance, factory operations and other discipline related and beneficial to the Company’s operations.",
          "While appointing the Directors and KMP, the Committee shall give due consideration to their limit of holding other directorships/office as specified in the Companies Act, 2013 read with the Rules made therein and the Listing Agreement (as amended from time to time) and/or any other applicable enactment, for the time being in force."
        ]
      },
      {
        title: "7. REMUNERATION POLICY",
        subsections: [
          {
            title: "a) General Objectives",
            bullets: [
              "to ensure that the Company’s remuneration structures are equitable and aligned with the long-term interests of the Company and its shareholders;",
              "to attract and retain skilled executives;",
              "to structure short and long-term incentives that are challenging and linked to the creation of sustainable shareholder returns; and",
              "To ensure any termination benefits are justified and appropriate.",
              "To consider professional indemnity and liability insurance for Directors and senior management."
            ]
          },
          {
            title: "b) Regulatory Compliance",
            bullets: [
              "The Committee must at all times have regard to, and notify the Board as appropriate of, all legal and regulatory requirements, including any shareholder approvals which are necessary to obtain."
            ]
          },
          {
            title: "c) Remuneration to Non-Executive Directors (NED’s)",
            bullets: [
              "NED’s shall be paid a sitting fee for every meeting of the board and committee thereof attended by them as member. The amount of sitting fees shall be paid in accordance with the decision of the Board, subject to ceiling/ limits as provided u/s 197(5) Companies Act, 2013 read with rule 4 of Companies (Appointment & Remuneration of Managerial Personnel) rules, 2014."
            ]
          },
          {
            title: "d) Remuneration to Key Managerial Personnel & other employees",
            bullets: [
              "The objective of the policy is directed towards having a compensation philosophy and structure that will reward and retain talent.",
              "Remuneration to Executive Director/ Key Managerial Personnel and Senior Management will be such as to ensure that the relationship of remuneration to performance is clear and meets appropriate performance benchmarks and may involve a balance between fixed and incentive pay reflecting short and long term performance objectives appropriate to the working of the Company and its goals.",
              "While deciding the remuneration package to take into consideration current employment scenario and remuneration package of the industries operating in the similar comparable businesses in the geographical area of its operations."
            ]
          }
        ]
      },
      {
        title: "8. AGENDA, MINUTES & REPORTS",
        text: "Meeting of the Committee can be held whenever required. The Chairperson of the Committee shall be responsible for establishing the agenda for meetings of the Committee. Minutes of all meetings of the Committee shall be prepared to document the discharge of responsibilities by the Committee. The minutes shall be approved at a subsequent meeting of the Committee and shall be distributed periodically to the full Board of Directors. The Company Secretary of the Company shall act as the Secretary/Convener of the Committee and ensure that the Committee receives information and papers in a timely manner to enable full and proper consideration to be given to the issues."
      }
    ]
  },
  {
    name: "Vigil Mechanism and Whistle Blower Policy",
    icon: "megaphone",
    sections: [
      {
        title: "1) PREFACE",
        bullets: [
          "a) The Company believes in the conduct of the affairs of its constituents in a fair and transparent manner by adopting highest standards of professionalism, honesty, integrity and ethical behaviour.",
          "b) Towards this end, the Company has adopted the Virtual Galaxy Infotech Limited Code of Business Conduct and Ethics called “Code of Conduct”, which lays down the principles and standards that should govern the actions of the Company and its employees. Any actual or potential violation of the Code, howsoever insignificant or perceived as such, would be a matter of serious concern for the Company.",
          "c) Accordingly, this Whistle Blower Policy (“the Policy”) has been formulated with a view to provide a mechanism for employees of the Company to approach the Audit Committee of the Company and protected disclosure to the management instances of unethical behavior, actual or suspected fraud or violation of the Code of Conduct.",
          "d) Vigil Mechanism shall provide for adequate safeguards against victimization of persons who use such mechanism and also make provision for direct access to the Chairman of the Audit Committee in appropriate and exceptional cases.",
          "e) Accordingly, the Company being a proposed to be listed entity proposes to establish a Vigil Mechanism (Whistle Blower Policy).",
          "f) The Policy provides a framework to promote responsible and secure whistle blowing. It protects the Whistle Blower wishing to raise a concern about serious irregularities within the Company.",
          "g) The Policy neither releases Whistle Blowers from their duty of confidentiality in the course of their work, nor is it to be misused to surface a grievance about a personnel work-related situation."
        ]
      },
      {
        title: "2) APPLICABILITY",
        text: "This Policy is applicable to all Directors, Employees and other persons dealing with the Company. The Protected Disclosure may be areas of concern in respect of the Company covered by this Policy and summarized in paragraph 5."
      },
      {
        title: "3) DEFINITIONS",
        bullets: [
          "“Disciplinary Action” means any action that can be taken on the completion of / during the investigation proceedings, including but not limited to, a warning, recovery of financial losses incurred by the Company, suspension/ dismissal from the services of the Company or any such action as is deemed to be fit considering the gravity of the matter.",
          "“Employee” means every employee of the Company including the Directors in the whole-time employment of the Company.",
          "“Protected Disclosure” means a concern raised by a written communication made in good faith that discloses or demonstrates information that may evidence unethical or improper activity (as described more particularly in Clause 5) with respect to the Company. Protected Disclosures should be factual and not speculative or in the nature of an interpretations/conclusion, and should contain as much specific information as possible to allow for proper assessment of the nature and extent of the concern and the urgency of a preliminary investigative procedure.",
          "“Subject” means a person against or in relation to whom a Protected Disclosure is made or evidence gathered during the course of an investigation.",
          "“Whistle Blower” means an Employee who makes a Protected Disclosure under this Policy."
        ]
      },
      {
        title: "4) THE GUIDING PRINCIPLES",
        text: "The Company, as a policy, condemns any kind of discrimination, harassment, victimization or any other unfair employment practice being adopted against Whistle Blower. The Company will:",
        bullets: [
          "Ensure that the Whistle Blower and/or the person processing the Protected Disclosure is/are not victimized for doing so;",
          "Treat victimization of Whistle Blower as a serious matter including initiating Disciplinary Action against person(s) causing or allowing victimization of Whistle Blower;",
          "Ensure complete confidentiality of identity of Whistle Blower;",
          "Not attempt to conceal evidence of the Protected Disclosure;",
          "Take Disciplinary Action for event covered under this Policy (as mentioned in Clause 5) or upon victimizing Whistle Blower or any person processing the Protected Disclosure or if any one destroys or conceals evidence of the Protected Disclosure made/to be made;",
          "Provide an opportunity of being heard to the persons involved especially to the Subject."
        ]
      },
      {
        title: "5) COVERAGE OF POLICY",
        text: "The Policy covers malpractices and events which have taken place/ suspected to take place involving:",
        bullets: [
          "An abuse of authority;",
          "Breach of employment contract;",
          "Manipulation of company data/records;",
          "Financial or compliance irregularities, including fraud, or suspected fraud;",
          "Criminal offence having repercussions on the company or its reputation;",
          "Pilferation of confidential/proprietary information;",
          "Deliberate violation of law/regulation;",
          "Misappropriation or misuse of Company funds/assets;",
          "Breach of Code of Conduct;",
          "An act of discrimination or sexual harassment;",
          "Any other unethical, imprudent deed/behaviour"
        ],
        paragraphs: [
          "The above list is only illustrative and should not be considered as exhaustive.",
          "Policy should not be used as a route for raising malicious or unfounded allegations against colleagues."
        ]
      },
      {
        title: "6) PROTECTION",
        paragraphs: [
          "No unfair treatment will be meted out to a Whistle Blower by virtue of his/ her having reported a Protected Disclosure under this Policy. The Audit Committee would be authorised to take steps to minimize difficulties, which the Whistle Blower may experience as a result of making the Protected Disclosure.",
          "The identity of the Whistle Blower shall be kept confidential and shall be disclosed only on need to know basis.",
          "Any other Employee assisting in the said investigation or furnishing evidence shall also be protected to the same extent as the Whistle Blower."
        ],
        subsections: [
          {
            title: "Protection to Whistle Blower under this Policy shall be available provided that Protected Disclosure is:",
            bullets: [
              "made in good faith;",
              "the Whistle Blower has reasonable information or documents in support thereof; and",
              "not for personal gain or animosity against the Subject."
            ]
          },
          {
            title: "Disciplinary Action Rules",
            paragraphs: [
              "Whistle Blowers, who make any Protected Disclosures, which have been subsequently found to be mala fide, frivolous or malicious shall be liable to Disciplinary Action as may decided by the Audit Committee under this Policy.",
              "Protection under this Policy would not mean protection from disciplinary action arising out of false or bogus allegations made by a Whistle Blower knowing it to be false or bogus or with a mala fide intention.",
              "In respect of such Whistle Blowers, the Audit Committee would reserve its right to take/recommend appropriate disciplinary action."
            ]
          }
        ]
      },
      {
        title: "7) PROTECTED DISCLOSURE",
        paragraphs: [
          "All Protected Disclosures should be addressed to Company Secretary & Compliance Officer. The contact details are as under:"
        ],
        subsections: [
          {
            title: "The Company Secretary & Compliance Officer",
            paragraphs: [
              "Virtual Galaxy Infotech Limited",
              "3, Central Excise Colony, Behind Mahatme Eye Bank,",
              "Chhatrapati Sq., Ring Road,",
              "Nagpur, Maharashtra, India, 440015",
              "Tel.No: +91 9226531342",
              "E-mail: investors@vginfotech.ai",
              "Website: www.vgipl.com"
            ]
          },
          {
            title: "Submission Details",
            bullets: [
              "Protected Disclosures should be reported in writing so as to ensure a clear understanding of the issues raised and should either be typed or written in a legible handwriting.",
              "The Protected Disclosure should be forwarded under a covering letter which shall bear the identity of the Whistle Blower. Anonymous disclosures may not be entertained."
            ]
          }
        ]
      },
      {
        title: "8) INVESTIGATION",
        bullets: [
          "On receipt of Protected Disclosure, the Audit Committee shall appropriately and expeditiously investigate all whistle blower reports received. In this regard, the Audit Committee may perform all such acts as it may deem fit at its sole discretion. The investigation shall be completed normally within 30 days of the receipt of the Protected Disclosure.",
          "The Audit Committee shall have right to outline a detailed procedure for an investigation and may delegate such powers and authorities, as it may deem fit to any officer of the Company for carrying out any investigation.",
          "The identity of a Subject will be kept confidential to the extent possible given the legitimate needs of law and the investigation.",
          "Subjects will normally be informed of the allegations at the outset of a formal investigation and have opportunities for providing their inputs during the investigation.",
          "The Subject shall have a duty to co-operate with the investigator and responsibility not to interfere or obstruct with the investigation process. Evidence shall not be withheld, destroyed or tampered with, and witnesses shall not be influenced, coached, threatened or intimidated by the Subject. The Subject, if found indulging in any such actions then that will make the Subject liable for disciplinary actions.",
          "A report shall be prepared after completion of investigation by the Officer(s) investigating the matter which shall be submitted to the Audit Committee. Upon receipt of report, the Audit Committee shall submit the same along with recommendations to the Chairman for Disciplinary Action after providing reasonable opportunity of being heard to the Subject. No allegation of wrongdoing against a Subject shall be considered as maintainable unless there is good evidence in support of the allegation.",
          "After considering the report and recommendations as aforesaid, the Chairman shall determine and finalise the Disciplinary Action as he may deem fit.",
          "In case the subject is the Audit Committee Chairman, then the protected disclosure is sent to the Chairman of the Board of Directors who will take necessary steps for the investigation."
        ]
      },
      {
        title: "9) SECRECY/CONFIDENTIALITY",
        text: "The Whistle Blower, the Subject, the Senior Officer(s) and everyone involved in the process shall:",
        bullets: [
          "maintain complete confidentiality/ secrecy of the matter under this Policy;",
          "not discuss the matters under this Policy in any informal/social gatherings/ meetings;",
          "discuss only to the extent or with the persons required for the purpose of completing the process and investigations as directed by Audit Committee;",
          "not keep the papers unattended anywhere at any time;",
          "keep the electronic mails/files under password"
        ]
      },
      {
        title: "10) RETENTION OF DOCUMENTS AND AMENDMENT",
        bullets: [
          "All Protected Disclosures, documented along with the results of Investigation relating thereto, shall be retained by the Company Secretary for a minimum period of 5 (five) years or as mentioned in applicable law, if any.",
          "This Policy may be amended from time to time by the Board on the recommendation of the Audit Committee."
        ]
      }
    ]
  },
  {
    name: "Code of Conduct for Board Members and Senior Management Personnel",
    icon: "shield-check",
    sections: [
      {
        title: "1) INTRODUCTION",
        text: "The Code of Conduct for Board of Directors and Senior Management Personnel sets forth Virtual Galaxy Infotech Limited (“the Company”) core values, and shared responsibilities into practice. The objective of this document is to communicate the CODE of CONDUCT of the Directors and Officers(hereinafter referred to as ‘Members’) of the Company which sets as guidelines to bring transparency, professionalism, accountability and responsibility in the individual behaviour whilst conducting their duties, specifically under Regulation 17 of SEBI (Listing Obligations and Discloser Requirements) Regulation, 2015 (“The Regulations”). The Code is aimed to prevent any wrong doing and to promote ethical conduct at the Board and Senior Management level."
      },
      {
        title: "2) APPLICABILITY",
        paragraphs: [
          "The code shall apply to all the Members of the Company across all of its units, offices and branches in India or elsewhere.",
          "All the concerned are expected to read and understand this Code and to uphold standards set out under this, in his/her day-to-day activities.",
          "As the principles set out under this are general in character, Officers should also review the Company's other applicable Policies and Procedures for more specific instructions. In case of any difficulty in interpretation or allied matters they may contact the Compliance Officer. This Code is in addition to and not in derogation with any Act, law, rules and regulations, and all other applicable Policies and Procedures adopted by the Company that governs the conduct of its officers."
        ]
      },
      {
        title: "3) ADDITIONAL CODES FOR INDEPENDENT DIRECTOR",
        subsections: [
          {
            title: "Guidelines of Professional Conduct",
            text: "An independent director shall;",
            bullets: [
              "a) uphold ethical standards of integrity and probity;",
              "b) act objectively and constructively while exercising his duties;",
              "c) exercise his responsibilities in a bona fide manner in the interest of the company;",
              "d) devote sufficient time and attention to his professional obligations for informed and balanced decision making;",
              "e) not allow any extraneous considerations that will vitiate his exercise of objective independent judgment in the paramount interest of the company as a whole, while concurring in or dissenting from the collective judgment of the Board in its decision making;",
              "f) not abuse his position to the detriment of the company or its shareholders or for the purpose of gaining direct or indirect personal advantage or advantage for any associated person;",
              "g) refrain from any action that would lead to loss of his independence;",
              "h) where circumstances arise which make an independent director lose his independence, the independent director must immediately inform the Board accordingly;",
              "i) assist the company in implementing the best corporate governance practices."
            ]
          },
          {
            title: "Role And Functions",
            text: "The independent directors shall;",
            bullets: [
              "a) help in bringing an independent judgment to bear on the Board’s deliberations especially on issues of strategy, performance, risk management, resources, key appointments and standards of conduct;",
              "b) bring an objective view in the evaluation of the performance of board and management;",
              "c) scrutinize the performance of management in meeting agreed goals and objectives and monitor the reporting of performance;",
              "d) satisfy themselves on the integrity of financial information and those financial controls and the systems of risk management are robust and defensible;",
              "e) safeguard the interests of all stakeholders, particularly the minority shareholders;",
              "f) balance the conflicting interest of the stakeholders;",
              "g) determine appropriate levels of remuneration of executive directors, key managerial personnel and senior management and have a prime role in appointing and where necessary recommend removal of executive directors, key managerial personnel and senior management;",
              "h) moderate and arbitrate in the interest of the company as a whole, in situations of conflict between management and shareholder’s interest."
            ]
          },
          {
            title: "Duties",
            text: "The independent directors shall;",
            bullets: [
              "a) undertake appropriate induction and regularly update and refresh their skills, knowledge and familiarity with the company;",
              "b) seek appropriate clarification or amplification of information and, where necessary, take and follow appropriate professional advice and opinion of outside experts at the expense of the company;",
              "c) strive to attend all meetings of the Board of Directors and of the Board committees of which he is a member;",
              "d) participate constructively and actively in the committees of the Board in which they are chairpersons or members;",
              "e) strive to attend the general meetings of the company;",
              "f) where they have concerns about the running of the company or a proposed action, ensure that these are addressed by the Board and, to the extent that they are not resolved, insist that their concerns are recorded in the minutes of the Board meeting;",
              "g) keep themselves well informed about the company and the external environment in which it operates;",
              "h) not to unfairly obstruct the functioning of an otherwise proper Board or committee of the Board;",
              "i) pay sufficient attention and ensure that adequate deliberations are held before approving related party transactions and assure themselves that the same are in the interest of the company;",
              "j) ascertain and ensure that the company has an adequate and functional vigil mechanism and to ensure that the interests of a person who uses such mechanism are not prejudicially affected on account of such use;",
              "k) report concerns about unethical behavior, actual or suspected fraud or violation of the company’s code of conduct or ethics policy;",
              "l) acting within his authority, assist in protecting the legitimate interests of the company, shareholders and its employees;",
              "m) not disclose confidential information, including commercial secrets, technologies, advertising and sales promotion plans, unpublished price sensitive information, unless such disclosure is expressly approved by the Board or required by law."
            ]
          }
        ]
      },
      {
        title: "4) CONFLICT OF INTEREST",
        text: "Conflict of interest is a situation where personal interest may, in any, way, interfere with the interests or benefits of the Company influencing the exercise of independent judgment while discharging one’s duties and responsibilities. The Members shall avoid any situation that would lead to or tend to lead to any conflict of interest and is considered to be prejudicial to the interest of the Company. The Members are expected to make a suitable disclosure to the Board of Directors of the Company and shall abstain from participating in any discussion for such transaction which involves or appears to involve conflict of interest. The Members (including their relatives) are expected not to derive any improper personal gain / benefit from the Company which shall include making or influencing decision by any means in any transaction of the Company. The Members shall not indulge in the insider trading (as defined by the Securities and Exchange Board of India or other respective authorities from time to time) in the Company’s shares, products or services."
      },
      {
        title: "5) CONFIDENTIALITY OF INFORMATION",
        text: "Confidentiality of information means all the information of the Company which are not meant for public dissemination. This may include information on business, trade, trade secrets, technical, commercial, proprietary or privileged information and information relating to its customers, employees, mergers / de-mergers and acquisitions, stock splits, dividend, issue of bonus shares, investments and discussions and deliberations relating to business issues and decisions, between and among its members in formal meetings or otherwise, and will include all such information which should not be made available to the public at the given point of time without following rules, procedure of the law and of the Company under the authority of its management."
      },
      {
        title: "6) AFFIRMATION AND COMPLIANCE",
        text: "The Members of the Company shall affirm compliance with this Code on an annual basis, (as per Annexure-A)."
      },
      {
        title: "7) AMENDMENT",
        text: "The foregoing code of conduct is not an end to itself and is subject to modification from time to time. Any change in the Code shall be approved by the Board. The Board shall have the right to withdraw and/or amend any part of this Code or the entire Code, at any time, as it deems fit, or from time to time, and the decision of the Board in this respect shall be final and binding. Any subsequent amendment/modification in the Act or the rules framed thereunder or the SEBI Listing Regulations and/or any other laws in this regard shall automatically apply to this Code."
      }
    ]
  },
  {
    name: "Code of Practices and Procedures for Fair Disclosure of Unpublished Price Sensitive Information",
    icon: "file-text",
    sections: [
      {
        title: "1. REGULATORY PROVISIONS",
        paragraphs: [
          "In terms of the requirement stated under Regulation 8 of Securities and Exchange Board of India (Prohibition of Insider Trading) Regulations, 2015 (“The Regulations”), mandate the every Listed Company to formulate and publish on its official Website, code of practices and procedures for fair disclosure of unpublished price sensitive information that it would follow in order to adhere to each of the principles set out in Schedule A to the regulations.",
          "This Code has been reviewed and approved by the Board of Directors of the Virtual Galaxy Infotech Limited (“the Company”) and shall come into effect from the date of listing of Equity Shares of the company."
        ]
      },
      {
        title: "2. APPLICABILITY",
        text: "This Code shall be applicable and binding on all the employees, officers, directors and those persons authorized to speak on behalf of the Company."
      },
      {
        title: "3. COVERAGE",
        subsections: [
          {
            title: "A. Unpublished Price Sensitive Information",
            text: "\"Unpublished Price Sensitive Information\" means any information, relating to a company or its securities, directly or indirectly, that is not generally available which upon becoming generally available, is likely to materially affect the price of the securities and shall, ordinarily including but not restricted to, information relating to the following: –",
            bullets: [
              "a) Financial results;",
              "b) Dividends;",
              "c) Change in capital structure;",
              "d) Mergers, de-mergers, acquisitions, delisting, disposals and expansion of business and such other transactions;",
              "e) Changes in key managerial personnel;"
            ]
          },
          {
            title: "B. Material Information as specified under the Listing Regulations",
            text: "Material information means any information relating to the business or affairs of the Company that results in, or would reasonably be expected to result in a significant change in the market price or value of the securities of the Company or that would reasonably be expected to have a significant influence on any reasonable investor's investment decisions."
          }
        ]
      },
      {
        title: "4. BASIC PRINCIPLES OF DISCLOSURES",
        text: "Procedures governing the disclosure of Material Information required to be disclosed shall provide that such disclosure shall be made in accordance with the following principles:",
        bullets: [
          "A. Information should be disclosed immediately through the stock exchanges.",
          "B. Under certain circumstances, the Company may determine that such disclosure would be unduly detrimental to the Company (for example if release of the information would cause prejudice to negotiations in a corporate transaction), in such case, the information shall be kept confidential until the Company determines it may be publicly disclosed. Information should be disclosed only after there is credibility to the information and the information has concretized.",
          "C. Disclosures should be made in a timely manner.",
          "D. Disclosure must be complete in all material respects and should not be misleading.",
          "E. Unfavourable Material Information must be disclosed as promptly and completely as favourable information.",
          "F. Disclosure must be corrected immediately if the Company is subsequently made aware that its earlier disclosure contained a material error or omission at the time it was given."
        ]
      },
      {
        title: "5. DISCLOSURE OF MATERIAL INFORMATION",
        paragraphs: [
          "The Company shall disclose Material Information concerning its business and affairs to the public immediately, except when otherwise required for the purpose of maintaining the confidentiality of the information. This Code is to enable all persons investing in the securities of the Company to have the opportunity for equal and timely access to information that may affect their investment decision regarding those securities.",
          "This Code further provides that, once there is credibility to the information and once the information is reached to a level of concretization, the information would be disclosed by the Company in a timely manner."
        ]
      },
      {
        title: "6. PROCESS OF DISCLOSURES OF MATERIAL INFORMATION",
        paragraphs: [
          "In case any Functional Head becomes aware of some Material Information about the Company, the said Functional Head would contact the Compliance Officer or Managing Director of the Company.",
          "The Compliance officer and/or Managing Director would then determine whether the information requires disclosure to the stock exchanges or not in accordance with the Listing Agreements. Thereafter, concerned functional head will prepare the content of the disclosure and determine the timing of the disclosures. Thereafter, the Company will disclose the said information to the stock exchanges."
        ]
      },
      {
        title: "7. DELAY IN DISCLOSING MATERIAL INFORMATION",
        paragraphs: [
          "Under certain circumstances, the Company may keep Material Information confidential for a limited period of time because immediate disclosure may compromise certain strategic business opportunities of the Company or may not be disclosable due to third-party confidentiality restrictions or uncertainty of events.",
          "The determination of when not to disclose Material Information immediately shall be made by the Compliance officer and/or Managing Director of the Company."
        ]
      },
      {
        title: "8. NEED TO KNOW",
        bullets: [
          "a. Disclosure of UPSI to be made only if it is in furtherance of Legitimate Purposes, performance of duties or discharge of legal obligations.",
          "b. Subject to applicable laws, PIT Code, Fair Disclosure Code and other codes and policies and any procedures framed by the Company, UPSI shall be shared only on a need to know basis, post executing the Non-Disclosure/ Confidentiality Agreement or on serving notices of confidentiality."
        ]
      },
      {
        title: "9. CLARIFICATIONS",
        text: "The Compliance Officer may be contacted for any queries concerning this Fair Disclosure Code."
      },
      {
        title: "10. MARKET RUMOURS",
        text: "The Company shall not comment, affirmatively or negatively, on market rumours. Should a stock exchange request that the Company make a definitive statement in response to a market rumour that is causing significant volatility in the securities of the Company, the Compliance Officer and/or Managing Director shall consider the matter and content of the Company's response, such as confirming \"no corporate development at this time\"."
      },
      {
        title: "11. UNIFORM AND UNIVERSAL DISSEMINATION OF UPSI TO AVOID SELECTIVE DISCLOSURE",
        bullets: [
          "a. UPSI will be disseminated uniformly and universally to all stakeholders through Stock Exchanges. Additionally, the same may also be posted on the official website of the Company as per Applicable Law.",
          "b. In case any information is disclosed selectively, whether by inadvertence or otherwise, the Company shall take the necessary corrective action, including informing the Stock Exchanges, to make the information publicly available. This will be decided by the Compliance Officer in conjunction with the Managing Director."
        ]
      },
      {
        title: "12. PRESERVATION OF UPSI",
        paragraphs: [
          "All UPSI is to be preserved and maintained in utmost confidentiality by everyone including those who are recipients of any UPSI.",
          "The Company shall maintain and store records in respect of disclosures made by it through any means under the relevant provisions of the Companies Act, 2013, rules made there under for audit and future reference."
        ]
      },
      {
        title: "13. AMENDMENT",
        text: "The Board shall be responsible for the administration, interpretation, application and review of this policy. The Board shall be empowered to bring about necessary changes to this policy, if required at any stage in compliance with the prevailing laws."
      }
    ]
  },
  {
    name: "Criteria / Policy of Making Payments to Non-Executive Directors",
    icon: "credit-card",
    sections: [
      {
        title: "1. REGULATORY PROVISIONS",
        paragraphs: [
          "In terms of the requirement stated under Companies Act, 2013 read with related rules issued thereon and Regulation 17(6) of SEBI Listing (Obligation and Disclosure Requirements), Regulations, 2015, Virtual Galaxy Infotech Limited (“the Company”) has formulated a policy document namely Criteria or Policy of making payments to Non- Executive Directors” which will deal with the remuneration of the Non- Executive Directors.",
          "Section 197 of the Companies Act, 2013 and Regulation 17(6) (b) of SEBI Listing (Obligation and Disclosure Requirements), Regulations, 2015, require the prior approval of shareholders of the Company if it exceeds the prescribed limits under the Act for making payment to its Non-Executive Directors."
        ]
      },
      {
        title: "2. REMUNERATION / COMMISSION",
        text: "The remuneration / commission shall be fixed as per the slabs and conditions mentioned in the Articles of Association of the Company and the Companies Act, 2013 and the rules made there, Overall remuneration should be reflective of the size of the Company, complexity of the sector/ industry/ company’s operations and the company’s capacity to pay the remuneration."
      },
      {
        title: "3. SITTING FEES",
        text: "Independent Directors (“ID”) and Non – Executive Directors (“NED”) may be paid sitting fees (for attending the meetings of the Board and of committees of which they may be members). The payment of sitting fees will be recommended by the NRC and approved by the Board. Quantum of sitting fees may be subject to review on a periodic basis, as required provided that the amount of such fees shall not exceed Rs. One Lakh per meeting of the Board or Committee or such amount as may be prescribed by the Central Government from time to time."
      },
      {
        title: "4. COMMISSION",
        text: "Company will not pay commission to these NEDs"
      },
      {
        title: "5. STOCK OPTIONS",
        text: "An Independent Director shall not be entitled to any stock option of the Company."
      },
      {
        title: "6. AMENDMENTS",
        text: "The Board shall be responsible for the administration, interpretation, application and review of this policy. The Board shall be empowered to bring about necessary changes to this policy, if required at any stage in compliance with the prevailing laws."
      }
    ]
  },
  {
    name: "Policy on Materiality of Related Party Transactions",
    icon: "handshake",
    sections: [
      {
        title: "PREFACE",
        paragraphs: [
          "Virtual Galaxy Infotech Limited has always been committed to good corporate governance practices, including in matters relating to Related Party Transactions. An endeavor is consistently made to have only arms’ length transactions with Related Parties.",
          "All Related Party Transactions (RPT), as that term is defined in this policy, shall be subject to review in accordance with the procedures set forth below. The Board has determined that the Audit Committee (the “Committee”) is best suited to review all Related Party Transactions."
        ]
      },
      {
        title: "DEFINITIONS",
        bullets: [
          "A ‘related party' is a person or entity that is related to the company. Parties / Entities are considered to be related if an entity shall be considered as related to the company if: (i) such entity is a related party under Section 2(76) of the Companies Act, 2013; or (ii) such entity is a related party under the applicable accounting standards.",
          "Materiality of Related Party Transactions means a transaction with a related party shall be considered material if the transaction / transactions to be entered into individually or taken together with previous transactions during a financial year exceed ten percent of the annual turnover of the company as per the last audited financial statements of the company or such higher limit as may prescribed u/r 23(1) of the LODR with a related party.",
          "Royalty / brand usage payment to a related party (all transactions taken together in a financial year) shall deemed to be material if the transactions exceed 5% of the annual consolidated turnover of the Company during as per the last audited financial statement of the Company or such higher limit as may prescribed u/r 23(1) of the LODR."
        ]
      },
      {
        title: "PROCEDURES",
        subsections: [
          {
            title: "1. Audit Committee Approval",
            text: "All Related Party Transactions (RPTs) of the company as prescribed under the Companies Act, 2013 and SEBI (Listing Obligations and Disclosure Requirements) regulation 2015 will be approved by the audit committee of the Board from time to time."
          },
          {
            title: "2. Director Disclosure",
            text: "Each Director who is a Related Party with respect to a particular Related Party Transaction shall disclose all material information to the Committee concerning such Related Party Transaction and his or her interest in such transaction."
          },
          {
            title: "3. Management Presentation Information",
            text: "Management shall present to the Audit Committee the following information, to the extent relevant, with respect to actual or potential Related Party Transactions:",
            bullets: [
              "a. A general description of the transaction(s), including the name of the related party and nature of relationship, duration of the contract and particulars of the contract or arrangement, maximum amount of transaction that can be entered into, the material terms and conditions.",
              "b. The Related Party’s interest in the transaction(s), including the Related Party’s position or relationship with, or ownership of, any entity that is a party to or has an interest in the transaction(s).",
              "c. The manner of determining the pricing and other commercial terms, the indicative base price / current contracted price and the formula for variation in the price if any.",
              "d. any advance paid or received for the contract or arrangement, if any and the approximate value of the transaction(s) and the approximate value of the Related Party’s interest in the transaction(s).",
              "e. In the case of a lease or other transaction providing for periodic payments or installments, the aggregate amount of all periodic payments or installments expected to be made in the financial year.",
              "f. In the case of indebtedness, the aggregate amount of principal to be outstanding and the rate or amount of interest to be payable on such indebtedness.",
              "g. Whether all factors relevant to the contract have been considered, if not, the details of factors not considered with the rationale for not considering those factors and any other material information regarding the transaction(s) or the Related Party’s interest in the transaction(s)."
            ]
          },
          {
            title: "4. Consent of the Board and the Shareholders",
            text: "Consent of the Board and the Shareholders would also be taken in respect of all RPTs, provided that such consent would not be required in the following cases:",
            bullets: [
              "a. The transactions are entered into by the company in its ordinary course of business and are on an arms’ length basis; and",
              "b. The transaction / transactions to be entered into individually or taken together with previous transactions during a financial year does not exceed ten percent of the annual consolidated turnover of the company as per the last audited financial statements of the company or such higher limit as may prescribed u/r 23(1) of the LODR with a related party."
            ]
          },
          {
            title: "5. Agenda and Notices",
            text: "Where Board consent / shareholders’ approval is required as per para 4 above, a) the agenda of the Board meeting at which the resolution is proposed to be moved and b) explanatory statement to be annexed to the notice of such general meeting, shall disclose all such details / information about the contract as are prescribed under the Companies (Meetings of Board and its Powers) Rules, 2014."
          },
          {
            title: "6. Interested Directors and Abstentions",
            text: "Where RPTs require approval of the Board and the shareholders through resolution as per para 4 above, (a) any director who is interested in any contract or arrangement with a related party, shall not be present at the meeting during discussions on the subject-matter of the resolution relating to such contract or arrangement and b) all entities falling definition of Related Party(ies) shall abstain from voting on such resolution of the shareholders."
          },
          {
            title: "7. Urgent / Unratified Transactions",
            text: "If any contract or arrangement is entered by a Director or any employee without the consent of the Board or without Special Resolution in General Meeting due to some urgency, it shall be ratified by the Board or General Meeting by means of Special Resolution within 3 months from the date on which such Contract or arrangement was entered into else it shall be Voidable at the option of the Board or as the case may be, of the shareholders."
          },
          {
            title: "8. Special Pricing Circumstances",
            text: "In case the market price of any transactions/arrangements are not available or cannot be ascertained and could not be executed with outsiders due to secrecy of the nature of products or formula, such transactions shall be done as far as possible to the nearing market price and after citing justification to the Audit committee for such transaction and necessity."
          },
          {
            title: "9. Omnibus Approvals",
            paragraphs: [
              "If a Related Party Transaction will be ongoing/ proposed to be entered into by the company, the Committee may grant omnibus approval for ongoing dealings/ proposed related party transactions. Such omnibus approval shall specify (i) the name/s of the related party, nature of transaction, period of transaction, maximum amount of transaction that can be entered into, (ii) the indicative base price / current contracted price and the formula for variation in the price if any and (iii) such other conditions as the Audit Committee may deem fit.",
              "If the need for Related Party Transaction cannot be foreseen and aforesaid details are not available, Audit Committee may grant omnibus approval for such transactions subject to their value not exceeding one crore per transaction. The Audit Committee shall lay down the criteria /guidelines for granting the omnibus approval in line with the policy on Related Party Transactions of the company. Such approval shall be applicable in respect of transactions which are repetitive in nature and only for one year."
            ]
          },
          {
            title: "10. Periodical Review",
            text: "The Committee shall periodically review and assess ongoing relationships with the Related Party. Any material amendment, renewal or extension of a transaction, arrangement or relationship previously reviewed under this Policy shall also be subject to subsequent review under this Policy."
          },
          {
            title: "11. Three-Year Policy Review",
            text: "The Audit Committee periodically shall review this Policy once in every three years and may recommend amendments to this Policy from time to time as it deems appropriate."
          },
          {
            title: "12. Governing Regulations",
            text: "This Policy on Related Party Transactions shall be governed by the Companies Act, 2013 read with Rules made thereunder, as may be in force for the time being as well as SEBI (Listing Obligations and Disclosure Requirements) regulation 2015 or such other Rules / Regulations, as may be notified by SEBI from time to time."
          }
        ]
      }
    ]
  },
  {
    name: "Policy on Preservation and Archival of Documents",
    icon: "folder-open",
    sections: [
      {
        title: "A. INTRODUCTION",
        text: "This policy is primarily framed based on Regulation 9 of the Securities and Exchange Board of India (Listing Obligations and Disclosure Requirements) Regulations, 2015, (hereinafter referred to as “Listing Regulations”) and Companies Act, 2013. SEBI has mandated all the listed entities to have a policy on Preservation and Archival of Documents. Archival Policy as referred to in Regulation 30 (8) of the Listing Regulations forms part of this Policy. This policy is intended to ensure compliance particularly with the Listing Regulations and the applicable provisions of Companies Act, 2013."
      },
      {
        title: "B. PURPOSE",
        text: "The purpose of this documents to present a high-level policy statement for Virtual Galaxy Infotech Limited(“the Company”) regarding preservation of its documents in accordance with the provisions of the Companies Act, 2013 (“the Act”), SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015 (“the Regulation”) and any other applicable laws to the Company. Accordingly, the Policy named Policy on Preservation and Archival of Documents (“the Policy”) has been formulated and adopted by the Board of Directors (“the Board”) of the Company."
      },
      {
        title: "C. CLASSIFICATION",
        text: "Based on the recommendation of the management of the Company, the Board of Directors has identified following classes for Preservation and archival of various documents:",
        table: {
          headers: ["Sr No", "Category", "Annexures"],
          rows: [
            ["1", "Documents that needs to be preserved permanently", "Annexure-A"],
            ["2", "Documents that may be preserved for a period of 08 years or more after completion of the relevant transactions", "Annexure-B"],
            ["3", "Other documents which may be preserved for less than 08 years", "Annexure-C"]
          ]
        }
      },
      {
        title: "D. MODE OF PRESERVATION & RESPONSIBILITY",
        text: "The Authorized Person shall:",
        bullets: [
          "a. preserve the Documents either in physical form or electronic form;",
          "b. preserve the Documents in such a manner to ensure that there is no tampering, alteration, destruction or anything which endangers the content, authenticity, utility or accessibility of the Documents;",
          "c. ensure that the preserved Documents are accessible at all reasonable times;",
          "d. control access for preserved Documents, to ensure integrity and confidentiality of the Documents and prohibit unauthorised access;",
          "e. make appropriate provisions for back up of all preserved Documents, both physically and electronically."
        ]
      },
      {
        title: "E. DESTRUCTION OF DOCUMENTS",
        paragraphs: [
          "After the expiry of the retention period, the Authorized Person may destroy the preserved Documents in such a mode as deemed fit. The Compliance Officer or/and Managing Director of the Company shall approve the destruction of such Documents.",
          "The Authorized Person shall maintain a register of disposal of records, with details of Documents destroyed in the format prescribed in the guidance manual. This applies to both physical and electronic Document."
        ]
      },
      {
        title: "F. ARCHIVAL POLICY",
        bullets: [
          "a. The Company will host all the relevant disclosures of information and events communicated to the stock exchanges under Regulation 30 of the SEBI Listing Regulations on the website of the Company under the section entitled [“Investor Relations”] for a period of five years and thereafter the same shall be archived for retrieval for such period as decided by the Compliance Officer or/and Managing Director of the Company.",
          "b. Subsequently, anyone intending to review archived information and events communicated to the stock exchanges may write to the Company Secretary of the Company.",
          "c. This Policy will be periodically reviewed and amended based on any changes in the laws, rules and regulations applicable to the Company from time to time or changes in internal processes."
        ]
      },
      {
        title: "G. INTERPRETATION",
        text: "In any circumstance where the terms of this Policy are inconsistent with any existing or newly enacted law, rule, regulation or standard governing the Company, the said law, rule, regulation or standard will take precedence over this Policy."
      },
      {
        title: "H. AMENDMENT",
        text: "Any change in the Policy shall be approved by the Board. The Board shall have the right to withdraw and/or amend any part of this Policy or the entire Policy, at any time, as it deems fit, or from time to time, and the decision of the Board in this respect shall be final and binding. Any subsequent amendment/modification in the Act or the rules framed thereunder or the SEBI Listing Regulations and/or any other laws in this regard shall automatically apply to this Policy."
      },
      {
        title: "ANNEXURE A: Documents / Record whose preservation shall be permanent in nature",
        table: {
          headers: ["Sr No", "Documents / Records"],
          rows: [
            ["1", "Certificate of Incorporation- (COI)"],
            ["2", "Memorandum and Articles of Association - (MOA) & (AOA)"],
            ["3", "Agreements made by the Company with stock exchanges, depositories, etc"],
            ["4", "Minute Books of General Meetings, Board and Committee Meetings as per Companies Act and as per the applicable Secretarial Standards"],
            ["5", "Register and Index of Members, debenture-holders, if any or other security holders, if any"],
            ["6", "Register of Contracts as per Companies Act"],
            ["7", "Register of Charges as per Companies Act"],
            ["8", "Register of Investments as per Companies Act"],
            ["9", "Files relating to premises viz. Title Deeds/Lease Deeds of owned premises/land and building, etc. and related Ledger / Register"],
            ["10", "Authorization / licenses obtained from any statutory authority"],
            ["11", "Policies of the Company framed under various regulations"],
            ["12", "Register of disposal of records"],
            ["13", "Annual Reports of the Company"],
            ["14", "Material Agreements of the Company"],
            ["15", "Such other records as may be required under any law from time to time"]
          ]
        }
      },
      {
        title: "ANNEXURE B: Documents / Records to be preserved for a minimum period of eight years",
        table: {
          headers: ["Sr No", "Documents / Records"],
          rows: [
            ["1", "Instrument creating charge or modification (from the date of satisfaction of charge) as per Companies Act, 2013."],
            ["2", "Annual Returns as per Companies Act,2013."],
            ["3", "Register of Deposits as per Companies Act, 2013."],
            ["4", "Register of Allotment (from the date of each allotment) as per Companies Act, 2013."],
            ["5", "Annual financial statements including: - Annual accounts - Directors report - Auditors report"],
            ["6", "Books of accounts including Vouchers / Voucher register as defined under the Companies Act,2013."],
            ["7", "Income Tax Returns filed under Income Tax Act, 1961."],
            ["8", "All notices in form MBP–1 received from Directors and KMPs along with any amendment thereto"],
            ["9", "Return of declaration in respect of beneficial interest in any share as per Companies Act"],
            ["10", "Copy of newspaper advertisement or publications"],
            ["11", "Compliance Reports received from any statutory authority"],
            ["12", "The postal ballot and all other papers or registers relating to postal ballot including voting by electronic means"],
            ["13", "Disclosure/Return filed under SEBI Listing Regulations"],
            ["14", "Office Copies of Notices, Agenda, Notes on Agenda of Board Meetings and Board Committees and other related papers"],
            ["15", "Office Copies of Notices, Scrutinizer’s Report and related papers regarding General Meetings (including AGM)"],
            ["16", "Any other Document, certificates, statutory registers which may be required to be maintained and preserved for not less than eight years after completion of the relevant transaction under the Companies Act and/or the SEBI Listing Regulations"]
          ]
        }
      },
      {
        title: "ANNEXURE C: List of Documents available on the website of the Company",
        table: {
          headers: ["Sr No", "Documents / Records"],
          rows: [
            ["1", "Basic information about the Company including the details of its businesses"],
            ["2", "All information and/or Documents required to be posted on the website as specified in the Companies Act, 2013 and/or Regulation 46(2)/Regulation 30 of the SEBI (LODR) Regulations, 2015."],
            ["3", "All Documents required to be filed with Stock Exchanges under aforesaid Regulations."],
            ["4", "Any changes in the content shall be updated within 2 working days on the website."],
            ["5", "The information/Documents provided on the website shall be for current financial year & for preceding five financial years."]
          ]
        }
      }
    ]
  },
  {
    name: "Policy on Prevention of Sexual Harassment at Workplace (POSH)",
    icon: "file-code",
    sections: [
      {
        title: "1. REGULATORY PROVISION",
        paragraphs: [
          "Sexual harassment at the workplace results in violation of the fundamental rights of a woman:",
          "- to equality under Articles 14 and 15 of the Constitution of India",
          "- to life and to live with dignity under article 21 of the Constitution",
          "- to practice any profession or to carry on any occupation, trade or business which includes a right to a safe environment free from sexual harassment.",
          "Protection against sexual harassment and the right to work with dignity are universally recognised human rights by international conventions and instruments such as Convention on the Elimination of all Forms of Discrimination against Women, which has been ratified on 25 June 1993 by the Government of India.",
          "This Policy has been framed in accordance with the provisions of “The Sexual Harassment of Women at Workplace (Prevention, Prohibition & Redressal) Act, 2013” hereinafter referred as POSH ACT,2013 and Rules framed thereunder. The Policy covers all the key aspects of the said Act and the Rules and for any clarification reference shall always be made to the said Act and the Rules and the provisions of the said Act and the Rules shall prevail."
        ]
      },
      {
        title: "2. APPLICABILITY",
        subsections: [
          {
            title: "Purpose of the Policy",
            text: "This policy provides guidelines for the maintenance of all relevant technical issues related to the business website."
          },
          {
            title: "Procedures - Website Register",
            text: "The website register must record the following details:",
            bullets: [
              "List of domain names registered to the business",
              "Dates of renewal for domain names",
              "List of hosting service providers",
              "Expiry dates of hosting",
              "{insert any other records to be kept in relation to your business website here}."
            ],
            paragraphs: [
              "The keeping the register up to date will be the responsibility of {insert relevant job title here}.",
              "{insert relevant job title here} will be responsible for any renewal of items listed in the register."
            ]
          },
          {
            title: "Website Content",
            paragraphs: [
              "All content on the business website is to be accurate, appropriate and current. This will be the responsibility of {insert relevant job title here}.",
              "All content on the website must follow {insert relevant business requirements here where applicable, such as a business or content plan, etc.}.",
              "The content of the website is to be reviewed {insert frequency here}.",
              "The following persons are authorized to make changes to the business website:",
              "- {insert relevant job title here}",
              "- {insert relevant job title here}",
              "- {insert relevant job title here}",
              "Basic branding guidelines must be followed on websites to ensure a consistent and cohesive image for the business.",
              "All data collected from the website is to adhere to the Privacy Act."
            ]
          },
          {
            title: "Additional Policies for Website Policy",
            text: "Guidance: add, link or remove the policies listed below as required.",
            bullets: [
              "Information Technology Security Policy",
              "Emergency Management of Information Technology policy"
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Policy for Disclosure of Material Events or Information and Disclosure & Determination of Materiality of Events or Information",
    icon: "file-text",
    sections: [
      {
        title: "1. Introduction",
        paragraphs: [
          "The Policy for determination of materiality of events or information(‘’Policy’’) for disclosure to the Stock Exchanges is framed in accordance with the requirements of the Regulation 30 of Securities and Exchange Board of India (Listing Obligations and Disclosure Requirements) Regulations, 2015 (‘’Regulations’’).",
          "The Board of Directors of the listed entity shall authorise one or more Key Managerial personnel for the purpose of determining materiality of an event or information for the purpose of making disclosures."
        ]
      },
      {
        title: "2. Objective",
        text: "Virtual Galaxy Infotech Limited being a listed entity, is obligated to comply with the disclosure requirements under the Listing Regulations and is committed to the premise that the all persons investing in the publically traded securities have equal right to access information that may affect their investment decisions and believes that full and fair disclosure of material information to the public is the cornerstone to the integrity of the Capital Market."
      },
      {
        title: "3. Definition",
        bullets: [
          "(i) \"Act\" shall mean the Companies Act, 2013 and the Rules framed there under, including any modifications, clarifications, circulars or re-enactment thereof.",
          "(ii) \"Board of Directors\" or \"Board\" means the Board of Directors of Yash Optics & Lens Limited, as constituted from time to time.",
          "(iii) \"Key Managerial Personnel (KMP)\" mean key managerial personnel as defined in subsection (51) of section 2 of the Companies Act, 2013.",
          "(iv) \"Listing agreement\" shall mean an agreement that is to be entered into between a recognised stock exchange and the Company pursuant to Securities and Exchange Board (Listing Obligations and Disclosure Requirements), 2015.",
          "(v) \"Material Event\" or \"Material Information\" shall mean such event or information as set out in the Schedule or as may be determined in terms of Clause 5 of the Policy and Para A of Part A of Schedule III to the Listing Regulations. In the Policy, the words, \"material\" and \"materiality\" shall be construed accordingly.",
          "(vi) “Independent Director” means a Director of the Company within the meaning of Section 149 (6) of the Companies Act, 2013 and Regulation 16(1)(b) of Listing Regulations.",
          "(vii) \"Policy\" means this Policy for Determination of Materiality as may be amended from time to time.",
          "(viii) “Key Managerial Personnel or KMP” means Key Managerial Personnel of the Company and includes Executive Chairman, Managing Director, Whole-Time Director, Chief Executive Officer, Manager, Chief Financial Officer and the Company Secretary, who may be authorized individually or collectively to determine materiality of events or information and disclose to Stock Exchange(s).",
          "(ix) \"Regulations I Listing Regulations\" mean Securities and Exchange Board of India (Listing Obligations and Disclosure Requirements) Regulations, 2015 including any modifications, clarifications, circulars or re-enactment thereof.",
          "(x) \"Schedule\" means a Schedule III of (Listing Obligations and Disclosure Requirements) Regulations, 2015. Any other term not defined herein shall have the same meaning as defined in the Companies Act, 2013, the Listing Agreement, Regulations or any other applicable laws or regulations to the extent applicable to the Company."
        ]
      },
      {
        title: "4. Criteria for determining Materiality of events or information",
        text: "Virtual Galaxy Infotech Limited shall consider the following criteria for determination of Materiality of Events/information: -",
        bullets: [
          "(a) The omission of an event or information, which is likely to result in discontinuity or alteration of event or information already available publicly; or",
          "(b) The omission of an event or information is likely to result in significant market reaction if the said omission came to light at a later date; and",
          "(c) In case where the criteria specified in (a) and (b) are not applicable, an event / information may be treated as being material if in the opinion of the Board of Directors of the Company, the event / information is considered material."
        ]
      },
      {
        title: "5. Disclosures of events or information",
        bullets: [
          "a. The Company shall make Disclosure, first to the Stock Exchange, of material information, as provided in Annexure-A, as soon as reasonably possible and but not later than 24 hours from the occurrence of event or information. Provided that in case the disclosure is made after twenty-four (24) hours of occurrence of such event or information, the Company shall, along with such disclosure(s) provide an explanation for delay.",
          "b. Provided further that disclosure with respect to events specified in Annexure B shall be made within thirty (30) minutes of the conclusion of the Board Meeting.",
          "c. The Company shall make disclosure of events as specified in “Annexure C” based on application of guidelines for determining Materiality as per the Policy.",
          "d. The Company shall make disclosures updating Material developments on a regular basis, till such time the event is resolved/closed, with relevant explanations.",
          "e. The Company shall disclose all events or information with respect to its Material Subsidiaries, (if any).",
          "f. The Company shall provide specific and adequate reply to all queries raised by stock exchange(s) with respect to any events or information and on its own initiative. Further, it shall confirm or deny any event or information to stock exchange(s) reported in the media.",
          "g. In case where an event occurs or information is available with the Company, which has not been indicated in Annexure A or Annexure B or Annexure C but which may have material effect on it, the Company will make adequate disclosures in regard thereof.",
          "h. The listed entity shall disclose on its website all such events or information which has been disclosed to stock exchange(s) under this regulation, and such disclosures shall be hosted on the website of the listed entity for a minimum period of five years and thereafter as per the archival policy of the listed entity, as disclosed on its website."
        ]
      },
      {
        title: "Scope and Limitation",
        text: "In the event of any conflict between the provisions of this Policy and the Listing Regulations, Companies Act, 2013 or any other statutory enactments, rules, the provisions of such Listing Regulations / Companies Act, 2013 or statutory enactments, rules shall prevail over this Policy and the part(s) so repugnant shall be deemed to severed from the Policy and the rest of the Policy shall remain in force."
      },
      {
        title: "Amendment",
        text: "The Board of Directors may subject to the applicable laws amend any provision or substitute any of the provision with the new provision or replace the Policy entirely with a new Policy. However, no such amendment or modification shall be inconsistent with the applicable provisions of any law for the time being in force."
      },
      {
        title: "Annexure A: Disclosure of Material Events",
        subsections: [
          {
            title: "1. Corporate Restructurings",
            bullets: [
              "A. Acquisition(s) (including target details Target Entity details, related party disclosure, objects, and shareholding percentages). Note: 'acquisition' means acquiring control or >= 5% shares.",
              "B. Amalgamation/Merger (including entities forming part of it, arms length RPT status, share exchange ratio, and shareholding pattern shifts).",
              "C. De-merger (including details of division, demerged division turnover percentage, rationale, resulting shareholding pattern, and listing status).",
              "D. Sale/Disposal of Unit(s)/Division(s)/Subsidiary (including revenue contributions, transaction timing, consideration, and slump sale specifications).",
              "E. Other Restructuring (including quantitative and qualitative effects, promoter benefits, and shareholding changes)."
            ]
          },
          {
            title: "2. Issuance, Forfeiture, Splits, Consolidation, or Alterations of Securities",
            bullets: [
              "A. Issuance of Securities: Details on security type, issuance mode, outcome of preferential issue subscriptions, bonus issue reserves utilization details, FCCB or debt security details, or cancellations.",
              "B. Split/Consolidation of Shares: Rationale, capitalization changes, subdivision ratios, and class specifics.",
              "C. Buy Back of Securities: Volume, percentages, price, and post-buyback shareholding pattern.",
              "D. Restrictions on Transferability: Order issuing authority, attachment reasons, registered holders affected, and distinctive numbers.",
              "E. Terms Alteration of Existing Securities: Forfeiture, reissue, calls alteration, or redemption terms shifts."
            ]
          },
          {
            title: "3. Revision in Ratings",
            text: "Intimating new ratings or revision in ratings assigned from credit rating agencies to any debt instrument, fixed deposits, or fund mobilization scheme, including reasons for downward revisions."
          },
          {
            title: "4. Agreements Binding and Not in Normal Course of Business",
            text: "Details of Shareholder Agreements, Joint Ventures, Family Settlements impacting management/control, or treaties with media companies, including terms, conflicts of interest, and terminations/amendments."
          },
          {
            title: "5. Fraud or Defaults",
            text: "Reporting of fraud, defaults, or arrests involving promoter or key managerial personnel (KMP), detailing nature of fraud, estimated amounts, statutory reports, and subsequent financial impacts and corrective actions."
          },
          {
            title: "6. Changes in Key Personnel",
            text: "Changes in directors, key managerial personnel (KMPs - MD, CEO, CFO, Company Secretary), Auditor, or Compliance Officer, detailing appointment/resignation reasons, profile details, and relationships."
          },
          {
            title: "7. Share Transfer Agent Changes",
            text: "Reason for appointment or discontinuation of share transfer agent, along with effective dates."
          },
          {
            title: "8. Corporate Debt Restructuring (CDR)",
            text: "Details of restructuring, voluntary status, loan exposures, RBI-approved CDR scheme updates, lenders involved, and restrictive covenants."
          },
          {
            title: "9. One Time Settlement (OTS)",
            text: "Details and reasons for OTS agreements executed with Banks."
          },
          {
            title: "10. BIFR Reference and Winding-up Petitions",
            text: "Reasons and corporate financial impact of winding-up petitions filed by creditors or BIFR references."
          },
          {
            title: "11. Issuance of Notices, Call Letters, or Circulars",
            text: "Details, dates, and agenda items of communications sent to shareholders, debenture holders, or creditors."
          },
          {
            title: "12. Proceedings of Annual and Extraordinary General Meetings",
            text: "Summaries of AGM/EGM items deliberated, voting results, and electronic voting approval systems."
          },
          {
            title: "13. Amendments to Memorandum and Articles of Association",
            text: "Summaries of all amendments to the Memorandum and Articles of Association (MoA & AoA)."
          },
          {
            title: "14. Analyst / Investor Presentations",
            text: "Schedules and presentation documents shared during meetings with institutional investors or analysts."
          }
        ]
      },
      {
        title: "Annexure B: Outcome of Meetings of the board of directors",
        text: "The listed entity shall disclose to the Exchange(s), within 30 minutes of the closure of the meeting, held to consider the following:",
        bullets: [
          "a) dividends and/or cash bonuses recommended or declared or the decision to pass any dividend;",
          "b) any cancellation of dividend with reasons thereof;",
          "c) the decision on buyback of securities;",
          "d) the decision with respect to fund raising proposed to be undertaken;",
          "e) increase in capital by issue of bonus shares through capitalization;",
          "f) reissue of forfeited shares or securities, or the issue of shares or securities held in reserve for future issue;",
          "g) short particulars of any other alterations of capital, including calls;",
          "h) financial results;",
          "i) decision on voluntary delisting by the listed entity from stock exchange(s)."
        ]
      },
      {
        title: "Annexure C: Illustrative list of events which shall be disclosed upon application of the guidelines for materiality (Regulation 30 (4))",
        bullets: [
          "1. Commencement or postpone in commercial production or operations of any unit/division.",
          "2. Strategic character changes (tie-ups, adoption of new lines of business, closure of operations).",
          "3. Capacity addition or product launch.",
          "4. Awarding, bagging/receiving, amendment or termination of orders/contracts outside normal course.",
          "5. Loan agreements (as a borrower) or other binding non-ordinary agreements.",
          "6. Natural calamity disruptions (earthquakes, fire, strikes, lockouts affecting operations).",
          "7. Regulatory changes having material effects on corporate operations.",
          "8. Litigation/disputes/regulatory actions with material impact.",
          "9. Frauds/defaults by promoter or directors (other than KMPs) or employees.",
          "10. Options to purchase securities (ESOP/ESPS).",
          "11. Guarantees, indemnities, or sureties executed for third parties.",
          "12. Key licenses/regulatory approvals granted, withdrawn, surrendered, or suspended.",
          "13. Major developments like emerging technologies, patent expiries, accounting policy changes, or info to avoid a false market."
        ]
      }
    ]
  },
  {
    name: "Terms and Conditions of Appointment of Independent Directors",
    icon: "users",
    sections: [
      {
        title: "Introduction",
        paragraphs: [
          "The terms and Conditions of the appointment, which shall, in any event be subject to the provisions of the Companies Act, 2013, SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015 (‘Listing Regulations’) and the Articles of Association of the Company, are set out below.",
          "The broad terms and conditions of their appointment as Independent Directors are reproduced hereunder:"
        ]
      },
      {
        title: "Terms of Appointment",
        bullets: [
          "1. The appointment will be for the period mentioned against their respective names (“Term”). The Company may remove Independent Directors prior to completion of the Term subject to compliance of relevant provisions of the Companies Act 2013 and Articles of Association of the Company.",
          "2. Appointment process of independent directors shall be independent of the company management, while selecting independent directors the Board shall ensure that there is appropriate balance of skills, experience and knowledge in the Board so as to enable the Board to discharge its functions and duties effectively.",
          "3. In compliance with provision Section 149(13) of the Companies Act, 2013, Independent Directors are not liable to retire by rotation.",
          "4. Re-appointment at the end of the Term shall be based on the recommendation of the Nomination and Remuneration Committee and subject to the approval of the Board and the shareholders. The re-appointment would be considered by the Board based on the outcome of the performance evaluation process and the directors continuing to meet the independence criteria.",
          "5. The directors may be requested to be a member / Chairman of any one or more Committees of the Board which may be constituted from time to time.",
          "6. The appointment may be terminated in accordance with the provisions of the Articles of Association of the Company or on failure to meet the parameters of independence as defined in Section 149(6) or Listing Regulations or on the occurrence of any event as defined in section 167 of the Companies Act, 2013. Upon termination or upon resignation for any reason, duly intimated to the Company, Independent Directors will not be entitled to any compensation for loss of office."
        ]
      },
      {
        title: "Resignation",
        text: "Independent Directors may resign from their position at any time and should they wish to do so, they are requested to serve a reasonable written notice on the Board. In terms of provisions of the Companies Act, 2013, they are required to file a copy of their resignation letter with the Registrar of Companies."
      },
      {
        title: "Time commitment",
        text: "Independent Directors agree to devote such time as is prudent and necessary for the proper performance of their role, duties and responsibilities as Independent Director."
      },
      {
        title: "Role, duties and responsibilities",
        text: "As members of the Board, they along with the other Directors will be collectively responsible for meeting the objectives of the Board which include:",
        bullets: [
          "a. Requirements under the Companies Act, 2013 read with Schedule IV to the Companies Act, 2013 to section 149(8) of the Act, and duties of directors as provided in the Act (including Section 166).",
          "b. \"Responsibilities of the board of directors\" as outlined in the Listing Regulations.",
          "c. Accountability under the Director’s Responsibility Statement.",
          "d. They are particularly requested to provide guidance in their area of expertise."
        ]
      },
      {
        title: "Status of Appointment and Remuneration",
        text: "Independent Directors will not be employees of the Company and their appointment letter shall not constitute a contract of employment. They will be paid such remuneration by way of sitting fees for meetings of the Board and its Committees as may be decided by the Board. In addition to the sitting fees, commission that may be determined by the Board may also be payable to them. In determining the amount of this commission, the Board, supported by the Nomination and Remuneration Committee, may consider performance of the Company and their performance as evaluated by the Board."
      },
      {
        title: "Reimbursement of Expenses",
        text: "The Company may pay or reimburse to the Director such expenditure, as may have been incurred by them while performing their role as an Independent Director of the Company. This could include reimbursement of expenditure incurred by them for accommodation, travel and any out of pocket expenses for attending Board/ Committee Meetings, General Meetings, Court Convened Meetings, Meetings with Shareholders/Creditors/Management, site visits, induction and training (organized by the Company for Directors) and in obtaining, subject to the expense being reasonable, professional advice from independent advisers in the furtherance of their duties as Independent Directors."
      },
      {
        title: "Independent Professional Advice",
        text: "There may be occasions when Independent Directors consider that they need professional advice in furtherance of their duties as Director and it will be appropriate for them to consult independent advisers at the Company’s expense. The Company will reimburse full cost of expenditure incurred in accordance with the Company’s policy."
      },
      {
        title: "Training and Development",
        text: "The Company may, if required, conduct formal training program for its Independent Directors. The Company may, as may be required, support Directors to continually update their skills and knowledge and improve their familiarity with the company and its business. The Company will fund/arrange for training on all matters which are common to the whole Board."
      },
      {
        title: "Conflict of Interest",
        bullets: [
          "1. It is accepted and acknowledged that Independent Directors may have business interests other than those of the Company. As a condition to appointment, they are required to declare any such directorships, appointments and interests to the Board in writing in the prescribed form at the time of appointment.",
          "2. In the event that circumstances seem likely to change and might give rise to a conflict of interest or, when applicable, circumstances that might lead the Board to revise its judgement that they are independent, this should be disclosed to both the Chairman and the Company Secretary.",
          "3. They shall not participate in any business activity which might impede the application of their independent judgement in the best interest of the Company."
        ]
      },
      {
        title: "Performance Appraisal / Evaluation Process",
        text: "As members of the Board, their performance as well as the performance of the entire Board and its Committees will be evaluated annually. Evaluation of each director shall be done by all the other directors. The evaluation process shall remain confidential and shall be a constructive mechanism to improve the effectiveness of the Board / Committee."
      },
      {
        title: "Disclosure of other directorships and business interests",
        bullets: [
          "1. During their Term, Independent Directors agree to promptly notify the Company of any change in their directorships, and provide such other disclosures and information as may be required under the applicable laws. They also agree that upon becoming aware of any potential conflict of interest with their position as Independent Directors of the Company, they shall promptly disclose the same to the Chairman and the Company Secretary.",
          "2. During their Term, Independent Directors agree to promptly provide a declaration under Section 149(7) of the Companies Act, 2013 and Listing Regulations, upon any change in circumstances which may affect their status as an Independent Director."
        ]
      },
      {
        title: "Changes of personal details",
        text: "During the Term, Independent Directors shall promptly intimate the Company Secretary and the Registrar of Companies in the prescribed manner, of any change in address or other contact and personal details provided to the Company."
      },
      {
        title: "Confidentiality",
        bullets: [
          "1. All information acquired during appointment is confidential to the Company and shall not be released, either during appointment or following termination (by whatever means) to third parties without prior clearance from the Company unless required by law or by the rules of any stock exchange or regulatory body. On reasonable request, Independent Directors shall surrender any documents and other materials made available to them by the Company.",
          "2. Attention is also drawn to the requirements under the applicable regulations and the Company’s Insider Trading Code which concern the disclosure of price sensitive information and dealing in the securities of the Company. Consequently, Independent Directors should avoid making any statements or performing any transactions that might risk a breach of these requirements without prior clearance from the Chairman or the Company Secretary."
        ]
      },
      {
        title: "General",
        text: "The appointment of Independent Directors and any non-contractual obligations arising out thereof shall be governed by and be construed in accordance with, the laws of India."
      }
    ]
  },
  {
    name: "Prohibition of Insider Trading Policy",
    icon: "lock",
    sections: [
      {
        title: "INTRODUCTION",
        paragraphs: [
          "This Code of Conduct has been made pursuant to Regulation 8 and 9 of the SEBI (Prohibition of Insider Trading) Regulations, 2015 (herein referred as Regulations) as amended and may be modified by the Board of Directors of the Company from time to time.",
          "The Board of Directors of the Company has adopted this “Prohibition of Insider Trading Policy” (the “Policy”) to comply with the SEBI (Prohibition of Insider Trading) Regulations, 2015 (“SEBI Regulations”) as amended from time to time.",
          "This policy shall be applicable to all Insiders (as defined herein) of the Company including designated persons and immediate relatives of designated persons as defined in this policy. The SEBI Regulations prohibit an Insider from Trading in the securities of a company listed on any stock exchange when in possession of any unpublished price sensitive information.",
          "The Company endeavors to preserve the confidentiality of Un-published Sensitive information (UPSI) and to prevent misuse of such information. The Company is committed to transparency and fairness in dealing with all the stakeholders and in ensuring adherence to all laws and regulations.",
          "\"Unpublished price sensitive information\" means any information, relating to a company or its securities, directly or indirectly, that is not generally available which upon becoming generally available, is likely to materially affect the price of the securities and shall, ordinarily including but not restricted to, information relating to the following: –"
        ],
        bullets: [
          "(i) financial results;",
          "(ii) dividends;",
          "(iii) change in capital structure;",
          "(iv) mergers, de-mergers, acquisitions, delistings, disposals and expansion of business and such other transactions;",
          "(v) changes in key managerial personnel."
        ],
        subsections: [
          {
            title: "",
            paragraphs: [
              "It is intended that information relating to a company or securities, that is not generally available would be unpublished price sensitive information if it is likely to materially affect the price upon coming into the public domain. The types of matters that would ordinarily give rise to unpublished price sensitive information have been listed above to give illustrative guidance of unpublished price sensitive information.",
              "“Generally available information” is defined, it is intended that anyone in possession of or having access to unpublished price sensitive information should be considered an “insider” regardless of how one came in possession of or had access to such information. Various circumstances are provided for such a person to demonstrate that he has not indulged in insider trading. Therefore, this definition is intended to bring within its reach any person who is in receipt of or has access to unpublished price sensitive information. The onus of showing that a certain person was in possession of or had access to unpublished price sensitive information at the time of trading would, therefore, be on the person leveling the charge after which the person who has traded when in possession of or having access to unpublished price sensitive information may demonstrate that he was not in such possession or that he has not traded or he could not access or that his trading when in possession of such information was squarely covered by the exonerating circumstances.",
              "The SEBI Regulations prohibit the communication of UPSI to any person except in compliance with applicable law. Further, procuring any person to Trade in the securities of any company when in possession UPSI is also prohibited under the SEBI Regulations and the securities laws. Violations of the SEBI Regulations and the securities laws subject Insiders to severe penalties including disgorgement proceedings, fines and imprisonment as per the applicable law."
            ]
          }
        ]
      },
      {
        title: "1. Rules",
        text: "The rules shall be called ‘Rules for Trading in the securities of Virtual Galaxy Infotech Limited by an Insider’ (“Rules”). These Rules shall come into force with immediate effect."
      },
      {
        title: "2. Definitions",
        bullets: [
          "1) “Act” shall mean the Securities and Exchange Board of India Act, 1992 (15 of 1992).",
          "2) ‘Audit Committee’ shall mean Committee of the Board of the Company constituted pursuant to Section 177 of the Companies Act, 2013 read with Regulation 18 of the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015.",
          "3) ‘Board’ shall mean the Board of Directors of Virtual Galaxy Infotech Limited.",
          "4) ‘Company’ means Virtual Galaxy Infotech Limited."
        ],
        subsections: [
          {
            title: "5) Compliance Officer",
            text: "“Compliance Officer” means the General Counsel and Chief Compliance Officer of the Company or the Company Secretary who is financially literate and is capable of appreciating requirements for legal and regulatory compliance under the Regulations and who shall be responsible for compliance of policies, procedures, maintenance of records, monitoring adherence to the rules for the preservation of unpublished price sensitive information, monitoring of trades and implementation of the codes specified under the SEBI Regulations under the overall supervision of the Board."
          },
          {
            title: "6) Connected Person",
            paragraphs: [
              "“Connected Person,” includes–",
              "i. A director of the Company;",
              "ii. A Key Managerial Personnel of the Company;",
              "iii. An Officer of the Company;",
              "iv. Any person who is or has been in a contractual, fiduciary or employment relationship at any time in the six month period prior to the date of determining whether that person, as a result of such relationship, was, directly or indirectly, allowed access to UPSI or reasonably expected to be allowed access to UPSI;",
              "v. Any person who is or has been in frequent communication with an Officer of the Company at anytime in the six-month period prior to the date of determining whether that person, as a result of such frequent communication, was, directly or indirectly, allowed access to UPSI or reasonably expected to be allowed access to UPSI;",
              "vi. An employee of the Company who has access to UPSI or is reasonably expected to have access to UPSI; and",
              "vii. Any person who has a professional or business relationship with the Company and that relationship directly or indirectly, allows access to UPSI or is reasonably expected to allow access to UPSI;",
              "The persons enumerated below shall be deemed to be Connected Persons if such person has access to UPSI or is reasonably expected to have access to UPSI-",
              "a. An Immediate Relative of Connected Persons;\nb. A holding company, associate company or subsidiary company;\nc. An intermediary as specified in section 12 of the SEBI Act or an employee or Director thereof;\nd. An investment company, trustee company, asset management company or an employee or director thereof;\ne. An official of a stock exchange or of clearing house or corporation;\nf. A member of the board of trustees of a mutual fund, a member of the board of directors of the asset management company of a mutual fund or in each case, an employee thereof;\ng. A member of the board of directors or an employee, of a public financial institution as defined in section 2 (72) of the Companies Act, 2013;\nh. An official or an employee of a self-regulatory organization recognized or authorized by the SEBI;\ni. A banker of the Company; and\nj. A concern, firm, trust, Hindu undivided family, company or association of persons wherein a director of the Company or his Immediate Relative or banker of the Company, has more than ten percent of the holding or interest."
            ]
          },
          {
            title: "7) Contra trade",
            text: "“Contra Trade’’ means a trade or transaction which involves buying or selling any number of shares of the Company and within 6 months trading or transacting in an opposite transaction involving sell or buy following the prior transaction.”"
          },
          {
            title: "8) Designated Person",
            text: "The term “Designated Person” shall consist of:",
            bullets: [
              "I. Promoters of the Company;",
              "II. Directors of the Company and its subsidiaries;",
              "III. All employees in the Finance and Accounts Department, Corporate Planning Department, Legal Department, Enterprise Risk Management Department, Corporate Strategy, Information Security and any other departments of the company and its material subsidiaries, if any on the basis of their functional role or access to unpublished price sensitive information;",
              "IV. Managing Director and employees upto two levels below Managing Director of the Company and material subsidiaries;",
              "V. Executive Secretaries of Directors and Executive Officers of the Company, any support staff of the Company, such as IT staff or secretarial staff who have access to unpublished price sensitive information;",
              "VI. Immediate Relatives of persons specified in (I) to (V) above;",
              "VII. Any other Person designated by the Company on the basis of their functional role and such function would provide access to UPSI."
            ]
          },
          {
            title: "9) Director",
            text: "“Director” shall have the meaning assigned to it under the Companies Act, 2013."
          },
          {
            title: "10) Immediate Relative",
            text: "“Immediate relative” means a spouse of a person, and includes parent, sibling, and child of such person or of the spouse, any of whom is either dependent financially on such person, or consults such person in taking decisions relating to trading in securities."
          },
          {
            title: "11) Insider",
            text: "An “Insider” means any person who is: i. a Connected Person or ii. in possession of or having access to UPSI."
          },
          {
            title: "12) Key Managerial Personnel",
            text: "“Key Managerial Personnel” shall have the meaning assigned to it under the Companies Act, 2013."
          },
          {
            title: "13) ‘Leak of UPSI’",
            text: "shall refer to such act/circumstance(s) by virtue of which an UPSI is made available or becomes available, by any means or mode to any person, association, body, firm, agency, society, entity or to a group thereof, whether registered or otherwise before its official publication or announcement or formal circulation in public domain and which shall also include any purported attempt thereof.",
            paragraphs: [
              "Explanation: It covers the instances where the UPSI has been shared by a person to any person, association, body, firm, agency, society, entity or to a group thereof except in compliance with applicable law."
            ]
          },
          {
            title: "14) “Material financial relationship”",
            text: "shall mean a relationship in which one person is a recipient of any kind of payment such as by way of a loan or gift from a designated person during the immediately preceding twelve months, equivalent to at least 25% of the annual income of such designated person, but shall exclude relationships in which the payment is based on arm’s length transactions."
          },
          {
            title: "15) Officer",
            text: "“Officer” shall have the meaning assigned to it under the Companies Act, 2013."
          },
          {
            title: "16) Promoter and Promoter Group",
            paragraphs: [
              "“Promoter” shall have the meaning assigned to it under the SEBI (Issue of Capital and Disclosure Requirements) Regulations, 2018 or any modification thereof.",
              "“Promoter Group” shall have the meaning assigned to it under the SEBI (Issue of Capital and Disclosure Requirements) Regulations, 2018 or any modification thereof."
            ]
          },
          {
            title: "17) Securities",
            text: "“Securities” shall have the meaning assigned to it under the Securities Contracts (Regulations) Act, 1956 or any modification thereof except units of a mutual fund."
          },
          {
            title: "18) Trading",
            text: "“Trading” means and includes subscribing, buying, selling, dealing, or agreeing to subscribe, buy, sell, pledge, unpledge, deal in the Company’s securities either directly or through portfolio management services, and “trade” shall be construed accordingly."
          },
          {
            title: "19) Legitimate purpose",
            text: "“Legitimate purpose” shall include sharing of unpublished price sensitive information in the ordinary course of business by an insider with partners, collaborators, lenders, customers, suppliers, merchant bankers, legal advisors, auditors, insolvency professionals or other advisors or consultants, provided that such sharing has not been carried out to evade or circumvent the prohibitions of these regulations."
          }
        ],
        paragraphs: [
          "Words and expressions used and not defined in these Rules but defined in the Securities and Exchange Board of India Act, 1992, the Securities Contracts (Regulation) Act, 1956, the Depositories Act, 1996 or the Companies Act, 2013 and rules and regulations made there under shall have the meanings respectively assigned to them in those legislations."
        ]
      },
      {
        title: "3. Prohibition on communicating or procuring UPSI",
        paragraphs: [
          "An Insider shall not–"
        ],
        bullets: [
          "i. communicate, provide, or allow access to any UPSI, relating to the Company or its securities, to any person including other Insiders, except to the extent allowed by these Rules or SEBI Regulations; or",
          "ii. procure from or cause the communication by an Insider of UPSI, relating to the Company or its securities."
        ],
        subsections: [
          {
            title: "",
            paragraphs: [
              "Provided that nothing contained above shall be applicable when an UPSI is communicated, provided, allowed access to or procured:"
            ],
            bullets: [
              "i. in furtherance of legitimate purposes, performance of duties or discharge of legal obligations pursuant to appropriate notice, confidentiality and non-disclosure agreements being executed; or",
              "ii. in the event the Board of Directors directs or causes the public disclosure of UPSI in the best interest of the Company; or",
              "iii. within a group of persons if such persons have been identified and secluded within a “Chinese wall” or information barrier by the Compliance Officer from the rest of the Company for a particular purpose or for a specified period of time in furtherance of legitimate purposes, performance of duties or discharge of legal obligations, and are subjected to, among other conditions, additional confidentiality obligations, information barriers designed to prevent exchanges of UPSI outside the “Chinese wall”, and the execution of an undertaking by such persons to abstain and/or forego Trading during such seclusion or till the UPSI no longer constitutes UPSI and has become generally available."
            ]
          }
        ]
      },
      {
        title: "4. Prohibition on Insider Trading",
        paragraphs: [
          "An Insider shall not, directly or indirectly, –"
        ],
        bullets: [
          "i. Trade in securities of the Company that are listed or proposed to be listed when in possession of UPSI;",
          "ii. Trade in securities of the Company except when the Trading Window is open and the Insider is not in possession of UPSI.",
          "iii. Provide advise/tips to any third party on trading in Company’s securities while in possession of UPSI and"
        ],
        subsections: [
          {
            title: "",
            paragraphs: [
              "An insider who has ceased to be associated with the Company shall not, for a period of six months from date of such cessation, directly or indirectly trade in the Company’s Securities while in possession of UPSI.",
              "Trading in Securities of other companies. No Insider may, while in possession of unpublished price sensitive information about any other public company gained in the course of employment with the Company, (a) trade in the securities of the other public company, (b) “tip” or disclose such material non-public information concerning that company to anyone, or (c) give trading advice of any kind to anyone concerning the other public company.",
              "No Insider may take positions in derivative transactions in the securities of the Company at any time. The restriction in 4(i) above may not apply to:"
            ],
            bullets: [
              "a) A transaction that is an off-market inter-se transfer between Insiders who were in possession of the same UPSI without being in breach of these Rules and both parties had made a conscious and informed trade decision; and",
              "b) Trades pursuant to a Trading Plan set up in accordance with these Rules and SEBI Regulations."
            ]
          },
          {
            title: "",
            paragraphs: [
              "When a person has traded in securities while in possession of unpublished price sensitive information, his trades would be presumed to have been motivated by the knowledge and awareness of such information in his possession."
            ]
          }
        ]
      },
      {
        title: "5. Trading Window",
        bullets: [
          "1) The Compliance Officer shall notify a ‘trading window’ during which the Designated Persons may Trade in the Company’s securities after securing pre-clearance from the Compliance Officer in accordance with these Rules. The competent authority for pre-clearing the Trade of Compliance Officer shall be Board.",
          "2) Designated Persons shall not Trade in the Company’s securities when the trading window is closed.",
          "3) The trading window shall generally be closed for all Insiders between the sixteenth day prior to the last day of any financial period for which results are required to be announced by the Company and the second trading day after disclosure of such financial results.",
          "4) Additionally, the trading window shall be closed in particular for a Designated Person or class of Designated Persons when the Compliance Officer determines that a Designated Person or class of Designated Persons can reasonably be expected to have possession of UPSI, for such periods as determined by the Compliance Officer. Designated Person or class of Designated Persons will receive a notification on such special blackout periods.",
          "5) The trading window may be re-opened after closure, not earlier than 48 hours after the UPSI in question becomes generally available.",
          "6) The trading window restriction shall not apply for below cases:"
        ],
        subsections: [
          {
            title: "Trading Window Restriction Exemptions",
            bullets: [
              "i. off-market, inter-se transfer between insiders who were in possession of the same UPSI without violating the policy and both parties had made a conscious and informed trade decision.",
              "ii. transaction carried out through the block deal window mechanism between persons who were in possession of the UPSI without violating the policy and both parties had made a conscious and informed trade decision.",
              "iii. transaction carried out pursuant to a statutory or regulatory obligation to carry out a bona fide transaction.",
              "iv. Transaction undertaken pursuant to the exercise of stock options in respect of which the exercise price was pre-determined in compliance with applicable regulations.",
              "v. Trades executed as per the trading plan set up in accordance with the policy.",
              "vi. Pledge of shares for a bona fide purpose such as raising of funds, subject to pre-clearance by the compliance officer.",
              "vii. Transactions undertaken in accordance to respective regulations made by SEBI, such as acquisition by conversion of warrants or debentures, subscribing to rights issue, further public issue, preferential allotment or tendering of shares in a buy-back offer, open offer, delisting offer."
            ]
          }
        ]
      },
      {
        title: "6. Pre-clearance of Trading",
        bullets: [
          "1) All Designated Persons who intend to trade in the securities of Virtual Galaxy Infotech Limited (either in their own name or in any immediate relative’s name) i.e. buy or sell securities during the trading window open period and if the value of the securities likely to be traded, whether in one transaction or a series of transactions over any calendar quarter, aggregates to a traded value in excess of Rs. 5,00,000/- (Rupees Five Lakhs Only), should pre-clear the transactions by making an application in the format set out in Annexure 1 to the Compliance Officer indicating the estimated number of units of securities that the designated person or immediate relative(s) intends to trade and such other details as specified in the form and also declare that the applicant is not in possession of unpublished price sensitive information as per Annexure 2.",
          "2) The Compliance Officer shall not approve any proposed Trade by Designated Person if the Compliance Officer determines that such Designated Person is in possession of UPSI even though the trading window is open.",
          "3) The Compliance Officer may, after being satisfied that the application and undertaking are true and accurate, approve Trading by a Designated Person, on the condition that the Trade so approved shall be executed within seven trading days following the date of approval.",
          "4) The Board of directors of the Company shall be the approving authority for approving the pre-clearance application of Compliance Officer and Managing Director of the Company.",
          "5) The Designated Person shall, within two Working days of the execution of the Trade, submit the details of such Trade to the Compliance Officer as per Annexure 3. In case the transaction is not undertaken, a report to that effect shall be filed in the said form.",
          "6) If the pre-cleared Trade is not executed within seven trading days after the approval is given, the Designated Person must secure pre-clearance of the transaction again.",
          "7) Pre-clearance of trades shall not be required for a trade executed as per an approved trading plan.",
          "8) A Designated Person who Trades in securities of the Company without complying with the pre-clearance procedure as envisaged in these Rules or gives false undertakings and/or makes misrepresentations in the undertakings executed by him/her while complying with the pre-clearance procedure shall be subjected to the penalties as envisaged in these Rules."
        ]
      },
      {
        title: "7. Additional trading restrictions on Designated Persons",
        bullets: [
          "1) No Insiders shall enter into derivative transactions in respect of the securities of the Company.",
          "2) All Designated Persons who Trade in the securities of the company shall not enter into a contra trade during the next six months following the prior transaction. In case of any contra trade be executed, inadvertently or otherwise, in violation of such a restriction, the profits from such trade shall be liable to be disgorged for remittance to SEBI for credit to the Investor Education and Protection Fund administered by SEBI.",
          "3) The above restriction on contra trade shall not apply in case of exercise/sale of ESOP shares provided the Designated Persons do not possess UPSI and the sale is executed when the trading window is open and after obtaining pre-clearance."
        ]
      },
      {
        title: "8. Trading Plan",
        bullets: [
          "1) A Designated Person shall be entitled to formulate a Trading Plan that complies with the SEBI Regulations (a “Trading Plan”) and present it to the Compliance Officer for approval and public disclosure. The trading plan may be executed only after the plan is approved by the Compliance officer and disclosed to the stock exchanges on which the securities of the Company are listed.",
          "2) Designated person shall not exercise any influence over the amount of Securities to be traded, the price at which they are to be traded, or the date of the trade. Designated person may delegate discretionary authority to his/her broker, but in no event Designated person may consult with the broker regarding executing transactions, or otherwise disclose information to the broker concerning the Company that might influence the execution of transactions, under the Trading Plan after it commences.",
          "3) The Trading Plan once approved shall be irrevocable and the Designated Person shall mandatorily have to implement the plan, without being entitled to either deviate from it or to execute any trade in the securities outside the scope of the Trading Plan. However, the implementation of the Trading Plan shall not be commenced, if at the time of formulation of the plan, the Designated Person is in possession of UPSI and the said information has not become generally available at the time of the commencement of implementation. The commencement of the Trading Plan shall be deferred until such UPSI becomes generally available information."
        ]
      },
      {
        title: "9. Penalty for Insider Trading",
        bullets: [
          "1) An Insider who acts in contravention of these Rules shall be liable to have his services or relationship with the Company, as the case may be, terminated.",
          "2) Directors, Officers and employees of the Company who violate these rules shall be subject to disciplinary action by the Company, which may include wage freeze, suspension, recovery, claw back etc. and ineligibility for future participation in the Company’s stock option plans or termination.",
          "3) The SEBI or any other appropriate regulatory authority may also be informed of the violation of these Rules so that appropriate action may be taken."
        ]
      },
      {
        title: "10. Disclosure requirements",
        subsections: [
          {
            title: "1. Initial Disclosure",
            paragraphs: [
              "Every person on appointment as key managerial personnel or a director of the company or upon becoming a promoter or member of the promoter group shall disclose his holding of securities of the company as on the date of appointment or becoming a promoter, to the company within seven days of such appointment or becoming a promoter, as per Form A set out in Annexure- 4."
            ],
            bullets: [
              "a. Designated persons shall be required to disclose names and Permanent Account Number or any other identifier authorized by law of the following persons to the company on an annual basis and as and when the information changes: immediate relatives, persons with whom such designated person(s) shares a material financial relationship, phone, mobile and cell numbers which are used by them.",
              "In addition, the names of educational institutions from which designated persons have graduated and names of their past employers shall also be disclosed on a one time basis.",
              "The term “material financial relationship” shall mean a relationship in which one person is a recipient of any kind of payment such as by way of a loan or gift from a designated person during the immediately preceding twelve months, equivalent to at least 25% of the annual income of such designated person but shall exclude relationships in which the payment is based on arm’s length transactions.",
              "b. Every company shall notify the particulars of such trading to the stock exchange on which the securities are listed within two trading days of receipt of the disclosure or from becoming aware of such information.",
              "Explanation. — It is clarified for the avoidance of doubts that the disclosure of the incremental transactions after any disclosure under this sub-regulation, shall be made when the transactions effected after the prior disclosure cross the threshold specified in clause (a) of sub-regulation (2)."
            ]
          },
          {
            title: "2. Disclosure to the Stock Exchange",
            text: "The Compliance Officer shall notify the stock exchanges, particulars of the Trades, within two trading days of the receipt of the Continual Disclosure or from becoming aware of such information."
          },
          {
            title: "3. Disclosures by other Connected Persons",
            text: "The Compliance Officer may, require any other Connected Person to disclose the holdings and trading in securities of the Company as per Form C set out in Annexure 6 at such frequency as he may determine."
          },
          {
            title: "4. Annual Disclosures",
            text: "All Designated Persons must make an annual disclosure of the number of Securities of the company held as on 31st March each year by them including details of purchase/sale of Securities of the Company during the financial year to the Compliance Officer. This disclosure must be made within 30 (thirty) days from the close of each financial year."
          }
        ]
      },
      {
        title: "11. Structured Digital Database (SDD)",
        text: "The Board shall ensure that a structured digital database is maintained containing the names of such persons or entities as the case may be with whom information is shared under SEBI (PIT) Regulation along with the Permanent Account Number or any other identifier authorized by law where Permanent Account Number is not available. Such databases shall be maintained with adequate internal controls and checks such as time stamping and audit trails to ensure non-tampering of the database. Even if the UPSI is shared only within the Company, then also Company is required to maintain this structured digital database. If Nominee Directors shares UPSI for legitimate purpose with the Bank/FIs, it would be considered as communication of UPSI. Accordingly, the same would be recorded in the SDD of the Company."
      },
      {
        title: "12. Miscellaneous",
        bullets: [
          "1) The Board of Directors shall be empowered to amend, modify, and interpret these Rules and such Rules shall be effective from such date that the Board may notify in this behalf.",
          "2) The Compliance Officer shall provide the Audit Committee of the Board, on a quarterly basis, all the details of Trading in securities by the Designated Persons including any violations of the Rules.",
          "3) The Compliance Officer shall maintain (i) an updated list of Designated Persons, (ii) records of disclosures and pre-clearance applications and undertakings for a period of five years and (iii) a confidential list of any ‘restricted securities’ to which the Compliance Officer may require Designated Persons to seek pre-clearance before Trading in such ‘restricted securities’.",
          "4) The Company shall require all Connected Persons to formulate and adhere to a code of conduct to achieve compliance with these Rules. In case such persons observe that there has been a violation of these Rules, then they shall inform the Board of Directors of the Company promptly.",
          "5) Any suspected violation of leak of unpublished price sensitive information or violation of this policy can be reported under whistle blower policy."
        ]
      },
      {
        title: "AMENDMENT",
        paragraphs: [
          "The Company is committed to continuously reviewing and updating its policies, and the Company therefore reserves the right to amend this Policy at any time, for any reason, subject to applicable law.",
          "These Rules are subject to the applicable prevailing law in relation to prevention of Insider Trading and if there is any inconsistency between any of the provisions of these Rules and applicable law, the applicable law shall prevail."
        ]
      },
      {
        title: "Annexure 1: APPLICATION FOR PRE-TRADING APPROVAL",
        paragraphs: [
          "To, The Compliance Officer, Virtual Galaxy Infotech Limited",
          "Pursuant to the SEBI (Prohibition of Insider Trading) Regulations, 2015 and the Company’s Insider Trading Policy, I seek approval to purchase/sell/subscribe Equity Shares of the Company as per details given below:"
        ],
        table: {
          headers: ["Sr No", "Details Required", "Input / Selection"],
          rows: [
            ["1", "Name of the applicant", ""],
            ["2", "Designation", ""],
            ["2A", "Relationship with the Applicant (Self/Immediate)", ""],
            ["3", "Number of securities held as on date", ""],
            ["4", "Folio No. / DPID/Client ID No.", ""],
            ["5", "The proposal is for", "(a) Purchase of securities\n(b) Subscription to securities\n(c) Sale of securities\n(d) Pledge"],
            ["6", "Proposed date of trading in securities", ""],
            ["7", "Estimated number of securities proposed to be purchased/subscribed/sold/pledged", ""],
            ["8", "Current market price (as on date of application)", ""],
            ["9", "Whether the proposed transaction will be through stock exchange or off-market trade", ""],
            ["10", "Folio No./ DPID/ Client ID No. where the securities will be credited/ debited", ""]
          ]
        },
        text: "I enclose herewith the Undertaking signed by me.\n\nSignature:\nName:\nDate:"
      },
      {
        title: "Annexure 2: UNDERTAKING TO BE ACCOMPANIED WITH THE APPLICATION FOR PRE-CLEARANCE",
        paragraphs: [
          "To, The Compliance Officer, Virtual Galaxy Infotech Limited",
          "I, ______________________ being a Designated Person of the company as per the Rules for Trading in the securities of Virtual Galaxy Infotech Limited residing at ______________________, am desirous of trading in shares of the Company as mentioned in my application dated ______________________ for pre-clearance of the transaction.",
          "I further declare that I am not in possession of any unpublished price sensitive information up to the time of signing this Undertaking.",
          "In the event that I have access to or receive any unpublished price sensitive information after the signing of this undertaking but before executing the transaction for which approval is sought, I shall inform the Compliance Officer of the same and shall completely refrain from trading in the securities of the Company until such information becomes public.",
          "I declare that I have not contravened the provisions of the Rules as notified by the Company from time to time.",
          "In the event of this transaction being in violation of the Rules or the applicable laws, (a) I will, unconditionally, release, hold harmless and indemnify to the fullest extent, the Company and its directors and officers, (the ‘indemnified persons’) for all losses, damages, fines, expenses, suffered by the indemnified persons, (b) I will compensate the indemnified persons for all expenses incurred in any investigation, defense, crisis management or public relations activity in relation to this transaction and (c) I authorize the Company to recover from me, the profits arising from this transaction and remit the same to the SEBI for credit of the Investor Education and Protection Fund administered by the SEBI.",
          "I undertake to submit the necessary report within two days of execution of the transaction / a ‘Nil’ report if the transaction is not undertaken.",
          "If approval is granted, I shall execute the trade within seven days of the receipt of approval failing which I shall seek pre-clearance afresh.",
          "I declare that I have made full and true disclosure in the matter.",
          "Signature: _____________________\nName: _____________________\nDate: _____________________"
        ]
      },
      {
        title: "Annexure 3: DISCLOSURE OF TRANSACTIONS",
        paragraphs: [
          "To, The Compliance Officer, Virtual Galaxy Infotech Limited",
          "I hereby inform that I:",
          "- Have not bought / sold/subscribed any securities of the Company",
          "- Have bought/sold/subscribed to ______________________ securities as mentioned below on ______________________ (date)",
          "(Strike out whichever is not applicable)"
        ],
        table: {
          headers: ["Name of holder", "No. of securities traded", "Bought / sold / subscribed", "DP ID / Client ID / Folio No.", "Price (Rs.)"],
          rows: [
            ["", "", "", "", ""],
            ["", "", "", "", ""]
          ]
        },
        text: "I declare that the above information is correct and that no provisions of the Company’s Rules and/or applicable laws/regulations have been contravened for effecting the above said transactions(s).\n\nSignature:\nName:\nDate:\nPlace:"
      },
      {
        title: "Annexure 4: FORM A (SEBI PIT Regulations Disclosure)",
        paragraphs: [
          "SEBI (Prohibition of Insider Trading) Regulations, 2015 [Regulation 7 (1)(b) read with Regulation 6(2)– Disclosure on becoming a director/ KMP/ Promoter]",
          "Name of the Company: Yash Optics & Lens Limited",
          "ISIN of the Company: ______________________",
          "Details of Securities held on appointment of Key Managerial Personnel (KMP) or Director or upon becoming a Promoter of a listed company and other such persons as mentioned in Regulation 6(2)."
        ],
        tables: [
          {
            title: "Securities Holdings Table",
            headerRows: [
              [
                { text: "Name, PAN, CIN/ DIN & Address with contact nos.", rowSpan: 2 },
                { text: "Category of Person (Promoters/ KMP/ Directors/ immediate relative to/ others etc.)", rowSpan: 2 },
                { text: "Date of Appointment of Director /KMP OR Date of Becoming Promoter", rowSpan: 2 },
                { text: "Securities held at the time of becoming Promoter/ appointment of Director/ KMP", colSpan: 2 },
                { text: "% of Shareholding", rowSpan: 2 }
              ],
              [
                { text: "Type of security (For eg. – Shares, Warrants, Convertible Debentures etc.)" },
                { text: "No." }
              ]
            ],
            rows: [
              ["", "", "", "", "", ""]
            ]
          },
          {
            title: "Details of Open Interest (OI) in derivatives held on appointment/becoming promoter",
            headerRows: [
              [
                { text: "Open Interest of the Future contracts held at the time of becoming Promoter/ appointment of Director/ KMP", colSpan: 3 },
                { text: "Open Interest of the Option contracts held at the time of becoming Promoter/ appointment of Director/ KMP", colSpan: 3 }
              ],
              [
                { text: "Contract specifications" },
                { text: "Number of units (contracts * lot size)" },
                { text: "Notional value in Rupee terms" },
                { text: "Contract specifications" },
                { text: "Number of units (contracts * lot size)" },
                { text: "Notional value in Rupee terms" }
              ]
            ],
            rows: [
              ["", "", "", "", "", ""]
            ]
          }
        ],
        text: "Note: In case of Options, notional value shall be calculated based on premium plus strike price of options.\n\nName & Signature:\nDesignation:\nDate:\nPlace:"
      },
      {
        title: "Annexure 5: FORM B (SEBI PIT Regulations Continual Disclosure)",
        paragraphs: [
          "SEBI (Prohibition of Insider Trading) Regulations, 2015 [Regulation 7(2) read with Regulation 6(2)–Continual disclosure]",
          "Name of the Company: Yash Optics & Lens Limited",
          "ISIN of the Company: ______________________",
          "Details of change in holding of Securities of Promoter, Employee or Director of a listed company and other such persons as mentioned in Regulation 6(2)."
        ],
        tables: [
          {
            title: "Securities Transactions Table",
            headerRows: [
              [
                { text: "Name, PAN, CIN/ DIN, & Address with contact nos.", rowSpan: 2 },
                { text: "Category of Person (Promoters/ KMP / Directors/ immediate relative to/ others etc.)", rowSpan: 2 },
                { text: "Securities held prior to acquisition/ disposal", colSpan: 2 },
                { text: "Securities acquired/ Disposed", colSpan: 4 },
                { text: "Securities held post acquisition/ disposal", colSpan: 2 },
                { text: "Date of allotment advice/ acquisition of shares/ sale of Shares specify", colSpan: 2 },
                { text: "Date of intimation to company", rowSpan: 2 },
                { text: "Mode of acquisition/ disposal (on market/ public/ rights/ preferential offer/ off-market/ Interse transfer ESOPs etc.)", rowSpan: 2 }
              ],
              [
                { text: "Type of security" },
                { text: "No. and % of shareholding" },
                { text: "Type of security" },
                { text: "No." },
                { text: "Value" },
                { text: "Transaction Type (Buy/ Sale/ Pledge / Revoke/ Invoke)" },
                { text: "Type of security" },
                { text: "No. and % of shareholding" },
                { text: "From" },
                { text: "To" }
              ]
            ],
            rows: [
              ["", "", "", "", "", "", "", "", "", "", "", ""]
            ]
          },
          {
            title: "Details of trading in derivatives of the company by Promoter, Employee or Director",
            headerRows: [
              [
                { text: "Trading in derivatives (Specify type of contract, Futures or Options etc)", colSpan: 6 },
                { text: "Exchange on which the trade was executed", rowSpan: 3 }
              ],
              [
                { text: "Type of contract", rowSpan: 2 },
                { text: "Contract specifications", rowSpan: 2 },
                { text: "Buy", colSpan: 2 },
                { text: "Sell", colSpan: 2 }
              ],
              [
                { text: "Notional Value" },
                { text: "Number of units (contracts * lot size)" },
                { text: "Notional Value" },
                { text: "Number of units (contracts * lot size)" }
              ]
            ],
            rows: [
              ["", "", "", "", "", "", ""]
            ]
          }
        ],
        text: "Note: In case of Options, notional value shall be calculated based on Premium plus strike price of options.\n\nName & Signature:\nDesignation:\nDate:\nPlace:"
      },
      {
        title: "Annexure 6: FORM C (SEBI PIT Regulations Connected Persons Disclosure)",
        paragraphs: [
          "Details of trading in securities by other connected persons as identified by the company"
        ],
        tables: [
          {
            title: "Securities Transactions Table",
            headerRows: [
              [
                { text: "Name, PAN, CIN/ DIN, & Address with contact nos. of other connected persons as identified by the Company", rowSpan: 2 },
                { text: "Connection With Company", rowSpan: 2 },
                { text: "Securities held prior to acquisition/ disposal", colSpan: 2 },
                { text: "Securities acquired/ Disposed", colSpan: 4 },
                { text: "Securities held post acquisition/ disposal", colSpan: 2 },
                { text: "Date of allotment advice/ acquisition of shares/ sale of shares specify", colSpan: 2 },
                { text: "Date of intimation to company", rowSpan: 2 },
                { text: "Mode of acquisition/ disposal (on market/ public/ rights/ Preferential offer/ off market/ Inter se transfer, ESOPs etc.)", rowSpan: 2 }
              ],
              [
                { text: "Type of security" },
                { text: "No. and % of shareholding" },
                { text: "Type of security" },
                { text: "No." },
                { text: "Value" },
                { text: "Transaction Type (Buy/ Sale/ Pledge / Revoke/ Invoke)" },
                { text: "Type of security" },
                { text: "No. and % of shareholding" },
                { text: "From" },
                { text: "To" }
              ]
            ],
            rows: [
              ["", "", "", "", "", "", "", "", "", "", "", ""]
            ]
          },
          {
            title: "Details of trading in derivatives by other connected persons",
            headerRows: [
              [
                { text: "Trading in derivatives (Specify type of contract, Futures or Options etc)", colSpan: 6 },
                { text: "Exchange on which the trade was executed", rowSpan: 3 }
              ],
              [
                { text: "Type of contract", rowSpan: 2 },
                { text: "Contract specifications", rowSpan: 2 },
                { text: "Buy", colSpan: 2 },
                { text: "Sell", colSpan: 2 }
              ],
              [
                { text: "Notional Value" },
                { text: "Number of units (contracts * lot size)" },
                { text: "Notional Value" },
                { text: "Number of units (contracts * lot size)" }
              ]
            ],
            rows: [
              ["", "", "", "", "", "", ""]
            ]
          }
        ],
        text: "Note: In case of Options, notional value shall be calculated based on premium plus strike price of options.\n\nName: ______________________\nSignature: ______________________\nDate: ______________________\nPlace: ______________________"
      }
    ]
  },
  {
    name: "Policy on Identification of Group Companies, Material Creditors and Material Litigations",
    icon: "bar-chart",
    sections: [
      {
        title: "A. INTRODUCTION",
        text: "This Policy has been formulated to define the materiality for identification of group companies, outstanding litigation and outstanding dues to creditors in respect of Virtual Galaxy Infotech Limited (the \"Company\"), pursuant to the disclosure requirements under Schedule VI of Securities and Exchange Board of India (Issue of Capital and Disclosure Requirements) Regulations, 2018, as amended from time to time (\"SEBI ICDR Regulations\")."
      },
      {
        title: "B. APPLICABILITY AND OBJECTIVE",
        paragraphs: [
          "This policy shall be called the 'Policy on Identification of Group Companies, Material Creditors and Material Litigations' (\"Policy\").",
          "The Board of Directors of the Company (\"Board\") at their meeting held on September 16, 2024 discussed and approved this Policy. This Policy shall be effective from the date of approval of this Policy by the Board.",
          "The Company has adopted this Policy for identification and determination of: (i) material creditors; (ii) material litigations and (iii) Group Companies pursuant to the provisions of SEBI ICDR Regulations, details of which shall be disclosed in the Offer Documents.",
          "\"Offer Documents\" means the Draft Red Herring Prospectus, the Red Herring Prospectus and the Prospectus to be filed by the Company in connection with the proposed initial public offering of its equity shares with the Securities and Exchange Board of India, Registrar of Companies, Mumbai(\"RoC\") and stock exchanges where the equity shares of the Company are proposed to be listed, as applicable.",
          "All other capitalised terms not specifically defined in this Policy shall have the same meanings ascribed to such terms in the Offer Documents.",
          "In this Policy, unless the context otherwise requires:"
        ],
        bullets: [
          "(i) Words denoting the singular shall include the plural and vice versa.",
          "(ii) References to the words \"include\" or \"including\" shall be construed without limitation."
        ]
      },
      {
        title: "C. POLICY PERTAINING TO THE IDENTIFICATION OF MATERIAL GROUP COMPANIES, MATERIAL CREDITORS AND MATERIAL LITIGATIONS",
        text: "The Policy with respect to the identification of the group companies, material creditors and material litigation shall be as follows:",
        subsections: [
          {
            title: "Identification of 'Material' Group Companies",
            paragraphs: [
              "Requirement:",
              "As per the requirements of the SEBI ICDR Regulations, Group Companies include such companies as covered under the applicable accounting standards (i.e. Indian Accounting Standard 24 (\"Ind AS 24\"), as applicable) as per the restated consolidated financial statements for three (3) financial years and any subsequent stub period preceding the date of the Offer Document, which is included in such Offer Document and also any other companies as considered material by the board of directors of the Company.",
              "Policy on Materiality:",
              "A company shall be considered material and disclosed as a Group Company if a material adverse change in such company, can lead to a material adverse effect on the Company, and its revenues and profitability. Other than companies which constitute part of the related parties of the Company in accordance with the applicable accounting standards (Ind AS 24) as per the latest audited and restated consolidated financial statements of the Company included in the Offer Documents.",
              "For avoidance of doubt, it is hereby clarified that the Subsidiaries shall not be considered as Group Companies for the purpose of disclosure in the Offer Documents."
            ]
          },
          {
            title: "Identification of Material Creditors",
            paragraphs: [
              "Requirement:",
              "As per the requirements of SEBI ICDR Regulations, the Company shall make relevant disclosures in the Offer Documents for outstanding dues to creditors:"
            ],
            bullets: [
              "(i) Based on the policy on materiality defined by the Board and as disclosed in the Offer Document, disclosure for such creditors;",
              "(ii) Consolidated information on outstanding dues to small scale undertakings and other creditors, separately giving details of number of cases and amount involved; and",
              "(iii) Complete details about outstanding dues to creditors as per (i) and (ii) above shall be disclosed on the webpage of the Company with a web link thereto in the offer document."
            ],
            subsections: [
              {
                title: "Policy on Materiality",
                text: "For identification of material creditors, in terms of point (1) above, a creditor of the Company, shall be considered to be material for the purpose of disclosure in the Offer Documents, if amounts due to such creditor exceeds 5% of the total consolidated trade payables as on the date of the restated consolidated financial statements for the last completed fiscal year included in the Offer Documents."
              }
            ]
          },
          {
            title: "Disclosures in Offer Document Regarding Creditors and SSIs and MSMEs",
            bullets: [
              "(i) For creditors identified as 'material' based on the abovementioned Policy, information on outstanding dues to such material creditors shall be disclosed in the Offer Documents along with details of number of creditors and amount involved on an aggregate basis, as of the date of the latest restated consolidated financial statements included in the Offer Document.",
              "(ii) For outstanding dues to small scale undertakings(\"SSI\") or a micro small or medium enterprise (“MSME”), the disclosure will be based on information available with the Company regarding the status of the creditors as an SSI or MSME as defined under Section 2 of the Micro, Small and Medium Enterprises Development Act, 2006, as amended, as has been relied upon by the statutory auditors in preparing their audit report. Information for such identified SSI or MSMEs creditors shall be provided in the Offer Documents in the following manner:"
            ],
            subsections: [
              {
                title: "",
                bullets: [
                  "a. aggregate amounts due to such creditors; and",
                  "b. aggregate number of such creditors."
                ],
                paragraphs: [
                  "as of the date of the latest restated consolidated financial statements included in the Offer Document."
                ]
              },
              {
                title: "",
                paragraphs: [
                  "(iii) In respect of all creditors of the Company, consolidated information on outstanding dues to the creditors shall be disclosed in the Offer Documents comprising the number of creditors and amount involved on an aggregate basis, as of the date of the latest restated consolidated financial statements included in the Offer Document.",
                  "The Company shall make relevant disclosures before the Audit Committee/ Board of directors as required by applicable law from time to time."
                ]
              }
            ]
          },
          {
            title: "Identification of Material Litigation",
            paragraphs: [
              "Requirement:",
              "As per the requirements of SEBI ICDR Regulations, the Company shall disclose all the litigation involving the Company, its subsidiaries, joint ventures, directors and group companies related to:"
            ],
            bullets: [
              "(i) All criminal proceedings;",
              "(ii) All actions by statutory / regulatory authorities;",
              "(iii) Taxation separate disclosures regarding claims related to direct and indirect taxes, in a consolidated manner giving details of number of cases and total amount; and",
              "(iv) Other pending litigations as per policy of materiality defined by the Board and disclosed in the Offer Documents."
            ],
            subsections: [
              {
                title: "",
                paragraphs: [
                  "Since the Promoter of the Company is the President of India, acting through the Ministry of Steel, Government of India, disclosures regarding the pending litigations involving the Promoters in accordance with the SEBI ICDR Regulations will not been provided in the Offer Documents."
                ]
              },
              {
                title: "Policy on Materiality",
                paragraphs: [
                  "Other than litigations mentioned in point (i) to (ii) above, any other pending litigation involving the Company, its directors, subsidiaries and joint ventures and group companies shall be considered \"material\" for the purpose of disclosure in the Offer Documents if:-"
                ],
                bullets: [
                  "(a) the monetary amount of claim made by or against the Company, its subsidiaries, joint ventures, directors and group companies in any such pending litigation is equal to or in excess of 1% of the Net worth of the Company as of March, 31, 2018 as provided under restated consolidated financial statement); or",
                  "(b) where the decision in one case is likely to affect the decision in similar cases, even though the amount involved in an individual litigation does not exceed 1% of the Net worth of the Company as of March, 31, 2018 as provided under restated consolidated financial statement); and",
                  "(c) any such litigation an adverse outcome of which would materially and adversely affect the Company's business, prospects, operations, financial position or reputation, irrespective of the amount involved in such litigation."
                ]
              }
            ]
          }
        ]
      },
      {
        title: "D. AMENDMENT",
        text: "The Board (including its duly constituted committees wherever permissible), shall have the power to amend any of the provisions of this Policy, substitute any of the provisions with a new provision or replace this Policy entirely with a new Policy. This Policy shall be subject to review/changes as may be deemed necessary and in accordance with regulatory amendments from time to time."
      }
    ]
  },
  {
    name: "Policy for determining Material Subsidiaries and Governance Framework in Relation Thereto",
    icon: "git-branch",
    sections: [
      {
        title: "A. PURPOSE AND SCOPE OF THE POLICY",
        paragraphs: [
          "The Company has formulated and adopted this policy (“Policy”) for determining material subsidiary companies in terms of regulation 16 (1) (c) of the SEBI (Listing Obligations and Disclosure Requirements), 2015 (“Listing Regulations”). The objective of this policy is to lay down criteria for identification and dealing with material subsidiaries and to formulate a governance framework for subsidiaries of the Company.",
          "All words and expressions used herein, unless defined herein, shall have the same meaning as respectively assigned to them, in the Applicable Law under reference.",
          "‘Applicable Law’ includes (a) the Companies Act, 2013 (the Act) including any statutory modification or re-enactment thereof and rules made thereunder; (b) the Listing Regulations; and (c) Indian Accounting Standards."
        ]
      },
      {
        title: "B. EFFECTIVE DATE",
        paragraphs: [
          "This Policy shall be effective from the date of approval of the Board of Directors.",
          "The policy was last reviewed by Board of Director on 16th September, 2024."
        ]
      },
      {
        title: "C. DEFINITIONS AND INTERPRETATIONS",
        text: "The Policy with respect to the identification of the group companies, material creditors and material litigation shall be as follows:",
        bullets: [
          "a) ‘Act’ shall mean the Companies Act, 2013 as amended from time to time and shall include Rules, Regulations and Secretarial Standards made there under or pursuant thereto;",
          "b) ‘Board’ shall mean Board of Directors of the Company;",
          "c) ‘Company’ shall mean Virtual Galaxy Infotech Limited;",
          "d) ‘Control’ shall include the right to appoint majority of the directors or to control the management or policy decisions exercisable by a person or persons acting individually or in concert, directly or indirectly, including by virtue of their shareholding or management rights or shareholder agreements or voting agreements or in any other manner;",
          "e) ‘Directors’ implies all the Directors on the Board;",
          "f) ‘ED’ implies Executive Director of the Company;",
          "g) ‘Independent Director’ or ‘ID’ implies a Non-Executive Director of the Company, other than a Nominee Director and who is neither a promoter nor belongs to the promoter group of the company, and who satisfies other criteria’s for independence mentioned in the Companies Act, 2013 and the SEBI LODR Regulations.",
          "h) ‘SEBI LODR Regulations’ implies the Securities and Exchange Board of India (Listing Obligations and Disclosure Requirements) Regulations, 2015 (as amended).",
          "i) ‘Material Subsidiary’ implies a subsidiary whose income or net worth exceeds 10% (unless specified otherwise, for any specific purpose, in terms of the provisions of applicable laws) of the consolidated income or net worth respectively, of the Company and its subsidiaries in the immediately preceding accounting year.",
          "j) ‘Policy’ implies this Policy on determination of Material Subsidiaries of the Company.",
          "k) ‘Significant Transaction or Arrangement’ implies any individual transaction or arrangement that exceeds or is likely to exceed 10% of the total revenues or total expenses or total assets or total liabilities, as the case may be, of the unlisted subsidiary for the immediately preceding accounting year.",
          "l) ‘Subsidiary’ shall mean as defined under the Companies Act, 2013 Act and the Rules made thereunder."
        ],
        paragraphs: [
          "Any other term not defined herein shall have the same meaning as defined in the Companies Act, 2013, the SEBI LODR Regulations, Securities Contract (Regulation) Act, 1956 or any other applicable law or regulation, as amended from time to time."
        ]
      },
      {
        title: "D. Restriction on disposal of shares of Material Subsidiary by the Company",
        text: "The Company shall not dispose off shares in its Material Subsidiary which would reduce its shareholding (either on its own or together with other subsidiaries) to less than 50% or cease the exercise of control over the subsidiary without passing a special resolution in its General Meeting except in such cases where divestment is made under a scheme of arrangement duly approved by a court/ tribunal or under a resolution plan duly approved under Section 31 of the Insolvency and Bankruptcy Code, 2016 and such an event is disclosed to the recognized stock exchanges within one day of the resolution plan being approved."
      },
      {
        title: "E. Restriction on disposal of assets of Material Subsidiary",
        text: "Selling, disposing and leasing of assets amounting to more than 20% of the assets of the Material Subsidiary on an aggregate basis during a financial year shall require a prior approval of shareholders by way of special resolution, unless the sale/ disposal/ lease is made under a scheme of arrangement duly approved by a court/ tribunal or under a resolution plan duly approved under section 31 of the Insolvency and Bankruptcy Code, 2016 and such an event is disclosed to the recognized stock exchanges within one day of the resolution plan being approved."
      },
      {
        title: "F. Requirement Regarding Material Non-Listed Indian Subsidiary",
        paragraphs: [
          "At least one Independent Director on the Board of the Company shall be a Director on the Board of the material non-listed Indian subsidiary company.",
          "The minutes of the Board Meetings of the Unlisted Subsidiary Companies shall be placed before the Board of the Company on a yearly basis."
        ]
      },
      {
        title: "G. Reporting and Disclosure",
        paragraphs: [
          "As prescribed in terms of the provisions of Clause 62(1A)(h) and other applicable provisions, if any, of the SEBI LODR Regulations, this Policy shall be disclosed on the website of the Company.",
          "The Company shall follow such other reporting and disclosure requirements as may be specified in terms of the provisions of the Companies Act, 2013 and the SEBI LODR Regulations, from time to time."
        ]
      },
      {
        title: "H. Review of the Policy",
        text: "This Policy shall be subject to review as may be deemed necessary as per any regulatory amendments."
      },
      {
        title: "I. Compliance Responsibility",
        text: "The Chief Financial Officer and Company Secretary of the Company shall be responsible for complying with the provisions of this Policy and other provisions of applicable laws in that regard. Further, he/she shall have the power to ask for any information or clarifications from the Management, for effective discharge of his/her responsibility (ies) in this regard."
      }
    ]
  },
  {
    name: "Policy on Corporate Social Responsibility (CSR)",
    icon: "heart",
    sections: [
      {
        title: "1. INTRODUCTION",
        text: "Virtual Galaxy Infotech Limited (\"the Company\") is committed to conducting its business in an ethical, transparent, and sustainable manner. The Company believes that long-term business success is closely linked with the well-being of society and the environment. This CSR Policy has been formulated in accordance with Section 135 of the Companies Act, 2013 and the Companies (Corporate Social Responsibility Policy) Rules, 2014 (as amended), to guide the Company's responsibility towards society."
      },
      {
        title: "2. CSR PHILOSOPHY & VISION",
        paragraphs: [
          "The Company's CSR vision is: \"To leverage technology, innovation, and resources to create inclusive growth, enhance the quality of life, and contribute to sustainable development of society and the environment.\"",
          "The Company aims to contribute beyond business by supporting initiatives that align with the Sustainable Development Goals (SDGs) and national priorities."
        ]
      },
      {
        title: "3. APPLICABILITY",
        text: "This Policy applies to all CSR projects and activities undertaken by the Company in India. These activities can be carried out either directly or through eligible implementing agencies, in compliance with applicable laws."
      },
      {
        title: "4. CSR OBJECTIVES",
        bullets: [
          "Comply with statutory requirements under Section 135 of the Companies Act, 2013.",
          "Define the focus areas for CSR initiatives.",
          "Establish a transparent governance and monitoring mechanism.",
          "Create long-term and measurable social impact.",
          "Engage employees and stakeholders in meaningful CSR programs."
        ]
      },
      {
        title: "5. CSR FOCUS AREAS",
        text: "In line with Schedule VII of the Companies Act, 2013, the Company will undertake CSR activities in the following priority areas:",
        subsections: [
          {
            title: "5.1 Education & Digital Literacy",
            bullets: [
              "Supporting primary, secondary, and higher education programs.",
              "Providing scholarships, learning materials, and infrastructure support.",
              "Promoting digital literacy and coding skills in rural schools.",
              "Establishing computer labs and e-learning platforms."
            ]
          },
          {
            title: "5.2 Healthcare & Sanitation",
            bullets: [
              "Organizing health camps, mobile medical units, and telemedicine.",
              "Promoting preventive healthcare, nutrition, and maternal & child health.",
              "Supporting sanitation drives, clean drinking water projects, and hygiene awareness."
            ]
          },
          {
            title: "5.3 Environment & Sustainability",
            bullets: [
              "Promoting renewable energy and energy efficiency projects.",
              "Supporting waste management, water conservation, and afforestation.",
              "Encouraging green IT initiatives and eco-friendly operations."
            ]
          },
          {
            title: "5.4 Livelihood & Skill Development",
            bullets: [
              "Vocational training for unemployed youth, women, and marginalized communities.",
              "Entrepreneurship and start-up support programs.",
              "Technology-enabled training for employability."
            ]
          },
          {
            title: "5.5 Women Empowerment & Social Inclusion",
            bullets: [
              "Programs for gender equality and women entrepreneurship.",
              "Awareness campaigns on safety, health, and financial literacy for women.",
              "Projects for the welfare of senior citizens and differently-abled persons."
            ]
          },
          {
            title: "5.6 Technology for Social Good",
            bullets: [
              "Developing and deploying digital solutions for governance, education, and rural development.",
              "Supporting NGOs and start-ups working on tech-based social solutions."
            ]
          },
          {
            title: "5.7 Disaster Relief & National Causes",
            bullets: [
              "Relief and rehabilitation during natural disasters, pandemics, and emergencies.",
              "Contributions to Government relief funds, armed forces welfare funds, and other approved initiatives."
            ]
          }
        ]
      },
      {
        title: "6. CSR BUDGET & EXPENDITURE",
        bullets: [
          "The Company shall allocate at least 2% of its average net profits of the three immediately preceding financial years towards CSR activities.",
          "Any surplus arising out of CSR projects shall not form part of the business profits of the Company.",
          "The unspent CSR amount (if any) shall be transferred to the Unspent CSR Account or specified funds as per Section 135 of the Act.",
          "Expenditure shall include project/program costs, monitoring costs, and administrative overheads (capped at 5% of total CSR expenditure)."
        ]
      },
      {
        title: "7. IMPLEMENTATION MECHANISM",
        paragraphs: [
          "CSR projects may be implemented through three methods:"
        ],
        bullets: [
          "Direct Implementation by the Company.",
          "Implementing Agencies – registered trust, society, or Section 8 company, having a valid CSR Registration Number with MCA.",
          "Collaborative Projects – with other companies for greater impact."
        ],
        text: "Preference shall be given to projects in and around the areas of the Company's operations."
      },
      {
        title: "8. CSR COMMITTEE",
        subsections: [
          {
            title: "8.1 Composition",
            paragraphs: [
              "The Board of Directors shall constitute a CSR Committee consisting of three or more directors, including at least one independent director (where applicable).",
              "Our Board has constituted the Corporate Social Responsibility Committee vide Board Resolution dated September 13, 2024 pursuant to section 135 of the Companies Act, 2013. The Committee met once during the FY 2024-2025 on 24th January, 2025."
            ],
            table: {
              headers: ["NAME OF MEMBERS", "DESIGNATION"],
              rows: [
                ["Mr. Avinash Shende", "CHAIRMAN"],
                ["Mr. Sachin Pande", "MEMBER"],
                ["Mr. Jaideep Pawar", "MEMBER"]
              ]
            }
          },
          {
            title: "8.2 Roles & Responsibilities",
            paragraphs: [
              "The scope of Corporate Social Responsibility Committee shall include but shall not be restricted to the following:"
            ],
            bullets: [
              "a) To formulate and recommend to the Board, a CSR policy which shall indicate the activities to be undertaken by the Company as per the Companies Act, 2013;",
              "b) To review and recommend the amount of expenditure to be incurred on company activities.",
              "c) To monitor the CSR policy of the Company from time to time.",
              "d) Any other matter as the CSR Committee may deem appropriate after approval of the Board of Directors or as directed by the Board of Directors from time to time."
            ]
          }
        ]
      },
      {
        title: "9. MONITORING, EVALUATION & REPORTING",
        subsections: [
          {
            title: "9.1 Monitoring Mechanism",
            bullets: [
              "The CSR Committee is responsible for monitoring project progress through quarterly reports.",
              "Evaluation methods include site visits, third-party audits, and beneficiary feedback.",
              "Key Performance Indicators (KPIs) are to be defined for each project."
            ]
          },
          {
            title: "9.2 Reporting",
            bullets: [
              "The Company must include an Annual CSR Report in the Board's Report, following the format prescribed under the CSR Rules.",
              "An impact assessment is mandated for projects with a value exceeding ₹1 crore."
            ]
          }
        ]
      },
      {
        title: "10. GOVERNANCE & TRANSPARENCY",
        bullets: [
          "CSR disclosures, including the CSR Policy, projects, and the annual report on CSR, must be made available on the Company's website.",
          "The Board is responsible for ensuring integrity, transparency, and accountability in all CSR operations."
        ]
      },
      {
        title: "11. EMPLOYEE ENGAGEMENT",
        text: "The Company encourages employees to actively participate in CSR projects through volunteering programs, donation drives, and knowledge-sharing initiatives."
      },
      {
        title: "12. AMENDMENTS",
        text: "The Company's CSR Policy can be amended by the Board of Directors based on recommendations from the CSR Committee, changes in law, or evolving CSR priorities."
      },
      {
        title: "13. EFFECTIVE DATE",
        text: "This Policy becomes effective from the date of its approval by the Board of Directors of Virtual Galaxy Infotech Limited."
      }
    ]
  }
];

const ANNUAL_RETURNS_DATA = [
  { title: "Form MGT-7 for the financial year ending on 2025", link: "/assets/.pdf/Policies/Form MGT-7 For The Financial Year Ending On 2025.pdf" },
  { title: "Form MGT-7 for the financial year ending on 2024", link: "/assets/.pdf/Policies/Form MGT-7 for the financial year ending on 2024.pdf" },
  { title: "Form MGT-7 for the financial year ending on 2023", link: "/assets/.pdf/Policies/Form MGT-7 for the financial year ending on 2023.pdf" },
  { title: "Form MGT-7 for the financial year ending on 2022", link: "/assets/.pdf/Policies/Form MGT-7 for the financial year ending on 2022.pdf" },
  { title: "Form MGT-7 for the financial year ending on 2020", link: "/assets/.pdf/Policies/Form MGT-7 for the Financial year ending on 2020.pdf" }
];

const getCompanyIcon = (iconName) => {
  switch (iconName) {
    case 'trending-up':
      return <TrendingUp className="company-icon-svg" />;
    case 'shield':
      return <ShieldCheck className="company-icon-svg" />;
    case 'book-open':
      return <BookOpen className="company-icon-svg" />;
    case 'users':
      return <Users className="company-icon-svg" />;
    case 'calendar':
      return <Calendar className="company-icon-svg" />;
    case 'building':
    case 'building-2':
    default:
      return <Building2 className="company-icon-svg" />;
  }
};

const getPolicyIcon = (iconName) => {
  switch (iconName) {
    case 'percent':
      return <Percent className="policy-icon-svg" />;
    case 'award':
      return <Award className="policy-icon-svg" />;
    case 'users':
      return <Users className="policy-icon-svg" />;
    case 'megaphone':
      return <Megaphone className="policy-icon-svg" />;
    case 'shield-check':
      return <ShieldCheck className="policy-icon-svg" />;
    case 'file-text':
      return <FileText className="policy-icon-svg" />;
    case 'credit-card':
      return <CreditCard className="policy-icon-svg" />;
    case 'handshake':
      return <Handshake className="policy-icon-svg" />;
    case 'folder-open':
      return <FolderOpen className="policy-icon-svg" />;
    case 'lock':
      return <Lock className="policy-icon-svg" />;
    case 'bar-chart':
      return <BarChart3 className="policy-icon-svg" />;
    case 'git-branch':
      return <GitBranch className="policy-icon-svg" />;
    case 'heart':
      return <Heart className="policy-icon-svg" />;
    case 'file-code':
    default:
      return <FileCode className="policy-icon-svg" />;
  }
};

const renderTable = (tableData) => {
  if (!tableData) return null;
  return (
    <div className="policy-table-container">
      <table className="policy-table">
        <thead>
          {tableData.headerRows ? (
            tableData.headerRows.map((hRow, hrIdx) => (
              <tr key={hrIdx}>
                {hRow.map((hCell, hcIdx) => {
                  const isObj = typeof hCell === 'object' && hCell !== null;
                  return (
                    <th
                      key={hcIdx}
                      colSpan={isObj ? hCell.colSpan : 1}
                      rowSpan={isObj ? hCell.rowSpan : 1}
                    >
                      {isObj ? hCell.text : hCell}
                    </th>
                  );
                })}
              </tr>
            ))
          ) : (
            <tr>
              {tableData.headers && tableData.headers.map((h, hIdx) => (
                <th key={hIdx}>{h}</th>
              ))}
            </tr>
          )}
        </thead>
        <tbody>
          {tableData.rows && tableData.rows.map((row, rIdx) => (
            <tr key={rIdx}>
              {row.map((col, cIdx) => {
                const isObj = typeof col === 'object' && col !== null;
                return (
                  <td
                    key={cIdx}
                    colSpan={isObj ? col.colSpan : 1}
                    rowSpan={isObj ? col.rowSpan : 1}
                  >
                    {isObj ? col.text : col}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

function InvestorSingle({ slug }) {
  const investorData = INVESTORS_DATA.find(i => i.slug === slug);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [activeGovernanceTab, setActiveGovernanceTab] = useState("policies");

  if (!investorData) {
    return null;
  }

  const isGroupCompanies = slug === 'promotion-related-entities';
  const isFinancialReports = slug === 'financial-information-reports';
  const isCorporateGovernance = slug === 'corporate-governance';
  const isAnalystMeet = slug === 'investor-analyst-meet';
  const isAnnualReports = slug === 'annual-reports';
  const isNoticeOfMeeting = slug === 'notice-of-meetings';
  const isDividend = slug === 'dividend';
  const isAnnouncement = slug === 'announcement';
  // const isAnnouncement = slug === '' || slug === '';
  const isDocDashboard = isGroupCompanies || isFinancialReports;
  const dashboardData = isGroupCompanies ? GROUP_COMPANIES_DATA : FINANCIAL_REPORTS_DATA;

  if (slug === 'investor-contacts-grievances') {
    return <InvestorContacts />;
  }

  if (slug === 'material-creditors') {
    return <MaterialCreditors />;
  }

  if (slug === 'preferential-allotment-warrants') {
    return <PreferentialWarrants />;
  }

  if (slug === 'material-contracts') {
    return <MaterialContracts />;
  }

  if (slug === 'material-documents') {
    return <MaterialDocuments />;
  }

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
                  <li className="breadcrumb-item"><Link href="/" className="text-secondary hover:text-[#ff4d00] transition-colors no-underline">Home</Link></li>
                  <li className="breadcrumb-item"><Link href="/investors/board-and-management" className="text-secondary hover:text-[#ff4d00] transition-colors no-underline">Investors</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <span className="text-primary font-weight-bold">
                      {isCorporateGovernance ? "Policies" : investorData.title}
                    </span>
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          {isAnnouncement ? (
            /* Centered Announcement Hero */
            <div className="row align-items-center mt-3">

              {/* Left Column: Text */}
              <div className="col-lg-7 col-12 text-left">

                <motion.div
                  className="tag-badge"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  <span className="tag-dot tag-dot-pulse" />
                  <span className="tag-text">
                    Investor Relations
                  </span>
                </motion.div>

                <motion.h1
                  className="hero-title"
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  {isCorporateGovernance ? (
                    <>
                      <span>Corporate</span>{' '}
                      <span className="highlight">Governance</span>
                    </>
                  ) : (
                    <>
                      <span>{investorData.title.split(' ')[0]}</span>{' '}
                      <span className="highlight">
                        {investorData.title.split(' ').slice(1).join(' ')}
                      </span>
                    </>
                  )}

                  <motion.div
                    className="hero-title-underline"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 40, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  />
                </motion.h1>

                <motion.p
                  className="hero-desc"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.25,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  {isCorporateGovernance
                    ? "Our policies ensure transparency, accountability, and responsible governance across all operations."
                    : investorData.desc
                  }
                </motion.p>

              </div>


              {/* Right Column: Logo / Illustration */}
              <div
                className="col-lg-5 col-12 text-center mt-4 mt-lg-0"
              >
                {investorData.logo && (
                  <motion.div
                    className="hero-img-wrap"
                    style={{ maxWidth: '100%' }}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.1,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  >
                    <img
                      src={investorData.logo}
                      alt={`${investorData.title} Logo`}
                    />
                  </motion.div>
                )}
              </div>

            </div>
          ) : (
            /* Default Left-Aligned Hero */
            <div className="row align-items-center mt-3">
              {/* Left Column: Text */}
              <div className="col-lg-7 col-12 text-left effect-fade-up">
                <div className="tag-badge">
                  <span className="tag-dot" />
                  <span className="tag-text">Investor Relations</span>
                </div>
                <h1 className="hero-title">
                  {isCorporateGovernance ? (
                    <>
                      <span>Corporate Governance</span>
                    </>
                  ) : (
                    <>
                      <span>{investorData.title.split(' ')[0]}</span>{' '}
                      <span className="highlight">{investorData.title.split(' ').slice(1).join(' ')}</span>
                    </>
                  )}
                  <div className="hero-title-underline"></div>
                </h1>
                <p className="hero-desc">
                  {isCorporateGovernance
                    ? "Our policies ensure transparency, accountability, and responsible governance across all operations."
                    : investorData.desc
                  }
                </p>
              </div>

              {/* Right Column: Logo/Illustration */}
              <div className="col-lg-5 col-12 text-center mt-4 mt-lg-0 effect-fade-up" style={{ animationDelay: '0.1s' }}>
                {investorData.logo && (
                  <div className="hero-img-wrap" style={{ maxWidth: '100%' }}>
                    <img src={investorData.logo} alt={`${investorData.title} Logo`} />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Main Grid / Disclosures Section */}

      <section className="explore-section section-spacing-lg">
        <div className="container">

          <div className="explore-divider"></div>

          {isDividend ? (
            <Dividend />
          ) : isAnnouncement ? (
            <Announcement />
          ) : isAnnualReports ? (
            <AnnualReports />
          ) : isNoticeOfMeeting ? (
            <NoticeOfMeeting />
          ) : isAnalystMeet ? (
            <AnalystMeetContent />
          ) : isDocDashboard ? (

            <div className="promotion-related-entities-container">

              <div className="company-rows-list">

                {dashboardData.map((group, idx) => (

                  <div
                    key={idx}
                    className="company-row-card effect-fade-up"
                    style={{
                      animationDelay: `${idx * 0.05}s`
                    }}
                  >

                    {/* Company Name */}
                    <div className="company-info-col">

                      <div className={`company-brand-icon theme-${group.theme}`}>
                        {getCompanyIcon(group.icon)}
                      </div>

                      <h3 className="company-name">
                        {group.name}
                      </h3>

                    </div>


                    {/* Divider */}
                    <div className="company-vertical-divider"></div>


                    {/* Documents */}
                    <div className="company-docs-col">

                      {group.docs?.map((doc, docIdx) => (

                        <div
                          key={docIdx}
                          className="fy-doc-card"
                        >

                          <div className="fy-doc-info">

                            <span className="fy-doc-year">
                              {doc.year}
                            </span>

                            <span className="fy-doc-label">
                              PDF
                            </span>

                          </div>

                          <a
                            href={doc.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="fy-doc-download-btn"
                            aria-label={`Open ${doc.year}`}
                          >
                            <FileText className="fy-download-icon" />
                          </a>

                        </div>

                      ))}

                    </div>

                  </div>

                ))}

              </div>

            </div>

          ) : isCorporateGovernance ? (


            /* =========================================
               CORPORATE GOVERNANCE
            ========================================= */

            <div className="policies-page-container">

              {/* CORPORATE GOVERNANCE TABS */}

              <div className="governance-tabs">

                <button
                  type="button"
                  className={`governance-tab ${activeGovernanceTab === "policies"
                    ? "active"
                    : ""
                    }`}
                  onClick={() => {
                    setActiveGovernanceTab("policies");
                    setActiveAccordion(null);
                  }}
                >
                  Company Policies
                </button>

                <button
                  type="button"
                  className={`governance-tab ${activeGovernanceTab === "annual"
                    ? "active"
                    : ""
                    }`}
                  onClick={() => {
                    setActiveGovernanceTab("annual");
                    setActiveAccordion(null);
                  }}
                >
                  Annual Returns
                </button>

                <button
                  type="button"
                  className={`governance-tab ${activeGovernanceTab === "shareholding-pattern"
                    ? "active"
                    : ""
                    }`}
                  onClick={() => {
                    setActiveGovernanceTab("shareholding-pattern");
                    setActiveAccordion(null);
                  }}
                >
                  Shareholding Pattern
                </button>

              </div>


              {/* =========================================
                 COMPANY POLICIES
              ========================================= */}

              {activeGovernanceTab === "policies" && (

                <div className="policies-section-block">

                  <h3 className="explore-label text-left mb-3">
                    Company Policies
                  </h3>

                  <div className="policies-accordion-list">

                    {POLICIES_DATA.map((policy, idx) => {

                      const isOpen =
                        activeAccordion === idx;

                      return (

                        <div
                          key={idx}
                          className={`policy-accordion-card effect-fade-up ${isOpen ? "is-open" : ""
                            }`}
                          style={{
                            animationDelay: `${idx * 0.04}s`
                          }}
                        >

                          {/* POLICY HEADER */}

                          <button
                            type="button"
                            className="policy-accordion-header"
                            onClick={() =>
                              setActiveAccordion(
                                isOpen ? null : idx
                              )
                            }
                            aria-expanded={isOpen}
                          >

                            <div className="policy-header-left">

                              <div className="policy-brand-icon-wrap">
                                {getPolicyIcon(policy.icon)}
                              </div>

                              <span className="policy-title-text">
                                {policy.name}
                              </span>

                            </div>

                            <div className="policy-header-right">

                              {isOpen ? (

                                <ChevronUp className="w-5 h-5 accordion-chevron-icon" />

                              ) : (

                                <ChevronDown className="w-5 h-5 accordion-chevron-icon" />

                              )}

                            </div>

                          </button>


                          {/* POLICY CONTENT */}

                          <AnimatePresence initial={false}>

                            {isOpen && (

                              <motion.div
                                initial="collapsed"
                                animate="open"
                                exit="collapsed"
                                variants={{
                                  open: {
                                    opacity: 1,
                                    height: "auto"
                                  },
                                  collapsed: {
                                    opacity: 0,
                                    height: 0
                                  }
                                }}
                                transition={{
                                  duration: 0.3,
                                  ease: [
                                    0.04,
                                    0.62,
                                    0.23,
                                    0.98
                                  ]
                                }}
                                className="policy-accordion-content-wrap"
                              >

                                <div className="policy-accordion-content">

                                  {policy.sections &&
                                    policy.sections.map(
                                      (sec, secIdx) => (

                                        <div
                                          key={secIdx}
                                          className="policy-section-block-inner mb-4"
                                        >

                                          {/* SECTION TITLE */}

                                          {sec.title && (
                                            <h4 className="policy-section-title">
                                              {sec.title}
                                            </h4>
                                          )}


                                          {/* SECTION TEXT */}

                                          {sec.text && (
                                            <p className="policy-section-text">
                                              {sec.text}
                                            </p>
                                          )}


                                          {/* PARAGRAPHS */}

                                          {sec.paragraphs &&
                                            sec.paragraphs.map(
                                              (p, pIdx) => (

                                                <p
                                                  key={pIdx}
                                                  className="policy-section-text"
                                                >
                                                  {p}
                                                </p>

                                              )
                                            )}


                                          {/* BULLETS */}

                                          {sec.bullets &&
                                            sec.bullets.length > 0 && (

                                              <ul
                                                className="policy-section-bullets"
                                                style={{
                                                  listStyleType:
                                                    /^\d+\.\s*/.test(
                                                      sec.bullets[0]
                                                    )
                                                      ? "none"
                                                      : "disc",

                                                  paddingLeft:
                                                    /^\d+\.\s*/.test(
                                                      sec.bullets[0]
                                                    )
                                                      ? "0"
                                                      : "20px"
                                                }}
                                              >

                                                {sec.bullets.map(
                                                  (
                                                    bullet,
                                                    bIdx
                                                  ) => (

                                                    <li
                                                      key={bIdx}
                                                      className="policy-section-bullet-item"
                                                    >
                                                      {bullet}
                                                    </li>

                                                  )
                                                )}

                                              </ul>

                                            )}


                                          {/* TABLE */}

                                          {sec.table &&
                                            renderTable(
                                              sec.table
                                            )}


                                          {/* MULTIPLE TABLES */}

                                          {sec.tables &&
                                            sec.tables.map(
                                              (t, tIdx) => (

                                                <div
                                                  key={tIdx}
                                                  className="policy-table-wrapper mb-4"
                                                >

                                                  {t.title && (
                                                    <div
                                                      className="policy-table-title font-weight-bold text-dark mt-3 mb-2"
                                                      style={{
                                                        fontSize:
                                                          "13px"
                                                      }}
                                                    >
                                                      {t.title}
                                                    </div>
                                                  )}

                                                  {renderTable(t)}

                                                </div>

                                              )
                                            )}


                                          {/* SUBSECTIONS */}

                                          {sec.subsections &&
                                            sec.subsections.map(
                                              (
                                                sub,
                                                subIdx
                                              ) => (

                                                <div
                                                  key={subIdx}
                                                  className="policy-subsection-block mt-3"
                                                >

                                                  {sub.title && (
                                                    <h5 className="policy-subsection-title">
                                                      {sub.title}
                                                    </h5>
                                                  )}


                                                  {sub.text && (
                                                    <p className="policy-section-text">
                                                      {sub.text}
                                                    </p>
                                                  )}


                                                  {sub.paragraphs &&
                                                    sub.paragraphs.map(
                                                      (
                                                        sp,
                                                        spIdx
                                                      ) => (

                                                        <p
                                                          key={
                                                            spIdx
                                                          }
                                                          className="policy-section-text"
                                                        >
                                                          {sp}
                                                        </p>

                                                      )
                                                    )}


                                                  {sub.bullets &&
                                                    sub.bullets.length >
                                                    0 && (

                                                      <ul
                                                        className="policy-section-bullets"
                                                        style={{
                                                          listStyleType:
                                                            /^\d+\.\s*/.test(
                                                              sub
                                                                .bullets[0]
                                                            )
                                                              ? "none"
                                                              : "disc",

                                                          paddingLeft:
                                                            /^\d+\.\s*/.test(
                                                              sub
                                                                .bullets[0]
                                                            )
                                                              ? "0"
                                                              : "20px"
                                                        }}
                                                      >

                                                        {sub.bullets.map(
                                                          (
                                                            sBullet,
                                                            sbIdx
                                                          ) => (

                                                            <li
                                                              key={
                                                                sbIdx
                                                              }
                                                              className="policy-section-bullet-item"
                                                            >
                                                              {
                                                                sBullet
                                                              }
                                                            </li>

                                                          )
                                                        )}

                                                      </ul>

                                                    )}


                                                  {sub.table &&
                                                    renderTable(
                                                      sub.table
                                                    )}


                                                  {sub.tables &&
                                                    sub.tables.map(
                                                      (
                                                        t,
                                                        tIdx
                                                      ) => (

                                                        <div
                                                          key={
                                                            tIdx
                                                          }
                                                          className="policy-table-wrapper mb-4"
                                                        >

                                                          {t.title && (
                                                            <div
                                                              className="policy-table-title font-weight-bold text-dark mt-3 mb-2"
                                                              style={{
                                                                fontSize:
                                                                  "13px"
                                                              }}
                                                            >
                                                              {
                                                                t.title
                                                              }
                                                            </div>
                                                          )}

                                                          {renderTable(
                                                            t
                                                          )}

                                                        </div>

                                                      )
                                                    )}

                                                </div>

                                              )
                                            )}

                                        </div>

                                      )
                                    )}

                                </div>

                              </motion.div>

                            )}

                          </AnimatePresence>

                        </div>

                      );

                    })}

                  </div>

                </div>

              )}


              {/* =========================================
                 ANNUAL RETURNS
              ========================================= */}

              {activeGovernanceTab === "annual" && (

                <div className="policies-section-block">

                  <h3 className="explore-label text-left mb-3">
                    Annual Returns
                  </h3>

                  <div className="annual-returns-list">

                    {ANNUAL_RETURNS_DATA.map(
                      (item, idx) => (

                        <div
                          key={idx}
                          className="return-row-card effect-fade-up"
                          style={{
                            animationDelay: `${idx * 0.08}s`
                          }}
                        >

                          <div className="return-row-left">

                            <div className="return-doc-icon">
                              <FileText className="w-6 h-6" />
                            </div>

                            <span className="return-title-text">
                              {item.title}
                            </span>

                          </div>

                          <div className="return-row-right">

                            <a
                              href={item.link}
                              className="btn-return-download"
                              target="_blank"
                              rel="noopener noreferrer"
                            >

                              <span className="btn-return-download-icon-wrap">
                                <Download className="w-3.5 h-3.5" />
                              </span>

                              Download

                            </a>

                          </div>

                        </div>

                      )
                    )}

                  </div>

                </div>

              )}

              {/* =========================================
                  SHAREHOLDING PATTERN
                  ========================================= */}

              {activeGovernanceTab === "shareholding-pattern" && (
                <ShareholdingPattern />
              )}

            </div>

          ) : investorData.gridItems &&
            investorData.gridItems.length > 0 ? (

            /* =========================================
               NORMAL INVESTOR GRID
            ========================================= */

            <div>

              <div className="explore-label">
                Governance Options
              </div>

              <h2 className="explore-title">
                Select a section to view detailed corporate
                registers,
                <br />
                committee allocations, and compliance
                documents.
              </h2>

              <div className="row justify-content-center g-4">

                {investorData.gridItems.map(
                  (item, index) => (

                    <div
                      className="col-md-6 col-lg-3 mb-24 effect-fade-up"
                      style={{
                        animationDelay: `${index * 0.08}s`
                      }}
                      key={index}
                    >

                      <a
                        href={item.link}
                        className="mgmt-card"
                        style={{
                          padding: "30px 24px"
                        }}
                      >

                        <div
                          className="mgmt-card-title"
                          style={{
                            marginTop: "0",
                            fontSize: "16px"
                          }}
                        >
                          {item.title}
                        </div>

                        <div
                          className="mgmt-card-action"
                          style={{
                            marginTop: "16px"
                          }}
                        >
                          View Document
                        </div>

                      </a>

                    </div>

                  )
                )}

              </div>

            </div>

          ) : (

            /* =========================================
               NO DOCUMENTS FALLBACK
            ========================================= */

            <div>

              <div className="explore-label">
                Governance Disclosures
              </div>

              <h2 className="explore-title">
                Official corporate reports, statutory
                filings, and compliance disclosures
                for Virtual Galaxy Infotech Limited.
              </h2>

              <div className="row justify-content-center effect-fade-up">

                <div className="col-lg-8">

                  <div
                    className="p-4 mt-4 bg-light border border-slate-100 text-center"
                    style={{
                      borderRadius: "20px"
                    }}
                  >

                    <p
                      className="text-secondary mb-0"
                      style={{
                        fontSize: "14.5px",
                        lineHeight: "1.6"
                      }}
                    >
                      There are currently no active
                      document files listed in this
                      category. For archival records,
                      statutory copies, or specific
                      queries, please contact our
                      Compliance Officer at the Investor
                      Relations office.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          )}

        </div>
      </section>

      <ContactSection />

    </div>
  );
}

export default InvestorSingle;
