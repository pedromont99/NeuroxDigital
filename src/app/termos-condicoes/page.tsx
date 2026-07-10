import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Termos e Condições | Clean4You",
  description: "Termos e condições de prestação de serviço da Clean4You.",
};

export default function TermosCondicoes() {
  return (
    <main className="min-h-screen bg-dark-2">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 pt-40 pb-24 text-white/80">
        <h1 className="text-4xl font-black text-white mb-8">Termos e Condições</h1>
        <p className="text-white/50 text-sm mb-10">Última atualização: {new Date().toLocaleDateString("pt-PT")}</p>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-teal mb-3">1. Âmbito do Serviço</h2>
          <p className="leading-relaxed">
            A Clean4You, operada por Cláudio Paradela (trabalhador independente, NIF 222694416), presta serviços profissionais de limpeza e higienização de estofos, sofás, colchões, cadeiras, poltronas, assentos automóvel, tapetes, alcatifas e impermeabilização, ao domicílio, na Margem Sul e periferia de Lisboa.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-teal mb-3">2. Orçamento e Preços</h2>
          <p className="leading-relaxed">
            O orçamento é gratuito e o valor final varia consoante o tipo de artigo e o grau de sujidade. Existe um valor mínimo de 36€ por serviço, que inclui por norma a deslocação da equipa. Em serviços de baixo valor que impliquem deslocação a zonas mais distantes da nossa base de operação, pode ser aplicada uma taxa adicional de deslocação.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-teal mb-3">3. Pagamento</h2>
          <p className="leading-relaxed">
            O pagamento é efetuado após a conclusão do serviço, através de dinheiro, MBWay, Multibanco ou transferência bancária (esta última especialmente disponível para empresas).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-teal mb-3">4. Cancelamentos</h2>
          <p className="leading-relaxed">
            Não cobramos qualquer valor por cancelamento, uma vez que o serviço ainda não foi prestado. Pedimos, sempre que possível, aviso prévio para reorganizarmos a nossa agenda.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-teal mb-3">5. Acesso ao Local e Preparação</h2>
          <p className="leading-relaxed">
            É necessário que o local disponha de eletricidade e água correntes no momento do serviço. Pedimos ao cliente que informe, no momento do pedido de orçamento, sobre manchas antigas ou materiais delicados que possam exigir cuidado especial.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-teal mb-3">6. Verificação Prévia e Danos Pré-existentes</h2>
          <p className="leading-relaxed">
            Antes de iniciar o serviço, é realizada uma inspeção visual ao artigo (nódoas, desgaste do tecido, rasgões), com registo fotográfico e comunicação ao cliente. Em espaços sem presença do cliente no momento (por exemplo, Alojamento Local), o mesmo processo é feito à distância, por chamada telefónica e envio de fotos ou vídeo.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-teal mb-3">7. Garantia</h2>
          <p className="leading-relaxed">
            Caso o cliente considere que o serviço não ficou bem executado, deve contactar-nos no prazo de 24 horas após a conclusão do trabalho. Nesse caso, procedemos à repetição do serviço sem custo adicional.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-teal mb-3">8. Limitações do Serviço</h2>
          <p className="leading-relaxed">
            Nem todas as manchas podem ser removidas na totalidade. Devido à natureza química de certas substâncias, algumas manchas específicas — nomeadamente de colas, tintas e resinas — podem fixar-se de forma irreversível nas fibras, não sendo tecnicamente possível a sua remoção total em alguns casos. Este limite é comunicado ao cliente sempre que identificado durante a inspeção prévia.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-teal mb-3">9. Direitos de Imagem</h2>
          <p className="leading-relaxed">
            Podemos utilizar fotografias gerais dos trabalhos realizados (antes/depois) no nosso site e redes sociais, para fins de divulgação do serviço. Em espaços ou imóveis que identifiquem uma marca ou entidade de terceiros, a utilização dessas imagens fica sujeita a autorização prévia da respetiva marca ou proprietário.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-teal mb-3">10. Contacto</h2>
          <p className="leading-relaxed">
            Para qualquer questão relacionada com estes Termos e Condições, contacte-nos através de{" "}
            <a href="mailto:geral@clean4you.pt" className="text-teal underline hover:text-teal-dark">geral@clean4you.pt</a>.
          </p>
        </section>
      </div>
      <Footer />
    </main>
  );
}
