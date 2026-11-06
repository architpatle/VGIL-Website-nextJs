import React from "react";
import Link from "next/link";
import styles from "./Terms.module.css";

function Terms() {
    return (
        <main className={styles.termsPage}>
            {/* Hero */}
            <section className={styles.termsHero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className={styles.heroEyebrow}>Legal</span>

                        <h1 className={styles.heroTitle}>
                            Terms of <span>Use</span>
                        </h1>

                        <p className={styles.heroDescription}>
                            Please read these terms and conditions carefully before using
                            the Virtual Galaxy Infotech Limited website.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className={styles.termsContent}>
                <div className="container">
                    <div className={styles.contentLayout}>

                        {/* Main Content */}
                        <article className={styles.termsArticle}>

                            <section className={styles.termsSection}>
                                <h2>Terms of Use</h2>

                                <p>
                                    The terms of use that are prescribed down below are the
                                    terms of use on which you may access through this website.
                                    It is recommended for you as a user of this site to read
                                    and accept all of these terms and conditions along with
                                    Disclaimer.
                                </p>

                                <p>
                                    Nothing contained herein shall be considered to grant any
                                    third party rights or benefits. In any case, if you disagree
                                    to bound by these terms and conditions as the user of this
                                    website, you may opt-out from using this website.
                                </p>
                            </section>

                            <section className={styles.termsSection}>
                                <h2>Modification of Terms</h2>

                                <p>
                                    VGIL reserve the right to modify these terms of use at any
                                    time. Without prior notice, it can post the amended Terms
                                    of Use on this website. Your use of this website is an
                                    indication of your acceptance of the amended Terms of Use.
                                </p>

                                <p>
                                    It is essential for every user to go through the Terms of
                                    Use periodically.
                                </p>
                            </section>

                            <section className={styles.termsSection}>
                                <h2>Purpose of the Website</h2>

                                <p>
                                    This VGIL website (
                                    <a
                                        href="https://vgipl.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://vgipl.com
                                    </a>
                                    ) is an open platform in the form of medium that has been
                                    designed to enable users, visitors, including investors,
                                    current or potential customers, financial and industry
                                    analyst, alliance partners or potential alliance partners,
                                    media and journalists, current and former employees,
                                    job-seekers and others to collect the information about
                                    VGIL and to interact with VGIL through contact form given
                                    in the website.
                                </p>
                            </section>

                            <section className={styles.termsSection}>
                                <h2>Termination of Access</h2>

                                <p>
                                    VGIL reserves rights to immediately terminate or remove
                                    your access to this website as a user without prior notice
                                    or showing any reason. It can also do the same for various
                                    other reasons if it suspects breach or violation of these
                                    Terms of Use or requests by enforcement of law or other
                                    government agencies, any unexpected technical problems, or
                                    any additional reasons that VGIL finds good enough and
                                    believes for such removal.
                                </p>

                                <p>
                                    It needs to be understood and agreed by users that all
                                    terminators shall be made by VGIL at its sole discretion
                                    and VGIL shall not be liable to you or any third party for
                                    the termination of access to this website.
                                </p>
                            </section>

                            <section className={styles.termsSection}>
                                <h2>Account and Password Responsibility</h2>

                                <p>
                                    To maintain the confidentiality of password and account is
                                    the user’s responsibility. He/she is/shall be completely
                                    responsible for any kind of activities that take place
                                    under his/her account/password with or without his/her
                                    knowledge.
                                </p>
                            </section>

                            <section className={styles.termsSection}>
                                <h2>VGIL Does Not Assure For</h2>

                                <p>
                                    VGIL does not assure for:
                                </p>

                                <ul className={styles.assuranceList}>
                                    <li>
                                        The site, its contents or quality will meet user’s need.
                                    </li>

                                    <li>
                                        Uninterrupted access to this website, secure, timely or
                                        effort-free.
                                    </li>

                                    <li>
                                        Any material obtained or downloaded from this website is
                                        at your own decision and you will be the only one
                                        responsible for any damage that may occur to your computer
                                        or loss of data that results from the download of any such
                                        material.
                                    </li>

                                    <li>
                                        The information submitted by you strictly relates to you
                                        in person only.
                                    </li>
                                </ul>
                            </section>

                            {/* Related Legal Pages */}
                            <section className={styles.relatedSection}>
                                <h3>Related Information</h3>

                                <div className={styles.relatedLinks}>
                                    <Link href="/privacy">Privacy Statement</Link>
                                    <Link href="/disclaimer">Disclaimer</Link>
                                    <Link href="/policies">Policies</Link>
                                </div>
                            </section>

                        </article>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Terms;