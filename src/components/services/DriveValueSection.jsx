import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Shield, Rocket, Settings } from 'lucide-react';
import './DriveValueSection.css';

const DriveValueSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const features = [
    { icon: <ArrowUp size={20} color="#E8380D" />, title: "Performance" },
    { icon: <Shield size={20} color="#E8380D" />, title: "Mitigate" },
    { icon: <Rocket size={20} color="#E8380D" />, title: "Evolution" },
    { icon: <Settings size={20} color="#E8380D" />, title: "Excellence" },
  ];

  return (
    
    <div className="section-drive-value overflow-hidden section-spacing-lg" >
      <div className="container" style={{ maxWidth: '1280px' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="row align-items-stretch gx-5"
        >
          {/* Left Column: Graphic and Heading */}
          <motion.div variants={leftVariants} className="col-12 col-lg-5 d-flex flex-column position-relative z-1">
            <div>
              <h2 className="section-heading-responsive fw-bold mb-2" style={{  lineHeight: '1.1', color: '#0f172a' }}>
                Drive Value
              
              <span className=" section-heading-responsive fw-bold mb-4" style={{ fontSize: '3.5rem', lineHeight: '1.1', color: '#E8380D' }}>  From Your Applications 
                </span>
              </h2>
            </div>

            {/* Custom SVG Graphic */}
            {/* <div className="position-relative w-100 d-flex flex-column justify-content-center" style={{ flexGrow: 1, minHeight: '300px', transform: 'translateX(-3rem)' }}>
              <svg viewBox="0 0 500 300" className="w-100 h-100" style={{ filter: 'drop-shadow(0 20px 13px rgba(0, 0, 0, 0.03)) drop-shadow(0 8px 5px rgba(0, 0, 0, 0.08))', maxHeight: '250px' }} preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#94a3b8" stopOpacity="0" />
                    <stop offset="50%" stopColor="#64748b" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#E8380D" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="100%" stopColor="#ff4f1f" stopOpacity="0.5" />
                  </linearGradient>
                  <filter id="blur">
                    <feGaussianBlur stdDeviation="3" />
                  </filter>
                </defs>

                <path d="M 0,50 Q 200,50 400,150" fill="none" stroke="url(#glow)" strokeWidth="8" filter="url(#blur)" />
                <path d="M 0,250 Q 200,250 400,150" fill="none" stroke="url(#glow)" strokeWidth="8" filter="url(#blur)" />
                <path d="M 0,150 Q 200,150 400,150" fill="none" stroke="url(#glow)" strokeWidth="8" filter="url(#blur)" />

                <g stroke="url(#lineGrad1)" fill="none" strokeLinecap="round">
                  <path d="M -50,20 Q 200,30 400,150" strokeWidth="1.5" className="data-flow-path" />
                  <path d="M -20,60 Q 220,70 400,150" strokeWidth="2" className="data-flow-path-fast" />
                  <path d="M -80,90 Q 240,110 400,150" strokeWidth="1" className="data-flow-path-slow" />

                  <path d="M -100,130 Q 150,140 400,150" strokeWidth="1.5" className="data-flow-path" />
                  <path d="M -40,150 Q 200,150 400,150" strokeWidth="2.5" className="data-flow-path-fast" />
                  <path d="M -90,170 Q 180,160 400,150" strokeWidth="1" className="data-flow-path-slow" />

                  <path d="M -30,200 Q 210,190 400,150" strokeWidth="1.5" className="data-flow-path" />
                  <path d="M -60,240 Q 230,230 400,150" strokeWidth="2" className="data-flow-path-fast" />
                  <path d="M -10,280 Q 200,270 400,150" strokeWidth="1" className="data-flow-path-slow" />
                </g>

                <g fill="#475569" opacity="0.6">
                  <circle cx="50" cy="80" r="2" />
                  <circle cx="120" cy="40" r="3" />
                  <circle cx="80" cy="120" r="1.5" />
                  <circle cx="150" cy="180" r="2" />
                  <circle cx="90" cy="220" r="2.5" />
                  <circle cx="130" cy="260" r="1.5" />
                  <circle cx="200" cy="100" r="2" />
                  <circle cx="240" cy="130" r="1.5" />
                  <circle cx="220" cy="200" r="2.5" />
                </g>

              </svg>
            </div> */}
          </motion.div>

          {/* Right Column: Glassmorphism Card and Icons */}
          <motion.div variants={rightVariants} className="section-drive-value-right col-12 col-lg-7 d-flex flex-column position-relative mt-lg-0" style={{ zIndex: 20 }}>
            <div className="w-100 position-relative">
              {/* Background blob for glassmorphism effect */}
              <div className="position-absolute top-50 start-50 translate-middle w-75 h-75 rounded-circle" style={{ background: '#e2e8f0', filter: 'blur(80px)', opacity: 0.6, zIndex: 0 }}></div>

              <div className="section-drive-value-right-card position-relative z-1 mb-1" style={{ backdropFilter: 'blur(24px)', background: 'rgba(255, 255, 255, 0.5)', border: '1px solid rgba(232, 56, 13, 0.1)', boxShadow: '0 8px 32px 0 rgba(31,38,135,0.07)', borderRadius: '1.5rem', padding: '2.5rem 3rem' }}>
                <div className="section-drive-value-right-card-para d-flex flex-column fw-medium text-center" style={{ color: '#334155', fontSize: '1.25rem', lineHeight: '1.75' }}>
                  At Virtual Galaxy, we specialize in optimizing your mission-critical applications to deliver more than just cost savings. Our comprehensive approach improves operational excellence, mitigates risks, enhances performance, and provides strategic direction for your software's long-term evolution.
                </div>
              </div>
            </div>

            {/* Feature Icons Grid */}
            <div className="section-drive-value-right-metrics position-relative z-1">
              {/* Connecting line behind icons */}
              <div className="position-absolute top-50 start-0 end-0 opacity-50" style={{ background: '#E8380D', height: '2px', transform: 'translateY(-50%)', margin: '0 2.5rem', zIndex: 0 }}></div>

              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.05, transition: { duration: 0.2 } }}
                  className=" section-drive-value-right-metrics-items d-flex flex-column align-items-center justify-content-center flex-fill position-relative"
                  style={{ background: '#ffffff', borderRadius: '1rem', border: '1px solid #f1f5f9', padding: '0.75rem', gap: '0.5rem', maxWidth: '100px', aspectRatio: '1/1', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', cursor: 'pointer', zIndex: 10 }}
                  onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 15px 30px rgba(232,56,13,0.15)'}
                  onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'}
                >
                  <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ background: '#fff1ee', padding: '0.6rem' }}>
                    {feature.icon}
                  </div>
                  <span className="fw-bold text-center" style={{ fontSize: '0.75rem', color: '#1e293b' }}>{feature.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default DriveValueSection;
