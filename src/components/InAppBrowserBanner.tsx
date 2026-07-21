"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

function isMetaInAppBrowser(userAgent: string): boolean {
  const ua = userAgent.toLowerCase();
  return ua.includes("fban") || ua.includes("fbav") || ua.includes("instagram");
}

export default function InAppBrowserBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isMetaInAppBrowser(navigator.userAgent)) {
      setVisible(true);
    }
  }, []);

  const handleOpenInBrowser = () => {
    window.open(window.location.href, "_blank");
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-[300] bg-dark border-b border-white/10 px-4 py-3 shadow-lg"
        >
          <div className="max-w-3xl mx-auto flex items-center gap-3">
            <p className="flex-1 text-white/80 text-xs sm:text-sm leading-snug">
              Está a ver este site dentro do Instagram/Facebook, o que pode causar problemas de visualização. Toque aqui para abrir no seu browser.
            </p>
            <button
              onClick={handleOpenInBrowser}
              className="shrink-0 px-3 py-2 rounded-full bg-primary hover:bg-primary-dark text-white text-xs sm:text-sm font-bold transition-colors whitespace-nowrap"
            >
              Abrir no browser
            </button>
            <button
              onClick={() => setVisible(false)}
              aria-label="Fechar aviso"
              className="shrink-0 p-1 text-white/50 hover:text-white/80 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
