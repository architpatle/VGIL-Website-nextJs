"use client";

import React, { useEffect } from "react";

function ScrollTop() {
  useEffect(() => {
    const goTop = document.getElementById("goTop");
    const borderProgress = document.querySelector(".border-progress");
    const footer = document.querySelector(".tf-footer");

    if (!goTop || !borderProgress) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrollPercent =
        docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      const progressAngle = (scrollPercent / 100) * 360;

      borderProgress.style.setProperty(
        "--progress-angle",
        `${progressAngle}deg`
      );

      const windowBottom = scrollTop + window.innerHeight;

      const hasFooter = !!footer;
      const footerOffset = hasFooter
        ? footer.getBoundingClientRect().top + window.scrollY
        : Infinity;

      if (scrollTop > 100 && windowBottom < footerOffset) {
        goTop.classList.add("show");
      } else {
        goTop.classList.remove("show");
      }
    };

    const handleClick = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    window.addEventListener("scroll", handleScroll);
    goTop.addEventListener("click", handleClick);

    // Run once immediately
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      goTop.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <button id="goTop">
      <span className="border-progress"></span>

      <span className="ic-wrap">
        <span className="icon icon-long-arrow-alt-up-solid"></span>
      </span>
    </button>
  );
}

export default ScrollTop;