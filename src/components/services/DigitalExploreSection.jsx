import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Check, Palette, Search, Mail, Video } from 'lucide-react';
import './DigitalExploreSection.css';

const DigitalExploreSection = () => {
  const services = [
    {
      number: '01',
      title: 'Website Design & Development',
      description:
        "A stunning design of any web page is much helpful to drive traffic to your website. Whatever your plans may be, either you want to develop a new website or redesign your current one, VGIL's website designer will provide all the related services and ensure your website development will come up with the highest standard, within the agreed time frame at an affordable price.",
      image:
        'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2000&auto=format&fit=crop',
      icon: Palette,
      hasFeatures: true,
      features: [
        'Responsive website design',
        'UI/UX optimization',
        'Brand consistency',
        'User-friendly interfaces',
        'Mobile-first approach',
      ],
    },
    {
      number: '02',
      title: 'Search Engine Marketing',
      description:
        "Today's increasing number of consumers searching and shopping products online makes Search Engine Marketing a crucial digital marketing strategy for increasing a company's reach and the visibility of a website in search engine results pages. Our expert team applies its skills to target customer's requirements.",
      image:
        'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2000&auto=format&fit=crop',
      icon: Search,
      reverse: true,
    },
    {
      number: '03',
      title: 'E-Mail Marketing',
      description:
        'E-mail marketing is effective and the most popular way to reach a large number of targeted audiences. E-mail campaign offers personalized marketing for the customers. An effective email strategy will surely result in adding revenues for your needs at the start of a business. Our designers create designs that clearly explain your marketing objectives and increase the chances of customers clicking on your call to action.',
      image:
        'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZW1haWx8ZW58MHx8MHx8fDA%3D',
      icon: Mail,
    },
    {
      number: '04',
      title: 'Video and Motion Editing',
      description:
        'Brand Awareness and Product knowledge through videos are another effective and the most popular way to increase market strategies. When you decide to outsource video editing, our huge range of services allows us to match your specific needs. Our team put immense efforts to provide quality work for video editing, animation, storyboard, company profile videos, social media videos, corporate videos, testimonial videos, re-editing and much more at a reasonable cost. All our work has a personal touch and uniqueness.',
      image:
        'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2000&auto=format&fit=crop',
      icon: Video,
      reverse: true,
    },
  ];

  return (
    <section className="ds-explore-section section-spacing-lg">
      <div className="container">
        <motion.div
          className="ds-explore-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="ds-explore-badge">
            <Compass size={14} /> Core Services
          </div>
          <h2 className="ds-explore-title">
            Explore Our Core <span className="text-red">Digital Services</span>
          </h2>
          <p className="ds-explore-subtitle">
            Comprehensive digital marketing and online presence solutions
          </p>
        </motion.div>

        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`ds-explore-card ${service.reverse ? 'ds-card-reverse' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <div className="ds-explore-card-inner">
              <div className="ds-explore-card-content">
                <motion.div
                  className="ds-explore-card-number"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {service.number}
                </motion.div>
                <h3 className="ds-explore-card-title">{service.title}</h3>
                <p className="ds-explore-card-desc">{service.description}</p>

                {service.hasFeatures && (
                  <div className="ds-explore-key-features">
                    <h5>Key Features Include:</h5>
                    <ul>
                      {service.features.map((feat, i) => (
                        <li key={i}>
                          <div className="ds-explore-check">
                            <Check size={12} color="#ff3300" />
                          </div>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="ds-explore-card-visual">
                <img src={service.image} alt={service.title} />
                <div className="ds-explore-card-visual-overlay"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DigitalExploreSection;
