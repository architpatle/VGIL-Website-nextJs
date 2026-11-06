import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Globe, Zap } from 'lucide-react';
import './DigitalStrategySection.css';

const DigitalStrategySection = () => {
  const strategies = [
    {
      icon: TrendingUp,
      label: 'Increase',
      value: 'Online Traffic by 40%-60%',
      description: 'Significant growth in website visitors through optimized digital strategies',
      color: '#ff3300',
    },
    {
      icon: Users,
      label: 'Improve',
      value: 'Conversion Rates by 25%-45%',
      description: 'Enhanced user experience leading to higher conversion rates',
      color: '#ff5533',
    },
    {
      icon: Globe,
      label: 'Boost',
      value: 'Brand Visibility Across Platforms',
      description: 'Multi-channel presence for maximum market reach and engagement',
      color: '#ff7733',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section className="ds-strategy-section section-spacing-lg">
      <div className="ds-strategy-bg-line"></div>
      <div className="ds-strategy-bg-line"></div>
      <div className="ds-strategy-bg-line"></div>

      <div className="container">
        <motion.div
          className="ds-strategy-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="ds-strategy-badge">
            <Zap size={14} /> Marketing Strategy
          </div>
          <h2 className="ds-strategy-title">
            Achieve With <span className="text-red">Digital Marketing Strategy</span>
          </h2>
          <p className="ds-strategy-subtitle">
            Maximize ROI and optimize your online marketing investments
          </p>
        </motion.div>

        <motion.div
          className="ds-strategy-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {strategies.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="ds-strategy-card"
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="ds-strategy-card-bg"></div>
                <div className="ds-strategy-icon-ring">
                  <Icon size={32} color={item.color} strokeWidth={1.5} />
                </div>
                <div className="ds-strategy-label">{item.label}</div>
                <div className="ds-strategy-value">{item.value}</div>
                <p className="ds-strategy-desc">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalStrategySection;
