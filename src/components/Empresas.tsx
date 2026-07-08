"use client";
import { motion } from "framer-motion";
import { Building2, Store, Hotel } from "lucide-react";

const segments = [
  {
    title: "Empresas",
    Icon: Building2,
    text: "Investir na limpeza e manutenção dos tecidos e estofados do escritório vai além da estética: garante um ambiente de trabalho saudável, confortável e com uma imagem profissional impecável. Adaptamos o serviço às necessidades de cada empresa, sempre com possibilidade de agendamento em horários que não interfiram com a rotina de trabalho.",
  },
  {
    title: "Espaços Comerciais",
    Icon: Store,
    text: "Prestamos serviços de limpeza e higienização de estofos e superfícies têxteis em diversos contextos empresariais, incluindo espaços comerciais, salas de formação, auditórios e áreas de atendimento ao público. O planeamento é realizado em estreita articulação com o cliente, adaptando o horário de intervenção às necessidades do espaço.",
  },
  {
    title: "Hotelaria",
    Icon: Hotel,
    text: "A higiene e o estado de conservação dos estofos são elementos fundamentais para a experiência e conforto dos hóspedes. Realizamos a limpeza e higienização profissional de colchões, cadeiras, sofás e cabeceiras em quartos e áreas comuns, com horários flexíveis ajustados à operação da unidade.",
  },
];

export default function Empresas() {
  return (
    <section id="empresas" className="py-24 bg-dark-2 border-t border-teal/20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-black mb-2 text-white">Também Trabalhamos com Empresas</h2>
        <p className="text-teal text-sm font-bold uppercase tracking-widest mb-12">
          Soluções à Medida do Seu Negócio
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {segments.map((s, i) => (
            <motion.div
              key={i}
              className="p-8 bg-white/5 border border-white/10 rounded-3xl text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <s.Icon className="w-10 h-10 mb-4 text-teal" strokeWidth={1.5} />
              <h3 className="text-xl font-bold mb-3 text-white">{s.title}</h3>
              <p className="text-white/60 leading-relaxed text-sm">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
