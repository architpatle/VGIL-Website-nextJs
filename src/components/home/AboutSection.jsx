import React from 'react';
import Link from 'next/link';
import earthImg from '../../assets/earth.png';

function AboutSection() {

  return (
    <div className="section-about-us section-spacing-lg" id="about" style={{ backgroundColor: "var(--body) !important" }}>
      <div className="container">
        <div className="row align-items-stretch">
          <div className="col-12 ">
            <div className="heading-section" style={{ marginBottom: '15px' }}>
              <div className="heading-sub fw-semibold effectFade fadeUp" style={{ display: 'inline-block', marginBottom: '15px' }}>About Us</div>
              <div className="heading-title text-gradient-2 effectFade fadeRotateX" style={{ lineHeight: '1.2' }}>A Legacy of Building
                {/* <br className="d-none d-md-block" /> */}
                <span> Reliable IT Foundations!</span> </div>
            </div>
          </div>
          <div className="col-lg-7 lg-mb-24 d-flex">
            <div className="col-left w-100 h-100 d-flex flex-column justify-content-between" style={{ minHeight: '100%' }}>
              <div className="position-relative z-5">
                <div className="sub text-white">
                  <span className="dot"></span>
                  Available for worldwide project
                </div>
                {/* <h5 className="title fw-semibold text-white">Global Software <span className="text-brand">Solution since 1997</span></h5> */}
                <h5 className="title  text-white">Global Software <b className='fw-bold'>Solution since 1997</b></h5>
                {/* <Link href="/contact" className="tf-btn tf-btn-short">
                  Start a Project
                </Link> */}
              </div>
              <img className="effectFade fadeRotateX " src={earthImg.src} alt="Earth" style={{ alignSelf: 'center', maxWidth: '100%', marginTop: '-14px' }} />
            </div>
          </div>
          <div className="col-lg-5 d-flex flex-grow-1 flex-column">
            <div className="review-box flex-grow-1 d-flex flex-column justify-content-center h-100">
              <div className="fw-bold mb-12 text-brand" style={{ fontSize: '0.95rem', letterSpacing: '1.2px' }}>
                The Numbers Behind Our Impact
              </div>
              <div className="desc desc-none text-body-1" style={{ marginTop: '0' }}> Empowering 5,000+ bank branches, manufacturers, and global businesses <span className='impact-span'> through cutting-edge automation, seamless customer experiences, enhanced service delivery, and real-time decision support systems</span>.</div>

              <div className="d-flex flex-column gap-20">
                <div className="d-flex justify-content-between flex-wrap align-items-end gap-12">
                  <div>
                    <div className="d-flex gap-4 text mb-10">
                      <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.6792 18.3019L18.1887 16.9057L20.4906 24L12.6792 18.3019ZM25.3585 9.13208H15.6604L12.6792 0L9.69811 9.13208H0L7.84906 14.7925L4.86792 23.9245L12.717 18.2641L17.5472 14.7925L25.3585 9.13208Z" fill="#219653" />
                      </svg>
                      Employees
                    </div>
                  </div>
                  <div className="counter text-neutral-400">
                    <span className="number" data-speed="1500" data-to="450" data-inviewport="yes">450</span><span>+</span>
                  </div>
                </div>

                <div className="d-flex justify-content-between flex-wrap align-items-end gap-12">
                  <div className="d-flex gap-4 text mb-10 desc text-body-1">
                    <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.6792 18.3019L18.1887 16.9057L20.4906 24L12.6792 18.3019ZM25.3585 9.13208H15.6604L12.6792 0L9.69811 9.13208H0L7.84906 14.7925L4.86792 23.9245L12.717 18.2641L17.5472 14.7925L25.3585 9.13208Z" fill="#219653" />
                    </svg>
                    Satisfied Clients
                  </div>
                  <div className="counter text-neutral-400">
                    <span className="number" data-speed="1500" data-to="200" data-inviewport="yes">200</span><span>+</span>
                  </div>
                </div>
                <div className="d-flex justify-content-between flex-wrap align-items-end gap-12">
                  <div className="d-flex gap-4 text mb-10 desc text-body-1">
                    <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.6792 18.3019L18.1887 16.9057L20.4906 24L12.6792 18.3019ZM25.3585 9.13208H15.6604L12.6792 0L9.69811 9.13208H0L7.84906 14.7925L4.86792 23.9245L12.717 18.2641L17.5472 14.7925L25.3585 9.13208Z" fill="#219653" />
                    </svg>
                    Years in Business</div>
                  <div className="counter text-neutral-400">
                    <span className="number" data-speed="1500" data-to="29" data-inviewport="yes">29</span><span>+</span>
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

export default AboutSection;
