"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./about.module.css";

const AboutUs2 = () => {
  const [isWaveHovered, setIsWaveHovered] = useState(false);

  return (
    <div className="relative flex h-screen w-screen items-center justify-center md:w-screen lg:w-screen">
      <div className="absolute inset-0 flex items-center bg-[#c4f8fc] bg-[url('/assets/aboutNITS/MAZE.png')] bg-cover bg-no-repeat">
        <svg
          className={`absolute left-[7.985vw] top-[35.042vw] z-10 w-[26.667vw] md:left-[8.385vw] md:top-[22.5vw] md:w-[17.5vw] lg:top-[20.5vw] xl:top-[7vw] ${styles.circle}`}
          viewBox="0 0 360 219"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="ellipsePath"
            d="M329.917 7.77876C330.863 9.18142 331.191 11.2468 330.516 14.2216C329.842 17.1955 328.213 20.8361 325.603 25.0865C320.391 33.5759 311.513 44.1019 299.593 55.9747C275.775 79.697 240.101 108.512 198.214 136.764C156.328 165.017 116.248 187.3 85.3306 200.496C69.8569 207.101 56.7718 211.389 46.9479 213.042C42.0293 213.869 38.0437 214.016 35.0337 213.527C32.0228 213.038 30.2305 211.961 29.2844 210.558C28.3383 209.156 28.0109 207.09 28.6855 204.115C29.36 201.141 30.9886 197.501 33.5984 193.25C38.811 184.761 47.6886 174.235 59.6089 162.362C83.4263 138.64 119.101 109.825 160.987 81.5726C202.873 53.3199 242.954 31.0372 273.871 17.8407C289.345 11.236 302.43 6.9479 312.254 5.29507C317.172 4.46755 321.158 4.32131 324.168 4.81001C327.179 5.29885 328.971 6.3761 329.917 7.77876Z"
            stroke="black"
            stroke-width="3.91608"
          />

          <circle cx="0" cy="0" r="11.7482" fill="#FAE00D">
            <animateMotion repeatCount="indefinite" dur="5s">
              <mpath href="#ellipsePath" />
            </animateMotion>
          </circle>
        </svg>

        <div
          className={`absolute h-[63%] w-[66.62%] justify-center rounded-[36px] border-4 border-black bg-[#FBFAF0] sm:rotate-[-4.21deg] lg:rotate-[-4.21deg] ${styles.box1}`}
        >
          <div className="absolute flex h-[11.23%] w-[100%] items-center rounded-tl-[36px] rounded-tr-[36px] border-b-2 border-b-black bg-[#c4f8fc]">
            <div className="mx-1 ml-3 h-[34.7%] w-[2.07%] rotate-[-4.21deg] rounded-[50%] bg-[#2bebfa] px-3 md:px-3 lg:mx-1 lg:ml-5 lg:px-3"></div>
            <div className="mx-1 h-[34.7%] w-[2.07%] rotate-[-4.21deg] rounded-[50%] bg-[#2bebfa] px-3 md:px-3 lg:mx-1 lg:px-3"></div>
            <div className="mx-1 h-[34.7%] w-[2.07%] rotate-[-4.21deg] rounded-[50%] bg-[#2bebfa] px-3 md:px-3 lg:mx-1 lg:px-3"></div>
            <Image
              src="/assets/aboutNITS/heart.svg"
              alt="Heart Icon"
              className={`absolute h-[135%] w-[24%] rotate-[8deg] items-end sm:rotate-[5deg] lg:rotate-[5deg] xl:top-[60%] xl:h-[200%] xl:rotate-[2deg] ${styles.img1} `}
              width={100}
              height={200}
            />
          </div>
          <div className="relative top-[15%] flex justify-center xl:top-[12%]">
            <Image
              src="/assets/aboutNITS/AB UT NIT SILCHAR.png"
              alt="About Us Image"
              className="h-[80%] w-[84%] rotate-[4.21deg] sm:h-[15.44%] sm:w-[70%] sm:rotate-[4.21deg] md:h-[20.44%] md:w-[75%] lg:h-[60%] lg:w-[44%] lg:rotate-[4.21deg] xl:h-[24.44%] xl:w-[35%]"
              width={900}
              height={1200}
            />
            <Image
              src="/assets/AboutNITS/wave.gif"
              alt="Wave"
              width={500}
              height={1}
              className={`absolute top-[58%] w-[82%] opacity-0 transition-opacity duration-300 hover:opacity-100 md:top-[51%] md:w-[74%] lg:top-[55%] lg:w-[44%] xl:top-[53%] xl:w-[35%]`}
            />
          </div>
          <div className="relative top-[17%] flex justify-center align-middle md:top-[14%] lg:top-[17%] xl:top-[12%]">
            <p
              className={`font-tusker2 w-[100%] text-center text-[25px] leading-[2.4rem] tracking-normal sm:text-[34px] sm:leading-[3.2rem] md:text-[34px] md:leading-[3.3rem] lg:text-[34px] lg:leading-[3.2rem] xl:text-[30px] xl:leading-[3rem] xl:tracking-wide ${styles.smallFont}`}
            >
              NIT Silchar&apos;s cultural extravaganza,INCANDESCENCE
              <br /> invites you on a journey into
              <Image
                src="/assets/aboutNITS/catanimation.gif"
                alt="animated gif"
                className={`ml-2 mr-2 inline-block h-[40.945px] w-[80.18px] rounded-[53.99px] sm:h-[57px] sm:w-[95px] lg:ml-3 lg:mr-3 lg:h-[40px] lg:w-[90px] ${styles.smallImage}`}
                width={26}
                height={18}
              />
              the <br />
              unknown. Experience a labyrinth of culture, <br />
              <Image
                src="/assets/aboutNITS/musicanimation.gif"
                alt="animated gif"
                className={`ml-2 mr-2 inline-block h-[40.945px] w-[80.18px] rounded-[53.99px] sm:h-[57] sm:w-[95] lg:ml-3 lg:mr-3 lg:h-[40px] lg:w-[90px] ${styles.smallImage}`}
                width={26}
                height={18}
              />
              where brilliance shines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs2;
