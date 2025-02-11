"use client";

import { useSignInWithGoogle, useAuthState } from "react-firebase-hooks/auth";
import { auth } from "~/app/utils/firebase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { env } from "~/env";

const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [_user] = useAuthState(auth);
  const [userExists, setUserExists] = useState<boolean>(false);
  const router = useRouter();

  interface UserResponse {
    name: string;
    email: string;
    photo: string;
    id: string;
    letters: string;
    level: number;
  }
  interface apiResponse {
    status: number;
    msg: UserResponse;
  }

  useEffect(() => {
    const checkUserExists = async () => {
      if (_user) {
        try {
          const token = await _user.getIdToken();
          const userResponse = await axios.get<apiResponse>(
            `${env.NEXT_PUBLIC_API_URL}/api/user/me`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          );
          if (userResponse.data.status === 404) {
            setUserExists(false); // User does not exist
          } else {
            setUserExists(true); // User exists
          }
        } catch (error) {
          console.error("Error checking if user exists:", error);
        }
      }
    };

    if (_user) {
      void checkUserExists();
    }
  }, [_user]);

  // Second useEffect: Create user if they do not exist
  useEffect(() => {
    const createUser = async () => {
      if (_user && !userExists) {
        try {
          const token = await _user.getIdToken();
          await axios.post(
            `${env.NEXT_PUBLIC_API_URL}/api/user/create`,
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          );
          console.log("User created successfully.");
        } catch (error) {
          console.error("Error creating user:", error);
        }
      }
    };

    if (_user && !userExists) {
      void createUser();
    }
  }, [_user, userExists]);

  if (!_user) {
    return (
      <button className="" onClick={() => signInWithGoogle()}>
        <div className="h-[40px] w-full 4k:h-[60px]">
          {/* Blue Layer */}
          <div
            className="absolute h-full w-full rounded-lg bg-blue-500"
            style={{
              transform: "translate(8px, 8px)",
              boxShadow: "2px 2px 0 black",
              zIndex: 1,
            }}
          ></div>
          {/* Yellow Layer */}
          <div
            className="absolute h-full w-full rounded-lg bg-yellow-400"
            style={{
              transform: "translate(4px, 4px)",
              boxShadow: "0px 2px 0 black",
              zIndex: 2,
            }}
          ></div>
          {/* Red Layer */}
          <div
            className="absolute flex h-full w-full items-center justify-center rounded-lg bg-red-400"
            style={{
              transform: "translate(0, 0)",
              boxShadow: "0 2px 0 black",
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
        className="flex h-full w-full items-center justify-center rounded-lg p-[1px]"
        onClick={() => {
          router.push("/Dashboard");
        }}
      >
        {_user.photoURL && (
          <Image
            className="h-10 w-10 rounded-bl-lg rounded-tl-lg bg-[#FF676B] p-1 4k:h-20 4k:w-20"
            src={_user.photoURL}
            height={25}
            width={25}
            alt="avatar"
          />
        )}
        <span className="w-auto text-nowrap px-4  text-sm font-semibold text-black ipadair:text-[1.2rem] 4k:text-2xl"
          style={{ fontFamily: "Rocket Thunder" }}>
          {_user.displayName}
        </span>
      </button>
    );
  }
};

export default Login;
