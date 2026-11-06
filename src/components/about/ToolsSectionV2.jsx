"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import logo from '../../assets/home/ownwer-img/vg-logo-2.png';

function ToolsSectionV2() {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const designWidth = 886; // Includes padding
        if (containerWidth < designWidth) {
          setScale(containerWidth / designWidth);
        } else {
          setScale(1);
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="section-tools v2 section-spacing-lg">
      <div className="tool-wrap text-center" ref={containerRef}>
        <div className="heading-section center mb-48">
          <div className="heading-sub fw-semibold effectFade fadeUp">Tools</div>
          <div className="heading-title text-gradient-3 effectFade fadeRotateX">We work with <br /> powerful AI tools</div>
        </div>
        <div className="text effectFade fadeUp">
          We design, build, and evaluate with a modern AI stack—LLMs, vector <br /> search, orchestration, and observability—so your features are fast, <br /> reliable, and secure.
        </div>
        <div style={{
          height: `${506 * (scale < 1 ? scale * 0.85 : scale)}px`,
          marginTop: scale < 1 ? '0px' : '-169px',
          marginBottom: scale < 1 ? '40px' : '-162px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'visible'
        }}>
          <div className="position-relative tool-image-box" style={{
            transform: `scale(${scale < 1 ? scale * 0.85 : scale})`,
            transformOrigin: 'center center',
            width: '856px',
            height: '506px',
            margin: 0,
            flexShrink: 0
          }}>
            <img className="img-item img-item-1" src="/assets/images/about/tools-img/eAutopsy.png" alt="eAutopsy" />

            <img className="img-item img-item-2" src="/assets/images/about/tools-img/Banking Solution.jpg.jpeg" alt="Banking Solution" />

            <img className="img-item img-item-3" src="/assets/images/about/tools-img/Conversational AI.jpg.jpeg" alt="Conversational AI" />

            <div className="image-center flex-shrink">
              <img src={logo} alt="AI Brain" />
            </div>

            <img className="img-item img-item-4" src="/assets/images/about/tools-img/Cyber Security.jpg.jpeg" alt="Cyber Security" />

            <img className="img-item img-item-5" src="/assets/images/about/tools-img/Data Center Enterprice.jpg.jpeg" alt="Data Center Enterprise" />

            <img className="img-item img-item-6" src="/assets/images/about/tools-img/ERP.jpg.jpeg" alt="ERP" />

            <div className="side-line">
              <svg data-viewbox-desktop="0 0 302 157" data-viewbox-mobile="-30 20 200 20 340 100" className="line-1" width="302" height="157" viewBox="0 0 302 157" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
                <path id="line-path" d="M301 157V130C301 121.716 294.284 115 286 115H16C7.71572 115 0.999992 108.284 0.999992 100V0" stroke="#FFC5A3" strokeWidth="2" fill="none" />
                <circle r="5.2" fill="#FD3A25">
                  <animateMotion dur="2.5s" repeatCount="indefinite" path="M301 157V130C301 121.716 294.284 115 286 115H16C7.71572 115 0.999992 108.284 0.999992 100V0" />
                </circle>
              </svg>
              <svg data-viewbox-desktop="0 0 300 14" data-viewbox-mobile="0 0 260 13" className="line-2" width="302" height="14" viewBox="0 -6 302 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
                <path d="M302 1H0" stroke="#FFC5A3" strokeWidth="2" fill="none" />
                <circle r="5.2" fill="#FD3A25">
                  <animateMotion dur="2.5s" repeatCount="indefinite" path="M302 1H0" />
                </circle>
              </svg>
              <svg data-viewbox-desktop="0 0 302 157" data-viewbox-mobile="-30 20 200 20 340 100" className="line-3" width="310" height="150" viewBox="0 0 302 157" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
                <path d="M301 0V27C301 35.284 294.284 42 286 42H16C7.71572 42 0.999992 48.716 0.999992 57V157" stroke="#FFC5A3" strokeWidth="2" fill="none" />
                <circle r="5.2" fill="#FD3A25">
                  <animateMotion dur="2.5s" repeatCount="indefinite" path="M301 0V27C301 35.284 294.284 42 286 42H16C7.71572 42 0.999992 48.716 0.999992 57V157" />
                </circle>
              </svg>
              <svg data-viewbox-desktop="0 0 302 157" data-viewbox-mobile="-30 20 200 20 340 100" className="line-4" width="302" height="157" viewBox="0 0 302 157" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
                <path d="M1 157V130C1 121.716 7.71573 115 16 115H286C294.284 115 301 108.284 301 100V0" stroke="#FFC5A3" strokeWidth="2" fill="none" />
                <circle r="5.2" fill="#FD3A25">
                  <animateMotion dur="2.5s" repeatCount="indefinite" path="M1 157V130C1 121.716 7.71573 115 16 115H286C294.284 115 301 108.284 301 100V0" />
                </circle>
              </svg>
              <svg data-viewbox-desktop="0 0 302 14" data-viewbox-mobile="0 0 260 14" className="line-5" width="302" height="14" viewBox="0 -6 302 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
                <path d="M0 1.05908H302" stroke="#FFC5A3" strokeWidth="2" fill="none" />
                <circle r="5.2" fill="#FD3A25">
                  <animateMotion dur="2.5s" repeatCount="indefinite" path="M0 1.05908H302" />
                </circle>
              </svg>
              <svg data-viewbox-desktop="0 0 302 157" data-viewbox-mobile="-30 20 200 20 340 100" className="line-6" width="310" height="150" viewBox="0 0 302 157" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
                <path d="M1 0V27C1 35.284 7.71573 42 16 42H286C294.284 42 301 48.716 301 57V157" stroke="#FFC5A3" strokeWidth="2" fill="none" />
                <circle r="5.2" fill="#FD3A25">
                  <animateMotion dur="2.5s" repeatCount="indefinite" path="M1 0V27C1 35.284 7.71573 42 16 42H286C294.284 42 301 48.716 301 57V157" />
                </circle>
              </svg>
            </div>
          </div>
        </div>
        <div className="" style={{ visibility: 'hidden' }}>
          <Link href="/contact" className="tf-btn effectFade fadeRotateX">
            Get Started
          </Link></div>
      </div>
    </div>
  );
}

export default ToolsSectionV2;
