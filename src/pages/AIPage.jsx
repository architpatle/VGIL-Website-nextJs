"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BrainCircuit, Bot, Sparkles, Send, ShieldAlert,
  Sliders, Database, Play, RefreshCw, Layers, CheckCircle2,
  HelpCircle, ArrowRight, Activity, Server, Workflow, ShieldCheck, Zap
} from 'lucide-react';
import Link from "next/link";
import aiImg from '../assets/aiImg.png';

import AiProduct from "../components/ai-page/AiProduct";

function AIPage() {
  // SEO Protection: Prevent search indexing
  useEffect(() => {
    let meta = document.querySelector('meta[name="robots"]');
    let existed = !!meta;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'robots';
      document.head.appendChild(meta);
    }
    const previousContent = meta.content;
    meta.content = 'noindex, nofollow';

    const previousTitle = document.title;
    document.title = 'VGIL // AI Solutions';

    return () => {
      if (existed) {
        meta.content = previousContent;
      } else {
        meta.remove();
      }
      document.title = previousTitle;
    };
  }, []);

  // Slide state for Hero
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      title: "Str(AI)tegy for Enterprise Success",
      desc: "We don’t just implement AI, we optimize your core business processes for maximum efficiency and growth.",
      btnText: "Explore AI Solutions",
      btnLink: "#hype"
    },
    {
      title: "Intelligence That Unlocks Real Business Growth",
      desc: "Designed to explore, built to innovate, and crafted to scale — Virtual Galaxy empowers your business with next-gen intelligence.",
      btnText: "Learn more",
      btnLink: "#layers"
    },
    {
      title: "Reimagining Tomorrow with AI Today.",
      desc: "Building intelligent systems that power the next era of business evolution",
      btnText: "Get Started",
      btnLink: "#lab"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Interactive AI Parameters (Neural Lab)
  const [learningRate, setLearningRate] = useState(0.001);
  const [contextWindow, setContextWindow] = useState(8192);
  const [temperature, setTemperature] = useState(0.7);
  const [neuralDensity, setNeuralDensity] = useState(94);
  const [isOptimizing, setIsOptimizing] = useState(false);

  // Terminal Console State
  const [history, setHistory] = useState([
    { type: 'system', text: 'VGIL COGNITIVE SYSTEMS v4.2.9 // NEURAL HUB' },
    { type: 'system', text: 'SECURE LINK: ESTABLISHED' },
    { type: 'system', text: 'ROBOTS REGISTRY: NOINDEX, NOFOLLOW APPLIED' },
    { type: 'info', text: 'Type "help" to list available mainframe commands, or click the shortcuts below.' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const terminalEndRef = useRef(null);

  // Auto-scroll terminal
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Derived Performance Metrics
  const calculatedLatency = Math.round((temperature * 12) + (100 - neuralDensity) * 0.8 + 8);
  const calculatedThroughput = Math.round((neuralDensity * 125) / (learningRate * 1000 + 1));
  const calculatedCoherence = Math.round((1 - Math.abs(0.5 - temperature)) * 100);

  // Run mock optimization
  const triggerOptimization = () => {
    if (isOptimizing) return;
    setIsOptimizing(true);

    setHistory(prev => [
      ...prev,
      { type: 'command', text: 'optimize --force' },
      { type: 'system', text: 'Initializing neural pathway pruning sequence...' }
    ]);

    let step = 0;
    const interval = setInterval(() => {
      if (step === 0) {
        setHistory(prev => [...prev, { type: 'info', text: '-> Recalibrating node weights...' }]);
      } else if (step === 1) {
        setHistory(prev => [...prev, { type: 'info', text: '-> Clearing dead synapses...' }]);
      } else if (step === 2) {
        setHistory(prev => [...prev, { type: 'info', text: '-> Aligning semantic vectors...' }]);
      } else if (step === 3) {
        setHistory(prev => [
          ...prev,
          { type: 'success', text: 'System Optimization Complete! Hyperparameters synchronized.' }
        ]);
        setIsOptimizing(false);
        clearInterval(interval);
      }
      step++;
    }, 800);
  };

  // Process terminal command
  const handleCommandSubmit = (e) => {
    e?.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'command', text: cmd }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'info',
          text: 'Available Mainframe Commands:\n' +
            '  about     - Learn about VGIL Virtual Galaxy AI architectures\n' +
            '  status    - View process node diagnostics and coherence levels\n' +
            '  agents    - Review active AI subroutines and background workers\n' +
            '  neural    - Run simulated synaptic feedback assessment\n' +
            '  optimize  - Trigger dynamic calibration sequence\n' +
            '  clear     - Clean terminal logs and screen buffer'
        });
        break;
      case 'about':
        newHistory.push({
          type: 'info',
          text: 'VGIL (Virtual Galaxy) Neural Architectures represent the frontier of cognitive engineering.\n' +
            'By blending multi-agent orchestration, advanced Retrieval-Augmented Generation, and secure ' +
            'on-prem transactional intelligence, we build robust digital minds that power global systems.'
        });
        break;
      case 'status':
        newHistory.push({
          type: 'info',
          text: `SYSTEM DIAGNOSTICS:\n` +
            `  - Core Temperature: Nominal (${(25 + temperature * 15).toFixed(1)}°C)\n` +
            `  - Coherence Rate: ${calculatedCoherence}%\n` +
            `  - Active Node Clusters: 1,024 / 1,024\n` +
            `  - Process Latency: ${calculatedLatency}ms\n` +
            `  - Encryption Index: AES-GCM-256 (Enforced)`
        });
        break;
      case 'agents':
        newHistory.push({
          type: 'info',
          text: 'ACTIVE COGNITIVE AGENTS:\n' +
            '  [1] Transact-Core-V4 (Idle) - Transaction anomaly watchdog.\n' +
            '  [2] Conversational-Companion (Active) - Handling user query parsing.\n' +
            '  [3] Audit-Flux-Sentinel (Monitoring) - Smart-contract validity audit.\n' +
            '  [4] Fin-Flow-Optimizer (Active) - Dynamic asset routing modeling.'
        });
        break;
      case 'neural':
        newHistory.push({
          type: 'info',
          text: 'Synaptic network trace initiated...\n' +
            '  [PATHWAY A]: Core Node -> Layer 2 Node -> Active. Weight = 0.982\n' +
            '  [PATHWAY B]: Attention Matrix -> Semantic Store -> Active. Weight = 0.871\n' +
            '  [PATHWAY C]: Context Window -> Model Head -> Active. Weight = 0.994\n' +
            'Dynamic route health score: 99.8%'
        });
        break;
      case 'optimize':
        setTimeout(() => triggerOptimization(), 10);
        break;
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;
      default:
        newHistory.push({
          type: 'error',
          text: `Command not recognized: "${cmd}". Type "help" for a list of valid operations.`
        });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleShortcutClick = (cmd) => {
    setInputVal(cmd);
    setTimeout(() => {
      const input = document.getElementById('terminal-input');
      if (input) {
        input.focus();
      }
    }, 50);
  };

  return (
    <div className="vgil-ai-page">
      <style>
        {`
          .vgil-ai-page {
            background-color: #EDECEC;
            color: #1f2937;
            font-family: 'Outfit', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            padding: 40px 0 20px;
            overflow: hidden;
            position: relative;
          }

          .orange-glow-spot {
            position: absolute;
            border-radius: 50%;
            filter: blur(140px);
            pointer-events: none;
            z-index: 0;
            opacity: 0.65;
          }

          .orange-glow-1 {
            width: 400px;
            height: 400px;
            background: rgba(253, 58, 37, 0.07);
            top: 15%;
            left: -10%;
          }

          .orange-glow-2 {
            width: 400px;
            height: 400px;
            background: rgba(253, 58, 37, 0.05);
            bottom: 15%;
            right: -10%;
          }

          .ai-badge {
            background: rgba(253, 58, 37, 0.06);
            border: 1px solid rgba(253, 58, 37, 0.2);
            color: #fd3a25;
            font-weight: 700;
            font-size: 0.78rem;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            border-radius: 100px;
            padding: 6px 14px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 20px;
          }

          .gradient-text-orange {
            background: linear-gradient(135deg, #111827 40%, #fd3a25 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .glass-panel {
            background: #ffffff;
            border: 1px solid #e5e7eb;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
            padding: 30px;
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
          }

          .glass-panel:hover {
            border-color: rgba(253, 58, 37, 0.25);
            box-shadow: 0 15px 40px rgba(253, 58, 37, 0.06);
          }

          .custom-slider {
            -webkit-appearance: none;
            width: 100%;
            height: 5px;
            border-radius: 3px;
            background: #e5e7eb;
            outline: none;
          }

          .custom-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: #fd3a25;
            cursor: pointer;
            box-shadow: 0 0 6px rgba(253, 58, 37, 0.4);
            transition: transform 0.2s;
          }

          .custom-slider::-webkit-slider-thumb:hover {
            transform: scale(1.2);
          }

          .terminal-window {
            background: #0f172a;
            border: 1px solid #1e293b;
            border-radius: 12px;
            font-family: 'Fira Code', 'Courier New', Courier, monospace;
            display: flex;
            flex-direction: column;
            height: 380px;
            box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.3);
          }

          .terminal-header {
            background: #1e293b;
            border-bottom: 1px solid #334155;
            padding: 10px 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .dot-container {
            display: flex;
            gap: 6px;
          }

          .window-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
          }

          .window-dot.red { background: #ef4444; }
          .window-dot.yellow { background: #f59e0b; }
          .window-dot.green { background: #10b981; }

          .terminal-content {
            flex: 1;
            overflow-y: auto;
            padding: 16px;
            font-size: 0.88rem;
            line-height: 1.5;
            color: #cbd5e1;
          }

          .terminal-input-row {
            display: flex;
            align-items: center;
            border-top: 1px solid #1e293b;
            background: #0f172a;
            padding: 12px 16px;
          }

          .prompt-symbol {
            color: #fd3a25;
            font-weight: bold;
            margin-right: 8px;
          }

          .terminal-input-element {
            background: transparent;
            border: none;
            color: #ffffff;
            font-family: inherit;
            font-size: 0.88rem;
            width: 100%;
            outline: none;
          }

          .shortcut-pill {
            background: #f3f4f6;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            color: #4b5563;
            cursor: pointer;
            font-family: 'Fira Code', monospace;
            font-size: 0.75rem;
            padding: 6px 12px;
            transition: all 0.2s ease;
          }

          .shortcut-pill:hover {
            background: rgba(253, 58, 37, 0.08);
            border-color: rgba(253, 58, 37, 0.4);
            color: #fd3a25;
          }

          .btn-orange-primary {
            background: #fd3a25;
            color: #ffffff !important;
            border: none;
            border-radius: 12px;
            font-weight: 600;
            padding: 14px 28px;
            font-size: 0.95rem;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: all 0.3s ease;
            box-shadow: 0 4px 14px rgba(253, 58, 37, 0.25);
            text-decoration: none !important;
            cursor: pointer;
          }

          .btn-orange-primary:hover {
            background: #e02f1b;
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(253, 58, 37, 0.35);
          }

          .layer-card {
            background: #ffffff;
            border: 1px solid #e5e7eb;
            border-radius: 24px;
            padding: 36px 30px;
            height: 100%;
            transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          }

          .layer-card:hover {
            transform: translateY(-5px);
            border-color: rgba(253, 58, 37, 0.3);
            box-shadow: 0 15px 35px rgba(253, 58, 37, 0.08);
          }

          .industry-card {
            background: #ffffff;
            border: 1px solid #e5e7eb;
            border-radius: 16px;
            padding: 24px;
            transition: all 0.3s ease;
            height: 100%;
          }

          .industry-card:hover {
            border-color: #fd3a25;
            box-shadow: 0 10px 25px rgba(253, 58, 37, 0.06);
          }

          /* ---- Partner Marquee Carousel ---- */
          .partner-marquee-wrapper {
            overflow: hidden;
            width: 100%;
            position: relative;
            mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
            -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
          }

          .partner-marquee-track {
            display: flex;
            gap: 16px;
            width: max-content;
            will-change: transform;
          }

          .track-forward {
            animation: marquee-forward 40s linear infinite;
          }

          .track-reverse {
            animation: marquee-reverse 55s linear infinite;
          }

          .partner-marquee-wrapper:hover .track-forward,
          .partner-marquee-wrapper:hover .track-reverse {
            animation-play-state: paused;
          }

          @keyframes marquee-forward {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @keyframes marquee-reverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }

          .partner-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 18px 22px;
            background: #ffffff;
            border: 1px solid #e5e7eb;
            border-radius: 16px;
            min-width: 130px;
            max-width: 150px;
            transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
            cursor: default;
            flex-shrink: 0;
          }

          .partner-card:hover {
            border-color: rgba(253, 58, 37, 0.35);
            box-shadow: 0 8px 24px rgba(253, 58, 37, 0.08);
            transform: translateY(-4px);
          }

          .partner-logo-img {
            width: 48px;
            height: 48px;
            object-fit: contain;
            filter: grayscale(30%);
            transition: filter 0.3s ease;
          }

          .partner-card:hover .partner-logo-img {
            filter: grayscale(0%);
          }

          .partner-logo-fallback {
            font-size: 1.4rem;
            font-weight: 800;
            color: #fd3a25;
            font-family: monospace;
            letter-spacing: -0.05em;
          }

          .partner-name {
            font-size: 0.72rem;
            font-weight: 600;
            color: #6b7280;
            text-align: center;
            letter-spacing: 0.02em;
            white-space: nowrap;
          }
        `}
      </style>

      {/* Decorative Glow Spots */}
      <div className="orange-glow-spot orange-glow-1"></div>
      <div className="orange-glow-spot orange-glow-2"></div>

      <div className="container relative z-10">

        {/* SECTION 1: HERO CAROUSEL */}
        <section className="py-12 position-relative overflow-hidden mb-12" style={{ borderBottom: '1px solid rgba(229, 231, 235, 0.5)', paddingBottom: '30px' }}>
          <div className="row align-items-center" style={{ minHeight: '400px' }}>
            <div className="col-lg-7 text-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="d-flex mb-2">
                    <span className="ai-badge">
                      <Sparkles size={12} className="me-2" />
                      Virtual Galaxy AI
                    </span>
                  </div>
                  <h1 className="fw-bold text-dark mb-6 gradient-text-orange" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}>
                    {slides[activeSlide].title}
                  </h1>
                  <p className="mb-8 text-secondary font-weight-500" style={{ fontSize: '1.15rem', lineHeight: '1.6', maxWidth: '580px' }}>
                    {slides[activeSlide].desc}
                  </p>
                  <div className="d-flex gap-16 align-items-center">
                    <a href={slides[activeSlide].btnLink} className="btn-orange-primary" style={{ textDecoration: 'none' }}>
                      {slides[activeSlide].btnText}
                    </a>
                    <div className="d-flex gap-8">
                      {slides.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveSlide(index)}
                          style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            background: activeSlide === index ? '#fd3a25' : 'rgba(253, 58, 37, 0.2)',
                            border: 'none',
                            cursor: 'pointer',
                            padding: 0,
                            transition: 'background 0.3s ease'
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="col-lg-5 d-none d-lg-block">
              <div className="position-relative d-flex justify-content-center align-items-center" style={{ height: '360px' }}>
                <div style={{
                  position: 'absolute',
                  width: '260px',
                  height: '260px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(253,58,37,0.12) 0%, transparent 70%)',
                  filter: 'blur(30px)',
                  animation: 'pulse 4s infinite alternate'
                }} />
                {/* <BrainCircuit size={180} className="text-orange" style={{ color: '#fd3a25', opacity: 0.85, zIndex: 1 }} /> */}
                <img src={aiImg.src} alt='aiImg' />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: BEYOND AI HYPE */}
        <section className="py-12 mb-12" id="hype">
          <div className="glass-panel" style={{ borderLeft: '4px solid #fd3a25' }}>
            <div className="row align-items-center">
              <div className="col-lg-8 text-start">
                <div className="fw-bold mb-3 text-orange uppercase tracking-[1px]" style={{ color: '#fd3a25', fontSize: '0.82rem' }}>Process Flow Engine</div>
                <h2 className="fw-bold text-dark mb-4" style={{ fontSize: '2.1rem', letterSpacing: '-0.01em' }}>
                  Beyond AI Hype: Software That Actually Ships
                </h2>
                <h5 className="fw-semibold text-secondary mb-4" style={{ lineHeight: '1.5' }}>
                  AI is trending. Impact is missing. We bridge the gap—turning ideas into intelligent, scalable systems.
                </h5>
                <p className="text-secondary mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
                  Because real transformation isn’t about tools—it’s about systems, strategy, and scale. At Virtual Galaxy, we turn AI into real business results with our AI Process Flow Engine.
                </p>
              </div>
              <div className="col-lg-4 text-center mt-24 mt-lg-0">
                <div style={{ display: 'inline-flex', padding: '24px', borderRadius: '50%', background: 'rgba(253,58,37,0.06)' }}>
                  <Zap size={56} className="text-orange animate-pulse" style={{ color: '#fd3a25' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: THREE LAYERS OF AI */}
        <section className="py-12" id="layers">
          <div className="text-center mb-12">
            <span className="ai-badge">The Architecture</span>
            <h2 className="fw-bold text-dark mb-3" style={{ fontSize: '2.2rem', letterSpacing: '-0.01em' }}>The AI Process Flow Engine Layers</h2>
            <p className="mx-auto text-secondary" style={{ maxWidth: '600px', fontSize: '1.02rem', lineHeight: '1.5' }}>
              We orchestrate AI solutions through three discrete layers to ensure security, high performance, and domain alignment.
            </p>
          </div>

          <div className="row g-4">
            {/* Layer 1: Infrastructure */}
            <div className="col-lg-4 col-md-6 text-start">
              <div className="layer-card">
                <div className="d-flex align-items-center gap-12 mb-8">
                  <div style={{ display: 'inline-flex', padding: '12px', borderRadius: '12px', background: 'rgba(253,58,37,0.06)', flexShrink: 0 }}>
                    <Server className="text-orange" size={24} style={{ color: '#fd3a25' }} />
                  </div>
                  <h4 className="fw-bold text-dark mb-0" style={{ fontSize: '1.2rem', lineHeight: '1.3' }}>AI Infrastructure Layer</h4>
                </div>
                <p className="text-secondary mb-0" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                  The foundation that powers scalable, secure, and high-performance AI systems. It enables organizations to manage compute efficiently while maintaining cost visibility and operational control. With cloud-flexible architecture and optimized resource utilization, it ensures consistent performance across workloads. Built-in governance, monitoring, and security frameworks provide reliability and compliance, allowing businesses to scale AI initiatives confidently without compromising on efficiency or control.
                </p>
              </div>
            </div>

            {/* Layer 2: Orchestration */}
            <div className="col-lg-4 col-md-6 text-start">
              <div className="layer-card">
                <div className="d-flex align-items-center gap-12 mb-8">
                  <div style={{ display: 'inline-flex', padding: '12px', borderRadius: '12px', background: 'rgba(253,58,37,0.06)', flexShrink: 0 }}>
                    <Workflow className="text-orange" size={24} style={{ color: '#fd3a25' }} />
                  </div>
                  <h4 className="fw-bold text-dark mb-0" style={{ fontSize: '1.2rem', lineHeight: '1.3' }}>AI Orchestration Layer</h4>
                </div>
                <p className="text-secondary mb-0" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                  The layer that brings together agents, workflows, and systems into a unified, intelligent ecosystem. It streamlines operations by enabling seamless coordination across teams and technologies. Automated workflows enhance scalability while reducing manual effort, ensuring faster execution. With real-time synchronization and centralized visibility, organizations can manage complex processes effortlessly, improving efficiency, collaboration, and decision-making across the entire AI lifecycle.
                </p>
              </div>
            </div>

            {/* Layer 3: Insight */}
            <div className="col-lg-4 col-md-12 text-start">
              <div className="layer-card">
                <div className="d-flex align-items-center gap-12 mb-8">
                  <div style={{ display: 'inline-flex', padding: '12px', borderRadius: '12px', background: 'rgba(253,58,37,0.06)', flexShrink: 0 }}>
                    <Layers className="text-orange" size={24} style={{ color: '#fd3a25' }} />
                  </div>
                  <h4 className="fw-bold text-dark mb-0" style={{ fontSize: '1.2rem', lineHeight: '1.3' }}>AI Insight Layer</h4>
                </div>
                <p className="text-secondary mb-0" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                  Where raw data evolves into meaningful, business-aware intelligence. This layer unifies data from multiple sources, creating a consistent and reliable foundation for insights. By centralizing knowledge and eliminating silos, it enables systems to understand business context more effectively. The result is adaptive, context-driven intelligence that aligns with business goals, empowering smarter decisions and delivering deeper, more relevant insights across operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: AI PRODUCTS */}
        <AiProduct />

        {/* SECTION 4: INDUSTRY EXPERIENCES */}
        <section style={{ background: '#faf8f6', padding: '40px 0', borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb', borderRadius: '24px', margin: '20px 0' }}>
          <div className="container">
            <div className="text-center mb-12">
              <span className="ai-badge">Vertical Solutions</span>
              <h2 className="fw-bold text-dark mb-3" style={{ fontSize: '2.1rem', letterSpacing: '-0.01em' }}>Experience What VGIL AI Can Do for Your Industry</h2>
              <p className="mx-auto text-secondary" style={{ maxWidth: '600px', fontSize: '1.02rem' }}>
                Discover how we create measurable business value through transformation and cutting-edge technology.
              </p>
            </div>

            <div className="row justify-content-center g-4">
              <div className="col-lg-4 col-md-6 text-start">
                <div className="industry-card d-flex flex-column justify-content-between h-100">
                  <div>
                    <div className="d-flex align-items-start gap-12 mb-16">
                      <div className="fw-bold" style={{ color: '#fd3a25', fontSize: '1.2rem', fontFamily: 'monospace', flexShrink: 0, lineHeight: 1.2 }}>01</div>
                      <h5 className="fw-bold text-dark mb-0" style={{ fontSize: '1.5rem', lineHeight: '1.3' }}>Transforming Core Banking Solution for Digital Finance</h5>
                    </div>
                    <p className="text-secondary" style={{ fontSize: '0.82rem', lineHeight: '1.5', textAlign: 'justify' }}>
                      Seamless integration of automated compliance, real-time risk checks, and predictive transactional models into banking environments.
                    </p>
                  </div>
                  <Link href="/products/transact-core" className="fw-semibold d-flex align-items-center gap-8 mt-6" style={{ color: '#fd3a25', textDecoration: 'none', fontSize: '0.88rem' }}>
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 text-start">
                <div className="industry-card d-flex flex-column justify-content-between h-100">
                  <div>
                    <div className="d-flex align-items-start gap-12 mb-16">
                      <div className="fw-bold" style={{ color: '#fd3a25', fontSize: '1.2rem', fontFamily: 'monospace', flexShrink: 0, lineHeight: 1.2 }}>02</div>
                      <h5 className="fw-bold text-dark mb-0" style={{ fontSize: '1.4rem', lineHeight: '1.3' }}>Re(AI)powering Hi-Tech with End-to-End Cybersecurity</h5>
                    </div>
                    <p className="text-secondary" style={{ fontSize: '0.82rem', lineHeight: '1.5', textAlign: 'justify' }}>
                      Intelligent anomaly warning networks, SSO/SAML integration, and robust defensive security protocols protecting enterprise networks.
                    </p>
                  </div>
                  <Link href="/products/audit-flux" className="fw-semibold d-flex align-items-center gap-8 mt-6" style={{ color: '#fd3a25', textDecoration: 'none', fontSize: '0.88rem' }}>
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 text-start">
                <div className="industry-card d-flex flex-column justify-content-between h-100">
                  <div>
                    <div className="d-flex align-items-start gap-12 mb-16">
                      <div className="fw-bold" style={{ color: '#fd3a25', fontSize: '1.2rem', fontFamily: 'monospace', flexShrink: 0, lineHeight: 1.2 }}>03</div>
                      <h5 className="fw-bold text-dark mb-0" style={{ fontSize: '1.35rem', lineHeight: '1.3' }}>Conversational AI Companion for Smarter Experiences</h5>
                    </div>
                    <p className="text-secondary" style={{ fontSize: '0.82rem', lineHeight: '1.5', textAlign: 'justify' }}>
                      Contextual enterprise RAG chatbots delivering instant, cited answers from internal knowledge sources for support and internal teams.
                    </p>
                  </div>
                  <Link href="/products/conversational-ai-companion" className="fw-semibold d-flex align-items-center gap-8 mt-6" style={{ color: '#fd3a25', textDecoration: 'none', fontSize: '0.88rem' }}>
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <h5 className="text-secondary fw-semibold mb-0" style={{ letterSpacing: '0.01em' }}>
                Take a closer look at how we’re redefining what’s possible with technology.
              </h5>
            </div>
          </div>
        </section>

        {/* SECTION 5: TRUSTED PARTNERS */}
        <section className="py-12">
          <div className="text-center mb-12">
            <span className="ai-badge">Partnerships</span>
            <h2 className="fw-bold text-dark mb-3" style={{ fontSize: '2.1rem', letterSpacing: '-0.01em' }}>Our Trusted Partners</h2>
            <p className="mx-auto text-secondary" style={{ maxWidth: '680px', fontSize: '1.02rem', lineHeight: '1.6' }}>
              With a focused hyperscale team, we work closely with leading platform partners to deliver AI-driven solutions that accelerate innovation and create real business impact.
            </p>
          </div>

          {/* Infinite Marquee Carousel - Row 1 (left → right) */}
          <div className="partner-marquee-wrapper">
            <div className="partner-marquee-track track-forward">
              {[
                { name: 'Oracle', logo: '/logos/oracle.svg' },
                { name: 'Microsoft', logo: '/logos/microsoft.svg' },
                { name: 'Red Hat', logo: '/logos/redhat.svg' },
                { name: 'AWS', logo: '/logos/aws.svg' },
                { name: 'NVIDIA', logo: '/logos/nvidia.svg' },
                { name: 'Cisco', logo: '/logos/cisco.svg' },
                { name: 'Lenovo', logo: '/logos/lenovo.svg' },
                { name: 'HP Enterprise', logo: '/logos/hpe.svg' },
                { name: 'Yotta', logo: '/logos/yotta.svg' },
                { name: 'NetMagic', logo: '/logos/netmagic.svg' },
                { name: 'Fortinet', logo: '/logos/fortinet.svg' },
                { name: 'Nxtra Data', logo: '/logos/nxtra-data.svg' },
              ].concat([
                { name: 'Oracle', logo: '/logos/oracle.svg' },
                { name: 'Microsoft', logo: '/logos/microsoft.svg' },
                { name: 'Red Hat', logo: '/logos/redhat.svg' },
                { name: 'AWS', logo: '/logos/aws.svg' },
                { name: 'NVIDIA', logo: '/logos/nvidia.svg' },
                { name: 'Cisco', logo: '/logos/cisco.svg' },
                { name: 'Lenovo', logo: '/logos/lenovo.svg' },
                { name: 'HP Enterprise', logo: '/logos/hpe.svg' },
                { name: 'Yotta', logo: '/logos/yotta.svg' },
                { name: 'NetMagic', logo: '/logos/netmagic.svg' },
                { name: 'Fortinet', logo: '/logos/fortinet.svg' },
                { name: 'Nxtra Data', logo: '/logos/nxtra-data.svg' },
              ]).map((partner, idx) => (
                <div className="partner-card" key={idx}>
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="partner-logo-img"
                    onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
                  />
                  <span className="partner-logo-fallback" style={{ display: 'none' }}>{partner.name}</span>
                  <span className="partner-name">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Infinite Marquee Carousel - Row 2 (right ← left, slower) */}
          <div className="partner-marquee-wrapper mt-8">
            <div className="partner-marquee-track track-reverse">
              {[
                { name: 'IBM', logo: '/logos/ibm.svg' },
                { name: 'VMware', logo: '/logos/vmware.svg' },
                { name: 'Dell', logo: '/logos/dell.svg' },
                { name: 'Intel', logo: '/logos/intel.svg' },
                { name: 'Google Cloud', logo: '/logos/google-cloud.svg' },
                { name: 'Akamai', logo: '/logos/akamai.svg' },
                { name: 'Palo Alto', logo: '/logos/palo-alto.svg' },
                { name: 'ServiceNow', logo: '/logos/servicenow.svg' },
                { name: 'Splunk', logo: '/logos/splunk.svg' },
                { name: 'Databricks', logo: '/logos/databricks.svg' },
              ].concat([
                { name: 'IBM', logo: '/logos/ibm.svg' },
                { name: 'VMware', logo: '/logos/vmware.svg' },
                { name: 'Dell', logo: '/logos/dell.svg' },
                { name: 'Intel', logo: '/logos/intel.svg' },
                { name: 'Google Cloud', logo: '/logos/google-cloud.svg' },
                { name: 'Akamai', logo: '/logos/akamai.svg' },
                { name: 'Palo Alto', logo: '/logos/palo-alto.svg' },
                { name: 'ServiceNow', logo: '/logos/servicenow.svg' },
                { name: 'Splunk', logo: '/logos/splunk.svg' },
                { name: 'Databricks', logo: '/logos/databricks.svg' },
              ]).map((partner, idx) => (
                <div className="partner-card" key={idx}>
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="partner-logo-img"
                    onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
                  />
                  <span className="partner-logo-fallback" style={{ display: 'none' }}>{partner.name}</span>
                  <span className="partner-name">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: INTERACTIVE NEURAL LAB */}
        <section className="py-16" id="lab">
          <div className="container relative z-10">

            <div className="text-center mb-12">
              <div className="d-flex justify-content-center mb-2">
                <span className="ai-badge" style={{ background: 'rgba(253,58,37,0.06)', borderColor: 'rgba(253,58,37,0.2)' }}>
                  <ShieldAlert size={14} className="me-2" />
                  SEO PROTECTED // SECURE ZONE
                </span>
              </div>
              <h2 className="fw-bold text-dark mb-3" style={{ fontSize: '2.2rem', letterSpacing: '-0.01em' }}>
                Virtual Galaxy <span style={{ color: '#fd3a25' }}>Neural Lab</span>
              </h2>
              <p className="mx-auto text-secondary" style={{ maxWidth: '600px', fontSize: '1.02rem' }}>
                Protected mainframe environment for model evaluation, neural path auditing, and autonomous agent orchestration.
              </p>
            </div>

            {/* Dashboard Content Grid */}
            <div className="row g-4 justify-content-center text-start">

              {/* LEFT COLUMN: Controls & HUD metrics */}
              <div className="col-lg-4 col-md-5 d-flex flex-column gap-4">

                {/* HUD Diagnostic Stats */}
                <div className="glass-panel">
                  <h4 className="fw-bold text-dark mb-4 d-flex align-items-center gap-8" style={{ fontSize: '1.1rem' }}>
                    <Activity size={18} style={{ color: '#fd3a25' }} />
                    Real-Time Health
                  </h4>

                  <div className="d-flex flex-column gap-3">
                    <div>
                      <div className="d-flex justify-content-between mb-1" style={{ fontSize: '0.82rem', fontWeight: 600 }}>
                        <span className="text-secondary">Network Coherence</span>
                        <span style={{ color: '#10b981' }}>{calculatedCoherence}%</span>
                      </div>
                      <div style={{ height: '6px', background: '#e5e7eb', borderRadius: '3px', overflow: 'hidden' }}>
                        <div style={{ width: `${calculatedCoherence}%`, height: '100%', background: 'linear-gradient(90deg, #fd3a25, #10b981)', borderRadius: '3px' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="d-flex justify-content-between mb-1" style={{ fontSize: '0.82rem', fontWeight: 600 }}>
                        <span className="text-secondary">Process Latency</span>
                        <span style={{ color: calculatedLatency > 20 ? '#f59e0b' : '#fd3a25' }}>{calculatedLatency}ms</span>
                      </div>
                      <div style={{ height: '6px', background: '#e5e7eb', borderRadius: '3px', overflow: 'hidden' }}>
                        <div style={{ width: `${Math.min(100, calculatedLatency * 2.5)}%`, height: '100%', background: 'linear-gradient(90deg, #fd3a25, #f59e0b)', borderRadius: '3px' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="d-flex justify-content-between mb-1" style={{ fontSize: '0.82rem', fontWeight: 600 }}>
                        <span className="text-secondary">Synapse Throughput</span>
                        <span style={{ color: '#fd3a25' }}>{calculatedThroughput.toLocaleString()} tok/s</span>
                      </div>
                      <div style={{ height: '6px', background: '#e5e7eb', borderRadius: '3px', overflow: 'hidden' }}>
                        <div style={{ width: `${Math.min(100, (calculatedThroughput / 1200) * 100)}%`, height: '100%', background: 'linear-gradient(90deg, #fd3a25, #fd3a25)', borderRadius: '3px' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Neural Parameters Tuning */}
                <div className="glass-panel">
                  <h4 className="fw-bold text-dark mb-4 d-flex align-items-center gap-8" style={{ fontSize: '1.1rem' }}>
                    <Sliders size={18} style={{ color: '#fd3a25' }} />
                    Hyperparameter Tuning
                  </h4>

                  <div className="d-flex flex-column gap-4">
                    <div>
                      <div className="d-flex justify-content-between mb-2" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                        <label className="text-secondary">Learning Rate (α)</label>
                        <span className="font-monospace" style={{ color: '#fd3a25' }}>{learningRate}</span>
                      </div>
                      <input
                        type="range"
                        min="0.0001"
                        max="0.01"
                        step="0.0001"
                        value={learningRate}
                        onChange={(e) => setLearningRate(parseFloat(e.target.value))}
                        className="custom-slider"
                      />
                    </div>

                    <div>
                      <div className="d-flex justify-content-between mb-2" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                        <label className="text-secondary">Context Window</label>
                        <span className="font-monospace" style={{ color: '#fd3a25' }}>{contextWindow} tokens</span>
                      </div>
                      <input
                        type="range"
                        min="2048"
                        max="32768"
                        step="2048"
                        value={contextWindow}
                        onChange={(e) => setContextWindow(parseInt(e.target.value))}
                        className="custom-slider"
                      />
                    </div>

                    <div>
                      <div className="d-flex justify-content-between mb-2" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                        <label className="text-secondary">Temperature</label>
                        <span className="font-monospace" style={{ color: '#fd3a25' }}>{temperature}</span>
                      </div>
                      <input
                        type="range"
                        min="0.1"
                        max="1.5"
                        step="0.05"
                        value={temperature}
                        onChange={(e) => setTemperature(parseFloat(e.target.value))}
                        className="custom-slider"
                      />
                    </div>

                    <div>
                      <div className="d-flex justify-content-between mb-2" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                        <label className="text-secondary">Neural Density</label>
                        <span className="font-monospace" style={{ color: '#fd3a25' }}>{neuralDensity}%</span>
                      </div>
                      <input
                        type="range"
                        min="50"
                        max="100"
                        step="1"
                        value={neuralDensity}
                        onChange={(e) => setNeuralDensity(parseInt(e.target.value))}
                        className="custom-slider"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={triggerOptimization}
                        disabled={isOptimizing}
                        className="btn-orange-primary w-100 justify-content-center"
                      >
                        {isOptimizing ? (
                          <>
                            <RefreshCw size={16} className="animate-spin me-2" style={{ animation: 'spin 1s linear infinite' }} />
                            <span>Optimizing...</span>
                          </>
                        ) : (
                          <>
                            <Play size={16} className="me-2" />
                            <span>Run Sync Diagnostics</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN: Terminal Command Console */}
              <div className="col-lg-8 col-md-7">
                <div className="glass-panel d-flex flex-column h-100" style={{ minHeight: '460px' }}>
                  <h4 className="fw-bold text-dark mb-4 d-flex align-items-center gap-8" style={{ fontSize: '1.1rem' }}>
                    <Server size={18} style={{ color: '#fd3a25' }} />
                    Mainframe Process Shell
                  </h4>

                  {/* Interactive Terminal Screen */}
                  <div className="terminal-window flex-grow-1">
                    <div className="terminal-header">
                      <div className="dot-container">
                        <span className="window-dot red"></span>
                        <span className="window-dot yellow"></span>
                        <span className="window-dot green"></span>
                      </div>
                      <div style={{ color: '#94a3b8', fontSize: '0.75rem', fontFamily: 'monospace' }}>
                        vgil_terminal_session.sh
                      </div>
                      <div style={{ width: '38px' }}></div>
                    </div>

                    <div className="terminal-content">
                      {history.map((log, index) => {
                        let colorClass = '#cbd5e1';
                        let prefix = '';

                        if (log.type === 'command') {
                          colorClass = '#fd3a25';
                          prefix = '$ ';
                        } else if (log.type === 'system') {
                          colorClass = '#fb923c';
                        } else if (log.type === 'info') {
                          colorClass = '#94a3b8';
                        } else if (log.type === 'success') {
                          colorClass = '#10b981';
                        } else if (log.type === 'error') {
                          colorClass = '#ef4444';
                        }

                        return (
                          <div
                            key={index}
                            style={{ color: colorClass, whiteSpace: 'pre-wrap', marginBottom: '8px', fontFamily: 'monospace' }}
                          >
                            {prefix}{log.text}
                          </div>
                        );
                      })}
                      <div ref={terminalEndRef} />
                    </div>

                    <form onSubmit={handleCommandSubmit} className="terminal-input-row">
                      <span className="prompt-symbol">&gt;</span>
                      <input
                        id="terminal-input"
                        type="text"
                        value={inputVal}
                        onChange={(e) => setInputVal(e.target.value)}
                        placeholder="Type a command (e.g. 'help', 'status', 'agents')..."
                        className="terminal-input-element"
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"
                      />
                      <button type="submit" style={{ background: 'transparent', border: 'none', color: '#fd3a25', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                        <Send size={16} />
                      </button>
                    </form>
                  </div>

                  {/* Quick-Click Command Shortcuts for mobile/desktop UX */}
                  <div className="mt-6">
                    <div className="text-secondary mb-2" style={{ fontSize: '0.8rem', fontWeight: 600 }}>MAIN FRAME SHORTCUTS:</div>
                    <div className="d-flex flex-wrap gap-8">
                      {['help', 'status', 'about', 'agents', 'neural', 'optimize', 'clear'].map((cmd) => (
                        <button
                          key={cmd}
                          type="button"
                          onClick={() => handleShortcutClick(cmd)}
                          className="shortcut-pill"
                        >
                          {cmd}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes pulse {
            0% { transform: scale(0.95); opacity: 0.5; }
            100% { transform: scale(1.05); opacity: 0.8; }
          }
        `}
      </style>
    </div>
  );
}

export default AIPage;
