"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

import ShareholdingPattern30June2026 from "./30-june-2026/ShareholdingPattern30June2026";
import ShareholdingPattern31March2026 from "./31-march-2026/ShareholdingPattern31March2026";
import ShareholdingPattern31December2025 from "./31-december-2025/ShareholdingPattern31December2025";
import ShareholdingPattern30September2025 from "./30-september-2025/ShareholdingPattern30September2025";
import ShareholdingPattern22May2025 from "./22-may-2025/ShareholdingPattern22May2025";


const SHAREHOLDING_PATTERN_DATA = [
    {
        id: "30-june-2026",
        title: "Shareholding Pattern 30 June 2026",
        content: <ShareholdingPattern30June2026 />,
    },

    {
        id: "31-march-2026",
        title: "Shareholding Pattern 31 March 2026",
        content: <ShareholdingPattern31March2026 />
    },

    {
        id: "31-december-2025",
        title: "Shareholding Pattern 31 December 2025",
        content: <ShareholdingPattern31December2025 />
    },

    {
        id: "30-september-2025",
        title: "Shareholding Pattern 30 September 2025",
        content: <ShareholdingPattern30September2025 />
    },

    {
        id: "22-may-2025-post-listing",
        title: "Shareholding Pattern 22 May 2025 - Post Listing",
        content: <ShareholdingPattern22May2025 />
    },
];


function ShareholdingPattern() {
    const [activeAccordion, setActiveAccordion] = useState(null);

    return (
        <div className="policies-section-block">

            {/* SECTION TITLE */}
            <h3 className="explore-label text-left mb-3">
                Shareholding Pattern
            </h3>


            {/* ACCORDION LIST */}
            <div className="policies-accordion-list">

                {SHAREHOLDING_PATTERN_DATA.map((item, idx) => {
                    const isOpen = activeAccordion === idx;

                    return (
                        <div
                            key={item.id}
                            className={`policy-accordion-card effect-fade-up ${isOpen ? "is-open" : ""
                                }`}
                            style={{
                                animationDelay: `${idx * 0.04}s`,
                            }}
                        >

                            {/* ACCORDION HEADER */}
                            <button
                                type="button"
                                className="policy-accordion-header"
                                onClick={() =>
                                    setActiveAccordion(isOpen ? null : idx)
                                }
                                aria-expanded={isOpen}
                                aria-controls={`shareholding-content-${item.id}`}
                            >
                                <div className="policy-header-left">

                                    <span className="policy-title-text">
                                        {item.title}
                                    </span>

                                </div>


                                <div className="policy-header-right">

                                    {isOpen ? (
                                        <ChevronUp className="w-5 h-5 accordion-chevron-icon" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 accordion-chevron-icon" />
                                    )}

                                </div>
                            </button>


                            {/* ACCORDION CONTENT */}
                            <AnimatePresence initial={false}>

                                {isOpen && (
                                    <motion.div
                                        id={`shareholding-content-${item.id}`}
                                        initial="collapsed"
                                        animate="open"
                                        exit="collapsed"
                                        variants={{
                                            open: {
                                                opacity: 1,
                                                height: "auto",
                                            },

                                            collapsed: {
                                                opacity: 0,
                                                height: 0,
                                            },
                                        }}
                                        transition={{
                                            duration: 0.3,
                                            ease: [0.04, 0.62, 0.23, 0.98],
                                        }}
                                        className="policy-accordion-content-wrap"
                                    >

                                        <div className="policy-accordion-content">
                                            {item.content}
                                        </div>

                                    </motion.div>
                                )}

                            </AnimatePresence>

                        </div>
                    );
                })}

            </div>

        </div>
    );
}


export default ShareholdingPattern;