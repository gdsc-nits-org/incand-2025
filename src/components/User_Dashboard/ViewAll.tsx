"use client";

import Image from "next/image";
import UserDashboard from "./user";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { env } from "~/env";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "~/app/utils/firebase";


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


const PhotosStatus = () => {

  const [showPhotoStatus, setShowPhotoStatus] = useState(false);
  const handleViewAllClick = () => {
    setShowPhotoStatus(true);
  };
  const [_user] = useAuthState(auth);
  const [user, setUser] = useState<UserResponse>()
  const [userSubmissions, setUserSubmissions] = useState<UserSubmissions[]>([])
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

        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    void fetchUserData();
  }, [_user]);

  useEffect(() => {
    const fetchUserSubmissions = async () => {
      if (_user) {
        try {
          const UserSubmissions = await axios.get<UserSubmissionsResponse>(
            `${env.NEXT_PUBLIC_API_URL}/api/user/submissions/${user?.id}`,
          );
          setUserSubmissions(UserSubmissions.data.msg);

        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    void fetchUserSubmissions();
  }, [_user]);

  const verifiedPhotos = userSubmissions.filter((photo) => photo.status === "ACCEPTED");
  const pendingPhotos = userSubmissions.filter((photo) => photo.status === "PENDING");

  // Separate refs for each section
  const verifiedScrollRef = useRef<HTMLDivElement | null>(null);
  const pendingScrollRef = useRef<HTMLDivElement | null>(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (
    e: React.MouseEvent,
    ref: React.RefObject<HTMLDivElement>,
  ) => {
    if (!ref.current) return;
    isDragging.current = true;
    startX.current = e.pageX - ref.current.offsetLeft;
    scrollLeft.current = ref.current.scrollLeft;
  };

  const handleMouseMove = (
    e: React.MouseEvent,
    ref: React.RefObject<HTMLDivElement>,
  ) => {
    if (!ref.current || !isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const walk = x - startX.current;
    ref.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDragging.current = false;
  };

  const handleArrowClick = (
    direction: "left" | "right",
    ref: React.RefObject<HTMLDivElement>,
    scrollAmount = 300,
  ) => {
    if (!ref.current) return;
    const currentScroll = ref.current.scrollLeft;

    if (direction === "left") {
      ref.current.scrollLeft = currentScroll - scrollAmount;
    } else {
      ref.current.scrollLeft = currentScroll + scrollAmount;
    }
  };

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

  return (
    <>
      {isLap && (
        <>
          <div>
            {showPhotoStatus ? (
              <UserDashboard />
            ) : (
              <div className={`flex flex-col 4k:scale-[2.5] 4k:mt-[15rem] items-center ${userSubmissions.length === 0 && "w-[80rem]"} justify-center rounded-[18px] border-2 border-black bg-[#EFC453] pl-[3rem] pr-[3rem]`}>
                <div
                  className="font-tusker2 text-[2.3rem] tracking-widest text-white"
                  style={{
                    textShadow:
                      "-2px -2px 0px black, 2px -2px 0px black, -2px 2px 0px black, 2px 2px 0px black",
                  }}
                >
                  <p className="mt-4 w-max border-b-4 border-dashed border-black pb-[0.5rem]">
                    PHOTO UPDATES
                  </p>
                  <button onClick={handleViewAllClick}>
                    <svg
                      width="72"
                      height="73"
                      viewBox="0 0 72 73"
                      onClick={handleViewAllClick}
                      className="absolute right-[2rem] top-[2rem] h-[2.5rem]"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_2688_9440)">
                        <rect
                          y="0.871094"
                          width="68"
                          height="68"
                          rx="18"
                          fill="white"
                        />
                        <rect
                          x="1.879"
                          y="2.75009"
                          width="64.242"
                          height="64.242"
                          rx="16.121"
                          stroke="black"
                          stroke-width="3.758"
                        />
                        <path
                          d="M16.2754 34.0469L38.417 46.8303L38.417 21.2634L16.2754 34.0469ZM51.7266 31.8327L36.2028 31.8327L36.2028 36.261L51.7266 36.261L51.7266 31.8327Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_2688_9440"
                          x="0"
                          y="0.871094"
                          width="71.27"
                          height="71.39"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dx="3.27" dy="3.39" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_2688_9440"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_2688_9440"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </button>
                </div>

                {userSubmissions.length === 0 ? (
                  <div className="flex items-center justify-center pt-[2rem] pb-[2rem]">
                    <p className="text-gray-500">No submissions available. Upload To Get INCAND </p>
                  </div>) : (<div className="w-full flex-col justify-between">
                    {/* Verified Photos Section */}
                    <div>
                      <div className="flex-col items-center justify-center">
                        <h3 className="font-tusker2 text-[2.5rem]">Verified</h3>
                        <div className="flex items-center justify-center pt-[2rem]">
                          <button
                            onClick={() =>
                              handleArrowClick("left", verifiedScrollRef)
                            }
                            className="absolute left-[1rem] rounded-full bg-white p-2 opacity-50 hover:opacity-80"
                            style={{ zIndex: 10 }}
                          >
                            &lt;
                          </button>

                          <div
                            ref={verifiedScrollRef}
                            className="max-w-[73rem] cursor-grab overflow-x-auto scroll-smooth pb-[2rem] scrollbar-hide"
                            onMouseDown={(e) =>
                              handleMouseDown(e, verifiedScrollRef)
                            }
                            onMouseMove={(e) =>
                              handleMouseMove(e, verifiedScrollRef)
                            }
                            onMouseUp={handleMouseUpOrLeave}
                            onMouseLeave={handleMouseUpOrLeave}
                            style={{ userSelect: "none" }}
                          >
                            <div className="flex gap-4">
                              {verifiedPhotos.map((photo) => (
                                <div
                                  key={photo.id}
                                  className={`flex min-w-[150px] flex-col items-center rounded-lg bg-[#9793FF] p-4 shadow-custom-black`}
                                >
                                  <Image
                                    src={photo.photo}
                                    alt="Avatar"
                                    width={300}
                                    height={300}
                                    draggable={false}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>

                          <button
                            onClick={() =>
                              handleArrowClick("right", verifiedScrollRef)
                            }
                            className="absolute right-[1rem] rounded-full bg-white p-2 opacity-50 hover:opacity-80"
                            style={{ zIndex: 10 }}
                          >
                            &gt;
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Pending Photos Section */}
                    <div className="w-full">
                      <div className="flex-col items-center justify-center pt-[2rem]">
                        <h3 className="font-tusker2 text-[2.5rem]">PENDING</h3>
                        <div className="flex items-center justify-center pt-[2rem]">
                          <button
                            onClick={() =>
                              handleArrowClick("left", pendingScrollRef)
                            }
                            className="absolute left-[1rem] rounded-full bg-white p-2 opacity-50 hover:opacity-80"
                            style={{ zIndex: 10 }}
                          >
                            &lt;
                          </button>

                          <div
                            ref={pendingScrollRef}
                            className="max-w-[73rem] cursor-grab overflow-x-auto scroll-smooth pb-[2rem] scrollbar-hide"
                            onMouseDown={(e) =>
                              handleMouseDown(e, pendingScrollRef)
                            }
                            onMouseMove={(e) =>
                              handleMouseMove(e, pendingScrollRef)
                            }
                            onMouseUp={handleMouseUpOrLeave}
                            onMouseLeave={handleMouseUpOrLeave}
                            style={{ userSelect: "none" }}
                          >
                            <div className="flex gap-4">
                              {pendingPhotos.map((photo) => (
                                <div
                                  key={photo.id}
                                  className={`flex min-w-[150px] flex-col items-center rounded-lg bg-[#E1067B] p-4 shadow-custom-black`}
                                >
                                  <Image
                                    src={photo.photo}
                                    alt="Avatar"
                                    width={300}
                                    height={300}
                                    draggable={false}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>

                          <button
                            onClick={() =>
                              handleArrowClick("right", pendingScrollRef)
                            }
                            className="absolute right-[1rem] rounded-full bg-white p-2 opacity-50 hover:opacity-80"
                            style={{ zIndex: 10 }}
                          >
                            &gt;
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>)}
              </div>
            )}
          </div>
        </>
      )}
      {isPhone && (
        <>
          <div>
            {showPhotoStatus ? (
              <UserDashboard />
            ) : (
              <div className={`flex scale-[1] ${userSubmissions.length === 0 && "pt-[5rem] scale-[0.9] "} flex-col items-center justify-center rounded-[18px] pl-[3rem] pr-[3rem]`}>
                <div
                  className="font-tusker2 text-[2.8rem] tracking-widest text-white"
                  style={{
                    textShadow:
                      "-2px -2px 0px black, 2px -2px 0px black, -2px 2px 0px black, 2px 2px 0px black",
                  }}
                >
                  <p className="mt-4 w-max border-b-4 border-dashed border-black pb-[0.5rem]">
                    PHOTO UPDATES
                  </p>
                  <button onClick={handleViewAllClick}>
                    <svg
                      width="72"
                      height="73"
                      viewBox="0 0 72 73"
                      onClick={handleViewAllClick}
                      className={`absolute right-[2rem] top-[7rem] ${userSubmissions.length === 0 && "mt-[5rem]  "} h-[2.5rem] `}
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_2688_9440)">
                        <rect
                          y="0.871094"
                          width="68"
                          height="68"
                          rx="18"
                          fill="white"
                        />
                        <rect
                          x="1.879"
                          y="2.75009"
                          width="64.242"
                          height="64.242"
                          rx="16.121"
                          stroke="black"
                          stroke-width="3.758"
                        />
                        <path
                          d="M16.2754 34.0469L38.417 46.8303L38.417 21.2634L16.2754 34.0469ZM51.7266 31.8327L36.2028 31.8327L36.2028 36.261L51.7266 36.261L51.7266 31.8327Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_2688_9440"
                          x="0"
                          y="0.871094"
                          width="71.27"
                          height="71.39"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dx="3.27" dy="3.39" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_2688_9440"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_2688_9440"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </button>
                </div>

                {userSubmissions.length === 0 ? (
                  <div className="flex items-center justify-center pt-[2rem] pb-[2rem]">
                    <p className="text-gray-500">No submissions available. Upload To Get INCAND </p>
                  </div>) : (<div className="w-full flex-col justify-between">
                    {/* Verified Photos Section */}
                    <div>
                      <div className="flex-col items-center justify-center">
                        <h3 className="relative left-[0.5rem] font-tusker2 text-[2.5rem]">
                          Verified
                        </h3>
                        <div className="flex items-center justify-center pt-[2rem]">
                          <button
                            onClick={() =>
                              handleArrowClick("left", verifiedScrollRef)
                            }
                            className="absolute left-[1rem] rounded-full bg-white p-2 opacity-50 hover:opacity-80"
                            style={{ zIndex: 10 }}
                          >
                            &lt;
                          </button>

                          <div
                            ref={verifiedScrollRef}
                            className="max-w-[30rem] cursor-grab overflow-x-auto scroll-smooth pb-[2rem] scrollbar-hide"
                            onMouseDown={(e) =>
                              handleMouseDown(e, verifiedScrollRef)
                            }
                            onMouseMove={(e) =>
                              handleMouseMove(e, verifiedScrollRef)
                            }
                            onMouseUp={handleMouseUpOrLeave}
                            onMouseLeave={handleMouseUpOrLeave}
                            style={{ userSelect: "none" }}
                          >
                            <div className="flex gap-4">
                              {verifiedPhotos.map((photo) => (
                                <div
                                  key={photo.id}
                                  className={`flex min-w-[150px] flex-col items-center rounded-lg bg-[#9793FF] p-4 shadow-custom-black`}
                                >
                                  <Image
                                    src={photo.photo}
                                    alt="Avatar"
                                    width={300}
                                    height={300}
                                    draggable={false}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>

                          <button
                            onClick={() =>
                              handleArrowClick("right", verifiedScrollRef)
                            }
                            className="absolute right-[1rem] rounded-full bg-white p-2 opacity-50 hover:opacity-80"
                            style={{ zIndex: 10 }}
                          >
                            &gt;
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Pending Photos Section */}
                    <div className="w-full">
                      <div className="flex-col items-center justify-center pt-[2rem]">
                        <h3 className="relative left-[0.5rem] font-tusker2 text-[2.5rem]">
                          PENDING
                        </h3>
                        <div className="flex items-center justify-center pt-[2rem]">
                          <button
                            onClick={() =>
                              handleArrowClick("left", pendingScrollRef)
                            }
                            className="absolute left-[1rem] rounded-full bg-white p-2 opacity-50 hover:opacity-80"
                            style={{ zIndex: 10 }}
                          >
                            &lt;
                          </button>

                          <div
                            ref={pendingScrollRef}
                            className="max-w-[30rem] cursor-grab overflow-x-auto scroll-smooth pb-[2rem] scrollbar-hide"
                            onMouseDown={(e) =>
                              handleMouseDown(e, pendingScrollRef)
                            }
                            onMouseMove={(e) =>
                              handleMouseMove(e, pendingScrollRef)
                            }
                            onMouseUp={handleMouseUpOrLeave}
                            onMouseLeave={handleMouseUpOrLeave}
                            style={{ userSelect: "none" }}
                          >
                            <div className="flex gap-4">
                              {pendingPhotos.map((photo) => (
                                <div
                                  key={photo.id}
                                  className={`flex min-w-[150px] flex-col items-center rounded-lg bg-[#E1067B] p-4 shadow-custom-black`}
                                >
                                  <Image
                                    src={photo.photo}
                                    alt="Avatar"
                                    width={300}
                                    height={300}
                                    draggable={false}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>

                          <button
                            onClick={() =>
                              handleArrowClick("right", pendingScrollRef)
                            }
                            className="absolute right-[1rem] rounded-full bg-white p-2 opacity-50 hover:opacity-80"
                            style={{ zIndex: 10 }}
                          >
                            &gt;
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>)}
              </div>
            )}
          </div>
        </>
      )}
      {isAir && (
        <>
          <div>
            {showPhotoStatus ? (
              <UserDashboard />
            ) : (
              <div className={` ${userSubmissions.length === 0 && " mobile2:pt-[5rem] tablet:pt-0 "} flex flex-col items-center justify-center rounded-[18px] pl-[3rem] pr-[3rem]`}>
                <div
                  className="font-tusker2 text-[2.8rem] tracking-widest text-white"
                  style={{
                    textShadow:
                      "-2px -2px 0px black, 2px -2px 0px black, -2px 2px 0px black, 2px 2px 0px black",
                  }}
                >
                  <p className="mt-4 w-max border-b-4 border-dashed border-black pb-[0.5rem]">
                    PHOTO UPDATES
                  </p>
                  <button onClick={handleViewAllClick}>
                    <svg
                      width="72"
                      height="73"
                      viewBox="0 0 72 73"
                      className={`absolute ${userSubmissions.length === 0 && "mobile2:mt-[10rem] mobile2:pl-[2rem] tablet:pl-[0rem]  tablet:mt-0 "} right-[4rem] top-[2.5rem] h-[2.5rem]`}
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_2688_9440)">
                        <rect
                          y="0.871094"
                          width="68"
                          height="68"
                          rx="18"
                          fill="white"
                        />
                        <rect
                          x="1.879"
                          y="2.75009"
                          width="64.242"
                          height="64.242"
                          rx="16.121"
                          stroke="black"
                          stroke-width="3.758"
                        />
                        <path
                          d="M16.2754 34.0469L38.417 46.8303L38.417 21.2634L16.2754 34.0469ZM51.7266 31.8327L36.2028 31.8327L36.2028 36.261L51.7266 36.261L51.7266 31.8327Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_2688_9440"
                          x="0"
                          y="0.871094"
                          width="71.27"
                          height="71.39"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dx="3.27" dy="3.39" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_2688_9440"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_2688_9440"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </button>
                </div>

                {userSubmissions.length === 0 ? (
                  <div className="flex items-center justify-center pt-[2rem] pb-[2rem]">
                    <p className="text-gray-500">No submissions available. Upload To Get INCAND </p>
                  </div>) : (<div className="w-full flex-col justify-between">
                    {/* Verified Photos Section */}
                    <div>
                      <div className="flex-col items-center justify-center">
                        <h3 className="relative left-[0rem] font-tusker2 text-[2.5rem]">
                          Verified
                        </h3>
                        <div className="flex items-center justify-center pt-[2rem]">
                          <button
                            onClick={() =>
                              handleArrowClick("left", verifiedScrollRef)
                            }
                            className="absolute left-[1rem] rounded-full bg-white p-2 opacity-50 hover:opacity-80"
                            style={{ zIndex: 10 }}
                          >
                            &lt;
                          </button>

                          <div
                            ref={verifiedScrollRef}
                            className="max-w-[45rem] cursor-grab overflow-x-auto scroll-smooth pb-[2rem] scrollbar-hide"
                            onMouseDown={(e) =>
                              handleMouseDown(e, verifiedScrollRef)
                            }
                            onMouseMove={(e) =>
                              handleMouseMove(e, verifiedScrollRef)
                            }
                            onMouseUp={handleMouseUpOrLeave}
                            onMouseLeave={handleMouseUpOrLeave}
                            style={{ userSelect: "none" }}
                          >
                            <div className="flex gap-4">
                              {verifiedPhotos.map((photo) => (
                                <div
                                  key={photo.id}
                                  className={`flex min-w-[150px] flex-col items-center rounded-lg bg-[#9793FF] p-4 shadow-custom-black`}
                                >
                                  <Image
                                    src={photo.photo}
                                    alt="Avatar"
                                    width={300}
                                    height={300}
                                    draggable={false}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>

                          <button
                            onClick={() =>
                              handleArrowClick("right", verifiedScrollRef)
                            }
                            className="absolute right-[1rem] rounded-full bg-white p-2 opacity-50 hover:opacity-80"
                            style={{ zIndex: 10 }}
                          >
                            &gt;
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Pending Photos Section */}
                    <div className="w-full">
                      <div className="flex-col items-center justify-center pt-[2rem]">
                        <h3 className="relative left-[0rem] font-tusker2 text-[2.5rem]">
                          PENDING
                        </h3>
                        <div className="flex items-center justify-center pt-[2rem]">
                          <button
                            onClick={() =>
                              handleArrowClick("left", pendingScrollRef)
                            }
                            className="absolute left-[1rem] rounded-full bg-white p-2 opacity-50 hover:opacity-80"
                            style={{ zIndex: 10 }}
                          >
                            &lt;
                          </button>

                          <div
                            ref={pendingScrollRef}
                            className="max-w-[45rem] cursor-grab overflow-x-auto scroll-smooth pb-[2rem] scrollbar-hide"
                            onMouseDown={(e) =>
                              handleMouseDown(e, pendingScrollRef)
                            }
                            onMouseMove={(e) =>
                              handleMouseMove(e, pendingScrollRef)
                            }
                            onMouseUp={handleMouseUpOrLeave}
                            onMouseLeave={handleMouseUpOrLeave}
                            style={{ userSelect: "none" }}
                          >
                            <div className="flex gap-4">
                              {pendingPhotos.map((photo) => (
                                <div
                                  key={photo.id}
                                  className={`flex min-w-[150px] flex-col items-center rounded-lg bg-[#E1067B] p-4 shadow-custom-black`}
                                >
                                  <Image
                                    src={photo.photo}
                                    alt="Avatar"
                                    width={300}
                                    height={300}
                                    draggable={false}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>

                          <button
                            onClick={() =>
                              handleArrowClick("right", pendingScrollRef)
                            }
                            className="absolute right-[1rem] rounded-full bg-white p-2 opacity-50 hover:opacity-80"
                            style={{ zIndex: 10 }}
                          >
                            &gt;
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>)}
              </div>
            )}
          </div>
        </>
      )}
      {isIpad && (
        <>
          <div>
            {showPhotoStatus ? (
              <UserDashboard />
            ) : (
              <div className={`flex ${userSubmissions.length === 0 && "w-[78rem] tablet2:w-[70rem] ipadpro:w-[78rem] "} scale-[0.79] flex-col items-center justify-center rounded-[18px] border-2 border-black bg-[#EFC453] pl-[3rem] pr-[3rem]`}>
                <div
                  className="font-tusker2 text-[2.3rem] tracking-widest text-white"
                  style={{
                    textShadow:
                      "-2px -2px 0px black, 2px -2px 0px black, -2px 2px 0px black, 2px 2px 0px black",
                  }}
                >
                  <p className="mt-4 w-max border-b-4 border-dashed border-black pb-[0.5rem]">
                    PHOTO UPDATES
                  </p>
                  <button onClick={handleViewAllClick}>
                    <svg
                      width="72"
                      height="73"
                      viewBox="0 0 72 73"
                      onClick={handleViewAllClick}
                      className="absolute right-[2rem] top-[2rem] h-[2.5rem]"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_2688_9440)">
                        <rect
                          y="0.871094"
                          width="68"
                          height="68"
                          rx="18"
                          fill="white"
                        />
                        <rect
                          x="1.879"
                          y="2.75009"
                          width="64.242"
                          height="64.242"
                          rx="16.121"
                          stroke="black"
                          stroke-width="3.758"
                        />
                        <path
                          d="M16.2754 34.0469L38.417 46.8303L38.417 21.2634L16.2754 34.0469ZM51.7266 31.8327L36.2028 31.8327L36.2028 36.261L51.7266 36.261L51.7266 31.8327Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_2688_9440"
                          x="0"
                          y="0.871094"
                          width="71.27"
                          height="71.39"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dx="3.27" dy="3.39" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_2688_9440"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_2688_9440"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </button>
                </div>

                {userSubmissions.length === 0 ? (
                  <div className="flex items-center justify-center pt-[2rem] pb-[2rem]">
                    <p className="text-gray-500">No submissions available. Upload To Get INCAND </p>
                  </div>) : (<div className="w-full flex-col justify-between">
                    {/* Verified Photos Section */}
                    <div>
                      <div className="flex-col items-center justify-center">
                        <h3 className="font-tusker2 text-[2.5rem]">Verified</h3>
                        <div className="flex items-center justify-center pt-[2rem]">
                          <button
                            onClick={() =>
                              handleArrowClick("left", verifiedScrollRef)
                            }
                            className="absolute left-[1rem] rounded-full bg-white p-2 opacity-50 hover:opacity-80"
                            style={{ zIndex: 10 }}
                          >
                            &lt;
                          </button>

                          <div
                            ref={verifiedScrollRef}
                            className="max-w-[73rem] cursor-grab overflow-x-auto scroll-smooth pb-[2rem] scrollbar-hide"
                            onMouseDown={(e) =>
                              handleMouseDown(e, verifiedScrollRef)
                            }
                            onMouseMove={(e) =>
                              handleMouseMove(e, verifiedScrollRef)
                            }
                            onMouseUp={handleMouseUpOrLeave}
                            onMouseLeave={handleMouseUpOrLeave}
                            style={{ userSelect: "none" }}
                          >
                            <div className="flex gap-4">
                              {verifiedPhotos.map((photo) => (
                                <div
                                  key={photo.id}
                                  className={`flex min-w-[150px] flex-col items-center rounded-lg bg-[#9793FF] p-4 shadow-custom-black`}
                                >
                                  <Image
                                    src={photo.photo}
                                    alt="Avatar"
                                    width={300}
                                    height={300}
                                    draggable={false}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>

                          <button
                            onClick={() =>
                              handleArrowClick("right", verifiedScrollRef)
                            }
                            className="absolute right-[1rem] rounded-full bg-white p-2 opacity-50 hover:opacity-80"
                            style={{ zIndex: 10 }}
                          >
                            &gt;
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Pending Photos Section */}
                    <div className="w-full">
                      <div className="flex-col items-center justify-center pt-[2rem]">
                        <h3 className="font-tusker2 text-[2.5rem]">PENDING</h3>
                        <div className="flex items-center justify-center pt-[2rem]">
                          <button
                            onClick={() =>
                              handleArrowClick("left", pendingScrollRef)
                            }
                            className="absolute left-[1rem] rounded-full bg-white p-2 opacity-50 hover:opacity-80"
                            style={{ zIndex: 10 }}
                          >
                            &lt;
                          </button>

                          <div
                            ref={pendingScrollRef}
                            className="max-w-[73rem] cursor-grab overflow-x-auto scroll-smooth pb-[2rem] scrollbar-hide"
                            onMouseDown={(e) =>
                              handleMouseDown(e, pendingScrollRef)
                            }
                            onMouseMove={(e) =>
                              handleMouseMove(e, pendingScrollRef)
                            }
                            onMouseUp={handleMouseUpOrLeave}
                            onMouseLeave={handleMouseUpOrLeave}
                            style={{ userSelect: "none" }}
                          >
                            <div className="flex gap-4">
                              {pendingPhotos.map((photo) => (
                                <div
                                  key={photo.id}
                                  className={`flex min-w-[150px] flex-col items-center rounded-lg bg-[#E1067B] p-4 shadow-custom-black`}
                                >
                                  <Image
                                    src={photo.photo}
                                    alt="Avatar"
                                    width={300}
                                    height={300}
                                    draggable={false}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>

                          <button
                            onClick={() =>
                              handleArrowClick("right", pendingScrollRef)
                            }
                            className="absolute right-[1rem] rounded-full bg-white p-2 opacity-50 hover:opacity-80"
                            style={{ zIndex: 10 }}
                          >
                            &gt;
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>)}
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default PhotosStatus;
