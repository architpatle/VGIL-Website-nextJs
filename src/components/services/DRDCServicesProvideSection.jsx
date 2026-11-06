import React from 'react';
import { motion } from 'framer-motion';
import { Server, Cloud, Shield, Activity, HardDrive, RefreshCw, Cpu, Database } from 'lucide-react';
import './DRDCServicesProvideSection.css';

const DRDCServicesProvideSection = () => {
  const servicesList = [
    { title: 'Managed Colocation', icon: Server },
    { title: 'Cloud Backup', icon: Cloud },
    { title: 'DRaaS (Disaster Recovery)', icon: RefreshCw },
    { title: 'Server Virtualization', icon: Cpu },
    { title: 'Network Security', icon: Shield },
    { title: 'Data Center Migration', icon: HardDrive },
    { title: '24/7 Monitoring', icon: Activity },
    { title: 'Storage Solutions', icon: Database }
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
    <section className="dr-sp-section section-spacing-lg">
      <div className="container">
        <motion.div 
        id='servicesDRDC'
          className="dr-sp-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <div className="dr-sp-shape top-right"></div>
          <div className="dr-sp-shape bottom-left"></div>

          <motion.div className="dr-sp-header" variants={itemVariants}>
            <div className="dr-sp-badge">
              <Database size={20} className="badge-icon" />
              <span>DC & DR Services We Provide</span>
            </div>
            <p className="dr-sp-subtitle">
              8 comprehensive data center and disaster recovery solutions for your business
            </p>
          </motion.div>

          <motion.div className="dr-sp-grid" variants={containerVariants}>
            {servicesList.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div 
                  key={index} 
                  className="dr-sp-item"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, borderColor: '#ff3300', backgroundColor: '#fff5f2' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="dr-sp-icon">
                     <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <span className="dr-sp-text">{service.title}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default DRDCServicesProvideSection;
