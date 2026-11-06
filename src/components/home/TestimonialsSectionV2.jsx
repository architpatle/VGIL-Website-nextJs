import React from 'react';
import Link from "next/link";
import tes1 from "../../assets/Testimonials-img/testimonial-1.png";
import tes2 from "../../assets/Testimonials-img/testimonial-2.png";
import tes3 from "../../assets/Testimonials-img/testimonial-3.png";
import tes4 from "../../assets/Testimonials-img/testimonial-4.png";

function TestimonialsSectionV2() {
  return (
    <div className="box-black">
      <div className="light-box"></div>
      <img className="light-top" src="/assets/images/item/light-top.png" alt="" />
      <img className="light-bot" src="/assets/images/item/light-bot.png" alt="" />
      
      <div className="section-testimonials flat-spacing">
        <div className="container">
          <div className="heading-section center mb-64">
            <div className="heading-sub fw-semibold style-1 effectFade fadeUp">Testimonials</div>
            <div className="heading-title text-white effectFade fadeRotateX">What Our Clients Says</div>
          </div>
          <div className="testimonials-v2-wrap">
            <div className="col-left ">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M44.375 70.4063V41.0938C44.375 33.0729 47.0729 26.3646 52.4687 20.9688C58.0104 15.4271 65.5208 11.6354 75 9.59375V29.0625C71.3542 30.2292 68.9479 31.6875 67.7812 33.4375C66.6146 35.0417 65.9583 37.0833 65.8125 39.5625H75V70.4063H44.375ZM5 70.4063V41.0938C5 33.0729 7.69792 26.3646 13.0938 20.9688C18.6354 15.4271 26.1458 11.6354 35.625 9.59375V29.0625C32.125 30.2292 29.7187 31.6875 28.4062 33.4375C27.2396 35.0417 26.5833 37.0833 26.4375 39.5625H35.625V70.4063H5Z" fill="#27272A"/>
              </svg>
              <div className="swiper-testimonial_wrap">
                <div dir="ltr" className="swiper tf-swiper swiper-testimonial">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div>
                        <div className="top-icon d-flex gap-4">
                          <i className="icon icon-star-solid"></i>
                          <i className="icon icon-star-solid"></i>
                          <i className="icon icon-star-solid"></i>
                          <i className="icon icon-star-solid"></i>
                          <i className="icon icon-star-solid"></i>
                        </div>
                        <div className="text-body-1 text-white desc">
                          We shipped our first copilot in 7 weeks and cut support tickets by 31%. The eval dashboards made every decision obvious.
                        </div>
                        <div className="cite mb-0">
                          <img className="line-left" src="/assets/images/item/line-1.png" alt="" />
                          <div className="name text-body-3 text-neutral-400 fw-semibold">Elena Ruiz</div>
                          <div className="line"></div>
                          <div className="sub text-body-3 text-neutral-400">Cantos SaaS’s VP Product</div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div>
                        <div className="top-icon d-flex gap-4">
                          <i className="icon icon-star-solid"></i>
                          <i className="icon icon-star-solid"></i>
                          <i className="icon icon-star-solid"></i>
                          <i className="icon icon-star-solid"></i>
                          <i className="icon icon-star-solid"></i>
                        </div>
                        <div className="text-body-1 text-white desc">
                          SSO/SAML and RBAC landed smoothly. Latency stayed &lt;300 ms on p95—huge win for our agents.
                        </div>
                        <div className="cite mb-0">
                          <img className="line-left" src="/assets/images/item/line-1.png" alt="" />
                          <div className="name text-body-3 text-neutral-400 fw-semibold">Marcus Tan</div>
                          <div className="line"></div>
                          <div className="sub text-body-3 text-neutral-400">VectorPay’s CTO</div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div>
                        <div className="top-icon d-flex gap-4">
                          <i className="icon icon-star-solid"></i>
                          <i className="icon icon-star-solid"></i>
                          <i className="icon icon-star-solid"></i>
                          <i className="icon icon-star-solid"></i>
                          <i className="icon icon-star-solid"></i>
                        </div>
                        <div className="text-body-1 text-white desc">
                          The best partner for agentic work. Multi-step planning, tool use, and audit trails—done right the first time.
                        </div>
                        <div className="cite mb-0">
                          <img className="line-left" src="/assets/images/item/line-1.png" alt="" />
                          <div className="name text-body-3 text-neutral-400 fw-semibold">David Kim</div>
                          <div className="line"></div>
                          <div className="sub text-body-3 text-neutral-400">Northway's Ecommerce Director</div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div>
                        <div className="top-icon d-flex gap-4">
                          <i className="icon icon-star-solid"></i>
                          <i className="icon icon-star-solid"></i>
                          <i className="icon icon-star-solid"></i>
                          <i className="icon icon-star-solid"></i>
                          <i className="icon icon-star-solid"></i>
                        </div>
                        <div className="text-body-1 text-white desc">
                          "Virtual Galaxy transformed our legacy systems into a modern powerhouse. Their attention to detail and technical prowess is unmatched."
                        </div>
                        <div className="cite mb-0">
                          <img className="line-left" src="/assets/images/item/line-1.png" alt="" />
                          <div className="name text-body-3 text-neutral-400 fw-semibold">Sarah Jenkins</div>
                          <div className="line"></div>
                          <div className="sub text-body-3 text-neutral-400">CloudScale’s Product Manager</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-right ">
              <div dir="ltr" className="swiper sw-main-image">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="testimonial-image-v2">
                      <img src={tes1} alt="testimonial 1" />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial-image-v2">
                      <img src={tes2} alt="testimonial 2" />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial-image-v2">
                      <img src={tes3} alt="testimonial 3" />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial-image-v2">
                      <img src={tes4} alt="testimonial 4" />
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

export default TestimonialsSectionV2;
