/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import { useSignInWithGoogle, useAuthState } from "react-firebase-hooks/auth";
import { auth } from "~/app/utils/firebase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import { toast } from "sonner";
import axios, { AxiosError } from "axios";
import { env } from "~/env";



const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [_user, _loading, _error] = useAuthState(auth);
  const router = useRouter();
  const bigScreen = useMediaQuery("(min-width: 768px)");
  const [userName, setUserName] = useState("Priz");
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (bigScreen) {
    if (!_user) {
      return (
       
           <button
          className=""
          onClick={() => signInWithGoogle()}
        >
          <div className="relative h-[40px] w-full">
              {/* Blue Layer */}
              <div
                className="absolute h-full w-full rounded-lg bg-blue-500"
                style={{
                  transform: "translate(8px, 8px)",
                  boxShadow: "2px 2px 0 black", // Proper shadow for bottom effect
                  zIndex: 1,
                }}
              ></div>
              {/* Yellow Layer */}
              <div
                className="absolute h-full w-full rounded-lg bg-yellow-400"
                style={{
                  transform: "translate(4px, 4px)",
                  boxShadow: "0px 2px 0 black", // Proper shadow for bottom effect
                  zIndex: 2,
                }}
              ></div>
              {/* Red Layer */}
              <div
                className="absolute flex h-full w-full items-center justify-center rounded-lg bg-red-400"
                style={{
                  transform: "translate(0, 0)", // No offset for the topmost layer
                  boxShadow: "0 2px 0 black", // Black outline
                  zIndex: 3,
                }}
              >
                <span
                  className="font-semibold text-black"
                  style={{ fontFamily: "'Oxygen', sans-serif" }}
                >
                  Sign-Up
                </span>
              </div>
            </div>
        </button>
      );
    } else {
      return (
        
          <button
            onClick={() => {
              router.push("/");
            }}
          >
              <div
                            className="absolute ml-0.5 mt-[-7.5] h-10 w-10 overflow-hidden rounded-l-lg"
                            style={{ backgroundColor: "#FF676B" }}
                          >
                            {_user?.photoURL && (
              <Image
                className="mt-2 ml-1.5"
                src={_user.photoURL}
                height={26}
                width={26}
                alt="avater"
              ></Image>
            )}
                          </div>
                          <span
                            className="ml-12 font-oxygen font-semibold"
                            style={{ color: "#562828" }}
                          >
                            @{userName}
                          </span>
         
          </button>
        
      );
    }
  }
  
    
  }

export default Login;

