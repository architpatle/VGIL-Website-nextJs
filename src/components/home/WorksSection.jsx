"use client";

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PRODUCTS_DATA } from '../../data/productsData';

// Import Featured Work Background Images
import coreBankingSolution from '../../assets/home/feature-work/1- Featured Work of best work (824_427.54px).jpg';
import erpSolution from '../../assets/home/feature-work/-2 Featured Work of best work (824_427.54px)-3.jpg';
import featuredWork3 from '../../assets/home/feature-work/3- Featured Work of best work (824_427.54px)-2.jpg';
import featuredWork4 from '../../assets/home/feature-work/4- Featured Work of best work (824_427.54px)-1.jpg';
import digitalPayment from '../../assets/home/feature-work/digital-payment.png';
import agricultureTrading from '../../assets/home/feature-work/Agriculture-Trading.png';
import imisSolution from '../../assets/home/feature-work/imisSolution.png';
import conversationalAICompanion from '../../assets/home/feature-work/conversationalAICompanion.png';
import TransactionProcessingPlatform from '../../assets/home/feature-work/TransactionProcessingPlatform.png';
import AuditManagementPlatform from '../../assets/home/feature-work/AuditManagementPlatform.png';
import EnterpriseWorkflowPlatform from '../../assets/home/feature-work/EnterpriseWorkflowPlatform.png';
import eCRMImg from '../../assets/home/feature-work/eCRM.png';
import eLOSImg from '../../assets/home/feature-work/eLOS.png';
import secureViewAIImg from '../../assets/home/feature-work/secureViewAI.png';
import digitalIdentityVerificationPlatformImg from '../../assets/home/feature-work/digitalIdentityVerificationPlatform.png';
import infrastructureAndIntelligenceImg from '../../assets/home/feature-work/infrastructureAndIntelligence.png';
import vConnectImg from '../../assets/home/feature-work/vConnect.png';


import './WorksSection.css'

// Carousel tuning constants — tweak freely without touching the logic below
const AUTOPLAY_DELAY_MS = 3000;
const MOBILE_BREAKPOINT_PX = 767; // matches the "Our Products Mobile view optimization" block in spacing.css
const ITEMS_PER_PAGE_DESKTOP = 4; // shown as a 2x2 grid per page
const ITEMS_PER_PAGE_MOBILE = 2;  // 2 cards per view on mobile, slide for the rest

function WorksSection({ className = "section-featured-works section-spacing-lg" }) {
  const router = useRouter();

  // ---- Carousel state ----
  const [itemsPerPage, setItemsPerPage] = useState(
    typeof window !== 'undefined' && window.innerWidth <= MOBILE_BREAKPOINT_PX
      ? ITEMS_PER_PAGE_MOBILE
      : ITEMS_PER_PAGE_DESKTOP
  );
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Whole card is clickable and takes the user straight to the product page.
  const handleCardClick = (slug) => {
    router.push(`/products/${slug}`);
  };

  // Products shown in the carousel, left to right.
  // To add more projects, just append their slug here — the carousel,
  // pagination dots and background images all scale automatically.
  const selectedSlugs = [
    'core-banking-solution',
    'erp-solution',
    'end-to-end-cyber-security',
    'imis-solution',
    'digital-payments',
    'agriculture-trading',
    'post-mortem-management',
    'conversational-ai-companion',
    'transact-core',
    'audit-flux',
    'fin-flow',
    'e-crm',
    'e-los',
    'secure-view-ai',
    'digital-identity-verification-platform',
    'infrastructure-and-intelligence',
    'v-connect'
    // 'your-new-product-slug', // <-- new cards get added to the right
  ];

  const displayProducts = selectedSlugs.map(slug =>
    PRODUCTS_DATA.find(p => p.slug === slug)
  ).filter(Boolean);

  // Background images cycle through this list (by index), so adding new
  // slugs above doesn't require a 1:1 new image mapping. Add more imports
  // to this array if you want more unique backgrounds.
  const bgImagesList = [coreBankingSolution, erpSolution, featuredWork3, imisSolution, digitalPayment, agricultureTrading, featuredWork4, conversationalAICompanion, TransactionProcessingPlatform, AuditManagementPlatform, EnterpriseWorkflowPlatform, eCRMImg, eLOSImg, secureViewAIImg, digitalIdentityVerificationPlatformImg, infrastructureAndIntelligenceImg,vConnectImg];

  // ---- Carousel derived values ----
  // Group products into pages of `itemsPerPage` — each page renders as its
  // own self-contained grid, so spacing/gaps never leak between pages and
  // no card ever gets clipped at the edge of the viewport.
  const pages = [];
  for (let i = 0; i < displayProducts.length; i += itemsPerPage) {
    pages.push(displayProducts.slice(i, i + itemsPerPage));
  }
  const totalPages = Math.max(1, pages.length);

  // Keep itemsPerPage in sync with viewport width (same breakpoint as CSS)
  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(
        window.innerWidth <= MOBILE_BREAKPOINT_PX ? ITEMS_PER_PAGE_MOBILE : ITEMS_PER_PAGE_DESKTOP
      );
    };
    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  // Clamp currentPage whenever the number of pages changes (resize / data change)
  useEffect(() => {
    setCurrentPage((prev) => Math.min(prev, totalPages - 1));
  }, [totalPages]);

  // Autoplay — pauses on hover, and does nothing if everything fits in one page
  useEffect(() => {
    if (totalPages <= 1 || isPaused) return undefined;
    const id = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, AUTOPLAY_DELAY_MS);
    return () => clearInterval(id);
  }, [totalPages, isPaused]);

  return (
    <div id="works" className={className}>
      <div className="mx-auto" style={{ maxWidth: '1040px' }}>
        <div className="heading-section mb-0">
          <div className="heading-sub fw-semibold mx-auto effectFade fadeUp">Our Products</div>
        </div>
        <div
          className="featured-works-carousel-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="featured-works-viewport">
            <div
              className="featured-works-track"
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {pages.map((pageItems, pageIndex) => (
                <div className="featured-works-page" key={pageIndex}>
                  <div className="featured-works-list position-relative">
                    {pageItems.map((product, indexInPage) => {
                      const globalIndex = pageIndex * itemsPerPage + indexInPage;
                      return (
                        <div key={product.slug} className="" >
                          <div
                            className={`featured-works-item effectFade fadeUp  ${globalIndex === 0 ? 'no-div' : ''}`}
                            onClick={() => handleCardClick(product.slug)}
                          >
                            <div className="image main-mouse-hover h" style={{
                              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.18)), url("${bgImagesList[globalIndex % bgImagesList.length].src}")`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              backgroundRepeat: 'no-repeat',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              // padding: '60px',
                              border: '1px solid #f1f1f1',
                              borderRadius: '24px',
                              // height:'400px',
                              maxHeight: '400px',
                              position: 'relative'
                            }}>
                              <img src={product.logo.src} alt={product.title} style={{
                                // maxWidth: '180px', 
                                maxHeight: '60px',
                                // width: 'auto',
                                // height: 'auto', 
                                objectFit: 'contain',
                                filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.05))',
                                zIndex: 2
                              }} />
                              {/* <Link href={`/products/${product.slug}`} className="tf-mouse view-project h6" style={{ zIndex: 2 }}>
                                View Product
                                <i className="icon icon-arrow-top-right"></i>
                              </Link> */}
                            </div>
                            <div className="content">
                              {/* <div className="pagi-dot">
                                {[0, 1, 2, 3].map(dot => (
                                  <span key={dot} className={dot === globalIndex ? 'active' : ''}></span>
                                ))}
                              </div> */}
                              <div className="bot">
                                <h4 className="heading fw-semibold  " style={{ fontSize: '28px' }}>{product.title}</h4>
                                <div className="desktop-view-product-btn-wrap">
                                  {/* <Link
                                    to={`/products/${product.slug}`}
                                    className="desktop-view-product-btn tf-btn tf-btn-short"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    View Product
                                  </Link> */}
                                </div>
                                <div className="expanded-details-container collapsed">
                                  <div className="grid-text">
                                    <div className="item">
                                      <div className="title text-secondary">DESCRIPTION</div>
                                      <div className="text-body-3 fw-semibold">{product.shortDescription}</div>
                                    </div>
                                    <div className="item">
                                      <div className="title text-secondary">FEATURES</div>
                                      <div className="fw-semibold text-body-3">
                                        {product.features?.slice(0, 2).map(f => f.title).join(', ')}
                                      </div>
                                    </div>
                                    <div className="item">
                                      <div className="title text-secondary">INDUSTRY</div>
                                      <div className="fw-semibold text-body-3">
                                        {product.slug === 'core-banking-solution' ? 'Banking' :
                                          product.slug === 'post-mortem-management' ? 'Healthcare' :
                                            product.slug === 'end-to-end-cyber-security' ? 'Security' : 'Enterprise'}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="mobile-view-product-btn-wrap">
                                    <Link
                                      href={`/products/${product.slug}`}
                                      className="mobile-view-product-btn"
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      View Product Details
                                      <i className="icon icon-arrow-top-right"></i>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {totalPages > 1 && (
            <div className="featured-works-pagination">
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <button
                  key={pageIndex}
                  type="button"
                  className={`featured-works-dot ${pageIndex === currentPage ? 'active' : ''}`}
                  onClick={() => setCurrentPage(pageIndex)}
                  aria-label={`Go to slide ${pageIndex + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WorksSection;