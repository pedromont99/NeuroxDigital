"use client";
import { motion } from "framer-motion";

const zonas = ["Lisboa Centro", "Sintra", "Cascais", "Oeiras", "Loures", "Amadora"];

export default function Location() {
  return (
    <section id="atuacao" className="py-24 bg-slate-900 text-[#F2EDE4] overflow-hidden rounded-[4rem] mx-4 my-10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-black mb-6">Atuamos em Toda a Grande Lisboa</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-12 text-lg">
            Estamos estrategicamente posicionados para chegar até si em tempo recorde. 
            Se a sua zona não estiver na lista, contacte-nos!
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {zonas.map((zona, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="px-8 py-4 bg-[#1C1C1E]/5 border border-white/10 rounded-2xl font-bold hover:bg-brand transition-all cursor-default"
            >
              {zona}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}