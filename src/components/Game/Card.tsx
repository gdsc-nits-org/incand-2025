"use client";
import Image from "next/image";

interface luminisLookoutData {
  photo: string;
  scale: number;
  User: {
    email: string;
    name: string;
  };
}

const Card = ({ photo, User, scale }: luminisLookoutData) => {
  return (
    <div
      className={`relative flex flex-col items-center scale-${scale} xl:scale-100`}
    >
      {/* Lower Box (Shadow Effect) */}
      <div className="absolute bottom-[-10px] right-[-10px] z-0 min-h-[20rem] min-w-[16rem] rounded-lg bg-black"></div>

      {/* Main Box */}
      <div className="relative z-10 flex h-[20rem] w-[16rem] flex-col items-center justify-between rounded-lg border-2 border-black bg-white text-black drop-shadow-lg">
        <img
          src={photo}
          className="h-[16rem] w-[16rem] rounded-md object-cover"
          alt="Approved Image"
        />
        <div className="flex flex-col">
          <p
            className="w-full text-center text-[.8rem] tracking-widest"
            style={{ fontFamily: "Rocket Thunder" }}
          >
            Submitted By
          </p>
          <p
            className="w-full text-center text-[1rem] tracking-widest"
            style={{ fontFamily: "Rocket Thunder" }}
          >
            {User.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
