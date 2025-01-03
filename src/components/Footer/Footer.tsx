
"use client";

import React from 'react';
import Lottie from 'lottie-react';
import dotsAnimation from '../../gdg-animation.json';
import styles from './Footer.module.css';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white h-screen flex flex-col justify-center items-center relative overflow-hidden">
     
      {/* Logo Section */}
      <div className={"relative mt-[55vw] md:mt-[10vw] lg:mt-[1vw] mb-[5vw] "}>
        <div className={styles.logo}>
        {/* Background Image */}
        <Image
          src="/assets/footer-background.png"
          alt="Incandescence Logo Background"
          
          fill={true} 
          className={"max-w-full max-h-full "}
          priority
        />
        </div>
       

        {/* GIF Overlay */}
        <div
          className={"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-full h-auto "+styles.anima}
        
        >
          <Image
            src="/assets/incandanimation.gif"
            alt="Incandescence Animation"
           fill={true}
            className={"z-10 max-w-full h-auto"+styles.anima}
            priority
          
          />
       
        </div>
      </div>

      {/* Text Section with Lottie Animation */}
      <div className="absolute bottom-[1.67vw] md:bottom-[1vw] lg:bottom-[0vw] flex flex-row items-center justify-center gap-0">
        <span 
          className="font-neue-haas text-[2.08vw] md:text-[0.9vw] lg:text-[0.6vw] font-thin leading-none text-center tracking-[0.3em] m-0 p-0" 
          style={{ wordSpacing: "0.3em", margin: "0", padding: "0", lineHeight: "2" }}
        >
          MADE IN COLLABORATION WITH GDG NIT SILCHAR
        </span>
        <div className="relative top-[1.88vw] md:top-[1vw] lg:top-[0.5vw] p-0 m-0 flex-shrink-0">
          <Lottie 
            animationData={dotsAnimation} 
            loop 
            className="h-[6vw] md:h-[5vw] lg:h-[5vw] w-[10vw] md:w-[8vw] lg:w-[8vw] left-0 right-[2.29vw] p-0 m-0" 
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;


