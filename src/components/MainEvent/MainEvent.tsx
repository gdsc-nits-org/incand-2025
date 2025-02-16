"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { env } from "~/env";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "~/app/utils/firebase";
import { toast } from "sonner";
import { Heart, Lock } from "lucide-react";
import Login from "~/components/GoogleAuth";

interface ApiResponse {
  status: number;
  msg: number;
}

interface ApiResponseUser {
  status: number;
  msg: userResponse;
}
interface userResponse {
  Like: {
    id: string;
  };
}

const EventCard = ({
  name,
  color,
  passive,
  width,
  height,
  className,
  date,
  likes,
  href,
  minLikes,
}: {
  className?: string;
  name: string;
  color: string;
  passive: string;
  width: string;
  height: string;
  date?: string;
  href?: string;
  likes: number;
  minLikes: number;
}) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className={`relative left-0 top-0 inline-block h-fit w-fit ${likes >= minLikes ? "bg-transparent" : "bg-black"} rounded-lg`}
    >
      <div
        onMouseEnter={() => {
          if (likes >= minLikes && href) {
            setIsHover(true);
          }
        }}
        onMouseLeave={() => setIsHover(false)}
        onClick={(e) => {
          e.preventDefault();
          if (likes >= minLikes && href) window.location.href = href;
          // else
          //   toast.warning(`Atleast ${minLikes} likes are required to unlock!!`);
        }}
        className={`${likes >= minLikes ? color : passive} ${likes >= minLikes ? "opacity-100" : "opacity-80"} relative flex items-center rounded-3xl border-black shadow-[0.8vh_0.8vh_0px_rgba(0,0,0,1)] transition-all duration-1000 ease-out hover:border-[3px] ${width} ${height} transform-gpu cursor-pointer overflow-hidden ${className} filter ${likes >= minLikes ? "blur-0 lg:blur-0" : "blur-[2px] lg:blur-[5px]"
          }`}
        style={{
          // filter: `blur(${likes >= minLikes ? "0px" : "2px"})`,
          backgroundBlendMode: `${likes >= minLikes ? "none" : "darken"}`,
        }}
      >
        <h2
          className="z-30 font-ahsing text-white mobile:p-[2vw] mobile:text-[4.5vh] mobile:leading-[5vh] tablet:text-[6vh] tablet:leading-[6vh] laptop:p-7 laptop:text-[9vh] laptop:leading-[10vh] 4k:p-12"
          style={{
            textShadow: "0.6vh 0.6vh 0vh black",
          }}
        >
          {name}
        </h2>
        <h2
          className={`absolute -bottom-[4.5vh] left-[6vh] z-30 font-ahsing text-white transition-all duration-500 mobile:hidden mobile:p-[2vw] mobile:text-[4.5vh] mobile:leading-[5vh] tablet:text-[6vh] tablet:leading-[6vh] laptop:block laptop:p-7 laptop:text-[4.5vh] laptop:leading-[10vh] 4k:p-12 ${isHover ? "translate-y-0" : "translate-y-[100%]"}`}
          style={{
            textShadow: "0.35vh 0.35vh 0vh black",
          }}
        >
          {date}
        </h2>

        <img
          src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1739274564/up_jlgare.png"
          alt="vector"
          className={`absolute z-20 transition-all duration-1000 mobile:h-[5vh] laptop:h-[9vh] ${isHover ? "left-[10%] top-[15%] -rotate-[135deg]" : "left-[65%] top-0 -rotate-45"}`}
        />

        <img
          src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1739275338/Ellipse_12_wchkuq.png"
          alt="pink_circle"
          className={`absolute z-20 transition-all duration-1000 ${isHover ? "left-[70%] top-[30%] mobile:h-[4.5vh] laptop:h-[7vh]" : "left-[25%] top-[20%] mobile:h-[3.5vh] laptop:h-[5vh]"}`}
        />

        <img
          src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1739275610/Flower_2_kh0hhh.png"
          alt=""
          className={`absolute -bottom-[2%] -left-[1%] z-20 transition-all duration-1000 mobile:h-[5.5vh] laptop:h-[9vh] ${isHover ? "rotate-[45deg]" : "-rotate-[45deg]"}`}
        />

        <img
          src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1739276056/Brutalist_Shape_194_n9sap0.png"
          alt=""
          className={`absolute z-20 drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] transition-all duration-1000 mobile:h-[3vh] laptop:h-[5vh] ${isHover ? "left-[5%] top-[40%] rotate-[30deg]" : "left-[85%] top-[40%] -rotate-[30deg]"}`}
        />

        <img
          src="https://res.cloudinary.com/dsj9gr1o3/image/upload/v1739276675/Ellipse_12_1_iaazuk.png"
          alt=""
          className={`absolute z-20 transition-all duration-1000 ${isHover ? "left-[70%] top-[75%] mobile:h-[4.5vh] laptop:h-[7vh]" : "left-[85%] top-[80%] mobile:h-[3.5vh] laptop:h-[5vh]"}`}
        />

        <div
          className={`absolute h-[140%] w-[140%] ${isHover ? "-translate-x-[25%] -translate-y-[25%]" : ""} inset-0 z-0 transition-all duration-1000 ease-out`}
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dsj9gr1o3/image/upload/v1739221713/Vector_2_suoiox.png')",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      {likes < minLikes ? (
        <h6 className="absolute bottom-1 left-0 w-[100%] text-center text-[.6rem] text-white lg:bottom-8 lg:text-[1rem]">
          <Lock className="inline" />
          This event needs atleast{" "}
          <span className="font-bold">{minLikes} likes</span> to get unlocked
        </h6>
      ) : null}
    </div>
  );
};

export default function MainEvent() {
  const [isHover, setIsHover] = useState(false);
  const [likes, setLikes] = useState<ApiResponse>({
    status: 401,
    msg: 0,
  });
  const [myprof, setMyprof] = useState<ApiResponseUser>({
    status: 401,
    msg: {
      Like: {
        id: "",
      },
    },
  });
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    const fetchLikes = async () => {
      const res = await axios.get<ApiResponse>(
        `${env.NEXT_PUBLIC_API_URL}/api/like`,
      );
      setLikes(res.data);
    };
    toast.promise(fetchLikes, {
      loading: "Fetching Number of Likes...",
      success: "Likes Fetched!!",
      error: "Error in fetching likes...",
    });
  }, []);
  const handleClickLike = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    if (!user) {
      toast.error("You must be logged in to like!");
      return;
    }
    const handlePostRequest = async () => {
      const token = await user?.getIdToken();
      const res = await axios.post(
        `${env.NEXT_PUBLIC_API_URL}/api/like/create`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (res) {
        window.location.reload();
      }
    };
    toast.promise(handlePostRequest, {
      loading: "Adding Like...Please wait.",
      success: "Added your like!!",
      error: "Error in adding like...",
    });
  };
  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          const token = await user.getIdToken();
          const userResponse = await axios.get<ApiResponseUser>(
            `${env.NEXT_PUBLIC_API_URL}/api/user/me`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          );
          setMyprof(userResponse.data);
        } catch (error) {
          console.error("Error fetching user data:", error);
          toast.error("Failed to fetch user data.");
        }
      } else {
        toast.error("Please Login!");
      }
    };
    if (!loading) {
      void fetchUserData();
    }
  }, [user, loading]);

  return (
    <>
      {!user && !loading && (
        <section className="l absolute z-50 flex h-screen w-screen flex-col items-center justify-center gap-4">
          <h1 className="font-tusker text-sm text-white tablet:text-xl">
            You Need to Login to view the page!!
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
          user || loading
            ? {}
            : {
              height: "100vh",
              overflow: "hidden",
              filter: "blur(5px)",
            }
        }
      ></div>
      <div
        className="flex min-h-screen flex-col items-center justify-center bg-[#FFEDFD] pt-28"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dsj9gr1o3/image/upload/v1739220438/Vector_1_cz77nw.png')",
          backgroundSize: "contain",
          backgroundRepeat: "repeat",
          mixBlendMode: "multiply",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          className="z-[5000] flex h-fit w-[80%] flex-row items-center justify-between gap-5 rounded-md border-[3px] border-black bg-[#ffffff] p-5 font-tusker text-[0.5rem] mobile2:text-[0.65rem] md:w-[60%] md:text-lg xl:w-[33%] 2xl:w-[38%]"
          style={{ boxShadow: "5px 5px 1px 1px #000000" }}
        >
          <div className="relative inline-block">
            <div className="absolute -bottom-1 -right-1 h-full w-full rounded-md border-2 border-black bg-black"></div>
            <button className="relative text-nowrap rounded-md border-2 border-black bg-[#FD4F1C] px-6 py-2 text-center font-tusker text-[0.5rem] tracking-wider mobile2:text-[0.65rem] md:text-lg">
              {likes.msg} {likes.msg === 1 ? "LIKE" : "LIKES"}
            </button>
          </div>

          <div className="flex flex-row items-center justify-center gap-4 text-nowrap">
            <div>CLICK HERE TO LIKE</div>
            <div className="flex items-center justify-center">
              <button
                className="flex items-center justify-center"
                onClick={handleClickLike}
                disabled={!!myprof.msg.Like}
              >
                <Heart
                  fill={myprof.msg.Like ? "red" : "none"}
                  stroke={myprof.msg.Like ? "none" : "black"}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="top-20 flex min-h-screen w-full flex-wrap justify-center pt-[5vh] mobile:gap-0 mobile:px-4 tablet:px-16 laptop:gap-8 laptop:px-4 4k:gap-20 4k:px-10">
          <div
            className={`absolute inset-0 z-0 min-h-screen transition-transform duration-1000 ease-out`}
          ></div>

          <div className="flex transition-all duration-1000 ease-linear mobile:gap-5 tablet:gap-7 laptop:flex-col laptop:gap-8 4k:gap-20">
            {/* <Link href="/event/20"> */}
            <EventCard
              name="EDM Night"
              date="21st-23rd Feb"
              className={`absolute bottom-0 right-0 ${likes.msg >= 100 ? "hover:scale-105" : null} mobile:origin-bottom-right tablet:origin-bottom-right`}
              color="bg-[#8BF965]"
              passive="bg-[#1B2965]"
              href="/event/19"
              width="laptop:w-[30vw] mobile:w-[44vw] tablet:w-[38vw]"
              height="laptop:h-[37.8vh] mobile:h-[21vh]"
              likes={likes.msg}
              minLikes={100}
            />
            {/* <Link href="/event/19"> */}
            <EventCard
              name="Comedy Night"
              date="22nd Feb"
              className={`absolute right-0 top-0 ${likes.msg >= 400 ? "hover:scale-105" : null} mobile:origin-bottom-right tablet:origin-top-left laptop:origin-top-right`}
              color="bg-[#FFADF6]"
              passive="bg-[#111D16]"
              href="/event/18"
              width="laptop:w-[30vw] mobile:w-[44vw] tablet:w-[38vw]"
              height="laptop:h-[37.8vh] mobile:h-[21vh]"
              likes={likes.msg}
              minLikes={400}
            />
          </div>
          {/*Subrata's Flip effect*/}
          <div
            className="relative flex [perspective:1000px] mobile:h-[27.5vh] mobile:w-[90vw] tablet:w-[80vw] laptop:h-[80vh] laptop:w-[30vw]"
            onClick={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            {/* Card's Front Side */}
            <div
              className={`relative h-full w-full transition-all duration-700 ease-in [transform-style:preserve-3d] ${isHover ? "[transform:rotateY(180deg)]" : ""}`}
            >
              <div className="absolute h-full w-full [backface-visibility:hidden]">
                <EventCard
                  name="Carpe Diem"
                  date="23rd Feb"
                  className="hover:flex-grow"
                  color="bg-[#00FFFF]"
                  passive="bg-[#009999]"
                  width="laptop:w-[30vw] mobile:w-[90vw] tablet:w-[80vw]"
                  height="laptop:h-[80vh] mobile:h-[27.5vh]"
                  likes={likes.msg}
                  minLikes={100}
                />
              </div>
              {/* Card's Back Side */}
              <div className="absolute h-full w-full transition-all duration-1000 ease-in [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <div className="flex transition-all duration-1000 ease-linear mobile:gap-5 tablet:gap-7 laptop:flex-col laptop:gap-8 4k:gap-20">
                  {/* <Link href="/CarpeDiem1"> */}
                  <EventCard
                    name="Artist 1"
                    className={`absolute left-0 top-0 origin-center ${likes.msg >= 800 ? "hover:scale-105" : null}`}
                    color="bg-[#FF8D8D]"
                    passive="bg-[#9F1D1D]"
                    href="/CarpeDiem1"
                    width="laptop:w-[30vw] mobile:w-[44vw] tablet:w-[38vw]"
                    height="laptop:h-[37.8vh] mobile:h-[27.5vh]"
                    likes={likes.msg}
                    minLikes={800}
                  />
                  {/* <Link href="/CarpeDiem2"> */}
                  <EventCard
                    name="Artist 2"
                    className="absolute bottom-0 left-0 origin-center hover:scale-105"
                    color="bg-[#00FFFF]"
                    passive="bg-[#009999]"
                    href="/CarpeDiem2"
                    width="laptop:w-[30vw] mobile:w-[44vw] tablet:w-[38vw]"
                    height="laptop:h-[37.8vh] mobile:h-[27.5vh]"
                    likes={likes.msg}
                    minLikes={800}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex transition-all duration-1000 ease-linear mobile:gap-5 tablet:gap-7 laptop:flex-col laptop:gap-8 4k:gap-20">
            {/* <Link href="/event/17"> */}
            <EventCard
              name="Thunder March"
              date="21st Feb"
              className={`absolute left-0 top-0 ${likes.msg >= 200 ? "hover:scale-105" : null} mobile:origin-bottom-right laptop:origin-bottom-left`}
              color="bg-[#ABA8FF]"
              passive="bg-[#1B181F]"
              href="/event/17"
              width="laptop:w-[30vw] mobile:w-[90vw] tablet:w-[80vw]"
              height="laptop:h-[80vh] mobile:h-[27.5vh]"
              likes={likes.msg}
              minLikes={200}
            />
            {/* <Link href="/event/18"> */}
            {/* <EventCard
              name="Nirvana"
              date="22nd Feb"
              className={`absolute bottom-0 left-0 ${likes.msg >= 600 ? "hover:scale-105" : null} mobile:origin-bottom-right tablet:origin-top-left`}
              color="bg-[#F6E659]"
              passive="bg-[#161619]"
              href="/event/18"
              width="laptop:w-[30vw] mobile:w-[44vw] tablet:w-[38vw]"
              height="laptop:h-[37.8vh] mobile:h-[21vh]"
              likes={likes.msg}
              minLikes={600}
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}
