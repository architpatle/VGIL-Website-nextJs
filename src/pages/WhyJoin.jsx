"use client";

import React, { useEffect } from "react";
import Link from "next/link";

import careersBg from "../assets/home/hero-bg-img.jpg";
import futuree from "../assets/home/future2.png";
import future from "../assets/home/future1.png";
import futureee from "../assets/home/future3.png";

const WhyJoin = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* <section style={{ 
        paddingTop: '160px', 
        paddingBottom: '100px', 
        backgroundImage: `url(${careersBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#ffffff', 
        textAlign: 'center' 
      }}>
        <div className="container">
          <h1 style={{ fontSize: '4rem', fontWeight: '800', marginBottom: '20px', color: '#ffffff' }}>Why Join Virtual Galaxy?</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
            Join a fast-growing, innovative tech leader dedicated to empowering businesses with human-centered AI and next-generation core banking solutions.
          </p>
        </div>
      </section> */}

      <section className='section-hero'>
        <div className="hero-image" style={{ backgroundImage: `url("${careersBg.src}")` }}>
        </div>
        <div className="container">
          <div className="content-wrap text-center">
            <div className="title text-display-2 effectFade fadeRotateX">
              <h1 className='title1 fw-semibold text-gradient-1'>Why Join Virtual Galaxy?</h1>
              
            </div>
            <p className='text effectFade fadeUp' >
                Join a fast-growing, innovative tech leader dedicated to empowering businesses with human-centered AI and next-generation core banking solutions.
              </p>
          </div>
        </div>

      </section>

      <section style={{ padding: '100px 0'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h2 style={{ fontSize: '3rem', fontWeight: '800', color: '#1a1a1a', marginBottom: '25px', lineHeight: '1.2' }}>What future do you want?</h2>
              <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '20px', lineHeight: '1.6' }}>
                At Virtual Galaxy, we believe that your everyday employment should be more than just a job—it should be a journey of continuous growth, endless learning, and the opportunity to shape your own path.
              </p>
              <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '30px', lineHeight: '1.6' }}>
                We empower our teams with cutting-edge tools, comprehensive mentorship, and an inclusive culture where every voice is heard. Whether you're developing advanced AI or transforming financial workflows, you'll find the support you need to innovate and succeed.
              </p>

              <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
                <a href="https://www.linkedin.com/company/virtualgalaxy/" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', backgroundColor: '#e10600', color: '#fff', borderRadius: '50%', textDecoration: 'none' }}>
                  <i className="icon icon-linkedin-in"></i>
                </a>
                <a href="https://www.facebook.com/VirtualGalaxyInfotechLtd" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', backgroundColor: '#e10600', color: '#fff', borderRadius: '50%', textDecoration: 'none' }}>
                  <i className="icon icon-facebook-f"></i>
                </a>
                <a href="https://x.com/Virtualvgipl" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', backgroundColor: '#e10600', color: '#fff', borderRadius: '50%', textDecoration: 'none' }}>
                  <i className="icon icon-twitter"></i>
                </a>
                <a href="https://www.youtube.com/channel/UCNHCxfflXlIj52Ch3QV2ayg" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', backgroundColor: '#e10600', color: '#fff', borderRadius: '50%', textDecoration: 'none' }}>
                  <i className="icon icon-youtube"></i>
                </a>
                <a href="https://www.instagram.com/virtualgalaxyinfotech" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', backgroundColor: '#e10600', color: '#fff', borderRadius: '50%', textDecoration: 'none' }}>
                  <i className="icon icon-instagram"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <img src={futuree.src} alt="Team collaborating" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '16px', gridRow: 'span 2' }} />
                <img src={future.src} alt="Office workspace" style={{ width: '100%', height: '192px', objectFit: 'cover', borderRadius: '16px' }} />
                <img src={futureee.src} alt="Mentorship" style={{ width: '100%', height: '192px', objectFit: 'cover', borderRadius: '16px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '40px', color: '#1a1a1a' }}>Ready to shape your path?</h2>
          <Link href="/careers/career-path" style={{ display: 'inline-block', backgroundColor: '#e10600', color: '#fff', padding: '15px 40px', borderRadius: '100px', textDecoration: 'none', fontWeight: '700', fontSize: '1.1rem' }}>View Open Positions</Link>
        </div>
      </section>
    </>
  );
};

export default WhyJoin;
