"use client";

import React, { useState } from 'react';
import Link from "next/link";
import { PRODUCTS_DATA } from '../data/productsData';
import './ConversationalAI.css'
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

import dpOverviewImg from '../assets/Products-img/Digital-payment/overview.jpg';
import dpCashlessImg from '../assets/Products-img/Digital-payment/cashless-payments.jpg';
import dpInvestmentImg from '../assets/Products-img/Digital-payment/instant-investment.jpg';
import dpRemittanceImg from '../assets/Products-img/Digital-payment/immediate-remittances.jpg';
import dpUtilityImg from '../assets/Products-img/Digital-payment/utility-payments.jpg';

import autopsyOverviewImg from '../assets/Products-img/e-autopsy-img/overview.jpg';
import autopsyRecordMgmtImg from '../assets/Products-img/e-autopsy-img/record-management.jpg';
import autopsyWorkflowMgmtImg from '../assets/Products-img/e-autopsy-img/workflow-management.jpg';
import autopsyDataAnalysisImg from '../assets/Products-img/e-autopsy-img/data-analysis-and-reports.jpg';

import csOverviewImg from '../assets/Products-img/Cyber-sentinel/overview.jpg';
import csRealtimeImg from '../assets/Products-img/Cyber-sentinel/realtime-monitoring.jpg';
import csAutomationImg from '../assets/Products-img/Cyber-sentinel/automation.jpg';
import csAnalysisImg from '../assets/Products-img/Cyber-sentinel/analysis.jpg';
import multiProcesserImg from '../assets/Products-img/conversational-AI-img/multi-processer.png';
import neuralLanImg from '../assets/Products-img/conversational-AI-img/Neural-lan.png';
import realtimeIntegrationImg from '../assets/Products-img/conversational-AI-img/realtime-integration.png';
import comprehensiveAnalyticsImg from '../assets/Products-img/conversational-AI-img/compransive-analytic.png';
import solutionOverviewImg from '../assets/Products-img/conversational-AI-img/solution-overview.png';
import conversationalAIImg from '../assets/Products-img/conversational-AI-img/convational-AI.png';

function ConversationalAI() {
  const slug = 'conversational-ai-companion';
  const [activeModule, setActiveModule] = useState(0);
  const [showBrochureModal, setShowBrochureModal] = useState(false);

  const allowedBrochureSlugs = ['core-banking-solution', 'imis-solution', 'digital-payments', 'end-to-end-cyber-security'];
  const showBrochureButton = allowedBrochureSlugs.includes(slug);

  const ebankerModules = [
    {
      title: "Overview",
      subtitle: "E-banker, a robust and widely deployed Core Banking Solution, simplifies complex banking tasks and operations. It streamlines customer onboarding with eKYC, facilitates transactions and loans across various channels, and enhances transactions through both physical branches and digital platform",
      image: overviewImg,
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    },
    {
      title: "Loan Origination System",
      subtitle: "It facilitates the processing and management of loan applications. It automates the entire loan origination process, from application stage to sanction stage. This solution includes features like information gathering, credit analysis, loan processing, and document management. It is instrumental in reducing costs and also in improving efficiency.",
      image: loanOriginationImg,
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
    },
    {
      title: "Loan Management System",
      subtitle: "It is designed to enable any Financial Institution (FI) in loan accounts for disbursements and repayments. This system vastly improves the functioning of Fis in reducing risk of errors and increasing customer satisfaction.",
      image: loanManagementImg,
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
    },
    {
      title: "NPA Management System",
      subtitle: "For every FI effective Non Performing Assets (NPA) management is crucial for maintaining financial stability, reducing write-offs, and promoting sustainable economic growth. This system enables the Fis to systematically identify, assess, and rehabilitate NPAs, preventing further delinquency and ensuring optimal resource allocation.",
      image: npaManagementImg,
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
    },
    {
      title: "Reporting & Analytics",
      subtitle: "Reporting and analytics are essential components that enable FIs to track and analyse business performance, customer behaviour, and market trends. This system generates various Reports which provide valuable insights for decision-making. With accurate and timely analytics, FIs can optimize operations and make data-driven decisions to drive growth and profitability.",
      image: reportingImg,
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
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
      title: "Overview",
      subtitle: "The Integrated Business Suite (IBS) is a comprehensive ERP software designed to unify all core business functions into a single, cohesive system. It integrates essential requirements such as finance, HR, manufacturing, services, supply chain, and procurement, ensuring a smooth flow of processes and information across the entire organization.",
      image: ibsOverviewImg,
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    },
    {
      title: "Inventory Management",
      subtitle: "This in-built module of the solution has features for tracking inventory levels, managing inventory movements, generating purchase orders, and optimizing inventory counts. This system enables tracking and controlling inventory levels, managing workflows, and ensuring timely replenishment of stock.",
      image: ibsInventoryImg,
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"></path><rect x="7" y="2" width="10" height="4" rx="1"></rect><line x1="12" y1="12" x2="12" y2="12.01"></line></svg>
    },
    {
      title: "Accounting",
      subtitle: "The entire IBS suite is designed to integrate and streamline business operations, including financial management and accounting. This module manages financial transactions, recording journal entries, preparing financial statements, and maintaining ledgers within the IBS system.",
      image: ibsAccountingImg,
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
    },
    {
      title: "Production Planning",
      subtitle: "This module streamlines resource allocation such as materials, labour, and equipment, to meet demand while minimizing costs using in-built logic for forecasting, scheduling, and optimizing production to ensure efficiency and quality.",
      image: ibsProductionImg,
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10v6M12 4v16M12 4L4 8l8 4 8-4-8-4z"></path></svg>
    },
    {
      title: "Analytics",
      subtitle: "The IBS suite has a strong Analytics module to analyze and interpret the business performance and identify trends. It provides real-time insights, predictive modelling, and scenario planning to optimize processes. This module enables a more comprehensive view of business operations, allowing organizations to drive growth and competitive advantage.",
      image: ibsAnalyticsImg,
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
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
    }
  ];

  const placeholderModules = [
    {
      title: "Overview",
      subtitle: "Content details for this module will be provided shortly.",
      image: overviewImg,
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
    },
    {
      title: "Core Features",
      subtitle: "Content details for this module will be provided shortly.",
      image: overviewImg,
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path></svg>
    },
    {
      title: "Analytics & Reporting",
      subtitle: "Content details for this module will be provided shortly.",
      image: overviewImg,
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
    }
  ];

  const autopsyModules = [
    {
      title: "Overview",
      subtitle: "Autopsy management software is a type of digital tool designed to streamline and organize the processes involved in conducting autopsies. This software typically includes features such as electronic reporting, specimen tracking, and laboratory information system integration.",
      image: autopsyOverviewImg,
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    },
    {
      title: "Record Management",
      subtitle: "By automating routine tasks and providing real-time access to information, this software can also reduce errors and improve communication among healthcare teams.",
      image: autopsyRecordMgmtImg,
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
    },
    {
      title: "Workflow Management",
      subtitle: "This module helps in managing and tracking the various steps and tasks involved in the autopsy process, from case assignment to report generation, ensuring efficient and systematic workflow.",
      image: autopsyWorkflowMgmtImg,
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
    },
    {
      title: "Data Analysis and Reports",
      subtitle: "The system includes modules for data analysis and research, enabling the aggregation and analysis of autopsy findings for research and educational purposes.",
      image: autopsyDataAnalysisImg,
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
    }
  ];

  const cyberSentinelModules = [
    {
      title: "Overview",
      subtitle: "This is a Virtual Security Operations Center (VSOC) is a centralized management platform that enables organizations to monitor, detect, and respond to security threats in real-time.",
      image: csOverviewImg,
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    },
    {
      title: "Real-time Monitoring",
      subtitle: "provides a comprehensive solution for threat hunting, incident response, and security orchestration. It integrates multiple security tools and systems, providing a single pane of glass for visibility and collaboration. Key features include threat intelligence, incident response automation, and reporting and analytics.",
      image: csRealtimeImg,
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
    },
    {
      title: "Automation",
      subtitle: "It features orchestration and automation capabilities that enable the coordination of actions across multiple security tools. This allows for streamlined incident response and remediation processes by automating repetitive tasks and ensuring consistent responses to security events.",
      image: csAutomationImg,
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
    },
    {
      title: "Analytics",
      subtitle: "It offers robust reporting and analytics capabilities, allowing organizations to gain insights into their security posture, identify trends, and make data-driven decisions to enhance cybersecurity measures.",
      image: csAnalysisImg,
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
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
    mainHeading = "Cyber Security Modules";
    mainSubheading = "Monitor, detect, analyse and respond to threats 24/7 and 365 days a year.";
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
          @media (max-width: 768px) {
            .prod-hero-title {
              font-size: 2.2rem !important;
            }
            .prod-hero-text {
              font-size: 1rem !important;
            }
          }
        `}
      </style>
      {/* Product Hero Section - matches home page style */}
      <div className="section-hero">
        <div className="hero-image" style={{}}></div>
        <div className="container">
          <div className="content-wrap text-center">
            {product.logo && (
              <div className="product-logo effectFade fadeUp mb-4 d-flex justify-content-center">
                <img
                  src={product.logo.src}
                  alt={`${product.title} Logo`}
                  style={{ maxWidth: '160px', height: 'auto', objectFit: 'contain', marginBottom: '8px' }}
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



      {/* Fintech Interactive Modules Section */}
      {currentModules.length > 0 && (
        <div id="next-section" className="modules-fintech-section section-spacing" style={{ position: 'relative', overflow: 'hidden', paddingBottom: '20px' }}>
          <style>
            {`
            .fintech-modules-wrapper {
              padding-top: 60px;
              padding-bottom: 20px;
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
            .timeline-card {
              background: #ffffff;
              border-radius: 20px;
              padding: 24px 30px;
              box-shadow: 0 4px 20px rgba(0,0,0,0.02);
              border: 1px solid rgba(0,0,0,0.04);
              display: flex;
              align-items: flex-start;
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
              to { opacity: 0.5; transform: scale(1); }
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
                        {currentModules[activeModule]?.subtitle.substring(0, 75)}{currentModules[activeModule]?.subtitle.length > 75 ? '...' : ''}
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
                  <div className="dynamic-content-card mt-4 p-4" style={{ backgroundColor: '#ffffff', borderRadius: '20px', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
                    <h3 key={`title-${activeModule}`} style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '12px', animation: 'fadeIn 0.5s ease-out forwards' }}>
                      {currentModules[activeModule]?.title}
                    </h3>
                    <p key={`desc-${activeModule}`} style={{ color: '#666', fontSize: '1.05rem', lineHeight: '1.6', margin: 0, animation: 'fadeIn 0.5s ease-out forwards' }}>
                      {currentModules[activeModule]?.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="col-lg-6">
                <div className="timeline-modules-container effectFade fadeUp" >
                  <div className="timeline-line"></div>

                  {currentModules.map((mod, idx) => (
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
                          <div
                            className="timeline-subtitle-wrap"
                            style={{
                              maxHeight: activeModule === idx ? '250px' : '0px',
                              opacity: activeModule === idx ? 1 : 0,
                              marginTop: activeModule === idx ? '12px' : '0'
                            }}
                          >
                            <p className="timeline-subtitle">{mod.subtitle}</p>
                          </div>
                        </div>
                        <div className="timeline-arrow">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Proposed Conversational AI Solution Section */}
      <div className="conversational-solution-wrapper section-spacing-lg" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Ambient background glows */}
        <div className="bg-glow-orb orb-left"></div>
        <div className="bg-glow-orb orb-right"></div>

        <div className="container conversational-premium-container">

          {/* Top Header */}
          <div className="solution-header d-flex align-items-center mb-5 effectFade fadeUp">
            <div className="red-accent-line"></div>
            <h2 className="header-title">Proposed Conversational AI Solution</h2>
          </div>

          <div className="row g-5 align-items-center">

            {/* LEFT SIDE - Robot + Mobile Phone Illustration */}
            <div className="col-lg-6">
              <div className="illustration-area effectFade fadeUp">
                {/* Connection lines and glow layers behind the image */}
                <div className="illustration-bg-glow"></div>
                <div className="orbit-lines-container">
                  <div className="orbit-line orbit-1"></div>
                  <div className="orbit-line orbit-2"></div>
                  <div className="orbit-line orbit-3"></div>
                </div>

                {/* Floating dots & particles */}
                <div className="floating-dot dot-1"></div>
                <div className="floating-dot dot-2"></div>
                <div className="floating-dot dot-3"></div>
                <div className="floating-dot dot-4"></div>

                <img
                  src={multiProcesserImg.src}
                  alt="Conversational AI Solution Illustration"
                  className="solution-illustration"
                />
              </div>
            </div>

            {/* RIGHT SIDE - Content & Feature Cards */}
            <div className="col-lg-6">
              <div className="solution-content effectFade fadeUp">

                <h3 className="platform-heading">
                  <span className="text-red-gradient">Multi-Channel </span>
                  <br />
                  <span className="text-navy"> Conversational AI Platform</span>
                </h3>

                {/* Glowing red divider line with dot */}
                <div className="glowing-divider">
                  <div className="divider-line"></div>
                  <div className="divider-dot-glow"></div>
                </div>

                {/* Feature Cards Stack */}
                <div className="feature-cards-stack">

                  {/* Card 1 */}
                  <div className="premium-glass-card">
                    <div className="icon-box-wrapper">
                      <div className="icon-box-glow"></div>
                      <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="card-icon">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                          <path d="M14.05 2A9 9 0 0 1 22 9.94" strokeWidth="2" strokeDasharray="2,2" />
                          <path d="M14.05 5.5A5.5 5.5 0 0 1 18.5 9.95" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                    <div className="card-content">
                      <p className="card-text">
                        The system will support automated voice calling, SMS messaging, WhatsApp integration, web-based self-service portals, and mobile app interfaces.
                      </p>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="premium-glass-card">
                    <div className="icon-box-wrapper">
                      <div className="icon-box-glow"></div>
                      <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="card-icon">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </div>
                    </div>
                    <div className="card-content">
                      <p className="card-text">
                        Citizens can be reached through their preferred medium, enhancing engagement and improving success rates.
                      </p>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="premium-glass-card">
                    <div className="icon-box-wrapper">
                      <div className="icon-box-glow"></div>
                      <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="card-icon">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 15 14" />
                          <path d="M12 2a10 10 0 1 0 10 10" />
                          <text x="12" y="13.5" dominantBaseline="middle" textAnchor="middle" fill="currentColor" fontSize="6px" fontWeight="800" fontFamily="system-ui">24/7</text>
                        </svg>
                      </div>
                    </div>
                    <div className="card-content">
                      <p className="card-text">
                        The platform will be accessible 24/7, ensuring flexibility and convenience for citizens to respond or make payments at their convenience.
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>

        <style>
          {`
            /* Section Wrapper Styling */
            .conversational-solution-wrapper {
              position: relative;
             
              z-index: 1;
            }

            .conversational-premium-container {
              position: relative;
              // background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.8) 100%);
              // backdrop-filter: blur(24px);
              // -webkit-backdrop-filter: blur(24px);
              // border: 1px solid rgba(255, 255, 255, 0.85);
              border-radius: 32px;
              // padding: 50px 35px;
              // box-shadow: 0 30px 60px rgba(0, 0, 0, 0.02), 
                          // inset 0 1px 0 rgba(255, 255, 255, 0.8);
              overflow: hidden;
              transition: all 0.5s ease;
            }

            .conversational-premium-container::before {
              content: '';
              position: absolute;
              top: 0; left: 0; right: 0; bottom: 0;
              border-radius: 32px;
              padding: 1px;
              // background: linear-gradient(135deg, rgba(255, 45, 21, 0.15), rgba(255, 255, 255, 0.9), rgba(255, 45, 21, 0.05));
              // -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
              // -webkit-mask-composite: xor;
              // mask-composite: exclude;
              pointer-events: none;
              z-index: 0;
            }

            /* Ambient Glow */
            .conversational-premium-container::after {
              content: '';
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0; left: 0;
              box-shadow: 0 0 80px rgba(255, 45, 21, 0.04);
              pointer-events: none;
              z-index: -1;
            }

            /* Ambient Background Glow Orbs */
            .bg-glow-orb {
              position: absolute;
              width: 600px;
              height: 600px;
              border-radius: 50%;
              filter: blur(100px);
              opacity: 0.4;
              z-index: 0;
              pointer-events: none;
            }

            .orb-left {
              top: -15%;
              left: -15%;
              background: radial-gradient(circle, rgba(255, 45, 21, 0.06) 0%, transparent 70%);
            }

            .orb-right {
              bottom: -15%;
              right: -15%;
              background: radial-gradient(circle, rgba(255, 45, 21, 0.04) 0%, transparent 70%);
            }

            /* Top Header Styling */
            .solution-header {
              gap: 15px;
            }

            .red-accent-line {
              width: 6px;
              height: 32px;
              background-color: #ff2d15;
              border-radius: 3px;
              box-shadow: 0 0 10px rgba(255, 45, 21, 0.6);
            }

            .header-title {
              font-size: 2.2rem;
              font-weight: 750 !important;
              color: #0b132b !important;
              margin: 0 !important;
              letter-spacing: -0.5px;
            }

            /* Illustration Area Styling */
            .illustration-area {
              position: relative;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 40px;
              z-index: 2;
            }

            .solution-illustration {
              max-width: 95%;
              height: auto;
              position: relative;
              z-index: 5;
              animation: float-illustration 6s ease-in-out infinite;
              filter: drop-shadow(0 15px 35px rgba(0, 0, 0, 0.05));
            }

            .illustration-bg-glow {
              position: absolute;
              width: 320px;
              height: 320px;
              background: radial-gradient(circle, rgba(255, 45, 21, 0.12) 0%, transparent 70%);
              filter: blur(30px);
              z-index: 1;
              pointer-events: none;
            }

            /* Orbit connection lines style */
            .orbit-lines-container {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 100%;
              height: 100%;
              pointer-events: none;
              z-index: 0;
            }

            .orbit-line {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              border: 1px dashed rgba(255, 45, 21, 0.08);
              border-radius: 50%;
            }

            .orbit-1 { width: 380px; height: 380px; }
            .orbit-2 { width: 500px; height: 500px; }
            .orbit-3 { width: 620px; height: 620px; }

            /* Floating dots & particles */
            .floating-dot {
              position: absolute;
              background: #ff2d15;
              border-radius: 50%;
              box-shadow: 0 0 10px rgba(255, 45, 21, 0.8);
              animation: pulse-dot 3s infinite alternate;
            }

            .dot-1 { width: 6px; height: 6px; top: 15%; left: 20%; animation-delay: 0s; }
            .dot-2 { width: 8px; height: 8px; top: 25%; right: 15%; animation-delay: 0.5s; }
            .dot-3 { width: 5px; height: 5px; bottom: 20%; left: 25%; animation-delay: 1s; }
            .dot-4 { width: 7px; height: 7px; bottom: 30%; right: 20%; animation-delay: 1.5s; }

            /* Right Content Area Styling */
            .platform-heading {
              font-size: 2.8rem;
              font-weight: 800;
              line-height: 1.15;
              letter-spacing: -1px;
              margin-bottom: 20px;
            }

            .text-navy {
              color: #0b132b;
            }

            .text-red-gradient {
              background: linear-gradient(135deg, #ff2d15 0%, #ff5b4f 100%);
              -webkit-background-clip: text;
              -webkit-text-fillColor: transparent;
              display: inline-block;
            }

            /* Glowing Red Divider Styling */
            .glowing-divider {
              display: flex;
              align-items: center;
              position: relative;
              width: 100%;
              // height: 20px;
              margin-bottom: 40px;
            }

            .divider-line {
              width: 80px;
              height: 2.5px;
              background: linear-gradient(90deg, #ff2d15, transparent);
              border-radius: 1px;
            }

            .divider-dot-glow {
              width: 6px;
              height: 6px;
              background-color: #ff2d15;
              border-radius: 50%;
              margin-left: -4px;
              box-shadow: 0 0 10px rgba(255, 45, 21, 0.8), 0 0 20px rgba(255, 45, 21, 0.4);
              animation: pulse-glow-dot 2s infinite;
            }

            /* Feature Cards Stack Styling */
            .feature-cards-stack {
              display: flex;
              flex-direction: column;
              gap: 12px;
            }

            .premium-glass-card {
              display: flex;
              align-items: center;
              background: rgba(255, 255, 255, 0.65);
              backdrop-filter: blur(16px);
              -webkit-backdrop-filter: blur(16px);
              border: 1px solid rgba(255, 255, 255, 0.6);
              border-radius: 16px;
              padding: 16px 20px;
              gap: 16px;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.015), 
                          inset 0 1px 0 rgba(255, 255, 255, 0.6);
              transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
              cursor: default;
              position: relative;
              overflow: hidden;
              animation: premiumCardFloat 6s ease-in-out infinite;
            }

            /* Stagger float animations for cards */
            .premium-glass-card:nth-child(1) { animation-delay: 0s; }
            .premium-glass-card:nth-child(2) { animation-delay: 1.5s; }
            .premium-glass-card:nth-child(3) { animation-delay: 3s; }

            @keyframes premiumCardFloat {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-4px); }
              100% { transform: translateY(0px); }
            }

            .premium-glass-card::before {
              content: '';
              position: absolute;
              top: 0; left: 0; right: 0; bottom: 0;
              border-radius: 20px;
              padding: 1px;
              background: linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(255, 45, 21, 0.0));
              -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
              -webkit-mask-composite: xor;
              mask-composite: exclude;
              pointer-events: none;
              transition: all 0.4s ease;
            }

            .premium-glass-card:hover {
              animation-play-state: paused; /* Pause float on hover */
              transform: translateY(-6px) scale(1.015);
              background: rgba(255, 255, 255, 0.95);
              border-color: rgba(255, 45, 21, 0.35);
              box-shadow: 0 20px 40px rgba(255, 45, 21, 0.08),
                          0 0 12px rgba(255, 45, 21, 0.04),
                          inset 0 1px 0 rgba(255, 255, 255, 0.9);
            }

            .premium-glass-card:hover::before {
              background: linear-gradient(135deg, rgba(255, 45, 21, 0.35), rgba(255, 255, 255, 0.9));
            }

            /* Icon Box Styling */
            .icon-box-wrapper {
              position: relative;
              flex-shrink: 0;
            }

            .icon-box {
              width: 42px;
              height: 42px;
              background: linear-gradient(135deg, #ff2d15 0%, #ff5b4f 100%);
              border-radius: 10px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #ffffff;
              box-shadow: 0 6px 15px rgba(255, 45, 21, 0.25);
              position: relative;
              z-index: 2;
              transition: all 0.4s ease;
            }

            .icon-box-glow {
              position: absolute;
              top: -4px; left: -4px; right: -4px; bottom: -4px;
              background: radial-gradient(circle, rgba(255, 45, 21, 0.25) 0%, transparent 70%);
              filter: blur(4px);
              z-index: 1;
              border-radius: 14px;
              opacity: 0.8;
              transition: all 0.4s ease;
            }

            .premium-glass-card:hover .icon-box {
              transform: scale(1.05) rotate(-3deg);
              box-shadow: 0 10px 20px rgba(255, 45, 21, 0.35);
            }

            .premium-glass-card:hover .icon-box-glow {
              opacity: 1;
              transform: scale(1.15);
            }

            .card-icon {
              width: 20px;
              height: 20px;
            }

            /* Card Content Typography */
            .card-content {
              flex: 1;
            }

            .card-text {
              font-size: 0.95rem !important;
              line-height: 1.5 !important;
              color: #4a5568 !important;
              margin: 0 !important;
              font-weight: 500 !important;
            }

            /* Animations Keyframes */
            @keyframes float-illustration {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-12px); }
              100% { transform: translateY(0px); }
            }

            @keyframes pulse-dot {
              0% { transform: scale(1); opacity: 0.6; }
              100% { transform: scale(1.3); opacity: 1; }
            }

            @keyframes pulse-glow-dot {
              0% { transform: scale(1); box-shadow: 0 0 10px rgba(255, 45, 21, 0.8); }
              50% { transform: scale(1.2); box-shadow: 0 0 18px rgba(255, 45, 21, 1), 0 0 30px rgba(255, 45, 21, 0.4); }
              100% { transform: scale(1); box-shadow: 0 0 10px rgba(255, 45, 21, 0.8); }
            }

            /* Responsive Adjustments */
            @media (max-width: 991px) {
              .conversational-premium-container {
                // padding: 40px 25px;
                border-radius: 24px;
              }

              .header-title {
                font-size: 1.8rem;
              }

              .platform-heading {
                font-size: 2.2rem;
              }

              .illustration-area {
                padding: 20px;
              }
              
              .orbit-1 { width: 300px; height: 300px; }
              .orbit-2 { width: 400px; height: 400px; }
              .orbit-3 { width: 500px; height: 500px; }
            }

            @media (max-width: 575px) {
              .conversational-premium-container {
                // padding: 30px 15px;
                
                border-radius: 20px;
              }

              .header-title {
                font-size: 1.5rem;
              }

              .platform-heading {
                font-size: 1.8rem;
              }

              .premium-glass-card {
                flex-direction: column;
                align-items: flex-start;
                padding: 20px;
                gap: 15px;
              }
            }
          `}
        </style>
      </div>

      {/* NLP Capabilities Section */}
      <div className="nlp-capabilities-wrapper section-spacing-lg" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Ambient background glows */}
        <div className="bg-glow-orb orb-left-nlp"></div>
        <div className="bg-glow-orb orb-right-nlp"></div>

        <div className="container nlp-premium-container">
          <div className="row g-5 align-items-center">

            {/* LEFT SIDE - Content and List Items */}
            <div className="col-lg-6">
              <div className="nlp-content effectFade fadeUp">

                <h3 className="nlp-heading">
                  {/* Advanced <span className="text-red-gradient">Natural Language Processing</span> (NLP) Capabilities */}
                  Advanced Natural Language Processing (NLP) Capabilities

                </h3>

                {/* Glowing red divider line with dots */}
                <div className="glowing-divider">
                  <div className="divider-line"></div>
                  <div className="divider-dots-wrap">
                    <span className="dot dot-glow"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                </div>

                {/* List items stack */}
                <div className="nlp-list-stack">

                  {/* Item 1 */}
                  <div className="nlp-list-item d-flex align-items-start gap-4">
                    <div className="nlp-icon-outer flex-shrink-0">
                      <div className="nlp-icon-inner">
                        {/* Translation Icon */}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="nlp-svg-icon">
                          <path d="M5 8h14M4 4L1 20h6l1-5h8l1 5h6L19 4z" />
                          <path d="M12 8l-2.5 5h5z" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                    <div className="nlp-item-body d-flex align-items-start gap-2">
                      <span className="red-arrow-bullet">►</span>
                      <p className="nlp-text">
                        The platform will leverage AI-driven NLP engines that support over 12 Indian languages.
                      </p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="nlp-list-item d-flex align-items-start gap-4">
                    <div className="nlp-icon-outer flex-shrink-0">
                      <div className="nlp-icon-inner">
                        {/* Audio Wave Icon */}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="nlp-svg-icon">
                          <path d="M12 2v20M17 5v14M7 5v14M22 9v6M2 9v6" />
                        </svg>
                      </div>
                    </div>
                    <div className="nlp-item-body d-flex align-items-start gap-2">
                      <span className="red-arrow-bullet">►</span>
                      <p className="nlp-text">
                        It will understand and process voice inputs, respond intelligently, and adapt conversational tone and content based on the user's sentiment and behavior.
                      </p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="nlp-list-item d-flex align-items-start gap-4">
                    <div className="nlp-icon-outer flex-shrink-0">
                      <div className="nlp-icon-inner">
                        {/* User Group Icon */}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="nlp-svg-icon">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </div>
                    </div>
                    <div className="nlp-item-body d-flex align-items-start gap-2">
                      <span className="red-arrow-bullet">►</span>
                      <p className="nlp-text">
                        Regional slang, tone sensitivity, and appropriate escalation logic will be embedded to maintain a citizen-friendly experience.
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* RIGHT SIDE - Image Area with floating Supporting Badge */}
            <div className="col-lg-6">
              <div className="nlp-image-area effectFade fadeUp" >
                <div className="nlp-image-bg-glow"></div>

                <img
                  src={neuralLanImg.src}
                  alt="Advanced NLP Capabilities Illustration"
                  className="nlp-illustration"
                />

                {/* Supporting Languages Badge */}
                <div className="supporting-languages-badge">
                  <div className="globe-icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="globe-icon">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>
                  <span className="badge-label-text">Support multiple languages</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        <style>
          {`
            /* NLP Section Styling */
            .nlp-capabilities-wrapper {
              position: relative;
              z-index: 1;
            }

            .nlp-premium-container {
              position: relative;
              // background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.8) 100%);
              // backdrop-filter: blur(24px);
              // -webkit-backdrop-filter: blur(24px);
              // border: 1px solid rgba(255, 255, 255, 0.85);
              border-radius: 32px;
              // padding: 50px 35px;
              // box-shadow: 0 30px 60px rgba(0, 0, 0, 0.02), 
              //             inset 0 1px 0 rgba(255, 255, 255, 0.8);
              overflow: hidden;
              transition: all 0.5s ease;
            }

            .nlp-premium-container::before {
              content: '';
              position: absolute;
              top: 0; left: 0; right: 0; bottom: 0;
              border-radius: 32px;
              padding: 1px;
              // background: linear-gradient(135deg, rgba(255, 45, 21, 0.15), rgba(255, 255, 255, 0.9), rgba(255, 45, 21, 0.05));
              // -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
              // -webkit-mask-composite: xor;
              // mask-composite: exclude;
              pointer-events: none;
              z-index: 0;
            }

            /* Ambient Glow */
            .nlp-premium-container::after {
              content: '';
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0; left: 0;
              box-shadow: 0 0 80px rgba(255, 45, 21, 0.045);
              pointer-events: none;
              z-index: -1;
            }

            .orb-left-nlp {
              top: -10%;
              left: 5%;
              background: radial-gradient(circle, rgba(255, 45, 21, 0.04) 0%, transparent 70%);
            }

            .orb-right-nlp {
              bottom: 10%;
              right: 5%;
              background: radial-gradient(circle, rgba(255, 45, 21, 0.05) 0%, transparent 70%);
            }

            /* Heading & Text styling */
            .nlp-heading {
              font-size: 2.8rem;
              font-weight: 800;
              line-height: 1.25;
              letter-spacing: -1px;
              color: #0b132b;
              margin-bottom: 20px;
            }

            .divider-dots-wrap {
              display: flex;
              gap: 4px;
              margin-left: 6px;
              align-items: center;
            }

            .divider-dots-wrap .dot {
              width: 4px;
              height: 4px;
              background-color: #ff2d15;
              border-radius: 50%;
              opacity: 0.6;
            }

            .divider-dots-wrap .dot-glow {
              width: 6px;
              height: 6px;
              opacity: 1;
              box-shadow: 0 0 8px rgba(255, 45, 21, 0.8);
            }

            /* List Styling */
            .nlp-list-stack {
              display: flex;
              flex-direction: column;
              gap: 18px;
            }

            .nlp-list-item {
              transition: all 0.3s ease;
            }

            .nlp-icon-outer {
              width: 46px;
              height: 46px;
              border-radius: 50%;
              background: rgba(255, 45, 21, 0.04);
              border: 1px solid rgba(255, 45, 21, 0.08);
              display: flex;
              align-items: center;
              justify-content: center;
              transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
            }

            .nlp-icon-inner {
              width: 34px;
              height: 34px;
              border-radius: 50%;
              background: rgba(255, 45, 21, 0.06);
              display: flex;
              align-items: center;
              justify-content: center;
              color: #ff2d15;
              transition: all 0.4s ease;
            }

            .nlp-list-item:hover .nlp-icon-outer {
              transform: scale(1.08);
              border-color: rgba(255, 45, 21, 0.3);
              background: rgba(255, 45, 21, 0.08);
              box-shadow: 0 0 15px rgba(255, 45, 21, 0.15);
            }

            .nlp-list-item:hover .nlp-icon-inner {
              background: rgba(255, 45, 21, 0.12);
              transform: rotate(5deg);
            }

            .nlp-svg-icon {
              width: 18px;
              height: 18px;
            }

            .nlp-item-body {
              flex: 1;
              padding-top: 4px;
            }

            .red-arrow-bullet {
              color: #ff2d15;
              font-size: 0.8rem;
              margin-top: 3px;
              margin-right: 6px;
              display: inline-block;
            }

            .nlp-text {
              font-size: 1rem !important;
              line-height: 1.5 !important;
              color: #4a5568 !important;
              margin: 0 !important;
              font-weight: 500 !important;
            }

            /* Image Styling Area */
            .nlp-image-area {
              position: relative;
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 2;
            }

            .nlp-illustration {
              max-width: 90%;
              height: auto;
              position: relative;
              z-index: 5;
              animation: float-illustration 6s ease-in-out infinite;
              filter: drop-shadow(0 15px 35px rgba(0, 0, 0, 0.05));
            }

            .nlp-image-bg-glow {
              position: absolute;
              width: 350px;
              height: 350px;
              background: radial-gradient(circle, rgba(255, 45, 21, 0.12) 0%, transparent 70%);
              filter: blur(35px);
              z-index: 1;
              pointer-events: none;
            }

            /* Floating Languages Badge */
            .supporting-languages-badge {
              position: absolute;
              bottom: -5px;
              left: 20%;
              background: #ffffff;
              border: 1px solid rgba(255, 45, 21, 0.15);
              border-radius: 100px;
              padding: 10px 24px 10px 10px;
              display: flex;
              align-items: center;
              gap: 12px;
              z-index: 10;
              box-shadow: 0 10px 30px rgba(255, 45, 21, 0.08), 
                          0 1px 3px rgba(0, 0, 0, 0.02);
              animation: badge-float-premium 4s ease-in-out infinite;
              animation-delay: 1s;
            }

            .globe-icon-box {
              width: 36px;
              height: 36px;
              background: linear-gradient(135deg, #ff2d15 0%, #ff5b4f 100%);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #ffffff;
              box-shadow: 0 4px 10px rgba(255, 45, 21, 0.25);
            }

            .globe-icon {
              width: 18px;
              height: 18px;
            }

            .badge-label-text {
              font-size: 1rem;
              font-weight: 600;
              color: #2d3748;
            }

            .text-red {
              color: #ff2d15;
            }

            /* Responsive Adjustments */
            @media (max-width: 991px) {
              .nlp-premium-container {
                padding: 40px 25px;
                border-radius: 24px;
              }

              .nlp-heading {
                font-size: 2.2rem;
              }

              .supporting-languages-badge {
                left: 10%;
                bottom: -20px;
              }
            }

            @media (max-width: 575px) {
              .nlp-premium-container {
                padding: 30px 15px;
                border-radius: 20px;
              }

              .nlp-heading {
                font-size: 1.8rem;
              }

              .nlp-icon-outer {
                width: 48px;
                height: 48px;
              }

              .nlp-icon-inner {
                width: 36px;
                height: 36px;
              }

              .nlp-text {
                font-size: 1rem !important;
              }

              .supporting-languages-badge {
                position: relative;
                bottom: auto;
                left: auto;
                margin-top: 20px;
                align-self: center;
              }
            }
          `}
        </style>
      </div>

      {/* Real-Time Integration Section */}
      <div className="realtime-integration-wrapper section-spacing-lg" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Ambient background glows */}
        <div className="bg-glow-orb orb-left-rti"></div>
        <div className="bg-glow-orb orb-right-rti"></div>

        <div className="container rti-premium-container">
          <div className="row g-5 align-items-center">

            {/* LEFT SIDE - Robot Computer Illustration */}
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="rti-image-area effectFade fadeUp">
                <div className="rti-image-bg-glow"></div>

                <img
                  src={realtimeIntegrationImg.src}
                  alt="Real-Time Integration Illustration"
                  className="rti-illustration"
                />
              </div>
            </div>

            {/* RIGHT SIDE - Content and Feature Cards */}
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="rti-content effectFade fadeUp" >

                <h3 className="rti-heading">
                  <span className="text-red-gradient">Real-Time Integration</span> with existing Billing Systems and Payment Gateways
                </h3>

                {/* Glowing red divider line with dots */}
                <div className="glowing-divider">
                  <div className="divider-line"></div>
                  <div className="divider-dots-wrap">
                    <span className="dot dot-glow"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                </div>

                {/* Vertical feature cards stack */}
                <div className="rti-cards-stack">

                  {/* Card 1 */}
                  <div className="rti-premium-card d-flex align-items-center gap-4">
                    <div className="rti-icon-box flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rti-svg-icon">
                        <ellipse cx="12" cy="5" rx="9" ry="3" />
                        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
                      </svg>
                    </div>
                    <div className="rti-card-text-area">
                      <p className="rti-card-text">
                        Seamless connectivity with existing system database will allow the BOT to fetch up-to-date details and personalize outreach.
                      </p>
                    </div>
                    <div className="rti-arrow-box flex-shrink-0">
                      <span className="rti-chevron-arrow">❯</span>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="rti-premium-card d-flex align-items-center gap-4">
                    <div className="rti-icon-box flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rti-svg-icon">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                      </svg>
                    </div>
                    <div className="rti-card-text-area">
                      <p className="rti-card-text">
                        Integration with existing databases, payment gateways, and UPI platforms will ensure instant payment confirmation and update the backend systems in real time.
                      </p>
                    </div>
                    <div className="rti-arrow-box flex-shrink-0">
                      <span className="rti-chevron-arrow">❯</span>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="rti-premium-card d-flex align-items-center gap-4">
                    <div className="rti-icon-box flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rti-svg-icon">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="M9 11l2 2 4-4" strokeWidth="2.5" />
                      </svg>
                    </div>
                    <div className="rti-card-text-area">
                      <p className="rti-card-text">
                        This will eliminate redundancy, reduce manual errors, and enhance data reliability.
                      </p>
                    </div>
                    <div className="rti-arrow-box flex-shrink-0">
                      <span className="rti-chevron-arrow">❯</span>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>

        <style>
          {`
            /* RTI Section Styling */
            .realtime-integration-wrapper {
              position: relative;
              z-index: 1;
            }

            .rti-premium-container {
              position: relative;
              // background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.8) 100%);
              // backdrop-filter: blur(24px);
              // -webkit-backdrop-filter: blur(24px);
              // border: 1px solid rgba(255, 255, 255, 0.85);
              border-radius: 32px;
              // padding: 50px 35px;
              // box-shadow: 0 30px 60px rgba(0, 0, 0, 0.02), 
              //             inset 0 1px 0 rgba(255, 255, 255, 0.8);
              overflow: hidden;
              transition: all 0.5s ease;
            }

            .rti-premium-container::before {
              content: '';
              position: absolute;
              top: 0; left: 0; right: 0; bottom: 0;
              border-radius: 32px;
              padding: 1px;
              // background: linear-gradient(135deg, rgba(255, 45, 21, 0.15), rgba(255, 255, 255, 0.9), rgba(255, 45, 21, 0.05));
              // -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
              // -webkit-mask-composite: xor;
              // mask-composite: exclude;
              pointer-events: none;
              z-index: 0;
            }

            /* Ambient Glow */
            .rti-premium-container::after {
              content: '';
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0; left: 0;
              box-shadow: 0 0 80px rgba(255, 45, 21, 0.045);
              pointer-events: none;
              z-index: -1;
            }

            .orb-left-rti {
              top: -10%;
              left: 5%;
              background: radial-gradient(circle, rgba(255, 45, 21, 0.04) 0%, transparent 70%);
            }

            .orb-right-rti {
              bottom: 10%;
              right: 5%;
              background: radial-gradient(circle, rgba(255, 45, 21, 0.05) 0%, transparent 70%);
            }

            /* Heading & Text styling */
            .rti-heading {
              font-size: 2.8rem;
              font-weight: 800;
              line-height: 1.25;
              letter-spacing: -1px;
              color: #0b132b;
              margin-bottom: 20px;
            }

            /* Cards stack styling */
            .rti-cards-stack {
              display: flex;
              flex-direction: column;
              gap: 12px;
            }

            .rti-premium-card {
              position: relative;
              background: rgba(255, 255, 255, 0.4);
              backdrop-filter: blur(12px);
              -webkit-backdrop-filter: blur(12px);
              border: 1px solid rgba(255, 255, 255, 0.8);
              border-radius: 16px;
              padding: 16px 20px;
              box-shadow: 0 4px 20px rgba(0, 0, 0, 0.01), 
                          inset 0 1px 0 rgba(255, 255, 255, 0.5);
              transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
              z-index: 1;
              cursor: pointer;
            }

            .rti-premium-card::before {
              content: '';
              position: absolute;
              top: 0; left: 0; right: 0; bottom: 0;
              border-radius: 20px;
              padding: 1px;
              background: linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(255, 45, 21, 0.05));
              -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
              -webkit-mask-composite: xor;
              mask-composite: exclude;
              pointer-events: none;
              z-index: -1;
              transition: opacity 0.4s ease;
            }

            .rti-premium-card:hover {
              transform: translateY(-4px);
              background: rgba(255, 255, 255, 0.9);
              border-color: rgba(255, 45, 21, 0.2);
              box-shadow: 0 15px 35px rgba(255, 45, 21, 0.06),
                          0 4px 10px rgba(0, 0, 0, 0.01);
            }

            .rti-icon-box {
              width: 42px;
              height: 42px;
              border-radius: 10px;
              background: rgba(255, 45, 21, 0.05);
              border: 1px solid rgba(255, 45, 21, 0.08);
              display: flex;
              align-items: center;
              justify-content: center;
              color: #ff2d15;
              transition: all 0.4s ease;
              box-shadow: 0 4px 12px rgba(255, 45, 21, 0.03);
            }

            .rti-premium-card:hover .rti-icon-box {
              background: linear-gradient(135deg, #ff2d15 0%, #ff5b4f 100%);
              color: #ffffff;
              box-shadow: 0 6px 15px rgba(255, 45, 21, 0.25);
              transform: scale(1.05) rotate(-3deg);
            }

            .rti-svg-icon {
              width: 20px;
              height: 20px;
            }

            .rti-card-text-area {
              flex: 1;
            }

            .rti-card-text {
              font-size: 0.95rem !important;
              line-height: 1.5 !important;
              color: #4a5568 !important;
              margin: 0 !important;
              font-weight: 500 !important;
            }

            .rti-arrow-box {
              display: flex;
              align-items: center;
              justify-content: center;
              color: #ff2d15;
              opacity: 0.4;
              transition: all 0.3s ease;
            }

            .rti-chevron-arrow {
              font-size: 0.95rem;
              font-weight: 700;
            }

            .rti-premium-card:hover .rti-arrow-box {
              opacity: 1;
              transform: translateX(3px);
            }

            /* Image Styling Area */
            .rti-image-area {
              position: relative;
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 2;
            }

            .rti-illustration {
              max-width: 90%;
              height: auto;
              position: relative;
              z-index: 5;
              animation: float-illustration 6s ease-in-out infinite;
              filter: drop-shadow(0 15px 35px rgba(0, 0, 0, 0.05));
            }

            .rti-image-bg-glow {
              position: absolute;
              width: 350px;
              height: 350px;
              background: radial-gradient(circle, rgba(255, 45, 21, 0.12) 0%, transparent 70%);
              filter: blur(35px);
              z-index: 1;
              pointer-events: none;
            }

            /* Responsive Adjustments */
            @media (max-width: 991px) {
              .rti-premium-container {
                // padding: 40px 25px;
                border-radius: 24px;
              }

              .rti-heading {
                font-size: 2.2rem;
              }
            }

            @media (max-width: 575px) {
              .rti-premium-container {
                // padding: 30px 15px;
                border-radius: 20px;
              }

              .rti-heading {
                font-size: 1.8rem;
              }

              .rti-premium-card {
                padding: 12px;
                gap: 15px ;
              }

              .rti-icon-box {
                width: 46px;
                height: 46px;
                border-radius: 12px;
              }

              .rti-card-text {
                font-size: 0.95rem !important;
              }
            }
          `}
        </style>
      </div>

      {/* Comprehensive Analytics Dashboard Section */}
      <div className="comprehensive-analytics-wrapper section-spacing-lg" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Ambient background glows */}
        <div className="bg-glow-orb orb-left-cad"></div>
        <div className="bg-glow-orb orb-right-cad"></div>

        <div className="container cad-premium-container">
          <div className="row g-5 align-items-center">

            {/* LEFT SIDE - Content and Sub-Cards */}
            <div className="col-lg-6">
              <div className="cad-content effectFade fadeUp">

                <h3 className="cad-heading">
                  Comprehensive <span className="text-red-gradient">Analytics Dashboard</span>
                </h3>

                {/* Glowing red divider line with dots */}
                <div className="glowing-divider">
                  <div className="divider-line"></div>
                  <div className="divider-dots-wrap">
                    <span className="dot dot-glow"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                </div>

                {/* Bullets & sub-cards */}
                <div className="cad-bullets-stack">

                  {/* Bullet 1 */}
                  <div className="cad-bullet-item">
                    <div className="cad-bullet-header d-flex align-items-start gap-2">
                      <span className="red-arrow-bullet">►</span>
                      <p className="cad-bullet-title-text">
                        The system will include an advanced analytics and reporting module to monitor:
                      </p>
                    </div>

                    {/* Sub-cards stack */}
                    <div className="cad-subcards-list">

                      {/* Sub-card 1 */}
                      <div className="cad-sub-card d-flex align-items-center gap-3">
                        <div className="cad-sub-icon-box flex-shrink-0">
                          {/* Daily recovery performance chart */}
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="cad-sub-svg-icon">
                            <line x1="18" y1="20" x2="18" y2="10" />
                            <line x1="12" y1="20" x2="12" y2="4" />
                            <line x1="6" y1="20" x2="6" y2="14" />
                          </svg>
                        </div>
                        <p className="cad-sub-card-text">Daily and cumulative recovery performance</p>
                      </div>

                      {/* Sub-card 2 */}
                      <div className="cad-sub-card d-flex align-items-center gap-3">
                        <div className="cad-sub-icon-box flex-shrink-0">
                          {/* Engagement metrics */}
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="cad-sub-svg-icon">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                          </svg>
                        </div>
                        <p className="cad-sub-card-text">Engagement metrics (call success, drop off, refusal rates)</p>
                      </div>

                      {/* Sub-card 3 */}
                      <div className="cad-sub-card d-flex align-items-center gap-3">
                        <div className="cad-sub-icon-box flex-shrink-0">
                          {/* Real-time escalation data */}
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="cad-sub-svg-icon">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </svg>
                        </div>
                        <p className="cad-sub-card-text">Real-time escalation data (e.g., citizen requesting call-back, dispute resolution)</p>
                      </div>

                    </div>
                  </div>

                  {/* Bullet 2 */}
                  <div className="cad-bullet-item">
                    <div className="cad-bullet-header d-flex align-items-start gap-2">
                      <span className="red-arrow-bullet">►</span>
                      <p className="cad-bullet-desc-text">
                        These insights will help in optimizing the AI scripts, targeting defaulters more effectively, and adapting communication strategies dynamically.
                      </p>
                    </div>
                  </div>

                </div>

                {/* Bottom row: 4 mini cards */}
                <div className="cad-bottom-mini-grid">

                  {/* Mini Card 1 */}
                  <div className="cad-mini-card">
                    <div className="cad-mini-icon-outer">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="cad-mini-svg-icon">
                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                        <polyline points="16 7 22 7 22 13" />
                      </svg>
                    </div>
                    <span className="cad-mini-title">Real-Time Insights</span>
                  </div>

                  {/* Mini Card 2 */}
                  <div className="cad-mini-card">
                    <div className="cad-mini-icon-outer">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="cad-mini-svg-icon">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 2v10l8 4" />
                      </svg>
                    </div>
                    <span className="cad-mini-title">Advanced Reporting</span>
                  </div>

                  {/* Mini Card 3 */}
                  <div className="cad-mini-card">
                    <div className="cad-mini-icon-outer">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="cad-mini-svg-icon">
                        <circle cx="12" cy="12" r="10" />
                        <circle cx="12" cy="12" r="6" />
                        <circle cx="12" cy="12" r="2" />
                      </svg>
                    </div>
                    <span className="cad-mini-title">Smarter Decisions</span>
                  </div>

                  {/* Mini Card 4 */}
                  <div className="cad-mini-card">
                    <div className="cad-mini-icon-outer">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="cad-mini-svg-icon">
                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                        <polyline points="17 6 23 6 23 12" />
                      </svg>
                    </div>
                    <span className="cad-mini-title">Better Outcomes</span>
                  </div>

                </div>

              </div>
            </div>

            {/* RIGHT SIDE - Laptop Analytics Illustration */}
            <div className="col-lg-6">
              <div className="cad-image-area effectFade fadeUp" >
                <div className="cad-image-bg-glow"></div>

                <img
                  src={comprehensiveAnalyticsImg.src}
                  alt="Comprehensive Analytics Dashboard Illustration"
                  className="cad-illustration"
                />
              </div>
            </div>

          </div>
        </div>

        <style>
          {`
            /* CAD Section Styling */
            .comprehensive-analytics-wrapper {
              position: relative;
              z-index: 1;
            }

            .cad-premium-container {
              position: relative;
              // background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.8) 100%);
              // backdrop-filter: blur(24px);
              // -webkit-backdrop-filter: blur(24px);
              // border: 1px solid rgba(255, 255, 255, 0.85);
              border-radius: 32px;
              // padding: 50px 35px;
              // box-shadow: 0 30px 60px rgba(0, 0, 0, 0.02), 
              //             inset 0 1px 0 rgba(255, 255, 255, 0.8);
              overflow: hidden;
              transition: all 0.5s ease;
            }

            .cad-premium-container::before {
              content: '';
              position: absolute;
              top: 0; left: 0; right: 0; bottom: 0;
              border-radius: 32px;
              padding: 1px;
              // background: linear-gradient(135deg, rgba(255, 45, 21, 0.15), rgba(255, 255, 255, 0.9), rgba(255, 45, 21, 0.05));
              // -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
              // -webkit-mask-composite: xor;
              // mask-composite: exclude;
              pointer-events: none;
              z-index: 0;
            }

            /* Ambient Glow */
            .cad-premium-container::after {
              content: '';
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0; left: 0;
              box-shadow: 0 0 80px rgba(255, 45, 21, 0.045);
              pointer-events: none;
              z-index: -1;
            }

            .orb-left-cad {
              top: -10%;
              left: 5%;
              background: radial-gradient(circle, rgba(255, 45, 21, 0.04) 0%, transparent 70%);
            }

            .orb-right-cad {
              bottom: 10%;
              right: 5%;
              background: radial-gradient(circle, rgba(255, 45, 21, 0.05) 0%, transparent 70%);
            }

            /* Heading & Text styling */
            .cad-heading {
              font-size: 2.8rem;
              font-weight: 800;
              line-height: 1.25;
              letter-spacing: -1px;
              color: #0b132b;
              margin-bottom: 20px;
            }

            .cad-bullets-stack {
              display: flex;
              flex-direction: column;
              gap: 16px;
            }

            .cad-bullet-title-text {
              font-size: 1.05rem;
              line-height: 1.5 !important;
              color: #2d3748 !important;
              margin: 0 !important;
              font-weight: 600 !important;
            }

            .cad-bullet-desc-text {
              font-size: 1rem ;
              line-height: 1.5 !important;
              color: #4a5568 !important;
              margin: 0 !important;
              font-weight: 500 !important;
            }

            /* Sub-cards styling */
            .cad-subcards-list {
              display: flex;
              flex-direction: column;
              gap: 8px;
              margin-top: 10px;
              margin-left: 20px;
            }

            .cad-sub-card {
              background: rgba(255, 255, 255, 0.5);
              border: 1px solid rgba(255, 45, 21, 0.06);
              border-radius: 12px;
              padding: 10px 16px;
              box-shadow: 0 4px 15px rgba(0, 0, 0, 0.01);
              transition: all 0.3s ease;
            }

            .cad-sub-card:hover {
              background: #ffffff;
              transform: translateX(4px);
              border-color: rgba(255, 45, 21, 0.15);
              box-shadow: 0 8px 20px rgba(255, 45, 21, 0.04);
            }

            .cad-sub-icon-box {
              width: 30px;
              height: 30px;
              border-radius: 50%;
              background: rgba(255, 45, 21, 0.04);
              display: flex;
              align-items: center;
              justify-content: center;
              color: #ff2d15;
            }

            .cad-sub-svg-icon {
              width: 15px;
              height: 15px;
            }

            .cad-sub-card-text {
              font-size: 0.92rem ;
              line-height: 1.5 !important;
              color: #4a5568 !important;
              margin: 0 !important;
              font-weight: 500 !important;
            }

            /* Bottom Mini Cards Grid */
            .cad-bottom-mini-grid {
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              gap: 10px;
              margin-top: 25px;
              border-top: 1px dashed rgba(255, 45, 21, 0.1);
              padding-top: 20px;
            }

            .cad-mini-card {
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
              gap: 10px;
              background: rgba(255, 255, 255, 0.4);
              border: 1px solid rgba(255, 255, 255, 0.8);
              border-radius: 10px;
              padding: 12px 8px;
              transition: all 0.3s ease;
            }

            .cad-mini-card:hover {
              background: #ffffff;
              transform: translateY(-3px);
              border-color: rgba(255, 45, 21, 0.2);
              box-shadow: 0 8px 20px rgba(255, 45, 21, 0.05);
            }

            .cad-mini-icon-outer {
              width: 32px;
              height: 32px;
              border-radius: 8px;
              background: rgba(255, 45, 21, 0.04);
              display: flex;
              align-items: center;
              justify-content: center;
              color: #ff2d15;
              transition: all 0.3s ease;
            }

            .cad-mini-card:hover .cad-mini-icon-outer {
              background: #ff2d15;
              color: #ffffff;
            }

            .cad-mini-svg-icon {
              width: 16px;
              height: 16px;
            }

            .cad-mini-title {
              font-size: 0.8rem;
              font-weight: 600;
              color: #4a5568;
            }

            /* Image Styling Area */
            .cad-image-area {
              position: relative;
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 2;
            }

            .cad-illustration {
              max-width: 95%;
              height: auto;
              position: relative;
              z-index: 5;
              animation: float-illustration 6s ease-in-out infinite;
              filter: drop-shadow(0 15px 35px rgba(0, 0, 0, 0.05));
            }

            .cad-image-bg-glow {
              position: absolute;
              width: 350px;
              height: 350px;
              background: radial-gradient(circle, rgba(255, 45, 21, 0.12) 0%, transparent 70%);
              filter: blur(35px);
              z-index: 1;
              pointer-events: none;
            }

            /* Responsive Adjustments */
            @media (max-width: 991px) {
              .cad-premium-container {
                // padding: 40px 25px;
                border-radius: 24px;
              }

              .cad-heading {
                font-size: 2.2rem;
              }

              .cad-bottom-mini-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }

            @media (max-width: 575px) {
              .cad-premium-container {
                // padding: 30px 15px;
                border-radius: 20px;
              }

              .cad-heading {
                font-size: 1.8rem;
              }

              .cad-subcards-list {
                margin-left: 0px;
              }

              .cad-sub-card {
                padding: 10px 15px;
              }

              .cad-bottom-mini-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 10px;
              }
            }
          `}
        </style>
      </div>

      {/* Solution Overview Section */}
      <div className="solution-overview-wrapper section-spacing-lg" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container so-premium-container">
          <div className="row g-5 align-items-center">

            {/* LEFT COLUMN - Title & List Stack */}
            <div className="col-lg-6">
              <div className="so-content effectFade fadeUp">

                <h3 className="so-heading">
                  Solution <span className="so-highlight">Overview</span>
                </h3>

                {/* Divider */}
                <div className="glowing-divider so-divider">
                  <div className="divider-line"></div>
                  <div className="divider-dots-wrap">
                    <span className="dot dot-glow"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                </div>

                {/* List items stack */}
                <div className="so-list-stack">

                  {/* Item 1: Shield */}
                  <div className="so-list-item d-flex align-items-center gap-3">
                    <div className="so-icon-outer flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="so-svg-icon">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <span className="red-arrow-bullet">►</span>
                    <p className="so-text">Robust, scalable, and secure.</p>
                  </div>

                  {/* Item 2: Sync */}
                  <div className="so-list-item d-flex align-items-center gap-3">
                    <div className="so-icon-outer flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="so-svg-icon">
                        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                      </svg>
                    </div>
                    <span className="red-arrow-bullet">►</span>
                    <p className="so-text">Ensuring real time data synchronization</p>
                  </div>

                  {/* Item 3: Mic */}
                  <div className="so-list-item d-flex align-items-center gap-3">
                    <div className="so-icon-outer flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="so-svg-icon">
                        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" />
                      </svg>
                    </div>
                    <span className="red-arrow-bullet">►</span>
                    <p className="so-text">Automated, intelligent voice based outreach</p>
                  </div>

                  {/* Item 4: Phone */}
                  <div className="so-list-item d-flex align-items-center gap-3">
                    <div className="so-icon-outer flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="so-svg-icon">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <span className="red-arrow-bullet">►</span>
                    <p className="so-text">Personalized outbound voice calls</p>
                  </div>

                  {/* Item 5: Chat */}
                  <div className="so-list-item d-flex align-items-center gap-3">
                    <div className="so-icon-outer flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="so-svg-icon">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        <circle cx="8" cy="10" r="1" fill="currentColor" />
                        <circle cx="12" cy="10" r="1" fill="currentColor" />
                        <circle cx="16" cy="10" r="1" fill="currentColor" />
                      </svg>
                    </div>
                    <span className="red-arrow-bullet">►</span>
                    <p className="so-text">Two way interactive conversation</p>
                  </div>

                  {/* Item 6: NLP */}
                  <div className="so-list-item d-flex align-items-center gap-3">
                    <div className="so-icon-outer flex-shrink-0 text-nlp">
                      <span className="icon-nlp-text">NLP</span>
                    </div>
                    <span className="red-arrow-bullet">►</span>
                    <p className="so-text">Natural Language Processing (NLP) and Text-to-Speech (TTS)</p>
                  </div>

                  {/* Item 7: Translation */}
                  <div className="so-list-item d-flex align-items-center gap-3">
                    <div className="so-icon-outer flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="so-svg-icon">
                        <path d="M5 8h14M4 4L1 20h6l1-5h8l1 5h6L19 4z" />
                        <path d="M12 8l-2.5 5h5z" strokeWidth="2" />
                      </svg>
                    </div>
                    <span className="red-arrow-bullet">►</span>
                    <p className="so-text">Recognize and respond in Regional Languages</p>
                  </div>

                  {/* Item 8: Translation */}
                  {/* <div className="so-list-item d-flex align-items-center gap-3">
                    <div className="so-icon-outer flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="so-svg-icon">
                        <path d="M5 8h14M4 4L1 20h6l1-5h8l1 5h6L19 4z" />
                        <path d="M12 8l-2.5 5h5z" strokeWidth="2" />
                      </svg>
                    </div>
                    <span className="red-arrow-bullet">►</span>
                    <p className="so-text">Recognize and respond in Marathi, Hindi, and English</p>
                  </div> */}

                </div>

              </div>
            </div>

            {/* RIGHT COLUMN - Laptop Robot Illustration */}
            <div className="col-lg-6 so-image-area-col">
              <div className="so-image-area effectFade fadeUp" >
                <div className="so-image-bg-glow"></div>

                <img
                  src={solutionOverviewImg.src}
                  alt="Solution Overview Illustration"
                  className="so-illustration"
                />
              </div>
            </div>

          </div>
        </div>

        <style>
          {`
            /* Solution Overview Section styling */
            .solution-overview-wrapper{
          
            padding-left: 20px;
            padding-right: 20px;

            }
            .so-premium-container {
              position: relative;
              // background: linear-gradient(135deg, #9a0d0d 0%, #4a0000 100%);
              // border: 1px solid rgba(255, 255, 255, 0.15);
              border-radius: 32px;
              padding: 50px 35px;
              // box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12), 
              //             inset 0 1px 0 rgba(255, 255, 255, 0.1);
              overflow: hidden;
              transition: all 0.5s ease;

              background:
    radial-gradient(circle at 12% 20%, rgba(94, 180, 255, .32), transparent 42%),
    radial-gradient(circle at 40% 55%, rgba(30, 90, 200, .16), transparent 48%),
    radial-gradient(circle at 88% 15%, rgba(139, 92, 246, .30), transparent 40%),
    radial-gradient(circle at 85% 90%, rgba(99, 60, 220, .22), transparent 50%),
    linear-gradient(140deg, #0E3FB8, #0A2E80 32%, #1A2C6E 58%, #1C1F52 78%, #191A3E 100%);
  box-shadow:
    inset 0 1px rgba(255, 255, 255, .08),
    inset 0 -6px rgba(0, 0, 0, .30),
    0 30px 70px rgba(0, 0, 0, .45);
            }

            .so-premium-container::before {
              content: '';
              position: absolute;
              top: 0; left: 0; right: 0; bottom: 0;
              border-radius: 32px;
              padding: 1px;
              // background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05));
              -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
              -webkit-mask-composite: xor;
              mask-composite: exclude;
              pointer-events: none;
              z-index: 0;
            }

            /* Ambient Glow */
            .so-premium-container::after {
              content: '';
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0; left: 0;
              // box-shadow: inset 0 0 100px rgba(255, 45, 21, 0.3);
              pointer-events: none;
              z-index: -1;
            }

            /* Heading styling */
            .so-heading {
              font-size: 2.8rem;
              font-weight: 800;
              line-height: 1.25;
              letter-spacing: -1px;
              color: #ffffff;
              margin-bottom: 20px;
            }

            .so-highlight {
              color: #ff5b4f;
              text-shadow: 0 0 20px rgba(255, 91, 79, 0.3);
            }

            .so-divider .divider-line {
              background: linear-gradient(90deg, #ff5b4f 0%, transparent 100%);
            }

            .so-divider .dot {
              background-color: #ff5b4f;
            }

            .so-divider .dot-glow {
              box-shadow: 0 0 8px #ff5b4f;
            }

            /* List styling */
            .so-list-stack {
              display: flex;
              flex-direction: column;
              gap: 10px;
            }

            .so-list-item {
              background: rgba(255, 255, 255, 0.04);
              border: 1px solid rgba(255, 255, 255, 0.08);
              border-radius: 100px;
              padding: 8px 18px;
              transition: all 0.3s ease;
            }

            .so-list-item:hover {
              background: rgba(255, 255, 255, 0.09);
              transform: translateX(6px);
              border-color: rgba(255, 255, 255, 0.2);
            }

            .so-icon-outer {
              width: 32px;
              height: 32px;
              border-radius: 50%;
              background: linear-gradient(135deg, #c91a1a 0%, #7e0303 100%);
              border: 1px solid rgba(255, 255, 255, 0.15);
              display: flex;
              align-items: center;
              justify-content: center;
              color: #ffffff;
              transition: all 0.3s ease;
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            }

            .so-list-item:hover .so-icon-outer {
              transform: scale(1.1) rotate(5deg);
              box-shadow: 0 0 15px rgba(255, 91, 79, 0.4);
            }

            .so-svg-icon {
              width: 16px;
              height: 16px;
            }

            .text-nlp {
              font-size: 0.75rem;
              font-weight: 700;
              letter-spacing: -0.2px;
            }

            .icon-nlp-text {
              line-height: 1;
            }

            .so-text {
              font-size: 0.95rem;
              line-height: 1.5 !important;
              color: rgba(255, 255, 255, 0.9) !important;
              margin: 0 !important;
              font-weight: 500 !important;
            }

            /* Image styling area */
            .so-image-area {
              position: relative;
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 2;
            }

            .so-illustration {
              max-width: 95%;
              height: auto;
              position: relative;
              z-index: 5;
              animation: float-illustration 6s ease-in-out infinite;
              filter: drop-shadow(0 15px 35px rgba(0, 0, 0, 0.3));
            }

            .so-image-bg-glow {
              position: absolute;
              width: 350px;
              height: 350px;
              background: radial-gradient(circle, rgba(255, 91, 79, 0.25) 0%, transparent 70%);
              filter: blur(35px);
              z-index: 1;
              pointer-events: none;
            }

            /* Responsive Adjustments */
            @media (max-width: 991px) {
              .so-premium-container {
                padding: 40px 25px;
                border-radius: 24px;
              }

              .so-heading {
                font-size: 2.2rem;
              }
            }

            @media (max-width: 575px) {
              .so-premium-container {
                padding: 4px auto;
                border-radius: 20px;
              }

              .so-heading {
                font-size: 1.8rem;
              }

              .so-list-item {
                border-radius: 20px;
                padding: 12px;
                align-items: flex-start !important;
              }

              .so-text {
                font-size: 0.95rem ;
              }
            }
          `}
        </style>
      </div>

      {/* Conversational AI Use-Cases Section */}
      <div className="use-cases-wrapper section-spacing-lg" style={{ position: 'relative', overflow: 'hidden', height: '100%' }}>
        {/* Ambient background glows */}
        <div className="bg-glow-orb orb-left-uc"></div>
        <div className="bg-glow-orb orb-right-uc"></div>

        <div className="container uc-premium-container">

          {/* Top Header inside container */}
          <div className="uc-header effectFade fadeUp">
            <div className="uc-header-inner">
              <span className="red-vertical-bar">|</span>
              <h2 className="uc-main-heading">
                Conversational <span className="text-red-gradient">AI Use-Cases</span>
              </h2>
            </div>
            {/* Divider */}
            <div className="glowing-divider uc-divider">
              <div className="divider-line"></div>
              <div className="divider-dots-wrap">
                <span className="dot dot-glow"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </div>
          </div>

          <div className="row g-5 align-items-center mt-3 uc-section">

            {/* LEFT COLUMN - Illustration */}
            <div className="col-lg-5 col-md-12 text-center mt-0">
              <div className="uc-image-area effectFade fadeUp">
                <div className="uc-image-bg-glow"></div>

                <img
                  src={conversationalAIImg.src}
                  alt="Conversational AI Use-Cases Illustration"
                  className="uc-illustration"
                />
              </div>
            </div>

            {/* RIGHT COLUMN - Use Cases Grid */}
            <div className="col-lg-7 col-md-12 mt-0">
              <div className="uc-grid">

                {/* Card 1: Banking & Financial Services */}
                <div className="uc-card effectFade fadeUp">
                  <div className="uc-card-header d-flex align-items-center gap-3">
                    <div className="uc-card-icon-box flex-shrink-0">
                      {/* Bank building icon */}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="uc-card-svg-icon">
                        <path d="M3 22v-6h18v6M6 16v-6M10 16v-6M14 16v-6M18 16v-6M2 10L12 2l10 8" />
                      </svg>
                    </div>
                    <h4 className="uc-card-title">Banking & Financial Services</h4>
                  </div>

                  {/* Subtle divider inside card */}
                  <div className="uc-card-divider-wrap h-100">
                    <div className="uc-card-divider-line"></div>
                    <div className="uc-card-divider-dots">
                      <span className="c-dot"></span>
                      <span className="c-dot"></span>
                    </div>
                  </div>

                  <ul className="uc-bullets-list">
                    <li>Loan EMI payments</li>
                    <li>Credit card bill payments</li>
                    <li>Utility auto-pay setup</li>
                  </ul>
                </div>

                {/* Card 2: Traffic & Transport */}
                <div className="uc-card effectFade fadeUp" >
                  <div className="uc-card-header d-flex align-items-center gap-3">
                    <div className="uc-card-icon-box flex-shrink-0">
                      {/* Car icon */}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="uc-card-svg-icon">
                        <rect x="1" y="3" width="22" height="13" rx="2" ry="2" />
                        <path d="M7 16H3a2 2 0 0 0-2 2v3h2v-3h16v3h2v-3a2 2 0 0 0-2-2h-4M5 8h14M8 12h8" />
                      </svg>
                    </div>
                    <h4 className="uc-card-title">Traffic & Transport</h4>
                  </div>

                  {/* Subtle divider inside card */}
                  <div className="uc-card-divider-wrap">
                    <div className="uc-card-divider-line"></div>
                    <div className="uc-card-divider-dots">
                      <span className="c-dot"></span>
                      <span className="c-dot"></span>
                    </div>
                  </div>

                  <ul className="uc-bullets-list">
                    <li>Traffic Challan payments</li>
                    <li>Vehicle tax renewal</li>
                    <li>Parking fee payments</li>
                  </ul>
                </div>

                {/* Card 3: Telecom & Internet Services */}
                <div className="uc-card effectFade fadeUp" >
                  <div className="uc-card-header d-flex align-items-center gap-3">
                    <div className="uc-card-icon-box flex-shrink-0">
                      {/* Mobile phone / wifi icon */}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="uc-card-svg-icon">
                        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                        <line x1="12" y1="18" x2="12.01" y2="18" />
                        <path d="M12 6a3 3 0 0 1 3 3M12 3a6 6 0 0 1 6 6" />
                      </svg>
                    </div>
                    <h4 className="uc-card-title">Telecom & Internet Services</h4>
                  </div>

                  {/* Subtle divider inside card */}
                  <div className="uc-card-divider-wrap">
                    <div className="uc-card-divider-line"></div>
                    <div className="uc-card-divider-dots">
                      <span className="c-dot"></span>
                      <span className="c-dot"></span>
                    </div>
                  </div>

                  <ul className="uc-bullets-list">
                    <li>Mobile/DTH recharge</li>
                    <li>Postpaid bill payments</li>
                    <li>Internet subscription renewals</li>
                  </ul>
                </div>

                {/* Card 4: Insurance Sector */}
                <div className="uc-card effectFade fadeUp">
                  <div className="uc-card-header d-flex align-items-center gap-3">
                    <div className="uc-card-icon-box flex-shrink-0">
                      {/* Shield icon */}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="uc-card-svg-icon">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <h4 className="uc-card-title">Insurance Sector</h4>
                  </div>

                  {/* Subtle divider inside card */}
                  <div className="uc-card-divider-wrap">
                    <div className="uc-card-divider-line"></div>
                    <div className="uc-card-divider-dots">
                      <span className="c-dot"></span>
                      <span className="c-dot"></span>
                    </div>
                  </div>

                  <ul className="uc-bullets-list">
                    <li>Premium payment </li>
                    <li>Reminders & processing</li>
                    <li>Policy renewal payments</li>
                  </ul>
                </div>

                {/* Card 5: Utilities & Government Services */}
                <div className="uc-card effectFade fadeUp" >
                  <div className="uc-card-header d-flex align-items-center gap-3">
                    <div className="uc-card-icon-box flex-shrink-0">
                      {/* Government / Utility building with flag */}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="uc-card-svg-icon">
                        <path d="M4 22V4c0-.5.2-1 .6-1.4C5 2.2 5.5 2 6 2h12c.5 0 1 .2 1.4.6.4.4.6.9.6 1.4v18" />
                        <path d="M10 6h4M10 10h4M10 14h4M6 18h12" />
                      </svg>
                    </div>
                    <h4 className="uc-card-title">Utilities & Government Services</h4>
                  </div>

                  {/* Subtle divider inside card */}
                  <div className="uc-card-divider-wrap ">
                    <div className="uc-card-divider-line"></div>
                    <div className="uc-card-divider-dots">
                      <span className="c-dot"></span>
                      <span className="c-dot"></span>
                    </div>
                  </div>

                  <ul className="uc-bullets-list">
                    <li>Electricity, Water, Gas bill payments</li>
                    <li>Property tax or municipal services</li>
                  </ul>
                </div>

                {/* Card 6: Healthcare */}
                <div className="uc-card effectFade fadeUp" >
                  <div className="uc-card-header d-flex align-items-center gap-3">
                    <div className="uc-card-icon-box flex-shrink-0">
                      {/* Heartbeat EKG icon */}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="uc-card-svg-icon">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    </div>
                    <h4 className="uc-card-title">Healthcare</h4>
                  </div>

                  {/* Subtle divider inside card */}
                  <div className="uc-card-divider-wrap">
                    <div className="uc-card-divider-line"></div>
                    <div className="uc-card-divider-dots">
                      <span className="c-dot"></span>
                      <span className="c-dot"></span>
                    </div>
                  </div>

                  <ul className="uc-bullets-list">
                    <li>Hospital bill settlements</li>
                    <li>Health insurance premium payments</li>
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>

        <style>
          {`
            /* Use Cases Section Styling */
            .use-cases-wrapper {
              position: relative;
              z-index: 1;
            }

            .uc-premium-container {
              position: relative;
              // background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.8) 100%);
              // backdrop-filter: blur(24px);
              // -webkit-backdrop-filter: blur(24px);
              // border: 1px solid rgba(255, 255, 255, 0.85);
              border-radius: 32px;
              padding: 50px 35px;
              // box-shadow: 0 30px 60px rgba(0, 0, 0, 0.02), 
              //             inset 0 1px 0 rgba(255, 255, 255, 0.8);
              overflow: hidden;
              transition: all 0.5s ease;
            }

            .uc-premium-container::before {
              content: '';
              position: absolute;
              top: 0; left: 0; right: 0; bottom: 0;
              border-radius: 32px;
              padding: 1px;
              // background: linear-gradient(135deg, rgba(255, 45, 21, 0.15), rgba(255, 255, 255, 0.9), rgba(255, 45, 21, 0.05));
              // -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
              // -webkit-mask-composite: xor;
              // mask-composite: exclude;
              pointer-events: none;
              z-index: 0;
            }

            /* Ambient Glow */
            .uc-premium-container::after {
              content: '';
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0; left: 0;
              box-shadow: 0 0 80px rgba(255, 45, 21, 0.045);
              pointer-events: none;
              z-index: -1;
            }

            .orb-left-uc {
              top: -10%;
              left: 5%;
              background: radial-gradient(circle, rgba(255, 45, 21, 0.04) 0%, transparent 70%);
            }

            .orb-right-uc {
              bottom: 10%;
              right: 5%;
              background: radial-gradient(circle, rgba(255, 45, 21, 0.05) 0%, transparent 70%);
            }

            /* Header Section inside container */
            .uc-header {
              display: flex;
              align-items: center;
              gap: 15px;
              // margin-bottom: 35px;
              flex-wrap: wrap;
            }

            .red-vertical-bar {
              color: #ff2d15;
              font-size: 2.8rem;
              font-weight: 800;
              line-height: 1.1;
            }

            .uc-main-heading {
              font-size: 2.8rem;
              font-weight: 800;
              line-height: 1.1;
              letter-spacing: -1px;
              color: #0b132b;
              margin: 0;
            }

            .uc-divider {
              width: 100%;
              margin-top: 15px;
            }

            /* Illustration Styling */
            .uc-image-area {
              position: relative;
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 2;
            }

            .uc-illustration {
              max-width: 105%;
              width: 100%;
              height: auto;
              position: relative;
              z-index: 5;
              animation: float-illustration 6s ease-in-out infinite;
              filter: drop-shadow(0 15px 35px rgba(0, 0, 0, 0.05));
            }

            .uc-image-bg-glow {
              position: absolute;
              width: 420px;
              height: 420px;
              background: radial-gradient(circle, rgba(255, 45, 21, 0.12) 0%, transparent 70%);
              filter: blur(35px);
              z-index: 1;
              pointer-events: none;
            }

            /* Grid Layout for Use Cases Cards */
            .uc-grid {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              grid-auto-rows: 1fr;
              gap: 16px;
                align-items: stretch ;
            }

            .uc-card {
              position: relative;
              background: rgba(255, 255, 255, 0.5);
              backdrop-filter: blur(12px);
              -webkit-backdrop-filter: blur(12px);
              border: 1px solid rgba(255, 255, 255, 0.85);
              border-radius: 16px;
              padding: 18px 22px;
              box-shadow: 0 4px 20px rgba(0, 0, 0, 0.01);
              transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
              min-height: 194px;
            }

            .uc-card:hover {
              transform: translateY(-4px);
              background: rgba(255, 255, 255, 0.95);
              border-color: rgba(255, 45, 21, 0.2);
              box-shadow: 0 15px 35px rgba(255, 45, 21, 0.06),
                          0 4px 10px rgba(0, 0, 0, 0.01);
            }

            .uc-card-header {
              margin-bottom: 12px;
            }

            .uc-card-icon-box {
              width: 36px;
              height: 36px;
              border-radius: 10px;
              background: rgba(255, 45, 21, 0.04);
              border: 1px solid rgba(255, 45, 21, 0.08);
              display: flex;
              align-items: center;
              justify-content: center;
              color: #ff2d15;
              transition: all 0.4s ease;
            }

            .uc-card:hover .uc-card-icon-box {
              background: #ff2d15;
              color: #ffffff;
              transform: scale(1.05);
            }

            .uc-card-svg-icon {
              width: 18px;
              height: 18px;
            }

            .uc-card-title {
              font-size: 1.05rem;
              font-weight: 700;
              color: #0b132b;
              margin: 0;
            }

            /* Card Divider */
            .uc-card-divider-wrap {
              display: flex;
              align-items: center;
              gap: 8px;
              margin-bottom: 16px;
            }

            .uc-card-divider-line {
              flex: 1;
              height: 1px;
              background: linear-gradient(90deg, rgba(255, 45, 21, 0.25) 0%, transparent 100%);
            }

            .uc-card-divider-dots {
              display: flex;
              gap: 3px;
            }

            .uc-card-divider-dots .c-dot {
              width: 3px;
              height: 3px;
              border-radius: 50%;
              background: #ff2d15;
              opacity: 0.5;
            }

            /* Bullets */
            .uc-bullets-list {
              list-style-type: disc;
              margin-left: 20px !important;
              padding: 0 !important;
              display: flex;
              flex-direction: column;
              gap: 8px;
            }

            .uc-bullets-list li {
              font-size: 0.9rem;
              color: #4a5568;
              font-weight: 500;
              line-height: 1.4;
            }

            /* Responsive Adjustments */
           @media (max-width: 991px) {

  .uc-premium-container {
    padding: 40px 25px;
    border-radius: 24px;
  }

  .uc-main-heading {
    font-size: 2.2rem;
  }

  /* Mobile viewport */
  .col-lg-7:has(.uc-grid) {
    overflow: hidden;
  }

  .uc-grid {
    display: grid;
    grid-template-columns: repeat(2, 100%);
    grid-template-rows: repeat(3, auto);
    grid-auto-flow: column;
    gap: 16px;

    width: 100%;

    animation: ucMobileSlider 8s ease-in-out infinite;
  }

  .uc-grid .uc-card {
    width: 100%;
  }
}
  @keyframes ucMobileSlider {

  /* Show cards 1, 2, 3 */
  0%,
  40% {
    transform: translateX(0);
  }

  /* Move to cards 4, 5, 6 */
  50%,
  90% {
    transform: translateX(calc(-100% - 16px));
  }

  /* Return to first group */
  100% {
    transform: translateX(0);
  }
}

            @media (max-width: 575px) {
              .uc-premium-container {
                padding: 30px 15px;
                border-radius: 20px;
              }

              .uc-main-heading {
                font-size: 1.8rem;
              }

              .red-vertical-bar {
                font-size: 1.8rem;
              }

              .uc-card {
                padding: 12px;
                min-height: 144px;
              }

              .uc-card-title {
                font-size: 1.05rem;
              }
            }
          `}
        </style>
      </div>

      {/* Final Call To Action */}
      <div id="contact-section">
        <CTABannerSection
          title={`Ready to Transform Customer Experience with ${product.title}?`}
          subtitle={`Schedule a free consultation with our Conversational AI experts and discover how smart assistants can streamline customer interactions.`}
        />
      </div>

      {/* Brochure Modal */}
      {showBrochureModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999, backdropFilter: 'blur(4px)' }}>
          <div style={{ background: '#fff', borderRadius: '8px', padding: '40px', width: '100%', maxWidth: '600px', margin: '20px', boxShadow: '0 25px 50px rgba(0,0,0,0.15)', position: 'relative', animation: 'modalFadeIn 0.3s ease-out forwards' }}>

            <button
              onClick={() => setShowBrochureModal(false)}
              style={{ position: 'absolute', top: '15px', right: '15px', background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#888' }}
            >
              &times;
            </button>

            <form onSubmit={(e) => { e.preventDefault(); setShowBrochureModal(false); alert('Brochure download started!'); }}>
              <div className="row g-3">
                <div className="col-md-6">
                  <input type="text" placeholder="Full name*" required style={{ width: '100%', padding: '12px 15px', border: '1px solid #e0e0e0', borderRadius: '4px', outline: 'none', color: '#333' }} />
                </div>
                <div className="col-md-6">
                  <input type="email" placeholder="Email*" required style={{ width: '100%', padding: '12px 15px', border: '1px solid #e0e0e0', borderRadius: '4px', outline: 'none', color: '#333' }} />
                </div>
                <div className="col-md-6">
                  <div style={{ display: 'flex', border: '1px solid #e0e0e0', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ padding: '12px 10px', background: '#f8f9fa', borderRight: '1px solid #e0e0e0', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <span role="img" aria-label="India flag">🇮🇳</span>
                      <span style={{ fontSize: '0.6rem', color: '#888' }}>▼</span>
                    </div>
                    <input type="tel" placeholder="Phone number*" required style={{ width: '100%', padding: '12px 15px', border: 'none', outline: 'none', color: '#333' }} />
                  </div>
                </div>
                <div className="col-md-6">
                  <input type="text" placeholder="City" style={{ width: '100%', padding: '12px 15px', border: '1px solid #e0e0e0', borderRadius: '4px', outline: 'none', color: '#333' }} />
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '15px', marginTop: '30px' }}>
                <button type="button" onClick={() => setShowBrochureModal(false)} style={{ padding: '10px 24px', background: '#fff', border: '1px solid #e0e0e0', borderRadius: '4px', color: '#555', fontWeight: '500', cursor: 'pointer', transition: 'background 0.2s' }} onMouseOver={e => e.currentTarget.style.background = '#f0f0f0'} onMouseOut={e => e.currentTarget.style.background = '#fff'}>Cancel</button>
                <button type="submit" style={{ padding: '10px 24px', background: '#8a8d91', border: 'none', borderRadius: '4px', color: '#fff', fontWeight: '500', cursor: 'pointer', transition: 'background 0.2s' }} onMouseOver={e => e.currentTarget.style.background = '#6c757d'} onMouseOut={e => e.currentTarget.style.background = '#8a8d91'}>Submit</button>
              </div>
            </form>

          </div>
        </div>
      )}
    </>
  );
}

export default ConversationalAI;
