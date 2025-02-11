import React, { useState } from "react";

import TeamCard from "./TeamCard";
// import teamDataCore from "./Core.json"; // Assuming the team data is stored here
import teamDataTech from "../../../public/assets/Data/Tech.json";
// import teamDataModule from "./Modules.json";
const TeamDesktop: React.FC = () => {
  const techLead = teamDataTech.filter((member) => member.role === "techLead");
  const webHead = teamDataTech.filter((member) => member.role === "webHead");
  const UiHead = teamDataTech.filter((member) => member.role === "UiHead");
  const webCohead = teamDataTech.filter(
    (member) => member.role === "webCohead" || member.role === "cloudCohead",
  );
  const uiuxCohead = teamDataTech.filter(
    (member) => member.role === "uiuxCohead",
  );
  const developer = teamDataTech.filter(
    (member) => member.role === "developer",
  );

  // const [isCore, setIsCore] = useState(true);
  const [isTech, setIsTech] = useState(true);
  // const [isModule, setIsModule] = useState(false);

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
        className="box-border flex h-[60%] w-[100%] items-center justify-center xL:h-[100%]"
      >
        <div className="h-[90%] w-[85%] xL:h-[60%]">
          <img
            src="/assets/Team/Meet.svg"
            className="h-[100%] w-[100%]"
            alt="Meet Our Team"
          />
        </div>
      </div>

      <div
        id="section2"
        className="relative box-border w-[100%] overflow-x-hidden"
      >
        <div className="align-center mx-auto flex h-[4rem] w-[90%] flex-row justify-center tablet2:w-[78%]">
          {/* <div
            className={`h-[100%] w-[32%] rounded-full xL:w-[20rem] ${isCore ? "bg-[#E1067B]" : "border-2 border-black bg-transparent"} flex cursor-pointer items-center justify-start gap-x-4`}
            onClick={() => {
              setIsTech(false);
              setIsModule(false);
              setIsCore(true);
            }}
          > */}
          {/* <div
              className={`z-10 ml-2 h-[3rem] w-[3rem] rounded-full ${isCore ? "bg-[url('/assets/Team/Handle.webp')] bg-cover" : "border-8 border-yellow-500 bg-black"}`}
            ></div>
            <p
              className={`font-oxygen text-xs font-extrabold leading-[35.36px] tablet:text-sm ipadpro:text-base ipadair:text-lg ${isCore ? "text-[#FFD231]" : "text-black"} my-auto text-center tracking-[0.06em]`}
            >
              CORE MEMBERS
            </p>
          </div> */}

          <div
            className={`h-[100%] w-[32%] rounded-full xL:w-[20rem] ${isTech ? "bg-[#E1067B]" : "border-2 border-black bg-transparent"} flex cursor-pointer items-center justify-start gap-x-4`}
            onClick={() => {
              // setIsCore(false);
              // setIsModule(false);
              setIsTech(true);
            }}
          >
            <div
              className={`z-10 ml-2 h-[3rem] w-[3rem] rounded-full ${isTech ? "bg-[url('/assets/Team/Handle.webp')] bg-cover" : "border-8 border-yellow-500 bg-black"}`}
            ></div>
            <p
              className={`font-oxygen text-xs font-extrabold leading-[35.36px] tablet:text-sm ipadpro:text-base ipadair:text-lg ${isTech ? "text-[#FFD231]" : "text-black"} my-auto text-center tracking-[0.06em]`}
            >
              TECH MEMBERS
            </p>
          </div>

          {/* <div
            className={`h-[100%] w-[32%] rounded-full xL:w-[20rem] ${isModule ? "bg-[#E1067B]" : "border-2 border-black bg-transparent"} flex cursor-pointer items-center justify-start gap-x-4`}
            onClick={() => {
              setIsCore(false);
              setIsTech(false);
              setIsModule(true);
            }}
          > */}
          {/* <div
              className={`z-10 ml-2 h-[3rem] w-[3rem] rounded-full ${isModule ? "bg-[url('/assets/Team/Handle.webp')] bg-cover" : "border-8 border-yellow-500 bg-black"}`}
            ></div>
            <p
              className={`font-oxygen text-xs font-extrabold leading-[35.36px] tablet:text-sm ipadpro:text-base ipadair:text-lg ${isModule ? "text-[#FFD231]" : "text-black"} my-auto text-center tracking-[0.06em]`}
            >
              MODULE HEADS
            </p> */}
          {/* </div> */}
        </div>

        <div
          id="Member_container"
          className="mx-auto mt-14 grid h-[85%] w-[85%] grid-cols-2 place-items-center gap-7 overflow-y-scroll pt-8 tablet2:grid-cols-3"
          style={{
            scrollbarWidth: "none" /* For Firefox */,
            msOverflowStyle: "none" /* For Internet Explorer and Edge */,
            overflowY: "scroll",
            WebkitOverflowScrolling: "touch" /* For smooth scrolling */,
          }}
        >
          {/* Core Team */}
          {/* {isCore && (
    <div className="col-span-2 tablet2:col-span-3 w-full flex justify-center flex-wrap gap-24">
      {teamDataCore.map((member) => (
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
      ))}
    </div>
  )} */}

          {/* Tech Lead */}
          {isTech && (
            <div className="col-span-2 mb-14 flex w-full flex-wrap justify-center gap-24 tablet2:col-span-3">
              {techLead.map((member) => (
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
              ))}
            </div>
          )}

          {/* Web Head */}
          {isTech && (
            <div className="col-span-2 mb-14 flex w-full flex-wrap justify-center gap-24 tablet2:col-span-3">
              {webHead.map((member) => (
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
              ))}
            </div>
          )}

          {/* UI Head */}
          {isTech && (
            <div className="col-span-2 mb-14 flex w-full flex-wrap justify-center gap-24 tablet2:col-span-3">
              {UiHead.map((member) => (
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
              ))}
            </div>
          )}

          {/* Web Cohead */}
          {isTech && (
            <div className="col-span-2 mb-14 flex w-full flex-wrap justify-center gap-24 tablet2:col-span-3">
              {webCohead.map((member) => (
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
              ))}
            </div>
          )}
          {/* UI/UX Cohead */}
          {isTech && (
            <div className="col-span-2 mb-14 flex w-full flex-wrap justify-center gap-24 tablet2:col-span-3">
              {uiuxCohead.map((member) => (
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
              ))}
            </div>
          )}

          {/* Developer */}
          {isTech && (
            <div className="col-span-2 flex w-full flex-wrap justify-center gap-24 tablet2:col-span-3">
              {developer.map((member) => (
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
              ))}
            </div>
          )}

          {/* Module Team */}
          {/* {isModule && (
    <div className="col-span-2 tablet2:col-span-3 w-full flex justify-center flex-wrap gap-24 ">
      {teamDataModule.map((member) => (
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
      ))}
    </div>
  )} */}
        </div>
      </div>
    </div>
  );
};

export default TeamDesktop;
