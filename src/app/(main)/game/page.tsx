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
import Footer from "~/components/Footer/Footer";
import GameTabView from "~/components/Game/GameTabView";
import GameMobileView from "~/components/Game/GameMobileView";

const Game = () => {
  const [_user] = useAuthState(auth);
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




  useEffect(() => {
    const checkViewport = () => {
      if(window.innerWidth<1180 && window.innerWidth>=768){
        if(window.innerWidth>window.innerHeight){
           setIsTabView(false);
        }else{
           setIsTabView(true);
        }
      }
    }
    checkViewport();
    window.addEventListener("resize", checkViewport);

    return () => window.removeEventListener("resize", checkViewport);
  },[isTabView]);


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
      try{
        const response = await axios.get<leaderBoardApiResponse>(`${env.NEXT_PUBLIC_API_URL}/api/leaderboard`);
        const users = response.data.msg;
        const top10 = users.sort((a, b) => b.level - a.level).slice(0, 10);
        setTop10Placers(top10);
      }catch(e){
        toast.error("Error fetching leaderboard");
      }
    }
    void checkLeaderboard();
 

  }, [_user]);


  const handleImageUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;
  
    setUploading(true);
  
    const formData = new FormData();
    formData.append("uploaded_file", file);
  
    await toast.promise(
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
          }
        );
      })(),
      {
        loading: "Uploading image...",
        success: "Image uploaded successfully!",
        error: "Failed to upload image. Please try again.",
      }
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
    <div className={`flex flex-col overflow-hidden`}>

      {uploadPopup && (<div className="fixed top-0 flex items-center justify-center bg-[#FAE00D] w-screen h-screen z-10">
      <div className={`absolute h-full w-screen bg-[url('/assets/Game/maze_white_one.png')] bg-cover bg-center bg-no-repeat md:inset-0 md:bg-cover`}></div>
      <div className="relative flex flex-col items-center bg-white border-black border-[4px] rounded-2xl fourK:rounded-3xl max-w-[800px] fourK:max-w-[1600px] w-[80%] sm:shadow-[30px_30px_0px_#FFA5D5E5] shadow-[20px_20px_0px_#FFA5D5E5] fourK:shadow-[60px_60px_0px_#FFA5D5E5]">
      <svg className="absolute z-10 left-0 sm:translate-x-[-40%] translate-x-[-30%] translate-y-[-40%] top-0 sm:w-40 w-28  fourK:w-56"viewBox="0 0 203 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="motionPath" d="M196.179 4.39374C196.584 5.30243 196.562 6.53166 195.868 8.18512C195.174 9.8381 193.859 11.7796 191.914 13.9741C188.03 18.3572 181.815 23.5451 173.701 29.2023C157.49 40.5055 133.893 53.5465 106.758 65.6281C79.6223 77.7096 54.1418 86.519 34.8943 91.0032C25.2611 93.2475 17.2473 94.3943 11.3907 94.3484C8.45852 94.3254 6.13603 94.0031 4.44318 93.4129C2.74984 92.8225 1.82209 92.0158 1.41751 91.1071C1.01293 90.1984 1.03424 88.9692 1.72854 87.3157C2.42265 85.6628 3.73724 83.7212 5.68217 81.5267C9.56683 77.1437 15.7814 71.9557 23.895 66.2986C40.1066 54.9953 63.703 41.9543 90.8386 29.8728C117.974 17.7912 143.455 8.98181 162.702 4.49763C172.335 2.25335 180.349 1.10651 186.206 1.15248C189.138 1.17549 191.46 1.49771 193.153 2.08795C194.847 2.67836 195.774 3.48504 196.179 4.39374Z" stroke="black" stroke-width="2.3023"/>
<circle r="6.9069" fill="#FFA6F6">
              <animateMotion repeatCount="indefinite" dur="5s">
                    <mpath href="#motionPath" />
                  </animateMotion>
</circle>
</svg>

      <div className="flex relative px-5 py-5 fourK:px-8 fourK:py-8 rounded-t-2xl fourK:rounded-t-3xl border-b-2 border-black w-full flex-row items-center gap-1 fourK:gap-2 bg-[#FFF59F]">
              <div className="h-5 w-5 fourK:h-8 fourK:w-8 rounded-full bg-[#FFA6F6]"></div>
              <div className="h-5 w-5 fourK:h-8 fourK:w-8 rounded-full bg-[#FFA6F6]"></div>
              <div className="h-5 w-5 fourK:h-8 fourK:w-8 rounded-full bg-[#FFA6F6]"></div>
              <button  onClick={(e) => {e.preventDefault();setUploadPopup(false);setImageSelected(false);}} className="absolute hover:scale-[1.1] transition-all duration-200 right-4 px-3 py-2 rounded-xl border-black border-[3px]">
              <ImCross className="fourK:w-8 fourK:h-8"/>
              </button>
            </div>
            <input
          type="file"
          id="fileInput"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageSelect}
        />
       <p className={"sm:text-3xl fourK:text-6xl text-2xl text-[#FFA6F6] tracking-wider text-center mt-6 mx-4 " + styles.uploadText} style={{fontFamily: "Tusker Grotesk"}}>UPLOAD YOUR IMAGE</p> 
       <p className={"sm:text-xl fourK:text-4xl text-md text-[#919191] text-center mt-2 fourK:mt-4 mx-4 font-extrabold "} style={{fontFamily: "Oxygen"}}>Select only one file at a time</p>
       {imageSelected &&(<div className="flex flex-col items-center justify-center"><div className="fourK:py-8 fourK:px-72 py-4 sm:px-36 px-8 mx-2 flex flex-wrap items-center justify-center rounded-lg border-[#919191] border-dashed border-4 mt-12 mb-12 fourK:mt-24 fourK:mb-24 ">
       <div className="relative w-10 fourK:w-24 hover:scale-[1.2] transition-all duration-200 z-[1]">
          <Image
            className={`object-contain`}
            src="/assets/Game/imagePreview.png"
            layout="responsive"
            width={100}
            height={100}
            alt="logo"
          />
        </div>
        <p className="text-[#919191] sm:text-lg text-md fourK:text-3xl text-center tracking-wider mx-2 fourK:ms-6 font-extrabold" style={{fontFamily: "Oxygen",  whiteSpace: "normal",  wordBreak: "break-word"}}>{fileName}</p>
       </div>
       <button onClick={handleImageUpload} className="bg-black text-white hover:scale-[1.1] transition-all duration-200 font-bold sm:text-md fourK:text-3xl text-sm px-10 py-2 fourK:px-20 fourK:py-6 rounded-3xl fourK:rounded-[50px] mb-16 fourK:mb-32" style={{fontFamily: "Oxygen"}}>{uploading?"Uploading...":"Done"}</button> </div>   )}
       {!imageSelected &&(<div onDragOver={handleDragOver}
          onDrop={handleDrop} className="fourK:py-8 fourK:px-16 py-4 px-8 mb-8 mx-2 flex flex-col items-center justify-center rounded-2xl border-[#919191] border-dashed border-4 mt-6 fourK:mt-12 ">
       <button onClick={() => document.getElementById("fileInput")!.click()} className="relative w-28 fourK:w-56 hover:scale-[1.2] transition-all duration-200 z-[1]">
          <Image
            className={`object-contain`}
            src="/assets/Game/camera_icon.png"
            layout="responsive"
            width={100}
            height={100}
            alt="logo"
          />
        </button>
        <p className="text-center sm:text-xl fourK:text-4xl text-sm text-[#55555566] font-extrabold z-[2]" style={{fontFamily: "Oxygen"}}>Drag & Drop Your Files Here<br/>OR<br/>Browse Your Image</p>
        <p className="text-center my-2 sm:text-sm fourK:text-xl text-[10px] text-red-500 font-extrabold z-[2]" style={{fontFamily: "Oxygen"}}><strong>Note:</strong> Only (jpg, jpeg, png) format supported. Max size: 5mb</p>
       </div>    )}
       
      </div>
      </div>)}
      {isTabView?<GameMobileView level={level} lettersHaving={lettersHaving} top10Players={top10Players} setUploadPopup={setUploadPopup}/>:
      <GameTabView level={level} lettersHaving={lettersHaving} top10Players={top10Players} setUploadPopup={setUploadPopup}/>}
    </div>
  );
};

export default Game;
