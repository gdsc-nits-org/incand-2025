"use client";
import React, { useState } from "react";
import Link from "next/link";

const EventCard = ({
  name,
  color,
  width,
  height,
  className,
  date,
}: {
  className?: string;
  name: string;
  color: string;
  width: string;
  height: string;
  date?: string;
}) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`${color} relative flex items-center rounded-3xl border-black shadow-[0.8vh_0.8vh_0px_rgba(0,0,0,1)] transition-all duration-1000 ease-out hover:border-[3px] ${width} ${height} transform-gpu cursor-pointer overflow-hidden ${className}`}
    >
      <h2
        className="z-30 font-ahsing text-white mobile:p-[2vw] mobile:text-[4.5vh] mobile:leading-[5vh] tablet:text-[6vh] tablet:leading-[6vh] laptop:p-7 laptop:text-[9vh] laptop:leading-[10vh] 4k:p-12"
        style={{
          textShadow: "0.6vh 0.6vh 0vh black",
        }}
      >
        {name}
      </h2>
      <h2
        className={`absolute mobile:hidden laptop:block -bottom-[4.5vh] left-[6vh] z-30 font-ahsing text-white transition-all duration-500 mobile:p-[2vw] mobile:text-[4.5vh] mobile:leading-[5vh] tablet:text-[6vh] tablet:leading-[6vh] laptop:p-7 laptop:text-[4.5vh] laptop:leading-[10vh] 4k:p-12 ${isHover?"translate-y-0":"translate-y-[100%]"}`}
        style={{
          textShadow: "0.35vh 0.35vh 0vh black",
        }}
      >
        {date}
      </h2>

      <img
        src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1739274564/up_jlgare.png"
        alt="vector"
        className={`absolute z-20 transition-all duration-1000 mobile:h-[5vh] laptop:h-[9vh] ${isHover ? "left-[10%] top-[15%] -rotate-[135deg]" : "left-[65%] top-0 -rotate-45"}`}
      />

      <img
        src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1739275338/Ellipse_12_wchkuq.png"
        alt="pink_circle"
        className={`absolute z-20 transition-all duration-1000 ${isHover ? "left-[70%] top-[30%] mobile:h-[4.5vh] laptop:h-[7vh]" : "left-[25%] top-[20%] mobile:h-[3.5vh] laptop:h-[5vh]"}`}
      />

      <img
        src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1739275610/Flower_2_kh0hhh.png"
        alt=""
        className={`absolute -bottom-[2%] -left-[1%] z-20 transition-all duration-1000 mobile:h-[5.5vh] laptop:h-[9vh] ${isHover ? "rotate-[45deg]" : "-rotate-[45deg]"}`}
      />

      <img
        src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1739276056/Brutalist_Shape_194_n9sap0.png"
        alt=""
        className={`absolute z-20 drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] transition-all duration-1000 mobile:h-[3vh] laptop:h-[5vh] ${isHover ? "left-[5%] top-[40%] rotate-[30deg]" : "left-[85%] top-[40%] -rotate-[30deg]"}`}
      />

      <img
        src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1739276675/Ellipse_12_1_iaazuk.png"
        alt=""
        className={`absolute z-20 transition-all duration-1000 ${isHover ? "left-[70%] top-[75%] mobile:h-[4.5vh] laptop:h-[7vh]" : "left-[85%] top-[80%] mobile:h-[3.5vh] laptop:h-[5vh]"}`}
      />

      <div
        className={`absolute h-[140%] w-[140%] ${isHover ? "-translate-x-[30%] -translate-y-[25%]" : ""} inset-0 z-0 transition-all duration-1000 ease-out`}
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
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="top-20 flex min-h-screen w-full flex-wrap justify-center bg-[#FFEDFD] pt-[15vh] mobile:gap-0 mobile:px-4 tablet:px-16 laptop:gap-8 laptop:px-4 4k:gap-20 4k:px-10">
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

      <div className="flex transition-all duration-1000 ease-linear mobile:gap-5 tablet:gap-7 laptop:flex-col laptop:gap-8 4k:gap-20">
        <EventCard
          name="EDM Night"
          date="21st-23rd Feb"
          className="absolute bottom-0 right-0 hover:scale-105 mobile:origin-bottom-right tablet:origin-bottom-right"
          color="bg-[#8BF965]"
          width="laptop:w-[30vw] mobile:w-[44vw] tablet:w-[38vw]"
          height="laptop:h-[37.8vh] mobile:h-[21vh]"
        />
        <EventCard
          name="Komedy Night"
          date="21st Feb"
          className="absolute top-0 right-0 hover:scale-105 mobile:origin-bottom-right tablet:origin-top-left laptop:origin-top-right"
          color="bg-[#FFADF6]"
          width="laptop:w-[30vw] mobile:w-[44vw] tablet:w-[38vw]"
          height="laptop:h-[37.8vh] mobile:h-[21vh]"
        />
      </div>
      {/*Subrata's Flip effect*/}
      <div
        className="relative flex [perspective:1000px] laptop:w-[30vw] mobile:w-[90vw] tablet:w-[80vw] laptop:h-[80vh] mobile:h-[27.5vh]"
        onClick={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {/* Card's Front Side */}
        <div className={`relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] ${isHover ? '[transform:rotateY(180deg)]' : ''}`}>
          <div className="absolute w-full h-full [backface-visibility:hidden]">
            <EventCard
              name="Carpe Diem"
              date="23rd Feb"
              className="hover:flex-grow"
              color="bg-[#B5FCFF]"
              width="laptop:w-[30vw] mobile:w-[90vw] tablet:w-[80vw]"
              height="laptop:h-[80vh] mobile:h-[27.5vh]"
            />
          </div>
          {/* Card's Back Side */}
          <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] transition-all duration-1000">
            <div className="flex transition-all duration-1000 ease-linear mobile:gap-5 tablet:gap-7 laptop:flex-col laptop:gap-8 4k:gap-20">
              <EventCard
                name="Artist 1"
                className="absolute left-0 top-0 hover:scale-105 origin-center"
                color="bg-[#FF8D8D]"
                width="laptop:w-[30vw] mobile:w-[44vw] tablet:w-[38vw]"
                height="laptop:h-[37.8vh] mobile:h-[27.5vh]"
              />
              <EventCard
                name="Artist 2"
                className="absolute bottom-0 left-0 hover:scale-105 origin-center"
                color="bg-[#B5FCFF]"
                width="laptop:w-[30vw] mobile:w-[44vw] tablet:w-[38vw]"
                height="laptop:h-[37.8vh] mobile:h-[27.5vh]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex transition-all duration-1000 ease-linear mobile:gap-5 tablet:gap-7 laptop:flex-col laptop:gap-8 4k:gap-20">
        <EventCard
          name="Thunder March"
          date="21st Feb"
          className="absolute left-0 top-0 hover:scale-105 mobile:origin-bottom-right laptop:origin-bottom-left"
          color="bg-[#ABA8FF]"
          width="laptop:w-[30vw] mobile:w-[44vw] tablet:w-[38vw]"
          height="laptop:h-[37.8vh] mobile:h-[21vh]"
        />
        <EventCard
          name="Nirvana"
          date="22nd Feb"
          className="absolute bottom-0 left-0 hover:scale-105 mobile:origin-bottom-right tablet:origin-top-left"
          color="bg-[#F6E659]"
          width="laptop:w-[30vw] mobile:w-[44vw] tablet:w-[38vw]"
          height="laptop:h-[37.8vh] mobile:h-[21vh]"
        />
      </div>
    </div>
  );
}
