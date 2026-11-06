import React from "react";
import Link from "next/link";
import styles from "./Disclaimer.module.css";

function Disclaimer() {
  return (
    <main className={styles.disclaimerPage}>
      {/* Hero */}
      <section className={styles.disclaimerHero}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>Legal</span>

            <h1 className={styles.heroTitle}>
              <span>Disclaimer</span>
            </h1>

            <p className={styles.heroDescription}>
              Please read this Disclaimer carefully before using information
              available on the Virtual Galaxy Infotech website.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className={styles.disclaimerContent}>
        <div className="container">
          <div className={styles.contentLayout}>

            {/* Main Content */}
            <article className={styles.disclaimerArticle}>

              {/* Use of Website Information */}
              <section className={styles.disclaimerSection}>
                <h2>Use of Website Information</h2>

                <p>
                  According to the terms and conditions dictated in Terms of
                  Use and this Disclaimer, VGIL grants you a non-exclusive,
                  non-transferable, restricted and limited rights to access,
                  use, and show this website along with the contents. You agree
                  and acknowledge that from you there will be no interruption
                  in the functioning of this website in any manner whatsoever.
                  You need to agree as a user of this website that you shall
                  use and access this website in accordance with the terms and
                  conditions stated in Terms of Use and Disclaimer.
                </p>

                <p>
                  Except as otherwise indicated elsewhere on this website, as
                  a user or visitor of this website, you may view, copy, print,
                  and download the data/information available on this website
                  considering the following conditions:
                </p>

                <ul className={styles.disclaimerList}>
                  <li>
                    The information on this website is exclusively used for
                    personal and informational purposes
                  </li>

                  <li>
                    The information may not be amended or changed in any way
                  </li>

                  <li>
                    Any information copied or part thereof must include the
                    copyright notice including this permission notice
                  </li>

                  <li>
                    You shall agree to the additional restriction of using this
                    website as displayed and updated from time to time
                  </li>
                </ul>
              </section>

              {/* Related Legal Pages */}
              <section className={styles.relatedSection}>
                <h3>Related Information</h3>

                <div className={styles.relatedLinks}>
                  <Link href="/terms">Terms of Use</Link>
                  <Link href="/privacy">Privacy Statement</Link>
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

export default Disclaimer;