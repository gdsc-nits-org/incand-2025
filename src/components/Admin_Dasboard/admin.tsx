"use client";

import Image from "next/image";
export const runtime = "edge";
import { useState, useEffect } from "react";
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
  userId: string;
  User: {
    name: string;
    email: string;
    letters: string;
    factors: string;
    level: number;
    currAssigned: string;
    additiveA: number;
    additiveE: number;
    additiveF: number;
  }
}

interface ApiResponse {
  status: number;
  msg: UserResponse;
}

interface SubmissionsResponse {
  status: number;
  msg: UserSubmissions[];
}


const AdminDashboard = () => {
  const [_user] = useAuthState(auth);
  const [user, setUser] = useState<UserResponse>()
  const [allSubmissions, setAllSubmissions] = useState<UserSubmissions[]>([]);
  const [isPhone, setIsPhone] = useState(false);
  const [isIpad, setIsIpad] = useState(false);
  const [isAir, setIsAir] = useState(false);
  const [isLap, setIsLap] = useState(false);
  const [isClient, setIsClient] = useState(false);

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

    fetchUserData();
  }, [_user]);

  useEffect(() => {
    const fetchUserSubmissions = async () => {
      if (_user) {
        try {
          const token = await _user.getIdToken();
          const Submissions = await axios.get<SubmissionsResponse>(
            `${env.NEXT_PUBLIC_API_URL}/api/submissions/pending`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          );
          console.log(Submissions.data.msg);
          setAllSubmissions(Submissions.data.msg);

        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserSubmissions();
  }, [_user]);

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

  const handleAccept = async (id: string, userId: string, currAssigned: string, letters: string, factors: string, level: number, additiveA: number, additiveE: number, additiveF: number) => {
    try {
      const token = await _user?.getIdToken();
      const accept = await axios.patch(`${env.NEXT_PUBLIC_API_URL}/api/submissions/${id}/accept`,
        {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      if (accept) {
        const assign = await axios.patch(`${env.NEXT_PUBLIC_API_URL}/api/user/update`, {
          id: userId,
          lastAssigned: currAssigned,
          letters: letters,
          factors: factors,
          level: level,
          additiveA: additiveA,
          additiveE: additiveE,
          additiveF: additiveF
        })
        if(assign){
          console.log("Letters Assigned!!");
        }
      }
      window.location.reload();
    }
    catch (err: any) {
    console.error(err);
  }
};

const handleReject = async (id: string) => {
  try {
    const token = await _user?.getIdToken();
    const reject = await axios.delete(`${env.NEXT_PUBLIC_API_URL}/api/submissions/${id}/delete`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    if (reject) {
      console.log("Submission Rejected Successfully!!");
      window.location.reload();
    }
  }
  catch (err) {
    console.error("Error in rejecting submission,", err);
  }
};

return (
  <>
    {isLap && (
      <>
        <div className="min-h-screen overflow-hidden bg-blue-100 p-8">
          <header className="mb-10 text-center">
            <h1 className="font-rocket text-[4rem] text-[#FAE00D]">
              {" "}
              <span className="text-shadow">ADMIN DASHBOARD</span>
            </h1>
            <div className="mt-4 flex flex-row items-center">
              <Image
                src={user ? user.pic : "/assets/About/dj.gif"}
                alt="Admin Avatar"
                width={100}
                height={100}
                className="h-[10rem] w-[10rem] rounded-full"
              />
              <div className="relative flex-col pl-[3rem]">
                <p className="text-start font-rocket text-[2rem]">
                  {user?.name} <br />
                  <span className="text-[1.5rem] font-thin">
                    {user?.email}
                  </span>
                </p>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-3 gap-6">
            {allSubmissions.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-xl border-2 border-black bg-white p-4 shadow-md"
              >
                <Image
                  src={item.photo}
                  alt={`Person ${index + 1}`}
                  width={100}
                  height={100}
                  className="rounded-md"
                />

                <div className="mt-4 flex w-full justify-evenly">
                  <button
                    onClick={() => handleAccept(item.id, item.userId, item.User.currAssigned, item.User.letters, item.User.factors, item.User.level, item.User.additiveA, item.User.additiveE, item.User.additiveF)}
                    className="rounded-md bg-green-500 px-3 py-1 text-white transition hover:bg-green-600"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleReject(item.id)}
                    className="rounded-md bg-red-500 px-3 py-1 text-white transition hover:bg-red-600"
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
        <div className="min-h-screen scale-[1] bg-blue-100 p-8">
          <header className="mb-10 text-center">
            <h1 className="flex items-center justify-center text-center font-rocket text-[4rem] text-[#FAE00D] mobile:scale-[0.8] mobile2:scale-[1]">
              <span className="text-shadow">ADMIN DASHBOARD</span>
            </h1>
            <div className="mt-4 flex flex-row items-center">
              <Image
                src="/assets/About/dj.gif"
                alt="Admin Avatar"
                width={100}
                height={100}
                className="h-[5.5rem] w-[5.5rem] rounded-full"
              />
              <div className="relative flex-col pl-[2.5rem] mobile:scale-[0.8] mobile2:scale-[1]">
                <p className="text-start font-rocket text-[1.5rem]">
                  PIYUSH CHATTERJEE <br />
                  <span className="font-thin mobile:text-[0.9rem] mobile2:text-[1rem]">
                    piyush.chatterjee64@gmail.com
                  </span>
                </p>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-xl border-2 border-black bg-white p-4 shadow-md"
              >
                <Image
                  src="/assets/UserDashboard/user.jpg"
                  alt={`Person ${index + 1}`}
                  width={100}
                  height={100}
                  className="rounded-md"
                />

                <div className="relative left-[-1.57rem] top-[1rem] mt-4 flex w-full scale-[0.57] justify-evenly mobile:scale-[0.535] mobile2:space-x-2">
                  <button
                    onClick={() => handleAccept(index)}
                    className="rounded-md bg-green-500 px-3 py-1 text-white transition hover:bg-green-600"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleReject(index)}
                    className="rounded-md bg-red-500 px-3 py-1 text-white transition hover:bg-red-600"
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
        <div className="min-h-screen bg-blue-100 p-8">
          <header className="mb-10 text-center">
            <h1 className="flex items-center justify-center font-rocket text-[4rem] text-[#FAE00D]">
              {" "}
              <span className="text-shadow">ADMIN DASHBOARD</span>
            </h1>
            <div className="mt-4 flex flex-row items-center">
              <Image
                src="/assets/About/dj.gif"
                alt="Admin Avatar"
                width={100}
                height={100}
                className="h-[10rem] w-[10rem] rounded-full"
              />
              <div className="relative flex-col pl-[3rem]">
                <p className="text-start font-rocket mobile3:text-[1.7rem] tablet:text-[2rem]">
                  PIYUSH CHATTERJEE <br />
                  <span className="font-thin mobile3:text-[1.2rem] tablet:text-[1.5rem]">
                    piyush.chatterjee64@gmail.com
                  </span>
                </p>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-xl border-2 border-black bg-white p-4 shadow-md"
              >
                <Image
                  src="/assets/UserDashboard/user.jpg"
                  alt={`Person ${index + 1}`}
                  width={100}
                  height={100}
                  className="rounded-md"
                />

                <div className="mt-4 flex w-full mobile3:scale-[0.7] mobile3:justify-center mobile3:space-x-2 tablet:scale-[1] tablet:justify-evenly">
                  <button
                    onClick={() => handleAccept(index)}
                    className="rounded-md bg-green-500 px-3 py-1 text-white transition hover:bg-green-600"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleReject(index)}
                    className="rounded-md bg-red-500 px-3 py-1 text-white transition hover:bg-red-600"
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
        <div className="min-h-screen bg-blue-100 p-8">
          <header className="mb-10 text-center">
            <h1 className="font-rocket text-[4rem] text-[#FAE00D]">
              {" "}
              <span className="text-shadow">ADMIN DASHBOARD</span>
            </h1>
            <div className="mt-4 flex flex-row items-center">
              <Image
                src="/assets/About/dj.gif"
                alt="Admin Avatar"
                width={100}
                height={100}
                className="h-[10rem] w-[10rem] rounded-full"
              />
              <div className="relative flex-col pl-[3rem]">
                <p className="text-start font-rocket text-[2rem]">
                  PIYUSH CHATTERJEE <br />
                  <span className="text-[1.5rem] font-thin">
                    piyush.chatterjee64@gmail.com
                  </span>
                </p>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-xl border-2 border-black bg-white p-4 shadow-md"
              >
                <Image
                  src="/assets/UserDashboard/user.jpg"
                  alt={`Person ${index + 1}`}
                  width={100}
                  height={100}
                  className="rounded-md"
                />

                <div className="mt-4 flex w-full scale-[1.2] justify-evenly">
                  <button
                    onClick={() => handleAccept(index)}
                    className="rounded-md bg-green-500 px-3 py-1 text-white transition hover:bg-green-600"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleReject(index)}
                    className="rounded-md bg-red-500 px-3 py-1 text-white transition hover:bg-red-600"
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
