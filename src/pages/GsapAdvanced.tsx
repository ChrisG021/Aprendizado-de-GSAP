import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function GsapAdvanced() {
  const container = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline>(null);

  const [progress,setProgress] = useState<number>(0);
  const progressRef = useRef(null);

  useGSAP(() => {
    tl.current = gsap.timeline({
      defaults: { duration: 0.6 },
      paused: true,
      onUpdate:()=>{
        if(!tl.current) return;
        const p  = tl.current.progress();
        setProgress(p);
        gsap.set(progressRef.current,{
          width:`${p*100}%`
        })
      }
    });
    

    tl.current
      .from(".first", { x: -200, opacity: 0 })
      .from(".second", { y: -80, opacity: 0 }, "<")
      .from(".third", { scale: 0 }, "<0.2")
      .to(".first", { rotation: 360 }, 1)
      .to(".second", { y: -60, ease: "elastic.out" }, "+=0.1")
      .to(".third", { scale: 1.4, ease: "elastic.out" }, "-=0.2")
      .addLabel("final")
      .to(
        ".cube",
        {
          x: 10,
          scale: 1,
          stagger: 0.1,
        },
        "final"
      );
  }, { scope: container } // 🔥 isso substitui gsap.context
  );

  return (
    <div
      ref={container}
      className="p-5 w-full min-h-screen gap-5 flex flex-col justify-center"
    >
      <h2 className="text-4xl font-bold">Timeline  {Math.round(progress*10)*10}%</h2>
      <p className="text-xl">
        Organização de múltiplos <em>tween engine </em> utilizando propriedades extras dentro de uma timeline que podemos interagir. <br />
        <em>gsap.timeline()</em> funciona parecido com os outros metodos apresentados porém ele funciona como uma cascata de multiplas animações saindo de um estado, para um novo, para outro e vai seguindo.
      </p>
      <div className="overflow-hidden mt-10 w-full h-100 p-5 flex gap-5 items-end relative bg-neutral-900 rounded-xl">
        {/* da pra fazer com before/after mmas optei por 2 */}

        <span className="max-w-full w-full absolute top-0 left-0 h-1 z-9 bg-neutral-700"/>
        <span ref={progressRef} className="max-w-full w-0 bg-(--primary) absolute top-0 left-0 h-1 z-10"/>


        <div className="cube first bg-blue-500 h-30 w-30 rounded-lg" />
        <div className="cube second bg-amber-300 h-30 w-30 rounded-lg" />
        <div className="cube third bg-red-500 h-30 w-30 rounded-lg" />
      </div>

      <div className="flex gap-5">
        <button onClick={() => tl.current?.play()}>Play</button>
        <button onClick={() => tl.current?.pause()}>Pause</button>
        <button onClick={() => tl.current?.reverse()}>Reverse</button>
        <button onClick={() => tl.current?.restart()}>Restart</button>
        <button onClick={() => tl.current?.seek(1)}>Seek 1s</button>
        {/* pula para o label especifico */}
        <button onClick={() => tl.current?.seek("final")}>Seek final</button>
        
        <button onClick={() => console.log(tl.current?.progress(0.5))}>
          Progress 50%
        </button>
        <button onClick={() => tl.current?.timeScale(2)}>
          Time scale x2
        </button>
      </div>
    </div>
  );
}