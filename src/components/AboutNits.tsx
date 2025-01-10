"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "~/styles/AboutNits.module.css";

const AboutUs2 = () => {
  const [isWaveHovered, setIsWaveHovered] = useState(false);

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[url('/assets/aboutNITS/MAZE.png')] bg-cover bg-no-repeat mobile:scale-[.85] mobile3:scale-100 md:w-screen lg:w-screen">
      <div className="relative">
        <svg
          className={`absolute left-[-2.4rem] z-[1000] w-[7.1rem] -translate-y-[8.5rem] mobile1:-translate-y-[1.5rem]  mobile2:left-[-2.2rem] mobile2:top-[-1.7rem] mobile2:-translate-y-0 sm:left-[-4.4rem] sm:top-[-1.3rem] sm:w-[10rem] lg:left-[-7rem] lg:top-[-2.4rem] lg:w-[15rem] ${styles.circle}`}
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

          <circle cx="0" cy="0" r="11.7482" fill="#FF00FF">
            <animateMotion repeatCount="indefinite" dur="5s">
              <mpath href="#ellipsePath" />
            </animateMotion>
          </circle>
        </svg>

        <div
          className={`flex h-[30rem] w-[22rem] justify-center rounded-[36px] border-4 border-black bg-[#FBFAF0] sm:w-[35rem] sm:rotate-[-4.21deg] lg:h-[30rem] lg:w-[45rem] lg:rotate-[-4.21deg] xl:h-[27rem] ${styles.box1}`}
        >
          <div className="absolute flex h-[3rem] w-[98%] items-center rounded-tl-[36px] rounded-tr-[36px] border-b-2 border-black bg-[#c4f8fc] sm:w-[99.7%] lg:w-[100%]">
            <div className="mx-1 ml-3 h-[1.4rem] w-[1.4rem] rotate-[-4.21deg] rounded-[50%] bg-[#2bebfa] px-3 md:px-3 lg:mx-1 lg:ml-5 lg:px-3"></div>
            <div className="mx-1 h-[1.4rem] w-[1.4rem] rotate-[-4.21deg] rounded-[50%] bg-[#2bebfa] px-3 md:px-3 lg:mx-1 lg:px-3"></div>
            <div className="mx-1 h-[1.4rem] w-[1.4rem] rotate-[-4.21deg] rounded-[50%] bg-[#2bebfa] px-3 md:px-3 lg:mx-1 lg:px-3"></div>
            <Image
              src="/assets/aboutNITS/heart.svg"
              alt="Heart Icon"
              className={`absolute left-[14rem] top-[0.1rem] h-[4rem] w-[7rem] rotate-[3.8deg] sm:left-[26.5rem] lg:left-[34rem] lg:top-[-1.3rem] lg:h-[6rem] lg:w-[9rem]`}
              width={80}
              height={100}
              
            />
          </div>
          <div className="flex justify-center">
            <div className="absolute top-[4.3rem] flex justify-center sm:top-[3.5rem] lg:top-[3.2rem]">
              <Image
                src="/assets/aboutNITS/ABOUTNITS.svg"
                alt="About Us Image"
                className="h-[5rem] w-[17rem] rotate-[4.21deg] sm:h-[5.5rem] sm:w-[16rem] lg:h-[6.7rem] lg:w-[20rem] xl:h-[7rem] xl:w-[28rem]"
                width={1200}
                height={1600}
              />
            </div>
          </div>
          <div className="flex items-center justify-center align-middle">
            <div className="absolute top-[8.5rem] w-[100%] flex items-center justify-center pl-[1rem] pr-[1rem] sm:top-[9rem] lg:top-[10rem]">
              <p
                className={`relative w-[100%] text-center font-tusker2 text-[22px] leading-[2.4rem] tracking-normal sm:text-[34px] sm:leading-[3.2rem] md:text-[30px] md:leading-[3.3rem] lg:text-[38px] lg:leading-[3.8rem] xl:text-[30px] xl:leading-[3.5rem] xl:tracking-wide`}
              >
                NIT Silchar&apos;s cultural extravaganza,
                <span
                  className={`inline-block w-[8rem] md:w-[10.2rem] lg:w-[10rem] xl:w-[11rem] ${styles.incandCont}`}
                >
                  <span
                    style={{ letterSpacing: "1.2px" }}
                    className={`text-[18px] xl:text-[25px] ${styles.incandText}`}
                  >
                    INCANDESCENCE
                  </span>
                </span>
                <br /> invites you on a journey into
                <Image
                  src="/assets/aboutNITS/catanimation.gif"
                  alt="animated gif"
                  className={`ml-2 mr-2 inline-block h-[2.5rem] w-[4.3rem] rounded-[53.99px] lg:h-[3rem] lg:w-[6.3rem] ${styles.smallImage}`}
                  width={26}
                  height={18}
                  unoptimized
                />
                the <br />
                unknown. Experience a labyrinth of culture, <br />
                <Image
                  src="/assets/aboutNITS/musicanimation.gif"
                  alt="animated gif"
                  className={`ml-2 mr-2 inline-block h-[2.5rem] w-[4.3rem] rounded-[53.99px] lg:h-[3rem] lg:w-[6.3rem] ${styles.smallImage}`}
                  width={26}
                  height={18}
                  unoptimized
                />
                where brilliance shines.
              </p>
              <div className="absolute right-[5.2rem] top-[18.1rem] rotate-[-10deg] lg:right-[6.9rem] lg:top-[14.2rem] xl:right-[5.5rem] xl:top-[11.5rem]">
                {
                  <svg
                    className="absolute w-[6.3rem] lg:w-[10rem]"
                    viewBox="0 0 102 109"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="path1"
                      d="M91.8047 61.4629L91.8047 61.4628C91.8026 61.4555 91.7591 61.3032 91.3524 61.0939C90.9443 60.884 90.3052 60.6913 89.3977 60.5565C87.5909 60.2881 85.0077 60.2887 81.7978 60.576C75.3985 61.1487 66.7602 62.8366 57.4146 65.5164C48.069 68.1962 39.8488 71.3424 34.1184 74.2478C31.244 75.7051 29.053 77.0735 27.663 78.2586C26.9648 78.8539 26.525 79.3559 26.2901 79.7502C26.0561 80.1432 26.0999 80.2954 26.102 80.3027L26.102 80.3028L26.1021 80.3029C26.1041 80.3102 26.1476 80.4625 26.5544 80.6718C26.9625 80.8817 27.6015 81.0744 28.5091 81.2092C30.3159 81.4776 32.8991 81.477 36.109 81.1897C42.5083 80.617 51.1466 78.9291 60.4922 76.2493C69.8378 73.5695 78.0579 70.4233 83.7884 67.5179C86.6627 66.0605 88.8537 64.6921 90.2438 63.5071C90.942 62.9118 91.3818 62.4097 91.6166 62.0155C91.8507 61.6225 91.8069 61.4703 91.8048 61.463L91.8047 61.4629Z"
                      stroke="black"
                      stroke-width="2.45"
                    ></path>
                    <circle r="2.26925" fill="#E1067B">
                      <animateMotion repeatCount="indefinite" dur="2s">
                        <mpath href="#path1"></mpath>
                      </animateMotion>
                    </circle>
                    <path
                      id="path2"
                      d="M84.2026 83.5248C84.2027 83.5248 84.2017 83.5234 84.1994 83.5209C84.2012 83.5236 84.2024 83.5249 84.2026 83.5248ZM84.107 83.6392C84.1421 83.5723 84.1598 83.5253 84.1686 83.4948C84.1429 83.4762 84.1 83.45 84.0312 83.4191C83.8225 83.3252 83.4786 83.2377 82.9689 83.1891C81.9557 83.0924 80.5026 83.1674 78.6882 83.4261C75.0747 83.9413 70.2147 85.1574 64.9764 86.9611C59.738 88.7648 55.1595 90.7986 51.9949 92.6173C50.4059 93.5305 49.2147 94.3661 48.4758 95.066C48.1041 95.4182 47.8869 95.6988 47.7803 95.9012C47.7451 95.9681 47.7274 96.0151 47.7186 96.0456C47.7443 96.0641 47.7872 96.0904 47.856 96.1213C48.0647 96.2152 48.4086 96.3027 48.9183 96.3513C49.9315 96.4479 51.3847 96.373 53.199 96.1143C56.8125 95.5991 61.6725 94.383 66.9109 92.5793C72.1492 90.7756 76.7277 88.7418 79.8923 86.9231C81.4813 86.0099 82.6725 85.1743 83.4114 84.4743C83.7832 84.1222 84.0003 83.8416 84.107 83.6392ZM47.7103 96.0901C47.7105 96.0901 47.7106 96.0883 47.7104 96.085C47.7101 96.0885 47.7102 96.0902 47.7103 96.0901ZM47.6879 96.0196C47.686 96.0168 47.6848 96.0155 47.6847 96.0156C47.6845 96.0156 47.6855 96.017 47.6879 96.0196ZM84.1768 83.4553C84.1771 83.4519 84.177 83.4502 84.1769 83.4503C84.1768 83.4503 84.1766 83.452 84.1768 83.4553Z"
                      stroke="black"
                      stroke-width="1.83"
                    ></path>
                    <circle r="1.29532" fill="#E1067B">
                      <animateMotion repeatCount="indefinite" dur="2s">
                        <mpath href="#path2"></mpath>
                      </animateMotion>
                    </circle>
                    <path
                      id="path3"
                      d="M3.33399 61.2922C3.41203 61.5644 3.66335 61.9151 4.35206 62.2694C5.04035 62.6234 6.05035 62.9174 7.39981 63.1179C10.0917 63.5178 13.8878 63.5117 18.5464 63.0947C27.8462 62.2624 40.3681 59.8135 53.8951 55.9347C67.4221 52.0559 79.339 47.4971 87.6667 43.2748C91.8384 41.1597 95.0609 39.1532 97.1318 37.3876C98.17 36.5025 98.8708 35.718 99.2668 35.053C99.6632 34.3876 99.6905 33.957 99.6124 33.6848C99.5344 33.4127 99.283 33.062 98.5943 32.7077C97.906 32.3536 96.8961 32.0597 95.5466 31.8592C92.8547 31.4593 89.0586 31.4654 84.4 31.8823C75.1002 32.7147 62.5783 35.1635 49.0513 39.0423C35.5243 42.9211 23.6074 47.48 15.2797 51.7023C11.108 53.8174 7.88552 55.8238 5.81456 57.5894C4.77638 58.4746 4.07563 59.2591 3.67956 59.9241C3.28324 60.5895 3.25594 61.0201 3.33399 61.2922Z"
                      stroke="black"
                      stroke-width="2.09"
                    ></path>
                    <ellipse rx="3.27719" ry="3.27719" fill="#E1067B">
                      <animateMotion repeatCount="indefinite" dur="2s">
                        <mpath href="#path3"></mpath>
                      </animateMotion>
                    </ellipse>
                  </svg>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs2;
