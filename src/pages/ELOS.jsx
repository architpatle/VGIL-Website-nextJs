"use client";

import React, { useState } from 'react';
import Link from "next/link";
import './ECRM.css'
import { PRODUCTS_DATA } from '../data/productsData';
import abstractWorldMapImg from '../assets/Products-img/image.png';
import eLOSImg from '../assets/Products-img/eLOS.png';
import CTABannerSection from '../components/services/CTABannerSection';

function ELOS() {
    const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const product = PRODUCTS_DATA.find((p) => p.slug === 'e-los') || {
        title: 'Fin Flow',
        subtitle: 'Unified Digital Ecosystem for Banks & Businesses',
        shortDescription: 'Optimize your financial operations by automating approvals, invoice processing, and budget tracking with Fin Flow.'
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        alert('Thank you for contacting us! Our financial workflow automation team will get back to you shortly.');
        setFormData({ name: '', phone: '', email: '', message: '' });
        setFormSubmitted(false);
    };

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
               .section-heading-responsive {
              font-size: 2.2rem ;
            }
              .overview-card {
              padding: 30px 20px !important;
            }
          }
        `}
            </style>
            {/* Product Hero Section - matches home page style */}
            <div className="section-hero">
                <div className="hero-image" style={{}}></div>
                <div className="container">
                    <div className="content-wrap text-center">
                        <div className="product-logo effectFade fadeUp mb-4 d-flex justify-content-center">
                            <img
                                src={eLOSImg.src}
                                alt={`${product.title} Logo`}
                                style={{ maxWidth: 'auto', maxHeight: '80px', objectFit: 'contain', marginBottom: '8px' }}
                            />
                        </div>
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
                {/* <a href="#overview" className="scroll-more">
          <span className="fw-semibold link1">Scroll for more</span>
          <i className="icon icon-long-arrow-alt-down-solid"></i>
        </a> */}
            </div>

            {/* 1. Product Overview Section */}
            <section id="overview" className="section-spacing-lg" style={{ position: 'relative', overflow: 'hidden' }}>
                <style>
                    {`
            @keyframes pulse-dot {
              0% { transform: scale(1); opacity: 0.6; }
              50% { transform: scale(1.3); opacity: 1; }
              100% { transform: scale(1); opacity: 0.6; }
            }
            @keyframes orbit {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            @keyframes float-cube {
              0% { transform: translateY(0px) rotateX(60deg) rotateZ(-45deg); }
              50% { transform: translateY(-10px) rotateX(60deg) rotateZ(-45deg); }
              100% { transform: translateY(0px) rotateX(60deg) rotateZ(-45deg); }
            }
            .red-bracket-container {
              position: relative;
              padding: 24px;
              width: 100%;
              max-width: 1100px;
              margin: 0 auto;
            }
            .bracket {
              position: absolute;
              width: 24px;
              height: 24px;
              border-color: #ff2b2b;
              border-style: solid;
              transition: all 0.3s ease;
            }
            .bracket-tl { top: 0; left: 0; border-width: 3px 0 0 3px; border-top-left-radius: 12px; }
            .bracket-tr { top: 0; right: 0; border-width: 3px 3px 0 0; border-top-right-radius: 12px; }
            .bracket-bl { bottom: 0; left: 0; border-width: 0 0 3px 3px; border-bottom-left-radius: 12px; }
            .bracket-br { bottom: 0; right: 0; border-width: 0 3px 3px 0; border-bottom-right-radius: 12px; }
            
            .overview-card {
              background: #ffffff;
              border-radius: 32px;
              border: 1px solid rgba(255, 43, 43, 0.15);
              box-shadow: 0 30px 60px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(255, 43, 43, 0.02);
              padding: 60px 50px;
              position: relative;
              overflow: hidden;
            }
            
            .text-highlight-pill {
              // display: inline-block;
              background: rgba(255, 43, 43, 0.04);
              color: #ff2b2b;
              font-weight: 700;
              padding: 4px 16px;
              border-radius: 20px;
              border: 1px solid rgba(255, 43, 43, 0.12);
              // margin: 0 4px;
            }
          `}
                </style>

                <div className="container">
                    {/* Section Header */}
                    <div className='section-heading-container' style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h2 className='section-heading-responsive' style={{ fontSize: '3.2rem', fontWeight: '800', color: '#1a1a1a', letterSpacing: '-1.5px', marginBottom: '20px', lineHeight: '1.2' }}>
                            Product <span style={{ color: '#ff2b2b' }}>Overview</span>
                        </h2>

                        {/* Glowing divider line below heading */}
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2px', position: 'relative', width: '200px', margin: '0 auto' }}>
                            <div style={{ height: '2px', width: '100%', background: 'linear-gradient(to right, transparent, #ff2b2b, transparent)', borderRadius: '10px' }}></div>
                            <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: '6px', height: '6px', backgroundColor: '#ff2b2b', borderRadius: '50%', boxShadow: '0 0 10px #ff2b2b, 0 0 20px #ff2b2b' }}></div>
                        </div>
                    </div>

                    <div className="red-bracket-container">
                        {/* Outer red corner brackets */}
                        <div className="bracket bracket-tl"></div>
                        <div className="bracket bracket-tr"></div>
                        <div className="bracket bracket-bl"></div>
                        <div className="bracket bracket-br"></div>

                        {/* The Main Overview Card */}
                        <div className="overview-card">
                            <div className="row align-items-center">
                                {/* Left Side: Concentric circles and 3D Isometric box */}
                                <div className=" overview-motion col-lg-5 d-flex justify-content-center md-mb-40" style={{ position: 'relative' }}>
                                    <div style={{ position: 'absolute', top: '10%', left: '10%', width: '100px', height: '80px', backgroundImage: 'radial-gradient(rgba(255, 43, 43, 0.15) 1px, transparent 1px)', backgroundSize: '10px 10px', opacity: 0.6 }}></div>
                                    <div style={{ position: 'absolute', bottom: '10%', right: '10%', width: '100px', height: '80px', backgroundImage: 'radial-gradient(rgba(255, 43, 43, 0.15) 1px, transparent 1px)', backgroundSize: '10px 10px', opacity: 0.6 }}></div>

                                    {/* Ring Container */}
                                    <div style={{ width: '320px', height: '320px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        {/* Ring 1 (Outer) */}
                                        <div style={{ position: 'absolute', width: '300px', height: '300px', borderRadius: '50%', border: '1px solid rgba(255, 43, 43, 0.1)', animation: 'orbit 20s linear infinite' }}>
                                            <div style={{ position: 'absolute', top: '15%', left: '15%', width: '8px', height: '8px', backgroundColor: '#ff2b2b', borderRadius: '50%', boxShadow: '0 0 10px #ff2b2b' }}></div>
                                            <div style={{ position: 'absolute', bottom: '20%', right: '15%', width: '8px', height: '8px', backgroundColor: '#ff2b2b', borderRadius: '50%', boxShadow: '0 0 10px #ff2b2b' }}></div>
                                        </div>
                                        {/* Ring 2 (Middle) */}
                                        <div style={{ position: 'absolute', width: '230px', height: '230px', borderRadius: '50%', border: '1px dashed rgba(255, 43, 43, 0.15)' }}></div>
                                        {/* Ring 3 (Inner) */}
                                        <div style={{ position: 'absolute', width: '160px', height: '160px', borderRadius: '50%', border: '1px solid rgba(255, 43, 43, 0.2)' }}></div>

                                        {/* Red glow behind the cube */}
                                        <div style={{ position: 'absolute', width: '140px', height: '140px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,43,43,0.15) 0%, transparent 70%)' }}></div>

                                        {/* 3D Isometric Cube Container */}
                                        <div style={{
                                            position: 'absolute',
                                            width: '120px',
                                            height: '120px',
                                            transformStyle: 'preserve-3d',
                                            animation: 'float-cube 4s ease-in-out infinite',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            {/* Translucent base plate */}
                                            <div style={{
                                                position: 'absolute',
                                                width: '90px',
                                                height: '90px',
                                                background: 'rgba(255, 43, 43, 0.1)',
                                                border: '2.5px solid rgba(255, 43, 43, 0.3)',
                                                borderRadius: '20px',
                                                transform: 'translateZ(-15px)',
                                                boxShadow: '0 15px 30px rgba(255, 43, 43, 0.15)',
                                            }}></div>
                                            {/* Solid Red cube top */}
                                            <div style={{
                                                position: 'absolute',
                                                width: '70px',
                                                height: '70px',
                                                background: 'linear-gradient(135deg, #ff2b2b 0%, #d61818 100%)',
                                                borderRadius: '16px',
                                                boxShadow: '0 12px 25px rgba(255, 43, 43, 0.35)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                border: '1.5px solid rgba(255, 255, 255, 0.2)',
                                            }}>
                                                {/* White loan processing vector icon */}
                                                <div style={{
                                                    color: '#ffffff',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    transform: 'rotateZ(45deg)'
                                                }}>
                                                    <svg
                                                        width="30"
                                                        height="30"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <rect x="4" y="3" width="16" height="18" rx="2" />
                                                        <path d="M9 3h6v3H9z" />
                                                        <path d="M8 11l2 2 4-4" />
                                                        <line x1="8" y1="16" x2="16" y2="16" />
                                                        <line x1="8" y1="19" x2="13" y2="19" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side: Description */}
                                <div className="col-lg-7">
                                    <div style={{ paddingLeft: '20px' }} className="md-p-0 overview-desc">
                                        <p style={{ fontSize: '1.15rem', color: '#444', lineHeight: '1.8', marginBottom: '0' }}>
                                            <span className="text-highlight-pill">eLOS</span> is a smart Loan Origination System designed to digitize and automate the lending journey from application to disbursement. It enables financial institutions to streamline loan processing, reduce manual intervention, and accelerate approval turnaround times.
                                        </p>

                                        {/* Red divider with a dot */}
                                        <div className='overview-desc-line' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', margin: '30px 0' }}>
                                            <div style={{ height: '1.5px', flex: 1, background: 'linear-gradient(to right, transparent, rgba(255, 43, 43, 0.3))' }}></div>
                                            <div style={{ width: '6px', height: '6px', backgroundColor: '#ff2b2b', borderRadius: '50%', boxShadow: '0 0 8px #ff2b2b' }}></div>
                                            <div style={{ height: '1.5px', flex: 1, background: 'linear-gradient(to left, transparent, rgba(255, 43, 43, 0.3))' }}></div>
                                        </div>

                                        <p style={{ fontSize: '1.15rem', color: '#444', lineHeight: '1.8', marginBottom: '0' }}>
                                            With AI-driven applicant scoring, smart loan recommendations based on customer profiles and risk factors, and customizable workflows for Gold, LAP, Vehicle, and Personal Loans, eLOS provides a faster, more efficient, and technology-driven approach to loan origination.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Key Capabilities Section */}
            <section id="capabilities" className="section-spacing-lg" style={{ position: 'relative', overflow: 'hidden' }}>
                <style>
                    {`
            .capabilities-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 30px;
            }
            @media (max-width: 991px) {
              .capabilities-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }
            @media (max-width: 767px) {
              .capabilities-grid {
                grid-template-columns: 1fr;
              }
            }
            
            .capability-card {
              position: relative;
              background: #ffffff;
              border-radius: 24px;
              padding: 40px 30px;
              border: 1px solid rgba(255, 43, 43, 0.08);
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.015);
              transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
              height: 100%;
              overflow: hidden;
              z-index: 1;
              display: flex;
              align-items: center;
              gap: 25px;
            }
            
            .capability-card:hover {
              transform: translateY(-8px);
              border-color: rgba(255, 43, 43, 0.25);
              box-shadow: 0 25px 50px rgba(255, 43, 43, 0.05);
            }
            
            .capability-icon-container {
              width: 76px;
              height: 76px;
              border-radius: 50%;
              background: #ffffff;
              border: 1px solid rgba(255, 43, 43, 0.15);
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;
              flex-shrink: 0;
              box-shadow: 0 8px 20px rgba(255, 43, 43, 0.04);
            }
            
            .capability-icon-glow {
              position: absolute;
              top: -6px;
              left: -6px;
              right: -6px;
              bottom: -6px;
              border-radius: 50%;
              border: 1px solid rgba(255, 43, 43, 0.08);
              background: radial-gradient(circle, rgba(255, 43, 43, 0.04) 0%, transparent 70%);
            }
            
            .capability-card-number {
              position: absolute;
              bottom: 10px;
              right: 25px;
              font-size: 3.5rem;
              font-weight: 800;
              color: rgba(255, 43, 43, 0.04);
              font-family: 'Outfit', sans-serif;
              line-height: 1;
              pointer-events: none;
              transition: all 0.4s ease;
            }
            
            .capability-card:hover .capability-card-number {
              color: rgba(255, 43, 43, 0.08);
              transform: scale(1.05);
            }
            
            .capability-card-content {
              display: flex;
              flex-direction: column;
              justify-content: center;
              position: relative;
              z-index: 2;
            }
            
            .capability-card-title {
              font-size: 1.15rem;
              font-weight: 700;
              color: #1a1a1a;
              margin-bottom: 8px;
              line-height: 1.4;
            }
            
            .capability-card-desc {
              font-size: 0.92rem;
              color: #666;
              line-height: 1.5;
              margin: 0;
            }
            
            .capability-divider {
              width: 24px;
              height: 3px;
              background-color: #ff2b2b;
              border-radius: 2px;
              margin-top: 10px;
            }
          `}
                </style>

                {/* Faint Red Ambient Glows */}
                <div style={{ position: 'absolute', top: '10%', left: '-5%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(255,43,43,0.03) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(50px)', pointerEvents: 'none' }}></div>
                <div style={{ position: 'absolute', bottom: '10%', right: '-5%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(255,43,43,0.03) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(50px)', pointerEvents: 'none' }}></div>

                <div className="container">
                    {/* Section Header */}
                    <div className='section-heading-container capabilities-heading' style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h2 className='section-heading-responsive' style={{ fontSize: '3.2rem', fontWeight: '800', color: '#1a1a1a', letterSpacing: '-1.5px', marginBottom: '15px', lineHeight: '1.2' }}>
                            Key <span style={{ color: '#ff2b2b' }}>Capabilities</span>
                        </h2>
                        <p style={{ fontSize: '1.15rem', color: '#666', marginBottom: '24px' }}>
                            Intelligent & Automated Loan Origination
                        </p>

                        {/* Glowing divider line below heading */}
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', width: '120px', margin: '0 auto' }}>
                            <div style={{ height: '2px', width: '100%', background: 'linear-gradient(to right, transparent, rgba(255, 43, 43, 0.3), transparent)' }}></div>
                            <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: '20px', height: '4px', backgroundColor: '#ff2b2b', borderRadius: '2px' }}></div>
                        </div>
                    </div>

                    {/* Capabilities Grid */}
                    <div className="capabilities-grid">
                        {[
                            {
                                num: '01',
                                title: 'End-to-End Digital Loan Processing',
                                desc: 'Digitize the complete lending journey from loan application through processing and disbursement.',
                                icon: (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff2b2b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="4" y="3" width="16" height="18" rx="2" />
                                        <path d="M9 3h6v3H9z" />
                                        <path d="M8 11l2 2 4-4" />
                                        <line x1="8" y1="16" x2="16" y2="16" />
                                        <line x1="8" y1="19" x2="13" y2="19" />
                                    </svg>
                                )
                            },
                            {
                                num: '02',
                                title: 'AI-Driven Applicant Scoring',
                                desc: 'Automate applicant assessment using AI-driven parameters to support faster and smarter lending decisions.',
                                icon: (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff2b2b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="3" width="18" height="18" rx="3" />
                                        <path d="M8 12h2l2-4 2 8 2-4h2" />
                                    </svg>
                                )
                            },
                            {
                                num: '03',
                                title: 'Smart Loan Recommendations',
                                desc: 'Generate loan recommendations based on customer profiles and relevant risk factors.',
                                icon: (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff2b2b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 2v4" />
                                        <path d="M12 18v4" />
                                        <path d="M4.93 4.93l2.83 2.83" />
                                        <path d="M16.24 16.24l2.83 2.83" />
                                        <path d="M2 12h4" />
                                        <path d="M18 12h4" />
                                        <path d="M4.93 19.07l2.83-2.83" />
                                        <path d="M16.24 7.76l2.83-2.83" />
                                        <circle cx="12" cy="12" r="4" />
                                    </svg>
                                )
                            },
                            {
                                num: '04',
                                title: 'Faster Turnaround Time',
                                desc: 'Reduce loan processing time from days to minutes with streamlined and automated workflows.',
                                icon: (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff2b2b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="9" />
                                        <polyline points="12 7 12 12 15 14" />
                                    </svg>
                                )
                            },
                            {
                                num: '05',
                                title: 'Customizable Loan Workflows',
                                desc: 'Configure workflows to support Gold, LAP, Vehicle, and Personal Loan products.',
                                icon: (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff2b2b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="3" width="6" height="6" rx="1" />
                                        <rect x="15" y="15" width="6" height="6" rx="1" />
                                        <path d="M9 6h3a3 3 0 0 1 3 3v6" />
                                        <path d="M12 18H9a3 3 0 0 1-3-3v-3" />
                                    </svg>
                                )
                            },
                            {
                                num: '06',
                                title: 'Seamless System Integration',
                                desc: 'Connect seamlessly with CBS, KYC APIs, CIBIL, and DigiLocker for efficient loan processing.',
                                icon: (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff2b2b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M8 9l-4 3 4 3" />
                                        <path d="M16 9l4 3-4 3" />
                                        <path d="M14 5l-4 14" />
                                    </svg>
                                )
                            }
                        ].map((cap, idx) => (
                            <div key={idx} className="effectFade fadeUp h-100" >
                                <div className="capability-card">
                                    <div className="capability-card-number">{cap.num}</div>
                                    <div className="capability-icon-container">
                                        <div className="capability-icon-glow"></div>
                                        {cap.icon}
                                    </div>
                                    <div className="capability-card-content">
                                        <h4 className="capability-card-title">{cap.title}</h4>
                                        <p className="capability-card-desc">{cap.desc}</p>
                                        <div className="capability-divider"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Technology & Architecture Section (Replacing Designed For) */}
            <section id="tech-architecture" className="section-spacing-lg" style={{ position: 'relative', overflow: 'hidden' }}>
                <style>
                    {`
            .designed-grid {
              display: grid;
              grid-template-columns: repeat(5, 1fr);
              gap: 20px;
            }
            @media (max-width: 1199px) {
              .designed-grid {
                grid-template-columns: repeat(3, 1fr);
              }
            }
            @media (max-width: 767px) {
              .designed-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }
            @media (max-width: 480px) {
              .designed-grid {
                grid-template-columns: 1fr;
              }
            }
            
            .designed-card {
              position: relative;
              background: #ffffff;
              border-radius: 24px;
              padding: 40px 24px;
              border: 1px solid rgba(255, 43, 43, 0.08);
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.015);
              transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
              height: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
              z-index: 1;
            }
            
            .designed-card:hover {
              transform: translateY(-10px);
              border-color: rgba(255, 43, 43, 0.25);
              box-shadow: 0 30px 60px rgba(255, 43, 43, 0.08);
            }
            
            .designed-icon-container {
              width: 84px;
              height: 84px;
              border-radius: 50%;
              border: 1px solid rgba(255, 43, 43, 0.12);
              background: #ffffff;
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;
              margin-bottom: 25px;
              transition: all 0.4s ease;
            }
            
            .designed-icon-orbit {
              position: absolute;
              top: -4px;
              left: -4px;
              right: -4px;
              bottom: -4px;
              border-radius: 50%;
              border: 1px solid rgba(255, 43, 43, 0.15);
            }
            
            .designed-icon-dot {
              position: absolute;
              top: 15%;
              right: 15%;
              width: 6px;
              height: 6px;
              background-color: #ff2b2b;
              border-radius: 50%;
              box-shadow: 0 0 6px #ff2b2b;
            }
            
            .designed-icon-glow {
              position: absolute;
              top: 50%;
              left: 50%;
              width: 90px;
              height: 90px;
              transform: translate(-50%, -50%);
              background: radial-gradient(circle, rgba(255, 43, 43, 0.1) 0%, transparent 70%);
              border-radius: 50%;
              z-index: -1;
            }
            
            .designed-card:hover .designed-icon-container {
              transform: scale(1.08);
              border-color: rgba(255, 43, 43, 0.35);
              box-shadow: 0 10px 25px rgba(255, 43, 43, 0.08);
            }
            
            .designed-card-title {
              font-size: 1.15rem;
              font-weight: 700;
              color: #1a1a1a;
              margin-bottom: 12px;
              line-height: 1.3;
            }
            
            .designed-card-desc {
              font-size: 0.9rem;
              color: #666;
              line-height: 1.6;
              margin-bottom: 20px;
              flex-grow: 1;
            }
            
            .designed-card-divider {
              width: 20px;
              height: 3px;
              background-color: #ff2b2b;
              border-radius: 2px;
              margin-top: auto;
            }
            
            .designed-card-tab {
              position: absolute;
              bottom: 0;
              left: 50%;
              transform: translateX(-50%);
              width: 70px;
              height: 6px;
              background-color: #ff2b2b;
              border-radius: 4px 4px 0 0;
              opacity: 0.8;
              transition: all 0.4s ease;
            }
            
            .designed-card:hover .designed-card-tab {
              width: 90px;
              height: 8px;
              opacity: 1;
            }
          `}
                </style>

                {/* Faint Red Ambient Glows */}
                <div style={{ position: 'absolute', top: '10%', left: '-5%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(255,43,43,0.03) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(50px)', pointerEvents: 'none', zIndex: 0 }}></div>
                <div style={{ position: 'absolute', bottom: '10%', right: '-5%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(255,43,43,0.03) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(50px)', pointerEvents: 'none', zIndex: 0 }}></div>

                {/* Connecting Nodes Backdrop */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.03, pointerEvents: 'none', zIndex: 0 }}>
                    <svg width="100%" height="100%" viewBox="0 0 1440 600" fill="none">
                        <circle cx="150" cy="200" r="12" stroke="#ff2b2b" strokeWidth="1" />
                        <circle cx="380" cy="420" r="8" stroke="#ff2b2b" strokeWidth="1" />
                        <circle cx="720" cy="180" r="16" stroke="#ff2b2b" strokeWidth="1" />
                        <circle cx="1060" cy="450" r="10" stroke="#ff2b2b" strokeWidth="1" />
                        <circle cx="1290" cy="230" r="14" stroke="#ff2b2b" strokeWidth="1" />
                        <path d="M150,200 Q265,310 380,420" stroke="#ff2b2b" strokeWidth="1.5" strokeDasharray="5 5" />
                        <path d="M380,420 Q550,300 720,180" stroke="#ff2b2b" strokeWidth="1.5" strokeDasharray="5 5" />
                        <path d="M720,180 Q890,315 1060,450" stroke="#ff2b2b" strokeWidth="1.5" strokeDasharray="5 5" />
                        <path d="M1060,450 Q1175,340 1290,230" stroke="#ff2b2b" strokeWidth="1.5" strokeDasharray="5 5" />
                    </svg>
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    {/* Header */}
                    <div className='section-heading-container designed-for-heading' style={{ textAlign: 'center', marginBottom: '40px', position: 'relative' }}>
                        {/* <div style={{ display: 'inline-flex', alignItems: 'center', gap: '15px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', gap: '4px' }}>
                <div style={{ width: '4px', height: '4px', backgroundColor: '#ff2b2b', borderRadius: '50%' }}></div>
                <div style={{ width: '4px', height: '4px', backgroundColor: '#ff2b2b', borderRadius: '50%' }}></div>
              </div>
              <div style={{ width: '30px', height: '1px', backgroundColor: '#ff2b2b' }}></div>
              <span style={{ color: '#ff2b2b', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>ENGINEERING</span>
              <div style={{ width: '30px', height: '1px', backgroundColor: '#ff2b2b' }}></div>
              <div style={{ display: 'flex', gap: '4px' }}>
                <div style={{ width: '4px', height: '4px', backgroundColor: '#ff2b2b', borderRadius: '50%' }}></div>
                <div style={{ width: '4px', height: '4px', backgroundColor: '#ff2b2b', borderRadius: '50%' }}></div>
              </div>
            </div> */}

                        <h2 className='section-heading-responsive' style={{ fontSize: '3.2rem', fontWeight: '800', color: '#1a1a1a', letterSpacing: '-1.5px', marginBottom: '20px', lineHeight: '1.2' }}>
                            Technology & <span style={{ color: '#ff2b2b' }}>Architecture</span>
                        </h2>
                        <p style={{ fontSize: '1.15rem', color: '#666', marginBottom: '24px' }}>
                            Secure, Intelligent & Scalable Lending Technology
                        </p>

                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', width: '120px', margin: '0 auto' }}>
                            <div style={{ height: '3px', width: '100%', backgroundColor: '#ff2b2b', borderRadius: '2px' }}></div>
                            <div style={{ position: 'absolute', right: '-4px', width: '8px', height: '8px', backgroundColor: '#ff2b2b', borderRadius: '50%', border: '2px solid #ffffff', boxShadow: '0 0 6px rgba(255, 43, 43, 0.4)' }}></div>
                        </div>
                    </div>

                    {/* Technology & Architecture 5-Column Grid */}
                    <div className="designed-grid">
                        {[
                            {
                                title: 'AI & ML-Driven Decision Support',
                                desc: 'Leverage AI and machine learning to support smarter applicant assessment and lending decisions.',
                                icon: (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff2b2b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="3" width="18" height="18" rx="3" />
                                        <path d="M8 12h2l2-4 2 8 2-4h2" />
                                    </svg>
                                )
                            },
                            {
                                title: 'Secure Role-Based Access',
                                desc: 'Protect sensitive loan and customer information with secure, role-based access controls.',
                                icon: (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff2b2b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="11" width="18" height="10" rx="2" />
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                        <circle cx="12" cy="16" r="1" />
                                    </svg>
                                )
                            },
                            {
                                title: 'Cloud / On-Premise / Hybrid Deployment',
                                desc: 'Deploy eLOS according to your organization’s infrastructure and operational requirements.',
                                icon: (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff2b2b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M17.5 19H9a7 7 0 1 1 6.7-9h1.8a4.5 4.5 0 0 1 0 9z" />
                                        <path d="M12 12v7" />
                                        <path d="M9 15l3-3 3 3" />
                                    </svg>
                                )
                            },
                            {
                                title: 'High Availability & Performance',
                                desc: 'Ensure reliable and responsive loan processing with technology built for high availability and performance.',
                                icon: (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff2b2b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="3 12 7 12 10 4 14 20 17 12 21 12" />
                                    </svg>
                                )
                            },
                            {
                                title: 'Seamless CBS Integration',
                                desc: 'Connect eLOS with core banking systems to enable smooth data exchange and streamlined loan processing.',
                                icon: (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff2b2b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M8 9l-4 3 4 3" />
                                        <path d="M16 9l4 3-4 3" />
                                        <path d="M14 5l-4 14" />
                                    </svg>
                                )
                            }
                        ].map((target, idx) => (
                            <div key={idx} className="effectFade fadeUp h-100">
                                <div className="designed-card">
                                    <div className="designed-card-tab"></div>
                                    <div className="designed-icon-container">
                                        <div className="designed-icon-orbit"></div>
                                        {/* <div className="designed-icon-dot"></div> */}
                                        <div className="designed-icon-glow"></div>
                                        {target.icon}
                                    </div>
                                    <div className="designed-content">
                                        <h4 className="designed-card-title">{target.title}</h4>
                                        <p className="designed-card-desc">{target.desc}</p>
                                    </div>
                                    <div className="designed-card-divider"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Operational Benefits Section (Replacing Core Features) */}
            <section id="operational-benefits" className="section-spacing-lg" style={{ position: 'relative', overflow: 'hidden' }}>
                <style>
                    {`
            .benefits-grid {
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              gap: 30px;
              max-width: 1200px;
              margin: 0 auto;
            }
            @media (max-width: 1199px) {
              .benefits-grid {
                grid-template-columns: repeat(3, 1fr);
              }
            }
            @media (max-width: 991px) {
              .benefits-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }
            @media (max-width: 767px) {
              .benefits-grid {
                grid-template-columns: 1fr;
              }
            }
            .benefit-card {
              background: #ffffff;
              border-radius: 28px;
              border: 1px solid rgba(255, 43, 43, 0.08);
              box-shadow: 0 15px 35px rgba(0, 0, 0, 0.015);
              padding: 40px 30px;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              transition: all 0.3s ease;
              height: 100%;
            }
            .benefit-card:hover {
              border-color: rgba(255, 43, 43, 0.25);
              box-shadow: 0 25px 50px rgba(255, 43, 43, 0.06);
              transform: translateY(-5px);
            }
            .benefit-icon-box {
              width: 56px;
              height: 56px;
              border-radius: 16px;
              background-color: rgba(255, 43, 43, 0.06);
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 24px;
            }
            .benefit-title {
              font-size: 1.15rem;
              font-weight: 700;
              color: #1a1a1a;
              line-height: 1.4;
              margin: 0;
            }
          `}
                </style>

                <div className="container">
                    {/* Section Header */}
                    <div className='section-heading-container designed-for-heading' style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h2 className='section-heading-responsive' style={{ fontSize: '3.2rem', fontWeight: '800', color: '#1a1a1a', letterSpacing: '-1.5px', marginBottom: '20px', lineHeight: '1.2' }}>
                            Operational <span style={{ color: '#ff2b2b' }}>Benefits</span>
                        </h2>
                        <p style={{ fontSize: '1.15rem', color: '#666', marginBottom: '24px' }}>
                            Faster, Smarter & More Efficient Lending
                        </p>

                        {/* Glowing divider line below heading */}
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', width: '120px', margin: '0 auto' }}>
                            <div style={{ height: '2px', width: '100%', background: 'linear-gradient(to right, transparent, rgba(255, 43, 43, 0.3), transparent)' }}></div>
                            <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: '20px', height: '4px', backgroundColor: '#ff2b2b', borderRadius: '2px' }}></div>
                        </div>
                    </div>

                    <div className="benefits-grid">
                        {[
                            {
                                title: 'Faster Loan Approvals',
                                icon: (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff2b2b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="9" />
                                        <polyline points="12 7 12 12 15 14" />
                                    </svg>
                                )
                            },
                            {
                                title: 'Reduced Manual Intervention',
                                icon: (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff2b2b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 12h5l2-5 3 10 2-5h4" />
                                    </svg>
                                )
                            },
                            {
                                title: 'Improved Customer Experience',
                                icon: (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff2b2b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.78-8.84a5.5 5.5 0 0 0 .06-7.78z" />
                                    </svg>
                                )
                            },
                            {
                                title: 'Centralized Loan Management',
                                icon: (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff2b2b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="3" width="7" height="7" rx="1" />
                                        <rect x="14" y="3" width="7" height="7" rx="1" />
                                        <rect x="3" y="14" width="7" height="7" rx="1" />
                                        <rect x="14" y="14" width="7" height="7" rx="1" />
                                    </svg>
                                )
                            },
                            {
                                title: 'Regulatory Compliance',
                                icon: (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff2b2b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                        <path d="M8 12l2.5 2.5L16 9" />
                                    </svg>
                                )
                            },
                            {
                                title: 'Comprehensive Reporting & Insights',
                                icon: (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff2b2b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="4" y1="19" x2="4" y2="12" />
                                        <line x1="10" y1="19" x2="10" y2="7" />
                                        <line x1="16" y1="19" x2="16" y2="10" />
                                        <line x1="22" y1="19" x2="22" y2="4" />
                                    </svg>
                                )
                            },
                            {
                                title: 'Secure & Scalable Operations',
                                icon: (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff2b2b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                        <path d="M8 12h8" />
                                        <path d="M12 8v8" />
                                    </svg>
                                )
                            }
                        ].map((benefit, idx) => (
                            <div key={idx} className="effectFade fadeUp h-100" >
                                <div className="benefit-card">
                                    <div className="benefit-icon-box">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="benefit-title">{benefit.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Why Choose Fin Flow Section */}
            <section id="why-choose" className="section-spacing-lg" style={{ position: 'relative', overflow: 'hidden' }}>
                <style>
                    {`
            @keyframes pulse-glow-dot {
              0% { opacity: 0.6; transform: scale(1); }
              50% { opacity: 1; transform: scale(1.3); }
              100% { opacity: 0.6; transform: scale(1); }
            }
            .why-choose-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 30px;
            }
            @media (max-width: 991px) {
              .why-choose-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }
            @media (max-width: 767px) {
              .why-choose-grid {
                grid-template-columns: 1fr;
              }
            }
            .why-choose-card {
              position: relative;
              background: rgba(255, 255, 255, 0.7);
              backdrop-filter: blur(20px);
              -webkit-backdrop-filter: blur(20px);
              border-radius: 28px;
              padding: 35px 30px;
              border: 1px solid rgba(255, 43, 43, 0.08);
              box-shadow: 0 15px 35px rgba(0, 0, 0, 0.02);
              transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
              height: 100%;
              overflow: hidden;
              z-index: 1;
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
            }
            .why-choose-card:hover {
              transform: translateY(-10px);
              border-color: rgba(255, 43, 43, 0.35);
              box-shadow: 0 30px 60px rgba(255, 43, 43, 0.08);
            }
            .why-choose-card-number {
              position: absolute;
              top: 30px;
              right: 35px;
              font-size: 1.1rem;
              font-weight: 800;
              color: rgba(255, 43, 43, 0.15);
              letter-spacing: 1px;
              transition: all 0.4s ease;
            }
            .why-choose-card:hover .why-choose-card-number {
              color: rgba(255, 43, 43, 0.4);
              transform: scale(1.1);
            }
            .why-choose-icon-container {
              width: 70px;
              height: 70px;
              border-radius: 50%;
              background: rgba(255, 255, 255, 1);
              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.03);
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 20px;
              position: relative;
              transition: all 0.4s ease;
              border: 1px solid rgba(255, 43, 43, 0.1);
            }
            .why-choose-icon-glow {
              position: absolute;
              top: 50%;
              left: 50%;
              width: 80px;
              height: 80px;
              transform: translate(-50%, -50%);
              background: radial-gradient(circle, rgba(255, 43, 43, 0.12) 0%, transparent 70%);
              border-radius: 50%;
              z-index: -1;
              transition: all 0.4s ease;
            }
            .why-choose-card:hover .why-choose-icon-container {
              transform: scale(1.08) rotate(5deg);
              background: rgba(255, 43, 43, 0.05);
              border-color: rgba(255, 43, 43, 0.4);
              box-shadow: 0 15px 30px rgba(255, 43, 43, 0.15);
            }
            .why-choose-card:hover .why-choose-icon-glow {
              width: 100px;
              height: 100px;
              background: radial-gradient(circle, rgba(255, 43, 43, 0.25) 0%, transparent 70%);
            }
            .why-choose-icon {
              color: #ff2b2b;
              transition: all 0.4s ease;
            }
            .why-choose-card:hover .why-choose-icon {
              transform: scale(1.05);
              filter: drop-shadow(0 0 5px rgba(255, 43, 43, 0.5));
            }
            .why-choose-card-title {
              font-size: 1.35rem;
              font-weight: 700;
              color: #1a1a1a;
              margin-bottom: 12px;
              line-height: 1.35;
            }
            .why-choose-card-desc {
              font-size: 0.95rem;
              color: #666;
              line-height: 1.6;
              margin: 0;
            }
            .why-choose-cta-card {
              position: relative;
              background: linear-gradient(135deg, #ff2b2b 0%, #ff5b5b 100%);
              border-radius: 28px;
              padding: 35px 30px;
              box-shadow: 0 20px 45px rgba(255, 43, 43, 0.25);
              transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
              height: 100%;
              overflow: hidden;
              z-index: 1;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            }
            .why-choose-cta-card:hover {
              transform: translateY(-10px);
              box-shadow: 0 30px 60px rgba(255, 43, 43, 0.4);
            }
            .why-choose-cta-glow {
              position: absolute;
              top: -20%;
              right: -20%;
              width: 250px;
              height: 250px;
              background: radial-gradient(circle, rgba(255, 255, 255, 0.25) 0%, transparent 70%);
              border-radius: 50%;
              z-index: -1;
              pointer-events: none;
              animation: float-glow 8s infinite alternate;
            }
            .why-choose-cta-waves {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              height: 120px;
              opacity: 0.15;
              z-index: -1;
              pointer-events: none;
            }
            .why-choose-cta-title {
              font-size: 1.55rem;
              font-weight: 800;
              color: #ffffff;
              margin-bottom: 12px;
              line-height: 1.35;
            }
            .why-choose-cta-desc {
              font-size: 0.95rem;
              color: rgba(255, 255, 255, 0.9);
              line-height: 1.5;
              margin-bottom: 30px;
            }
            .why-choose-cta-btn {
              background: #ffffff;
              color: #ff2b2b;
              border: none;
              padding: 14px 28px;
              font-size: 1.05rem;
              font-weight: 700;
              border-radius: 50px;
              cursor: pointer;
              transition: all 0.3s ease;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              gap: 10px;
              box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
              margin-top: auto;
              width: fit-content;
            }
            .why-choose-cta-btn:hover {
              transform: translateY(-2px);
              box-shadow: 0 12px 25px rgba(255, 255, 255, 0.5), 0 0 15px rgba(255, 255, 255, 0.3);
            }
          `}
                </style>

                {/* Background Map & Glows */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: `url(${abstractWorldMapImg.src})`, backgroundSize: 'cover', opacity: 0.03, zIndex: 0, pointerEvents: 'none' }}></div>

                {/* Ambient gradient lighting */}
                <div style={{ position: 'absolute', top: '-10%', left: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(255,43,43,0.04) 0%, transparent 70%)', borderRadius: '50%', zIndex: 0, filter: 'blur(60px)', pointerEvents: 'none' }}></div>
                <div style={{ position: 'absolute', bottom: '-10%', right: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(255,43,43,0.04) 0%, transparent 70%)', borderRadius: '50%', zIndex: 0, filter: 'blur(60px)', pointerEvents: 'none' }}></div>

                {/* Curved connection lines */}
                <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0, opacity: 0.12 }} viewBox="0 0 1440 800" fill="none">
                    <path d="M-100,200 C300,100 500,600 900,400 C1100,300 1300,700 1600,500" stroke="#ff2b2b" strokeWidth="1.5" strokeDasharray="5 5" />
                    <path d="M-50,600 C200,400 600,200 800,500 C1000,700 1200,300 1500,400" stroke="#ff2b2b" strokeWidth="1" />
                </svg>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    {/* Section Header */}
                    <div className='section-heading-container' style={{ textAlign: 'center', marginBottom: '40px', position: 'relative' }}>
                        {/* <div style={{ display: 'inline-flex', alignItems: 'center', gap: '15px', marginBottom: '16px' }}>
              <div style={{ width: '30px', height: '1px', background: 'linear-gradient(to right, transparent, #ff2b2b)' }}></div>
              <span style={{ color: '#ff2b2b', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>WHY CHOOSE US</span>
              <div style={{ width: '30px', height: '1px', background: 'linear-gradient(to left, transparent, #ff2b2b)' }}></div>
            </div> */}

                        <h2 className='section-heading-responsive' style={{ fontSize: '3.2rem', fontWeight: '800', color: '#1a1a1a', letterSpacing: '-1.5px', marginBottom: '20px', lineHeight: '1.2' }}>
                            Why Choose <span style={{ background: 'linear-gradient(to right, #ff2b2b, #ff5b5b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>eLOS</span>?
                        </h2>

                        {/* Glowing divider line below heading */}
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2px', position: 'relative', width: '200px', margin: '0 auto' }}>
                            <div style={{ height: '2px', width: '100%', background: 'linear-gradient(to right, transparent, #ff2b2b, transparent)', borderRadius: '10px' }}></div>
                            <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: '6px', height: '6px', backgroundColor: '#ff2b2b', borderRadius: '50%', boxShadow: '0 0 10px #ff2b2b, 0 0 20px #ff2b2b', animation: 'pulse-glow-dot 2s infinite' }}></div>
                        </div>
                    </div>

                    {/* Cards Grid */}
                    <div className="why-choose-grid">
                        {[
                            {
                                num: '01',
                                title: 'Intelligent Automation',
                                desc: 'Minimize manual processes and errors through automated loan processing and AI-driven decision support.',
                                icon: (
                                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="why-choose-icon">
                                        <path d="M12 2v4" />
                                        <path d="M12 18v4" />
                                        <path d="M4.93 4.93l2.83 2.83" />
                                        <path d="M16.24 16.24l2.83 2.83" />
                                        <path d="M2 12h4" />
                                        <path d="M18 12h4" />
                                        <path d="M4.93 19.07l2.83-2.83" />
                                        <path d="M16.24 7.76l2.83-2.83" />
                                        <circle cx="12" cy="12" r="4" />
                                    </svg>
                                )
                            },
                            {
                                num: '02',
                                title: 'Real-Time Processing',
                                desc: 'Enable faster and smarter lending decisions with real-time data processing throughout the loan journey.',
                                icon: (
                                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="why-choose-icon">
                                        <circle cx="12" cy="12" r="9" />
                                        <polyline points="12 7 12 12 15 14" />
                                    </svg>
                                )
                            },
                            {
                                num: '03',
                                title: 'Flexible Loan Workflows',
                                desc: 'Configure lending workflows to support different loan products and evolving business requirements.',
                                icon: (
                                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="why-choose-icon">
                                        <rect x="3" y="3" width="7" height="7" rx="1" />
                                        <rect x="14" y="14" width="7" height="7" rx="1" />
                                        <path d="M10 6h3a3 3 0 0 1 3 3v5" />
                                        <path d="M14 18h-3a3 3 0 0 1-3-3v-2" />
                                    </svg>
                                )
                            },
                            {
                                num: '04',
                                title: 'Complete Loan Management',
                                desc: 'Track and manage the complete loan journey through a centralized digital lending platform.',
                                icon: (
                                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="why-choose-icon">
                                        <rect x="4" y="3" width="16" height="18" rx="2" />
                                        <path d="M9 3h6v3H9z" />
                                        <path d="M8 12l2 2 4-4" />
                                        <line x1="8" y1="17" x2="16" y2="17" />
                                    </svg>
                                )
                            },
                            {
                                num: '05',
                                title: 'Comprehensive Reporting',
                                desc: 'Generate actionable insights through detailed reporting to support better lending decisions.',
                                icon: (
                                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="why-choose-icon">
                                        <line x1="4" y1="19" x2="4" y2="12" />
                                        <line x1="10" y1="19" x2="10" y2="7" />
                                        <line x1="16" y1="19" x2="16" y2="10" />
                                        <line x1="22" y1="19" x2="22" y2="4" />
                                    </svg>
                                )
                            }
                        ].map((card, idx) => (
                            <div key={idx} className="effectFade fadeUp h-100" >
                                <div className="why-choose-card">
                                    <div className="why-choose-card-number">{card.num}</div>
                                    <div className="why-choose-icon-container">
                                        <div className="why-choose-icon-glow"></div>
                                        {card.icon}
                                    </div>
                                    <div className="why-choose-content">
                                        <h4 className="why-choose-card-title">{card.title}</h4>
                                        <p className="why-choose-card-desc">{card.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* 6th Card: CTA Card */}
                        <div className="effectFade fadeUp h-100">
                            <div className="why-choose-cta-card">
                                <div className="why-choose-cta-glow"></div>
                                <svg className="why-choose-cta-waves" viewBox="0 0 100 100" preserveAspectRatio="none">
                                    <path d="M0,50 C30,40 70,60 100,50 L100,100 L0,100 Z" fill="rgba(255,255,255,0.1)" />
                                    <path d="M0,60 C40,50 60,70 100,60 L100,100 L0,100 Z" fill="rgba(255,255,255,0.05)" />
                                </svg>

                                <div>
                                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="why-choose-cta-icon" style={{ color: '#ffffff', marginBottom: '25px' }}>
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    </svg>
                                    {/* <p className="why-choose-cta-desc">
                    Connect banking with business operations
                  </p> */}
                                </div>
                                <div className="ready-content">

                                    <h4 className="why-choose-cta-title">Start Growing Today</h4>

                                    <a href="#contact-section" className="why-choose-cta-btn">
                                        <span>Get Started</span>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Outcome Section */}
            <section id="outcome" className="section-spacing-lg" style={{ position: 'relative', overflow: 'hidden' }}>
                <style>
                    {`
            .outcome-outer-container {
              position: relative;
              max-width: 1000px;
              margin: 0 auto;
              padding: 12px;
              z-index: 1;
            }
            
            .outcome-shadow-card {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: rgba(255, 255, 255, 0.4);
              border-radius: 40px;
              border: 1px solid rgba(255, 43, 43, 0.04);
              transform: scale(1.02);
              z-index: -1;
              box-shadow: 0 15px 40px rgba(0, 0, 0, 0.01);
            }
            
            .outcome-main-card {
              background: #ffffff;
              border-radius: 32px;
              padding: 70px 50px;
              border: 1px solid rgba(255, 43, 43, 0.08);
              box-shadow: 0 20px 50px rgba(0, 0, 0, 0.02);
              text-align: center;
              position: relative;
              overflow: hidden;
            }
            
            @media (max-width: 767px) {
              .outcome-main-card {
                padding: 40px 24px;
              }
            }
            
            .outcome-corner-bracket-tl {
              position: absolute;
              top: 24px;
              left: 24px;
              width: 55px;
              height: 55px;
              border-top: 5px solid #ff2b2b;
              border-left: 5px solid #ff2b2b;
              border-top-left-radius: 20px;
              pointer-events: none;
            }
            
            .outcome-corner-bracket-br {
              position: absolute;
              bottom: 24px;
              right: 24px;
              width: 55px;
              height: 55px;
              border-bottom: 5px solid #ff2b2b;
              border-right: 5px solid #ff2b2b;
              border-bottom-right-radius: 20px;
              pointer-events: none;
            }
            
            .outcome-icon-outer {
              width: 124px;
              height: 124px;
              border-radius: 50%;
              border: 1px solid rgba(255, 43, 43, 0.1);
              background: #ffffff;
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;
              margin: 0 auto 35px;
            }
            
            .outcome-icon-middle {
              position: absolute;
              top: -6px;
              left: -6px;
              right: -6px;
              bottom: -6px;
              border-radius: 50%;
              border: 1px solid rgba(255, 43, 43, 0.08);
            }
            
            .outcome-icon-inner {
              width: 82px;
              height: 82px;
              border-radius: 50%;
              border: 1px solid rgba(255, 43, 43, 0.22);
              background: #ffffff;
              display: flex;
              align-items: center;
              justify-content: center;
              box-shadow: 0 10px 25px rgba(255, 43, 43, 0.08);
            }
            
            .outcome-text {
              font-size: 1.15rem;
              font-weight: 500;
              color: #333333;
              line-height: 1.8;
              max-width: 800px;
              margin: 0 auto 40px;
            }
            
            .outcome-cta-btn {
              display: inline-flex;
              align-items: center;
              gap: 12px;
              padding: 16px 32px;
              background: linear-gradient(135deg, #ff2b2b 0%, #ff5b5b 100%);
              color: #ffffff;
              font-size: 1.05rem;
              font-weight: 700;
              border-radius: 50px;
              border: none;
              cursor: pointer;
              transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
              box-shadow: 0 10px 25px rgba(255, 43, 43, 0.3);
              text-decoration: none;
            }
            
            .outcome-cta-btn:hover {
              transform: translateY(-3px);
              box-shadow: 0 15px 35px rgba(255, 43, 43, 0.45);
              color: #ffffff;
            }
            
            .outcome-btn-arrow {
              width: 24px;
              height: 24px;
              border-radius: 50%;
              background: #ffffff;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #ff2b2b;
              transition: all 0.3s ease;
            }
            
            .outcome-cta-btn:hover .outcome-btn-arrow {
              transform: translateX(2px);
            }
          `}
                </style>

                {/* Ambient background glows */}
                <div style={{ position: 'absolute', top: '10%', left: '-5%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(255,43,43,0.03) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(50px)', pointerEvents: 'none', zIndex: 0 }}></div>
                <div style={{ position: 'absolute', bottom: '10%', right: '-5%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(255,43,43,0.03) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(50px)', pointerEvents: 'none', zIndex: 0 }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    {/* Section Header */}
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', marginBottom: '12px' }}>
              <div style={{ width: '40px', height: '1px', background: 'linear-gradient(to right, transparent, #ff2b2b)' }}></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '5px', height: '5px', backgroundColor: '#ff2b2b', borderRadius: '50%' }}></div>
                <span style={{ fontSize: '0.85rem', color: '#ff2b2b', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>Final Outcome</span>
                <div style={{ width: '5px', height: '5px', backgroundColor: '#ff2b2b', borderRadius: '50%' }}></div>
              </div>
              <div style={{ width: '40px', height: '1px', background: 'linear-gradient(to left, transparent, #ff2b2b)' }}></div>
            </div> */}

                        <h2 className='section-heading-responsive' style={{ fontSize: '3.5rem', fontWeight: '800', color: '#1a1a1a', letterSpacing: '-1.5px', marginBottom: '15px', lineHeight: '1.2' }}>
                            Outcome
                        </h2>

                        {/* Glowing divider line below heading */}
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', width: '120px', margin: '0 auto' }}>
                            <div style={{ height: '3px', width: '100%', backgroundColor: '#ff2b2b', borderRadius: '2px' }}></div>
                            <div style={{ position: 'absolute', right: '-4px', width: '8px', height: '8px', backgroundColor: '#ff2b2b', borderRadius: '50%', border: '2px solid #ffffff', boxShadow: '0 0 6px rgba(255, 43, 43, 0.4)' }}></div>
                        </div>
                    </div>

                    {/* Outcome Stack Card */}
                    <div className="outcome-outer-container effectFade fadeUp">
                        <div className="outcome-shadow-card"></div>
                        <div className="outcome-main-card">
                            <div className="outcome-corner-bracket-tl"></div>
                            <div className="outcome-corner-bracket-br"></div>

                            {/* Center Checkmark with Orbits */}
                            <div className="outcome-icon-outer">
                                <div className="outcome-icon-middle"></div>
                                <div style={{ position: 'absolute', top: '15%', left: '15%', width: '4px', height: '4px', background: '#ff2b2b', borderRadius: '50%', boxShadow: '0 0 4px #ff2b2b' }}></div>
                                <div style={{ position: 'absolute', bottom: '20%', right: '12%', width: '4px', height: '4px', background: '#ff2b2b', borderRadius: '50%', boxShadow: '0 0 4px #ff2b2b' }}></div>
                                <div className="outcome-icon-inner">
                                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#ff2b2b" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="m9 12 2 2 4-4" />
                                    </svg>
                                </div>
                            </div>

                            <p className="outcome-text">
                                eLOS enables a faster, smarter, and more efficient lending journey by automating loan processing, supporting AI-driven decisions, and bringing the complete loan lifecycle onto a centralized platform—from application to disbursement.
                            </p>

                            {/* 4 Outcome Keyword Highlights */}
                            {/* <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginBottom: '40px' }}>
                {['Efficiency', 'Compliance', 'Smart Financing', 'Sustainable Growth'].map((word, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 43, 43, 0.05)', border: '1px solid rgba(255, 43, 43, 0.15)', padding: '8px 20px', borderRadius: '30px', fontWeight: '700', color: '#1a1a1a', fontSize: '1rem' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff2b2b" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{word}</span>
                  </div>
                ))}
              </div> */}

                            <a href="#contact-section" className="outcome-cta-btn">
                                <span>Start Your Digital Transformation</span>
                                <span className="outcome-btn-arrow">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ff2b2b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Contact Us Section */}
            <div id="contact-section">
                <CTABannerSection
                    title={`Transform Your Business Operations with ${product.title}`}
                    subtitle={`Automate loan processing, accelerate approvals, and make smarter lending decisions with an intelligent, scalable loan origination platform.`}
                />
            </div>
        </>
    );
}

export default ELOS;
