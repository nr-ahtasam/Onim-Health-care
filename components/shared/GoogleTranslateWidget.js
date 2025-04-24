// components/shared/GoogleTranslateWidget.js
"use client";

import { useEffect } from "react";

const GoogleTranslateWidget = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      if (
        window.google &&
        window.google.translate &&
        typeof window.google.translate.TranslateElement === "function"
      ) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,bn",
            autoDisplay: false,
          },
          "google_translate_element"
        );
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    // Completely hidden container
    <div
      id="google_translate_element"
      style={{
        display: "none",
        height: 0,
        width: 0,
        overflow: "hidden",
        position: "absolute",
        zIndex: -1,
      }}
    />
  );
};

export default GoogleTranslateWidget;
