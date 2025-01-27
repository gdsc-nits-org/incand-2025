"use client";
import React, { useEffect, useState, useRef, Ref } from "react";
import styles from "~/styles/Gallery.module.css";
import { motion, AnimatePresence, delay, transform } from "framer-motion";
import { SiCalendly } from "react-icons/si";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";

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

  useEffect(() => {
    console.log("isLoaded:", isLoaded); // Debugging log
    if (isLoaded) {
      console.log("Setting timeout for z-index change...");
      const timeout = setTimeout(() => {
        console.log("Timeout triggered, updating z-index to z-[60]");
        setIsButtonTopZIndex(true);
      }, 2000);

      return () => {
        console.log("Clearing timeout");
        clearTimeout(timeout);
      };
    } else {
      console.log("Resetting z-index to z-40");
      setIsButtonTopZIndex(false);
    }
  }, [isLoaded]);

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
      onWheel={handleWheel}
      className="min-w-screen relative flex h-screen flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundColor: bgColor,
        transition: "background-color 0.8s linear",
      }}
    >
      <div
        className={`absolute left-[50%] mobile:top-24 md:top-8 md:scale-[1.5] laptop:top-4 laptop:scale-100 4k:top-16 4k:scale-[2.5] ${isButtonTopZIndex ? "z-40" : "z-[60]"} translate-x-[-50%]`}
      >
        <button
          className="rounded-full bg-white px-4 py-2 font-bold shadow-md hover:opacity-80"
          style={{ color: bgColor }}
        >
          VIEW ALL
        </button>
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
                className={`absolute scale-90 transition-transform duration-500 ease-in mobile:h-[4vh] mobile:w-[19vw] tablet:h-[6vh] tablet:w-[20vw] laptop:h-[15vh] laptop:w-[17vw] ${
                  !isLoaded ? "-translate-y-1" : "-translate-y-full"
                }`}
              />
              <Image
                width={400}
                height={100}
                quality={100}
                src="/assets/Gallery/gallery.png"
                alt="Gallery"
                className={`absolute scale-90 transition-transform delay-500 duration-500 ease-in tablet:h-[10.5vh] tablet:w-[32vw] laptop:h-auto ${
                  isMobile ? "h-[8vh] w-[30vw]" : "h-auto w-auto"
                } ${!isLoaded ? "-translate-y-3" : "-translate-y-full"}`}
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

/*
"use client";
import React, { useEffect, useState, useRef } from "react";
import styles from "./Gallery.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PhotoGallery = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [aspectRatios, setAspectRatios] = useState<number[]>([]); // Default aspect ratio 1:1
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);
  const stampCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const masterTimeline = useRef<gsap.core.Timeline | null>(null);

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

  
  const images = [
    { src: "/bg1.png", name1: "PHOTO", name2: "GALLERY", bg: "", scale: "" },
    { src: "/bg2.png", name1: "", name2: "GALLERY", bg: "", scale: "0.60" },
    { src: "/bg3.png", name1: "PHOTO", name2: "GALLERY", bg: "", scale: "" },
    { src: "/bg4.png", name1: "PHOTO", name2: "GALLERY", bg: "", scale: "" },
  ];
  
  const ANIMATION_CONFIG = {
    duration: 2,
    stagger: 0.1,
    finalPosition: { x: "-200vw", y: "-240vh" },
    ease: "sine.inOut"
  };

  useEffect(() => {
    const setupAnimation = () => {
      // Clear existing animations
      masterTimeline.current?.clear().kill();
      ScrollTrigger.getAll().forEach(st => st.kill());

      // Create fresh timeline
      masterTimeline.current = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=550%",
          scrub: 1.5, // Optimal smooth scrubbing
          pin: true,
          anticipatePin: 1,
          markers: true // Remove in production
        }
      });

      // Create card animations with position tracking
      stampCardRefs.current.forEach((card, index) => {
        if (!card) return;

        // Capture initial positions
        const initialX = gsap.getProperty(card, "x") as number;
        const initialY = gsap.getProperty(card, "y") as number;

        // Create animation with relative movement
        masterTimeline.current?.to(card, {
          x: `+=${ANIMATION_CONFIG.finalPosition.x}`,
          y: `+=${ANIMATION_CONFIG.finalPosition.y}`,
          ease: ANIMATION_CONFIG.ease,
          duration: ANIMATION_CONFIG.duration
        }, index * ANIMATION_CONFIG.stagger);

        // Maintain spacing relationship
        if (index > 0) {
          const prevCard = stampCardRefs.current[index - 1];
          gsap.set(card, {
            x: `+=${index * 50}`,
            y: `+=${index * 60}`
          });
        }
      });
    };

    setupAnimation();
    window.addEventListener('resize', setupAnimation);
    return () => {
      window.removeEventListener('resize', setupAnimation);
      masterTimeline.current?.kill();
    };
  }, []);

  return (
    <>
          <div 
          ref={containerRef}
          className={`h-screen bg-[#EB6459] -inset-y-3 relative flex justify-center items-center overflow-hidden`}
          >
            <div
              className={`absolute inset-0 transition-transform duration-1000 ease-out opacity-90 z-0`}
              style={{
                backgroundImage: "url('/cardboard-texture.png')",
                backgroundSize: 'cover',
                mixBlendMode: 'multiply',
              }}
            >
            </div>
      {images.map((image, index) => (
        <React.Fragment key={index}>
            <div className="absolute inset-0 flex flex-col justify-center items-center isolate"
            >
              <h1
                className={`text-[22.5vh] font-tusker mb-[10vh] translate-y-[2vh] opacity-80 text-[#FAE00D] drop-shadow-lg transition-transform duration-700 ease-in delay-[1200ms] ${isLoaded ? "translate-x-0" : "translate-x-full"}`}
              >
                PHOTO
              </h1>
              <h1
                className={`text-[22.5vh] font-tusker mt-[30vh] text-[#FAE00D] opacity-80 drop-shadow-lg transition-transform duration-700 ease-in delay-[1200ms] ${isLoaded ? "translate-x-0" : "-translate-x-full"} `}
              >
                GALLERY
              </h1>
            </div>

            <div className="absolute top-4 right-4">
              <button className="bg-white px-4 py-2 text-red-500 font-bold rounded-full shadow-md hover:opacity-80">
                VIEW ALL
              </button>
            </div>

            <div
              ref={el => { stampCardRefs.current[index] = el; }}
              className={`absolute flex justify-center items-center transition-all duration-500 ease-in z-50`}
              style={{
                left: `calc(50% + ${index * 53}%)`,
                top: `calc(50% + ${index * 60}%)`, 
                transform: `translate(-50%, -50%) scale(${image.scale || 1})`,
              }}>
              <div
                className={`relative border-2 border-white w-max h-max ${styles["perforated-border"]}`}
              >
                <div className="w-max h-max bg-white p-2">
                  <div
                    className={`transition-all duration-500 ease-in relative overflow-hidden flex justify-center delay-[1200ms]`}
                    style={{
                      aspectRatio: aspectRatios[index] || 1,
                      width: isLoaded ? "45vw" : "100vw",
                      maxWidth: "100%",
                      maxHeight: "100%",
                    }}
                  >
                    <img
                      key={index}
                      ref={(el) => {
                        if (el) {
                          imgRefs.current[index] = el;
                        }
                      }}
                      src={image.src}
                      alt="Gallery"
                      className="absolute w-full h-full object-cover"
                    />
                    {index === 0 && (
                      <>
                        <img
                          src="/photo.png"
                          alt="Gallery"
                          className={`absolute transition-transform duration-500 ease-in ${isLoaded ? "translate-y-0" : "-translate-y-full"
                            }`}
                        />
                        <img
                          src="/gallery.png"
                          alt="Gallery"
                          className={`absolute transition-transform duration-500 delay-300 ease-in ${isLoaded ? "translate-y-0" : "-translate-y-full"
                            }`}
                        />
                      </>)}
                  </div>
                </div>
              </div>
            </div>
        </React.Fragment>
      ))}
      </div>
    </>
  );
};

export default PhotoGallery;
*/
