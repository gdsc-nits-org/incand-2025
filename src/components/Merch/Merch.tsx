"use client";
import React from 'react';
import Image from 'next/image';
import { CgArrowTopLeft } from "react-icons/cg";
import { GiStarShuriken } from "react-icons/gi";
import FooterButton from './Button';
import styles from './Merch.module.css'


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
              width={400}
              height={400}
              quality={100}
              className='h-[10vw] w-[8vw]'
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
              width={100}
              height={100}
              quality={100}
              className='h-[5vw] w-[10vw]'
            />
      </div>
        <div className='absolute left-[4vw] top-[2.4vh] z-[40]'>
      <Image
              src="/Wear.png"
              alt="wear"
              width={400}
              height={100}
              quality={100}
              className='mobile:h-[15vh] mobile:w-[13.5vw] laptop:h-[13.5vw] laptop:w-[6.4vw]'
            />
      </div>
      <div className='absolute laptop:left-[5vw] laptop:top-[1.8vw] z-40 mobile:left-[9vw] mobile:top-[2.5vh]  mobile:scale-[0.95]'>
      <Image
              src="/Rectangle 434.png"
              alt="Rectangle"
              width={400}
              height={300}
              quality={100}
              className='mobile:h-[20vh] mobile:w-[65vw] laptop:h-[18.5vw] laptop:w-[32vw]'
            />
      </div>
      <h1 className={`absolute mobile:-rotate-[13deg] laptop:-rotate-[18.25deg] laptop:top-[3vw] laptop:left-[7.5vw] laptop:text-[14.5vh] mobile:text-[6vh] z-[45] font-DMserif italic mobile:leading-[15vw] laptop:leading-[7.5vw] font-semibold ${styles['text-stroke']} mobile:top-[8vw] mobile:left-[16vw]`}>Official<br/>Merch</h1>
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
              width={100}
              height={100}
              quality={100}
              className='mobile:h-[6vh] mobile:w-[6vh] laptop:h-[5vw] laptop:w-[5vw]'
            />
      </div>
      <div className='absolute border-[0.6vh] -rotate-[6.17deg] border-black bg-[#00FF88] px-[0.15vw] mobile:left-[18vw] mobile:top-[1.9vh] py-[0.3vw] laptop:left-[10vw] laptop:top-[1.3vw] shadow-[0.4vh_0.4vh_0px_rgba(0,0,0,1)]'>
      <Image
              src="/arrow.png"
              alt="arrow"
              width={300}
              height={100}
              quality={100}
              className='mobile:h-[1.6vh] mobile:w-[2vh] laptop:h-[1.8vw] laptop:w-[2.15vw]'
            />
      </div>
      <div className='absolute laptop:top-[15vw] laptop:left-[26.3vw] mobile:top-[26vh] mobile:left-[60vw] z-50'>
      <Image
              src="/Spark 70.png"
              alt="Spark"
              width={400}
              height={400}
              quality={100}
              className='h-[9vh] w-[9vh]'
            />
      </div>
      <div className='absolute laptop:top-[20vw] laptop:-left-[8vw] laptop:scale-[.90] mobile:top-[70vh] mobile:scale-[1.4] mobile:left-[8.5vw] 4k: z-50'>
        <FooterButton/>
      </div>
      <h1 className='relative mobile:top-[21vh] mobile:left-[25vw] laptop:top-[19vw] laptop:left-[13vw] bg-red-600 w-max mobile:text-[1.5vh] laptop:text-[2vh] px-[0.5vw] font-tusker -rotate-[5.44deg] z-[45] hover:shadow-[0.8vh_0.8vh_0px_rgba(0,0,0,1)] group'><GiStarShuriken className='absolute hidden group-hover:block -top-[0.9vh] -right-[0.85vh]'/>GRAB YOUR MERCH NOW!</h1>
      <CgArrowTopLeft className='absolute laptop:text-[3.2vw] mobile:text-[6vh] z-[45] laptop:top-[25vw] laptop:left-[27vw] -rotate-[18deg] text-[#FAE00D] mobile:top-[85vh] mobile:left-[70vw]'/>
      <div className='absolute laptop:top-[1.5vw] laptop:left-[31vw] -rotate-[65deg] z-50 mobile:-top-[2.5vh] mobile:left-[54.5vw] 4k:top-[3.4vw] 4k:left-[32.5vw]'>
      <Image
              src="/Figma to Lottie ✨.gif"
              alt="lottie"
              width={100}
              height={100}
              quality={100}
              className='mobile:scale-[0.7] laptop:scale-[1.4] 4k:scale-[3]'
            />
      </div>
      <h1 className='absolute laptop:top-[1.3vw] mobile:top-[0.5vh] laptop:left-[31.5vw] mobile:left-[61vw] -rotate-[18.25deg] mobile:text-[5vh] laptop:text-[10vh] font-DMserif z-50 text-shadow font-semibold'>20</h1>
      <h1 className='absolute laptop:top-[8.1vw] mobile:top-[9.5vh] laptop:left-[30vw] mobile:left-[59vw] -rotate-[18.25deg] mobile:text-[5vh] laptop:text-[10vh] font-DMserif z-50 text-shadow font-semibold'>25</h1>
      <div className='absolute top-[8.5vw] left-[30vw] -rotate-[65deg] z-[45] mobile:top-[6vh] mobile:left-[52vw] laptop:transform-none 4k:top-[10vw] 4k:left-[31vw]'>
      <Image
              src="/Figma to Lottie ✨.gif"
              alt="lottie"
              width={100}
              height={100}
              quality={100}
              className='mobile:scale-[0.7] laptop:scale-[1.4] 4k:scale-[3]'
            />
      </div>
      <div className='absolute left-[9vw] top-[20.8vh] z-40 mobile:block laptop:hidden'>
      <Image
              src="/LUCID.png"
              alt="merch"
              width={500}
              height={100}
              quality={100}
              className='h-[48vh] w-[58vw]'
            />
      </div>
      </div>
      <div className='absolute mobile:translate-y-[15vw] laptop:-right-[5vw] 4k:right-[14vw] z-50 laptop:transform-none mobile:hidden laptop:block'>
      <img src="/merch.png" alt="" className='scale-[0.72] 4k:scale-[1.8]'/>
      </div>


    </div>
  );
};

export default StyledSection;
