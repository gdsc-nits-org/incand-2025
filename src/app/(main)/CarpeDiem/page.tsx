"use client";
import { useState, useEffect } from "react";
import styles from "../../../styles/CarpeDiem.module.css";
import Image from "next/image";

const CarpeDiem = () => {
  const [isTHovered, setIsTHovered] = useState(false);
  const [isOHovered, setIsOHovered] = useState(false);
  const [isTwHovered, setIsTwHovered] = useState(false);
  const [isFHovered, setIsFHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const [isIpad, setIsIpad] = useState(false);
  const [isLap, setIsLap] = useState(false);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);

    const resizeFunc = () => {
      if (typeof window === "undefined") return;

      const width = window.innerWidth;
      setIsPhone(width >= 320 && width <= 900);
      setIsIpad(width >= 901 && width < 1024);
      setIsLap(width >= 1024);
    };
    resizeFunc();
    window.addEventListener("resize", resizeFunc);

    return () => {
      window.removeEventListener("resize", resizeFunc);
    };
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <section className="relative h-screen max-h-screen overflow-hidden bg-[#EE79BD] pt-20 4k:pt-40">
      {isLap && (
        <>
          <div className={styles.carped + ""}>
            <Image
              src="/assets/CarpeDiem/background.webp"
              fill={true}
              alt="background"
              className="absolute inset-0 max-h-screen"
            />
            {/* Overlayed GIF */}
            <div
              className={"absolute left-12 top-10 h-[77vh] w-[25vw] rounded-lg"}
            >
              <Image
                src="/assets/CarpeDiem/disc.gif" // Path to your GIF
                alt="overlay gif"
                fill={true}
                unoptimized={true}
                className={"object contain rounded-lg" + styles.disc}
                style={{
                  clipPath: "inset(0% round 24px)", // Custom clip for rounded corners
                }}
              />
            </div>
            <div className="absolute left-[10%] top-[57%] h-[11vh] w-[13vw]">
              <Image
                src="/assets/CarpeDiem/Date.webp" // Path to your GIF
                alt="date"
                fill={true}
                className={" "}
              />
            </div>
            <div className="absolute left-[12%] top-[69%] h-[10vh] w-[9vw]">
              <Image
                src="/assets/CarpeDiem/Time.webp" // Path to your GIF
                alt="time"
                fill={true}
                className={" "}
              />
            </div>
            <div className={"absolute left-[6%] top-[79%] h-[10vh] w-[4vw]"}>
              <Image
                src="/assets/CarpeDiem/Shape.webp" // Path to your GIF
                alt="shape"
                fill={true}
                className={" "}
              />
            </div>
            <div className="absolute left-[22%] top-[79%] h-[10vh] w-[4vw]">
              <Image
                src="/assets/CarpeDiem/Shape.webp" // Path to your GIF
                alt="shape"
                fill={true}
                className={" "}
              />
            </div>
            <div className="absolute left-[28.3%] top-[10%] h-[70vh] w-[0.3vw]">
              <Image
                src="/assets/CarpeDiem/Line.webp" // Path to your GIF
                alt="line"
                fill={true}
                className={" "}
              />
            </div>
            <div className="absolute left-[28.5%] top-[6%] h-[77vh] w-[69vw]">
              <Image
                src="/assets/CarpeDiem/Main.webp" // Path to your GIF
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
                unoptimized={true}
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
                src="/assets/CarpeDiem/Rectangle.webp" // Path to your GIF
                alt="rectangle"
                fill={true}
                className={" "}
                style={{ zIndex: "3" }}
              />
            </div>
            <div className="absolute left-[34%] top-[17%] h-[30vh] w-[33vw]">
              <Image
                src="/assets/CarpeDiem/CarpeText.webp" // Path to your GIF
                alt="text"
                fill={true}
                className={" "}
                style={{ zIndex: "3" }}
              />
            </div>
            <div className="absolute left-[55.5%] top-[18%] h-[13vh] w-[6vw]">
              <Image
                src="/assets/CarpeDiem/ELetter.webp" // Path to your GIF
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
            <div className="absolute left-[28.5%] top-[76%] h-[15vh] w-[38vw]">
              <Image
                src="/assets/CarpeDiem/Down.webp" // Path to your GIF
                alt="Border"
                fill={true}
                className={" "}
                style={{ zIndex: "2" }}
              />
            </div>
            <div className="absolute left-[36%] top-[36%] h-[50vh] w-[43vw]">
              <Image
                src="/assets/CarpeDiem/Radio.webp" // Path to your GIF
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
                unoptimized={true}
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
                unoptimized={true}
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
                src="/assets/CarpeDiem/SingerBackg.webp" // Path to your GIF
                alt="backgrond"
                fill={true}
                className={" "}
                style={{ zIndex: "1" }}
              />
            </div>
            <div className="absolute left-[93.2%] top-[8%] h-[63vh] w-[4.2vw]">
              <Image
                src="/assets/CarpeDiem/SingerName.webp" // Path to your GIF
                alt="Name"
                fill={true}
                className={" "}
                style={{ zIndex: "2" }}
              />
            </div>
            <div className="absolute left-[72%] top-[24%] h-[50vh] w-[20vw]">
              <Image
                src="/assets/CarpeDiem/Singer.webp" // Path to your GIF
                alt="Singer"
                fill={true}
                className={" "}
                style={{ zIndex: "2" }}
              />
            </div>
            <div className="absolute left-[73%] top-[77%] h-[12vh] w-[19vw]">
              <Image
                src="/assets/CarpeDiem/Button.webp" // Path to your GIF
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
                    src="/assets/CarpeDiem/Circle.webp" // Path to your GIF
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
                    src="/assets/CarpeDiem/Play.webp" // Path to your GIF
                    alt="PLay"
                    fill={true}
                    className={"cursor-pointer"}
                    style={{ zIndex: "3" }}
                    onClick={() => setIsClicked(true)}
                  />
                </div>
                <div className="absolute left-[79%] top-[80.5%] h-[4vh] w-[11vw]">
                  <Image
                    src="/assets/CarpeDiem/SongName.webp" // Path to your GIF
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
                    src="/assets/CarpeDiem/Circle.webp" // Path to your GIF
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
                    src="/assets/CarpeDiem/Pause.webp" // Path to your GIF
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
                    unoptimized={true}
                    className={" "}
                    style={{ zIndex: "3" }}
                  />
                </div>
              </>
            )}
          </div>
        </>
      )}
      {isPhone && (
        <>
          <div className="h-screen min-h-[100vh] bg-[#EE79BD]">
            <div className="absolute left-[17%] top-[12%] h-[12px] w-[65vw]">
              <Image
                src="/assets/CarpeDiem/MainBorder.webp" // Path to your GIF
                alt="main"
                fill={true}
                className={" "}
              />
            </div>
            <div className="absolute left-[17%] top-[97%] h-[12px] w-[65vw]">
              <Image
                src="/assets/CarpeDiem/MainBorder.webp" // Path to your GIF
                alt="main"
                fill={true}
                className={" "}
              />
            </div>
            <div className="absolute left-[9%] top-[15%] h-[25vh] w-[83vw]">
              <Image
                src="/assets/CarpeDiem/DiscMobile.webp"
                alt="main"
                fill={true}
                className={" "}
              />
            </div>
            <div
              className="absolute left-[9%] top-[15%] h-[25vh] w-[83vw]"
              style={{
                border: "2px solid black",
                borderRadius: "24px",
                overflow: "hidden",
              }}
            >
              <Image
                src="/assets/CarpeDiem/AnimPhone.gif"
                alt="anim"
                fill={true}
                className={" "}
                unoptimized={true}
                style={{
                  clipPath: "inset(0% round 24px)",
                }}
              />
            </div>
            <div className="absolute left-[14%] top-[24%] h-[7vh] w-[29vw]">
              <Image
                src="/assets/CarpeDiem/Date.webp" // Path to your GIF
                alt="date"
                fill={true}
                className={" "}
              />
            </div>
            <div className="absolute left-[17%] top-[31%] h-[5vh] w-[19vw]">
              <Image
                src="/assets/CarpeDiem/Time.webp" // Path to your GIF
                alt="time"
                fill={true}
                className={" "}
              />
            </div>
            <div className="absolute left-[9%] top-[40%] h-[56vh] w-[83vw]">
              <Image
                src="/assets/CarpeDiem/FramePhone.webp"
                alt="frame"
                fill={true}
                className={" "}
              />
            </div>
            <div className="absolute left-[9%] top-[40%] h-[32vh] w-[16vw]">
              <Image
                src="/assets/CarpeDiem/BorderPhone.webp"
                alt="border"
                fill={true}
                className={" "}
                style={{ zIndex: "2" }}
              />
            </div>
            <div className="absolute left-[10%] top-[65.5%] h-[30vh] w-[60vw]">
              <Image
                src="/assets/CarpeDiem/Checks.gif" // Path to your GIF
                alt="checks"
                fill={true}
                className={" "}
                unoptimized={true}
                style={{
                  borderTopLeftRadius: "0px", // Rounding the top-left corner
                  borderTopRightRadius: "0px",
                  borderBottomLeftRadius: "24px",
                  borderBottomRightRadius: "0px",
                  zIndex: "1",
                }}
              />
            </div>
            <div className="absolute left-[25%] top-[40.5%] h-[33.5vh] w-[66vw]">
              <Image
                src="/assets/CarpeDiem/GeoPhone.gif"
                alt="anim"
                fill={true}
                className={" "}
                unoptimized={true}
                style={{
                  zIndex: "2",
                  borderTopLeftRadius: "0px",
                  borderTopRightRadius: "24px",
                  borderBottomLeftRadius: "0px",
                  borderBottomRightRadius: "0px",
                }}
              />
            </div>
            <div className="absolute left-[16%] top-[45%] h-[20vh] w-[72vw]">
              <Image
                src="/assets/CarpeDiem/Rectangle.webp" // Path to your GIF
                alt="rectangle"
                fill={true}
                className={" "}
                style={{ zIndex: "3" }}
              />
            </div>
            <div className="absolute left-[20%] top-[46%] h-[15vh] w-[62vw]">
              <Image
                src="/assets/CarpeDiem/CarpeText.webp" // Path to your GIF
                alt="text"
                fill={true}
                className={" "}
                style={{ zIndex: "3" }}
              />
            </div>
            <div className="absolute left-[60%] top-[46.5%] h-[7vh] w-[15vw]">
              <Image
                src="/assets/CarpeDiem/ELetter.webp" // Path to your GIF
                alt="text"
                fill={true}
                className={" "}
                style={{ zIndex: "3" }}
              />
            </div>
            <p
              className={
                "absolute left-[20%] top-[52%] w-[6vw] text-[19vw] font-normal leading-[15.261vw] tracking-wide text-white " +
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
                "absolute left-[28%] top-[54%] w-[0vw] text-[17vw] font-normal leading-[15.261vw] tracking-wide text-white " +
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
                "absolute left-[22%] top-[58%] w-[6vw] text-[19vw] font-normal leading-[15.261vw] tracking-wide text-white " +
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
                "absolute left-[32%] top-[59%] w-[6vw] text-[19vw] font-normal leading-[15.261vw] tracking-wide text-white " +
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
            <div className="absolute left-[35%] top-[52%] h-[20vh] w-[67vw]">
              <Image
                src="/assets/CarpeDiem/Radio.webp" // Path to your GIF
                alt="radio"
                fill={true}
                className={" "}
                style={{ zIndex: "3" }}
              />
            </div>
            <div className="absolute left-[24.5%] top-[74%] h-[18.5vh] w-[59vw]">
              <Image
                src="/assets/CarpeDiem/BackPhone.webp" // Path to your GIF
                alt="Background"
                fill={true}
                className={" "}
                style={{ zIndex: "2" }}
              />
            </div>
            <div className="absolute left-[24.5%] top-[92.3%] h-[3.5vh] w-[65vw]">
              <Image
                src="/assets/CarpeDiem/NamePhone.webp" // Path to your GIF
                alt="Name"
                fill={true}
                className={" "}
                style={{ zIndex: "2" }}
              />
            </div>
            <div className="absolute left-[84%] top-[74%] h-[21.7vh] w-[8vw]">
              <Image
                src="/assets/CarpeDiem/GreenPhone.gif" // Path to your GIF
                alt="Border"
                fill={true}
                className={" "}
                unoptimized={true}
                style={{
                  zIndex: "2",
                  borderTopLeftRadius: "0px",
                  borderTopRightRadius: "0px",
                  borderBottomLeftRadius: "0px",
                  borderBottomRightRadius: "24px",
                }}
              />
            </div>
            <div className="absolute left-[16%] top-[68%] h-[25vh] w-[76vw]">
              <Image
                src="/assets/CarpeDiem/Singer.webp" // Path to your GIF
                alt="Singer"
                fill={true}
                className={" "}
                style={{ zIndex: "2" }}
              />
            </div>
            <div className="absolute left-[40%] top-[87%] h-[5vh] w-[27vw]">
              <Image
                src="/assets/CarpeDiem/Button.webp" // Path to your GIF
                alt="Button"
                fill={true}
                className={" "}
                style={{ zIndex: "2" }}
              />
            </div>
            {!isClicked ? (
              <>
                <div
                  className="absolute left-[42%] top-[88%] h-[3vh] w-[4vw] cursor-pointer"
                  onClick={() => setIsClicked(true)}
                >
                  <Image
                    src="/assets/CarpeDiem/Circle.webp" // Path to your GIF
                    alt="Circle"
                    fill={true}
                    className={"cursor-pointer"}
                    style={{ zIndex: "3" }}
                    onClick={() => setIsClicked(true)}
                  />
                </div>
                <div
                  className="absolute left-[43%] top-[88.3%] h-[2vh] w-[2vw] cursor-pointer"
                  onClick={() => setIsClicked(true)}
                >
                  <Image
                    src="/assets/CarpeDiem/Play.webp" // Path to your GIF
                    alt="PLay"
                    fill={true}
                    className={"cursor-pointer"}
                    style={{ zIndex: "3" }}
                    onClick={() => setIsClicked(true)}
                  />
                </div>
                <div className="absolute left-[48%] top-[88.3%] h-[2vh] w-[17vw]">
                  <Image
                    src="/assets/CarpeDiem/SongName.webp" // Path to your GIF
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
                  className="absolute left-[42%] top-[88%] h-[3vh] w-[4vw] cursor-pointer"
                  onClick={() => setIsClicked(false)}
                >
                  <Image
                    src="/assets/CarpeDiem/Circle.webp" // Path to your GIF
                    alt="Circle"
                    fill={true}
                    className={" "}
                    style={{ zIndex: "3" }}
                    onClick={() => setIsClicked(false)}
                  />
                </div>
                <div
                  className="absolute left-[42.5%] top-[88.3%] h-[2vh] w-[3vw] cursor-pointer"
                  onClick={() => setIsClicked(false)}
                >
                  <Image
                    src="/assets/CarpeDiem/Pause.webp" // Path to your GIF
                    alt="Pause"
                    fill={true}
                    className={" "}
                    style={{ zIndex: "3" }}
                    onClick={() => setIsClicked(false)}
                  />
                </div>
                <div className="absolute left-[48%] top-[86.7%] h-[5vh] w-[17vw] cursor-pointer">
                  <Image
                    src="/assets/CarpeDiem/PlayState.gif" // Path to your GIF
                    alt="Music Play"
                    fill={true}
                    unoptimized={true}
                    className={" "}
                    style={{ zIndex: "3" }}
                  />
                </div>
              </>
            )}
          </div>
        </>
      )}
      {isIpad && (
        <>
          <div className={styles["carped-ipad"] + "min-h-[100vh]"}>
            <Image
              src="/assets/CarpeDiem/background.webp"
              fill={true}
              alt="background"
              className="absolute inset-0"
            />
            {/* Overlayed GIF */}
            <div
              className={
                "absolute left-8 top-[6.5%] h-[80vh] w-[25vw] rounded-lg"
              }
            >
              <Image
                src="/assets/CarpeDiem/disc.gif" // Path to your GIF
                alt="overlay gif"
                fill={true}
                unoptimized={true}
                className={"object contain rounded-lg" + styles.disc}
                style={{
                  clipPath: "inset(0% round 24px)", // Custom clip for rounded corners
                }}
              />
            </div>
            <div className="absolute left-[10%] top-[57%] h-[11vh] w-[13vw]">
              <Image
                src="/assets/CarpeDiem/Date.webp" // Path to your GIF
                alt="date"
                fill={true}
                className={" "}
              />
            </div>
            <div className="absolute left-[12%] top-[69%] h-[10vh] w-[9vw]">
              <Image
                src="/assets/CarpeDiem/Time.webp" // Path to your GIF
                alt="time"
                fill={true}
                className={" "}
              />
            </div>
            <div className={"absolute left-[6%] top-[79%] h-[10vh] w-[4vw]"}>
              <Image
                src="/assets/CarpeDiem/Shape.webp" // Path to your GIF
                alt="shape"
                fill={true}
                className={" "}
              />
            </div>
            <div className="absolute left-[22%] top-[79%] h-[10vh] w-[4vw]">
              <Image
                src="/assets/CarpeDiem/Shape.webp" // Path to your GIF
                alt="shape"
                fill={true}
                className={" "}
              />
            </div>
            <div className="absolute left-[28.3%] top-[10%] h-[70vh] w-[0.3vw]">
              <Image
                src="/assets/CarpeDiem/Line.webp" // Path to your GIF
                alt="line"
                fill={true}
                className={" "}
              />
            </div>
            <div className="absolute left-[28.5%] top-[6%] h-[80.5vh] w-[69vw]">
              <Image
                src="/assets/CarpeDiem/Main.webp" // Path to your GIF
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
                unoptimized={true}
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
                src="/assets/CarpeDiem/Rectangle.webp" // Path to your GIF
                alt="rectangle"
                fill={true}
                className={" "}
                style={{ zIndex: "3" }}
              />
            </div>
            <div className="absolute left-[34%] top-[17%] h-[30vh] w-[33vw]">
              <Image
                src="/assets/CarpeDiem/CarpeText.webp" // Path to your GIF
                alt="text"
                fill={true}
                className={" "}
                style={{ zIndex: "3" }}
              />
            </div>
            <div className="absolute left-[55.5%] top-[18%] h-[13vh] w-[6vw]">
              <Image
                src="/assets/CarpeDiem/ELetter.webp" // Path to your GIF
                alt="text"
                fill={true}
                className={" "}
                style={{ zIndex: "3" }}
              />
            </div>
            <p
              className={
                "absolute left-[32.5%] top-[30%] w-[6vw] text-[12vw] font-normal leading-[15.261vw] tracking-wide text-white " +
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
                "absolute left-[38%] top-[32%] w-[0vw] text-[10vw] font-normal leading-[15.261vw] tracking-wide text-white " +
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
                "absolute left-[33.5%] top-[37%] w-[6vw] text-[12vw] font-normal leading-[15.261vw] tracking-wide text-white " +
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
                "absolute left-[40%] top-[38%] w-[6vw] text-[10vw] font-normal leading-[15.261vw] tracking-wide text-white " +
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
            <div className="absolute left-[28.5%] top-[73%] h-[19vh] w-[38vw]">
              <Image
                src="/assets/CarpeDiem/Down.webp" // Path to your GIF
                alt="Border"
                fill={true}
                className={" "}
                style={{ zIndex: "2" }}
              />
            </div>
            <div className="absolute left-[36%] top-[36%] h-[52vh] w-[43vw]">
              <Image
                src="/assets/CarpeDiem/Radio.webp" // Path to your GIF
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
                unoptimized={true}
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
            <div className="absolute left-[68%] top-[36%] h-[52vh] w-[29vw]">
              <Image
                src="/assets/CarpeDiem/Checks.gif" // Path to your GIF
                alt="checks"
                fill={true}
                unoptimized={true}
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
                src="/assets/CarpeDiem/SingerBackg.webp" // Path to your GIF
                alt="backgrond"
                fill={true}
                className={" "}
                style={{ zIndex: "1" }}
              />
            </div>
            <div className="absolute left-[93.2%] top-[8%] h-[63vh] w-[4.2vw]">
              <Image
                src="/assets/CarpeDiem/SingerName.webp" // Path to your GIF
                alt="Name"
                fill={true}
                className={" "}
                style={{ zIndex: "2" }}
              />
            </div>
            <div className="absolute left-[72%] top-[24%] h-[50vh] w-[20vw]">
              <Image
                src="/assets/CarpeDiem/Singer.webp" // Path to your GIF
                alt="Singer"
                fill={true}
                className={" "}
                style={{ zIndex: "2" }}
              />
            </div>
            <div className="absolute left-[73%] top-[75%] h-[8vh] w-[22vw]">
              <Image
                src="/assets/CarpeDiem/Button.webp" // Path to your GIF
                alt="Button"
                fill={true}
                className={" "}
                style={{ zIndex: "2" }}
              />
            </div>
            {!isClicked ? (
              <>
                <div
                  className="absolute left-[74%] top-[76%] h-[5vh] w-[4vw] cursor-pointer"
                  onClick={() => setIsClicked(true)}
                >
                  <Image
                    src="/assets/CarpeDiem/Circle.webp" // Path to your GIF
                    alt="Circle"
                    fill={true}
                    className={"cursor-pointer"}
                    style={{ zIndex: "3" }}
                    onClick={() => setIsClicked(true)}
                  />
                </div>
                <div
                  className="absolute left-[75.5%] top-[77%] h-[4vh] w-[2vw] cursor-pointer"
                  onClick={() => setIsClicked(true)}
                >
                  <Image
                    src="/assets/CarpeDiem/Play.webp" // Path to your GIF
                    alt="PLay"
                    fill={true}
                    className={"cursor-pointer"}
                    style={{ zIndex: "3" }}
                    onClick={() => setIsClicked(true)}
                  />
                </div>
                <div className="absolute left-[79%] top-[77%] h-[4vh] w-[14vw]">
                  <Image
                    src="/assets/CarpeDiem/SongName.webp" // Path to your GIF
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
                  className="absolute left-[74%] top-[76%] h-[5vh] w-[4vw] cursor-pointer"
                  onClick={() => setIsClicked(false)}
                >
                  <Image
                    src="/assets/CarpeDiem/Circle.webp" // Path to your GIF
                    alt="Circle"
                    fill={true}
                    className={" "}
                    style={{ zIndex: "3" }}
                    onClick={() => setIsClicked(false)}
                  />
                </div>
                <div
                  className="absolute left-[75.2%] top-[77%] h-[4vh] w-[2vw] cursor-pointer"
                  onClick={() => setIsClicked(false)}
                >
                  <Image
                    src="/assets/CarpeDiem/Pause.webp" // Path to your GIF
                    alt="Pause"
                    fill={true}
                    className={" "}
                    style={{ zIndex: "3" }}
                    onClick={() => setIsClicked(false)}
                  />
                </div>
                <div className="absolute left-[79%] top-[77%] h-[4vh] w-[14vw] cursor-pointer">
                  <Image
                    src="/assets/CarpeDiem/PlayState.gif" // Path to your GIF
                    alt="Music Play"
                    fill={true}
                    unoptimized={true}
                    className={" "}
                    style={{ zIndex: "3" }}
                  />
                </div>
              </>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default CarpeDiem;
