const services = [
  { title: "Doméstica", desc: "Limpeza de manutenção para o seu dia a dia.", icon: "🏠" },
  { title: "Pós-Obra", desc: "Remoção profunda de detritos e pó fino.", icon: "🏗️" },
  { title: "Escritórios", desc: "Higiene profissional para empresas.", icon: "💼" }
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-black mb-12 text-slate-900">Nossos Serviços</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">{s.title}</h3>
              <p className="text-slate-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}