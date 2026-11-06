import { useEffect, useRef, useState } from 'react';
import './Leadership.css';

// VGIL Team Members
// NOTE: adjust these relative paths if Leadership.jsx lives in a different folder
// than AboutTeamSection.jsx.
import alhadImg from '../../assets/home/ownwer-img/Alhad_Hardas.jpg';
import anilImg from '../../assets/home/ownwer-img/Anil_Katwale.jpg';
import bharatImg from '../../assets/home/ownwer-img/bharat-zade.jpg';
import harshjitImg from '../../assets/home/ownwer-img/harshjit-deshmukh.jpg';
import ninadImg from '../../assets/home/ownwer-img/ninad-mairal.jpg';
import nitendraImg from '../../assets/home/ownwer-img/Nitendra_Bisen.jpg';
import sachinBImg from '../../assets/home/ownwer-img/sachin_burghate.jpg';
import satishImg from '../../assets/home/ownwer-img/Satish_Kukde.jpg';
import anjaliImg from '../../assets/home/ownwer-img/anjali-padhe.png';
import abhayImg from '../../assets/home/ownwer-img/abhay-chaudhary.png'

const vgilTeam = [
  { name: 'Mr. Harshjit Deshmukh', role: 'Director - Domestic Business Development', img: harshjitImg },
  { name: 'Mr. Bharat Zade', role: 'Director - Operations & Digital Transformation', img: bharatImg },
  { name: 'Mr. Ninad Mairal', role: 'Director - International Business Development', img: ninadImg },
  { name: 'Mr. Sachin Burghate', role: 'Director - Technical (BFSI)', img: sachinBImg },
  { name: 'Mr. Alhad Hardas', role: 'Director - Banking Domain Services', img: alhadImg },
  { name: 'Mr. Satish Kukde', role: 'Principal Database Architect', img: satishImg },
  { name: 'Mr. Anil Katwale', role: 'Principal Solution Architect', img: anilImg },
  { name: 'Mr. Nitendra Bisen', role: 'Principal Service Strategist', img: nitendraImg },
  { name: 'Mrs. Anjali Padhye', role: 'Company Secretary and Compliance Officer', img: anjaliImg },
  { name: 'Mr. Abhay Chaudhary ', role: 'Chief Product Officer', img: abhayImg },

];

// Seconds for one full revolution. Higher = slower.
const ORBIT_DURATION = 80;

function Leadership() {
  const stageRef = useRef(null);
  const [revealed, setRevealed] = useState(false); // entrance animation (once)
  const [inView, setInView] = useState(false); // pause the orbit while off-screen
  const [hovered, setHovered] = useState(null); // mouse / keyboard focus
  const [pinned, setPinned] = useState(null); // tap / click (touch friendly)

  const active = pinned ?? hovered;
  const activeMember = active !== null ? vgilTeam[active] : null;
  const paused = !inView || active !== null;

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) setRevealed(true);
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const mouseOnly = (fn) => (e) => {
    if (e.pointerType === 'mouse') fn();
  };

  return (
    <div className="vgil-standalone-section">
      <div className="heading-section center mb-80 vgil-heading">
        <div className="board-footer-text effectFade fadeUp">
          <span>
            Together, our board leads with vision, accountability, and a shared commitment to build a stronger tomorrow.
          </span>
        </div>
        {/* <h4 className="text-dark effectFade fadeUp vgil-title-responsive">
          Leadership That Drives Our Vision
        </h4> */}
        <div className="vgil-title-underline"></div>
      </div>

      <div
        ref={stageRef}
        className={`orbit-stage${revealed ? ' is-revealed' : ''}${paused ? ' is-paused' : ''}`}
        style={{ '--n': vgilTeam.length, '--spin': `${ORBIT_DURATION}s` }}
        onClick={() => setPinned(null)}
      >
        {/* Static orbit tracks */}
        <div className="orbit-track" />
        <div className="orbit-track orbit-track--inner" />

        {/* Centre: default message, swaps to the active member's details */}
        <div className="orbit-center" aria-live="polite">
          {activeMember ? (
            <div className="orbit-center-content" key={activeMember.name}>
              <h5 className="orbit-member-name">{activeMember.name}</h5>
              <p className="orbit-member-role">{activeMember.role}</p>
            </div>
          ) : (
            <div className="orbit-center-content" key="default">
              <span className="orbit-eyebrow">Our Leaders</span>
              <h5 className="orbit-heading">
                Leadership That Drives <em>Our Vision</em>
              </h5>
            </div>
          )}
        </div>

        {/* Rotating layer */}
        <div className="orbit-ring">
          <div className="orbit-comet" />

          {vgilTeam.map((member, i) => {
            const state = active === null ? '' : active === i ? ' is-active' : ' is-dim';
            return (
              <div className="orbit-item" style={{ '--i': i }} key={member.name}>
                <div className={`orbit-counter${state}`}>
                  <button
                    type="button"
                    className="orbit-card"
                    aria-label={`${member.name}, ${member.role}`}
                    aria-pressed={pinned === i}
                    onPointerEnter={mouseOnly(() => setHovered(i))}
                    onPointerLeave={mouseOnly(() => setHovered(null))}
                    onFocus={() => setHovered(i)}
                    onBlur={() => setHovered(null)}
                    onClick={(e) => {
                      e.stopPropagation();
                      setPinned(pinned === i ? null : i);
                    }}
                  >
                    <img src={member.img.src} alt="" draggable="false" />
                  </button>

                  <div className="orbit-label">
                    <strong>{member.name}</strong>
                    {/* <span>{member.role}</span> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Leadership;