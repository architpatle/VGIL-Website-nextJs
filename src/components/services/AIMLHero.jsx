import React from 'react';
import { motion } from 'framer-motion';
import Link from "next/link";
import { Brain, ArrowRight, Cpu, Eye, MessageSquare, BarChart3 } from 'lucide-react';
import './AIMLHero.css';

const AIMLHero = () => {
  // Neural network nodes
  const nodes = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 4,
    size: Math.random() * 4 + 4,
  }));

  // Neural lines
  const lines = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 80,
    y: Math.random() * 100,
    width: Math.random() * 200 + 100,
    angle: Math.random() * 60 - 30,
  }));

  return (
    <section className="ai-hero-section">
      {/* Background */}
      {/* <div className="ai-hero-grid"></div>
      <div className="ai-hero-orb ai-hero-orb-1"></div>
      <div className="ai-hero-orb ai-hero-orb-2"></div>
      <div className="ai-hero-orb ai-hero-orb-3"></div> */}

      {/* Neural network */}
      {/* <div className="ai-hero-neural-bg">
        {nodes.map(n => (
          <div
            key={n.id}
            className="ai-hero-neural-node"
            style={{
              left: `${n.x}%`,
              top: `${n.y}%`,
              width: `${n.size}px`,
              height: `${n.size}px`,
              animationDelay: `${n.delay}s`,
            }}
          />
        ))}
        {lines.map(l => (
          <div
            key={l.id}
            className="ai-hero-neural-line"
            style={{
              left: `${l.x}%`,
              top: `${l.y}%`,
              width: `${l.width}px`,
              transform: `rotate(${l.angle}deg)`,
            }}
          />
        ))}
      </div> */}

      <div className="container position-relative z-2">
        <div className="row align-items-center">
          <div className="col-lg-12 ai-hero-content text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="ai-hero-badge mx-auto">
                <span className="badge-dot" ></span>  AI & Machine Learning
              </div>

              <h1 className="ai-hero-title">
                {/* <span className="ai-gradient-text">Artificial Intelligence</span> Solutions */}
                Artificial Intelligence Solutions

              </h1>

              <p className="ai-hero-desc mx-auto">
                Automating & augmenting operations with AI to enhance performance and transform your business. Transforming businesses through intelligent automation and data-driven insights.
              </p>

              {/* <p className="ai-hero-sub-desc mx-auto">
                
              </p> */}

              {/* <div className="ai-hero-actions">
                <a href="#get-in-touch" className="ai-btn-primary">
                  Get In Touch <ArrowRight size={18} />
                </a>
                <a href="#ai-services" className="ai-btn-outline">
                  Explore AI Services
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
              
            </motion.div>
          </div>

          <div className="col-lg-5">
            <motion.div
              className="ai-hero-visual"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              <div className="ai-brain-container">
                {/* Rotating rings */}
                <div className="ai-brain-ring ai-brain-ring-1">
                  <div className="ai-ring-node ai-ring-node-1"></div>
                  <div className="ai-ring-node ai-ring-node-2"></div>
                </div>
                <div className="ai-brain-ring ai-brain-ring-2">
                  <div className="ai-ring-node ai-ring-node-3"></div>
                  <div className="ai-ring-node ai-ring-node-4"></div>
                </div>
                <div className="ai-brain-ring ai-brain-ring-3"></div>

                {/* Center icon */}
                <motion.div
                  className="ai-brain-center"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                >
                  <Brain size={48} color="#ff3300" strokeWidth={1.5} />
                </motion.div>

                {/* Floating tags */}
                <motion.div
                  className="ai-float-tag ai-float-tag-1"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                >
                  <div className="ai-float-tag-icon">
                    <Eye size={18} color="#ff5533" />
                  </div>
                  <span className="ai-float-tag-text">Computer Vision</span>
                </motion.div>

                <motion.div
                  className="ai-float-tag ai-float-tag-2"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
                >
                  <div className="ai-float-tag-icon">
                    <MessageSquare size={18} color="#ff5533" />
                  </div>
                  <span className="ai-float-tag-text">NLP</span>
                </motion.div>

                <motion.div
                  className="ai-float-tag ai-float-tag-3"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 0.5 }}
                >
                  <div className="ai-float-tag-icon">
                    <Cpu size={18} color="#ff5533" />
                  </div>
                  <span className="ai-float-tag-text">RPA</span>
                </motion.div>

                <motion.div
                  className="ai-float-tag ai-float-tag-4"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut', delay: 2 }}
                >
                  <div className="ai-float-tag-icon">
                    <BarChart3 size={18} color="#ff5533" />
                  </div>
                  <span className="ai-float-tag-text">Analytics</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* <div className="ai-scroll-indicator">
        <div className="ai-scroll-line"></div>
        <span className="ai-scroll-text">Scroll</span>
      </div> */}
    </section>
  );
};

export default AIMLHero;
