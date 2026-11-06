"use client";

import React, { useEffect, useRef, useState } from 'react';
import './AwardsSection.css';

/*
  Each award takes an `images` array.
    - 1 image  -> shown as a single image
    - 2+ images -> shown as a swipeable carousel
  The first image is also used as the thumbnail in the list.
*/

const AWARDS_DATA = [
  {
    id: 1,
    images: [
      "/assets/awards-image/et-indo-global-leaders-2026.jpg",
      "/assets/awards-image/et-indo-global-leaders-2026-2.jpg",
    ],
    title: "ET Indo Global Leaders 2026, Dubai",
    category: "Best Software Solution for Development Finance Institutions",
    year: "2026",
    description:
      "Virtual Galaxy was recognized at ET Indo Global Leaders 2026 in Dubai for delivering the Best Software Solution for Development Finance Institutions. The recognition highlights our commitment to developing robust, scalable, and technology-driven solutions that support the evolving digital requirements of financial institutions.",
  },

  {
    id: 2,
    images: [
      "/assets/awards-image/navbharat-bfsi-conclave-2026.jpg",
      "/assets/awards-image/navbharat-bfsi-conclave-2026-2.jpg",
    ],
    title: "Navbharat BFSI Conclave & Awards 2026",
    category: "Emerging AI & Digital Technology Platform",
    year: "2026",
    description:
      "Virtual Galaxy was recognized at the Navbharat BFSI Conclave & Awards 2026 as an Emerging AI & Digital Technology Platform. The recognition reflects our continued focus on leveraging artificial intelligence and digital technologies to build innovative solutions for the banking and financial services ecosystem.",
  },

  {
    id: 3,
    images: [
      "/assets/awards-image/techmahaimpact-2026.jpg",
    ],
    title: "TechMahaImpact 2026",
    category: "Innovation in AI for Governance and Public Services",
    year: "2026",
    description:
      "Virtual Galaxy was recognized at TechMahaImpact 2026 for Innovation in AI for Governance and Public Services. This recognition highlights our efforts to apply artificial intelligence and modern digital technologies toward building efficient, accessible, and future-ready solutions for governance and public service delivery.",
  },

  {
    id: 4,
    images: [
      "/assets/awards-image/leap-east-hong-kong-2026.jpg",
    ],
    title: "LEAP East Hong Kong 2026",
    category: "Technology Exhibition",
    year: "2026",
    description:
      "Virtual Galaxy exhibited at LEAP East Hong Kong 2026, showcasing our technology capabilities and innovative digital solutions to an international audience. The exhibition provided an opportunity to engage with global technology leaders, explore emerging trends, and present our growing portfolio of enterprise solutions.",
  },

  {
    id: 5,
    images: [
      "/assets/awards-image/technoviti-awards.jpg",
    ],
    title: "13th Edition of the TECHNOVITI Awards",
    category: "Recognition for CyberSentinel",
    year: "2026",
    description:
      "Virtual Galaxy received recognition at the 13th Edition of the TECHNOVITI Awards for CyberSentinel. The recognition underscores our focus on strengthening cybersecurity through innovative technology designed to help organizations enhance digital resilience, security monitoring, and protection against evolving cyber threats.",
  },

  {
    id: 6,
    images: [
      "/assets/awards-image/west-bengal-lenders-meet-2026.jpg",
    ],
    title: "West Bengal Annual State Level Lenders’ Meet 2026",
    category: "Banking & Financial Technology Recognition",
    year: "2026",
    description:
      "Virtual Galaxy was recognized at the West Bengal Annual State Level Lenders’ Meet 2026. The event provided a platform to engage with stakeholders from the banking and financial ecosystem while highlighting our technology capabilities and commitment to supporting the digital transformation of financial institutions.",
  },

  {
    id: 7,
    images: [
      "/assets/awards-image/bharat-coop-banking-summit-2026.jpg",
    ],
    title: "Bharat Co-op Banking Summit 2026",
    category: "Exhibition",
    year: "2026",
    description:
      "Virtual Galaxy participated in the exhibition at the Bharat Co-op Banking Summit 2026, showcasing technology solutions developed for the cooperative banking sector. The event enabled meaningful interactions with banking professionals and industry stakeholders around digital transformation and modern banking technologies.",
  },

  {
    id: 8,
    images: [
      "/assets/awards-image/urban-cooperative-banking-summit-2026.jpg",
    ],
    title: "10th All India Urban Cooperative Banking Summit & Awards 2026",
    category: "Banking Technology Recognition",
    year: "2026",
    description:
      "Virtual Galaxy was recognized at the 10th All India Urban Cooperative Banking Summit & Awards 2026. The recognition reflects our continued engagement with the cooperative banking ecosystem and our efforts to provide reliable, scalable, and modern technology solutions for financial institutions.",
  },

  {
    id: 9,
    images: [
      "/assets/awards-image/india-philippines-defence-exhibition.jpg",
      "/assets/awards-image/india-philippines-defence-exhibition-2.jpg",
    ],
    title: "India - Philippines Defence Industry Seminar & Exhibition",
    category: "Defence Technology Exhibition",
    year: "2026",
    description:
      "Virtual Galaxy exhibited at the India - Philippines Defence Industry Seminar & Exhibition, presenting its technology capabilities within an international defence industry forum. The event created opportunities for cross-border engagement, industry collaboration, and discussions around emerging technology requirements.",
  },

  {
    id: 10,
    images: [
      "/assets/awards-image/bharat-fintech-summit-2026.jpg",
      "/assets/awards-image/bharat-fintech-summit-2026-2.jpg",
      "/assets/awards-image/bharat-fintech-summit-2026-3.jpg",
    ],
    title: "Bharat Fintech Summit 2026",
    category: "Fintech Exhibition",
    year: "2026",
    description:
      "Virtual Galaxy exhibited at the Bharat Fintech Summit 2026, showcasing its digital banking and financial technology capabilities. The summit provided a platform to connect with fintech leaders, financial institutions, and technology innovators while exploring the future of India's rapidly evolving financial ecosystem.",
  },

  {
    id: 11,
    images: [
      "/assets/awards-image/india-kenya-defexpo-2.jpg",
      "/assets/awards-image/india-kenya-defexpo.jpg",
    ],
    title: "India - Kenya 3rd DefExpo",
    category: "Defence Technology Exhibition",
    year: "2026",
    description:
      "Virtual Galaxy exhibited at the India - Kenya 3rd DefExpo, showcasing its technology capabilities and engaging with stakeholders from the defence and technology sectors. The exhibition supported international industry interaction and opportunities to explore technology-driven collaboration between the two markets.",
  },

  {
    id: 12,
    images: [
      "/assets/awards-image/economic-times-business-award-2025.jpg",
      "/assets/awards-image/economic-times-business-award-2025-2.jpg",
    ],
    title: "The Economic Times Business Award 2025",
    category: "Excellence in Information Technology and Artificial Intelligence",
    year: "2025",
    description:
      "Virtual Galaxy was recognized at The Economic Times Business Award 2025 for Excellence in Information Technology and Artificial Intelligence. The recognition celebrates our continued contribution to technology innovation and our efforts to integrate intelligent digital capabilities into solutions designed for modern enterprises and institutions.",
  },

  {
    id: 13,
    images: [
      "/assets/awards-image/nafcub-coopkumbh-2025.jpg",
      "/assets/awards-image/nafcub-coopkumbh-2025-2.jpg",
    ],
    title: "NAFCUB COOPKUMBH 2025",
    category: "Cooperative Banking Technology Exhibition",
    year: "2025",
    description:
      "Virtual Galaxy exhibited at NAFCUB COOPKUMBH 2025, connecting with representatives and stakeholders from India's cooperative banking ecosystem. The event provided an opportunity to showcase our banking technology solutions and exchange ideas around modernization, digitization, and the future of cooperative finance.",
  },

  {
    id: 14,
    images: [
      "/assets/awards-image/navbharat-international-business-excellence-2025.jpg",
      "/assets/awards-image/navbharat-international-business-excellence-2025-2.jpg",
    ],
    title: "Navbharat International Business Excellence Summit 2025",
    category: "Information Technology and Artificial Intelligence",
    year: "2025",
    description:
      "Virtual Galaxy was recognized at the Navbharat International Business Excellence Summit 2025 in the field of Information Technology and Artificial Intelligence. The recognition highlights our commitment to technological innovation and the development of intelligent digital solutions across diverse industries.",
  },

  {
    id: 15,
    images: [
      "/assets/awards-image/apj-abdul-kalam-inspiration-awards-2025.jpg",
    ],
    title: "Dr. APJ Abdul Kalam Inspiration Awards 2025",
    category: "Tech Pioneer in Conversational Banking",
    year: "2025",
    description:
      "Virtual Galaxy was recognized at the Dr. APJ Abdul Kalam Inspiration Awards 2025 as a Tech Pioneer in Conversational Banking. The recognition highlights our efforts to advance banking experiences through intelligent conversational technologies that enable more accessible, responsive, and efficient digital interactions.",
  },

  {
    id: 16,
    images: [
      "/assets/awards-image/world-icon-award-2025.jpg",
    ],
    title: "World Icon Award 2025",
    category: "Leader in Cybersecurity Innovation for BFSI Sector",
    year: "2025",
    description:
      "Virtual Galaxy was recognized at the World Icon Award 2025 as a Leader in Cybersecurity Innovation for the BFSI Sector. The recognition reflects our focus on developing security-driven technology solutions that help banking and financial institutions strengthen their digital infrastructure and respond to evolving cyber risks.",
  },

  {
    id: 17,
    images: [
      "/assets/awards-image/dr-shyam-prasad-mukherjee-memorial-awards-2.jpg",
      "/assets/awards-image/dr-shyam-prasad-mukherjee-memorial-awards.png",
    ],
    title: "Dr. Shyam Prasad Mukherjee Memorial Awards",
    category: "Most Trusted IT Solutions Provider in India",
    year: "2025",
    description:
      "Virtual Galaxy was recognized at the Dr. Shyam Prasad Mukherjee Memorial Awards as the Most Trusted IT Solutions Provider in India. The recognition reflects our commitment to delivering dependable technology solutions, building long-term client relationships, and supporting organizations through their digital transformation journeys.",
  },

  {
    id: 18,
    images: [
      "/assets/awards-image/international-grandeur-awards-2025-3.jpg",
      "/assets/awards-image/international-grandeur-awards-2025.jpg",
      "/assets/awards-image/international-grandeur-awards-2025-2.png",
    ],
    title: "International Grandeur Awards 2025",
    category: "Digital Transformation Leader",
    year: "2025",
    description:
      "Virtual Galaxy was recognized as a Digital Transformation Leader at the International Grandeur Awards 2025. This recognition celebrates our contribution to helping organizations modernize operations through innovative software, automation, digital platforms, and technology-led transformation initiatives.",
  },

  {
    id: 19,
    images: [
      "/assets/awards-image/sardar-patel-unity-awards-2025-2.jpg",
      "/assets/awards-image/sardar-patel-unity-awards-2025.jpg",
    ],
    title: "Sardar Patel Unity Awards 2025",
    category: "Leading IT Solutions Provider of the Year",
    year: "2025",
    description:
      "Virtual Galaxy was recognized as the Leading IT Solutions Provider of the Year at the Sardar Patel Unity Awards 2025. This recognition celebrates our commitment to delivering innovative software solutions and digital technologies that support operational efficiency and transformation across industries.",
  },

  {
    id: 20,
    images: [
      "/assets/awards-image/kokan-vibhag-exhibition.jpg",
      "/assets/awards-image/kokan-vibhag-exhibition-2.jpg",
    ],
    title: "Kokan Vibhag Nagari Sahakari Pathsanstha Sangh Maryadit",
    category: "Exhibition Booth",
    year: "2025",
    description:
      "Virtual Galaxy participated with an exhibition booth at the Kokan Vibhag Nagari Sahakari Pathsanstha Sangh Maryadit event. The exhibition enabled direct engagement with representatives from the cooperative financial sector and provided a platform to demonstrate our technology solutions and digital capabilities.",
  },

  {
    id: 21,
    images: [
      "/assets/awards-image/global-excellence-forum-awards.jpg",
      "/assets/awards-image/global-excellence-forum-awards-2.jpg",
    ],
    title: "Global Excellence Forum Awards",
    category:
      "Best in Class RegTech Solution & Best Innovation in Core Banking Solutions",
    year: "2025",
    description:
      "Virtual Galaxy was recognized at the Global Excellence Forum Awards for Best in Class RegTech Solution and Best Innovation in Core Banking Solutions. These recognitions highlight our focus on developing advanced banking technologies that support regulatory requirements while enabling modern, efficient, and scalable core banking operations.",
  },

  {
    id: 22,
    images: [
      "/assets/awards-image/inspiring-leaders-award-2024-2.jpg",
      "/assets/awards-image/inspiring-leaders-award-2024.jpg",
      "/assets/awards-image/inspiring-leaders-award-2024-3.jpg",
    ],
    title: "Inspiring Leaders Award 2024",
    category: "Outstanding Achievement in Financial Technology Advancement",
    year: "2024",
    description:
      "Virtual Galaxy was recognized at the Inspiring Leaders Award 2024 for Outstanding Achievement in Financial Technology Advancement. The recognition celebrates our contribution to developing innovative financial technology solutions that enable institutions to modernize services and strengthen their digital capabilities.",
  },

  {
    id: 23,
    images: [
      "/assets/awards-image/indian-achievers-award.jpg",
      "/assets/awards-image/indian-achievers-award-2.png",
    ],
    title: "Indian Achievers Award",
    category: "Best Integrated ERP Solution for the Sugar Industry",
    year: "2024",
    description:
      "Virtual Galaxy was recognized at the Indian Achievers Award for the Best Integrated ERP Solution for the Sugar Industry. The recognition highlights our ability to develop industry-focused enterprise technology that integrates critical processes, improves operational visibility, and supports efficient management across complex business operations.",
  },

  {
    id: 24,
    images: [
      "/assets/awards-image/navbharat-navarashtra-conclave-2024.jpg",
      "/assets/awards-image/navbharat-navarashtra-conclave-2024-2.jpg",
    ],
    title: "Navbharat Navarashtra Conclave 2024",
    category: "Scroll of Honour",
    year: "2024",
    description:
      "Virtual Galaxy received the Scroll of Honour at the Navbharat Navarashtra Conclave 2024. The recognition acknowledges our contribution to technology-led progress and our continued efforts to create digital solutions that support businesses, institutions, and broader economic development.",
  },

  {
    id: 25,
    images: [
      "/assets/awards-image/cio-forum-global-excellence-2.png",
      "/assets/awards-image/cio-forum-global-excellence.png",
    ],
    title: "CIO Forum Global Excellence",
    category: "Global Excellence in Integrated MIS for Banking & Finance",
    year: "2024",
    description:
      "Virtual Galaxy was recognized at CIO Forum Global Excellence for Global Excellence in Integrated MIS for Banking & Finance. The recognition highlights our work in building integrated information systems that help financial institutions improve data visibility, operational monitoring, reporting, and informed decision-making.",
  },

  {
    id: 26,
    images: [
      "/assets/awards-image/elets-bfsi-ai-analytics-awards-2.jpg",
      "/assets/awards-image/elets-bfsi-ai-analytics-awards.png",
    ],
    title: "Elets BFSI AI & Analytics Breakthrough Awards",
    category: "The Best Regulatory Reporting Core Banking Solution",
    year: "2024",
    description:
      "Virtual Galaxy was recognized at the Elets BFSI AI & Analytics Breakthrough Awards for the Best Regulatory Reporting Core Banking Solution. The recognition reflects our commitment to building banking technology that simplifies regulatory reporting while supporting accuracy, operational efficiency, and evolving compliance requirements.",
  },

  {
    id: 27,
    images: [
      "/assets/awards-image/asia-leadership-awards-fintech-2.jpg",
      "/assets/awards-image/asia-leadership-awards-fintech.png",
    ],
    title: "Asia Leadership Awards",
    category: "The Financial Service Tech of the Year",
    year: "2024",
    description:
      "Virtual Galaxy was recognized at the Asia Leadership Awards as the Financial Service Tech of the Year. The recognition celebrates our contribution to financial technology through scalable digital solutions designed to help financial institutions modernize operations and deliver efficient technology-enabled services.",
  },

  {
    id: 28,
    images: [
      "/assets/awards-image/asia-leadership-awards-best-ceo-2.png",
      "/assets/awards-image/asia-leadership-awards-best-ceo.png",
    ],
    title: "Asia Leadership Awards",
    category: "Best CEO of the Year",
    year: "2024",
    description:
      "Virtual Galaxy received recognition at the Asia Leadership Awards in the Best CEO of the Year category. The honour acknowledges leadership in driving technology innovation, organizational growth, strategic transformation, and the continued expansion of Virtual Galaxy's technology capabilities.",
  },
];

const ChevronIcon = ({ direction }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    style={{ transform: direction === 'prev' ? 'rotate(180deg)' : 'none' }}
  >
    <polyline points="9 6 15 12 9 18" />
  </svg>
);

/* Renders one <img> for a single image, or a swipeable carousel for 2+ */
function AwardMedia({ images, title, carouselRef }) {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const count = images.length;

  const goTo = (i) => {
    const track = trackRef.current;
    if (!track) return;
    const next = Math.max(0, Math.min(count - 1, i));
    track.scrollTo({ left: next * track.clientWidth, behavior: 'smooth' });
    setIndex(next);
  };

  // Let the parent (keyboard handler) drive the carousel
  useEffect(() => {
    if (carouselRef) carouselRef.current = { next: () => goTo(index + 1), prev: () => goTo(index - 1) };
  });

  // Keep the index in sync while the user swipes / scrolls
  const handleScroll = (e) => {
    const { scrollLeft, clientWidth } = e.currentTarget;
    if (!clientWidth) return;
    const i = Math.round(scrollLeft / clientWidth);
    if (i !== index) setIndex(i);
  };

  if (count <= 1) {
    return (
      <div className="award-modal-image-wrapper">
        <img src={images[0]} alt={title} className="award-modal-image" draggable="false" />
      </div>
    );
  }

  return (
    <div
      className="award-modal-image-wrapper"
      role="group"
      aria-roledescription="carousel"
      aria-label={`${title} images`}
    >
      <div className="award-carousel-track" ref={trackRef} onScroll={handleScroll}>
        {images.map((src, i) => (
          <div
            className="award-carousel-slide"
            key={src}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
          >
            <img
              src={src}
              alt={`${title} - image ${i + 1}`}
              className="award-modal-image"
              draggable="false"
            />
          </div>
        ))}
      </div>

      <span className="award-carousel-counter">{index + 1} / {count}</span>

      <button
        type="button"
        className="award-carousel-btn award-carousel-btn--prev"
        onClick={() => goTo(index - 1)}
        disabled={index === 0}
        aria-label="Previous image"
      >
        <ChevronIcon direction="prev" />
      </button>
      <button
        type="button"
        className="award-carousel-btn award-carousel-btn--next"
        onClick={() => goTo(index + 1)}
        disabled={index === count - 1}
        aria-label="Next image"
      >
        <ChevronIcon direction="next" />
      </button>

      <div className="award-carousel-dots">
        {images.map((src, i) => (
          <button
            type="button"
            key={src}
            className={`award-carousel-dot${i === index ? ' is-active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to image ${i + 1}`}
            aria-current={i === index}
          />
        ))}
      </div>
    </div>
  );
}

function AwardModal({ award, onClose }) {
  const carouselRef = useRef(null);

  // Esc closes, arrow keys move the carousel
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') carouselRef.current?.next();
      if (e.key === 'ArrowLeft') carouselRef.current?.prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className="award-modal-overlay" onClick={onClose}>
      <div className="award-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="award-modal-close" onClick={onClose} aria-label="Close details">
          &times;
        </button>

        <AwardMedia images={award.images} title={award.title} carouselRef={carouselRef} />

        <div className="award-modal-content">
          <div className="award-modal-year">/ {award.year}</div>
          <h3 className="award-modal-title">{award.title}</h3>
          <div className="award-modal-category">{award.category}</div>
          <p className="award-modal-description">{award.description}</p>
        </div>
      </div>
    </div>
  );
}

function AwardsSection() {
  const [activeAward, setActiveAward] = useState(null);
  const [visibleCount, setVisibleCount] = useState(4);

  const visibleAwards = AWARDS_DATA.slice(0, visibleCount);
  const hasMoreAwards = visibleCount < AWARDS_DATA.length;

  const handleViewMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, AWARDS_DATA.length));
  };

  return (
    <div className="section-awards section-spacing-lg dark-section">
      <div className="container">

        <div className="heading-section center mb-48">
          <div className="heading-sub fw-semibold mb-0 effectFade fadeUp">
            Awards
          </div>
        </div>

        <div className="d-grid gap-16">
          {visibleAwards.map((award, index) => (
            <div
              key={award.id}
              className="awards-item dark-card"
              data-delay={`${index * 0.1}`}
              onClick={() => setActiveAward(award)}
              style={{ cursor: 'pointer' }}
            >
              <div className="image award-photo-wrapper">
                <img
                  src={award.images[0]}
                  alt={award.title}
                  className="award-photo"
                />
              </div>

              <div className="title text-body-1 text-dark">
                {award.title}
              </div>

              <div className="text text-body-1 text-dark">
                {award.category}
              </div>

              <div className="year text-body-1 text-neutral-400">
                / {award.year}
              </div>
            </div>
          ))}
        </div>

        {hasMoreAwards && (
          <div className="awards-view-more">
            <button
              type="button"
              className="tf-btn"
              onClick={handleViewMore}
            >
              View More
            </button>
          </div>
        )}

      </div>

      {activeAward && (
        <AwardModal
          key={activeAward.id}
          award={activeAward}
          onClose={() => setActiveAward(null)}
        />
      )}
    </div>
  );
}

export default AwardsSection;