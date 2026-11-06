import React from 'react';
import Link from "next/link";
import { Building2, FileText, Mail, Phone, User } from 'lucide-react';
import vgilLogo from '../../assets/home/vgil-logo.png';
import imgInvestorContacts from '../../assets/Investors-Info-img/Investor_Contacts_Grievances.png';

// Reusable card for key contact persons
const KeyContactCard = ({ name, role, email, phone }) => {
  return (
    <div className="bg-white border-l-[5px] border-l-solid border-l-[#162a56] rounded-xl p-3 px-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-4 border border-solid border-gray-100/80">
      <div className="w-10 h-10 rounded-full bg-[#fff1ec] flex items-center justify-center flex-shrink-0 border border-solid border-[#fee2e2]">
        <User className="w-5 h-5 text-[#ff4d00]" />
      </div>
      <div className="flex-grow">
        <h4 className="text-sm font-bold text-[#1b305a] m-0 leading-tight">{name}</h4>
        <p className="text-[9px] font-bold text-gray-400 mt-0.5 mb-0 uppercase tracking-wider">{role}</p>

        {/* Orange Mini Divider */}
        <div className="w-8 h-[1.5px] bg-[#ff4d00] my-1 rounded-full"></div>

        {/* Contact info rows (horizontal layout to save space) */}
        <div className="flex flex-row gap-3 flex-wrap items-center mt-1">
          <div className="flex items-center gap-1">
            <Mail className="w-3.5 h-3.5 text-gray-400" />
            <a
              href={`mailto:${email}`}
              className="text-xs font-semibold text-gray-500 hover:text-[#ff4d00] transition-colors no-underline"
            >
              {email}
            </a>
          </div>
          <div className="flex items-center gap-1">
            <Phone className="w-3.5 h-3.5 text-gray-400" />
            <a
              href={`tel:${phone}`}
              className="text-xs font-semibold text-gray-500 hover:text-[#ff4d00] transition-colors no-underline"
            >
              {phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable box for Right Contact Details area
const ContactDetailBox = ({ label, value, type }) => {
  const isEmail = type === 'email';
  const Icon = isEmail ? Mail : Phone;
  const href = isEmail ? `mailto:${value}` : `tel:${value}`;

  return (
    <div className="bg-slate-50 hover:bg-slate-100 transition-all duration-200 border border-solid border-slate-100 rounded-lg p-2.5 flex items-center gap-3">
      <div className="w-9 h-9 rounded-md bg-blue-50/50 flex items-center justify-center text-[#1b305a] flex-shrink-0 border border-solid border-blue-100/50">
        <Icon className="w-4 h-4 text-[#1b305a]" />
      </div>
      <div>
        <span className="text-[9px] text-gray-400 font-semibold uppercase tracking-wider block leading-none mb-0.5">{label}</span>
        <a
          href={href}
          className="text-[#1b305a] hover:text-[#ff4d00] text-xs font-bold block transition-colors no-underline"
        >
          {value}
        </a>
      </div>
    </div>
  );
};

function InvestorContacts() {
  return (
    <div className="board-mgmt-wrapper min-h-[calc(100vh-100px)] box-sizing-border-box flex flex-col justify-start">

      {/* Hero / Header Section */}
      <section className="hero-section">
        <div className="hero-glow-1"></div>
        <div className="hero-glow-2"></div>

        <div className="container">
          {/* Breadcrumbs */}
          <div className="row mb-3">
            <div className="col-12 text-left">
              <nav aria-label="breadcrumb">
                <ol
                  className="breadcrumb bg-transparent p-0 m-0"
                  style={{ fontSize: '13px' }}
                >
                  <li className="breadcrumb-item">
                    <Link
                      href="/"
                      className="text-secondary hover:text-[#ff4d00] transition-colors no-underline"
                    >
                      Home
                    </Link>
                  </li>

                  <li className="breadcrumb-item">
                    <Link
                      href="/investors/board-and-management"
                      className="text-secondary hover:text-[#ff4d00] transition-colors no-underline"
                    >
                      Investors
                    </Link>
                  </li>

                  <li className="breadcrumb-item active" aria-current="page">
                    <span className="text-[#ff4d00] font-bold">
                      Investor Contacts/Grievances
                    </span>
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          {/* Hero Content */}
          <div className="row align-items-center mt-3">
            {/* Left Content */}
            <div className="col-lg-7 col-12 text-left effect-fade-up">
              <div className="tag-badge">
                <span className="tag-dot" />
                <span className="tag-text">Investor Relations</span>
              </div>

              <h1 className="hero-title">
                <span>Investor</span>{' '}
                <span className="highlight">Contacts</span>
                <div className="hero-title-underline"></div>
              </h1>

              <p className="hero-desc">
                Contact information for investor queries, grievances, and
                complaints.
              </p>
            </div>

            {/* Right Illustration */}
            <div
              className="col-lg-5 col-12 text-center mt-4 mt-lg-0 effect-fade-up"
              style={{ animationDelay: '0.1s' }}
            >
              <div
                className="hero-img-wrap"
                style={{ maxWidth: '100%' }}
              >
                <img
                  src={imgInvestorContacts.src}
                  alt={imgInvestorContacts}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
    INVESTOR CONTACTS CONTENT
========================================================== */}

      <div className="container max-w-[1120px] mx-auto px-4 py-10 md:py-14">

        {/* ==========================================================
      SECTION HEADING
  ========================================================== */}

        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#fff5f2] border border-solid border-[#fee2e2]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d00] flex-shrink-0"></span>

            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#ff4d00]">
              Investor Support
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#162a56] mt-3 mb-2">
            Contact Information
          </h2>

          <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed m-0">
            For any investor queries, grievances, or complaints, please contact
            the appropriate representative below.
          </p>

        </div>


        {/* ==========================================================
      COMPANY INFORMATION CARD
  ========================================================== */}

        <div className="bg-white rounded-2xl border border-solid border-gray-100 shadow-[0_8px_35px_rgba(15,23,42,0.06)] overflow-hidden">

          {/* Top Accent */}
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#ff4d00] via-[#ff7048] to-transparent"></div>

          <div className="p-4 sm:p-5 md:p-7 lg:p-8">

            {/* ======================================================
          COMPANY HEADER
      ====================================================== */}

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 pb-6 border-b border-solid border-gray-100">

              <div className="flex items-center gap-4 min-w-0">

                {/* Company Logo */}
                <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-2xl bg-white border border-solid border-gray-100 shadow-sm flex items-center justify-center p-1.5 flex-shrink-0 overflow-hidden">

                  <img
                    src={vgilLogo.src}
                    alt="Virtual Galaxy Infotech Ltd. Logo"
                    className="w-full h-full object-contain"
                  />

                </div>


                {/* Company Name */}
                <div className="min-w-0">

                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#ff4d00]">
                    Registered Company
                  </span>

                  <h3 className="text-lg md:text-xl font-extrabold text-[#162a56] mt-1 mb-1 tracking-tight">
                    Virtual Galaxy Infotech Ltd.
                  </h3>

                  <p className="text-xs text-gray-400 m-0">
                    Investor Relations &amp; Grievance Contact
                  </p>

                </div>

              </div>


              {/* Company Type Badge */}
              <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-50 border border-solid border-slate-100 flex-shrink-0">

                <Building2 className="w-4 h-4 text-[#ff4d00] flex-shrink-0" />

                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Corporate Office
                </span>

              </div>

            </div>


            {/* ======================================================
          MAIN INFORMATION GRID
      ====================================================== */}

            <div className="grid grid-cols-1 lg:grid-cols-[1.55fr_1fr] gap-8 lg:gap-10 pt-7">

              {/* ====================================================
            LEFT — COMPANY DETAILS
        ==================================================== */}

              <div className="min-w-0">

                {/* Registered Office */}
                <div className="flex items-start gap-4">

                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-[#fff5f2] border border-solid border-[#fee2e2] flex items-center justify-center flex-shrink-0">

                    <Building2 className="w-[18px] h-[18px] text-[#ff4d00]" />

                  </div>


                  {/* Information */}
                  <div className="min-w-0 flex-1 pt-0.5">

                    <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-gray-400">
                      Registered Office
                    </span>

                    <p className="text-sm text-[#475569] leading-[1.7] mt-2 mb-0">
                      Plot No. 26, The Nagpur Divisional Insurance Employees
                      Co-op. Hsg. Society Limited, Vivekanand Nagar, Nagpur,
                      Maharashtra – 440015, India
                    </p>

                  </div>

                </div>


                {/* CIN / GSTIN */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-7">

                  {/* CIN */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-solid border-slate-100 hover:border-[#fee2e2] hover:bg-[#fffaf8] transition-all duration-300">

                    <div className="flex items-center gap-2.5 mb-3">

                      <div className="w-8 h-8 rounded-lg bg-white border border-solid border-gray-100 flex items-center justify-center flex-shrink-0">

                        <FileText className="w-3.5 h-3.5 text-[#162a56]" />

                      </div>

                      <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-gray-400">
                        CIN
                      </span>

                    </div>

                    <p className="text-xs md:text-sm font-bold text-[#162a56] tracking-wide m-0 break-all leading-relaxed">
                      L93000MH1997PLC110645
                    </p>

                  </div>


                  {/* GSTIN */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-solid border-slate-100 hover:border-[#fee2e2] hover:bg-[#fffaf8] transition-all duration-300">

                    <div className="flex items-center gap-2.5 mb-3">

                      <div className="w-8 h-8 rounded-lg bg-white border border-solid border-gray-100 flex items-center justify-center flex-shrink-0">

                        <FileText className="w-3.5 h-3.5 text-[#162a56]" />

                      </div>

                      <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-gray-400">
                        GSTIN / UIN
                      </span>

                    </div>

                    <p className="text-xs md:text-sm font-bold text-[#162a56] tracking-wide m-0 break-all leading-relaxed">
                      27AAACV5098G1Z1
                    </p>

                  </div>

                </div>

              </div>


              {/* ====================================================
            RIGHT — CONTACT DETAILS
        ==================================================== */}

              <div className="lg:border-l lg:border-solid lg:border-gray-100 lg:pl-8 min-w-0">

                <div className="mb-5">

                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#ff4d00]">
                    Get in touch
                  </span>

                  <h3 className="text-lg font-extrabold text-[#162a56] mt-1.5 mb-0">
                    Contact Details
                  </h3>

                </div>


                <div className="flex flex-col gap-3">

                  {/* Email */}
                  <a
                    href="mailto:investors@vginfotech.ai"
                    className="group flex items-center gap-4 p-3.5 rounded-xl bg-slate-50 border border-solid border-slate-100 hover:bg-[#fff8f5] hover:border-[#fee2e2] transition-all duration-300 no-underline min-w-0"
                  >

                    {/* Icon */}
                    <div className="w-10 h-10 rounded-xl bg-white border border-solid border-gray-100 flex items-center justify-center flex-shrink-0 group-hover:border-[#fee2e2]">

                      <Mail className="w-[17px] h-[17px] text-[#ff4d00]" />

                    </div>


                    {/* Content */}
                    <div className="min-w-0 flex-1">

                      <span className="block text-[9px] font-bold uppercase tracking-[0.14em] text-gray-400 mb-1.5">
                        Email
                      </span>

                      <span className="block text-xs md:text-sm font-bold text-[#162a56] truncate group-hover:text-[#ff4d00] transition-colors">
                        investors@vginfotech.ai
                      </span>

                    </div>

                  </a>


                  {/* Phone */}
                  <a
                    href="tel:9226531342"
                    className="group flex items-center gap-4 p-3.5 rounded-xl bg-slate-50 border border-solid border-slate-100 hover:bg-[#fff8f5] hover:border-[#fee2e2] transition-all duration-300 no-underline min-w-0"
                  >

                    {/* Icon */}
                    <div className="w-10 h-10 rounded-xl bg-white border border-solid border-gray-100 flex items-center justify-center flex-shrink-0">

                      <Phone className="w-[17px] h-[17px] text-[#ff4d00]" />

                    </div>


                    {/* Content */}
                    <div className="min-w-0 flex-1">

                      <span className="block text-[9px] font-bold uppercase tracking-[0.14em] text-gray-400 mb-1.5">
                        Phone
                      </span>

                      <span className="block text-sm font-bold text-[#162a56] group-hover:text-[#ff4d00] transition-colors">
                        9226531342
                      </span>

                    </div>

                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* ==========================================================
      KEY CONTACTS
  ========================================================== */}

        <div className="mt-10">

          {/* Section Heading */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-5">

            <div>

              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#ff4d00]">
                Important Contacts
              </span>

              <h2 className="text-xl md:text-2xl font-extrabold text-[#162a56] tracking-tight mt-1.5 mb-0">
                Key Contact Persons
              </h2>

            </div>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm sm:text-right m-0">
              Reach the appropriate representative for compliance, investor,
              and share transfer related matters.
            </p>

          </div>


          {/* Contact Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">


            {/* ======================================================
          COMPANY SECRETARY CARD
      ====================================================== */}

            <div className="group bg-white rounded-2xl border border-solid border-gray-100 shadow-sm hover:shadow-[0_10px_30px_rgba(15,23,42,0.07)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">

              {/* Accent stays INSIDE the rounded card */}
              <div className="px-4 sm:px-5 pt-4 sm:pt-5">

                <div className="h-1 w-full rounded-full bg-[#162a56] group-hover:bg-[#ff4d00] transition-colors duration-300"></div>

              </div>


              <div className="p-4 sm:p-5 pt-3 sm:pt-4">

                <div className="flex items-start gap-4 min-w-0">

                  {/* Icon */}
                  <div className="w-11 h-11 rounded-xl bg-[#fff5f2] border border-solid border-[#fee2e2] flex items-center justify-center flex-shrink-0">

                    <User className="w-5 h-5 text-[#ff4d00]" />

                  </div>


                  {/* Person Information */}
                  <div className="min-w-0 flex-1">

                    <span className="block text-[9px] font-bold uppercase tracking-[0.14em] text-gray-400 mb-1.5">
                      Compliance Contact
                    </span>

                    <h3 className="text-base font-extrabold text-[#162a56] leading-snug m-0">
                      CS Anjali Vinay Padhye
                    </h3>

                    <p className="text-xs font-semibold text-gray-500 leading-relaxed mt-1.5 mb-0">
                      Company Secretary &amp; Compliance Officer
                    </p>

                  </div>

                </div>


                {/* Contact Information */}
                <div className="mt-5 pt-4 border-t border-solid border-gray-100">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                    {/* Email */}
                    <a
                      href="mailto:company.secretary@vginfotech.ai"
                      className="flex items-center gap-2.5 min-w-0 no-underline group/link"
                    >

                      <Mail className="w-4 h-4 text-gray-400 flex-shrink-0 group-hover/link:text-[#ff4d00] transition-colors" />

                      <span className="text-xs font-semibold text-gray-500 truncate group-hover/link:text-[#ff4d00] transition-colors">
                        company.secretary@vginfotech.ai
                      </span>

                    </a>


                    {/* Phone */}
                    <a
                      href="tel:9226531342"
                      className="flex items-center gap-2.5 min-w-0 no-underline"
                    >

                      <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />

                      <span className="text-xs font-semibold text-gray-500">
                        9226531342
                      </span>

                    </a>

                  </div>

                </div>

              </div>

            </div>


            {/* ======================================================
          REGISTRAR CARD
      ====================================================== */}

            <div className="group bg-white rounded-2xl border border-solid border-gray-100 shadow-sm hover:shadow-[0_10px_30px_rgba(15,23,42,0.07)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">

              {/* Accent stays INSIDE the rounded card */}
              <div className="px-4 sm:px-5 pt-4 sm:pt-5">

                <div className="h-1 w-full rounded-full bg-[#162a56] group-hover:bg-[#ff4d00] transition-colors duration-300"></div>

              </div>


              <div className="p-4 sm:p-5 pt-3 sm:pt-4">

                <div className="flex items-start gap-4 min-w-0">

                  {/* Icon */}
                  <div className="w-11 h-11 rounded-xl bg-[#f1f5f9] border border-solid border-slate-200 flex items-center justify-center flex-shrink-0">

                    <Building2 className="w-5 h-5 text-[#162a56]" />

                  </div>


                  {/* RTA Information */}
                  <div className="min-w-0 flex-1">

                    <span className="block text-[9px] font-bold uppercase tracking-[0.14em] text-gray-400 mb-1.5">
                      Registrar &amp; Transfer Agent
                    </span>

                    <h3 className="text-base font-extrabold text-[#162a56] leading-snug m-0">
                      Maashitla Securities Private Limited
                    </h3>

                    <p className="text-xs font-semibold text-gray-500 leading-relaxed mt-1.5 mb-0">
                      Registrar and Transfer Agent
                    </p>

                  </div>

                </div>


                {/* Contact Information */}
                <div className="mt-5 pt-4 border-t border-solid border-gray-100">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                    {/* Email */}
                    <a
                      href="mailto:rta@maashitla.com"
                      className="flex items-center gap-2.5 min-w-0 no-underline group/link"
                    >

                      <Mail className="w-4 h-4 text-gray-400 flex-shrink-0 group-hover/link:text-[#ff4d00] transition-colors" />

                      <span className="text-xs font-semibold text-gray-500 truncate group-hover/link:text-[#ff4d00] transition-colors">
                        rta@maashitla.com
                      </span>

                    </a>


                    {/* Phone */}
                    <a
                      href="tel:9312278480"
                      className="flex items-center gap-2.5 min-w-0 no-underline"
                    >

                      <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />

                      <span className="text-xs font-semibold text-gray-500">
                        9312278480
                      </span>

                    </a>

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

export default InvestorContacts;
