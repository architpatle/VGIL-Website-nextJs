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
import "./AiProduct.css";

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

                {/* <span>FINIX AI</span> */}
            </div>

            {/* <div className="finix-pill pill-one">
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
            </div> */}
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

            {/* <div className="vaani-language">
                <span>Hindi</span>
                <span>Marathi</span>
                <span>English</span>
            </div> */}

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
