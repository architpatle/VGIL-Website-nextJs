"use client";

import React, { useEffect, useState } from 'react';
import './ProductSingle.css';
import Link from "next/link";
import {
  getCountries,
  getCountryCallingCode,
} from 'react-phone-number-input';

import countryLabels from 'react-phone-number-input/locale/en';
import flags from 'react-phone-number-input/flags';
import { PRODUCTS_DATA } from '../data/productsData';
import NotFound from './NotFound';
import CTABannerSection from '../components/services/CTABannerSection';

import overviewImg from '../assets/Products-img/banker-img/overview.png';
import abstractWorldMapImg from '../assets/Products-img/image.png';
import loanOriginationImg from '../assets/Products-img/banker-img/loan-origination-system.jpg';
import loanManagementImg from '../assets/Products-img/banker-img/loan-management-system.jpg';
import npaManagementImg from '../assets/Products-img/banker-img/npa-management-system.jpg';
import reportingImg from '../assets/Products-img/banker-img/reporting-and-analytics.jpg';

import imisCreditMgmtImg from '../assets/Products-img/imis-solution/credit-management.jpg';
import imisCrmImg from '../assets/Products-img/imis-solution/customer-relation-management.jpg';
import imisHrImg from '../assets/Products-img/imis-solution/human-resource-management.jpg';
import imisOverviewImg from '../assets/Products-img/imis-solution/overview.jpg';
import imisProcurementImg from '../assets/Products-img/imis-solution/procurement-management.jpg';
import imisFinancialMgmtImg from '../assets/Products-img/imis-solution/financial-management.jpg';

import agriOverviewImg from '../assets/Products-img/Agriculture-img/overview.jpg';
import agriAuctionMgmtImg from '../assets/Products-img/Agriculture-img/auction-management.jpg';
import agriFinancialMgmtImg from '../assets/Products-img/Agriculture-img/financial-management.jpg';
import agriRealtimeTrackingImg from '../assets/Products-img/Agriculture-img/realtime-tracking.jpg';

import ibsOverviewImg from '../assets/Products-img/Agriculture-img/ERP-Solution/overview.jpg';
import ibsInventoryImg from '../assets/Products-img/Agriculture-img/ERP-Solution/inventory-module.jpg';
import ibsAccountingImg from '../assets/Products-img/Agriculture-img/ERP-Solution/finance-resource-management.jpg';
import ibsProductionImg from '../assets/Products-img/Agriculture-img/ERP-Solution/manufacturing-resource-planning.jpg';
import ibsAnalyticsImg from '../assets/Products-img/Agriculture-img/ERP-Solution/analytics.jpg';
import ibsSalesImg from '../assets/Products-img/Agriculture-img/ERP-Solution/Sales.jpg'

import dpOverviewImg from '../assets/Products-img/Digital-payment/overview.jpg';
import dpCashlessImg from '../assets/Products-img/Digital-payment/cashless-payments.jpg';
import dpInvestmentImg from '../assets/Products-img/Digital-payment/instant-investment.jpg';
import dpRemittanceImg from '../assets/Products-img/Digital-payment/immediate-remittances.jpg';
import dpUtilityImg from '../assets/Products-img/Digital-payment/utility-payments.jpg';
import dpDigitalWallet from '../assets/Products-img/Digital-payment/digital-wallet.jpg';
import dpPOSMachine from '../assets/Products-img/Digital-payment/pos-machine.jpg';
import dpSoundBox from '../assets/Products-img/Digital-payment/sound-box.jpg';


import autopsyOverviewImg from '../assets/Products-img/e-autopsy-img/overview.jpg';
import autopsyRecordMgmtImg from '../assets/Products-img/e-autopsy-img/record-management.jpg';
import autopsyWorkflowMgmtImg from '../assets/Products-img/e-autopsy-img/workflow-management.jpg';
import autopsyDataAnalysisImg from '../assets/Products-img/e-autopsy-img/data-analysis-and-reports.jpg';

import csOverviewImg from '../assets/Products-img/Cyber-sentinel/overview.jpg';
import csRealtimeImg from '../assets/Products-img/Cyber-sentinel/realtime-monitoring.jpg';
import csAutomationImg from '../assets/Products-img/Cyber-sentinel/automation.jpg';
import csAnalysisImg from '../assets/Products-img/Cyber-sentinel/analysis.jpg';

// Import Product Background Images
import bgAutopsy from '../assets/home/hero-bg-img.jpg';
import bgCoreBanking from '../assets/home/hero-bg-img.jpg';
import bgCyberSecurity from '../assets/home/hero-bg-img.jpg';
import bgEapmc from '../assets/home/hero-bg-img.jpg';
import bgErp from '../assets/home/hero-bg-img.jpg';
import bgMis from '../assets/home/hero-bg-img.jpg';
import bgVpay from '../assets/home/hero-bg-img.jpg';

function BrochureCountryDropdown({
  value,
  onChange,
  options,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const selected = options.find(
    (country) => country.code === value
  );

  const handleSelect = (country) => {
    onChange(country.code);
    setIsOpen(false);
  };

  return (
    <div
      className={`brochure-country-dropdown ${isOpen ? 'is-open' : ''
        }`}
    >
      <button
        type="button"
        className="brochure-country-dropdown-trigger"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="brochure-country-selected-content">

          {selected && (
            <span className="brochure-country-flag">
              {flags[selected.code] &&
                React.createElement(flags[selected.code])}
            </span>
          )}

          {selected && (
            <span className="brochure-country-selected-code">
              +{selected.phone}
            </span>
          )}

        </span>

        <svg
          className="brochure-country-dropdown-arrow"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {isOpen && (
        <div className="brochure-country-dropdown-menu">
          <div className="brochure-country-dropdown-list">

            {options.map((country) => (
              <button
                type="button"
                key={country.code}
                className={`brochure-country-dropdown-option ${country.code === value ? 'selected' : ''
                  }`}
                onClick={() => handleSelect(country)}
              >
                <span className="brochure-country-option-flag">
                  {flags[country.code] &&
                    React.createElement(flags[country.code])}
                </span>

                <span className="brochure-country-option-name">
                  {country.name}
                </span>

                <span className="brochure-country-option-code">
                  +{country.phone}
                </span>
              </button>
            ))}

          </div>
        </div>
      )}
    </div>
  );
}

function ProductSingle({ slug }) {
  const [activeModule, setActiveModule] = useState(0);
  const [showBrochureModal, setShowBrochureModal] = useState(false);

  const [brochureFormData, setBrochureFormData] = useState({
    name: '',
    email: '',
    city: '',
  });

  const handleBrochureSubmit = async (e) => {
    e.preventDefault();

    if (!brochureMap[slug]) {
      setBrochureSubmitError('Brochure not available for this product.');
      return;
    }

    setBrochureIsSubmitting(true);
    setBrochureSubmitError('');

    try {
      const data = {
        productSlug: slug,
        productTitle: brochureMap[slug].title,
        name: brochureFormData.name,
        email: brochureFormData.email,
        phone: `+${getCountryCallingCode(brochurePhoneCountry)}${brochurePhone}`,
        city: brochureFormData.city,
      };

      const response = await fetch("/api/brochure", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Something went wrong.');
      }

      // Download the brochure only after successful submission
      const brochure = brochureMap[slug];

      const link = document.createElement('a');
      link.href = brochure.file;
      link.download = brochure.name;
      document.body.appendChild(link);
      link.click();
      link.remove();

      // Reset form
      setBrochureFormData({
        name: '',
        email: '',
        city: '',
      });

      setBrochurePhone('');
      setBrochurePhoneCountry('IN');
      setBrochureSubmitError('');
      setShowBrochureModal(false);
    } catch (error) {
      console.error('Brochure submission error:', error);
      setBrochureSubmitError(
        error.message || 'Something went wrong. Please try again.'
      );
    } finally {
      setBrochureIsSubmitting(false);
    }
  };

  const [brochurePhoneCountry, setBrochurePhoneCountry] = useState('IN');
  const brochureCountryOptions = getCountries()
    .map((code) => ({
      code,
      name: countryLabels[code],
      phone: getCountryCallingCode(code),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
  const [brochurePhone, setBrochurePhone] = useState('');
  const [brochureIsSubmitting, setBrochureIsSubmitting] = useState(false);
  const [brochureSubmitError, setBrochureSubmitError] = useState('');

  useEffect(() => {
    setActiveModule(0);
  }, [slug]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.runGsapAnimations) {
        window.runGsapAnimations();
      }

      if (window.runMainJS) {
        window.runMainJS();
      }

      if (window.runCarouselJS) {
        window.runCarouselJS();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [slug]);

  const slugBgImages = {
    'core-banking-solution': bgCoreBanking,
    'imis-solution': bgMis,
    'end-to-end-cyber-security': bgCyberSecurity,
    'digital-payments': bgVpay,
    'post-mortem-management': bgAutopsy,
    'agriculture-trading': bgEapmc,
    'erp-solution': bgErp,
  };

  const currentBg = slugBgImages[slug] || '';
  const brochureMap = {
    'core-banking-solution': {
      title: 'Core Banking Solution',
      file: '/assets/.pdf/Brochures/CoreBankingSolution.pdf',
      name: 'CoreBankingSolution.pdf',
    },
    'imis-solution': {
      title: 'IMIS Solution',
      file: '/assets/.pdf/Brochures/IMISSolution.pdf',
      name: 'IMISSolution.pdf',
    },
    'digital-payments': {
      title: 'Digital Payments',
      file: '/assets/.pdf/Brochures/DigitalPayments.pdf',
      name: 'DigitalPayments.pdf',
    },
    'end-to-end-cyber-security': {
      title: 'End-to-End Cyber Security',
      file: '/assets/.pdf/Brochures/EndtoEndCyberSecurity.pdf',
      name: 'EndtoEndCyberSecurity.pdf',
    },
  };

  const showBrochureButton = Boolean(brochureMap[slug]);

  const ebankerModules = [
    {
      title: "Digital Customer Onboarding",
      subtitle:
        "Streamlines customer onboarding through digital processes and Video KYC, enabling financial institutions to efficiently capture customer information, complete verification, and create a seamless onboarding experience with reduced manual effort.",
      image: overviewImg,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <polyline points="16 11 18 13 22 9"></polyline>
        </svg>
      )
    },
    {
      title: "Loan Origination System",
      subtitle:
        "Facilitates the processing and management of loan applications by automating the journey from application to sanction. It supports information gathering, customer rating, credit analysis, loan processing, and document management, helping reduce costs and improve operational efficiency.",
      image: loanOriginationImg,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      )
    },
    {
      title: "Loan Management System",
      subtitle:
        "Enables financial institutions to manage loan accounts, including disbursements and repayments, while supporting effective NPA management. It helps identify, assess, and rehabilitate non-performing assets, reducing errors, improving resource allocation, and enhancing customer satisfaction.",
      image: loanManagementImg,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      )
    },
    {
      title: "Financial Accounting",
      subtitle:
        "Supports financial institutions in managing and maintaining their accounting processes, enabling accurate financial records, streamlined operations, and better control over financial information for efficient and informed business management.",
      image: npaManagementImg,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2"></rect>
          <line x1="7" y1="8" x2="17" y2="8"></line>
          <line x1="7" y1="12" x2="17" y2="12"></line>
          <line x1="7" y1="16" x2="13" y2="16"></line>
        </svg>
      )
    },
    {
      title: "Remitter",
      subtitle:
        "Enables secure and seamless fund transfers through RTGS, NEFT, NACH, IMPS, UPI, and other digital payment modes. It manages remitter and beneficiary details, transaction processing, authentication, and real-time status tracking for fast, reliable, and compliant fund transfers.",
      image: reportingImg,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 3l4 4-4 4"></path>
          <path d="M3 7h18"></path>
          <path d="M7 21l-4-4 4-4"></path>
          <path d="M21 17H3"></path>
        </svg>
      )
    }
  ];

  const coreBankingMoreModules = [
    {
      title: "Reconciliation",
      description:
        "Streamline transaction reconciliation across banking channels with accurate matching, exception handling, and improved financial control.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 7h-9" />
          <path d="M20 12h-9" />
          <path d="M20 17h-9" />
          <path d="M4 7l2 2 3-4" />
          <path d="M4 17l2 2 3-4" />
        </svg>
      )
    },
    {
      title: "Video KYC",
      description:
        "Enable secure digital customer verification through video-based KYC processes, reducing manual intervention and accelerating onboarding.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="5" width="15" height="14" rx="2" />
          <path d="M18 10l3-2v8l-3-2" />
          <circle cx="10.5" cy="10" r="2.5" />
        </svg>
      )
    },
    {
      title: "API Integrations & Automation",
      description:
        "Connect banking systems with external platforms and services through secure APIs while automating repetitive operational workflows.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 9l-3 3 3 3" />
          <path d="M16 9l3 3-3 3" />
          <path d="M14 5l-4 14" />
        </svg>
      )
    },
    {
      title: "AI-Driven Verification & Engagement",
      description:
        "Leverage AI-powered capabilities to strengthen customer verification, improve engagement, and deliver more intelligent banking experiences.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="3" />
          <circle cx="9" cy="10" r="1" />
          <circle cx="15" cy="10" r="1" />
          <path d="M8 15c1.2 1 2.4 1.5 4 1.5s2.8-.5 4-1.5" />
        </svg>
      )
    },
    {
      title: "Compliance, AML & Reporting",
      description:
        "Support regulatory compliance with AML monitoring, structured reporting, and controls designed to strengthen governance and risk management.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      )
    },
    {
      title: "Conversational AI",
      description:
        "Enhance customer interactions through intelligent conversational interfaces that provide faster assistance and personalized support.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 9.7 9.7 0 0 1-4-.8L3 21l1.8-4.2A8.2 8.2 0 0 1 3 11.5 8.5 8.5 0 0 1 12 3a8.5 8.5 0 0 1 9 8.5z" />
          <path d="M8 11h.01M12 11h.01M16 11h.01" />
        </svg>
      )
    },
    {
      title: "Treasury, Payments & Clearing",
      description:
        "Manage treasury operations, payment processing, and clearing activities through integrated workflows designed for accuracy and efficiency.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 10h18" />
          <path d="M5 10v8" />
          <path d="M9 10v8" />
          <path d="M15 10v8" />
          <path d="M19 10v8" />
          <path d="M3 18h18" />
          <path d="M12 3l9 5H3l9-5z" />
        </svg>
      )
    },
    {
      title: "Mobile / Internet Banking Integrations",
      description:
        "Integrate core banking capabilities with mobile and internet banking platforms to deliver connected and convenient digital banking services.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="2" width="12" height="20" rx="2" />
          <path d="M9 6h6" />
          <circle cx="12" cy="18" r="1" />
        </svg>
      )
    },
    {
      title: "ATM / POS / UPI / AEPS Integrations",
      description:
        "Connect multiple transaction channels including ATM, POS, UPI, and AEPS with the core banking ecosystem for seamless payment experiences.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 9h18" />
          <path d="M7 14h4" />
          <path d="M15 14h2" />
        </svg>
      )
    }
  ];

  const imisModules = [
    {
      title: "Overview",
      subtitle: "The fully integrated Management Information System (IMIS) solution streamlines implementation for financial institutions, reducing both timescales and costs. IMIS adheres to electronic transaction standards, cyber security requirements, and anti-money laundering regulations. It features integrated modules for Customer Relationship Management, Loan Origination (onboarding), Loan Servicing, Default Management, and Investment Management. Additionally, it includes comprehensive systems for Human Resource Management, Recruitment Management, Procurement Management, and Document Management.",
      image: imisOverviewImg,
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    },
    {
      title: "Customer Relationship Management",
      subtitle: "This system allows FIs to streamline sales, marketing, and customer service processes, leading to improved customer relationships and loyalty. It includes tools such as contact management, lead management, interaction management, pipeline forecasting, and performance analytics to help FIs understand customer needs and preferences.",
      image: imisCrmImg,
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
    },
    {
      title: "Credit Management",
      subtitle: "This system enables overseeing and managing the FI's credit activities. It empowers the FI to set credit policies, assessing creditworthiness, and collecting debts. This system empowers the FI to minimize bad debts, reduce risk, and improve cash flow.",
      image: imisCreditMgmtImg,
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
    },
    {
      title: "Financial Management",
      subtitle: "This system helps FIs to effectively manage their financial resources, monitor cash flow, and ensure compliance with financial regulations. This comprehensive module has in-built capabilities for budgeting, forecasting, financial reporting, and cost accounting.",
      image: imisFinancialMgmtImg,
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
    },
    {
      title: "Procurement Management",
      subtitle: "This system facilitates the process of acquiring goods, services, or works from vendors, suppliers, or contractors with seamless information flow, efficient decision-making, and cost-effective procurement. The system has features for order management, inventory management, and supply chain management, which help FIs optimize their purchasing and inventory processes, reduce waste, and improve profitability.",
      image: imisProcurementImg,
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
    },
    {
      title: "Human Capital Management",
      subtitle: "This module is a crucial component of Management Information Systems (MIS) that focuses on the effective management of an organization's most valuable assets - its employees. It integrates various processes, such as recruitment, performance evaluation, training, compensation, and employee engagement, to improve overall employee performance and contribute to the FI's strategic goals.",
      image: imisHrImg,
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
    }
  ];

  const agricultureModules = [
    {
      title: "Overview",
      subtitle: "This web-based Commodity Trading and Auction Platform supports office automation and connects farmers directly with various customers, including agricultural clusters, warehouses, and institutional buyers. By reducing the number of intermediaries, it ensures farmers receive the fairest and best possible prices for their produce. The platform is workflow-based and provides role-based access for enhanced efficiency and security.",
      image: agriOverviewImg,
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    },
    {
      title: "Auction Management",
      subtitle: "E-APMC is a web-based e-auction and office automation solution. The solution is a comprehensive system meeting all the requirements of the APMCs and has been built to incorporate the business rules defined in the APMC Act.",
      image: agriAuctionMgmtImg,
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
    },
    {
      title: "Financial Management",
      subtitle: "The system digitises complete loan record of farmers and also digitises all the transactions. This results in generating data inputs for better policy making farmer welfare schemes.",
      image: agriFinancialMgmtImg,
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
    },
    {
      title: "Real-time Tracking",
      subtitle: "The system enables real time production forecasting based on Government Procurement Policy. It also monitors and manages entire available infrastructure. All the real-time values are important for production forecasting based on Government Procurement Policy.",
      image: agriRealtimeTrackingImg,
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
    }
  ];

  const ibsModules = [
    {
      title: "Stores & Inventory Management",
      subtitle:
        "Manage inventory levels, stock movements, warehouse operations, and timely replenishment for efficient control of materials and resources.",
      image: ibsInventoryImg,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 16V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z" />
          <path d="M3 10h18" />
          <path d="M7 6V3h10v3" />
        </svg>
      )
    },
    {
      title: "Financial Accounting",
      subtitle:
        "Streamline financial transactions, journal entries, ledgers, and financial reporting with an integrated accounting system.",
      image: ibsAccountingImg,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 1v22" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    },
    {
      title: "Sales & Distribution",
      subtitle:
        "Manage sales and distribution processes efficiently while maintaining visibility across orders, transactions, and business operations.",
      image: ibsSalesImg,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      )
    },
    {
      title: "HR & Payroll Management",
      subtitle:
        "Streamline employee management and payroll processes with an integrated HRMS designed to simplify workforce administration.",
      image: ibsOverviewImg,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
          <path d="M16 3.5a4 4 0 0 1 0 7" />
        </svg>
      )
    },
    {
      title: "Production Planning",
      subtitle:
        "Optimize materials, labour, and equipment through effective production planning, scheduling, and resource allocation.",
      image: ibsProductionImg,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 21h18" />
          <path d="M5 21V9l7-5 7 5v12" />
          <path d="M9 21v-6h6v6" />
          <path d="M9 10h.01M12 10h.01M15 10h.01" />
        </svg>
      )
    },
    {
      title: "MIS & Analytics",
      subtitle:
        "Analyze business performance with real-time reporting, insights, and analytics to support informed planning and decision-making.",
      image: ibsAnalyticsImg,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      )
    }
  ];

  const vPayModules = [
    {
      title: "Overview",
      subtitle: "V-Pay is an all-digital unified payment system designed to revolutionize the way businesses and individuals handle transactions. As a cutting-edge solution, V-Pay offers the most advanced digital payment features available, enabling cashless transactions with unparalleled simplicity. Built on a cloud API-based platform, V-Pay seamlessly integrates with a bank's core banking system, providing security as robust as a diamond vault with 256-bit encryption technology. This ensures that both businesses and individuals have access to a wide range of digital payment methods, offering quick, safe transactions, numerous features, and complete control over their digital payments.",
      image: dpOverviewImg,
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    },
    {
      title: "Cashless Payments",
      subtitle: "V-Pay is a complete digital payment system transforming how businesses and individuals handle transactions. Designed for simplicity and efficiency, it consolidates various payment channels into one seamless platform, enabling cashless transactions with ease.",
      image: dpCashlessImg,
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
    },
    {
      title: "Instant Investments",
      subtitle: "V-Pay has in-built modules for e-KYC and also for making investments in insurance policies and mutual funds. It is integrated with various investment companies to accept investments by adhering to all the compliance regulations. The entire process is digital and instant.",
      image: dpInvestmentImg,
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
    },
    {
      title: "Immediate Remittances",
      subtitle: "V-Pay has a module to facilitate remittances and account transfers across the country. It is integrated with core banking system and IMPS and offers a speedy way to send money.",
      image: dpRemittanceImg,
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.82 2.82 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
    },
    {
      title: "Utility Payments",
      subtitle: "V-Pay is integrated with Bharat Bill Payment System (BBPS) which empowers it to make utility bill payments across the country. The entire interface is simple, secured and easy with multilingual options.",
      image: dpUtilityImg,
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line></svg>
    },

    // NEW MODULES
    {
      title: "Digital Wallet",
      subtitle: "V-Pay provides a secure and convenient digital wallet solution that enables customers to make seamless digital transactions. It supports features such as Scan & Pay and IMPS, offering a simple and efficient way to manage and make digital payments.",
      image: dpDigitalWallet,
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7H5a3 3 0 0 1 0-6h14v4"></path><path d="M4 7h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z"></path><circle cx="17" cy="14" r="1"></circle></svg>
    },
    {
      title: "PoS Machine",
      subtitle: "V-Pay enables merchants to accept secure and seamless digital payments through PoS machines. It supports fast transaction processing and provides a convenient payment experience for businesses and their customers.",
      image: dpPOSMachine,
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><rect x="7" y="7" width="10" height="5"></rect><line x1="7" y1="16" x2="7.01" y2="16"></line><line x1="11" y1="16" x2="11.01" y2="16"></line><line x1="15" y1="16" x2="15.01" y2="16"></line></svg>
    },
    {
      title: "Soundbox",
      subtitle: "V-Pay Soundbox provides clear audio alerts for successful payments, enabling merchants to receive real-time transaction confirmation. It supports dynamic QR payments and stable connectivity for a fast, secure, and seamless payment experience.",
      image: dpSoundBox,
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
    }
  ];

  const cyberSentinelModules = [
    {
      title: "Overview",
      subtitle: "This is a Virtual Security Operations Center (VSOC) is a centralized management platform that enables organizations to monitor, detect, and respond to security threats in real-time.",
      image: csOverviewImg,
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    },
    {
      title: "Real-time Monitoring",
      subtitle: "provides a comprehensive solution for threat hunting, incident response, and security orchestration. It integrates multiple security tools and systems, providing a single pane of glass for visibility and collaboration. Key features include threat intelligence, incident response automation, and reporting and analytics.",
      image: csRealtimeImg,
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
      </svg>
    },
    {
      title: "Automation",
      subtitle: "It features orchestration and automation capabilities that enable the coordination of actions across multiple security tools. This allows for streamlined incident response and remediation processes by automating repetitive tasks and ensuring consistent responses to security events.",
      image: csAutomationImg,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      )
    },
    {
      title: "Analytics",
      subtitle: "It offers robust reporting and analytics capabilities, allowing organizations to gain insights into their security posture, identify trends, and make data-driven decisions to enhance cybersecurity measures.",
      image: csAnalysisImg,
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
    }
  ];

  const autopsyModules = [
    {
      title: "Postmortem Autopsy Management",
      subtitle:
        "Streamline end-to-end post-mortem case management with digital registration, workflow tracking, structured PM notes, injury mapping, and reporting.",
      image: autopsyOverviewImg,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 3h6l1 2h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4l1-2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      )
    },
    {
      title: "Ante-Mortem Autopsy Examination",
      subtitle:
        "Capture and manage ante-mortem information through structured reporting, digital records, and supporting medical documentation for comprehensive case examination.",
      image: autopsyRecordMgmtImg,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="M8 13h8" />
          <path d="M8 17h5" />
        </svg>
      )
    },
    {
      title: "Blockchain-Enabled Autopsy Data Security",
      subtitle:
        "Protect sensitive medico-legal records with tamper-proof digital workflows, chain-of-custody controls, digital signatures, encryption, and detailed audit trails.",
      image: autopsyWorkflowMgmtImg,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
          <path d="M10 6.5h4" />
          <path d="M6.5 10v4" />
          <path d="M17.5 10v4" />
          <path d="M10 17.5h4" />
        </svg>
      )
    },
    {
      title: "AI-Based Autopsy Analysis",
      subtitle:
        "Leverage AI and CNN-based analysis to examine forensic images, radiology films, and autopsy findings for faster and more informed forensic assessment.",
      image: autopsyDataAnalysisImg,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8" cy="8" r="1.5" />
          <path d="M3 15l5-5 4 4 3-3 6 6" />
        </svg>
      )
    }
  ];

  let currentModules = [];
  let mainHeading = "";
  let mainSubheading = "";

  if (slug === 'core-banking-solution') {
    currentModules = ebankerModules;
    mainHeading = "E-Banker Modules";
    mainSubheading = "Streamlines customer onboarding with eKYC";
  } else if (slug === 'imis-solution') {
    currentModules = imisModules;
    mainHeading = "IMIS Modules";
    mainSubheading = "IMIS adheres to electronic transaction standards, cyber security requirements, and anti-money laundering regulations";
  } else if (slug === 'end-to-end-cyber-security') {
    currentModules = cyberSentinelModules;
    mainHeading = "Cyber Sentinel Modules";
    mainSubheading = "Comprehensive protection for your digital infrastructure";
  } else if (slug === 'digital-payments') {
    currentModules = vPayModules;
    mainHeading = "V-Pay Modules";
    mainSubheading = "V-Pay seamlessly integrates with a bank's core banking system, providing security as robust as a diamond vault";
  } else if (slug === 'post-mortem-management') {
    currentModules = autopsyModules;
    mainHeading = "E-Autopsy Modules";
    mainSubheading = "End-to-end solution for Post Mortem (Autopsy) Departments";
  } else if (slug === 'agriculture-trading') {
    currentModules = agricultureModules;
    mainHeading = "E-APMC Modules";
    mainSubheading = "Connects farmers directly with various customers";
  } else if (slug === 'erp-solution') {
    currentModules = ibsModules;
    mainHeading = "IBS Modules";
    mainSubheading = "Integrated Business Suite (IBS) is a comprehensive ERP software designed to unify all core business functions.";
  }

  const MODULES_PER_PAGE = 5;

  const shouldUseModuleCarousel = currentModules.length > MODULES_PER_PAGE;

  const modulePageCount = Math.ceil(
    currentModules.length / MODULES_PER_PAGE
  );

  const currentModulePage = shouldUseModuleCarousel
    ? Math.floor(activeModule / MODULES_PER_PAGE)
    : 0;

  const moduleStartIndex = currentModulePage * MODULES_PER_PAGE;

  const visibleModules = shouldUseModuleCarousel
    ? currentModules.slice(
      moduleStartIndex,
      moduleStartIndex + MODULES_PER_PAGE
    )
    : currentModules;

  // =========================================
  // MOBILE AUTOPLAY
  // =========================================

  useEffect(() => {
    // Autoplay only on mobile/tablet
    const mediaQuery = window.matchMedia('(max-width: 991px)');

    if (!mediaQuery.matches || currentModules.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setActiveModule((prev) => {
        return (prev + 1) % currentModules.length;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [slug, currentModules.length]);

  // Find the product by slug
  const product = PRODUCTS_DATA.find((p) => p.slug === slug);

  if (!product) {
    return <NotFound />;
  }

  return (
    <>
      <style>
        {`

        
.prod-hero-text{
        max-width: 900px !important;
        margin: auto;
        }
          .metrics-section {
            // padding-bottom: 0px !important;
          }
          .metrics-section + .modules-fintech-section {
            // padding-top: 0px !important;
          }
          @media (max-width: 768px) {
            .prod-hero-title {
              font-size: 2.2rem !important;
            }
            .prod-hero-text {
              font-size: 1rem !important;
            }
            .metrics-section {
              // padding-top: 60px !important;
              // padding-bottom: 0px !important;
            }
            .metrics-section + .modules-fintech-section {
              // padding-top: 0px !important;
            }
            .fintech-modules-wrapper {
              // padding-top: 30px !important;
            }
              
            .fintech-stat-value {
              font-size: 24px !important;
            }
            .fintech-inner-panel {
              padding: 12px !important;
            }
          }
        `}
      </style>
      {/* Product Hero Section - matches home page style */}
      <div className="section-hero">
        <div className="hero-image" style={currentBg ? { backgroundImage: `url(${currentBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' } : {}}></div>
        <div className="container">
          <div className="content-wrap text-center">
            {product.logo && (
              <div className="product-logo effectFade fadeUp mb-4 d-flex justify-content-center">
                <img
                  className='productLogo'
                  src={product.logo.src}
                  alt={`${product.title} Logo`}
                  style={{ width: 'auto', maxHeight: '80px', objectFit: 'contain', marginBottom: '8px' }}
                />
              </div>
            )}
            <div className="title text-display-2 effectFade fadeRotateX prod-hero-title">
              <span className="title1 fw-semibold text-gradient-1">{product.title}</span>
              <br />
              <div className="title2 d-flex justify-content-center flex-wrap mt-2">
                <span className="fw-semibold text-gradient-1" style={{ fontSize: '0.6em', opacity: 0.85 }}>{product.subtitle}</span>
              </div>
            </div>
            <p className="text effectFade fadeUp prod-hero-text">
              {product.shortDescription}
            </p>
            <div className="bot-btns effectFade fadeRotateX">
              <Link href="/contact" className="tf-btn">
                Let's Connect
              </Link>
            </div>
          </div>
        </div>
        {/* <a href="#next-section" className="scroll-more">
          <span className="fw-semibold link1">Scroll for more</span>
          <i className="icon icon-long-arrow-alt-down-solid"></i>
        </a> */}
      </div>



      {/* Metrics Section */}
      {product.metrics && product.metrics.length > 0 && (
        <div id="next-section" className="metrics-section section-spacing-lg" style={{ position: 'relative' }}>
          <style>
            {`
              .fintech-stat-card {
                background: #ffffff;
                border-radius: 24px;
                padding: 8px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
                transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                border: 1px solid rgba(255, 43, 43, 0.08);
                height: 100%;
                position: relative;
                z-index: 1;
              }
              .fintech-stat-card:hover {
                transform: translateY(-10px);
                box-shadow: 0 20px 40px rgba(255, 43, 43, 0.12);
                border-color: rgba(255, 43, 43, 0.3);
              }
              .fintech-inner-panel {
                background: #ffffff;
                border-radius: 18px;
                padding: 24px;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                position: relative;
                overflow: hidden;
                border: 1px solid rgba(255, 43, 43, 0.12);
                transition: all 0.5s ease;
              }
              /* Techy background SVG pattern with low opacity */
              .fintech-inner-panel::before {
                content: '';
                position: absolute;
                top: 0; left: 0; right: 0; bottom: 0;
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' width='100%25' height='100%25'%3E%3Cdefs%3E%3Cpattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 10 0 L 0 0 0 10' fill='none' stroke='%23ff2b2b' stroke-width='0.2' stroke-opacity='0.15'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3Ccircle cx='10' cy='10' r='0.8' fill='%23ff2b2b' fill-opacity='0.25'/%3E%3Ccircle cx='50' cy='30' r='0.8' fill='%23ff2b2b' fill-opacity='0.25'/%3E%3Ccircle cx='80' cy='70' r='0.8' fill='%23ff2b2b' fill-opacity='0.25'/%3E%3Cpath d='M 10 10 L 30 10 L 50 30 L 80 30 L 80 70' fill='none' stroke='%23ff2b2b' stroke-width='0.2' stroke-opacity='0.15'/%3E%3C/svg%3E");
                background-size: cover;
                opacity: 0.8;
                z-index: 0;
                pointer-events: none;
                transition: all 0.5s ease;
              }
              .fintech-stat-card:hover .fintech-inner-panel::before {
                opacity: 0.22;
                transform: scale(1.08);
              }
              .fintech-card-glow {
                position: absolute;
                width: 250px;
                height: 250px;
                background: radial-gradient(circle, rgba(255, 43, 43, 0.1) 0%, rgba(255, 43, 43, 0) 60%);
                border-radius: 50%;
                opacity: 0.4;
                transition: all 0.6s ease;
                z-index: 0;
              }
              .fintech-stat-card:hover .fintech-card-glow {
                opacity: 0.8;
                transform: scale(1.2);
              }
              .fintech-inner-bg {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-image: radial-gradient(rgba(255, 43, 43, 0.15) 1.5px, transparent 1.5px);
                background-size: 24px 24px;
                z-index: 0;
                opacity: 0.1;
                transition: opacity 0.5s ease;
              }
              .fintech-stat-card:hover .fintech-inner-bg {
                opacity: 0.35;
                animation: slide-bg 15s linear infinite;
              }
              @keyframes slide-bg {
                0% { background-position: 0 0; }
                100% { background-position: 60px 60px; }
              }
              .fintech-icon-wrap {
                width: 64px;
                height: 64px;
                border-radius: 50%;
                background: rgba(255, 43, 43, 0.05);
                border: 1px solid rgba(255, 43, 43, 0.25);
                display: flex;
                align-items: center;
                justify-content: center;
                // margin-bottom: 28px;
                position: relative;
                z-index: 1;
                transition: all 0.5s ease;
              }
              .fintech-stat-card:hover .fintech-icon-wrap {
                transform: translateY(-4px) rotate(10deg) scale(1.05);
                border-color: rgba(255, 43, 43, 0.8);
                background: rgba(255, 43, 43, 0.1);
                box-shadow: 0 5px 15px rgba(255, 43, 43, 0.25);
              }
              .fintech-icon-wrap svg {
                color: #ff2b2b;
                transition: all 0.5s ease;
              }
              .fintech-stat-card:hover .fintech-icon-wrap svg {
                filter: drop-shadow(0 0 8px rgba(255, 43, 43, 0.6));
              }
              .fintech-stat-value {
                color: #1a1f36;
                font-size: 2.8rem;
                font-weight: 700;
                line-height: 1.1;
                // margin-bottom: 8px;
                position: relative;
                z-index: 1;
                letter-spacing: -1px;
                transition: color 0.3s ease;
              }
              .fintech-stat-card:hover .fintech-stat-value {
                color: #ff2b2b;
              }
              .fintech-stat-label {
                color: #4f566b;
                font-size: 1.05rem;
                font-weight: 500;
                margin: 0;
                position: relative;
                z-index: 1;
                line-height: 1.5;
              }
            `}
          </style>
          <div className="container">
            <div className="row g-4 justify-content-center">
              {product.metrics.map((metric, index) => {
                const icons = [
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" /></svg>,
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="21" width="18" height="2" /><rect x="5" y="10" width="3" height="9" /><rect x="10" y="10" width="4" height="9" /><rect x="16" y="10" width="3" height="9" /><path d="M3 8l9-5 9 5v2H3V8z" /></svg>,
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="6" rx="2" ry="2" /><rect x="2" y="15" width="20" height="6" rx="2" ry="2" /><path d="M6 6h.01M6 18h.01" /><path d="M18 6l-4 4-2-2" /><path d="M18 18l-4 4-2-2" /></svg>,
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>,
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                ];

                const glowPositions = [
                  { top: '-80px', right: '-80px' },
                  { bottom: '-80px', left: '-80px' },
                  { top: '-80px', left: '-80px' },
                  { bottom: '-80px', right: '-80px' },
                  { top: '50%', right: '-100px', transform: 'translateY(-50%)' },
                  { top: '50%', left: '-100px', transform: 'translateY(-50%)' },
                ];



                return (
                  <div key={index} className="col-lg-4 col-md-6 col-sm-12 card-top-m">
                    <div className="fintech-stat-card effectFade fadeUp">
                      <div className="fintech-inner-panel">
                        <div className="fintech-inner-bg"></div>
                        <div className="fintech-card-glow" style={{ ...glowPositions[index % 6] }}></div>
                        <div className="fintech-card-heading">
                          <div className="fintech-icon-wrap">
                            {icons[index % 6]}
                          </div>
                          <h2 className="fintech-stat-value">{metric.value}</h2>
                        </div>
                        <p className="fintech-stat-label">{metric.label}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {currentModules.length > 0 && (
        <div id={!(product.metrics && product.metrics.length > 0) ? "next-section" : undefined} className="modules-fintech-section section-spacing-lg" style={{ position: 'relative', overflow: 'hidden' }}>
          <style>
            {`
            .fintech-modules-wrapper {
              // padding-top: 60px;
              // padding-bottom: 20px;
            }
            .premium-image-card {
              position: relative;
              border-radius: 24px;
              overflow: hidden;
              background: #0a0b10;
              box-shadow: 0 20px 40px rgba(0,0,0,0.1);
              transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
              height: 480px;
            }
            .premium-image-card:hover {
              transform: translateY(-8px);
              box-shadow: 0 30px 60px rgba(255, 43, 43, 0.15);
            }
            .premium-image-bg {
              width: 100%;
              height: 100%;
              object-fit: cover;
              transition: transform 1.5s cubic-bezier(0.2, 0.8, 0.2, 1);
              opacity: 0.5;
            }
            .premium-image-card:hover .premium-image-bg {
              transform: scale(1.1);
            }
            .premium-glow-particles {
              position: absolute;
              top: 0; left: 0; right: 0; bottom: 0;
              background: radial-gradient(circle at 20% 30%, rgba(255, 43, 43, 0.2), transparent 40%),
                          radial-gradient(circle at 80% 70%, rgba(255, 43, 43, 0.15), transparent 40%);
              z-index: 1;
              pointer-events: none;
              transition: opacity 0.5s ease;
            }
            .premium-image-card:hover .premium-glow-particles {
              opacity: 0.7;
            }
            .premium-image-overlay {
              position: absolute;
              bottom: 0; left: 0; right: 0;
              padding: 50px 40px;
              background: linear-gradient(to top, rgba(10, 11, 16, 0.95) 10%, rgba(10, 11, 16, 0.5) 60%, transparent);
              z-index: 2;
              color: white;
            }
            .slider-indicators {
              display: flex;
              gap: 8px;
              margin-top: 25px;
            }
            .slider-dot {
              width: 8px; height: 8px;
              border-radius: 50%;
              background: rgba(255,255,255,0.3);
              transition: all 0.4s ease;
            }
            .slider-dot.active {
              background: #ff2b2b;
              width: 24px;
              border-radius: 4px;
              box-shadow: 0 0 10px rgba(255, 43, 43, 0.5);
            }
            .animated-icon-badge {
              position: absolute;
              top: 30px; right: 30px;
              background: rgba(255, 255, 255, 0.05);
              backdrop-filter: blur(12px);
              border: 1px solid rgba(255,255,255,0.15);
              border-radius: 100px;
              padding: 10px 20px;
              display: flex;
              align-items: center;
              gap: 10px;
              color: white;
              z-index: 2;
              font-weight: 500;
              font-size: 0.9rem;
              animation: float-badge 3s ease-in-out infinite;
              box-shadow: 0 10px 20px rgba(0,0,0,0.2);
            }
            @keyframes float-badge {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-8px); }
              100% { transform: translateY(0px); }
            }
            
            .overview-content-card {
              background: #ffffff;
              border-radius: 24px;
              padding: 40px;
              box-shadow: 0 10px 30px rgba(0,0,0,0.03);
              border: 1px solid rgba(0,0,0,0.04);
              transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
              position: relative;
              overflow: hidden;
            }
            .overview-content-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 20px 40px rgba(0,0,0,0.06);
            }
            .overview-content-card::before {
              content: '';
              position: absolute;
              top: 0; left: 0; right: 0; height: 4px;
              background: linear-gradient(90deg, #ff2b2b, transparent);
              opacity: 0;
              transition: opacity 0.4s ease;
            }
            .overview-content-card:hover::before {
              opacity: 1;
            }

            .timeline-modules-container {
              position: relative;
              padding-top: 10px;
            }
            .timeline-line {
              position: absolute;
              left: 21px;
              top: 20px;
              bottom: 20px;
              width: 2px;
              background: linear-gradient(to bottom, rgba(255,43,43,0.3) 0%, rgba(0,0,0,0.05) 30%);
              z-index: 0;
            }
            .timeline-card-wrap {
              position: relative;
              margin-bottom: 20px;
              z-index: 1;
            }
              .timeline-pagination {
  position: absolute;
  right: -35px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  z-index: 5;
}

.timeline-pagination-dot {
  width: 9px;
  height: 9px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: #d8d8d8;
  cursor: pointer;
  transition: all 0.3s ease;
}

.timeline-pagination-dot:hover {
  background: #ff2b2b;
  transform: scale(1.2);
}

.timeline-pagination-dot.active {
  width: 10px;
  height: 24px;
  border-radius: 6px;
  background: #ff2b2b;
  box-shadow: 0 0 10px rgba(255, 43, 43, 0.35);
}
            .timeline-card {
              background: #ffffff;
              border-radius: 20px;
              padding: 12px 16px;
              box-shadow: 0 4px 20px rgba(0,0,0,0.02);
              border: 1px solid rgba(0,0,0,0.04);
              display: flex;
              align-items: center;
              gap: 25px;
              transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
              position: relative;
              overflow: hidden;
              margin-left: 60px;
              cursor: pointer;
            }
            .timeline-card:hover {
              transform: translateX(10px);
              border-color: rgba(255, 43, 43, 0.3);
              box-shadow: 0 15px 30px rgba(255, 43, 43, 0.08);
            }
            .timeline-card.active {
              border-color: #ff2b2b;
              box-shadow: 0 15px 30px rgba(255, 43, 43, 0.12);
            }
            .timeline-card::after {
              content: '';
              position: absolute;
              top: 0; right: 0; bottom: 0; width: 4px;
              background: #ff2b2b;
              opacity: 0;
              transition: opacity 0.3s ease;
            }
            .timeline-card.active::after {
              opacity: 1;
            }
            .timeline-icon-circle {
              width: 56px;
              height: 56px;
              border-radius: 50%;
              background: rgba(255, 43, 43, 0.03);
              border: 1px solid rgba(255, 43, 43, 0.15);
              display: flex;
              align-items: center;
              justify-content: center;
              transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
              flex-shrink: 0;
            }
            .timeline-card:hover .timeline-icon-circle, .timeline-card.active .timeline-icon-circle {
              background: rgba(255, 43, 43, 0.08);
              border-color: rgba(255, 43, 43, 0.6);
              transform: scale(1.1) rotate(5deg);
              box-shadow: 0 0 20px rgba(255, 43, 43, 0.2);
            }
            .timeline-icon-circle svg {
              color: #ff2b2b;
              width: 24px; height: 24px;
              transition: all 0.3s ease;
            }
            .timeline-card.active .timeline-icon-circle svg {
              filter: drop-shadow(0 0 5px rgba(255, 43, 43, 0.5));
            }
            .timeline-content {
              flex: 1;
              padding-top: 2px;
            }
            .timeline-title {
              font-size: 1.25rem;
              font-weight: 600;
              color: #1a1a1a;
              margin-bottom: 0;
              transition: color 0.3s ease;
              line-height:1.5;  
            }
            .timeline-card.active .timeline-title {
              color: #ff2b2b;
            }
            .timeline-subtitle-wrap {
              overflow: hidden;
              transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }
            .timeline-subtitle {
              font-size: 0.95rem;
              color: #666;
              margin: 0;
              line-height: 1.6;
            }
            .timeline-arrow {
              color: #e0e0e0;
              transition: all 0.4s ease;
              margin-left: auto;
              margin-top: 4px;
            }
            .timeline-card:hover .timeline-arrow, .timeline-card.active .timeline-arrow {
              color: #ff2b2b;
            }
            .timeline-card.active .timeline-arrow {
              transform: rotate(180deg);
            }
            .timeline-dot {
              position: absolute;
              left: 13px;
              top: 38px;
              transform: translateY(-50%);
              width: 18px;
              height: 18px;
              border-radius: 50%;
              background: #ffffff;
              border: 3px solid #f0f0f0;
              transition: all 0.4s ease;
              z-index: 2;
            }
            .timeline-card-wrap:hover .timeline-dot, .timeline-card-wrap.active .timeline-dot {
              border-color: #ff2b2b;
              background: #ffffff;
              box-shadow: 0 0 10px rgba(255, 43, 43, 0.3);
            }
            .timeline-card-wrap.active .timeline-dot::after {
              content: '';
              position: absolute;
              top: 3px; left: 3px; right: 3px; bottom: 3px;
              background: #ff2b2b;
              border-radius: 50%;
            }
            @keyframes fadeIn {
              from { opacity: 0; transform: scale(1.05); }
              to { opacity: 1; transform: scale(1); }
            }

            
             
          `}
          </style>
          <div className="container fintech-modules-wrapper">
            <div className="row mb-5 justify-content-center text-center effectFade fadeUp">
              <div className="col-12">
                <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '10px' }}>{mainHeading}</h2>
                <p style={{ color: '#666', fontSize: '1.15rem', maxWidth: '800px', margin: '0 auto' }}>{mainSubheading}</p>
              </div>
            </div>
            <div className="row g-5">
              {/* LEFT SIDE */}
              <div className="col-lg-6">
                <div className="showcase-container effectFade fadeUp" style={{ position: 'sticky', top: '120px' }}>
                  {/* Premium Image Card */}
                  <div className="premium-image-card">
                    <img
                      key={activeModule}
                      src={currentModules[activeModule]?.image.src}
                      alt={currentModules[activeModule]?.title}
                      className="premium-image-bg"
                      style={{ animation: 'fadeIn 0.6s ease-out forwards' }}
                    />
                    <div className="premium-glow-particles"></div>

                    <div className="animated-icon-badge">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff2b2b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                      Enterprise Ready
                    </div>

                    <div className="premium-image-overlay">
                      <h3 style={{ color: '#fff', fontSize: '2.2rem', fontWeight: 'bold', marginBottom: '10px' }}>{currentModules[activeModule]?.title}</h3>
                      <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', margin: 0 }}>
                        {currentModules[activeModule]?.subtitle}{currentModules[activeModule]?.subtitle.length > 75 ? '' : ''}
                      </p>
                      <div className="slider-indicators">
                        {currentModules.map((_, idx) => (
                          <div
                            key={idx}
                            className={`slider-dot ${activeModule === idx ? 'active' : ''}`}
                            onClick={() => setActiveModule(idx)}
                            style={{ cursor: 'pointer' }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Dynamic Content Block to fill white space */}
                  {/* <div className="dynamic-content-card mt-4 p-4" style={{ backgroundColor: '#ffffff', borderRadius: '20px', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
                    <h3 key={`title-${activeModule}`} style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '12px', animation: 'fadeIn 0.5s ease-out forwards' }}>
                      {currentModules[activeModule]?.title}
                    </h3>
                    <p key={`desc-${activeModule}`} style={{ color: '#666', fontSize: '1.05rem', lineHeight: '1.6', margin: 0, animation: 'fadeIn 0.5s ease-out forwards' }}>
                      {currentModules[activeModule]?.subtitle}
                    </p>
                  </div> */}
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="col-lg-6">
                <div className="timeline-modules-container effectFade fadeUp">
                  <div className="timeline-line"></div>

                  {visibleModules.map((mod, localIdx) => {
                    const idx = moduleStartIndex + localIdx;

                    return (
                      <div key={idx} className={`timeline-card-wrap ${activeModule === idx ? 'active' : ''}`}>
                        <div className="timeline-dot"></div>
                        <div
                          className={`timeline-card ${activeModule === idx ? 'active' : ''}`}
                          onClick={() => setActiveModule(idx)}
                        >
                          <div className="timeline-icon-circle">
                            {mod.icon}
                          </div>
                          <div className="timeline-content">
                            <h4 className="timeline-title">{mod.title}</h4>
                            {/* <div
                            className="timeline-subtitle-wrap"
                            style={{
                              maxHeight: activeModule === idx ? '250px' : '0px',
                              opacity: activeModule === idx ? 1 : 0,
                              marginTop: activeModule === idx ? '12px' : '0'
                            }}
                          >
                            <p className="timeline-subtitle">{mod.subtitle}</p>
                          </div> */}
                          </div>
                          <div className="timeline-arrow">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                          </div>
                        </div>
                      </div>
                    )
                  })}

                  {shouldUseModuleCarousel && (
                    <div className="timeline-pagination">
                      {Array.from({ length: modulePageCount }).map((_, pageIndex) => (
                        <button
                          key={pageIndex}
                          type="button"
                          className={`timeline-pagination-dot ${currentModulePage === pageIndex ? 'active' : ''
                            }`}
                          onClick={() => {
                            setActiveModule(pageIndex * MODULES_PER_PAGE);
                          }}
                          aria-label={`Go to module page ${pageIndex + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {slug === 'core-banking-solution' && (
        <section className="core-more-modules section-spacing-lg">
          <div className="container">

            <div className="core-more-modules-header text-center effectFade fadeUp">
              <span className="core-more-modules-badge">
                Extended Capabilities
              </span>

              <h2>
                More <span>Modules</span>
              </h2>

              <p>
                Extend your core banking ecosystem with powerful integrations,
                intelligent automation, compliance capabilities, and digital
                banking services.
              </p>
            </div>

            <div className="core-more-modules-grid">
              {coreBankingMoreModules.map((module, index) => (
                <div
                  key={index}
                  className="core-more-module-card effectFade fadeUp"
                >
                  <div className="core-more-module-icon">
                    {module.icon}
                  </div>

                  <div className="core-more-module-content">
                    <h3>{module.title}</h3>
                    <p>{module.description}</p>
                  </div>

                  <div className="core-more-module-number">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* <div className="core-more-module-arrow">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M13 6l6 6-6 6" />
                    </svg>
                  </div> */}
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* Core Platform Features & Benefits Section */}
      <div className="features-benefits-section section-spacing-lg" style={{ position: 'relative', backgroundColor: '#ffffff', overflow: 'hidden' }}>
        {/* Background Image */}
        <div
          className="features-bg-image"
          style={{
            position: 'absolute',
            top: 0, left: 0,
            width: '100%', height: '100%',
            backgroundImage: `url(${abstractWorldMapImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.9,
            zIndex: 0
          }}
        ></div>

        {/* Ambient glow effects */}
        <div style={{ position: 'absolute', top: '10%', left: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(255,43,43,0.06) 0%, transparent 70%)', borderRadius: '50%', zIndex: 0, filter: 'blur(40px)' }}></div>
        <div style={{ position: 'absolute', bottom: '10%', right: '-5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(255,43,43,0.04) 0%, transparent 70%)', borderRadius: '50%', zIndex: 0, filter: 'blur(60px)' }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row justify-content-center text-center">
            <div className="col-lg-8 col-md-10">

              {/* Top Badge */}
              <div className="feature-badge" style={{ display: 'inline-flex', alignItems: 'center', background: 'linear-gradient(135deg, #ff2b2b, #ff4b4b)', padding: '8px 24px', borderRadius: '50px', marginBottom: '24px', boxShadow: '0 8px 20px rgba(255, 43, 43, 0.25)', transition: 'all 0.3s ease' }}>
                <span style={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase' }}>Core Platform</span>
              </div>

              {/* Main Heading */}
              <h2 style={{ fontSize: '3.8rem', fontWeight: '800', lineHeight: '1.2', marginBottom: '24px', letterSpacing: '-1px' }}>
                <span style={{ color: '#1a1a1a' }}>Features & </span>
                <span style={{ background: 'linear-gradient(to right, #ff2b2b, #ff5b5b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Benefits</span>
              </h2>

              {/* Divider */}
              <div className="divider-wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2px', marginBottom: '35px' }}>
                <div style={{ height: '3px', width: '60px', background: 'linear-gradient(to right, transparent, #ff2b2b)', borderRadius: '10px' }}></div>
                <div style={{ width: '8px', height: '8px', backgroundColor: '#ff2b2b', borderRadius: '50%', boxShadow: '0 0 10px rgba(255,43,43,0.8), 0 0 20px rgba(255,43,43,0.4)', animation: 'pulse-glow 2s infinite' }}></div>
                <div style={{ height: '3px', width: '60px', background: 'linear-gradient(to left, transparent, #ff2b2b)', borderRadius: '10px' }}></div>
              </div>

              {/* Paragraph */}
              <p style={{ color: '#555', fontSize: '1.2rem', lineHeight: '1.8', margin: '0 auto', maxWidth: '750px', fontWeight: '400' }}>
                Discover how our intelligent platform integrates seamlessly into your operations, empowering your team with advanced automation, real-time insights, and enterprise-grade security to drive sustainable growth.
              </p>

              {showBrochureButton && (
                <div style={{ marginTop: '35px' }}>
                  <button
                    onClick={() => setShowBrochureModal(true)}
                    className="tf-btn md radius-100"
                    style={{ background: 'transparent', border: '2px solid #ff2d15', color: '#ff2d15', padding: '14px 36px', fontSize: '1.1rem', display: 'inline-flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontWeight: '600', transition: 'all 0.3s ease' }}
                    onMouseOver={(e) => { e.currentTarget.style.background = '#ff2d15'; e.currentTarget.style.color = '#fff'; }}
                    onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#ff2d15'; }}
                  >
                    <span>Download Brochure</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>

        <style>
          {`
            @keyframes pulse-glow {
              0% { transform: scale(1); opacity: 0.8; }
              50% { transform: scale(1.3); opacity: 1; }
              100% { transform: scale(1); opacity: 0.8; }
            }
            @keyframes modalFadeIn {
              from { opacity: 0; transform: translateY(20px) scale(0.95); }
              to { opacity: 1; transform: translateY(0) scale(1); }
            }
            .feature-badge:hover {
              transform: translateY(-3px);
              box-shadow: 0 12px 25px rgba(255, 43, 43, 0.35) !important;
            }
          `}
        </style>
      </div>

      {/* Final Call To Action */}
      <div id="contact-section">
        <CTABannerSection
          title={`Ready to Transform Your Business with ${product.title}?`}
          subtitle={`Get in touch with our experts to learn more about our comprehensive solutions and how ${product.title} can help you achieve your goals.`}
        />
      </div>

      {/* Brochure Modal */}
      {showBrochureModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999, backdropFilter: 'blur(4px)' }}>
          <div style={{ background: '#fff', borderRadius: '8px', padding: '24px', width: '100%', maxWidth: '600px', margin: '20px', boxShadow: '0 25px 50px rgba(0,0,0,0.15)', position: 'relative', animation: 'modalFadeIn 0.3s ease-out forwards' }}>

            <button
              onClick={() => {
                if (!brochureIsSubmitting) {
                  setShowBrochureModal(false);
                }
              }}
              style={{ position: 'absolute', top: '15px', right: '15px', background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#888' }}
            >
              &times;
            </button>

            <form onSubmit={handleBrochureSubmit} className="brochure-form">

              <div className="brochure-form-grid">

                {/* NAME */}
                <div className="brochure-field">
                  <label htmlFor="brochure-name">
                    Full Name <span>*</span>
                  </label>

                  <div className="brochure-control">
                    <svg
                      className="brochure-control-icon"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="8"
                        r="3.5"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />
                      <path
                        d="M5 20C5.7 16.7 8.2 15 12 15C15.8 15 18.3 16.7 19 20"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />
                    </svg>

                    <input
                      id="brochure-name"
                      type="text"
                      placeholder="Enter your full name"
                      value={brochureFormData.name}
                      onChange={(e) =>
                        setBrochureFormData({
                          ...brochureFormData,
                          name: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                </div>


                {/* EMAIL */}
                <div className="brochure-field">
                  <label htmlFor="brochure-email">
                    Email Address <span>*</span>
                  </label>

                  <div className="brochure-control">
                    <svg
                      className="brochure-control-icon"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />
                      <path
                        d="M4 7L12 13L20 7"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <input
                      id="brochure-email"
                      type="email"
                      placeholder="Enter your email address"
                      value={brochureFormData.email}
                      onChange={(e) =>
                        setBrochureFormData({
                          ...brochureFormData,
                          email: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                </div>


                {/* PHONE */}
                <div className="brochure-field">
                  <label htmlFor="brochure-phone">
                    Phone Number <span>*</span>
                  </label>

                  <div className="brochure-phone-input-wrapper">

                    <BrochureCountryDropdown
                      value={brochurePhoneCountry}
                      onChange={setBrochurePhoneCountry}
                      options={brochureCountryOptions}
                    />

                    <input
                      id="brochure-phone"
                      type="tel"
                      className="brochure-phone-number-input"
                      value={brochurePhone}
                      onChange={(e) =>
                        setBrochurePhone(
                          e.target.value.replace(/\D/g, '')
                        )
                      }
                      placeholder="Enter phone number"
                      inputMode="numeric"
                      autoComplete="tel"
                      pattern="[0-9]*"
                      required
                    />

                  </div>
                </div>


                {/* CITY */}
                <div className="brochure-field">
                  <label htmlFor="brochure-city">
                    City
                  </label>

                  <div className="brochure-control">
                    <svg
                      className="brochure-control-icon"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 21C12 21 19 15.7 19 9.5C19 5.9 15.9 3 12 3C8.1 3 5 5.9 5 9.5C5 15.7 12 21 12 21Z"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />
                      <circle
                        cx="12"
                        cy="9.5"
                        r="2.5"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />
                    </svg>

                    <input
                      id="brochure-city"
                      type="text"
                      placeholder="Enter your city"
                      value={brochureFormData.city}
                      onChange={(e) =>
                        setBrochureFormData({
                          ...brochureFormData,
                          city: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

              </div>


              {/* ERROR */}
              {brochureSubmitError && (
                <div className="brochure-submit-error">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M12 8V13"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="12"
                      cy="16.5"
                      r="1"
                      fill="currentColor"
                    />
                  </svg>

                  <span>{brochureSubmitError}</span>
                </div>
              )}


              {/* ACTIONS */}
              <div className="brochure-form-footer">

                <p className="brochure-form-note">
                  Your information is kept secure and will only be used
                  to provide the requested product information.
                </p>

                <div className="brochure-form-actions">

                  <button
                    type="button"
                    className="brochure-cancel-btn"
                    disabled={brochureIsSubmitting}
                    onClick={() => {
                      if (!brochureIsSubmitting) {
                        setShowBrochureModal(false);
                      }
                    }}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="brochure-submit-btn"
                    disabled={brochureIsSubmitting}
                  >
                    {brochureIsSubmitting ? (
                      <>
                        <span className="brochure-spinner" />
                        Processing...
                      </>
                    ) : (
                      <>
                        Download Brochure

                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M12 3V15"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                          />
                          <path
                            d="M7 11L12 16L17 11"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M5 21H19"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                          />
                        </svg>
                      </>
                    )}
                  </button>

                </div>

              </div>

            </form>

          </div>
        </div>
      )}
    </>
  );
}

export default ProductSingle;