"use client";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const hrefFor = (hash: string) => (isHome ? hash : `/${hash}`);
  return (
    <footer className="bg-dark text-[#F2EDE4] pt-20 pb-24 md:pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* COLUNA 1: SOBRE A MARCA */}
          <div className="space-y-6">
            <Image
              src="/images/logo/logo-footer.png"
              alt="Clean4You"
              width={252}
              height={87}
              className="h-12 w-auto"
            />
            <p className="text-teal text-xs font-bold uppercase tracking-widest -mt-4">
              Limpeza Profunda e Bem-estar
            </p>
            <p className="text-slate-400 leading-relaxed">
              Higienização profissional de estofos, sofás e colchões na Margem Sul e periferia de Lisboa. Qualidade e confiança em cada serviço.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* COLUNA 2: LINKS RÁPIDOS */}
          <div>
            <h4 className="text-lg font-bold mb-6">Navegação</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href={hrefFor("#home")} className="hover:text-[#F2EDE4] transition-colors">Início</a></li>
              <li><a href={hrefFor("#sobre")} className="hover:text-[#F2EDE4] transition-colors">A Empresa</a></li>
              <li><a href={hrefFor("#servicos")} className="hover:text-[#F2EDE4] transition-colors">Serviços</a></li>
              <li><a href={hrefFor("#atuacao")} className="hover:text-[#F2EDE4] transition-colors">Áreas de Atuação</a></li>
              <li><a href={hrefFor("#faq")} className="hover:text-[#F2EDE4] transition-colors">Perguntas Frequentes</a></li>
              <li><a href="/politica-privacidade" className="hover:text-[#F2EDE4] transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>

          {/* COLUNA 3: CONTACTOS */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contactos</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-teal" />
                <span>+351 919 991 222</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-teal" />
                <span>geral@clean4you.pt</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-teal" />
                <span>Margem Sul e Periferia de Lisboa</span>
              </li>
            </ul>
          </div>

          {/* COLUNA 4: HORÁRIO */}
          <div>
            <h4 className="text-lg font-bold mb-6">Horário</h4>
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <p className="text-sm text-slate-400 mb-2">Segunda a Sexta:</p>
              <p className="font-bold text-[#F2EDE4] mb-4">08:00 — 19:00</p>
              <p className="text-sm text-slate-400 mb-2">Sábados:</p>
              <p className="font-bold text-[#F2EDE4]">09:00 — 13:00</p>
            </div>
          </div>
        </div>

       {/* BARRA INFERIOR (COPYRIGHT + ATRIBUIÇÃO) */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-600 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Clean4You. Built with intention by <a href="https://sandrasantos.pt" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">sandrasantos.pt</a>. Todos os direitos reservados.</p>
          <a
            href={hrefFor("#home")}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors normal-case tracking-normal text-xs font-bold"
          >
            <ArrowUp size={14} />
            Voltar ao topo
          </a>
        </div>
      </div>
    </footer>
  );
}