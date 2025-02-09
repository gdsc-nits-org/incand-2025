"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useSearchParams } from "next/navigation";
import Card from "~/components/Game/Card";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface LuminisLookoutData {
  id: string;
  photo: string;
  User: {
    email: string;
    name: string;
  };
}

gsap.registerPlugin(ScrollTrigger);
export const runtime = "edge";

const Gallery = () => {
  const searchParams = useSearchParams();
  const dataString = searchParams.get("data");
  let data: LuminisLookoutData[] = [];

  if (dataString) {
    try {
      data = JSON.parse(decodeURIComponent(dataString)) as LuminisLookoutData[];
    } catch (error) {
      console.error("Error parsing data:", error);
    }
  }

  const router = useRouter();
  const goToGame = () => {
    router.push("/game");
  };

  useEffect(() => {
    gsap.utils.toArray<HTMLElement>(".animatable").forEach((layer: HTMLElement) => {
      let lastVelocity = 0;
      let scrollTimeout: NodeJS.Timeout | null = null;

      const trigger = ScrollTrigger.create({
        trigger: layer,
        start: "top 80%", // Start animation when 80% of element is in view
        onUpdate: (self) => {
          let velocity = self.getVelocity(); // Get scroll velocity
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
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center text-[#ffffff] min-h-[100vh] gap-10 pt-32 p-10 bg-[#4D81F1] bg-repeat bg-contain bg-[url('/assets/events/backgroundImg2.png')]">
      <div className="flex flex-col xl:flex-row-reverse items-center gap-10 justify-between w-[80%]">
        <div className="relative w-full">
          {/* Shadow Effect */}
          <h1 className="absolute top-[4px] left-[4px] font-extrabold text-5xl xl:text-8xl text-center w-[100%] text-black tracking-widest z-0" style={{ fontFamily: "Rocket Thunder" }}>
            PHOTOS APPROVED
          </h1>

          {/* Main Text */}
          <h1 className="relative z-10 w-[100%] text-center text-5xl tracking-widest text-white xl:text-8xl" style={{ fontFamily: "Rocket Thunder" }}>
            PH<span className="text-[#FAE00D]">O</span>T<span className="text-[#FAE00D]">O</span>S APPR<span className="text-[#FAE00D]">O</span>VED
          </h1>
        </div>

        <div className="relative inline-block">
          {/* Shadow behind the button */}
          <div className="absolute left-[6px] top-[6px] z-0 h-full w-full rounded-md bg-black"></div>

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
          <div className="animatable" key={idx}>
            <Card photo={item.photo} User={item.User} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;