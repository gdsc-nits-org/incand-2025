"use client";
import React, { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import styles from "~/styles/Sponsors.module.css";

const sponsors = [
  {
    id: 1,
    name: "Title Sponsor",
    image:
      "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1739777411/1200px-Coca-Cola_logo.svg_jsdidi.webp",
  },
  {
    id: 2,
    name: "Music Partner",
    image:
      "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1739777391/1024px-JioSaavn_Logo.svg_wbpj6d.webp",
  },
  {
    id: 3,
    name: "Food Sponsor",
    image:
      "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1739777425/2177px-Pizza_Hut_logo.svg_fy5lys.webp",
  },
  {
    id: 4,
    name: "Food Sponsor",
    image:
      "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1739777437/640px-KFC_logo-image.svg_jxdn3y.webp",
  },
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
    <div className="relative h-screen overflow-hidden bg-[#D6FE6B] text-center xl:pb-10">
      <img
        src="/assets/sponsor/sponsors.webp"
        alt=""
        className="absolute z-0 mobile:min-w-[200vh] mobile:-translate-x-[70vh] laptop:top-8 laptop:w-screen laptop:transform-none"
      />
      <h1
        className={`mx-auto max-w-[90%] translate-y-12 font-tusker mobile:!text-[40px] tablet:!text-[6vh] laptop:!text-[11vh] ${styles["text-stroke"]}`}
      >
        OUR SPONSORS
      </h1>

      <div className="relative flex h-[400px] scale-100 items-center justify-center ipadair:scale-50 xl:scale-100 4k:h-[1200px]">
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
              className={`absolute transition-all duration-1000 ease-in-out mobile:top-20 4k:top-52`}
              style={styles}
            >
              <div className="flex items-center justify-center rounded-[1vh] border-[0.2vh] border-black bg-[#F6E6E7] shadow-[0.8vh_0.8vh_0px_rgba(0,0,0,1)] mobile:h-[75vw] mobile:w-[75vw] tablet:h-[60vw] tablet:w-[60vw] laptop:h-[20vw] laptop:w-[20vw]">
                <img
                  src={sponsor.image}
                  alt={sponsor.name}
                  className="rounded-[0.8vh] mobile:h-[35vw] laptop:h-[19vh]"
                />
              </div>
              {position === 0 && (
                <p className="inline-block rounded-full border-[0.2vh] border-black bg-[#F6E6E7] px-[3vw] font-tusker text-black shadow-[0.8vh_0.8vh_0px_rgba(0,0,0,1)] mobile:mt-[4vw] mobile:text-[4.5vw] laptop:mt-[1.5vw] laptop:text-[1.3vw]">
                  {sponsor.name}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex justify-center mobile:translate-y-[7vw] tablet:translate-y-[26vh] ipadpro:translate-y-[35vh] ipadair:translate-y-[22vh] xl:translate-y-24">
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
