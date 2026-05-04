import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function GsapTo() {
    const { contextSafe } = useGSAP();

    const handleAnimation = contextSafe(() => {
        gsap.to('#box', {
            x: 500,
            duration:4,
            yoyo:true,
            borderRadius:100,
        })
    })
    // function handleAnimation() {
    //     gsap.to('#box', {
    //         x: 100
    //     })
    // }
    return (
        <div className="p-5 w-full min-h-screen gap-5 flex flex-col justify-center ">
            <h2 className=" text-4xl font-bold">
                GsapTo
            </h2>
            <p className="lg:max-w-200 text-xl">
                O metodo <em>gsap.to()</em> é utilizado para animar elementos da estado atual a um novo estado
            </p>
            <p className="lg:max-w-200 text-xl">
                O <em>gsap.to()</em> é extremamente parecido ao metodo <em>gsap.from()</em>,porém enquanto o primeiro anima do atual ao novo estado, o outro anima de um estado novo ao atual estado
            </p>
            <div className="mt-10 w-full h-100 p-5 flex items-end relative bg-neutral-900 rounded-xl">
                <button onClick={() => handleAnimation()} className="absolute top-5 left-5 bg-white text-black px-8 py-1 rounded-xl cursor-pointer transition-transform active:translate-y-1">play</button>
                <div id="box" className="bg-(--primary) h-30 w-30 rounded-lg" />
            </div>
        </div>
    );
}