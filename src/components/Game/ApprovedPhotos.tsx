"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Use next/navigation for app router
import { env } from "~/env";
import axios from "axios";
import Card from "./Card";
interface luminisLookoutData {
    id: string;
    photo: string;
    User: {
        email: string;
        name: string;
    };
}
interface luminisLookoutGalleryApiResponse {
    status: number;
    msg: luminisLookoutData[];
}

const ApprovedPhotos = () => {
    const [data, setData] = useState<luminisLookoutData[]>([]);
    const router = useRouter();

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get<luminisLookoutGalleryApiResponse>(`${env.NEXT_PUBLIC_API_URL}/api/submissions/accepted`);
            setData(res.data.msg);
        }
        void fetchData();
    }, [setData]);

    const goToGallery = () => {
        router.push(`/game/gallery?data=${encodeURIComponent(JSON.stringify(data))}`);
    };

    return (
        <div className="relative flex flex-col items-center justify-center text-[#ffffff] gap-10 p-10 bg-[#4D81F1] bg-[url('/assets/events/backgroundImg2.png')]">
            <div className=" flex flex-col xl:flex-row items-center gap-10 justify-between w-[90%]">
                <div className="relative w-full">
                    {/* Shadow Effect */}
                    <h1 className="absolute top-[4px] left-[4px] font-extrabold text-5xl xl:text-7xl text-left w-[100%] text-black tracking-widest z-0" style={{ fontFamily: "Rocket Thunder" }}>
                        PHOTOS APPROVED
                    </h1>

                    {/* Main Text */}
                    <h1 className="relative text-5xl xl:text-7xl  text-left w-[100%] text-white tracking-widest z-10" style={{ fontFamily: "Rocket Thunder" }}>
                        PH<span className="text-[#FAE00D]">O</span>T<span className="text-[#FAE00D]">O</span>S APPR<span className="text-[#FAE00D]">O</span>VED
                    </h1>
                </div>

                <div className="relative inline-block">
                    {/* Shadow behind the button */}
                    <div className="absolute top-[6px] left-[6px] bg-black rounded-md w-full h-full z-0"></div>

                    {/* Main Button */}
                    <button
                        onClick={goToGallery}
                        className="relative flex items-center justify-center gap-2 bg-[#F127CC] px-4 py-2 pl-12 pr-6 rounded-md border-black border-2 text-xl text-nowrap tracking-widest font-bold z-10"
                        style={{ fontFamily: "Rocket Thunder" }}>
                        <p>SEE ALL</p>
                        <img src="/assets/Game/Arrow.png" className="w-6 h-4" />
                    </button>
                </div>

            </div>
            <div className=" flex flex-wrap gap-10 w-[100%] xl:w-[90%] h-[fit] items-center justify-center xl:justify-between bg-white rounded-lg border-[6px] border-black p-8">
                {
                    data.slice(0, 4).map((item, idx) => (
                        <div key={idx}>
                            <Card photo={item.photo} User={item.User} scale={75} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ApprovedPhotos;
