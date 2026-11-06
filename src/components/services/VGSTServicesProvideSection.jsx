import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import './VGSTServicesProvideSection.css';

const servicesList = [
  'GST Return Filing',
  'E-Way Bill Generation',
  'E-Invoicing Solutions',
  'GST API Integration',
  'E-Way Bill API',
  'GSTIN Verification API',
  'Compliance Management',
  'Taxpayer Services'
];

function VGSTServicesProvideSection() {
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
    <section className="vgst-services-provide">
      <div className="container">
        <motion.div 
          className="vgst-sp-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {/* Decorative shapes */}
          <div className="vgst-sp-shape top-right"></div>
          <div className="vgst-sp-shape bottom-left"></div>

          <motion.div className="vgst-sp-header" variants={itemVariants}>
            <div className="vgst-sp-badge">
              <ShieldCheck size={20} className="badge-icon" />
              <span>VGST Services We Provide</span>
            </div>
            <p className="vgst-sp-subtitle">
              Complete suite of GST compliance solutions for your business
            </p>
          </motion.div>

          <motion.div className="vgst-sp-grid" variants={containerVariants}>
            {servicesList.map((service, index) => (
              <motion.div 
                key={index} 
                className="vgst-sp-item"
                variants={itemVariants}
                whileHover={{ scale: 1.05, borderColor: '#ff3300', boxShadow: '0 10px 25px rgba(255, 51, 0, 0.1)' }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="vgst-sp-dot"></div>
                <span className="vgst-sp-text">{service}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default VGSTServicesProvideSection;
