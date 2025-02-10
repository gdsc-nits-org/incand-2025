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
      const res = await axios.get<luminisLookoutGalleryApiResponse>(
        `${env.NEXT_PUBLIC_API_URL}/api/submissions/accepted`,
      );
      setData(res.data.msg);
    }
    void fetchData();
  }, [setData]);

  const goToGallery = () => {
    router.push(
      `/game/gallery`,
    );
  };
  if (data.length > 0) {
    return (
      <div className="relative flex flex-col items-center justify-center gap-10 bg-[#4D81F1] bg-[url('/assets/events/backgroundImg2.png')] p-10 text-[#ffffff]">
        <div className="flex w-[90%] flex-col items-center justify-between gap-10 xl:flex-row">
          <div className="relative w-full">
            {/* Shadow Effect */}
            <h1
              className="absolute left-[4px] top-[4px] z-0 w-[100%] text-left text-5xl font-extrabold tracking-widest text-black xl:text-7xl"
              style={{ fontFamily: "Rocket Thunder" }}
            >
              PHOTOS APPROVED
            </h1>

            {/* Main Text */}
            <h1
              className="relative z-10 w-[100%] text-left text-5xl tracking-widest text-white xl:text-7xl"
              style={{ fontFamily: "Rocket Thunder" }}
            >
              PH<span className="text-[#FAE00D]">O</span>T
              <span className="text-[#FAE00D]">O</span>S APPR
              <span className="text-[#FAE00D]">O</span>VED
            </h1>
          </div>

          <div className="relative inline-block">
            {/* Shadow behind the button */}
            <div className="absolute left-[6px] top-[6px] z-0 h-full w-full rounded-md bg-black"></div>

            {/* Main Button */}
            <button
              onClick={goToGallery}
              className="relative z-10 flex items-center justify-center gap-2 text-nowrap rounded-md border-2 border-black bg-[#F127CC] px-4 py-2 pl-12 pr-6 text-xl font-bold tracking-widest"
              style={{ fontFamily: "Rocket Thunder" }}
            >
              <p>SEE ALL</p>
              <img src="/assets/Game/Arrow.png" className="h-4 w-6" />
            </button>
          </div>
        </div>
        <div className="flex h-[fit] w-[100%] flex-wrap items-center justify-center gap-10 rounded-lg border-[6px] border-black bg-white p-8 xl:w-[90%] xl:justify-between">
          {data.slice(0, 4).map((item, idx) => (
            <div
              key={idx}
              className="scale-110 scale-x-125 lg:scale-100 lg:scale-x-100"
            >
              <Card photo={item.photo} User={item.User} />
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default ApprovedPhotos;
