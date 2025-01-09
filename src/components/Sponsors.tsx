"use client";
import React, { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import styles from "~/styles/Sponsors.module.css";

const sponsors = [
  { id: 1, name: "ASUS", image: "/assets/sponsor/asus.png" },
  { id: 2, name: "AMUL", image: "/assets/sponsor/Amul.png" },
  { id: 3, name: "UNSTOP", image: "/assets/sponsor/unstop.png" },
  { id: 4, name: "COGG", image: "/assets/sponsor/cogg.png" },
  { id: 5, name: "LWT", image: "/assets/sponsor/LWT.png" },
  { id: 6, name: "STOCK EDGE", image: "/assets/sponsor/stockedge.png" },
  { id: 7, name: "AROMA", image: "/assets/sponsor/Aroma.png" },
  { id: 8, name: "ASUP", image: "/assets/sponsor/ASUP.png" },
  {
    id: 9,
    name: "THE BISHAL",
    image: "/assets/sponsor/bishalhotel.png",
  },
  { id: 10, name: "C4", image: "/assets/sponsor/C4logo.png" },
  {
    id: 11,
    name: "THE CATERING ROOM",
    image: "/assets/sponsor/catering.png",
  },
  {
    id: 12,
    name: "FIRES AND FLAVOURS",
    image: "/assets/sponsor/firesandflavours.png",
  },
  {
    id: 13,
    name: "JAI HIND CAFE",
    image: "/assets/sponsor/jaihind.png",
  },
  { id: 14, name: "JOY DAZZ", image: "/assets/sponsor/joydazz.png" },
  { id: 15, name: "KARIM'S", image: "/assets/sponsor/Karims.png" },
  {
    id: 16,
    name: "KURMI ENTERPRISE",
    image: "/assets/sponsor/kurmi.png",
  },
  {
    id: 17,
    name: "THE LONDON SHAKES",
    image: "/assets/sponsor/london.png",
  },
  {
    id: 18,
    name: "MAMA'S HEARTH",
    image: "/assets/sponsor/Mamasheart.png",
  },
  {
    id: 19,
    name: "MOMO MAGIC CAFE",
    image: "/assets/sponsor/MomoMagic.png",
  },
  {
    id: 20,
    name: "SKY LIGHT RESTAURANT",
    image: "/assets/sponsor/Skylight.png",
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
<<<<<<< HEAD
    <div className="relative min-h-screen overflow-hidden bg-[#D6FE6B] pb-20 text-center">
=======
    <div className="relative h-screen overflow-hidden bg-[#D6FE6B] pb-10 text-center">
>>>>>>> 1615deb3d31451f60f5fca25fd917791e716e7ab
      <img
        src="/assets/sponsor/sponsors.png"
        alt=""
        className="absolute z-0 mobile:min-w-[200vh] mobile:-translate-x-[70vh] laptop:top-8 laptop:w-screen laptop:transform-none"
      />
      <h1
        className={`mx-auto max-w-[90%] translate-y-12 font-tusker mobile:!text-[40px] tablet:!text-[6vh] laptop:!text-[11vh] ${styles["text-stroke"]}`}
      >
        PREVIOUS SPONSORS
      </h1>

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

      <div className="mt-8 flex justify-center mobile:translate-y-[7vw] tablet:translate-y-[26vh] ipadpro:translate-y-[35vh] laptop:translate-y-24">
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
