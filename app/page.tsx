import Image from "next/image";
import bgTop from "../public/bg-top.png";
import bgBottom from "../public/bg-bottom.png";
import bombagasolina from "../public/Bombagasolina.png";
import GlowButton from "./componet/Button";
import { CircleCheckBig, CircleX, TriangleAlert } from "lucide-react";
import foto from "../public/Foto Hebert.png";
import FAQ from "./componet/Faq";
import caminhaobg from "../public/caminhaobg.png";
import logo from "../public/LOGO.png";

export default function Home() {

  const testemunhos = [
    {
      id: 1,
      url: "https://www.youtube.com/shorts/RhvoRGm3nA4",
      alt: "testemunho 0",
    },
    {
      id: 2,
      url: "https://www.youtube.com/shorts/fTB0AJSWwcI",
      alt: "testemunho 1",
    },
    {
      id: 3,
      url: "https://www.youtube.com/shorts/lPV7u2KR85M",
      alt: "testemunho 2",
    },
    {
      id: 4,
      url: "https://www.youtube.com/shorts/x82sCNzBY3s",
      alt: "testemunho 3",
    },
    {
      id: 5,
      url: "https://www.youtube.com/shorts/rwIoxca8dCA",
      alt: "testemunho 4",
    },
  ];

  const getEmbedUrl = (url: string) => {
  const videoId = url.split('/').pop();
  return `https://www.youtube.com/embed/${videoId}?autoplay=0&controls=0&rel=0&modestbranding=1&showinfo=0&iv_load_policy=3`;
};

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background decorativo superior */}
      <div className="absolute top-0 right-0 z-10 pointer-events-none">
        <Image
          src={bgTop}
          alt=""
          className="w-[300px] h-auto opacity-80 lg:w-[700px] xl:w-[900px]"
          priority
          width={900}
          height={900}
        />
      </div>

      {/* Background decorativo inferior */}
      <div className="absolute top-90 left-0 z-8 pointer-events-none lg:top-100">
        <Image
          src={bgBottom}
          alt=""
          className="w-[300px] h-auto opacity-80 lg:w-[700px] xl:w-[900px]"
          priority
          width={900}
          height={900}
        />
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="w-full flex flex-col items-center justify-center mt-8 px-4 lg:py-10">
          {/* Logo */}
          <div className="mb-8 lg:mb-12">
            <Image
              src={logo}
              alt="Logo Frete Certo"
              className="w-40 lg:w-80"
              priority
            />
          </div>

          {/* Título principal */}
          <h1 className="w-full max-w-4xl text-center mb-6 text-2xl font-semibold leading-tight lg:text-5xl lg:mb-10">
            A maioria acha que tá no lucro até ver o que o simulador revela em poucos minutos.
          </h1>

          {/* Badge de alerta */}
          <div className="flex items-center justify-center gap-1.5 px-3 py-1.5 mb-6 border border-[#FF781C] rounded-full bg-[#FF781C]/15 backdrop-blur-lg lg:gap-2 lg:px-6 lg:py-3 lg:mb-10">
            <TriangleAlert className="w-3 h-3 lg:w-5 lg:h-5" color="#FF781C" />
            <p className="text-[#FF781C] text-xs font-medium lg:text-base">
              Essa aula expira em breve
            </p>
          </div>

          {/* Vídeo principal */}
          <iframe
            id="yt-player"
            className="w-full max-w-[343px] h-auto aspect-video rounded-lg mb-8 lg:max-w-[784px] lg:rounded-[20px]"
            src="https://www.youtube.com/embed/K-EniDyjFHQ?autoplay=1&mute=1&controls=0&enablejsapi=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          {/* CTA Section */}
          <div className="w-full max-w-[475px] text-center flex flex-col items-center justify-center gap-4">
            <GlowButton>Acessar simulador agora</GlowButton>
            <p className="text-xs text-gray-300 max-w-[208px] lg:text-base lg:max-w-full mb-8">
              Apenas 2% dos caminhoneiros têm controle total dos seus ganhos.
            </p>
          </div>
        </section>

        {/* Banner caminhão */}
        <section className="flex flex-col justify-center items-center w-full lg:relative lg:h-[600px] lg:overflow-hidden lg:bg-[linear-gradient(270deg,rgba(0,0,0,0)_8.19%,#121212_92.29%)]">
          {/* Texto */}
          <div className="text-center px-4 lg:text-left lg:absolute lg:left-[10%] lg:top-1/2 lg:-translate-y-1/2 lg:z-10 lg:max-w-[500px]">
            <h2 className="text-3xl font-bold leading-tight mb-4 lg:text-5xl lg:mb-6">
              O seu lucro não tá<br />
              no frete mais caro,<br />
              <span className="text-[#FF781C]">tá no Frete Certo.</span>
            </h2>
            <p className="text-sm font-normal leading-relaxed max-w-[300px] mb-2 mx-auto lg:text-base lg:max-w-[400px] lg:mx-0">
              A maioria acha que tá no lucro até ver o que o simulador revela em poucos minutos.
            </p>
          </div>

          {/* Imagem do caminhão */}
          <div className="relative w-full lg:absolute lg:inset-0 lg:w-full lg:h-full">
            <Image
              src={caminhaobg}
              alt="Caminhão na estrada"
              className="w-full h-auto lg:w-full lg:h-full lg:object-cover lg:[mask-image:linear-gradient(to_right,transparent_0%,black_95%,black_100%)]"
            />

            {/* Gradiente superior - mobile */}
            <div className="pointer-events-none absolute top-0 left-0 w-full h-32 bg-[linear-gradient(180deg,#121212_0%,black_10%,rgba(18,18,18,0)_100%)]" />

            {/* Gradiente inferior - mobile */}
            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-[linear-gradient(0deg,#121212_0%,black_10%,rgba(0,0,0,0)_100%)]" />
          </div>
        </section>

        {/* Bomba de combustível */}
        <section className="relative flex flex-col justify-center items-center px-4 w-full my-12 lg:relative lg:h-[600px] lg:overflow-hidden lg:my-20">
          {/* Imagem - desktop com sombra laranja */}
          <div className="hidden lg:block lg:absolute lg:left-[10%] lg:top-1/2 lg:-translate-y-1/2 lg:z-0">
            {/* Sombra laranja */}
            <div className="absolute inset-0 bg-[#FF781C] blur-[60px] opacity-40 scale-80 -z-10" />

            <Image
              className="w-[580px] relative z-6"
              src={bombagasolina}
              alt="Bomba de gasolina e moedas"
            />
          </div>

          {/* Texto */}
          <div className="text-center mb-8 lg:text-left lg:absolute lg:right-[10%] lg:top-1/2 lg:-translate-y-1/2 lg:z-10 lg:max-w-[490px] lg:mb-0">
            <h2 className="text-[24px] leading-tight mb-4 lg:text-5xl lg:mb-6">
              Diesel e manutenção não são seus únicos gastos. Existem em média{" "}
              <span className="font-bold">
                12 custos invisíveis que{" "}
                <span className="text-[#FF781C]">roubam seu lucro</span> todo mês.
              </span>
            </h2>
            <p className="text-sm font-normal leading-relaxed max-w-[300px] mx-auto lg:text-base lg:max-w-[300px] lg:mx-0">
              Não saber desses custos é o mesmo que jogar dinheiro fora… Descubra pra onde o seu dinheiro tá indo e quanto realmente sobra no fim do mês.
            </p>
          </div>

          {/* Imagem - mobile */}
          <Image
            className="w-[270px] lg:hidden"
            src={bombagasolina}
            alt="Bomba de gasolina e moedas"
          />
        </section>

        {/* Seção laranja de destaque */}
        <section className="bg-[linear-gradient(90deg,_#FF781C_0%,_#000_62.5%)] px-8 py-8 mb-2 lg:py-12">
          <div className="max-w-7xl mx-auto flex flex-col gap-8 lg:flex-row lg:items-center">
            {/* Lado esquerdo */}
            <div className="w-full text-center lg:w-1/2 lg:text-left">
              <h2 className="text-2xl font-bold leading-tight mb-4 lg:text-5xl lg:mb-6">
                MEU AMIGO,<br />
                ENTENDA UMA COISA:
              </h2>

              <p className="text-sm font-normal leading-relaxed max-w-[300px] mx-auto lg:text-base lg:mx-0">
                Seu problema não é falta de esforço. É falta de clareza. E isso tem solução!
              </p>
            </div>

            {/* Lado direito */}
            <div className="w-full flex flex-col items-center text-center gap-2 lg:w-1/2">
              <GlowButton>QUERO TER CONTROLE DOS MEUS GANHOS</GlowButton>

              <p className="text-xs text-gray-300 max-w-[208px] lg:text-base lg:max-w-[560px]">
                Frete Certo é o simulador de viabilidade de operação mais acessado do Brasil.
              </p>
            </div>
          </div>
        </section>

        {/* Testemunhos */}
        <section className="relative flex flex-col items-center justify-center py-12 overflow-hidden">
          {/* Background image */}
          <Image
            src={bgBottom}
            alt=""
            fill
            priority
            className="object-cover object-center opacity-80"
          />

          {/* Overlay escuro */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Conteúdo */}
          <div className="relative z-10 w-full flex flex-col items-center">
            <h2 className="text-2xl font-semibold leading-tight max-w-[230px] text-center mb-12 lg:max-w-[550px] lg:text-5xl">
              Veja o que quem já usa o simulador tem a dizer.
            </h2>

            <div className="w-full flex justify-center py-4">
              <div className="w-full lg:max-w-[1300px]">
                {/* Adicionamos touch-pan-x para melhor deslize no mobile */}
                <div className="flex gap-4 px-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar touch-pan-x">
                  {testemunhos.map((item) => (
                    <div
                      key={item.id}
                      className="snap-center flex-shrink-0 w-[260px] aspect-[9/16] rounded-3xl bg-black overflow-hidden relative shadow-2xl border border-white/10"
                    >
                      {/* Container interno que garante que o player do YT ocupe tudo sem bordas */}
                      <div className="absolute inset-0 w-full h-full pointer-events-auto">
                        <iframe
                          // Usamos a URL de "embed" correta do YouTube
                          src={getEmbedUrl(item.url)}
                          className="absolute top-0 left-0 w-full h-full border-0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title={item.alt}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-12">
              <GlowButton>Acessar simulador agora</GlowButton>
            </div>
          </div>
        </section>

        {/* Comparação: Pros e Contras */}
        <section className="relative flex flex-col items-center justify-center py-4 gap-6 overflow-hidden px-4">
          {/* Título */}

          <div className="relative z-10 flex items-center justify-center">
            <h2 className="text-2xl leading-tight font-bold text-center mb-4 lg:text-5xl lg:mb-8 lg:max-w-[840px]">
              Você tá cuidando do seu negócio ou só rodando pra pagar as contas?
            </h2>
          </div>

          {/* Glow laranja de fundo */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <div className="w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,_rgba(255,120,28,0.35)_0%,_rgba(255,120,28,0.15)_35%,_rgba(255,120,28,0.05)_55%,_transparent_70%)] blur-[120px] lg:w-[800px] lg:h-[800px]" />
          </div>

          {/* Card de comparação */}
          <div className="max-w-6xl relative z-10 border border-[#FF781C] rounded-[20px] flex flex-col gap-8 px-6 py-8 bg-[#212121] lg:px-20 lg:py-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch">
              {/* QUEM USA O FRETE CERTO */}
              <div className="flex flex-col gap-6 p-6">
                <h3 className="font-bold text-center leading-tight text-[28px] lg:text-3xl">
                  QUEM USA O<br />
                  <span className="text-[#FF781C] font-black">FRETE CERTO</span>
                </h3>

                <ul className="flex flex-col gap-4">
                  <li className="flex gap-6 items-center">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-600 shrink-0">
                      <CircleCheckBig color="#73FF1C" size={20} />
                    </div>
                    <p className="text-base leading-relaxed lg:text-xl">
                      Enxerga a operação como um negócio.
                    </p>
                  </li>

                  <li className="flex gap-6 items-center">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-600 shrink-0">
                      <CircleCheckBig color="#73FF1C" size={20} />
                    </div>
                    <p className="text-base leading-relaxed lg:text-xl">
                      Sabe se o mês vai fechar no azul ou no vermelho antes de acabar.
                    </p>
                  </li>

                  <li className="flex gap-6 items-center">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-600 shrink-0">
                      <CircleCheckBig color="#73FF1C" size={20} />
                    </div>
                    <p className="text-base leading-relaxed lg:text-xl">
                      Entende quais fretes realmente sustentam a operação.
                    </p>
                  </li>

                  <li className="flex gap-6 items-center">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-600 shrink-0">
                      <CircleCheckBig color="#73FF1C" size={20} />
                    </div>
                    <p className="text-base leading-relaxed lg:text-xl">
                      Define metas claras de faturamento e lucro.
                    </p>
                  </li>

                  <li className="flex gap-6 items-center">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-600 shrink-0">
                      <CircleCheckBig color="#73FF1C" size={20} />
                    </div>
                    <p className="text-base leading-relaxed lg:text-xl">
                      Corrige rota antes do prejuízo chegar.
                    </p>
                  </li>

                  <li className="flex gap-6 items-center">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-600 shrink-0">
                      <CircleCheckBig color="#73FF1C" size={20} />
                    </div>
                    <p className="text-base leading-relaxed lg:text-xl">
                      Usa dados reais pra decidir.
                    </p>
                  </li>

                  <li className="flex gap-6 items-center">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-600 shrink-0">
                      <CircleCheckBig color="#73FF1C" size={20} />
                    </div>
                    <p className="text-base leading-relaxed lg:text-xl">
                      Trabalha com direção, não com sorte.
                    </p>
                  </li>
                </ul>
              </div>

              {/* Divisor */}
              <div className="w-full h-[2px] bg-gradient-to-r from-[#FF781C]/30 via-[#FF781C] to-[#FF781C]/30 shrink-0 lg:w-[2px] lg:h-auto lg:bg-gradient-to-b" />

              {/* QUEM NÃO USA */}
              <div className="flex flex-col gap-6 p-6">
                <h3 className="font-bold text-center leading-tight text-[28px] lg:text-3xl">
                  QUEM<br />
                  NÃO USA
                </h3>

                <ul className="flex flex-col gap-4">
                  <li className="flex gap-6 items-center">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-600 shrink-0">
                      <CircleX color="#FF4545" size={20} />
                    </div>
                    <p className="text-base leading-relaxed lg:text-xl">
                      Continua tratando o transporte como um trampo qualquer.
                    </p>
                  </li>

                  <li className="flex gap-6 items-center">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-600 shrink-0">
                      <CircleX color="#FF4545" size={20} />
                    </div>
                    <p className="text-base leading-relaxed lg:text-xl">
                      Só descobre no fim do mês que o lucro evaporou.
                    </p>
                  </li>

                  <li className="flex gap-6 items-center">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-600 shrink-0">
                      <CircleX color="#FF4545" size={20} />
                    </div>
                    <p className="text-base leading-relaxed lg:text-xl">
                      Aceita qualquer carga sem saber se vale a pena.
                    </p>
                  </li>

                  <li className="flex gap-6 items-center">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-600 shrink-0">
                      <CircleX color="#FF4545" size={20} />
                    </div>
                    <p className="text-base leading-relaxed lg:text-xl">
                      Trabalha no impulso e torce pra sobrar alguma coisa.
                    </p>
                  </li>

                  <li className="flex gap-6 items-center">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-600 shrink-0">
                      <CircleX color="#FF4545" size={20} />
                    </div>
                    <p className="text-base leading-relaxed lg:text-xl">
                      Descobre os erros quando já tá no buraco.
                    </p>
                  </li>

                  <li className="flex gap-6 items-center">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-600 shrink-0">
                      <CircleX color="#FF4545" size={20} />
                    </div>
                    <p className="text-base leading-relaxed lg:text-xl">
                      Se baseia em achismo e experiência antiga.
                    </p>
                  </li>

                  <li className="flex gap-6 items-center">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-600 shrink-0">
                      <CircleX color="#FF4545" size={20} />
                    </div>
                    <p className="text-base leading-relaxed lg:text-xl">
                      Vive no escuro, repetindo o mesmo erro todo mês.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre o criador */}
        <section className="flex flex-col gap-8 p-4 py-10 lg:flex-row lg:items-center lg:gap-12 lg:px-16">
          {/* Imagem */}
          <div className="relative w-full flex justify-center lg:w-1/2">
            <Image
              src={foto}
              alt="Foto de Hebert, criador do Frete Certo"
              className="rounded-2xl object-cover max-w-[360px] lg:max-w-full"
            />

            {/* Esfumaçado */}
            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-1/3 rounded-2xl bg-gradient-to-t from-black/100 to-transparent" />
          </div>

          {/* Texto */}
          <div className="w-full flex flex-col gap-6 lg:w-2/5 ">
            <h2 className="text-2xl leading-tight font-bold text-center lg:text-left lg:text-5xl">
              <span className="text-[#FF781C]">Quem criou o simulador</span> já viveu exatamente o que você vive hoje.
            </h2>

            <div className="flex flex-col gap-4 text-[#E0E0E0]">
              <p className="text-sm leading-relaxed lg:text-base">
                Assumi a Lag Express no início dos anos 2000. A operação rodava, faturava e entregava, mas sem clareza: não sabíamos se havia lucro ou apenas contas em dia.
              </p>

              <p className="text-sm leading-relaxed lg:text-base">
                Percebi que o problema não era mercado ou concorrência, e sim a falta de visão do custo real. Ao analisar cada número, a empresa ganhou previsibilidade e cresceu de verdade.
              </p>

              <p className="text-sm leading-relaxed lg:text-base">
                Anos depois, foi adquirida por uma multinacional, com aprovação do Cade. Ficou claro: o que trava o transporte não é falta de trabalho, é falta de clareza.
              </p>

              <p className="text-sm leading-relaxed font-medium lg:text-base">
                Por isso criei o Simulador Frete Certo, para mostrar, sem achismo, se a operação dá lucro ou prejuízo.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ />

        {/* CTA Final */}
        <section className="flex flex-col items-center justify-center gap-2 mb-8 text-center px-4 lg:mt-20 lg:gap-4 lg:mb-20">
          <h2 className="text-2xl font-semibold leading-tight max-w-[230px] lg:max-w-[550px] lg:text-5xl">
            Tirou suas dúvidas?
          </h2>
          <p className="text-xs text-gray-300 max-w-[208px] lg:text-base lg:max-w-[560px]">
            Então vem dar o primeiro passo rumo à vida que você merece.
          </p>
          <GlowButton>Acessar simulador agora</GlowButton>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-gray-600 p-4">
        <div className="max-w-7xl mx-auto flex flex-col gap-2 items-center justify-center text-center lg:flex-row lg:justify-between">
          <p className="font-light text-[10px] lg:text-sm">
            Frete Certo 2025 © Todos os direitos reservados
          </p>
          <p className="font-light text-[10px] lg:text-sm">
            Site feito com carinho por <a href="vertil.co">vertil.co</a>
          </p>
        </div>
      </footer>
    </div>
  );
}