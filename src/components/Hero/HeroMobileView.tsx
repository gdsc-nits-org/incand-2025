"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "~/styles/Hero.module.css";

const HeroMobileView = () => {
    const [scale, setScale] = useState(1);
    const [isScaled, setIsScaled] = useState(false);

    useEffect(() => {
        const scaleContent = () => {
          setIsScaled(false);
          const container = document.getElementById("container");
    
          if (container) {
            const containerHeight = window.innerHeight;
            const contentHeight = 0.5225 * window.innerWidth;
    
            const isMobile = window.innerWidth < 768;
            let newScale = containerHeight / contentHeight;
    
            if (isMobile) {
              newScale = 0.28 * newScale;
            }
    
            setScale(newScale < 1 ? newScale : 1);
          }
        };
    
        scaleContent();
    
        window.addEventListener("resize", scaleContent);
    
        return () => window.removeEventListener("resize", scaleContent);
      });   

  return (
    <div
    id="container"
    className={
      "relative flex h-screen items-center justify-center bg-[#FFF06D] " +
      styles.hero
    }
  >
    <div className="absolute inset-0 bg-[url('/assets/landing/yellow_maze.png')] bg-cover bg-center bg-no-repeat"></div>
    <div
      className="absolute inset-0 flex flex-col items-center md:justify-center md:py-[5.755vh]"
      style={{ transform: `scale(${scale})`, transformOrigin: "top" }}
    >
      <div className="relative top-[6vw] right-[-35vw] md:right-[-23vw] md:z-20 z-[31] mt-[25vw] flex flex-col items-center justify-center md:mt-[0] md:flex-row md:items-start md:gap-[0.789vw]">
        <div className="relative top-[4.167vw] mb-[5vw] h-[12.115vw] w-[12.115vw] self-end md:hidden md:h-[10.526vw] md:w-[10.526vw]">
          <Image
            src="/assets/landing/spark.gif"
            alt="Spark"
            layout="responsive"
            width={100}
            height={100}
            unoptimized
          />
        </div>
        <div className="mt-[1.053vw] flex items-center justify-center gap-[0.755vw] md:gap-[0.526vw]">
          <div className="group relative w-fit">
            {/* <svg
              className="absolute left-[-8.385vw] top-[1.042vw] z-[10] w-[26.667vw] md:left-[-5.385vw] md:top-[0.042vw] md:w-[17.5vw]"
              viewBox="0 0 360 219"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="motionPath"
                d="M329.917 7.77876C330.863 9.18142 331.191 11.2468 330.516 14.2216C329.842 17.1955 328.213 20.8361 325.603 25.0865C320.391 33.5759 311.513 44.1019 299.593 55.9747C275.775 79.697 240.101 108.512 198.214 136.764C156.328 165.017 116.248 187.3 85.3306 200.496C69.8569 207.101 56.7718 211.389 46.9479 213.042C42.0293 213.869 38.0437 214.016 35.0337 213.527C32.0228 213.038 30.2305 211.961 29.2844 210.558C28.3383 209.156 28.0109 207.09 28.6855 204.115C29.36 201.141 30.9886 197.501 33.5984 193.25C38.811 184.761 47.6886 174.235 59.6089 162.362C83.4263 138.64 119.101 109.825 160.987 81.5726C202.873 53.3199 242.954 31.0372 273.871 17.8407C289.345 11.236 302.43 6.9479 312.254 5.29507C317.172 4.46755 321.158 4.32131 324.168 4.81001C327.179 5.29885 328.971 6.3761 329.917 7.77876Z"
                stroke="black"
                stroke-width="3.91608"
              />
              <circle r="11.7482" fill="#FAE00D">
                <animateMotion repeatCount="indefinite" dur="5s">
                  <mpath href="#motionPath" />
                </animateMotion>
              </circle>
            </svg> */}
          </div>

         
        </div>
        <div
          className={
            "mx-[0.789vw] h-[29.444vw] w-[13.888vw] self-end rounded-[2.053vw] border border-black bg-[#E1067B] md:h-[20.0vw] md:w-[9.671vw] md:rounded-[1.053vw] " +
            styles.cardOne
          }
        >
          <div className="flex h-[3.75vw] w-full flex-row items-center gap-[0.755vw] rounded-t-[2.053vw] border-b-[0.132vw] border-t-[0px] border-black bg-white px-[1.526vw] md:h-[2.368vw] md:gap-[0.526vw] md:rounded-t-[1.053vw] md:md:border-t-[0.132vw] md:px-[0.526vw]">
            <div className="h-[1.512vw] w-[1.512vw] rounded-full bg-black md:h-[1.053vw] md:w-[1.053vw]"></div>
            <div className="h-[1.512vw] w-[1.512vw] rounded-full bg-black md:h-[1.053vw] md:w-[1.053vw]"></div>
            <div className="h-[1.512vw] w-[1.512vw] rounded-full bg-black md:h-[1.053vw] md:w-[1.053vw]"></div>
          </div>
          <div className="relative top-[-5.66vw] flex h-full flex-col justify-center p-[0.789vw] md:top-[-3.947vw]">
            <p
              className="mb-[-7vw] max-w-fit text-center text-[9vw] font-normal leading-none text-black transition-colors duration-200 hover:text-[#FAE00D] md:mb-[-4.934vw] md:text-[6.316vw]"
              style={{
                fontFamily: "Ahsing",
              }}
            >
              2
            </p>
            <p
              className="mb-[-7vw] max-w-fit self-end text-[9vw] font-normal text-black transition-colors duration-200 hover:text-[#FAE00D] md:mb-[-4.934vw] md:text-[6.316vw]"
              style={{ fontFamily: "Ahsing" }}
            >
              0
            </p>
            <p
              className="mb-[-7vw] mt-[-0.987vw] max-w-fit text-[9vw] font-normal text-black transition-colors duration-200 hover:text-[#FAE00D] md:mb-[-4.934vw] md:text-[6.316vw]"
              style={{ fontFamily: "Ahsing" }}
            >
              2
            </p>
            <p
              className="mb-[-7vw] me-[0.329vw] mt-[-0.987vw] max-w-fit self-end text-[9vw] font-normal text-black transition-colors duration-200 hover:text-[#FAE00D] md:mb-[-4.934vw] md:text-[6.316vw]"
              style={{ fontFamily: "Ahsing" }}
            >
              5
            </p>
          </div>
        </div>
        <div className="relative ms-[1.842vw] hidden h-[15.115vw] w-[15.115vw] md:bottom-[6vw] md:block md:h-[6.526vw] md:w-[6.526vw]">
          <Image
            src="/assets/landing/spark.gif"
            alt="Spark"
            layout="responsive"
            width={100}
            height={100}
            unoptimized
          />
        </div>
      </div>

      <div className="relative left-[2.945vw] top-[-3.658vw] h-[90.065vw] md:h-[31.026vw]">
        {/* Card 1 */}
        <div
          className={
            "absolute right-[20.171vw] top-[43.237vw] z-[32] md:z-[32] h-[18.333vw] w-[14.444vw] rounded-[2.053vw] border border-black bg-[#00E9F4] shadow-black md:right-[37.171vw] md:top-[-7.237vw] md:h-[13.092vw] md:w-[8.0vw] md:rounded-[1.053vw] " +
            styles.cardOne
          }
        >
          <div className="flex h-[3.75vw] w-full flex-row items-center gap-[0.755vw] rounded-t-[2.053vw] border-b-[0.132vw] border-t-[0px] border-black bg-white px-[1.526vw] md:h-[2.368vw] md:gap-[0.526vw] md:rounded-t-[1.053vw] md:border-t-[0.132vw] md:px-[0.526vw]">
            <div className="h-[1.512vw] w-[1.512vw] rounded-full bg-black md:h-[1.053vw] md:w-[1.053vw]"></div>
            <div className="h-[1.512vw] w-[1.512vw] rounded-full bg-black md:h-[1.053vw] md:w-[1.053vw]"></div>
            <div className="h-[1.512vw] w-[1.512vw] rounded-full bg-black md:h-[1.053vw] md:w-[1.053vw]"></div>
          </div>
          <div className="flex h-[80%] items-center justify-center">
            <div className="h-[9.692vw] w-[9.692vw] md:h-[5.592vw] md:w-[5.592vw]">
              <Image
                className={styles.brutalist}
                src="/assets/landing/Brutalist.png"
                alt="Brutalist"
                layout="responsive"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
        {/* Card 1 */}

        {/* Card 2 */}
        <div
          className={
            "absolute overflow-x-hidden right-[10.724vw] top-[8.974vw] z-[31] h-[37.778vw] w-[37.778vw] rounded-[2.053vw] border border-black bg-[#008EFF] shadow-black md:right-[20.724vw] md:top-[1.974vw] md:z-[31] md:h-[18.75vw] md:w-[18.75vw] md:rounded-[1.053vw] " +
            styles.cardOne
          }
        >
          <div className="flex h-[3.75vw] w-full flex-row items-center gap-[0.755vw] rounded-t-[2.053vw] border-b-[0.132vw] border-t-[0px] border-black bg-white px-[1.526vw] md:h-[2.368vw] md:gap-[0.526vw] md:rounded-t-[1.053vw] md:border-t-[0.132vw] md:px-[0.526vw]">
            <div className="h-[1.512vw] w-[1.512vw] rounded-full bg-black md:h-[1.053vw] md:w-[1.053vw]"></div>
            <div className="h-[1.512vw] w-[1.512vw] rounded-full bg-black md:h-[1.053vw] md:w-[1.053vw]"></div>
            <div className="h-[1.512vw] w-[1.512vw] rounded-full bg-black md:h-[1.053vw] md:w-[1.053vw]"></div>
          </div>
          <div className="flex h-[80%] flex-col justify-end">
            <div className="relative flex flex-col justify-center w-full">
              <div className={"flex flex-col items-center justify-center w-fit md:px-[1vw] px-[2vw] gap-[1.833vw] md:gap-[0.833vw] "+ styles.cardTwoSpark1}>
              <div className="h-[7.167vw] w-[7.167vw] md:h-[4.368vw] md:w-[4.368vw]">
                <Image
                  src="/assets/landing/spark.gif"
                  alt="spark"
                  layout="responsive"
                  width={100}
                  height={100}
                  unoptimized
                />
              </div>
              <div className="relative h-[5.167vw] w-[5.167vw] md:h-[2.368vw] md:w-[2.368vw]">
                <Image
                  src="/assets/landing/spark.gif"
                  alt="spark"
                  layout="responsive"
                  width={100}
                  height={100}
                  unoptimized
                />
              </div>
              </div>
            </div>
            <div className="mx-[1.053vw] flex w-full gap-[1.512vw] md:gap-[1.053vw]">
              <p
                className="text-[6.358vw] font-normal leading-[6.358vw] tracking-wide text-black md:text-[3.158vw] md:leading-[3.158vw]"
                style={{ fontFamily: "Ahsing" }}
              >
                Lucid Labyrinth
              </p>
            </div>
          </div>
          {/* <p
            className={
              "absolute left-[2.368vw] top-[-9.211vw] w-[11.576vw] text-[17.197vw] font-normal leading-[15.261vw] tracking-wide text-white md:left-[3.368vw] md:top-[-10.211vw] md:w-[8.061vw] md:text-[9.197vw] " +
              styles.cText
            }
            onMouseEnter={() => setIsCHovered(true)}
            onMouseLeave={() => setIsCHovered(false)}
            style={
              isCHovered
                ? {
                    fontFamily: "Tusker Grotes",
                    animation: "none",
                    scale: "0.8",
                  }
                : { fontFamily: "Ahsing" }
            }
          >
            C
          </p> */}
        </div>
        {/* Card 2 */}

        {/* Card 3 */}
        <div
          className={
            "absolute right-[1.855vw] top-[-19.184vw] z-30 h-[33.889vw] w-[41.667vw]  rounded-[2.053vw] border border-black bg-[#00FF88] shadow-black md:right-[10.855vw] md:top-[-11.184vw] md:h-[18.75vw] md:w-[23.026vw] md:rounded-[1.053vw] " +
            styles.cardOne
          }
        >
          <div className="flex h-[3.75vw] w-full flex-row items-center gap-[0.755vw] rounded-t-[2.053vw] border-b-[0.132vw] border-t-[0px] border-black bg-white px-[1.526vw] md:h-[2.368vw] md:gap-[0.526vw] md:rounded-t-[1.053vw] md:border-t-[0.132vw] md:px-[0.526vw]">
            <div className="h-[1.512vw] w-[1.512vw] rounded-full bg-black md:h-[1.053vw] md:w-[1.053vw]"></div>
            <div className="h-[1.512vw] w-[1.512vw] rounded-full bg-black md:h-[1.053vw] md:w-[1.053vw]"></div>
            <div className="h-[1.512vw] w-[1.512vw] rounded-full bg-black md:h-[1.053vw] md:w-[1.053vw]"></div>
          </div>
          <div className="relative h-[85%] w-full p-2">
            <div
              className={
                "absolute w-[16.389vw] md:w-[9.013vw] " +
                styles.cardThreeWireframe
              }
            >
              <Image
                src="/assets/landing/Wireframe.png"
                alt="Brutalist"
                layout="responsive"
                width={100}
                height={100}
              />
            </div>
          </div>
          {/* <p
            className={
              "absolute bottom-[-0.592vw] left-[-3.158vw] w-[11.576vw] text-[17.197vw] font-normal leading-[15.261vw] tracking-wide text-[#B572F9] md:top-[-1.392vw] md:left-[-0.158vw] md:w-[8.061vw] md:text-[9.197vw] " +
              styles.cText
            }
            onMouseEnter={() => setIsCHovered(true)}
            onMouseLeave={() => setIsCHovered(false)}
            style={
              isCHovered
                ? {
                    fontFamily: "Tusker Grotes",
                    animation: "none",
                    scale: "0.8",
                  }
                : { fontFamily: "Ahsing" }
            }
          >
            C
          </p> */}
          {/* <p
            className={
              "absolute bottom-[-0.947vw] right-[0.87vw] w-[11.576vw] text-[15.5vw] font-normal tracking-wide text-[#B572F9] md:top-[-5.947vw] md:right-[-1.87vw] md:w-[8.061vw] md:text-[8.197vw] " +
              styles.nText
            }
            onMouseEnter={() => setIsMHovered(true)}
            onMouseLeave={() => setIsMHovered(false)}
            style={
              isMHovered
                ? {
                    fontFamily: "Tusker Grotes",
                    animation: "none",
                    scale: "0.8",
                    transform: "translateY(-3.947vw)",
                  }
                : { fontFamily: "Ahsing" }
            }
          >
            N
          </p> */}
        </div>
        {/* Card 3 */}

        {/* Card 4 */}
        <div
          className={
            "group absolute right-[-17.618vw] top-[-4.658vw]  z-30 h-[41.389vw] w-[24.167vw] overflow-hidden rounded-[2.053vw] border border-black bg-[#E1067B] shadow-[0.526vw_0.526vw_0px_#000000] shadow-black transition duration-300 hover:bg-black hover:shadow-[#E1067B] md:right-[3.618vw] md:top-[-2.658vw] md:z-[30] md:h-[19.737vw] md:w-[11.513vw] md:rounded-[1.053vw] " +
            styles.card4Container
          }
        >
          <div className="flex h-[3.75vw] w-full flex-row items-center gap-[0.755vw] rounded-t-[2.053vw] border-b-[0.132vw] border-t-[0px] border-black bg-white px-[1.526vw] md:h-[2.368vw] md:gap-[0.526vw] md:rounded-t-[1.053vw] md:border-t-[0.132vw] md:px-[0.526vw]">
            <div className="h-[1.512vw] w-[1.512vw] rounded-full bg-black md:h-[1.053vw] md:w-[1.053vw]"></div>
            <div className="h-[1.512vw] w-[1.512vw] rounded-full bg-black md:h-[1.053vw] md:w-[1.053vw]"></div>
            <div className="h-[1.512vw] w-[1.512vw] rounded-full bg-black md:h-[1.053vw] md:w-[1.053vw]"></div>
          </div>
          <div className="relative h-[80%] w-full flex-col">
            <svg
              className={
                "absolute bottom-0 right-[0.263vw] h-[8.975vw] w-[8.975vw] text-black transition-all duration-300 group-hover:text-white md:h-[6.25vw] md:w-[6.25vw] " +
                styles.svgContainer
              }
              viewBox="0 0 120 120"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M120 0H85.0997C85.0997 13.876 73.8437 25.0997 60 25.0997C46.124 25.0997 34.9003 13.8437 34.9003 0H0C0 33.1536 26.8787 60 60 60C93.1213 60 120 33.1536 120 0Z" />
              <path d="M60 60C26.8787 60 0 86.8464 0 120H34.8679C34.8679 106.124 46.124 94.9003 59.9677 94.9003C73.8437 94.9003 85.0674 106.156 85.0674 120H119.935C120 86.8464 93.1213 60 60 60Z" />
            </svg>
          </div>

          <div className="absolute left-[-3.005vw] top-[-1.974vw] flex gap-[2.937vw] overflow-visible md:gap-[2.045vw]">
            {/* <p
              className={
                "relative w-[10.858vw] text-[8.197vw] font-normal tracking-wide text-white md:w-[7.561vw] " +
                styles.nText
              }
              onMouseEnter={() => setIsMHovered(true)}
              onMouseLeave={() => setIsMHovered(false)}
              style={
                isMHovered
                  ? {
                      fontFamily: "Tusker Grotes",
                      animation: "none",
                      scale: "0.8",
                      transform: "translateY(-3.947vw)",
                    }
                  : { fontFamily: "Ahsing" }
              }
            >
              M
            </p> */}
            {/* <p
              className={
                "relative left-[-1vw] top-[10.316vw] h-[23.618vw] w-fit text-[15.197vw] font-normal leading-[8.197vw] tracking-wide text-white hover:text-[11.197vw] md:left-[-0.5vw] md:top-[-1.316vw] md:h-[16.447vw] md:text-[8.197vw] md:hover:text-[7.197vw] " +
                styles.gText
              }
            >
              I
            </p> */}
          </div>
        </div>
        {/* Card 4 */}

        {/* Card 5 */}
        <div
          className={
            "group z-30 absolute left-[9.921vw] top-[3.566vw] w-[28.056vw] overflow-hidden rounded-[2.053vw] border border-black bg-[#00FF88] shadow-[0.526vw_0.526vw_0px_#000000] shadow-black transition duration-300 hover:bg-black md:left-[-5.921vw] md:top-[1.566vw] md:w-[14.474vw] md:rounded-[1.053vw]"
          }
        >
          <div className="relative">
          <Image
                src="/assets/landing/hero_eye_anim.gif"
                alt="Brutalist_Two"
                layout="responsive"
                width={100}
                height={100}
              />
          </div>
          {/* <div className="flex h-[3.75vw] w-full flex-row items-center gap-[0.755vw] rounded-t-[2.053vw] border-b-[0.132vw] border-t-[0px] border-black bg-white px-[1.526vw] transition-all duration-300 group-hover:border-white group-hover:bg-black md:h-[2.368vw] md:gap-[0.526vw] md:rounded-t-[1.053vw] md:border-t-[0.132vw] md:px-[0.526vw]">
            <div className="h-[1.512vw] w-[1.512vw] rounded-full bg-black transition-[bg] duration-300 group-hover:bg-white md:h-[1.053vw] md:w-[1.053vw]"></div>
            <div className="h-[1.512vw] w-[1.512vw] rounded-full bg-black transition-[bg] duration-300 group-hover:bg-white md:h-[1.053vw] md:w-[1.053vw]"></div>
            <div className="h-[1.512vw] w-[1.512vw] rounded-full bg-black transition-[bg] duration-300 group-hover:bg-white md:h-[1.053vw] md:w-[1.053vw]"></div>
          </div> */}
          <div className="flex h-full flex-col justify-end">
            <div className="absolute top-[9vw] flex w-full overflow-visible md:top-[-1vw]">
              {/* <p
                className={
                  "relative left-[2.587vw] top-[-5.316vw] w-[10.858vw] text-[15.5vw] font-normal leading-[none] tracking-wide text-white hover:text-[11.197vw] group-hover:text-[#00FF88] md:left-[1.587vw] md:top-[1.316vw] md:w-[7.561vw] md:text-[9.197vw] md:hover:text-[7.197vw] " +
                  styles.nText
                }
              >
                N
              </p>
              <p
                className={
                  "relative left-[4vw] top-[3.947vw] h-[23.618vw] w-[11.576vw] text-[13.197vw] font-normal leading-[none] tracking-wide text-white hover:text-[11.197vw] group-hover:text-[#00FF88] md:left-[1vw] md:h-[16.447vw] md:w-[8.061vw] md:text-[8.197vw] md:hover:text-[7.197vw] " +
                  styles.gText
                }
              >
                G
              </p> */}
            </div>
          </div>
        </div>
        {/* Card 5 */}

        {/* Card 6 */}
        <div
          className={
            "absolute left-[-45.316vw] top-[58.158vw] z-[2] h-[23.611vw] w-[43.889vw] overflow-hidden rounded-[2.053vw] border border-black bg-[#B5FCFF] shadow-black md:left-[-1.316vw] md:top-[14.158vw] md:z-[0] md:h-[11.842vw] md:w-[22.039vw] md:rounded-[1.053vw] " +
            styles.cardOne
          }
        >
          <div className="flex h-[3.75vw] w-full flex-row items-center gap-[0.755vw] rounded-t-[2.053vw] border-b-[0.132vw] border-t-[0px] border-black bg-white px-[1.526vw] md:h-[2.368vw] md:gap-[0.526vw] md:rounded-t-[1.053vw] md:border-t-[0.132vw] md:px-[0.526vw]">
            <div className="h-[1.512vw] w-[1.512vw] rounded-full bg-black md:h-[1.053vw] md:w-[1.053vw]"></div>
            <div className="h-[1.512vw] w-[1.512vw] rounded-full bg-black md:h-[1.053vw] md:w-[1.053vw]"></div>
            <div className="h-[1.512vw] w-[1.512vw] rounded-full bg-black md:h-[1.053vw] md:w-[1.053vw]"></div>
          </div>
          <div className="flex h-[80%] w-full items-end justify-center gap-[1.133vw] px-1 py-3 md:gap-[0.789vw]">
            <div
              className={
                "h-[10.556vw] w-[10.556vw] md:h-[5.263vw] md:w-[5.263vw] " +
                styles.cardSixBrutalist
              }
            >
              <Image
                src="/assets/landing/Brutalist_Two.png"
                alt="Brutalist_Two"
                layout="responsive"
                width={100}
                height={100}
              />
            </div>
            <div
              className={
                "h-[10.556vw] w-[10.556vw] md:h-[5.263vw] md:w-[5.263vw] " +
                styles.cardSixBrutalist
              }
            >
              <Image
                src="/assets/landing/Brutalist_Two.png"
                alt="Brutalist_Two"
                layout="responsive"
                width={100}
                height={100}
              />
            </div>
            <div
              className={
                "h-[10.556vw] w-[10.556vw] md:h-[5.263vw] md:w-[5.263vw] " +
                styles.cardSixBrutalist
              }
            >
              <Image
                src="/assets/landing/Brutalist_Two.png"
                alt="Brutalist_Two"
                layout="responsive"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
        {/* Card 6 */}

        {/* Card 7 */}
        <div
          className={
            "absolute left-[-14.763vw] top-[42.574vw] h-[33.611vw] w-[52.778vw] rounded-[2.053vw] border border-black bg-[#FAE00D] shadow-black md:left-[7.237vw] md:top-[-2.574vw] md:h-[18.75vw] md:w-[29.276vw] md:rounded-[1.053vw] " +
            styles.cardOne
          }
        >
          <div className="relative z-[2] flex h-[3.75vw] w-full flex-row items-center gap-[0.755vw] rounded-t-[2.053vw] border-b-[0.132vw] border-t-[0px] border-black bg-white px-[1.526vw] md:h-[2.368vw] md:gap-[0.526vw] md:rounded-t-[1.053vw] md:border-t-[0.132vw] md:px-[0.526vw]">
            <div className="h-[1.512vw] w-[1.512vw] rounded-full bg-black md:h-[1.053vw] md:w-[1.053vw]"></div>
            <div className="h-[1.512vw] w-[1.512vw] rounded-full bg-black md:h-[1.053vw] md:w-[1.053vw]"></div>
            <div className="h-[1.512vw] w-[1.512vw] rounded-full bg-black md:h-[1.053vw] md:w-[1.053vw]"></div>
          </div>
          <div className="relative h-[85%] w-full">
            <svg
              className="absolute left-[17.882vw] top-[5.882vw] w-[20.118vw] md:left-[14.882vw] md:top-[-0.5vw] md:w-[11.118vw]"
              viewBox="0 0 102 109"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="path1"
                d="M91.8047 61.4629L91.8047 61.4628C91.8026 61.4555 91.7591 61.3032 91.3524 61.0939C90.9443 60.884 90.3052 60.6913 89.3977 60.5565C87.5909 60.2881 85.0077 60.2887 81.7978 60.576C75.3985 61.1487 66.7602 62.8366 57.4146 65.5164C48.069 68.1962 39.8488 71.3424 34.1184 74.2478C31.244 75.7051 29.053 77.0735 27.663 78.2586C26.9648 78.8539 26.525 79.3559 26.2901 79.7502C26.0561 80.1432 26.0999 80.2954 26.102 80.3027L26.102 80.3028L26.1021 80.3029C26.1041 80.3102 26.1476 80.4625 26.5544 80.6718C26.9625 80.8817 27.6015 81.0744 28.5091 81.2092C30.3159 81.4776 32.8991 81.477 36.109 81.1897C42.5083 80.617 51.1466 78.9291 60.4922 76.2493C69.8378 73.5695 78.0579 70.4233 83.7884 67.5179C86.6627 66.0605 88.8537 64.6921 90.2438 63.5071C90.942 62.9118 91.3818 62.4097 91.6166 62.0155C91.8507 61.6225 91.8069 61.4703 91.8048 61.463L91.8047 61.4629Z"
                stroke="black"
                stroke-width="2.45"
              />
              <circle r="2.26925" fill="#E1067B">
                <animateMotion repeatCount="indefinite" dur="4s">
                  <mpath href="#path1" />
                </animateMotion>
              </circle>
              <path
                id="path2"
                d="M84.2026 83.5248C84.2027 83.5248 84.2017 83.5234 84.1994 83.5209C84.2012 83.5236 84.2024 83.5249 84.2026 83.5248ZM84.107 83.6392C84.1421 83.5723 84.1598 83.5253 84.1686 83.4948C84.1429 83.4762 84.1 83.45 84.0312 83.4191C83.8225 83.3252 83.4786 83.2377 82.9689 83.1891C81.9557 83.0924 80.5026 83.1674 78.6882 83.4261C75.0747 83.9413 70.2147 85.1574 64.9764 86.9611C59.738 88.7648 55.1595 90.7986 51.9949 92.6173C50.4059 93.5305 49.2147 94.3661 48.4758 95.066C48.1041 95.4182 47.8869 95.6988 47.7803 95.9012C47.7451 95.9681 47.7274 96.0151 47.7186 96.0456C47.7443 96.0641 47.7872 96.0904 47.856 96.1213C48.0647 96.2152 48.4086 96.3027 48.9183 96.3513C49.9315 96.4479 51.3847 96.373 53.199 96.1143C56.8125 95.5991 61.6725 94.383 66.9109 92.5793C72.1492 90.7756 76.7277 88.7418 79.8923 86.9231C81.4813 86.0099 82.6725 85.1743 83.4114 84.4743C83.7832 84.1222 84.0003 83.8416 84.107 83.6392ZM47.7103 96.0901C47.7105 96.0901 47.7106 96.0883 47.7104 96.085C47.7101 96.0885 47.7102 96.0902 47.7103 96.0901ZM47.6879 96.0196C47.686 96.0168 47.6848 96.0155 47.6847 96.0156C47.6845 96.0156 47.6855 96.017 47.6879 96.0196ZM84.1768 83.4553C84.1771 83.4519 84.177 83.4502 84.1769 83.4503C84.1768 83.4503 84.1766 83.452 84.1768 83.4553Z"
                stroke="black"
                stroke-width="1.83"
              />
              <circle r="1.29532" fill="#E1067B">
                <animateMotion repeatCount="indefinite" dur="3s">
                  <mpath href="#path2" />
                </animateMotion>
              </circle>
              <path
                id="path3"
                d="M3.33399 61.2922C3.41203 61.5644 3.66335 61.9151 4.35206 62.2694C5.04035 62.6234 6.05035 62.9174 7.39981 63.1179C10.0917 63.5178 13.8878 63.5117 18.5464 63.0947C27.8462 62.2624 40.3681 59.8135 53.8951 55.9347C67.4221 52.0559 79.339 47.4971 87.6667 43.2748C91.8384 41.1597 95.0609 39.1532 97.1318 37.3876C98.17 36.5025 98.8708 35.718 99.2668 35.053C99.6632 34.3876 99.6905 33.957 99.6124 33.6848C99.5344 33.4127 99.283 33.062 98.5943 32.7077C97.906 32.3536 96.8961 32.0597 95.5466 31.8592C92.8547 31.4593 89.0586 31.4654 84.4 31.8823C75.1002 32.7147 62.5783 35.1635 49.0513 39.0423C35.5243 42.9211 23.6074 47.48 15.2797 51.7023C11.108 53.8174 7.88552 55.8238 5.81456 57.5894C4.77638 58.4746 4.07563 59.2591 3.67956 59.9241C3.28324 60.5895 3.25594 61.0201 3.33399 61.2922Z"
                stroke="black"
                stroke-width="2.09"
              />
              <ellipse rx="3.27719" ry="3.27719" fill="#E1067B">
                <animateMotion repeatCount="indefinite" dur="5s">
                  <mpath href="#path3" />
                </animateMotion>
              </ellipse>
            </svg>

            <p
              className="absolute bottom-[18.625vw] left-[6.316vw] z-30 text-[6.389vw] font-normal tracking-wide text-black md:bottom-0 md:left-[-1.316vw] md:text-[4.211vw]"
              style={{ fontFamily: "Ahsing" }}
            >
              Cultural Fest
            </p>
          </div>
          <div className="absolute left-[5.645vw] top-0 flex h-[85%] w-full overflow-hidden md:left-[1.645vw]">
            {/* <p
              className={
                "relative left-[0] top-[-16.961vw] z-[2] w-[10.858vw] text-[18.197vw] font-normal leading-[38vw] tracking-wide text-white hover:top-[-13vw] hover:text-[14.197vw] md:left-[1vw] md:top-[-8.961vw] md:w-[7.561vw] md:text-[10.197vw] md:leading-[21vw] md:hover:top-[-6.961vw] md:hover:text-[7.197vw] " +
                styles.comingSoonBorders
              }
            >
              S
            </p>
            <p
              className={
                "relative top-[-16.961vw] z-[1] w-[13.858vw] text-[18.197vw] font-normal leading-[38vw] tracking-wide text-white hover:top-[-13vw] hover:text-[14.197vw] md:top-[-8.961vw] md:w-[7.561vw] md:text-[10.197vw] md:leading-[21.197vw] md:hover:top-[-7.961vw] md:hover:text-[7.197vw] " +
                styles.comingSoonBorders
              }
            >
              O
            </p>
            <p
              className={
                "relative top-[-16.961vw] z-[2] w-[13.858vw] text-[18.197vw] font-normal leading-[38vw] tracking-wide text-white hover:top-[-13vw] hover:text-[14.197vw] md:top-[-8.961vw] md:w-[7.561vw] md:text-[10.197vw] md:leading-[21.197vw] md:hover:top-[-6.961vw] md:hover:text-[7.197vw] " +
                styles.comingSoonBorders
              }
            >
              O
            </p> */}
          </div>
        </div>
        {/* Card 7 */}

        {/* Card 8 */}
        <div
          className={
            "z-1 group absolute left-[26.553vw] top-[63.224vw] h-[22.778vw] w-[13.889vw] overflow-hidden rounded-[2.053vw] border border-black bg-[#00E9F4] shadow-[0.329vw_0.329vw_0px_#000000] shadow-black transition duration-300 hover:bg-black hover:shadow-[#00E9F4] md:left-[33.553vw] md:top-[8.224vw] md:h-[12.171vw] md:w-[7.237vw] md:rounded-[1.053vw] " +
            styles.card8Container
          }
        >
          <div className="flex h-[3.75vw] w-full flex-row items-center gap-[0.755vw] rounded-t-[2.053vw] border-b-[0.132vw] border-t-[0px] border-black bg-white px-[1.526vw] transition-all duration-300 group-hover:border-white group-hover:bg-black md:h-[2.368vw] md:gap-[0.526vw] md:rounded-t-[1.053vw] md:border-t-[0.132vw] md:px-[0.526vw]">
            <div className="h-[1.512vw] w-[1.512vw] rounded-full bg-black transition-all duration-300 group-hover:bg-white md:h-[1.053vw] md:w-[1.053vw]"></div>
            <div className="h-[1.512vw] w-[1.512vw] rounded-full bg-black transition-all duration-300 group-hover:bg-white md:h-[1.053vw] md:w-[1.053vw]"></div>
            <div className="h-[1.512vw] w-[1.512vw] rounded-full bg-black transition-all duration-300 group-hover:bg-white md:h-[1.053vw] md:w-[1.053vw]"></div>
          </div>
          <div className="relative flex h-[78%] w-full justify-center">
            <svg
              className={
                "absolute bottom-0 w-[9.07vw] text-black transition-all duration-300 group-hover:text-[#00E9F4] md:w-[6.316vw] " +
                styles.svgIcon
              }
              viewBox="0 0 120 148"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M59.9833 147.302C26.8338 147.302 0 120.434 0 87.3184H120C119.967 120.434 93.1328 147.302 59.9833 147.302Z" />
              <path d="M59.9837 87.3182C32.8826 87.3182 10.9277 65.3633 10.9277 38.2622H109.073C109.04 65.3299 87.0848 87.3182 59.9837 87.3182Z" />
              <path d="M59.9828 38.2289C38.8633 38.2289 21.7539 21.1195 21.7539 0H98.2451C98.2117 21.1195 81.1023 38.2289 59.9828 38.2289Z" />
            </svg>
          </div>
        </div>
        {/* Card 8 */}

        {/* <p
          className={
            "absolute left-[30.508vw] top-[33.579vw] z-[2] w-[10.858vw] text-[18.197vw] font-normal leading-[21vw] tracking-wide text-[#B572F9] hover:top-[-12vw] hover:text-[14.197vw] md:left-[-47.508vw] md:top-[-18vw] md:w-[7.561vw] md:text-[10.197vw] md:leading-[10vw] md:hover:top-[-6vw] md:hover:text-[7.197vw] " +
            styles.comingSoonBorders
          }
        >
          I
        </p>
        <p
          className={
            "absolute right-[17.724vw] top-[2.974vw] z-30 w-fit text-[17.197vw] font-normal leading-[10vw] tracking-wide text-[#B572F9] hover:top-[0.974vw] hover:text-[12.197vw] md:right-[19.724vw] md:top-[-15.974vw] md:w-[7.561vw] md:text-[12.197vw] md:leading-[10vw] md:hover:text-[8.197vw] " +
            styles.comingSoonBorders
          }
        >
          A
        </p> */}

       

        {/* Svg1 */}
        <svg
          className="absolute left-[4vw] top-[-29vw] z-[1000] w-[8.188vw] md:left-[-9vw] md:top-[-12vw] md:w-[3.188vw]"
          viewBox="0 0 57 57"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_411_5149)">
            <path
              d="M38.0667 24.305L36.7866 8.66349L24.3062 18.1785L8.66464 19.4585L18.1753 31.9487L19.4553 47.5902L31.9358 38.0752L47.5817 36.7855L38.0667 24.305Z"
              fill="#008EFF"
            />
            <path
              d="M38.0138 24.3094L38.0151 24.3248L38.0245 24.3372L47.4807 36.7406L31.9314 38.0224L31.916 38.0237L31.9036 38.0331L19.5003 47.4893L18.2282 31.9443L18.2269 31.9289L18.2175 31.9165L8.76553 19.5035L24.3105 18.2313L24.326 18.2301L24.3383 18.2206L36.7417 8.76445L38.0138 24.3094Z"
              stroke="black"
              stroke-width="0.106076"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_411_5149"
              x="8.66504"
              y="8.66309"
              width="41.047"
              height="41.0568"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="2.13" dy="2.13" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_411_5149"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_411_5149"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        {/* Svg1 */}

        {/* Svg2 */}
        <svg
          className="absolute left-[19vw] top-[-22vw] z-[1000] w-[4.188vw] md:left-[2vw] md:top-[-14vw] md:w-[2.188vw]"
          width="37"
          height="33"
          viewBox="0 0 37 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.8232 30.5149C28.2648 32.482 25.9452 33.3263 24.253 32.1783L1.95124 17.0487C-0.0741894 15.6746 0.309471 12.5841 2.6094 11.747L32.2702 0.951325C34.5701 0.11422 36.8506 2.2351 36.1823 4.58961L28.8232 30.5149Z"
            fill="#00FF88"
          />
        </svg>
        {/* Svg2 */}

        {/* Svg3 */}
        <svg
          className="absolute z-[1000] hidden md:left-[22vw] md:top-[-16vw] md:block md:w-[0.5vw]"
          viewBox="0 0 11 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="5.50231"
            cy="5.50267"
            r="5"
            transform="rotate(6.09562 5.50231 5.50267)"
            fill="#23EE8C"
          />
        </svg>
        {/* Svg3 */}

        {/* Svg4 */}
        <svg
          className="absolute left-[21vw] top-[31vw] z-[1000] w-[3.5vw] md:left-[-31vw] md:top-[-13vw] md:w-[0.5vw]"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_411_5097)">
            <circle
              cx="15.3839"
              cy="15.508"
              r="15"
              transform="rotate(6.09562 15.3839 15.508)"
              fill="black"
            />
            <circle
              cx="15.3839"
              cy="15.508"
              r="14.5"
              transform="rotate(6.09562 15.3839 15.508)"
              stroke="black"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_411_5097"
              x="0.382812"
              y="0.506836"
              width="31.502"
              height="31.5024"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="1.5" dy="1.5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_411_5097"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_411_5097"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        {/* Svg4 */}

        {/* Svg5 */}
        <svg
          className="absolute z-[1000] hidden md:left-[-24vw] md:top-[-16vw] md:block md:w-[3.5vw]"
          viewBox="0 0 61 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_411_5154)">
            <rect
              x="8.13086"
              y="0.837891"
              width="70.8648"
              height="12.0391"
              rx="6.01955"
              transform="rotate(42 8.13086 0.837891)"
              fill="#00FF88"
            />
            <rect
              x="8.16787"
              y="1.54403"
              width="69.8648"
              height="11.0391"
              rx="5.51955"
              transform="rotate(42 8.16787 1.54403)"
              stroke="black"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_411_5154"
              x="0.0751953"
              y="0.837891"
              width="61.9188"
              height="57.5647"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="1.2" dy="1.2" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_411_5154"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_411_5154"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        {/* Svg5 */}

        {/* Svg6 */}
        <svg
          className="absolute left-[34vw] top-[20vw] z-[1000] w-[7.5vw] md:left-[35vw] md:top-[-16vw] md:w-[2.5vw]"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_411_5127)">
            <path
              d="M46 23C46 35.7025 35.7025 46 23 46C10.2975 46 0 35.7025 0 23C0 10.2975 10.2975 0 23 0C35.7025 0 46 10.2975 46 23ZM10.0312 23C10.0312 30.1624 15.8376 35.9688 23 35.9688C30.1624 35.9688 35.9688 30.1624 35.9688 23C35.9688 15.8376 30.1624 10.0312 23 10.0312C15.8376 10.0312 10.0312 15.8376 10.0312 23Z"
              fill="#E1067B"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_411_5127"
              x="0"
              y="0"
              width="49.25"
              height="49.25"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="3.25" dy="3.25" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_411_5127"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_411_5127"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        {/* Svg6 */}

        {/* Svg7 */}
        <svg
          className="absolute hidden md:left-[32vw] md:top-[-9vw] md:block md:w-[2.5vw]"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_411_5150)">
            <path
              d="M20.238 11.8657L12.3298 5.83659L11.5187 15.7478L5.48958 23.656L15.4035 24.4732L23.3117 30.5023L24.1228 20.5911L30.1492 12.6768L20.238 11.8657Z"
              fill="#00E9F4"
            />
            <path
              d="M20.2058 11.9079L20.2182 11.9173L20.2336 11.9186L30.0483 12.7218L24.0806 20.559L24.0712 20.5713L24.0699 20.5868L23.2667 30.4014L15.4357 24.431L15.4233 24.4216L15.4079 24.4203L5.5905 23.6111L11.5609 15.7799L11.5703 15.7676L11.5716 15.7521L12.3747 5.93756L20.2058 11.9079Z"
              stroke="black"
              stroke-width="0.106076"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_411_5150"
              x="5.48926"
              y="5.83643"
              width="26.7902"
              height="26.796"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="2.13" dy="2.13" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_411_5150"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_411_5150"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        {/* Svg7 */}

        {/* Svg8 */}
        <svg
          className="absolute hidden md:left-[38vw] md:top-[7vw] md:block md:w-[4.844vw]"
          viewBox="0 0 101 61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="motionPath2"
            d="M8.17206 2.16962C7.90814 2.56089 7.81682 3.13703 8.00502 3.96686C8.19316 4.79644 8.64746 5.81198 9.37547 6.99764C10.8295 9.36579 13.306 12.302 16.6312 15.614C23.275 22.2314 33.2265 30.2693 44.9108 38.1504C56.5951 46.0316 67.7756 52.2474 76.4 55.9286C80.7164 57.7709 84.3665 58.9671 87.1069 59.4282C88.479 59.659 89.5907 59.6998 90.4304 59.5635C91.2703 59.4271 91.7703 59.1266 92.0342 58.7353C92.2981 58.3441 92.3894 57.7679 92.2012 56.9381C92.0131 56.1085 91.5588 55.093 90.8308 53.9073C89.3767 51.5392 86.9003 48.6029 83.5751 45.291C76.9312 38.6736 66.9797 30.6357 55.2954 22.7546C43.6112 14.8734 32.4307 8.6576 23.8063 4.97641C19.4899 3.13401 15.8397 1.93785 13.0993 1.47679C11.7273 1.24595 10.6155 1.20516 9.77585 1.34148C8.93596 1.47784 8.43598 1.77834 8.17206 2.16962Z"
            stroke="black"
            stroke-width="1.0924"
          />
          <ellipse rx="3.27719" ry="3.27719" fill="#E1067B">
            {" "}
            <animateMotion repeatCount="indefinite" dur="5s">
              <mpath href="#motionPath2" />
            </animateMotion>
          </ellipse>
        </svg>
        {/* Svg8*/}

        {/* Svg8*/}
        <svg
          className="absolute hidden md:left-[29vw] md:top-[21vw] md:block md:w-[1.5vw]"
          viewBox="0 0 28 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_411_5098)">
            <circle
              cx="13.2875"
              cy="12.7567"
              r="12.5"
              transform="rotate(6.09562 13.2875 12.7567)"
              fill="#00FF88"
            />
            <circle
              cx="13.2875"
              cy="12.7567"
              r="12"
              transform="rotate(6.09562 13.2875 12.7567)"
              stroke="black"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_411_5098"
              x="0.786133"
              y="0.255859"
              width="26.252"
              height="26.252"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="1.25" dy="1.25" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_411_5098"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_411_5098"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        {/* Svg8*/}

        {/* Svg9*/}
        <svg
          className="absolute left-[34vw] top-[88vw] z-[1000] w-[7.5vw] md:left-[23vw] md:top-[18vw] md:w-[4.5vw]"
          viewBox="0 0 72 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_411_5153)">
            <rect
              y="17.1436"
              width="70.8648"
              height="12.0391"
              rx="6.01955"
              transform="rotate(-14 0 17.1436)"
              fill="#E1067B"
            />
            <rect
              x="0.606109"
              y="17.5077"
              width="69.8648"
              height="11.0391"
              rx="5.51955"
              transform="rotate(-14 0.606109 17.5077)"
              stroke="black"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_411_5153"
              x="0"
              y="0"
              width="72.8719"
              height="30.0252"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="1.2" dy="1.2" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_411_5153"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_411_5153"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        {/* Svg9*/}

        {/* Svg10*/}
        <svg
          className="absolute left-[24vw] top-[82vw] z-[1000] w-[7.5vw] md:left-[-6vw] md:top-[19vw] md:w-[4.5vw]"
          viewBox="0 0 84 84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_411_5124)">
            <path
              d="M39.989 18.3585L56.5688 0L55.2951 24.7049L80 23.4312L61.6415 40.011L80 56.5688L55.2951 55.317L56.5688 80L39.989 61.6635L23.4312 80L24.683 55.317L0 56.5688L18.3365 40.011L0 23.4312L24.683 24.7049L23.4312 0L39.989 18.3585Z"
              fill="#3E43BD"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_411_5124"
              x="0"
              y="0"
              width="84"
              height="84"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="4" dy="4" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_411_5124"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_411_5124"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        {/* Svg10*/}

        {/* Svg11*/}
        <svg
          className="absolute left-[-30vw] top-[86vw] z-[1000] w-[5.5vw] md:left-[-11vw] md:top-[22vw] md:w-[2.5vw]"
          viewBox="0 0 46 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_411_5092)">
            <rect
              x="6.20312"
              y="0.12793"
              width="50.4143"
              height="8.5648"
              rx="4.2824"
              transform="rotate(38 6.20312 0.12793)"
              fill="#96FF10"
            />
            <rect
              x="6.26443"
              y="0.627226"
              width="49.7029"
              height="7.85338"
              rx="3.92669"
              transform="rotate(38 6.26443 0.627226)"
              stroke="black"
              stroke-width="0.711415"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_411_5092"
              x="0.929688"
              y="0.12793"
              width="45.8537"
              height="38.6408"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="0.853698" dy="0.853698" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_411_5092"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_411_5092"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        {/* Svg11*/}

        {/* Svg12*/}
        <svg
          className="absolute left-[-18vw] top-[51vw] z-[1000] w-[7.5vw] md:left-[-19vw] md:top-[20vw] md:w-[3.5vw]"
          viewBox="0 0 65 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.8533 22.7587C18.4929 20.7459 20.2076 18.9702 22.2318 19.2602L48.9089 23.0821C51.3317 23.4292 52.3417 26.3752 50.6415 28.1358L28.715 50.8413C27.0148 52.6019 24.0354 51.6954 23.604 49.2862L18.8533 22.7587Z"
            fill="black"
          />
        </svg>
        {/* Svg12*/}

        {/* Svg13*/}
        <svg
          className="absolute left-[-14vw] top-[30vw] z-[1000] w-[5.5vw] md:left-[-22vw] md:top-[13vw] md:w-[3.5vw]"
          viewBox="0 0 63 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_411_5155)">
            <path
              d="M58.047 2.47253C53.4491 -3.34361 42.1836 1.45077 32.8961 13.1879C31.8613 14.4978 30.905 15.8208 30.0012 17.1832C29.1104 15.8339 28.141 14.4978 27.1062 13.1879C17.8187 1.45077 6.56631 -3.34361 1.95531 2.47253C-2.64258 8.28867 1.14315 22.5146 10.4306 34.2386C16.0634 41.3516 22.4166 45.9102 27.5778 47.1022C28.3244 47.3249 29.1366 47.4297 30.0012 47.4166C30.8657 47.4297 31.6779 47.3249 32.4246 47.1022C37.5857 45.9102 43.9389 41.3385 49.5717 34.2386C58.8461 22.5015 62.6449 8.27557 58.047 2.47253Z"
              fill="#E1067B"
            />
            <path
              d="M27.1062 13.1879L27.0548 13.2285C28.0886 14.537 29.0568 15.8717 29.9465 17.2193L30.001 17.3018L30.0557 17.2194C30.9586 15.8585 31.9138 14.537 32.9475 13.2285C37.5867 7.36565 42.7168 3.24118 47.2558 1.30799C51.7973 -0.626205 55.7242 -0.360151 57.9956 2.51315L57.9957 2.5132C60.2744 5.38918 60.4812 10.3691 58.9482 16.1134C57.4165 21.8528 54.1526 28.3356 49.5203 34.198C43.892 41.2922 37.5505 45.8511 32.4098 47.0384L32.4098 47.0383L32.4058 47.0395C31.6663 47.2601 30.8608 47.3641 30.0022 47.3511L30.0002 47.3511C29.1415 47.3641 28.3361 47.2601 27.5965 47.0395L27.5965 47.0394L27.5925 47.0384C22.4518 45.8511 16.1102 41.3052 10.482 34.198L10.4372 34.2334L10.482 34.1979C5.84312 28.3421 2.5793 21.8626 1.04924 16.1233C-0.48211 10.379 -0.2721 5.39576 2.00667 2.51318C4.2847 -0.360202 8.21168 -0.626169 12.7514 1.30799C17.2888 3.24117 22.4156 7.36564 27.0548 13.2285L27.1062 13.1879ZM27.1062 13.1879C28.1259 14.4786 29.082 15.7948 29.9619 17.1238L27.5778 47.1022C22.4166 45.9102 16.0634 41.3516 10.4306 34.2386C1.14315 22.5146 -2.64258 8.28867 1.95531 2.47253C6.56631 -3.34361 17.8187 1.45077 27.1062 13.1879Z"
              stroke="black"
              stroke-width="0.130994"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_411_5155"
              x="0"
              y="0"
              width="62.3709"
              height="49.7884"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="2.37089" dy="2.37089" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_411_5155"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_411_5155"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        {/* Svg13*/}

        {/* Svg14*/}
        <svg
          className="absolute left-[-17vw] top-[-23vw] z-[1000] w-[12.5vw] md:left-[-14vw] md:top-[-9vw] md:w-[7.5vw]"
          viewBox="0 0 160 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M118.978 62.6755C118.473 62.1015 118.144 61.395 118.029 60.6397L109.862 7.22399C109.384 4.09946 105.641 2.73736 103.267 4.82382L62.6758 40.4929C62.1018 40.9973 61.3953 41.3267 60.64 41.4422L7.22432 49.6093C4.09978 50.087 2.73768 53.8293 4.82414 56.2037L40.4932 96.795C40.9976 97.369 41.3271 98.0755 41.4426 98.8308L49.6096 152.246C50.0873 155.371 53.8297 156.733 56.204 154.647L96.7953 118.978C97.3693 118.473 98.0758 118.144 98.8311 118.028L152.247 109.861C155.371 109.383 156.733 105.641 154.647 103.267L118.978 62.6755ZM89.9189 101.573C77.8573 107.198 63.5218 101.98 57.8974 89.9185C52.273 77.8569 57.4906 63.5215 69.5523 57.8971C81.6139 52.2727 95.9493 57.4903 101.574 69.5519C107.198 81.6135 101.98 95.949 89.9189 101.573Z"
            fill="black"
          />
        </svg>
        {/* Svg14*/}

        {/* Svg15*/}
        
        <svg className="absolute left-[-50vw] top-[-5vw] z-[1000] w-[6.5vw] md:left-[-46vw] md:top-[4.8vw] md:w-[3vw]" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_3244_3509)">
<mask id="path-1-inside-1_3244_3509" fill="white">
<path d="M65 32.5C65 50.4493 50.4493 65 32.5 65C14.5507 65 0 50.4493 0 32.5C0 14.5507 14.5507 0 32.5 0C50.4493 0 65 14.5507 65 32.5ZM14.1746 32.5C14.1746 42.6208 22.3792 50.8254 32.5 50.8254C42.6208 50.8254 50.8254 42.6208 50.8254 32.5C50.8254 22.3792 42.6208 14.1746 32.5 14.1746C22.3792 14.1746 14.1746 22.3792 14.1746 32.5Z"/>
</mask>
<path d="M65 32.5C65 50.4493 50.4493 65 32.5 65C14.5507 65 0 50.4493 0 32.5C0 14.5507 14.5507 0 32.5 0C50.4493 0 65 14.5507 65 32.5ZM14.1746 32.5C14.1746 42.6208 22.3792 50.8254 32.5 50.8254C42.6208 50.8254 50.8254 42.6208 50.8254 32.5C50.8254 22.3792 42.6208 14.1746 32.5 14.1746C22.3792 14.1746 14.1746 22.3792 14.1746 32.5Z" fill="#C21232" stroke="black" stroke-width="4" mask="url(#path-1-inside-1_3244_3509)"/>
</g>
<defs>
<filter id="filter0_d_3244_3509" x="0" y="0" width="68.25" height="68.25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="3.25" dy="3.25"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3244_3509"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3244_3509" result="shape"/>
</filter>
</defs>
        </svg>

        {/* Svg15*/}

        {/* Svg16*/}
        <svg
          className="absolute left-[-49vw] top-[6vw] z-[1000] w-[1.5vw] md:left-[-46vw] md:top-[-9vw] md:w-[1vw]"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="10.0056"
            cy="10.0053"
            r="10"
            transform="rotate(6.09562 10.0056 10.0053)"
            fill="#FAE00D"
          />
        </svg>
        {/* Svg16*/}

        {/* Svg17*/}
        <svg
          className="absolute left-[-48vw] top-[-22vw] z-[1000] w-[4.5vw] md:left-[-51vw] md:top-[-15vw] md:w-[3vw]"
          viewBox="0 0 50 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_411_5156)">
            <path
              d="M36.3908 3.00422C32.0542 0.632724 26.3897 6.50941 23.7476 16.1314C23.4538 17.2048 23.2116 18.2658 23.0118 19.3373C22.1137 18.7413 21.1708 18.1739 20.1945 17.6396C11.4377 12.8562 3.28358 12.8451 1.96898 17.6154C0.662422 22.3823 6.6913 30.1262 15.4447 34.9016C20.7542 37.7993 25.8404 38.9419 29.3182 38.329C29.8344 38.2711 30.3601 38.1239 30.8872 37.8906C31.4212 37.6735 31.8923 37.3976 32.2925 37.0665C35.1493 34.9905 37.8572 30.5301 39.4644 24.7058C42.0984 15.0873 40.724 5.36768 36.3908 3.00422Z"
              fill="#008EFF"
            />
            <path
              d="M36.3593 3.06169L36.3594 3.06172C38.4974 4.22784 39.9201 7.22071 40.4754 11.1435C41.0301 15.0613 40.7162 19.8868 39.4012 24.6885C37.7959 30.5058 35.0937 34.9499 32.254 37.0135L32.2539 37.0134L32.2508 37.016C31.8563 37.3424 31.3911 37.615 30.8626 37.8299L30.8607 37.8308C30.339 38.0616 29.8198 38.2069 29.3109 38.2639L29.3109 38.2638L29.3068 38.2645C25.8497 38.8737 20.7792 37.7384 15.4761 34.8441L15.4447 34.9016L15.4761 34.8441C11.1063 32.4602 7.41794 29.3359 4.98602 26.215C2.55099 23.0902 1.38747 19.9848 2.03214 17.6328C2.67771 15.2903 5.00499 14.106 8.29084 14.1103C11.5742 14.1147 15.7911 15.3088 20.1631 17.6971L20.1945 17.6396L20.1631 17.697C21.1378 18.2305 22.0791 18.797 22.9756 19.3919L23.0581 19.4466L23.0762 19.3493C23.2757 18.2796 23.5175 17.2203 23.8108 16.1487C25.1299 11.3447 27.2023 7.481 29.4809 5.11569C31.7614 2.74851 34.2299 1.8972 36.3593 3.06169Z"
              stroke="black"
              stroke-width="0.130994"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_411_5156"
              x="1.79102"
              y="2.47852"
              width="41.3826"
              height="38.3816"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="2.37089" dy="2.37089" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_411_5156"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_411_5156"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        {/* Svg17*/}

        {/* Svg18*/}
        <svg
          className="absolute left-[-51vw] top-[18vw] z-[1000] w-[5.5vw] md:left-[-49vw] md:top-[-5vw] md:w-[4vw]"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M41.6519 18.0984C43.6648 17.738 45.4405 19.4527 45.1505 21.4769L41.3285 48.154C40.9814 50.5768 38.0355 51.5868 36.2749 49.8866L13.5693 27.9601C11.8087 26.2599 12.7153 23.2805 15.1245 22.8491L41.6519 18.0984Z"
            fill="#E1067B"
          />
        </svg>
        {/* Svg18*/}

        {/* Svg19*/}
        <svg
          className="absolute left-[-46vw] top-[52vw] z-[1000] w-[5.5vw] md:left-[-45vw] md:top-[10vw] md:w-[4vw]"
          viewBox="0 0 57 57"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_411_5148)">
            <path
              d="M38.2464 24.4857L36.9663 8.84415L24.4859 18.3591L8.84432 19.6392L18.355 32.1293L19.635 47.7709L32.1155 38.2559L47.7614 36.9662L38.2464 24.4857Z"
              fill="#00FF88"
            />
            <path
              d="M38.1935 24.49L38.1948 24.5055L38.2042 24.5179L47.6604 36.9213L32.1111 38.203L32.0957 38.2043L32.0833 38.2137L19.68 47.6699L18.4078 32.125L18.4066 32.1095L18.3972 32.0972L8.94522 19.6841L24.4902 18.412L24.5057 18.4107L24.518 18.4013L36.9214 8.94512L38.1935 24.49Z"
              stroke="black"
              stroke-width="0.106076"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_411_5148"
              x="8.84473"
              y="8.84424"
              width="41.047"
              height="41.0568"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="2.13" dy="2.13" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_411_5148"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_411_5148"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        {/* Svg19*/}

        {/* Svg20*/}
        <svg
          className="absolute left-[-43vw] top-[85vw] z-[1000] w-[1.5vw] md:left-[-41vw] md:top-[23vw] md:w-[0.5vw]"
          viewBox="0 0 11 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_411_5095)">
            <circle
              cx="5.50231"
              cy="5.50267"
              r="5"
              transform="rotate(6.09562 5.50231 5.50267)"
              fill="white"
            />
            <circle
              cx="5.50231"
              cy="5.50267"
              r="4.5"
              transform="rotate(6.09562 5.50231 5.50267)"
              stroke="black"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_411_5095"
              x="0.501953"
              y="0.502441"
              width="10.501"
              height="10.5005"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="0.5" dy="0.5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_411_5095"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_411_5095"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        {/* Svg20*/}

        {/* Svg21*/}
        <svg
          className="absolute left-[-4vw] top-[79vw] z-[1000] w-[4.5vw] md:left-[-30vw] md:top-[20vw] md:w-[2.5vw]"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_411_5129)">
            <path
              d="M46 23C46 35.7025 35.7025 46 23 46C10.2975 46 0 35.7025 0 23C0 10.2975 10.2975 0 23 0C35.7025 0 46 10.2975 46 23ZM10.0312 23C10.0312 30.1624 15.8376 35.9688 23 35.9688C30.1624 35.9688 35.9688 30.1624 35.9688 23C35.9688 15.8376 30.1624 10.0312 23 10.0312C15.8376 10.0312 10.0312 15.8376 10.0312 23Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_411_5129"
              x="0"
              y="0"
              width="49.25"
              height="49.25"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="3.25" dy="3.25" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_411_5129"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_411_5129"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        {/* Svg21*/}

        {/* Card 8 */}
      </div>
      <div className="absolute md:top-[0] top-[50vw] flex md:flex-row flex-col items-centre justify-center gap-[0.5vw] z-[1000]">
        <div className="relative left-[-8vw] md:left-0 flex md:gap-[0.5vw] gap-[1vw]"> 
        <svg className="absolute md:w-[20vw] w-[30vw] md:top-[2vw] top-[-15vw] md:left-[-4vw] left-[-1vw] overflow-visible" viewBox="0 0 386 367" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="mainPath"  d="M362.745 27.3357C364.631 29.5045 365.39 32.6868 364.957 36.9047C364.525 41.1222 362.909 46.28 360.167 52.2674C354.686 64.2377 344.781 79.3613 331.225 96.6245C304.12 131.141 262.516 174.089 212.836 217.276C163.155 260.462 114.835 295.684 76.8822 317.721C57.9004 328.743 41.5455 336.446 28.9288 340.209C22.618 342.091 17.2855 342.973 13.049 342.814C8.81194 342.655 5.76627 341.461 3.88094 339.292C1.9956 337.123 1.23675 333.941 1.66891 329.723C2.10103 325.505 3.71702 320.348 6.45888 314.36C11.9405 302.39 21.8453 287.266 35.4014 270.003C62.5059 235.487 104.11 192.539 153.791 149.352C203.471 106.165 251.791 70.9433 289.744 48.9063C308.726 37.8847 325.081 30.181 337.697 26.4187C344.008 24.5369 349.341 23.6544 353.577 23.8135C357.814 23.9725 360.86 25.1669 362.745 27.3357Z" stroke="black" stroke-width="1.5"/>
<g>
  <image x="-25" y="-25" width="50" height="50" href="/assets/landing/logo_one.png" />

  <animateMotion repeatCount="indefinite" dur="8s">
    <mpath href="#mainPath"/>
  </animateMotion>
</g>
</svg>



        <p
          className={
            "md:text-[11vw] text-[22vw] text-[#B572F9] md:w-[3vw] md:h-[13vw] w-[6vw] h-[24vw] " +
            styles.comingSoonBorders
          }
        >
          I
        </p>
        <p
          className={
            "relative md:text-[11vw] text-[23vw] left-[1vw] md:top-[2vw] top-[3vw] text-[#B572F9] md:h-[14vw] md:w-[7vw] h-[26vw] w-[14vw] " +
            styles.comingSoonBorders
          }
        >
          N
        </p>
        <p
          className={
            "relative left-[1vw] md:top-[6vw] top-[12vw] md:text-[9vw] text-[16vw] text-[#B572F9] md:h-[11vw] md:w-[7vw] h-[20vw] w-[12vw] " +
            styles.comingSoonBorders
          }
        >
          C
        </p>
        <p
          className={
            "relative md:text-[13vw] text-[24vw] left-[0.5vw] top-[-2.5vw] text-[#B572F9] md:h-[16vw] md:w-[10vw] h-[30vw] w-[18vw] " +
            styles.comingSoonBorders
          }
        >
          A
        </p>
        <p
          className={
            "relative md:text-[9vw] text-[18vw] md:top-[-1vw] top-[3vw] text-[#B572F9] md:h-[12vw] md:w-[6vw] h-[22vw] w-[10vw] " +
            styles.comingSoonBorders
          }
        >
          N
        </p>
        <p
          className={
            "relative top-[2vw] md:text-[11vw] text-[21vw] text-[#B572F9] md:h-[14vw] md:w-[6.5vw] h-[26vw] w-[14vw] " +
            styles.comingSoonBorders
          }
        >
          D
        </p>
        </div>
        <div className="relative md:left-0 md:top-0 left-[7vw] top-[-2vw] flex md:gap-[0.5vw] gap-[3vw]">
        <p
          className={
            "relative md:text-[10vw] text-[16vw] md:top-[-1vw] top-[5vw] text-[#B572F9] md:w-[6vw] w-[7vw] h-[13vw] " +
            styles.comingSoonBorders
          }
        >
          E
        </p>
        <p
          className={
            "relative md:text-[13vw] text-[24vw] top-[2vw] text-[#B572F9] md:w-[8vw] w-[10vw] h-[16vw] " +
            styles.comingSoonBorders
          }
        >
          S
        </p>
        <p
          className={
            "relative md:top-[2vw] top-[5vw] md:text-[9vw] text-[15vw] text-[#B572F9] md:w-[6vw] w-[7vw] h-[11vw] " +
            styles.comingSoonBorders
          }
        >
          C
        </p>
        <p
          className={
            "relative md:text-[9vw] text-[16vw] md:top-0 top-[6vw]  text-[#B572F9] h-[11vw] md:w-[6vw] w-[7vw] " +
            styles.comingSoonBorders
          }
        >
          E
        </p>
        <p
          className={
            "md:text-[13vw] text-[22vw] text-[#B572F9] h-[16vw] md:w-[7vw] w-[10vw] " +
            styles.comingSoonBorders
          }
        >
          N
        </p>
        <p
          className={
            "relative top-[8vw] md:text-[9vw] text-[15vw] text-[#B572F9] h-[11vw] md:w-[5.5vw] w-[8vw] " +
            styles.comingSoonBorders
          }
        >
          C
        </p>
        <p
          className={
            "md:text-[13vw] text-[23vw] text-[#B572F9] h-[16vw] w-[8vw] " +
            styles.comingSoonBorders
          }
        >
          E
        </p>
        </div>
        </div>
    </div>
    <div className="absolute md:bottom-[1vw] md:left-[2vw] bottom-[2vw] left-[4vw] flex"  style={{ transform: `scale(${scale})`, transformOrigin: "0 100%" }}>
      <p className="md:text-[2vw] text-[6vw]" style={{fontFamily: "Tusker Grotesk"}}>Scroll Down</p>
      <div className="relative md:w-[1.5vw] w-[3vw] md:left-[1vw] left-[2vw]">
      <Image
            src="/assets/landing/scroll_arow.png"
            alt="Spark"
            fill
            unoptimized
          />
      </div>
    </div>
  </div>
  );
};

export default HeroMobileView;
