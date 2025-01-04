"use client";

import React, { use, useEffect, useState } from "react";
import styles from "~/styles/LandingScrollBar.module.css";

const LandingScrollBar = () => {
  const [value, setValue] = useState<0 | 1 | 2 | 3 | 4>(0);
  const [rangeValue, setRangeValue] = useState(0);

  useEffect(() => {
    handleScroll();
  }, []);

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
    const pos = [0, 900, 1800, 2700, 4000];
    const targetScrollPosition = pos[idx];
    window.scrollTo({
      top: targetScrollPosition,
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
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={
        "3xl:left-[90%] fixed top-[50%] z-50 hidden w-[40rem] translate-y-[-50%] rotate-90 scale-95 md:left-[57%] md:block lg:left-[65%] xl:left-[70%] 2xl:left-[75%]"
      }
    >
      <label htmlFor="scrollBar">
        <div
          className={
            "pointer-events-none absolute bottom-1 z-10 flex h-4 w-full items-center justify-between rounded-lg bg-[#FFFFFFF0]"
          }
        >
          <div
            className={
              styles.scrollBarOrange +
              " absolute z-20 h-4 rounded-lg bg-[#FF676B] shadow-[6px_-4px_0px_black]"
            }
            style={
              {
                "--progress": `${Math.min(rangeValue + (rangeValue > 50 ? 12 : 15), 97)}%`,
              } as React.CSSProperties
            }
          >
            {" "}
          </div>
          <div className="z-30 h-8 w-8 rounded-full border-[10px] border-[#FF676B] bg-white shadow-[4px_-2px_0px_black]"></div>
          <div className="z-30 h-8 w-8 rounded-full border-[10px] border-[#FF676B] bg-white shadow-[4px_-2px_0px_black]"></div>
          <div className="z-30 h-8 w-8 rounded-full border-[10px] border-[#FF676B] bg-white shadow-[4px_-2px_0px_black]"></div>
          <div className="z-30 h-8 w-8 rounded-full border-[10px] border-[#FF676B] bg-white shadow-[4px_-2px_0px_black]"></div>
          <div className="z-30 h-8 w-8 rounded-full border-[10px] border-[#FF676B] bg-white shadow-[4px_-2px_0px_black]"></div>
        </div>
        <input
          type="range"
          id="scrollBar"
          min={0}
          max={100}
          step={1}
          value={rangeValue}
          className={` ${styles.scrollBar} + ${dynamicClass} `}
        />
      </label>
    </div>
  );
};

export default LandingScrollBar;
