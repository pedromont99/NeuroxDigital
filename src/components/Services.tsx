"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Sofa, BedDouble, Armchair, CarFront, Grid3x3, Droplets } from "lucide-react";

const services = [
  { title: "Sofás", desc: "Materiais naturais ou sintéticos — tecido, pele e similares.", Icon: Sofa },
  { title: "Colchões e Cabeceiras", desc: "Descrição em breve.", Icon: BedDouble },
  { title: "Cadeiras / Poltronas", desc: "Descrição em breve.", Icon: Armchair },
  { title: "Assentos auto", desc: "Descrição em breve.", Icon: CarFront },
  { title: "Tapetes e Alcatifas", desc: "Descrição em breve.", Icon: Grid3x3 },
  { title: "Impermeabilização", desc: "Descrição em breve.", Icon: Droplets },
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
      transition={{ duration: 0.5, delay: i * 0.1 }}
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
        <s.Icon className="w-10 h-10 mb-4 text-teal" strokeWidth={1.5} />
        <h3 className="text-xl font-bold mb-2 text-white">{s.title}</h3>
        <p className="text-white/60 leading-relaxed text-sm">{s.desc}</p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-dark-2">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-black mb-2 text-white">Os Nossos Serviços</h2>
        <p className="text-teal text-sm font-bold uppercase tracking-widest mb-12">
          Limpeza e Higienização
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <SpotlightCard key={i} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}