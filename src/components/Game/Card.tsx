"use client";

interface luminisLookoutData {
  photo: string;
  User: {
    email: string;
    name: string;
  };
}

const Card = ({ photo, User }: luminisLookoutData) => {
  return (
    <div className={`relative flex flex-col items-center xl:scale-100`}>
      {/* Lower Box (Shadow Effect) */}
      <div className="absolute bottom-[-10px] right-[-10px] z-0 h-[13rem] w-[7rem] rounded-lg bg-black md:h-[20rem] md:w-[16rem]"></div>

      {/* Main Box */}
      <div className="relative z-10 flex h-[13rem] w-[7rem] flex-col items-center justify-between rounded-lg border-2 border-black bg-white text-black drop-shadow-lg md:h-[20rem] md:w-[16rem]">
        <img
          src={photo}
          className="h-[10rem] w-[7rem] rounded-md object-cover md:h-[16rem] md:w-[16rem]"
          alt="Approved Image"
        />
        <div className="flex flex-col">
          <p
            className="w-full text-center text-[.5rem] tracking-widest md:text-[.8rem]"
            style={{ fontFamily: "Rocket Thunder" }}
          >
            Submitted By
          </p>
          <p
            className="w-full text-center text-[.6rem] tracking-widest md:text-[1rem]"
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
