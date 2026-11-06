import React from 'react';
import { motion } from 'framer-motion';
import { Network, ArrowRight } from 'lucide-react';
import './MobileTechnologiesSection.css';

const MobileTechnologiesSection = () => {
  const technologies = [
    { name: "Node.JS", desc: "Scalable backend development", highlight: true },
    { name: "IONIC", desc: "Cross-platform mobile apps" },
    { name: "Cordova", desc: "Hybrid application framework" },
    { name: "Swift", desc: "Native iOS development" },
    { name: "Android", desc: "Native Android development" }
  ];

  return (
    <section className="mc-tech-section section-spacing-lg">
      <div className="container position-relative z-2">
        <div className="row g-5 align-items-center">
          
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="mc-tech-icon-wrapper">
                  <Network size={24} color="#ff3300" />
                </div>
                <h3 className="mc-tech-subtitle">Grow With Our Core Mobile Technologies</h3>
              </div>
              <h2 className="mc-tech-title">
                Wireless Application Development
              </h2>
              <p className="mc-tech-desc">
                VGIL has extensive expertise in wireless application development. Our highly skilled professionals are experts with years of experience in Node.JS, IONIC, Cordova, Swift, Android & all the major wireless technologies.
              </p>
              <p className="mc-tech-desc">
                We develop feature-rich wireless business applications based on industry standards that enables your organization to reach new levels of business performance.
              </p>
            </motion.div>
          </div>

          <div className="col-lg-6">
            <motion.div
              className="mc-tech-grid"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
               <div className="mc-tech-header">
                 <h4 className="m-0">Key Technologies</h4>
                 <ArrowRight size={20} color="#ff3300" />
               </div>
               
               <div className="mc-tech-list">
                 {technologies.map((tech, idx) => (
                   <motion.div 
                     key={idx} 
                     className={`mc-tech-item ${tech.highlight ? 'mc-tech-item-highlight' : ''}`}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.3 + (idx * 0.1) }}
                   >
                     <div className="mc-tech-name">{tech.name}</div>
                     <div className="mc-tech-detail">{tech.desc}</div>
                   </motion.div>
                 ))}
               </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default MobileTechnologiesSection;
