import React from 'react';
import { motion } from 'framer-motion';
import {
  Handshake, Map, Briefcase, Percent, HeadphonesIcon, Megaphone,
  UserCircle, TrendingUp, Globe, ShieldCheck, Target, Users, ArrowRight
} from 'lucide-react';
import Link from "next/link";
import './ASPProgramSection.css';

const ASPProgramSection = () => {
  return (
    <section className="asp-program-section section-spacing-lg">
      <div className="container">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="asp-title">
            ASP (Application Service Provider) Program<br />
            Achieve more with <span className="highlight-red">VGST</span>
          </h2>
          <div className="title-underline">
            <span className="dot"></span>
          </div>
        </motion.div>

        <div className="row g-4 align-items-stretch">
          {/* Left Side: Partner Program Card */}
          <div className="col-lg-5">
            <motion.div
              className="asp-left-card h-100"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="asp-card-decor"></div>

              <div className="asp-handshake-wrapper">
                <div className="ring ring-1"></div>
                <div className="ring ring-2"></div>
                <div className="ring ring-3"></div>
                <div className="icon-center">
                  <Handshake size={48} color="#ff3300" strokeWidth={1.5} />
                </div>
                <div className="floating-dot dot-1"></div>
                <div className="floating-dot dot-2"></div>
                <div className="floating-dot dot-3"></div>
              </div>

              <div className="asp-main-text">
                <h3>Partner Program</h3>
                <p>Join our partner network<br />and grow your business</p>
              </div>

              <div className="asp-left-metrics">
                <div className="metric-item">
                  <div className="m-icon"><TrendingUp size={20} /></div>
                  <span>Grow Revenue</span>
                </div>
                <div className="metric-item">
                  <div className="m-icon"><Globe size={20} /></div>
                  <span>Expand Reach</span>
                </div>
                <div className="metric-item">
                  <div className="m-icon"><ShieldCheck size={20} /></div>
                  <span>Build Trust</span>
                </div>
                <div className="metric-item">
                  <div className="m-icon"><Target size={20} /></div>
                  <span>Create Impact</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Stacked Cards */}
          <div className="col-lg-7">
            <div className="d-flex flex-column h-100 gap-4">

              {/* Top Card */}
              <motion.div
                className="asp-right-card top-card"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="row g-0">
                  <div className="col-md-6 d-flex align-items-center p-4 right-border">
                    <div className="r-icon-box"><Map size={24} /></div>
                    <p className="r-text">Partner programs enabling the inner entrepreneurial spirits across India</p>
                  </div>
                  <div className="col-md-6 d-flex align-items-center p-4">
                    <div className="r-icon-box"><Briefcase size={24} /></div>
                    <p className="r-text">Sell compliance products from VGIL and grow your business</p>
                  </div>
                </div>
              </motion.div>

              {/* Middle Card */}
              <motion.div
                className="asp-right-card mid-card flex-grow-1"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="benefits-header">
                  <span className="line"></span>
                  <span className="text">Partner Benefits</span>
                  <span className="line"></span>
                </div>

                <div className="benefits-grid">
                  <div className="benefit-item">
                    <div className="b-icon-wrap"><Percent size={24} /></div>
                    <span>Competitive commission structure</span>
                  </div>
                  <div className="benefit-item">
                    <div className="b-icon-wrap"><HeadphonesIcon size={24} /></div>
                    <span>Technical training and support</span>
                  </div>
                  <div className="benefit-item">
                    <div className="b-icon-wrap"><Megaphone size={24} /></div>
                    <span>Marketing collateral and resources</span>
                  </div>
                  <div className="benefit-item">
                    <div className="b-icon-wrap"><UserCircle size={24} /></div>
                    <span>Dedicated account manager</span>
                  </div>
                </div>
              </motion.div>

              {/* Bottom Card */}
              <motion.div
                className="asp-right-card bottom-card"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="d-flex align-items-center flex-wrap gap-24 p-4">
                  <div className="bot-icon-wrap">
                    <Users size={28} />
                  </div>
                  <div className="bot-text-wrap flex-grow-1">
                    <h4>Together, let's unlock new opportunities</h4>
                    <p>Be a part of our growth journey and create long-term success together.</p>
                  </div>
                  <Link href='/contact'>
                    <button className="asp-cta-btn">
                      Become a Partner <ArrowRight size={18} />
                    </button></Link>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ASPProgramSection;
