"use client";
import { useState } from "react";
import styles from "../../styles/CarpeDiem.module.css";
import Image from "next/image";

const CarpeDiem = () => {
  const [isTHovered, setIsTHovered] = useState(false);
  const [isOHovered, setIsOHovered] = useState(false);
  const [isTwHovered, setIsTwHovered] = useState(false);
  const [isFHovered, setIsFHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className={"" + styles.carped}>
      <Image
        src="/assets/CarpeDiem/background.png"
        fill={true}
        alt="background"
        className="absolute inset-0"
      />
      {/* Overlayed GIF */}
      <div className={"absolute left-12 top-10 h-[77vh] w-[25vw] rounded-lg"}>
        <Image
          src="/assets/CarpeDiem/disc.gif" // Path to your GIF
          alt="overlay gif"
          fill={true}
          className={"object contain rounded-lg" + styles.disc}
          style={{
            clipPath: "inset(0% round 24px)", // Custom clip for rounded corners
          }}
        />
      </div>
      <div className="absolute left-[10%] top-[57%] h-[11vh] w-[13vw]">
        <Image
          src="/assets/CarpeDiem/Date.png" // Path to your GIF
          alt="date"
          fill={true}
          className={" "}
        />
      </div>
      <div className="absolute left-[12%] top-[69%] h-[10vh] w-[9vw]">
        <Image
          src="/assets/CarpeDiem/Time.png" // Path to your GIF
          alt="time"
          fill={true}
          className={" "}
        />
      </div>
      <div className={"absolute left-[6%] top-[79%] h-[10vh] w-[4vw]"}>
        <Image
          src="/assets/CarpeDiem/Shape.png" // Path to your GIF
          alt="shape"
          fill={true}
          className={" "}
        />
      </div>
      <div className="absolute left-[22%] top-[79%] h-[10vh] w-[4vw]">
        <Image
          src="/assets/CarpeDiem/Shape.png" // Path to your GIF
          alt="shape"
          fill={true}
          className={" "}
        />
      </div>
      <div className="absolute left-[28.3%] top-[10%] h-[70vh] w-[0.3vw]">
        <Image
          src="/assets/CarpeDiem/Line.png" // Path to your GIF
          alt="line"
          fill={true}
          className={" "}
        />
      </div>
      <div className="absolute left-[28.5%] top-[6%] h-[77vh] w-[69vw]">
        <Image
          src="/assets/CarpeDiem/Main.png" // Path to your GIF
          alt="main"
          fill={true}
          className={" "}
        />
      </div>
      <div className="absolute left-[28.8%] top-[7%] h-[61vh] w-[41.5vw]">
        <Image
          src="/assets/CarpeDiem/Geometric.gif" // Path to your GIF
          alt="geometric"
          fill={true}
          className={" "}
          style={{
            borderTopLeftRadius: "30px", // Rounding the top-left corner
            borderTopRightRadius: "0px",
            borderBottomLeftRadius: "0px",
            borderBottomRightRadius: "0px",
            zIndex: "2",
          }}
        />
      </div>
      <div className="absolute left-[31%] top-[14%] h-[43vh] w-[37.5vw]">
        <Image
          src="/assets/CarpeDiem/Rectangle.png" // Path to your GIF
          alt="rectangle"
          fill={true}
          className={" "}
          style={{ zIndex: "3" }}
        />
      </div>
      <div className="absolute left-[34%] top-[17%] h-[30vh] w-[33vw]">
        <Image
          src="/assets/CarpeDiem/CarpeText.png" // Path to your GIF
          alt="text"
          fill={true}
          className={" "}
          style={{ zIndex: "3" }}
        />
      </div>
      <div className="absolute left-[55.5%] top-[18%] h-[13vh] w-[6vw]">
        <Image
          src="/assets/CarpeDiem/ELetter.png" // Path to your GIF
          alt="text"
          fill={true}
          className={" "}
          style={{ zIndex: "3" }}
        />
      </div>
      <p
        className={
          "absolute left-[33.5%] top-[20%] w-[6vw] text-[10vw] font-normal leading-[15.261vw] tracking-wide text-white " +
          styles.cText
        }
        onMouseEnter={() => setIsTHovered(true)}
        style={
          isTHovered
            ? {
                fontFamily: "Tusker Grotes",
                animation: "",

                zIndex: "3",
              }
            : { fontFamily: "Ahsing", animation: "none", zIndex: "4" }
        }
      >
        2
      </p>
      <p
        className={
          "absolute left-[38%] top-[24%] w-[0vw] text-[9vw] font-normal leading-[15.261vw] tracking-wide text-white " +
          styles.cText
        }
        onMouseEnter={() => setIsOHovered(true)}
        style={
          isOHovered
            ? {
                fontFamily: "Tusker Grotes",

                scale: "0.8",
                zIndex: "3",
              }
            : { fontFamily: "Ahsing", animation: "none", zIndex: "3" }
        }
      >
        0
      </p>
      <p
        className={
          "absolute left-[34.5%] top-[35%] w-[6vw] text-[10vw] font-normal leading-[15.261vw] tracking-wide text-white " +
          styles.cText
        }
        onMouseEnter={() => setIsTwHovered(true)}
        style={
          isTwHovered
            ? {
                fontFamily: "Tusker Grotes",

                scale: "0.8",
                zIndex: "3",
              }
            : { fontFamily: "Ahsing", animation: "none", zIndex: "3" }
        }
      >
        2
      </p>
      <p
        className={
          "absolute left-[40%] top-[39%] w-[6vw] text-[10vw] font-normal leading-[15.261vw] tracking-wide text-white " +
          styles.cText
        }
        onMouseEnter={() => setIsFHovered(true)}
        style={
          isFHovered
            ? {
                fontFamily: "Tusker Grotes",

                scale: "0.8",
                zIndex: "3",
              }
            : { fontFamily: "Ahsing", animation: "none", zIndex: "3" }
        }
      >
        5
      </p>
      <div className="absolute left-[36%] top-[36%] h-[50vh] w-[43vw]">
        <Image
          src="/assets/CarpeDiem/Radio.png" // Path to your GIF
          alt="radio"
          fill={true}
          className={" "}
          style={{ zIndex: "3" }}
        />
      </div>
      <div className="absolute left-[70.5%] top-[6%] h-[8vh] w-[27vw]">
        <Image
          src="/assets/CarpeDiem/Border.gif" // Path to your GIF
          alt="border"
          fill={true}
          className={" "}
          style={{
            borderTopLeftRadius: "10px", // Rounding the top-left corner
            borderTopRightRadius: "30px",
            borderBottomLeftRadius: "0px",
            borderBottomRightRadius: "0px",
            zIndex: "5",
          }}
        />
      </div>
      <div className="absolute left-[68%] top-[36%] h-[50vh] w-[29vw]">
        <Image
          src="/assets/CarpeDiem/Checks.gif" // Path to your GIF
          alt="checks"
          fill={true}
          className={" "}
          style={{
            borderTopLeftRadius: "10px", // Rounding the top-left corner
            borderTopRightRadius: "0px",
            borderBottomLeftRadius: "0px",
            borderBottomRightRadius: "30px",
            zIndex: "1",
          }}
        />
      </div>
      <div className="absolute left-[68.5%] top-[15%] h-[57vh] w-[29vw]">
        <Image
          src="/assets/CarpeDiem/SingerBackg.png" // Path to your GIF
          alt="backgrond"
          fill={true}
          className={" "}
          style={{ zIndex: "1" }}
        />
      </div>
      <div className="absolute left-[93%] top-[8%] h-[63vh] w-[4.2vw]">
        <Image
          src="/assets/CarpeDiem/SingerName.png" // Path to your GIF
          alt="Name"
          fill={true}
          className={" "}
          style={{ zIndex: "2" }}
        />
      </div>
      <div className="absolute left-[72%] top-[24%] h-[50vh] w-[20vw]">
        <Image
          src="/assets/CarpeDiem/Singer.png" // Path to your GIF
          alt="Singer"
          fill={true}
          className={" "}
          style={{ zIndex: "2" }}
        />
      </div>
      <div className="absolute left-[73%] top-[77%] h-[12vh] w-[19vw]">
        <Image
          src="/assets/CarpeDiem/Button.png" // Path to your GIF
          alt="Button"
          fill={true}
          className={" "}
          style={{ zIndex: "2" }}
        />
      </div>
      {!isClicked ? (
        <>
          <div
            className="absolute left-[73.8%] top-[78%] h-[8vh] w-[4vw] cursor-pointer"
            onClick={() => setIsClicked(true)}
          >
            <Image
              src="/assets/CarpeDiem/Circle.png" // Path to your GIF
              alt="Circle"
              fill={true}
              className={"cursor-pointer"}
              style={{ zIndex: "3" }}
              onClick={() => setIsClicked(true)}
            />
          </div>
          <div
            className="absolute left-[75%] top-[80%] h-[5vh] w-[2vw] cursor-pointer"
            onClick={() => setIsClicked(true)}
          >
            <Image
              src="/assets/CarpeDiem/Play.png" // Path to your GIF
              alt="PLay"
              fill={true}
              className={"cursor-pointer"}
              style={{ zIndex: "3" }}
              onClick={() => setIsClicked(true)}
            />
          </div>
          <div className="absolute left-[79%] top-[80.5%] h-[4vh] w-[11vw]">
            <Image
              src="/assets/CarpeDiem/SongName.png" // Path to your GIF
              alt="Song"
              fill={true}
              className={" "}
              style={{ zIndex: "2" }}
            />
          </div>
        </>
      ) : (
        <>
          <div
            className="absolute left-[73.8%] top-[78%] h-[8vh] w-[4vw] cursor-pointer"
            onClick={() => setIsClicked(false)}
          >
            <Image
              src="/assets/CarpeDiem/Circle.png" // Path to your GIF
              alt="Circle"
              fill={true}
              className={" "}
              style={{ zIndex: "3" }}
              onClick={() => setIsClicked(false)}
            />
          </div>
          <div
            className="absolute left-[74.8%] top-[79%] h-[7vh] w-[2vw] cursor-pointer"
            onClick={() => setIsClicked(false)}
          >
            <Image
              src="/assets/CarpeDiem/Pause.png" // Path to your GIF
              alt="Pause"
              fill={true}
              className={" "}
              style={{ zIndex: "3" }}
              onClick={() => setIsClicked(false)}
            />
          </div>
          <div className="absolute left-[79%] top-[80.5%] h-[4vh] w-[11vw] cursor-pointer">
            <Image
              src="/assets/CarpeDiem/PlayState.gif" // Path to your GIF
              alt="Music Play"
              fill={true}
              className={" "}
              style={{ zIndex: "3" }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default CarpeDiem;
