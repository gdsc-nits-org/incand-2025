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

const SponsorCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev + 1) % sponsors.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev - 1 + sponsors.length) % sponsors.length);
  };

  return (
    <div className="relative bg-[#D6FE6B] text-center py-10 h-screen overflow-hidden">
      <img src="/sponsors.png" alt="" className="absolute laptop:top-8 laptop:w-screen mobile:min-w-[1400px] z-0"/>
      {/* Title */}
      <img src="/PREVIOUS SPONSORS (5).png" alt="" className="mobile:hidden laptop:block laptop:h-[128px] laptop:w-[1096px] md:h-[72px] md:w-[620px] 4k:w-[2860px] 4k:h-[334px] mx-auto translate-y-16"/>
 
      {/* Carousel */}
      <div className="relative flex items-center justify-center h-[400px] 4k:h-[1200px]">
        {sponsors.map((sponsor, index) => {
          const position =
            (index - current + sponsors.length) % sponsors.length;

          let styles: React.CSSProperties = {};
          if (position === 0) {
            styles = {
              transform: "scale(1) rotate(0deg)",
              zIndex : 10,
              opacity: 1,
            };
          } else if (position === 1 && window.innerWidth>1200) {
            styles = {
              transform: "scale(1) rotate(10deg) translateX(36vw)",
              zIndex: 5,
              opacity: 1,
            };
          } else if (position === sponsors.length - 1 && window.innerWidth>1200) {
            styles = {
              transform: "scale(1) rotate(-10deg) translateX(-36vw)",
              zIndex: 5,
              opacity: 1,
            };
          } 
          else{
            styles = {
              transform: "scale(1) rotate(0deg) translateY(200vw) translateX(0vw)",
              zIndex: 0,
              opacity: 0,
            }
          }

          return (
            <div
              key={sponsor.id}
              className={`absolute transition-all duration-1000 ease-in-out top-28 md: 4k:top-52`}
              style={styles}
            >
              <div className="flex items-center justify-center laptop:w-[20vw] laptop:h-[20vw] bg-[#F6E6E7] border-[0.2vh] border-black rounded-[1vh] shadow-[0.8vh_0.8vh_0px_rgba(0,0,0,1)] mobile:h-[80vw] mobile:w-[80vw]">
                <img
                  src={sponsor.image}
                  alt={sponsor.name}
                  className="laptop:h-[19vh] mobile:h-[35vw] rounded-[0.8vh]"
                />
              </div>
              {position === 0 && (
                <p className="laptop:mt-[1.5vw] text-black font-semibold laptop:text-[1.3vw] border-[0.2vh] border-black bg-[#F6E6E7] rounded-full inline-block px-[2.6vw] shadow-[0.8vh_0.8vh_0px_rgba(0,0,0,1)] mobile:text-[5vw] mobile:mt-[4vw]">
                  {sponsor.name}
                </p>
              )}
              </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center mt-8 laptop:translate-y-24 mobile:translate-y-28 tablet:translate-y-[40vh] ipadpro:translate-y-[50vh]">
        <button
          onClick={handlePrev}
          className="bg-black h-[6vh] w-[6vh] text-[2vh] text-white px-[1.9vh] rounded-full hover:bg-gray-800 mx-2 z-10"
        >
          <FaArrowLeftLong />
        </button>
        <button
          onClick={handleNext}
          className="bg-black h-[6vh] w-[6vh] text-[2vh] text-white px-[1.9vh] rounded-full hover:bg-gray-800 mx-2 z-10"
        >
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default SponsorCarousel;
