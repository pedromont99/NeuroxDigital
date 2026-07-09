"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Script from "next/script";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [consent, setConsent] = useState<"accepted" | "declined" | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent");
    if (stored === "accepted" || stored === "declined") {
      setConsent(stored as "accepted" | "declined");
    } else {
      setVisible(true);
    }
  }, []);

  const handleChoice = (choice: "accepted" | "declined") => {
    localStorage.setItem("cookie-consent", choice);
    setConsent(choice);
    setVisible(false);
  };

  return (
    <>
      {consent === "accepted" && GTM_ID && (
        <>
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');`,
            }}
          />
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        </>
      )}

      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-[200] bg-dark-3 border border-white/10 rounded-3xl p-6 shadow-2xl"
          >
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Utilizamos cookies para melhorar a sua experiência e analisar o tráfego do site. Pode aceitar ou recusar a qualquer momento.{" "}
              <a href="/politica-privacidade" className="underline text-teal hover:text-teal-dark">
                Saiba mais
              </a>
              .
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => handleChoice("declined")}
                className="flex-1 px-4 py-2 rounded-full border border-white/20 text-white/70 text-sm font-bold hover:bg-white/5 transition-colors"
              >
                Recusar
              </button>
              <button
                onClick={() => handleChoice("accepted")}
                className="flex-1 px-4 py-2 rounded-full bg-primary hover:bg-primary-dark text-white text-sm font-bold transition-colors"
              >
                Aceitar
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
