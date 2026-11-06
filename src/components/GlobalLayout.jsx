"use client";

import ScrollTop from "./ScrollTop";
import Navbar from "./Navbar";
import FloatingSocial from "./FloatingSocial/FloatingSocial";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";
import AnimationInitializer from "./AnimationInitializer";

export default function GlobalLayout({ children }) {
  return (
    <>
      <ScrollTop />
      <AnimationInitializer />

      <main id="wrapper">
        <Navbar />

        <FloatingSocial />

        <div id="page-content">
          {children}
        </div>
      </main>

      <Footer />

      <MobileMenu />
    </>
  );
}