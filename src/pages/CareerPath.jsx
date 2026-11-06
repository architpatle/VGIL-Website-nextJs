"use client";

import React, { useEffect } from 'react';
import Link from "next/link";
import careersBg from '../assets/home/hero-bg-img.jpg';
import {
  BriefcaseBusiness,
  Megaphone,
  BadgeDollarSign,
  Code2,
  MonitorCog,
  Network,
  GitBranch,
  ClipboardList,
  Database,
  Landmark,
  Rocket,
  Wrench,
  Headphones,
  BrainCircuit,
  Cloud,
  ShieldCheck,
  MapPin,
} from 'lucide-react';

const CareerPath = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jobs = [
    // Existing Jobs
    {
      id: 'business-development-analyst',
      title: 'Business Development Analyst',
      location: 'Chennai, Jaipur, Hyderabad, Mumbai, Nagpur',
      departments: [
        { name: 'Marketing', icon: Megaphone },
        { name: 'Sales', icon: BadgeDollarSign },
      ],
    },

    {
      id: 'customer-acquisition-execution',
      title: 'Customer Acquisition Executive',
      location: 'Nagpur',
      departments: [
        { name: 'Sales', icon: BadgeDollarSign },
        { name: 'Marketing', icon: Megaphone },
      ],
    },

    {
      id: 'solution',
      title: 'Solution Opportunity Manager (Govt.& BFSI)',
      location: 'Chennai, Jaipur, Hyderabad, Mumbai, Nagpur ',
      departments: [
        { name: 'Sales', icon: BadgeDollarSign },
        { name: 'Marketing', icon: Megaphone },

      ],
    },

    {
      id: 'bid-manager',
      title: 'Bid Manager',
      location: 'Nagpur',
      departments: [
        { name: 'Marketing', icon: Megaphone },
        { name: 'Sales', icon: BadgeDollarSign },
      ],
    },

    {
      id: 'senior-oracle-postgresql-database-developer',
      title: 'Senior Oracle / PostgreSQL Database Developer',
      location: 'Nagpur',
      departments: [
        { name: 'Developer', icon: Code2 },
        { name: 'Software Developer', icon: MonitorCog },
      ],
    },

    {
      id: 'oracle-postgresql-database-developer',
      title: 'Oracle / PostgreSQL Database Developer',
      location: 'Nagpur',
      departments: [
        { name: 'Developer', icon: Code2 },
        { name: 'Software Developer', icon: MonitorCog },
      ],
    },

    {
      id: 'hardware-and-network-engineer',
      title: 'Hardware and Network Engineer',
      location: 'Buldana',
      departments: [
        { name: 'IT Infrastructure', icon: Network },
        { name: 'Engineer', icon: Wrench },
      ],
    },

    {
      id: 'senior-scrum-master-agile-coach',
      title: 'Senior Scrum Master / Agile Coach',
      location: 'As per project requirement',
      departments: [
        { name: 'Software Development', icon: Code2 },
        { name: 'Project Management', icon: ClipboardList },
      ],
    },

    {
      id: 'sr-manager-it-implementation-and-services',
      title: 'Sr. Manager - IT Implementation and Services',
      location: 'Nagpur',
      departments: [
        { name: 'Developer', icon: Code2 },
        { name: 'Software Developer', icon: MonitorCog },
      ],
    },

    {
      id: 'database-developer-sql-pl-sql',
      title: 'Database Developer (SQL & PL SQL)',
      location: 'Nagpur',
      departments: [
        { name: 'Developer', icon: Code2 },
        { name: 'Software Developer', icon: Database },
      ],
    },

    {
      id: 'pre-sales-executive',
      title: 'Pre Sales Executive',
      location: 'Nagpur & Delhi',
      departments: [
        { name: 'Marketing', icon: Megaphone },
        { name: 'Pre Sales', icon: Rocket },
      ],
    },

    {
      id: 'pl-sql-developer',
      title: 'Pl/Sql Developer',
      location: 'Nagpur',
      departments: [
        { name: 'Developer', icon: Code2 },
        { name: 'Software Developer', icon: MonitorCog },
      ],
    },

    {
      id: 'migration-developer',
      title: 'Migration Developer',
      location: 'Nagpur',
      departments: [
        { name: 'Developer', icon: Code2 },
        { name: 'Software Developer', icon: MonitorCog },
      ],
    },

    {
      id: 'software-implementation-engineer-banking-domain',
      title: 'Software Implementation Engineer - Banking Domain',
      location: 'Nagpur, Kolhapur & Hyderabad',
      departments: [
        { name: 'Engineer', icon: Wrench },
        { name: 'Implementation', icon: GitBranch },
      ],
    },

    {
      id: 'senior-technical-lead',
      title: 'Senior Technical Lead',
      location: 'Pune',
      departments: [
        { name: 'Marketing', icon: Megaphone },
        { name: 'Pre Sales', icon: Rocket },
      ],
    },

    {
      id: 'java-lead',
      title: 'Java Lead',
      location: 'Mumbai',
      departments: [
        { name: 'Developer', icon: Code2 },
        { name: 'Software Developer', icon: MonitorCog },
      ],
    },

    {
      id: 'vice-president-sales-government-e-governance',
      title: 'Vice President - Sales (Government & E-Governance)',
      location: 'Mumbai / Any Metro City (As Per Business Requirement)',
      departments: [
        { name: 'Marketing', icon: Megaphone },
        { name: 'Sales', icon: BadgeDollarSign },
      ],
    },

    {
      id: 'area-sales-manager',
      title: 'Area Sales Manager',
      location: 'Hyderabad',
      departments: [
        { name: 'Marketing', icon: Megaphone },
        { name: 'Sales', icon: BadgeDollarSign },
      ],
    },

    {
      id: 'iot-engineer',
      title: 'IoT Engineer',
      location: 'Nagpur',
      departments: [
        { name: 'Development', icon: Code2 },
        { name: 'Security Analyst', icon: ShieldCheck },
      ],
    },

    {
      id: 'software-support-executive-engineer',
      title: 'Software Support Executive / Engineer',
      location: 'Nagpur & Pune',
      departments: [
        { name: 'Support', icon: Headphones },
        { name: 'Software Support', icon: MonitorCog },
      ],
    },

    {
      id: 'machine-learning-engineer',
      title: 'Machine Learning Engineer',
      location: 'Nagpur',
      departments: [
        { name: 'Development', icon: Code2 },
        { name: 'Software Developer', icon: MonitorCog },
      ],
    },

    {
      id: 'senior-cloud-engineer',
      title: 'Senior Cloud Engineer',
      location: 'Nagpur',
      departments: [
        { name: 'Development', icon: Code2 },
        { name: 'Software Developer', icon: MonitorCog },
      ],
    },

    {
      id: 'certified-ethical-hacker',
      title: 'Certified Ethical Hacker',
      location: 'Nagpur',
      departments: [
        { name: 'Development', icon: Code2 },
        { name: 'Software Developer', icon: MonitorCog },
      ],
    },
  ];

  return (
    <>

      <section className='section-hero'>
        <div className="hero-image" style={{ backgroundImage: `url("${careersBg.src}")` }}>
        </div>
        <div className="container">
          <div className="content-wrap text-center">
            <div className="title text-display-2 effectFade fadeRotateX">
              <h1 className='title1 fw-semibold text-gradient-1'>Your Career Path</h1>

            </div>
            <p className='text effectFade fadeUp' >
              Explore open opportunities and start your journey with Virtual Galaxy.
              <br />
              We offer competitive benefits and a clear path for professional growth.
            </p>
          </div>
        </div>

      </section>

      <section className='section-spacing-lg'>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div style={{ position: 'sticky', top: '120px' }}>
                <h3 style={{ fontSize: '2rem', fontWeight: '800', color: '#1a1a1a', marginBottom: '20px' }}>What We Offer</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#c00f0f', color: '#e10600', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="icon icon-check"></i></div>
                    <span style={{ fontSize: '1.1rem', fontWeight: '500', color: '#1a1a1a' }}>Competitive Compensation</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#c00f0f', color: '#e10600', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="icon icon-check"></i></div>
                    <span style={{ fontSize: '1.1rem', fontWeight: '500', color: '#1a1a1a' }}>Comprehensive Health Coverage</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#c00f0f', color: '#e10600', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="icon icon-check"></i></div>
                    <span style={{ fontSize: '1.1rem', fontWeight: '500', color: '#1a1a1a' }}>Continuous Learning Funds</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#c00f0f', color: '#e10600', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="icon icon-check"></i></div>
                    <span style={{ fontSize: '1.1rem', fontWeight: '500', color: '#1a1a1a' }}>Flexible Remote Options</span>
                  </li>
                </ul>

                <div style={{ backgroundColor: '#f9f9f9', padding: '25px', borderRadius: '16px', border: '1px solid #eaeaea' }}>
                  <h4 style={{ fontWeight: '700', marginBottom: '10px' }}>Don't see a fit?</h4>
                  <p style={{ color: '#555', marginBottom: '20px' }}>Send your resume to our general talent pool and we'll reach out.</p>
                  <a href="mailto:careers@vgipl.in" style={{ color: '#e10600', fontWeight: '700', textDecoration: 'none' }}>Email our recruiting team <i className="icon icon-arrow-right"></i></a>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '800', margin: 0, color: '#1a1a1a' }}>Open Roles ({jobs.length})</h2>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {jobs.map((job) => (
                  <div key={job.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '30px', backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #eaeaea', boxShadow: '0 5px 15px rgba(0,0,0,0.03)', transition: 'transform 0.2s, box-shadow 0.2s' }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.08)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.03)' }}>

                    <div>
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '8px',
                          marginBottom: '12px',
                        }}
                      >
                        {job.departments.map((department, index) => {
                          const Icon = department.icon;

                          return (
                            <span
                              key={index}
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '7px',
                                padding: '6px 12px',
                                backgroundColor: '#f4f4f5',
                                color: '#555',
                                borderRadius: '100px',
                                fontSize: '0.85rem',
                                fontWeight: '600',
                              }}
                            >
                              <Icon size={15} strokeWidth={2} />
                              {department.name}
                            </span>
                          );
                        })}
                      </div>

                      <h3 style={{ fontSize: '1.4rem', fontWeight: '700', margin: '0 0 10px 0', color: '#1a1a1a' }}>{job.title}</h3>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          color: '#666',
                          fontSize: '0.95rem',
                        }}
                      >
                        <MapPin size={17} strokeWidth={2} />
                        <span>{job.location}</span>
                      </div>
                    </div>
                    <Link href={`/careers/${job.id}`} style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '10px 25px', borderRadius: '100px', textDecoration: 'none', fontWeight: '600', transition: 'background 0.2s' }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#e10600'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#1a1a1a'}>
                      Apply
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerPath;
