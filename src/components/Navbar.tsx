"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Início", href: "#home", tablet: true },
  { name: "Sobre", href: "#sobre", tablet: false },
  { name: "Áreas", href: "#atuacao", tablet: false },
  { name: "Serviços", href: "#servicos", tablet: true },
  { name: "Resultados", href: "#resultados", tablet: true },
];

const ease = [0.4, 0, 0.2, 1] as const;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isWide, setIsWide] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const hrefFor = (hash: string) => (isHome ? hash : `/${hash}`);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const checkSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 1024);
      setIsWide(width > 1536);
    };
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  // Laptops (1024-1536px) precisam de menos padding do que ecrãs muito largos,
  // caso contrário o logo/links/CTA colidem quando a navbar encolhe no scroll.
  const outerPadding = isScrolled ? (isMobile ? 16 : isWide ? 500 : 140) : 24;

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] h-20 bg-transparent flex items-center">
      <motion.div
        className="w-full flex flex-col"
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
                href={hrefFor(link.href)}
                className={`text-sm font-bold text-white/80 hover:text-white transition-colors ${link.tablet ? "hidden md:inline" : "hidden lg:inline"}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* COL 3 — CTA */}
          <div className="flex-shrink-0 hidden md:flex">
            <a
              href={hrefFor("#contactos")}
              className="group relative overflow-hidden bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full font-bold transition-all text-sm"
            >
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-light to-transparent group-hover:animate-shimmer" />
              <span className="relative z-10">Orçamento</span>
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex md:hidden text-white p-2"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.div>

        {/* MOBILE PANEL */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease }}
              className="md:hidden mt-2 mx-6 bg-[rgba(28,43,56,0.97)] border border-white/10 rounded-3xl overflow-hidden max-h-[calc(100vh-6rem)] overflow-y-auto"
            >
              <div className="flex flex-col p-4 gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={hrefFor(link.href)}
                    onClick={(e) => {
                      if (!isHome) {
                        setMobileOpen(false);
                        return;
                      }
                      e.preventDefault();
                      const target = document.querySelector(link.href);
                      if (target) {
                        target.scrollIntoView({ behavior: "smooth" });
                      }
                      setTimeout(() => setMobileOpen(false), 400);
                    }}
                    className="text-white/80 hover:text-white text-base font-bold py-3 border-b border-white/10 last:border-0"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href={hrefFor("#contactos")}
                  onClick={(e) => {
                    if (!isHome) {
                      setMobileOpen(false);
                      return;
                    }
                    e.preventDefault();
                    const target = document.querySelector("#contactos");
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth" });
                    }
                    setTimeout(() => setMobileOpen(false), 400);
                  }}
                  className="mt-3 bg-primary text-white text-center px-6 py-3 rounded-full font-bold"
                >
                  Orçamento
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
}
