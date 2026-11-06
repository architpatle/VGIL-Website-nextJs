import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Rocket, Globe, BarChart3, Zap } from 'lucide-react';
import './DigitalCTASection.css';

const DigitalCTASection = () => {
  const sparkles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    bottom: Math.random() * 30,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 3,
  }));

  return (
    <section className="ds-cta-section" id="get-in-touch">
      <div className="container">
        <motion.div
          className="ds-cta-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.175, 0.885, 0.32, 1.275] }}
        >
          {/* Background Effects */}
          <div className="ds-cta-pattern"></div>
          <div className="ds-cta-grid-overlay"></div>
          <div className="ds-cta-circle ds-cta-circle-1"></div>
          <div className="ds-cta-circle ds-cta-circle-2"></div>
          <div className="ds-cta-circle ds-cta-circle-3"></div>

          {/* Sparkles */}
          <div className="ds-cta-sparkles">
            {sparkles.map((s) => (
              <div
                key={s.id}
                className="ds-cta-sparkle"
                style={{
                  left: `${s.left}%`,
                  bottom: `${s.bottom}%`,
                  animationDelay: `${s.delay}s`,
                  animationDuration: `${s.duration}s`,
                }}
              />
            ))}
          </div>

          {/* Content */}
          <div className="ds-cta-content">
            <motion.div
              className="ds-cta-icon-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <motion.div
                className="ds-cta-icon-bubble"
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <Rocket size={22} />
              </motion.div>
              <motion.div
                className="ds-cta-icon-bubble"
                whileHover={{ scale: 1.1, rotate: -10 }}
              >
                <Globe size={22} />
              </motion.div>
              <motion.div
                className="ds-cta-icon-bubble"
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <BarChart3 size={22} />
              </motion.div>
              <motion.div
                className="ds-cta-icon-bubble"
                whileHover={{ scale: 1.1, rotate: -10 }}
              >
                <Zap size={22} />
              </motion.div>
            </motion.div>

            <motion.h2
              className="ds-cta-headline"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Transform Your Digital Presence Today
            </motion.h2>

            <motion.p
              className="ds-cta-desc"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Schedule a free consultation with our digital marketing experts and discover how we can optimize your online presence.
            </motion.p>

            <motion.div
              className="ds-cta-buttons"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <motion.a
                href="tel:+916262686865"
                className="ds-cta-btn ds-cta-btn-white"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="ds-cta-btn-icon">
                  <Phone size={18} />
                </div>
                Call Now: +91 6262686865
              </motion.a>

              <motion.a
                href="mailto:presales@vginfotech.ai"
                className="ds-cta-btn ds-cta-btn-outline"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="ds-cta-btn-icon">
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

export default DigitalCTASection;
