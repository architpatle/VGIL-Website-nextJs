"use client";

import React from 'react';
import { useEffect } from 'react';
import './TeamSection.css'

// Import local images
import team1Image from '../../assets/home/ownwer-img/avinash-shende-clear-bg.png';
import team2Image from '../../assets/home/ownwer-img/sachin-pande-clear-bg.png';
import logoImage from '../../assets/home/ownwer-img/vg-logo-2.png';
import avinashSignature from '../../assets/home/signature.png';
import sachinSignature from '../../assets/home/sachin-signature.png';

function TeamSection() {
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         document
  //           .querySelectorAll('.founder-card')
  //           .forEach((card) => card.classList.add('animate'));
  //       }
  //     },
  //     { threshold: 0.25 }
  //   );

  //   const section = document.querySelector('#leadership');

  //   if (section) observer.observe(section);

  //   return () => observer.disconnect();
  // }, []);
useEffect(() => {
  const section = document.querySelector('#leadership');

  if (!section) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        section
          .querySelectorAll('.founder-card')
          .forEach((card) => {
            card.classList.add('animate');
          });

        observer.unobserve(section);
      }
    },
    {
      threshold: 0.1,
      rootMargin: '-100px 0px -100px 0px',
    }
  );

  observer.observe(section);

  return () => observer.disconnect();
}, []);

  return (
    <div className="section-team-premium section-spacing-lg" id="leadership">
      <div className="container" >
        {/* Section Heading */}
        <div className="heading-section center mb-0">
          <div className="heading-sub fw-semibold  effectFade fadeUp">Our Founders</div>
          <div className="heading-title text-gradient-3 effectFade fadeRotateX">
            The Minds Behind Virtual Galaxy
          </div>
        </div>

        {/* Responsive Grid Wrapper */}
        <div className="leadership-grid-container">

          {/* Left Card - Mr. Avinash Shende */}
          <div className="leader-card-item card-left founder-card founder-left">
            <div className="leader-image-wrap">
              <div className="image-bg-box founder1-bg">
                <img src={team1Image.src} alt="Mr. Avinash Shende" className="leader-profile-img" />
              </div>
              <div className="profile-icon-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            </div>
            <div className="leader-info-wrap">
              <h3 className="leader-name">Mr. Avinash Shende</h3>
              {/* <img src={avinashSignature} alt="Mr. Avinash Shende Signature" className="leader-signature" /> */}
              <div className="leader-position">Promoter, Chairman, Executive Director & Chief Financial Officer</div>
              {/* <div className="leader-divider"></div> */}
              <p className="leader-desc">
                Avinash oversees operations and finances at Virtual Galaxy Infotech, balancing market needs with cost efficiency. He’s also a gardening enthusiast with a love for all things green.
              </p>
            </div>
          </div>

          {/* Center Circular Logo Container */}
          {/* <div className="leader-logo-center-wrap">
            <div className="logo-circle-container">
              <img src={logoImage} alt="Virtual Galaxy Logo" className="logo-center-img" />
            </div>
          </div> */}

          {/* Right Card - Mr. Sachin Pande */}
          <div className="leader-card-item card-right founder-card founder-right">
            <div className="leader-image-wrap">
              <div className="image-bg-box founder2-bg">
                <img src={team2Image.src} alt="Mr. Sachin Pande" className="leader-profile-img" />
              </div>
              <div className="profile-icon-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            </div>
            <div className="leader-info-wrap">
              <h3 className="leader-name">Mr. Sachin Pande</h3>
              {/* <img src={sachinSignature} alt="Mr. Sachin Pande Signature" className="leader-signature" /> */}
              <div className="leader-position">Promoter, Managing Director & Chief Technology Officer</div>
              {/* <div className="leader-divider"></div> */}
              <p className="leader-desc">
                Sachin drives technology and business development at Virtual Galaxy Infotech, leveraging the latest advancements. Off duty, he enjoys music with a cup of tea in hand.
              </p>
            </div>
          </div>

        </div>

        <style>{`
          /* Default (Desktop) */
          // .leader-name {
          //   display: none !important;
          // }
          .leader-signature {
            display: block !important;
            height: 70px;
            width: 190px;
            object-fit: contain;
         
          }

        

          /* Mobile View */
          @media (max-width: 768px) {
            .leader-name {
              display: block !important;
            }
            // .leader-signature {
            //   display: none !important;
            // }
            #leadership{
              height: auto;
            }
          }
        `}</style>
      </div>
    </div>
  );
}

export default TeamSection;