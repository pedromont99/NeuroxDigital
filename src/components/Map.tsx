"use client";
import { motion } from "framer-motion";

export default function Map() {
  // Coordenadas ou Morada (Podes ajustar o src do iframe para a morada real no Google Maps)
  // Dica: No Google Maps, clica em "Partilhar" -> "Incorporar um mapa" e tira o link do 'src'
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49839.83!2d-8.9!3d38.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd194f3b2d4a64e7%3A0x500bbbbef5fe220!2sSets%C3%BAbal!5e0!3m2!1spt-PT!2spt!4v1710000000000!5m2!1spt-PT!2spt";

  return (
    <section id="localizacao" className="py-24 bg-dark-2 border-t border-teal/20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Cabeçalho da Secção */}
        <div className="mb-12">
          <h2 className="text-3xl font-black text-white tracking-tighter">
            Onde <span className="text-teal">Atuamos</span>
          </h2>
          <p className="text-white/50 mt-2 font-light">
            Baseados em Setúbal, prontos a chegar até si.
          </p>
        </div>

        {/* Contentor do Mapa com Estilo Premium */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-dark/10 group"
        >
          {/* Overlay de Vidro (Aparece no hover) */}
          <div className="absolute inset-0 bg-primary/5 pointer-events-none group-hover:bg-transparent transition-colors duration-500 z-10"></div>
          
          <iframe
            src={googleMapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}