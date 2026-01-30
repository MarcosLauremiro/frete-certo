import Image from "next/image"
import caminhaobg from "../../public/caminhaobg.png"

export const BannerCaminhao = () => {
    return (
        <section className="flex flex-col justify-center items-center w-full lg:relative lg:h-[600px] lg:overflow-hidden lg:bg-[linear-gradient(270deg,rgba(0,0,0,0)_8.19%,#121212_92.29%)]">
            {/* Texto - mobile center, desktop left */}
            <div className="text-center lg:text-left lg:absolute lg:left-[10%] lg:top-1/2 lg:-translate-y-1/2 lg:z-10 lg:max-w-[500px]">
                <h1 className="text-[32px] font-bold leading-[32px] mb-[10px] lg:text-[48px] lg:leading-[48px] lg:mb-[20px]">
                    O seu lucro não tá <br /> no frete mais caro,<br /> <span className="text-[#FF781C]">tá no Frete Certo.</span>
                </h1>
                <p className="text-[12px] font-normal leading-[12px] mb-[10px] max-w-[300px] lg:text-[16px] lg:leading-[20px] lg:mb-[20px] lg:max-w-[400px] mx-auto lg:mx-0">
                    A maioria acha que tá no lucro até ver o que o simulador revela em poucos minutos.
                </p>
            </div>

            {/* Imagem do caminhão */}
            <div className="relative w-full lg:absolute lg:inset-0 lg:w-full lg:h-full">
                <Image
                    src={caminhaobg}
                    alt="imagem de um caminhao"
                    className="w-full h-auto lg:w-full lg:h-full lg:object-cover lg:[mask-image:linear-gradient(to_right,transparent_0%,black_95%,black_100%)]"
                />

                {/* Gradiente superior - mobile */}
                <div className="pointer-events-none absolute top-0 left-0 w-full h-32
              bg-[linear-gradient(180deg,#121212_0%,rgba(18,18,18,0)_100%)]" />

                {/* Gradiente inferior - mobile */}
                <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32
              bg-[linear-gradient(0deg,#121212_0%,rgba(0,0,0,0)_100%)]" />
            </div>
        </section>
    )
}