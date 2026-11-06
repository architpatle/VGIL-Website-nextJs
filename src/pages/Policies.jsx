"use client";

    import React, { useState } from "react";
import Link from "next/link";
import policyData from "../data/policyData.js";
import styles from "./Policies.module.css";

/*
 * Policy content is rebuilt directly from the VGIL Policies PDF
 * (pdftotext + pdfplumber table extraction), not hand-transcribed.
 * Each policy is a flat, ordered list of typed sections:
 *   { type: "heading",   text }
 *   { type: "paragraph", text }
 *   { type: "list",      items: [] }
 *   { type: "table",     name, headers: [], rows: [[]] }
 * There is no "page" concept and no markdown-in-strings — the data
 * itself carries the structure, so the renderer is a plain switch
 * over section.type instead of regex-guessing paragraphs vs lists
 * vs headings from a wall of text.
 */

function PolicyTable({ name, headers, rows }) {
    return (
        <div className={styles.tableWrapper}>
            {name && <div className={styles.tableName}>{name}</div>}
            <table className={styles.policyTable}>
                <thead>
                    <tr>
                        {headers.map((h, i) => (
                            <th key={i}>{h}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, r) => (
                        <tr key={r}>
                            {row.map((cell, c) => (
                                <td key={c}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function renderSection(section, key) {
    switch (section.type) {
        case "heading":
            return (
                <h4 className={styles.subHeading} key={key}>
                    {section.text}
                </h4>
            );
        case "paragraph":
            return <p key={key}>{section.text}</p>;
        case "list":
            return (
                <ul className={styles.contentList} key={key}>
                    {section.items.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            );
        case "table":
            return <PolicyTable key={key} name={section.name} headers={section.headers} rows={section.rows} />;
        default:
            return null;
    }
}

function PolicyContent({ policy }) {
    if (!policy.sections?.length) {
        return (
            <div className={styles.policyBody}>
                <div className={styles.emptyPolicy}>
                    Full details for this policy are being finalized. Please contact{" "}
                    <a href="mailto:info@vgipl.in">info@vgipl.in</a> for the latest version.
                </div>
            </div>
        );
    }

    return (
        <div className={styles.policyBody}>
            {policy.sections.map((section, i) => renderSection(section, i))}
        </div>
    );
}

function Policies() {
    const [openPolicy, setOpenPolicy] = useState(null);

    const togglePolicy = (id) => {
        setOpenPolicy((current) => (current === id ? null : id));
    };

    return (
        <main className={styles.policiesPage}>
            <section className={styles.policiesHero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className={styles.heroEyebrow}>Legal</span>
                        <h1 className={styles.heroTitle}>
                            <span>Policies</span>
                        </h1>
                        <p className={styles.heroDescription}>
                            Review the policies and procedures governing Virtual Galaxy
                            Infotech and its services.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.policiesContent}>
                <div className="container">
                    <div className={styles.contentLayout}>
                        <div className={styles.accordion}>
                            {policyData.map((policy) => {
                                const isOpen = openPolicy === policy.id;

                                return (
                                    <section
                                        className={`${styles.accordionItem} ${isOpen ? styles.isOpen : ""}`}
                                        key={policy.id}
                                    >
                                        <button
                                            type="button"
                                            className={styles.accordionHeader}
                                            onClick={() => togglePolicy(policy.id)}
                                            aria-expanded={isOpen}
                                            aria-controls={`policy-${policy.id}`}
                                        >
                                            <span className={styles.accordionTitle}>
                                                <strong>{policy.title}</strong>
                                            </span>
                                            <span className={styles.accordionIcon} aria-hidden="true">
                                                <span />
                                                <span />
                                            </span>
                                        </button>

                                        <div
                                            id={`policy-${policy.id}`}
                                            className={styles.accordionPanel}
                                            hidden={!isOpen}
                                        >
                                            <PolicyContent policy={policy} />
                                        </div>
                                    </section>
                                );
                            })}
                        </div>

                        <section className={styles.relatedSection}>
                            <h3>Related Information</h3>
                            <div className={styles.relatedLinks}>
                                <Link href="/terms">Terms of Use</Link>
                                <Link href="/privacy">Privacy Policy</Link>
                                <Link href="/disclaimer">Disclaimer</Link>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Policies;