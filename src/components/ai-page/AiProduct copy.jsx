import React from "react";
import {
    ArrowUpRight,
    Check,
    Mic,
    PhoneCall,
    ShieldCheck,
    Sparkles,
    FileCheck2,
    MessageSquareText,
    Languages,
    BarChart3,
    Workflow,
} from "lucide-react";

const PRODUCTS = [
    {
        id: "01",
        name: "Finix",
        title: "AI-Powered Digital Lending for Banks",
        description:
            "Finix simplifies loan origination with AI-powered voice calling, digital loan applications, document verification and automated credit scoring. Supporting Hindi, Marathi and English, Finix helps banks streamline loan processing, serve more customers and make faster, informed lending decisions with secure workflows and complete audit trails.",
        features: [
            {
                icon: PhoneCall,
                text: "Multilingual voice calling",
            },
            {
                icon: MessageSquareText,
                text: "Digital applications via WhatsApp",
            },
            {
                icon: FileCheck2,
                text: "PAN, Aadhaar & document verification",
            },
            {
                icon: Workflow,
                text: "Automated credit assessment",
            },
            {
                icon: ShieldCheck,
                text: "Consent & audit tracking",
            },
            {
                icon: Languages,
                text: "Hindi, Marathi & English",
            },
        ],
    },
    {
        id: "02",
        name: "Virtual Vaani",
        title: "Intelligent AI Voice Agents",
        description:
            "Virtual Vaani uses AI voice agents to handle customer calls, so routine conversations are automated and your teams can focus on high-value work. The agents speak naturally in Hindi, Marathi and English, answer queries, make outbound calls and capture customer responses around the clock.",
        features: [
            {
                icon: Mic,
                text: "Natural, human-like AI conversations",
            },
            {
                icon: Languages,
                text: "Hindi, Marathi & English",
            },
            {
                icon: PhoneCall,
                text: "Inbound & outbound calling, 24/7",
            },
            {
                icon: MessageSquareText,
                text: "Automated reminders & follow-ups",
            },
            {
                icon: BarChart3,
                text: "Call recordings, transcripts & analytics",
            },
            {
                icon: ShieldCheck,
                text: "Consent & secure data handling",
            },
        ],
    },
];

function FinixVisual() {
    return (
        <div className="product-art finix-art">
            <div className="finix-lines" />

            <div className="finix-document document-one">
                <div className="document-top">
                    <span />
                    <span />
                    <span />
                </div>

                <div className="document-line large" />
                <div className="document-line" />
                <div className="document-line short" />

                <div className="document-check">
                    <Check size={12} />
                    Verified
                </div>
            </div>

            <div className="finix-document document-two">
                <FileCheck2 size={28} />

                <strong>Verified</strong>
                <span>Documents</span>
            </div>

            <div className="finix-core">
                <div className="core-ring">
                    <div className="core-inner">
                        <Sparkles size={27} />
                    </div>
                </div>

                <span>FINIX AI</span>
            </div>

            <div className="finix-pill pill-one">
                <PhoneCall size={14} />
                Voice AI
            </div>

            <div className="finix-pill pill-two">
                <ShieldCheck size={14} />
                Secure
            </div>

            <div className="finix-pill pill-three">
                <Workflow size={14} />
                Smart Workflow
            </div>
        </div>
    );
}

function VirtualVaaniVisual() {
    return (
        <div className="product-art vaani-art">
            <div className="vaani-grid" />

            <div className="vaani-orb">
                <div className="vaani-orb-inner">
                    <Mic size={31} />
                </div>
            </div>

            <div className="vaani-wave">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
            </div>

            <div className="vaani-call">
                <div className="call-icon">
                    <PhoneCall size={15} />
                </div>

                <div>
                    <span>AI Voice Agent</span>
                    <strong>Active conversation</strong>
                </div>

                <div className="call-status" />
            </div>

            <div className="vaani-language">
                <span>Hindi</span>
                <span>Marathi</span>
                <span>English</span>
            </div>

            <div className="vaani-secure">
                <ShieldCheck size={15} />
                Secure conversation
            </div>
        </div>
    );
}

function AiProduct() {
    return (
        <section className="ai-products-section">
            <style>
                {`
          .ai-products-section {
            padding: 100px 0;
          }

          /* =========================
             SECTION HEADER
          ========================= */

          .ai-products-heading {
            max-width: 760px;
            margin: 0 auto 60px;
            text-align: center;
            display: flex;
            flex-direction:column;
            align-items:center
            }

          .ai-products-eyebrow {
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

          .ai-products-heading h2 {
            margin: 0;

            color: #181818;

            font-size: clamp(1.8rem, 3vw, 2.2rem);
            font-weight: 700;
            line-height: 1;
            letter-spacing: -0.01em;
          }

          .ai-products-heading p {
            max-width: 600px;

            margin: 22px 0 0;

            color: #686868;
            font-size: 1.02rem;
            line-height: 1.5;
          }


          /* =========================
             PRODUCT BLOCK
          ========================= */

          .ai-product {
            position: relative;

            display: grid;
            grid-template-columns: 1fr 1fr;

            min-height: 580px;

            margin-bottom: 24px;

            overflow: hidden;

            background: #ffffff;

            border: 1px solid rgba(0, 0, 0, 0.07);
            border-radius: 26px;

            box-shadow:
              0 18px 55px rgba(0, 0, 0, 0.045);
          }

          .ai-product.reverse {
            grid-template-columns: 1fr 1fr;
          }

          .ai-product.reverse .product-content {
            order: 2;
          }

          .ai-product.reverse .product-art {
            order: 1;
          }


          /* =========================
             CONTENT
          ========================= */

          .product-content {
            display: flex;
            flex-direction: column;
            justify-content: center;

            padding: 60px;
          }

          .product-number {
            margin-bottom: 35px;

            color: #fd3a25;

            font-size: 0.7rem;
            font-weight: 700;
            letter-spacing: 0.14em;
          }

          .product-name {
            margin: 0 0 8px;

            color: #171717;

            font-size: clamp(1.8rem, 3vw, 2.3rem);
            font-weight: 700;
            line-height: 0.95;
            letter-spacing: 0.01em;
          }

          .product-title {
            margin-bottom: 20px;

            color: #333;

            font-size: 1.05rem;
            font-weight: 600;
          }

          .product-description {
            max-width: 520px;

            margin: 0 0 30px;

            color: #6b6b6b;

            font-size: 0.9rem;
            line-height: 1.8;
          }


          /* =========================
             FEATURE GRID
          ========================= */

          .product-features {
            display: grid;
            grid-template-columns: 1fr 1fr;

            gap: 12px 20px;

            max-width: 570px;
          }

          .product-feature {
            display: flex;
            align-items: center;
            gap: 9px;

            color: #454545;

            font-size: 0.77rem;
            line-height: 1.4;
          }

          .product-feature svg {
            flex-shrink: 0;

            color: #fd3a25;
          }


          /* =========================
             PRODUCT ART
          ========================= */

          .product-art {
            position: relative;

            min-height: 580px;

            overflow: hidden;

            background: #f3f0ee;
          }


          /* =========================
             FINIX ART
          ========================= */

          .finix-art {
            background:
              radial-gradient(
                circle at 50% 50%,
                rgba(253, 58, 37, 0.09),
                transparent 45%
              ),
              #f3f0ee;
          }

          .finix-lines {
            position: absolute;

            inset: 0;

            background-image:
              linear-gradient(
                90deg,
                rgba(253, 58, 37, 0.045) 1px,
                transparent 1px
              ),
              linear-gradient(
                rgba(253, 58, 37, 0.045) 1px,
                transparent 1px
              );

            background-size: 55px 55px;

            mask-image:
              radial-gradient(
                circle at center,
                black,
                transparent 70%
              );
          }

          /* =========================
   FINIX VISUAL POSITIONING
========================= */

.finix-core {
  position: absolute;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  text-align: center;
  z-index: 3;
}

.document-one {
  width: 170px;

  top: 15%;
  left: 11%;

  transform: rotate(-7deg);
}

.document-two {
  width: 150px;

  right: 10%;
  bottom: 15%;

  color: #fd3a25;

  animation-delay: -2s;
}

.pill-one {
  top: 10%;
  right: 11%;
}

.pill-two {
  bottom: 10%;
  left: 12%;
}

.pill-three {
  right: 9%;
  bottom: 32%;
}

          .core-ring {
            width: 165px;
            height: 165px;

            display: flex;
            align-items: center;
            justify-content: center;

            border: 1px solid rgba(253, 58, 37, 0.25);

            border-radius: 50%;

            animation: coreFloat 5s ease-in-out infinite;
          }

          .core-inner {
            width: 92px;
            height: 92px;

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 50%;

            background: #fd3a25;
            color: #fff;

            box-shadow:
              0 18px 45px rgba(253, 58, 37, 0.22);
          }

          .finix-core > span {
            display: block;

            margin-top: 13px;

            color: #777;

            font-size: 0.65rem;
            font-weight: 700;
            letter-spacing: 0.15em;
          }

          @keyframes coreFloat {
            0%,
            100% {
              transform: scale(0.97);
            }

            50% {
              transform: scale(1.04);
            }
          }

          .finix-document {
            position: absolute;

            display: flex;
            flex-direction: column;

            padding: 18px;

            background: rgba(255,255,255,0.86);

            border: 1px solid rgba(255,255,255,0.9);

            border-radius: 16px;

            box-shadow:
              0 18px 45px rgba(0,0,0,0.08);

            backdrop-filter: blur(12px);

            animation: documentFloat 5s ease-in-out infinite;
          }

          .document-one {
            width: 170px;

            top: 18%;
            left: 13%;

            transform: rotate(-7deg);
          }

          .document-two {
            width: 150px;

            right: 12%;
            bottom: 18%;

            color: #fd3a25;

            animation-delay: -2s;
          }

          .document-two strong {
            margin-top: 12px;

            color: #222;

            font-size: 0.8rem;
          }

          .document-two span {
            color: #888;
            font-size: 0.65rem;
          }

          .document-top {
            display: flex;
            gap: 4px;

            margin-bottom: 20px;
          }

          .document-top span {
            width: 5px;
            height: 5px;

            border-radius: 50%;

            background: #ddd;
          }

          .document-line {
            width: 85%;
            height: 5px;

            margin-bottom: 8px;

            border-radius: 10px;

            background: #e7e7e7;
          }

          .document-line.large {
            width: 100%;
          }

          .document-line.short {
            width: 55%;
          }

          .document-check {
            display: inline-flex;
            align-items: center;
            gap: 4px;

            width: fit-content;

            margin-top: 8px;
            padding: 5px 8px;

            border-radius: 20px;

            background: #edf7ee;

            color: #3c8c4d;

            font-size: 0.6rem;
          }

          @keyframes documentFloat {
            0%,
            100% {
              transform: translateY(0) rotate(-7deg);
            }

            50% {
              transform: translateY(-10px) rotate(-4deg);
            }
          }

          .document-two {
            animation-name: documentTwoFloat;
          }

          @keyframes documentTwoFloat {
            0%,
            100% {
              transform: translateY(0) rotate(5deg);
            }

            50% {
              transform: translateY(-10px) rotate(2deg);
            }
          }


          /* FINIX PILLS */

          .finix-pill {
            position: absolute;

            display: flex;
            align-items: center;
            gap: 7px;

            padding: 8px 12px;

            background: rgba(255,255,255,0.82);

            border: 1px solid rgba(255,255,255,0.9);

            border-radius: 30px;

            color: #555;

            font-size: 0.62rem;

            box-shadow:
              0 12px 30px rgba(0,0,0,0.07);

            backdrop-filter: blur(10px);
          }

          .finix-pill svg {
            color: #fd3a25;
          }

          .pill-one {
            top: 12%;
            right: 13%;
          }

          .pill-two {
            bottom: 13%;
            left: 15%;
          }

          .pill-three {
            right: 11%;
            bottom: 32%;
          }


          /* =========================
             VAANI ART
          ========================= */

          .vaani-art {
            background:
              radial-gradient(
                circle at 50% 50%,
                rgba(253,58,37,0.10),
                transparent 45%
              ),
              #f3f0ee;
          }

          .vaani-grid {
            position: absolute;

            inset: 0;

            opacity: 0.4;

            background-image:
              radial-gradient(
                rgba(253,58,37,0.18) 1px,
                transparent 1px
              );

            background-size: 24px 24px;

            mask-image:
              radial-gradient(
                circle at center,
                black,
                transparent 70%
              );
          }

          /* =========================
   VAANI VISUAL POSITIONING
========================= */

.vaani-orb {
  position: absolute;

  top: 50%;
  left: 50%;

  width: 185px;
  height: 185px;

  display: flex;
  align-items: center;
  justify-content: center;

  transform: translate(-50%, -50%);

  border-radius: 50%;

  border: 1px solid rgba(253,58,37,0.3);

  animation: vaaniPulse 4s ease-in-out infinite;

  z-index: 3;
}

.vaani-wave {
  position: absolute;

  top: 50%;
  left: 50%;

  display: flex;
  align-items: center;
  gap: 5px;

  height: 80px;

  transform: translate(-50%, -50%);

  z-index: 2;
}

.vaani-call {
  top: 15%;
  left: 8%;
}

.vaani-language {
  right: 8%;
  top: 22%;
}

.vaani-secure {
  right: 10%;
  bottom: 17%;
}

          .vaani-orb-inner {
            width: 100px;
            height: 100px;

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 50%;

            background: #fd3a25;

            color: #fff;

            box-shadow:
              0 20px 50px rgba(253,58,37,0.25);
          }

          @keyframes vaaniPulse {
            50% {
              transform:
                translate(-50%, -50%)
                scale(1.05);
            }
          }

          .vaani-wave {
            position: absolute;

            top: 50%;
            left: 50%;

            display: flex;
            align-items: center;
            gap: 5px;

            height: 80px;

            transform: translate(-50%, -50%);

            z-index: 2;
          }

          .vaani-wave span {
            width: 3px;

            border-radius: 10px;

            background: rgba(253,58,37,0.25);

            animation: audioWave 1.1s ease-in-out infinite;
          }

          .vaani-wave span:nth-child(1) {
            height: 20px;
          }

          .vaani-wave span:nth-child(2) {
            height: 32px;
            animation-delay: .1s;
          }

          .vaani-wave span:nth-child(3) {
            height: 45px;
            animation-delay: .2s;
          }

          .vaani-wave span:nth-child(4) {
            height: 58px;
            animation-delay: .3s;
          }

          .vaani-wave span:nth-child(5) {
            height: 70px;
            animation-delay: .4s;
          }

          .vaani-wave span:nth-child(6) {
            height: 58px;
            animation-delay: .5s;
          }

          .vaani-wave span:nth-child(7) {
            height: 45px;
            animation-delay: .6s;
          }

          .vaani-wave span:nth-child(8) {
            height: 58px;
            animation-delay: .7s;
          }

          .vaani-wave span:nth-child(9) {
            height: 70px;
            animation-delay: .8s;
          }

          .vaani-wave span:nth-child(10) {
            height: 42px;
            animation-delay: .9s;
          }

          .vaani-wave span:nth-child(11) {
            height: 22px;
            animation-delay: 1s;
          }

          @keyframes audioWave {
            50% {
              transform: scaleY(0.35);
            }
          }


          /* VAANI CARDS */

          .vaani-call,
          .vaani-language,
          .vaani-secure {
            position: absolute;

            display: flex;
            align-items: center;
            gap: 10px;

            padding: 12px 14px;

            background: rgba(255,255,255,0.84);

            border: 1px solid rgba(255,255,255,0.9);

            border-radius: 14px;

            box-shadow:
              0 15px 35px rgba(0,0,0,0.07);

            backdrop-filter: blur(10px);

            z-index: 4;
          }

          .vaani-call {
            top: 18%;
            left: 10%;

            animation: vaaniFloat 5s ease-in-out infinite;
          }

          .call-icon {
            width: 32px;
            height: 32px;

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 9px;

            background: rgba(253,58,37,0.08);

            color: #fd3a25;
          }

          .vaani-call span {
            display: block;

            color: #888;

            font-size: 0.57rem;
          }

          .vaani-call strong {
            display: block;

            margin-top: 2px;

            color: #222;

            font-size: 0.67rem;
          }

          .call-status {
            width: 7px;
            height: 7px;

            margin-left: 6px;

            border-radius: 50%;

            background: #46a75b;

            box-shadow:
              0 0 0 5px rgba(70,167,91,0.1);
          }

          .vaani-language {
            right: 10%;
            top: 25%;

            gap: 5px;

            animation: vaaniFloat 5s ease-in-out infinite -1.5s;
          }

          .vaani-language span {
            padding: 4px 7px;

            border-radius: 6px;

            background: #f3f3f3;

            color: #666;

            font-size: 0.58rem;
          }

          .vaani-secure {
            right: 12%;
            bottom: 20%;

            color: #438b50;

            font-size: 0.65rem;

            animation: vaaniFloat 5s ease-in-out infinite -3s;
          }

          @keyframes vaaniFloat {
            50% {
              transform: translateY(-9px);
            }
          }


          /* =========================
             RESPONSIVE
          ========================= */

          @media (max-width: 1000px) {
            .ai-product,
            .ai-product.reverse {
              grid-template-columns: 1fr;
            }

            .ai-product.reverse .product-content,
            .ai-product.reverse .product-art {
              order: initial;
            }

            .product-art {
              min-height: 500px;
            }

            .product-content {
              padding: 45px;
            }
          }

          @media (max-width: 650px) {
            .ai-products-section {
              padding: 70px 0;
            }

            .ai-products-heading {
              margin-bottom: 40px;
            }

            .ai-products-heading h2 {
              font-size: 1.8rem;
            }

            .product-content {
              padding: 32px 24px;
            }

            .product-name {
              font-size: 2.8rem;
            }

            .product-features {
              grid-template-columns: 1fr;
            }

            .product-art {
              min-height: 400px;
            }

            .document-one {
              left: 5%;
            }

            .document-two {
              right: 5%;
            }

            .pill-three {
              display: none;
            }

            .vaani-call {
              left: 5%;
            }

            .vaani-language {
              right: 5%;
            }

            .vaani-secure {
              right: 5%;
            }
          }
        `}
            </style>

            {/* =========================
          HEADER
      ========================= */}

            <div className="ai-products-heading">
                <div className="ai-products-eyebrow">
                    AI Products by VGIL
                </div>

                <h2>
                    Intelligence that
                    moves business forward
                </h2>

                <p>
                    Purpose-built AI products that transform everyday business
                    workflows into faster, smarter and more connected experiences.
                </p>
            </div>


            {/* =========================
          PRODUCTS
      ========================= */}

            {PRODUCTS.map((product, index) => (
                <article
                    key={product.id}
                    className={`ai-product ${index % 2 === 1 ? "reverse" : ""
                        }`}
                >

                    <div className="product-content">

                        <div className="product-number">
                            / {product.id}
                        </div>

                        <h3 className="product-name">
                            {product.name}
                        </h3>

                        <div className="product-title">
                            {product.title}
                        </div>

                        <p className="product-description">
                            {product.description}
                        </p>

                        <div className="product-features">
                            {product.features.map((feature) => {
                                const Icon = feature.icon;

                                return (
                                    <div
                                        className="product-feature"
                                        key={feature.text}
                                    >
                                        <Icon size={14} />
                                        <span>{feature.text}</span>
                                    </div>
                                );
                            })}
                        </div>

                    </div>

                    <ProductArt product={product} />

                </article>
            ))}
        </section>
    );
}

function ProductArt({ product }) {
    if (product.name === "Finix") {
        return <FinixVisual />;
    }

    return <VirtualVaaniVisual />;
}

export default AiProduct;