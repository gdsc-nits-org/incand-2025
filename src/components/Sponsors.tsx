"use client";
import React, { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const sponsors = [
  { id: 1, name: "Asus", image: "/asus.png" },
  { id: 2, name: "Work, Play, Relax", image: "/sponsor1" },
  { id: 3, name: "Shop & Eat", image: "/sponsor1" },
  { id: 4, name: "Work", image: "/sponsor1" },
  { id: 5, name: "Eat", image: "/sponsor2" },
  { id: 6, name: "Eat", image: "/sponsor3" },
];

const Sponsors: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev + 1) % sponsors.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev - 1 + sponsors.length) % sponsors.length);
  };

  return (
    <div className="relative h-screen overflow-hidden bg-[#D6FE6B] py-10 text-center">
      <img
        src="/sponsors.png"
        alt=""
        className="absolute z-0 mobile:min-w-[1400px] laptop:top-8 laptop:w-screen"
      />
      {/* Title */}
      <img
        src="/PREVIOUS SPONSORS (5).png"
        alt=""
        className="mx-auto translate-y-16 mobile:hidden md:h-[72px] md:w-[620px] laptop:block laptop:h-[128px] laptop:w-[1096px] 4k:h-[334px] 4k:w-[2860px]"
      />
      <img
        src="/PREVIOUS SPONSORS (6).png"
        alt=""
        className="mx-auto translate-y-16 md:h-[72px] md:w-[620px] laptop:hidden"
      />

      {/* Carousel */}
      <div className="relative flex h-[400px] items-center justify-center 4k:h-[1200px]">
        {sponsors.map((sponsor, index) => {
          const position =
            (index - current + sponsors.length) % sponsors.length;

          let styles: React.CSSProperties = {};
          if (position === 0) {
            styles = {
              transform: "scale(1) rotate(0deg)",
              zIndex: 10,
              opacity: 1,
            };
          } else if (position === 1 && window.innerWidth > 1200) {
            styles = {
              transform: "scale(1) rotate(10deg) translateX(36vw)",
              zIndex: 5,
              opacity: 1,
            };
          } else if (
            position === sponsors.length - 1 &&
            window.innerWidth > 1200
          ) {
            styles = {
              transform: "scale(1) rotate(-10deg) translateX(-36vw)",
              zIndex: 5,
              opacity: 1,
            };
          } else {
            styles = {
              transform:
                "scale(1) rotate(0deg) translateY(200vw) translateX(0vw)",
              zIndex: 0,
              opacity: 0,
            };
          }

          return (
            <div
              key={sponsor.id}
              className={`md: absolute top-28 transition-all duration-1000 ease-in-out 4k:top-52`}
              style={styles}
            >
              <div className="flex items-center justify-center rounded-[1vh] border-[0.2vh] border-black bg-[#F6E6E7] shadow-[0.8vh_0.8vh_0px_rgba(0,0,0,1)] mobile:h-[80vw] mobile:w-[80vw] laptop:h-[20vw] laptop:w-[20vw]">
                <img
                  src={sponsor.image}
                  alt={sponsor.name}
                  className="rounded-[0.8vh] mobile:h-[35vw] laptop:h-[19vh]"
                />
              </div>
              {position === 0 && (
                <p className="inline-block rounded-full border-[0.2vh] border-black bg-[#F6E6E7] px-[2.6vw] font-semibold text-black shadow-[0.8vh_0.8vh_0px_rgba(0,0,0,1)] mobile:mt-[4vw] mobile:text-[5vw] laptop:mt-[1.5vw] laptop:text-[1.3vw]">
                  {sponsor.name}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="mt-8 flex justify-center mobile:translate-y-28 tablet:translate-y-[40vh] ipadpro:translate-y-[50vh] laptop:translate-y-24">
        <button
          onClick={handlePrev}
          className="z-10 mx-2 h-[6vh] w-[6vh] rounded-full bg-black px-[1.9vh] text-[2vh] text-white hover:bg-gray-800"
        >
          <FaArrowLeftLong />
        </button>
        <button
          onClick={handleNext}
          className="z-10 mx-2 h-[6vh] w-[6vh] rounded-full bg-black px-[1.9vh] text-[2vh] text-white hover:bg-gray-800"
        >
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default Sponsors;
