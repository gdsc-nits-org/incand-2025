"use client";
import React from "react";
import Image from "next/image";
import { CgArrowTopLeft } from "react-icons/cg";
import { GiStarShuriken } from "react-icons/gi";
import FooterButton from "./Button";
import styles from "~/styles/Merch.module.css";

const StyledSection: React.FC = () => {
  return (
    <div
      className="relative flex h-screen w-full items-center justify-center overflow-hidden text-white"
      style={{
        background: `radial-gradient(
          ellipse,
          #A9A6FF 8%,
          #6964FF 45%,
          #4F1CFA 63%,
          #3A05EC 78%
        )`,
      }}
    >
      {/* Maze pattern background */}
      <div
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/Merch/maze.png')",
          backgroundSize: "cover",
          zIndex: 0,
        }}
      ></div>
      <div className="absolute -top-[2.9vw] left-[8.5vw] mobile:hidden laptop:block">
        <Image
          src="/assets/Merch/Brutalist 89.png"
          alt="Brutalist 89"
          width={100}
          height={100}
          quality={100}
          className="h-[13vw] w-[9vw]"
        />
      </div>
      <div className="absolute left-[0vw] top-[8.5vw] z-20 mobile:hidden laptop:block">
        <Image
          src="/assets/Merch/Brutalist 89.png"
          alt="Brutalist 89"
          width={100}
          height={100}
          quality={100}
          className="h-[13vw] w-[9vw]"
        />
      </div>
      <div className="absolute -bottom-[2.2vw] right-[0vw] mobile:hidden laptop:block">
        <Image
          src="/assets/Merch/Brutalist 89.png"
          alt="Brutaiist 89"
          width={100}
          height={100}
          quality={100}
          className="h-[13vw] w-[9vw]"
        />
      </div>
      <div className="absolute -left-[1.5vw] top-[18vw] z-10 mobile:hidden laptop:block">
        <Image
          src="/assets/Merch/Brutalist Shape 133.png"
          alt="Brutalist Shape 133"
          width={100}
          height={100}
          quality={100}
          className="h-[16vw] w-[7.8vw]"
        />
      </div>
      <div className="absolute -left-[1.5vw] top-[28vw] z-10 mobile:hidden laptop:block">
        <Image
          src="/assets/Merch/Brutalist Shape 133.png"
          alt="Brutalist Shape 133"
          width={100}
          height={100}
          quality={100}
          className="h-[16vw] w-[7.8vw]"
        />
      </div>
      <div className="absolute -bottom-[2vw] -left-[1vw] z-10 mobile:hidden laptop:block">
        <Image
          src="/assets/Merch/Brutalist Shape 129.png"
          alt="Brutalist Shape 129"
          width={100}
          height={100}
          quality={100}
          className="h-[7.8vw] w-[16vw]"
        />
      </div>
      <div className="absolute -bottom-[2vw] left-[13vw] z-10 mobile:hidden laptop:block">
        <Image
          src="/assets/Merch/Brutalist Shape 129.png"
          alt="Brutalist Shape 129"
          width={100}
          height={100}
          quality={100}
          className="h-[7.8vw] w-[16vw]"
        />
      </div>
      <div className="relative z-30 w-[80vw] border-4 border-white bg-[#2D0079] shadow-[-1.5vw_1.5vw_0px_rgba(255,255,255,1)] mobile:h-[70vh] mobile:-translate-y-[20vw] laptop:h-[60vh] laptop:transform-none">
        <div className="absolute -left-[2.1vw] top-[16vw] z-40 mobile:hidden laptop:block">
          <Image
            src="/assets/Merch/Ellipse 1499.png"
            alt="Ellipse 1499"
            width={400}
            height={400}
            quality={100}
            className="h-[10vw] w-[8vw]"
          />
        </div>
        <div className="absolute left-[4.5vw] top-[16vw] z-40 mobile:hidden laptop:block">
          <Image
            src="/assets/Merch/Vector.png"
            alt="Vector"
            layout="responsive"
            width={100}
            height={100}
          />
        </div>
        <div className="absolute left-[8vw] top-[25vw] z-40 mobile:hidden laptop:block">
          <Image
            src="/assets/Merch/Vector.png"
            alt="Vector"
            layout="responsive"
            width={100}
            height={100}
          />
        </div>
        <div className="absolute left-[35.5vw] z-40 mobile:hidden laptop:block">
          <Image
            src="/assets/Merch/Vector 744.png"
            alt="Vector 744"
            width={100}
            height={100}
            quality={100}
            className="h-[5vw] w-[10vw]"
          />
        </div>
        <div className="absolute z-[40] mobile:left-[4vw] mobile:top-[2.4vh] laptop:left-[2.7vw] laptop:top-[3.5vh]">
          <Image
            src="/assets/Merch/Wear.png"
            alt="wear"
            width={400}
            height={100}
            quality={100}
            className="mobile:h-[15vh] mobile:w-[13.5vw] laptop:h-[13.5vw] laptop:w-[6.4vw]"
          />
        </div>
        <div className="absolute z-40 mobile:left-[9vw] mobile:top-[2.5vh] mobile:scale-[0.95] laptop:left-[5vw] laptop:top-[1.8vw]">
          <Image
            src="/assets/Merch/Rectangle 434.png"
            alt="Rectangle"
            width={400}
            height={300}
            quality={100}
            className="mobile:h-[20vh] mobile:w-[65vw] laptop:h-[18.5vw] laptop:w-[32vw]"
          />
        </div>
        <h1
          className={`absolute z-[45] font-DMSerif font-semibold italic mobile:-rotate-[13deg] mobile:text-[6vh] mobile:leading-[15vw] laptop:left-[7.5vw] laptop:top-[3vw] laptop:-rotate-[18.25deg] laptop:text-[14.5vh] laptop:leading-[7.5vw] ${styles["text-stroke"]} mobile:left-[16vw] mobile:top-[8vw]`}
        >
          Official
          <br />
          Merch
        </h1>
        <div className="absolute left-[23.4vw] top-[1.8vw] z-[45]">
          <Image
            src="/assets/Merch/Vector green.png"
            alt="Vector green"
            layout="responsive"
            width={100}
            height={100}
          />
        </div>
        <div className="absolute left-[20vw] top-[10vw] z-[45]">
          <Image
            src="/assets/Merch/Vector red.png"
            alt="Vector red"
            layout="responsive"
            width={100}
            height={100}
          />
        </div>
        <div className="absolute left-[7.5vw] top-[14vw] z-[45]">
          <Image
            src="/assets/Merch/Vector yellow.png"
            alt="Vector yellow"
            layout="responsive"
            width={100}
            height={100}
          />
        </div>
        <div className="absolute left-[3.6vw] z-50 mobile:top-[20vh] laptop:top-[36vh]">
          <Image
            src="/assets/Merch/flower.png"
            alt="flower"
            width={100}
            height={100}
            quality={100}
            className="mobile:h-[6vh] mobile:w-[6vh] laptop:h-[5vw] laptop:w-[5vw]"
          />
        </div>
        <div className="absolute -rotate-[6.17deg] border-[0.6vh] border-black bg-[#00FF88] px-[0.15vw] py-[0.3vw] shadow-[0.4vh_0.4vh_0px_rgba(0,0,0,1)] mobile:left-[18vw] mobile:top-[1.9vh] laptop:left-[10vw] laptop:top-[1.3vw]">
          <Image
            src="/assets/Merch/arrow.png"
            alt="arrow"
            width={300}
            height={100}
            quality={100}
            className="mobile:h-[1.6vh] mobile:w-[2vh] laptop:h-[1.8vw] laptop:w-[2.15vw]"
          />
        </div>
        <div className="absolute z-50 mobile:left-[60vw] mobile:top-[26vh] laptop:left-[26.3vw] laptop:top-[15vw]">
          <Image
            src="/assets/Merch/Spark 70.png"
            alt="Spark"
            width={400}
            height={400}
            quality={100}
            className="h-[9vh] w-[9vh]"
          />
        </div>
        <div className="4k: absolute z-50 mobile:left-[8.5vw] mobile:top-[70vh] mobile:scale-[1.4] laptop:-left-[8vw] laptop:top-[20vw] laptop:scale-[.90]">
          <FooterButton />
        </div>
        <h1 className="group relative z-[45] w-max -rotate-[5.44deg] bg-red-600 px-[0.5vw] font-tusker hover:shadow-[0.8vh_0.8vh_0px_rgba(0,0,0,1)] mobile:left-[25vw] mobile:top-[21vh] mobile:text-[1.5vh] laptop:left-[13vw] laptop:top-[19vw] laptop:text-[2vh]">
          <GiStarShuriken className="absolute -right-[0.85vh] -top-[0.9vh] hidden group-hover:block" />
          GRAB YOUR MERCH NOW!
        </h1>
        <CgArrowTopLeft className="absolute z-[45] -rotate-[18deg] text-[#FAE00D] mobile:left-[70vw] mobile:top-[85vh] mobile:text-[6vh] laptop:left-[27vw] laptop:top-[25vw] laptop:text-[3.2vw]" />
        <div className="absolute z-50 -rotate-[65deg] mobile:-top-[2.5vh] mobile:left-[54.5vw] laptop:left-[31vw] laptop:top-[1.5vw] 4k:left-[32.5vw] 4k:top-[3.4vw]">
          <Image
            src="/assets/Merch/Figma to Lottie ✨.gif"
            alt="lottie"
            width={100}
            height={100}
            quality={100}
            unoptimized
            className="mobile:scale-[0.7] laptop:scale-[1.4] 4k:scale-[3]"
          />
        </div>
        <h1
          className={`font-DMSerif ${styles["text-shadow"]} absolute z-50 -rotate-[18.25deg] font-semibold mobile:left-[61vw] mobile:top-[0.5vh] mobile:text-[5vh] laptop:left-[31.5vw] laptop:top-[1.3vw] laptop:text-[10vh]`}
        >
          20
        </h1>
        <h1
          className={`${styles["text-shadow"]} absolute z-50 -rotate-[18.25deg] font-DMSerif font-semibold mobile:left-[59vw] mobile:top-[9.5vh] mobile:text-[5vh] laptop:left-[30vw] laptop:top-[8.1vw] laptop:text-[10vh]`}
        >
          25
        </h1>
        <div className="absolute z-[45] -rotate-[65deg] mobile:left-[52vw] mobile:top-[6vh] laptop:left-[30vw] laptop:top-[8.5vw] 4k:left-[31vw] 4k:top-[10vw]">
          <Image
            src="/assets/Merch/Figma to Lottie ✨.gif"
            alt="lottie"
            width={100}
            height={100}
            quality={100}
            unoptimized
            className="mobile:scale-[0.7] laptop:scale-[1.4] 4k:scale-[3]"
          />
        </div>
        <div className="absolute left-[9vw] top-[20.8vh] z-40 mobile:block laptop:hidden">
          <Image
            src="/assets/Merch/LUCID.png"
            alt="merch"
            width={500}
            height={100}
            quality={100}
            className="h-[48vh] w-[58vw]"
          />
        </div>
      </div>
      <div className="absolute z-50 mobile:hidden mobile:translate-y-[15vw] laptop:-right-[5vw] laptop:block laptop:transform-none 4k:right-[14vw]">
        <img
          src="/assets/Merch/merch.png"
          alt=""
          className="scale-[0.72] 4k:scale-[1.8]"
        />
      </div>
    </div>
  );
};

export default StyledSection;
