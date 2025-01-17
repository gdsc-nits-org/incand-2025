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

    scrollContainer.addEventListener("wheel", handleWheel);

    return () => {
      scrollContainer.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className={
        styles.scrollBar +
        " flex h-[50%] w-full items-center justify-around gap-4 overflow-x-scroll scroll-smooth pl-8"
      }
    >
      {/* <button className="absolute right-4 z-30 h-10 w-10 bg-red-600">
        NEXT
      </button> */}
      {data.map((item, key) => (
        <EventCard
          key={key}
          {...item}
          id={key + 1}
          bgColor={colors[key % 6] ?? "#FFC0F9"}
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
}: {
  moduleName: string;
  eventName: string;
  eventNo: number;
  bgColor: string;
  id: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(`/event/${id}`)}
      className="relative flex h-[80%] min-w-[15rem] items-end justify-center rounded-3xl"
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
          className="text-2xl font-[900] uppercase text-white drop-shadow-[3px_3px_0px_black]"
          href="/events"
        >
          View More
        </Link>
      </div>
      <div
        className={`z-10 flex h-full w-full flex-col justify-between px-4 pb-4 pt-2 ${isHovered ? "translate-x-1 translate-y-1 opacity-0" : ""} transition-all duration-300 ease-linear`}
      >
        <h1 className="text-m font-bold uppercase text-white">{moduleName}</h1>
        <div className="flex items-center justify-between gap-2">
          <h1
            className="text-stroke-black text-2xl font-[900] uppercase drop-shadow-[3px_3px_0px_black]"
            style={{ color: bgColor }}
          >
            {eventName}
          </h1>
          <p className="text-stroke-black text-2xl font-[900] uppercase text-white drop-shadow-[3px_3px_0px_black]">
            {eventNo < 10 ? `0${eventNo}` : eventNo}
          </p>
        </div>
      </div>
      <Image
        className={`transistion-all absolute duration-300 ease-linear hover:opacity-20 ${isHovered ? "opacity-20" : "opacity-100"}`}
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
