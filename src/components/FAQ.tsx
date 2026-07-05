"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "A Clean4you atende ao domicílio?",
    a: "Sim, o nosso atendimento é 100% ao domicílio, tanto para particulares como para empresas.",
  },
  {
    q: "A Clean4you faz trabalhos em empresas e espaços comerciais?",
    a: "Sim. Em ambientes de trabalho, a higiene e conservação dos estofos e revestimentos têxteis contribuem diretamente para o conforto dos colaboradores e para a imagem do espaço. Realizamos a higienização profissional de poltronas, sofás, cadeiras operativas, áreas de receção e alcatifas, sempre com possibilidade de agendamento em horário pós-laboral que não interfira com a rotina de trabalho.",
  },
  {
    q: "No que consiste a limpeza de estofos?",
    a: "A limpeza de estofos consiste num processo profundo de limpeza e higienização, com remoção de sujidade, manchas, odores e microrganismos (como ácaros, bactérias e fungos) de superfícies estofadas. Este serviço aplica-se a sofás, colchões, cadeiras, poltronas, tapetes, interiores de automóveis, cabeceiras de cama, e couro natural ou sintético.",
  },
  {
    q: "As nódoas são todas removidas a 100%?",
    a: "Não, nem todas as nódoas saem. Conseguimos retirar cerca de 90% das nódoas. Muitas vezes, a natureza da própria nódoa é o principal motivo para que não saia completamente — manchas antigas, por exemplo, penetraram mais profundamente nas fibras, tornando a remoção muito mais difícil. Entre as mais difíceis destacam-se as de vinho tinto, tinta de marcador permanente, sangue e café (que devem ser tratadas o mais rápido possível), e a descoloração causada pelo sol ou por produtos abrasivos como a lixívia.",
  },
  {
    q: "Quanto tempo demora a secar um sofá ou colchão?",
    a: "Utilizamos secadores de alta performance, que permitem entregar os estofos até 90% secos. A secagem total fica otimizada em cerca de 4 horas na primavera/verão, e 8 horas no outono/inverno.",
  },
  {
    q: "Os produtos utilizados são seguros para a saúde?",
    a: "Sim. Os produtos que utilizamos são próprios para limpeza de estofos, biológicos, veganos e certificados — após a limpeza e secagem, são seguros para pessoas e animais de estimação. Utilizamos as quantidades recomendadas e fazemos uma extração completa para remover a sujidade e os resíduos.",
  },
  {
    q: "De quanto em quanto tempo devo higienizar o meu sofá ou colchão?",
    a: "Depende do nível de utilização e do ambiente. Em contexto residencial, recomenda-se geralmente uma higienização pelo menos 1 vez por ano, para remover poeiras, ácaros e sujidade acumulada nas fibras. Em espaços com maior utilização — hotéis, escritórios ou áreas de atendimento ao público — pode ser aconselhável realizar a higienização com maior regularidade.",
  },
  {
    q: "É verdade que a falta de limpeza do colchão pode causar alergias respiratórias?",
    a: "O problema não é o colchão em si, mas o que se acumula nele ao longo do tempo. O colchão é o habitat perfeito para os ácaros da poeira doméstica, que se alimentam de células mortas da pele e prosperam em ambientes quentes e húmidos. A alergia não é causada pelos ácaros vivos, mas pelas proteínas presentes nas suas fezes e corpos em decomposição — partículas que flutuam no ar quando mexemos na cama e são facilmente inaladas, podendo desencadear rinite alérgica (espirros, nariz entupido, comichão) ou crises de asma (falta de ar, pieira, tosse seca, especialmente à noite).",
  },
  {
    q: "Como funciona o pedido de orçamento? É preciso enviar fotos?",
    a: "Pode pedir o seu orçamento gratuito através do formulário no site ou diretamente pelo WhatsApp. Para um orçamento mais rigoroso, pode enviar-nos fotos do sofá, colchão ou espaço a higienizar — isso ajuda-nos a avaliar melhor o estado e a dar-lhe um valor mais preciso antes da visita.",
  },
  {
    q: "É preciso desocupar ou preparar o espaço antes da equipa chegar?",
    a: "Não é necessária nenhuma preparação especial. A nossa equipa trabalha com o mobiliário no seu lugar habitual — basta retirar objetos pessoais de cima do sofá ou colchão (almofadas soltas, roupa, brinquedos) para facilitarmos o acesso a toda a superfície.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-dark-2 border-t border-teal/20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-white mb-2">Perguntas Frequentes</h2>
          <p className="text-teal text-sm font-bold uppercase tracking-widest">
            Tire as suas dúvidas
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-white font-bold text-base">{item.q}</span>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 text-teal transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-white/60 text-sm leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}