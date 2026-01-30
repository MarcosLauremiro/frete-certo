import Image from "next/image";
import bgTop from "../public/bg-top.png"
import bgBottom from "../public/bg-bottom.png"
import logo from "../public/LOGO.png"
import { TriangleAlert } from 'lucide-react';

export default function Home() {
  return (
    <div className="">
      <main className="">
        <section className="h-full w-full flex flex-col items-center justify-center pt-6 lg:pt-16">
          <div className="flex justify-center items-center z-10 mb-8 lg:mb-16">
            <Image src={logo} alt="logo" className="w-40 lg:w-80" />
          </div>
          <div className="h-full w-full text-center flex flex-row justify-center items-center mb-4 lg:mb-10">
            <h1 className="text-[21px] w-[700] leading-[21px] lg:text-[48px] lg:leading-[48px]">A maioria acha que tá no lucro até ver o que o simulador revela em poucos minutos.</h1>
          </div>
          <span className="flex 8px text-center items-center justify-center gap-[3.5px] px-[10.5px] py-[5.25px] lg:gap-[8px] border border-[#FF781C] rounded-full bg-[#FF781C]/15 backdrop-blur-lg mb-4 lg:mb-10 lg:px-[24px] lg:py-[12px]">
            <TriangleAlert className="w-3 lg:w-5" color="#FF781C" />
            <p className="text-[#FF781C] text-[7px] lg:text-[16px]">Essa aula expira em breve</p>
          </span>

          <video className="w-[343px] h-[193px] lg:w-[784px] lg:h-[441px] rounded-[8.75px] lg:rounded-[20px]" width="343" height="193" controls preload="none">
            <source src="https://www.youtube.com/watch?v=mTb8ko1reHQ" type="video/mp4" />
            <track
              src="https://www.youtube.com/watch?v=mTb8ko1reHQ"
              kind="subtitles"
              srcLang="pt"
              label="Portuguese"
            />
            Your browser does not support the video tag.
          </video>
          <div className="max-w-[475px] text-center flex flex-col items-center justify-center">
            <button
              className="
                p-[14px]
                flex items-center justify-center gap-[3.5px]
                rounded-full
                border border-[#FF781C]
                bg-[linear-gradient(90deg,_#FF8430_0%,_#BE4D00_100%)]
                text-white
                uppercase
                text-[12px]
                font-bold
                leading-[12px]
                mb-2
                lg:mb-4
                lg:p-[32px]
                lg:text-[24px]
                lg:leading-[24px]
              "
            >
              Acessar simulador agora
            </button>
            <span className="w-full max-w-[208px] text-[10px] lg:text-[16px] lg:max-w-[475px]">Apenas 2% dos caminhoneiros têm controle total dos seus ganhos.</span>
          </div>
        </section>
        <section className="w-full ">
          <div>
            <h1>
              O seu lucro não tá no frete mais caro, tá no Frete Certo.
            </h1>
            <p>A maioria acha que tá no lucro até ver o que o simulador revela em poucos minutos.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

// display: flex;
// padding: 14px;
// justify-content: center;
// align-items: center;
// gap: 3.5px;
// border-radius: 437.063px;
// border: 0.875px solid #FF781C;
// background: linear-gradient(90deg, #FF8430 0%, #BE4D00 100%);