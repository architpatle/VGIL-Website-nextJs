import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Clock } from 'lucide-react';
import './MobileBenefitsSection.css';

const MobileBenefitsSection = () => {
  const benefits = [
    {
      title: "Increase",
      highlight: "Productivity With Higher Engagement Rates",
      desc: "Mobile computing enables higher productivity through anytime, anywhere access to business applications",
      icon: TrendingUp,
      color: "#ef4444" // red
    },
    {
      title: "Interact",
      highlight: "With Multiple Users At Once",
      desc: "Connect and collaborate with multiple stakeholders simultaneously through mobile platforms",
      icon: Users,
      color: "#f97316" // orange
    },
    {
      title: "Reduce",
      highlight: "Time With The Ease Of Working",
      desc: "Streamline operations and reduce processing time with efficient mobile workflows",
      icon: Clock,
      color: "#eab308" // yellow
    }
  ];

  return (
    <section className="mc-benefits-section section-spacing-lg">
      <div className="container">
        <motion.div 
        style={{marginBottom:'40px'}}
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mc-section-title">
            Benefit Your Business With <span className="text-red">Mobile Computing</span>
          </h2>
          <p className="mc-section-subtitle">
            Transform your operations with our cutting-edge mobile solutions
          </p>
        </motion.div>

        <div className="row g-4">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div className="col-md-4" key={idx}>
                <motion.div 
                  className="mc-benefit-card h-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="mc-benefit-number">0{idx + 1}</div>
                  <div className="mc-benefit-icon-wrapper" style={{ backgroundColor: `${item.color}15`, color: item.color }}>
                    <Icon size={32} />
                  </div>
                  <h3 className="mc-benefit-title">{item.title}</h3>
                  <h4 className="mc-benefit-highlight" style={{ color: item.color }}>{item.highlight}</h4>
                  <p className="mc-benefit-desc">{item.desc}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MobileBenefitsSection;
