import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Shield, Trash2, ArrowRight } from 'lucide-react';
import './PortfolioAssessmentSection.css';

const PortfolioAssessmentSection = () => {
  // Each card animates its own ring fill on mount, same as the red card did.
  const [progress, setProgress] = useState({ card1: 0, card2: 0, card3: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress({ card1: 40, card2: 30, card3: 100 }); // card1: 30-50%, card2: 20-40%, card3: full ring for "100x"
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const getOffset = (value) => circumference - (value / 100) * circumference;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="portfolio-assessment-section section-spacing-lg effectFade fadeUp">
      <div className="portfolio-bg-particles"></div>

      <div className="position-relative z-1">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="d-flex justify-content-center align-items-center mb-2 gap-2">
            <h2 className="portfolio-heading section-heading-responsive mb-0">
              <span>Save With</span> Application Portfolio Assessment
            </h2>
          </div>
          <p className="portfolio-subtitle">
            Maximize ROI and optimize your application investments
          </p>
        </motion.div>

        <motion.div
          className="portfolio-cards-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Card 1: Red Gradient */}
          <motion.div variants={cardVariants} className="portfolio-card card-red">
            <div className="glossy-wave"></div>
            <div className="position-relative z-1 h-100 d-flex flex-column">
              <div className="card-top">
                <div className="icon-box">
                  <Cpu size={28} color="#ffffff" />
                </div>
                <div className="progress-ring-container">
                  <svg className="progress-ring-circle" width="80" height="80">
                    <circle stroke="rgba(255,255,255,0.2)" strokeWidth="6" fill="transparent" r={radius} cx="40" cy="40" />
                    <circle
                      stroke="#ffffff"
                      strokeWidth="6"
                      strokeLinecap="round"
                      fill="transparent"
                      r={radius}
                      cx="40"
                      cy="40"
                      style={{ strokeDasharray: circumference, strokeDashoffset: getOffset(progress.card1) }}
                    />
                  </svg>
                  <div className="progress-text text-white">30%-50%</div>
                </div>
              </div>
              <div className="card-bottom-rowa">
                <div className="card-number">01</div>
                <div className="card-bottom-content">
                  <h3 className="card-title-common">Reduce</h3>
                  <p className="card-desc-common">Operation Support Costs by 30%-50%</p>
                  <p className="card-desc-common mt-2" style={{ fontSize: '13px', opacity: 0.8 }}>
                    Significant cost savings through optimized application support and management
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Glassmorphism */}
          <motion.div variants={cardVariants} className="portfolio-card card-glass">
            <div className="position-relative z-1 h-100 d-flex flex-column">
              <div className="card-top">
                <div className="icon-box">
                  {/* <div className="pulse-glow"></div> */}
                  <span className="icon-inner">
                    <Shield size={28} color="#22c55e" />
                  </span>
                </div>
                <div className="progress-ring-container">
                  <svg className="progress-ring-circle" width="80" height="80">
                    <circle stroke="#e2e8f0" strokeWidth="6" fill="transparent" r={radius} cx="40" cy="40" />
                    <circle
                      stroke="#22c55e"
                      strokeWidth="6"
                      strokeLinecap="round"
                      fill="transparent"
                      r={radius}
                      cx="40"
                      cy="40"
                      style={{ strokeDasharray: circumference, strokeDashoffset: getOffset(progress.card2) }}
                    />
                  </svg>
                  <div className="progress-text text-dark">20%-40%</div>
                </div>
              </div>
              <div className="card-bottom-row">
                <div className="card-number">02</div>
                <div className="card-bottom-content">
                  <h3 className="card-title-common text-dark">Optimize</h3>
                  <p className="card-desc-common">Server Consolidation by 20%-40%</p>
                  <p className="card-desc-common mt-2" style={{ fontSize: '13px', opacity: 0.8 }}>
                    Efficient resource utilization and infrastructure optimization
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Orange Gradient */}
          <motion.div variants={cardVariants} className="portfolio-card card-orange">
            <div className="position-relative z-1 h-100 d-flex flex-column">
              <div className="card-top">
                <div className="icon-box">
                  <Trash2 size={28} color="#ffffff" />
                </div>
                <div className="progress-ring-container">
                  <svg className="progress-ring-circle" width="80" height="80">
                    <circle stroke="rgba(255,255,255,0.2)" strokeWidth="6" fill="transparent" r={radius} cx="40" cy="40" />
                    <circle
                      stroke="#ffffff"
                      strokeWidth="6"
                      strokeLinecap="round"
                      fill="transparent"
                      r={radius}
                      cx="40"
                      cy="40"
                      style={{ strokeDasharray: circumference, strokeDashoffset: getOffset(progress.card3) }}
                    />
                  </svg>
                  <div className="progress-text text-white">100x</div>
                </div>
              </div>
              <div className="card-bottom-row">
                <div className="card-number">03</div>
                <div className="card-bottom-content">
                  <h3 className="card-title-common">Save</h3>
                  <p className="card-desc-common">Support Costs by Retiring Inefficient Applications</p>
                  <p className="card-desc-common mt-2" style={{ fontSize: '13px', opacity: 0.8 }}>
                    Eliminate redundant applications to reduce maintenance overhead
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioAssessmentSection;