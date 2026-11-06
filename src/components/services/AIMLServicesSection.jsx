import React from 'react';
import { motion } from 'framer-motion';
import {
  Bot,
  Eye,
  MessageSquare,
  BarChart3,
  Cpu,
  Shield,
  Brain,
  Network,
  Layers
} from 'lucide-react';
import './AIMLServicesSection.css';

const AIMLServicesSection = () => {
  const services = [
    { title: 'Robotic Process Automation', icon: Bot },
    { title: 'Computer Vision', icon: Eye },
    { title: 'Natural Language Processing', icon: MessageSquare },
    { title: 'Predictive Analytics', icon: BarChart3 },
    { title: 'Machine Learning Models', icon: Cpu },
    { title: 'Intelligent Chatbots', icon: Brain },
    { title: 'Deep Learning', icon: Network },
    { title: 'AI Security Solutions', icon: Shield },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section
      className="ai-services-section section-spacing-lg"
      id="ai-services"
    >
      <div className="container">

        <motion.div
          className="ai-services-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-50px'
          }}
          variants={containerVariants}
        >

          <div className="ai-services-glow ai-services-glow-1"></div>
          <div className="ai-services-glow ai-services-glow-2"></div>

          <motion.div
            className="ai-services-header"
            variants={itemVariants}
          >
            <div className="ai-services-badge">
              <Layers size={20} className="badge-icon" />
              <span>AI Services We Provide</span>
            </div>

            <h2 className="ai-services-title">
              AI Services We Provide
            </h2>

            <p className="ai-services-subtitle">
              8 cutting-edge AI solutions to transform your business
            </p>
          </motion.div>

          <motion.div
            className="ai-services-grid"
            variants={containerVariants}
          >
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={index}
                  className="ai-services-item"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    borderColor: '#ff3300',
                    backgroundColor: '#fff5f2'
                  }}
                  whileTap={{
                    scale: 0.98
                  }}
                >
                  <div className="ai-services-item-icon">
                    <Icon
                      size={24}
                      strokeWidth={1.5}
                    />
                  </div>

                  <span className="ai-services-item-text">
                    {service.title}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            className="ai-services-pulse"
            variants={itemVariants}
          >
            <p className="ai-services-pulse-text">
              Comprehensive AI and machine learning solutions for enterprise transformation
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default AIMLServicesSection;