import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Briefcase, Network, Server, CheckCircle, Lightbulb, Cloud, Smartphone, Zap } from 'lucide-react';
import './ApplicationServicesSection.css';

const services = [
  { id: '01', title: 'Application Development and Integration', icon: Code2 },
  { id: '02', title: 'Application Management and Outsourcing', icon: Briefcase },
  { id: '03', title: 'Architecture and IT Consulting', icon: Network },
  { id: '04', title: 'Enterprise Application Services', icon: Server },
  { id: '05', title: 'Quality Assurance and Testing', icon: CheckCircle },
  { id: '06', title: 'Digital Solutions', icon: Lightbulb },
  { id: '07', title: 'Cloud Computing', icon: Cloud },
  { id: '08', title: 'Mobile Computing', icon: Smartphone }
];

const ApplicationServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } 
    }
  };

  return (
    <section className="app-services-section">
      <div className="ambient-particles"></div>
      
      <div className="position-relative z-2">
        <div className="text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="badge-glow">
              <Zap size={16} />
              <span>Application Services We Provide</span>
            </div>
            <h2 className="section-subtitle-app">
              8 comprehensive application development solutions for your business
            </h2>
          </motion.div>
        </div>

        <motion.div 
          className="app-services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div key={idx} className="app-card-wrapper" variants={cardVariants}>
                <div className="app-service-card">
                  <div className="card-bg-number">{service.id}</div>
                  
                  <div className="icon-container">
                    <svg
  className="progress-ring"
  viewBox="0 0 60 60"
  width="60"
  height="60"
>
  <circle
    className="progress-bg"
    cx="30"
    cy="30"
    r="28"
  />
  <circle
    className="progress-fg"
    cx="30"
    cy="30"
    r="28"
  />
</svg>
                    <div className="icon-inner">
                      <Icon size={24} strokeWidth={2} />
                    </div>
                  </div>

                  <div className="">
                    <h3 className="card-title-app">{service.title}</h3>
                    {/* <div className="card-underline"></div> */}
                  </div>

                  {/* <div className="card-particles">
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                  </div> */}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ApplicationServicesSection;
