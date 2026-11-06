"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import homeBgImg from '../../assets/home/hero-bg-img.jpg'

import eAutopsyImg from '../../assets/home/e-autopsy.png';
import digitalIdentityImg from '../../assets/home/digital-identity.png';
import imisImg from '../../assets/home/imis.png';
import './HeroGradient.css'

function HeroGradient() {
  const words = ['Tech', 'Driven', 'Native'];

  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="section-hero" >
      <div className="hero-image" style={{ backgroundImage: `url("${homeBgImg.src}")` }}>
      </div>
      <div className="container">
        <div className="content-wrap text-center">
          <div className="sub fw-semibold effectFade fadeUp">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.53252 12.0966C3.75106 11.5025 4.59108 11.5025 4.81645 12.0966L5.54037 14.0567C5.60866 14.2411 5.75891 14.3913 5.9433 14.4596L7.90335 15.1835C8.49751 15.4021 8.49751 16.2421 7.90335 16.4674L5.9433 17.1914C5.75891 17.2597 5.60866 17.4099 5.54037 17.5943L4.81645 19.5543C4.59791 20.1485 3.75789 20.1485 3.53252 19.5543L2.8086 17.5943C2.74031 17.4099 2.59006 17.2597 2.40566 17.1914L0.44562 16.4674C-0.14854 16.2489 -0.14854 15.4089 0.44562 15.1835L2.40566 14.4596C2.59006 14.3913 2.74031 14.2411 2.8086 14.0567L3.53252 12.0966Z" fill="url(#paint0_linear_580_105)" />
              <path d="M3.53252 12.0966C3.75106 11.5025 4.59108 11.5025 4.81645 12.0966L5.54037 14.0567C5.60866 14.2411 5.75891 14.3913 5.9433 14.4596L7.90335 15.1835C8.49751 15.4021 8.49751 16.2421 7.90335 16.4674L5.9433 17.1914C5.75891 17.2597 5.60866 17.4099 5.54037 17.5943L4.81645 19.5543C4.59791 20.1485 3.75789 20.1485 3.53252 19.5543L2.8086 17.5943C2.74031 17.4099 2.59006 17.2597 2.40566 17.1914L0.44562 16.4674C-0.14854 16.2489 -0.14854 15.4089 0.44562 15.1835L2.40566 14.4596C2.59006 14.3913 2.74031 14.2411 2.8086 14.0567L3.53252 12.0966Z" fill="url(#paint1_linear_580_105)" />
              <path d="M11.4068 0.670991C11.7346 -0.223664 12.9981 -0.223664 13.3259 0.670991L14.7874 4.61157C14.8898 4.89157 15.1152 5.11011 15.3952 5.21938L19.3358 6.68088C20.2304 7.00869 20.2304 8.27214 19.3358 8.59995L15.3952 10.0614C15.1152 10.1639 14.8967 10.3893 14.7874 10.6693L13.3259 14.6098C12.9981 15.5045 11.7346 15.5045 11.4068 14.6098L9.94534 10.6693C9.8429 10.3893 9.61753 10.1707 9.33752 10.0614L5.39694 8.59995C4.50229 8.27214 4.50229 7.00869 5.39694 6.68088L9.33752 5.21938C9.61753 5.11694 9.83607 4.89157 9.94534 4.61157L11.4068 0.670991Z" fill="url(#paint2_linear_580_105)" />
              <path d="M11.4068 0.670991C11.7346 -0.223664 12.9981 -0.223664 13.3259 0.670991L14.7874 4.61157C14.8898 4.89157 15.1152 5.11011 15.3952 5.21938L19.3358 6.68088C20.2304 7.00869 20.2304 8.27214 19.3358 8.59995L15.3952 10.0614C15.1152 10.1639 14.8967 10.3893 14.7874 10.6693L13.3259 14.6098C12.9981 15.5045 11.7346 15.5045 11.4068 14.6098L9.94534 10.6693C9.8429 10.3893 9.61753 10.1707 9.33752 10.0614L5.39694 8.59995C4.50229 8.27214 4.50229 7.00869 5.39694 6.68088L9.33752 5.21938C9.61753 5.11694 9.83607 4.89157 9.94534 4.61157L11.4068 0.670991Z" fill="url(#paint3_linear_580_105)" />
              <defs>
                <linearGradient id="paint0_linear_580_105" x1="10.2993" y1="-1.30435" x2="21.6031" y2="11.1057" gradientUnits="userSpaceOnUse">
                  <stop offset="1" stopColor="#555D64" />
                  <stop offset="1" stopColor="#292C2E" />
                </linearGradient>
                <linearGradient id="paint1_linear_580_105" x1="10.0034" y1="0" x2="10.0034" y2="20" gradientUnits="userSpaceOnUse">
                  <stop offset="1" stopColor="#EA2B16" />
                  <stop offset="1" stopColor="#FF3B26" />
                </linearGradient>
                <linearGradient id="paint2_linear_580_105" x1="10.2993" y1="-1.30435" x2="21.6031" y2="11.1057" gradientUnits="userSpaceOnUse">
                  <stop offset="1" stopColor="#555D64" />
                  <stop offset="1" stopColor="#292C2E" />
                </linearGradient>
                <linearGradient id="paint3_linear_580_105" x1="10.0034" y1="0" x2="10.0034" y2="20" gradientUnits="userSpaceOnUse">
                  <stop offset="1" stopColor="#EA2B16" />
                  <stop offset="1" stopColor="#FF3B26" />
                </linearGradient>
              </defs>
            </svg>
            AI-Powered Solutions
          </div>
          <div className="title text-display-2 effectFade fadeRotateX">
            <span className="title1 fw-semibold text-gradient-1">Your Complete </span>
            {/* <br /> */}
            <div className="title2 d-flex gap-20 justify-content-center  align-items-start flex-wrap" >
              <div className="hero-rotating-title inline  ">

                <div className="hero-rotating-title-in">
                  <span className="fw-semibold text-gradient-1" >AI-</span>

                  <span className="word-container " >
                    <span
                      key={words[currentWord]}
                      className="hero-rotating-word fw-semibold text-gradient-1"
                    >
                      {words[currentWord]}
                    </span>
                  </span>
                </div>

                <span className="fw-semibold text-gradient-1">
                  &nbsp;Partner 
                </span>
              </div>
              {/* <div className="title-icon ">
                <div className="box"></div>
                <div className="title-icon-wrap">
                  <div className="img-1 img-transform-3" style={{ backgroundColor: '#fff', borderRadius: '16px', boxShadow: '0 8px 24px rgba(0,0,0,0.12)', padding: '1px', width: 'clamp(50px, 8vw, 70px)', height: 'clamp(50px, 8vw, 70px)', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-25deg)' }}>
                    <img src={eAutopsyImg} alt="E-Autopsy" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <div className="img-2 img-transform-3" style={{ backgroundColor: '#fff', borderRadius: '16px', boxShadow: '0 8px 24px rgba(0,0,0,0.12)', padding: '1px', width: 'clamp(50px, 8vw, 70px)', height: 'clamp(50px, 8vw, 70px)', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(15deg)' }}>
                    <img src={digitalIdentityImg} alt="Digital Identity" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <div className="img-3 img-transform-3" style={{ backgroundColor: '#fff', borderRadius: '16px', boxShadow: '0 8px 24px rgba(0,0,0,0.12)', padding: '1px', width: 'clamp(50px, 8vw, 70px)', height: 'clamp(50px, 8vw, 70px)', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-10deg)' }}>
                    <img src={imisImg} alt="IMIS" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <p className="text effectFade fadeUp">
            With AI-powered execution, we transform ideas into scalable products that drive success in the Tech-world. <br />Built for performance, designed for long-term growth.
          </p>
          <div className="bot-btns effectFade fadeRotateX">
            <Link href="/services/application-development" className="tf-btn">
              Explore Services
            </Link>
            <a href="#pricing" className="tf-btn-2">
              Start Your Journey
            </a>
          </div>
        </div>
      </div>
      {/* <a href="#about" className="scroll-more">
        <span className="fw-semibold link1">Scroll for more</span>
        <i className="icon icon-long-arrow-alt-down-solid"></i>
      </a> */}
    </div>
  );
}

export default HeroGradient;
