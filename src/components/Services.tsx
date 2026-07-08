"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sofa, BedDouble, Armchair, CarFront, Grid3x3, Droplets, Check, X } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ServiceContent = {
  intro?: string;
  process?: string;
  benefits: string[];
};

type ServiceVariant = ServiceContent & {
  label: string;
};

type ServiceBase = {
  title: string;
  Icon: LucideIcon;
  shortDesc: string;
};

type ServiceItem =
  | (ServiceBase & { variants: ServiceVariant[] })
  | (ServiceBase & ServiceContent & { variants?: undefined });

const services: ServiceItem[] = [
  {
    title: "Sofás",
    Icon: Sofa,
    shortDesc: "Materiais naturais ou sintéticos — tecido, pele e similares.",
    variants: [
      {
        label: "Tecido",
        intro: "A limpeza e higienização profissional da Clean4you permite remover sujidade presente nas fibras, contribuindo para melhorar a higiene e preservar o aspeto do seu sofá.",
        process: "O processo inclui pré-tratamento de manchas, limpeza profunda por extração, desinfeção, neutralização de pH, eliminação de odores.",
        benefits: [
          "Remoção eficaz da maior parte das manchas, odores e sujidade acumulada.",
          "Renovação da aparência do sofá, com revitalização das cores.",
          "Eliminação de ácaros e bactérias, promovendo um ambiente mais saudável.",
          "Prolonga a vida útil do sofá, evitando o desgaste prematuro dos tecidos.",
        ],
      },
      {
        label: "Pele natural ou sintética",
        intro: "A limpeza de um sofá de pele consiste em remover a sujidade acumulada e higienizar o material, sem danificar o acabamento.",
        process: "Começa-se por aspirar o sofá, especialmente nas dobras, e depois aplica-se um produto específico para pele, esfregando suavemente com uma escova macia.",
        benefits: [
          "Remove sujidade, ácaros e alergénios, melhorando a higiene do ambiente.",
          "A hidratação mantém o material macio e evita que rache, prolongando a vida útil.",
        ],
      },
    ],
  },
  {
    title: "Colchões e Cabeceiras",
    Icon: BedDouble,
    shortDesc: "Remove ácaros, bactérias e odores para um sono mais saudável.",
    intro: "Os ácaros da poeira alimentam-se de células de pele que perdemos naturalmente todos os dias, e um colchão nunca higienizado acumula populações crescentes deles — e dos seus resíduos — ao longo do tempo, uma das causas mais estudadas de alergias respiratórias em ambiente doméstico. Juntam-se ainda suor, poeiras e bactérias que comprometem a higiene do seu descanso diário.",
    benefits: [
      "Remoção de ácaros, bactérias e fungos, proporcionando um ambiente de sono mais saudável e tranquilo.",
      "Eliminação de odores desagradáveis, contribuindo para uma sensação de frescura e conforto.",
      "Ajuda a aliviar sintomas de alergias e problemas respiratórios relacionados com poeira e ácaros.",
    ],
  },
  {
    title: "Cadeiras / Poltronas",
    Icon: Armchair,
    shortDesc: "Higienização de cadeiras e poltronas em ambientes residenciais e profissionais.",
    intro: "Realizamos higienização de cadeiras estofadas, poltronas e outros elementos estofados, tanto em ambientes residenciais como profissionais.",
    benefits: [
      "Remoção eficaz de manchas, odores e sujidade acumulada.",
      "Renovação da aparência das cadeiras e poltronas, com aspeto novo e revitalizado.",
      "Eliminação de ácaros, bactérias e fungos, promovendo um ambiente mais saudável.",
      "Prolonga a vida da cadeira ou poltrona, evitando o desgaste prematuro dos tecidos.",
    ],
  },
  {
    title: "Assentos auto",
    Icon: CarFront,
    shortDesc: "Remove sujidade profunda e melhora a qualidade do ar no habitáculo.",
    benefits: [
      "Elimina sujidades profundas, manchas e odores desagradáveis, deixando o habitáculo com um ar muito mais fresco e limpo.",
      "Elimina bactérias, ácaros e outros alergénios, fundamental para a qualidade do ar que respira enquanto conduz.",
      "Ajuda a preservar os materiais, sejam eles de tecido ou pele, prolongando a vida útil dos bancos e mantendo o valor do automóvel.",
    ],
  },
  {
    title: "Tapetes e Alcatifas",
    Icon: Grid3x3,
    shortDesc: "Limpeza profunda por extração, restaurando o aspeto original.",
    intro: "Tapetes e alcatifas são superfícies que acumulam grande quantidade de poeiras, sujidade e bactérias devido à circulação diária de pessoas e animais na habitação. A Clean4you realiza a higienização profissional destes revestimentos através de métodos de limpeza profunda por extração, que permitem remover resíduos presentes nas fibras e melhorar o aspeto geral do revestimento.",
    benefits: [
      "Remoção de manchas difíceis e alguma sujidade incrustada, procurando restaurar a aparência original do tapete ou alcatifa. Nota: devido à natureza química de certas substâncias, algumas manchas específicas — nomeadamente de colas, tintas e resinas — podem fixar-se de forma irreversível nas fibras, não sendo tecnicamente possível a sua remoção total em alguns casos.",
      "Eliminação de odores desagradáveis, deixando o ambiente mais fresco e agradável.",
      "Prolonga a vida útil do tapete, prevenindo o desgaste prematuro das fibras.",
      "Melhora a qualidade do ar interior, removendo alergénios e partículas de poeira retidas no tapete.",
    ],
  },
  {
    title: "Impermeabilização",
    Icon: Droplets,
    shortDesc: "Barreira protetora que facilita a limpeza e previne manchas.",
    intro: "A impermeabilização de um sofá consiste em aplicar um produto protetor nas suas fibras, que cria uma barreira invisível. Essa barreira impede que líquidos e sujidades penetrem no tecido, facilitando a limpeza de derrames e prevenindo manchas, além de ajudar a proteger contra o desgaste diário.",
    benefits: [
      "Evita manchas de bebidas ou comidas — qualquer derrame fica na superfície e pode ser absorvido rapidamente com um papel.",
      "Impede que a humidade penetre, prevenindo o surgimento de mofo e mau odor, contribuindo para um ambiente mais saudável.",
    ],
  },
];

function SpotlightCard({ s, i, isActive, onClick }: { s: typeof services[0]; i: number; isActive: boolean; onClick: () => void }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      onClick={onClick}
      className={`relative overflow-hidden p-8 bg-dark rounded-3xl shadow-sm border cursor-pointer transition-colors ${
        isActive ? "border-teal" : "border-slate-100 hover:border-teal/50"
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(300px circle at ${mouse.x}px ${mouse.y}px, rgba(255,255,255,0.07), transparent 70%)`,
        }}
      />
      <div className="relative z-10">
        <s.Icon className="w-10 h-10 mb-4 text-teal" strokeWidth={1.5} />
        <h3 className="text-xl font-bold mb-2 text-white">{s.title}</h3>
        <p className="text-white/60 leading-relaxed text-sm">{s.shortDesc}</p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeVariant, setActiveVariant] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);

  const active = activeIndex !== null ? services[activeIndex] : null;
  const detail = active?.variants ? active.variants[activeVariant] : active;

  const handleCardClick = (i: number) => {
    setActiveVariant(0);
    const newIndex = activeIndex === i ? null : i;
    setActiveIndex(newIndex);
    if (newIndex !== null) {
      setTimeout(() => {
        panelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 350);
    }
  };

  return (
    <section id="servicos" className="py-24 bg-dark-2">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-black mb-2 text-white">Os Nossos Serviços</h2>
        <p className="text-teal text-sm font-bold uppercase tracking-widest mb-4">
          Limpeza e Higienização
        </p>
        <p className="text-white/40 text-sm italic mb-12">
          Não sabe qual serviço precisa? Comece pelo mais óbvio — nós ajustamos o resto na visita.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <SpotlightCard
              key={i}
              s={s}
              i={i}
              isActive={activeIndex === i}
              onClick={() => handleCardClick(i)}
            />
          ))}
        </div>

        <AnimatePresence>
          {active && detail && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div ref={panelRef} className="mt-8 bg-white/5 border border-white/10 rounded-3xl p-8 text-left scroll-mt-24">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <active.Icon className="w-6 h-6 text-teal" strokeWidth={1.5} />
                    <h4 className="text-xl font-bold text-white">{active.title}</h4>
                  </div>
                  <button
                    onClick={() => setActiveIndex(null)}
                    aria-label="Fechar"
                    className="text-white/50 hover:text-white transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {active.variants && (
                  <div className="flex gap-2 mb-5">
                    {active.variants.map((v, vi) => (
                      <button
                        key={vi}
                        onClick={() => setActiveVariant(vi)}
                        className={`text-xs font-bold px-4 py-2 rounded-full border transition-colors ${
                          vi === activeVariant
                            ? "border-teal bg-teal/10 text-teal"
                            : "border-white/15 text-white/60 hover:border-white/30"
                        }`}
                      >
                        {v.label}
                      </button>
                    ))}
                  </div>
                )}

                {detail.intro && (
                  <p className="text-white/70 text-sm leading-relaxed mb-3">{detail.intro}</p>
                )}
                {detail.process && (
                  <p className="text-white/50 text-sm leading-relaxed mb-5">{detail.process}</p>
                )}

                <div className="flex flex-col gap-2">
                  {detail.benefits.map((b, bi) => (
                    <div key={bi} className="flex items-start gap-3">
                      <Check size={16} className="text-teal mt-0.5 flex-shrink-0" />
                      <span className="text-white/65 text-sm leading-relaxed">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}