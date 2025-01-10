"use client";

import React, { useEffect, useState } from "react";
import styles from "~/styles/LandingProgressBar.module.css";

const LandingProgressBar = () => {
  const [value, setValue] = useState<0 | 1 | 2 | 3 | 4>(0);
  const [rangeValue, setRangeValue] = useState(0);

  const dynamicClass =
    value === 0
      ? styles.scrollBarHome
      : value === 1
        ? styles.scrollBarAbout1
        : value == 2
          ? styles.scrollBarAbout2
          : value === 3
            ? styles.scrollBarSponsors
            : styles.scrollBarFooter;

  const scrollToTarget = (idx: 0 | 1 | 2 | 3 | 4) => {
    window.scrollTo({top: 0.6*idx*window.innerHeight})
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    const parentDiv = document.getElementById("parentContainer")!;
    sections.forEach((section)=>{
       section.style.transition = "";
       section.style.opacity = "0";
       section.style.zIndex = "0";
    });
    const scrollY = window.scrollY;
    const documentHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight;
    const percentage = (scrollY / (documentHeight - windowHeight)) * 100;
    if(percentage==0){
      const target = sections[0]!;
      parentDiv.style.backgroundColor = "#7139CE"
      target.style.transition = "opacity 0.5s linear";
      target.style.opacity = "1";
      target.style.zIndex = "10";
      setRangeValue(0);
      setValue(1);
    }else if(percentage>0  && percentage<=25){
      const target = sections[1]!;
       parentDiv.style.backgroundColor = "#FFA6F6"
      target.style.transition = "opacity 0.5s linear";
      target.style.opacity = "1";
      target.style.zIndex = "10";
      setRangeValue(25);
      setValue(1);
    }else if (percentage>25 && percentage<=50){
      const target = sections[2]!;
      parentDiv.style.backgroundColor = "#C4FDFF"
      target.style.transition = "opacity 0.5s linear";
      target.style.opacity = "1";
      target.style.zIndex = "10";
      setRangeValue(50);
      setValue(2);
    }else if (percentage>50 && percentage<=75){
      const target = sections[3]!;
      parentDiv.style.backgroundColor = "#9EC92C"
      target.style.transition = "opacity 0.5s linear";
      target.style.opacity = "1";
      target.style.zIndex = "10";
      setRangeValue(75);
      setValue(3);
    }else{
      const target = sections[4]!;
      parentDiv.style.backgroundColor = "#000000"
      target.style.transition = "opacity 0.5s linear";
      target.style.opacity = "1";
      target.style.zIndex = "10";
      setRangeValue(100);
      setValue(4);
    }
  };

  const handlePointClick = (idx: 0 | 1 | 2 | 3 | 4) => {
      scrollToTarget(idx);
  };

  useEffect(() => {
    handleScroll();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={
        "fixed top-[50%] z-[5] hidden w-[80vh] translate-y-[-50%] rotate-90 scale-95 ipadpro:left-[68%] ipadpro:block laptop:left-[79%]"
      }
    >
      <label htmlFor="scrollBar">
        <div
          className={
            "absolute bottom-1 z-10 flex h-[1vw] w-full items-center justify-between rounded-lg bg-[#FFFFFFF0]"
          }
        >
          <div
            className={
              styles.scrollBarOrange +
              " absolute z-20 h-[1vw] rounded-[1vw] bg-[#FF676B] shadow-[0.6vw_-0.3vw_0px_black]"
            }
            style={
              {
                "--progress": `${Math.min(rangeValue + (rangeValue > 50 ? 12 : 15), 97)}%`,
              } as React.CSSProperties
            }
          >
            {" "}
          </div>
          <button
            onClick={() => handlePointClick(0)}
            className="z-30 h-[2vw] w-[2vw] rounded-full border-[0.7vw] border-[#FF676B] bg-white shadow-[0.3vw_-0.2vw_0px_black]"
          >
            {" "}
          </button>
          <button
            onClick={() => handlePointClick(1)}
            className="z-30 h-[2vw] w-[2vw] rounded-full border-[0.7vw] border-[#FF676B] bg-white shadow-[0.3vw_-0.2vw_0px_black]"
          >
            {" "}
          </button>
          <button
            onClick={() => handlePointClick(2)}
            className="z-30 h-[2vw] w-[2vw] rounded-full border-[0.7vw] border-[#FF676B] bg-white shadow-[0.3vw_-0.2vw_0px_black]"
          >
            {" "}
          </button>
          <button
            onClick={() => handlePointClick(3)}
            className="z-30 h-[2vw] w-[2vw] rounded-full border-[0.7vw] border-[#FF676B] bg-white shadow-[0.3vw_-0.2vw_0px_black]"
          >
            {" "}
          </button>
          <button
            onClick={() => handlePointClick(4)}
            className="z-30 h-[2vw] w-[2vw] rounded-full border-[0.7vw] border-[#FF676B] bg-white shadow-[0.3vw_-0.2vw_0px_black]"
          >
            {" "}
          </button>
        </div>
        <input
          type="range"
          id="scrollBar"
          min={0}
          max={100}
          step={1}
          value={rangeValue}
          // onChange={(e) => setRangeValue(Number(e.target.value))}
          className={` ${styles.scrollBar} + ${dynamicClass} `}
        />
      </label>
    </div>
  );
};

export default LandingProgressBar;
