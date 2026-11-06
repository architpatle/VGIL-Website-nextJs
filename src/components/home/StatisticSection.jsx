import React from 'react';
import deliveryPromiseGraphic from '../../assets/delivery-promise-graphic.png'
import './StatisticSection.css'

const metrics = [
  {
    id: 'rapid-deployment',
    title: 'Rapid Deployment',
    desc: 'Faster implementation cycles',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.14 12.35C18.86 15.68 16.35 18.86 12.99 19.6C9.5 20.37 6.09 18.5 4.7 15.3C3.31 12.1 4.24 8.32 6.97 6.14C9.7 3.96 13.53 3.9 16.33 6C16.33 6 13.5 6.5 12.5 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 4.5C14 4.5 18.5 3.5 19.5 4.5C20.5 5.5 19.5 10 19.5 10L14 4.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'agile-delivery',
    title: 'Agile Delivery',
    desc: 'Iterative development & continuous improvement ',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.5 8.5C4.01 8.5 2 10.29 2 12.5C2 14.71 4.01 16.5 6.5 16.5C9.5 16.5 10.5 8.5 14.5 8.5C16.99 8.5 19 10.29 19 12.5C19 14.71 16.99 16.5 14.5 16.5C10.5 16.5 9.5 8.5 6.5 8.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'production-ready',
    title: 'Production Ready',
    desc: 'Solutions built to scale from day one ',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3L21 7.5L12 12L3 7.5L12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M3 12L12 16.5L21 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 16.5L12 21L21 16.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'on-time-execution',
    title: 'On-Time Execution',
    desc: 'Reliable project delivery',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M20 4L15.5 8.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M20 4H16.5V7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function StatisticSection() {
  return (
    <div className="section-delivery-promise section-spacing-lg">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-6">
            <div className="heading-section mb-48">
              <div className="heading-sub fw-semibold effectFade fadeUp">Our Delivery Promise</div>
              <div className="heading-title text-dark effectFade fadeRotateX">
                From Idea <br /> to Impact, <br />
                <span className="text-brand">Faster.</span>
              </div>
              <div className="text text-body-1 text-neutral-400 effectFade fadeUp">
                We turn complex business requirements into production-ready digital solutions with speed, precision, and agility.

              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="delivery-promise-image effectFade fadeUp">
              <img
                src={deliveryPromiseGraphic.src}
                alt="Impact delivered—from ideate, design and develop to test, deploy"
              />
            </div>
          </div>
        </div>

        <div className="metrics-grid">
          {metrics.map((metric) => (
            <div className="metric-card effectFade fadeUp" key={metric.id}>
              <div className="metric-icon">{metric.icon}</div>
              <div className="metric-title">{metric.title}</div>
              <div className="metric-underline"></div>
              <div className="metric-desc text-body-1 text-neutral-400">{metric.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StatisticSection;