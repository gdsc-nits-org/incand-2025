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

            { /* Header Section */}
            <div className="absolute top-4 right-4">
              <button className="bg-white px-4 py-2 text-red-500 font-bold rounded-full shadow-md hover:opacity-80">
                VIEW ALL
              </button>
            </div>

            {/* Stamp Section */}
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
