"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Card from "~/components/Game/Card";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
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
  msg: {
    submissions: LuminisLookoutData[];
    totalPages: number;
    currentPage: number;
    totalItems: number;
  };
}

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const [data, setData] = useState<LuminisLookoutData[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [cache, setCache] = useState<Record<number, LuminisLookoutData[]>>({});

  const router = useRouter();
  const goToGame = () => router.push("/game");

  useEffect(() => {
    async function fetchData() {
      if (cache[page]) {
        setData(cache[page] ?? []);
        return;
      }
  
      setLoading(true);
      try {
        const res = await axios.get<luminisLookoutGalleryApiResponse>(
          `${env.NEXT_PUBLIC_API_URL}/api/submissions/accepted?page=${page}&limit=40`
        );
  
        const submissions = res.data?.msg?.submissions ?? []; // Ensure it's an array
        setCache((prevCache) => ({ ...prevCache, [page]: submissions }));
        setData(submissions);
        setTotalPages(res.data?.msg?.totalPages ?? 1);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]); // Ensure data is always an array
      }
      setLoading(false);
    }
  
    void fetchData();
  }, [page, cache]);
  

  useEffect(() => {
    gsap.utils.toArray<HTMLElement>(".animatable").forEach((layer: HTMLElement) => {
      let lastVelocity = 0;
      let scrollTimeout: NodeJS.Timeout | null = null;

      const trigger = ScrollTrigger.create({
        trigger: layer,
        start: "top 80%",
        onUpdate: (self) => {
          const velocity = self.getVelocity();
          lastVelocity = gsap.utils.clamp(-50, 50, velocity / 500);

          gsap.to(layer, {
            rotate: lastVelocity,
            duration: 0.3,
            ease: "power2.out",
          });

          if (scrollTimeout) clearTimeout(scrollTimeout);
          scrollTimeout = setTimeout(() => {
            gsap.to(layer, { rotate: 0, duration: 0.6, ease: "power3.out" });
          }, 200);
        },
      });

      return () => {
        trigger.kill();
        if (scrollTimeout) clearTimeout(scrollTimeout);
      };
    });
  }, [data]);

  return (
    <div className="relative flex min-h-[100vh] flex-col items-center justify-center gap-10 bg-[#4D81F1] bg-[url('/assets/events/backgroundImg2.png')] bg-cover bg-fixed p-10 pt-32 text-[#ffffff]">
      {/* Title */}
      <div className="flex w-[80%] flex-col items-center justify-between gap-10 xl:flex-row-reverse">
        <div className="relative w-full">
          <h1 className="absolute left-[4px] top-[4px] z-0 w-full text-center text-5xl font-extrabold tracking-widest text-black xl:text-8xl" style={{ fontFamily: "Rocket Thunder" }}>
            PHOTOS APPROVED
          </h1>
          <h1 className="relative z-10 w-full text-center text-5xl tracking-widest text-white xl:text-8xl" style={{ fontFamily: "Rocket Thunder" }}>
            PH<span className="text-[#FAE00D]">O</span>T
            <span className="text-[#FAE00D]">O</span>S APPR
            <span className="text-[#FAE00D]">O</span>VED
          </h1>
        </div>

        {/* Back Button */}
        <div className="relative inline-block">
          <div className="absolute left-[6px] top-[6px] z-0 h-full w-full rounded-md bg-black"></div>
          <button
            onClick={goToGame}
            className="relative z-10 flex h-[3rem] w-[3rem] items-center justify-center gap-2 rounded-md border-2 border-black bg-[#F127CC]"
          >
            <img src="/assets/Game/backArrow.png" className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Gallery */}
      <div className="flex w-full flex-wrap items-center justify-center gap-6 p-4 xl:justify-center xl:gap-16">
        {loading ? (
          <p className="text-2xl lg:4xl text-blackfont-bold tracking-wider" style={{ fontFamily: "Rocket Thunder" }}>Loading...</p>
        ) : data.length > 0 ? (
          data
            .map((item, idx) => (
              <div className="animatable" key={idx}>
                <Card photo={item.photo} User={item.User} />
              </div>
            ))
        ) : (
          <p className="text-xl text-white font-bold tracking-wider" style={{ fontFamily: "Rocket Thunder" }}>No photos available.</p>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="mt-4 flex justify-center gap-4 md:gap-8 items-center w-[100%]">
        <div className="relative inline-block">
          <div className="absolute left-[6px] top-[6px] z-0 h-full w-full rounded-md bg-black"></div>

          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="relative z-10 rounded bg-white px-4 py-2 text-black font-bold text-sm md:text-xl tracking-wider border-2 border-black disabled:opacity-50"
            style={{ fontFamily: "Rocket Thunder" }}
          >
            Previous
          </button>
        </div>

        <span className="text-white tracking-wider text-sm font-bold md:text-xl"
          style={{ fontFamily: "Rocket Thunder" }}>
          Page {page} of {totalPages}
        </span>
        <div className="relative inline-block">
          <div className="absolute left-[6px] top-[6px] z-0 h-full w-full rounded-md bg-black"></div>

          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
            className="relative z-10 rounded bg-white px-4 py-2 text-black font-bold tracking-wider text-sm md:text-xl border-2 border-black disabled:opacity-50"
            style={{ fontFamily: "Rocket Thunder" }}
          >
            Next
          </button>
        </div>

      </div>
    </div>
  );
};

export default Gallery;
