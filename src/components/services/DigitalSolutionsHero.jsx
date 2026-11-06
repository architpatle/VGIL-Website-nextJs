import React from 'react';
import { motion } from 'framer-motion';
import Link from "next/link";
import { Megaphone, TrendingUp, BarChart3, Globe, ArrowRight } from 'lucide-react';
import './DigitalSolutionsHero.css';

const DigitalSolutionsHero = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    delay: Math.random() * 8,
    duration: Math.random() * 8 + 10,
  }));

  return (
    <section className="ds-hero-section">
      {/* Background Elements */}
      {/* <div className="ds-hero-bg-mesh"></div>
      <div className="ds-hero-grid"></div>
      <div className="ds-hero-orb ds-hero-orb-1"></div>
      <div className="ds-hero-orb ds-hero-orb-2"></div>
      <div className="ds-hero-orb ds-hero-orb-3"></div> */}

      {/* Floating Particles */}
      {/* <div className="ds-hero-particles">
        {particles.map(p => (
          <div
            key={p.id}
            className="ds-hero-particle"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: `${p.left}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div> */}

      <div className="container position-relative z-2 text-center">
        <div className="row align-items-center">
          <div className="col-lg-12 ds-hero-content">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="ds-hero-badge mx-auto">
                <span className="badge-dot" ></span> Digital Marketing Solutions
              </div>

              <h1 className="ds-hero-title ">
                {/* Get the <span className="ds-text-gradient">Digital Marketing</span> Solution You Need */}
                Digital Marketing
              </h1>

              <p className="ds-hero-desc mx-auto">
                Get the digital marketing solution and Online marketing Services you need. We offer online solutions for all your digital channels including Social Media, SEO and More.
              </p>

              {/* <div className="ds-hero-actions mx-auto">
                <a href="#get-in-touch" className="ds-btn-primary">
                  Get In Touch <ArrowRight size={18} />
                </a>
                <a href="#services" className="ds-btn-outline">
                  Explore Services
                </a>
              </div> */}

              <div className="hero-cta-btns mt-4">
                <Link
                  href="/contact"
                  className="btn-primary-hero"

                >
                  Get In Touch &rarr;
                </Link>

                <Link
                  href="/ai"
                  className="btn-secondary-hero"

                >Explore More</Link>
              </div>

              {/* <div className="ds-hero-stats-bar">
                <motion.div
                  className="ds-hero-stat"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <div className="ds-hero-stat-value">300+</div>
                  <div className="ds-hero-stat-label">Digital Projects</div>
                </motion.div>
                <motion.div
                  className="ds-hero-stat"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  <div className="ds-hero-stat-value">40%</div>
                  <div className="ds-hero-stat-label">Revenue Growth</div>
                </motion.div>
                <motion.div
                  className="ds-hero-stat"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                >
                  <div className="ds-hero-stat-value">25%</div>
                  <div className="ds-hero-stat-label">Cost Reduction</div>
                </motion.div>
              </div> */}
            </motion.div>
          </div>

          {/* <div className="col-lg-5">
            <motion.div
              className="ds-hero-visual-wrapper"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="ds-hero-card-stack">
                <motion.div
                  className="ds-floating-card ds-card-1"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                >
                  <div className="ds-card-icon-wrap">
                    <TrendingUp size={24} color="#ff3300" />
                  </div>
                  <div className="ds-card-label">Traffic Growth</div>
                  <div className="ds-card-value">+60% increase</div>
                  <div className="ds-card-bar">
                    <motion.div
                      className="ds-card-bar-fill"
                      initial={{ width: 0 }}
                      animate={{ width: '75%' }}
                      transition={{ delay: 1, duration: 1.5 }}
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="ds-floating-card ds-card-2"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 1 }}
                >
                  <div className="ds-card-icon-wrap">
                    <BarChart3 size={24} color="#ff5533" />
                  </div>
                  <div className="ds-card-label">Conversion Rate</div>
                  <div className="ds-card-value">+45% boost</div>
                  <div className="ds-card-bar">
                    <motion.div
                      className="ds-card-bar-fill"
                      initial={{ width: 0 }}
                      animate={{ width: '60%' }}
                      transition={{ delay: 1.3, duration: 1.5 }}
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="ds-floating-card ds-card-3"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut', delay: 2 }}
                >
                  <div className="ds-card-icon-wrap">
                    <Globe size={24} color="#ff7733" />
                  </div>
                  <div className="ds-card-label">Brand Visibility</div>
                  <div className="ds-card-value">Multi-platform reach</div>
                  <div className="ds-card-bar">
                    <motion.div
                      className="ds-card-bar-fill"
                      initial={{ width: 0 }}
                      animate={{ width: '85%' }}
                      transition={{ delay: 1.6, duration: 1.5 }}
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="ds-floating-card ds-card-4"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut', delay: 0.5 }}
                >
                  <div className="ds-card-icon-wrap">
                    <Megaphone size={24} color="#ff3300" />
                  </div>
                  <div className="ds-card-label">ROI Optimized</div>
                  <div className="ds-card-value">Max returns</div>
                </motion.div>
              </div>
            </motion.div>
          </div> */}
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="ds-scroll-indicator">
        <div className="ds-scroll-line"></div>
        <span className="ds-scroll-text">Scroll</span>
      </div> */}
    </section>
  );
};

export default DigitalSolutionsHero;
