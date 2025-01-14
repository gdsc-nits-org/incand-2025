"use client";

import React, { useEffect, useState } from "react";
import styles from "~/styles/LandingProgressBar.module.css";

const navMap = new Map([
  ["/", 0],
  ["/#home", 0],
  ["/#about", 1],
  ["/#about-nits", 2],
  ["/#sponsors", 3],
  ["/#merch", 4],
]);

const LandingProgressBar = () => {
  const [value, setValue] = useState<0 | 1 | 2 | 3 | 4 | 5>(0);
  const [rangeValue, setRangeValue] = useState(0);

  const calValue = (value: number) => {
    if (value < 15) {
      setValue(0);
      return 0;
    } else if (value < 38) {
      setValue(1);
      return 1;
    } else if (value < 58) {
      setValue(2);
      return 2;
    } else if (value < 75) {
      setValue(3);
      return 3;
    } else if (value < 98) {
      setValue(4);
      return 4;
    } else {
      setValue(5);
      return 5;
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
            : value === 4
              ? styles.scrollBarMerch
              : styles.scrollBarFooter;

  const scrollToTarget = (idx: number) => {
    const ids = ["home", "about", "about-nits", "sponsors", "merch", "footer"];
    const target = document.getElementById(ids[idx] ?? "home");
    if (target) {
      setTimeout(() => {
        target.style.transition = " opacity 0.5s ease-out";
        target.style.opacity = "1";
      }, 100);
      window.scrollTo({
        top: target.offsetTop,
      });
      target.style.transition = "";
    }
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const documentHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight;
    const percentage = (scrollY / (documentHeight - windowHeight)) * 100;
    setRangeValue(percentage);
    const v = calValue(percentage);
    setValue(v);
    // console.log(v);
  };

  const handlePointClick = (idx: 0 | 1 | 2 | 3 | 4 | 5) => {
    console.log(value, idx);
    if (value - idx == 1 || idx - value == 1) {
      const sections = document.querySelectorAll("section");
      const targetPlus = sections[idx]!;
      targetPlus.style.opacity = "0";
      scrollToTarget(idx);
      setValue(idx);
    }
  };

  useEffect(() => {
    const link = window.location.pathname + window.location.hash;
    const idx = navMap.get(link);
    if (
      idx === 0 ||
      idx == 1 ||
      idx === 2 ||
      idx === 3 ||
      idx === 4 ||
      idx === 5
    ) {
      setValue(idx);
      setRangeValue(idx * 20);
      scrollToTarget(idx);
    }
    handleScroll();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const points = Array.from({ length: 6 }, (_, index) => index);

  return (
    <div
      className={
        styles.container +
        " fixed top-[50%] z-50 hidden w-[40vw] translate-y-[-50%] rotate-90 scale-95 ipadair:left-[79%] ipadair:block"
      }
    >
      <label className="cursor-default" htmlFor="scrollBar">
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
                "--progress": `${Math.min(rangeValue + (15 - rangeValue * 0.08), 97)}%`,
              } as React.CSSProperties
            }
          >
            {" "}
          </div>
          {points.map((point) => (
            <button
              key={point}
              onClick={() => {
                handlePointClick(point as 0 | 1 | 2 | 3 | 4 | 5);
              }}
              className="relative z-50 flex h-[2vw] w-[2vw] items-center justify-center rounded-full bg-[#FF676B] shadow-[0.3vw_-0.2vw_0px_black]"
            >
              <div className="z-20 h-[0.7vw] w-[0.7vw] rounded-full bg-white">
                {" "}
              </div>
            </button>
          ))}
        </div>
        <input
          type="range"
          id="scrollBar"
          min={0}
          max={100}
          step={1}
          value={rangeValue}
          className={` ${styles.scrollBar} + ${dynamicClass} -z-50 cursor-default`}
        />
      </label>
    </div>
  );
};

export default LandingProgressBar;
