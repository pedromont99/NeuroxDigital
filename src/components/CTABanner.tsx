"use client";
import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <section className="bg-dark-3 border-y border-teal/30 py-20">
      <motion.div
        className="max-w-4xl mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
          Pronto para uma casa impecável?
        </h2>
        <p className="text-white/60 mb-8 text-lg">
          Peça o seu orçamento gratuito hoje. Respondemos em menos de 24 horas.
        </p>
        <a
          href="#contactos"
          className="group relative inline-block overflow-hidden bg-primary text-white font-black px-10 py-4 rounded-full hover:bg-primary-dark transition-colors"
        >
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-light to-transparent group-hover:animate-shimmer" />
          <span className="relative z-10">Pedir Orçamento Grátis →</span>
        </a>
      </motion.div>
    </section>
  );
}
