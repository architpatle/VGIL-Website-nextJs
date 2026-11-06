import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Headphones, Globe, Activity, Network } from 'lucide-react';
import './ITInfrastructureShowcase.css';

const TABS = [
  { id: 'service-desk', label: 'Service Desk', icon: Headphones },
  { id: 'oim', label: 'OIM', icon: Globe },
  { id: 'it-ops', label: 'IT Operations', icon: Activity },
  { id: 'network', label: 'Network Management', icon: Network }
];

const CONTENT_DATA = {
  'service-desk': {
    title: 'Modern Service Desk Operations',
    desc: 'VGIL\'s IT Infrastructure Services have worked for customers of all sizes to evolve, operate & maintain the systems that support their mission-critical business applications. Our managed IT services & integrated solutions create agile, flexible IT environments for enterprises resulting into optimum support at minimum cost.',
    features: [
      '24/7 Monitoring and Support',
      'Proactive Incident Management',
      'Performance Optimization',
      'Robust Security & Compliance'
    ],
    progress: 85
  },
  'oim': {
    title: 'Offshore Infrastructure Management',
    desc: 'Using "Offshore Adaptive Delivery" we optimize cost & performance, leveraging a flexible mix of global resources to free your internal resources to focus on more strategic activities.',
    features: [
      'Cost-Effective Global Delivery',
      'Scalable Resource Allocation',
      'Strategic Activity Focus',
      'Continuous Improvement Cycle'
    ],
    progress: 92
  },
  'it-ops': {
    title: 'IT Operations Excellence',
    desc: 'Virtual Galaxy\'s infrastructure services help you develop your business according to the ever changing business needs, ensuring seamless operations and operational excellence.',
    features: [
      'Automated Workflow Processes',
      'Agile Infrastructure Scaling',
      'System Resilience & Uptime',
      'Integrated Solution Management'
    ],
    progress: 78
  },
  'network': {
    title: 'Advanced Network Management',
    desc: 'Ensure reliable infrastructure with minimal downtime through our assured bandwidth management and network failure prevention strategies tailored for your business.',
    features: [
      'Bandwidth Assurance',
      'Network Failure Prevention',
      'Latency Optimization',
      'Secure Data Transmission'
    ],
    progress: 95
  }
};

const ITInfrastructureShowcase = () => {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const [currentProgress, setCurrentProgress] = useState(0);

  const activeData = CONTENT_DATA[activeTab];
  const ActiveIcon = TABS.find(t => t.id === activeTab)?.icon || Headphones;

  useEffect(() => {
    setCurrentProgress(0);
    const timer = setTimeout(() => {
      setCurrentProgress(activeData.progress);
    }, 300);
    return () => clearTimeout(timer);
  }, [activeTab, activeData.progress]);

  // Framer Motion Variants
  const containerStagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275] } }
  };

  const tabContentVariant = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3 } }
  };

  return (
    <div className="it-showcase-wrapper section-spacing-lg mb-0">
      <div className=" position-relative z-10">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerStagger}
        >
          <motion.h2 variants={fadeUp} className="it-showcase-title">
            Evolve, Operate & Maintain <br />
            <span className="it-showcase-highlight">Your IT Infrastructure</span>
          </motion.h2>

          {/* Navigation Tabs */}
          <motion.div variants={fadeUp} className="it-showcase-tabs">
            {TABS.map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <div
                  key={tab.id}
                  className={`it-showcase-tab ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <div className="it-showcase-tab-icon">
                    <svg
                      className="it-showcase-tab-icon-ring"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                    >
                      <circle
                        cx="16"
                        cy="16"
                        r="14"
                      />
                    </svg>

                    <Icon
                      size={16}
                      strokeWidth={isActive ? 2.5 : 2}
                    />
                  </div>
                  <span>{tab.label}</span>
                </div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          className="it-showcase-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275], delay: 0.2 }}
        >
          <div className="it-showcase-content-wrapper">

            {/* Left Icon Area */}
            <div className="it-showcase-icon-area">
              <div className="it-showcase-orb-container">
                <div className="it-showcase-orb-glow"></div>
                <div className="it-showcase-orb-ring"></div>

                <motion.div
                  key={activeTab}
                  initial={{
                    scale: 0.5,
                    opacity: 0,
                    rotate: -45
                  }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    rotate: 0
                  }}
                  transition={{
                    type: 'spring',
                    damping: 15,
                    stiffness: 100
                  }}
                  className="it-showcase-orb-icon"
                >
                  <ActiveIcon
                    size={36}
                    strokeWidth={1.5}
                  />
                </motion.div>
              </div>
            </div>

            {/* Right Content Area */}
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  variants={tabContentVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <h3 className="it-showcase-text-title">{activeData.title}</h3>
                  <p className="it-showcase-text-desc">{activeData.desc}</p>

                  <div className="it-showcase-features">
                    {activeData.features.map((feat, idx) => (
                      <motion.div
                        key={idx}
                        className="it-showcase-feature-item"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 + 0.3 }}
                      >
                        <div className="it-showcase-bullet"></div>
                        <div className="it-showcase-feature-text">{feat}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Progress Area */}
                  <motion.div
                    className="it-showcase-progress-area"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="it-showcase-progress-header">
                      <span>Deployment Status</span>
                      <span className="it-showcase-progress-status">{currentProgress}% Optimized</span>
                    </div>
                    <div className="it-showcase-progress-bar-bg">
                      <motion.div
                        className="it-showcase-progress-bar-fill"
                        initial={{ width: 0 }}
                        animate={{ width: `${currentProgress}%` }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
                      ></motion.div>
                    </div>
                  </motion.div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ITInfrastructureShowcase;
