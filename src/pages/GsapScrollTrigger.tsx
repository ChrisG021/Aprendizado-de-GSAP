import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function GsapScrollTrigger() {
    const scrollRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const boxes = gsap.utils.toArray<HTMLElement>(".gsap-box");

        boxes.forEach((box) => {
            gsap.to(box, {
                x:300,
                rotation: 360,
                scrollTrigger: {
                    trigger: box,
                    start: "bottom bottom", 
                    end: "top 20%",
                    scrub: true
                }
            });
        });
    });

    return (

        <div className="p-5 w-full min-h-screen gap-5 flex flex-col justify-center">
            <h2 className="text-4xl font-bold">
                Scroll Trigger
            </h2>
            <p className="text-xl">
                O gatilho ao rolar a página é um plugin a leitura da pagina para criar animações que reagem ao posição da barra de rolagem.
            </p>

            <div ref={scrollRef} className="mt-10 w-full h-100 gap-5 p-5 flex items-end relative bg-neutral-900 rounded-xl">
                {/* Adicionada a classe "gsap-box" para facilitar a seleção pelo GSAP */}
                <div id="scroll-green" className="gsap-box bg-(--primary) h-30 w-30 rounded-lg" />
                <div id="scroll-blue" className="gsap-box bg-blue-500 h-30 w-30 rounded-lg" />
            </div>
        </div>
    );
}