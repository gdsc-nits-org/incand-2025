"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useSearchParams } from "next/navigation";
import Card from "~/components/Game/Card";
import { useRouter } from "next/navigation";
import { useEffect,useState } from "react";
import axios from "axios";
import { env } from "~/env";
interface LuminisLookoutData {
  id: string;
  photo: string;
  User: {
    email: string;
    name: string;
  };
}

interface luminisLookoutGalleryApiResponse {
  status: number;
  msg: LuminisLookoutData[];
}

gsap.registerPlugin(ScrollTrigger);
export const runtime = "edge";

const Gallery = () => {
  // const searchParams = useSearchParams();
  // const dataString = searchParams.get("data");
  // let data: LuminisLookoutData[] = [];

  // if (dataString) {
  //   try {
  //     data = JSON.parse(decodeURIComponent(dataString)) as LuminisLookoutData[];
  //   } catch (error) {
  //     console.error("Error parsing data:", error);
  //   }
  // }
    const [data, setData] = useState<LuminisLookoutData[]>([]);
  const router = useRouter();
  const goToGame = () => {
    router.push("/game");
  };
  useEffect(()=>{
    async function fetchData() {
      const res = await axios.get<luminisLookoutGalleryApiResponse>(
        `${env.NEXT_PUBLIC_API_URL}/api/submissions/accepted`,
      );
      setData(res.data.msg);
    }
    void fetchData();
  },[setData]);

  useEffect(() => {
    gsap.utils
      .toArray<HTMLElement>(".animatable")
      .forEach((layer: HTMLElement) => {
        let lastVelocity = 0;
        let scrollTimeout: NodeJS.Timeout | null = null;

        const trigger = ScrollTrigger.create({
          trigger: layer,
          start: "top 80%", // Start animation when 80% of element is in view
          onUpdate: (self) => {
            const velocity = self.getVelocity(); // Get scroll velocity
            lastVelocity = gsap.utils.clamp(-50, 50, velocity / 500); // Limit rotation speed

            // Apply rotation while scrolling
            gsap.to(layer, {
              rotate: lastVelocity,
              duration: 0.3,
              ease: "power2.out",
            });

            // Clear previous timeout and set a new one
            if (scrollTimeout) clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
              resetRotation(layer);
            }, 200); // Reset only if no scrolling happens for 200ms
          },
        });

        function resetRotation(target: HTMLElement) {
          gsap.to(target, {
            rotate: 0,
            duration: 0.6,
            ease: "power3.out",
          });
        }

        return () => {
          trigger.kill();
          if (scrollTimeout) clearTimeout(scrollTimeout);
        };
      });
  }, [data]);

  return (
    <div className="relative flex min-h-[100vh] flex-col items-center justify-center gap-10 bg-[#4D81F1] bg-[url('/assets/events/backgroundImg2.png')] bg-contain bg-repeat p-10 pt-32 text-[#ffffff]">
      <div className="flex w-[80%] flex-col items-center justify-between gap-10 xl:flex-row-reverse">
        <div className="relative w-full">
          {/* Shadow Effect */}
          <h1
            className="absolute left-[4px] top-[4px] z-0 w-[100%] text-center text-5xl font-extrabold tracking-widest text-black xl:text-8xl"
            style={{ fontFamily: "Rocket Thunder" }}
          >
            PHOTOS APPROVED
          </h1>

          {/* Main Text */}
          <h1
            className="relative z-10 w-[100%] text-center text-5xl tracking-widest text-white xl:text-8xl"
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
            onClick={goToGame}
            className="relative z-10 flex h-[3rem] w-[3rem] items-center justify-center gap-2 rounded-md border-2 border-black bg-[#F127CC]"
          >
            <img src="/assets/Game/backArrow.png" className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div className="flex w-full flex-wrap items-center justify-center gap-6 p-4 xl:justify-center xl:gap-16">
        {data.map((item, idx) => (
          <div className="animatable" key={idx}>
            <Card photo={item.photo} User={item.User} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
