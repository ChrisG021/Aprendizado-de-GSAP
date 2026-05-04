import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function GsapFrom() {
    const { contextSafe } = useGSAP();

    const handleAnimation = contextSafe(() => {
        gsap.from('#box-2', {
            x: 500,
            duration: 2,
            yoyo: true,
            ease:"power1.in"
        })
    })
    return (
        <div className="p-5 w-full min-h-screen gap-5 flex flex-col justify-center ">
            <h2 className=" text-4xl font-bold">
                GsapFrom
            </h2>
            <p className="text-xl">
                O metodo <em>gsap.from()</em> é utilizado para animar elementos de um novo estado ao estado atual
            </p>

            <p className="text-xl">
                Parecido com o <em>gsap.to()</em> porém ele inicia a animação em um no estado com destino ao estado inicial
            </p>
            <div className="mt-10 w-full h-100 p-5 flex items-end relative bg-neutral-900 rounded-xl">
                <button onClick={() => handleAnimation()} className="absolute top-5 left-5 bg-white text-black px-8 py-1 rounded-xl cursor-pointer transition-transform active:translate-y-1">play</button>
                <div id="box-2" className="bg-(--primary) h-30 w-30 rounded-lg" />
            </div>
        </div>
    );
}