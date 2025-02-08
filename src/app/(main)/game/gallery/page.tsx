"use client";
import { useSearchParams } from "next/navigation";
import Card from "~/components/Game/Card";
import { useRouter } from "next/navigation";
interface luminisLookoutData {
    id: string;
    photo: string;
    User: {
        email: string;
        name: string;
    };
}

export const runtime = "edge";
const Gallery = () => {
    const searchParams = useSearchParams();
    const dataString = searchParams.get("data");
    let data: luminisLookoutData[] = [];
    if (dataString) {
        try {
            data = JSON.parse(decodeURIComponent(dataString)) as luminisLookoutData[];
        } catch (error) {
            console.error("Error parsing data:", error);
        }
    }
    const router = useRouter();
    const goToGame = () => {
        router.push(`/game`);
    };
    return (
        <div className="relative flex flex-col items-center justify-center text-[#ffffff] min-h-[100vh] gap-10 pt-32 p-10 bg-[#4D81F1] bg-repeat  bg-contain bg-[url('/assets/events/backgroundImg2.png')]">
            <div className=" flex flex-col xl:flex-row-reverse items-center gap-10 justify-between w-[90%]">
                <div className="relative w-full">
                    {/* Shadow Effect */}
                    <h1 className="absolute top-[4px] left-[4px] font-extrabold text-5xl xl:text-7xl text-center w-[100%] text-black tracking-widest z-0" style={{ fontFamily: "Rocket Thunder" }}>
                        PHOTOS APPROVED
                    </h1>

                    {/* Main Text */}
                    <h1 className="relative text-5xl xl:text-7xl  text-center w-[100%] text-white tracking-widest z-10" style={{ fontFamily: "Rocket Thunder" }}>
                        PH<span className="text-[#FAE00D]">O</span>T<span className="text-[#FAE00D]">O</span>S APPR<span className="text-[#FAE00D]">O</span>VED
                    </h1>
                </div>

                <div className="relative inline-block">
                    {/* Shadow behind the button */}
                    <div className="absolute top-[6px] left-[6px] bg-black rounded-md w-full h-full z-0"></div>

                    {/* Main Button */}
                    <button
                        onClick={goToGame}
                        className="relative flex items-center justify-center gap-2 w-[3rem] h-[3rem] bg-[#F127CC] rounded-md border-black border-2 z-10">
                        <img src="/assets/Game/backArrow.png" className="w-6 h-6" />
                    </button>
                </div>

            </div>
            <div className="flex flex-wrap gap-6 xl:gap-16 w-full items-center justify-center p-4 xl:justify-center">
                {data.map((item, idx) => (
                    <div key={idx}>
                        <Card photo={item.photo} User={item.User}/>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Gallery;
