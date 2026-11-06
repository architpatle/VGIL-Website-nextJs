import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  Search,
  Mail,
  Video,
  Palette,
  Share2,
  BarChart3,
  Megaphone,
  Layers
} from 'lucide-react';
import './DigitalProvideSection.css';

const DigitalProvideSection = () => {
  const services = [
    { title: 'Website Design', icon: Palette },
    { title: 'Social Media Marketing', icon: Share2 },
    { title: 'Search Engine Marketing', icon: Search },
    { title: 'E-Mail Marketing', icon: Mail },
    { title: 'Video & Motion Editing', icon: Video },
    { title: 'SEO Optimization', icon: Globe },
    { title: 'Analytics & Reporting', icon: BarChart3 },
    { title: 'Brand Strategy', icon: Megaphone },
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
      className="ds-provide-section section-spacing-lg"
      id="services"
    >
      <div className="container">

        <motion.div
          className="ds-provide-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-50px'
          }}
          variants={containerVariants}
        >

          <div className="ds-provide-glow ds-provide-glow-1"></div>
          <div className="ds-provide-glow ds-provide-glow-2"></div>

          <motion.div
            className="ds-provide-header"
            variants={itemVariants}
          >
            <div className="ds-provide-badge">
              <Layers size={20} className="badge-icon" />
              <span>Digital Solutions We Provide</span>
            </div>

            <h2 className="ds-provide-title">
              Digital Solutions We Provide
            </h2>

            <p className="ds-provide-subtitle">
              8 comprehensive digital marketing solutions for your business
            </p>
          </motion.div>

          <motion.div
            className="ds-provide-grid"
            variants={containerVariants}
          >
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={index}
                  className="ds-provide-item"
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
                  <div className="ds-provide-icon">
                    <Icon
                      size={24}
                      strokeWidth={1.5}
                    />
                  </div>

                  <span className="ds-provide-text">
                    {service.title}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            className="ds-provide-desc-box"
            variants={itemVariants}
          >
            <p className="ds-provide-desc-text">
              Comprehensive digital marketing and online presence solutions
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default DigitalProvideSection;