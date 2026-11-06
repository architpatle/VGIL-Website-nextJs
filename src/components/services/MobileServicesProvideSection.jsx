import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Code, Lightbulb, Lock, Share2, Layers, Compass, Globe } from 'lucide-react';
import './MobileServicesProvideSection.css';

const MobileServicesProvideSection = () => {
  const servicesList = [
    { title: 'iOS App Development', icon: Smartphone },
    { title: 'Android App Development', icon: Code },
    { title: 'Cross-Platform Solutions', icon: Layers },
    { title: 'Enterprise Mobility', icon: Globe },
    { title: 'UI/UX Design', icon: Lightbulb },
    { title: 'Mobile App Testing', icon: Compass },
    { title: 'API Integration', icon: Share2 },
    { title: 'App Security', icon: Lock }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <section className="mc-sp-section section-spacing-lg">
      <div className="container">
        <motion.div 
          className="mc-sp-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <div className="mc-sp-shape top-right"></div>
          <div className="mc-sp-shape bottom-left"></div>

          <motion.div className="mc-sp-header" variants={itemVariants}>
            <div className="mc-sp-badge">
              <Smartphone size={20} className="badge-icon" />
              <span>Mobile Computing Services We Provide</span>
            </div>
            <p className="mc-sp-subtitle">
              8 comprehensive mobile solutions to transform your business operations
            </p>
          </motion.div>

          <motion.div className="mc-sp-grid" variants={containerVariants}>
            {servicesList.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div 
                  key={index} 
                  className="mc-sp-item"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, borderColor: '#ff3300', boxShadow: '0 10px 25px rgba(255, 51, 0, 0.1)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="mc-sp-icon">
                     <Icon size={20} />
                  </div>
                  <span className="mc-sp-text">{service.title}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default MobileServicesProvideSection;
