"use client";

import React from 'react';
import ServiceSingleHero from '../components/services/ServiceSingleHero';
import ServiceSingleDetails from '../components/services/ServiceSingleDetails';
import OptimizeInvestmentsSection from '../components/services/OptimizeInvestmentsSection';
import ITInfrastructureSection from '../components/services/ITInfrastructureSection';
import CTABannerSection from '../components/services/CTABannerSection';
import { SERVICES_DATA } from '../data/servicesData';
import DriveValueSection from '../components/services/DriveValueSection';
import SimplifyGSTSection from '../components/services/SimplifyGSTSection';
import VGSTServicesProvideSection from '../components/services/VGSTServicesProvideSection';
import ExploreVGSTServicesSection from '../components/services/ExploreVGSTServicesSection';
import ASPProgramSection from '../components/services/ASPProgramSection';
import MobileComputingHero from '../components/services/MobileComputingHero';
import MobileStrategiesSection from '../components/services/MobileStrategiesSection';
import MobileBenefitsSection from '../components/services/MobileBenefitsSection';
import MobileServicesProvideSection from '../components/services/MobileServicesProvideSection';
import MobileTechnologiesSection from '../components/services/MobileTechnologiesSection';
import DRDCHero from '../components/services/DRDCHero';
import DRDCSolveSection from '../components/services/DRDCSolveSection';
import DRDCBenefitsSection from '../components/services/DRDCBenefitsSection';
import DRDCServicesProvideSection from '../components/services/DRDCServicesProvideSection';
import DRDCOptimizeSection from '../components/services/DRDCOptimizeSection';
import DigitalSolutionsHero from '../components/services/DigitalSolutionsHero';
import DigitalSolutionAbout from '../components/services/DigitalSolutionAbout';
import DigitalStrategySection from '../components/services/DigitalStrategySection';
import DigitalProvideSection from '../components/services/DigitalProvideSection';
import DigitalExploreSection from '../components/services/DigitalExploreSection';
import DigitalSocialSection from '../components/services/DigitalSocialSection';
import DigitalCTASection from '../components/services/DigitalCTASection';
import AIMLHero from '../components/services/AIMLHero';
import AIMLSolveSection from '../components/services/AIMLSolveSection';
import AIMLDeploySection from '../components/services/AIMLDeploySection';
import AIMLServicesSection from '../components/services/AIMLServicesSection';
import AIMLGrowSection from '../components/services/AIMLGrowSection';

function ServiceSingle({ slug }) {
  const service = SERVICES_DATA.find(s => s.slug === slug);

  if (!service) {
  return null;
}

  return (
    <>
      {slug !== 'mobile-computing' && slug !== 'dc-dr' && slug !== 'digital-solutions' && slug !== 'ai-ml' && <ServiceSingleHero service={service} />}
      
      {/* Conditionally render sections based on the service slug */}
      {slug === 'ai-ml' ? (
        <>
          <AIMLHero />
          <AIMLSolveSection />
          <AIMLDeploySection />
          <AIMLServicesSection />
          <AIMLGrowSection />
        </>
      ) : slug === 'digital-solutions' ? (
        <>
          <DigitalSolutionsHero />
          <DigitalSolutionAbout />
          <DigitalStrategySection />
          <DigitalProvideSection />
          <DigitalExploreSection />
          <DigitalSocialSection />
          <DigitalCTASection />
        </>
      ) : slug === 'dc-dr' ? (
        <>
          <DRDCHero />
          <DRDCSolveSection />
          <DRDCBenefitsSection />
          <DRDCServicesProvideSection />
          <DRDCOptimizeSection />
        </>
      ) : slug === 'mobile-computing' ? (
        <>
          <MobileComputingHero />
          <MobileStrategiesSection />
          <MobileBenefitsSection />
          <MobileServicesProvideSection />
          <MobileTechnologiesSection />
        </>
      ) : slug === 'it-infrastructure-development' ? (
        <ITInfrastructureSection />
      ) : slug === 'vgst' ? (
        <>
          <SimplifyGSTSection />
          <VGSTServicesProvideSection />
          
          <ExploreVGSTServicesSection />
          <ASPProgramSection />
        </>
      ) : (
        <>
          <DriveValueSection />
          <ServiceSingleDetails service={service} />

            <OptimizeInvestmentsSection />
        </>
      )}

      {slug !== 'ai-ml' && slug !== 'digital-solutions' && (
        <CTABannerSection 
          title={`Ready to Transform Your ${service.title}?`}
          subtitle={`Schedule a free consultation with our ${service.slug === 'vgst' ? 'VGST' : service.title} experts and discover how smart technology can optimize your operations.`}
        />
      )}
    </>
  );
}

export default ServiceSingle;

