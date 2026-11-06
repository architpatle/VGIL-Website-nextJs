import React from 'react';
import Link from "next/link";

function CareersHero() {
  return (
    <div className="section-hero v2 career-hero-custom" style={{ 
      paddingTop: '180px', 
      paddingBottom: '100px',
      position: 'relative',
      background: 'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)',
      overflow: 'hidden'
    }}>
      {/* Decorative background elements */}
      <div className="circle-blur" style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '500px',
        height: '500px',
        background: 'rgba(255, 45, 21, 0.05)',
        filter: 'blur(100px)',
        borderRadius: '50%',
        zIndex: 0
      }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="content-wrap text-start">
              <div className="heading-sub fw-bold mb-16 effectFade fadeUp" style={{ color: '#ff2d15', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '14px' }}>
                Build Your Future
              </div>
              <h1 className="title text-display-2 mb-24 effectFade fadeRotateX" style={{ fontWeight: '800', lineHeight: '1.1', color: '#1f2937' }}>
                Join Our <span className="text-gradient-1" style={{ background: 'linear-gradient(90deg, #ff2d15, #ff6b6b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Digital Innovation</span> Team
              </h1>
              <p className="text text-body-2 mb-40 effectFade fadeUp" style={{ maxWidth: '600px', color: '#4b5563', fontSize: '18px', lineHeight: '1.6' }}>
                Fostering rapid innovation and driving growth through cutting-edge technology, all while ensuring inclusivity for everyone. Your journey to excellence starts here.
              </p>
              <div className="d-flex flex-wrap gap-20 effectFade fadeUp">
                <a href="#openings" className="tf-btn" style={{ 
                  padding: '15px 35px', 
                  borderRadius: '100px',
                  boxShadow: '0 10px 25px rgba(255, 45, 21, 0.2)',
                  transition: 'transform 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  Apply for Job
                  <i className="icon icon-long-arrow-alt-right-solid ms-10"></i>
                </a>
                <Link to="/contact" className="tf-btn secondary" style={{ 
                  padding: '15px 35px', 
                  borderRadius: '100px',
                  backgroundColor: 'transparent',
                  border: '2px solid #1f2937',
                  color: '#1f2937'
                }}>
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 d-none d-lg-block">
            <div className="hero-image-v3 effectFade fadeZoom" style={{ position: 'relative' }}>
              <img src="/assets/images/section/careers-hero.jpg" alt="Careers" style={{ 
                borderRadius: '30px', 
                boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
                width: '100%',
                height: '500px',
                objectFit: 'cover'
              }} />
              <div className="floating-card p-24" style={{
                position: 'absolute',
                bottom: '-30px',
                left: '-30px',
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                zIndex: 2
              }}>
                <div className="icon-box" style={{ background: '#fff5f4', padding: '12px', borderRadius: '12px' }}>
                  <i className="icon icon-user-check-solid" style={{ color: '#ff2d15' }}></i>
                </div>
                <div>
                  <div className="fw-bold" style={{ fontSize: '18px' }}>15+ Open Positions</div>
                  <div className="text-secondary" style={{ fontSize: '14px' }}>Across 5 cities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareersHero;
