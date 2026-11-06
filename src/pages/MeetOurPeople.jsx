"use client";

import React, { useEffect } from 'react';
import Link from "next/link";
import careersBg from '../assets/home/hero-bg-img.jpg';


// Import VGIL Group Images
import team6 from '../assets/group-img-vgil-team/vgiplteam-6.jpg';
import team7 from '../assets/group-img-vgil-team/vgiplteam-7.jpg';
import team8 from '../assets/group-img-vgil-team/vgiplteam-8.jpg';
import team9 from '../assets/group-img-vgil-team/vgiplteam-9.jpg';
import team10 from '../assets/group-img-vgil-team/vgiplteam-10.jpg';
import team11 from '../assets/group-img-vgil-team/vgiplteam-11.jpg';
import team12 from '../assets/group-img-vgil-team/vgiplteam-12.jpg';
import team13 from '../assets/group-img-vgil-team/vgiplteam-13.jpg';
import team14 from '../assets/group-img-vgil-team/vgiplteam-14.jpg';
import team15 from '../assets/group-img-vgil-team/vgiplteam-15.jpg';
import team16 from '../assets/group-img-vgil-team/vgiplteam-16.jpg';
import team17 from '../assets/group-img-vgil-team/vgiplteam-17.jpg';

const MeetOurPeople = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const peopleData = [
    { img: team6, title: 'Team Collaboration', desc: 'Working together to build seamless solutions.' },
    { img: team7, title: 'Innovation Workshops', desc: 'Brainstorming and designing cutting-edge AI architectures.' },
    { img: team8, title: 'Employee Engagement', desc: 'Fostering team spirit and a collaborative workplace culture.' },
    { img: team9, title: 'Leadership Sessions', desc: 'Strategic planning and guidance from company visionaries.' },
    { img: team10, title: 'Learning & Development', desc: 'Continuous upskilling and knowledge sharing programs.' },
    { img: team11, title: 'Team Celebrations', desc: 'Celebrating milestones, festivals, and achievements together.' },
    { img: team12, title: 'Project Discussions', desc: 'Collaborative planning to deliver successful projects.' },
    { img: team13, title: 'Corporate Events', desc: 'Annual gatherings and key corporate milestones.' },
    { img: team14, title: 'Office Celebrations', desc: 'Creating memories and sharing smiles during work hours.' },
    { img: team15, title: 'Team Outings', desc: 'Bonding beyond the workplace during recreational outings.' },
    { img: team16, title: 'Training Sessions', desc: 'Nurturing skills to meet emerging industry challenges.' },
    { img: team17, title: 'Employee Activities', desc: 'Fun activities and engagement to boost team morale.' },
  ];

  return (
    <>
      <section className='section-hero'>
        <div className="hero-image" style={{ backgroundImage: `url("${careersBg.src}")` }}>
        </div>
        <div className="container">
          <div className="content-wrap text-center">
            <div className="title text-display-2 effectFade fadeRotateX">
              <h1 className='title1 fw-semibold text-gradient-1'>Meet Our People</h1>

            </div>
            <p className='text effectFade fadeUp' >
              We are a diverse, dynamic group of innovators united by a shared passion for technology.
              <br /> Discover the faces behind the magic at Virtual Galaxy.
            </p>
          </div>
        </div>

      </section>

      <section className='section-spacing-lg'>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: '800', color: '#1a1a1a', marginBottom: '20px' }}>Our Team in Action</h2>
            <p style={{ fontSize: '1.1rem', color: '#555', maxWidth: '700px', margin: '0 auto' }}>
              Explore how we collaborate, innovate, and grow together. Our culture is built on a foundation of teamwork and a relentless drive for excellence.
            </p>
          </div>

          <div className="row g-4">
            {peopleData.map((item, idx) => (
              <div key={idx} className="col-lg-4 col-md-6">
                <div
                  className="group-photo-card"
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                    transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'pointer',
                    height: '300px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)';
                    const img = e.currentTarget.querySelector('img');
                    if (img) img.style.transform = 'scale(1.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.06)';
                    const img = e.currentTarget.querySelector('img');
                    if (img) img.style.transform = 'scale(1)';
                  }}
                >
                  <img
                    src={item.img.src}
                    alt="VGIL Team"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top center',
                      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '40px', color: '#1a1a1a' }}>Want to join the team?</h2>
          <Link href="/careers/career-path" style={{ display: 'inline-block', backgroundColor: '#e10600', color: '#fff', padding: '15px 40px', borderRadius: '100px', textDecoration: 'none', fontWeight: '700', fontSize: '1.1rem' }}>See Open Roles</Link>
        </div>
      </section>
    </>
  );
};

export default MeetOurPeople;
