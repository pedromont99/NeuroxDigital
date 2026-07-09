import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Política de Privacidade | Clean4You",
  description: "Política de privacidade e proteção de dados da Clean4You.",
};

export default function PoliticaPrivacidade() {
  return (
    <main className="min-h-screen bg-dark-2">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 pt-40 pb-24 text-white/80">
        <h1 className="text-4xl font-black text-white mb-8">Política de Privacidade</h1>
        <p className="text-white/50 text-sm mb-10">Última atualização: {new Date().toLocaleDateString("pt-PT")}</p>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-teal mb-3">1. Responsável pelo Tratamento</h2>
          <p className="leading-relaxed">
            A Clean4You é operada por Cláudio Paradela, em regime de trabalhador independente (recibos verdes), NIF 222694416. Para qualquer questão relacionada com esta política ou com os seus dados pessoais, pode contactar-nos através de{" "}
            <a href="mailto:geral@clean4you.pt" className="text-teal underline hover:text-teal-dark">geral@clean4you.pt</a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-teal mb-3">2. Que Dados Recolhemos</h2>
          <p className="leading-relaxed mb-3">
            Através do formulário de contacto no nosso site, recolhemos o nome, número de telemóvel e a mensagem que nos escreve. Estes dados são fornecidos diretamente por si, de forma voluntária, ao pedir um orçamento.
          </p>
          <p className="leading-relaxed">
            Se, no futuro, ativarmos ferramentas de análise de tráfego ou publicidade (Google Analytics, Google Ads, Meta Ads), poderemos também recolher dados de navegação através de cookies — ver secção 5.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-teal mb-3">3. Para Que Usamos os Seus Dados</h2>
          <p className="leading-relaxed">
            Usamos os dados do formulário exclusivamente para responder ao seu pedido de orçamento e prestar o serviço solicitado. Não vendemos nem partilhamos os seus dados com terceiros para fins de marketing sem o seu consentimento explícito.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-teal mb-3">4. Base Legal e Prazo de Conservação</h2>
          <p className="leading-relaxed">
            O tratamento destes dados baseia-se no seu consentimento, dado ao submeter o formulário, e no interesse legítimo em responder ao seu pedido. Conservamos os seus dados apenas durante o tempo necessário para o contacto e prestação do serviço, ou até que solicite a sua eliminação.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-teal mb-3">5. Cookies</h2>
          <p className="leading-relaxed">
            Este site pode utilizar cookies de terceiros para análise de tráfego (Google Analytics) e publicidade (Google Ads, Meta Ads), sempre com o seu consentimento prévio através do banner apresentado ao visitar o site. Pode alterar a sua escolha a qualquer momento limpando os dados de navegação do seu browser para este site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-teal mb-3">6. Os Seus Direitos</h2>
          <p className="leading-relaxed mb-3">Nos termos do RGPD, tem direito a:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Aceder aos dados que temos sobre si;</li>
            <li>Solicitar a retificação de dados incorretos;</li>
            <li>Solicitar o apagamento dos seus dados;</li>
            <li>Opor-se ao tratamento dos seus dados;</li>
            <li>Solicitar a portabilidade dos seus dados;</li>
            <li>Apresentar reclamação junto da Comissão Nacional de Proteção de Dados (CNPD).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-teal mb-3">7. Contacto</h2>
          <p className="leading-relaxed">
            Para exercer qualquer um destes direitos, ou esclarecer dúvidas sobre esta política, contacte-nos através de{" "}
            <a href="mailto:geral@clean4you.pt" className="text-teal underline hover:text-teal-dark">geral@clean4you.pt</a>.
          </p>
        </section>
      </div>
      <Footer />
    </main>
  );
}
