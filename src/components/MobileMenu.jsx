"use client";

import React, { useState, useEffect } from 'react';
import { createPortal } from "react-dom";
import Link from "next/link";
import { MENU_DATA } from '../data/menuData';
import { CAREERS_DATA } from '../data/careersData';
import vgilLogo from "../assets/home/ownwer-img/vg-logo-2.png";

import { getImageSrc } from "../utils/getImageSrc";

function MobileMenu() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const closeMenu = () => {
    document.querySelector('.offcanvas-menu')?.classList.remove('show');
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  };

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    (
      <div
        className="offcanvas-menu"
        onClick={closeMenu}
      >
        <style>
          {`
          .new-mobile-menu {
            background-color: #ffffff !important;
            display: flex;
            flex-direction: column;
            width: 320px; /* standard mobile drawer width */
            max-width: 100vw;
            box-shadow: -5px 0 20px rgba(0,0,0,0.1);
          }
          
          .new-mobile-menu .offcanvas-content {
            background: #ffffff !important;
            padding: 0 !important;
            height: 100%;
            display: flex;
            flex-direction: column;
          }

          .new-mb-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 15px 20px;
            background: #ffffff;
          }

          .new-mb-logo img {
            height: 30px;
          }
          
          .new-mb-close {
            width: 36px;
            height: 36px;
            background: #f0f2f5;
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: #555;
            font-size: 1.2rem;
            font-weight: bold;
          }

          .new-mb-divider {
            height: 4px;
            background: #6c757d;
            width: 100%;
          }

          .new-mb-body {
            flex: 1;
            overflow-y: auto;
            padding: 0;
            margin: 0;
            list-style: none;
          }

          .new-mb-item {
            border-bottom: 1px solid #f0f0f0;
          }

          .new-mb-link {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 18px 20px;
            color: #1a202c;
            font-weight: 600;
            font-size: 1rem;
            text-decoration: none;
            cursor: pointer;
          }

          .new-mb-arrow {
            color: #888;
            font-size: 0.9rem;
            transition: transform 0.3s ease;
          }
          .new-mb-arrow.open {
            transform: rotate(90deg);
          }

          .new-mb-submenu {
            background: #ffffff;
            padding: 0 15px 15px 15px;
            display: none;
          }
          .new-mb-submenu.show {
            display: block;
          }

          .new-mb-subcard {
            display: flex;
            align-items: center;
            padding: 10px 15px;
            margin-bottom: 10px;
            border: 1px solid #eaeaea;
            border-radius: 6px;
            text-decoration: none;
            background: #fff;
          }
          .new-mb-subcard:last-child {
            margin-bottom: 0;
          }

          .new-mb-sublogo {
            width: 40px;
            height: 40px;
            object-fit: contain;
            margin-right: 15px;
          }

          .new-mb-subtitle {
            color: #333;
            font-size: 0.9rem;
            font-weight: 500;
          }

          .new-mb-footer {
            background: #f9f9f9;
            padding: 20px;
            text-align: center;
            border-top: 1px solid #eaeaea;
          }

          .new-mb-socials {
            display: flex;
            justify-content: center;
            gap: 12px;
            margin-bottom: 15px;
          }

          .new-mb-social-btn {
            width: 36px;
            height: 36px;
            background: #e62310;
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            font-size: 1.1rem;
          }

          .new-mb-email {
            color: #555;
            font-size: 0.85rem;
            margin: 0;
            font-weight: 500;
          }

          .new-mb-logo img {
  height: 38px;
  width: auto;
  object-fit: contain;
}
  .offcanvas-menu {
  position: fixed;
  inset: 0;
  z-index: 3000;

  background: rgba(0,0,0,.55);

  opacity: 0;
  visibility: hidden;

  transition: .3s;
}

.offcanvas-menu.show {
  opacity: 1;
  visibility: visible;
}
  .new-mobile-menu {
  position: absolute;

  right: 0;
  top: 0;

  width: 320px;
  max-width: 100vw;

  height: 100vh;

  background: #fff;

  transform: translateX(100%);

  transition: .3s ease;
}
  .offcanvas-menu.show .new-mobile-menu {
  transform: translateX(0);
}
        `}
        </style>
        <div
          className="new-mobile-menu"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="offcanvas-content ">
            <div className="new-mb-header">
              <Link href="/" className="new-mb-logo" onClick={closeMenu}>
                <img src={vgilLogo.src} alt="VGIL Logo" />
              </Link>
              <div className="new-mb-close" onClick={closeMenu}>
                &#x2715;
              </div>
            </div>
            <div className="new-mb-divider"></div>

            <ul className="new-mb-body">
              <li className="new-mb-item">
                <Link href="/about" className="new-mb-link" onClick={closeMenu}>
                  About Us
                  <span className="new-mb-arrow">&#10095;</span>
                </Link>
              </li>

              <li className="new-mb-item">
                <div className="new-mb-link" onClick={() => toggleDropdown('products')}>
                  Products
                  <span className={`new-mb-arrow ${openDropdown === 'products' ? 'open' : ''}`}>&#10095;</span>
                </div>
                <div className={`new-mb-submenu ${openDropdown === 'products' ? 'show' : ''}`}>
                  {MENU_DATA.products.map((item, idx) => (
                    <Link href={item.link} key={idx} className="new-mb-subcard" onClick={closeMenu}>
                      {item.logo ? (
                        <img src={getImageSrc(item.logo)} alt={item.name} className="new-mb-sublogo" />
                      ) : (
                        <div className="new-mb-sublogo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f0f0f0', borderRadius: '4px' }}>
                          <i className={`icon icon-${item.icon || 'box'}`} style={{ color: '#888' }}></i>
                        </div>
                      )}
                      <span className="new-mb-subtitle">{item.name}</span>
                    </Link>
                  ))}
                </div>
              </li>

              <li className="new-mb-item">
                <div className="new-mb-link" onClick={() => toggleDropdown('services')}>
                  Services
                  <span className={`new-mb-arrow ${openDropdown === 'services' ? 'open' : ''}`}>&#10095;</span>
                </div>
                <div className={`new-mb-submenu ${openDropdown === 'services' ? 'show' : ''}`}>
                  {MENU_DATA.services.map((item, idx) => (
                    <Link href={item.link} key={idx} className="new-mb-subcard" onClick={closeMenu}>
                      {item.logo ? (
                        <img src={getImageSrc(item.logo)} alt={item.name} className="new-mb-sublogo" />
                      ) : (
                        <div className="new-mb-sublogo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f0f0f0', borderRadius: '4px' }}>
                          <i className={`icon icon-${item.icon || 'cog'}`} style={{ color: '#888' }}></i>
                        </div>
                      )}
                      <span className="new-mb-subtitle">{item.name}</span>
                    </Link>
                  ))}
                </div>
              </li>

              <li className="new-mb-item">
                <div className="new-mb-link" onClick={() => toggleDropdown('investors')}>
                  Investors Info
                  <span className={`new-mb-arrow ${openDropdown === 'investors' ? 'open' : ''}`}>&#10095;</span>
                </div>
                <div className={`new-mb-submenu ${openDropdown === 'investors' ? 'show' : ''}`}>
                  {MENU_DATA.investors.map((item, idx) => (
                    <Link href={item.link} key={idx} className="new-mb-subcard" onClick={closeMenu}>
                      {item.logo ? (
                        <img src={getImageSrc(item.logo)} alt={item.name} className="new-mb-sublogo" />
                      ) : (
                        <div className="new-mb-sublogo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f0f0f0', borderRadius: '4px' }}>
                          <i className={`icon icon-${item.icon || 'chart-line'}`} style={{ color: '#888' }}></i>
                        </div>
                      )}
                      <span className="new-mb-subtitle">{item.name}</span>
                    </Link>
                  ))}
                </div>
              </li>

              <li className="new-mb-item">
                <Link href="/ipo" className="new-mb-link" onClick={closeMenu}>
                  IPO
                  <span className="new-mb-arrow">&#10095;</span>
                </Link>
              </li>

              <li className="new-mb-item">
                <div className="new-mb-link" onClick={() => toggleDropdown('resource')}>
                  Resource
                  <span className={`new-mb-arrow ${openDropdown === 'resource' ? 'open' : ''}`}>&#10095;</span>
                </div>
                <div className={`new-mb-submenu ${openDropdown === 'resource' ? 'show' : ''}`}>
                  {MENU_DATA.resource.map((item, idx) => (
                    <Link href={item.link} key={idx} className="new-mb-subcard" onClick={closeMenu}>
                      {item.logo ? (
                        <img src={getImageSrc(item.logo)} alt={item.name} className="new-mb-sublogo" />
                      ) : (
                        <div className="new-mb-sublogo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f0f0f0', borderRadius: '4px' }}>
                          <i className={`icon icon-${item.icon || 'file-alt'}`} style={{ color: '#888' }}></i>
                        </div>
                      )}
                      <span className="new-mb-subtitle">{item.name}</span>
                    </Link>
                  ))}
                </div>
              </li>

              <li className="new-mb-item">
                <div className="new-mb-link" onClick={() => toggleDropdown('careers')}>
                  Careers
                  <span className={`new-mb-arrow ${openDropdown === 'careers' ? 'open' : ''}`}>&#10095;</span>
                </div>
                <div className={`new-mb-submenu ${openDropdown === 'careers' ? 'show' : ''}`}>
                  {CAREERS_DATA.map((item, idx) => (
                    <Link href={item.slug === 'lets-connect' ? '/contact' : `/careers/${item.slug}`} key={idx} className="new-mb-subcard" onClick={closeMenu}>
                      <div className="new-mb-sublogo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f0f0f0', borderRadius: '4px' }}>
                        <i className={`icon icon-${item.icon || 'users'}`} style={{ color: '#888' }}></i>
                      </div>
                      <span className="new-mb-subtitle">{item.title}</span>
                    </Link>
                  ))}
                </div>
              </li>

              <li className="new-mb-item">
                <Link href="/contact" className="new-mb-link" onClick={closeMenu}>
                  Contact Us
                  <span className="new-mb-arrow">&#10095;</span>
                </Link>
              </li>
            </ul>

            <div className="new-mb-footer">
              {/* <div className="new-mb-socials">
              <a href="#" className="new-mb-social-btn"><i className="icon icon-linkedin-in"></i></a>
              <a href="#" className="new-mb-social-btn"><i className="icon icon-instagram"></i></a>
              <a href="mailto:presales@vginfotech.ai" className="new-mb-social-btn"><i className="icon icon-envelope" style={{ transform: 'translateY(1px)' }}></i></a>
              <a href="#" className="new-mb-social-btn"><i className="icon icon-facebook-f"></i></a>
              <a href="#" className="new-mb-social-btn"><i className="icon icon-youtube"></i></a>
            </div> */}
              <p className="new-mb-email">Email: presales@vginfotech.ai</p>
            </div>
          </div>
        </div>
      </div>
    ),
    document.body
  );
}

export default MobileMenu;