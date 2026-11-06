import React from 'react';
import { motion } from 'framer-motion';
import { Server, Cloud, Database, Network, Shield, HeadphonesIcon, MonitorSmartphone, Activity, Box } from 'lucide-react';
import './ITInfrastructureSection.css';
import ITInfrastructureShowcase from './ITInfrastructureShowcase';

const SERVICES = [
  { title: "Data Center Services", icon: Server },
  { title: "Offshore Infrastructure Management", icon: Network },
  { title: "IT Operations Excellence", icon: Activity },
  { title: "Service Desk Operations", icon: HeadphonesIcon },
  { title: "Network Management", icon: Network },
  { title: "Database Administration", icon: Database },
  { title: "Desktop Services", icon: MonitorSmartphone },
  { title: "Disaster Recovery", icon: Shield }
];

const ITInfrastructureSection = () => {
  // Animation Variants
  const containerStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, y: 0, 
      transition: { duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275] } 
    }
  };

  const popIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, scale: 1, 
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } 
    }
  };

  return (
    <section className=" section-spacing-lg it-infra-section pb-0 ">
      <div className="it-bg-elements">
        <div className="it-bg-blob it-bg-blob-1"></div>
        <div className="it-bg-blob it-bg-blob-2"></div>
        <div className="it-particles"></div>
      </div>

      <div className="container position-relative z-10">
        
        {/* SECTION 1 - HEADER & INFO CARDS */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerStagger}
        >
          <motion.h2 variants={fadeUp} className="it-section-title">
            <span className="it-highlight-line d-none d-md-inline-block"></span>
            IT Organization <span className="it-highlight">Responsive To Business Demands</span>
            <span className="it-highlight-line d-none d-md-inline-block"></span>
          </motion.h2>

          <div className="it-info-cards-wrapper">
            <motion.div variants={fadeUp} className="it-info-card">
              <div className="it-info-icon-box">
                <Server size={28} strokeWidth={1.5} />
              </div>
              <div className="it-info-text">
                VGIL's IT Infrastructure Services have worked for customers of all sizes to evolve, operate & maintain the systems that support their mission-critical business applications. Our managed IT services & integrated solutions create agile, flexible IT environments for enterprises resulting into optimum support at minimum cost.
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="it-info-card">
              <div className="it-info-icon-box">
                <Cloud size={28} strokeWidth={1.5} />
              </div>
              <div className="it-info-text">
                Using 'Offshore Adaptive Delivery' we optimize cost & performance, leveraging a flexible mix of global resources to free your internal resources to focus on more strategic activities. Virtual Galaxy's infrastructure services help you develop your business according to the ever changing business needs.
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* SECTION 2 - COST EFFECTIVE CARDS */}
        <div className="it-cost-wrapper section-spacing-lg">
          <motion.div 
            className="it-cost-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="it-section-title mb-3" style={{ fontSize: '36px' }}>
              Is Your IT Organization <span className="it-highlight">Cost Effective?</span>
            </h2>
            <p className="text-body-1 text-muted">Significant savings and reliable infrastructure with our solutions</p>
          </motion.div>

          <motion.div 
            className="it-cost-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerStagger}
          >
            <motion.div variants={popIn} className="it-cost-card it-cost-red">
              <div className="it-cost-orb"></div>
              <div className="it-cost-top">
                <div className="it-cost-icon"><Server size={24} /></div>
              </div>
              <div className="mt-auto">
                <div className="it-cost-number-bg">01</div>
                <div className="it-cost-value">30%</div>
                <div className="it-cost-title">Saving On Infrastructure Operations Cost</div>
                <div className="it-cost-desc">Significant cost reduction through optimized infrastructure management</div>
              </div>
            </motion.div>

            <motion.div variants={popIn} className="it-cost-card it-cost-glass">
              <div className="it-cost-orb"></div>
              <div className="it-cost-top">
                <div className="it-cost-icon"><Cloud size={24} /></div>
              </div>
              <div className="mt-auto">
                <div className="it-cost-number-bg">02</div>
                <div className="it-cost-value" style={{ color: '#0f172a' }}>25%-40%</div>
                <div className="it-cost-title" style={{ color: '#0f172a' }}>Savings Using Offshore Delivery System Model</div>
                <div className="it-cost-desc">Cost-effective offshore infrastructure management solutions</div>
              </div>
            </motion.div>

            <motion.div variants={popIn} className="it-cost-card it-cost-orange">
              <div className="it-cost-orb"></div>
              <div className="it-cost-top">
                <div className="it-cost-icon"><Activity size={24} /></div>
              </div>
              <div className="mt-auto">
                <div className="it-cost-number-bg">03</div>
                <div className="it-cost-value">Assured</div>
                <div className="it-cost-title">Bandwidth From Network Failures</div>
                <div className="it-cost-desc">Reliable infrastructure with minimal downtime</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* SECTION 3 - INFRASTRUCTURE SERVICES AREA */}
        <motion.div 
          className="it-services-wrapper"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-center">
            <div className="it-services-badge">
              <Box size={16} />
              <span>Infrastructure Services We Provide</span>
            </div>
            <p className="text-body-1" style={{ color: '#64748b' }}>8 comprehensive IT infrastructure solutions for your business</p>
          </div>

          <motion.div 
            className="it-services-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerStagger}
          >
            {SERVICES.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div key={idx} variants={popIn} className="it-service-pill">
                  <div className="it-service-icon">
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <div className="it-service-name">{service.title}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* SECTION 4 - SHOWCASE AREA */}
        <ITInfrastructureShowcase />

      </div>
    </section>
  );
};

export default ITInfrastructureSection;
