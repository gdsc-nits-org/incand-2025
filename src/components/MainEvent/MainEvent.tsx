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
        className="z-30 mobile:p-[2vw] laptop:p-7 4k:p-12 font-ahsing mobile:text-[4.5vh] laptop:text-[9vh] tablet:text-[6vh] mobile:leading-[5vh] tablet:leading-[6vh] laptop:leading-[10vh] text-white"
        style={{
          textShadow: "6px 6px 0px black",
        }}
      >
        {name}
      </h2>

      <img
        src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1739274564/up_jlgare.png"
        alt="vector"
        className={`absolute z-20 mobile:h-[5vh] laptop:h-[9vh] transition-all duration-1000 ${isHover ? "left-[10%] top-[15%] -rotate-[135deg]" : "left-[65%] top-0 -rotate-45"}`}
      />

      <img
        src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1739275338/Ellipse_12_wchkuq.png"
        alt="pink_circle"
        className={`absolute z-20 transition-all duration-1000 ${isHover ? "left-[70%] top-[30%] mobile:h-[4.5vh] laptop:h-[7vh]" : "left-[25%] top-[20%] mobile:h-[3.5vh] laptop:h-[5vh]"}`}
      />

      <img
        src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1739275610/Flower_2_kh0hhh.png"
        alt=""
        className={`absolute -bottom-[2%] -left-[1%] z-20 mobile:h-[5.5vh] laptop:h-[9vh] transition-all duration-1000 ${isHover ? "rotate-[45deg]" : "-rotate-[45deg]"}`}
      />

      <img
        src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1739276056/Brutalist_Shape_194_n9sap0.png"
        alt=""
        className={`absolute z-20 mobile:h-[3vh] laptop:h-[5vh] drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] transition-all duration-1000 ${isHover ? "left-[5%] top-[40%] rotate-[30deg]" : "left-[85%] top-[40%] -rotate-[30deg]"}`}
      />

      <img
        src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1739276675/Ellipse_12_1_iaazuk.png"
        alt=""
        className={`absolute z-20 transition-all duration-1000 ${isHover ? "left-[70%] top-[75%] mobile:h-[4.5vh] laptop:h-[7vh]" : "left-[85%] top-[80%] mobile:h-[3.5vh] laptop:h-[5vh]"}`}
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
    <div className="top-20 flex min-h-screen w-full flex-wrap justify-center mobile:gap-1 laptop:gap-8 bg-[#FFEDFD] mobile:px-4 tablet:px-16 4k:gap-20 4k:px-10 laptop:px-4 pt-[15vh]">
      <div
        className={`absolute inset-0 z-0 transition-transform duration-1000 ease-out`}
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dsj9gr1o3/image/upload/v1739220438/Vector_1_cz77nw.png')",
          backgroundSize: "contain",
          backgroundRepeat: "repeat",
          mixBlendMode: "multiply",
        }}
      ></div>
      <EventCard
        name="DJ Night"
        className="hover:flex-grow"
        color="bg-[#8BF965]"
        width="laptop:w-[30vw] mobile:w-[90vw] tablet:w-[80vw]"
        height="laptop:h-[80vh]  mobile:h-[27.5vh]"
        bgimg="-translate-x-60 -translate-y-60"
      />
      <EventCard
        name="Carpe Diem"
        className="hover:flex-grow"
        color="bg-[#B5FCFF]"
        width="laptop:w-[30vw] mobile:w-[90vw] tablet:w-[80vw]"
        height="laptop:h-[80vh] mobile:h-[27.5vh]"
        bgimg="-translate-x-60 -translate-y-60"
      />
      <div className="flex laptop:flex-col mobile:gap-5 tablet:gap-7 laptop:gap-8 4k:gap-20 transition-all duration-1000 ease-linear">
        <EventCard
          name="Thunder March"
          className="absolute left-0 top-0 mobile:origin-bottom-right laptop:origin-bottom-left hover:scale-105"
          color="bg-[#ABA8FF]"
          width="laptop:w-[30vw] mobile:w-[44vw] tablet:w-[38vw]"
          height="laptop:h-[37.8vh] mobile:h-[21vh]"
        />
        <EventCard
          name="Nirvana"
          className="absolute bottom-0 left-0 mobile:origin-bottom-right tablet:origin-top-left hover:scale-105"
          color="bg-[#F6E659]"
          width="laptop:w-[30vw] mobile:w-[44vw] tablet:w-[38vw]"
          height="laptop:h-[37.8vh] mobile:h-[21vh]"
        />
      </div>
    </div>
  );
}
