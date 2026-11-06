import React from "react";
import Link from "next/link";
import styles from "./Privacy.module.css";

function Privacy() {
  return (
    <main className={styles.privacyPage}>
      {/* Hero */}
      <section className={styles.privacyHero}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>Legal</span>

            <h1 className={styles.heroTitle}>
              Privacy <span>Statement</span>
            </h1>

            <p className={styles.heroDescription}>
              Please read our Privacy Policy carefully to understand how
              Virtual Galaxy Infotech handles your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className={styles.privacyContent}>
        <div className="container">
          <div className={styles.contentLayout}>

            {/* Main Content */}
            <article className={styles.privacyArticle}>

              {/* Introduction */}
              <section className={styles.privacySection}>
                <h2>Privacy Statement</h2>

                <p>
                  We at Virtual Galaxy Infotech Private Limited are committed
                  to safeguarding your privacy. This Privacy Policy explains
                  how we may collect, use, share, and keep personal information
                  about you. It also explains the choices on your part related
                  to use of, your access to, and possibilities and ways to
                  correct your personal information. It is crucial on your
                  part to read the Privacy Policy carefully.
                </p>
              </section>

              {/* Required Personal Information */}
              <section className={styles.privacySection}>
                <h2>Required Personal information</h2>

                <p>
                  For the purpose of this Privacy Policy, we collect personal
                  information of individuals which includes name, email
                  address, contact details, or location. We gather pieces of
                  information that you provide us when you select to contact
                  us for more information or when you register on our website.
                  We collect time, date, and a few additional information
                  about user’s browser and system, referring/exit pages, files
                  viewed on our site (like graphics, downloads, etc.), and IP
                  address for all the visitors to our site. We use this
                  information for site personalization purposes
                </p>
              </section>

              {/* Use of Personal Information */}
              <section className={styles.privacySection}>
                <h2>Use of Personal Information</h2>

                <p>
                  Personal Information may be used by us to:
                </p>

                <ul className={styles.privacyList}>
                  <li>Manage and provide our services</li>

                  <li>
                    Comprehend our visitors/users and improve how our website
                    work
                  </li>

                  <li>
                    Get in touch with you and reply to your queries
                  </li>

                  <li>
                    Provide the related information about our product and
                    services to you
                  </li>

                  <li>
                    Keep the employees, users, system, and services safe
                  </li>

                  <li>
                    Provide the additional information or support you
                  </li>
                </ul>
              </section>

              {/* Sharing Personal Information */}
              <section className={styles.privacySection}>
                <h2>When/how we share your personal information?</h2>

                <p>
                  Your personal information may be disclosed to third parties
                  like members of VGIL branches or vendors that work on our
                  behalf. They are authorized to use your personal information
                  when it is essential to provide the following services to us:
                </p>

                <ul className={styles.privacyList}>
                  <li>Providing customer service</li>

                  <li>Sending marketing communications</li>

                  <li>Conducting research and analysis</li>

                  <li>Payment processing</li>

                  <li>Providing cloud computing infrastructure</li>
                </ul>
              </section>

              {/* Legal Disclaimer */}
              <section className={styles.privacySection}>
                <h2>Legal Disclaimer</h2>

                <p>
                  In a few cases, VGIL may be required to disclose your
                  personal data to meet security requirements, lawful requests
                  raised by public authorities, as well as instances requiring
                  co-operation with law enforcement agencies where mandated by
                  law.
                </p>

                <p>
                  Additionally, when required by law, we may disclose personal
                  information to comply with a subpoena or other legal process
                  and when it becomes crucial to protect our rights, respond
                  to a government request, protect your safety or the safety
                  of others, or investigate fraud.
                </p>
              </section>

              {/* Retention */}
              <section className={styles.privacySection}>
                <h2>How long do we keep your personal information?</h2>

                <p>
                  Personal Information is held on as long as the purpose for
                  its collection survives or lawfully further processed. The
                  conditions used to determine the duration to hold personal
                  information may include:
                </p>

                <ul className={styles.privacyList}>
                  <li>
                    Type of personal information provided to us
                  </li>

                  <li>
                    The Purpose for which the personal information is provided
                  </li>

                  <li>
                    To continue with essential business and operational
                    requirements by providing you the services or the
                    functionality requested by you
                  </li>

                  <li>
                    Your personal information may be retained as long as your
                    account is active, or as required to supply you the
                    services, comply with our legal commitment, settle
                    disputes and impose our agreements
                  </li>
                </ul>
              </section>

              {/* Storage */}
              <section className={styles.privacySection}>
                <h2>Where we store Personal Information?</h2>

                <p>
                  We collect, store, and process information on servers. We
                  take effective measures to ensure you that your personal data
                  which are collected by us are continuously protected through
                  adequate safeguards.
                </p>

                <p>
                  As a user of our services, it is essential on your part to
                  protect the information provided by you, including user name
                  and passwords.
                </p>
              </section>

              {/* Updating Privacy Policy */}
              <section className={styles.privacySection}>
                <h2>Updating Private Policy</h2>

                <p>
                  In any given time, VGIL reserves the right to revise this
                  Privacy Policy and Terms of Use, add or amend website
                  information, add new product and service features, add new
                  items in the website, or even terminate the website without
                  prior notice.
                </p>

                <p>
                  We are constantly working to develop services. It may be
                  feasible that we may change our practices over time as our
                  business and technology evolve. This may result in changes
                  involved in the ways of collecting, processing, and using
                  your information. We amend this Policy from time to time.
                </p>
              </section>

              {/* Copyright */}
              <section className={styles.privacySection}>
                <h2>Copyright Notice</h2>

                <p>
                  The text, data, video clips, and photographs, and all of the
                  other pieces of information available on this site is
                  protected under copyright. The content on this site may not
                  be copied and republished or used for the creation of any
                  derivative works without the prior consent from VGIL, except
                  it provides limited permission to access and display Web
                  pages and downloadable documents within the site only on
                  your computer for non-commercial use.
                </p>
              </section>

              {/* Registration */}
              <section className={styles.privacySection}>
                <h2>Registration</h2>

                <p>
                  The users and visitors can gain access to this website
                  without making any registration. But, there are some specific
                  sections of this site where a password is essential to
                  provide you with certain services, information, and specific
                  material.
                </p>
              </section>

              {/* Cookies */}
              <section className={styles.privacySection}>
                <h2>Cookies used</h2>

                <p>
                  We use cookies to analyze trends, track user’s movement
                  around the site, manage the site, and collect demographic
                  information about the user.
                </p>
              </section>

              {/* Related Legal Pages */}
              <section className={styles.relatedSection}>
                <h3>Related Information</h3>

                <div className={styles.relatedLinks}>
                  <Link href="/terms">Terms of Use</Link>
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

export default Privacy;