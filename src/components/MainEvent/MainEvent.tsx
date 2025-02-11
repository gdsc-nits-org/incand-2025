"use client";
import React, { useState } from "react";
import Link from "next/link";

const EventCard = ({
  name,
  color,
  width,
  height,
  className,
  bgimg,
}: {
  className?: string;
  name: string;
  color: string;
  width: string;
  height: string;
  bgimg?: string;
}) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`${color} relative flex items-center rounded-3xl border-black shadow-[0.8vh_0.8vh_0px_rgba(0,0,0,1)] transition-all duration-1000 ease-out hover:border-[3px] ${width} ${height} transform-gpu cursor-pointer overflow-hidden ${className}`}
    >
      <h2
        className="z-30 p-7 font-ahsing text-[9vh] leading-[10vh] text-white drop-shadow-lg"
        style={{
          textShadow: "0.8vh 0.8vh 0vh black",
        }}
      >
        {name}
      </h2>

      <img
        src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1739274564/up_jlgare.png"
        alt="vector"
        className={`absolute z-20 h-[9vh] transition-all duration-1000 ${isHover ? "left-[10%] top-[15%] -rotate-[135deg]" : "left-[65%] top-0 -rotate-45"}`}
      />

      <img
        src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1739275338/Ellipse_12_wchkuq.png"
        alt="pink_circle"
        className={`absolute z-20 transition-all duration-1000 ${isHover ? "left-[70%] top-[30%] h-[7vh]" : "left-[25%] top-[20%] h-[5vh]"}`}
      />

      <img
        src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1739275610/Flower_2_kh0hhh.png"
        alt=""
        className={`absolute -bottom-[2%] -left-[1%] z-20 h-[9vh] transition-all duration-1000 ${isHover ? "rotate-[45deg]" : "-rotate-[45deg]"}`}
      />

      <img
        src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1739276056/Brutalist_Shape_194_n9sap0.png"
        alt=""
        className={`absolute z-20 h-[5vh] drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] transition-all duration-1000 ${isHover ? "left-[5%] top-[40%] rotate-[30deg]" : "left-[85%] top-[40%] -rotate-[30deg]"}`}
      />

      <img
        src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1739276675/Ellipse_12_1_iaazuk.png"
        alt=""
        className={`absolute z-20 transition-all duration-1000 ${isHover ? "left-[70%] top-[75%] h-[7vh]" : "left-[85%] top-[80%] h-[5vh]"}`}
      />

      <div
        className={`absolute h-[140%] w-[140%] ${isHover ? "-translate-x-[25%] -translate-y-[25%]" : ""} inset-0 z-0 transition-all duration-1000 ease-out`}
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dsj9gr1o3/image/upload/v1739221713/Vector_2_suoiox.png')",
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};

export default function MainEvent() {
  return (
    <div className="top-20 flex h-screen w-full flex-wrap justify-center gap-8 bg-[#FFEDFD] px-4 pt-[15vh]">
      <div
        className={`absolute inset-0 z-0 transition-transform duration-1000 ease-out`}
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dsj9gr1o3/image/upload/v1739220438/Vector_1_cz77nw.png')",
          backgroundSize: "contain",
          mixBlendMode: "multiply",
        }}
      ></div>
      <EventCard
        name="DJ Night"
        className="hover:flex-grow"
        color="bg-[#8BF965]"
        width="w-[30vw]"
        height="h-[80vh]"
        bgimg="-translate-x-60 -translate-y-60"
      />
      <EventCard
        name="Carpe Diem"
        className="hover:flex-grow"
        color="bg-[#B5FCFF]"
        width="w-[30vw]"
        height="h-[80vh]"
        bgimg="-translate-x-60 -translate-y-60"
      />
      <div className="flex flex-col gap-8 transition-all duration-1000 ease-linear">
        <EventCard
          name="Thunder March"
          className="absolute left-0 top-0 origin-bottom-left hover:scale-105"
          color="bg-[#ABA8FF]"
          width="w-[30vw]"
          height="h-[37.8vh]"
        />
        <EventCard
          name="Nirvana"
          className="absolute bottom-0 left-0 origin-top-left hover:scale-105"
          color="bg-[#F6E659]"
          width="w-[30vw]"
          height="h-[37.8vh]"
        />
      </div>
    </div>
  );
}
