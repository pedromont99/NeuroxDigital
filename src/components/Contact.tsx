"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contactos" className="py-24 bg-hero-gradient overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-[#1C1C1E]/10 backdrop-blur-xl border border-white/20 rounded-[3rem] p-8 md:p-16 text-[#F2EDE4] shadow-2xl shadow-blue-900/30"
        >
          {/* Cabeçalho do Formulário */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter">
              Orçamento <span className="text-blue-400">Grátis</span>
            </h2>
            <p className="text-blue-100 italic font-light text-lg">
              "Respondemos em menos de 24 horas."
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Campo Nome */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-blue-100 ml-2">Nome Completo</label>
                <input 
                  type="text" 
                  placeholder="Ex: João Silva"
                  className="w-full px-6 py-4 rounded-2xl bg-[#1C1C1E]/5 border border-white/10 text-[#F2EDE4] placeholder:text-blue-200/40 focus:border-blue-400 focus:bg-[#1C1C1E]/10 outline-none transition-all"
                />
              </div>

              {/* Campo Telefone */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-blue-100 ml-2">Telemóvel</label>
                <input 
                  type="tel" 
                  placeholder="912 345 678"
                  className="w-full px-6 py-4 rounded-2xl bg-[#1C1C1E]/5 border border-white/10 text-[#F2EDE4] placeholder:text-blue-200/40 focus:border-blue-400 focus:bg-[#1C1C1E]/10 outline-none transition-all"
                />
              </div>
            </div>

            {/* Campo de Mensagem */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-blue-100 ml-2">Como podemos ajudar?</label>
              <textarea 
                rows={4}
                placeholder="Descreva brevemente o serviço..."
                className="w-full px-6 py-4 rounded-2xl bg-[#1C1C1E]/5 border border-white/10 text-[#F2EDE4] placeholder:text-blue-200/40 focus:border-blue-400 focus:bg-[#1C1C1E]/10 outline-none transition-all resize-none"
              ></textarea>
            </div>

            {/* BOTÃO TITAN (Visível em Mobile e com Shimmer) */}
            <button 
              type="submit" 
              className="group relative w-full overflow-hidden bg-[#1C1C1E] py-5 rounded-2xl font-black text-brand shadow-xl transition-all active:scale-95"
            >
              {/* Efeito de brilho que atravessa o botão sozinho */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-blue-100 to-transparent animate-shimmer" />
              
              <span className="relative z-10 flex items-center justify-center gap-2 text-blue-800 text-lg">
                Enviar Pedido de Orçamento
              </span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}