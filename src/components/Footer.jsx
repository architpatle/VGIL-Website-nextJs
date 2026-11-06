import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import Image from "next/image";
import "./Footer.css";
import vgilLogo from "../assets/home/vgil-logo.png";

function Footer() {

  // const scrollTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  return (
    <footer className="vg-footer-new">

      {/* ---- Watermark Logo ---- */}
      <div className="vg-footer-watermark">
        <Image src={vgilLogo} alt="" aria-hidden="true" />
      </div>

      <div className="container">

        {/* ---- Center Content ---- */}
        <div className="vg-footer-content">

          <h6 className="vg-footer-tagline">
            Get Connected <br /> with <span style={{ color: "var(--brand)" }}>Virtual Galaxy</span> on social
          </h6>

          <p className="vg-footer-sub">Don't miss our new updates!</p>

          {/* ---- Social Links ---- */}
          <div className="vg-footer-social">

            <a
              href="https://www.linkedin.com/company/virtualgalaxy/"
              target="_blank"
              rel="noreferrer"
              className="vg-social-link"
            >
              <span className="vg-social-label">LinkedIn</span>
              <span className="vg-social-icon">
                <FaLinkedinIn />
              </span>
            </a>

            <a
              href="https://www.youtube.com/channel/UCNHCxfflXlIj52Ch3QV2ayg"
              target="_blank"
              rel="noreferrer"
              className="vg-social-link"
            >
              <span className="vg-social-label">YouTube</span>
              <span className="vg-social-icon">
                <FaYoutube />
              </span>
            </a>


            <a
              href="https://www.instagram.com/virtualgalaxyinfotech/"
              target="_blank"
              rel="noreferrer"
              className="vg-social-link"
            >
              <span className="vg-social-label">Instagram</span>
              <span className="vg-social-icon">
                <FaInstagram />
              </span>
            </a>
            <a
              href="https://www.facebook.com/VirtualGalaxyInfotechLtd"
              target="_blank"
              rel="noreferrer"
              className="vg-social-link"
            >
              <span className="vg-social-label">Facebook</span>
              <span className="vg-social-icon">
                <FaFacebookF />
              </span>
            </a>

            <a
              href="https://x.com/Virtualvgipl"
              target="_blank"
              rel="noreferrer"
              className="vg-social-link"
            >
              <span className="vg-social-label">Twitter / X</span>
              <span className="vg-social-icon">
                <FaXTwitter />
              </span>
            </a>
          </div>
        </div>

        {/* ---- Bottom Bar ---- */}
        <div className="vg-footer-bottom">

          <ul className="vg-footer-nav">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/products/core-banking-solution">Products</Link></li>
            <li><Link href="/ai">AI</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>

          <p className="vg-footer-copy">
            © {new Date().getFullYear()} Virtual Galaxy Infotech Limited. All Rights Reserved.
          </p>

          {/* <button className="vg-footer-back-top" onClick={scrollTop}>
            <span>Back to top</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
          </button> */}

          <div className="vg-footer-legal">
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/disclaimer">Disclaimer</Link>
            <Link href="/policies">Policies</Link>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;