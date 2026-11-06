"use client";

import React, { useState } from 'react';
import cyberLogo from '../../assets/home/cyber-logo.png';
import styles from "./WhyChooseUs.module.css";

import img1 from '../../assets/home/Why-Choose-Us/design-led-ai-1.png'
import img2 from '../../assets/home/Why-Choose-Us/design-led-ai-3.png'
import img3 from '../../assets/home/Why-Choose-Us/ai-bot-img.png'


function WhyChooseUs() {
    // Tracks which single card is expanded on mobile. Card 0 (Performance)
    // starts open so the section isn't fully collapsed on first paint.
    // Opening a card closes whichever one was open before it; clicking the
    // open card again closes it, leaving all four collapsed.
    const [openIndex, setOpenIndex] = useState(0);

    const toggleCard = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    // Reusable accordion header: title stays visible whether the card is
    // open or closed; only the icon rotates and the body height animates.
    // On desktop this is inert (CSS ignores the open/closed state).
    const AccordionHeader = ({ index, title }) => (
        <div
            className={styles.accordionHeader}
            onClick={() => toggleCard(index)}
            role="button"
            tabIndex={0}
            aria-expanded={openIndex === index}
            aria-controls={`wcu-panel-${index}`}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleCard(index);
                }
            }}
        >
            <h6 className="fw-semibold title mb-0">{title}</h6>
            <span
                className={`${styles.accordionIcon} ${openIndex === index ? styles.accordionIconOpen : ""}`}
                aria-hidden="true"
            ></span>
        </div>
    );

    return (
        <div className="section-benefits section-spacing-lg">
            <div className="container">
                <div className={`heading-section ${styles.whyChooseUsHeading}`}>
                    <div className={`heading-sub ${styles.whyChooseUsHeadingSub} fw-semibold effectFade fadeUp`}>Benefits</div>
                    <div className={`heading-title ${styles.whyChooseUsHeadingTitle} text-gradient-3 effectFade fadeRotateX`}>Why Partner with VGIL?</div>
                </div>
                <div className={`row ${styles.wcuRow}`}>
                    <div className="col-lg-7 ">
                        <div className={`benefits-box benefits-progress ${styles.accordionCard}`}>
                            <div
                                id="wcu-panel-0"
                                className={`${styles.accordionBody} ${(openIndex === 0) ? styles.accordionBodyOpen : ""}`}
                                aria-hidden={!(openIndex === 0)}
                            >
                                <div className={styles.accordionBodyInner}>
                                    <div className={`${styles.performanceGrid} wcuPerformance ${styles.wcuCard}`}>
                                        {[
                                            { value: 98, label: "Expertise", icon: "" },
                                            { value: 95, label: "Experience", icon: "" },
                                            { value: 90, label: "Efficient", icon: "" },
                                            { value: 100, label: "Execution", icon: "" },
                                        ].map((metric) => (
                                            <div
                                                key={metric.label}
                                                className={`${styles.metricCard} effectFade fadeUp`}
                                            >
                                                <div
                                                    className={styles.progressCircle}
                                                    style={{
                                                        "--progress": metric.value,
                                                    }}
                                                >
                                                    <svg viewBox="0 0 120 120">
                                                        <circle
                                                            className={styles.bgCircle}
                                                            cx="60"
                                                            cy="60"
                                                            r="52"
                                                        />
                                                        <circle
                                                            className={styles.progressRing}
                                                            cx="60"
                                                            cy="60"
                                                            r="52"
                                                        />
                                                    </svg>

                                                    <div className={styles.metricCenter}>
                                                        <span className={styles.metricValue}>
                                                            {metric.value}%
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className={styles.metricLabel}>
                                                    <span>{metric.icon}</span>
                                                    {metric.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="content">
                                <AccordionHeader index={0} title="Why Businesses Choose VGIL" />
                                <div
                                    className={`${styles.accordionBody} ${(openIndex === 0) ? styles.accordionBodyOpen : ""}`}
                                    aria-hidden={!(openIndex === 0)}
                                >
                                    <div className={styles.accordionBodyInner}>
                                        <p className={`text text-secondary ${styles.wcuPara}`}>We measure what matters: Accurate, Rapid, Trusted, and Efficient — so every sprint ships business value, not just features.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className={`benefits-box benefits-step  effectFade fadeUp ${styles.accordionCard}`}>
                            <div
                                className={`${styles.accordionBody} ${(openIndex === 1) ? styles.accordionBodyOpen : ""}`}
                                aria-hidden={!(openIndex === 1)}
                            >
                                <div className={styles.accordionBodyInner}>
                                    <div className={`benefits-step-inner ${styles.wcuCard}`}>
                                        <div className="line-step"></div>
                                        <div className="step-item">
                                            <i className={`icon icon-check-solid ${styles.checkIcon}`}></i>
                                        </div>
                                        <div className="step-item">
                                            <i className={`icon icon-check-solid ${styles.checkIcon}`}></i>
                                        </div>
                                        <div className="step-item">
                                            <i className={`icon icon-check-solid ${styles.checkIcon}`}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="content">
                                <AccordionHeader index={1} title="Built for Impact" />
                                <div
                                    id="wcu-panel-1"
                                    className={`${styles.accordionBody} ${(openIndex === 1) ? styles.accordionBodyOpen : ""}`}
                                    aria-hidden={!(openIndex === 1)}
                                >
                                    <div className={styles.accordionBodyInner}>
                                        <p className={`text text-secondary ${styles.wcuPara}`}>We optimize for accuracy, speed, security and cost efficiency, delivering reliable real-world performance. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-5">
                        <div className={`benefits-box benefits-secure ${styles.accordionCard}`}>
                            <div
                                className={`${styles.accordionBody} ${(openIndex === 2) ? styles.accordionBodyOpen : ""}`}
                                aria-hidden={!(openIndex === 2)}
                            >
                                <div className={styles.accordionBodyInner}>
                                    <div className={`benefits-secure-inner text-center ${styles.wcuCard}`}>
                                        <img src={cyberLogo.src} alt="Cyber Security Logo" />
                                    </div>
                                </div>
                            </div>
                            <div className="content">
                                <AccordionHeader index={2} title="Designed for Trust" />
                                <div
                                    id="wcu-panel-2"
                                    className={`${styles.accordionBody} ${(openIndex === 2) ? styles.accordionBodyOpen : ""}`}
                                    aria-hidden={!(openIndex === 2)}
                                >
                                    <div className={styles.accordionBodyInner}>
                                        <p className={`text text-secondary ${styles.wcuPara}`}>PII handling, SSO/SAML, RBAC, encryption, and audit trails -built in, not bolted on. Enterprise-ready from the start.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className={`benefits-box benefits-design ${styles.accordionCard}`}>
                            <div
                                className={`${styles.accordionBody} ${(openIndex === 3) ? styles.accordionBodyOpen : ""}`}
                                aria-hidden={!(openIndex === 3)}
                            >
                                <div className={styles.accordionBodyInner}>
                                    <div className={`benefits-design-inner ${styles.wcuCard}`}>
                                        <img className="item-img-1" src={img1.src} alt="" />
                                        <img className="item-img-2 rightleft" src={img2.src} alt="" />
                                        {/* <img className="item-img-3 updown" src={img3} alt="" /> */}
                                    </div>
                                </div>
                            </div>
                            <div className="content">
                                <AccordionHeader index={3} title="Design-Led AI Experiences" />
                                <div
                                    id="wcu-panel-3"
                                    className={`${styles.accordionBody} ${(openIndex === 3) ? styles.accordionBodyOpen : ""}`}
                                    aria-hidden={!(openIndex === 3)}
                                >
                                    <div className={styles.accordionBodyInner}>
                                        <p className={`text text-secondary ${styles.wcuPara}`}>We craft prompts, interfaces, and guardrails that feel intuitive - so adoption rises and support tickets fall.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyChooseUs;