import React from 'react';
import PortfolioAssessmentSection from './PortfolioAssessmentSection';
import ApplicationServicesSection from './ApplicationServicesSection';

function ServiceSingleDetails({ service }) {
  if (!service) return null;

  return (
    <div id="services" className="section-services-single section-spacing-lg" style={{  color: '#111827'}}>
      <div className="container">
        
        {/* Portfolio Assessment Section */}
        <PortfolioAssessmentSection />

        {/* Application Services UI Section */}
        {/* <ApplicationServicesSection /> */}
      </div>
    </div>
  );
}

export default ServiceSingleDetails;
