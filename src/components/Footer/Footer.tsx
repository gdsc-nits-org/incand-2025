
"use client";

import React from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';
import LottieAnimation from './LottieAnimation';


const Footer = () => {
  return (
    <footer className="bg-black text-white h-screen flex flex-col justify-center items-center relative overflow-hidden">
     <div
        className={
          "absolute lg:top-15 lg:right-10 flex flex-col items-center lg:items-end text-center lg:text-right mb-[48vw] mt-[10vw] lg:mt-[12vw] lg:mr-[4vw]"
        }
      >
        <h3 className="font-oxygen text-lg font-bold leading-[17.41px] tracking-[0.4em] md:tracking-[0.5em]">
          CONTACT US
        </h3>
        <div className="flex justify-center items-center mt-4 space-x-4 lg:mt-6 md:mt-5 md:space-x-6 ">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className={"flex justify-center items-center " + styles["social-icon"]}
          >
            <Image
              src="/assets/instagram.png"
              alt="Instagram icon"
              width={40} // Adjusted size
              height={40}
              className={"block"+styles["social-icon"]}
              priority
            />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            className={"flex justify-center items-center " + styles["social-icon"]}
          >
            <Image
              src="/assets/linkedln.png"
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
            className={"flex justify-center items-center " + styles["social-icon"]}
          >
            <Image
              src="/assets/facebook.png"
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
            className={"flex justify-center items-center " + styles["social-icon"]}
          >
            <Image
              src="/assets/twitter.png"
              alt="Twitter icon"
              width={40}
              height={40}
              className="block"
              priority
            />
          </a>
        </div>
      </div>

     
      {/* Logo Section */}
      <div className={"relative mt-[5vw] md:mt-[30vw] md:mb-[-15vw] lg:mt-[-16vw] mb-[-50vw] lg:mb-[-9vw]"}>
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
          className="font-neue-haas text-[2vw] md:text-[0.9vw] lg:text-[0.6vw] font-thin leading-none text-center tracking-[0.3em] m-0 p-0" 
          style={{ wordSpacing: "0.3em", margin: "0", padding: "0", lineHeight: "2" }}
        >
          MADE IN COLLABORATION WITH GDG NIT SILCHAR
        </span>
        <div className="relative top-[1.88vw] md:top-[1vw] lg:top-[0.5vw] p-0 m-0 flex-shrink-0">
          <LottieAnimation/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



