"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "~/styles/AboutUs.module.css";

const About1 = () => {
    const [isWaveHovered, setIsWaveHovered] = useState(false);

    return (
        <div className=" flex h-screen bg-[url('/assets/images/maze.png')]  bg-cover bg-no-repeat w-screen items-center justify-center md:w-screen lg:w-screen">
            <div className="relative ">
                <svg
                    className={`absolute w-[7.1rem] top-[-1.7rem] sm:top-[-1.3rem] sm:left-[-4.4rem] sm:w-[10rem] left-[-2.2rem] lg:w-[15rem] lg:top-[-2.4rem] lg:left-[-7rem] z-[1000]  ${styles.circle}`}
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
                    className={`h-[30rem] w-[22rem] sm:w-[35rem] lg:h-[30rem] lg:w-[45rem] xl:h-[27rem] flex justify-center rounded-[36px] border-4 border-black bg-[#FBFAF0] sm:rotate-[-4.21deg] lg:rotate-[-4.21deg] ${styles.box1}`}
                >
                    <div className="absolute flex h-[3rem] w-[98%] sm:w-[99.7%] lg:w-[100%] items-center rounded-tl-[36px] rounded-tr-[36px] border-b-2 border-black bg-[#FFF59F]">
                        <div className="mx-1 ml-3 h-[1.4rem] w-[1.4rem] rotate-[-4.21deg] rounded-[50%] bg-[#FFA6F6] px-3 md:px-3 lg:mx-1 lg:ml-5 lg:px-3"></div>
                        <div className="mx-1 h-[1.4rem] w-[1.4rem] rotate-[-4.21deg] rounded-[50%] bg-[#FFA6F6] px-3 md:px-3 lg:mx-1 lg:px-3"></div>
                        <div className="mx-1 h-[1.4rem] w-[1.4rem] rotate-[-4.21deg] rounded-[50%] bg-[#FFA6F6] px-3 md:px-3 lg:mx-1 lg:px-3"></div>
                        <Image
                            src="/assets/images/heart.png"
                            alt="Heart Icon"
                            className={`absolute h-[4rem] w-[7rem] top-[0.1rem] sm:left-[26.5rem] lg:h-[6rem] lg:w-[9rem] left-[14rem] lg:left-[34rem] lg:top-[-1.3rem] rotate-[3.8deg]  `}
                            width={80}
                            height={100}
                        />
                    </div >
                    <div className="flex justify-center">
                        <div className="absolute top-[4.3rem] sm:top-[3.5rem] lg:top-[3.2rem] flex justify-center ">
                            <Image
                                src="/assets/images/about.png"
                                alt="About Us Image"
                                className=" h-[4rem] w-[12rem] sm:w-[16rem] sm:h-[5.5rem] lg:h-[6.7rem] lg:w-[20rem] rotate-[4.21deg] "
                                width={600}
                                height={400}
                            />
                            <Image
                                src="/assets/About/wave.gif"
                                alt="Wave"
                                width={500}
                                height={1}
                                className={`absolute top-[2.3rem] sm:top-[2.8rem] lg:top-[3.5rem] w-[48rem] xl:w-[20rem] opacity-0 transition-opacity duration-300 hover:opacity-100 `}
                            />
                        </div>
                    </div>
                    <div className="flex justify-center items-center align-middle ">
                        <div className="absolute flex top-[8.5rem] sm:top-[9rem] lg:top-[10rem] justify-center items-center pl-[1rem] pr-[1rem] ">
                            <p
                                className={`relative w-[100%] text-center font-tusker2 text-[22px] leading-[2.4rem] tracking-normal sm:text-[34px] sm:leading-[3.2rem] md:text-[30px] md:leading-[3.3rem] lg:text-[38px] lg:leading-[3.8rem] xl:text-[30px] xl:leading-[3.5rem] xl:tracking-wide `}
                            >
                                NIT Silchar&apos;s cultural extravaganza,
                                <span
                                    className={`inline-block w-[8rem] md:w-[10.2rem] lg:w-[10rem] xl:w-[11rem]    ${styles.incandCont}`}
                                >
                                    <span
                                        style={{ letterSpacing: "1.2px" }}
                                        className={`text-[18px] md:text-[24.8px] xl:text-[24px] ${styles.incandText}`}
                                    >
                                        INCANDESCENCE
                                    </span>
                                    <span className={` ${styles.incandLogo}`}>
                                        <img src="/assets/images/incand.png" alt="incand logo" />
                                    </span>
                                </span>
                                <br /> invites you on a journey into
                                <Image
                                    src="/assets/About/spidey.gif"
                                    alt="animated gif"
                                    className={`ml-2 mr-2 inline-block h-[2.5rem] w-[4.3rem] lg:h-[3rem] lg:w-[6.3rem] rounded-[53.99px] ${styles.smallImage}`}
                                    width={26}
                                    height={18}
                                />
                                the <br />
                                unknown. Experience a labyrinth of culture, <br />
                                <Image
                                    src="/assets/About/dj.gif"
                                    alt="animated gif"
                                    className={`ml-2 mr-2 inline-block h-[2.5rem] w-[4.3rem] lg:h-[3rem] lg:w-[6.3rem] rounded-[53.99px]  ${styles.smallImage}`}
                                    width={26}
                                    height={18}
                                />
                                where brilliance shines.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About1;