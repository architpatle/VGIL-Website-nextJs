import React from 'react';
import Link from 'next/link';
import imisImg from '../../assets/home/imis.png';
import digitalIdentityImg from '../../assets/home/digital-identity.png';
import eBankerImg from '../../assets/Products-img/e-banker.png';


function AboutHero() {
  return (
    <div className="section-hero v1">
      <div className="hero-image">
      </div>
      <div className="container">
        <div className="content-wrap text-center">
          <div className="title text-display-2 effectFade fadeRotateX">
            <span className="title1 fw-semibold text-gradient-1">Virtual Galaxy Empowering Industries</span>
          </div>
          <p className="text effectFade fadeUp">
            We build human-centered AI solutions that transform workflows, enhance decision-making, <br /> and accelerate innovation across diverse global industries.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
