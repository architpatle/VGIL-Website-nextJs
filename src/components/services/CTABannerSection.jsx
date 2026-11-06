import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import './CTABannerSection.css';

const CTABannerSection = ({ title, subtitle }) => {
  const displayTitle = title || "Ready to Transform Your GST Compliance?";
  const displaySubtitle = subtitle || "Schedule a free consultation with our VGST experts and discover how smart technology can streamline your compliance journey.";

  return (
    <section className="cta-banner-wrapper section-spacing-lg">
      <div className="cta-banner-container">
        <motion.div 
          className="cta-banner-card section-spacing-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275] }}
        >
          {/* Background Elements */}
          <div className="cta-wave"></div>
          <div className="cta-circle-left"></div>
          <div className="cta-circle-right"></div>
          <div className="cta-dots-left"></div>
          <div className="cta-dots-right"></div>

          {/* Particles */}
          <div className="cta-particles">
            {[...Array(12)].map((_, i) => (
              <div 
                key={i} 
                className="cta-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 4 + 2}px`,
                  height: `${Math.random() * 4 + 2}px`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${Math.random() * 5 + 5}s`
                }}
              ></div>
            ))}
          </div>

          {/* Edge Icons */}
          <div className="cta-edge-icon cta-edge-icon-left">
            <div className="cta-edge-icon-ring"></div>
            <div className="cta-edge-icon-ring"></div>
            <Phone size={32} color="rgba(255,255,255,0.6)" strokeWidth={1.5} />
          </div>

          <div className="cta-edge-icon cta-edge-icon-right">
            <div className="cta-edge-icon-ring"></div>
            <div className="cta-edge-icon-ring"></div>
            <Mail size={32} color="rgba(255,255,255,0.6)" strokeWidth={1.5} />
          </div>

          {/* Main Content */}
          <div className="cta-content">
            <motion.h2 
              className="cta-headline"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {displayTitle}
            </motion.h2>
            
            <motion.p 
              className="cta-subheadline"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {displaySubtitle}
            </motion.p>

            <div className="cta-buttons-wrapper">
              <motion.a 
                href="tel:+916262686865" 
                className="cta-btn cta-btn-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <div className="cta-btn-icon-wrapper">
                  <Phone size={18} strokeWidth={2.5} />
                </div>
                Call Now: +91 6262686865
              </motion.a>

              <motion.a 
                href="mailto:presales@vginfotech.ai" 
                className="cta-btn cta-btn-right"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div className="cta-btn-icon-wrapper-outline">
                  <Mail size={18} strokeWidth={2} />
                </div>
                Email: presales@vginfotech.ai
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABannerSection;
