"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import styles from "~/styles/Events.module.css";

const AllEvents = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) return;

    const handleWheel = (event: WheelEvent) => {
      // event.preventDefault();
      scrollContainer.scrollLeft += 2 * event.deltaY;
    };
    const bigContainer = document.getElementById("event-page");
    bigContainer?.addEventListener("wheel", handleWheel);

    return () => {
      bigContainer?.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className={
        styles.scrollBar +
        " mt-4 flex h-[50%] w-full flex-wrap items-center justify-around gap-2 overflow-x-scroll scroll-smooth px-2 ipadair:mt-0 ipadair:flex-nowrap ipadair:gap-4 ipadair:pl-8 4k:gap-16"
      }
    >
      {data.map((item, key) => (
        <EventCard
          key={key}
          {...item}
          id={key + 1}
          bgColor={colors[key % 6] ?? "#FFC0F9"}
          className="w-[calc(50%-8px)] md:w-[calc(50%-16px)] ipadpro:w-auto"
        />
      ))}
    </div>
  );
};

const EventCard = ({
  moduleName,
  eventName,
  eventNo,
  bgColor,
  id,
  className,
}: {
  moduleName: string;
  eventName: string;
  eventNo: number;
  bgColor: string;
  id: number;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(`/event/${id}`)}
      className={
        className +
        " relative flex h-[50%] w-[12rem] min-w-[10rem] items-end justify-center rounded-3xl ipadair:h-[80%] ipadair:w-[15rem] ipadair:min-w-[15rem] 4k:min-w-[42rem] 4k:rounded-[3rem]"
      }
      style={{
        backgroundColor: bgColor,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute flex h-full w-full items-center justify-center ${isHovered ? "opacity-100" : "opacity-0"}`}
      >
        <Link
          className="text-2xl font-[900] uppercase text-white drop-shadow-[3px_3px_0px_black] 4k:text-6xl 4k:drop-shadow-[6px_6px_0px_black]"
          href="/events"
        >
          View More
        </Link>
      </div>
      <div
        className={`z-10 flex h-full w-full flex-col justify-between p-4 pt-2 4k:p-8 4k:pt-4 ${isHovered ? "translate-x-1 translate-y-1 opacity-0" : ""} transition-all duration-300 ease-linear`}
      >
        <h1 className="text-start text-2xl font-bold uppercase text-white 4k:text-6xl">
          {moduleName}
        </h1>
        <div className="text-stroke-black flex items-center justify-between gap-2 text-2xl font-[900] uppercase drop-shadow-[3px_3px_0px_black] 4k:text-6xl 4k:drop-shadow-[6px_6px_0px_black]">
          <h1 className="" style={{ color: bgColor }}>
            {eventName}
          </h1>
          <p className="text-white">{eventNo < 10 ? `0${eventNo}` : eventNo}</p>
        </div>
      </div>
      <Image
        className={`transistion-all absolute h-[80%] w-[80%] duration-300 ease-linear hover:opacity-20 ${isHovered ? "opacity-20" : "opacity-100"}`}
        src="/assets/events/statue.png"
        width={200}
        height={200}
        alt="statue"
      ></Image>
    </button>
  );
};
export default AllEvents;

const colors = [
  "#B5FCFF",
  "#C2C0FF",
  "#B8FF9F",
  "#FFC0F9",
  "#FFF5A0",
  "#86CAFF",
];

const data = [
  {
    moduleName: "Lorem",
    eventName: "Ipsum",
    eventNo: 1,
  },
  {
    moduleName: "Dolor",
    eventName: "Sit",
    eventNo: 2,
  },
  {
    moduleName: "Amet",
    eventName: "Consectetur",
    eventNo: 3,
  },
  {
    moduleName: "Adipiscing",
    eventName: "Elit",
    eventNo: 4,
  },
  {
    moduleName: "Sed",
    eventName: "Do",
    eventNo: 5,
  },
  {
    moduleName: "Eiusmod",
    eventName: "Tempor",
    eventNo: 6,
  },
  {
    moduleName: "Incididunt",
    eventName: "Labore",
    eventNo: 7,
  },
  {
    moduleName: "Et",
    eventName: "Dolore",
    eventNo: 8,
  },
  {
    moduleName: "Magna",
    eventName: "Aliqua",
    eventNo: 9,
  },
  {
    moduleName: "Ut",
    eventName: "Enim",
    eventNo: 10,
  },
];
