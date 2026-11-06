import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Video, Cpu, Zap } from 'lucide-react';
import './AIMLDeploySection.css';

const AIMLDeploySection = () => {
  const deployments = [
    {
      icon: ShieldCheck,
      label: 'Manage',
      value: 'Risk & Fraud With Robotic Process Automation (RPA)',
      description: 'Advanced RPA solutions for risk management and fraud detection',
      color: '#ff3300',
      step: '01',
    },
    {
      icon: Video,
      label: 'Maintain',
      value: 'Safety With Remote Sensors & Video Analytics',
      description: 'AI-powered surveillance and safety monitoring systems',
      color: '#ff5533',
      step: '02',
    },
    {
      icon: Cpu,
      label: 'Reduce',
      value: 'Data Entry Processing Times With Machine Learning',
      description: 'Machine learning algorithms for efficient data processing',
      color: '#ff7733',
      step: '03',
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
    <section className="ai-deploy-section section-spacing-lg">
      <div className="ai-deploy-bg-line"></div>
      <div className="ai-deploy-bg-line"></div>

      <div className="container">
        <motion.div
          className="ai-deploy-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="ai-deploy-badge">
            <Zap size={14} /> AI Deployment
          </div>
          <h2 className="ai-deploy-title">
            How VGIL's AI Deployment <span className="text-red">Eases Life?</span>
          </h2>
          <p className="ai-deploy-subtitle">
            Transform your operations with our cutting-edge AI solutions
          </p>
        </motion.div>

        <motion.div
          className="ai-deploy-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {deployments.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="ai-deploy-card"
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="ai-deploy-card-glow"></div>
                <div className="ai-deploy-step-number">{item.step}</div>
                <div className="ai-deploy-icon-wrap">
                  <Icon size={32} color={item.color} strokeWidth={1.5} />
                </div>
                <div className="ai-deploy-label">{item.label}</div>
                <div className="ai-deploy-value">{item.value}</div>
                <p className="ai-deploy-desc">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AIMLDeploySection;
