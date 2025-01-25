"use client";

import { toast } from "sonner";
import { env } from "~/env";
import { ImCross } from "react-icons/im";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";
import { auth } from "~/app/utils/firebase";
import Image from "next/image";
import { useEffect } from "react";
import Footer from "~/components/Footer/Footer";
import styles from "~/styles/User.module.css";
import { useState, useRef } from "react";
import PhotosStatus from "../ViewAll";
export const runtime = "edge";


const cards = [
  { id: 1, status: "VERIFIED", color: "bg-[#C4FFAE]" },
  { id: 2, status: "VERIFIED", color: "bg-[#C4FFAE]" },
  { id: 3, status: "PENDING", color: "bg-[#FC6C7B]" },
  { id: 4, status: "PENDING", color: "bg-[#FC6C7B]" },
  { id: 5, status: "PENDING", color: "bg-[#FC6C7B]" },
  { id: 6, status: "VERIFIED", color: "bg-[#C4FFAE]" },
  { id: 7, status: "VERIFIED", color: "bg-[#C4FFAE]" },
  { id: 8, status: "PENDING", color: "bg-[#FC6C7B]" },
  { id: 9, status: "PENDING", color: "bg-[#FC6C7B]" },
  { id: 10, status: "PENDING", color: "bg-[#FC6C7B]" },
  { id: 11, status: "VERIFIED", color: "bg-[#C4FFAE]" },
  { id: 12, status: "VERIFIED", color: "bg-[#C4FFAE]" },
  { id: 13, status: "PENDING", color: "bg-[#FC6C7B]" },
  { id: 14, status: "PENDING", color: "bg-[#FC6C7B]" },
  { id: 15, status: "PENDING", color: "bg-[#FC6C7B]" },
];



const UserDashboard = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null); // Add proper type
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return; // Early return if ref is null
    isDragging.current = true;
    startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeft.current = scrollContainerRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current || !isDragging.current) return; // Ensure scrolling only happens if dragging
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = x - startX.current;
    scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDragging.current = false;
  };

  const handleArrowClick = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 300; // Adjust the scroll speed here
    const currentScroll = scrollContainerRef.current.scrollLeft;

    if (direction === "left") {
      scrollContainerRef.current.scrollLeft = currentScroll - scrollAmount;
    } else {
      scrollContainerRef.current.scrollLeft = currentScroll + scrollAmount;
    }
  };

  const [showPhotosStatus, setShowPhotosStatus] = useState(false);
  const [lettersHaving, setLettersHaving] = useState(["I", "N1", "A", "D"]);
  const [top10Players, setTop10Placers] = useState<
    { userName: string; photo: string; lettersHaving: string[] }[]
  >([]);
  const [uploadedImage, setUploadedImage] = useState("");

  const [isPhone, setIsPhone] = useState(false);
  const [isIpad, setIsIpad] = useState(false);
  const [isAir, setIsAir] = useState(false);
  const [isLap, setIsLap] = useState(false);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);

    const resizeFunc = () => {
      if (typeof window === "undefined") return;

      const width = window.innerWidth;
      setIsPhone(width >= 320 && width <= 500);
      setIsAir(width >= 501 && width < 1000);  
      setIsIpad(width >= 901 && width < 1025);
      setIsLap(width >= 1026);
    };
    resizeFunc();
    window.addEventListener("resize", resizeFunc);

    return () => {
      window.removeEventListener("resize", resizeFunc);
    };
  }, []);

  if (!isClient) {
    return null;
  }

  const handleViewAllClick = () => {
    setShowPhotosStatus(true);
  };

  return (
    <>
      {isLap && (
        <>
          <div className="min-h-screen w-screen bg-[#FFEBC8] md:w-screen lg:w-screen">
            <div className="relative flex items-center justify-center">
              <div className="relative mb-[0.5rem] mt-[0.2rem]">
                {showPhotosStatus ? (
                  <PhotosStatus />
                ) : (
                  <div className="relative rounded-[18px] border-2 border-black bg-[#FFE5A1]">
                    <div className="relative flex flex-row justify-center space-x-4 pl-[2rem] pr-[2rem] pt-[2rem]">
                      <div className="relative flex h-[20rem] w-[50rem] overflow-hidden rounded-[18px] border-[1.6px] border-black bg-[#D0B4FF] shadow-custom-black">
                        <div className="absolute bottom-[-9.8rem] right-[-9.8rem] h-[19.5rem] w-[19.5rem] rounded-full bg-[#A56FFF]"></div>
                        <div className="absolute bottom-[-4.9rem] right-[-4.9rem] h-[9.75rem] w-[9.75rem] rounded-full bg-[#D0B4FF]"></div>

                        <div className="absolute right-[-9.8rem] top-[-9.8rem] h-[19.5rem] w-[19.5rem] rounded-full bg-[#A56FFF]"></div>
                        <div className="absolute right-[-4.9rem] top-[-4.9rem] h-[9.75rem] w-[9.75rem] rounded-full bg-[#D0B4FF]"></div>

                        <div className="flex items-center justify-center">
                          <div className="relative left-[1rem] h-[16.1rem] w-[15rem] items-center border-[1.6px] border-black bg-white">
                            <Image
                              src="/assets/UserDashboard/user.jpg"
                              alt="heart"
                              width={80}
                              height={100}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        </div>

                        <div className="relative left-[3rem] flex flex-1 flex-col justify-evenly">
                          <div className="font-tusker">
                            <p className="text-[2.5rem] text-white">@Newt</p>
                            <h2>incand@incand</h2>
                          </div>
                          <div className="flex flex-row items-center">
                            <div className="relative mx-1 ml-[0] h-[9rem] w-[9rem] overflow-hidden border border-black bg-[#FF7CD5]">
                              <p className="pt-[0.6rem] text-center font-tusker2 text-[1.2rem]">
                                PHOTOS UPLOADED
                              </p>
                              <div className="absolute bottom-[-3.4rem] right-[-3.4rem] h-[8.4rem] w-[8.4rem] rounded-full bg-white"></div>
                            </div>
                            <div className="relative mx-1 ml-3 h-[9rem] w-[9rem] overflow-hidden border border-black bg-[#9BABFF]">
                              <p className="pt-[0.6rem] text-center font-tusker2 text-[1.2rem]">
                                PHOTOS ACCEPTED
                              </p>
                              <div className="absolute bottom-[-3.4rem] right-[-3.4rem] h-[8.4rem] w-[8.4rem] rounded-full bg-white"></div>
                            </div>
                            <div className="relative mx-1 ml-3 h-[9rem] w-[9rem] overflow-hidden border border-black bg-[#EDFF7F]">
                              <p className="pt-[0.6rem] text-center font-tusker2 text-[1.2rem]">
                                PHOTOS PENDING
                              </p>
                              <div className="absolute bottom-[-3.4rem] right-[-3.4rem] h-[8.4rem] w-[8.4rem] rounded-full bg-white"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex h-[20rem] w-[31rem] justify-center rounded-[18px] border-[1.6px] border-black bg-[#D0B4FF] bg-[url('/assets/UserDashboard/user.gif')] bg-cover bg-center pt-[4rem] shadow-custom-black">
                        <span
                          className={`inline-block flex w-[8rem] justify-center md:w-[10.2rem] lg:w-[10rem] xl:w-[20rem] ${styles.incandCont}`}
                        >
                          <span
                            style={{ letterSpacing: "1.2px" }}
                            className={`text-center text-[18px] md:text-[24.8px] xl:text-[20px] ${styles.incandText}`}
                          >
                            LETTERS COLLECTED
                          </span>
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-row justify-between pl-[2.2rem] pt-[3rem]">
                      <div
                        className="font-tusker2 text-[1.7rem] tracking-widest text-white"
                        style={{
                          textShadow:
                            "-2px -2px 0px black, 2px -2px 0px black, -2px 2px 0px black, 2px 2px 0px black",
                        }}
                      >
                        <p className="mt-4 w-max border-b-4 border-dashed border-black pb-[0.5rem]">
                          PHOTO UPDATES
                        </p>
                      </div>
                      <div className="mr-[2rem] mt-4 flex items-center justify-center rounded-[18px] border-2 border-black bg-white pl-[1rem] pr-[1rem] font-tusker2 tracking-widest text-black shadow-custom-black">
                        <button onClick={handleViewAllClick}>
                          <p className="text-[1.5rem]">VIEW ALL</p>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-center pt-[2rem]">
                      <button
                        onClick={() => handleArrowClick("left")}
                        className="absolute left-[1rem] rounded-full bg-white p-2 opacity-50 hover:opacity-80"
                        style={{ zIndex: 10 }}
                      >
                        &lt;
                      </button>

                      <div
                        ref={scrollContainerRef}
                        className="max-w-[80rem] cursor-grab overflow-x-auto scroll-smooth pb-[2rem] scrollbar-hide"
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUpOrLeave}
                        onMouseLeave={handleMouseUpOrLeave}
                        style={{ userSelect: "none" }}
                      >
                        <div className="flex gap-4">
                          {cards.map((card) => (
                            <div
                              key={card.id}
                              className={`flex flex-col items-center p-4 ${card.color} min-w-[150px] rounded-lg shadow-custom-black`}
                            >
                              <Image
                                src="/assets/UserDashboard/user.jpg"
                                alt="Avatar"
                                width={100}
                                height={100}
                                draggable={false}
                              />
                              <p
                                className={`mt-2 font-bold ${card.status === "VERIFIED" ? "text-green-700" : "text-red-700"}`}
                              >
                                {card.status}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => handleArrowClick("right")}
                        className="absolute right-[1rem] rounded-full bg-white p-2 opacity-50 hover:opacity-80"
                        style={{ zIndex: 10 }}
                      >
                        &gt;
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
          {isPhone && (
        <>
          <div className="min-h-screen  w-screen bg-[#FFEBC8] md:w-screen lg:w-screen">
            <div className="relative flex items-center justify-center">
              <div className="relative mb-[0.5rem] mt-[0.2rem]">
                {showPhotosStatus ? (
                  <PhotosStatus />
                ) : (
                  <div className="relative rounded-[18px]  bg-[#FFE5A1]">
                    <div className="relative flex flex-col items-center justify-center space-x-4 pl-[2rem] pr-[2rem] pt-[2rem]">
                      <div className="relative flex scale-[0.48] h-[20rem] w-[50rem] overflow-hidden rounded-[18px] border-[1.6px] border-black bg-[#D0B4FF] shadow-custom-black">
                        <div className="absolute bottom-[-9.8rem] right-[-9.8rem] h-[19.5rem] w-[19.5rem] rounded-full bg-[#A56FFF]"></div>
                        <div className="absolute bottom-[-4.9rem] right-[-4.9rem] h-[9.75rem] w-[9.75rem] rounded-full bg-[#D0B4FF]"></div>

                        <div className="absolute right-[-9.8rem] top-[-9.8rem] h-[19.5rem] w-[19.5rem] rounded-full bg-[#A56FFF]"></div>
                        <div className="absolute right-[-4.9rem] top-[-4.9rem] h-[9.75rem] w-[9.75rem] rounded-full bg-[#D0B4FF]"></div>

                        <div className="flex items-center justify-center">
                          <div className="relative left-[1rem] h-[16.1rem] w-[15rem] items-center border-[1.6px] border-black bg-white">
                            <Image
                              src="/assets/UserDashboard/user.jpg"
                              alt="heart"
                              width={80}
                              height={100}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        </div>

                        <div className="relative left-[3rem] flex flex-1 flex-col justify-evenly">
                          <div className="font-tusker">
                            <p className="text-[2.5rem] text-white">@Newt</p>
                            <h2>incand@incand</h2>
                          </div>
                          <div className="flex flex-row items-center">
                            <div className="relative mx-1 ml-[0] h-[9rem] w-[9rem] overflow-hidden border border-black bg-[#FF7CD5]">
                              <p className="pt-[0.6rem] text-center font-tusker2 text-[1.2rem]">
                                PHOTOS UPLOADED
                              </p>
                              <div className="absolute bottom-[-3.4rem] right-[-3.4rem] h-[8.4rem] w-[8.4rem] rounded-full bg-white"></div>
                            </div>
                            <div className="relative mx-1 ml-3 h-[9rem] w-[9rem] overflow-hidden border border-black bg-[#9BABFF]">
                              <p className="pt-[0.6rem] text-center font-tusker2 text-[1.2rem]">
                                PHOTOS ACCEPTED
                              </p>
                              <div className="absolute bottom-[-3.4rem] right-[-3.4rem] h-[8.4rem] w-[8.4rem] rounded-full bg-white"></div>
                            </div>
                            <div className="relative mx-1 ml-3 h-[9rem] w-[9rem] overflow-hidden border border-black bg-[#EDFF7F]">
                              <p className="pt-[0.6rem] text-center font-tusker2 text-[1.2rem]">
                                PHOTOS PENDING
                              </p>
                              <div className="absolute bottom-[-3.4rem] right-[-3.4rem] h-[8.4rem] w-[8.4rem] rounded-full bg-white"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex relative h-[20rem] scale-[0.75] top-[-4rem] left-[-0.7rem] w-[31rem] justify-center rounded-[18px] border-[1.6px] border-black bg-[#D0B4FF] bg-[url('/assets/UserDashboard/user.gif')] bg-cover bg-center pt-[4rem] shadow-custom-black">
                        <span
                          className={`inline-block flex w-[25rem] justify-center  ${styles.incandCont}`}
                        >
                          <span
                            style={{ letterSpacing: "1.2px" }}
                            className={`text-center text-[22px] ${styles.incandText}`}
                          >
                            LETTERS COLLECTED
                          </span>
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col relative justify-between items-center top-[-5rem]   pt-[3rem]">
                      <div
                        className="font-tusker2 text-[3rem] tracking-widest text-white left-[5rem] "
                        style={{
                          textShadow:
                            "-2px -2px 0px black, 2px -2px 0px black, -2px 2px 0px black, 2px 2px 0px black",
                        }}
                      >
                        <p className="mt-4  w-max border-b-4 border-dashed border-black pb-[0.5rem]">
                          PHOTO UPDATES
                        </p>
                      </div>
                      <div className=" right-[-5rem] relative mt-6 flex items-center justify-center rounded-[18px] border-2 border-black bg-white pl-[1rem] pr-[1rem] font-tusker2 tracking-widest text-black shadow-custom-black">
                        <button onClick={handleViewAllClick}>
                          <p className="text-[1.5rem]">VIEW ALL</p>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-center pt-[2rem]">
                      

                      <div
                        ref={scrollContainerRef}
                        className="max-w-[24rem] top-[-4rem] relative cursor-grab overflow-x-auto scroll-smooth pb-[2rem] scrollbar-hide"
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUpOrLeave}
                        onMouseLeave={handleMouseUpOrLeave}
                        style={{ userSelect: "none" }}
                      >
                        <div className="flex gap-4">
                          {cards.map((card) => (
                            <div
                              key={card.id}
                              className={`flex flex-col items-center p-4 ${card.color} min-w-[150px] rounded-lg shadow-custom-black`}
                            >
                              <Image
                                src="/assets/UserDashboard/user.jpg"
                                alt="Avatar"
                                width={100}
                                height={100}
                                draggable={false}
                              />
                              <p
                                className={`mt-2 font-bold ${card.status === "VERIFIED" ? "text-green-700" : "text-red-700"}`}
                              >
                                {card.status}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
            {isAir && (
        <>
          <div className="min-h-screen  w-screen bg-[#FFEBC8] md:w-screen lg:w-screen">
            <div className="relative flex items-center justify-center">
              <div className="relative mb-[0.5rem] mt-[0.2rem]">
                {showPhotosStatus ? (
                  <PhotosStatus />
                ) : (
                  <div className="relative rounded-[18px]  bg-[#FFE5A1]">
                    <div className="relative flex flex-col items-center justify-center space-x-4 pl-[2rem] pr-[2rem] pt-[2rem]">
                      <div className="relative flex scale-[0.9] h-[20rem] w-[50rem] overflow-hidden rounded-[18px] border-[1.6px] border-black bg-[#D0B4FF] shadow-custom-black">
                        <div className="absolute bottom-[-9.8rem] right-[-9.8rem] h-[19.5rem] w-[19.5rem] rounded-full bg-[#A56FFF]"></div>
                        <div className="absolute bottom-[-4.9rem] right-[-4.9rem] h-[9.75rem] w-[9.75rem] rounded-full bg-[#D0B4FF]"></div>

                        <div className="absolute right-[-9.8rem] top-[-9.8rem] h-[19.5rem] w-[19.5rem] rounded-full bg-[#A56FFF]"></div>
                        <div className="absolute right-[-4.9rem] top-[-4.9rem] h-[9.75rem] w-[9.75rem] rounded-full bg-[#D0B4FF]"></div>

                        <div className="flex items-center justify-center">
                          <div className="relative left-[1rem] h-[16.1rem] w-[15rem] items-center border-[1.6px] border-black bg-white">
                            <Image
                              src="/assets/UserDashboard/user.jpg"
                              alt="heart"
                              width={80}
                              height={100}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        </div>

                        <div className="relative left-[3rem] flex flex-1 flex-col justify-evenly">
                          <div className="font-tusker">
                            <p className="text-[2.5rem] text-white">@Newt</p>
                            <h2>incand@incand</h2>
                          </div>
                          <div className="flex flex-row items-center">
                            <div className="relative mx-1 ml-[0] h-[9rem] w-[9rem] overflow-hidden border border-black bg-[#FF7CD5]">
                              <p className="pt-[0.6rem] text-center font-tusker2 text-[1.2rem]">
                                PHOTOS UPLOADED
                              </p>
                              <div className="absolute bottom-[-3.4rem] right-[-3.4rem] h-[8.4rem] w-[8.4rem] rounded-full bg-white"></div>
                            </div>
                            <div className="relative mx-1 ml-3 h-[9rem] w-[9rem] overflow-hidden border border-black bg-[#9BABFF]">
                              <p className="pt-[0.6rem] text-center font-tusker2 text-[1.2rem]">
                                PHOTOS ACCEPTED
                              </p>
                              <div className="absolute bottom-[-3.4rem] right-[-3.4rem] h-[8.4rem] w-[8.4rem] rounded-full bg-white"></div>
                            </div>
                            <div className="relative mx-1 ml-3 h-[9rem] w-[9rem] overflow-hidden border border-black bg-[#EDFF7F]">
                              <p className="pt-[0.6rem] text-center font-tusker2 text-[1.2rem]">
                                PHOTOS PENDING
                              </p>
                              <div className="absolute bottom-[-3.4rem] right-[-3.4rem] h-[8.4rem] w-[8.4rem] rounded-full bg-white"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex relative h-[20rem] scale-[1.1] top-[2.1rem] left-[-0.7rem] w-[31rem] justify-center rounded-[18px] border-[1.6px] border-black bg-[#D0B4FF] bg-[url('/assets/UserDashboard/user.gif')] bg-cover bg-center pt-[4rem] shadow-custom-black">
                        <span
                          className={`inline-block flex w-[25rem] justify-center  ${styles.incandCont}`}
                        >
                          <span
                            style={{ letterSpacing: "1.2px" }}
                            className={`text-center text-[22px] ${styles.incandText}`}
                          >
                            LETTERS COLLECTED
                          </span>
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col relative justify-between items-center top-[1rem]  pt-[3rem]">
                      <div
                        className="font-tusker2 text-[3rem] tracking-widest text-white left-[5rem] "
                        style={{
                          textShadow:
                            "-2px -2px 0px black, 2px -2px 0px black, -2px 2px 0px black, 2px 2px 0px black",
                        }}
                      >
                        <p className="mt-4 w-max border-b-4 border-dashed border-black pb-[0.5rem]">
                          PHOTO UPDATES
                        </p>
                      </div>
                      <div className=" right-[-5rem] relative mt-6 flex items-center justify-center rounded-[18px] border-2 border-black bg-white pl-[1rem] pr-[1rem] font-tusker2 tracking-widest text-black shadow-custom-black">
                        <button onClick={handleViewAllClick}>
                          <p className="text-[1.5rem]">VIEW ALL</p>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-center pt-[2rem]">
                      

                      <div
                        ref={scrollContainerRef}
                        className="max-w-[45rem] top-[1rem] relative cursor-grab overflow-x-auto scroll-smooth pb-[2rem] scrollbar-hide"
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUpOrLeave}
                        onMouseLeave={handleMouseUpOrLeave}
                        style={{ userSelect: "none" }}
                      >
                        <div className="flex gap-4">
                          {cards.map((card) => (
                            <div
                              key={card.id}
                              className={`flex flex-col items-center p-4 ${card.color} min-w-[150px] rounded-lg shadow-custom-black`}
                            >
                              <Image
                                src="/assets/UserDashboard/user.jpg"
                                alt="Avatar"
                                width={100}
                                height={100}
                                draggable={false}
                              />
                              <p
                                className={`mt-2 font-bold ${card.status === "VERIFIED" ? "text-green-700" : "text-red-700"}`}
                              >
                                {card.status}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
            {isIpad && (
        <>
          <div className="min-h-screen w-screen bg-[#FFEBC8] md:w-screen lg:w-screen">
            <div className="relative flex items-center justify-center">
              <div className="relative mb-[0.5rem] mt-[0.2rem]">
                {showPhotosStatus ? (
                  <PhotosStatus />
                ) : (
                  <div className="relative rounded-[18px] border-2 border-black bg-[#FFE5A1]">
                    <div className="relative flex flex-row scale-[0.78] justify-center space-x-4 pl-[2rem] pr-[2rem] pt-[2rem]">
                      <div className="relative  flex h-[20rem] w-[48rem] overflow-hidden rounded-[18px] border-[1.6px] border-black bg-[#D0B4FF] shadow-custom-black">
                        <div className="absolute bottom-[-9.8rem] right-[-9.8rem] h-[19.5rem] w-[19.5rem] rounded-full bg-[#A56FFF]"></div>
                        <div className="absolute bottom-[-4.9rem] right-[-4.9rem] h-[9.75rem] w-[9.75rem] rounded-full bg-[#D0B4FF]"></div>

                        <div className="absolute right-[-9.8rem] top-[-9.8rem] h-[19.5rem] w-[19.5rem] rounded-full bg-[#A56FFF]"></div>
                        <div className="absolute right-[-4.9rem] top-[-4.9rem] h-[9.75rem] w-[9.75rem] rounded-full bg-[#D0B4FF]"></div>

                        <div className="flex items-center justify-center">
                          <div className="relative left-[1rem] h-[16.1rem] w-[15rem] items-center border-[1.6px] border-black bg-white">
                            <Image
                              src="/assets/UserDashboard/user.jpg"
                              alt="heart"
                              width={80}
                              height={100}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        </div>

                        <div className="relative left-[3rem] flex flex-1 flex-col justify-evenly">
                          <div className="font-tusker">
                            <p className="text-[2.5rem] text-white">@Newt</p>
                            <h2>incand@incand</h2>
                          </div>
                          <div className="flex flex-row items-center">
                            <div className="relative mx-1 ml-[0] h-[9rem] w-[9rem] overflow-hidden border border-black bg-[#FF7CD5]">
                              <p className="pt-[0.6rem] text-center font-tusker2 text-[1.2rem]">
                                PHOTOS UPLOADED
                              </p>
                              <div className="absolute bottom-[-3.4rem] right-[-3.4rem] h-[8.4rem] w-[8.4rem] rounded-full bg-white"></div>
                            </div>
                            <div className="relative mx-1 ml-3 h-[9rem] w-[9rem] overflow-hidden border border-black bg-[#9BABFF]">
                              <p className="pt-[0.6rem] text-center font-tusker2 text-[1.2rem]">
                                PHOTOS ACCEPTED
                              </p>
                              <div className="absolute bottom-[-3.4rem] right-[-3.4rem] h-[8.4rem] w-[8.4rem] rounded-full bg-white"></div>
                            </div>
                            <div className="relative mx-1 ml-3 h-[9rem] w-[9rem] overflow-hidden border border-black bg-[#EDFF7F]">
                              <p className="pt-[0.6rem] text-center font-tusker2 text-[1.2rem]">
                                PHOTOS PENDING
                              </p>
                              <div className="absolute bottom-[-3.4rem] right-[-3.4rem] h-[8.4rem] w-[8.4rem] rounded-full bg-white"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex h-[20rem] w-[31rem] justify-center rounded-[18px] border-[1.6px] border-black bg-[#D0B4FF] bg-[url('/assets/UserDashboard/user.gif')] bg-cover bg-center pt-[4rem] shadow-custom-black">
                        <span
                          className={`inline-block flex w-[8rem] justify-center md:w-[10.2rem] lg:w-[10rem] xl:w-[20rem] ${styles.incandCont}`}
                        >
                          <span
                            style={{ letterSpacing: "1.2px" }}
                            className={`text-center text-[18px] md:text-[24.8px] xl:text-[20px] ${styles.incandText}`}
                          >
                            LETTERS COLLECTED
                          </span>
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-row justify-between scale-[0.78] pl-[2.2rem] pt-[3rem]">
                      <div
                        className="font-tusker2 text-[4rem] tracking-widest text-white"
                        style={{
                          textShadow:
                            "-2px -2px 0px black, 2px -2px 0px black, -2px 2px 0px black, 2px 2px 0px black",
                        }}
                      >
                        <p className="mt-4 w-max border-b-4 border-dashed border-black pb-[0.5rem]">
                          PHOTO UPDATES
                        </p>
                      </div>
                      <div className="mr-[2rem] mt-4 flex items-center justify-center rounded-[18px] border-2 border-black bg-white pl-[1rem] pr-[1rem] font-tusker2 tracking-widest text-black shadow-custom-black">
                        <button onClick={handleViewAllClick}>
                          <p className="text-[2.8rem]">VIEW ALL</p>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-center pt-[2rem]">
                      <button
                        onClick={() => handleArrowClick("left")}
                        className="absolute left-[1rem] rounded-full bg-white p-2 opacity-50 hover:opacity-80"
                        style={{ zIndex: 10 }}
                      >
                        &lt;
                      </button>

                      <div
                        ref={scrollContainerRef}
                        className="max-w-[62rem] cursor-grab overflow-x-auto scroll-smooth pb-[2rem] scrollbar-hide"
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUpOrLeave}
                        onMouseLeave={handleMouseUpOrLeave}
                        style={{ userSelect: "none" }}
                      >
                        <div className="flex gap-4">
                          {cards.map((card) => (
                            <div
                              key={card.id}
                              className={`flex flex-col items-center p-4 ${card.color} min-w-[150px] rounded-lg shadow-custom-black`}
                            >
                              <Image
                                src="/assets/UserDashboard/user.jpg"
                                alt="Avatar"
                                width={100}
                                height={100}
                                draggable={false}
                              />
                              <p
                                className={`mt-2 font-bold ${card.status === "VERIFIED" ? "text-green-700" : "text-red-700"}`}
                              >
                                {card.status}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => handleArrowClick("right")}
                        className="absolute right-[1rem] rounded-full bg-white p-2 opacity-50 hover:opacity-80"
                        style={{ zIndex: 10 }}
                      >
                        &gt;
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UserDashboard;
