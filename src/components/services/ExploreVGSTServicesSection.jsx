import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck, ClipboardList, FileText, Link2, Cloud, IdCard,
  Settings, UserCheck, Clock, CheckCircle2, RefreshCw, FileSignature, ChevronLeft, ChevronRight,
   Headphones, BookOpen, Activity, Code2, QrCodeIcon, FilePlus2 ,FilePenLine ,FileX2 ,FileSearch ,Layers, Files, UserRoundSearch , BadgeCheck 
} from 'lucide-react';
import './ExploreVGSTServicesSection.css';

const TABS_DATA = [
  { id: 'gst', title: 'GST', icon: ShieldCheck },
  { id: 'eway', title: 'E-Way', icon: ClipboardList },
  { id: 'einvoice', title: 'E-Invoice', icon: FileText },
  { id: 'gstapi', title: 'GST API', icon: Link2 },
  { id: 'waybillapi', title: 'Waybill API', icon: Cloud },
  { id: 'gstinapi', title: 'GSTIN API', icon: IdCard },
];

const CONTENT_DATA = {
  'gst': {
    prefix: 'GST',
    title: ' SOFTWARE',
    desc: 'VGST - GSP Suvidha Provider GST software automates return generation with single login for all GSTINs & support to reduce return filing time.',
    features: [
      { text: 'Automated return generation', icon: Settings },
      { text: 'Real-time validation', icon: CheckCircle2 },
      { text: 'Single login for multiple GSTINs', icon: UserCheck },
      { text: 'Seamless integration with accounting software', icon: RefreshCw },
      { text: 'Reduced filing time', icon: Clock }
    ]
  },
  'eway': {
    prefix: 'E-WAY',
    title: ' BILL',
    desc: 'Generate, manage, and track e-way bills seamlessly with our comprehensive e-way bill solution for businesses of all sizes.',
    features: [
      { text: 'Bulk generation of e-way bills', icon: FileSignature },
      { text: 'Real-time tracking', icon: CheckCircle2 },
      { text: 'Validity period management', icon: Clock },
      { text: 'Auto-update of vehicle details', icon: FileText },
      { text: 'Integration with ERP systems', icon: Link2 }

    ]
  },
  'einvoice': {
    prefix: 'E-INVOICING',
    title: '',
    desc: 'Generate compliant e-invoices with automated IRN and QR code generation as per government regulations.',
    features: [
      { text: 'IRN generation and cancellation', icon: FileSignature },
      { text: 'QR code generation', icon: QrCodeIcon },
      { text: 'B2B and B2C invoice support', icon: FileText },
      { text: 'Real-time validation', icon: CheckCircle2 },
      { text: 'Integration with existing billing systems', icon: Link2 }

    ]
  },
  'gstapi': {
    prefix: 'GST ',
    title: 'API',
    desc: 'Robust GST APIs for developers to integrate GST compliance features directly into their applications.',
    features: [
      { text: 'RESTful API architecture', icon: Code2 },
      { text: 'Real-time data processing', icon: Activity },
      { text: 'Secure authentication', icon: ShieldCheck },
      { text: 'Comprehensive documentation', icon: BookOpen },
      { text: '24/7 technical support', icon: Headphones }

    ]
  },
  'waybillapi': {
    prefix: 'E-Way Bill',
    title: ' APIs',
    desc: 'Complete suite of APIs for e-way bill generation, management, and tracking integrated into your business applications.',
    features: [
      { text: 'Generate e-way bills via API', icon: FilePlus2  },
      { text: 'Update/Extend e-way bills', icon: FilePenLine  },
      { text: 'Cancel e-way bills', icon: FileX2  },
      { text: 'Get e-way bill details', icon: FileSearch  },
      { text: 'Bulk operations support', icon: Layers  }

    ]
  },
  'gstinapi': {
    prefix: 'GSTIN ',
    title: 'API',
    desc: 'Verify GSTIN numbers and retrieve taxpayer details with our reliable GSTIN validation API.',
    features: [
      { text: 'Instant GSTIN validation', icon: BadgeCheck  },
      { text: 'Taxpayer details retrieval', icon: UserRoundSearch  },
      { text: 'Bulk verification', icon: Files  },
      { text: 'Real-time status checking', icon: RefreshCw  },
      { text: 'Integration with onboarding systems', icon: Link2 }

    ]
  },
};

const getTabContent = (id) => {
  if (CONTENT_DATA[id]) return CONTENT_DATA[id];
  const tab = TABS_DATA.find(t => t.id === id);
  return {
    prefix: tab.title.toUpperCase(),
    title: ' SOLUTION',
    desc: `Comprehensive ${tab.title} compliance and automation solution tailored for businesses to ensure 100% adherence to government regulations.`,
    features: [
      { text: 'Fast and secure processing', icon: ShieldCheck },
      { text: '24/7 technical support', icon: CheckCircle2 },
      { text: 'Easy API integrations', icon: Link2 },
      { text: 'Detailed analytics dashboard', icon: ClipboardList }
    ]
  };
};

const ExploreVGSTServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTab = TABS_DATA[activeIndex];
  const activeContent = getTabContent(activeTab.id);
  const ActiveIcon = activeTab.icon;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TABS_DATA.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TABS_DATA.length) % TABS_DATA.length);
  };

  return (
    <section className="explore-vgst-section section-spacing-lg">
      <div className="container position-relative z-2">
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="explore-vgst-title">
            <span className="title-decor left"></span>
            Explore Our <span className="highlight-red">VGST Services</span>
            <span className="title-decor right"></span>
          </h2>
          <p className="explore-vgst-subtitle">
            Comprehensive GST compliance and automation solutions
          </p>
        </motion.div>

        {/* Tabs Row */}
        <motion.div
          className="vgst-tabs-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {TABS_DATA.map((tab, idx) => {
            const Icon = tab.icon;
            const isActive = activeIndex === idx;

            return (
              <div
                key={tab.id}
                className={`vgst-tab-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
              >
                <div className="tab-icon-wrap">
  <svg
    className="vgst-tab-icon-ring"
    width="32"
    height="32"
    viewBox="0 0 32 32"
  >
    <circle
      cx="16"
      cy="16"
      r="14"
    />
  </svg>

  <Icon size={18} />
</div>
                <span>{tab.title}</span>
              </div>
            );
          })}
        </motion.div>

        {/* Main Content Box */}
        <motion.div
          className="vgst-main-content-box"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <div className="vgst-content-inner">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="vgst-content-grid"
              >
                {/* Left Side: Icon & Details */}
                <div className="vgst-details-side">
                  <div className="vgst-header-group">
                    <div className="vgst-big-icon-box">
                      <div className="big-icon-bg"></div>
                      <ActiveIcon size={40} className="big-icon" />
                    </div>
                    <div>
                      <h3 className="vgst-content-title">
                        <span className="text-red">{activeContent.prefix}</span>{activeContent.title}
                      </h3>
                      <p className="vgst-content-desc">{activeContent.desc}</p>
                    </div>
                  </div>

                  <div className="vgst-features-area">
                    <div className="features-title">
                      <span className="red-line"></span> Key Features:
                    </div>
                    <div className="features-grid">
                      {activeContent.features.map((feat, i) => {
                        const FeatIcon = feat.icon;
                        return (
                          <div key={i} className="feature-item">
                            <div className="feat-icon-wrap">
                              <FeatIcon size={16} />
                            </div>
                            <span className="feat-text">{feat.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Right Side: Illustration */}
                <div className="vgst-illustration-side">
                  <div className="browser-mockup">
                    <div className="browser-header">
                      <div className="dots"><span></span><span></span><span></span></div>
                    </div>
                    <div className="browser-body">
                      <div className="mock-sidebar">
                        <div className="mock-line"></div>
                        <div className="mock-line short"></div>
                      </div>
                      <div className="mock-content">
                        <div className="mock-box"></div>
                        <div className="mock-box"></div>
                        <div className="mock-list">
                          <div className="mock-list-item"></div>
                          <div className="mock-list-item"></div>
                          <div className="mock-list-item"></div>
                        </div>
                      </div>
                    </div>
                    {/* Floating Shield */}
                    <motion.div
                      className="floating-shield"
                      animate={{ y: [-10, 10, -10] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ShieldCheck size={50} color="#ffffff" strokeWidth={1.5} />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Bar */}
          <div className="vgst-bottom-bar">
            <div className="d-flex align-items-center gap-3">
              <div className="bottom-doc-icon">
                <FileText size={20} color="#ff3300" />
              </div>
              <div>
                <div className="bottom-bar-title">Service Overview</div>
                <div className="bottom-bar-sub">Powerful. Reliable. Compliant.</div>
              </div>
            </div>
            <div className="bottom-controls">
              <span className="page-indicator">{activeIndex + 1} of {TABS_DATA.length}</span>
              <button className="nav-btn prev" onClick={handlePrev}>
                <ChevronLeft size={20} />
              </button>
              <button className="nav-btn next" onClick={handleNext}>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExploreVGSTServicesSection;
