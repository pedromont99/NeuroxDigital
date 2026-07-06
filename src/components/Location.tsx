"use client";
import { motion } from "framer-motion";

const margemSul = ["Alcochete", "Almada", "Barreiro", "Moita", "Montijo", "Palmela", "Seixal", "Sesimbra", "Setúbal"];
const margemNorte = ["Cascais", "Oeiras", "Amadora", "Odivelas", "Loures"];

export default function Atuacao() {
  return (
    <section id="atuacao" className="py-24 bg-dark-3 text-[#F2EDE4] overflow-hidden rounded-[4rem] mx-4 my-10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-black mb-6">Atuamos na Margem Sul e Periferia de Lisboa</h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-12 text-lg">
            Cobrimos toda a Margem Sul e a periferia de Lisboa. A sua zona não está na lista? Entre em contacto connosco.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8 max-w-3xl mx-auto">
          <div>
            <p className="text-teal text-sm font-bold uppercase tracking-widest mb-4 text-left">Margem Sul</p>
            <div className="flex flex-wrap gap-3">
              {margemSul.map((zona, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="px-6 py-3 bg-light/10 border border-light/20 rounded-2xl font-bold hover:bg-teal transition-all cursor-default"
                >
                  {zona}
                </motion.span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-teal text-sm font-bold uppercase tracking-widest mb-4 text-left">Margem Norte (Periferia)</p>
            <div className="flex flex-wrap gap-3">
              {margemNorte.map((zona, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="px-6 py-3 bg-light/10 border border-light/20 rounded-2xl font-bold hover:bg-teal transition-all cursor-default"
                >
                  {zona}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
