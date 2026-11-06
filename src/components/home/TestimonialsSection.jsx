"use client";

import React, { useEffect, useState, useRef } from "react";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay, Controller } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import tes1 from "../../assets/National-bank/bhandara_bank.png";
import tes2 from "../../assets/National-bank/jalna-logo.png";
import tes3 from "../../assets/National-bank/yavatmal_dcc_bank.png";
import tes4 from "../../assets/National-bank/osmanbad_dcc_bank.png";
import tes5 from "../../assets/National-bank/bdcc_bank.png";


const TESTIMONIALS_DATA = [
  {
    id: 1,
    image: tes1,
    stars: 0,
    text: "We were looking for the services that have the ability to understand our business process and operating model. Our aim was to provide seamless IT solutions to our valuable Clients.",
    name: "Mr. Sanjay Barde",
    role: "CEO, The Bhandara District Central Co. Op. Bank Limited"
  },
  {
    id: 2,
    image: tes2,
    stars: 0,
    text: "With VGIL's E-Banker, we have a partner to support both our Bank Operations and Customer Service 24/7. VGIL's E-Banker Core Banking Solution has helped channelize our products and services in a more customer-oriented manner and deliver excellence in the long run.",
    name: "Mr. Ashutosh Deshmukh",
    role: "CEO, The Jalna District Central Co. Op. Bank Limited"
  },
  {
    id: 3,
    image: tes3,
    stars: 0,
    text: "I am very pleased with your Project Management capability. Your team has excellent communication skills and a fat response and turn around time. Highest work quality. I can say that VGIL is an honest and decent group of people with the highest work ethic I have ever seen for a development team.",
    name: "Mr. Arvind Deshpande",
    role: "CEO, The Yavatmal District Central Co. Op. Bank Limited"
  },
  {
    id: 4,
    image: tes4,
    stars: 0,
    text: "The VGIL's “E-Banker” (Core Banking Solution) has exceeded our expectations and helped to keep our bank on the leading edge of technology and customer experience. I would recommend this product to any bank which requires a solid banking technology partner for the long term.",
    name: "Mr. Barkul",
    role: "General Manager (IT & Accounts), The Osmanabad District Central Co. Op. Bank Limited"
  },
  {
    id: 5,
    image: tes5,
    stars: 0,
    text: "We are greatly impressed by the professional attitude shown by team VGIL whether it is the consultants, sales or after-sales support that has been given to us. There has been excellent support in terms of providing the services well on time & they truly stand by their motto in terms of creating enduring value for customers.",
    name: "Mr. Somnath Ethape",
    role: "General Manager (IT), The Buldhana District Central Co. Op. Bank Limited"
  }
];

function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(null);

  const testimonialSwiperRef = useRef(null);
  const mainImageSwiperRef = useRef(null);

  const handleCardClick = (item) => {
    if (window.innerWidth <= 768) {
      setActiveTestimonial(item);
    }
  };

  useEffect(() => {
    if (!testimonialSwiperRef.current || !mainImageSwiperRef.current) return;

    const thumbSwiper = new Swiper(mainImageSwiperRef.current, {
      modules: [Autoplay, Controller],

      slidesPerView: 1,
      watchSlidesProgress: true,
      spaceBetween: 10,
      centeredSlides: true,

      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },

      speed: 700,
    });

    const mainSwiper = new Swiper(testimonialSwiperRef.current, {
      modules: [Navigation, Pagination, Controller],

      slidesPerView: 1,

      pagination: {
        el: ".testimonials-pagination",
        type: "fraction",
      },

      navigation: {
        nextEl: ".testimonials-next",
        prevEl: ".testimonials-prev",
      },
    });

    thumbSwiper.controller.control = mainSwiper;
    mainSwiper.controller.control = thumbSwiper;

    return () => {
      thumbSwiper.destroy(true, true);
      mainSwiper.destroy(true, true);
    };
  }, []);

  return (
    <div className="section-testimonials section-spacing-lg dark-section dark-section-bottom">
      <div className="container">
        <div className="row justify-content-between">

          <div className="col-lg-6">
            <div className="col-left">

              <div className="heading-section mb-16">
                <div className="heading-sub fw-semibold effectFade fadeUp mx-auto">
                  Testimonials
                </div>
                <div className="heading-title text-dark effectFade fadeRotateX mx-auto">
                  What Our Clients Says
                </div>
              </div>

              <div className="swiper-testimonial_wrap effectFade fadeUp">
                <div ref={testimonialSwiperRef} className="swiper tf-swiper swiper-testimonial">
                  <div className="swiper-wrapper">
                    {TESTIMONIALS_DATA.map((item) => (
                      <div key={item.id} className="swiper-slide" onClick={() => handleCardClick(item)}>
                        <div>
                          {/* Mobile-only Preview Header with Thumbnail and meta details */}
                          <div className="mobile-testimonial-header">
                            <div className="mobile-thumb-wrapper">
                              <img src={item.image.src} alt={item.name} className="mobile-testimonial-thumb" />
                            </div>
                            <div className="mobile-client-info">
                              <div className="mobile-client-name">{item.name}</div>
                              <div className="mobile-client-company">{item.role}</div>
                            </div>
                          </div>

                          <div className="top-icon d-flex gap-4">
                            {item.stars > 0 ? (
                              <>
                                <i className="icon icon-star-solid"></i>
                                <i className="icon icon-star-solid"></i>
                                <i className="icon icon-star-solid"></i>
                                <i className="icon icon-star-solid"></i>
                                <i className="icon icon-star-solid"></i>
                              </>
                            ) : (
                              <svg width="23" height="20" viewBox="0 0 23 20">
                                <path
                                  d="M12.9375 20V10.3597C12.9375 7.72182 13.824 5.51559 15.5969 3.74101C17.4177 1.91847 19.8854 0.671463 23 0V6.40288C21.8021 6.78657 21.0115 7.26619 20.6281 7.84173C20.2448 8.3693 20.0292 9.04077 19.9813 9.85612H23V20H12.9375ZM0 20V10.3597C0 7.72182 0.886459 5.51559 2.65938 3.74101C4.48021 1.91847 6.94792 0.671463 10.0625 0V6.40288C8.9125 6.78657 8.12187 7.26619 7.69062 7.84173C7.30729 8.3693 7.09167 9.04077 7.04375 9.85612H10.0625V20H0Z"
                                  fill="#FD3A25"
                                />
                              </svg>
                            )}
                          </div>

                          <div className="text-body-1 text-dark desc">
                            {item.text}
                          </div>

                          {/* Mobile-only Read More Button */}
                          <div className="mobile-read-more">Read More</div>

                          {/* Desktop Cite Block */}
                          <div className="cite">
                            <div className="name text-body-3 text-neutral-400 fw-semibold">
                              {item.name}
                            </div>
                            <div className="sub text-body-3 text-neutral-400">
                              {item.role}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Slider Controls */}
                <div className="group-slider">
                  <div className="group-btn-slider">
                    <div className="btn-slider nav-prev-swiper testimonials-prev">
                      <i className="icon icon-angle-left-solid"></i>
                    </div>
                    <div className="btn-slider nav-next-swiper testimonials-next">
                      <i className="icon icon-angle-right-solid"></i>
                    </div>
                  </div>
                  <div className="testimonials-pagination"></div>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT SIDE IMAGES */}
          <div className="col-lg-5">
            <div ref={mainImageSwiperRef} className="swiper sw-main-image effectFade fadeUp">
              <div className="swiper-wrapper">
                {TESTIMONIALS_DATA.map((item) => (
                  <div key={item.id} className="swiper-slide">
                    <div className="testimonial-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Testimonial Expanded Details Modal (Mobile Only) */}
      {activeTestimonial && (
        <div className="testimonial-modal-overlay" onClick={() => setActiveTestimonial(null)}>
          <div className="testimonial-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="testimonial-modal-close" onClick={() => setActiveTestimonial(null)} aria-label="Close details">
              &times;
            </button>
            <div className="testimonial-modal-image-wrapper">
              <img src={activeTestimonial.image} alt={activeTestimonial.name} className="testimonial-modal-image" />
            </div>
            <div className="testimonial-modal-content">
              <div className="testimonial-modal-rating">
                {activeTestimonial.stars > 0 ? (
                  <div className="d-flex gap-4">
                    <i className="icon icon-star-solid text-warning"></i>
                    <i className="icon icon-star-solid text-warning"></i>
                    <i className="icon icon-star-solid text-warning"></i>
                    <i className="icon icon-star-solid text-warning"></i>
                    <i className="icon icon-star-solid text-warning"></i>
                  </div>
                ) : (
                  <svg width="23" height="20" viewBox="0 0 23 20">
                    <path
                      d="M12.9375 20V10.3597C12.9375 7.72182 13.824 5.51559 15.5969 3.74101C17.4177 1.91847 19.8854 0.671463 23 0V6.40288C21.8021 6.78657 21.0115 7.26619 20.6281 7.84173C20.2448 8.3693 20.0292 9.04077 19.9813 9.85612H23V20H12.9375ZM0 20V10.3597C0 7.72182 0.886459 5.51559 2.65938 3.74101C4.48021 1.91847 6.94792 0.671463 10.0625 0V6.40288C8.9125 6.78657 8.12187 7.26619 7.69062 7.84173C7.30729 8.3693 7.09167 9.04077 7.04375 9.85612H10.0625V20H0Z"
                      fill="#FD3A25"
                    />
                  </svg>
                )}
              </div>
              <p className="testimonial-modal-text">{activeTestimonial.text}</p>
              <div className="testimonial-modal-cite">
                <div className="testimonial-modal-name">{activeTestimonial.name}</div>
                <div className="testimonial-modal-sub">{activeTestimonial.role}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TestimonialsSection;