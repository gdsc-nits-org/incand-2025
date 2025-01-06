"use client";

import React, { useEffect, useState } from "react";
import styles from "~/styles/LandingProgressBar.module.css";

const LandingProgressBar = () => {
  const [value, setValue] = useState<0 | 1 | 2 | 3 | 4>(0);
  const [rangeValue, setRangeValue] = useState(0);

  const calValue = (value: number) => {
    if (value < 15) {
      setValue(0);
      return 0;
    } else if (value < 40) {
      setValue(1);
      return 1;
    } else if (value < 65) {
      setValue(2);
      return 2;
    } else if (value < 90) {
      setValue(3);
      return 3;
    } else {
      setValue(4);
      return 4;
    }
  };

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

  const scrollToTarget = (idx: number) => {
    const documentHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollY = (idx / 4) * (documentHeight - windowHeight);
    window.scrollTo({
      top: scrollY,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const documentHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight;
    const percentage = (scrollY / (documentHeight - windowHeight)) * 100;
    setRangeValue(percentage);
    calValue(percentage);
  };

  const handlePointClick = (idx: 0 | 1 | 2 | 3 | 4) => {
    if (value - idx == 1 || idx - value == 1) {
      scrollToTarget(idx);
    }
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
        "fixed top-[50%] z-50 hidden w-[40vw] translate-y-[-50%] rotate-90 scale-95 ipadpro:left-[79%] ipadpro:block"
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
