"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const cards = [
  {
    before: "/images/depois-carro.jpg",
    after: "/images/antes-carro.jpg",
    objectPosition: "center 60%",
  },
  {
    before: "/images/depois-sofa.jpg",
    after: "/images/antes-sofa.jpg",
    objectPosition: "center 40%",
  },
];

function ComparisonCard({ card }: { card: typeof cards[0] }) {
  const [value, setValue] = useState(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = Math.round(((e.clientX - rect.left) / rect.width) * 100);
    setValue(Math.min(100, Math.max(0, pct)));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = Math.round(((e.touches[0].clientX - rect.left) / rect.width) * 100);
    setValue(Math.min(100, Math.max(0, pct)));
  };

  return (
    <div>
      <div
        className="relative w-full aspect-video rounded-3xl overflow-hidden border border-dark/10 cursor-col-resize"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* Before — base layer, always visible */}
        <Image
          src={card.before}
          alt="Antes"
          fill
          className="object-cover"
          style={{ objectPosition: card.objectPosition }}
        />

        {/* After — clipped to reveal left portion based on slider value */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: `inset(0 ${100 - value}% 0 0)`,
            transition: "clip-path 0.05s ease",
          }}
        >
          <Image
            src={card.after}
            alt="Depois"
            fill
            className="object-cover"
            style={{ objectPosition: card.objectPosition }}
          />
        </div>

        {/* Vertical divider */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white pointer-events-none"
          style={{ left: `${value}%`, transition: "left 0.05s ease" }}
        />

        {/* Labels */}
        <span className="absolute top-3 left-3 text-xs text-white font-bold uppercase tracking-widest bg-dark/40 backdrop-blur-sm px-2 py-1 rounded-md pointer-events-none">
          ANTES
        </span>
        <span className="absolute top-3 right-3 text-xs text-white font-bold uppercase tracking-widest bg-dark/40 backdrop-blur-sm px-2 py-1 rounded-md pointer-events-none">
          DEPOIS
        </span>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full mt-2 accent-primary"
      />
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section id="resultados" className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-black text-dark mb-3">
            Resultados que falam por si
          </h2>
          <p className="text-dark/50">Veja a diferença que a Clean4You faz.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <ComparisonCard key={i} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
