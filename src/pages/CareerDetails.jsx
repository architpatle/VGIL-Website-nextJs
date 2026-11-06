"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import JobApplicationForm from "../components/JobApplicationForm";

import jobs from "../data/jobsData";

import {
  Mail,
  MapPin,
  Briefcase,
  Clock,
  Users,
  Award,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Send,
  FileText,
  GraduationCap,
  Building2,
  BadgeCheck
} from "lucide-react";

import { FaLinkedinIn } from "react-icons/fa";

import "./CareerDetails.css";

const CareerDetails = ({ jobId }) => {

  const [showApplicationForm, setShowApplicationForm] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [jobId]);



  // Find the selected job
  const job = jobs[jobId];

  // If wrong URL is entered
  if (!job) {
    return (
      <div
        style={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center"
        }}
      >
        <div>
          <h1>Job Not Found</h1>
          <p>This job position does not exist.</p>

        </div>
      </div>
    );
  }

  return (
    <>
      {/* ================= HERO ================= */}

      <section className="career-details-hero">
        <div className="career-details-hero__overlay"></div>

        <div className="container career-details-hero__container">
          <div className="career-breadcrumb">
            <Link href="/careers/career-path">Careers</Link>
            <span>/</span>
            <span>{job.title}</span>
          </div>

          <div className="career-details-hero__content">
            <div className="career-details-hero__main">
              <div className="career-hero-label">
                <Briefcase size={16} />
                <span>Career Opportunity</span>
              </div>

              <h1>{job.title}</h1>

              <p>
                Join Virtual Galaxy and become part of a team building innovative
                technology solutions and creating meaningful impact.
              </p>

              <div className="career-hero-meta">
                <div className="career-meta-pill">
                  <MapPin size={18} />
                  <span>{job.location}</span>
                </div>

                <div className="career-meta-pill">
                  <Clock size={18} />
                  <span>{job.type}</span>
                </div>
              </div>
            </div>

            <div className="career-contact-card">
              <p className="career-contact-card__label">
                HAVE QUESTIONS?
              </p>

              <h4>Connect with our team</h4>

              <a href="mailto:hr@vginfotech.ai">
                <span className="career-contact-icon">
                  <Mail size={17} />
                </span>

                <span>hr@vginfotech.ai</span>
              </a>

              <a
                href="https://www.linkedin.com/company/virtualgalaxy/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="career-contact-icon linkedin">
                  <FaLinkedinIn size={16} />
                </span>

                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* ================= JOB INFORMATION ================= */}

      <section className="career-info-section">
        <div className="container">
          <div className="career-info-grid">

            <InfoCard
              icon={<Building2 size={22} />}
              title="Job Category"
              value={job.category}
            />

            <InfoCard
              icon={<Briefcase size={22} />}
              title="Job Type"
              value={job.type}
            />

            <InfoCard
              icon={<MapPin size={22} />}
              title="Location"
              value={job.location}
            />

            <InfoCard
              icon={<Users size={22} />}
              title="Open Positions"
              value={job.positions}
            />

            <InfoCard
              icon={<Award size={22} />}
              title="Experience"
              value={job.experience}
            />

          </div>
        </div>
      </section>


      {/* ================= MAIN CONTENT ================= */}

      <section className="career-content-section">
        <div className="container">
          <div className="career-layout">


            {/* LEFT CONTENT */}

            <main className="career-main-content">

              {/* JOB DESCRIPTION */}

              <div className="career-content-card">
                <div className="career-section-heading">
                  <div className="career-heading-icon">
                    <FileText size={21} />
                  </div>

                  <div>
                    <span>ROLE OVERVIEW</span>
                    <h2>Job Description</h2>
                  </div>
                </div>

                <div className="career-description-intro">
                  <p>
                    We are looking for a talented and motivated professional to
                    join our growing team. The role involves the following key
                    responsibilities:
                  </p>
                </div>

                <ul className="career-list">
                  {job.description.map((item, index) => (
                    <li key={index}>
                      <CheckCircle size={19} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>


              {/* QUALIFICATIONS */}

              {job.qualifications?.length > 0 && (
                <div className="career-content-card">
                  <div className="career-section-heading">
                    <div className="career-heading-icon">
                      <GraduationCap size={22} />
                    </div>

                    <div>
                      <span>WHAT WE'RE LOOKING FOR</span>
                      <h2>Qualifications</h2>
                    </div>
                  </div>

                  <ul className="career-list qualification-list">
                    {job.qualifications.map((item, index) => (
                      <li key={index}>
                        <CheckCircle size={19} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {job.certifications?.length > 0 && (
                <div className="career-content-card">
                  <div className="career-section-heading">
                    <div className="career-heading-icon certification-heading-icon">
                      <BadgeCheck size={22} />
                    </div>

                    <div>
                      <span>PROFESSIONAL CREDENTIALS</span>
                      <h2>Certifications</h2>
                    </div>
                  </div>

                  <div className="career-certification-note">
                    <span>Optional</span>
                  </div>

                  <ul className="career-list certification-list">
                    {job.certifications.map((item, index) => (
                      <li key={index}>
                        <CheckCircle size={19} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </main>


            {/* RIGHT SIDEBAR */}

            <aside className="career-sidebar">

              <div className="career-apply-card">

                <div className="career-apply-card__top">
                  <div className="career-apply-icon">
                    <Send size={22} />
                  </div>

                  <span>READY TO JOIN US?</span>
                </div>

                <h3>Apply for this position</h3>

                <p>
                  Take the next step in your career and become part of our
                  growing team.
                </p>

                <button
                  type="button"
                  className="career-apply-button"
                  onClick={() => {
                    setShowApplicationForm(true);

                    setTimeout(() => {
                      document
                        .getElementById("job-application")
                        ?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                    }, 100);
                  }}
                >
                  <span>Apply Now</span>
                  <ArrowRight size={19} />
                </button>

                <div className="career-apply-divider"></div>

                <div className="career-sidebar-info">

                  <div>
                    <MapPin size={17} />

                    <div>
                      <span>LOCATION</span>
                      <strong>{job.location}</strong>
                    </div>
                  </div>

                  <div>
                    <Award size={17} />

                    <div>
                      <span>EXPERIENCE</span>
                      <strong>{job.experience}</strong>
                    </div>
                  </div>

                </div>

              </div>


              <div className="career-help-card">
                <h4>Need help?</h4>

                <p>
                  Have questions about this opportunity? Our recruitment team is
                  happy to help.
                </p>

                <a href="mailto:hr@vginfotech.ai">
                  <Mail size={17} />
                  Contact HR
                </a>
              </div>

            </aside>

          </div>

          {/* APPLICATION FORM */}

          {showApplicationForm && (
            <div
              id="job-application"
              className="career-application-wrapper"
            >
              <div className="career-application-heading">
                <span>APPLICATION FORM</span>

                <h2>Apply for {job.title}</h2>

                <p>
                  Complete the form below and our recruitment team will review
                  your application.
                </p>
              </div>

              <JobApplicationForm jobTitle={job.title} />
            </div>
          )}

          {/* BACK LINK */}

          <div className="career-back-wrapper">
            <Link
              href="/careers/career-path"
              className="career-back-link"
            >
              <ArrowLeft size={18} />
              <span>Back to All Careers</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

const InfoCard = ({ icon, title, value }) => {
  return (
    <div className="career-info-card">

      <div className="career-info-card__icon">
        {icon}
      </div>

      <div className="career-info-card__content">
        <span>{title}</span>
        <strong>{value}</strong>
      </div>

    </div>
  );
};

const headingStyle = {
  fontSize: "1.35rem",
  fontWeight: "700",
  color: "#222",
  marginBottom: "15px"
};

const listStyle = {
  paddingLeft: "20px",
  margin: 0,
  color: "#222",
  fontSize: "14px",
  lineHeight: "1.7"
};

export default CareerDetails;