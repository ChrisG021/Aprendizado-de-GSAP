import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registra o plugin de scroll do GSAP
gsap.registerPlugin(ScrollTrigger);

export default function GsapIdeia() {
    // Referências para o GSAP encontrar os elementos no DOM
    const containerRef = useRef(null);
    const cubeRef = useRef(null);

    useGSAP(() => {
        gsap.to(cubeRef.current, {
            rotateY: 180,
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: 'bottom bottom',
                scrub: true,
            }
        })
    },{scope:containerRef})


    return (
        <>
            <style>{`
                .scene {
                    perspective: 1000px;
                }

                .cube {
                    position: sticky;
                    top: 100px; /* Dei um espacinho do topo para não colar muito */
                    width: 160px;
                    height: 256px;
                    transform-style: preserve-3d;
                    /* Removi o transition daqui para não brigar com o GSAP! */
                }

                /* Estilos base para todas as faces */
                .face {
                    position: absolute;
                    background-color: var(--primary, #3b82f6); /* fallback de cor caso a var não exista */
                    border: 2px solid white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-weight: bold;
                    color: white;
                }

                /* Frente e Trás */
                .face-front, .face-back {
                    inset: 0;
                    opacity: 0.8;
                }
                .face-front { transform: translateZ(48px); }
                .face-back  { transform: rotateY(180deg) translateZ(48px); }

                /* Laterais (Esquerda e Direita) */
                .face-left, .face-right {
                    top: 0;
                    left: 50%;
                    width: 96px;
                    height: 256px;
                    margin-left: -48px;
                    opacity: 0.9;
                }
                .face-right { transform: rotateY(90deg) translateZ(80px); }
                .face-left  { transform: rotateY(-90deg) translateZ(80px); }

                /* Topo e Fundo */
                .face-top, .face-bottom {
                    top: 50%;
                    left: 0;
                    width: 160px;
                    height: 96px;
                    margin-top: -48px;
                }
                .face-top    { transform: rotateX(90deg) translateZ(128px); }
                .face-bottom { transform: rotateX(-90deg) translateZ(128px); }
            `}</style>

            {/* Adicionei a ref aqui no container */}
            <div ref={containerRef} className="p-5 relative scene w-full min-h-[200vh]">

                {/* Adicionei a ref aqui no cubo e removi o flex do pai pra garantir o sticky */}
                <div ref={cubeRef} className="cube mx-auto mt-20">
                    <div className="face face-front">Frente</div>
                    <div className="face face-back">Trás</div>
                    <div className="face face-right">Dir</div>
                    <div className="face face-left">Esq</div>
                    <div className="face face-top">Topo</div>
                    <div className="face face-bottom">Fundo</div>
                </div>

            </div>
        </>
    );
}