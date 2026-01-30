import Image from "next/image";
import logo from "../../public/LOGO.png";
import { TriangleAlert } from "lucide-react";
import GlowButton from "./Button";

export const Hero = () => {
    return (
        <section className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-6 lg:py-16">
            {/* Logo */}
            <div className="mb-8 lg:mb-16">
                <Image
                    src={logo}
                    alt="Logo"
                    className="w-40 lg:w-80"
                    priority
                />
            </div>

            {/* Heading */}
            <div className="w-full max-w-4xl text-center mb-4 lg:mb-10">
                <h1 className="text-[21px] font-semibold leading-[28px] lg:text-[48px] lg:leading-[56px]">
                    A maioria acha que tá no lucro até ver o que o simulador revela em poucos minutos.
                </h1>
            </div>

            {/* Alert Badge */}
            <div className="flex items-center justify-center gap-[3.5px] lg:gap-2 px-[10.5px] py-[5.25px] lg:px-6 lg:py-3 mb-4 lg:mb-10 border border-[#FF781C] rounded-full bg-[#FF781C]/15 backdrop-blur-lg">
                <TriangleAlert className="w-3 h-3 lg:w-5 lg:h-5" color="#FF781C" />
                <p className="text-[#FF781C] text-[7px] lg:text-base font-medium">
                    Essa aula expira em breve
                </p>
            </div>

            {/* Video */}
            <video
                className="w-full max-w-[343px] h-auto aspect-video lg:max-w-[784px] rounded-[8.75px] lg:rounded-[20px] mb-6 lg:mb-8"
                controls
                preload="none"
            >
                <source src="https://www.youtube.com/watch?v=mTb8ko1reHQ" type="video/mp4" />
                <track
                    src="/path-to-subtitles.vtt"
                    kind="subtitles"
                    srcLang="pt"
                    label="Português"
                />
                Seu navegador não suporta a tag de vídeo.
            </video>

            {/* CTA Section */}
            <div className="w-full max-w-[475px] text-center flex flex-col items-center justify-center gap-4">
                <GlowButton>Acessar simulador agora</GlowButton>
                <p className="text-[10px] lg:text-base text-gray-300 max-w-[208px] lg:max-w-full">
                    Apenas 2% dos caminhoneiros têm controle total dos seus ganhos.
                </p>
            </div>
        </section>
    )
}