import React from 'react';
import { motion } from 'framer-motion';
import {
  Share2,
  ThumbsUp,
  Camera,
  MessageCircle,
  Briefcase,
  Play,
  Globe
} from 'lucide-react';
import './DigitalSocialSection.css';

const DigitalSocialSection = () => {
  const platforms = [
    {
      title: 'Facebook Marketing',
      desc: 'Profile and cover page design, social media advertising and content management',
      icon: ThumbsUp,
    },
    {
      title: 'Instagram Strategy',
      desc: 'Visual storytelling, stories, reels, and targeted advertising campaigns',
      icon: Camera,
    },
    {
      title: 'LinkedIn Presence',
      desc: 'Professional networking, B2B marketing, and thought leadership content',
      icon: Briefcase,
    },
    {
      title: 'YouTube Videos',
      desc: 'Video production, channel management, and video marketing strategies',
      icon: Play,
    },
    {
      title: 'Twitter Engagement',
      desc: 'Real-time engagement, trending content, and community building',
      icon: MessageCircle,
    },
    {
      title: 'Pinterest Discovery',
      desc: 'Visual discovery, pin strategy, and traffic generation campaigns',
      icon: Globe,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section className="ds-social-section section-spacing-lg">
      <div className="container">

        <motion.div
          className="ds-social-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="ds-social-badge">
            <Share2 size={14} />
            Social Media
          </div>

          <h2 className="ds-social-title">
            Social Media &{' '}
            <span className="text-red">
              Marketing Solutions
            </span>
          </h2>

          <p className="ds-social-subtitle">
            Connect with your audience across all major social media platforms
          </p>
        </motion.div>

        <motion.div
          className="ds-social-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-50px'
          }}
        >
          {platforms.map((platform, index) => {
            const Icon = platform.icon;

            return (
              <motion.div
                key={index}
                className="ds-social-card"
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="ds-social-card-icon">
                  <Icon
                    size={30}
                    strokeWidth={1.5}
                  />
                </div>

                <h4 className="ds-social-card-title">
                  {platform.title}
                </h4>

                <p className="ds-social-card-desc">
                  {platform.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Showcase */}
        <motion.div
          className="ds-social-showcase"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="ds-social-showcase-glow"></div>

          <div className="ds-social-showcase-content">

            <div className="ds-social-showcase-text">
              <h3>Social Media Marketing</h3>

              <p>
                Social media marketing is the use of social media platforms
                to connect with your audience to build your brand, increase
                sales, and drive website traffic. We provide services to
                businesses with effective social media advertising, strategy,
                content management, videos for YouTube, Facebook profile and
                cover page design, etc.
              </p>

              <div className="ds-social-showcase-platforms">
                {[
                  'Facebook',
                  'Instagram',
                  'Twitter',
                  'LinkedIn',
                  'Pinterest',
                  'YouTube'
                ].map((name, i) => (
                  <motion.span
                    key={i}
                    className="ds-social-platform-tag"
                    whileHover={{ scale: 1.05 }}
                  >
                    {name}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="ds-social-showcase-visual">

              <div className="ds-orbit-ring ds-orbit-1">
                <div className="ds-orbit-dot"></div>
                <div className="ds-orbit-dot"></div>
              </div>

              <div className="ds-orbit-ring ds-orbit-2">
                <div className="ds-orbit-dot"></div>
                <div className="ds-orbit-dot"></div>
              </div>

              <div className="ds-orbit-center-icon">
                <Share2 size={36} />
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default DigitalSocialSection;