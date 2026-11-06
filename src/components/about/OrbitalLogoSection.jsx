import React, { useEffect, useRef, useState } from "react";

import vgilLogo from '../../assets/home/ownwer-img/vg-logo-2.png';
import eBankerImg from '../../assets/Products-img/e-banker.png';
import imisLogoImg from '../../assets/Products-img/imis_logo.png';
import ibsLogoImg from '../../assets/Products-img/ibs_logo.png';
import vpayLogoImg from '../../assets/Products-img/vpay_logo.png';
import apmcLogoImg from '../../assets/Products-img/apmc_logo.png';
import eAutopsyLogoImg from '../../assets/Products-img/e-autopsy-logo.png';
import cyberSentinelImg from '../../assets/Products-img/cyber-sentinel.png';
import conversationalAiImg from '../../assets/Products-img/conversational-ai-companion-logo.png';
import transactCoreImg from '../../assets/Products-img/TransactCore.png';
import auditFluxImg from '../../assets/Products-img/AuditFlux.png';
import finFlowImg from '../../assets/Products-img/FinFlow.png';
import eCRMImg from '../../assets/Products-img/eCRM.png';
import eLOSImg from '../../assets/Products-img/eLOS.png';
import secureViewAIImg from '../../assets/Products-img/secureViewAI.png';

const ORBITS = [
  {
    id: "orbit-inner",
    radius: 170,
    duration: 50,
    direction: "cw",
    badgeSize: 100,
    logos: [
      { name: "eBanker", image: eBankerImg },
      { name: "IMIS", image: imisLogoImg },
      { name: "IBS", image: ibsLogoImg },
      { name: "VPay", image: vpayLogoImg },
      { name: "FinFlow", image: finFlowImg },
    ],
  },
  {
    id: "orbit-mid",
    radius: 320,
    duration: 50,
    direction: "ccw",
    badgeSize: 100,
    logos: [
      { name: "APMC", image: apmcLogoImg },
      { name: "e-Autopsy", image: eAutopsyLogoImg },
      { name: "Cyber Sentinel", image: cyberSentinelImg },
      { name: "Conversational AI Companion", image: conversationalAiImg },
      { name: "TransactCore", image: transactCoreImg },
      { name: "AuditFlux", image: auditFluxImg },
      { name: "eCRM", image: eCRMImg },
      { name: "eLOS", image: eLOSImg },
      { name: "SecureViewAI", image: secureViewAIImg },
    ],
  },
];

function LogoBadge({ logo, size }) {
  return (
    <div className="orb-badge" style={{ width: size, height: size }} title={logo.name}>
      {logo.image ? (
        <img src={logo.image.src} alt={logo.name} draggable="false" />
      ) : (
        <span style={{ fontSize: size * 0.32 }}>{logo.initials}</span>
      )}
    </div>
  );
}

// Pure translate — no rotate. This is what guarantees the badge itself
// never tilts, regardless of how long the animation has been running.
function positionTransform(angleDeg, radius) {
  const rad = (angleDeg * Math.PI) / 180;
  const x = radius * Math.cos(rad);
  const y = radius * Math.sin(rad);
  return `translate(-50%, -50%) translate(${x}px, ${y}px)`;
}

function Orbit({ orbit, reduceMotion }) {
  const count = orbit.logos.length;
  const dirSign = orbit.direction === "cw" ? 1 : -1;
  const itemRefs = useRef([]);

  useEffect(() => {
    if (reduceMotion) return;

    let frameId;
    const durationMs = orbit.duration * 1000;
    const start = performance.now();

    const tick = (now) => {
      const progress = ((now - start) % durationMs) / durationMs;
      const baseAngle = progress * 360 * dirSign;

      for (let i = 0; i < count; i++) {
        const angle = (360 / count) * i + baseAngle;
        const el = itemRefs.current[i];
        if (el) el.style.transform = positionTransform(angle, orbit.radius);
      }

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [orbit.radius, orbit.duration, dirSign, count, reduceMotion]);

  return (
    <div
      className="orb-ring"
      style={{
        width: orbit.radius * 2,
        height: orbit.radius * 2,
        marginLeft: -orbit.radius,
        marginTop: -orbit.radius,
      }}
    >
      <div className="orb-ring-line" />
      {orbit.logos.map((logo, i) => {
        const initialAngle = (360 / count) * i;
        return (
          <div
            key={logo.name + i}
            ref={(el) => (itemRefs.current[i] = el)}
            className="orb-item"
            style={{
              width: orbit.badgeSize,
              height: orbit.badgeSize,
              transform: positionTransform(initialAngle, orbit.radius),
            }}
          >
            <LogoBadge logo={logo} size={orbit.badgeSize} />
          </div>
        );
      })}
    </div>
  );
}

function useResponsiveScale() {
  const [scale, setScale] = useState(1);
  const [hideOuter, setHideOuter] = useState(false);

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setScale(0.46);
        setHideOuter(true);
      } else if (w < 900) {
        setScale(0.66);
        setHideOuter(false);
      } else if (w < 1200) {
        setScale(0.85);
        setHideOuter(false);
      } else {
        setScale(1);
        setHideOuter(false);
      }
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  return { scale, hideOuter };
}

export default function OrbitalLogosSection({
  heading = "Trusted by teams building what's next",
  subtext = "From early-stage startups to established enterprises, teams rely on our platform to ship faster and scale with confidence.",
  centerLogo = { name: "VirtualGalaxy", image: vgilLogo },
}) {
  const [reduceMotion, setReduceMotion] = useState(false);
  const { scale, hideOuter } = useResponsiveScale();

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const handler = (e) => setReduceMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const orbitsToRender = hideOuter ? ORBITS.slice(0, 2) : ORBITS;
  const outerRadius = orbitsToRender[orbitsToRender.length - 1].radius * scale;
  const stageSize = Math.round(outerRadius * 2 + 90);

  // Desktop keeps the width you set (180px) untouched; only scales down
  // below desktop breakpoints, with a floor so it stays legible.
  const centerLogoWidth = scale >= 1 ? 180 : Math.max(100, Math.round(180 * scale));

  return (
    <section className={`orb-section ${reduceMotion ? "reduce-motion" : ""}`}>
      <style>{`

        .orb-section {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 72px 24px 56px;
          overflow: hidden;
        }

        .orb-header {
          position: relative;
          z-index: 10;
          max-width: 560px;
          text-align: center;
          margin-bottom: 24px;
        }

        .orb-heading {
          font-weight: 500;
        //   font-size: clamp(26px, 3.6vw, 40px);
        //   line-height: 1.18;
        //   letter-spacing: -0.01em;
        //   color: #1C1E22;
          margin: 0 0 14px;
        }

        .orb-subtext {
          font-size: 16px;
          line-height: 1.6;
          color: #666E7A;
          margin: 0;
        }

        .orb-stage {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .orb-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          border-radius: 50%;
        }

        .orb-ring-line {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1px solid rgba(28,30,34,0.09);
        }

        .orb-item {
          position: absolute;
          top: 50%;
          left: 50%;
        }

        .orb-badge {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #FFFFFF;
          border: 1px solid rgba(28,30,34,0.08);
          box-shadow: 0 6px 16px rgba(28,30,34,0.06);
          color: #3A3F47;
          font-weight: 500;
          letter-spacing: 0.02em;
          transition: box-shadow 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
        }

        .orb-badge:hover {
          border-color: rgba(184,134,11,0.45);
          box-shadow: 0 10px 22px rgba(28,30,34,0.10);
          transform: scale(1.08);
        }

        .orb-badge img {
          width: 80%;
          height: auto;
          object-fit: contain;
        }

        .orb-center-logo {
          position: relative;
          z-index: 10;
          padding: 12px 0;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #FFFFFF;
          border: 1px solid rgba(28,30,34,0.08);
          box-shadow: 0 12px 28px rgba(28,30,34,0.10);
        }

        .orb-center-logo img {
          width: 62%;
          height: 62%;
          object-fit: contain;
        }

        .orb-center-logo span {
          font-family: 'Fraunces', serif;
          font-weight: 500;
          font-size: 32px;
          color: #B8860B;
        }
      `}</style>

      {/* <div className="orb-header">
        <h2 className="orb-heading">{heading}</h2>
        <p className="orb-subtext">{subtext}</p>
      </div> */}
      <div className="heading-section center mb-48">
        <div className="heading-sub fw-semibold effectFade fadeUp">Our Ecosystem</div>
        <div className="heading-title text-gradient-3 effectFade fadeRotateX">A Connected Ecosystem of Powerful Solutions</div>
      </div>

      <div className="orb-stage" style={{ width: stageSize, height: stageSize }}>
        {orbitsToRender.map((orbit) => {
          const scaled = {
            ...orbit,
            radius: Math.round(orbit.radius * scale),
            badgeSize: Math.round(orbit.badgeSize * scale),
          };
          return <Orbit key={orbit.id} orbit={scaled} reduceMotion={reduceMotion} />;
        })}

        <div className="orb-center-logo" style={{ width: centerLogoWidth }}>
          {centerLogo.image ? (
            <img src={centerLogo.image.src} alt={centerLogo.name} />
          ) : (
            <span>{centerLogo.initials}</span>
          )}
        </div>
      </div>
    </section>
  );
}