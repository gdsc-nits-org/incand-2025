"use client";
import React, { useEffect, useState, useRef, use } from "react";
import styles from "~/styles/Gallery.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { string } from "zod";
import Image from "next/image";
import {
  useScroll,
  motion,
  useAnimation,
  AnimatePresence,
} from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const PhotoGallery = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [aspectRatios, setAspectRatios] = useState<number[]>([]); // Default aspect ratio 1:1
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);
  const stampCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 500); // Start animation after 500ms

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    // Calculate and store aspect ratios after images load
    const calculatedRatios = imgRefs.current.map((img) => {
      if (img) {
        return img.naturalWidth / img.naturalHeight;
      }
      return 1; // Default aspect ratio 1:1 if unavailable
    });
    setAspectRatios(calculatedRatios);
  }, [imgRefs]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"down" | "up">("up");
  const [bgColor, setBgColor] = useState(colors[0]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setBgColor(colors[currentIndex % colors.length]);
    }, 300);
    return () => clearTimeout(timeout);
  }, [currentIndex, colors]);

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
    if (e.deltaY > 0) {
      handleNext();
    } else if (e.deltaY < 0) {
      handlePrevious();
    }
  };

  const off = "80";
  const imageVariants = {
    enter: (dir: "down" | "up") =>
      dir === "down"
        ? { x: `${off}vw`, y: `${off}vh` }
        : { x: `-${off}vw`, y: `-${off}vh` },
    center: {
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    exit: (dir: "down" | "up") =>
      dir === "down"
        ? {
            x: `-${off}vw`,
            y: `-${off}vh`,
            transition: { duration: 0.8, ease: "easeInOut" },
          }
        : {
            x: `${off}vw`,
            y: `${off}vh`,
            transition: { duration: 0.8, ease: "easeInOut" },
          },
  };

  const textVariants = {
    hidden: (dir: "left" | "right") =>
      dir === "left"
        ? {
            x: "-10rem",
            opacity: 0,
            transition: { duration: 0.5, ease: "easeInOut" },
          }
        : {
            x: "10rem",
            opacity: 0,
            transition: { duration: 0.5, ease: "easeInOut" },
          },
    visible: (dir: "left" | "right") => ({
      x: 0,
      opacity: 1,
      transition: { delay: 0.5, duration: 0.8, ease: "easeInOut" },
    }),
  };

  return (
    <motion.section
      onWheel={handleWheel}
      className="min-w-screen relative flex h-screen items-center justify-center"
      style={{
        backgroundColor: bgColor,
        transition: "background-color 0.8s linear",
      }}
    >
      <button onClick={handlePrevious} className="absolute left-4 z-10">
        Previous
      </button>
      <button onClick={handleNext} className="absolute right-4 z-10">
        Next
      </button>
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute flex h-auto min-h-screen w-screen flex-col items-center justify-center gap-2 py-20"
          custom={direction}
          variants={imageVariants}
          initial="enter"
          animate="center"
          exit="exit"
        >
          {images[currentIndex] && (
            <>
              <motion.h1
                className="absolute top-10 text-8xl font-bold text-white"
                custom="left"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {images[currentIndex].name1}
              </motion.h1>

              <ImageCard
                src={images[currentIndex].src}
                name1={images[currentIndex].name1}
                name2={images[currentIndex].name2}
                bg={images[currentIndex].bg}
                scale={images[currentIndex].scale}
              />

              <motion.h1
                className="absolute bottom-10 text-8xl font-bold text-white"
                custom="right"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {images[currentIndex].name2}
              </motion.h1>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
};

export default PhotoGallery;

interface ImageProps {
  src?: string;
  name1?: string;
  name2?: string;
  bg?: string;
  scale?: string;
}
const ImageCard = (image: ImageProps) => {
  const { src, name1, name2, bg, scale } = image;
  return (
    <img
      className={`z-30 h-auto w-[30%] border-2 border-white ${styles["perforated-border"]}`}
      src={src}
      alt={name1}
    ></img>
  );
};

const colors = ["#EB6459", "#A9A6FF", "#62A073", "#FFDE70"];

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
    scale: "0.60",
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
    scale: "",
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
    scale: "0.60",
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
    scale: "",
  },
];
