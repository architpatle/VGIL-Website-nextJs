import React from 'react';
import WorksHero from '../components/works/WorksHero';
import WorksSection from '../components/home/WorksSection';
import DelaySection from '../components/works/DelaySection';
import PricingSection from '../components/home/PricingSection';
import FaqsSection from '../components/home/FaqsSection';
import ContactSection from '../components/home/ContactSection';

function Works() {
  return (
    <>
      <WorksHero />
      <WorksSection className="section-featured-works flat-spacing" />

      <div className="box-white">
        <DelaySection />
        <PricingSection />
      </div>

      <FaqsSection />
      <ContactSection />
    </>
  );
}

export default Works;
