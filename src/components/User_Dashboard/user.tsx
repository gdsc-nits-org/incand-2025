"use client";

import Image from "next/image";
import { useEffect } from "react";
import styles from "~/styles/User.module.css";
import { useState, useRef } from "react";
import PhotosStatus from "./ViewAll";
import Link from "next/link";
import axios from "axios";
import { env } from "~/env";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "~/app/utils/firebase";


const incand = [
  { src: "/assets/UserDashboard/I.svg" },
  { src: "/assets/UserDashboard/n.svg" },
  { src: "/assets/UserDashboard/c.svg" },
  { src: "/assets/UserDashboard/a.svg" },
  { src: "/assets/UserDashboard/n1.svg" },
  { src: "/assets/UserDashboard/d.svg" }
];

interface UserResponse {
  name: string;
  email: string;
  pic: string;
  id: string;
  letters: string;
  level: number;
  flag: Date;
  role: string;
}

interface UserSubmissions {
  id: string;
  photo: string;
  status: string;
  instant: Date;
}

interface ApiResponse {
  status: number;
  msg: UserResponse;
}

interface UserSubmissionsResponse {
  status: number;
  msg: UserSubmissions[];
}



const UserDashboard = () => {
  const [_user] = useAuthState(auth);
  const [user, setUser] = useState<UserResponse>()
  const [userSubmissions, setUserSubmissions] = useState<UserSubmissions[]>([])
  const [letters, setLetters] = useState<string>("000000")
  useEffect(() => {
    const fetchUserData = async () => {
      if (_user) {
        try {
          const token = await _user.getIdToken();
          const userSubmissions = await axios.get<ApiResponse>(
            `${env.NEXT_PUBLIC_API_URL}/api/user/me`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setUser(userSubmissions.data.msg);
          setLetters(userSubmissions.data.msg.letters);

        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, [_user]);

  useEffect(() => {
    const fetchUserSubmissions = async () => {
      if (user) {
        try {
          const UserSubmissions = await axios.get<UserSubmissionsResponse>(
            `${env.NEXT_PUBLIC_API_URL}/api/user/submissions/${user?.id}`,
          );
          console.log(UserSubmissions.data.msg);
          setUserSubmissions(UserSubmissions.data.msg);

        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserSubmissions();
  }, [user]);


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

  const [isPhone, setIsPhone] = useState(false);
  const [isIpad, setIsIpad] = useState(false);
  const [isAir, setIsAir] = useState(false);
  const [isLap, setIsLap] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const acceptedPhotos = userSubmissions.filter((photo) => photo.status === "ACCEPTED");
  let lettersNeeded = 0;
  for (const char of letters) {
    if (char === "0"){
      lettersNeeded++;
    }
  }
  useEffect(() => {
    setIsClient(true);

    const resizeFunc = () => {
      if (typeof window === "undefined") return;

      const width = window.innerWidth;
      setIsPhone(width >= 320 && width <= 500);
      setIsAir(width >= 501 && width < 900);
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
          <div className="min-h-screen w-screen overflow-hidden bg-[#FFEBC8] md:w-screen lg:w-screen">
            <div className="relative flex items-center justify-center">
              <div className="relative mb-[0.5rem] mt-[0.2rem]">
                {showPhotosStatus ? (
                  <PhotosStatus />
                ) : (
                  <div className="relative rounded-[18px] border-2 border-black bg-[#FFE5A1] bg-[url('/assets/UserDashboard/dino.png')] bg-cover bg-no-repeat">
                    <div className="relative flex flex-row justify-center space-x-4 pl-[2rem] pr-[2rem] pt-[2rem]">
                      <div className="relative flex h-[20rem] w-[50rem] overflow-hidden rounded-[18px] border-[1.6px] border-black bg-[#D0B4FF] shadow-custom-black">
                        <div className="absolute bottom-[-9.8rem] right-[-9.8rem] h-[19.5rem] w-[19.5rem] rounded-full bg-[#A56FFF]"></div>
                        <div className="absolute bottom-[-4.9rem] right-[-4.9rem] h-[9.75rem] w-[9.75rem] rounded-full bg-[#D0B4FF]"></div>

                        <div className="absolute right-[-9.8rem] top-[-9.8rem] h-[19.5rem] w-[19.5rem] rounded-full bg-[#A56FFF]"></div>
                        <div className="absolute right-[-4.9rem] top-[-4.9rem] h-[9.75rem] w-[9.75rem] rounded-full bg-[#D0B4FF]"></div>

                        <div className="flex items-center justify-center">
                          <div className="relative left-[1rem] h-[16.1rem] w-[15rem] items-center border-[1.6px] border-black bg-white">
                            <Image
                              src={user?user.pic:"/assets/About/dj.gif"}
                              alt="heart"
                              width={80}
                              height={100}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        </div>

                        <div className="relative left-[3rem] flex flex-1 flex-col justify-evenly">
                          <div className="font-tusker">
                            <p className="text-[2.5rem] text-white">@{user?.name}</p>
                            <h2>{user?.email}</h2>
                          </div>
                          <div className="flex flex-row items-center">
                            <div className="relative mx-1 ml-[0] h-[9rem] w-[9rem] overflow-hidden border border-black bg-[#FF7CD5]">
                              <p className="pt-[0.6rem] text-center font-tusker2 text-[1.2rem]">
                                PHOTOS UPLOADED
                              </p>
                              <div className="relative left-[2.5rem] top-[0.5rem] z-[10]">
                                <p className="text-center font-tusker2 text-[4rem]">
                                  {userSubmissions.length}
                                </p>
                              </div>
                              <div className="absolute bottom-[-3.4rem] right-[-3.4rem] h-[8.4rem] w-[8.4rem] rounded-full bg-white"></div>
                            </div>
                            <div className="relative mx-1 ml-3 h-[9rem] w-[9rem] overflow-hidden border border-black bg-[#9BABFF]">
                              <p className="pt-[0.6rem] text-center font-tusker2 text-[1.2rem]">
                                PHOTOS ACCEPTED
                              </p>
                              <div className="relative left-[2.5rem] top-[0.5rem] z-[10]">
                                <p className="text-center font-tusker2 text-[4rem]">
                                  {acceptedPhotos.length}
                                </p>
                              </div>
                              <div className="absolute bottom-[-3.4rem] right-[-3.4rem] h-[8.4rem] w-[8.4rem] rounded-full bg-white"></div>
                            </div>
                            <div className="relative mx-1 ml-3 h-[9rem] w-[9rem] overflow-hidden border border-black bg-[#EDFF7F]">
                              <p className="pt-[0.6rem] text-center font-tusker2 text-[1.2rem]">
                                PHOTOS PENDING
                              </p>
                              <div className="relative left-[2.5rem] top-[0.5rem] z-[10]">
                                <p className="text-center font-tusker2 text-[4rem]">
                                  {userSubmissions.length - acceptedPhotos.length}
                                </p>
                              </div>
                              <div className="absolute bottom-[-3.4rem] right-[-3.4rem] h-[8.4rem] w-[8.4rem] rounded-full bg-white"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="h-[20rem] w-[31rem] flex-col items-center justify-center rounded-[18px] border-[1.6px] border-black bg-[#D0B4FF] bg-[url('/assets/UserDashboard/user.gif')] bg-cover bg-center pt-[2rem] shadow-custom-black">
                        <span
                          className={`relative left-[6rem] inline-block flex w-[8rem] justify-center md:w-[10.2rem] lg:w-[10rem] xl:w-[20rem] ${styles.incandCont}`}
                        >
                          <span
                            style={{ letterSpacing: "1.2px" }}
                            className={`text-center text-[18px] md:text-[24.8px] xl:text-[20px] ${styles.incandText}`}
                          >
                            LETTERS COLLECTED
                          </span>
                        </span>
                        <div className="flex h-[12rem] w-[35rem]">
                          {incand.map((image, index) => (
                            <div
                              key={index}
                              className="relative z-[1000] h-[6rem] w-[5rem] scale-[0.73]"
                            >
                              <Image
                                src={image.src}
                                alt={`Image ${index + 1}`}
                                layout="fill"
                                objectFit="cover"
                                className={`z-[1000] ${letters[index] === "1" ? "opacity-1" : "opacity-[0.16]"} `} // Set opacity dynamically
                              />
                            </div>
                          ))}
                        </div>
                        <span
                          className={`$ relative left-[6rem] top-[-5.4rem] flex w-[8rem] justify-center font-tusker2 md:w-[10.2rem] lg:w-[10rem] xl:w-[20rem]`}
                        >
                          <span
                            style={{ letterSpacing: "1.2px" }}
                            className={`text-center text-[24px]`}
                          >
                            collect {lettersNeeded} to win
                          </span>
                        </span>
                        <Link href="/game">
                          <Image
                            src={"/assets/UserDashboard/upload.svg"}
                            alt="upload"
                            height={10}
                            width={10}
                            className="z-1 relative left-[10rem] top-[-8.2rem] h-[12rem] w-[12rem]"
                          ></Image>
                        </Link>
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
                        <button onClick={handleViewAllClick} className="z-[1000]">
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
                          {userSubmissions.map((card) => (
                            <div
                              key={card.id}
                              className={`flex flex-col items-center p-4 ${card.status === "PENDING" ? "bg-[#FC6C7B]" : "bg-[#C4FFAE]"} min-w-[150px] rounded-lg shadow-custom-black`}
                            >
                              <Image
                                src={card.photo}
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
          <div className="min-h-screen w-screen overflow-hidden bg-[#FFEBC8] md:w-screen lg:w-screen">
            <div className="relative items-center justify-center">
              <div className="relative mb-[0.5rem] mt-[0.2rem]">
                {showPhotosStatus ? (
                  <PhotosStatus />
                ) : (
                  <div className="relative rounded-[18px] bg-[#FFE5A1]">
                    <div className="relative flex flex-col items-center justify-center space-x-4 pl-[2rem] pr-[2rem] pt-[2rem]">
                      <div className="relative flex h-[20rem] w-[50rem] scale-[0.48] overflow-hidden rounded-[18px] border-[1.6px] border-black bg-[#D0B4FF] shadow-custom-black">
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
                              <div className="relative left-[2.5rem] top-[0.5rem] z-[10]">
                                <p className="text-center font-tusker2 text-[4rem]">
                                  {userSubmissions.length}
                                </p>
                              </div>
                              <div className="absolute bottom-[-3.4rem] right-[-3.4rem] h-[8.4rem] w-[8.4rem] rounded-full bg-white"></div>
                            </div>
                            <div className="relative mx-1 ml-3 h-[9rem] w-[9rem] overflow-hidden border border-black bg-[#9BABFF]">
                              <p className="pt-[0.6rem] text-center font-tusker2 text-[1.2rem]">
                                PHOTOS ACCEPTED
                              </p>
                              <div className="relative left-[2.5rem] top-[0.5rem] z-[10]">
                                <p className="text-center font-tusker2 text-[4rem]">
                                  {acceptedPhotos.length}
                                </p>
                              </div>
                              <div className="absolute bottom-[-3.4rem] right-[-3.4rem] h-[8.4rem] w-[8.4rem] rounded-full bg-white"></div>
                            </div>
                            <div className="relative mx-1 ml-3 h-[9rem] w-[9rem] overflow-hidden border border-black bg-[#EDFF7F]">
                              <p className="pt-[0.6rem] text-center font-tusker2 text-[1.2rem]">
                                PHOTOS PENDING
                              </p>
                              <div className="relative left-[2.5rem] top-[0.5rem] z-[10]">
                                <p className="text-center font-tusker2 text-[4rem]">
                                  {userSubmissions.length - acceptedPhotos.length}
                                </p>
                              </div>
                              <div className="absolute bottom-[-3.4rem] right-[-3.4rem] h-[8.4rem] w-[8.4rem] rounded-full bg-white"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="relative left-[-0.7rem] top-[-4rem] h-[20rem] w-[31rem] scale-[0.75] flex-col items-center justify-center rounded-[18px] border-[1.6px] border-black bg-[#D0B4FF] bg-[url('/assets/UserDashboard/user.gif')] bg-cover bg-center pt-[2rem] shadow-custom-black">
                        <span
                          className={`relative left-[2rem] inline-block flex w-[25rem] items-center justify-center ${styles.incandCont}`}
                        >
                          <span
                            style={{ letterSpacing: "1.2px" }}
                            className={`text-center text-[22px] ${styles.incandText}`}
                          >
                            LETTERS COLLECTED
                          </span>
                        </span>
                        <div className="flex h-[12rem] w-[35rem]">
                          {incand.map((image, index) => (
                            <div
                              key={index}
                              className="relative z-[1000] h-[6rem] w-[5rem] scale-[0.73]"
                            >
                              <Image
                                src={image.src}
                                alt={`Image ${index + 1}`}
                                layout="fill"
                                objectFit="cover"
                                className={`z-[1000] ${letters[index] === "1" ? "opacity-1" : "opacity-[0.16]"} `}
                              />
                            </div>
                          ))}
                        </div>
                        <span
                          className={`relative left-[8rem] top-[-5.4rem] flex w-[15rem] items-center justify-center font-tusker2 md:w-[10.2rem] lg:w-[10rem] xl:w-[20rem]`}
                        >
                          <span
                            style={{ letterSpacing: "1.2px" }}
                            className={`text-center text-[24px]`}
                          >
                            Collect 4 More To Win
                          </span>
                        </span>
                        <Link href="/game">
                          <Image
                            src={"/assets/UserDashboard/upload.svg"}
                            alt="upload"
                            height={10}
                            width={10}
                            className="relative z-1 left-[9.7rem] top-[-8.2rem] h-[12rem] w-[12rem]"
                          ></Image>
                        </Link>
                      </div>
                    </div>

                    <div className="relative top-[-5rem] flex flex-col items-center justify-between pt-[3rem]">
                      <div
                        className="left-[5rem] font-tusker2 text-[3rem] tracking-widest text-white"
                        style={{
                          textShadow:
                            "-2px -2px 0px black, 2px -2px 0px black, -2px 2px 0px black, 2px 2px 0px black",
                        }}
                      >
                        <p className="mt-4 w-max border-b-4 border-dashed border-black pb-[0.5rem]">
                          PHOTO UPDATES
                        </p>
                      </div>
                      <div className="relative left-[6rem] mt-6 flex items-center justify-center rounded-[18px] border-2 border-black bg-white pl-[1rem] pr-[1rem] font-tusker2 tracking-widest text-black shadow-custom-black">
                        <button onClick={handleViewAllClick} className="z-[1000]">
                          <p className="text-[1.5rem]">VIEW ALL</p>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-center pt-[2rem]">
                      <div
                        ref={scrollContainerRef}
                        className="relative top-[-4rem] max-w-[24rem] cursor-grab overflow-x-auto scroll-smooth pb-[2rem] scrollbar-hide"
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUpOrLeave}
                        onMouseLeave={handleMouseUpOrLeave}
                        style={{ userSelect: "none" }}
                      >
                        <div className="flex gap-4">
                          {userSubmissions.map((card) => (
                            <div
                              key={card.id}
                              className={`flex flex-col items-center p-4 ${card.status === "PENDING" ? "bg-[#FC6C7B]" : "bg-[#C4FFAE]"} min-w-[150px] rounded-lg shadow-custom-black`}
                            >
                              <Image
                                src={card.photo}
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
          <div className="min-h-screen w-screen bg-[#FFEBC8] md:w-screen lg:w-screen">
            <div className="relative flex items-center justify-center">
              <div className="mb-[0.5rem] mt-[0.2rem]">
                {showPhotosStatus ? (
                  <PhotosStatus />
                ) : (
                  <div className="w-screen rounded-[18px] bg-[#FFE5A1]">
                    <div className="flex flex-col items-center justify-center space-x-4 pt-[2rem]">
                      <div className="relative flex h-[20rem] w-[50rem] scale-[0.9] overflow-hidden rounded-[18px] border-[1.6px] border-black bg-[#D0B4FF] shadow-custom-black">
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
                              <div className="relative left-[2.5rem] top-[0.5rem] z-[10]">
                                <p className="text-center font-tusker2 text-[4rem]">
                                  {userSubmissions.length}
                                </p>
                              </div>
                              <div className="absolute bottom-[-3.4rem] right-[-3.4rem] h-[8.4rem] w-[8.4rem] rounded-full bg-white"></div>
                            </div>
                            <div className="relative mx-1 ml-3 h-[9rem] w-[9rem] overflow-hidden border border-black bg-[#9BABFF]">
                              <p className="pt-[0.6rem] text-center font-tusker2 text-[1.2rem]">
                                PHOTOS ACCEPTED
                              </p>
                              <div className="relative left-[2.5rem] top-[0.5rem] z-[10]">
                                <p className="text-center font-tusker2 text-[4rem]">
                                  {acceptedPhotos.length}
                                </p>
                              </div>
                              <div className="absolute bottom-[-3.4rem] right-[-3.4rem] h-[8.4rem] w-[8.4rem] rounded-full bg-white"></div>
                            </div>
                            <div className="relative mx-1 ml-3 h-[9rem] w-[9rem] overflow-hidden border border-black bg-[#EDFF7F]">
                              <p className="pt-[0.6rem] text-center font-tusker2 text-[1.2rem]">
                                PHOTOS PENDING
                              </p>
                              <div className="relative left-[2.5rem] top-[0.5rem] z-[10]">
                                <p className="text-center font-tusker2 text-[4rem]">
                                  {userSubmissions.length - acceptedPhotos.length}
                                </p>
                              </div>
                              <div className="absolute bottom-[-3.4rem] right-[-3.4rem] h-[8.4rem] w-[8.4rem] rounded-full bg-white"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="relative left-[-0.7rem] top-[2.1rem] h-[20rem] w-[31rem] scale-[1.1] flex-col justify-center rounded-[18px] border-[1.6px] border-black bg-[#D0B4FF] bg-[url('/assets/UserDashboard/user.gif')] bg-cover bg-center pt-[2rem] shadow-custom-black">
                        <span
                          className={`left-[2.3rem] inline-block flex w-[25rem] justify-center ${styles.incandCont}`}
                        >
                          <span
                            style={{ letterSpacing: "1.2px" }}
                            className={`text-center text-[22px] ${styles.incandText}`}
                          >
                            LETTERS COLLECTED
                          </span>
                        </span>
                        <div className="flex h-[12rem] w-[35rem]">
                          {incand.map((image, index) => (
                            <div
                              key={index}
                              className="relative z-[1000] h-[6rem] w-[5rem] scale-[0.73]"
                            >
                              <Image
                                src={image.src}
                                alt={`Image ${index + 1}`}
                                layout="fill"
                                objectFit="cover"
                                className={`z-[1000] ${letters[index] === "1" ? "opacity-1" : "opacity-[0.16]"} `}
                              />
                            </div>
                          ))}
                        </div>
                        <span
                          className={`relative left-[6rem] top-[-5.4rem] flex w-[20rem] justify-center font-tusker2`}
                        >
                          <span
                            style={{ letterSpacing: "1.2px" }}
                            className={`text-center text-[24px]`}
                          >
                            Collect 4 More To Win
                          </span>
                        </span>
                        <Link href="/game">
                          <Image
                            src={"/assets/UserDashboard/upload.svg"}
                            alt="upload"
                            height={10}
                            width={10}
                            className="relative z-1 left-[9.7rem] top-[-8.2rem] h-[12rem] w-[12rem]"
                          ></Image>
                        </Link>
                      </div>
                    </div>

                    <div className="relative top-[1rem] flex flex-col items-center justify-between pt-[3rem]">
                      <div
                        className="left-[5rem] font-tusker2 text-[3rem] tracking-widest text-white"
                        style={{
                          textShadow:
                            "-2px -2px 0px black, 2px -2px 0px black, -2px 2px 0px black, 2px 2px 0px black",
                        }}
                      >
                        <p className="mt-4 w-max border-b-4 border-dashed border-black pb-[0.5rem]">
                          PHOTO UPDATES
                        </p>
                      </div>
                      <div className="relative right-[-4rem] mt-6 flex items-center justify-center rounded-[18px] border-2 border-black bg-white pl-[1rem] pr-[1rem] font-tusker2 tracking-widest text-black shadow-custom-black">
                        <button onClick={handleViewAllClick} className="z-[1000]">
                          <p className="text-[1.5rem]">VIEW ALL</p>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-center pt-[2rem]">
                      <div
                        ref={scrollContainerRef}
                        className="relative top-[1rem] max-w-[45rem] cursor-grab overflow-x-auto scroll-smooth pb-[2rem] scrollbar-hide"
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUpOrLeave}
                        onMouseLeave={handleMouseUpOrLeave}
                        style={{ userSelect: "none" }}
                      >
                        <div className="flex gap-4">
                          {userSubmissions.map((card) => (
                            <div
                              key={card.id}
                              className={`flex flex-col items-center p-4 ${card.status === "PENDING" ? "bg-[#FC6C7B]" : "bg-[#C4FFAE]"} min-w-[150px] rounded-lg shadow-custom-black`}
                            >
                              <Image
                                src={card.photo}
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
          <div className="min-h-screen w-screen overflow-hidden bg-[#FFEBC8] md:w-screen lg:w-screen">
            <div className="relative flex items-center justify-center">
              <div className="relative mb-[0.5rem] mt-[0.2rem]">
                {showPhotosStatus ? (
                  <PhotosStatus />
                ) : (
                  <div className="relative rounded-[18px] border-2 border-black bg-[#FFE5A1]">
                    <div className="relative flex scale-[0.78] flex-row justify-center space-x-4 pl-[2rem] pr-[2rem] pt-[2rem]">
                      <div className="relative flex h-[20rem] w-[48rem] overflow-hidden rounded-[18px] border-[1.6px] border-black bg-[#D0B4FF] shadow-custom-black">
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
                              <div className="relative left-[2.5rem] top-[0.5rem] z-[10]">
                                <p className="text-center font-tusker2 text-[4rem]">
                                  {userSubmissions.length}
                                </p>
                              </div>
                              <div className="absolute bottom-[-3.4rem] right-[-3.4rem] h-[8.4rem] w-[8.4rem] rounded-full bg-white"></div>
                            </div>
                            <div className="relative mx-1 ml-3 h-[9rem] w-[9rem] overflow-hidden border border-black bg-[#9BABFF]">
                              <p className="pt-[0.6rem] text-center font-tusker2 text-[1.2rem]">
                                PHOTOS ACCEPTED
                              </p>
                              <div className="relative left-[2.5rem] top-[0.5rem] z-[10]">
                                <p className="text-center font-tusker2 text-[4rem]">
                                  {acceptedPhotos.length}
                                </p>
                              </div>
                              <div className="absolute bottom-[-3.4rem] right-[-3.4rem] h-[8.4rem] w-[8.4rem] rounded-full bg-white"></div>
                            </div>
                            <div className="relative mx-1 ml-3 h-[9rem] w-[9rem] overflow-hidden border border-black bg-[#EDFF7F]">
                              <p className="pt-[0.6rem] text-center font-tusker2 text-[1.2rem]">
                                PHOTOS PENDING
                              </p>
                              <div className="relative left-[2.5rem] top-[0.5rem] z-[10]">
                                <p className="text-center font-tusker2 text-[4rem]">
                                  {userSubmissions.length - acceptedPhotos.length}
                                </p>
                              </div>
                              <div className="absolute bottom-[-3.4rem] right-[-3.4rem] h-[8.4rem] w-[8.4rem] rounded-full bg-white"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="relative h-[20rem] w-[31rem] flex-col justify-center rounded-[18px] border-[1.6px] border-black bg-[#D0B4FF] bg-[url('/assets/UserDashboard/user.gif')] bg-cover bg-center pt-[2rem] shadow-custom-black">
                        <span
                          className={`relative left-[-7rem] inline-block flex w-[45rem] justify-center ${styles.incandCont}`}
                        >
                          <span
                            style={{ letterSpacing: "1.2px" }}
                            className={`text-center text-[18px] md:text-[24.8px] xl:text-[20px] ${styles.incandText}`}
                          >
                            LETTERS COLLECTED
                          </span>
                        </span>
                        <div className="flex h-[12rem] w-[35rem]">
                          {incand.map((image, index) => (
                            <div
                              key={index}
                              className="relative z-[1000] h-[6rem] w-[5rem] scale-[0.73]"
                            >
                              <Image
                                src={image.src}
                                alt={`Image ${index + 1}`}
                                layout="fill"
                                objectFit="cover"
                                className={`z-[1000] ${letters[index] === "1" ? "opacity-1" : "opacity-[0.16]"} `}
                              />
                            </div>
                          ))}
                        </div>
                        <span
                          className={`$ relative left-[6rem] top-[-5.4rem] flex w-[19rem] justify-center font-tusker2`}
                        >
                          <span
                            style={{ letterSpacing: "1.2px" }}
                            className={`text-center text-[24px]`}
                          >
                            Collect 4 More To Win
                          </span>
                        </span>
                        <Link href="/game">
                          <Image
                            src={"/assets/UserDashboard/upload.svg"}
                            alt="upload"
                            height={10}
                            width={10}
                            className="relative z-1 left-[9.7rem] top-[-8.2rem] h-[12rem] w-[12rem]"
                          ></Image>
                        </Link>
                      </div>
                    </div>

                    <div className="flex scale-[0.78] flex-row justify-between pl-[2.2rem] pt-[3rem]">
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
                        <button onClick={handleViewAllClick} className="z-[1000]">
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
                          {userSubmissions.map((card) => (
                            <div
                              key={card.id}
                              className={`flex flex-col items-center p-4 ${card.status === "PENDING" ? "bg-[#FC6C7B]" : "bg-[#C4FFAE]"} min-w-[150px] rounded-lg shadow-custom-black`}
                            >
                              <Image
                                src={card.photo}
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
