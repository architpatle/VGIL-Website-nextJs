import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Brain } from 'lucide-react';
import './AIMLSolveSection.css';
import complexAI from '../../assets/complex-ai.png'

const AIMLSolveSection = () => {
  return (
    <section className="ai-solve-section section-spacing-lg">
      <div className="ai-solve-deco ai-solve-deco-1"></div>
      <div className="ai-solve-deco ai-solve-deco-2"></div>

      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <motion.div
              className="ai-solve-image-wrap"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="ai-solve-dots"></div>
              <div className="ai-solve-image-main">
                <img
                  src={complexAI.src}
                  alt="AI Solutions"
                />
                <div className="ai-solve-image-overlay"></div>
              </div>
              <motion.div
                className="ai-solve-float-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="ai-solve-float-icon">
                  <Brain size={26} />
                </div>
                <div className="ai-solve-float-info">
                  <h4>100+</h4>
                  <span>AI Models Deployed</span>
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
              <div className="ai-solve-badge">
                <Lightbulb size={14} /> AI Solutions
              </div>

              <h2 className="ai-solve-title">
                Solve Complex Issues With <span className="text-red">AI</span>
              </h2>

              <p className="ai-solve-text">
                VGIL provides comprehensive AI solutions including Robotic Process Automation, intelligent automation, chatbots, and more. Using massive processing power and intelligent algorithms, we mimic human cognitive abilities to address specific enterprise needs and accomplish complex tasks requiring real-time assessment and recalibration.
              </p>

              <div className="ai-solve-highlight">
                <p>
                  Our AI solutions are designed to enhance performance, reduce operational costs, and transform your business through intelligent automation and data-driven insights.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIMLSolveSection;
