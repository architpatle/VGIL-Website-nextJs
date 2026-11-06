import React from 'react';
import { motion } from 'framer-motion';
import { Network, ArrowRight } from 'lucide-react';
import './DRDCSolveSection.css';
import Link from "next/link";
import dcdrImg from '../../../public/assets/images/services/disaster_recovery.png'

const DRDCSolveSection = () => {
  return (
    <section className="dr-solve-section section-spacing-lg">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <motion.div
              className="dr-solve-image-wrapper"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="dr-solve-backdrop"></div>
              <img
                src={dcdrImg.src}
                alt="Data Center Server Room"
                className="img-fluid dr-solve-img"
              />
              <div className="dr-solve-overlay-card">
                <Network size={32} color="#ff3300" />
                <h4 className="mt-3">Lower Cost of Ownership</h4>
              </div>
            </motion.div>
          </div>

          <div className="col-lg-6">
            <motion.div
              className="dr-solve-content"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="dr-section-title mb-4">
                Solve IT Infrastructure Issues With <span className="text-red">DC & DR</span>
              </h2>
              <div className="dr-solve-text-box">
                <p className="dr-section-desc">
                  VGIL provides comprehensive Data Centre and Disaster Recovery solutions to help you centralize your IT infrastructure, operations, storage and security management.
                </p>
                <p className="dr-section-desc mb-0">
                  Our solutions offer high optimization, lowest latency, scalability on demand, and complete data centre management with lower cost of ownership.
                </p>
              </div>
              {/* <Link to='/services/dc-dr/#services'> */}
                <a href='#servicesDRDC' className="btn-outline-dr mt-4">
                  Explore Services <ArrowRight size={18} className="ms-2" />
                </a>
              {/* </Link> */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DRDCSolveSection;
