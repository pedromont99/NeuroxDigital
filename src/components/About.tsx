"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LADO ESQUERDO: TEXTO */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight">
              Mais de 10 anos a cuidar do <br /> 
              <span className="text-brand">seu bem-estar.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed italic">
              "Na CleanPro, acreditamos que uma casa limpa é o reflexo de uma mente tranquila. Tratamos o seu espaço com o rigor de quem cuida do próprio lar."
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-slate-100 pt-8">
              <div>
                <p className="text-3xl font-black text-brand">12h</p>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Tempo Resposta</p>
              </div>
              <div>
                <p className="text-3xl font-black text-brand">+10k</p>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Limpezas Totais</p>
              </div>
            </div>
          </motion.div>

          {/* LADO DIREITO: FOTO COM BADGE RESPONSIVO */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative group"
          >
            <div className="aspect-square relative rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl border-4 md:border-8 border-slate-50">
              <Image 
                src="/Equipa-limpeza-sorrir.jpg" 
                alt="Equipa CleanPro"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* BADGE AJUSTADO PARA NÃO TAPAR A EQUIPA NO MOBILE */}
            <div className="absolute top-3 right-3 md:top-6 md:right-6 
                            flex flex-col items-center justify-center 
                            backdrop-blur-md bg-white/10 
                            p-1.5 md:p-3 
                            w-16 md:w-24 
                            rounded-xl md:rounded-2xl 
                            border border-white/20 shadow-lg transition-all">
              
              <span className="text-xl md:text-3xl filter drop-shadow-md">🏅</span>
              
              <p className="font-extrabold text-white mt-0.5 text-[7px] md:text-[10px] uppercase text-center tracking-tighter md:tracking-widest drop-shadow-sm leading-tight">
                Empresa<br className="hidden md:block" /> Certificada
              </p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}