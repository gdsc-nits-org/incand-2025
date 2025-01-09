"use client";

import React, { useEffect, useState } from "react";
import styles from "~/styles/Footer.module.css";
import Image from "next/image";
import LottieAnimation from "./LottieAnimation";
import Link from "next/link";
import FooterButton from "../FooterButton";

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
        setAnimHeight(600);
        setAnimWidth(600);
      } else {
        setAnimHeight(750);
        setAnimWidth(750);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      resizeFunc();
      window.addEventListener("resize", resizeFunc);
      return () => {
        window.removeEventListener("resize", resizeFunc);
      };
    }
  }, []);

  return (
    <footer className="relative flex-col items-center justify-start gap-[1rem] overflow-hidden bg-black pt-[2rem] text-white hide">
      <div className="flex w-[100vw] flex-col items-center justify-center lg:flex-row lg:justify-around xl:translate-y-10 z-[1000]">
        <FooterButton />
        <div className="flex flex-col items-center justify-center w-[65%]">
          <h3 className="font-oxygen text-lg font-bold leading-[17.41px] tracking-[0.4em] md:tracking-[0.5em] lg:translate-x-10 lg:text-xl">
            CONTACT US
          </h3>
          <div className="mt-4 flex items-center justify-center gap-4 space-x-4 md:mt-5 md:gap-2 md:space-x-6 lg:mt-6 lg:scale-125 lg:gap-1 lg:space-x-8">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className={
                "flex items-center justify-center " + styles["social-icon"]
              }
            >
              <Image
                src="/assets/Footer/instagram.png"
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
                src="/assets/Footer/linkedln.png"
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
                src="/assets/Footer/facebook.png"
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
                src="/assets/Footer/twitter.png"
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
        <div className="relative left-0 top-0 flex w-[100vw] flex-col items-center justify-center xl:scale-x-125 xl:scale-y-105">
          <div>
            <Image
              src="/assets/Footer/footer-background.png"
              alt="Incandescence Logo Background"
              height={animWidth}
              width={animWidth}
              priority
            />
          </div>
          <div className="absolute bottom-[2px]">
            <Image
              src="/assets/Footer/incandanimation.gif"
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
            "mb-[1rem] mt-[4rem] flex flex-col items-center justify-center gap-0 lg:flex-row"
          }
        >
          <Link
            href="https://gdscnits.in/"
            className={
              "font-neue-haas m-0 p-0 text-center text-[2vw] font-thin leading-none tracking-[0.3em] md:text-[0.9vw] lg:text-[0.6vw] " +
              styles.text
            }
          >
            MADE IN COLLABORATION WITH GDG NIT SILCHAR
          </Link>
          <div>
            <LottieAnimation />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
