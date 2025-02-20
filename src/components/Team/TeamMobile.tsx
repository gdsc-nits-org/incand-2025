import { useState } from "react";
import TeamCard from "./TeamCard";
import teamDataCore from "../../../public/assets/Data/Core.json";
import teamDataTech from "../../../public/assets/Data/Tech.json";
import teamDataModule from "../../../public/assets/Data/Modules.json";
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
  const techLead = teamDataTech.filter((member) => member.role === "techLead");
  const techHead = teamDataTech.filter(
    (member) => member.role === "webHead" || member.role === "UiHead",
  );
  const techCohead = teamDataTech.filter(
    (member) =>
      member.role === "webCohead" ||
      member.role === "cloudCohead" ||
      member.role === "uiuxCohead",
  );

  const developer = teamDataTech.filter(
    (member) => member.role === "developer" || member.role === "Ui/Ux",
  );
  const [team, setTeam] = useState<1 | 2 | 3>(2);
  return (
    <div
      className="box-border h-[100vh] w-[100vw] overflow-y-scroll bg-[#FAF8E0]"
      style={{
        scrollbarWidth: "none" /* For Firefox */,
        msOverflowStyle: "none" /* For Internet Explorer and Edge */,
        overflowY: "scroll",
        WebkitOverflowScrolling: "touch" /* For smooth scrolling */,
        backgroundImage: `url('/assets/Team/Team.webp')` /* Replace with your image path */,
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
        <div className="mb-16 flex flex-row items-center justify-center font-tusker text-sm">
          <button
            onClick={() => setTeam(1)}
            style={{
              padding: "0.5rem",
              border: "1px solid #ff0000",
              borderTopLeftRadius: "1rem",
              borderBottomLeftRadius: "1rem",
              backgroundColor: `${team === 1 ? "#FF0000" : "#FFff17"}`,
              color: `${team === 1 ? "#FFff17" : "#FF0000"}`,
            }}
          >
            CORE TEAM
          </button>
          <button
            onClick={() => setTeam(2)}
            style={{
              padding: "0.5rem",
              border: "1px solid #ff0000",
              backgroundColor: `${team === 2 ? "#FF0000" : "#FFff17"}`,
              color: `${team === 2 ? "#FFff17" : "#FF0000"}`,
            }}
          >
            TECH TEAM
          </button>
          <button
            onClick={() => setTeam(3)}
            style={{
              padding: "0.5rem",
              border: "1px solid #ff0000",
              backgroundColor: `${team === 3 ? "#FF0000" : "#FFff17"}`,
              borderTopRightRadius: "1rem",
              borderBottomRightRadius: "1rem",
              color: `${team === 3 ? "#FFff17" : "#FF0000"}`,
            }}
          >
            MODULE HEADS
          </button>
        </div>
        {team === 1 && (
          <div className="flex flex-wrap items-center justify-center gap-4">
            {teamDataCore.map((member) => (
              <TeamCard
                key={member.id}
                name={member.name}
                role={member.designation}
                image={member.img}
                fb={member.fb ?? ""}
                linkedin={member.linkedin ?? ""}
                ind={member.id}
              />
            ))}
          </div>
        )}
        {team === 2 && (
          <>
            <div
              className={`flex h-[4rem] w-[16rem] items-center justify-start gap-x-4 rounded-full bg-[#E1067B]`}
            >
              <div
                className={`z-10 ml-2 h-[3rem] w-[3rem] rounded-full bg-[url('/assets/Team/Handle.webp')] bg-cover`}
              ></div>
              <p
                className={`my-auto text-center font-oxygen text-lg font-extrabold leading-[35.36px] tracking-[0.06em] text-[#FFD231]`}
              >
                TECH LEAD
              </p>
            </div>

            {/* TECH LEADS */}
            <div className="-mt-4 box-border h-[30rem] w-[80%] px-4">
              <Carousel>
                {techLead.map((member) => (
                  <div
                    key={member.id}
                    className="transform transition-transform duration-300 ease-in-out hover:scale-105"
                  >
                    <TeamCard
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
            </div>

            <div className="flex h-[4rem] w-[16rem] items-center justify-start gap-x-4 rounded-full bg-[#E1067B]">
              <div className="z-10 ml-2 h-[3rem] w-[3rem] rounded-full bg-[url('/assets/Team/Handle.webp')] bg-cover"></div>
              <p className="my-auto text-center font-oxygen text-lg font-extrabold leading-[35.36px] tracking-[0.06em] text-[#FFD231]">
                TECH HEADS
              </p>
            </div>

            {/* TECH HEADS */}
            <div className="-mt-4 box-border h-[30rem] w-[80%] px-4">
              <Carousel>
                {techHead.map((member) => (
                  <div
                    key={member.id}
                    className="transform transition-transform duration-300 ease-in-out hover:scale-105"
                  >
                    <TeamCard
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
            </div>

            <div className="flex h-[4rem] w-[16rem] items-center justify-start gap-x-4 rounded-full bg-[#E1067B]">
              <div className="z-10 ml-2 h-[3rem] w-[3rem] rounded-full bg-[url('/assets/Team/Handle.webp')] bg-cover"></div>
              <p className="my-auto text-center font-oxygen text-lg font-extrabold leading-[35.36px] tracking-[0.06em] text-[#FFD231]">
                TECH COHEADS
              </p>
            </div>

            {/* TECH COHEADS */}
            <div className="-mt-4 box-border h-[30rem] w-[80%] px-4">
              <Carousel>
                {techCohead.map((member) => (
                  <div
                    key={member.id}
                    className="transform transition-transform duration-300 ease-in-out hover:scale-105"
                  >
                    <TeamCard
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
            </div>

            <div className="flex h-[4rem] w-[16rem] items-center justify-start gap-x-4 rounded-full bg-[#E1067B]">
              <div className="z-10 ml-2 h-[3rem] w-[3rem] rounded-full bg-[url('/assets/Team/Handle.webp')] bg-cover"></div>
              <p className="my-auto text-center font-oxygen text-lg font-extrabold leading-[35.36px] tracking-[0.06em] text-[#FFD231]">
                JUNIOR MEMBERS
              </p>
            </div>

            {/* JUNIOR MEMBERS */}
            <div className="-mt-4 box-border h-[30rem] w-[80%] px-4">
              <Carousel>
                {developer.map((member) => (
                  <div
                    key={member.id}
                    className="transform transition-transform duration-300 ease-in-out hover:scale-105"
                  >
                    <TeamCard
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
            </div>
          </>
        )}

        {team === 3 && (
          <div className="flex flex-wrap items-center justify-center gap-4">
            {teamDataModule.map((member) => (
              <TeamCard
                key={member.id}
                name={member.name}
                role={member.designation}
                image={member.img}
                ind={member.id}
                module={member.module}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamMobile;
