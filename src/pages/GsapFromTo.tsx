import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function GsapFromTo() {
    const { contextSafe } = useGSAP();

    const handleAnimation = contextSafe(() => {
        gsap.fromTo('#box-3', {
            x: 0,

        }, {
            x: 500,
            duration: 4,
            yoyo: true,
            ease: "elastic.out"
        })
    })
    return (
        <div className="p-5 w-full min-h-screen gap-5 flex flex-col justify-center ">
            <h2 className=" text-4xl font-bold">
                GsapFromTo
            </h2>
            <p className="text-xl">
                O método <em>gsap.fromTo()</em> uni ambos os métodos , podendo controlar tanto o estado incial até o estado final da animação. Podendo especificar como voce quer comecar e como quer terminar.
            </p>

            <p className="text-xl">
                União entre <em>gsap.to()</em> e <em>gsap.From()</em> em um único método.
            </p>
            <div className="mt-10 w-full h-100 p-5 flex items-end relative bg-neutral-900 rounded-xl">
                <button onClick={() => handleAnimation()} className="absolute top-5 left-5 bg-white text-black px-8 py-1 rounded-xl cursor-pointer transition-transform active:translate-y-1">play</button>
                <div id="box-3" className="bg-(--primary) h-30 w-30 rounded-lg" />
            </div>
        </div>
    );
}