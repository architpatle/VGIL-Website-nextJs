import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Zap, ShieldCheck } from 'lucide-react';
import './DRDCOptimizeSection.css';

const DRDCOptimizeSection = () => {
  return (
    <section className="dr-optimize-section section-spacing-lg">
      <div className="container position-relative z-2">
        <motion.div
          className="text-center"
          style={{ marginBottom: '40px' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="dr-section-title">
            Optimize Your <span className="text-red">IT Infrastructure</span>
          </h2>
          <p className="dr-section-subtitle">
            Comprehensive data center and disaster recovery services
          </p>
        </motion.div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <motion.div
              className="dr-optimize-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="row align-items-center">
                <div className="col-md-5">
                  <div className="dr-opt-visual">
                    <div className="dr-opt-ring"></div>
                    <div className="dr-opt-ring dr-opt-ring-2"></div>
                    <ShieldCheck size={64} color="#ff3300" className="dr-opt-icon-main" />
                  </div>
                </div>
                <div className="col-md-7">
                  <h3 className="dr-opt-title">Data Centre</h3>
                  <p className="dr-opt-desc">
                    VGIL's offers Data Centre with all-in-one solution, an automated system is designed to manage various aspects of data centre easily, efficiently and quickly.
                  </p>

                  <div className="dr-opt-features">
                    <div className="dr-opt-feature-item">
                      <div className="dr-opt-f-icon"><Zap size={20} /></div>
                      <span>Power Protection</span>
                    </div>
                    <div className="dr-opt-feature-item">
                      <div className="dr-opt-f-icon"><Lock size={20} /></div>
                      <span>Increased Security</span>
                    </div>
                    <div className="dr-opt-feature-item">
                      <div className="dr-opt-f-icon"><ShieldCheck size={20} /></div>
                      <span>Privacy & Flexibility</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DRDCOptimizeSection;
