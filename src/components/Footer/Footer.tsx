"use client";

import React, { useEffect, useState } from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import LottieAnimation from "./LottieAnimation";

const Footer: React.FC = () => {
  const [animWidth, setAnimWidth] = useState(280);
  const [animHeight, setAnimHeight] = useState(280);

  const resizeFunc = () => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;

      if (width < 320) {
        setAnimHeight(280);
        setAnimWidth(280);
      } else if (width < 400) {
        setAnimHeight(380);
        setAnimWidth(380);
      } else if (width < 500) {
        setAnimHeight(520);
        setAnimWidth(520);
      } else if (width < 600) {
        setAnimHeight(630);
        setAnimWidth(630);
      } else if (width < 920) {
        setAnimHeight(650);
        setAnimWidth(650);
      } else if (width < 1005) {
        setAnimHeight(700);
        setAnimWidth(700);
      } else if (width < 1050) {
        setAnimHeight(800);
        setAnimWidth(800);
      } else {
        setAnimHeight(1000);
        setAnimWidth(1000);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Initial call to resizeFunc
      resizeFunc();

      // Attach resize listener
      window.addEventListener("resize", resizeFunc);

      // Cleanup on unmount
      return () => {
        window.removeEventListener("resize", resizeFunc);
      };
    }
  }, []);

  return (
    <footer className="relative bg-black text-white gap-[1rem] flex-col justify-start items-center pt-[2rem] overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center w-[100vw] justify-center lg:justify-around">
        <button>Brochure</button>
        <div className="flex flex-col items-center justify-center">
          <h3 className="font-oxygen text-lg font-bold leading-[17.41px] tracking-[0.4em] md:tracking-[0.5em] lg:text-xl">
            CONTACT US
          </h3>
          <div className="flex justify-center items-center mt-4 space-x-4 lg:mt-6 md:mt-5 md:space-x-6 lg:space-x-8">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className={"flex justify-center items-center " + styles["social-icon"]}
            >
              <Image
                src="/assets/instagram.png"
                alt="Instagram icon"
                width={50}
                height={50}
                className={"block" + styles["social-icon"]}
                priority
              />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              className={"flex justify-center items-center " + styles["social-icon"]}
            >
              <Image
                src="/assets/linkedln.png"
                alt="Linkedln icon"
                width={40}
                height={40}
                className="block"
                priority
              />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className={"flex justify-center items-center " + styles["social-icon"]}
            >
              <Image
                src="/assets/facebook.png"
                alt="Facebook icon"
                width={40}
                height={40}
                className="block"
                priority
              />
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              className={"flex justify-center items-center " + styles["social-icon"]}
            >
              <Image
                src="/assets/twitter.png"
                alt="Twitter icon"
                width={40}
                height={40}
                className="block"
                priority
              />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="w-[100vw] flex flex-col items-center justify-center relative top-0 left-0">
          <div>
            <Image
              src="/assets/footer-background.png"
              alt="Incandescence Logo Background"
              height={animWidth}
              width={animWidth}
              priority
            />
          </div>
          <div className="absolute bottom-[2px]">
            <Image
              src="/assets/incandanimation.gif"
              alt="Incandescence Animation"
              height={animHeight}
              width={animWidth}
              priority
            />
          </div>
        </div>

        {/* Text Section with Lottie Animation */}
        <div
          className={
            "flex flex-col items-center mt-[4rem] mb-[1rem] justify-center gap-0"
          }
        >
          <span
            className={
              "font-neue-haas text-[2vw] md:text-[0.9vw] lg:text-[0.6vw] font-thin leading-none text-center tracking-[0.3em] m-0 p-0 " +
              styles.text
            }
          >
            MADE IN COLLABORATION WITH GDG NIT SILCHAR
          </span>
          <div>
            <LottieAnimation />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
