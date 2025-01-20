"use client";
import React, { useEffect, useState, useRef } from "react";
import styles from "~/styles/Gallery.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

  // useEffect(() => {
  //   if (stampCardRef.current) {
  //     // GSAP ScrollTrigger animation
  //     gsap.to(stampCardRef.current, {
  //       x: "-100vw", // Move to the left
  //       y: "-100vh", // Move to the top
  //       scrollTrigger: {
  //         trigger: stampCardRef.current, // Element to trigger the animation
  //         start: "top 0%", // Start when the top of the element hits the center of the viewport
  //         end: "top -100%", // End when the top of the element hits the top of the viewport
  //         scrub: true, // Smooth scrolling effect
  //         markers: true, // Enable markers to debug
  //         pin:true,
  //       },
  //     });
  //   }
  // }, []);

  const images = [
    { src: "/assets/Gallery/bg1.png", name1: "PHOTO", name2: "GALLERY", bg: "", scale: "" },
    { src: "/assets/Gallery/bg2.png", name1: "PHOTO", name2: "GALLERY", bg: "", scale: "0.60" },
    { src: "/assets/Gallery/bg3.png", name1: "PHOTO", name2: "GALLERY", bg: "", scale: "" },
    { src: "/assets/Gallery/bg4.png", name1: "PHOTO", name2: "GALLERY", bg: "", scale: "" },
  ];

  return (
    <>
      {images.map((image, index) => (
        <React.Fragment key={index}>
          <div className={`h-screen bg-[#EB6459] -inset-y-3 relative overflow-hidden flex justify-center items-center`}
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
              ref={stampCardRef}
              className={`relative flex justify-center items-center transition-all duration-500 ease-in`}
              style={{
                transform: `scale(${image.scale})`,
              }}>
              <div
                className={`relative border-2 border-white w-max h-max ${styles["perforated-border"]}`}
              >
                <div className="w-max h-max bg-white p-2">
                  {/* Dynamically resized container */}
                  <div
                    className={`transition-all duration-500 ease-in relative overflow-hidden flex justify-center delay-[1200ms]`}
                    style={{
                      aspectRatio: aspectRatios[index] ?? 1,
                      height: isLoaded ? "" : "110vh",
                      width: isLoaded ? "45vw" : "100vw", // Dynamically adjust width
                      maxWidth: "100%",
                      maxHeight: "100%",
                    }}
                  >
                    <img
                      key={index}
                      ref={(el) => {
                        if (el) {
                          imgRefs.current[index] = el; // Assign only if el is not null
                        }
                      }}
                      src={image.src}
                      alt="Gallery"
                      className="absolute w-full h-full object-cover"
                    />;
                    {index === 0 && (
                      <>
                        <img
                          src="/assets/Gallery/photo.png"
                          alt="Gallery"
                          className={`absolute transition-transform duration-500 ease-in ${isLoaded ? "translate-y-0" : "-translate-y-full"
                            }`}
                        />
                        <img
                          src="/assets/Gallery/gallery.png"
                          alt="Gallery"
                          className={`absolute transition-transform duration-500 delay-300 ease-in ${isLoaded ? "translate-y-0" : "-translate-y-full"
                            }`}
                        />
                      </>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </>
  );
};

export default PhotoGallery;
