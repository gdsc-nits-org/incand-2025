"use client";

import { toast } from "sonner";
import { env } from "~/env";
import { ImCross } from "react-icons/im";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";
import { auth } from "~/app/utils/firebase";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "~/styles/Game.module.css";
import GameTabView from "~/components/Game/GameTabView";
import GameMobileView from "~/components/Game/GameMobileView";
import Login from "~/components/GoogleAuth";

export const runtime = "edge";

interface UserResponse {
  name: string;
  email: string;
  pic: string;
  id: string;
  letters: string;
  level: number;
  flag: Date;
}
interface apiResponse {
  status: number;
  msg: UserResponse;
}

interface leaderBoardApiResponse {
  status: number;
  msg: UserResponse[];
}

const Game = () => {
  const [_user, loading] = useAuthState(auth);
  const [uploadPopup, setUploadPopup] = useState(false);
  const [imageSelected, setImageSelected] = useState(false);
  const [fileName, setFileName] = useState("");
  const [isTabView, setIsTabView] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [lettersHaving, setLettersHaving] = useState("000000");
  const [level, setLevel] = useState(0);
  const [top10Players, setTop10Placers] = useState<
    { name: string; pic: string; letters: string; level: number; flag: Date }[]
  >([]);

  // useEffect(() => {
  //   if (!loading && !_user) {
  //     toast.warning("Please Login!");
  //     router.push("/");
  //   }
  // }, [_user, loading, router]);

  useEffect(() => {
    const checkViewport = () => {
      if (window.innerWidth < 1180 && window.innerWidth >= 768) {
        if (window.innerWidth > window.innerHeight) {
          setIsTabView(false);
        } else {
          setIsTabView(true);
        }
      }
    };
    checkViewport();
    window.addEventListener("resize", checkViewport);

    return () => window.removeEventListener("resize", checkViewport);
  }, [isTabView]);

  useEffect(() => {
    const getUser = async () => {
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
            return;
          } else {
            setLevel(userResponse.data.msg.level);
            setLettersHaving(userResponse.data.msg.letters);
          }
        } catch (error) {
          toast.error("Error fetching collections. Please try again.");
        }
      }
    };

    if (_user) {
      void getUser();
    }

    const checkLeaderboard = async () => {
      if (_user) {
        try {
          const response = await axios.get<leaderBoardApiResponse>(
            `${env.NEXT_PUBLIC_API_URL}/api/leaderboard`,
          );
          const users = response.data.msg;
          const top10 = users.sort((a, b) => b.level - a.level).slice(0, 10);
          setTop10Placers(top10);
        } catch (e) {
          toast.error("Error fetching leaderboard");
        }
      }
    };
    void checkLeaderboard();
  }, [_user]);

  const handleImageUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;
    setUploading(true);
    const formData = new FormData();
    formData.append("uploaded_file", file);
    toast.promise(
      (async () => {
        const token = await _user?.getIdToken();
        return axios.post(
          `${env.NEXT_PUBLIC_API_URL}/api/submissions/upload`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          },
        );
      })(),
      {
        loading: "Uploading image...",
        success: "Image uploaded successfully!",
        error: "Failed to upload image. Please try again.",
      },
    );

    setUploading(false);
    setUploadPopup(false);
    setImageSelected(false);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleFile = (file: File) => {
    if (file?.type?.startsWith("image/")) {
      if (file.size > 5 * 1024 * 1024) {
        toast.info("Please upload a file less than 5mb.");
        return;
      }
      setImageSelected(true);
      setFileName(file.name);
      setFile(file);
    } else {
      toast.error("Please upload a valid image file (jpg, jpeg, png).");
      return;
    }
  };

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target?.files;
    if (!files?.[0]?.type.startsWith("image/")) {
      toast.warning("Please upload a valid image file.");
      return;
    }
    const file = files[0];
    handleFile(file);
  };

  return (
    <>
      {!_user && !loading && (
        <section className="l absolute z-50 flex h-screen w-screen flex-col items-center justify-center gap-4 bg-[#000000B5]">
          <h1 className="font-tusker text-sm text-white tablet:text-xl">
            You Need to Login to Play the Game
          </h1>
          <div
            className={`ease-linaer flex h-auto min-h-10 w-auto min-w-32 scale-100 items-center rounded-lg bg-white shadow-[8px_8px_0px_black] transition-transform duration-300 hover:-translate-x-2 hover:-translate-y-2 hover:scale-110`}
          >
            <Login />
          </div>
        </section>
      )}
      <div
        className={`flex flex-col overflow-hidden bg-black`}
        style={
          _user || loading
            ? {}
            : {
                height: "100vh",
                overflow: "hidden",
                filter: "blur(10px)",
              }
        }
      >
        {uploadPopup && (
          <div className="fixed top-0 z-10 flex h-screen w-screen items-center justify-center bg-[#FAE00D]">
            <div
              className={`absolute h-full w-screen bg-[url('/assets/Game/maze_white_one.webp')] bg-cover bg-center bg-no-repeat md:inset-0 md:bg-cover`}
            ></div>
            <div className="relative flex w-[80%] max-w-[800px] flex-col items-center rounded-2xl border-[4px] border-black bg-white shadow-[20px_20px_0px_#FFA5D5E5] sm:shadow-[30px_30px_0px_#FFA5D5E5] fourK:max-w-[1600px] fourK:rounded-3xl fourK:shadow-[60px_60px_0px_#FFA5D5E5]">
              <svg
                className="absolute left-0 top-0 z-10 w-28 translate-x-[-30%] translate-y-[-40%] sm:w-40 sm:translate-x-[-40%] fourK:w-56"
                viewBox="0 0 203 96"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="motionPath"
                  d="M196.179 4.39374C196.584 5.30243 196.562 6.53166 195.868 8.18512C195.174 9.8381 193.859 11.7796 191.914 13.9741C188.03 18.3572 181.815 23.5451 173.701 29.2023C157.49 40.5055 133.893 53.5465 106.758 65.6281C79.6223 77.7096 54.1418 86.519 34.8943 91.0032C25.2611 93.2475 17.2473 94.3943 11.3907 94.3484C8.45852 94.3254 6.13603 94.0031 4.44318 93.4129C2.74984 92.8225 1.82209 92.0158 1.41751 91.1071C1.01293 90.1984 1.03424 88.9692 1.72854 87.3157C2.42265 85.6628 3.73724 83.7212 5.68217 81.5267C9.56683 77.1437 15.7814 71.9557 23.895 66.2986C40.1066 54.9953 63.703 41.9543 90.8386 29.8728C117.974 17.7912 143.455 8.98181 162.702 4.49763C172.335 2.25335 180.349 1.10651 186.206 1.15248C189.138 1.17549 191.46 1.49771 193.153 2.08795C194.847 2.67836 195.774 3.48504 196.179 4.39374Z"
                  stroke="black"
                  stroke-width="2.3023"
                />
                <circle r="6.9069" fill="#FFA6F6">
                  <animateMotion repeatCount="indefinite" dur="5s">
                    <mpath href="#motionPath" />
                  </animateMotion>
                </circle>
              </svg>

              <div className="relative flex w-full flex-row items-center gap-1 rounded-t-2xl border-b-2 border-black bg-[#FFF59F] px-5 py-5 fourK:gap-2 fourK:rounded-t-3xl fourK:px-8 fourK:py-8">
                <div className="h-5 w-5 rounded-full bg-[#FFA6F6] fourK:h-8 fourK:w-8"></div>
                <div className="h-5 w-5 rounded-full bg-[#FFA6F6] fourK:h-8 fourK:w-8"></div>
                <div className="h-5 w-5 rounded-full bg-[#FFA6F6] fourK:h-8 fourK:w-8"></div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setUploadPopup(false);
                    setImageSelected(false);
                  }}
                  className="absolute right-4 rounded-xl border-[3px] border-black px-3 py-2 transition-all duration-200 hover:scale-[1.1]"
                >
                  <ImCross className="fourK:h-8 fourK:w-8" />
                  {}
                </button>
              </div>
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageSelect}
              />
              <p
                className={
                  "mx-4 mt-6 text-center text-2xl tracking-wider text-[#FFA6F6] sm:text-3xl fourK:text-6xl " +
                  styles.uploadText
                }
                style={{ fontFamily: "Tusker Grotesk" }}
              >
                UPLOAD YOUR IMAGE
              </p>
              <p
                className={
                  "text-md mx-4 mt-2 text-center font-extrabold text-[#919191] sm:text-xl fourK:mt-4 fourK:text-4xl"
                }
                style={{ fontFamily: "Oxygen" }}
              >
                Select only one file at a time
              </p>
              {imageSelected && (
                <div className="flex flex-col items-center justify-center">
                  <div className="mx-2 mb-12 mt-12 flex flex-wrap items-center justify-center rounded-lg border-4 border-dashed border-[#919191] px-8 py-4 sm:px-36 fourK:mb-24 fourK:mt-24 fourK:px-72 fourK:py-8">
                    <div className="relative z-[1] w-10 transition-all duration-200 hover:scale-[1.2] fourK:w-24">
                      <Image
                        className={`object-contain`}
                        src="/assets/Game/imagePreview.webp"
                        layout="responsive"
                        width={100}
                        height={100}
                        alt="logo"
                      />
                    </div>
                    <p
                      className="text-md mx-2 text-center font-extrabold tracking-wider text-[#919191] sm:text-lg fourK:ms-6 fourK:text-3xl"
                      style={{
                        fontFamily: "Oxygen",
                        whiteSpace: "normal",
                        wordBreak: "break-word",
                      }}
                    >
                      {fileName}
                    </p>
                  </div>
                  <button
                    onClick={handleImageUpload}
                    className="sm:text-md mb-16 rounded-3xl bg-black px-10 py-2 text-sm font-bold text-white transition-all duration-200 hover:scale-[1.1] fourK:mb-32 fourK:rounded-[50px] fourK:px-20 fourK:py-6 fourK:text-3xl"
                    style={{ fontFamily: "Oxygen" }}
                  >
                    {uploading ? "Uploading..." : "Done"}
                  </button>{" "}
                </div>
              )}
              {!imageSelected && (
                <div
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  className="mx-2 mb-8 mt-6 flex flex-col items-center justify-center rounded-2xl border-4 border-dashed border-[#919191] px-8 py-4 fourK:mt-12 fourK:px-16 fourK:py-8"
                >
                  <button
                    onClick={() =>
                      document.getElementById("fileInput")!.click()
                    }
                    className="relative z-[1] w-28 transition-all duration-200 hover:scale-[1.2] fourK:w-56"
                  >
                    {}
                    <Image
                      className={`object-contain`}
                      src="/assets/Game/camera_icon.webp"
                      layout="responsive"
                      width={100}
                      height={100}
                      alt="logo"
                    />
                  </button>
                  <p
                    className="z-[2] text-center text-sm font-extrabold text-[#55555566] sm:text-xl fourK:text-4xl"
                    style={{ fontFamily: "Oxygen" }}
                  >
                    Drag & Drop Your Files Here
                    <br />
                    OR
                    <br />
                    Browse Your Image
                  </p>
                  <p
                    className="z-[2] my-2 text-center text-[10px] font-extrabold text-red-500 sm:text-sm fourK:text-xl"
                    style={{ fontFamily: "Oxygen" }}
                  >
                    <strong>Note:</strong> Only (jpg, jpeg, png) format
                    supported. Max size: 5mb
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
        {isTabView ? (
          <GameMobileView
            level={level}
            lettersHaving={lettersHaving}
            top10Players={top10Players}
            setUploadPopup={setUploadPopup}
          />
        ) : (
          <GameTabView
            level={level}
            lettersHaving={lettersHaving}
            top10Players={top10Players}
            setUploadPopup={setUploadPopup}
          />
        )}
      </div>
    </>
  );
};

export default Game;
