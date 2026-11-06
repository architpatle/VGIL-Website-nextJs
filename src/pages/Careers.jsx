import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import careersBg from '../assets/careers-bg-img/Careers@2x.png';

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

// Red and white theme
const Careers = () => {
  const { hash } = useLocation();

  // Scroll to hash on load
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Offset for sticky navbar
        const y = element.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <>
      {/* <Navbar /> */}
      
      {/* Hero Section */}
      <section className="careers-hero" style={{ 
        paddingTop: '150px', 
        paddingBottom: '80px', 
        backgroundImage: `url(${careersBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#ffffff', 
        textAlign: 'center' 
      }}>
        <div className="container">
          <h1 style={{ fontSize: '4rem', fontWeight: '800', marginBottom: '20px', color: '#ffffff' }}>Build Your Future With Us</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', opacity: 0.9 }}>
            Join Virtual Galaxy and be part of a team that empowers global industries with human-centered AI and digital solutions.
          </p>
        </div>
      </section>

      {/* 1. Why Join Virtual Galaxy */}
      <section id="why-join" style={{ padding: '100px 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h4 style={{ color: '#e10600', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>Why Join Virtual Galaxy</h4>
              <h2 style={{ fontSize: '3rem', fontWeight: '800', color: '#1a1a1a', marginBottom: '25px', lineHeight: '1.2' }}>What future do you want?</h2>
              <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '20px', lineHeight: '1.6' }}>
                Everyday employment at Virtual Galaxy means continuous growth, endless learning, and the opportunity to shape your own path. We believe in nurturing talent and providing an environment where your ideas can truly make a difference.
              </p>
              <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '30px', lineHeight: '1.6' }}>
                Whether you're developing cutting-edge AI or transforming banking workflows, you'll find the support and resources you need to succeed.
              </p>
              
              <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', backgroundColor: '#e10600', color: '#fff', borderRadius: '50%', textDecoration: 'none' }}>
                  <i className="icon icon-linkedin-in"></i>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', backgroundColor: '#e10600', color: '#fff', borderRadius: '50%', textDecoration: 'none' }}>
                  <i className="icon icon-facebook-f"></i>
                </a>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600" alt="Team collaborating" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '16px', gridRow: 'span 2' }} />
                <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=400" alt="Office workspace" style={{ width: '100%', height: '142px', objectFit: 'cover', borderRadius: '16px' }} />
                <img src="https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&q=80&w=400" alt="Mentorship" style={{ width: '100%', height: '142px', objectFit: 'cover', borderRadius: '16px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Meet Our People */}
      <section id="meet-our-people" style={{ padding: '100px 0', backgroundColor: '#f9f9f9' }}>
        <div className="container text-center">
          <h4 style={{ color: '#e10600', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>Meet Our People</h4>
          <h2 style={{ fontSize: '3rem', fontWeight: '800', color: '#1a1a1a', marginBottom: '25px', lineHeight: '1.2' }}>The minds behind the magic</h2>
          <p style={{ fontSize: '1.1rem', color: '#555', maxWidth: '800px', margin: '0 auto 50px auto', lineHeight: '1.6' }}>
            We are a diverse group of engineers, designers, and strategists united by a shared passion for technology and innovation.
          </p>
          
          <div className="row">
            {[
              { img: team6, name: 'Team Collaboration', role: 'Working together to build seamless solutions.' },
              { img: team7, name: 'Innovation Workshops', role: 'Brainstorming and designing cutting-edge architectures.' },
              { img: team8, name: 'Employee Engagement', role: 'Fostering team spirit and a collaborative workplace culture.' },
              { img: team9, name: 'Leadership Sessions', role: 'Strategic planning and guidance from company visionaries.' },
              { img: team10, name: 'Learning & Development', role: 'Continuous upskilling and knowledge sharing programs.' },
              { img: team11, name: 'Team Celebrations', role: 'Celebrating milestones, festivals, and achievements together.' },
              { img: team12, name: 'Project Discussions', role: 'Collaborative planning to deliver successful projects.' },
              { img: team13, name: 'Corporate Events', role: 'Annual gatherings and key corporate milestones.' },
              { img: team14, name: 'Office Celebrations', role: 'Creating memories and sharing smiles during work hours.' },
              { img: team15, name: 'Team Outings', role: 'Bonding beyond the workplace during recreational outings.' },
              { img: team16, name: 'Training Sessions', role: 'Nurturing skills to meet emerging industry challenges.' },
              { img: team17, name: 'Employee Activities', role: 'Fun activities and engagement to boost team morale.' },
            ].map((person, idx) => (
              <div key={idx} className="col-md-4 mb-4">
                <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', backgroundColor: '#fff' }}>
                  <img src={person.img} alt={person.name} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                  <div style={{ padding: '25px' }}>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '5px', color: '#1a1a1a' }}>{person.name}</h3>
                    <p style={{ color: '#e10600', margin: '0', fontWeight: '600' }}>{person.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Career Path */}
      <section id="career-path" style={{ padding: '100px 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0 order-lg-2">
              <h4 style={{ color: '#e10600', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>Career Path</h4>
              <h2 style={{ fontSize: '3rem', fontWeight: '800', color: '#1a1a1a', marginBottom: '25px', lineHeight: '1.2' }}>Grow with purpose</h2>
              <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '20px', lineHeight: '1.6' }}>
                We offer a transparent and accelerated career path for our employees. From junior developers to enterprise architects, you'll have the mentorship and resources to level up.
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                  <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#ffeeee', color: '#e10600', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="icon icon-check"></i></div>
                  <span style={{ fontSize: '1.1rem', fontWeight: '500', color: '#1a1a1a' }}>Comprehensive health & wellness benefits</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                  <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#ffeeee', color: '#e10600', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="icon icon-check"></i></div>
                  <span style={{ fontSize: '1.1rem', fontWeight: '500', color: '#1a1a1a' }}>Continuous learning and certification funds</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                  <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#ffeeee', color: '#e10600', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="icon icon-check"></i></div>
                  <span style={{ fontSize: '1.1rem', fontWeight: '500', color: '#1a1a1a' }}>Flexible work-from-anywhere policies</span>
                </li>
              </ul>
              
              <div style={{ backgroundColor: '#fff', border: '1px solid #eaeaea', borderRadius: '16px', padding: '30px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1a1a1a', margin: '0 0 5px 0' }}>42+</h3>
                  <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>Open Positions</p>
                </div>
                <a href="hr@vginfotech.ai " style={{ backgroundColor: '#e10600', color: '#fff', padding: '12px 25px', borderRadius: '100px', textDecoration: 'none', fontWeight: '600' }}>Apply Now</a>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" alt="Career growth" style={{ width: '100%', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
            </div>
          </div>
        </div>
      </section>
      
      {/* 4. CTA / Let's Connect */}
      <section id="lets-connect" style={{ padding: '80px 0', backgroundColor: '#e10600', color: '#fff', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '20px' }}>Ready to shape the future?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '40px', opacity: 0.9 }}>Connect with our team to discover how you fit into Virtual Galaxy.</p>
          <Link to="/contact" style={{ display: 'inline-block', backgroundColor: '#fff', color: '#e10600', padding: '15px 40px', borderRadius: '100px', textDecoration: 'none', fontWeight: '700', fontSize: '1.1rem', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>Let's Connect</Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Careers;
