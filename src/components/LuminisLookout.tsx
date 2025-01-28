"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "../styles/Luminis.module.css";
import butsty from "../styles/FooterButton.module.css";

export const runtime = "edge";

const LuminisLookout = () => {
  const [isPhone, setIsPhone] = useState(false);
  const [isIpad, setIsIpad] = useState(false);
  const [isLap, setIsLap] = useState(false);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);

    const resizeFunc = () => {
      if (typeof window === "undefined") return;

      const width = window.innerWidth;
      setIsPhone(width >= 320 && width <= 800);
      setIsIpad(width >= 801 && width <= 1024);
      setIsLap(width >= 1025);
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
    <>
      {isLap && (
        <>
          <div className={"min-h-screen bg-[#422FD1] " + styles.lumin}>
            <div className="absolute left-[0%] top-[0%] h-full w-[100vw]">
              <Image
                src="/assets/Luminis/maze.png"
                alt="main"
                fill={true}
                className={" "}
              />
            </div>

            <div className="absolute left-[19%] top-[15.5%] h-[65vh] w-[60vw]">
              <Image
                src="/assets/Luminis/shadow.png"
                alt="main"
                fill={true}
                style={{
                  zIndex: "2",
                }}
              />
            </div>
            <div className="absolute left-[21%] top-[20.5%] h-[57vh] w-[60.7vw]">
              <Image
                src="/assets/Luminis/pink.png"
                alt="main"
                fill={true}
                style={{
                  zIndex: "3",
                }}
              />
            </div>
            <div className="absolute left-[21%] top-[14%] h-[8vh] w-[60.7vw]">
              <Image
                src="/assets/Luminis/border.png"
                alt="main"
                fill={true}
                style={{
                  zIndex: "3",
                  borderTopLeftRadius: "24px",
                  borderTopRightRadius: "24px",
                  borderBottomLeftRadius: "0px",
                  borderBottomRightRadius: "0px",
                }}
              />
            </div>
            <div className="absolute left-[15.5%] top-[52.5%] h-[36vh] w-[22.5vw]">
              <Image
                src="/assets/Luminis/grid.png"
                alt="main"
                fill={true}
                className={"z-2"}
              />
            </div>
            <div className="absolute left-[63.4%] top-[6%] h-[36vh] w-[22.5vw]">
              <Image
                src="/assets/Luminis/grid.png"
                alt="main"
                fill={true}
                className={"z-2"}
              />
            </div>
            <div className="absolute left-[63.4%] top-[6%] h-[36vh] w-[22.5vw]">
              <Image
                src="/assets/Luminis/grid.png"
                alt="main"
                fill={true}
                className={"z-2"}
              />
            </div>
            <div className="absolute left-[24.5%] top-[27%] h-[44.5vh] w-[45vw]">
              <Image
                src="/assets/Luminis/yellow.png"
                alt="main"
                fill={true}
                style={{
                  zIndex: "3",
                }}
              />
            </div>
            <div className="absolute left-[12%] top-[18.5%] h-[38vh] w-[17vw]">
              <Image
                src="/assets/Luminis/star.png"
                alt="main"
                fill={true}
                style={{
                  zIndex: "3",
                }}
              />
            </div>
            <div className="absolute left-[16%] top-[4%] h-[80vh] w-[69vw]">
              <Image
                src="/assets/Luminis/twinkle.png"
                alt="main"
                fill={true}
                style={{
                  zIndex: "3",
                }}
              />
            </div>
            <div className="absolute left-[18%] top-[1%] h-[85vh] w-[70vw]">
              <Image
                src="/assets/Luminis/mark.png"
                alt="main"
                fill={true}
                style={{
                  zIndex: "3",
                }}
              />
            </div>
            <div className="absolute left-[23%] top-[32%] h-[35vh] w-[43vw]">
              <Image
                src="/assets/Luminis/text.png"
                alt="main"
                fill={true}
                style={{
                  zIndex: "3",
                }}
              />
            </div>
            <div className="absolute left-[27%] top-[60%] h-[15vh] w-[13vw]">
              <Image
                src="/assets/Luminis/books.png"
                alt="main"
                fill={true}
                style={{
                  zIndex: "3",
                }}
              />
            </div>
            <div className="absolute left-[57%] top-[3%] h-[40vh] w-[23vw]">
              <Image
                src="/assets/Luminis/smile.png"
                alt="main"
                fill={true}
                style={{
                  zIndex: "3",
                }}
              />
            </div>
            <div className="absolute left-[70.5%] top-[35%] h-[15vh] w-[10vw]">
              <Image
                src="/assets/Luminis/plus.png"
                alt="main"
                fill={true}
                style={{
                  zIndex: "3",
                }}
              />
            </div>
            <div className="absolute left-[76.5%] top-[55%] h-[5vh] w-[3vw]">
              <Image
                src="/assets/Luminis/blue.png"
                alt="main"
                fill={true}
                style={{
                  zIndex: "3",
                }}
              />
            </div>
            <div className="absolute left-[72%] top-[59%] h-[5vh] w-[3vw]">
              <Image
                src="/assets/Luminis/blue.png"
                alt="main"
                fill={true}
                style={{
                  zIndex: "3",
                }}
              />
            </div>
            <div className="absolute left-[14.5%] top-[4%] h-[80vh] w-[75vw]">
              <Image
                src="/assets/Luminis/dots.png"
                alt="main"
                fill={true}
                style={{
                  zIndex: "3",
                }}
              />
            </div>
            <div className="absolute left-[70%] top-[17%] h-[36vh] w-[22.5vw]">
              <Image
                src="/assets/Luminis/wave.gif"
                alt="main"
                fill={true}
                className={"z-2"}
              />
            </div>
            <div className="absolute left-[70%] top-[-11%] h-[30vh] w-[18vw] rotate-[10deg] transform">
              <Image
                src="/assets/Luminis/wave.gif"
                alt="main"
                fill={true}
                className={"z-2"}
              />
            </div>
            <div className="absolute left-[7%] top-[58%] h-[30vh] w-[18vw] rotate-[10deg] transform">
              <Image
                src="/assets/Luminis/wave.gif"
                alt="main"
                fill={true}
                style={{
                  zIndex: "3",
                }}
              />
            </div>
            <div className="absolute left-[30%] top-[75%] h-[30vh] w-[15vw] rotate-[12deg] transform">
              <Image
                src="/assets/Luminis/wave.gif"
                alt="main"
                fill={true}
                style={{
                  zIndex: "3",
                }}
              />
            </div>
            <div
              className={`${butsty.container} mt-[30vh] translate-x-[26vw] translate-y-6 scale-[1.2] mobile3:scale-100`}
              style={{ zIndex: 4 }}
            >
              <a
                href="/game"
                rel="noreferrer"
                className={butsty.button}
              >
                <div className={butsty.button__content}>
                  <span
                    className={`${butsty.button__text} font-neue-haas-grotesk`}
                  >
                    Enter
                  </span>

                  <div className={butsty.button__reflection_1}></div>
                </div>

                <Image
                  src="/assets/HiddenQuest&Button/star1.png"
                  alt="Star 1"
                  className={`${butsty.button__star_1} ${butsty.image}`}
                  width={24}
                  height={24}
                />
                <Image
                  src="/assets/HiddenQuest&Button/star1.png"
                  alt="Star 2"
                  className={`${butsty.button__star_2} ${butsty.image}`}
                  width={24}
                  height={24}
                />
                <Image
                  src="/assets/HiddenQuest&Button/star1.png"
                  alt="Star 3"
                  className={`${butsty.button__star_3} ${butsty.image}`}
                  width={24}
                  height={24}
                />
                <Image
                  src="/assets/HiddenQuest&Button/star1.png"
                  alt="Star 4"
                  className={`${butsty.button__star_4} ${butsty.image}`}
                  width={24}
                  height={24}
                />
                <Image
                  src="/assets/HiddenQuest&Button/star1.png"
                  alt="Star 5"
                  className={`${butsty.button__star_5} ${butsty.image}`}
                  width={24}
                  height={24}
                />
                <Image
                  src="/assets/HiddenQuest&Button/star1.png"
                  alt="Star 6"
                  className={`${butsty.button__star_6} ${butsty.image}`}
                  width={24}
                  height={24}
                />
                <Image
                  src="/assets/HiddenQuest&Button/star1.png"
                  alt="Star 7"
                  className={`${butsty.button__star_7} ${butsty.image}`}
                  width={24}
                  height={24}
                />

                <div className={butsty.button__shadow}></div>
              </a>
            </div>
          </div>
        </>
      )}

      {isPhone && (
        <>
          <div className={"min-h-[100vh] bg-[#422FD1] " + styles.lumin}>
            <div className="absolute left-[0%] top-[0%] h-[100vh] w-[100vw]">
              <Image
                src="/assets/Luminis/maze.png"
                alt="main"
                fill={true}
                className={" "}
              />
            </div>
            <div className="absolute left-[13%] top-[20%] h-[68vh] w-[75vw]">
              <Image
                src="/assets/Luminis/frame.png"
                alt="main"
                fill={true}
                style={{ zIndex: "3" }}
              />
            </div>
            <div className="absolute left-[15%] top-[33%] h-[26vh] w-[73vw]">
              <Image
                src="/assets/Luminis/textPhone.png"
                alt="main"
                fill={true}
                style={{ zIndex: "3" }}
              />
            </div>
            <div className="absolute left-[0%] top-[68%] h-[33vh] w-[45vw]">
              <Image
                src="/assets/Luminis/grid.png"
                alt="main"
                fill={true}
                className={"z-2"}
              />
            </div>
            <div className="absolute left-[63%] top-[6%] h-[32vh] w-[49vw]">
              <Image
                src="/assets/Luminis/grid.png"
                alt="main"
                fill={true}
                className={"z-2"}
              />
            </div>
            <div className="absolute left-[12%] top-[55%] h-[20vh] w-[38vw]">
              <Image
                src="/assets/Luminis/star.png"
                alt="main"
                fill={true}
                style={{
                  zIndex: "3",
                }}
              />
            </div>
            <div className="absolute left-[16%] top-[10%] h-[74vh] w-[85vw]">
              <Image
                src="/assets/Luminis/twinkle.png"
                alt="main"
                fill={true}
                style={{
                  zIndex: "3",
                }}
              />
            </div>
            <div className="absolute left-[43%] top-[73%] h-[27vh] w-[57vw]">
              <Image
                src="/assets/Luminis/markPhone.png"
                alt="main"
                fill={true}
                style={{
                  zIndex: "3",
                }}
              />
            </div>
            <div className="absolute left-[59%] top-[58%] h-[13vh] w-[25vw]">
              <Image
                src="/assets/Luminis/booksPhone.png"
                alt="main"
                fill={true}
                style={{
                  zIndex: "3",
                }}
              />
            </div>
            <div className="absolute left-[53%] top-[13%] h-[22vh] w-[45vw]">
              <Image
                src="/assets/Luminis/smile.png"
                alt="main"
                fill={true}
                style={{
                  zIndex: "3",
                }}
              />
            </div>
            <div className="absolute left-[60%] top-[4%] h-[20vh] w-[25vw] rotate-[20deg] transform">
              <Image
                src="/assets/Luminis/wave.gif"
                alt="main"
                fill={true}
                className={"z-2"}
              />
            </div>
            <div className="absolute left-[20%] top-[80%] h-[20vh] w-[28vw] rotate-[20deg] transform">
              <Image
                src="/assets/Luminis/wave.gif"
                alt="main"
                fill={true}
                style={{
                  zIndex: "3",
                }}
              />
            </div>
            <div
              className={`${butsty.container} bg-black mt-[29.5vh] translate-x-[10.5vw] scale-[1.2] mobile3:scale-100`}
              style={{ zIndex: 4 }}
            >
              <a
                href="/game"
                rel="noreferrer"
                className={butsty.button}
              >
                <div className={butsty.button__content}>
                  <span
                    className={`${butsty.button__text} font-neue-haas-grotesk`}
                  >
                    Enter
                  </span>

                  {/* <div className={butsty.button__reflection_1}></div> */}
                </div>

                <Image
                  src="/assets/HiddenQuest&Button/star1.png"
                  alt="Star 1"
                  className={`${butsty.button__star_1} ${butsty.image}`}
                  width={24}
                  height={24}
                />
                <Image
                  src="/assets/HiddenQuest&Button/star1.png"
                  alt="Star 2"
                  className={`${butsty.button__star_2} ${butsty.image}`}
                  width={24}
                  height={24}
                />
                <Image
                  src="/assets/HiddenQuest&Button/star1.png"
                  alt="Star 3"
                  className={`${butsty.button__star_3} ${butsty.image}`}
                  width={24}
                  height={24}
                />
                <Image
                  src="/assets/HiddenQuest&Button/star1.png"
                  alt="Star 4"
                  className={`${butsty.button__star_4} ${butsty.image}`}
                  width={24}
                  height={24}
                />
                <Image
                  src="/assets/HiddenQuest&Button/star1.png"
                  alt="Star 5"
                  className={`${butsty.button__star_5} ${butsty.image}`}
                  width={24}
                  height={24}
                />
                <Image
                  src="/assets/HiddenQuest&Button/star1.png"
                  alt="Star 6"
                  className={`${butsty.button__star_6} ${butsty.image}`}
                  width={24}
                  height={24}
                />
                <Image
                  src="/assets/HiddenQuest&Button/star1.png"
                  alt="Star 7"
                  className={`${butsty.button__star_7} ${butsty.image}`}
                  width={24}
                  height={24}
                />

                <div className={butsty.button__shadow}></div>
              </a>
            </div>
          </div>
        </>
      )}
      {isIpad && (
        <>
          <div className={"min-h-[100vh] bg-[#422FD1] overflow-hidden " + styles.lumin}>
            <div className="absolute left-[0%] top-[0%] h-[100vh] w-[100vw]">
              <Image
                src="/assets/Luminis/maze.png"
                alt="main"
                fill={true}
                className={" "}
              />
            </div>
            <div className="absolute left-[13%] top-[12%] h-[68vh] w-[75vw]">
              <Image
                src="/assets/Luminis/frame.png"
                alt="main"
                fill={true}
                style={{ zIndex: "3" }}
              />
            </div>
            <div className="absolute left-[15%] top-[25%] h-[26vh] w-[73vw]">
              <Image
                src="/assets/Luminis/textPhone.png"
                alt="main"
                fill={true}
                style={{ zIndex: "3" }}
              />
            </div>
            <div className="absolute left-[0%] top-[68%] h-[33vh] w-[45vw]">
              <Image
                src="/assets/Luminis/grid.png"
                alt="main"
                fill={true}
                className={"z-2"}
              />
            </div>
            <div className="absolute left-[63%] top-[0%] h-[34vh] w-[49vw]">
              <Image
                src="/assets/Luminis/grid.png"
                alt="main"
                fill={true}
                className={"z-2"}
              />
            </div>
            <div className="absolute left-[12%] top-[50%] h-[23vh] w-[32vw]">
              <Image
                src="/assets/Luminis/star.png"
                alt="main"
                fill={true}
                style={{
                  zIndex: "3",
                }}
              />
            </div>
            <div className="absolute left-[13%] top-[8%] h-[76vh] w-[85vw]">
              <Image
                src="/assets/Luminis/twinkle.png"
                alt="main"
                fill={true}
                style={{
                  zIndex: "3",
                }}
              />
            </div>
            <div className="absolute left-[54.5%] top-[65%] h-[27vh] w-[45vw]">
              <Image
                src="/assets/Luminis/markPhone.png"
                alt="main"
                fill={true}
                style={{
                  zIndex: "3",
                }}
              />
            </div>
            <div className="absolute left-[59%] top-[50%] h-[13vh] w-[25vw]">
              <Image
                src="/assets/Luminis/booksPhone.png"
                alt="main"
                fill={true}
                style={{
                  zIndex: "3",
                }}
              />
            </div>
            <div className="absolute left-[53%] top-[6%] h-[22vh] w-[45vw]">
              <Image
                src="/assets/Luminis/smile.png"
                alt="main"
                fill={true}
                style={{
                  zIndex: "3",
                }}
              />
            </div>
            <div className="absolute left-[60%] top-[-4%] h-[20vh] w-[25vw] rotate-[20deg] transform">
              <Image
                src="/assets/Luminis/wave.gif"
                alt="main"
                fill={true}
                className={"z-2"}
              />
            </div>
            <div className="absolute left-[20%] top-[76%] h-[20vh] w-[28vw] rotate-[20deg] transform">
              <Image
                src="/assets/Luminis/wave.gif"
                alt="main"
                fill={true}
                style={{
                  zIndex: "3",
                }}
              />
            </div>
            <div
              className={`${butsty.container} mt-[26vh] translate-x-[19vw] scale-[1.2] mobile3:scale-100`}
              style={{ zIndex: 4 }}
            >
              <a
                href="/game"
                rel="noreferrer"
                className={butsty.button}
              >
                <div className={butsty.button__content}>
                  <span
                    className={`${butsty.button__text} font-neue-haas-grotesk`}
                  >
                    Enter
                  </span>

                  <div className={butsty.button__reflection_1}></div>
                </div>

                <Image
                  src="/assets/HiddenQuest&Button/star1.png"
                  alt="Star 1"
                  className={`${butsty.button__star_1} ${butsty.image}`}
                  width={24}
                  height={24}
                />
                <Image
                  src="/assets/HiddenQuest&Button/star1.png"
                  alt="Star 2"
                  className={`${butsty.button__star_2} ${butsty.image}`}
                  width={24}
                  height={24}
                />
                <Image
                  src="/assets/HiddenQuest&Button/star1.png"
                  alt="Star 3"
                  className={`${butsty.button__star_3} ${butsty.image}`}
                  width={24}
                  height={24}
                />
                <Image
                  src="/assets/HiddenQuest&Button/star1.png"
                  alt="Star 4"
                  className={`${butsty.button__star_4} ${butsty.image}`}
                  width={24}
                  height={24}
                />
                <Image
                  src="/assets/HiddenQuest&Button/star1.png"
                  alt="Star 5"
                  className={`${butsty.button__star_5} ${butsty.image}`}
                  width={24}
                  height={24}
                />
                <Image
                  src="/assets/HiddenQuest&Button/star1.png"
                  alt="Star 6"
                  className={`${butsty.button__star_6} ${butsty.image}`}
                  width={24}
                  height={24}
                />
                <Image
                  src="/assets/HiddenQuest&Button/star1.png"
                  alt="Star 7"
                  className={`${butsty.button__star_7} ${butsty.image}`}
                  width={24}
                  height={24}
                />

                <div className={butsty.button__shadow}></div>
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default LuminisLookout;
