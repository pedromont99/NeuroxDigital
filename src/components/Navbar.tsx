"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Início", href: "#home" },
  { name: "Sobre", href: "#sobre" },
  { name: "Áreas", href: "#atuacao" },
  { name: "Serviços", href: "#servicos" },
  { name: "Localização", href: "#localizacao" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full z-[100] bg-white/90 backdrop-blur-md border-b border-slate-100 h-20">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          
          {/* LOGO */}
          <div className="text-2xl font-black text-slate-900 tracking-tighter">
            Clean<span className="text-2xl font-black tracking-tighter text-blue-600">Pro</span>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-bold text-slate-600 hover:text-blue transition-colors">
                {link.name}
              </a>
            ))}
            <a href="#contactos" className="bg-blue-600 hover:bg-white text-blue hover:text-blue px-6 py-2 rounded-full font-bold transition-all border border-blue/10">
              Orçamento
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-900 z-[110]"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </nav>

      {/* OVERLAY DO MENU MOBILE */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[105] lg:hidden flex flex-col p-8 pt-28"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-black text-slate-900 border-b border-slate-50 pb-4"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contactos" 
                onClick={() => setIsOpen(false)}
                className="bg-brand text-white p-6 rounded-3xl font-bold text-center text-xl shadow-xl mt-4"
              >
                Pedir Orçamento Grátis
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}