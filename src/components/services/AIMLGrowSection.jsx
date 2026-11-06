import React from 'react';
import { motion } from 'framer-motion';
import {
  Rocket, Eye, ScanFace, AudioLines, FileText, Phone, Mail, Brain, Cpu, Zap, BarChart3
} from 'lucide-react';
import './AIMLGrowSection.css';

const AIMLGrowSection = () => {
  const useCases = [
    { title: 'Face Recognition', desc: 'Identify & verify individuals', icon: ScanFace },
    { title: 'Image Recognition', desc: 'Detect & classify visual objects', icon: Eye },
    { title: 'Speech Recognition', desc: 'Convert speech to actions', icon: AudioLines },
    { title: 'Data Classification', desc: 'Categorize & sort data sets', icon: FileText },
  ];

  const techTags = [
    'Data Classification', 'Correlation', 'Extrapolation',
    'Pattern Detection', 'Object Identification', 'Automated Reasoning',
    'Problem Solving', 'Email Categorization'
  ];

  const sparkles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    bottom: Math.random() * 30,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 3,
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section className="ai-grow-section section-spacing-lg">
      <div className="container">
        {/* Header */}
        <motion.div
          className="ai-grow-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="ai-grow-badge">
            <Rocket size={14} /> Core Technologies
          </div>
          <h2 className="ai-grow-title">
            Grow With Our Core <span className="text-red">AI Technologies</span>
          </h2>
          <p className="ai-grow-subtitle">
            Harness the power of cutting-edge AI technologies to drive innovation and growth
          </p>
        </motion.div>

        {/* Recognition Card */}
        <motion.div
          className="ai-grow-main-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="ai-grow-main-inner">
            <div className="ai-grow-main-content">
              <div className="ai-grow-main-tag">
                <Brain size={14} /> Core Technology
              </div>
              <h3 className="ai-grow-main-title">Recognition</h3>
              <p className="ai-grow-main-desc">
                With techniques like data classification, correlation & extrapolation, machines have automated reasoning & problem solving, an example of which is categorizing e-mails. Similarly the ability to find patterns or detect & identify objects & other data has helped develop applications enabling face recognition, image recognition, speech recognition, etc. further making our devices smarter to respond to our needs better.
              </p>
              <div className="ai-grow-tech-tags">
                {techTags.map((tag, i) => (
                  <motion.span
                    key={i}
                    className="ai-grow-tech-tag"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="ai-grow-tech-dot"></span>
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
            <div className="ai-grow-main-visual">
              <img
                src="https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=2000&auto=format&fit=crop"
                alt="AI Recognition Technology"
              />
              <div className="ai-grow-main-visual-overlay"></div>
            </div>
          </div>
        </motion.div>

        {/* Use Case Cards */}
        <motion.div
          className="ai-grow-usecases"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {useCases.map((uc, index) => {
            const Icon = uc.icon;
            return (
              <motion.div
                key={index}
                className="ai-grow-usecase"
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
              >
                <div className="ai-grow-usecase-icon">
                  <Icon size={26} color="#ff3300" strokeWidth={1.5} />
                </div>
                <h4 className="ai-grow-usecase-title">{uc.title}</h4>
                <p className="ai-grow-usecase-desc">{uc.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="ai-grow-cta"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.175, 0.885, 0.32, 1.275] }}
          id="get-in-touch"
        >
          <div className="ai-grow-cta-pattern"></div>
          <div className="ai-grow-cta-grid"></div>
          <div className="ai-grow-cta-circle ai-grow-cta-circle-1"></div>
          <div className="ai-grow-cta-circle ai-grow-cta-circle-2"></div>

          <div className="ai-grow-cta-sparkles">
            {sparkles.map(s => (
              <div
                key={s.id}
                className="ai-grow-cta-sparkle"
                style={{
                  left: `${s.left}%`,
                  bottom: `${s.bottom}%`,
                  animationDelay: `${s.delay}s`,
                  animationDuration: `${s.duration}s`,
                }}
              />
            ))}
          </div>

          <div className="ai-grow-cta-content">
            <motion.div
              className="ai-grow-cta-icon-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <motion.div className="ai-grow-cta-icon-bubble" whileHover={{ scale: 1.1, rotate: 10 }}>
                <Brain size={20} />
              </motion.div>
              <motion.div className="ai-grow-cta-icon-bubble" whileHover={{ scale: 1.1, rotate: -10 }}>
                <Cpu size={20} />
              </motion.div>
              <motion.div className="ai-grow-cta-icon-bubble" whileHover={{ scale: 1.1, rotate: 10 }}>
                <BarChart3 size={20} />
              </motion.div>
              <motion.div className="ai-grow-cta-icon-bubble" whileHover={{ scale: 1.1, rotate: -10 }}>
                <Zap size={20} />
              </motion.div>
            </motion.div>

            <motion.h2
              className="ai-grow-cta-headline"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Start Your AI Transformation Today
            </motion.h2>

            <motion.p
              className="ai-grow-cta-desc"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Schedule a free consultation with our AI experts and discover how we can optimize your operations.
            </motion.p>

            <motion.div
              className="ai-grow-cta-buttons"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <motion.a
                href="tel:+916262686865"
                className="ai-grow-cta-btn ai-grow-cta-btn-white"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="ai-grow-cta-btn-icon">
                  <Phone size={18} />
                </div>
                Call Now: +91 6262686865
              </motion.a>

              <motion.a
                href="mailto:presales@vginfotech.ai"
                className="ai-grow-cta-btn ai-grow-cta-btn-outline"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="ai-grow-cta-btn-icon">
                  <Mail size={18} />
                </div>
                Email: presales@vginfotech.ai
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIMLGrowSection;
