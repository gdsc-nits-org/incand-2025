"use client";
import React, { useEffect, useState, useRef } from "react";
import styles from "~/styles/Gallery.module.css";
import { motion, AnimatePresence} from "framer-motion";
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
      className="min-w-screen relative flex h-screen flex-col items-center justify-center overflow-hidden pt-10"
      style={{
        backgroundColor: bgColor,
        transition: "background-color 0.8s linear",
      }}
    >
      <div
        className={`absolute left-[50%] z-[1000000] translate-x-[-50%] mobile:top-24 md:top-8 md:scale-[1.5] laptop:top-4 laptop:scale-100 4k:top-16 4k:scale-[2.5]`}
      >
        {isButtonTopZIndex && (
          <Link
            href="/gallery_page"
            className="rounded-full z-[100000] bg-white px-6 py-3 font-tusker font-bold shadow-md transition-all duration-500 hover:opacity-80"
            style={{ color: bgColor }}
          >
            VIEW ALL
          </Link>
        )}
      </div>
      {isButtonTopZIndex && (
        <div
          className={`absolute bottom-10 z-[60] flex w-full justify-center gap-4 laptop:hidden`}
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
            href="gallery_page"
            className="rounded-full z-[100000] bg-white px-6 py-3 font-tusker font-bold shadow-md transition-all duration-500 hover:opacity-80"
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
      <div className="mt-4 flex h-screen w-screen flex-col items-center justify-center">
        <AnimatePresence custom={direction} mode="wait">
          (
          <motion.h1
            key={
              currentIndex + (images[currentIndex]?.src ?? "") + currentIndex
            }
            className="relative font-tusker opacity-75 drop-shadow-xl mobile:top-[18vh] mobile:text-[6vh] tablet:top-[10vh] laptop:top-[9.5vh] laptop:text-[18vh]"
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
            className="relative font-tusker opacity-75 drop-shadow-xl mobile:bottom-[18vh] mobile:text-[6vh] tablet:bottom-[9.5vh] laptop:bottom-[8vh] laptop:text-[18vh]"
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
      </div>
      {/* </div> */}
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
        transform: isMobile ? `scale(${scale == 0 ? 1 : scale})` : "scale-100",
      }}
    >
      <div className="bg-white p-2">
        <div className={`relative flex justify-center overflow-hidden`}>
          <img
            ref={reff}
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
    src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737965116/lamp_cxfiru.jpg",
    name1: "LAMP",
    name2: "LIGHTING",
    bg: "",
    scale: "",
  },
  {
    src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737964559/monali1_hr1pa2.jpg",
    name1: "",
    name2: "CARPEDIEM",
    bg: "",
    scale: "",
  },
  {
    src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737965417/Glitteratti_bunp2d.jpg",
    name1: "",
    name2: "GLITTERATI",
    bg: "",
    scale: "",
  },
  {
    src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737965882/DJ0_r767lz.jpg",
    name1: "DAY 0",
    name2: "DJ NIGHT",
    bg: "",
    scale: "1.1",
  },
  {
    src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737992871/IMG_1272_ss08me.jpg",
    name1: "",
    name2: "MR NIT",
    bg: "",
    scale: "1.1",
  },
  {
    src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737983583/Thunder_agsrn6.jpg",
    name1: "THUNDER",
    name2: "MARCH",
    bg: "",
    scale: "1.1",
  },
  {
    src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737990498/DSC_0496_zfqlp0.jpg",
    name1: "GROUND",
    name2: "ZERO",
    bg: "",
    scale: "1.1",
  },
  {
    src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737983335/Deprador_lv8lqf.jpg",
    name1: "",
    name2: "DEPRADOR",
    bg: "",
    scale: "",
  },
  {
    src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737990498/IMG_1047_pflyt4.jpg",
    name1: "",
    name2: "COSTOPIA",
    bg: "",
    scale: "",
  },
  {
    src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737990499/IMG_3144_bbimue.jpg",
    name1: "BATTLE",
    name2: "OF BANDS",
    bg: "",
    scale: "1.1",
  },
  {
    src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737990499/IMG_1102_rr6bpf.jpg",
    name1: "INDIE",
    name2: "UNPLUGGED",
    bg: "",
    scale: "1.1",
  },
  {
    src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737990498/DSC_0242_uh31as.jpg",
    name1: "",
    name2: "SHRINANDYA",
    bg: "",
    scale: "",
  },
  {
    src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737991569/_DSC0058_mgg7n5.jpg",
    name1: "PROM",
    name2: "NIGHT",
    bg: "",
    scale: "",
  },
  {
    src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737991607/IMG_0744_hopmyq.jpg",
    name1: "",
    name2: "SOKRATIK",
    bg: "",
    scale: "",
  },
  {
    src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1738003904/Bihu_q4o1jc.jpg",
    name1: "",
    name2: "BIHU",
    bg: "",
    scale: "",
  },
  {
    src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737991939/Flashmob_mf5cex.jpg",
    name1: "",
    name2: "FLASHMOB",
    bg: "",
    scale: "",
  },
  {
    src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737991922/Nukkad_Naatak_mj7irh.jpg",
    name1: "NUKKAD",
    name2: "NAATAK",
    bg: "",
    scale: "",
  },
  {
    src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737991941/ECSTACY_heuk3n.jpg",
    name1: "",
    name2: "NIRVANA",
    bg: "",
    scale: "",
  },
  {
    src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737991952/NITSMUN_gn0sab.jpg",
    name1: "",
    name2: "NITSMUN",
    bg: "",
    scale: "",
  },
  {
    src: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737984313/Ground0_pysuww.jpg",
    name1: "PUMP",
    name2: "IT UP",
    bg: "",
    scale: "1.1",
  },
];
