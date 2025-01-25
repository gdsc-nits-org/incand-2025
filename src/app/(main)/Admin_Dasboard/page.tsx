"use client";

import Image from "next/image";
export const runtime = "edge";
import { useState, useRef } from "react";
import { useEffect } from "react";

const AdminDashboard = () => {


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


  const handleAccept = (id: number) => {
    console.log(`Accepted person ${id}`);
  };

  const handleReject = (id: number) => {
    console.log(`Rejected person ${id}`);
  };

  return (
    <>
      {isLap && (
        <>
          <div className="bg-blue-100 min-h-screen p-8">

            <header className="text-center mb-10">
              <h1 className="text-[4rem] font-rocket text-[#FAE00D] "> <span className="text-shadow ">ADMIN DASHBOARD</span></h1>
              <div className="flex flex-row mt-4 items-center">
                <Image
                  src="/assets/About/dj.gif"
                  alt="Admin Avatar"
                  width={100}
                  height={100}
                  className="rounded-full h-[10rem] w-[10rem] "
                />
                <div className="pl-[3rem] flex-col  relative ">
                  <p className="text-[2rem] font-rocket text-start ">PIYUSH CHATTERJEE <br /><span className="text-[1.5rem] font-thin ">piyush.chatterjee64@gmail.com</span></p>
                </div>
              </div>
            </header>


            <div className="grid grid-cols-3 gap-6">
              {Array.from({ length: 9 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center border-2 border-black "
                >

                  <Image
                    src="/assets/UserDashboard/user.jpg"
                    alt={`Person ${index + 1}`}
                    width={100}
                    height={100}
                    className="rounded-md"
                  />

                  <div className="flex justify-evenly mt-4 w-full">
                    <button
                      onClick={() => handleAccept(index)}
                      className="bg-green-500 text-white py-1 px-3 rounded-md hover:bg-green-600 transition"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleReject(index)}
                      className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
        {isPhone && (
        <>
          <div className="bg-blue-100 scale-[1] min-h-screen p-8">

            <header className="text-center mb-10">
              <h1 className="text-[4rem] font-rocket text-[#FAE00D] "> <span className="text-shadow ">ADMIN DASHBOARD</span></h1>
              <div className="flex flex-row mt-4 items-center">
                <Image
                  src="/assets/About/dj.gif"
                  alt="Admin Avatar"
                  width={100}
                  height={100}
                  className="rounded-full h-[5.5rem] w-[5.5rem] "
                />
                <div className="pl-[2.5rem] flex-col  relative ">
                  <p className="text-[1.5rem] font-rocket text-start ">PIYUSH CHATTERJEE <br /><span className="text-[1rem] font-thin ">piyush.chatterjee64@gmail.com</span></p>
                </div>
              </div>
            </header>


            <div className="grid grid-cols-3 gap-6">
              {Array.from({ length: 9 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center border-2 border-black "
                >

                  <Image
                    src="/assets/UserDashboard/user.jpg"
                    alt={`Person ${index + 1}`}
                    width={100}
                    height={100}
                    className="rounded-md"
                  />

                  <div className="flex justify-evenly relative left-[-1.57rem] top-[1rem] mt-4 w-full scale-[0.57]">
                    <button
                      onClick={() => handleAccept(index)}
                      className="bg-green-500 text-white py-1 px-3 rounded-md hover:bg-green-600 transition"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleReject(index)}
                      className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
          {isAir && (
        <>
          <div className="bg-blue-100 min-h-screen p-8">

            <header className="text-center mb-10">
              <h1 className="text-[4rem] font-rocket text-[#FAE00D] "> <span className="text-shadow ">ADMIN DASHBOARD</span></h1>
              <div className="flex flex-row mt-4 items-center">
                <Image
                  src="/assets/About/dj.gif"
                  alt="Admin Avatar"
                  width={100}
                  height={100}
                  className="rounded-full h-[10rem] w-[10rem] "
                />
                <div className="pl-[3rem] flex-col  relative ">
                  <p className="text-[2rem] font-rocket text-start ">PIYUSH CHATTERJEE <br /><span className="text-[1.5rem] font-thin ">piyush.chatterjee64@gmail.com</span></p>
                </div>
              </div>
            </header>


            <div className="grid grid-cols-3 gap-6">
              {Array.from({ length: 9 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center border-2 border-black "
                >

                  <Image
                    src="/assets/UserDashboard/user.jpg"
                    alt={`Person ${index + 1}`}
                    width={100}
                    height={100}
                    className="rounded-md"
                  />

                  <div className="flex justify-evenly mt-4 w-full">
                    <button
                      onClick={() => handleAccept(index)}
                      className="bg-green-500 text-white py-1 px-3 rounded-md hover:bg-green-600 transition"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleReject(index)}
                      className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
            {isIpad && (
        <>
          <div className="bg-blue-100 min-h-screen p-8">

            <header className="text-center mb-10">
              <h1 className="text-[4rem] font-rocket text-[#FAE00D] "> <span className="text-shadow ">ADMIN DASHBOARD</span></h1>
              <div className="flex flex-row mt-4 items-center">
                <Image
                  src="/assets/About/dj.gif"
                  alt="Admin Avatar"
                  width={100}
                  height={100}
                  className="rounded-full h-[10rem] w-[10rem] "
                />
                <div className="pl-[3rem] flex-col  relative ">
                  <p className="text-[2rem] font-rocket text-start ">PIYUSH CHATTERJEE <br /><span className="text-[1.5rem] font-thin ">piyush.chatterjee64@gmail.com</span></p>
                </div>
              </div>
            </header>


            <div className="grid grid-cols-3 gap-6">
              {Array.from({ length: 9 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center border-2 border-black "
                >

                  <Image
                    src="/assets/UserDashboard/user.jpg"
                    alt={`Person ${index + 1}`}
                    width={100}
                    height={100}
                    className="rounded-md"
                  />

                  <div className="flex justify-evenly scale-[1.2] mt-4 w-full">
                    <button
                      onClick={() => handleAccept(index)}
                      className="bg-green-500 text-white py-1 px-3 rounded-md hover:bg-green-600 transition"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleReject(index)}
                      className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AdminDashboard;
