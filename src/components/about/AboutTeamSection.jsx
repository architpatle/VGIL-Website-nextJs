import { useState, useEffect, useRef } from 'react';
import team1Image from '../../assets/home/ownwer-img/avinash-shende-clear-bg.png';
import team2Image from '../../assets/home/ownwer-img/sachin-pande-clear-bg.png';
import Leadership from './Leadership';

function AboutTeamSection() {
  const [activeDirector, setActiveDirector] = useState(null);
  const sectionRef = useRef(null);

  const handleCardClick = (member) => {
    if (window.innerWidth <= 768) {
      setActiveDirector(member);
    }
  };

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('anim-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    const section = sectionRef.current;
    if (section) {
      const animElements = section.querySelectorAll('.anim-on-scroll');
      animElements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  // 3D tilt effect handler
  const handleTilt = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleTiltReset = (e) => {
    e.currentTarget.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
  };

  const boardMembers = [
    {
      name: "Mr. Avinash Shende",
      role: "Promoter & Managing Director",
      desc: "Promoting strategic banking innovation and leading executive operations with focus on growth.",
      img: team1Image.src,
      fit: "contain",
      bg: "rgba(0,0,0,0.03)",
      linkedin: "https://www.linkedin.com/in/avinash-shende-a09b863/"
    },
    {
      name: "Mr. Sachin Pande",
      role: "Promoter & Executive Director",
      desc: "Overseeing technology engineering, core systems architecture, and IT operations.",
      img: team2Image.src,
      fit: "contain",
      bg: "rgba(0,0,0,0.03)",
      linkedin: "https://www.linkedin.com/in/sachin-pande-317620157/"
    },
    {
      name: "Mr. Asit Oberoi",
      role: "Chairman & Independent Director",
      desc: "Visionary banking leader with decades of experience driving compliance, advisory, and corporate excellence.",
      img: "/assets/images/about/founders/asit-oberoi.jpg",
      fit: "cover",
      bg: "#f1f5f9",
      linkedin: "https://www.linkedin.com/in/asit-oberoi-88910120/"
    },
    {
      name: "Ms. Bhanupriya Sharma",
      role: "Non-Executive Director & CS",
      desc: "Governing corporate finance, legal compliance, and regulatory governance standards.",
      img: "/assets/images/about/founders/bhanupriya-clear-bg.png",
      fit: "contain",
      bg: "rgba(0,0,0,0.03)",
      linkedin: "https://www.linkedin.com/in/fcs-bhanupriya-sharma-thakur/"
    },
    {
      name: "Mr. Jaideep Pawar",
      role: "Non-Executive Director",
      desc: "Shaping business expansion routes, strategic partnerships, and alliance frameworks.",
      img: "/assets/images/about/founders/jaideep-pawar.jpg",
      fit: "cover",
      bg: "#f1f5f9",
      linkedin: "https://www.linkedin.com/in/jaideep-pawar/"
    },
    {
      name: "Mr. Ayush Sharma",
      role: "Executive Director",
      desc: "Directing operational delivery, banking software systems implementation, and project management.",
      img: "/assets/images/about/founders/ayush-sharma-clear-bg.png",
      fit: "contain",
      bg: "rgba(0,0,0,0.03)",
      linkedin: "https://www.linkedin.com/in/ayush-sharma-1425a2189/"
    },
    {
      name: "Mr. Sunil Kulkarni",
      role: "Professional Non-Executive Director",
      desc: "Driving strategic growth through fintech, digital payments, and technology expertise.",
      img: "/assets/images/about/founders/sunil-kulkarni.png",
      fit: "contain",
      bg: "rgba(0,0,0,0.03)",
      linkedin: "https://www.linkedin.com/in/sunil-kulkarni-12a3291/"
    }
  ];

  // const leftColumnMembers = [boardMembers[0], boardMembers[2], boardMembers[4], boardMembers[6]];
  // const rightColumnMembers = [boardMembers[1], boardMembers[3], boardMembers[5]];

  const isOddCount = boardMembers.length % 2 !== 0;
  const pairedMembers = isOddCount ? boardMembers.slice(0, -1) : boardMembers;
  const lastOddMember = isOddCount ? boardMembers[boardMembers.length - 1] : null;

  const leftColumnMembers = pairedMembers.filter((_, i) => i % 2 === 0);
  const rightColumnMembers = pairedMembers.filter((_, i) => i % 2 === 1);

  return (
    <div ref={sectionRef} className="section-team section-spacing-lg" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        {/* Founders Section */}
        {/* <div className="heading-section center mb-64">
          <div className="heading-sub fw-semibold style-1 effectFade fadeUp">Our Leadership</div>
          <div className="heading-title text-dark effectFade fadeRotateX">
            The Visionaries Behind <br /> Virtual Galaxy
          </div>
        </div> */}

        {/* <div className="founders-container mb-80">

          <div className="founder-item anim-on-scroll anim-slide-left" >
            <div className="leader-card-item card-left tilt-card" style={{ width: '100%', background: '#ffffff', boxShadow: '0 10px 30px rgba(15, 23, 42, 0.04)', border: '1px solid #eef2f6', borderRadius: '32px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onMouseMove={handleTilt} onMouseLeave={handleTiltReset}>
              <div className="leader-image-wrap">
                <div className="image-bg-box shine-effect" style={{ background: 'rgba(0,0,0,0.05)', borderRadius: '24px', overflow: 'hidden', height: '238px' }}>
                  <img src={team1Image} alt="Mr. Avinash Shende" className="leader-profile-img" style={{ height: 'auto', display: 'block' }} />
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
                <img src={avinashSignature} alt="Mr. Avinash Shende Signature" className="leader-signature" style={{ width: '100%', marginBottom: '0px', display: 'flex', alignItems: 'center' }} />
                <div className="leader-position">Founder & CEO</div>
                <p className="leader-desc">
                  Avinash oversees operations and finances at Virtual Galaxy Infotech, balancing market needs with cost efficiency. He's also a gardening enthusiast with a love for all things green.
                </p>
              </div>
            </div>
          </div>

          <div className="leader-logo-center-wrap anim-on-scroll anim-scale-in">
            <div className="logo-circle-container logo-float">
              <img src={logoImage} alt="Virtual Galaxy Logo" className="logo-center-img" />
            </div>
          </div>

          <div className="founder-item anim-on-scroll anim-slide-right" style={{ display: 'flex' }}>
            <div className="leader-card-item card-right tilt-card" style={{ width: '100%', background: '#ffffff', boxShadow: '0 10px 30px rgba(15, 23, 42, 0.04)', border: '1px solid #eef2f6', borderRadius: '32px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onMouseMove={handleTilt} onMouseLeave={handleTiltReset}>
              <div className="leader-image-wrap">
                <div className="image-bg-box shine-effect" style={{ background: 'rgba(0,0,0,0.05)', borderRadius: '24px', overflow: 'hidden', height: '238px' }}>
                  <img src={team2Image} alt="Mr. Sachin Pande" className="leader-profile-img" style={{ height: 'auto', display: 'block' }} />
                </div>
                <div className="profile-icon-badge">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
              </div>
              <div className="leader-info-wrap">
                <h3 className="leader-name">Mr. Sachin Pande ji</h3>
                <img src={sachinSignature} alt="Mr. Sachin Pande Signature" className="leader-signature" style={{ width: '100%', marginBottom: '0px', display: 'flex', alignItems: 'center' }} />
                <div className="leader-position" >Co-Founder & CTO </div>
                <p className="leader-desc">
                  Sachin drives technology and business development at Virtual Galaxy Infotech, leveraging the latest advancements. Off duty, he enjoys music with a cup of tea in hand.
                </p>
              </div>
            </div>
          </div>
        </div> */}

        <div className="board-section-wrap" >
          <div className="heading-section center mb-0">
            <div className="heading-sub fw-semibold effectFade fadeUp" >
              Leadership That Inspires
            </div>
            <h2 className="heading-title text-dark effectFade fadeRotateX" >
              Board of Directors
            </h2>
            <p className="text-body-2 text-neutral-600 max-w-700 mx-auto mt-16 effectFade fadeUp">
              A team of visionary leaders guiding our organization with expertise, integrity, and commitment to excellence.
            </p>
          </div>

          <div className="board-layout">
            <div className="board-col-left">
              {leftColumnMembers.map((member, i) => (
                <div
                  key={i}
                  className={`board-card anim-on-scroll anim-slide-left`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                  onClick={() => handleCardClick(member)}
                  onMouseMove={handleTilt}
                  onMouseLeave={handleTiltReset}
                >
                  <div className="board-card-img-wrapper shine-effect" style={{ backgroundColor: member.bg }}>
                    <img
                      src={member.img}
                      alt={member.name}
                      style={{ objectFit: member.fit }}
                    />
                  </div>
                  <div className="board-card-info">
                    <span className="board-card-role">{member.role}</span>
                    <h4 className="board-card-name">{member.name}</h4>
                    <p className="board-card-desc">{member.desc}</p>
                  </div>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="board-linkedin-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <i className="icon icon-linkedin-in"></i>
                  </a>
                </div>
              ))}
            </div>

            {/* <div className="board-col-center">
              <div className="board-center-line"></div>

              <div className="board-connector-left board-connector-left-top"></div>
              <div className="board-connector-right board-connector-right-top"></div>
              <div className="board-connector-dot board-dot-left-top"></div>
              <div className="board-connector-dot board-dot-right-top"></div>

              <div className="board-connector-left board-connector-left-mid"></div>
              <div className="board-connector-right board-connector-right-mid"></div>
              <div className="board-connector-dot board-dot-left-mid"></div>
              <div className="board-connector-dot board-dot-right-mid"></div>

              <div className="board-connector-left board-connector-left-bot"></div>
              <div className="board-connector-right board-connector-right-bot"></div>
              <div className="board-connector-dot board-dot-left-bot"></div>
              <div className="board-connector-dot board-dot-right-bot"></div>

              <div className="board-center-circle">
                <svg width="56" height="56" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {Array.from({ length: 24 }).map((_, idx) => {
                    const angle = (idx * 360) / 24;
                    return (
                      <line
                        key={idx}
                        x1="50"
                        y1="50"
                        x2="50"
                        y2="15"
                        stroke="#ffffff"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        transform={`rotate(${angle} 50 50)`}
                      />
                    );
                  })}
                </svg>
              </div>
            </div> */}

            <div className="board-col-right">
              {rightColumnMembers.map((member, i) => (
                <div
                  key={i}
                  className={`board-card anim-on-scroll anim-slide-right`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                  onClick={() => handleCardClick(member)}
                  onMouseMove={handleTilt}
                  onMouseLeave={handleTiltReset}
                >
                  <div className="board-card-img-wrapper shine-effect" style={{ backgroundColor: member.bg }}>
                    <img
                      src={member.img}
                      alt={member.name}
                      style={{ objectFit: member.fit }}
                    />
                  </div>
                  <div className="board-card-info">
                    <span className="board-card-role">{member.role}</span>
                    <h4 className="board-card-name">{member.name}</h4>
                    <p className="board-card-desc">{member.desc}</p>
                  </div>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="board-linkedin-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <i className="icon icon-linkedin-in"></i>
                  </a>
                </div>
              ))}
            </div>


            {lastOddMember && (
              <div className="board-col-full">
                <div
                  className="board-card anim-on-scroll anim-slide-left"
                  onClick={() => handleCardClick(lastOddMember)}
                  onMouseMove={handleTilt}
                  onMouseLeave={handleTiltReset}
                >
                  <div className="board-card-img-wrapper shine-effect" style={{ backgroundColor: lastOddMember.bg }}>
                    <img
                      src={lastOddMember.img}
                      alt={lastOddMember.name}
                      style={{ objectFit: lastOddMember.fit }}
                    />
                  </div>
                  <div className="board-card-info">
                    <span className="board-card-role">{lastOddMember.role}</span>
                    <h4 className="board-card-name">{lastOddMember.name}</h4>
                    <p className="board-card-desc">{lastOddMember.desc}</p>
                  </div>

                  <a href={lastOddMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="board-linkedin-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <i className="icon icon-linkedin-in"></i>
                  </a>
                </div>
              </div>
            )}
          </div>


        </div>

        {/* <div className="vgil-standalone-section bg-red-100" >
          <div className="heading-section center mb-80">
            <div className="board-footer-text effectFade fadeUp">
              <span>Together, our board leads with vision, accountability, and a shared commitment to build a stronger tomorrow.</span>
            </div>
            <h4 className="text-dark effectFade fadeUp vgil-title-responsive">
              Leadership That Drives Our Vision
            </h4>
            <div style={{ width: '80px', height: '4px', background: '#ff4d00', margin: '4px auto 16px auto', borderRadius: '2px' }}></div>
          </div>

          <div className="team-grid-responsive">
            {vgilTeam.map((member, i) => (
              <div key={i} className="anim-on-scroll anim-scale-in" style={{ textAlign: 'center', transitionDelay: `${i * 100}ms` }}>
                <div className="vgil-card-unique shine-effect" onMouseMove={handleTilt} onMouseLeave={handleTiltReset}>
                  <img
                    src={member.img}
                    alt={member.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      padding: '20px 0px 0px 0px',
                      transition: 'all 0.6s ease'
                    }}
                  />
                  <div className="card-overlay" style={{
                    position: 'absolute',
                    bottom: '-100%',
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0, 0, 0, 0.7)',
                    backdropFilter: 'blur(10px)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '20px',
                    transition: 'all 0.5s ease',
                    zIndex: 3
                  }}>
                    <h6 style={{ color: '#fff', fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>{member.name}</h6>
                    <p style={{ color: '#ff4d00', fontSize: '13px', fontWeight: '500', lineHeight: '1.4' }}>{member.role}</p>
                  </div>
                </div>
                <div className="member-info-static">
                  <h6 style={{ color: '#111827', fontSize: '18px', fontWeight: '700', }}>{member.name}</h6>
                  <p style={{ color: '#4b5563', fontSize: '13px', fontWeight: '500', maxWidth: '240px', margin: '0 auto', lineHeight: '1.4' }}>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        <Leadership />

        <style>{`
          .section-team .heading-sub.style-1 {
            background: #ffffff !important;
            color: #e10600 !important;
            box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.05), 0px -3px 0px 0px #e2e8f0 inset, 0px 1px 0px 0px rgba(255, 255, 255, 0.6) inset !important;
          }
          .section-team .heading-sub.style-1::before {
            background-color: #e10600 !important;
          }

          /* ====== SCROLL ANIMATION SYSTEM ====== */
          .anim-on-scroll {
            opacity: 0;
            transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                        transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
            will-change: opacity, transform;
          }

          .anim-slide-left {
            transform: translateX(-60px) translateY(20px);
          }
          .anim-slide-right {
            transform: translateX(60px) translateY(20px);
          }
          .anim-scale-in {
            transform: scale(0.85) translateY(30px);
          }

          .anim-visible {
            opacity: 1 !important;
            transform: translateX(0) translateY(0) scale(1) !important;
          }

          /* ====== 3D TILT CARD ====== */
          .tilt-card {
            transition: transform 0.15s ease-out, box-shadow 0.3s ease !important;
            will-change: transform;
          }

          /* ====== GRADIENT SHINE SWEEP ====== */
          .shine-effect {
            position: relative;
            overflow: hidden;
          }
          .shine-effect::after {
            content: '';
            position: absolute;
            top: -50%;
            left: -60%;
            width: 40%;
            height: 200%;
            background: linear-gradient(
              105deg,
              transparent 40%,
              rgba(255, 255, 255, 0.4) 45%,
              rgba(255, 255, 255, 0.1) 50%,
              transparent 55%
            );
            transform: skewX(-20deg);
            transition: left 0.8s cubic-bezier(0.16, 1, 0.3, 1);
            pointer-events: none;
            z-index: 5;
          }
          .shine-effect:hover::after {
            left: 130%;
          }

          /* ====== FLOATING LOGO ====== */
          .logo-float {
            animation: logoFloatAnim 4s ease-in-out infinite;
          }
          @keyframes logoFloatAnim {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
          }

          /* ====== BOARD CENTER CIRCLE PULSE ====== */
          .board-center-circle {
            animation-name: pulseGlow;
            animation-duration: 3s;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
          }
          @keyframes pulseGlow {
            0%, 100% { box-shadow: 0 10px 30px rgba(225, 6, 0, 0.25); }
            50% { box-shadow: 0 10px 50px rgba(225, 6, 0, 0.5), 0 0 80px rgba(225, 6, 0, 0.15); }
          }

          /* ====== ENHANCED BOARD CARD HOVER ====== */
          .board-card {
            transition: transform 0.15s ease-out, box-shadow 0.4s ease, border-color 0.3s ease !important;
            will-change: transform;
          }
          .board-card:hover .board-card-img-wrapper img {
            transform: scale(1.08);
          }


          /* ====== MOBILE: Disable 3D tilt & heavy animations ====== */
          @media (max-width: 768px) {
            .anim-slide-left,
            .anim-slide-right {
              transform: translateY(30px) !important;
            }
            .anim-scale-in {
              transform: scale(0.95) translateY(20px) !important;
            }
            .anim-visible {
              transform: translateY(0) scale(1) !important;
            }
            .shine-effect::after {
              display: none;
            }
          }

          .social-links-founder {
            display: flex;
            justify-content: center;
            gap: 12px;
            margin-top: 15px;
          }
          .social-links-founder a {
            width: 44px;
            height: 44px;
            background: #f3f4f6;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #111827;
            font-size: 18px;
            transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
            border: 1px solid rgba(255,255,255,0.05);
            box-shadow: 4px 4px 10px rgba(0,0,0,0.05);
          }
          .social-links-founder a:hover {
            background: #ff4d00;
            color: #fff;
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(255, 77, 0, 0.3);
            border-color: rgba(255,255,255,0.2);
          }
          .founder-name-text {
            display: none;
          }
          .founders-container {
            display: flex;
            justify-content: center;
            align-items: stretch;
            flex-wrap: nowrap;
            max-width: 935px;
            margin: 0 auto;
            gap: 34px;
          }
          .founder-item {
            flex: 0 0 357px;
          }
          .founders-container .leader-card-item {
            padding: 27px !important;
            border-radius: 27px !important;
          }
          .founders-container .leader-image-wrap {
            margin-bottom: 24px !important;
          }
          .founders-container .leader-name {
            font-size: 18px !important;
            margin-bottom: 7px !important;
          }
          .founders-container .leader-position {
            font-size: 11px !important;
            margin-bottom: 14px !important;
            min-height: unset !important;
          }
          .founders-container .leader-desc {
            font-size: 12px !important;
          }
          .founders-container .leader-logo-center-wrap {
            flex: 0 0 136px !important;
          }
          .founders-container .logo-circle-container {
            width: 128px !important;
            height: 128px !important;
            padding: 20px !important;
          }
          .founders-container .leader-signature {
            max-height: 50px !important;
            width: auto !important;
            margin: 0 auto !important;
          }

          
          /* Board of Directors Styles */
          .board-layout {
            display: grid;
            grid-template-columns: 1fr 1fr;
            column-gap:24px;
            row-gap:5px;
            position: relative;
            align-items: start;
            max-width: 1200px;
            margin: 0 auto;
          }

          .board-col-left {
            display: flex;
            flex-direction: column;
            gap: 5px;
          }

          .board-col-right {
            display: flex;
            flex-direction: column;
            gap: 5px;
          }

          .board-col-full {
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
}

.board-col-full .board-card {
  width: 100%;
  max-width: calc(50% - 12px); /* matches a single column's width given the 24px gap */
}

          .board-col-center {
            position: relative;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 600px;
          }

          .board-center-line {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 50%;
            width: 1px;
            border-left: 1px dashed rgba(225, 6, 0, 0.3);
            transform: translateX(-50%);
            z-index: 1;
          }

          .board-center-circle {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background: #e10600;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 10px 30px rgba(225, 6, 0, 0.25);
            z-index: 3;
          }

          .board-center-circle svg {
            animation: spin-sunburst 30s linear infinite;
          }

          @keyframes spin-sunburst {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          .board-connector-left, .board-connector-right {
            position: absolute;
            height: 1px;
            border-top: 1px dashed rgba(225, 6, 0, 0.3);
            z-index: 1;
          }

          .board-connector-left-top { top: 15%; left: 0; width: 50%; }
          .board-connector-right-top { top: 15%; right: 0; width: 50%; }
          .board-connector-left-mid { top: 50%; left: 0; width: 50%; }
          .board-connector-right-mid { top: 50%; right: 0; width: 50%; }
          .board-connector-left-bot { top: 85%; left: 0; width: 50%; }
          .board-connector-right-bot { top: 85%; right: 0; width: 50%; }

          .board-connector-dot {
            position: absolute;
            width: 6px;
            height: 6px;
            background: #e10600;
            border-radius: 50%;
            transform: translateY(-50%);
            z-index: 2;
          }

          .board-dot-left-top { top: 15%; left: 0; }
          .board-dot-right-top { top: 15%; right: 0; }
          .board-dot-left-mid { top: 50%; left: 0; }
          .board-dot-right-mid { top: 50%; right: 0; }
          .board-dot-left-bot { top: 85%; left: 0; }
          .board-dot-right-bot { top: 85%; right: 0; }

          .board-card {
            background: #ffffff;
            border: 1px solid #eef2f6;
            border-radius: 24px;
            padding: 24px;
            display: flex;
            align-items: center;
            gap: 20px;
            box-shadow: 0 10px 30px rgba(15, 23, 42, 0.02);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            min-height: 180px;
          }

          .board-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 20px 40px rgba(15, 23, 42, 0.06);
            border-color: rgba(225, 6, 0, 0.15);
          }

          .board-card-img-wrapper {
            width: 120px;
            height: 120px;
            border-radius: 16px;
            overflow: hidden;
            flex-shrink: 0;
          }

          .board-card-img-wrapper img {
            width: 100%;
            height: 100%;
            transition: all 0.5s ease;
          }

          .board-card:hover .board-card-img-wrapper img {
            transform: scale(1.06);
          }

          .board-card-info {
            border-left: 2px solid #e10600;
            padding-left: 18px;
            text-align: left;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .board-card-role {
            font-size: 11px;
            font-weight: 800;
            color: #e10600;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 4px;
          }

          .board-card-name {
            font-size: 18px;
            font-weight: 700;
            color: #0f172a;
            margin-bottom: 8px;
            line-height: 1.3;
          }

          .board-card-desc {
            font-size: 13px;
            color: #64748b;
            line-height: 1.5;
            margin: 0;
          }

          .board-linkedin-link {
            position: absolute;
            top: 15px;
            right: 15px;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: #f8fafc;
            color: #94a3b8;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            border: 1px solid #e2e8f0;
          }

          .board-card:hover .board-linkedin-link {
            background: #0077b5;
            color: #ffffff;
            border-color: #0077b5;
            transform: scale(1.1);
            box-shadow: 0 4px 10px rgba(0, 119, 181, 0.2);
          }

          @media (max-width: 1199px) {
            .founders-container {
              gap: 20px;
            }
            .founder-item {
              flex: 0 0 323px;
            }
            
          }

          @media (max-width: 991px) {
            .founders-container {
              flex-wrap: wrap;
              gap: 40px;
            }
            .founder-item {
              flex: 0 0 100%;
              max-width: 425px;
            }
            .board-layout {
              grid-template-columns: 1fr;
              gap: 30px;
            }
            .board-col-left, .board-col-right {
              gap: 30px;
            }

            .board-col-full .board-card {   /* add this line */
  max-width: 100%;
}

            .board-col-center {
              display: none;
            }
            .board-connector-left, .board-connector-right,
            .board-connector-dot, .board-center-line {
              display: none !important;
            }
            .board-card {
              min-height: auto;
            }
          }

          @media (max-width: 640px) {
            .board-card {
              flex-direction: column;
              text-align: center;
              align-items: center;
              padding: 30px 20px 24px;
            }
            .board-card-info {
              border-left: none;
              border-top: 2px solid #e10600;
              padding-left: 0;
              padding-top: 15px;
              margin-top: 10px;
              align-items: center;
              text-align: center;
            }
          }

          @media (max-width: 768px) {
            .founders-container {
              display: flex !important;
              flex-direction: row !important;
              flex-wrap: nowrap !important;
              justify-content: space-between !important;
              align-items: center !important;
              gap: 8px !important;
              padding: 0 12px !important;
            }

            .founder-item {
              flex: 1 1 120px !important;
              max-width: 140px !important;
            }

            .founder-item .leader-card-item {
              padding: 12px !important;
              border-radius: 16px !important;
              background: #ffffff !important;
              box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03) !important;
              border: 1px solid #e5e7eb !important;
            }

            .founder-item .leader-card-item .image-bg-box {
              margin-bottom: 10px !important;
              border-radius: 12px !important;
              aspect-ratio: 1 / 1 !important;
              overflow: hidden;
            }

            .founder-item .leader-card-item .image-bg-box img {
              width: 100% !important;
              height: 100% !important;
              object-fit: cover !important;
            }

            .founder-item .leader-card-item .profile-icon-badge {
              display: none !important;
            }

            .founder-item .leader-card-item .leader-divider,
            .founder-item .leader-card-item .leader-desc,
            .founder-item .leader-card-item .leader-signature {
              display: none !important;
            }

            .founder-item .leader-card-item .leader-name {
              display: block !important;
              font-size: 11px !important;
              font-weight: 700 !important;
              margin-bottom: 4px !important;
              color: #111827 !important;
              text-align: center !important;
            }

            .founder-item .leader-card-item .leader-position {
              font-size: 9px !important;
              line-height: 1.3 !important;
              margin-bottom: 0 !important;
              color: #ff4d00 !important;
              text-align: center !important;
              min-height: unset !important;
            }



            /* Mobile spacing overrides */
            .section-team {
              // padding: 45px 0 !important;
            }
            .mb-120 {
              margin-bottom: 30px !important;
            }
            .mb-64 {
              margin-bottom: 20px !important;
            }
            .mb-80 {
              margin-bottom: 24px !important;
            }
            .board-section-wrap {
              // margin-top: 40px !important;
              // margin-bottom: 40px !important;
            }
            h2.heading-title {
              font-size: 26px !important;
            }

            /* Board of Directors Mobile Grid Styles */
            .board-layout {
              display: grid !important;
              grid-template-columns: 1fr 1fr !important;
              gap: 12px !important;
              padding: 0 12px !important;
            }
            .board-col-left, .board-col-right {
              display: flex !important;
              flex-direction: column !important;
              gap: 12px !important;
              width: 100% !important;
            }
            .board-card {
              flex-direction: column !important;
              align-items: center !important;
              text-align: center !important;
              padding: 12px 4px !important;
              // min-height: 180px !important;
              height: 100% !important;
              cursor: pointer !important;
              border-radius: 16px !important;
              gap: 10px !important;
              box-shadow: 0 4px 15px rgba(15, 23, 42, 0.04) !important;
              border: 1px solid #eef2f6 !important;
            }
            .board-card-img-wrapper {
              // width: 70px !important;
              // height: 70px !important;
              border-radius: 12px !important;
            }
            .board-card-info {
              border-left: none !important;
              border-top: none !important;
              padding-left: 0 !important;
              padding-top: 0 !important;
              margin-top: 6px !important;
              align-items: center !important;
              text-align: center !important;
            }
            .board-card-role {
              font-size: 9px !important;
              margin-bottom: 2px !important;
              line-height:1.4;
            }
            .board-card-name {
              font-size: 13px !important;
              font-weight: 700 !important;
              margin-bottom: 4px !important;
            }
            .board-card-desc {
              display: none !important;
            }
            .board-linkedin-link {
              position: absolute !important;
              top: 10px !important;
              right: 10px !important;
              width: 26px !important;
              height: 26px !important;
              font-size: 11px !important;
            }

           
                      }

        
          .leader-signature {
            display: block !important;
            height: 80px;
            width: auto;
            object-fit: contain;
          
          }

          /* Modal Overlay Styles */
          .board-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(15, 23, 42, 0.6);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 99999;
            padding: 20px;
            animation: boardModalFadeIn 0.3s ease-out;
          }

          .board-modal-card {
            background: #ffffff;
            border-radius: 28px;
            width: 100%;
            max-width: 420px;
            position: relative;
            overflow: hidden;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 36px 24px 28px;
            border: 1px solid rgba(225, 6, 0, 0.1);
            animation: boardModalSlideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
            text-align: center;
          }

          .board-modal-close {
            position: absolute;
            top: 16px;
            right: 16px;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background: #f1f5f9;
            border: none;
            font-size: 22px;
            line-height: 1;
            color: #64748b;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.2s ease;
            z-index: 10;
          }

          .board-modal-close:hover {
            background: #e2e8f0;
            color: #0f172a;
          }

          .board-modal-img-wrapper {
            width: 140px;
            height: 140px;
            border-radius: 24px;
            overflow: hidden;
            margin-bottom: 20px;
            border: 2px solid #e10600;
            padding: 4px;
            background: #fff;
          }

          .board-modal-img-wrapper img {
            width: 100%;
            height: 100%;
            border-radius: 18px;
          }

          .board-modal-content {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .board-modal-role {
            font-size: 11px;
            font-weight: 800;
            color: #e10600;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            margin-bottom: 8px;
          }

          .board-modal-name {
            font-size: 22px;
            font-weight: 800;
            color: #0f172a;
            margin-bottom: 16px;
            line-height: 1.2;
          }

          .board-modal-desc {
            font-size: 14px;
            color: #475569;
            line-height: 1.6;
            margin-bottom: 24px;
            padding: 0 10px;
          }

          .board-modal-linkedin {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: #0077b5;
            color: #ffffff !important;
            font-size: 14px;
            font-weight: 600;
            padding: 12px 24px;
            border-radius: 50px;
            transition: all 0.3s ease;
            text-decoration: none;
            box-shadow: 0 4px 12px rgba(0, 119, 181, 0.25);
            border: 1px solid #0077b5;
          }

          .board-modal-linkedin:hover {
            background: #006097;
            border-color: #006097;
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(0, 119, 181, 0.35);
          }

          @keyframes boardModalFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes boardModalSlideUp {
            from {
              opacity: 0;
              transform: scale(0.9) translateY(20px);
            }
            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }

           @media (max-width: 399px){
           .board-card{
           min-height: 228px}
           }
        `}

        </style>

        {/* Detail Modal for Mobile */}
        {activeDirector && (
          <div className="board-modal-overlay" onClick={() => setActiveDirector(null)}>
            <div className="board-modal-card" onClick={(e) => e.stopPropagation()}>
              <button className="board-modal-close" onClick={() => setActiveDirector(null)}>
                &times;
              </button>
              <div className="board-modal-img-wrapper" style={{ backgroundColor: activeDirector.bg }}>
                <img
                  src={activeDirector.img}
                  alt={activeDirector.name}
                  style={{ objectFit: activeDirector.fit }}
                />
              </div>
              <div className="board-modal-content">
                <span className="board-modal-role">{activeDirector.role}</span>
                <h3 className="board-modal-name">{activeDirector.name}</h3>
                <p className="board-modal-desc">{activeDirector.desc}</p>
                <a
                  href={activeDirector.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="board-modal-linkedin"
                >
                  <i className="icon icon-linkedin-in"></i> Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div >
  );
}

export default AboutTeamSection;
