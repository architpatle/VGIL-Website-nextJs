"use client";

import React, { useState } from 'react';
import './TransactCore.css';
import Link from "next/link";
import { PRODUCTS_DATA } from '../data/productsData';
import abstractWorldMapImg from '../assets/Products-img/image.png';
import transactCoreImg from '../assets/Products-img/TransactCore.png';
import CTABannerSection from '../components/services/CTABannerSection';

function TransactCore() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const product = PRODUCTS_DATA.find((p) => p.slug === 'transact-core') || {
    title: 'Transact Core',
    subtitle: 'High-Volume Transaction Processing Engine',
    shortDescription: 'A robust processing engine designed to handle massive volumes of transactions with ultra-low latency and perfect accuracy.'
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    alert('Thank you for contacting us! Our team will get back to you shortly.');
    setFormData({ name: '', phone: '', email: '', message: '' });
    setFormSubmitted(false);
  };

  return (
    <>
      <style>
        {`
          @media (max-width: 768px) {
            .hero-title-responsive {
              font-size: 2.2rem !important;
            }
            .hero-desc-responsive {
              font-size: 1rem !important;
            }
            .hero-section-responsive {
              padding-top: 100px !important;
              padding-bottom: 40px !important;
              min-height: auto !important;
            }
            .section-heading-responsive {
              font-size: 2.2rem ;
            }
            .section-spacing-responsive {
              padding: 60px 0 !important;
            }
            .overview-card {
              padding: 30px 0px;
            }
            .capability-card {
              padding: 25px 20px ;
            }
          }
        `}
      </style>
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
            .section-spacing-responsive {
              padding: 60px 0 !important;
            }
            .overview-card {
              padding: 30px 20px ;
            }
            .capability-card {
              padding: 25px 20px ;
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
                src={transactCoreImg.src}
                alt={`${product.title} Logo`}
                style={{ maxWidth: '160px', height: 'auto', objectFit: 'contain', marginBottom: '8px' }}
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
        {/* c */}
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
            <h2 className="section-heading-responsive" style={{ fontSize: '3.2rem', fontWeight: '800', color: '#1a1a1a', letterSpacing: '-1.5px', marginBottom: '20px' }}>
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
                <div className="overview-motion col-lg-5 d-flex justify-content-center md-mb-40" style={{ position: 'relative' }}>
                  {/* Abstract dots behind the circles */}
                  <div style={{ position: 'absolute', top: '10%', left: '10%', width: '100px', height: '80px', backgroundImage: 'radial-gradient(rgba(255, 43, 43, 0.15) 1px, transparent 1px)', backgroundSize: '10px 10px', opacity: 0.6 }}></div>
                  <div style={{ position: 'absolute', bottom: '10%', right: '10%', width: '100px', height: '80px', backgroundImage: 'radial-gradient(rgba(255, 43, 43, 0.15) 1px, transparent 1px)', backgroundSize: '10px 10px', opacity: 0.6 }}></div>

                  {/* Ring Container */}
                  <div style={{ width: '320px', height: '320px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {/* Ring 1 (Outer) */}
                    <div style={{ position: 'absolute', width: '300px', height: '300px', borderRadius: '50%', border: '1px solid rgba(255, 43, 43, 0.1)', animation: 'orbit 20s linear infinite' }}>
                      {/* Orange/Red dot on outer ring */}
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
                      {/* Translucent light-red base plate */}
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
                        {/* White switch table icon */}
                        <div style={{
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transform: 'rotateZ(45deg)'
                        }}>
                          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <line x1="9" y1="9" x2="15" y2="9" />
                            <line x1="9" y1="13" x2="15" y2="13" />
                            <line x1="9" y1="17" x2="15" y2="17" />
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
                      <span className="text-highlight-pill">Transact Core 360 Switching Intelligence for Modern Payments</span> is a unified digital payment switch platform
                      designed to enable seamless transaction routing, monitoring, and reconciliation across ATM, UPI, and IMPS networks.
                      Built for performance, reliability, and scale, it empowers financial institutions to manage high-volume digital
                      payment ecosystems with intelligence and control.
                    </p>

                    {/* Red divider with a dot */}
                    <div className='overview-desc-line' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', margin: '30px 0' }}>
                      <div style={{ height: '1.5px', flex: 1, background: 'linear-gradient(to right, transparent, rgba(255, 43, 43, 0.3))' }}></div>
                      <div style={{ width: '6px', height: '6px', backgroundColor: '#ff2b2b', borderRadius: '50%', boxShadow: '0 0 8px #ff2b2b' }}></div>
                      <div style={{ height: '1.5px', flex: 1, background: 'linear-gradient(to left, transparent, rgba(255, 43, 43, 0.3))' }}></div>
                    </div>

                    <p style={{ fontSize: '1.15rem', color: '#444', lineHeight: '1.8', marginBottom: '0' }}>
                      The platform delivers <span className="text-highlight-pill">real-time transaction processing with intelligent switching</span>, ensuring faster settlements, improved uptime, and end-to-end visibility across payment channels.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Capabilities Section */}
      <section id="capabilities" className="section-spacing-lg" style={{ borderTop: '1px solid #eaeaea', position: 'relative', overflow: 'hidden' }}>
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
              margin-bottom: 12px;
              line-height: 1.4;
            }
            
            .capability-divider {
              width: 24px;
              height: 3px;
              background-color: #ff2b2b;
              border-radius: 2px;
            }
          `}
        </style>

        {/* Faint Red Ambient Glows */}
        <div style={{ position: 'absolute', top: '10%', left: '-5%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(255,43,43,0.03) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(50px)', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', bottom: '10%', right: '-5%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(255,43,43,0.03) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(50px)', pointerEvents: 'none' }}></div>

        {/* Dotted Patterns */}
        <div style={{ position: 'absolute', bottom: '5%', left: '3%', width: '80px', height: '120px', backgroundImage: 'radial-gradient(rgba(255, 43, 43, 0.12) 1px, transparent 1px)', backgroundSize: '10px 10px', opacity: 0.6, pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', top: '5%', right: '3%', width: '80px', height: '120px', backgroundImage: 'radial-gradient(rgba(255, 43, 43, 0.12) 1px, transparent 1px)', backgroundSize: '10px 10px', opacity: 0.6, pointerEvents: 'none' }}></div>

        <div className="container">
          {/* Section Header */}
          <div className='section-heading-container capabilities-heading' style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 className="section-heading-responsive" style={{ fontSize: '3.2rem', fontWeight: '800', color: '#1a1a1a', letterSpacing: '-1.5px', marginBottom: '15px' }}>
              Key <span style={{ color: '#ff2b2b' }}>Capabilities</span>
            </h2>
            <p style={{ fontSize: '1.15rem', color: '#666', marginBottom: '24px' }}>
              Powering modern payment infrastructure
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
                title: 'Unified Switching for ATM, UPI & IMPS Networks',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff2b2b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                )
              },
              {
                num: '02',
                title: 'Real-time Transaction Routing & Processing',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff2b2b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <rect x="9" y="9" width="6" height="6" />
                    <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
                  </svg>
                )
              },
              {
                num: '03',
                title: 'High-Performance, High-Throughput Architecture',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff2b2b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                )
              },
              {
                num: '04',
                title: 'Debit Card Lifecycle Management',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff2b2b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="10" y="3" width="4" height="4" />
                    <rect x="3" y="17" width="4" height="4" />
                    <rect x="17" y="17" width="4" height="4" />
                    <path d="M12 7v6M5 13h14v4M5 17h0M19 17h0" />
                  </svg>
                )
              },
              {
                num: '05',
                title: 'Centralized Monitoring & Reconciliation',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff2b2b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="5" width="20" height="6" rx="2" />
                    <rect x="2" y="13" width="20" height="6" rx="2" />
                    <path d="M6 8h.01M6 16h.01" />
                  </svg>
                )
              },
              {
                num: '06',
                title: 'Secure Role-Based User & Admin Portals',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff2b2b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )
              }
            ].map((cap, idx) => (
              <div key={idx} className="effectFade fadeUp h-100">
                <div className="capability-card">
                  <div className="capability-card-number">{cap.num}</div>
                  <div className="capability-icon-container">
                    <div className="capability-icon-glow"></div>
                    {cap.icon}
                  </div>
                  <div className="capability-card-content">
                    <h4 className="capability-card-title">{cap.title}</h4>
                    <div className="capability-divider"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Designed For Section */}
      <section id="designed-for" className="section-spacing-lg" style={{ backgroundColor: '#ffffff', borderTop: '1px solid #eaeaea', position: 'relative', overflow: 'hidden' }}>
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
              background: #fff;
              border-radius: 24px;
              padding: 40px 24px;
              border: 1px solid rgba(255, 43, 43, 0.2);
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

        {/* Left Side Floating Ring */}
        <div className='left-ring' style={{
          position: 'absolute',
          left: '-60px',
          top: '55%',
          transform: 'translateY(-50%)',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          border: '8px solid rgba(255, 43, 43, 0.05)',
          background: 'linear-gradient(135deg, #ff2b2b 0%, #ff5b5b 100%)',
          boxShadow: '0 0 30px rgba(255, 43, 43, 0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
          zIndex: 0
        }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', border: '6px solid #ffffff', background: 'linear-gradient(135deg, #ff2b2b, #ff7b7b)' }}></div>
        </div>

        {/* Right Side Floating Ring */}
        <div className='right-ring' style={{
          position: 'absolute',
          right: '-60px',
          top: '55%',
          transform: 'translateY(-50%)',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          border: '8px solid rgba(255, 43, 43, 0.05)',
          background: 'linear-gradient(135deg, #ff2b2b 0%, #ff5b5b 100%)',
          boxShadow: '0 0 30px rgba(255, 43, 43, 0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
          zIndex: 0
        }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', border: '6px solid #ffffff', background: 'linear-gradient(135deg, #ff2b2b, #ff7b7b)' }}></div>
        </div>

        {/* World Map Backdrop (low opacity) */}
        <div style={{ position: 'absolute', top: '10%', left: '5%', right: '5%', bottom: '10%', opacity: 0.04, pointerEvents: 'none', zIndex: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="100%" height="100%" viewBox="0 0 1000 500" fill="none">
            <circle cx="200" cy="150" r="20" fill="none" stroke="#ff2b2b" strokeWidth="1" strokeDasharray="2 2" />
            <circle cx="350" cy="220" r="40" fill="none" stroke="#ff2b2b" strokeWidth="1" strokeDasharray="2 2" />
            <circle cx="500" cy="180" r="30" fill="none" stroke="#ff2b2b" strokeWidth="1" strokeDasharray="2 2" />
            <circle cx="680" cy="240" r="35" fill="none" stroke="#ff2b2b" strokeWidth="1" strokeDasharray="2 2" />
            <circle cx="820" cy="170" r="25" fill="none" stroke="#ff2b2b" strokeWidth="1" strokeDasharray="2 2" />
            <circle cx="210" cy="140" r="4" fill="#ff2b2b" />
            <circle cx="340" cy="230" r="4" fill="#ff2b2b" />
            <circle cx="490" cy="190" r="4" fill="#ff2b2b" />
            <circle cx="690" cy="230" r="4" fill="#ff2b2b" />
            <circle cx="810" cy="160" r="4" fill="#ff2b2b" />
            <circle cx="580" cy="300" r="4" fill="#ff2b2b" />
            <path d="M210,140 Q275,185 340,230" stroke="#ff2b2b" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M340,230 Q415,210 490,190" stroke="#ff2b2b" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M490,190 Q590,210 690,230" stroke="#ff2b2b" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M690,230 Q750,195 810,160" stroke="#ff2b2b" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M340,230 Q460,265 580,300" stroke="#ff2b2b" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M580,300 Q635,265 690,230" stroke="#ff2b2b" strokeWidth="1.5" strokeDasharray="4 4" />
          </svg>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Section Header */}
          <div className='section-heading-container designed-for-heading' style={{ textAlign: 'center', marginBottom: '40px' }}>
            {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', marginBottom: '12px' }}>
              <div style={{ width: '40px', height: '1px', background: 'linear-gradient(to right, transparent, #ff2b2b)' }}></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '5px', height: '5px', backgroundColor: '#ff2b2b', borderRadius: '50%' }}></div>
                <span style={{ fontSize: '0.85rem', color: '#ff2b2b', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>Designed For</span>
                <div style={{ width: '5px', height: '5px', backgroundColor: '#ff2b2b', borderRadius: '50%' }}></div>
              </div>
              <div style={{ width: '40px', height: '1px', background: 'linear-gradient(to left, transparent, #ff2b2b)' }}></div>
            </div> */}

            <h2 className="section-heading-responsive" style={{ fontSize: '3.5rem', fontWeight: '800', color: '#1a1a1a', letterSpacing: '-1.5px', marginBottom: '15px' }}>
              Designed <span style={{ color: '#ff2b2b' }}>For</span>
            </h2>
            <p style={{ fontSize: '1.15rem', color: '#666', marginBottom: '24px' }}>
              Serving all financial institutions in the payments ecosystem
            </p>

            {/* Glowing divider line below heading */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', width: '120px', margin: '0 auto' }}>
              <div style={{ height: '3px', width: '100%', backgroundColor: '#ff2b2b', borderRadius: '2px' }}></div>
              <div style={{ position: 'absolute', right: '-4px', width: '8px', height: '8px', backgroundColor: '#ff2b2b', borderRadius: '50%', border: '2px solid #ffffff', boxShadow: '0 0 6px rgba(255, 43, 43, 0.4)' }}></div>
            </div>
          </div>

          {/* Designed For Grid */}
          <div className="designed-grid">
            {[
              {
                title: 'Bank',
                desc: 'Empowering banks with seamless and secure payment solutions.',
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff2b2b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
                  </svg>
                )
              },
              {
                title: 'Co-operative Bank',
                desc: 'Supporting co-operative bank with reliable and efficient infrastructure.',
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff2b2b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                )
              },
              {
                title: 'NBFC',
                desc: 'Enabling NBFCs to streamline collections and disbursements.',
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff2b2b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                )
              },
              {
                title: 'Payment Institution',
                desc: 'Building strong payment networks for institutions of tomorrow.',
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff2b2b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                )
              },
              {
                title: 'Fintech',
                desc: 'Fueling fintech innovation with robust and scalable solutions.',
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff2b2b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l2.5 6.5 6.5 2.5-6.5 2.5-2.5 6.5-2.5-6.5-6.5-2.5 6.5-2.5z" />
                    <path d="M5 3l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1z" />
                  </svg>
                )
              }
            ].map((target, idx) => (
              <div key={idx} className="effectFade fadeUp" >
                <div className="designed-card">
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
                  <div className="designed-card-tab"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Core Features Section */}
      <section id="features" className="section-spacing-lg" style={{ position: 'relative', overflow: 'hidden' }}>
        <style>
          {`
            .features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  max-width: 1100px;
  margin: 0 auto;
}

.features-slider-viewport {
  width: 100%;
}

/* =========================================
   MOBILE FEATURES SLIDER
========================================= */

@media (max-width: 991px) {

  /* =========================================
     FIXED VIEWPORT
  ========================================= */

  .features-slider-viewport {
    width: 100%;
    overflow: hidden;
  }


  /* =========================================
     MOVING TRACK
  ========================================= */

  .features-grid {
    display: grid;

    /*
      Each card gets exactly one
      viewport width.
    */
    grid-template-columns: repeat(2, 100%);

    /*
      Only one row because we only
      have two feature cards.
    */
    grid-template-rows: 1fr;

    /*
      Keep cards arranged horizontally.
    */
    grid-auto-flow: column;

    /*
      Exact gap between cards.
    */
    gap: 16px;

    width: 100%;
    max-width: none;

    margin: 0;

    animation: featuresMobileSlider 8s ease-in-out infinite;
  }


  /* =========================================
     INDIVIDUAL SLIDES
  ========================================= */

  .features-grid > .effectFade {
    width: 100%;
    min-width: 0;
    height: auto !important;
  }


  .features-grid .feature-section-card {
    width: 100%;
    height: 100% !important;
  }


  /* Disable hover lift on touch devices */
  .features-grid .feature-section-card:hover {
    transform: none;
  }
}

/* =========================================
   HORIZONTAL SLIDE
========================================= */

@keyframes featuresMobileSlider {

  /* ================================
     CARD 1
  ================================= */

  0%,
  40% {
    transform: translateX(0);
  }


  /* ================================
     SLIDE TO CARD 2
  ================================= */

  50%,
  90% {
    transform: translateX(calc(-100% - 16px));
  }


  /* ================================
     SLIDE BACK TO CARD 1
  ================================= */

  100% {
    transform: translateX(0);
  }
}
            
            .feature-section-card {
              background: #ffffff;
              border-radius: 28px;
              padding: 45px;
              border: 1px solid rgba(255, 43, 43, 0.08);
              box-shadow: 0 10px 40px rgba(0, 0, 0, 0.015);
              transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
              height: 100%;
              
            }
            
            .feature-section-card:hover {
              transform: translateY(-8px);
              border-color: rgba(255, 43, 43, 0.22);
              box-shadow: 0 25px 60px rgba(255, 43, 43, 0.06);
            }
            
            .feature-header-row {
              display: flex;
              align-items: center;
              gap: 20px;
              margin-bottom: 35px;
            }
            
            .feature-card-icon-box {
              width: 56px;
              height: 56px;
              border-radius: 16px;
              background-color: rgba(255, 43, 43, 0.05);
              border: 1px solid rgba(255, 43, 43, 0.12);
              display: flex;
              align-items: center;
              justify-content: center;
              flex-shrink: 0;
            }
            
            .feature-header-text {
              display: flex;
              flex-direction: column;
            }
            
            .feature-card-main-title {
              font-size: 1.45rem;
              font-weight: 800;
              color: #1a1a1a;
              margin: 0 0 6px 0;
              line-height: 1.2;
            }
            
            .feature-card-subtitle {
              font-size: 0.95rem;
              color: #666;
              margin: 0;
              line-height: 1.4;
            }
            
            .feature-bullets-list {
              list-style: none;
              padding: 0;
              margin: 0;
              display: flex;
              flex-direction: column;
              gap: 18px;
            }
            
            .feature-bullet-item {
              position: relative;
              padding-left: 22px;
              font-size: 0.98rem;
              font-weight: 500;
              color: #333333;
              line-height: 1.5;
            }
            
            .feature-bullet-item::before {
              content: '';
              position: absolute;
              left: 0;
              top: 8px;
              width: 6px;
              height: 6px;
              background-color: #ff2b2b;
              border-radius: 50%;
              box-shadow: 0 0 6px rgba(255, 43, 43, 0.8);
            }
          `}
        </style>

        {/* Backdrop Glow Accent */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '400px', background: 'radial-gradient(circle, rgba(255,43,43,0.02) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(65px)', pointerEvents: 'none', zIndex: 0 }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Section Header */}
          <div className='section-heading-container' style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 className='section-heading-responsive' style={{ fontSize: '3.2rem', fontWeight: '800', color: '#1a1a1a', letterSpacing: '-1.5px', marginBottom: '15px', lineHeight: '1.2' }}>
              Core Features
            </h2>
            <div style={{ height: '3px', width: '60px', backgroundColor: '#ff2b2b', margin: '0 auto', borderRadius: '10px' }}></div>
          </div>

          {/* Features Cards Grid */}
          <div className="features-slider-viewport">
            <div className="features-grid">
              {/* Left Card: Technology & Architecture */}
              <div className="effectFade fadeUp h-100">
                <div className="feature-section-card">
                  <div className="feature-header-row">
                    <div className="feature-card-icon-box">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff2b2b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="4" y="4" width="16" height="16" rx="2" />
                        <rect x="9" y="9" width="6" height="6" />
                        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
                      </svg>
                    </div>
                    <div className="feature-header-text">
                      <h3 className="feature-card-main-title">Technology & Architecture</h3>
                      <p className="feature-card-subtitle">Fostering rapid innovation through advanced payment architecture</p>
                    </div>
                  </div>
                  <ul className="feature-bullets-list">
                    <li className="feature-bullet-item">Intelligent Payment Switching Engine</li>
                    <li className="feature-bullet-item">Secure, API-Driven Integration Framework</li>
                    <li className="feature-bullet-item">Real-time Transaction Monitoring & Logs</li>
                    <li className="feature-bullet-item">High Availability & Fault-Tolerant Design</li>
                    <li className="feature-bullet-item">Scalable Architecture for Growing Transaction Volumes</li>
                    <li className="feature-bullet-item">On-Premise, Private Cloud & Hybrid Deployment</li>
                  </ul>
                </div>
              </div>

              {/* Right Card: Operational Benefits */}
              <div className="effectFade fadeUp h-100" >
                <div className="feature-section-card">
                  <div className="feature-header-row">
                    <div className="feature-card-icon-box">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff2b2b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="20" x2="18" y2="10" />
                        <line x1="12" y1="20" x2="12" y2="4" />
                        <line x1="6" y1="20" x2="6" y2="14" />
                      </svg>
                    </div>
                    <div className="feature-header-text">
                      <h3 className="feature-card-main-title">Operational Benefits</h3>
                      <p className="feature-card-subtitle">Measurable benefits for payment infrastructure growth</p>
                    </div>
                  </div>
                  <ul className="feature-bullets-list">
                    <li className="feature-bullet-item">Real-time Monitoring</li>
                    <li className="feature-bullet-item">Improved uptime across digital payment channels</li>
                    <li className="feature-bullet-item">Reduced transaction failures and reconciliation gaps</li>
                    <li className="feature-bullet-item">Complete visibility into transaction flows</li>
                    <li className="feature-bullet-item">Enhanced operational control and compliance readiness</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* 5. Why Choose Transact Core 360 Section */}
      < section id="why-choose" className="section-spacing-lg" style={{ position: 'relative', overflow: 'hidden' }
      }>
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

        {/* Abstract dotted patterns */}
        <div style={{ position: 'absolute', top: '20%', right: '5%', width: '100px', height: '100px', backgroundImage: 'radial-gradient(rgba(255, 43, 43, 0.15) 1px, transparent 1px)', backgroundSize: '10px 10px', opacity: 0.7, zIndex: 0, pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', bottom: '20%', left: '5%', width: '100px', height: '100px', backgroundImage: 'radial-gradient(rgba(255, 43, 43, 0.15) 1px, transparent 1px)', backgroundSize: '10px 10px', opacity: 0.7, zIndex: 0, pointerEvents: 'none' }}></div>

        {/* Curved connection lines */}
        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0, opacity: 0.12 }} viewBox="0 0 1440 800" fill="none">
          <path d="M-100,200 C300,100 500,600 900,400 C1100,300 1300,700 1600,500" stroke="#ff2b2b" strokeWidth="1.5" strokeDasharray="5 5" />
          <path d="M-50,600 C200,400 600,200 800,500 C1000,700 1200,300 1500,400" stroke="#ff2b2b" strokeWidth="1" />
        </svg>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Section Header */}
          <div className='section-heading-container' style={{ textAlign: 'center', marginBottom: '40px', position: 'relative' }}>
            {/* Small premium top label with divider lines */}
            {/* <div style={{ display: 'inline-flex', alignItems: 'center', gap: '15px', marginBottom: '16px' }}>
              <div style={{ width: '30px', height: '1px', background: 'linear-gradient(to right, transparent, #ff2b2b)' }}></div>
              <span style={{ color: '#ff2b2b', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>WHY CHOOSE US</span>
              <div style={{ width: '30px', height: '1px', background: 'linear-gradient(to left, transparent, #ff2b2b)' }}></div>
            </div> */}

            {/* Main heading */}
            <h2 className='section-heading-responsive' style={{ fontSize: '3.2rem', fontWeight: '800', color: '#1a1a1a', letterSpacing: '-1.5px', marginBottom: '20px', lineHeight: '1.2' }}>
              Why <span style={{ background: 'linear-gradient(to right, #ff2b2b, #ff5b5b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Transact Core</span>?
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
                title: 'Unified Network Control',
                desc: 'Unified control across all payment networks.',
                icon: (
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="why-choose-icon">
                    <rect x="3" y="3" width="7" height="9" />
                    <rect x="14" y="3" width="7" height="5" />
                    <rect x="14" y="12" width="7" height="9" />
                    <rect x="3" y="16" width="7" height="5" />
                  </svg>
                )
              },
              {
                num: '02',
                title: 'Intelligent Switch Routing',
                desc: 'Intelligent, real-time switching capabilities.',
                icon: (
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="why-choose-icon">
                    <polyline points="16 3 21 3 21 8" />
                    <line x1="4" y1="20" x2="21" y2="3" />
                    <polyline points="21 16 21 21 16 21" />
                    <line x1="15" y1="15" x2="21" y2="21" />
                    <line x1="4" y1="4" x2="9" y2="9" />
                  </svg>
                )
              },
              {
                num: '03',
                title: 'Role-Based Security',
                desc: 'Secure and role-based operational access.',
                icon: (
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="why-choose-icon">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                )
              },
              {
                num: '04',
                title: 'Scalable Infrastructure',
                desc: 'Scalable, future-ready payment infrastructure.',
                icon: (
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="why-choose-icon">
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                )
              },
              {
                num: '05',
                title: 'End-to-End Oversight',
                desc: 'End-to-end oversight of digital payment operations.',
                icon: (
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="why-choose-icon">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4M12 8h.01" />
                  </svg>
                )
              }
            ].map((card, idx) => (
              <div key={idx} className="effectFade fadeUp h-100">
                <div className="why-choose-card h-100">
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
            <div className="effectFade fadeUp h-100" >
              <div className="why-choose-cta-card ">
                <div className="why-choose-cta-glow"></div>

                {/* Modern Wave SVG Accent */}
                <svg className="why-choose-cta-waves" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,50 C30,40 70,60 100,50 L100,100 L0,100 Z" fill="rgba(255,255,255,0.1)" />
                  <path d="M0,60 C40,50 60,70 100,60 L100,100 L0,100 Z" fill="rgba(255,255,255,0.05)" />
                </svg>

                <div>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="why-choose-cta-icon" style={{ color: '#ffffff', marginBottom: '25px' }}>
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>

                  {/* <p className="why-choose-cta-desc">
                    Get started with Transact Core 360 today and power your business with next-gen transaction switching.
                  </p> */}
                </div>
                <div className="ready-content">
                  <h4 className="why-choose-cta-title">Ready to Switch?</h4>
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
      </section >

      {/* 6. Outcome Section */}
      < section id="outcome" className="section-spacing-lg" style={{ position: 'relative', overflow: 'hidden' }}>
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

        {/* World Map Backdrop (low opacity) */}
        <div style={{ position: 'absolute', top: '10%', left: '5%', right: '5%', bottom: '10%', opacity: 0.04, pointerEvents: 'none', zIndex: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="100%" height="100%" viewBox="0 0 1000 500" fill="none">
            <circle cx="200" cy="150" r="20" fill="none" stroke="#ff2b2b" strokeWidth="1" strokeDasharray="2 2" />
            <circle cx="350" cy="220" r="40" fill="none" stroke="#ff2b2b" strokeWidth="1" strokeDasharray="2 2" />
            <circle cx="500" cy="180" r="30" fill="none" stroke="#ff2b2b" strokeWidth="1" strokeDasharray="2 2" />
            <circle cx="680" cy="240" r="35" fill="none" stroke="#ff2b2b" strokeWidth="1" strokeDasharray="2 2" />
            <circle cx="820" cy="170" r="25" fill="none" stroke="#ff2b2b" strokeWidth="1" strokeDasharray="2 2" />
            <circle cx="210" cy="140" r="4" fill="#ff2b2b" />
            <circle cx="340" cy="230" r="4" fill="#ff2b2b" />
            <circle cx="490" cy="190" r="4" fill="#ff2b2b" />
            <circle cx="690" cy="230" r="4" fill="#ff2b2b" />
            <circle cx="810" cy="160" r="4" fill="#ff2b2b" />
            <circle cx="580" cy="300" r="4" fill="#ff2b2b" />
            <path d="M210,140 Q275,185 340,230" stroke="#ff2b2b" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M340,230 Q415,210 490,190" stroke="#ff2b2b" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M490,190 Q590,210 690,230" stroke="#ff2b2b" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M690,230 Q750,195 810,160" stroke="#ff2b2b" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M340,230 Q460,265 580,300" stroke="#ff2b2b" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M580,300 Q635,265 690,230" stroke="#ff2b2b" strokeWidth="1.5" strokeDasharray="4 4" />
          </svg>
        </div>

        {/* Left Side Floating Ring and Orbit */}
        <div style={{
          position: 'absolute',
          left: '-80px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '240px',
          height: '240px',
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.8
        }}>
          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none">
            <circle cx="50" cy="100" r="80" stroke="rgba(255, 43, 43, 0.12)" strokeWidth="1" />
            <circle cx="50" cy="100" r="50" stroke="rgba(255, 43, 43, 0.08)" strokeWidth="1" />
            <circle cx="50" cy="100" r="30" stroke="rgba(255, 43, 43, 0.05)" strokeWidth="1" />
            <circle cx="130" cy="100" r="5" fill="#ff2b2b" style={{ filter: 'drop-shadow(0 0 4px rgba(255, 43, 43, 0.6))' }} />
            <circle cx="50" cy="100" r="5" fill="#ff2b2b" style={{ filter: 'drop-shadow(0 0 4px rgba(255, 43, 43, 0.6))' }} />
          </svg>
        </div>

        {/* Right Side Floating Ring and Orbit */}
        <div style={{
          position: 'absolute',
          right: '-80px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '240px',
          height: '240px',
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.8
        }}>
          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none">
            <circle cx="150" cy="100" r="80" stroke="rgba(255, 43, 43, 0.12)" strokeWidth="1" />
            <circle cx="150" cy="100" r="50" stroke="rgba(255, 43, 43, 0.08)" strokeWidth="1" />
            <circle cx="150" cy="100" r="30" stroke="rgba(255, 43, 43, 0.05)" strokeWidth="1" />
            <circle cx="70" cy="100" r="5" fill="#ff2b2b" style={{ filter: 'drop-shadow(0 0 4px rgba(255, 43, 43, 0.6))' }} />
            <circle cx="150" cy="100" r="5" fill="#ff2b2b" style={{ filter: 'drop-shadow(0 0 4px rgba(255, 43, 43, 0.6))' }} />
          </svg>
        </div>

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
                {/* Orbit dots inside outer bounds */}
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
                Transact Core 360 delivers a robust, future-ready foundation for managing digital payments—ensuring seamless transactions, operational efficiency, and complete control across the institution's payment ecosystem.
              </p>

              <a href="#contact-section" className="outcome-cta-btn">
                <span>Achieve This Outcome</span>
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
      </section >

      {/* 7. Contact Us Section */}
      < div id="contact-section" >
        <CTABannerSection
          title={`Ready to Scale Transactions with ${product.title}?`}
          subtitle={`Schedule a free consultation with our transaction switching experts and discover how ${product.title} can power high-volume payments.`}
        />
      </div >
    </>
  );
}

export default TransactCore;
