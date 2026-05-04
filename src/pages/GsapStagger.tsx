import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function GsapStagger() {
    const { contextSafe } = useGSAP();

    const handleAnimation = contextSafe(() => {
        gsap.to('.loading',{
            y: -20,
            repeat:-1,
            yoyo:true,
            stagger: 0.1,
            ease:"power.in"
        })
    })

    return (
        <div className="p-5 w-full min-h-screen gap-5 flex flex-col justify-center ">
            <h2 className=" text-4xl font-bold">
                GsapStagger
            </h2>
            <p className="lg:max-w-200 text-xl">
                GSAP stagger é uma freature que permite o usuário aplicar animações com um delay ordenado a um grupo de elementos
            </p>

            <div className="mt-10 w-full h-100 p-5 gap-5 flex items-end relative bg-neutral-900 rounded-xl">
                <button onClick={() => handleAnimation()} className="absolute top-5 left-5 bg-white text-black px-8 py-1 rounded-xl cursor-pointer transition-transform active:translate-y-1">play</button>
                <div className="bg-indigo-300 loading  h-40 flex-1 rounded-lg"></div>
                <div className="bg-indigo-400 loading  h-40 flex-1 rounded-lg"></div>
                <div className="bg-indigo-500 loading  h-40 flex-1 rounded-lg"></div>
                <div className="bg-indigo-600 loading  h-40 flex-1 rounded-lg"></div>
                <div className="bg-indigo-700 loading  h-40 flex-1 rounded-lg"></div>
                <div className="bg-indigo-800 loading  h-40 flex-1 rounded-lg"></div>
            </div>
        </div>
    );
}