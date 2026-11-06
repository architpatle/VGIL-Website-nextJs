import React from 'react';
import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import './MissionSection.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const milestones = [
  {
    year: "1997",
    category: "Company Inception",
    title: "Company Foundation",
    description: 'Incorporated Under the Name "Virtual Galaxy Infotech Private Limited".',
    icon: "crown-solid",
    footer: "/assets/images/about/journey_castle.png",
    theme: "#b89047",
    shadow: "rgba(184, 144, 71, 0.15)"
  },
  {
    year: "2004",
    category: "Transforming Banking",
    title: "Banking Innovation",
    description: "Successful Development and Implementation of Link Manager Software at Punjab National Bank.",
    icon: "chart-line-solid",
    footer: "/assets/images/about/journey_innovation.png",
    theme: "#1e3a8a",
    shadow: "rgba(30, 58, 138, 0.15)"
  },
  {
    year: "2007",
    category: "Agency Module",
    title: "Product Development",
    description: "Newly developed Agency Module Goes Live at Punjab National Bank's Link Cell Branch.",
    icon: "bolt-solid",
    footer: "/assets/images/about/journey_innovation.png",
    theme: "#0d9488",
    shadow: "rgba(13, 148, 136, 0.15)"
  },
  {
    year: "2008",
    category: "Banking Domain Breakthrough",
    title: "Business Expansion",
    description: "Received work order for supply of banking application to one of the Urban Co-operative Bank and its 20 branches.",
    icon: "global",
    footer: "/assets/images/about/journey_growth.png",
    theme: "#4f46e5",
    shadow: "rgba(79, 70, 229, 0.15)"
  },
  {
    year: "2011",
    category: "Data Center & ERP Launch",
    title: "Infrastructure & Launch",
    description: "Successfully established the company's own state-of-the-art Data Centre & Launched IBS (Integrated Business Suite), a versatile ERP solution catering to multiple industries.",
    icon: "desktop-solid",
    footer: "/assets/images/about/journey_trust.png",
    theme: "#be123c",
    shadow: "rgba(190, 18, 60, 0.15)"
  },
  {
    year: "2012",
    category: "CBS Deployment",
    title: "Core Banking Success",
    description: "Successfully went live with CBS implementation for a State Cooperative Apex Bank & Secured a significant CBS order from District Central Cooperative Bank, covering 218 branches.",
    icon: "check-solid",
    footer: "/assets/images/about/journey_trust.png",
    theme: "#059669",
    shadow: "rgba(5, 150, 105, 0.15)"
  },
  {
    year: "2014",
    category: "Agri Tech Expansion",
    title: "Agricultural Technology",
    description: "Operated Computerized Auction System for Agricultural commodities at APMCs (MACP). Received LOI for Data Center infrastructure for MSAMB, Pune.",
    icon: "leaf-solid",
    footer: "/assets/images/about/journey_growth.png",
    theme: "#d97706",
    shadow: "rgba(217, 119, 6, 0.15)"
  },
  {
    year: "2016",
    category: "Global Growth",
    title: "International Growth",
    description: "Achieved first international CBS deployment with a Commercial Bank in Tanzania. Successfully launched IBS-ERP (e-Autopsy) for forensic department of GMC.",
    icon: "global",
    footer: "/assets/images/about/journey_growth.png",
    theme: "#0284c7",
    shadow: "rgba(2, 132, 199, 0.15)"
  },
  {
    year: "2018",
    category: "Capex/Opex Model",
    title: "Banking Solutions",
    description: "Received work order for core banking solution projects on capex/opex from one of district central Co-Op bank.",
    icon: "coins-solid",
    footer: "/assets/images/about/journey_trust.png",
    theme: "#ea580c",
    shadow: "rgba(234, 88, 12, 0.15)"
  },
  {
    year: "2019",
    category: "System Integrator",
    title: "System Integration",
    description: "Received DCC Bank work order for supply, integration, commissioning of DC-DR site, hardware, and CBS allied applications.",
    icon: "bezier-curve-solid",
    footer: "/assets/images/about/journey_innovation.png",
    theme: "#9333ea",
    shadow: "rgba(147, 51, 234, 0.15)"
  },
  {
    year: "2020",
    category: "CBS Management",
    title: "Digital Transformation",
    description: "Received work order for supply, migration, implementation and management of CBS projects from District Central Co-operative Bank.",
    icon: "code-solid",
    footer: "/assets/images/about/journey_innovation.png",
    theme: "#7c3aed",
    shadow: "rgba(124, 58, 237, 0.15)"
  },
  {
    year: "2023",
    category: "Revenue Landmark",
    title: "Financial Achievement",
    description: "₹ 50 Crores Landmark crossed, marking major scaling of operations.",
    icon: "crown-solid",
    footer: "/assets/images/about/journey_trust.png",
    theme: "#ca8a04",
    shadow: "rgba(202, 138, 4, 0.15)"
  },
  {
    year: "2024",
    category: "Corporate Transition",
    title: "Corporate Evolution",
    description: "Converted to Public Limited Company as 'Virtual Galaxy Infotech Limited'.",
    icon: "building",
    footer: "/assets/images/about/journey_trust.png",
    theme: "#334155",
    shadow: "rgba(51, 65, 85, 0.15)"
  },
  {
    year: "2025",
    category: "Strategic Growth Step",
    title: "Strategic Growth",
    description: "Successfully Listed on NSE Emerge on 19th May 2025, Boosting Visibility and Growth Potential.",
    icon: "star-solid",
    footer: "/assets/images/about/journey_growth.png",
    theme: "#e10600",
    shadow: "rgba(225, 6, 0, 0.15)"
  },
  {
  year: "2026",
  category: "Global Expansion",
  title: "Expanding Global Footprint",
  description: "Secured a USD 1.1 Million international contract with Botswana Development Corporation Limited, marking a significant milestone in the company's expansion into the African market.",
  icon: "global",
  footer: "/assets/images/about/journey_growth.png",
  theme: "#16a34a",
  shadow: "rgba(22, 163, 74, 0.15)"
}
];

function JourneySection() {
  const sectionRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!swiperRef.current) return;

        if (entry.isIntersecting) {
          swiperRef.current.autoplay.start();
        } else {
          swiperRef.current.autoplay.stop();
        }
      },
      {
        threshold: 0.4,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="journey-section section-spacing-lg">
      <div className="container">
        <div className="heading-section text-center effectFade fadeUp">
          <div className="heading-sub fw-semibold mx-auto">
            Our Journey
          </div>
          <h2 className="heading-title text-dark mb-24">
            Roadmap of VGIL for the last 29 years
          </h2>
          <p className="text-body-2 text-neutral-600 max-w-700 mx-auto">
            From a visionary startup in 1997 to a publicly listed technology company in 2025,
            our journey reflects innovation, trust, growth, and transformation.
          </p>
        </div>

        <div className="journey-slider-wrap effectFade fadeUp">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={false}
            initialSlide={0}
            loop={true}
            speed={4000}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              swiper.autoplay.stop();
            }}
            autoplay={{
              delay: 200,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              reverseDirection: false
            }}
            navigation={{
              prevEl: '.journey-prev',
              nextEl: '.journey-next',
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="journey-swiper"
          >
            {milestones.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="timeline-slide-content"
                  style={{
                    '--theme-color': item.theme,
                    '--shadow-color': item.shadow
                  }}
                >
                  <div className="timeline-node-wrapper">
                    <div className="timeline-icon-badge">
                      <i className={`icon icon-${item.icon}`}></i>
                    </div>
                    <div className="timeline-connector-line"></div>
                  </div>
                  <div className="timeline-card">
                    <div className="card-year">{item.year}</div>
                    <div className="card-category">{item.category}</div>
                    <h4 className="card-title">{item.title}</h4>
                    {/* <div className="card-divider"></div> */}
                    <p className="card-desc">{item.description}</p>
                    {/* <div
                      className="card-footer-graphic"
                      style={{ backgroundImage: `url(${item.footer})` }}
                    ></div> */}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>


        </div>

        {/* Dynamic Stats Footer Bar */}
        <div className="journey-stats-bar effectFade fadeUp">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            breakpoints={{
              576: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1200: { slidesPerView: 4 }
            }}
            className="stats-swiper-container"
            style={{ width: '100%' }}
          >
            <SwiperSlide>
              <div className="journey-stat-item">
                <div className="stat-icon-wrapper">
                  <i className="icon icon-crown-solid"></i>
                </div>
                <div className="stat-info">
                  <span className="stat-number">29+</span>
                  <span className="stat-label">Years of Legacy</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="journey-stat-item">
                <div className="stat-icon-wrapper">
                  <i className="icon icon-global"></i>
                </div>
                <div className="stat-info">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Countries Served</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="journey-stat-item">
                <div className="stat-icon-wrapper">
                  <i className="icon icon-user-friends-solid"></i>
                </div>
                <div className="stat-info">
                  <span className="stat-number">200+</span>
                  <span className="stat-label">Satisfied Clients</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="journey-stat-item">
                <div className="stat-icon-wrapper">
                  <i className="icon icon-check-solid"></i>
                </div>
                <div className="stat-info">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Commitment</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <style>{`
        .journey-section {
          background: #EDECEC;
          // padding: 10px 0;
          position: relative;
          overflow: hidden;
        }

        .journey-section .heading-sub.style-1 {
          background: #ffffff !important;
          color: #e10600 !important;
          box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.05), 0px -3px 0px 0px #e2e8f0 inset, 0px 1px 0px 0px rgba(255, 255, 255, 0.6) inset !important;
        }

        .journey-section .heading-sub.style-1::before {
          background-color: #e10600 !important;
        }

        .journey-slider-wrap {
          position: relative;
          padding: 40px 0 12px 0;
        }

        .journey-swiper {
          overflow: visible !important;
          padding-bottom: 20px !important;
        }

        .journey-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }

        .journey-swiper::before {
          content: '';
          position: absolute;
          top: 68px;
          left: -100px;
          right: -100px;
          height: 2px;
          background: linear-gradient(90deg, rgba(226,232,240,0) 0%, rgba(226,232,240,1) 15%, rgba(226,232,240,1) 85%, rgba(226,232,240,0) 100%);
          z-index: 1;
        }

        .timeline-slide-content {
          width: 100%;
        }

        .timeline-node-wrapper {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 24px;
          z-index: 2;
        }

        .timeline-icon-badge {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #ffffff;
          border: 3px solid var(--theme-color);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
          color: var(--theme-color);
          font-size: 20px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .timeline-node-wrapper:hover .timeline-icon-badge {
          transform: scale(1.15) rotate(5deg);
          box-shadow: 0 15px 30px var(--shadow-color);
        }

        .timeline-connector-line {
          width: 2px;
          height: 30px;
          background: linear-gradient(180deg, var(--theme-color) 0%, rgba(226,232,240,0.5) 100%);
        }

        .timeline-card {
          background: #ffffff;
          border-radius: 24px;
          padding: 24px 12px ;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.03);
          border: 1px solid #f1f5f9;
          text-align: center;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          height: 268px;
          display: flex;
          flex-direction: column;
        }

        .timeline-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);
          border-color: var(--theme-color);
        }

        .card-year {
          font-size: 32px;
          font-weight: 800;
          color: var(--theme-color);
          margin-bottom: 6px;
          font-family: 'Outfit', sans-serif;
          letter-spacing: -0.5px;
        }

        .card-category {
          font-size: 13px;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 12px;
        }

        .card-title {
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 14px;
          line-height: 1.4;
        }

        .card-divider {
          width: 40px;
          height: 2px;
          background: var(--theme-color);
          margin: 0 auto 16px;
          border-radius: 99px;
        }

        .card-desc {
          font-size: 14px;
          color: #475569;
          line-height: 1.6;
          flex-grow: 1;
        }

        .card-footer-graphic {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 70px;
          background-size: cover;
          background-position: bottom center;
          opacity: 0.12;
          pointer-events: none;
          transition: all 0.4s ease;
        }

        .timeline-card:hover .card-footer-graphic {
          opacity: 0.2;
          transform: scale(1.05);
        }

        .journey-prev, .journey-next {
          position: absolute;
          bottom: 0px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          color: #0f172a;
          font-size: 18px;
          z-index: 10;
        }

        .journey-prev {
          left: 0px;
        }

        .journey-next {
          right: 0px;
        }

        .journey-prev:hover {
          background: #e10600;
          border-color: #e10600;
          color: #ffffff;
          transform: scale(1.1) translateX(-3px);
          box-shadow: 0 8px 20px rgba(225, 6, 0, 0.3);
        }

        .journey-next:hover {
          background: #e10600;
          border-color: #e10600;
          color: #ffffff;
          transform: scale(1.1) translateX(3px);
          box-shadow: 0 8px 20px rgba(225, 6, 0, 0.3);
        }

        .journey-prev:active, .journey-next:active {
          transform: scale(0.95);
        }

        @media (max-width: 1200px) {
          .journey-prev {
            left: 10px;
          }
          .journey-next {
            right: 10px;
          }
        }

        .journey-stats-bar {
          background: #ffffff;
          border-radius: 24px;
          padding: 30px 20px;
          box-shadow: 0 10px 40px rgba(15, 23, 42, 0.04);
          border: 1px solid #e2e8f0;
          margin-top: 60px;
          position: relative;
          overflow: hidden;
        }

        .stats-swiper-container {
          width: 100%;
        }

        .journey-stat-item {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }

        .stat-icon-wrapper {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: #fffcfb;
          border: 1px solid rgba(225, 6, 0, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #e10600;
          font-size: 20px;
          box-shadow: 0 4px 10px rgba(225, 6, 0, 0.03);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .journey-stat-item:hover .stat-icon-wrapper {
          // transform: scale(1.1) rotate(10deg);
          background: #e10600;
          color: #ffffff;
          border-color: #e10600;
          box-shadow: 0 10px 20px rgba(225, 6, 0, 0.2);
        }

        .stat-info {
          display: flex;
          flex-direction: column;
        }

        .stat-number {
          font-size: 24px;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.2;
        }

        .stat-label {
          font-size: 13px;
          font-weight: 600;
          color: #64748b;
          margin-top: 2px;
        }

        @media (max-width: 1024px) {
          .journey-stats-bar {
            margin-top: 30px;
          }
        }

        @media (max-width: 640px) {
          .journey-stats-bar {
            padding: 20px 15px;
            margin-top: 20px;
          }
          .journey-stat-item {
            justify-content: flex-start;
            padding-left: 20px;
            gap: 10px;
          }
          .stat-icon-wrapper {
            width: 40px;
            height: 40px;
            font-size: 16px;
            flex-shrink: 0;
          }
          .stat-number {
            font-size: 18px;
          }
          .stat-label {
            font-size: 11px;
          }
        }
      `}</style>
    </section>
  );
}

export default JourneySection;
