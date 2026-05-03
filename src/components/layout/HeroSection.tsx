import { FaArrowDown, FaBroom, FaHourglass, FaLightbulb } from "react-icons/fa";

export default function Hero() {
    const items = [
        { label: "ideias", icon: FaLightbulb },
        { label: "tempo", icon: FaHourglass },
        { label: "animações", icon: FaBroom },
    ];

    return (
        <div className="p-5 w-full min-h-screen flex flex-col justify-center ">
            <h1 className="text-4xl font-bold leading-relaxed">
                Transformando ideias

                <br />
                em experiências com o <em className="text-green-500 not-italic">GSAP</em>
            </h1>

            <div className=" absolute bottom-10 flex flex-col items-center gap-5 left-1/2">
                <p>Keep scrolling</p>
                <div className="animate-bounce">
                    <FaArrowDown />
                </div>
            </div>
        </div>
    );
}