'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './about.module.css';

const AboutUs = () => {
    const [isWaveHovered, setIsWaveHovered] = useState(false);
    const [isHovered, setIsHovered] = useState(false);


    return (
        <div className="flex items-center relative h-screen lg:w-screen md:w-screen w-screen justify-center">
            <div className="inset-0 flex items-center bg-[url('/assets/images/maze.png')] bg-cover bg-no-repeat absolute bg-[#FFA6F6]">
                <svg
                    className={`absolute left-[7.985vw] top-[35.042vw] w-[26.667vw]  md:left-[8.385vw] md:top-[22.5vw] lg:top-[20.5vw] md:w-[17.5vw] xl:top-[7vw] z-10 ${styles.circle}`}
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


                    <circle
                        cx="0"
                        cy="0"
                        r="11.7482"
                        fill="#FAE00D"
                    >
                        <animateMotion repeatCount="indefinite" dur="5s">
                            <mpath href="#ellipsePath" />
                        </animateMotion>
                    </circle>
                </svg>

                <div className={`absolute w-[66.62%] h-[63%] justify-center sm:rotate-[-4.21deg] lg:rotate-[-4.21deg] rounded-[36px] border-black border-4 bg-[#FBFAF0] ${styles.box1}`}>
                    <div className="absolute flex w-[100%] bg-[#FFF59F] h-[11.23%] border-b-black border-b-2 rounded-tl-[36px] rounded-tr-[36px] items-center">
                        <div className="w-[2.07%] h-[34.7%] bg-[#FFA6F6] rounded-[50%] ml-3 mx-1 rotate-[-4.21deg] px-3 lg:ml-5 md:px-3 lg:mx-1 lg:px-3 "></div>
                        <div className="w-[2.07%] h-[34.7%] bg-[#FFA6F6] rounded-[50%] mx-1 rotate-[-4.21deg] px-3 md:px-3 lg:mx-1 lg:px-3 "></div>
                        <div className="w-[2.07%] h-[34.7%] bg-[#FFA6F6] rounded-[50%] mx-1 rotate-[-4.21deg] px-3 md:px-3 lg:mx-1 lg:px-3 "></div>
                        <Image
                            src="/assets/images/heart.png"
                            alt="Heart Icon"
                            className={` absolute rotate-[8deg] w-[24%] h-[135%] items-end sm:rotate-[5deg] xl:rotate-[2deg] xl:h-[145%]  xl:top-[60%] lg:rotate-[5deg] ${styles.img1} `}
                            width={80}
                            height={100}
                        />
                    </div>
                    <div className="flex justify-center relative top-[15%] xl:top-[12%] ">
                        <Image
                            src="/assets/images/about.png"
                            alt="About Us Image"
                            className="rotate-[4.21deg] h-[40.44%] w-[84%] sm:h-[15.44%] sm:w-[70%] md:h-[20.44%] md:w-[75%] sm:rotate-[4.21deg] lg:h-[19.44%] lg:w-[44%] lg:rotate-[4.21deg] xl:h-[24.44%] xl:w-[35%]"
                            width={600}
                            height={400}
                        />
                        <Image
                            src="/assets/vectors/wave.gif"
                            alt="Wave"
                            width={500}
                            height={1}
                            className={`absolute top-[58%] w-[82%] lg:w-[44%] lg:top-[55%] md:w-[74%] md:top-[51%] xl:w-[35%] xl:top-[53%]  opacity-0 hover:opacity-100 transition-opacity duration-300 `}
                        />
                    </div>
                    <div className="relative top-[17%] flex justify-center align-middle lg:top-[17%] xl:top-[12%] md:top-[14%] ">
                        <p className={`font-tusker tracking-normal text-[25px] w-[100%] leading-[2.4rem] sm:leading-[3.2rem] sm:text-[34px]  md:leading-[3.3rem] md:text-[34px] lg:text-[34px] lg:leading-[3.2rem] xl:leading-[3rem] xl:text-[30px] xl:tracking-wide text-center ${styles.smallFont}`}>
                            NIT Silchar&apos;s cultural extravaganza,
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`inline-block w-[80%] sm:w-[80%] sm:h-[50] lg:w-[25%] xl:w-[18%] ${isHovered ? styles.animate : ''}`} // Use CSS Module class
                                height="37"
                                viewBox="0 0 300 100"
                                onMouseEnter={() => setIsHovered(true)}  // Trigger animation on hover
                                onMouseLeave={() => setIsHovered(false)} // Reset animation on mouse leave
                            >
                                <text
                                    x="0"
                                    y="50%"
                                    dominant-baseline="middle"
                                    text-anchor="start"
                                    fill="#FFD23C"
                                    stroke="black"
                                    stroke-width="2.1"
                                    font-size="70px"
                                    font-family="tusker"
                                    font-weight="600"
                                    style={{ letterSpacing: '1.2px' }}
                                    className="text-[70px] sm:text-[70px] md:text-[75px] lg:text-[55px] xl:text-[52px]"
                                >
                                    INCANDESCENCE
                                </text>
                            </svg>

                            <br /> invites you on a journey into
                            <Image
                                src="/assets/vectors/spidey.gif"
                                alt="animated gif"
                                className={`inline-block w-[80.18px] h-[40.945px] rounded-[53.99px] sm:h-[57px] sm:w-[95px] mr-2 ml-2 lg:ml-3 lg:mr-3 lg:w-[90px] lg:h-[40px] ${styles.smallImage}`}
                                width={26}
                                height={18}
                            />
                            the <br />unknown. Experience a labyrinth of culture, <br />
                            <Image
                                src="/assets/vectors/dj.gif"
                                alt="animated gif"
                                className={`inline-block w-[80.18px] h-[40.945px] rounded-[53.99px] sm:h-[57] sm:w-[95] mr-2 ml-2 lg:ml-3 lg:mr-3  lg:w-[90px] lg:h-[40px] ${styles.smallImage}`}
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

export default AboutUs;
