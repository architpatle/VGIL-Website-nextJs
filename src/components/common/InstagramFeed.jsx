import { useEffect } from "react";

const InstagramFeed = () => {
  useEffect(() => {
    const existing = document.querySelector(
      'script[src="https://static.elfsight.com/platform/platform.js"]'
    );

    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;      
      document.body.appendChild(script);
    }

    return () => {
      const widget = document.querySelector(
        ".elfsight-app-d246ea31-f02b-46fd-8c12-715dde7d823c"
      );

      if (widget) {
        widget.innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      className="elfsight-app-d246ea31-f02b-46fd-8c12-715dde7d823c"
      data-elfsight-app-lazy
    />
  );
};

export default InstagramFeed;