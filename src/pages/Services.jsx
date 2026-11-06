import React from 'react';
import ServiceHero from '../components/services/ServiceHero';
import ServicesList from '../components/services/ServicesList';
import PartnerSection from '../components/home/PartnerSection';
import ProcessSection from '../components/home/ProcessSection';
import PricingSection from '../components/home/PricingSection';
import FaqsSection from '../components/home/FaqsSection';
import ContactSection from '../components/home/ContactSection';

function Services() {
  return (
    <>
      <ServiceHero />
      <ServicesList />
      <PartnerSection />
      
      <div className="box-white">
        <ProcessSection />
        <PricingSection />
      </div>

      <FaqsSection />
      <ContactSection />
    </>
  );
}

export default Services;
