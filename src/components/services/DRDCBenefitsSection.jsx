import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, Maximize, CheckCircle } from 'lucide-react';
import './DRDCBenefitsSection.css';

const DRDCBenefitsSection = () => {
  const benefits = [
    {
      title: "High Optimization",
      desc: "Maximum efficiency in data center operations and resource utilization",
      icon: Zap
    },
    {
      title: "Lowest Latency",
      desc: "Minimal delay in data transmission and processing",
      icon: Clock
    },
    {
      title: "Scalability on Demand",
      desc: "Flexible resource allocation based on business needs",
      icon: Maximize
    },
    {
      title: "Complete Data Centre Management",
      desc: "End-to-end management of your data center infrastructure",
      icon: CheckCircle
    }
  ];

  return (
    <section className="dr-benefits-section section-spacing-lg">
      <div className="container">
        <motion.div
          className="text-center"
          style={{ marginBottom: '40px' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="dr-section-title">
            How VGIL's DC & DR Solutions <span className="text-red">Benefit You?</span>
          </h2>
          <p className="dr-section-subtitle">
            Transform your IT infrastructure with our cutting-edge data center solutions
          </p>
        </motion.div>

        <div className="row g-4">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div className="col-md-6 col-lg-3" key={idx}>
                <motion.div
                  className="dr-benefit-card h-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="dr-benefit-icon-wrapper">
                    <Icon size={32} />
                  </div>
                  <h3 className="dr-benefit-title">{item.title}</h3>
                  <p className="dr-benefit-desc">{item.desc}</p>
                  <div className="dr-benefit-progress"></div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DRDCBenefitsSection;
