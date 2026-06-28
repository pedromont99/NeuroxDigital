"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Ficámos muito satisfeitos com o resultado. Casa completamente transformada após as obras.",
    name: "Maria S.",
    location: "Setúbal",
  },
  {
    quote: "Pontuais, cuidadosos e profissionais. Voltamos a contratar com certeza.",
    name: "João F.",
    location: "Palmela",
  },
  {
    quote: "Excelente serviço de limpeza doméstica. Recomendo a toda a gente.",
    name: "Ana P.",
    location: "Azeitão",
  },
];

export default function Testimonials() {
  return (
    <section id="testemunhos" className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-black text-dark text-center mb-12">
          O que dizem os nossos clientes
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="p-8 bg-dark/5 border border-dark/10 rounded-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="text-yellow-400 text-lg mb-4">★★★★★</div>
              <p className="text-dark/70 leading-relaxed mb-6">"{t.quote}"</p>
              <div>
                <p className="font-bold text-dark">{t.name}</p>
                <p className="text-dark/50 text-sm">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
