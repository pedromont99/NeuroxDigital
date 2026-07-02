"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  { title: "Doméstica", desc: "Limpeza regular e de manutenção para a sua casa.", icon: "🏠" },
  { title: "Pós-Obra", desc: "Limpeza profunda após obras ou remodelações.", icon: "🏗️" },
  { title: "Limpeza a Fundo", desc: "Limpeza intensiva para uma casa completamente renovada.", icon: "🧹" },
];

function SpotlightCard({ s, i }: { s: typeof services[0]; i: number }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      className="relative overflow-hidden p-8 bg-dark rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(300px circle at ${mouse.x}px ${mouse.y}px, rgba(255,255,255,0.07), transparent 70%)`,
        }}
      />
      <div className="relative z-10">
        <div className="text-4xl mb-4">{s.icon}</div>
        <h3 className="text-xl font-bold mb-2 text-white">{s.title}</h3>
        <p className="text-white/60 leading-relaxed">{s.desc}</p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-dark-2">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-black mb-12 text-white">Os Nossos Serviços</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <SpotlightCard key={i} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
