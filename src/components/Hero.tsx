"use client";
import Image from 'next/image';
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-hero-gradient text-white">
      {/* 1. Detalhe de Luz Difusa (Ajustado para não tapar o conteúdo) */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LADO ESQUERDO: TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge: Agora com fundo claro para ler-se bem sobre o azul escuro */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-white text-sm font-bold mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
            </span>
            Equipas disponíveis em Lisboa
          </div>

          {/* Título: Mudado para Branco (text-white) para brilhar sobre o gradiente */}
          <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] mb-8 tracking-tighter">
            A sua casa <span className="text-blue-300">brilhante</span>, <br /> sem esforço.
          </h1>

          <p className="text-xl text-blue-100/80 mb-12 max-w-lg leading-relaxed font-light">
            Equipas profissionais de confiança para limpezas domésticas e pós-obras em Lisboa. Garantia de satisfação total.
          </p>

          {/* BOTÃO E PROVA SOCIAL */}
          <div className="flex flex-col sm:flex-row gap-8 items-center">
            <a
              href="#contactos"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-10 py-4 font-black transition-all hover:scale-105 active:scale-95 shadow-xl"
            >
              {/* 1. O Efeito Shimmer (Brilho azulado para contrastar com o branco) */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-blue-100 to-transparent group-hover:animate-shimmer" />

              {/* 2. O Texto: Forçamos a cor Azul Profunda aqui */}
              <span className="relative z-10 flex items-center gap-2 text-blue-800">
                Pedir Orçamento Grátis
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 stroke-blue-800"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>

            <div className="flex flex-col gap-1 items-center sm:items-start">
              <div className="flex text-yellow-400 text-lg">★★★★★</div>
              <p className="text-xs font-bold text-blue-100 uppercase tracking-widest">+1.200 Clientes Satisfeitos</p>
            </div>
          </div>
        </motion.div>

        {/* LADO DIREITO: IMAGEM */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          {/* Moldura Decorativa */}
          <div className="absolute inset-0 bg-blue-400 rounded-[3rem] rotate-3 opacity-20 -z-10 group-hover:rotate-1 transition-transform"></div>

          <div className="relative w-full h-[500px] rounded-[3.5rem] overflow-hidden border-[12px] border-white/10 backdrop-blur-sm shadow-2xl">
            <Image
              src="/equipa-limpeza.jpg"
              alt="Limpeza Profissional CleanPro"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}