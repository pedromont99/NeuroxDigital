"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { name: "Início", href: "#home", tablet: true },
  { name: "Sobre", href: "#sobre", tablet: false },
  { name: "Áreas", href: "#atuacao", tablet: false },
  { name: "Serviços", href: "#servicos", tablet: true },
  { name: "Resultados", href: "#resultados", tablet: true },
  { name: "Localização", href: "#localizacao", tablet: false },
];

const ease = [0.4, 0, 0.2, 1] as const;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const outerPadding = isScrolled ? (isMobile ? 16 : 500) : 24;

  return (
    <nav className="fixed w-full z-[100] h-20 bg-transparent">
      <motion.div
        className="w-full h-full flex items-center"
        animate={{
          paddingTop: isScrolled ? 8 : 0,
          paddingBottom: isScrolled ? 8 : 0,
          paddingLeft: outerPadding,
          paddingRight: outerPadding,
        }}
        transition={{ duration: 0.5, ease }}
      >
        <motion.div
          className="w-full flex items-center justify-between"
          animate={
            isScrolled
              ? {
                  backgroundColor: "rgba(28,43,56,0.95)",
                  borderRadius: 9999,
                  paddingLeft: 32,
                  paddingRight: 32,
                  paddingTop: 12,
                  paddingBottom: 12,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
                }
              : {
                  backgroundColor: "rgba(0,0,0,0)",
                  borderRadius: 0,
                  paddingLeft: 0,
                  paddingRight: 0,
                  paddingTop: 0,
                  paddingBottom: 0,
                  boxShadow: "none",
                }
          }
          style={{
            border: isScrolled
              ? "1px solid rgba(255,255,255,0.1)"
              : "1px solid rgba(255,255,255,0)",
          }}
          transition={{ duration: 0.5, ease }}
        >
          {/* COL 1 — LOGO */}
          <div className="flex-shrink-0">
            <Image
              src="/images/logo/logo-nav.png"
              alt="Clean4You"
              width={252}
              height={87}
              className="h-9 w-auto"
              priority
            />
          </div>

          {/* COL 2 — NAV LINKS: tablet shows 3, desktop shows all */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-bold text-white/80 hover:text-white transition-colors ${link.tablet ? "hidden md:inline" : "hidden lg:inline"}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* COL 3 — CTA */}
          <div className="flex-shrink-0 hidden md:flex">
            <a
              href="#contactos"
              className="group relative overflow-hidden bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full font-bold transition-all text-sm"
            >
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-light to-transparent group-hover:animate-shimmer" />
              <span className="relative z-10">Orçamento</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </nav>
  );
}
