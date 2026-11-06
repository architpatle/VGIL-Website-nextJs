import React from 'react';
import Link from "next/link";
import { SERVICES_DATA } from '../../data/servicesData';

function ServicesList() {
  return (
    <div id="services" className="section-services flat-spacing" style={{ background: '#fff', color: '#111827' }}>
      <div className="container">
        <div className="top mb-80">
          <div className="heading-section center">
            <div className="heading-sub fw-semibold text-gradient-1 mb-16">OUR EXPERTISE</div>
            <h2 className="premium-heading" style={{ fontSize: '42px', color: '#111827' }}>Comprehensive Technology Services</h2>
          </div>
          <p className="premium-subtitle text-center" style={{ color: '#4b5563' }}>
            From conceptualization to deployment, we provide end-to-end solutions <br /> 
            that drive innovation and business growth.
          </p>
        </div>
        
        <div className="row g-4">
          {SERVICES_DATA.map((service, index) => (
            <div key={service.slug} className="col-lg-4 col-md-6 reveal-up active" style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="glass-card h-100 d-flex flex-column">
                <div className="card-icon mb-30" style={{ fontSize: '40px', color: '#ff4d00' }}>
                  <i className={`icon icon-${service.icon}`}></i>
                </div>
                <h3 className="fw-bold mb-16" style={{ fontSize: '24px', color: '#fff' }}>{service.title}</h3>
                <p className="text-body-3 mb-30" style={{ color: 'var(--svc-text-muted)', flexGrow: 1 }}>
                  {service.description}
                </p>
                <div className="card-footer mt-auto pt-24" style={{ borderTop: '1px solid #eee' }}>
                  <Link to={`/services/${service.slug}`} className="d-flex align-items-center justify-content-between fw-bold" style={{ color: '#ff4d00' }}>
                    Learn More
                    <i className="icon icon-arrow-right-solid"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesList;
