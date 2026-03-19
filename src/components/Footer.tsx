import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* COLUNA 1: SOBRE A MARCA */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black tracking-tighter">
              Clean<span className="text-blue-500">Pro</span>
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Líderes em higienização profissional em Lisboa. Transformamos espaços com rigor, confiança e tecnologia de ponta.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* COLUNA 2: LINKS RÁPIDOS */}
          <div>
            <h4 className="text-lg font-bold mb-6">Navegação</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#home" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">A Empresa</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#atuacao" className="hover:text-white transition-colors">Áreas de Atuação</a></li>
            </ul>
          </div>

          {/* COLUNA 3: CONTACTOS */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contactos</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500" />
                <span>+351 912 345 678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500" />
                <span>geral@cleanpro.pt</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-blue-500" />
                <span>Lisboa, Portugal</span>
              </li>
            </ul>
          </div>

          {/* COLUNA 4: HORÁRIO */}
          <div>
            <h4 className="text-lg font-bold mb-6">Horário</h4>
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <p className="text-sm text-slate-400 mb-2">Segunda a Sexta:</p>
              <p className="font-bold text-white mb-4">08:00 — 19:00</p>
              <p className="text-sm text-slate-400 mb-2">Sábados:</p>
              <p className="font-bold text-white">09:00 — 13:00</p>
            </div>
          </div>
        </div>

       {/* BARRA INFERIOR (COPYRIGHT + ATRIBUIÇÃO) */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-600 uppercase tracking-widest">
          <p>© 2026 CleanPro Template. Developed by Neurox DIgital Todos os direitos reservados.</p>
          <p>
            Icons by{" "}
            <a 
              href="https://www.flaticon.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-slate-400 underline transition-colors"
            >
              Flaticon
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}