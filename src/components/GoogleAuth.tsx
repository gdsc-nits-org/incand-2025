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
        <div className="h-[40px] w-full">
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
        onClick={() => {
          router.push("/Dashboard");
        }}
      >
        <div
          className="absolute ml-0.5 mt-[-7] h-9 w-9 overflow-hidden rounded-l-lg"
          style={{ backgroundColor: "#FF676B" }}
        >
          {_user.photoURL && (
            <Image
              className="ml-1 mt-1.5"
              src={_user.photoURL}
              height={25}
              width={25}
              alt="avatar"
            />
          )}
        </div>
        <span
          className="ml-10 font-oxygen text-[0.5vw] font-semibold"
          style={{
            color: "#562828",
          }}
        >
          @{_user.displayName}
        </span>
      </button>
    );
  }
};

export default Login;
