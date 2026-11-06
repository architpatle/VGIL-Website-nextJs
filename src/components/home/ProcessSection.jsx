"use client";

import React, { useEffect, useRef } from 'react';
import { Search, Paintbrush, Settings, BarChart } from 'lucide-react';
import vgLogo from '../../assets/home/ownwer-img/vg-logo-2.png';

import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function ProcessSection() {
  const swiperRef = useRef(null);
  const swiperInstanceRef = useRef(null);

  useEffect(() => {
    if (!swiperRef.current) return;

    swiperInstanceRef.current = new Swiper(swiperRef.current, {
      modules: [Navigation, Autoplay],

      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,

      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },

      speed: 600,

      navigation: {
        nextEl: ".section-process .nav-next-swiper",
        prevEl: ".section-process .nav-prev-swiper",
      },

      breakpoints: {
        576: {
          slidesPerView: 1,
          spaceBetween: 24,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
      },
    });

    return () => {
      if (swiperInstanceRef.current) {
        swiperInstanceRef.current.destroy(true, true);
        swiperInstanceRef.current = null;
      }
    };
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Discover',
      icon: <Search className="text-brand" size={32} />,
      text: 'Discovery is where clarity begins. It brings structure to complex business environments by unifying fragmented data across systems and platforms into a single, intelligent view. It goes beyond surface-level insights to uncover hidden patterns, emerging risks, and untapped opportunities that often remain unnoticed. By making sense of scattered information, it reveals what truly matters and where the real potential lies.'
    },
    {
      number: '02',
      title: 'Design',
      icon: <Paintbrush className="text-brand" size={32} />,
      text: 'The stage where ideas are shaped into intuitive, user-focused experiences. It begins with understanding user needs, mapping journeys, and structuring information for clarity. Through wireframes, prototypes, and seamless interfaces, complexity is simplified into usable solutions — enabling faster adoption, better usability, and confident decision-making across the organization.'
    },
    {
      number: '03',
      title: 'Develop',
      icon: <Settings className="text-brand" size={32} />,
      text: 'The execution engine where ideas are transformed into high-performance systems. It connects platforms, streamlines operations, and brings consistency across processes. Here, strategy is translated into reliable execution — efficiently and precisely — building solutions that are resilient, adaptable, and ready to evolve with changing business demands.'
    },
    {
      number: '04',
      title: 'Deliver',
      icon: <BarChart className="text-brand" size={32} />,
      text: 'Where solutions translate into real-world impact. It focuses on seamless rollout, user adoption, and consistent performance across the organization. Through continuous monitoring, refinement, and support, outcomes are sustained and improved over time — driving efficiency, accelerating growth, and ensuring long-term value from every implementation.'
    }
  ];

  return (
    <div className="section-process section-spacing-lg animate-swiper" id="process">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="process-heading">
              <div className="heading-section mb-40">
                <div className="heading-sub fw-semibold">4D Framework</div>
                <div className="heading-title text-gradient-3">From Insight <br /> to Impact</div>
              </div>
              <div className="group-btn-slider d-none d-lg-flex mb-40">
                <div className="nav-prev-swiper">
                  <i className="icon icon-angle-left-solid"></i>
                </div>
                <div className="nav-next-swiper">
                  <i className="icon icon-angle-right-solid"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="process-slide">
              <div ref={swiperRef} className="swiper swiper-box-shadow">
                <div className="swiper-wrapper">
                  {steps.map((step, index) => (
                    <div className="swiper-slide" key={index}>
                      <div className="process-card d-flex flex-column h-100" style={{ minHeight: '304px', height: '100%', padding: '24px' }}>
                        <div>
                          <div className="d-flex align-items-center gap-16 mb-16" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                            <div style={{ display: 'inline-flex', padding: '12px', borderRadius: '12px', background: 'rgba(239, 68, 68, 0.08)' }}>
                              {step.icon}
                            </div>
                            <h4 className="title fw-semibold" style={{ fontSize: '20px', margin: 0 }}>{step.title}</h4>
                          </div>
                          <div className="content">
                            <p className="text text-secondary" style={{ fontSize: '14px', lineHeight: '1.6', color: '#6b7280', margin: 0 }}>{step.text}</p>
                          </div>
                        </div>
                        <div className="bot d-flex justify-content-between align-items-center border-top" style={{ borderColor: '#f3f4f6', marginTop: '8px', paddingTop: '8px' }}>
                          <div className="time fw-semibold text-brand" style={{ fontSize: '0.85rem', letterSpacing: '0.05em' }}>PHASE {step.number}</div>
                          {/* <div className="number">
                            <span className="text-neutral-400 fw-bold">{step.number}</span>
                            <span className="text-neutral-200">/04</span>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProcessSection;

