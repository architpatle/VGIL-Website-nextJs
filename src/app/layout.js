import Script from "next/script";

import "../tailwind.css";
import "../spacing.css";
import "../services-premium.css";

import GlobalLayout from "@/components/GlobalLayout";

export const metadata = {
  title: "VGIL",
  description: "Virtual Galaxy Infotech",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.ico" />

        <link rel="stylesheet" href="/assets/fonts/fonts.css" />
        <link rel="stylesheet" href="/assets/icon/icomoon/style.css" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/slick.css" />
        <link rel="stylesheet" href="/assets/css/slick.theme.css" />
        <link rel="stylesheet" href="/assets/css/styles.css" />
      </head>

      <body className="counter-scroll">
        <GlobalLayout>
          {children}
        </GlobalLayout>

        {/* jQuery */}
        <Script
          src="/assets/js/jquery.min.js"
          strategy="afterInteractive"
        />

        {/* Bootstrap */}
        <Script
          src="/assets/js/bootstrap.min.js"
          strategy="afterInteractive"
        />

        {/* Plugins */}
        <Script
          src="/assets/js/jquery.nice-select.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/swiper-bundle.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/slick.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/countto.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/carousel.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/infinityslide.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/ScrollSmooth.js"
          strategy="afterInteractive"
        />

        {/* GSAP */}
        <Script
          src="/assets/js/gsap.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/ScrollTrigger.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/ScrollToPlugin.min.js"
          strategy="afterInteractive"
        />

        {/* Website animations / main logic */}
        <Script
          src="/assets/js/gsapAnimation.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/main.js"
          strategy="afterInteractive"
        />

        {/* Elfsight */}
        <Script
          src="https://elfsightcdn.com/platform.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}