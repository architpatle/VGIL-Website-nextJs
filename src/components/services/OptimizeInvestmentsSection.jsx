import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, Briefcase, Network, Server, CheckCircle, Lightbulb, Cloud, Smartphone, Check
} from 'lucide-react';
import './OptimizeInvestmentsSection.css';

const TABS_DATA = [
  { id: 'app-dev', title: 'Application Development', icon: Code2 },
  { id: 'app-mgmt', title: 'Application Management', icon: Briefcase },
  { id: 'arch', title: 'Architecture', icon: Network },
  { id: 'ent-app', title: 'Enterprise Application Services', icon: Server },
  { id: 'qa', title: 'Quality Assurance', icon: CheckCircle },
  { id: 'cloud', title: 'Cloud Computing', icon: Cloud },
  { id: 'digital', title: 'Digital Solutions', icon: Lightbulb },
  { id: 'mobile', title: 'Mobile Computing', icon: Smartphone },
];

const CONTENT_DATA = {
  'app-dev': {
    title: 'Application Development & Integration',
    desc: 'Cover the elements of a project implementation that cannot be realized by product configuration or customization alone. The need for systems integration derives from a requirement to treat otherwise stand-alone components as a homogenous entity.',
    features: [
      'Embedding call centre functionality into desktop business applications',
      'Access to customer profile database to make routing decisions',
      'Bespoke agent Softphone development',
      'Desktop and backend integration to CRM and ERP systems'
    ]
  }
};

// Fallback for demo purposes
const getTabContent = (id) => {
  if (CONTENT_DATA[id]) return CONTENT_DATA[id];
  const tab = TABS_DATA.find(t => t.id === id);
  return {
    title: `${tab.title} Services`,
    desc: 'Cover the elements of a project implementation that cannot be realized by product configuration or customization alone. The need for systems integration derives from a requirement to treat otherwise stand-alone components as a homogenous entity.',
    features: [
      'Seamless deployment and lifecycle management',
      'Advanced performance monitoring and optimization',
      'Secure architecture and compliance standards',
      'Cross-platform capabilities and API integrations'
    ]
  };
};

const OptimizeInvestmentsSection = () => {
  const [activeTab, setActiveTab] = useState('app-dev');
  const activeContent = getTabContent(activeTab);
  const ActiveIcon = TABS_DATA.find(t => t.id === activeTab)?.icon || Code2;

  return (
    <section className="optimize-investments-section section-spacing-lg">
      {/* <div className="oi-bg-elements">
        <div className="oi-gradient-mesh"></div>
        <div className="oi-dotted-pattern"></div>
      </div> */}

      <div className="container position-relative z-2">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="oi-title">
            Optimize Your <span className="oi-highlight">Application Investments</span>
          </h2>
          <p className="oi-subtitle">
            Comprehensive application development and management services
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div 
          className="oi-tabs-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {TABS_DATA.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <div 
                key={tab.id} 
                className={`oi-tab ${isActive ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <div className="oi-tab-content">
                  <div className="oi-tab-icon-wrapper">
                    <svg className="oi-tab-icon-ring" width="32" height="32" viewBox="0 0 32 32">
                      <circle cx="16" cy="16" r="14" />
                    </svg>
                    <Icon size={16} />
                  </div>
                  <span>{tab.title}</span>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Main Content Card */}
        <motion.div 
          className="oi-main-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275], delay: 0.3 }}
        >
          <div className="oi-card-left">
            <div className="oi-orb-container">
              <div className="oi-orb-glow"></div>
              <div className="oi-orb-ring"></div>
              <motion.div 
                key={activeTab}
                initial={{ scale: 0.5, opacity: 0, rotate: -45 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ type: 'spring', damping: 15, stiffness: 100 }}
                className="oi-orb-icon"
              >
                <ActiveIcon size={36} color="#ff4d00" strokeWidth={1.5} />
              </motion.div>
            </div>
          </div>

          <div className="oi-card-right">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="oi-content-title">{activeContent.title}</h3>
                <p className="oi-content-desc">{activeContent.desc}</p>

                <div className="oi-features-box">
                  <div className="oi-features-title">Key Features Include:</div>
                  <ul className="oi-feature-list">
                    {activeContent.features.map((feat, idx) => (
                      <motion.li 
                        key={idx} 
                        className="oi-feature-item"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 + 0.2 }}
                      >
                        <div className="oi-check-box">
                          <Check size={14} strokeWidth={3} />
                        </div>
                        <div className="oi-feature-text">{feat}</div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OptimizeInvestmentsSection;
