import TeamCard from "./TeamCard";
import teamDataCore from "./Core.json"; // Assuming the team data is stored here
import teamDataTech from "./Tech.json";
import teamDataModule from "./Modules.json";
import React from "react";
import Carousel from "./Carousel";

const TeamMobile: React.FC = () => {
  // var settings = {
  //     dots:false,
  //     infinite: false,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     nextArrow: <NextArrow />,
  //     prevArrow: <PrevArrow />,
  //   };
  return (
    <div
      className="box-border h-[100vh] w-[100vw] overflow-y-scroll bg-[#FAF8E0]"
      style={{
        scrollbarWidth: "none" /* For Firefox */,
        msOverflowStyle: "none" /* For Internet Explorer and Edge */,
        overflowY: "scroll",
        WebkitOverflowScrolling: "touch" /* For smooth scrolling */,
        backgroundImage: `url('/assets/Team/Team.png')` /* Replace with your image path */,
        backgroundPosition: "bottom" /* Aligns the image to the bottom */,
        backgroundSize:
          "100% 40%" /* Sets the image width to 100% and height to 30% */,
        backgroundRepeat: "no-repeat" /* Prevents the image from repeating */,
      }}
    >
      <div
        id="section1"
        className="box-border flex h-[50%] w-[100%] items-center justify-center"
      >
        <div className="h-[100%] w-[85%]">
          <img
            src="/assets/Team/Meet.svg"
            className="h-[100%] w-[100%]"
            alt="Meet Our Team"
          />
        </div>
      </div>

      <div
        id="section2"
        className="box-border flex w-[100%] flex-col items-center justify-center overflow-x-hidden"
      >
        <div
          className={`flex h-[4rem] w-[16rem] items-center justify-start gap-x-4 rounded-full bg-[#E1067B]`}
        >
          <div
            className={`z-10 ml-2 h-[3rem] w-[3rem] rounded-full bg-[url('/assets/Team/Handle.png')] bg-cover`}
          ></div>
          <p
            className={`my-auto text-center font-oxygen text-lg font-extrabold leading-[35.36px] tracking-[0.06em] text-[#FFD231]`}
          >
            CORE MEMBERS
          </p>
        </div>

        <div className="-mt-4 box-border h-[30rem] w-[80%] px-4">
          {/* <Slider {...settings}> */}
          <Carousel>
            {teamDataCore.map((member) => (
              <div
                key={member.id}
                className="transform transition-transform duration-300 ease-in-out hover:scale-105"
              >
                <TeamCard
                  key={member.id}
                  name={member.name}
                  role={member.designation}
                  image={member.img}
                  fb={member.fb ?? ""}
                  linkedin={member.linkedin ?? ""}
                  git={member.git ?? ""}
                  ind={member.id}
                />
              </div>
            ))}
          </Carousel>

          {/* </Slider> */}
        </div>

        <div
          className={`flex h-[4rem] w-[16rem] items-center justify-start gap-x-4 rounded-full bg-[#E1067B]`}
        >
          <div
            className={`z-10 ml-2 h-[3rem] w-[3rem] rounded-full bg-[url('/assets/Team/Handle.png')] bg-cover`}
          ></div>
          <p
            className={`my-auto text-center font-oxygen text-lg font-extrabold leading-[35.36px] tracking-[0.06em] text-[#FFD231]`}
          >
            TECH MEMBERS
          </p>
        </div>

        <div className="-mt-4 box-border h-[30rem] w-[80%] px-4">
          {/* <Slider {...settings}> */}
          <Carousel>
            {teamDataTech.map((member) => (
              <div
                key={member.id}
                className="transform transition-transform duration-300 ease-in-out hover:scale-105"
              >
                <TeamCard
                  key={member.id}
                  name={member.name}
                  role={member.designation}
                  image={member.img}
                  fb={member.fb ?? ""}
                  linkedin={member.linkedin ?? ""}
                  git={member.git ?? ""}
                  ind={member.id}
                />
              </div>
            ))}
          </Carousel>

          {/* </Slider> */}
        </div>

        <div
          className={`flex h-[4rem] w-[16rem] items-center justify-start gap-x-4 rounded-full bg-[#E1067B]`}
        >
          <div
            className={`z-10 ml-2 h-[3rem] w-[3rem] rounded-full bg-[url('/assets/Team/Handle.png')] bg-cover`}
          ></div>
          <p
            className={`my-auto text-center font-oxygen text-lg font-extrabold leading-[35.36px] tracking-[0.06em] text-[#FFD231]`}
          >
            MODULE HEADS
          </p>
        </div>

        <div className="-mt-4 box-border h-[30rem] w-[80%] px-4">
          {/* <Slider {...settings}> */}
          <Carousel>
            {teamDataModule.map((member) => (
              <div
                key={member.id}
                className="transform transition-transform duration-300 ease-in-out hover:scale-105"
              >
                <TeamCard
                  key={member.id}
                  name={member.name}
                  role={member.designation}
                  image={member.img}
                  fb={member.fb ?? ""}
                  linkedin={member.linkedin ?? ""}
                  git={member.git ?? ""}
                  ind={member.id}
                />
              </div>
            ))}
          </Carousel>

          {/* </Slider> */}
        </div>
      </div>
    </div>
  );
};

export default TeamMobile;
