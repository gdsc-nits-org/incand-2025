"use client";
import React from 'react';
import Image from 'next/image';
import { CgArrowTopLeft } from "react-icons/cg";
import FooterButton from './Button';


const StyledSection: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center h-screen w-full overflow-hidden"
    style={{
        background: `radial-gradient(
          ellipse,
          #A9A6FF 8%,
          #6964FF 45%,
          #4F1CFA 63%,
          #3A05EC 78%
        )`,
      }}>
      {/* Maze pattern background */}
      <div
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: "url('/maze.png')",
          backgroundSize: 'cover',
          zIndex: 0,
        }}
      ></div>
      <div className='absolute -top-[2.9vw] left-[8.5vw] mobile:hidden laptop:block'>
      <Image
              src="/Brutalist 89.png"
              alt="Brutalist 89"
              width={100}
              height={100}
              quality={100}
              className='h-[13vw] w-[9vw]'
            />
      </div>
      <div className='absolute top-[8.5vw] left-[0vw] z-20 mobile:hidden laptop:block'>
      <Image
              src="/Brutalist 89.png"
              alt="Brutalist 89"
              width={100}
              height={100}
              quality={100}
              className='h-[13vw] w-[9vw]'
            />
      </div>
      <div className='absolute -bottom-[2.2vw] right-[0vw] mobile:hidden laptop:block'>
      <Image
              src="/Brutalist 89.png"
              alt="Brutaiist 89"
              width={100}
              height={100}
              quality={100}
              className='h-[13vw] w-[9vw]'
            />
      </div>
      <div className='absolute top-[18vw] -left-[1.5vw] z-10 mobile:hidden laptop:block'>
      <Image
              src="/Brutalist Shape 133.png"
              alt="Brutalist Shape 133"
              width={100}
              height={100}
              quality={100}
              className='h-[16vw] w-[7.8vw]'
            />
      </div>
      <div className='absolute top-[28vw] -left-[1.5vw] z-10 mobile:hidden laptop:block'>
      <Image
              src="/Brutalist Shape 133.png"
              alt="Brutalist Shape 133"
              width={100}
              height={100}
              quality={100}
              className='h-[16vw] w-[7.8vw]'
            />
      </div>
      <div className='absolute -bottom-[2vw] -left-[1vw] z-10 mobile:hidden laptop:block'>
      <Image
              src="/Brutalist Shape 129.png"
              alt="Brutalist Shape 129"
              width={100}
              height={100}
               quality={100}
              className='h-[7.8vw] w-[16vw]'
            />
      </div>
      <div className='absolute -bottom-[2vw] left-[13vw] z-10 mobile:hidden laptop:block'>
      <Image
              src="/Brutalist Shape 129.png"
              alt="Brutalist Shape 129"
              width={100}
              height={100}
              quality={100}
              className='h-[7.8vw] w-[16vw]'
            />
      </div>
      <div
        className="relative bg-[#2D0079] border-4 border-white w-[80vw] mobile:h-[70vh] laptop:h-[60vh] shadow-[-1.5vw_1.5vw_0px_rgba(255,255,255,1)] z-30 mobile:-translate-y-[20vw] laptop:transform-none"
      >
      <div className='absolute -left-[2.1vw] top-[16vw] z-40 mobile:hidden laptop:block'>
      <Image
              src="/Ellipse 1499.png"
              alt="Ellipse 1499"
              layout="responsive"
              width={100}
              height={100}
            />
      </div>
      <div className='absolute left-[4.5vw] top-[16vw] z-40 mobile:hidden laptop:block'>
      <Image
              src="/Vector.png"
              alt="Vector"
              layout="responsive"
              width={100}
              height={100}
            />
      </div>
      <div className='absolute left-[8vw] top-[25vw] z-40 mobile:hidden laptop:block'>
      <Image
              src="/Vector.png"
              alt="Vector"
              layout="responsive"
              width={100}
              height={100}
            />
      </div>
      <div className='absolute left-[35.5vw] z-40 mobile:hidden laptop:block'>
      <Image
              src="/Vector 744.png"
              alt="Vector 744"
              layout="responsive"
              width={100}
              height={100}
            />
      </div>
        <div className='absolute left-[2.8vw] top-[1.75vw] z-[40]'>
      <Image
              src="/Wear.png"
              alt="wear"
              layout="responsive"
              width={100}
              height={100}
            />
      </div>
      <div className='absolute laptop:left-[5vw] laptop:top-[1.8vw] z-40 mobile:left-[9vw] mobile:top-[2vw]  mobile:scale-[0.95]'>
      <Image
              src="/Rectangle 434.png"
              alt="Rectangle"
              width={400}
              height={300}
              quality={100}
              className='h-[18.5vw] w-[32vw]'
            />
      </div>
      <h1 className='absolute mobile:-rotate-[13deg] laptop:-rotate-[18.25deg] laptop:top-[3vw] laptop:left-[7.5vw] laptop:text-[14.5vh] mobile:text-[6vh] z-[45] font-DMserif italic mobile:leading-[15vw] laptop:leading-[7.5vw] font-semibold text-stroke mobile:top-[8vw] mobile:left-[16vw]'>Official<br/>Merch</h1>
      <div className='absolute left-[23.4vw] top-[1.8vw] z-[45]'>
      <Image
              src="/Vector green.png"
              alt="Vector green"
              layout="responsive"
              width={100}
              height={100}
            />
      </div>
      <div className='absolute left-[20vw] top-[10vw] z-[45]'>
      <Image
              src="/Vector red.png"
              alt="Vector red"
              layout="responsive"
              width={100}
              height={100}
            />
      </div>
      <div className='absolute left-[7.5vw] top-[14vw] z-[45]'>
      <Image
              src="/Vector yellow.png"
              alt="Vector yellow"
              layout="responsive"
              width={100}
              height={100}
            />
      </div>
      <div className='absolute laptop:top-[36vh] left-[3.6vw] z-50 mobile:top-[20vh]'>
      <Image
              src="/flower.png"
              alt="flower"
              layout="responsive"
              width={100}
              height={100}
              quality={100}
            />
      </div>
      <div className='absolute border-[0.6vh] -rotate-[6.17deg] border-black bg-[#00FF88] px-[0.15vw] py-[0.3vw] left-[10vw] top-[1.4vw] shadow-[0.4vh_0.4vh_0px_rgba(0,0,0,1)]'>
      <Image
              src="/arrow.png"
              alt="arrow"
              layout="responsive"
              width={100}
              height={100}
              quality={100}
            />
      </div>
      <div className='absolute laptop:top-[15vw] laptop:left-[26.3vw] mobile:top-[26vh] mobile:left-[60vw] z-50'>
      <Image
              src="/Spark 70.png"
              alt="Spark"
              layout="responsive"
              width={100}
              height={100}
              quality={100}
            />
      </div>
      <div className='relative laptop:top-[20vw] laptop:-left-[8vw] laptop:scale-[.90] mobile:translate-y-[150vw] mobile:scale-[1.5] mobile:translate-x-[12vw] laptop:transform-none'>
        <FooterButton/>
      </div>
      <div className='mobile:translate-y-[128vw] mobile:translate-x-[70vw] laptop:transform-none'>
      <CgArrowTopLeft className='absolute laptop:text-[3.2vw] mobile:text-[6vh] z-[45] laptop:top-[25vw] laptop:left-[27vw] -rotate-[18deg] text-[#FAE00D] '/>
      </div>
      <div className='absolute top-[1.5vw] left-[31vw] -rotate-[65deg] z-50 mobile:translate-x-[25vw] mobile:-translate-y-[2vh] laptop:transform-none 4k:top-[3.4vw] 4k:left-[32.5vw]'>
      <Image
              src="/Figma to Lottie ✨.gif"
              alt="lottie"
              width={100}
              height={100}
              quality={100}
              className='laptop:scale-[1.4] 4k:scale-[3]'
            />
      </div>
      <h1 className='absolute laptop:top-[1.3vw] mobile:top-[0.5vh] laptop:left-[31.5vw] mobile:left-[61vw] -rotate-[18.25deg] mobile:text-[5vh] laptop:text-[10vh] font-DMserif z-50 text-shadow font-semibold'>20</h1>
      <h1 className='absolute laptop:top-[8.1vw] mobile:top-[9.5vh] laptop:left-[30vw] mobile:left-[59vw] -rotate-[18.25deg] mobile:text-[5vh] laptop:text-[10vh] font-DMserif z-50 text-shadow font-semibold'>25</h1>
      <div className='absolute top-[8.5vw] left-[30vw] -rotate-[65deg] z-[45] mobile:translate-x-[23vw] mobile:translate-y-[8vw] laptop:transform-none 4k:top-[10.2vw] 4k:left-[31vw]'>
      <Image
              src="/Figma to Lottie ✨.gif"
              alt="lottie"
              width={100}
              height={100}
              quality={100}
              className='laptop:scale-[1.4] 4k:scale-[3]'
            />
      </div>
      <div className='absolute left-[27vw] top-[37.75vh] z-50 mobile:block laptop:hidden'>
      <Image
              src="/LUCID.png"
              alt="merch"
              width={100}
              height={100}
              quality={100}
              className='scale-[2.8]'
            />
      </div>
      </div>
      <div className='absolute mobile:translate-y-[15vw] laptop:-right-[5vw] 4k:right-[14vw] z-50 laptop:transform-none'>
      <img src="/merch.png" alt="" className='scale-[0.72] 4k:scale-[1.8]'/>
      </div>


    </div>
  );
};

export default StyledSection;
