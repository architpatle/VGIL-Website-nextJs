"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import ContactSection from '../components/home/ContactSection';
import {
  Users,
  FileText,
  UserCheck,
  Handshake,
  ChevronRight,
  ArrowLeft,
  ArrowUpRight
} from 'lucide-react';

// Import actual images from assets
import avinashShendeImg from '../assets/home/ownwer-img/avinash-shende-clear-bg.png';
import sachinPandeImg from '../assets/home/ownwer-img/sachin-pande-clear-bg.png';
import anjaliPadhyeImg from '../assets/home/ownwer-img/anjali-padhe-2.png';
import alhadImg from '../assets/home/ownwer-img/Alhad_Hardas.jpg';
import anilImg from '../assets/home/ownwer-img/Anil_Katwale.jpg';
import bharatImg from '../assets/home/ownwer-img/bharat-zade.jpg';
import harshjitImg from '../assets/home/ownwer-img/harshjit-deshmukh.jpg';
import ninadImg from '../assets/home/ownwer-img/ninad-mairal.jpg';
import nitendraImg from '../assets/home/ownwer-img/Nitendra_Bisen.jpg';
import sachinBImg from '../assets/home/ownwer-img/sachin_burghate.jpg';
import satishImg from '../assets/home/ownwer-img/Satish_Kukde.jpg';
import mangeshImg from '../assets/home/ownwer-img/mangesh-more.png';



// Import laptop/charts illustration from Products assets
// import solutionOverviewImg from '../assets/Products-img/conversational-AI-img/solution-overview.png';
import imgBoardManagement from '../assets/Investors-Info-img/Board_Managment.png';
import './BoardManagement.css';

const BOARD_DIRECTORS_COMPOSITION = [
  {
    name: 'Mr. Avinash Narayanrao Shende',
    designation: 'Chairman, Executive Director & Chief Financial Officer',
  },
  {
    name: 'Mr. Sachin Purushottam Pande',
    designation: 'Managing Director & Chief Technology Officer',
  },
  {
    name: 'Mrs. Bhanupriya Nikhil Thakur',
    designation: 'Non-Executive, Independent Woman Director',
  },
  {
    name: 'Mr. Ayush Munnalal Sharma',
    designation: 'Non-Executive Independent Director',
  },
  {
    name: 'Mr. Asit Oberoi',
    designation: 'Professional, Non-Executive Director',
  },
  {
    name: 'Mr. Jaideep Narayan Pawar',
    designation: 'Non-Executive Independent Director',
  },
];

const BOARD_COMMITTEES_COMPOSITION = [
  {
    title: 'AUDIT COMMITTEE',
    columns: ['Name of Director', 'Designation', 'Position in Committee'],
    rows: [
      {
        name: 'Mrs. Bhanupriya Nikhil Thakur',
        designation: 'Independent Director',
        position: 'Chairperson',
      },
      {
        name: 'Mr. Ayush Munnalal Sharma',
        designation: 'Independent Director',
        position: 'Member',
      },
      {
        name: 'Mr. Jaideep Narayan Pawar',
        designation: 'Independent Director',
        position: 'Member',
      },
    ],
  },
  {
    title: 'NOMINATION AND REMUNERATION COMMITTEE',
    columns: ['Name of Director', 'Designation', 'Position in Committee'],
    rows: [
      {
        name: 'Mr. Ayush Munnalal Sharma',
        designation: 'Independent Director',
        position: 'Chairperson',
      },
      {
        name: 'Mrs. Bhanupriya Nikhil Thakur',
        designation: 'Independent Director',
        position: 'Member',
      },
      {
        name: 'Mr. Asit Oberoi',
        designation: 'Non-Executive Director',
        position: 'Member',
      },
    ],
  },
  {
    title: 'STAKEHOLDERS’ RELATIONSHIP COMMITTEE',
    columns: [
      'Name of Director',
      'Nature of Directorship',
      'Designation in Committee',
    ],
    rows: [
      {
        name: 'Mr. Jaideep Narayan Pawar',
        designation: 'Independent Director',
        position: 'Chairperson',
      },
      {
        name: 'Mr. Avinash Narayanrao Shende',
        designation: 'Executive Director',
        position: 'Member',
      },
      {
        name: 'Mr. Sachin Purushottam Pande',
        designation: 'Executive Director',
        position: 'Member',
      },
    ],
  },
  {
    title: 'CORPORATE SOCIAL RESPONSIBILITY COMMITTEE',
    columns: [
      'Name of Director',
      'Nature of Directorship',
      'Designation in Committee',
    ],
    rows: [
      {
        name: 'Mr. Avinash Narayanrao Shende',
        designation: 'Executive Director',
        position: 'Chairman',
      },
      {
        name: 'Mr. Sachin Purushottam Pande',
        designation: 'Executive Director',
        position: 'Member',
      },
      {
        name: 'Mr. Jaideep Narayan Pawar',
        designation: 'Independent Director',
        position: 'Member',
      },
    ],
  },
];

// High-fidelity realistic mock data for subpages using imported images
const SUBPAGES_DATA = {
  directors: {
    title: "Board of Directors",
    subtitle: "The strategic governing body guiding Virtual Galaxy towards sustainable growth and market leadership.",
    items: [
      {
        name: "Mr. Avinash Narayanrao Shende",
        role: "Chairman, Executive Director & Chief Financial Officer",
        img: avinashShendeImg,
        linkedin: "https://www.linkedin.com/in/avinash-shende-a09b863/"
      },
      {
        name: "Mr. Sachin Purushottam Pande",
        role: "Managing Director & Chief Technology Officer",
        img: sachinPandeImg,
        linkedin: "https://www.linkedin.com/in/sachin-pande-317620157/"
      },
      {
        name: "Mrs. Bhanupriya Nikhil Thakur",
        role: "Non-Executive, Independent Woman Director",
        img: "/assets/images/about/founders/bhanupriya-clear-bg.png",
        linkedin: "https://www.linkedin.com/in/fcs-bhanupriya-sharma-thakur/"
      },
      {
        name: "Mr. Ayush Munnalal Sharma",
        role: "Non-Executive Independent Director",
        img: "/assets/images/about/founders/ayush-sharma-clear-bg.png",
        linkedin: "https://www.linkedin.com/in/ayush-sharma-1425a2189/"
      },
      {
        name: "Mr. Asit Oberoi",
        role: "Professional, Non-Executive Director",
        img: "/assets/images/about/founders/asit-oberoi.jpg",
        linkedin: "https://www.linkedin.com/in/asit-oberoi-88910120/"
      },
      {
        name: "Mr. Jaideep Narayan Pawar",
        role: "Non-Executive Independent Director",
        img: "/assets/images/about/founders/jaideep-pawar.jpg",
        linkedin: "https://www.linkedin.com/in/jaideep-pawar/"
      },
      {
        name: "Mr. Sunil Kulkarni",
        role: "Professional Non-Executive Director",
        img: "/assets/images/about/founders/sunil-kulkarni.png",
        linkedin: "https://www.linkedin.com/in/sunil-kulkarni-12a3291/"
      }
    ]
  },
  committees: {
    title: "Committees of the Board",
    subtitle: "Specialized board committees established to ensure transparent governance and audit rigor.",
    items: [
      {
        name: "Audit Committee",
        purpose: "Oversees financial reporting, internal controls, statutory audits, and regulatory compliance.",
        members: [
          { name: "Mr. Ramesh Kumar", role: "Chairman (Independent)" },
          { name: "Mrs. Shaila S. Deshmukh", role: "Member (Independent)" },
          { name: "Mr. Avinash Shende", role: "Member (Executive)" }
        ]
      },
      {
        name: "Nomination & Remuneration Committee",
        purpose: "Formulates criteria for board evaluations, key appointments, and compensation policies.",
        members: [
          { name: "Mrs. Shaila S. Deshmukh", role: "Chairperson (Independent)" },
          { name: "Mr. Ramesh Kumar", role: "Member (Independent)" },
          { name: "Mr. Avinash Shende", role: "Member (Executive)" }
        ]
      },
      {
        name: "Stakeholders Relationship Committee",
        purpose: "Reviews and resolves investor grievances, ensuring seamless relations and communications.",
        members: [
          { name: "Mr. Ramesh Kumar", role: "Chairman (Independent)" },
          { name: "Mr. Sachin Pande", role: "Member (Executive)" },
          { name: "Mrs. Shaila S. Deshmukh", role: "Member (Independent)" }
        ]
      }
    ]
  },
  "key-personnel": {
    title: "Key Managerial Personnel",
    subtitle: "The executive leadership steering daily operations, business development, and software delivery.",
    items: [
      {
        name: "Mr. Avinash Narayanrao Shende",
        role: "Chairman, Executive Director & Chief Financial Officer",
        bio: "Directs overall corporate operations, budget allocation, and investor affairs with a focus on growth and strategic banking innovation.",
        img: avinashShendeImg,
        linkedin: "https://www.linkedin.com/in/avinash-shende-a09b863/"
      },
      {
        name: "Mr. Sachin Purushottam Pande",
        role: "Managing Director & Chief Technology Officer",
        bio: "Oversees technology engineering, core systems architecture, and IT operations, driving digital banking suites and technological advancements.",
        img: sachinPandeImg,
        linkedin: "https://www.linkedin.com/in/sachin-pande-317620157/"
      },
      {
        name: "Mrs. Anjali Padhye",
        role: "Company Secretary & Compliance Officer",
        bio: "Manages corporate secretarial affairs, legal compliance, and board listings, ensuring the highest standards of corporate governance.",
        img: anjaliPadhyeImg,
        linkedin: "https://www.linkedin.com/in/anjali-padhye-118a58240/"
      }
    ]
  },
  advisors: {
    title: "Advisors & Domain Specialists",
    subtitle: "Eminent industry experts providing advisory support in emerging technologies and compliance.",
    items: [
      {
        name: "CS Mangesh More",
        role: "Chief Advisor to the Company",
        img: mangeshImg
      },
      // {
      //   name: "Nitendra Bisen",
      //   role: "Principal Service Strategist",
      //   domain: "IT Services Strategy",
      //   bio: "Aligning IT consulting and enterprise architectures with next-generation digital trends.",
      //   img: nitendraImg
      // },
      // {
      //   name: "Anil Katwale",
      //   role: "Principal Solution Architect",
      //   domain: "Enterprise Architecture",
      //   bio: "Design lead for highly scalable banking cores, API integrations, and cloud operations.",
      //   img: anilImg
      // },
      // {
      //   name: "Satish Kukde",
      //   role: "Principal Database Architect",
      //   domain: "Database Architecture",
      //   bio: "Specializes in high-transaction DB tuning, disaster recovery, and data security compliance.",
      //   img: satishImg
      // }
    ]
  }
};

const CARDS_CONFIG = [
  {
    key: "directors",
    title: "Board of Directors",
    desc: "Our guiding governing body providing oversight, strategic direction, and leadership to Virtual Galaxy.",
    icon: Users
  },
  {
    key: "committees",
    title: "Committees of Board",
    desc: "Specialized committees ensuring regulatory compliance, corporate audit excellence, and ethical governance frameworks.",
    icon: FileText
  },
  {
    key: "key-personnel",
    title: "Key Managerial Personnel",
    desc: "The executive operational leaders executing corporate strategies and spearheading technology innovation daily.",
    icon: UserCheck
  },
  {
    key: "advisors",
    title: "Advisors",
    desc: "Industry experts and visionary consultants guiding BFSI and technology domain strategy.",
    icon: Handshake
  }
];

function BoardManagement({ subpage }) {
  const router = useRouter();

  const currentSubpageData = subpage ? SUBPAGES_DATA[subpage] : null;

  return (
    <div className="board-mgmt-wrapper">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-glow-1"></div>
        <div className="hero-glow-2"></div>
        <div className="container">
          {/* Breadcrumb row */}
          <div className="row mb-3">
            <div className="col-12 text-left">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb bg-transparent p-0 m-0" style={{ fontSize: '13px' }}>
                  <li className="breadcrumb-item"><Link href="/" className="text-secondary hover:text-[#ff4d00] transition-colors no-underline">Home</Link></li>
                  <li className="breadcrumb-item"><Link href="/investors/board-and-management" className="text-secondary hover:text-[#ff4d00] transition-colors no-underline">Investors</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {subpage ? (
                      <Link href="/investors/board-and-management" className="text-secondary hover:text-[#ff4d00] transition-colors no-underline">Board & Management</Link>
                    ) : (
                      <span className="text-primary font-weight-bold">Board & Management</span>
                    )}
                  </li>
                  {subpage && (
                    <li className="breadcrumb-item active" aria-current="page">
                      <span className="text-primary font-weight-bold">{currentSubpageData?.title}</span>
                    </li>
                  )}
                </ol>
              </nav>
            </div>
          </div>

          <div className="row align-items-center mt-3">
            {/* Left side text */}
            <div className="col-lg-6 col-12 text-left effect-fade-up">
              <div className="tag-badge">
                <span className="tag-dot" />
                <span className="tag-text">Corporate Governance</span>
              </div>
              <h1 className="hero-title">
                {subpage ? (
                  <>
                    <span>{currentSubpageData?.title.split(' ')[0]}</span>{' '}
                    <span className="highlight">{currentSubpageData?.title.split(' ').slice(1).join(' ')}</span>
                  </>
                ) : (
                  <>
                    Board & <span className="highlight">Management</span>
                  </>
                )}
                <div className="hero-title-underline"></div>
              </h1>
              <p className="hero-desc">
                {subpage
                  ? currentSubpageData?.subtitle
                  : "Meet the visionary leadership and expert advisors orchestrating sustainable growth and technological excellence at Virtual Galaxy."
                }
              </p>

              <div className="mt-4 d-flex gap-3">
                {subpage ? (
                  <button
                    onClick={() => router.push('/investors/board-and-management')}
                    className="btn-outline-cta"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Overview
                  </button>
                ) : (
                  <Link
                    href="/contact"
                    className="btn-premium-cta"
                  >
                    Get in Touch
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>

            {/* Right side illustration */}
            <div className="col-lg-6 col-12 text-center mt-5 mt-lg-0 effect-fade-up" style={{ animationDelay: '0.15s' }}>
              <motion.div
                className="hero-img-wrap"
                // animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              >
                <img
                  src={imgBoardManagement.src}
                  alt="Board & Management Illustration"
                />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="explore-section section-spacing-lg">
        <div className="container">
          <AnimatePresence mode="wait">
            {!subpage ? (
              /* CARDS OVERVIEW DASHBOARD */
              <div>

                <motion.div
                  key="dashboard"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="row g-4"
                >
                  {CARDS_CONFIG.map((card, index) => {
                    const IconComponent = card.icon;
                    return (
                      <div key={card.key} className="col-lg-3 col-md-6 col-12 effect-fade-up" style={{ animationDelay: `${index * 0.08}s` }}>
                        <Link
                          href={`/investors/board-and-management/${card.key}`}
                          className="mgmt-card"
                        >
                          <div>
                            <div className="mgmt-card-icon-wrap mx-auto">
                              <IconComponent className="w-6 h-6" />
                            </div>
                            <h3 className="mgmt-card-title">{card.title}</h3>
                            <p className="mgmt-card-desc">{card.desc}</p>
                          </div>
                          <div className="mgmt-card-action">
                            View Profile
                            <ChevronRight className="w-4 h-4" />
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </motion.div>
              </div>
            ) : (
              /* SUBPAGE DETAILS GRID */
              <motion.div
                key={subpage}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="subpage-section"
              >
                <div className="subpage-container">

                  {/* Detailed Title */}
                  {/* <div className={`${subpage === 'directors' ? 'directors-title-wrap' : 'subpage-title-wrap'} effect-fade-up`}>
                    <h2 className="subpage-heading">{currentSubpageData?.title}</h2>
                    {subpage !== 'directors' && (
                      <p className="subpage-subheading">{currentSubpageData?.subtitle}</p>
                    )}
                  </div> */}

                  {/* Board of Directors View */}
                  {subpage === 'directors' && (
                    <div className="directors-list mt-4">
                      {currentSubpageData?.items.map((person, idx) => {
                        const isEven = idx % 2 === 0;
                        return (
                          <div
                            key={idx}
                            className={`director-row-card effect-fade-up ${isEven ? 'flex-row' : 'flex-row-reverse text-right'}`}
                            style={{ animationDelay: `${idx * 0.08}s` }}
                          >
                            <div className="director-row-avatar-wrap">
                              {person.img ? (
                                <img src={typeof person.img === 'string' ? person.img : person.img.src} alt={person.name} className="director-row-img" />
                              ) : (
                                <div className="director-row-initials">
                                  {person.name.split(' ').filter(Boolean).map(n => n[0]).join('')}
                                </div>
                              )}
                            </div>
                            <div className="director-row-info">
                              <h4 className="director-row-name">{person.name}</h4>
                              <span className="director-row-role">{person.role}</span>
                              <div className={`director-row-social-wrap ${isEven ? 'justify-content-start' : 'justify-content-end'}`}>
                                {person.linkedin && (
                                  <a
                                    href={person.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="director-linkedin-btn"
                                    aria-label={`LinkedIn profile of ${person.name}`}
                                  >
                                    <i className="icon icon-linkedin-in" style={{ fontSize: '18px' }}></i>
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Committees of Board View */}
                  {/* Committees of Board View */}
                  {subpage === 'committees' && (
                    <div className="composition-page">



                      {/* =====================================================
        COMPOSITION OF BOARD OF DIRECTORS
        ===================================================== */}
                      {/* <section className="composition-board-section effect-fade-up">
                        <div className="composition-heading">
                          <span className="composition-eyebrow">
                            VIRTUAL GALAXY INFOTECH LIMITED
                          </span>

                          <h2>COMPOSITION OF BOARD OF DIRECTORS</h2>

                          <div className="composition-heading-line">
                            <span></span>
                            <i></i>
                            <span></span>
                          </div>
                        </div>

                        <div className="composition-table-card">
                          <div className="composition-table-wrap">
                            <table className="composition-table">
                              <thead>
                                <tr>
                                  <th>Name of Director</th>
                                  <th>Designation</th>
                                </tr>
                              </thead>

                              <tbody>
                                {BOARD_DIRECTORS_COMPOSITION.map((director, index) => (
                                  <tr key={index}>
                                    <td>{director.name}</td>
                                    <td>{director.designation}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </section> */}


                      {/* =====================================================
        COMPOSITION OF BOARD COMMITTEES
        ===================================================== */}
                      <section className="board-committees-section">

                        <div className="composition-heading committees-heading">
                          <span className="composition-eyebrow">
                            VIRTUAL GALAXY INFOTECH LIMITED
                          </span>
                          <h2>COMPOSITION OF BOARD COMMITTEES</h2>

                          <div className="composition-heading-line">
                            <span></span>
                            <i></i>
                            <span></span>
                          </div>
                        </div>


                        {/* Committee Tables */}
                        <div className="committee-tables-list">

                          {BOARD_COMMITTEES_COMPOSITION.map((committee, index) => (
                            <article
                              key={committee.title}
                              className="committee-table-card effect-fade-up"
                              style={{
                                animationDelay: `${index * 0.08}s`,
                              }}
                            >
                              <div className="committee-table-header">
                                <div className="committee-index">
                                  {String(index + 1).padStart(2, '0')}
                                </div>

                                <h3>{committee.title}</h3>
                              </div>

                              <div className="composition-table-wrap">
                                <table className="composition-table committee-composition-table">
                                  <thead>
                                    <tr>
                                      {committee.columns.map((column, columnIndex) => (
                                        <th key={columnIndex}>
                                          {column}
                                        </th>
                                      ))}
                                    </tr>
                                  </thead>

                                  <tbody>
                                    {committee.rows.map((member, memberIndex) => (
                                      <tr key={memberIndex}>
                                        <td>{member.name}</td>
                                        <td>{member.designation}</td>
                                        <td>{member.position}</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </article>
                          ))}

                        </div>
                      </section>

                    </div>
                  )}

                  {/* Key Managerial Personnel View */}
                  {subpage === 'key-personnel' && (
                    <div className="row justify-content-center g-4 mt-2">
                      {currentSubpageData?.items.map((person, idx) => (
                        <div key={idx} className="col-lg-4 col-md-6 col-12 effect-fade-up" style={{ animationDelay: `${idx * 0.08}s` }}>
                          <div className="kmp-card">
                            <div className="kmp-card-header">
                              <div className="kmp-avatar-wrap">
                                {person.img ? (
                                  <img src={person.img.src} alt={person.name} className="kmp-avatar-img" />
                                ) : (
                                  <div className="kmp-avatar-initials">
                                    {person.name.split(' ').filter(Boolean).map(n => n[0]).join('')}
                                  </div>
                                )}
                              </div>
                              {person.linkedin && (
                                <a
                                  href={person.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="kmp-linkedin-btn"
                                  aria-label={`LinkedIn profile of ${person.name}`}
                                >
                                  <i className="icon icon-linkedin-in" style={{ fontSize: '16px' }}></i>
                                </a>
                              )}
                            </div>
                            <div className="kmp-card-body">
                              <h4 className="kmp-name">{person.name}</h4>
                              <div className="kmp-role-badge-wrap">
                                <span className="kmp-role-badge">{person.role}</span>
                              </div>
                              {person.bio && <p className="kmp-bio">{person.bio}</p>}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Advisors View */}
                  {subpage === 'advisors' && (
                    <div className="directors-list mt-4">
                      {currentSubpageData?.items.map((person, idx) => {
                        const isEven = idx % 2 === 0;

                        return (
                          <div
                            key={idx}
                            className={`director-row-card effect-fade-up ${isEven
                              ? 'flex-row'
                              : 'flex-row-reverse text-right'
                              }`}
                            style={{
                              animationDelay: `${idx * 0.08}s`,
                            }}
                          >
                            {/* Avatar */}
                            <div className="director-row-avatar-wrap">
                              {person.img ? (
                                <img
                                  src={person.img.src}
                                  alt={person.name}
                                  className="director-row-img"
                                />
                              ) : (
                                <div className="director-row-initials">
                                  {person.name
                                    .split(' ')
                                    .filter(Boolean)
                                    .map(n => n[0])
                                    .join('')}
                                </div>
                              )}
                            </div>

                            {/* Information */}
                            <div className="director-row-info">
                              <h4 className="director-row-name">
                                {person.name}
                              </h4>

                              <span className="director-row-role">
                                {person.role}
                              </span>

                              {person.linkedin && (
                                <div
                                  className={`director-row-social-wrap ${isEven
                                    ? 'justify-content-start'
                                    : 'justify-content-end'
                                    }`}
                                >
                                  <a
                                    href={person.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="director-linkedin-btn"
                                    aria-label={`LinkedIn profile of ${person.name}`}
                                  >
                                    <i
                                      className="icon icon-linkedin-in"
                                      style={{ fontSize: '18px' }}
                                    ></i>
                                  </a>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
      <ContactSection />
    </div>
  );
}

export default BoardManagement;
