import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import earthImg from '../../assets/ai-network.png';

function MissionSection() {
  return (
    <div className="section-about-us section-spacing-lg" id="about">
      <div className="container">
        <div className="row align-items-stretch">

          {/* Heading */}
          <div className="col-12">
            <div
              className="heading-section"
              style={{ marginBottom: '15px' }}
            >
              <div
                className="heading-sub fw-semibold effectFade fadeUp"
                style={{
                  display: 'inline-block',
                  marginBottom: '15px'
                }}
              >
                About Us
              </div>

              <div
                className="heading-title text-gradient-2 effectFade fadeRotateX"
                style={{ lineHeight: '1.2' }}
              >
                Human-Centered AI,{' '}
                {/* <br className="d-none d-md-block" /> */}
                Built for Production
              </div>
            </div>
          </div>

          {/* LEFT SIDE */}
          <div className="col-lg-6 lg-mb-24 d-flex">
            <div
              className="col-left w-100 h-100 d-flex flex-column justify-content-between"
              style={{ minHeight: '100%' }}
            >
              <div className="position-relative z-5">
                <div className="sub text-white">
                  <span className="dot"></span>
                  Available for worldwide project
                </div>

                <h5 className="title fw-semibold text-white">
                  Technology. Transformation. Impact.
                  {/* {' '}
                  <span className="text-brand">
                    Technology. Transformation. Impact.
                  </span> */}
                </h5>

                {/* <a
                  href="/contact"
                  className="tf-btn tf-btn-short"
                >
                  Start a Project
                </a> */}
              </div>

              <img
                className="effectFade fadeRotateX mt-auto"
                src={earthImg.src}
                alt="Earth"
                style={{
                  alignSelf: 'center',
                  maxWidth: '100%',
                }}
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-6 d-flex flex-column mission-right">

            {/* DESKTOP VERSION */}
            <div className="mission-desktop">

              {/* Mission */}
              <div
                className="mission-box flex-grow-1 d-flex flex-column justify-content-start"
                style={{
                  background: '#f4f4f5',
                  padding: '28px',
                  borderRadius: '24px'
                }}
              >
                <h4
                  className="title fw-semibold"
                  style={{ color: '#ff4d00' }}
                >
                  Our Mission
                </h4>

                {/* <div
                  className="line"
                  style={{
                    height: '2px',
                    background: '#e4e4e7',
                    margin: '10px 0'
                  }}
                ></div> */}

                <p
                  className="text"
                  style={{
                    color: '#3f3f46',
                    fontSize: '16px'
                  }}
                >
                  To deliver reliable, tailored IT solutions that drive efficiency, enhance customer experience, and foster business growth—empowering organizations to thrive securely in a rapidly evolving digital landscape.
                </p>
              </div>

              {/* Vision */}
              <div
                className="mission-box flex-grow-1 d-flex flex-column justify-content-start"
                style={{
                  background: '#f4f4f5',
                  padding: '30px',
                  borderRadius: '24px'
                }}
              >
                <h4
                  className="title fw-semibold"
                  style={{ color: '#ff4d00' }}
                >
                  Our Vision
                </h4>

                {/* <div
                  className="line"
                  style={{
                    height: '1px',
                    background: '#e4e4e7',
                    margin: '10px 0'
                  }}
                ></div> */}

                <p
                  className="text"
                  style={{
                    color: '#3f3f46',
                    fontSize: '16px'
                  }}
                >
                  To empower businesses globally with innovative,
                  scalable, and secure IT solutions, transforming the
                  way they operate, and driving digital excellence for
                  a smarter, more connected future.
                </p>
              </div>

            </div>

            {/* MOBILE CAROUSEL */}
            <div className="mission-mobile">

              <Swiper
                modules={[Autoplay, Pagination]}
                pagination={{
                  clickable: true
                }}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true
                }}
                spaceBetween={16}
                slidesPerView={1}
                className="mission-swiper"
              >

                {/* Mission Slide */}
                <SwiperSlide>
                  <div
                    className="mission-box d-flex flex-column justify-content-start"
                    style={{
                      background: '#f4f4f5',
                      padding: '28px',
                      borderRadius: '24px'
                    }}
                  >
                    <h4
                      className="title fw-semibold"
                      style={{ color: '#ff4d00' }}
                    >
                      Our Mission
                    </h4>

                    <div
                      className="line"
                      style={{
                        height: '1px',
                        background: '#e4e4e7',
                        margin: '10px 0'
                      }}
                    ></div>

                    <p
                      className="text"
                      style={{
                        color: '#3f3f46',
                        fontSize: '16px'
                      }}
                    >
                      To deliver cutting-edge IT solutions that drive
                      operational efficiency, enhance customer
                      experience, and foster business growth. We are
                      committed to providing reliable, tailored
                      technology services that empower organizations
                      to thrive in a fast-evolving digital landscape,
                      while ensuring the highest levels of quality,
                      security, and customer satisfaction.
                    </p>
                  </div>
                </SwiperSlide>

                {/* Vision Slide */}
                <SwiperSlide>
                  <div
                    className="mission-box d-flex flex-column justify-content-start"
                    style={{
                      background: '#f4f4f5',
                      padding: '30px',
                      borderRadius: '24px'
                    }}
                  >
                    <h4
                      className="title fw-semibold"
                      style={{ color: '#ff4d00' }}
                    >
                      Our Vision
                    </h4>

                    <div
                      className="line"
                      style={{
                        height: '1px',
                        background: '#e4e4e7',
                        margin: '10px 0'
                      }}
                    ></div>

                    <p
                      className="text"
                      style={{
                        color: '#3f3f46',
                        fontSize: '16px'
                      }}
                    >
                      To empower businesses globally with innovative,
                      scalable, and secure IT solutions, transforming
                      the way they operate, and driving digital
                      excellence for a smarter, more connected future.
                    </p>
                  </div>
                </SwiperSlide>

              </Swiper>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default MissionSection;