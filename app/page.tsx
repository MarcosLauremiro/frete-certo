import Image from "next/image";
import bgTop from "../public/bg-top.png";
import bgBottom from "../public/bg-bottom.png";
import { Hero } from "./componet/Hero";
import { BannerCaminhao } from "./componet/BannerCaminhao";
import bombagasolina from "../public/Bombagasolina.png"
import GlowButton from "./componet/Button";
import { CircleCheckBig, CircleX, Plus } from "lucide-react";
import foto from "../public/Foto Hebert.png"
import FAQ from "./componet/Faq";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute top-0 right-0 z-0 pointer-events-none">
        <Image
          src={bgTop}
          alt=""
          className="w-[300px] lg:w-[700px] xl:w-[900px] h-auto opacity-80"
          priority
          width={900}
          height={900}
        />
      </div>
      <div className="absolute top-90 lg:top-100 left-0 z-0 pointer-events-none">
        <Image
          src={bgBottom}
          alt=""
          className="w-[300px] lg:w-[700px] xl:w-[900px] h-auto opacity-80"
          priority
          width={900}
          height={900}
        />
      </div>

      <main className="relative z-10">
        <Hero />
        <BannerCaminhao />

        {/* bomba de combustivel.*/}
        <section className="flex flex-col justify-center items-center px-4 w-full lg:relative lg:h-[600px] lg:overflow-hidden">
          {/* Imagem - desktop com sombra laranja - MOVIDA PARA CIMA */}
          <div className="hidden lg:block lg:absolute lg:left-[10%] lg:top-1/2 lg:-translate-y-1/2 lg:z-0">
            {/* Sombra laranja */}
            <div className="absolute inset-0 bg-[#FF781C] blur-[60px] opacity-40 scale-80 -z-10"></div>

            <Image
              className="w-[400px] lg:w-[580px] relative"
              src={bombagasolina}
              alt="imagem de uma bomba de gasolina e algumas moedas"
            />
          </div>

          {/* Texto - mobile center, desktop right */}
          <div className="text-center lg:text-left lg:absolute lg:right-[10%] lg:top-1/2 lg:-translate-y-1/2 lg:z-10 lg:max-w-[490px]">
            <h1 className="text-[32px] leading-[32px] mb-[10px] lg:text-[48px] lg:leading-[48px] lg:mb-[20px]">
              Diesel e manutenção não são seus únicos gastos. Existem em média <span className="font-bold">12 custos invisíveis que <span className="text-[#FF781C]">roubam seu lucro</span> todo mês.</span>
            </h1>
            <p className="text-[12px] font-normal leading-[12px] mb-[10px] max-w-[300px] lg:text-[16px] lg:leading-[20px] lg:mb-[20px] lg:max-w-[300px] mx-auto lg:mx-0">
              Não saber desses custos é o mesmo que jogar dinheiro fora…Descubra pra onde o seu dinheiro tá indo e quanto realmente sobra no fim do mês.
            </p>
          </div>

          {/* Imagem - mobile */}
          <Image
            className="w-[270px] lg:hidden"
            src={bombagasolina}
            alt="imagem de uma bomba de gasolina e algumas moedas"
          />
        </section>

        {/*pequena sessão laranja*/}
        <section className="bg-[linear-gradient(90deg,_#FF781C_0%,_#000_62.5%)] px-[30px] py-[20px] mb-12 lg:py-[40px]">
          <div className="max-w-7xl mx-auto flex flex-col gap-6 lg:flex-row lg:items-center">

            {/* ESQUERDA */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-[18px] font-bold leading-[18px] mb-[10px]
                     lg:text-[46px] lg:leading-[46px] lg:mb-[20px]">
                MEU AMIGO,<br /> ENTENDA UMA COISA:
              </h1>

              <p className="text-[12px] font-normal leading-[12px] max-w-[300px] mx-auto
                    lg:text-[16px] lg:leading-[20px] lg:mx-0">
                Seu problema não é falta de esforço.
                É falta de clareza. E isso tem solução!
              </p>
            </div>

            {/* DIREITA */}
            <div className="w-full lg:w-1/2 flex flex-col items-center text-center gap-1">
              <GlowButton>
                QUERO TER CONTROLE DO MEUS GANHOS
              </GlowButton>

              <p className="text-[8px] text-gray-300 max-w-[208px]
                    lg:text-base lg:max-w-[560px]">
                Frete Certo é o simulador de viabilidade de operação mais acessado do Brasil.
              </p>
            </div>

          </div>
        </section>

        {/*testemunhos*/}
        <section className="relative flex flex-col items-center justify-center py-12 overflow-hidden">
          {/* Background image */}
          <Image
            src={bgBottom}
            alt="video background"
            fill
            priority
            className="object-cover object-center opacity-80"
          />

          {/* Overlay escuro */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Conteúdo */}
          <div className="relative z-10 w-full flex flex-col items-center">
            <h1 className="text-[21px] font-semibold leading-[28px] max-w-[230px] lg:max-w-[550px] lg:text-[48px] lg:leading-[56px] text-center mb-8">
              Veja o que quem já usa o simulador tem a dizer.
            </h1>

            <div className="w-full flex justify-center">
              <div className="w-full lg:max-w-[1200px] overflow-x-auto">
                <div className="flex gap-6 px-4 lg:px-0 snap-x snap-mandatory lg:justify-center">
                  {[1, 2, 3, 4].map((_, index) => (
                    <video
                      key={index}
                      className="
                snap-center
                flex-shrink-0
                w-[220px]
                sm:w-[240px]
                lg:w-[280px]
                aspect-[9/16]
                rounded-[12px]
                lg:rounded-[20px]
                bg-black
              "
                      controls
                      preload="none"
                    >
                      <source src="/video.mp4" type="video/mp4" />
                      Seu navegador não suporta a tag de vídeo.
                    </video>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10">
              <GlowButton>Acessar simulador agora</GlowButton>
            </div>
          </div>
        </section>

        {/*pros e contras*/}
        <section className="relative flex flex-col items-center justify-center py-16 gap-4 overflow-hidden p-4">
          <div className="relative z-10 flex items-center justify-center">
            <h1 className="text-[22px] leading-[22px] font-bold mb-[10px] lg:text-[48px] lg:leading-[48px] lg:mb-[20px] lg:max-w-[840px] text-center">Você tá cuidando do seu negócio ou só rodando pra pagar as contas?</h1>
          </div>

          <div
            className="
              absolute
              inset-0
              flex
              justify-center
              items-center
              pointer-events-none
            "
          >
            <div
              className="
                w-[800px] h-[800px]
                lg:w-[800px] lg:h-[800px]
                rounded-full
                bg-[radial-gradient(circle,_rgba(255,120,28,0.35)_60%,_rgba(255,120,28,0.15)_35%,_rgba(255,120,28,0.05)_55%,_transparent_70%)]
                blur-[120px]
              "
            />
          </div>
          <div className="relative z-10 border border-[#FF781C] rounded-[20px] flex flex-col gap-[30px] px-[24px] py-[12px] lg:px-[84px] lg:py-[40px] bg-[#212121]">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch">
              <ul className="flex flex-col gap-4 p-6">
                <h1 className="font-bold text-center leading-[16px] text-[16px] lg:text-[28px] lg:leading-[28px]">QUEM USA O<br /> <span className="text-[#FF781C] font-black">FRETE CERTO</span></h1>
                <li className="flex gap-6 items-center ">
                  <div className="flex items-center justify-center 
                  w-9 h-9 
                  rounded-full 
                  border border-gray-600 
                  shrink-0">
                    <CircleCheckBig color="#73FF1C" size={20} />
                  </div>
                  <p className="text-[16px] leading-[16px] lg:text-[20px] lg:leading-[20px]">Enxerga a operação como um negócio.</p>
                </li>

                <li className="flex gap-6 items-center ">
                  <div className="flex items-center justify-center 
                  w-9 h-9 
                  rounded-full 
                  border border-gray-600 
                  shrink-0">
                    <CircleCheckBig color="#73FF1C" size={20} />
                  </div>
                  <p className="text-[16px] leading-[16px] lg:text-[20px] lg:leading-[20px]">Sabe se o mês vai fechar no azul ou no vermelho antes de acabar.</p>
                </li>

                <li className="flex gap-6 items-center ">
                  <div className="flex items-center justify-center 
                  w-9 h-9 
                  rounded-full 
                  border border-gray-600 
                  shrink-0">
                    <CircleCheckBig color="#73FF1C" size={20} />
                  </div>
                  <p className="text-[16px] leading-[16px] lg:text-[20px] lg:leading-[20px]">Entende quais fretes realmente sustentam a operação.</p>
                </li>

                <li className="flex gap-6 items-center ">
                  <div className="flex items-center justify-center 
                  w-9 h-9 
                  rounded-full 
                  border border-gray-600 
                  shrink-0">
                    <CircleCheckBig color="#73FF1C" size={20} />
                  </div>
                  <p className="text-[16px] leading-[16px] lg:text-[20px] lg:leading-[20px]">Define metas claras de faturamento e lucro.</p>
                </li>

                <li className="flex gap-6 items-center ">
                  <div className="flex items-center justify-center 
                  w-9 h-9 
                  rounded-full 
                  border border-gray-600 
                  shrink-0">
                    <CircleCheckBig color="#73FF1C" size={20} />
                  </div>
                  <p className="text-[16px] leading-[16px] lg:text-[20px] lg:leading-[20px]">Corrige rota antes do prejuízo chegar.</p>
                </li>

                <li className="flex gap-6 items-center ">
                  <div className="flex items-center justify-center 
                  w-9 h-9 
                  rounded-full 
                  border border-gray-600 
                  shrink-0">
                    <CircleCheckBig color="#73FF1C" size={20} />
                  </div>
                  <p className="text-[16px] leading-[16px] lg:text-[20px] lg:leading-[20px]">Usa dados reais pra decidir.</p>
                </li>

                <li className="flex gap-6 items-center ">
                  <div className="flex items-center justify-center 
                  w-9 h-9 
                  rounded-full 
                  border border-gray-600 
                  shrink-0">
                    <CircleCheckBig color="#73FF1C" size={20} />
                  </div>
                  <p className="text-[16px] leading-[16px] lg:text-[20px] lg:leading-[20px]">Trabalha com direção, não com sorte.</p>
                </li>
              </ul>

              <div
                className="
                  w-full h-[2px]
                  lg:w-[2px] lg:h-auto
                  bg-gradient-to-r 
                  lg:bg-gradient-to-b
                  from-[#FF781C]/30
                  via-[#FF781C]
                  to-[#FF781C]/30
                  shrink-0
                "
              />

              <ul className="flex flex-col gap-4 p-6">
                <h1 className="font-bold text-center leading-[16px] text-[16px] lg:text-[28px] lg:leading-[28px]">QUEM<br /> NÃO USA</h1>
                <li className="flex gap-6 items-center ">
                  <div className="flex items-center justify-center 
                    w-9 h-9 
                    rounded-full 
                    border border-gray-600 
                    shrink-0">
                    <CircleX color="#FF4545" size={20} />
                  </div>
                  <p className="text-[16px] leading-[16px] lg:text-[20px] lg:leading-[20px]">Continua tratando o transporte como um trampo qualquer.</p>
                </li>

                <li className="flex gap-6 items-center ">
                  <div className="flex items-center justify-center 
                    w-9 h-9 
                    rounded-full 
                    border border-gray-600 
                    shrink-0">
                    <CircleX color="#FF4545" size={20} />
                  </div>
                  <p className="text-[16px] leading-[16px] lg:text-[20px] lg:leading-[20px]">Só descobre no fim do mês que o lucro evaporou.</p>
                </li>

                <li className="flex gap-6 items-center ">
                  <div className="flex items-center justify-center 
                    w-9 h-9 
                    rounded-full 
                    border border-gray-600 
                    shrink-0">
                    <CircleX color="#FF4545" size={20} />
                  </div>
                  <p className="text-[16px] leading-[16px] lg:text-[20px] lg:leading-[20px]">Aceita qualquer carga sem saber se vale a pena.</p>
                </li>

                <li className="flex gap-6 items-center ">
                  <div className="flex items-center justify-center 
                    w-9 h-9 
                    rounded-full 
                    border border-gray-600 
                    shrink-0">
                    <CircleX color="#FF4545" size={20} />
                  </div>
                  <p className="text-[16px] leading-[16px] lg:text-[20px] lg:leading-[20px]">Trabalha no impulso e torce pra sobrar alguma coisa.</p>
                </li>

                <li className="flex gap-6 items-center ">
                  <div className="flex items-center justify-center 
                    w-9 h-9 
                    rounded-full 
                    border border-gray-600 
                    shrink-0">
                    <CircleX color="#FF4545" size={20} />
                  </div>
                  <p className="text-[16px] leading-[16px] lg:text-[20px] lg:leading-[20px]">Descobre os erros quando já tá no buraco.</p>
                </li>

                <li className="flex gap-6 items-center ">
                  <div className="flex items-center justify-center 
                    w-9 h-9 
                    rounded-full 
                    border border-gray-600 
                    shrink-0">
                    <CircleX color="#FF4545" size={20} />
                  </div>
                  <p className="text-[16px] leading-[16px] lg:text-[20px] lg:leading-[20px]">Se baseia em achismo e experiência antiga.</p>
                </li>

                <li className="flex gap-6 items-center ">
                  <div className="flex items-center justify-center 
                    w-9 h-9 
                    rounded-full 
                    border border-gray-600 
                    shrink-0">
                    <CircleX color="#FF4545" size={20} />
                  </div>
                  <p className="text-[16px] leading-[16px] lg:text-[20px] lg:leading-[20px]">Vive no escuro, repetindo o mesmo erro todo mês.</p>
                </li>
              </ul>
            </div>

          </div>
        </section>

        {/** sobre */}
        <section className="flex flex-col gap-6 p-4 lg:flex-row py-16 lg:items-center lg:gap-12 lg:px-16">
          {/* Imagem */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src={foto}
              alt="foto herbet"
              className="rounded-2xl object-cover max-w-[360px] lg:max-w-full"
            />
          </div>

          {/* Texto */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <h1 className="text-[22px] leading-[26px] font-bold text-center lg:text-left lg:text-[46px] lg:leading-[48px]">
              <span className="text-[#FF781C]">Quem criou o simulador</span> já viveu
              exatamente o que você vive hoje.
            </h1>

            <div className="flex flex-col gap-4 text-[#E0E0E0]">
              <p className="text-[12px] leading-[16px] lg:text-[16px] lg:leading-[24px]">
                Assumi a Lag Express no início dos anos 2000. A operação rodava,
                faturava e entregava, mas sem clareza: não sabíamos se havia lucro
                ou apenas contas em dia.
              </p>

              <p className="text-[12px] leading-[16px] lg:text-[16px] lg:leading-[24px]">
                Percebi que o problema não era mercado ou concorrência, e sim a
                falta de visão do custo real. Ao analisar cada número, a empresa
                ganhou previsibilidade e cresceu de verdade.
              </p>

              <p className="text-[12px] leading-[16px] lg:text-[16px] lg:leading-[24px]">
                Anos depois, foi adquirida por uma multinacional, com aprovação do
                Cade. Ficou claro: o que trava o transporte não é falta de trabalho,
                é falta de clareza.
              </p>

              <p className="text-[12px] leading-[16px] lg:text-[16px] lg:leading-[24px] font-medium">
                Por isso criei o Simulador Frete Certo, para mostrar, sem achismo,
                se a operação dá lucro ou prejuízo.
              </p>
            </div>
          </div>
        </section>

        {/**duvidas */}   
        <FAQ/>
        
        {/**call to action last */}
        <section className="flex flex-col items-center justify-center gap-1 mb-5 text-center lg:mt-20 lg:gap-4 lg:mb-18">
          <h1 className="text-[21px] font-semibold leading-[28px] max-w-[230px] lg:max-w-[550px] lg:text-[48px] lg:leading-[56px] text-center">Tirou suas dúvidas?</h1>
          <p className="text-[8px] text-gray-300 max-w-[208px] lg:text-base lg:max-w-[560px]">Então vem dar o primeiro passo rumo à vida que você merece.</p>
          <GlowButton>Acessar simulador agora</GlowButton>
        </section>
      </main>
      
      <footer className="w-full border-t border-gray-600 flex justify-between items-center p-4">
        <h1 className="font-light text-[6px] lg:text-[14px]">Frete Certo 2025 © Todos os direitos reservados</h1>
        <h1 className="font-light text-[6px] lg:text-[14px]">Site feito com carinho por @vini.omoreira</h1>
      </footer>
    </div>
  );
}