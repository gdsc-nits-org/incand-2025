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
      <div className="absolute bottom-[-10px] right-[-10px] bg-black h-[13rem] w-[8rem] md:h-[20rem] md:w-[16rem] rounded-lg z-0"></div>

      {/* Main Box */}
      <div className="relative bg-white border-2 text-black border-black rounded-lg h-[13rem] w-[8rem] md:h-[20rem] md:w-[16rem] flex flex-col items-center justify-between z-10 drop-shadow-lg">
        <img src={photo} className=" h-[10rem] w-[8rem] md:h-[16rem] md:w-[16rem] object-cover rounded-md" alt="Approved Image" />
        <div className="flex flex-col">
          <p className="text-center w-full tracking-widest text-[.6rem] md:text-[.8rem]" style={{ fontFamily: "Rocket Thunder" }}>
            Submitted By
          </p>
          <p className="text-center w-full tracking-widest text-[.7rem] md:text-[1rem]" style={{ fontFamily: "Rocket Thunder" }}>
            {User.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
