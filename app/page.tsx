import Image from "next/image";
import bgTop from "../public/bg-top.png";
import bgBottom from "../public/bg-bottom.png";
import { Hero } from "./componet/Hero";
import { BannerCaminhao } from "./componet/BannerCaminhao";

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
        <BannerCaminhao/>

        <section>
          <div>
            <h1>Diesel e manutenção não são seus únicos gastos.Existem em média 12 custos invisíveis que roubam seu lucro todo mês.</h1>
          </div>
        </section>
      </main>
    </div>
  );
}