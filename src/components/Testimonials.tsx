"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Fizeram uma diferença incrível no sofá de tecido, que já estava bastante desgastado. Ficou com um aspeto completamente renovado.",
    name: "Maria S.",
    location: "Setúbal",
  },
  {
    quote: "Equipa pontual e profissional na higienização do meu carro. Recomendo sem hesitar.",
    name: "João F.",
    location: "Palmela",
  },
  {
    quote: "Excelente serviço na limpeza do colchão. Notei mesmo a diferença na qualidade do sono.",
    name: "Ana P.",
    location: "Azeitão",
  },
];

export default function Testimonials() {
  return (
    <section id="testemunhos" className="py-24 bg-dark-2 border-t border-teal/20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-black text-white text-center mb-12">
          O que dizem os nossos clientes
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="p-8 bg-white/5 border border-white/10 rounded-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="text-yellow-400 text-lg mb-4">★★★★★</div>
              <p className="text-white/70 leading-relaxed mb-6">"{t.quote}"</p>
              <div>
                <p className="font-bold text-white">{t.name}</p>
                <p className="text-white/50 text-sm">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
