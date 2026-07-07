"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className="pt-24 pb-12 bg-dark-2 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LADO ESQUERDO: TEXTO */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl font-black text-white mb-6 leading-tight">
              Uma equipa dedicada ao cuidado do <br />
              <span className="text-teal">seu espaço.</span>
            </h2>
            <p className="text-lg text-white/70 mb-8 leading-relaxed italic">
              "Na Clean4You, tratamos os seus estofos como se fossem nossos. Cada peça importa, cada detalhe merece o melhor cuidado."
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
              <div>
                <p className="text-3xl mb-1">✅</p>
                <p className="text-base font-black text-white">Pontualidade</p>
                <p className="text-sm font-bold text-white/50 uppercase tracking-widest">Respeitamos o seu tempo</p>
              </div>
              <div>
                <p className="text-3xl mb-1">🔒</p>
                <p className="text-base font-black text-white">Confiança</p>
                <p className="text-sm font-bold text-white/50 uppercase tracking-widest">Equipa verificada e segurada</p>
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
            <div className="aspect-square relative rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl border-4 md:border-8 border-teal/30">
              <Image 
                src="/images/Equipa-limpeza-sorrir.jpg" 
                alt="Equipa Clean4You"
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
                Serviço<br className="hidden md:block" /> Garantido
              </p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}