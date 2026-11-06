import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp } from 'lucide-react';
import './DigitalSolutionAbout.css';

const DigitalSolutionAbout = () => {
  return (
    <section className="ds-about-section section-spacing-lg">
      <div className="ds-about-decoration ds-about-deco-1"></div>
      <div className="ds-about-decoration ds-about-deco-2"></div>

      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <motion.div
              className="ds-about-image-wrap"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="ds-about-shape-dots"></div>
              <div className="ds-about-image-main">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop"
                  alt="Digital Marketing Strategy"
                />
                <div className="ds-about-image-overlay"></div>
              </div>
              <motion.div
                className="ds-about-float-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="ds-about-float-icon">
                  <TrendingUp size={24} />
                </div>
                <div className="ds-about-float-text">
                  <h4>40%-60%</h4>
                  <span>Traffic Growth</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="ds-about-badge">
                <Target size={14} /> Digital Marketing Solution
              </div>

              <h2 className="ds-about-title">
                Driving Business Growth Through <span className="text-red">Optimized Digital Marketing</span>
              </h2>

              <p className="ds-about-subtitle">
                Driving business growth through optimized digital marketing and online presence.
              </p>

              <p className="ds-about-text">
                In today's challenging and fast paced market, it has always remained a very tough task for many companies to bridge the gap between their online and offline marketing efforts. Online marketing is meant for building traffic and mainly focuses in converting these traffic into sales.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalSolutionAbout;
