import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, CheckCircle, Globe, Settings, ArrowRight, Sparkles } from 'lucide-react';
import './SimplifyGSTSection.css';

function SimplifyGSTSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cards = [
    {
      id: '01',
      title: 'Complete',
      subtitle: ' Automation',
      desc: 'Automated GST return generation and compliance processes',
      icon: <Sparkles size={32} />,
      color: '#ff6600'
    },
    {
      id: '02',
      title: '100%',
      subtitle: 'Compliance',
      desc: 'Ensure complete compliance with government regulations and requirements',
      icon: <CheckCircle size={32} />,
      color: '#ff6600'
    },
    {
      id: '03',
      title: ' Seamless',
      subtitle: ' Integration',
      desc: 'Easy integration with existing business systems and software',
      icon: <Globe size={32} />,
      color: '#ff6600'
    },
    {
      id: '04',
      title: 'Dedicated',
      subtitle: ' Support',
      desc: '24/7 technical support and expert guidance for all GST needs',
      icon: <Settings size={32} />,
      color: '#ff6600'
    }
  ];

  return (
    <section className="simplify-gst-section section-spacing-lg">
      <div className="container">
        <motion.div
          className="text-center section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.h2 className="main-title" variants={itemVariants}>
            Simplify GST Compliance <span className="highlight">With VGST Solutions</span>
          </motion.h2>

          <motion.div className="info-box" variants={itemVariants}>
            <div className="icon-wrap left-icon"><Monitor size={24} color="#333" /></div>
            <div className="info-content">
              VGST provides comprehensive GST compliance solutions including GST software, e-way bill generation, e-invoicing, and API services. Our solutions offer complete automation, 100% compliance assurance, seamless integration, and dedicated support to simplify your tax compliance journey.
            </div>
            <div className="icon-wrap right-icon"><CheckCircle size={24} color="#333" /></div>
          </motion.div>

          <motion.div className="line-divider" variants={itemVariants}></motion.div>

          <motion.h3 className="sub-title" variants={itemVariants}>
            How VGST <span className="highlight">Solutions Benefit You?</span>
          </motion.h3>
          <motion.p className="sub-desc" variants={itemVariants}>
            Transform your GST compliance process with our cutting-edge solutions
          </motion.p>
        </motion.div>

        <motion.div
          className="cards-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <div className="connecting-line"></div>
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className={`benefit-card ${index === 0 ? '' : ''}`}
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="card-number">{card.id}</div>
              <div className="card-icon-wrap" style={{ color: card.color }}>
                {card.icon}
              </div>
              <h4 className="card-title">
                {card.title}<br /><span>{card.subtitle}</span>
              </h4>
              <p className="card-desc">{card.desc}</p>
              <div className="card-arrow">
                <ArrowRight size={20} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default SimplifyGSTSection;
