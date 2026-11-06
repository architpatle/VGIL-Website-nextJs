import React from 'react';

function ServiceHero() {
  return (
    <div className="cinematic-hero" style={{ background: '#fff', borderBottom: '1px solid #eee' }}>
      <div className="container">
        <div className="content-wrap text-center">
          <div className="reveal-up active">
            <h1 className="premium-heading" style={{ color: '#111827' }}>
              Innovative <br />
              Digital Ecosystems
            </h1>
            <p className="premium-subtitle" style={{ color: '#6b7280' }}>
              Empowering global enterprises with full-stack AI solutions, robust infrastructure, 
              and cutting-edge mobile computing designed for the next generation of business.
            </p>
            <div className="d-flex gap-20 justify-content-center flex-wrap">
              <a href="#services" className="tf-btn">Explore Services</a>
              <a href="/contact" className="tf-btn style-white">Get Started</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="animate-float" style={{ position: 'absolute', top: '20%', left: '10%', opacity: 0.1 }}>
        <img src="/assets/images/item/item-13.svg" alt="" width="100" />
      </div>
      <div className="animate-float" style={{ position: 'absolute', bottom: '20%', right: '10%', opacity: 0.1, animationDelay: '2s' }}>
        <img src="/assets/images/item/item-15.svg" alt="" width="120" />
      </div>
    </div>
  );
}

export default ServiceHero;
