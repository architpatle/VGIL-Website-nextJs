import React from 'react';
import { motion } from 'framer-motion';
import { Settings2, Cpu, BarChart3 } from 'lucide-react';
import './MobileStrategiesSection.css';

const MobileStrategiesSection = () => {
  const features = [
    {
      title: "Wireless Expertise",
      desc: "Professional development across all major wireless platforms.",
      icon: Cpu
    },
    {
      title: "Comprehensive Solutions",
      desc: "Bluetooth printing, GPS tracking, geotagged images & more.",
      icon: Settings2
    },
    {
      title: "Business Performance",
      desc: "Optimized speed, cost, and quality balance for your needs.",
      icon: BarChart3
    }
  ];

  return (
    <section className="mc-strategies-section section-spacing-lg">
      <div className="container">
        <motion.div 
        style={{marginBottom:'40px'}}
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mc-section-title">
            Build Your Operational Strategies With <span className="text-red">Mobile Computing</span>
          </h2>
          <p className="mc-section-subtitle">
            VGIL provides comprehensive mobile computing solutions to transform your business operations. With expertise in wireless application development using Node.JS, IONIC, Cordova, Swift, and Android technologies, we deliver feature-rich mobile applications that enable anywhere, anytime connectivity. Our solutions include mobile Bluetooth printing, geotagged image uploads, GPS location tracking, and offline-online operations to enhance productivity and efficiency.
          </p>
        </motion.div>

        <div className="row g-4">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div className="col-md-4 " key={idx}>
                <motion.div 
                  className="mc-strategy-card h-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <div className="mc-strategy-icon">
                    <Icon size={28} />
                  </div>
                  <h4 className="mc-strategy-title">{item.title}</h4>
                  <p className="mc-strategy-desc">{item.desc}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MobileStrategiesSection;
