"use client";
import React, { useEffect, useState, useRef, Ref } from "react";
import styles from "~/styles/Gallery.module.css";
import { motion, AnimatePresence, delay, transform } from "framer-motion";
import { SiCalendly } from "react-icons/si";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const PhotoGallery = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  const [isButtonTopZIndex, setIsButtonTopZIndex] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"down" | "up">("up");
  const [bgColor, setBgColor] = useState(colors[0]);
  const [isScrolling, setIsScrolling] = useState(false); // Prevent multiple triggers
  const [aspectRatios, setAspectRatios] = useState<number[]>([]);
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const [isAnimate, setIsAnimate] = useState({
    photo: false,
    gallery: false,
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsButtonTopZIndex(true);
    }, 2500);
    return () => clearTimeout(timeout);
  }, []);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimate({
        photo: true,
        gallery: true,
      });
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimate({
        photo: false,
        gallery: true,
      });
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setBgColor(colors[currentIndex % colors.length]);
    }, 500);
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection("down");
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    setDirection("up");
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (isScrolling) return; // Prevent multiple triggers during animation
    setIsScrolling(true);
    if (e.deltaY > 0) {
      handleNext();
    } else if (e.deltaY < 0) {
      handlePrevious();
    }

    setTimeout(() => {
      setIsScrolling(false);
    }, 1500); // Match the animation duration
  };

  const mainContainer = useRef<HTMLElement>(null);
  mainContainer.current?.addEventListener("wheel", () => handleWheel);
  const off = "80";
  const dur = 0.6;
  const imageVariants = {
    enter: (dir: "down" | "up") =>
      isLoaded
        ? {
            scaleX: isMobile ? 4 : isTablet ? 3.5 : 2.3,
            scaleY: isMobile ? 4 : isTablet ? 3.5 : 2.3,
            y: isMobile ? 75 : isTablet ? 30 : 150,
            transition: { delay: 0, duration: 0, ease: "easeIn" },
          }
        : dir === "down"
          ? { x: `${off}vw`, y: `${off}vh` }
          : { x: `-${off}vw`, y: `-${off}vh` },
    center: {
      x: 0,
      y: 0,
      scaleX: 1,
      scaleY: 1,
      transition: {
        delay: isLoaded ? 2 : 0,
        duration: isLoaded ? 1 : dur,
        ease: "easeInOut",
      }, // Slower transition
    },
    exit: (dir: "down" | "up") =>
      dir === "down"
        ? {
            x: `-${off}vw`,
            y: `-${off}vh`,
            transition: { duration: dur, ease: "easeInOut" },
          }
        : {
            x: `${off}vw`,
            y: `${off}vh`,
            transition: { duration: dur, ease: "easeInOut" },
          },
  };

  const textVariants = {
    enter: (dir: "left" | "right") =>
      dir === "left" ? { x: `${100}vw` } : { x: `-${100}vw` },
    center: {
      x: 0,
      transition: {
        delay: isLoaded ? 2.5 : 0.5,
        duration: 1.2,
        ease: "easeInOut",
        type: "spring",
        bounce: 0.25,
      }, // Slower transition
    },
    exit: {
      x: 0,
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut" }, // Slower transition
    },
  };

  return (
    <motion.section
      ref={mainContainer}
      onWheel={handleWheel}
      className="min-w-screen relative flex h-screen flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundColor: bgColor,
        transition: "background-color 0.8s linear",
      }}
    >
      {isButtonTopZIndex && (
        <div
          className={`absolute bottom-20 z-[60] flex w-full justify-center gap-4 laptop:hidden`}
        >
          {" "}
          <button
            onClick={handlePrevious}
            className="rounded-full bg-white p-4"
          >
            {" "}
            <FaArrowLeft style={{ color: bgColor }} className="scale-150" />
          </button>
          <button onClick={handleNext} className="rounded-full bg-white p-4">
            {" "}
            <FaArrowRight style={{ color: bgColor }} className="scale-150" />
          </button>
        </div>
      )}
      <div
        className={`absolute left-[50%] z-[60] translate-x-[-50%] mobile:top-24 md:top-8 md:scale-[1.5] laptop:top-4 laptop:scale-100 4k:top-16 4k:scale-[2.5]`}
      >
        {isButtonTopZIndex && (
          <Link
            href="/gallery_page"
            className="rounded-full bg-white px-6 py-3 font-tusker font-bold shadow-md transition-all duration-500 hover:opacity-80"
            style={{ color: bgColor }}
          >
            VIEW ALL
          </Link>
        )}
      </div>
      <div
        className={`absolute inset-0 z-0 transition-transform duration-1000 ease-out`}
        style={{
          backgroundImage: "url('assets/Gallery/cardboard-texture.png')",
          backgroundSize: "cover",
          mixBlendMode: "multiply",
        }}
      ></div>

      <AnimatePresence custom={direction} mode="wait">
        (
        <motion.h1
          key={currentIndex + (images[currentIndex]?.src ?? "") + currentIndex}
          className="relative font-tusker opacity-75 drop-shadow-xl mobile:top-[18vh] mobile:text-[7vh] tablet:top-[10vh] laptop:top-[13.5vh] laptop:text-[21vh]"
          style={{
            color: textcolors[currentIndex % textcolors.length],
          }}
          custom="left"
          variants={textVariants}
          initial="enter"
          animate="center"
          exit="exit"
        >
          {images[currentIndex]?.name1}
        </motion.h1>
        <motion.div
          key={currentIndex}
          className="relative z-50 flex h-screen w-screen flex-col items-center justify-center"
          custom={direction}
          variants={imageVariants}
          initial="enter"
          animate="center"
          exit="exit"
        >
          {images[currentIndex] && (
            <>
              <ImageCard
                isAnimate={isAnimate}
                isMobile={isMobile}
                isLoaded={isLoaded}
                index={currentIndex}
                reff={(el) => (imgRefs.current[currentIndex] = el)}
                src={images[currentIndex].src}
                name1={images[currentIndex].name1}
                name2={images[currentIndex].name2}
                bg={images[currentIndex].bg}
                scale={parseFloat(images[currentIndex].scale)}
                aspectRatio={aspectRatios[currentIndex]}
              />
            </>
          )}
        </motion.div>
        <motion.h1
          key={currentIndex + (images[currentIndex]?.src ?? "")}
          className="relative font-tusker opacity-75 drop-shadow-xl mobile:bottom-[18vh] mobile:text-[7vh] tablet:bottom-[9.5vh] laptop:bottom-[13.5vh] laptop:text-[21vh]"
          style={{
            color: textcolors[currentIndex % textcolors.length],
          }}
          custom="right"
          variants={textVariants}
          initial="enter"
          animate="center"
          exit="exit"
        >
          {images[currentIndex]?.name2}
        </motion.h1>
        )
      </AnimatePresence>
    </motion.section>
  );
};

export default PhotoGallery;

interface ImageProps {
  isLoaded: boolean;
  isMobile: boolean;
  index: number;
  aspectRatio?: number;
  src?: string;
  name1?: string;
  name2?: string;
  bg?: string;
  scale?: number;
  isAnimate: { photo: boolean; gallery: boolean };
  reff: (el: HTMLImageElement | null) => void;
}
const ImageCard = (image: ImageProps) => {
  const {
    src,
    name1,
    isLoaded,
    isMobile,
    name2,
    bg,
    scale,
    aspectRatio,
    reff,
    index,
    isAnimate,
  } = image;
  return (
    <div
      className={`relative z-50 h-max w-max border-2 border-white mobile:scale-[1.5] md:scale-[1.2] laptop:scale-100 ${styles["perforated-border"]}`}
      style={{
        transform: `scale(${scale == 0 ? 1 : scale})`,
      }}
    >
      {/* // <img
      //   className={`z-30 h-auto w-[30%] border-2 border-white ${styles["perforated-border"]}`}
      //   src={src}
      //   alt={name1}
      // ></img>
      > */}
      <div className="bg-white p-[1vh]">
        <div className={`relative flex justify-center overflow-hidden`}>
          <img
            ref={reff}
            // key={index}
            // ref={(el) => {
            //   if (el) {
            //     imgRefs.current[index] = el;
            //   }
            // }}
            src={src}
            alt="Gallery"
            className="max-h-[60vh] max-w-[50vw] object-contain"
          />
          {index === 0 && (
            <>
              <Image
                width={400}
                height={100}
                quality={100}
                src="/assets/Gallery/photo.png"
                alt="Gallery"
                className={`absolute scale-50 transition-transform duration-500 ease-in mobile:h-[4vh] mobile:w-[19vw] tablet:h-[6vh] tablet:w-[20vw] laptop:h-[15vh] laptop:w-[17vw] laptop:scale-90 ${
                  !isLoaded ? "-translate-y-1" : "-translate-y-full"
                } ${isAnimate.photo ? "scale-90" : "scale-50"}`}
              />
              <Image
                width={400}
                height={100}
                quality={100}
                src="/assets/Gallery/gallery.png"
                alt="Gallery"
                className={`absolute scale-50 transition-transform delay-500 duration-500 ease-in tablet:h-[10.5vh] tablet:w-[32vw] laptop:h-auto laptop:scale-90 ${
                  isMobile ? "h-[8vh] w-[30vw]" : "h-auto w-auto"
                } ${!isLoaded ? "-translate-y-3" : "-translate-y-full"} ${isAnimate.gallery ? "scale-90" : "scale-50"} `}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const colors = ["#EB6459", "#A9A6FF", "#62A073", "#FFDE70"];
const textcolors = ["#FAE00D", "#FF83F2", "#F58279", "#00B661"];

const images = [
  {
    src: "/assets/Gallery/bg1.png",
    name1: "PHOTO",
    name2: "GALLERY",
    bg: "",
    scale: "",
  },
  {
    src: "/assets/Gallery/bg2.png",
    name1: "PHOTO",
    name2: "GALLERY",
    bg: "",
    scale: "",
  },
  {
    src: "/assets/Gallery/bg3.png",
    name1: "PHOTO",
    name2: "GALLERY",
    bg: "",
    scale: "",
  },
  {
    src: "/assets/Gallery/bg4.png",
    name1: "",
    name2: "INSOMPADA",
    bg: "",
    scale: "1.8",
  },
  {
    src: "/assets/Gallery/bg1.png",
    name1: "PHOTO",
    name2: "GALLERY",
    bg: "",
    scale: "",
  },
  {
    src: "/assets/Gallery/bg2.png",
    name1: "PHOTO",
    name2: "GALLERY",
    bg: "",
    scale: "",
  },
  {
    src: "/assets/Gallery/bg3.png",
    name1: "PHOTO",
    name2: "GALLERY",
    bg: "",
    scale: "",
  },
  {
    src: "/assets/Gallery/bg4.png",
    name1: "PHOTO",
    name2: "GALLERY",
    bg: "",
    scale: "1.8",
  },
];

