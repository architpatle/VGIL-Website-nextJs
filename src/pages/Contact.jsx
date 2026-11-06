"use client";

import React from 'react';
import Link from "next/link";
import contactBg from '../assets/Contact-img/Contact@2x.png';
import maharashtraLogo from '../assets/Contact-img/maharashtra.png';
import './Contact.css';
import contactHeroBg from '../assets/home/hero-bg-img.jpg';
import './Contact.css'
import ContactSection from '../components/home/ContactSection';
import FaqsSection from '../components/home/FaqsSection';


function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-hero mb-10 "
      // style={{ 
      //   paddingTop: '160px', 
      //   paddingBottom: '100px', 
      //   backgroundImage: `url(${contactHeroBg.src})`,
      //   backgroundSize: 'cover',  
      //   backgroundPosition: 'center',
      //   backgroundRepeat: 'no-repeat',
      //   color: '#ffffff', 
      //   textAlign: 'center' 
      // }} 
      >
        <div className="hero-image" style={{ backgroundImage: `url("${contactHeroBg.src}")` }}>
        </div>
        <div className="container">
          <div className="content-wrap content-wrap-cp text-center">

            <h1 className='title text-display-2 title1 fw-semibold text-gradient-1 effectFade fadeRotateX"'
            // style={{ fontSize: '4rem', fontWeight: '800', marginBottom: '20px', color: '#000' }}
            >Contact Us</h1>
            <p className='text effectFade fadeUp text-cp'
            // style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}
            >
              Have a project in mind, need technical support, or want to explore our digital and AI solutions? <br /> Reach out to our experts.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== CONTACT SECTION (Aigocy style) ==================== */}



      <div className="section-maps flat-spacing pt-20">
        <div className="container">
          {/* Nagpur Branch */}
          <div className="row mb-40 align-items-center effectFade fadeUp">
            <div className="col-lg-5 lg-mb-24">
              <div className="box-address" style={{
                backgroundColor: '#fff5f5',
                borderRadius: '32px',
                height: '420px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '60px',

                transition: 'all 0.3s ease-in-out',

                boxShadow: ' 0px 7.77px 16px 0px rgba(0, 0, 0, 0.0588235294), 0px 3px 3px 0px rgba(0, 0, 0, 0.1019607843), 0px -8px 0px 0px rgba(0, 0, 0, 0.0509803922) inset, 0px 4px 0px 0px rgba(255, 255, 255, 0.6) inset',
              }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff5f5'}>
                <img src={maharashtraLogo.src} alt="Maharashtra" style={{ width: '70px', marginBottom: '30px' }} />
                <h3 className="fw-bold mb-16" style={{ fontSize: '32px' }}>Nagpur</h3>
                <p className="text-body-1 mb-24" style={{ lineHeight: '1.7', color: '#4b5563', fontSize: '16px' }}>
                  Plot No. 26, The Nagpur Divisional Insurance Employees Co-operative Housing Society Limited, Vivekanand Nagar, Nagpur, Maharashtra, India - 440015
                </p>
                <a href="https://www.google.com/maps/place/Virtual+Galaxy+Infotech+Ltd/@21.1236532,79.0838183,17z/data=!3m1!4b1!4m6!3m5!1s0x3bd4c09063544445:0xc47e3a968600d81!8m2!3d21.1236532!4d79.0863932!16s%2Fg%2F1tcxcjyg" target="_blank" rel="noreferrer" className="tf-link-icon fw-semibold" style={{ fontSize: '18px', color: '#ff0000', textDecoration: 'underline' }}>
                  Get directions
                  <i className="icon icon-arrow-top-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="wg-map" style={{ borderRadius: '32px', overflow: 'hidden', height: '420px', margin: 0 }}>
                <iframe
                  src="https://maps.google.com/maps?q=Virtual%20Galaxy%20Infotech%20Ltd,%20Vivekanand%20Nagar,%20Nagpur&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
              </div>
            </div>
          </div>

          {/* Pune Branch */}
          <div className="row mb-40 align-items-center effectFade fadeUp">
            <div className="col-lg-7 order-lg-1 order-2">
              <div className="wg-map" style={{ borderRadius: '32px', overflow: 'hidden', height: '420px', margin: 0 }}>
                <iframe
                  src="https://maps.google.com/maps?q=GT%20Arcade,%20B%20T%20Kawade%20Road,%20Pune&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>

                  
              </div>
            </div>
            <div className="col-lg-5 order-lg-2 order-1 lg-mb-24">
              <div className="box-address" style={{
                backgroundColor: '#fff5f5',
                borderRadius: '32px',
                height: '420px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '60px',
                boxShadow: ' 0px 7.77px 16px 0px rgba(0, 0, 0, 0.0588235294), 0px 3px 3px 0px rgba(0, 0, 0, 0.1019607843), 0px -8px 0px 0px rgba(0, 0, 0, 0.0509803922) inset, 0px 4px 0px 0px rgba(255, 255, 255, 0.6) inset',
                transition: 'all 0.3s ease-in-out',
                cursor: 'pointer'
              }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff5f5'}>
                <img src={maharashtraLogo.src} alt="Maharashtra" style={{ width: '70px', marginBottom: '30px' }} />
                <h3 className="fw-bold mb-16" style={{ fontSize: '32px' }}>Pune</h3>
                <p className="text-body-1 mb-24" style={{ lineHeight: '1.7', color: '#4b5563', fontSize: '16px' }}>
                  302, GT Arcade, B T Kawade Road, Uday Bagh, Ghorpadi, Pune - 411013
                </p>
                <a href="https://www.google.com/maps/place/GT+Arcade/@18.5109594,73.9015942,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2c1946890f5b1:0x7d287114b0365787!8m2!3d18.5109594!4d18.5041691!16s%2Fg%2F11b6m_9_6q" target="_blank" rel="noreferrer" className="tf-link-icon fw-semibold" style={{ fontSize: '18px', color: '#ff0000', textDecoration: 'underline' }}>
                  Get directions
                  <i className="icon icon-arrow-top-right"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Mumbai Branch */}
          <div className="row mb-40 align-items-center effectFade fadeUp">
            <div className="col-lg-5 lg-mb-24">
              <div className="box-address" style={{
                backgroundColor: '#fff5f5',
                borderRadius: '32px',
                height: '420px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '60px',

                transition: 'all 0.3s ease-in-out',

                boxShadow: ' 0px 7.77px 16px 0px rgba(0, 0, 0, 0.0588235294), 0px 3px 3px 0px rgba(0, 0, 0, 0.1019607843), 0px -8px 0px 0px rgba(0, 0, 0, 0.0509803922) inset, 0px 4px 0px 0px rgba(255, 255, 255, 0.6) inset',
              }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff5f5'}>
                <img src={maharashtraLogo.src} alt="Maharashtra" style={{ width: '70px', marginBottom: '30px' }} />
                <h3 className="fw-bold mb-16" style={{ fontSize: '32px' }}>Mumbai</h3>
                <p className="text-body-1 mb-24" style={{ lineHeight: '1.7', color: '#4b5563', fontSize: '16px' }}>
                  Unit No. 301, 3rd floor, Wing-A, Inspire BKC Rd, G Block BKC, Patthar Nagar, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051  
                </p>
                <a href="https://maps.app.goo.gl/1Da42v1fQhwtav2s6" target="_blank" rel="noreferrer" className="tf-link-icon fw-semibold" style={{ fontSize: '18px', color: '#ff0000', textDecoration: 'underline' }}>
                  Get directions
                  <i className="icon icon-arrow-top-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="wg-map" style={{ borderRadius: '32px', overflow: 'hidden', height: '420px', margin: 0 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.001988210882!2d72.8580778!3d19.0636502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c93cb9cd10bb%3A0xa380ad6cf5da2f54!2sBHIVE%20Platinum%20Plus%20BKC%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1788259935608!5m2!1sen!2sin"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactSection />

      {/* <div className="section-faqs flat-spacing">
        <div className="container">
          <div className="heading-section center ">
            <div className="heading-sub fw-semibold effectFade fadeUp">FAQs</div>
            <div className="heading-title text-gradient-3 effectFade fadeRotateX">
              Frequently Asked <br />Questions
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion-asked" id="accordion-asked">
                {[
                  { id: 1, title: 'What’s the typical timeline from idea to v1?' },
                  { id: 2, title: 'What do we need to start?' },
                  { id: 3, title: 'Which models/stack do you use?' },
                  { id: 4, title: 'Are model/API costs included in pricing?' },
                ].map((faq, index) => (
                  <div className="accordion-asked-item effectFade fadeRotateX" data-delay={`0.${index}`} key={faq.id}>
                    <div className="accordion-asked-title" id={`asked${faq.id}`}>
                      <button className={`accordion-button text-body-1 fw-semibold ${index !== 0 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${faq.id}`} aria-expanded={index === 0 ? "true" : "false"} aria-controls={`collapse${faq.id}`}>
                        {faq.title}
                        <span className="right-icon"></span>
                      </button>
                    </div>
                    <div id={`collapse${faq.id}`} role="region" className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} aria-labelledby={`asked${faq.id}`} data-bs-parent="#accordion-asked">
                      <div className="accordion-body">
                        A clear problem statement, success metrics, access to sample data, and a stakeholder who can make decisions. We’ll run a kickoff workshop to align scope.
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="section-faqs flat-spacing">
        <FaqsSection />
      </div>
    </>
  );
}

export default Contact;
