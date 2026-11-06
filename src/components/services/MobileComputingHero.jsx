import React from 'react';
import { motion } from 'framer-motion';
import Link from "next/link";
import { Smartphone, ShieldCheck, Zap } from 'lucide-react';
import './MobileComputingHero.css';

const MobileComputingHero = () => {
  return (
    <section className="mc-hero-section">
      {/* <div className="mc-hero-bg">
        <div className="mc-circle mc-circle-1"></div>
        <div className="mc-circle mc-circle-2"></div>
      </div> */}

      <div className="container position-relative z-2">
        <div className="row align-items-center">
          <div className="col-lg-12 mc-hero-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mc-badge mx-auto">
                <span className="badge-dot" ></span>
                Mobile Computing Services

              </div>
              <h1 className="mc-hero-title text-center">
                Mobile Computing Solutions
                {/* <span className="text-red">Solutions</span> */}
              </h1>
              <p className="mc-hero-desc text-center mx-auto">
                Redefining computing with mobile computing techniques to facilitate movement of mobile devices anywhere. Improve Business Productivity and security with mobile computing Services.
              </p>

              {/* <div className="mc-hero-actions mt-4">
                <a href="#contact" className="btn-primary-mc">
                  Get In Touch &rarr;
                </a>
                <div className="mc-hero-features mt-4 d-flex gap-4">
                   <div className="d-flex align-items-center gap-2 text-dark font-weight-bold">
                     <ShieldCheck size={20} color="#ff3300" /> Secure
                   </div>
                   <div className="d-flex align-items-center gap-2 text-dark font-weight-bold">
                     <Zap size={20} color="#ff3300" /> Fast
                   </div>
                </div>
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
            </motion.div>
          </div>

          {/* <div className="col-lg-6">
             <motion.div 
               className="mc-hero-visual"
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, delay: 0.2 }}
             >
                <div className="mc-phone-mockup">
                   <div className="mc-phone-screen">
                      <div className="mc-phone-header">
                        <div className="mc-notch"></div>
                      </div>
                      <motion.div 
                        className="mc-app-card mt-4"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                      >
                         <Smartphone size={32} color="#ff3300" />
                         <div className="mc-app-line mt-3 w-75"></div>
                         <div className="mc-app-line mt-2 w-50"></div>
                      </motion.div>
                      <motion.div 
                        className="mc-app-card mc-app-card-2"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                      >
                         <ShieldCheck size={24} color="#22c55e" />
                         <div className="mc-app-line mt-2 w-100"></div>
                      </motion.div>
                   </div>
                </div>
             </motion.div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default MobileComputingHero;
