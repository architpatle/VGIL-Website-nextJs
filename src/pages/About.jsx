"use client";

import React from 'react';
import AboutHero from '../components/about/AboutHero';
import MissionSection from '../components/about/MissionSection';
import PartnerSection from '../components/home/PartnerSection';
import ValuesSection from '../components/about/ValuesSection';
import ToolsSectionV2 from '../components/about/ToolsSectionV2';
import AboutTeamSection from '../components/about/AboutTeamSection';
import StatisticSection from '../components/home/StatisticSection';
import AwardsSection from '../components/home/AwardsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import JourneySection from '../components/about/JourneySection';
import FaqsSection from '../components/home/FaqsSection';
import ContactSection from '../components/home/ContactSection';
import TeamSection from '../components/home/TeamSection';
import OrbitalLogosSection from '../components/about/OrbitalLogoSection';

function About() {
  return (
    <>
      <AboutHero />
      <MissionSection />
      {/* <PartnerSection /> */}

      <div className="box-white">
        <ValuesSection />
      </div>

      {/* <ToolsSectionV2 /> */}
      <OrbitalLogosSection />

      <div className="box-black">
        <div className="light-box"></div>
        <img className="light-top" src="/assets/images/item/light-top.png" alt="" />
        <img className="light-bot" src="/assets/images/item/light-bot.png" alt="" />
        <TeamSection />
        <AboutTeamSection />
        <StatisticSection />
        <AwardsSection />
        <TestimonialsSection />
      </div>

      <JourneySection />

      <FaqsSection />
      {/* <ContactSection /> */}
    </>
  );
}

export default About;
