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
    <footer className="relative flex-col items-center justify-start gap-[1rem] overflow-hidden bg-black pt-[2rem] text-white">
      <div className="flex w-[100vw] flex-col items-center justify-center lg:flex-row lg:justify-around">
        <button>Brochure</button>
        <div className="flex flex-col items-center justify-center">
          <h3 className="font-oxygen text-lg font-bold leading-[17.41px] tracking-[0.4em] md:tracking-[0.5em] lg:text-xl">
            CONTACT US
          </h3>
          <div className="mt-4 flex items-center justify-center space-x-4 md:mt-5 md:space-x-6 lg:mt-6 lg:space-x-8">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className={
                "flex items-center justify-center " + styles["social-icon"]
              }
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
              className={
                "flex items-center justify-center " + styles["social-icon"]
              }
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
              className={
                "flex items-center justify-center " + styles["social-icon"]
              }
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
              className={
                "flex items-center justify-center " + styles["social-icon"]
              }
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
        <div className="relative left-0 top-0 flex w-[100vw] flex-col items-center justify-center">
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
            "mb-[1rem] mt-[4rem] flex flex-col items-center justify-center gap-0"
          }
        >
          <span
            className={
              "m-0 p-0 text-center font-neue-haas text-[2vw] font-thin leading-none tracking-[0.3em] md:text-[0.9vw] lg:text-[0.6vw] " +
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
