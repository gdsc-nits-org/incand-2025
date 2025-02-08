"use client";
import Image from "next/image";

interface luminisLookoutData {
  photo: string;
  scale:number;
  User: {
    email: string;
    name: string;
  };
}

const Card = ({ photo, User,scale }: luminisLookoutData) => {
  return (
    <div className={`relative flex flex-col items-center scale-${scale} xl:scale-100`}>
      {/* Lower Box (Shadow Effect) */}
      <div className="absolute bottom-[-10px] right-[-10px] bg-black min-h-[20rem] min-w-[16rem] rounded-lg z-0"></div>

      {/* Main Box */}
      <div className="relative bg-white border-2 text-black border-black rounded-lg h-[20rem] w-[16rem] flex flex-col items-center justify-between z-10 drop-shadow-lg">
        <img src={photo} className="h-[16rem] w-[16rem] object-cover rounded-md" alt="Approved Image" />
        <div className="flex flex-col">
          <p className="text-center w-full tracking-widest text-[.8rem]" style={{ fontFamily: "Rocket Thunder" }}>
            Submitted By
          </p>
          <p className="text-center w-full tracking-widest text-[1rem]" style={{ fontFamily: "Rocket Thunder" }}>
            {User.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
