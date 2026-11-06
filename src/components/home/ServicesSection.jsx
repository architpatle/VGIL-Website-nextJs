"use client";
import React, { useState, useEffect, useRef } from 'react';

import service1Img from "../../assets//home/Why-Choose-Us/Global expertise in connected systems.png";
import service2Img from "../../assets/home/Why-Choose-Us/Finance, Factory, and Boardroom Triptych.png";
import service3Img from "../../assets/home/Why-Choose-Us/India Operations Control Room Collaboration.png";
import service4Img from "../../assets/home/Why-Choose-Us/Integrated IT Operations Control Centre.png";

function ServicesSection() {
  const [activeImage, setActiveImage] = useState(service1Img);
  const [activeCard, setActiveCard] = useState("faq-1");
  const [isFading, setIsFading] = useState(false);
  const hoverTimeout = useRef(null);

  // Preload images
  useEffect(() => {
    const images = [
  service1Img,
  service2Img,
  service3Img,
  service4Img,
];
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    // Cleanup timeout on unmount
    return () => {
      if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    };
  }, []);

  const handleCardHover = (cardId, newImg) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);

    // Add a slight delay (100ms) to prevent flickering/jumping when rapidly moving mouse across cards
    hoverTimeout.current = setTimeout(() => {
      if (activeCard !== cardId) {
        setActiveCard(cardId);
      }

      if (newImg && newImg !== activeImage && !isFading) {
        setIsFading(true);
        setTimeout(() => {
          setActiveImage(newImg);
          setIsFading(false);
        }, 200); // Wait for fade out
      }
    }, 120);
  };

  const handleMouseLeaveContainer = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);

    // Delay before reverting to the default card (faq-1)
    hoverTimeout.current = setTimeout(() => {
      setActiveCard("faq-1");
    }, 250);
  };

  return (
    <div id="services" className="section-services section-spacing-lg " >
      <div className="container">
        <div className="row justify-content-between ">
          <div className="col-xxl-4 col-lg-6">
            <div className="d-flex flex-column justify-content-between h-100 ">
              <div className="col-left d-flex flex-column justify-content-start gap-30 h-100 services-section-col-left">
                <div>
                  <div className="heading-section ">
                    <div className="heading-sub fw-semibold effectFade fadeUp">Why Choose Us?</div>
                    <div className="heading-title text-gradient-3 effectFade fadeRotateX">End-to-End <br /> AI Services</div>
                  </div>
                  <p className="effectFade fadeUp services-section-p-none " >Since 1997, Virtual Galaxy Infotech has been empowering banks, enterprises and government organizations through secure software, intelligent automation and AI-driven innovation, delivering scalable, reliable, future-ready digital transformation solutions across diverse industries worldwide.</p>
                </div>

                {/* Dynamic Image Container */}
                <div className="dynamic-image-container effectFade fadeUp">
                  <img
                    src={activeImage.src}
                    alt="Active Service"
                    style={{
                      width: '100%',
                      height: 'auto',
                      opacity: isFading ? 0 : 1,
                      transform: isFading ? 'scale(0.98)' : 'scale(1)',
                      transition: 'opacity 0.2s ease-out, transform 0.2s ease-out',
                      objectFit: 'cover',
                      borderRadius: '24px',
                      backgroundColor:'var(--secondary)'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-lg-6">
            {/* Parent container no longer needs a hardcoded min-height because a card is always open */}
            <div className="accordion-faq_list" id="accordion-services" onMouseLeave={handleMouseLeaveContainer}>

              <div className={`accordion-faq_item effectFade fadeUp ${activeCard === 'faq-1' ? 'theme-dark' : 'theme-cream'}`} role="presentation" onMouseEnter={() => handleCardHover('faq-1', service1Img)}>
                <div className={`accordion-action services-image-btn ${activeCard === 'faq-1' ? 'active-img' : 'collapsed'}`} role="button" aria-expanded={activeCard === 'faq-1'}>
                  <div className="accordion-title services-section-accordian-title">
                    Domain Expertise <br />
                    {/* <div className="text-body-1 num">(01)</div> */}
                  </div>
                </div>
                <div className={`react-accordion-content ${activeCard === 'faq-1' ? 'open' : ''}`}>
                  <div className="react-accordion-inner">
                    <div className="accordion-content services-section-accordion-content pt-3 mt-0">
                      <div className="text-body-3 text-neutral-300 text services-section-accordian-text">VGIL has been a pioneer in the ever-evolving technology space in the verticals of Banking & Finance, eGovernance, ERP & DC / DR Solutions.</div>
                      <div className="list-tags services-section-accordian-list-tags">
                        <a href="#" className="tags-item fw-semibold">Pioneers in Technology Innovation</a>
                        <a href="#" className="tags-item fw-semibold">Reliable & Scalable Systems</a>
                        <a href="#" className="tags-item fw-semibold">Expertise Across Key Verticals </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`accordion-faq_item effectFade fadeUp ${activeCard === 'faq-2' ? 'theme-dark' : 'theme-cream'}`} role="presentation" onMouseEnter={() => handleCardHover('faq-2', service2Img)}>
                <div className={`accordion-action services-image-btn ${activeCard === 'faq-2' ? 'active-img' : 'collapsed'}`} role="button" aria-expanded={activeCard === 'faq-2'}>
                  <div className="accordion-title services-section-accordian-title">
                    Trusted by 200+ Enterprises <br />
                    {/* <div className="text-body-1 num">(02)</div> */}
                  </div>
                </div>
                <div className={`react-accordion-content ${activeCard === 'faq-2' ? 'open' : ''}`}>
                  <div className="react-accordion-inner">
                    <div className="accordion-content pt-3 mt-0 services-section-accordion-content">
                      <div className="text-body-3 text-neutral-300 text services-section-accordian-text">Support multiple types of organizations, including Bank Branches, Manufacturing Setups, and Business Houses.</div>
                      <div className="list-tags services-section-accordian-list-tags">
                        <a href="#" className="tags-item fw-semibold">Banking Solutions</a>
                        <a href="#" className="tags-item fw-semibold">Manufacturing Support</a>
                        <a href="#" className="tags-item fw-semibold">Business-Focused Solutionss</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`accordion-faq_item effectFade fadeUp ${activeCard === 'faq-3' ? 'theme-dark' : 'theme-cream'}`} role="presentation" onMouseEnter={() => handleCardHover('faq-3', service3Img)}>
                <div className={`accordion-action services-image-btn ${activeCard === 'faq-3' ? 'active-img' : 'collapsed'}`} role="button" aria-expanded={activeCard === 'faq-3'}>
                  <div className="accordion-title services-section-accordian-title">
                    450+ Resources <br />
                    {/* <div className="text-body-1 num">(03)</div> */}
                  </div>
                </div>
                <div className={`react-accordion-content ${activeCard === 'faq-3' ? 'open' : ''}`}>
                  <div className="react-accordion-inner">
                    <div className="accordion-content pt-3 mt-0 services-section-accordion-content">
                      <div className="text-body-3 text-neutral-300 text services-section-accordian-text">Certified experts managing India's critical infrastructure.<br />
                        PAN-India presence with 8+ years avg experience
                      </div>
                      <div className="list-tags services-section-accordian-list-tags">
                        <a href="#" className="tags-item fw-semibold">Dynamic & Skilled Team</a>
                        <a href="#" className="tags-item fw-semibold">Maintaining a Competitive Edge</a>
                        <a href="#" className="tags-item fw-semibold">Continuously Upgraded Knowledge</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`accordion-faq_item effectFade fadeUp ${activeCard === 'faq-4' ? 'theme-dark' : 'theme-cream'}`} role="presentation" onMouseEnter={() => handleCardHover('faq-4', service4Img)}>
                <div className={`accordion-action services-image-btn ${activeCard === 'faq-4' ? 'active-img' : 'collapsed'}`} role="button" aria-expanded={activeCard === 'faq-4'}>
                  <div className="accordion-title services-section-accordian-title">
                    Future Ready Solutions <br />
                    {/* <div className="text-body-1 num">(04)</div> */}
                  </div>
                </div>
                <div className={`react-accordion-content ${activeCard === 'faq-4' ? 'open' : ''}`}>
                  <div className="react-accordion-inner">
                    <div className="accordion-content pt-3 mt-0 services-section-accordion-content">
                      <div className="text-body-3 text-neutral-300 text services-section-accordian-text">End-to-end lifecycle management for critical IT infrastructure:<br />
                        Consulting & Design → Implementation → 24x7 Operations → AMC Support
                      </div>
                      <div className="list-tags services-section-accordian-list-tags">
                        <a href="#" className="tags-item fw-semibold">Automate Transactions Seamlessly</a>
                        <a href="#" className="tags-item fw-semibold">Intelligent Insights</a>
                        <a href="#" className="tags-item fw-semibold">Intelligent Insights</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
