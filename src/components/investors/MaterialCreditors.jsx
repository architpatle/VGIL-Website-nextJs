import React from 'react';
import Link from "next/link";
import { List, User, IndianRupee, BarChart3, ShieldCheck } from 'lucide-react';
import '../../pages/BoardManagement.css';
import imgMaterialCreditors from '../../assets/Investors-Info-img/Material_Creditors.png';

function MaterialCreditors() {
  return (
    <div className="board-mgmt-wrapper  pb-12 flex flex-col justify-start">
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
                      Material Creditors
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
                <span>Material</span>{' '}
                <span className="highlight">Creditors</span>
                <div className="hero-title-underline"></div>
              </h1>

              <p className="hero-desc">
                Details of Outstanding Overdue to material Creditors as at{' '}
                <span className="text-[#ff4d00] font-bold">
                  December 31st, 2024
                </span>
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
                  src={imgMaterialCreditors.src}
                  alt="Material Creditors"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid / Disclosures Section */}
      <section className="explore-section flex-grow">
        <div className="container max-w-[950px] mx-auto px-4">

          {/* Table Container Card */}
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-solid border-slate-100 max-w-[850px] mx-auto w-full overflow-hidden mb-6 effect-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm m-0">
                <thead>
                  <tr
                    className="border-b border-solid border-slate-100"
                    style={{ background: 'linear-gradient(90deg, #ffebe5 0%, #fff5f2 100%)' }}
                  >
                    <th className="p-4 font-bold text-[#1b305a] border-r border-solid border-slate-100/50" style={{ width: '18%' }}>
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-[#ff4d00] text-white flex items-center justify-center flex-shrink-0">
                          <List size={14} />
                        </div>
                        <span className="text-[13px] tracking-wide uppercase">Sr. No</span>
                      </div>
                    </th>
                    <th className="p-4 font-bold text-[#1b305a] border-r border-solid border-slate-100/50" style={{ width: '52%' }}>
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-[#ff4d00] text-white flex items-center justify-center flex-shrink-0">
                          <User size={14} />
                        </div>
                        <span className="text-[13px] tracking-wide uppercase">Particulars</span>
                      </div>
                    </th>
                    <th className="p-4 font-bold text-[#1b305a]" style={{ width: '30%' }}>
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-[#ff4d00] text-white flex items-center justify-center flex-shrink-0">
                          <IndianRupee size={14} />
                        </div>
                        <span className="text-[13px] tracking-wide uppercase">Amount in Lakhs</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-solid border-slate-100 hover:bg-slate-50/30 transition-colors">
                    <td className="p-4 text-gray-500 font-medium border-r border-solid border-slate-100/50 text-[14.5px]">1.</td>
                    <td className="p-4 text-[#1b305a] font-bold border-r border-solid border-slate-100/50 text-[14.5px] tracking-wide">
                      PAYNEXT PRIVATE LIMITED
                    </td>
                    <td className="p-4 text-gray-700 font-semibold text-[14.5px]">71.20</td>
                  </tr>
                  <tr style={{ background: '#fff8f6' }}>
                    <td className="p-4 border-r border-solid border-slate-100/50"></td>
                    <td className="p-4 text-[#1b305a] font-bold border-r border-solid border-slate-100/50">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-white text-[#ff4d00] border border-solid border-[#ffe2e2] shadow-sm flex items-center justify-center flex-shrink-0">
                          <BarChart3 size={14} />
                        </div>
                        <span className="text-[14px]">Total</span>
                      </div>
                    </td>
                    <td className="p-4 text-[#ff4d00] font-extrabold text-[15px]">
                      71.20
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottom Disclaimer Banner */}
          <div className="flex justify-center effect-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-2.5 px-6 py-3 bg-white border border-solid border-[#ffe2e2] rounded-xl shadow-[0_4px_12px_rgba(255,77,0,0.015)] max-w-full">
              <ShieldCheck className="text-[#ff4d00] flex-shrink-0" size={18} />
              <span className="text-[12.5px] font-medium text-slate-600">
                All amounts are in Lakhs (₹). This information is presented as per company records.
              </span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default MaterialCreditors;
