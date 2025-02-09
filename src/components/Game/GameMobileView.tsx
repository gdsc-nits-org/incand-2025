"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import styles from "~/styles/Game.module.css";
import Link from "next/link";
import ApprovedPhotos from "./ApprovedPhotos";

interface GameMobileViewProps {
  level: number;
  lettersHaving: string;
  top10Players: {
    name: string;
    pic: string;
    letters: string;
    level: number;
    flag: Date;
  }[];
  setUploadPopup: (value: boolean) => void;
}

const GameMobileView: React.FC<GameMobileViewProps> = ({
  level,
  lettersHaving,
  top10Players,
  setUploadPopup,
}) => {
  const [maxCharsForUserID, setMaxCharsForUserID] = useState(20);
  const [leaderboardStartsFrom, setLeaderBoardStartsFrom] = useState(4);
  const heroRef = useRef(null);
  const rulesRef = useRef<HTMLDivElement>(null);

  const scrollToRulesSection = () => {
    if (rulesRef.current) {
      rulesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const checkViewport = () => {
      if (window.innerWidth > 1180) {
        setLeaderBoardStartsFrom(4);
        setMaxCharsForUserID(20);
      } else {
        setLeaderBoardStartsFrom(3);
        setMaxCharsForUserID(7);
      }
    };
    checkViewport();
    window.addEventListener("resize", checkViewport);

    return () => window.removeEventListener("resize", checkViewport);
  });

  return (
    <div>
      {/* Hero Section */}
      <section ref={heroRef}>
        <div className={`relative grid h-screen bg-black ipadair:h-[46vw]`}>
          <div
            className={`absolute left-[-2.1vw] h-full w-screen bg-[url('/assets/Game/game_anim.gif')] bg-cover bg-center bg-no-repeat ipadair:left-[-1.1vw]`}
          >
            {" "}
          </div>
          <div
            className={`absolute h-full w-screen bg-[url('/assets/landing/maze.webp')] bg-cover bg-center bg-no-repeat ipadair:inset-0 ipadair:bg-contain`}
          ></div>

          <div
            className={`relative z-[1] mt-[10vh] h-[9vh] w-[35.5vw] justify-self-center ipadair:mt-[3vw] ipadair:h-[12vh] ipadair:w-[10.5vw]`}
          >
            <Image
              className={`object-contain`}
              src="/assets/Game/logo.webp"
              fill
              alt="logo"
            />
          </div>
          <div
            className={`relative bottom-[2vw] flex flex-col items-center justify-center self-end justify-self-center ipadair:mt-[-10vw]`}
          >
            <p
              className={
                `z-[1] text-center text-[6.5vh] font-medium leading-[6.5vh] tracking-wider text-[#FFA6F6] ipadair:text-[6.25vw] ipadair:leading-[6.25vw] ` +
                styles.heroText
              }
              style={{ fontFamily: "Ahsing" }}
            >
              Luminis Lookout
            </p>
            <p
              className={`z-[1] mt-[5vh] px-[12vw] text-center text-[2vh] font-medium leading-[3vh] tracking-wider text-white ipadair:mt-[2vw] ipadair:text-[1.5vw] ipadair:leading-[2.5vw]`}
              style={{ fontFamily: "Tusker Grotes" }}
            >
              Tell us your story, and if our stars align, together we might just
              weave another. Where, when and what you ask? Patience has always
              been key, just stay curious!
            </p>
            <button
              onClick={scrollToRulesSection}
              className={`relative z-[1] mt-[-5vh] h-[20vh] w-[30vw] ipadair:mt-[-2vw] ipadair:h-[10vw] ipadair:w-[10vw]`}
            >
              <Image
                className={`object-contain`}
                src="/assets/Game/arrow_anim.gif"
                fill
                alt="logo"
                unoptimized
              />
            </button>
          </div>
        </div>
      </section>
      {/* Hero Section */}

      {/* Rules Section */}
      <section ref={rulesRef}>
        <div
          id="rulesContainer"
          className={`relative mt-[-5vw] flex h-[180vw] items-center justify-center rounded-t-[4vw] bg-[#FFC2F9] ipadair:mt-[-2vw] ipadair:h-[50vw] ipadair:rounded-t-[2vw]`}
        >
          <div
            className={`absolute inset-0 bg-[url('/assets/Game/maze_white_one.webp')] bg-cover bg-center bg-no-repeat`}
          ></div>
          <div
            className={`absolute right-0 top-[8vw] hidden w-[95%] ipadair:block`}
          >
            <svg
              viewBox="0 0 1808 483"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M752 34.5V34.5C747.846 8.65222 779.45 -7.16654 797.652 11.65L803.666 17.8675C809.305 23.6966 812.293 31.5913 811.927 39.6931L811.386 51.6705C810.038 81.5069 785.998 105.304 756.149 106.346L704.869 108.138C697.971 108.379 691.065 107.987 684.238 106.966L634.256 99.4945C609.786 95.8365 585.078 94 560.335 94H434L291.5 86L244.861 82.8717C221.597 81.3114 198.285 85.1043 176.715 93.9591V93.9591C166.932 97.9755 157.592 102.998 148.848 108.947L92.5618 147.234C81.9236 154.471 74.4482 165.494 71.6613 178.055L57.0908 243.724C51.5864 268.533 17.9184 272.569 6.70663 249.764V249.764C-5.07672 225.796 21.5052 201.167 44.5059 214.741L58.5 223V223C73.1885 232.466 90.2931 237.5 107.768 237.5H291.5L374.015 244.908C421.974 249.214 462.807 281.566 477.968 327.27L496.941 384.471C509.725 423.011 553.361 441.664 590.054 424.276L597.631 420.685C624.785 407.817 657.272 417.67 672.703 443.453V443.453C680.582 456.619 693.329 466.152 708.184 469.989L730.811 475.834C740.232 478.268 749.924 479.5 759.655 479.5H841.165C902.697 479.5 958.989 444.862 986.724 389.935L991.889 379.704C1022.53 319.026 1090.48 286.932 1156.81 301.818V301.818C1197.1 310.861 1239.34 302.701 1273.36 279.301L1349 227.281C1352.66 224.768 1356.58 222.675 1360.7 221.041L1364.57 219.507C1376.69 214.701 1390.22 214.917 1402.18 220.107V220.107C1407.35 222.352 1412.88 223.688 1418.51 224.056L1608.19 236.466C1618.71 237.154 1629.16 238.707 1639.43 241.108L1653.44 244.386C1674.82 249.386 1697.1 249.074 1718.33 243.477V243.477C1733.33 239.522 1747.53 233.001 1760.31 224.202L1779.71 210.844C1789.2 204.306 1797.86 196.634 1805.5 188V188"
                stroke="#E01A1A"
                stroke-width="6"
              />
            </svg>
          </div>
          <div
            className={`relative right-[1vw] top-0 block w-full ipadair:top-[8vw] ipadair:hidden ipadair:w-[95%]`}
          >
            <Image
              alt="rulePath"
              src="/assets/Game/rule_path_mobile.webp"
              layout="responsive"
              width={100}
              height={100}
              unoptimized
            />
          </div>
          <p
            className={`absolute left-[14vw] top-[15.5vw] text-[9vw] tracking-wider text-black ipadair:left-[16.2vw] ipadair:top-[7.5vw] ipadair:text-[3.5vw]`}
            style={{ fontFamily: "Rocket Thunder" }}
          >
            RULES TO FOLLOW
          </p>

          {/* Step 01 */}
          <div
            className={`absolute left-[10vw] top-[40vw] flex flex-col gap-[3vw] ipadair:top-0 ipadair:gap-[1vw]`}
          >
            <div className={`flex w-fit flex-col items-center justify-center`}>
              <svg
                className={`hidden h-[19vw] ipadair:block`}
                viewBox="0 0 19 347"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="3"
                  height="336"
                  transform="translate(8)"
                  fill="black"
                />
                <circle cx="9.5" cy="337.5" r="9.5" fill="black" />
              </svg>
              <p
                className={`relative top-[-0.5vw] rounded-[1.5vw] border-[0.50vw] border-black bg-[#FAE00D] px-[5vw] py-[0.5vw] text-[5vw] font-bold shadow-[0.9vw_0.9vw_0px_#000000] ipadair:rounded-[0.5vw] ipadair:border-[0.15vw] ipadair:px-[1.5vw] ipadair:text-[1.5vw] ipadair:shadow-[0.3vw_0.3vw_0px_#000000]`}
                style={{ fontFamily: "Bricolage Grotesque" }}
              >
                Step 01
              </p>
            </div>
            <p
              className={`w-[80vw] text-[5vw] font-extrabold leading-[6vw] ipadair:w-[15vw] ipadair:text-[1.5vw] ipadair:leading-[2vw]`}
              style={{ fontFamily: "Bricolage Grotesque" }}
            >
              Jump into the game by signing up! No signup, no play, so
              don&apos;t miss out!
            </p>
            <div
              className={`relative left-[-0.5vw] hidden w-[17vw] ipadair:block`}
            >
              <Image
                src="/assets/Game/icon_rules.webp"
                layout="responsive"
                width={100}
                height={100}
                alt="logo"
                unoptimized
              />
            </div>
          </div>
          {/* Step 01 */}

          {/* Step 02 */}
          <div
            className={`absolute top-[88vw] flex flex-col gap-[3vw] ipadair:top-0 ipadair:items-center ipadair:gap-[1vw]`}
          >
            <div className={`flex w-fit flex-col items-center justify-center`}>
              <svg
                className={`hidden h-[31.5vw] ipadair:block`}
                viewBox="0 0 19 590"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="3"
                  height="571.297"
                  transform="translate(8)"
                  fill="black"
                />
                <ellipse
                  cx="9.5"
                  cy="573.848"
                  rx="9.5"
                  ry="16.1527"
                  fill="black"
                />
              </svg>
              <p
                className={`relative top-[-0.5vw] rounded-[1.5vw] border-[0.50vw] border-black bg-[#FAE00D] px-[5vw] py-[0.5vw] text-[5vw] font-bold shadow-[0.9vw_0.9vw_0px_#000000] ipadair:rounded-[0.5vw] ipadair:border-[0.15vw] ipadair:px-[1.5vw] ipadair:text-[1.5vw] ipadair:shadow-[0.3vw_0.3vw_0px_#000000]`}
                style={{ fontFamily: "Bricolage Grotesque" }}
              >
                Step 02
              </p>
            </div>
            <p
              className={`w-[82vw] text-[5vw] font-extrabold leading-[6vw] ipadair:w-[21vw] ipadair:text-center ipadair:text-[1.5vw] ipadair:leading-[2vw]`}
              style={{ fontFamily: "Bricolage Grotesque" }}
            >
              Upload a cool pic of our campus & let the admin give it a
              thumbs-up! Once approved, you&apos;ll receive a mystery alphabet!
            </p>
          </div>
          {/* Step 02 */}

          {/* Step 03 */}
          <div
            className={`absolute right-[10vw] top-[139vw] flex flex-col gap-[3vw] ipadair:top-0 ipadair:items-end ipadair:gap-[1vw]`}
          >
            <div className={`flex w-fit flex-col items-center justify-center`}>
              <svg
                className={`hidden h-[19vw] ipadair:block`}
                viewBox="0 0 19 347"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="3"
                  height="336"
                  transform="translate(8)"
                  fill="black"
                />
                <circle cx="9.5" cy="337.5" r="9.5" fill="black" />
              </svg>
              <p
                className={`relative top-[-0.5vw] rounded-[1.5vw] border-[0.50vw] border-black bg-[#FAE00D] px-[5vw] py-[0.5vw] text-[5vw] font-bold shadow-[0.9vw_0.9vw_0px_#000000] ipadair:rounded-[0.5vw] ipadair:border-[0.15vw] ipadair:px-[1.5vw] ipadair:text-[1.5vw] ipadair:shadow-[0.3vw_0.3vw_0px_#000000]`}
                style={{ fontFamily: "Bricolage Grotesque" }}
              >
                Step 03
              </p>
            </div>
            <p
              className={`w-[80vw] text-[5vw] font-extrabold leading-[6vw] ipadair:w-[15vw] ipadair:text-end ipadair:text-[1.5vw] ipadair:leading-[2vw]`}
              style={{ fontFamily: "Bricolage Grotesque" }}
            >
              Collect all the correct alphabets of the word{" "}
              <span className="font-bricolage font-extrabold">
                &quot;INCAND&quot;
              </span>
              , win amazing prizes, and enjoy the ultimate alphabet hunt
              adventure. Are you ready to play?
            </p>
          </div>
          {/* Step 03 */}
        </div>
      </section>
      {/* Rules Section */}
      <div
        id="uploadContainer"
        className={`relative mt-[-5vw] flex flex-col items-center justify-center overflow-x-hidden rounded-t-[4vw] border-[1.75vw] border-black bg-[#FAE00D] pb-[5vw] pt-[3vw] ipadair:mt-[-2vw] ipadair:flex-row ipadair:rounded-t-[2vw] ipadair:border-[0.75vw]`}
      >
        <div
          className={`absolute inset-0 bg-[url('/assets/Game/maze_white_one.webp')] bg-cover bg-center bg-no-repeat`}
        ></div>
        <div className={`flex`}>
          <p
            className={`relative w-[42.5vw] text-[15.25vw] leading-[18.5vw] tracking-wider text-black ipadair:text-[6.25vw] ipadair:leading-[7.5vw]`}
            style={{ fontFamily: "Rocket Thunder" }}
          >
            UPL<span className={`text-[#E1067B]`}>O</span>AD<br></br>Y
            <span className={`text-[#E1067B]`}>O</span>UR SH
            <span className={`text-[#E1067B]`}>O</span>TS!
          </p>
          <svg
            className={`me-[-15vw] ms-[5vw] w-[45vw] rotate-90 ipadair:me-0 ipadair:ms-0 ipadair:w-[16vw] ipadair:rotate-0`}
            viewBox="0 0 323 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.666667 15C0.666667 22.3638 6.6362 28.3333 14 28.3333C21.3638 28.3333 27.3333 22.3638 27.3333 15C27.3333 7.6362 21.3638 1.66667 14 1.66667C6.6362 1.66667 0.666667 7.6362 0.666667 15ZM322.018 15L297.018 0.566243V29.4338L322.018 15ZM14 17.5H299.518V12.5H14V17.5Z"
              fill="black"
            />
          </svg>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            setUploadPopup(true);
          }}
          className={`relative my-[8vw] ms-[3vw] rounded-[15vw] border-[0.6vw] border-black bg-[#F8DB59] px-[1.5vw] py-[1vw] shadow-[0px_1.2vw_0px_#E1067B] transition-all duration-200 hover:scale-[1.1] ipadair:my-0 ipadair:rounded-[3vw] ipadair:border-[0.3vw] ipadair:px-[1vw] ipadair:py-[0.5vw] ipadair:shadow-[0px_0.4vw_0px_#E1067B]`}
        >
          <div
            className={`flex items-center justify-center gap-[4vw] ipadair:gap-[2vw]`}
          >
            <svg
              className={`w-[13.7vw] ipadair:w-[4.7vw]`}
              viewBox="0 0 93 94"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="92.6897"
                height="92.6897"
                rx="46.3448"
                transform="matrix(1 0 0 -1 0.310547 93.5518)"
                fill="black"
              />
              <path
                d="M71.7567 50.5526C74.3314 49.0661 74.3314 45.3498 71.7567 43.8633L36.9981 23.7954C34.4234 22.3089 31.205 24.167 31.205 27.14V67.2758C31.205 70.2489 34.4234 72.107 36.9981 70.6205L71.7567 50.5526Z"
                fill="#EEFCFE"
              />
            </svg>
            <p
              className={`hover me-[4vw] text-[6.135vw] text-black transition-all duration-200 ipadair:me-[2vw] ipadair:text-[2.135vw]`}
              style={{ fontFamily: "Mochiy Pop P One" }}
            >
              UPLOAD
            </p>
          </div>
        </button>
      </div>

      {/* Collections Section */}
      <div
        className={`relative mt-[-5vw] flex h-[70vw] overflow-x-hidden rounded-t-[4vw] border-[1.5vw] border-black bg-[#001E30] ipadair:mt-[-2vw] ipadair:h-[50vw] ipadair:rounded-t-[2vw] ipadair:border-[0.75vw]`}
      >
        <div
          className={`absolute inset-0 bg-[url('/assets/Game/maze_white.webp')] bg-cover bg-center bg-no-repeat`}
        ></div>
        <svg
          className={`ms-[-10vw] w-[90vw] self-start ipadair:w-[50vw]`}
          viewBox="0 0 799 146"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-164 0H799C754.537 0 715.276 29.6925 702.742 72.352C690.07 115.481 650.377 145.5 605.425 145.5H15.1325C-27.9328 145.5 -64.9718 115.012 -73.25 72.75C-81.5282 30.4879 -118.567 0 -161.632 0H-164Z"
            fill="#9C8FFE"
          />
        </svg>
        <p
          className={`absolute left-[5vw] top-[4vw] text-[6.1vw] tracking-widest text-black ipadair:left-[2vw] ipadair:top-[2vw] ipadair:text-[3.1vw]`}
          style={{ fontFamily: "Rocket Thunder" }}
        >
          Your collections
        </p>
        <svg
          className={`absolute right-[1vw] top-[12vw] w-[5.75vw] ipadair:right-[0.5vw] ipadair:top-[6vw] ipadair:w-[2.75vw]`}
          viewBox="0 0 75 93"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_2319_6222)">
            <path
              d="M60.6843 54.7407C50.2673 46.5708 46.4044 28.3775 50.8917 8.5505C41.5846 26.6233 26.9311 38.0771 13.6997 37.6397C24.1166 45.8096 27.9795 64.0029 23.4922 83.83C32.7994 65.7572 47.4529 54.3034 60.6843 54.7407Z"
              fill="#FAE00D"
            />
            <path
              d="M24.6537 80.6389C26.2496 71.8611 26.2071 63.4873 24.6742 56.2597C23.0692 48.6926 19.823 42.3528 15.0817 38.1428C21.4199 37.9654 27.9818 35.1954 34.0753 30.4303C39.8954 25.879 45.3105 19.4915 49.7303 11.7416C48.1344 20.5193 48.1769 28.8932 49.7098 36.1208C51.3147 43.6879 54.5609 50.0277 59.3022 54.2377C52.964 54.4151 46.4022 57.1851 40.3087 61.9502C34.4885 66.5015 29.0734 72.8889 24.6537 80.6389Z"
              stroke="black"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_2319_6222"
              x="13.6992"
              y="8.55054"
              width="51.9854"
              height="80.2795"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="5" dy="5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_2319_6222"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_2319_6222"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        <svg
          className={`absolute right-[2vw] top-[2vw] w-[16vw] ipadair:right-[1vw] ipadair:top-[1vw] ipadair:w-[8vw]`}
          viewBox="0 0 149 185"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_2319_6 221)">
            <path
              d="M121.369 75.2794C94.906 76.1541 65.5989 53.2464 46.9846 17.1009C55.9592 56.755 48.2334 93.1416 27.3995 109.481C53.8622 108.607 83.1694 131.514 101.784 167.66C92.809 128.006 100.535 91.6192 121.369 75.2794Z"
              fill="#FAE00D"
            />
            <path
              d="M100.539 164.241C91.4635 147.562 80.0968 133.877 67.8428 124.294C55.2909 114.479 41.7817 108.949 28.8397 108.957C38.7592 100.645 45.5534 87.7251 48.8594 72.1377C52.0869 56.9202 51.9975 39.1302 48.229 20.5198C57.3048 37.1985 68.6714 50.884 80.9255 60.4666C93.4774 70.2821 106.987 75.8118 119.929 75.8036C110.009 84.1162 103.215 97.0357 99.9089 112.623C96.6813 127.841 96.7708 145.631 100.539 164.241Z"
              stroke="black"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_2319_6221"
              x="27.3994"
              y="17.101"
              width="98.9697"
              height="155.559"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="5" dy="5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_2319_6221"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_2319_6221"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        {/* Letters INCAND */}
        <div
          className={`absolute left-[50%] top-[50%] mt-[4vw] flex translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-center`}
        >
          <div
            className={`flex items-center justify-center gap-[6vw] ipadair:gap-[4vw]`}
          >
            <svg
              className={`w-[10vw]`}
              viewBox="0 0 166 328"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              opacity={lettersHaving.startsWith("1") ? "1" : "0.16"}
            >
              <path
                d="M129.484 137.455L29.0791 158.797L54.3164 183.44L118.226 169.856L129.484 137.455Z"
                fill="white"
              />
              <path
                d="M109.572 180.805L65.54 190.164L86.9267 252.056L112.044 221.874L109.572 180.805Z"
                fill="white"
              />
              <path
                d="M129.484 137.455L29.0791 158.797L54.3164 183.44L118.226 169.856L129.484 137.455Z"
                stroke="white"
                stroke-width="0.821485"
              />
              <path
                d="M109.572 180.805L65.54 190.164L86.9267 252.056L112.044 221.874L109.572 180.805Z"
                stroke="white"
                stroke-width="0.821485"
              />
              <path
                d="M113.815 232.233L89.0655 262.57L106.613 318.493L122.905 315.03L113.815 232.233Z"
                fill="white"
              />
              <path
                d="M93.2017 75.8149C100.205 85.0946 112.472 106.127 105.52 116.019C98.8156 125.561 85.5329 133.892 79.0916 137.213C95.2353 113.788 85.9991 107.013 79.3639 106.553C64.8938 106.624 62.302 94.9043 62.8151 89.0354C57.2758 111.248 70.4226 130.742 77.6875 137.713L74.8008 138.326L61.6128 136.621L40.896 95.9483L42.2667 63.3521L69.528 42.5319L74.5447 76.7755L93.2017 75.8149Z"
                fill="#D25A5A"
              />
              <path
                d="M114.377 79.5785C119.297 105.578 100.125 124.93 89.9226 131.357C108.5 105.169 99.3983 86.0177 92.5245 79.7155C93.659 87.8886 86.8988 89.9267 83.3777 89.9239C64.3777 88.5533 65.6749 59.8794 68.698 45.7138C21.9611 89.9062 53.7763 125.766 75.5273 138.173C64.7984 141.654 52.4369 139.575 47.5965 138.097C27.3724 130.978 26.7102 116.744 28.9071 110.517C29.0879 113.734 30.6572 119.461 35.4879 116.631C40.3185 113.802 37.445 110.455 35.4043 109.136C14.1687 94.4172 31.9383 66.7996 43.4773 54.8309C58.6551 35.3771 47.4665 19.1736 39.9744 13.5038C77.3001 7.37298 82.3327 35.3027 80.1814 50.0342C76.5171 64.0357 84.2929 68.1928 88.6383 68.521C98.9971 63.3141 94.3306 51.5343 90.7033 46.2952C106.607 50.127 113.11 70.0811 114.377 79.5785Z"
                fill="#FF676B"
              />
              <path
                d="M35.4822 38.5052C27.798 44.9465 29.1258 52.3774 30.7505 55.2878C20.377 49.0785 26.4916 41.1675 30.8456 37.9882C36.0094 33.8852 35.5737 29.4703 33.9122 27.5697C41.6978 30.1219 38.2029 35.9234 35.4822 38.5052Z"
                fill="#FF676B"
              />
            </svg>
            <svg
              className={`w-[10vw]`}
              viewBox="0 0 206 245"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              opacity={lettersHaving[1] === "1" ? "1" : "0.16"}
            >
              <path
                d="M0.218544 190.919L51.2861 0.331787L145.496 171.501L178.726 47.4858L205.771 54.7326L155.044 244.048L60.7413 73.226L27.2639 198.165L0.218544 190.919Z"
                fill="white"
              />
            </svg>
            <svg
              className={`w-[10vw]`}
              viewBox="0 0 205 214"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              opacity={lettersHaving[2] === "1" ? "1" : "0.16"}
            >
              <path
                d="M0.0205078 141.976H24.9439V177.734C13.3266 169.74 5.30204 157.54 0.0205078 141.976ZM28.9597 142.608V141.976H50.2939V142.608C50.2939 151.231 55.7836 156.279 64.4462 156.279V177.523C43.7432 177.523 28.9597 163.009 28.9597 142.608ZM28.9597 185.096H64.4462V204.655C50.2939 201.502 39.0962 194.561 28.9597 185.096ZM75.0058 205.708H126.333C119.152 210.336 112.393 213.91 102.253 213.91C90.847 213.91 81.9762 210.336 75.0058 205.708ZM100.775 177.523C83.4535 177.523 69.7243 163.852 69.7243 146.603V141.976H91.0585V146.603C91.0585 151.863 95.4939 156.279 100.775 156.279C106.269 156.279 110.281 152.073 110.281 146.603V141.976H131.827V146.603C131.827 163.641 117.674 177.523 100.775 177.523ZM69.7243 185.096H131.827C128.234 196.875 113.45 202.341 101.41 202.341H100.141C87.8924 202.341 72.8939 196.875 69.7243 185.096ZM135.627 177.523H134.785V156.279H135.627C141.332 156.279 145.767 154.176 148.302 151.441C150.626 149.338 151.892 146.182 151.892 141.976H173.437C173.437 162.799 156.538 177.523 135.627 177.523ZM134.785 206.548V185.096H175.549C164.143 195.611 146.825 204.655 134.785 206.548ZM177.661 177.523H176.607V141.976H204.488C199.842 156.069 187.801 172.053 177.661 177.523ZM5.51358 107.271V106.639C5.51358 93.3893 12.4839 82.2424 24.9439 77.4045L24.7324 136.717C13.9612 131.668 5.51358 120.311 5.51358 107.271ZM28.9597 107.061C28.9597 90.6544 42.2659 77.4045 58.7416 77.4045H64.4462V98.6486H58.7416C54.0947 98.6486 50.2939 102.433 50.2939 107.061C50.2939 111.688 54.3062 115.262 58.7416 115.262H64.4462V136.717H58.7416C42.2659 136.717 28.9597 123.256 28.9597 107.061ZM24.9439 36.8085V72.1452H0.0205078C5.30204 56.371 15.2305 43.3282 24.9439 36.8085ZM50.2939 71.092V72.1452H28.9597V71.092C28.9597 50.4798 43.7432 36.1766 64.4462 36.1766V57.4207C59.1647 57.4207 55.9951 58.8953 54.0947 60.9983C52.1943 62.8906 50.2939 66.0434 50.2939 71.092ZM64.4462 9.46467V28.8144H28.9597C39.0962 19.5608 53.8832 11.3577 64.4462 9.46467ZM91.0585 67.0966V72.1452H69.7243V67.0966C69.7243 49.8479 83.6651 36.1766 100.775 36.1766C117.886 36.1766 131.827 49.8479 131.827 67.0966V72.1452H110.281V67.0966C110.281 61.4161 106.269 57.4207 100.775 57.4207C98.0289 57.4207 95.4939 58.474 94.0166 60.1557C92.3277 61.8374 91.0585 64.3617 91.0585 67.0966ZM131.827 28.8144H69.7243C73.5285 16.8266 88.1039 10.9371 100.352 10.9371H100.987C113.239 10.9371 128.026 16.8266 131.827 28.8144ZM135.204 57.4207H134.785V36.1766H135.204C156.327 36.1766 173.437 50.9011 173.437 72.1452H151.892C151.892 62.2587 144.502 57.4207 135.204 57.4207ZM204.488 72.1452H176.607V36.1766C187.801 43.5388 200.053 56.5816 204.488 72.1452ZM126.333 7.78225H76.0635C84.7227 2.73401 93.805 -0.000244141 102.253 -0.000244141C110.069 -0.000244141 117.674 2.73401 126.333 7.78225ZM171.748 28.8144H134.785V7.78225C148.091 10.9371 161.82 18.9299 171.748 28.8144Z"
                fill="white"
              />
            </svg>
            <svg
              className={`relative left-[0.5vw] top-[1vw] w-[10vw]`}
              viewBox="0 0 214 217"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              opacity={lettersHaving[3] === "1" ? "1" : "0.16"}
            >
              <path
                d="M180.1 50.3147L213.165 182.929L79.9846 216.135L5.39497 171.999L60.6485 80.0974L16.7138 91.0516L0.146941 24.6055L96.8054 0.505852L180.1 50.3147ZM85.66 144.147L129.871 133.124L118.826 88.8248L85.66 144.147Z"
                fill="white"
              />
            </svg>
            <svg
              className={`relative top-[2vw] w-[10vw]`}
              viewBox="0 0 188 205"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              opacity={lettersHaving[4] === "1" ? "1" : "0.16"}
            >
              <path
                d="M129.793 24.314C128.184 24.314 127.38 23.5129 127.38 21.9141C127.38 20.7123 127.983 19.9112 129.19 19.5106H126.173V13.509V9.90623L123.763 12.3076L121.349 9.90623L123.763 7.50452L126.173 9.90623V7.8046H125.871V4.20256L123.763 6.30383L121.349 3.90248L123.763 1.50077L125.871 3.60206V0H131.902H137.932H143.959H151.797V1.20069H156.621V6.60391H151.797V7.20444H156.621V12.6077H151.495V13.2082H156.621V18.6128H151.495V19.2102H156.621V24.6145H151.197V19.5106H148.481C149.688 19.9112 150.292 20.7123 150.292 21.9141C150.292 23.5129 149.487 24.314 147.878 24.314C146.272 24.314 145.468 23.5129 145.468 21.9141C145.468 20.7123 146.071 19.9112 147.275 19.5106H144.261H142.454C143.658 19.9112 144.261 20.7123 144.261 21.9141C144.261 23.5129 143.457 24.314 141.851 24.314C140.242 24.314 139.437 23.5129 139.437 21.9141C139.437 20.7123 140.041 19.9112 141.248 19.5106H138.234H136.424C137.631 19.9112 138.234 20.7123 138.234 21.9141C138.234 23.5129 137.429 24.314 135.82 24.314C134.211 24.314 133.41 23.5129 133.41 21.9141C133.41 20.7123 134.014 19.9112 135.217 19.5106H132.203H130.393C131.6 19.9112 132.203 20.7123 132.203 21.9141C132.203 23.5129 131.399 24.314 129.793 24.314ZM178.024 0.600185L181.041 6.60391L184.055 0.600185L187.37 7.20444H184.356L187.068 12.9081H184.055L187.068 18.9132H184.055L187.068 24.9149H184.055L187.068 30.92H181.041L184.055 24.9149H181.041H178.024L181.041 30.92H175.01L178.024 24.9149H175.01L178.024 18.9132H175.01L178.024 12.9081H175.01L177.722 7.20444H174.709L178.024 0.600185ZM3.17856 24.9149L0.165039 21.9141L3.17856 18.9132L0.165039 15.9089L3.17856 12.9081L0.165039 9.90623L3.17856 6.90436L0.165039 3.90248L3.17856 0.900608L6.19208 3.90248L9.2092 0.900608L12.2227 3.90248L15.2362 0.900608L18.2499 3.90248L21.2669 0.900608L24.2804 3.90248L27.294 0.900608L30.311 3.90248L33.3246 0.900608L36.3382 3.90248L39.3552 0.900608L42.3687 3.90248L45.3823 0.900608L48.3959 3.90248L51.4129 0.900608L54.4264 3.90248L57.44 0.900608L60.457 3.90248L63.4705 0.900608L66.4842 3.90248L63.4705 6.90436L66.4842 9.90623L63.4705 12.9081L66.4842 15.9089L69.5012 12.9081L72.5147 15.9089L69.5012 18.9132L72.5147 21.9141L75.5283 18.9132L78.5418 21.9141L75.5283 24.9149L72.5147 21.9141L69.5012 24.9149L66.4842 21.9141L63.4705 24.9149L60.457 21.9141L57.44 24.9149L54.4264 21.9141L51.4129 24.9149L48.3959 21.9141L45.3823 24.9149L42.3687 21.9141L45.3823 18.9132L42.3687 15.9089L39.3552 18.9132L42.3687 21.9141L39.3552 24.9149L36.3382 21.9141L39.3552 18.9132L36.3382 15.9089L33.3246 18.9132L36.3382 21.9141L33.3246 24.9149L30.311 21.9141L33.3246 18.9132L30.311 15.9089L27.294 18.9132L30.311 21.9141L27.294 24.9149L24.2804 21.9141L27.294 18.9132L24.2804 15.9089L21.2669 18.9132L24.2804 21.9141L21.2669 24.9149L18.2499 21.9141L21.2669 18.9132L18.2499 15.9089L15.2362 18.9132L18.2499 21.9141L15.2362 24.9149L12.2227 21.9141L15.2362 18.9132L12.2227 15.9089L9.2092 18.9132L12.2227 21.9141L9.2092 24.9149L6.19208 21.9141L9.2092 18.9132L6.19208 15.9089L3.17856 18.9132L6.19208 21.9141L3.17856 24.9149ZM174.709 6.60391H169.282V1.20069H174.709V6.60391ZM168.678 6.60391H163.255V1.20069H168.678V6.60391ZM162.651 6.60391H157.224V1.20069H162.651V6.60391ZM117.732 6.30383L115.322 3.90248L117.732 1.50077L120.146 3.90248L117.732 6.30383ZM3.17856 6.90436L6.19208 9.90623L9.2092 6.90436L6.19208 3.90248L3.17856 6.90436ZM9.2092 6.90436L12.2227 9.90623L15.2362 6.90436L12.2227 3.90248L9.2092 6.90436ZM15.2362 6.90436L18.2499 9.90623L21.2669 6.90436L18.2499 3.90248L15.2362 6.90436ZM21.2669 6.90436L24.2804 9.90623L27.294 6.90436L24.2804 3.90248L21.2669 6.90436ZM27.294 6.90436L30.311 9.90623L33.3246 6.90436L30.311 3.90248L27.294 6.90436ZM33.3246 6.90436L36.3382 9.90623L39.3552 6.90436L36.3382 3.90248L33.3246 6.90436ZM39.3552 6.90436L42.3687 9.90623L45.3823 6.90436L42.3687 3.90248L39.3552 6.90436ZM45.3823 6.90436L48.3959 9.90623L51.4129 6.90436L48.3959 3.90248L45.3823 6.90436ZM51.4129 6.90436L54.4264 9.90623L57.44 6.90436L54.4264 3.90248L51.4129 6.90436ZM57.44 6.90436L60.457 9.90623L63.4705 6.90436L60.457 3.90248L57.44 6.90436ZM180.739 7.20444H178.326L181.041 12.9081L183.753 7.20444H180.739ZM174.709 12.6077H169.282V7.20444H174.709V12.6077ZM168.678 12.6077H163.255V7.20444H168.678V12.6077ZM162.651 12.6077H157.224V7.20444H162.651V12.6077ZM117.732 12.3076L115.322 9.90623L117.732 7.50452L120.146 9.90623L117.732 12.3076ZM3.17856 12.9081L6.19208 15.9089L9.2092 12.9081L6.19208 9.90623L3.17856 12.9081ZM9.2092 12.9081L12.2227 15.9089L15.2362 12.9081L12.2227 9.90623L9.2092 12.9081ZM15.2362 12.9081L18.2499 15.9089L21.2669 12.9081L18.2499 9.90623L15.2362 12.9081ZM21.2669 12.9081L24.2804 15.9089L27.294 12.9081L24.2804 9.90623L21.2669 12.9081ZM27.294 12.9081L30.311 15.9089L33.3246 12.9081L30.311 9.90623L27.294 12.9081ZM33.3246 12.9081L36.3382 15.9089L39.3552 12.9081L36.3382 9.90623L33.3246 12.9081ZM39.3552 12.9081L42.3687 15.9089L45.3823 12.9081L42.3687 9.90623L39.3552 12.9081ZM45.3823 12.9081L48.3959 15.9089L51.4129 12.9081L48.3959 9.90623L45.3823 12.9081ZM51.4129 12.9081L54.4264 15.9089L57.44 12.9081L54.4264 9.90623L51.4129 12.9081ZM57.44 12.9081L60.457 15.9089L63.4705 12.9081L60.457 9.90623L57.44 12.9081ZM181.041 12.9081H178.024L181.041 18.9132L184.055 12.9081H181.041ZM174.709 18.6128H169.282V13.2082H174.709V18.6128ZM168.678 18.6128H163.255V13.2082H168.678V18.6128ZM162.651 18.6128H157.224V13.2082H162.651V18.6128ZM123.763 18.3124L121.349 15.9089L123.763 13.509L126.173 15.9089L123.763 18.3124ZM117.732 18.3124L115.322 15.9089L117.732 13.509L120.146 15.9089L117.732 18.3124ZM45.3823 18.9132L48.3959 21.9141L51.4129 18.9132L48.3959 15.9089L45.3823 18.9132ZM51.4129 18.9132L54.4264 21.9141L57.44 18.9132L54.4264 15.9089L51.4129 18.9132ZM57.44 18.9132L60.457 21.9141L63.4705 18.9132L60.457 15.9089L57.44 18.9132ZM63.4705 18.9132L66.4842 21.9141L69.5012 18.9132L66.4842 15.9089L63.4705 18.9132ZM181.041 18.9132H178.024L181.041 24.9149L184.055 18.9132H181.041ZM174.709 24.6145H169.282V19.2102H174.709V24.6145ZM168.678 24.6145H163.255V19.2102H168.678V24.6145ZM162.651 24.6145H157.224V19.2102H162.651V24.6145ZM123.763 24.314L121.349 21.9141L123.763 19.5106L126.173 21.9141L123.763 24.314ZM117.732 24.314L115.322 21.9141L117.732 19.5106L120.146 21.9141L117.732 24.314ZM75.5283 30.92L72.5147 27.9157L75.5283 24.9149L78.5418 27.9157L75.5283 30.92ZM69.5012 30.92L66.4842 27.9157L69.5012 24.9149L72.5147 27.9157L69.5012 30.92ZM63.4705 30.92L60.457 27.9157L63.4705 24.9149L66.4842 27.9157L63.4705 30.92ZM57.44 30.92L54.4264 27.9157L57.44 24.9149L60.457 27.9157L57.44 30.92ZM51.4129 30.92L48.3959 27.9157L51.4129 24.9149L54.4264 27.9157L51.4129 30.92ZM45.3823 30.92L42.3687 27.9157L45.3823 24.9149L48.3959 27.9157L45.3823 30.92ZM39.3552 30.92L36.3382 27.9157L39.3552 24.9149L42.3687 27.9157L39.3552 30.92ZM33.3246 30.92L30.311 27.9157L33.3246 24.9149L36.3382 27.9157L33.3246 30.92ZM27.294 30.92L24.2804 27.9157L27.294 24.9149L30.311 27.9157L27.294 30.92ZM21.2669 30.92L18.2499 27.9157L21.2669 24.9149L24.2804 27.9157L21.2669 30.92ZM15.2362 30.92L12.2227 27.9157L15.2362 24.9149L18.2499 27.9157L15.2362 30.92ZM9.2092 30.92L6.19208 27.9157L9.2092 24.9149L12.2227 27.9157L9.2092 30.92ZM3.17856 30.92L0.165039 27.9157L3.17856 24.9149L6.19208 27.9157L3.17856 30.92ZM174.407 30.3192H169.583V25.5157H174.407V30.3192ZM168.38 30.3192H163.556V25.5157H168.38V30.3192ZM162.349 30.3192H157.526V25.5157H162.349V30.3192ZM156.319 30.3192H151.495V25.5157H156.319V30.3192ZM147.878 30.3192C146.272 30.3192 145.468 29.518 145.468 27.9157C145.468 26.3169 146.272 25.5157 147.878 25.5157C149.487 25.5157 150.292 26.3169 150.292 27.9157C150.292 29.518 149.487 30.3192 147.878 30.3192ZM141.851 30.3192C140.242 30.3192 139.437 29.518 139.437 27.9157C139.437 26.3169 140.242 25.5157 141.851 25.5157C143.457 25.5157 144.261 26.3169 144.261 27.9157C144.261 29.518 143.457 30.3192 141.851 30.3192ZM135.82 30.3192C134.211 30.3192 133.41 29.518 133.41 27.9157C133.41 26.3169 134.211 25.5157 135.82 25.5157C137.429 25.5157 138.234 26.3169 138.234 27.9157C138.234 29.518 137.429 30.3192 135.82 30.3192ZM129.793 30.3192C128.184 30.3192 127.38 29.518 127.38 27.9157C127.38 26.3169 128.184 25.5157 129.793 25.5157C131.399 25.5157 132.203 26.3169 132.203 27.9157C132.203 29.518 131.399 30.3192 129.793 30.3192ZM123.763 30.0187L121.651 27.9157L123.763 25.8162L125.871 27.9157L123.763 30.0187ZM117.732 30.0187L115.624 27.9157L117.732 25.8162L119.844 27.9157L117.732 30.0187ZM184.055 30.92L187.068 36.9217H181.041L184.055 30.92ZM178.024 30.92L181.041 36.9217H175.01L178.024 30.92ZM81.5589 36.9217L78.5418 33.9209L81.5589 30.92L84.5725 33.9209L81.5589 36.9217ZM75.5283 36.9217L72.5147 33.9209L75.5283 30.92L78.5418 33.9209L75.5283 36.9217ZM69.5012 36.9217L66.4842 33.9209L69.5012 30.92L72.5147 33.9209L69.5012 36.9217ZM63.4705 36.9217L60.457 33.9209L63.4705 30.92L66.4842 33.9209L63.4705 36.9217ZM57.44 36.9217L54.4264 33.9209L57.44 30.92L60.457 33.9209L57.44 36.9217ZM51.4129 36.9217L48.3959 33.9209L51.4129 30.92L54.4264 33.9209L51.4129 36.9217ZM45.3823 36.9217L42.3687 33.9209L45.3823 30.92L48.3959 33.9209L45.3823 36.9217ZM39.3552 36.9217L36.3382 33.9209L39.3552 30.92L42.3687 33.9209L39.3552 36.9217ZM33.3246 36.9217L30.311 33.9209L33.3246 30.92L36.3382 33.9209L33.3246 36.9217ZM27.294 36.9217L24.2804 33.9209L27.294 30.92L30.311 33.9209L27.294 36.9217ZM21.2669 36.9217L18.2499 33.9209L21.2669 30.92L24.2804 33.9209L21.2669 36.9217ZM15.2362 36.9217L12.2227 33.9209L15.2362 30.92L18.2499 33.9209L15.2362 36.9217ZM9.2092 36.9217L6.19208 33.9209L9.2092 30.92L12.2227 33.9209L9.2092 36.9217ZM3.17856 36.9217L0.165039 33.9209L3.17856 30.92L6.19208 33.9209L3.17856 36.9217ZM174.407 36.3209H169.583V31.5209H174.407V36.3209ZM168.38 36.3209H163.556V31.5209H168.38V36.3209ZM162.349 36.3209H157.526V31.5209H162.349V36.3209ZM156.319 36.3209H151.495V31.5209H156.319V36.3209ZM147.878 36.3209C146.272 36.3209 145.468 35.5232 145.468 33.9209C145.468 32.3186 146.272 31.5209 147.878 31.5209C149.487 31.5209 150.292 32.3186 150.292 33.9209C150.292 35.5232 149.487 36.3209 147.878 36.3209ZM141.851 36.3209C140.242 36.3209 139.437 35.5232 139.437 33.9209C139.437 32.3186 140.242 31.5209 141.851 31.5209C143.457 31.5209 144.261 32.3186 144.261 33.9209C144.261 35.5232 143.457 36.3209 141.851 36.3209ZM135.82 36.3209C134.211 36.3209 133.41 35.5232 133.41 33.9209C133.41 32.3186 134.211 31.5209 135.82 31.5209C137.429 31.5209 138.234 32.3186 138.234 33.9209C138.234 35.5232 137.429 36.3209 135.82 36.3209ZM129.793 36.3209C128.184 36.3209 127.38 35.5232 127.38 33.9209C127.38 32.3186 128.184 31.5209 129.793 31.5209C131.399 31.5209 132.203 32.3186 132.203 33.9209C132.203 35.5232 131.399 36.3209 129.793 36.3209ZM123.763 36.0239L121.651 33.9209L123.763 31.8213L125.871 33.9209L123.763 36.0239ZM117.732 36.0239L115.624 33.9209L117.732 31.8213L119.844 33.9209L117.732 36.0239ZM184.055 36.9217L187.068 42.9268H181.041L184.055 36.9217ZM178.024 36.9217L181.041 42.9268H175.01L178.024 36.9217ZM81.5589 42.9268L78.5418 39.926L81.5589 36.9217L84.5725 39.926L81.5589 42.9268ZM75.5283 42.9268L72.5147 39.926L75.5283 36.9217L78.5418 39.926L75.5283 42.9268ZM69.5012 42.9268L66.4842 39.926L69.5012 36.9217L72.5147 39.926L69.5012 42.9268ZM63.4705 42.9268L60.457 39.926L63.4705 36.9217L66.4842 39.926L63.4705 42.9268ZM57.44 42.9268L54.4264 39.926L57.44 36.9217L60.457 39.926L57.44 42.9268ZM51.4129 42.9268L48.3959 39.926L51.4129 36.9217L54.4264 39.926L51.4129 42.9268ZM45.3823 42.9268L42.3687 39.926L45.3823 36.9217L48.3959 39.926L45.3823 42.9268ZM39.3552 42.9268L36.3382 39.926L39.3552 36.9217L42.3687 39.926L39.3552 42.9268ZM33.3246 42.9268L30.311 39.926L33.3246 36.9217L36.3382 39.926L33.3246 42.9268ZM27.294 42.9268L24.2804 39.926L27.294 36.9217L30.311 39.926L27.294 42.9268ZM21.2669 42.6264L18.5516 39.926L21.2669 36.9217L24.2804 39.926L21.2669 42.6264ZM15.2362 42.6264L12.5244 39.926L15.2362 37.2221L17.9516 39.926L15.2362 42.6264ZM9.2092 42.6264L6.4938 39.926L9.2092 37.2221L11.921 39.926L9.2092 42.6264ZM3.17856 42.6264L0.466656 39.926L3.17856 37.2221L5.89046 39.926L3.17856 42.6264ZM174.407 42.326H169.583V37.5226H174.407V42.326ZM168.38 42.326H163.556V37.5226H168.38V42.326ZM162.349 42.326H157.526V37.5226H162.349V42.326ZM156.319 42.326H151.495V37.5226H156.319V42.326ZM147.878 42.326C146.272 42.326 145.468 41.5248 145.468 39.926C145.468 38.3237 146.272 37.5226 147.878 37.5226C149.487 37.5226 150.292 38.3237 150.292 39.926C150.292 41.5248 149.487 42.326 147.878 42.326ZM141.851 42.326C140.242 42.326 139.437 41.5248 139.437 39.926C139.437 38.3237 140.242 37.5226 141.851 37.5226C143.457 37.5226 144.261 38.3237 144.261 39.926C144.261 41.5248 143.457 42.326 141.851 42.326ZM135.82 42.326C134.211 42.326 133.41 41.5248 133.41 39.926C133.41 38.3237 134.211 37.5226 135.82 37.5226C137.429 37.5226 138.234 38.3237 138.234 39.926C138.234 41.5248 137.429 42.326 135.82 42.326ZM129.793 42.326C128.184 42.326 127.38 41.5248 127.38 39.926C127.38 38.3237 128.184 37.5226 129.793 37.5226C131.399 37.5226 132.203 38.3237 132.203 39.926C132.203 41.5248 131.399 42.326 129.793 42.326ZM123.763 42.0256L121.651 39.926L123.763 37.823L125.871 39.926L123.763 42.0256ZM117.732 42.0256L115.624 39.926L117.732 37.823L119.844 39.926L117.732 42.0256ZM184.055 43.2273L186.767 48.6315H181.343L184.055 43.2273ZM178.024 43.2273L180.739 48.6315H175.312L178.024 43.2273ZM87.586 48.6315L84.8742 45.9277L87.586 43.2273L90.3013 45.9277L87.586 48.6315ZM81.5589 48.6315L78.8436 45.9277L81.5589 43.2273L84.2708 45.9277L81.5589 48.6315ZM75.5283 48.6315L72.8164 45.9277L75.5283 43.2273L78.2401 45.9277L75.5283 48.6315ZM69.5012 48.6315L66.7859 45.9277L69.5012 43.2273L72.2131 45.9277L69.5012 48.6315ZM63.4705 48.6315L60.7588 45.9277L63.4705 43.2273L66.1824 45.9277L63.4705 48.6315ZM57.44 48.6315L54.7281 45.9277L57.44 43.2273L60.1553 45.9277L57.44 48.6315ZM51.4129 48.6315L48.6976 45.9277L51.4129 43.2273L54.1248 45.9277L51.4129 48.6315ZM45.3823 48.6315L42.6704 45.9277L45.3823 43.2273L48.0941 45.9277L45.3823 48.6315ZM39.3552 48.6315L36.6398 45.9277L39.3552 43.2273L42.067 45.9277L39.3552 48.6315ZM33.3246 48.6315L30.6128 45.9277L33.3246 43.2273L36.0365 45.9277L33.3246 48.6315ZM27.294 48.6315L24.5821 45.9277L27.294 43.2273L30.0093 45.9277L27.294 48.6315ZM21.2669 48.6315L18.5516 45.9277L21.2669 43.2273L23.9787 45.9277L21.2669 48.6315ZM15.2362 48.6315L12.5244 45.9277L15.2362 43.2273L17.9516 45.9277L15.2362 48.6315ZM9.2092 48.6315L6.4938 45.9277L9.2092 43.2273L11.921 45.9277L9.2092 48.6315ZM3.17856 48.6315L0.466656 45.9277L3.17856 43.2273L5.89046 45.9277L3.17856 48.6315ZM174.407 48.3311H169.583V43.5277H174.407V48.3311ZM168.38 48.3311H163.556V43.5277H168.38V48.3311ZM162.349 48.3311H157.526V43.5277H162.349V48.3311ZM156.319 48.3311H151.495V43.5277H156.319V48.3311ZM147.878 48.0307C146.474 48.0307 145.77 47.3297 145.77 45.9277C145.77 44.5291 146.474 43.8281 147.878 43.8281C149.286 43.8281 149.99 44.5291 149.99 45.9277C149.99 47.3297 149.286 48.0307 147.878 48.0307ZM141.851 48.0307C140.443 48.0307 139.739 47.3297 139.739 45.9277C139.739 44.5291 140.443 43.8281 141.851 43.8281C143.255 43.8281 143.959 44.5291 143.959 45.9277C143.959 47.3297 143.255 48.0307 141.851 48.0307ZM135.82 48.0307C134.412 48.0307 133.712 47.3297 133.712 45.9277C133.712 44.5291 134.412 43.8281 135.82 43.8281C137.228 43.8281 137.932 44.5291 137.932 45.9277C137.932 47.3297 137.228 48.0307 135.82 48.0307ZM129.793 48.0307C128.385 48.0307 127.681 47.3297 127.681 45.9277C127.681 44.5291 128.385 43.8281 129.793 43.8281C131.198 43.8281 131.902 44.5291 131.902 45.9277C131.902 47.3297 131.198 48.0307 129.793 48.0307ZM123.763 48.0307L121.651 45.9277L123.763 43.8281L125.871 45.9277L123.763 48.0307ZM117.732 48.0307L115.624 45.9277L117.732 43.8281L119.844 45.9277L117.732 48.0307ZM184.055 49.2289L186.767 54.6332H181.343L184.055 49.2289ZM178.024 49.2289L180.739 54.6332H175.312L178.024 49.2289ZM93.6166 54.6332L90.9047 51.9328L93.6166 49.2289L96.3284 51.9328L93.6166 54.6332ZM87.586 54.6332L84.8742 51.9328L87.586 49.2289L90.3013 51.9328L87.586 54.6332ZM81.5589 54.6332L78.8436 51.9328L81.5589 49.2289L84.2708 51.9328L81.5589 54.6332ZM75.5283 54.6332L72.8164 51.9328L75.5283 49.2289L78.2401 51.9328L75.5283 54.6332ZM69.5012 54.6332L66.7859 51.9328L69.5012 49.2289L72.2131 51.9328L69.5012 54.6332ZM63.4705 54.6332L60.7588 51.9328L63.4705 49.2289L66.1824 51.9328L63.4705 54.6332ZM57.44 54.6332L54.7281 51.9328L57.44 49.2289L60.1553 51.9328L57.44 54.6332ZM51.4129 54.6332L48.6976 51.9328L51.4129 49.2289L54.1248 51.9328L51.4129 54.6332ZM45.3823 54.6332L42.6704 51.9328L45.3823 49.2289L48.0941 51.9328L45.3823 54.6332ZM39.3552 54.6332L36.6398 51.9328L39.3552 49.2289L42.067 51.9328L39.3552 54.6332ZM33.3246 54.6332L30.6128 51.9328L33.3246 49.2289L36.0365 51.9328L33.3246 54.6332ZM27.294 54.6332L24.5821 51.9328L27.294 49.2289L30.0093 51.9328L27.294 54.6332ZM21.2669 54.6332L18.5516 51.9328L21.2669 49.2289L23.9787 51.9328L21.2669 54.6332ZM15.2362 54.6332L12.5244 51.9328L15.2362 49.2289L17.9516 51.9328L15.2362 54.6332ZM9.2092 54.6332L6.4938 51.9328L9.2092 49.2289L11.921 51.9328L9.2092 54.6332ZM3.17856 54.6332L0.466656 51.9328L3.17856 49.2289L5.89046 51.9328L3.17856 54.6332ZM174.407 54.3328H169.583V49.5294H174.407V54.3328ZM168.38 54.3328H163.556V49.5294H168.38V54.3328ZM162.349 54.3328H157.526V49.5294H162.349V54.3328ZM156.319 54.3328H151.495V49.5294H156.319V54.3328ZM147.878 54.0323C146.474 54.0323 145.77 53.3348 145.77 51.9328C145.77 50.5308 146.474 49.8298 147.878 49.8298C149.286 49.8298 149.99 50.5308 149.99 51.9328C149.99 53.3348 149.286 54.0323 147.878 54.0323ZM141.851 54.0323C140.443 54.0323 139.739 53.3348 139.739 51.9328C139.739 50.5308 140.443 49.8298 141.851 49.8298C143.255 49.8298 143.959 50.5308 143.959 51.9328C143.959 53.3348 143.255 54.0323 141.851 54.0323ZM135.82 54.0323C134.412 54.0323 133.712 53.3348 133.712 51.9328C133.712 50.5308 134.412 49.8298 135.82 49.8298C137.228 49.8298 137.932 50.5308 137.932 51.9328C137.932 53.3348 137.228 54.0323 135.82 54.0323ZM129.793 54.0323C128.385 54.0323 127.681 53.3348 127.681 51.9328C127.681 50.5308 128.385 49.8298 129.793 49.8298C131.198 49.8298 131.902 50.5308 131.902 51.9328C131.902 53.3348 131.198 54.0323 129.793 54.0323ZM123.763 54.0323L121.651 51.9328L123.763 49.8298L125.871 51.9328L123.763 54.0323ZM117.732 54.0323L115.624 51.9328L117.732 49.8298L119.844 51.9328L117.732 54.0323ZM184.055 55.2341L186.767 60.6383H181.343L184.055 55.2341ZM178.024 55.2341L180.739 60.6383H175.312L178.024 55.2341ZM93.6166 60.6383L90.9047 57.9345L93.6166 55.2341L96.3284 57.9345L93.6166 60.6383ZM87.586 60.6383L84.8742 57.9345L87.586 55.2341L90.3013 57.9345L87.586 60.6383ZM81.5589 60.6383L78.8436 57.9345L81.5589 55.2341L84.2708 57.9345L81.5589 60.6383ZM75.5283 60.6383L72.8164 57.9345L75.5283 55.2341L78.2401 57.9345L75.5283 60.6383ZM69.5012 60.6383L66.7859 57.9345L69.5012 55.2341L72.2131 57.9345L69.5012 60.6383ZM63.4705 60.6383L60.7588 57.9345L63.4705 55.2341L66.1824 57.9345L63.4705 60.6383ZM57.44 60.6383L54.7281 57.9345L57.44 55.2341L60.1553 57.9345L57.44 60.6383ZM51.4129 60.6383L48.6976 57.9345L51.4129 55.2341L54.1248 57.9345L51.4129 60.6383ZM45.3823 60.6383L42.6704 57.9345L45.3823 55.2341L48.0941 57.9345L45.3823 60.6383ZM39.3552 60.6383L36.6398 57.9345L39.3552 55.2341L42.067 57.9345L39.3552 60.6383ZM33.3246 60.6383L30.6128 57.9345L33.3246 55.2341L36.0365 57.9345L33.3246 60.6383ZM27.294 60.6383L24.5821 57.9345L27.294 55.2341L30.0093 57.9345L27.294 60.6383ZM21.2669 60.6383L18.5516 57.9345L21.2669 55.2341L23.9787 57.9345L21.2669 60.6383ZM15.2362 60.6383L12.5244 57.9345L15.2362 55.2341L17.9516 57.9345L15.2362 60.6383ZM9.2092 60.6383L6.4938 57.9345L9.2092 55.2341L11.921 57.9345L9.2092 60.6383ZM3.17856 60.6383L0.466656 57.9345L3.17856 55.2341L5.89046 57.9345L3.17856 60.6383ZM174.407 60.3379H169.583V55.5345H174.407V60.3379ZM168.38 60.3379H163.556V55.5345H168.38V60.3379ZM162.349 60.3379H157.526V55.5345H162.349V60.3379ZM156.319 60.3379H151.495V55.5345H156.319V60.3379ZM147.878 60.0375C146.474 60.0375 145.77 59.3365 145.77 57.9345C145.77 56.5359 146.474 55.8349 147.878 55.8349C149.286 55.8349 149.99 56.5359 149.99 57.9345C149.99 59.3365 149.286 60.0375 147.878 60.0375ZM141.851 60.0375C140.443 60.0375 139.739 59.3365 139.739 57.9345C139.739 56.5359 140.443 55.8349 141.851 55.8349C143.255 55.8349 143.959 56.5359 143.959 57.9345C143.959 59.3365 143.255 60.0375 141.851 60.0375ZM135.82 60.0375C134.412 60.0375 133.712 59.3365 133.712 57.9345C133.712 56.5359 134.412 55.8349 135.82 55.8349C137.228 55.8349 137.932 56.5359 137.932 57.9345C137.932 59.3365 137.228 60.0375 135.82 60.0375ZM129.793 60.0375C128.385 60.0375 127.681 59.3365 127.681 57.9345C127.681 56.5359 128.385 55.8349 129.793 55.8349C131.198 55.8349 131.902 56.5359 131.902 57.9345C131.902 59.3365 131.198 60.0375 129.793 60.0375ZM123.763 60.0375L121.651 57.9345L123.763 55.8349L125.871 57.9345L123.763 60.0375ZM117.732 60.0375L115.624 57.9345L117.732 55.8349L119.844 57.9345L117.732 60.0375ZM184.055 61.2392L186.767 66.64H181.343L184.055 61.2392ZM178.024 61.2392L180.739 66.64H175.312L178.024 61.2392ZM93.6166 66.64L90.9047 63.9396L93.6166 61.2392L96.3284 63.9396L93.6166 66.64ZM87.586 66.64L84.8742 63.9396L87.586 61.2392L90.3013 63.9396L87.586 66.64ZM81.5589 66.64L78.8436 63.9396L81.5589 61.2392L84.2708 63.9396L81.5589 66.64ZM75.5283 66.64L72.8164 63.9396L75.5283 61.2392L78.2401 63.9396L75.5283 66.64ZM69.5012 66.64L66.7859 63.9396L69.5012 61.2392L72.2131 63.9396L69.5012 66.64ZM63.4705 66.64L60.7588 63.9396L63.4705 61.2392L66.1824 63.9396L63.4705 66.64ZM57.44 66.64L54.7281 63.9396L57.44 61.2392L60.1553 63.9396L57.44 66.64ZM51.4129 66.64L48.6976 63.9396L51.4129 61.2392L54.1248 63.9396L51.4129 66.64ZM45.3823 66.64L42.6704 63.9396L45.3823 61.2392L48.0941 63.9396L45.3823 66.64ZM39.3552 66.64L36.6398 63.9396L39.3552 61.2392L42.067 63.9396L39.3552 66.64ZM33.3246 66.64L30.6128 63.9396L33.3246 61.2392L36.0365 63.9396L33.3246 66.64ZM27.294 66.64L24.5821 63.9396L27.294 61.2392L30.0093 63.9396L27.294 66.64ZM21.2669 66.64L18.5516 63.9396L21.2669 61.2392L23.9787 63.9396L21.2669 66.64ZM15.2362 66.64L12.5244 63.9396L15.2362 61.2392L17.9516 63.9396L15.2362 66.64ZM9.2092 66.64L6.4938 63.9396L9.2092 61.2392L11.921 63.9396L9.2092 66.64ZM3.17856 66.64L0.466656 63.9396L3.17856 61.2392L5.89046 63.9396L3.17856 66.64ZM174.105 66.0426H169.885V61.84H174.105V66.0426ZM168.078 66.0426H163.858V61.84H168.078V66.0426ZM162.048 66.0426H157.827V61.84H162.048V66.0426ZM156.017 66.0426H151.797V61.84H156.017V66.0426ZM147.878 66.0426C146.474 66.0426 145.77 65.3416 145.77 63.9396C145.77 62.5376 146.474 61.84 147.878 61.84C149.286 61.84 149.99 62.5376 149.99 63.9396C149.99 65.3416 149.286 66.0426 147.878 66.0426ZM141.851 66.0426C140.443 66.0426 139.739 65.3416 139.739 63.9396C139.739 62.5376 140.443 61.84 141.851 61.84C143.255 61.84 143.959 62.5376 143.959 63.9396C143.959 65.3416 143.255 66.0426 141.851 66.0426ZM135.82 66.0426C134.412 66.0426 133.712 65.3416 133.712 63.9396C133.712 62.5376 134.412 61.84 135.82 61.84C137.228 61.84 137.932 62.5376 137.932 63.9396C137.932 65.3416 137.228 66.0426 135.82 66.0426ZM129.793 66.0426C128.385 66.0426 127.681 65.3416 127.681 63.9396C127.681 62.5376 128.385 61.84 129.793 61.84C131.198 61.84 131.902 62.5376 131.902 63.9396C131.902 65.3416 131.198 66.0426 129.793 66.0426ZM123.763 65.7422L121.952 63.9396L123.763 62.137L125.569 63.9396L123.763 65.7422ZM117.732 65.7422L115.925 63.9396L117.732 62.137L119.542 63.9396L117.732 65.7422ZM99.6472 65.7422L97.837 63.9396L99.6472 62.137L101.454 63.9396L99.6472 65.7422ZM184.055 67.2408L186.767 72.6451H181.343L184.055 67.2408ZM178.024 67.2408L180.739 72.6451H175.312L178.024 67.2408ZM93.6166 72.6451L90.9047 69.9447L93.6166 67.2408L96.3284 69.9447L93.6166 72.6451ZM87.586 72.6451L84.8742 69.9447L87.586 67.2408L90.3013 69.9447L87.586 72.6451ZM81.5589 72.6451L78.8436 69.9447L81.5589 67.2408L84.2708 69.9447L81.5589 72.6451ZM75.5283 72.6451L72.8164 69.9447L75.5283 67.2408L78.2401 69.9447L75.5283 72.6451ZM69.5012 72.6451L66.7859 69.9447L69.5012 67.2408L72.2131 69.9447L69.5012 72.6451ZM63.4705 72.6451L60.7588 69.9447L63.4705 67.2408L66.1824 69.9447L63.4705 72.6451ZM57.44 72.6451L54.7281 69.9447L57.44 67.2408L60.1553 69.9447L57.44 72.6451ZM51.4129 72.6451L48.6976 69.9447L51.4129 67.2408L54.1248 69.9447L51.4129 72.6451ZM45.3823 72.6451L42.6704 69.9447L45.3823 67.2408L48.0941 69.9447L45.3823 72.6451ZM39.3552 72.6451L36.6398 69.9447L39.3552 67.2408L42.067 69.9447L39.3552 72.6451ZM33.3246 72.6451L30.6128 69.9447L33.3246 67.2408L36.0365 69.9447L33.3246 72.6451ZM27.294 72.6451L24.5821 69.9447L27.294 67.2408L30.0093 69.9447L27.294 72.6451ZM21.2669 72.6451L18.5516 69.9447L21.2669 67.2408L23.9787 69.9447L21.2669 72.6451ZM15.2362 72.6451L12.5244 69.9447L15.2362 67.2408L17.9516 69.9447L15.2362 72.6451ZM9.2092 72.6451L6.4938 69.9447L9.2092 67.2408L11.921 69.9447L9.2092 72.6451ZM3.17856 72.6451L0.466656 69.9447L3.17856 67.2408L5.89046 69.9447L3.17856 72.6451ZM174.105 72.0443H169.885V67.8417H174.105V72.0443ZM168.078 72.0443H163.858V67.8417H168.078V72.0443ZM162.048 72.0443H157.827V67.8417H162.048V72.0443ZM156.017 72.0443H151.797V67.8417H156.017V72.0443ZM147.878 72.0443C146.474 72.0443 145.77 71.3433 145.77 69.9447C145.77 68.5427 146.474 67.8417 147.878 67.8417C149.286 67.8417 149.99 68.5427 149.99 69.9447C149.99 71.3433 149.286 72.0443 147.878 72.0443ZM141.851 72.0443C140.443 72.0443 139.739 71.3433 139.739 69.9447C139.739 68.5427 140.443 67.8417 141.851 67.8417C143.255 67.8417 143.959 68.5427 143.959 69.9447C143.959 71.3433 143.255 72.0443 141.851 72.0443ZM135.82 72.0443C134.412 72.0443 133.712 71.3433 133.712 69.9447C133.712 68.5427 134.412 67.8417 135.82 67.8417C137.228 67.8417 137.932 68.5427 137.932 69.9447C137.932 71.3433 137.228 72.0443 135.82 72.0443ZM129.793 72.0443C128.385 72.0443 127.681 71.3433 127.681 69.9447C127.681 68.5427 128.385 67.8417 129.793 67.8417C131.198 67.8417 131.902 68.5427 131.902 69.9447C131.902 71.3433 131.198 72.0443 129.793 72.0443ZM123.763 71.7438L121.952 69.9447L123.763 68.1421L125.569 69.9447L123.763 71.7438ZM117.732 71.7438L115.925 69.9447L117.732 68.1421L119.542 69.9447L117.732 71.7438ZM99.6472 71.7438L97.837 69.9447L99.6472 68.1421L101.454 69.9447L99.6472 71.7438ZM184.055 73.246L186.767 78.6502H181.343L184.055 73.246ZM178.024 73.246L180.739 78.6502H175.312L178.024 73.246ZM93.6166 78.6502L90.9047 75.9464L93.6166 73.246L96.3284 75.9464L93.6166 78.6502ZM87.586 78.6502L84.8742 75.9464L87.586 73.246L90.3013 75.9464L87.586 78.6502ZM81.5589 78.6502L78.8436 75.9464L81.5589 73.246L84.2708 75.9464L81.5589 78.6502ZM75.5283 78.6502L72.8164 75.9464L75.5283 73.246L78.2401 75.9464L75.5283 78.6502ZM69.5012 78.6502L66.7859 75.9464L69.5012 73.246L72.2131 75.9464L69.5012 78.6502ZM63.4705 78.6502L60.7588 75.9464L63.4705 73.246L66.1824 75.9464L63.4705 78.6502ZM57.44 78.6502L54.7281 75.9464L57.44 73.246L60.1553 75.9464L57.44 78.6502ZM51.4129 78.6502L48.6976 75.9464L51.4129 73.246L54.1248 75.9464L51.4129 78.6502ZM45.3823 78.6502L42.6704 75.9464L45.3823 73.246L48.0941 75.9464L45.3823 78.6502ZM39.3552 78.6502L36.6398 75.9464L39.3552 73.246L42.067 75.9464L39.3552 78.6502ZM33.3246 78.6502L30.6128 75.9464L33.3246 73.246L36.0365 75.9464L33.3246 78.6502ZM27.294 78.6502L24.5821 75.9464L27.294 73.246L30.0093 75.9464L27.294 78.6502ZM21.2669 78.6502L18.5516 75.9464L21.2669 73.246L23.9787 75.9464L21.2669 78.6502ZM15.2362 78.6502L12.5244 75.9464L15.2362 73.246L17.9516 75.9464L15.2362 78.6502ZM9.2092 78.6502L6.4938 75.9464L9.2092 73.246L11.921 75.9464L9.2092 78.6502ZM3.17856 78.6502L0.466656 75.9464L3.17856 73.246L5.89046 75.9464L3.17856 78.6502ZM174.105 78.0494H169.885V73.8468H174.105V78.0494ZM168.078 78.0494H163.858V73.8468H168.078V78.0494ZM162.048 78.0494H157.827V73.8468H162.048V78.0494ZM156.017 78.0494H151.797V73.8468H156.017V78.0494ZM147.878 78.0494C146.474 78.0494 145.77 77.3484 145.77 75.9464C145.77 74.5478 146.474 73.8468 147.878 73.8468C149.286 73.8468 149.99 74.5478 149.99 75.9464C149.99 77.3484 149.286 78.0494 147.878 78.0494ZM141.851 78.0494C140.443 78.0494 139.739 77.3484 139.739 75.9464C139.739 74.5478 140.443 73.8468 141.851 73.8468C143.255 73.8468 143.959 74.5478 143.959 75.9464C143.959 77.3484 143.255 78.0494 141.851 78.0494ZM135.82 78.0494C134.412 78.0494 133.712 77.3484 133.712 75.9464C133.712 74.5478 134.412 73.8468 135.82 73.8468C137.228 73.8468 137.932 74.5478 137.932 75.9464C137.932 77.3484 137.228 78.0494 135.82 78.0494ZM129.793 78.0494C128.385 78.0494 127.681 77.3484 127.681 75.9464C127.681 74.5478 128.385 73.8468 129.793 73.8468C131.198 73.8468 131.902 74.5478 131.902 75.9464C131.902 77.3484 131.198 78.0494 129.793 78.0494ZM123.763 77.749L121.952 75.9464L123.763 74.1473L125.569 75.9464L123.763 77.749ZM117.732 77.749L115.925 75.9464L117.732 74.1473L119.542 75.9464L117.732 77.749ZM105.674 77.749L103.868 75.9464L105.674 74.1473L107.485 75.9464L105.674 77.749ZM99.6472 77.749L97.837 75.9464L99.6472 74.1473L101.454 75.9464L99.6472 77.749ZM184.055 79.2477L186.767 84.6519H181.343L184.055 79.2477ZM178.024 79.2477L180.739 84.6519H175.312L178.024 79.2477ZM93.6166 84.3515L91.203 81.9515L93.6166 79.5481L96.0267 81.9515L93.6166 84.3515ZM87.586 84.3515L85.1758 81.9515L87.586 79.5481L89.9997 81.9515L87.586 84.3515ZM81.5589 84.3515L79.1453 81.9515L81.5589 79.5481L83.969 81.9515L81.5589 84.3515ZM75.5283 84.3515L73.1181 81.9515L75.5283 79.5481L77.9419 81.9515L75.5283 84.3515ZM69.5012 84.3515L67.0875 81.9515L69.5012 79.5481L71.9114 81.9515L69.5012 84.3515ZM63.4705 84.3515L61.057 81.9515L63.4705 79.5481L65.8807 81.9515L63.4705 84.3515ZM57.44 84.3515L55.0298 81.9515L57.44 79.5481L59.8536 81.9515L57.44 84.3515ZM51.4129 84.3515L48.9993 81.9515L51.4129 79.5481L53.8231 81.9515L51.4129 84.3515ZM45.3823 84.3515L42.9722 81.9515L45.3823 79.5481L47.7959 81.9515L45.3823 84.3515ZM39.3552 84.3515L36.9415 81.9515L39.3552 79.5481L41.7653 81.9515L39.3552 84.3515ZM33.3246 84.3515L30.911 81.9515L33.3246 79.5481L35.7347 81.9515L33.3246 84.3515ZM27.294 84.3515L24.8838 81.9515L27.294 79.5481L29.7076 81.9515L27.294 84.3515ZM21.2669 84.3515L18.8532 81.9515L21.2669 79.5481L23.6771 81.9515L21.2669 84.3515ZM15.2362 84.3515L12.8262 81.9515L15.2362 79.5481L17.6499 81.9515L15.2362 84.3515ZM9.2092 84.3515L6.79552 81.9515L9.2092 79.5481L11.6193 81.9515L9.2092 84.3515ZM3.17856 84.3515L0.768378 81.9515L3.17856 79.5481L5.58874 81.9515L3.17856 84.3515ZM174.105 84.0511H169.885V79.8485H174.105V84.0511ZM168.078 84.0511H163.858V79.8485H168.078V84.0511ZM162.048 84.0511H157.827V79.8485H162.048V84.0511ZM156.017 84.0511H151.797V79.8485H156.017V84.0511ZM147.878 83.7506C146.675 83.7506 146.071 83.1532 146.071 81.9515C146.071 80.7498 146.675 80.1489 147.878 80.1489C149.085 80.1489 149.688 80.7498 149.688 81.9515C149.688 83.1532 149.085 83.7506 147.878 83.7506ZM141.851 83.7506C140.644 83.7506 140.041 83.1532 140.041 81.9515C140.041 80.7498 140.644 80.1489 141.851 80.1489C143.054 80.1489 143.658 80.7498 143.658 81.9515C143.658 83.1532 143.054 83.7506 141.851 83.7506ZM135.82 83.7506C134.613 83.7506 134.014 83.1532 134.014 81.9515C134.014 80.7498 134.613 80.1489 135.82 80.1489C137.027 80.1489 137.631 80.7498 137.631 81.9515C137.631 83.1532 137.027 83.7506 135.82 83.7506ZM129.793 83.7506C128.586 83.7506 127.983 83.1532 127.983 81.9515C127.983 80.7498 128.586 80.1489 129.793 80.1489C130.997 80.1489 131.6 80.7498 131.6 81.9515C131.6 83.1532 130.997 83.7506 129.793 83.7506ZM123.763 83.7506L121.952 81.9515L123.763 80.1489L125.569 81.9515L123.763 83.7506ZM117.732 83.7506L115.925 81.9515L117.732 80.1489L119.542 81.9515L117.732 83.7506ZM111.705 83.7506L109.895 81.9515L111.705 80.1489L113.512 81.9515L111.705 83.7506ZM105.674 83.7506L103.868 81.9515L105.674 80.1489L107.485 81.9515L105.674 83.7506ZM99.6472 83.7506L97.837 81.9515L99.6472 80.1489L101.454 81.9515L99.6472 83.7506ZM184.055 85.5532L186.465 90.3566H181.641L184.055 85.5532ZM178.024 85.5532L180.438 90.3566H175.614L178.024 85.5532ZM93.6166 90.3566L91.203 87.9532L93.6166 85.5532L96.0267 87.9532L93.6166 90.3566ZM87.586 90.3566L85.1758 87.9532L87.586 85.5532L89.9997 87.9532L87.586 90.3566ZM81.5589 90.3566L79.1453 87.9532L81.5589 85.5532L83.969 87.9532L81.5589 90.3566ZM75.5283 90.3566L73.1181 87.9532L75.5283 85.5532L77.9419 87.9532L75.5283 90.3566ZM69.5012 90.3566L67.0875 87.9532L69.5012 85.5532L71.9114 87.9532L69.5012 90.3566ZM63.4705 90.3566L61.057 87.9532L63.4705 85.5532L65.8807 87.9532L63.4705 90.3566ZM57.44 90.3566L55.0298 87.9532L57.44 85.5532L59.8536 87.9532L57.44 90.3566ZM51.4129 90.3566L48.9993 87.9532L51.4129 85.5532L53.8231 87.9532L51.4129 90.3566ZM45.3823 90.3566L42.9722 87.9532L45.3823 85.5532L47.7959 87.9532L45.3823 90.3566ZM39.3552 90.3566L36.9415 87.9532L39.3552 85.5532L41.7653 87.9532L39.3552 90.3566ZM33.3246 90.3566L30.911 87.9532L33.3246 85.5532L35.7347 87.9532L33.3246 90.3566ZM27.294 90.3566L24.8838 87.9532L27.294 85.5532L29.7076 87.9532L27.294 90.3566ZM21.2669 90.3566L18.8532 87.9532L21.2669 85.5532L23.6771 87.9532L21.2669 90.3566ZM15.2362 90.3566L12.8262 87.9532L15.2362 85.5532L17.6499 87.9532L15.2362 90.3566ZM9.2092 90.3566L6.79552 87.9532L9.2092 85.5532L11.6193 87.9532L9.2092 90.3566ZM3.17856 90.3566L0.768378 87.9532L3.17856 85.5532L5.58874 87.9532L3.17856 90.3566ZM174.105 90.0562H169.885V85.8536H174.105V90.0562ZM168.078 90.0562H163.858V85.8536H168.078V90.0562ZM162.048 90.0562H157.827V85.8536H162.048V90.0562ZM156.017 90.0562H151.797V85.8536H156.017V90.0562ZM147.878 89.7558C146.675 89.7558 146.071 89.1549 146.071 87.9532C146.071 86.7549 146.675 86.1541 147.878 86.1541C149.085 86.1541 149.688 86.7549 149.688 87.9532C149.688 89.1549 149.085 89.7558 147.878 89.7558ZM141.851 89.7558C140.644 89.7558 140.041 89.1549 140.041 87.9532C140.041 86.7549 140.644 86.1541 141.851 86.1541C143.054 86.1541 143.658 86.7549 143.658 87.9532C143.658 89.1549 143.054 89.7558 141.851 89.7558ZM135.82 89.7558C134.613 89.7558 134.014 89.1549 134.014 87.9532C134.014 86.7549 134.613 86.1541 135.82 86.1541C137.027 86.1541 137.631 86.7549 137.631 87.9532C137.631 89.1549 137.027 89.7558 135.82 89.7558ZM129.793 89.7558C128.586 89.7558 127.983 89.1549 127.983 87.9532C127.983 86.7549 128.586 86.1541 129.793 86.1541C130.997 86.1541 131.6 86.7549 131.6 87.9532C131.6 89.1549 130.997 89.7558 129.793 89.7558ZM123.763 89.7558L121.952 87.9532L123.763 86.1541L125.569 87.9532L123.763 89.7558ZM117.732 89.7558L115.925 87.9532L117.732 86.1541L119.542 87.9532L117.732 89.7558ZM111.705 89.7558L109.895 87.9532L111.705 86.1541L113.512 87.9532L111.705 89.7558ZM105.674 89.7558L103.868 87.9532L105.674 86.1541L107.485 87.9532L105.674 89.7558ZM99.6472 89.7558L97.837 87.9532L99.6472 86.1541L101.454 87.9532L99.6472 89.7558ZM90.603 96.9592H84.5725V90.9575H90.603V96.9592ZM84.5725 96.9592H78.5418V90.9575H84.5725V96.9592ZM78.5418 96.9592H72.5147V90.9575H78.5418V96.9592ZM72.5147 96.9592H66.4842V90.9575H72.5147V96.9592ZM66.4842 96.9592H60.457V90.9575H66.4842V96.9592ZM60.457 96.9592H54.4264V90.9575H60.457V96.9592ZM54.4264 96.9592H48.3959V90.9575H54.4264V96.9592ZM48.3959 96.9592H42.3687V90.9575H48.3959V96.9592ZM42.3687 96.9592H36.3382V90.9575H42.3687V96.9592ZM36.3382 96.9592H30.311V90.9575H36.3382V96.9592ZM30.311 96.9592H24.2804V90.9575H30.311V96.9592ZM24.2804 96.9592H18.2499V90.9575H24.2804V96.9592ZM18.2499 96.9592H12.2227V90.9575H18.2499V96.9592ZM12.2227 96.9592H6.19208V90.9575H12.2227V96.9592ZM6.19208 96.9592H0.165039V90.9575H6.19208V96.9592ZM102.359 96.6587H96.9319V91.2579H102.359V96.6587ZM96.3284 96.6587H90.9047V91.2579H96.3284V96.6587ZM184.055 96.3583C182.446 96.3583 181.641 95.5606 181.641 93.9583C181.641 92.356 182.446 91.5583 184.055 91.5583C185.664 91.5583 186.465 92.356 186.465 93.9583C186.465 95.5606 185.664 96.3583 184.055 96.3583ZM178.024 96.3583C176.418 96.3583 175.614 95.5606 175.614 93.9583C175.614 92.356 176.418 91.5583 178.024 91.5583C179.633 91.5583 180.438 92.356 180.438 93.9583C180.438 95.5606 179.633 96.3583 178.024 96.3583ZM171.997 92.4562L173.502 95.4605H170.488L171.997 92.4562ZM165.966 92.4562L167.475 95.4605H164.458L165.966 92.4562ZM159.939 92.4562L161.444 95.4605H158.431L159.939 92.4562ZM153.909 92.4562L155.417 95.4605H152.4L153.909 92.4562ZM147.878 92.4562L149.387 95.4605H146.373L147.878 92.4562ZM141.851 92.4562L143.356 95.4605H140.342L141.851 92.4562ZM135.82 92.4562L137.329 95.4605H134.312L135.82 92.4562ZM129.793 92.4562L131.298 95.4605H128.285L129.793 92.4562ZM123.763 92.4562L125.271 95.4605H122.254L123.763 92.4562ZM117.732 92.4562L119.241 95.4605H116.227L117.732 92.4562ZM111.705 92.4562L113.21 95.4605H110.196L111.705 92.4562ZM105.674 92.4562L107.183 95.4605H104.166L105.674 92.4562ZM90.3013 102.664H84.8742V97.2596H90.3013V102.664ZM84.2708 102.664H78.8436V97.2596H84.2708V102.664ZM78.2401 102.664H72.8164V97.2596H78.2401V102.664ZM72.2131 102.664H66.7859V97.2596H72.2131V102.664ZM66.1824 102.664H60.7588V97.2596H66.1824V102.664ZM60.1553 102.664H54.7281V97.2596H60.1553V102.664ZM54.1248 102.664H48.6976V97.2596H54.1248V102.664ZM48.0941 102.664H42.6704V97.2596H48.0941V102.664ZM42.067 102.664H36.6398V97.2596H42.067V102.664ZM36.0365 102.664H30.6128V97.2596H36.0365V102.664ZM30.0093 102.664H24.5821V97.2596H30.0093V102.664ZM23.9787 102.664H18.5516V97.2596H23.9787V102.664ZM17.9516 102.664H12.5244V97.2596H17.9516V102.664ZM11.921 102.664H6.4938V97.2596H11.921V102.664ZM5.89046 102.664H0.466656V97.2596H5.89046V102.664ZM102.057 102.363H97.2336V97.56H102.057V102.363ZM96.0267 102.363H91.203V97.56H96.0267V102.363ZM184.055 102.363C182.446 102.363 181.641 101.562 181.641 99.9635C181.641 98.3612 182.446 97.56 184.055 97.56C185.664 97.56 186.465 98.3612 186.465 99.9635C186.465 101.562 185.664 102.363 184.055 102.363ZM178.024 102.363C176.418 102.363 175.614 101.562 175.614 99.9635C175.614 98.3612 176.418 97.56 178.024 97.56C179.633 97.56 180.438 98.3612 180.438 99.9635C180.438 101.562 179.633 102.363 178.024 102.363ZM171.997 98.4613L173.502 101.462H170.488L171.997 98.4613ZM165.966 98.4613L167.475 101.462H164.458L165.966 98.4613ZM159.939 98.4613L161.444 101.462H158.431L159.939 98.4613ZM153.909 98.4613L155.417 101.462H152.4L153.909 98.4613ZM147.878 98.4613L149.387 101.462H146.373L147.878 98.4613ZM141.851 98.4613L143.356 101.462H140.342L141.851 98.4613ZM135.82 98.4613L137.329 101.462H134.312L135.82 98.4613ZM129.793 98.4613L131.298 101.462H128.285L129.793 98.4613ZM123.763 98.4613L125.271 101.462H122.254L123.763 98.4613ZM117.732 98.4613L119.241 101.462H116.227L117.732 98.4613ZM111.705 98.4613L113.21 101.462H110.196L111.705 98.4613ZM105.674 98.4613L107.183 101.462H104.166L105.674 98.4613ZM184.055 103.265L186.767 108.669H181.343L184.055 103.265ZM178.024 103.265L180.739 108.669H175.312L178.024 103.265ZM90.3013 108.669H84.8742V103.265H90.3013V108.669ZM84.2708 108.669H78.8436V103.265H84.2708V108.669ZM78.2401 108.669H72.8164V103.265H78.2401V108.669ZM72.2131 108.669H66.7859V103.265H72.2131V108.669ZM66.1824 108.669H60.7588V103.265H66.1824V108.669ZM60.1553 108.669H54.7281V103.265H60.1553V108.669ZM54.1248 108.669H48.6976V103.265H54.1248V108.669ZM48.0941 108.669H42.6704V103.265H48.0941V108.669ZM42.067 108.669H36.6398V103.265H42.067V108.669ZM36.0365 108.669H30.6128V103.265H36.0365V108.669ZM30.0093 108.669H24.5821V103.265H30.0093V108.669ZM23.9787 108.669H18.5516V103.265H23.9787V108.669ZM17.9516 108.669H12.5244V103.265H17.9516V108.669ZM11.921 108.669H6.4938V103.265H11.921V108.669ZM5.89046 108.669H0.466656V103.265H5.89046V108.669ZM102.057 108.369H97.2336V103.565H102.057V108.369ZM96.0267 108.369H91.203V103.565H96.0267V108.369ZM171.997 104.466L173.502 107.467H170.488L171.997 104.466ZM165.966 104.466L167.475 107.467H164.458L165.966 104.466ZM159.939 104.466L161.444 107.467H158.431L159.939 104.466ZM153.909 104.466L155.417 107.467H152.4L153.909 104.466ZM147.878 104.466L149.387 107.467H146.373L147.878 104.466ZM141.851 104.466L143.356 107.467H140.342L141.851 104.466ZM135.82 104.466L137.329 107.467H134.312L135.82 104.466ZM129.793 104.466L131.298 107.467H128.285L129.793 104.466ZM123.763 104.466L125.271 107.467H122.254L123.763 104.466ZM117.732 104.466L119.241 107.467H116.227L117.732 104.466ZM111.705 104.466L113.21 107.467H110.196L111.705 104.466ZM105.674 104.466L107.183 107.467H104.166L105.674 104.466ZM184.055 109.266L186.767 114.671H181.343L184.055 109.266ZM178.024 109.266L180.739 114.671H175.312L178.024 109.266ZM90.3013 114.671H84.8742V109.266H90.3013V114.671ZM84.2708 114.671H78.8436V109.266H84.2708V114.671ZM78.2401 114.671H72.8164V109.266H78.2401V114.671ZM72.2131 114.671H66.7859V109.266H72.2131V114.671ZM66.1824 114.671H60.7588V109.266H66.1824V114.671ZM60.1553 114.671H54.7281V109.266H60.1553V114.671ZM54.1248 114.671H48.6976V109.266H54.1248V114.671ZM48.0941 114.671H42.6704V109.266H48.0941V114.671ZM42.067 114.671H36.6398V109.266H42.067V114.671ZM36.0365 114.671H30.6128V109.266H36.0365V114.671ZM30.0093 114.671H24.5821V109.266H30.0093V114.671ZM23.9787 114.671H18.5516V109.266H23.9787V114.671ZM17.9516 114.671H12.5244V109.266H17.9516V114.671ZM11.921 114.671H6.4938V109.266H11.921V114.671ZM5.89046 114.671H0.466656V109.266H5.89046V114.671ZM102.057 114.37H97.2336V109.567H102.057V114.37ZM96.0267 114.37H91.203V109.567H96.0267V114.37ZM171.997 110.468L173.502 113.469H170.488L171.997 110.468ZM165.966 110.468L167.475 113.469H164.458L165.966 110.468ZM159.939 110.468L161.444 113.469H158.431L159.939 110.468ZM153.909 110.468L155.417 113.469H152.4L153.909 110.468ZM147.878 110.468L149.387 113.469H146.373L147.878 110.468ZM141.851 110.468L143.356 113.469H140.342L141.851 110.468ZM135.82 110.468L137.329 113.469H134.312L135.82 110.468ZM129.793 110.468L131.298 113.469H128.285L129.793 110.468ZM123.763 110.468L125.271 113.469H122.254L123.763 110.468ZM117.732 110.468L119.241 113.469H116.227L117.732 110.468ZM111.705 110.468L113.21 113.469H110.196L111.705 110.468ZM105.674 110.468L107.183 113.469H104.166L105.674 110.468ZM184.055 115.271L186.767 120.676H181.343L184.055 115.271ZM178.024 115.271L180.739 120.676H175.312L178.024 115.271ZM90.3013 120.676H84.8742V115.271H90.3013V120.676ZM84.2708 120.676H78.8436V115.271H84.2708V120.676ZM78.2401 120.676H72.8164V115.271H78.2401V120.676ZM72.2131 120.676H66.7859V115.271H72.2131V120.676ZM66.1824 120.676H60.7588V115.271H66.1824V120.676ZM60.1553 120.676H54.7281V115.271H60.1553V120.676ZM54.1248 120.676H48.6976V115.271H54.1248V120.676ZM48.0941 120.676H42.6704V115.271H48.0941V120.676ZM42.067 120.676H36.6398V115.271H42.067V120.676ZM36.0365 120.676H30.6128V115.271H36.0365V120.676ZM30.0093 120.676H24.5821V115.271H30.0093V120.676ZM23.9787 120.676H18.5516V115.271H23.9787V120.676ZM17.9516 120.676H12.5244V115.271H17.9516V120.676ZM11.921 120.676H6.4938V115.271H11.921V120.676ZM5.89046 120.676H0.466656V115.271H5.89046V120.676ZM102.057 120.375H97.2336V115.572H102.057V120.375ZM96.0267 120.375H91.203V115.572H96.0267V120.375ZM171.997 116.473L173.502 119.474H170.488L171.997 116.473ZM165.966 116.473L167.475 119.474H164.458L165.966 116.473ZM159.939 116.473L161.444 119.474H158.431L159.939 116.473ZM153.909 116.473L155.417 119.474H152.4L153.909 116.473ZM147.878 116.473L149.387 119.474H146.373L147.878 116.473ZM141.851 116.473L143.356 119.474H140.342L141.851 116.473ZM135.82 116.473L137.329 119.474H134.312L135.82 116.473ZM129.793 116.473L131.298 119.474H128.285L129.793 116.473ZM123.763 116.473L125.271 119.474H122.254L123.763 116.473ZM117.732 116.473L119.241 119.174H116.529L117.732 116.473ZM111.705 116.774L112.908 119.174H110.498L111.705 116.774ZM105.674 116.774L106.881 119.174H104.468L105.674 116.774ZM184.055 121.277L186.767 126.677H181.343L184.055 121.277ZM178.024 121.277L180.739 126.677H175.312L178.024 121.277ZM90.3013 126.677H84.8742V121.277H90.3013V126.677ZM84.2708 126.677H78.8436V121.277H84.2708V126.677ZM78.2401 126.677H72.8164V121.277H78.2401V126.677ZM72.2131 126.677H66.7859V121.277H72.2131V126.677ZM66.1824 126.677H60.7588V121.277H66.1824V126.677ZM60.1553 126.677H54.7281V121.277H60.1553V126.677ZM54.1248 126.677H48.6976V121.277H54.1248V126.677ZM48.0941 126.677H42.6704V121.277H48.0941V126.677ZM42.067 126.677H36.6398V121.277H42.067V126.677ZM36.0365 126.677H30.6128V121.277H36.0365V126.677ZM30.0093 126.677H24.5821V121.277H30.0093V126.677ZM23.9787 126.677H18.5516V121.277H23.9787V126.677ZM17.9516 126.677H12.5244V121.277H17.9516V126.677ZM11.921 126.677H6.4938V121.277H11.921V126.677ZM5.89046 126.677H0.466656V121.277H5.89046V126.677ZM102.057 126.377H97.2336V121.577H102.057V126.377ZM96.0267 126.377H91.203V121.577H96.0267V126.377ZM171.997 122.775L173.2 125.179H170.79L171.997 122.775ZM165.966 122.775L167.173 125.179H164.76L165.966 122.775ZM159.939 122.775L161.143 125.179H158.732L159.939 122.775ZM153.909 122.775L155.115 125.179H152.702L153.909 122.775ZM147.878 122.775L149.085 125.179H146.675L147.878 122.775ZM141.851 122.775L143.054 125.179H140.644L141.851 122.775ZM135.82 122.775L137.027 125.179H134.614L135.82 122.775ZM129.793 122.775L130.997 125.179H128.586L129.793 122.775ZM123.763 122.775L124.969 125.179H122.556L123.763 122.775ZM117.732 122.775L118.939 125.179H116.529L117.732 122.775ZM111.705 122.775L112.908 125.179H110.498L111.705 122.775ZM105.674 122.775L106.881 125.179H104.468L105.674 122.775ZM184.055 127.278L186.767 132.683H181.343L184.055 127.278ZM178.024 127.278L180.739 132.683H175.312L178.024 127.278ZM90.3013 132.683H84.8742V127.278H90.3013V132.683ZM84.2708 132.683H78.8436V127.278H84.2708V132.683ZM78.2401 132.683H72.8164V127.278H78.2401V132.683ZM66.1824 132.683H60.7588V127.278H66.1824V132.683ZM60.1553 132.683H54.7281V127.278H60.1553V132.683ZM54.1248 132.683H48.6976V127.278H54.1248V132.683ZM48.0941 132.683H42.6704V127.278H48.0941V132.683ZM42.067 132.683H36.6398V127.278H42.067V132.683ZM36.0365 132.683H30.6128V127.278H36.0365V132.683ZM30.0093 132.683H24.5821V127.278H30.0093V132.683ZM23.9787 132.683H18.5516V127.278H23.9787V132.683ZM17.9516 132.683H12.5244V127.278H17.9516V132.683ZM11.921 132.683H6.4938V127.278H11.921V132.683ZM5.89046 132.683H0.466656V127.278H5.89046V132.683ZM102.057 132.382H97.2336V127.579H102.057V132.382ZM96.0267 132.382H91.203V127.579H96.0267V132.382ZM171.997 128.78L173.2 131.18H170.79L171.997 128.78ZM165.966 128.78L167.173 131.18H164.76L165.966 128.78ZM159.939 128.78L161.143 131.18H158.732L159.939 128.78ZM153.909 128.78L155.115 131.18H152.702L153.909 128.78ZM147.878 128.78L149.085 131.18H146.675L147.878 128.78ZM141.851 128.78L143.054 131.18H140.644L141.851 128.78ZM135.82 128.78L137.027 131.18H134.614L135.82 128.78ZM129.793 128.78L130.997 131.18H128.586L129.793 128.78ZM123.763 128.78L124.969 131.18H122.556L123.763 128.78ZM117.732 128.78L118.939 131.18H116.529L117.732 128.78ZM111.705 128.78L112.908 131.18H110.498L111.705 128.78ZM105.674 128.78L106.881 131.18H104.468L105.674 128.78ZM184.055 138.688L181.343 135.984L184.055 133.283L186.767 135.984L184.055 138.688ZM178.024 138.688L175.312 135.984L178.024 133.283L180.739 135.984L178.024 138.688ZM89.9997 138.387H85.1758V133.584H89.9997V138.387ZM83.969 138.387H79.1453V133.584H83.969V138.387ZM65.8807 138.387H61.057V133.584H65.8807V138.387ZM59.8536 138.387H55.0298V133.584H59.8536V138.387ZM53.8231 138.387H48.9993V133.584H53.8231V138.387ZM47.7959 138.387H42.9722V133.584H47.7959V138.387ZM41.7653 138.387H36.9415V133.584H41.7653V138.387ZM35.7347 138.387H30.911V133.584H35.7347V138.387ZM29.7076 138.387H24.8838V133.584H29.7076V138.387ZM23.6771 138.387H18.8532V133.584H23.6771V138.387ZM17.6499 138.387H12.8262V133.584H17.6499V138.387ZM11.6193 138.387H6.79552V133.584H11.6193V138.387ZM5.58874 138.387H0.768378V133.584H5.58874V138.387ZM102.057 138.387H97.2336V133.584H102.057V138.387ZM96.0267 138.087H91.5047V133.584H96.0267V138.087ZM171.997 134.485L173.502 137.486H170.488L171.997 134.485ZM165.966 134.485L167.475 137.486H164.458L165.966 134.485ZM159.939 134.485L161.444 137.486H158.431L159.939 134.485ZM153.909 134.485L155.417 137.486H152.4L153.909 134.485ZM147.878 134.485L149.387 137.486H146.373L147.878 134.485ZM141.851 134.485L143.356 137.486H140.342L141.851 134.485ZM135.82 134.485L137.329 137.486H134.312L135.82 134.485ZM129.793 134.485L131.298 137.486H128.285L129.793 134.485ZM123.763 134.485L125.271 137.486H122.254L123.763 134.485ZM117.732 134.485L119.241 137.486H116.227L117.732 134.485ZM111.705 134.485L113.21 137.486H110.196L111.705 134.485ZM105.674 134.485L107.183 137.486H104.166L105.674 134.485ZM184.055 144.389L181.641 141.989L184.055 139.586L186.465 141.989L184.055 144.389ZM178.024 144.389L175.614 141.989L178.024 139.586L180.438 141.989L178.024 144.389ZM89.9997 144.389H85.1758V139.586H89.9997V144.389ZM83.969 144.389H79.1453V139.586H83.969V144.389ZM65.8807 144.389H61.057V139.586H65.8807V144.389ZM59.8536 144.389H55.0298V139.586H59.8536V144.389ZM53.8231 144.389H48.9993V139.586H53.8231V144.389ZM47.7959 144.389H42.9722V139.586H47.7959V144.389ZM41.7653 144.389H36.9415V139.586H41.7653V144.389ZM35.7347 144.389H30.911V139.586H35.7347V144.389ZM29.7076 144.389H24.8838V139.586H29.7076V144.389ZM23.6771 144.389H18.8532V139.586H23.6771V144.389ZM17.6499 144.389H12.8262V139.586H17.6499V144.389ZM11.6193 144.389H6.79552V139.586H11.6193V144.389ZM5.58874 144.389H0.768378V139.586H5.58874V144.389ZM101.756 144.089H97.5352V139.886H101.756V144.089ZM95.7251 144.089H91.5047V139.886H95.7251V144.089ZM171.997 140.787L173.2 143.191H170.79L171.997 140.787ZM165.966 140.787L167.173 143.191H164.76L165.966 140.787ZM159.939 140.787L161.143 143.191H158.732L159.939 140.787ZM153.909 140.787L155.115 143.191H152.702L153.909 140.787ZM147.878 140.787L149.085 143.191H146.675L147.878 140.787ZM141.851 140.787L143.054 143.191H140.644L141.851 140.787ZM135.82 140.787L137.027 143.191H134.614L135.82 140.787ZM129.793 140.787L130.997 143.191H128.586L129.793 140.787ZM123.763 140.787L124.969 143.191H122.556L123.763 140.787ZM117.732 140.787L118.939 143.191H116.529L117.732 140.787ZM111.705 140.787L112.908 143.191H110.498L111.705 140.787ZM105.674 140.787L106.881 143.191H104.468L105.674 140.787ZM184.055 150.394L181.641 147.991L184.055 145.591L186.465 147.991L184.055 150.394ZM178.024 150.394L175.614 147.991L178.024 145.591L180.438 147.991L178.024 150.394ZM89.9997 150.394H85.1758V145.591H89.9997V150.394ZM65.8807 150.394H61.057V145.591H65.8807V150.394ZM59.8536 150.394H55.0298V145.591H59.8536V150.394ZM53.8231 150.394H48.9993V145.591H53.8231V150.394ZM47.7959 150.394H42.9722V145.591H47.7959V150.394ZM41.7653 150.394H36.9415V145.591H41.7653V150.394ZM35.7347 150.394H30.911V145.591H35.7347V150.394ZM29.7076 150.394H24.8838V145.591H29.7076V150.394ZM23.6771 150.394H18.8532V145.591H23.6771V150.394ZM17.6499 150.394H12.8262V145.591H17.6499V150.394ZM11.6193 150.394H6.79552V145.591H11.6193V150.394ZM5.58874 150.394H0.768378V145.591H5.58874V150.394ZM101.756 150.094H97.5352V145.891H101.756V150.094ZM95.7251 150.094H91.5047V145.891H95.7251V150.094ZM171.997 146.792L173.2 149.192H170.79L171.997 146.792ZM165.966 146.792L167.173 149.192H164.76L165.966 146.792ZM159.939 146.792L161.143 149.192H158.732L159.939 146.792ZM153.909 146.792L155.115 149.192H152.702L153.909 146.792ZM147.878 146.792L149.085 149.192H146.675L147.878 146.792ZM141.851 146.792L143.054 149.192H140.644L141.851 146.792ZM135.82 146.792L137.027 149.192H134.614L135.82 146.792ZM129.793 146.792L130.997 149.192H128.586L129.793 146.792ZM123.763 146.792L124.969 149.192H122.556L123.763 146.792ZM117.732 146.792L118.939 149.192H116.529L117.732 146.792ZM111.705 146.792L112.908 149.192H110.498L111.705 146.792ZM105.674 146.792L106.881 149.192H104.468L105.674 146.792ZM184.055 156.396L181.641 153.996L184.055 151.596L186.465 153.996L184.055 156.396ZM178.024 156.396L175.614 153.996L178.024 151.596L180.438 153.996L178.024 156.396ZM89.9997 156.396H85.1758V151.596H89.9997V156.396ZM65.8807 156.396H61.057V151.596H65.8807V156.396ZM59.8536 156.396H55.0298V151.596H59.8536V156.396ZM53.8231 156.396H48.9993V151.596H53.8231V156.396ZM47.7959 156.396H42.9722V151.596H47.7959V156.396ZM41.7653 156.396H36.9415V151.596H41.7653V156.396ZM35.7347 156.396H30.911V151.596H35.7347V156.396ZM29.7076 156.396H24.8838V151.596H29.7076V156.396ZM23.6771 156.396H18.8532V151.596H23.6771V156.396ZM17.6499 156.396H12.8262V151.596H17.6499V156.396ZM11.6193 156.396H6.79552V151.596H11.6193V156.396ZM5.58874 156.396H0.768378V151.596H5.58874V156.396ZM101.756 156.099H97.5352V151.896H101.756V156.099ZM95.7251 156.099H91.5047V151.896H95.7251V156.099ZM171.997 152.794L173.2 155.198H170.79L171.997 152.794ZM165.966 152.794L167.173 155.198H164.76L165.966 152.794ZM159.939 152.794L161.143 155.198H158.732L159.939 152.794ZM153.909 152.794L155.115 155.198H152.702L153.909 152.794ZM147.878 152.794L149.085 155.198H146.675L147.878 152.794ZM141.851 152.794L143.054 155.198H140.644L141.851 152.794ZM135.82 152.794L137.027 155.198H134.614L135.82 152.794ZM129.793 152.794L130.997 155.198H128.586L129.793 152.794ZM123.763 152.794L124.969 155.198H122.556L123.763 152.794ZM117.732 152.794L118.939 155.198H116.529L117.732 152.794ZM111.705 152.794L112.908 155.198H110.498L111.705 152.794ZM105.674 152.794L106.881 155.198H104.468L105.674 152.794ZM184.055 162.401L181.641 160.001L184.055 157.597L186.465 160.001L184.055 162.401ZM178.024 162.401L175.614 160.001L178.024 157.597L180.438 160.001L178.024 162.401ZM65.8807 162.401H61.057V157.597H65.8807V162.401ZM59.8536 162.401H55.0298V157.597H59.8536V162.401ZM53.8231 162.401H48.9993V157.597H53.8231V162.401ZM47.7959 162.401H42.9722V157.597H47.7959V162.401ZM41.7653 162.401H36.9415V157.597H41.7653V162.401ZM35.7347 162.401H30.911V157.597H35.7347V162.401ZM29.7076 162.401H24.8838V157.597H29.7076V162.401ZM23.6771 162.401H18.8532V157.597H23.6771V162.401ZM17.6499 162.401H12.8262V157.597H17.6499V162.401ZM11.6193 162.401H6.79552V157.597H11.6193V162.401ZM5.58874 162.401H0.768378V157.597H5.58874V162.401ZM101.756 162.1H97.5352V157.898H101.756V162.1ZM95.7251 162.1H91.5047V157.898H95.7251V162.1ZM171.997 158.799L173.2 161.199H170.79L171.997 158.799ZM165.966 158.799L167.173 161.199H164.76L165.966 158.799ZM159.939 158.799L161.143 161.199H158.732L159.939 158.799ZM153.909 158.799L155.115 161.199H152.702L153.909 158.799ZM147.878 158.799L149.085 161.199H146.675L147.878 158.799ZM141.851 158.799L143.054 161.199H140.644L141.851 158.799ZM135.82 158.799L137.027 161.199H134.614L135.82 158.799ZM129.793 158.799L130.997 161.199H128.586L129.793 158.799ZM123.763 158.799L124.969 161.199H122.556L123.763 158.799ZM117.732 158.799L118.939 161.199H116.529L117.732 158.799ZM111.705 158.799L112.908 161.199H110.498L111.705 158.799ZM105.674 158.799L106.881 161.199H104.468L105.674 158.799ZM184.055 168.406L181.641 166.003L184.055 163.603L186.465 166.003L184.055 168.406ZM178.024 168.406L175.614 166.003L178.024 163.603L180.438 166.003L178.024 168.406ZM65.8807 168.406H61.057V163.603H65.8807V168.406ZM59.8536 168.406H55.0298V163.603H59.8536V168.406ZM53.8231 168.406H48.9993V163.603H53.8231V168.406ZM47.7959 168.406H42.9722V163.603H47.7959V168.406ZM41.7653 168.406H36.9415V163.603H41.7653V168.406ZM35.7347 168.406H30.911V163.603H35.7347V168.406ZM29.7076 168.406H24.8838V163.603H29.7076V168.406ZM23.6771 168.406H18.8532V163.603H23.6771V168.406ZM17.6499 168.406H12.8262V163.603H17.6499V168.406ZM11.6193 168.406H6.79552V163.603H11.6193V168.406ZM5.58874 168.406H0.768378V163.603H5.58874V168.406ZM101.756 168.106H97.5352V163.903H101.756V168.106ZM171.997 164.804L173.2 167.204H170.79L171.997 164.804ZM165.966 164.804L167.173 167.204H164.76L165.966 164.804ZM159.939 164.804L161.143 167.204H158.732L159.939 164.804ZM153.909 164.804L155.115 167.204H152.702L153.909 164.804ZM147.878 164.804L149.085 167.204H146.675L147.878 164.804ZM141.851 164.804L143.054 167.204H140.644L141.851 164.804ZM135.82 164.804L137.027 167.204H134.614L135.82 164.804ZM129.793 164.804L130.997 167.204H128.586L129.793 164.804ZM123.763 164.804L124.969 167.204H122.556L123.763 164.804ZM117.732 164.804L118.939 167.204H116.529L117.732 164.804ZM111.705 164.804L112.908 167.204H110.498L111.705 164.804ZM105.674 164.804L106.881 167.204H104.468L105.674 164.804ZM184.055 174.408L181.641 172.008L184.055 169.604L186.465 172.008L184.055 174.408ZM178.024 174.408L175.614 172.008L178.024 169.604L180.438 172.008L178.024 174.408ZM65.8807 174.408H61.057V169.604H65.8807V174.408ZM59.8536 174.408H55.0298V169.604H59.8536V174.408ZM53.8231 174.408H48.9993V169.604H53.8231V174.408ZM47.7959 174.107H43.2739V169.604H47.7959V174.107ZM41.4636 174.107H37.2432V169.905H41.4636V174.107ZM35.433 174.107H31.2126V169.905H35.433V174.107ZM29.4059 174.107H25.1856V169.905H29.4059V174.107ZM23.3753 174.107H19.1549V169.905H23.3753V174.107ZM17.3482 174.107H13.1278V169.905H17.3482V174.107ZM11.3175 174.107H7.09725V169.905H11.3175V174.107ZM5.28702 174.107H1.06661V169.905H5.28702V174.107ZM101.756 174.107H97.5352V169.905H101.756V174.107ZM171.997 170.806L173.2 173.209H170.79L171.997 170.806ZM165.966 170.806L167.173 173.209H164.76L165.966 170.806ZM159.939 170.806L161.143 173.209H158.732L159.939 170.806ZM153.909 170.806L155.115 173.209H152.702L153.909 170.806ZM147.878 170.806L149.085 173.209H146.675L147.878 170.806ZM141.851 170.806L143.054 173.209H140.644L141.851 170.806ZM135.82 170.806L137.027 173.209H134.614L135.82 170.806ZM129.793 170.806L130.997 173.209H128.586L129.793 170.806ZM123.763 170.806L124.969 173.209H122.556L123.763 170.806ZM117.732 170.806L118.939 173.209H116.529L117.732 170.806ZM111.705 170.806L112.908 173.209H110.498L111.705 170.806ZM105.674 170.806L106.881 173.209H104.468L105.674 170.806ZM184.055 180.112L181.943 178.009L184.055 175.91L186.163 178.009L184.055 180.112ZM178.024 180.112L175.916 178.009L178.024 175.91L180.136 178.009L178.024 180.112ZM65.579 180.112H61.3587V175.91H65.579V180.112ZM59.552 180.112H55.3316V175.91H59.552V180.112ZM53.5213 180.112H49.3009V175.91H53.5213V180.112ZM47.4942 180.112H43.2739V175.91H47.4942V180.112ZM41.4636 180.112H37.2432V175.91H41.4636V180.112ZM35.433 180.112H31.2126V175.91H35.433V180.112ZM29.4059 180.112H25.1856V175.91H29.4059V180.112ZM23.3753 180.112H19.1549V175.91H23.3753V180.112ZM17.3482 180.112H13.1278V175.91H17.3482V180.112ZM11.3175 180.112H7.09725V175.91H11.3175V180.112ZM5.28702 180.112H1.06661V175.91H5.28702V180.112ZM171.997 177.112L172.899 178.911H171.092L171.997 177.112ZM165.966 177.112L166.871 178.911H165.061L165.966 177.112ZM159.939 177.112L160.841 178.911H159.034L159.939 177.112ZM153.909 177.112L154.814 178.911H153.004L153.909 177.112ZM147.878 177.112L148.783 178.911H146.976L147.878 177.112ZM141.851 177.112L142.753 178.911H140.946L141.851 177.112ZM135.82 177.112L136.725 178.911H134.915L135.82 177.112ZM129.793 177.112L130.695 178.911H128.888L129.793 177.112ZM123.763 177.112L124.668 178.911H122.857L123.763 177.112ZM117.732 177.112L118.637 178.911H116.83L117.732 177.112ZM111.705 177.112L112.61 178.911H110.8L111.705 177.112ZM105.674 177.112L106.579 178.911H104.769L105.674 177.112ZM184.055 186.118L181.943 184.015L184.055 181.915L186.163 184.015L184.055 186.118ZM178.024 186.118L175.916 184.015L178.024 181.915L180.136 184.015L178.024 186.118ZM65.579 186.118H61.3587V181.915H65.579V186.118ZM59.552 186.118H55.3316V181.915H59.552V186.118ZM53.5213 186.118H49.3009V181.915H53.5213V186.118ZM47.4942 186.118H43.2739V181.915H47.4942V186.118ZM41.4636 186.118H37.2432V181.915H41.4636V186.118ZM35.433 186.118H31.2126V181.915H35.433V186.118ZM29.4059 186.118H25.1856V181.915H29.4059V186.118ZM23.3753 186.118H19.1549V181.915H23.3753V186.118ZM17.3482 186.118H13.1278V181.915H17.3482V186.118ZM11.3175 186.118H7.09725V181.915H11.3175V186.118ZM5.28702 186.118H1.06661V181.915H5.28702V186.118ZM171.997 183.113L172.899 184.916H171.092L171.997 183.113ZM165.966 183.113L166.871 184.916H165.061L165.966 183.113ZM159.939 183.113L160.841 184.916H159.034L159.939 183.113ZM153.909 183.113L154.814 184.916H153.004L153.909 183.113ZM147.878 183.113L148.783 184.916H146.976L147.878 183.113ZM141.851 183.113L142.753 184.916H140.946L141.851 183.113ZM135.82 183.113L136.725 184.916H134.915L135.82 183.113ZM129.793 183.113L130.695 184.916H128.888L129.793 183.113ZM123.763 183.113L124.668 184.916H122.857L123.763 183.113ZM117.732 183.113L118.637 184.916H116.83L117.732 183.113ZM111.705 183.113L112.61 184.916H110.8L111.705 183.113ZM184.055 192.119L181.943 190.02L184.055 187.917L186.163 190.02L184.055 192.119ZM178.024 192.119L175.916 190.02L178.024 187.917L180.136 190.02L178.024 192.119ZM65.579 192.119H61.3587V187.917H65.579V192.119ZM59.552 192.119H55.3316V187.917H59.552V192.119ZM53.5213 192.119H49.3009V187.917H53.5213V192.119ZM47.4942 192.119H43.2739V187.917H47.4942V192.119ZM41.4636 192.119H37.2432V187.917H41.4636V192.119ZM35.433 192.119H31.2126V187.917H35.433V192.119ZM29.4059 192.119H25.1856V187.917H29.4059V192.119ZM23.3753 192.119H19.1549V187.917H23.3753V192.119ZM17.3482 192.119H13.1278V187.917H17.3482V192.119ZM11.3175 192.119H7.09725V187.917H11.3175V192.119ZM5.28702 192.119H1.06661V187.917H5.28702V192.119ZM171.997 189.118L172.899 190.917H171.092L171.997 189.118ZM165.966 189.118L166.871 190.917H165.061L165.966 189.118ZM159.939 189.118L160.841 190.917H159.034L159.939 189.118ZM153.909 189.118L154.814 190.917H153.004L153.909 189.118ZM147.878 189.118L148.783 190.917H146.976L147.878 189.118ZM141.851 189.118L142.753 190.917H140.946L141.851 189.118ZM135.82 189.118L136.725 190.917H134.915L135.82 189.118ZM129.793 189.118L130.695 190.917H128.888L129.793 189.118ZM123.763 189.118L124.668 190.917H122.857L123.763 189.118ZM117.732 189.118L118.637 190.917H116.83L117.732 189.118ZM111.705 189.118L112.61 190.917H110.8L111.705 189.118ZM184.055 198.124L181.943 196.021L184.055 193.922L186.163 196.021L184.055 198.124ZM178.024 198.124L175.916 196.021L178.024 193.922L180.136 196.021L178.024 198.124ZM65.579 198.124H61.3587V193.922H65.579V198.124ZM59.552 198.124H55.3316V193.922H59.552V198.124ZM53.5213 198.124H49.3009V193.922H53.5213V198.124ZM47.4942 198.124H43.2739V193.922H47.4942V198.124ZM41.4636 198.124H37.2432V193.922H41.4636V198.124ZM35.433 198.124H31.2126V193.922H35.433V198.124ZM29.4059 198.124H25.1856V193.922H29.4059V198.124ZM23.3753 198.124H19.1549V193.922H23.3753V198.124ZM17.3482 198.124H13.1278V193.922H17.3482V198.124ZM11.3175 198.124H7.09725V193.922H11.3175V198.124ZM5.28702 198.124H1.06661V193.922H5.28702V198.124ZM171.997 195.12L172.899 196.923H171.092L171.997 195.12ZM165.966 195.12L166.871 196.923H165.061L165.966 195.12ZM159.939 195.12L160.841 196.923H159.034L159.939 195.12ZM153.909 195.12L154.814 196.923H153.004L153.909 195.12ZM147.878 195.12L148.783 196.923H146.976L147.878 195.12ZM141.851 195.12L142.753 196.923H140.946L141.851 195.12ZM135.82 195.12L136.725 196.923H134.915L135.82 195.12ZM129.793 195.12L130.695 196.923H128.888L129.793 195.12ZM123.763 195.12L124.668 196.923H122.857L123.763 195.12ZM117.732 195.12L118.637 196.923H116.83L117.732 195.12ZM184.055 204.126L181.943 202.026L184.055 199.923L186.163 202.026L184.055 204.126ZM178.024 204.126L175.916 202.026L178.024 199.923L180.136 202.026L178.024 204.126ZM65.579 204.126H61.3587V199.923H65.579V204.126ZM59.552 204.126H55.3316V199.923H59.552V204.126ZM53.5213 204.126H49.3009V199.923H53.5213V204.126ZM47.4942 204.126H43.2739V199.923H47.4942V204.126ZM41.4636 204.126H37.2432V199.923H41.4636V204.126ZM35.433 204.126H31.2126V199.923H35.433V204.126ZM29.4059 204.126H25.1856V199.923H29.4059V204.126ZM23.3753 204.126H19.1549V199.923H23.3753V204.126ZM17.3482 204.126H13.1278V199.923H17.3482V204.126ZM11.3175 204.126H7.09725V199.923H11.3175V204.126ZM5.28702 204.126H1.06661V199.923H5.28702V204.126ZM171.997 201.125L172.899 202.928H171.092L171.997 201.125ZM165.966 201.125L166.871 202.928H165.061L165.966 201.125ZM159.939 201.125L160.841 202.928H159.034L159.939 201.125ZM153.909 201.125L154.814 202.928H153.004L153.909 201.125ZM147.878 201.125L148.783 202.928H146.976L147.878 201.125ZM141.851 201.125L142.753 202.928H140.946L141.851 201.125ZM135.82 201.125L136.725 202.928H134.915L135.82 201.125ZM129.793 201.125L130.695 202.928H128.888L129.793 201.125ZM123.763 201.125L124.668 202.928H122.857L123.763 201.125Z"
                fill="white"
              />
            </svg>
            <svg
              className={`w-[10vw]`}
              viewBox="0 0 202 222"
              fill="none"
              opacity={lettersHaving[5] === "1" ? "1" : "0.16"}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.5492 107.52C32.5769 110.629 39.2203 109.846 41.2492 102.274C42.9571 95.9002 39.1588 91.6792 31.0332 90.7853C34.7697 92.8519 34.7535 96.9052 33.8464 100.291C32.832 104.077 31.2305 106.851 26.5492 107.52ZM30.897 121.709C43.7279 126.641 52.4246 116.587 55.2542 106.027C58.1902 95.0698 56.1778 82.5757 41.8938 80.6681C50.4955 86.1761 50.015 97.5768 48.2534 104.151C46.5445 110.529 40.9931 121.64 30.897 121.709ZM69.4602 109.834C73.4633 94.8936 68.9558 78.0987 50.9636 75.6265C64.1395 80.8658 65.392 96.9995 62.456 107.957C59.5727 118.717 49.8617 132.557 36.1237 131.01C52.3419 137.704 65.5634 124.376 69.4602 109.834ZM76.461 111.709C71.2826 131.036 55.6352 142.215 41.2566 139.857C58.7837 146.477 77.847 135.358 83.6662 113.64C89.3246 92.5227 79.9759 73.7907 59.9397 70.1308C77.0154 76.8405 80.5714 96.3692 76.461 111.709ZM46.392 148.708C67.6112 156.743 90.0343 145.881 97.6679 117.392C105.248 89.103 92.3016 69.407 68.8127 65.033C90.1383 72.6705 96.5917 93.4046 90.667 115.516C84.6878 137.831 68.0797 152.596 46.392 148.708ZM51.6722 157.81C76.5493 166.61 103.373 153.727 112.075 121.252C120.722 88.9807 104.825 65.0763 77.8825 59.9914C100.062 67.6433 113.024 89.6923 105.071 119.375C97.0636 149.258 74.1605 161.912 51.6722 157.81ZM126.278 125.058C135.886 89.1973 118.099 61.1579 86.8082 54.6968C112.79 63.3674 128.204 89.0621 119.076 123.128C109.947 157.197 83.0407 171.981 56.9524 166.911C86.0828 176.639 116.562 161.318 126.278 125.058ZM140.283 128.81C151.012 88.7671 130.623 56.8272 95.7306 49.4012C126.115 59.2479 143.317 89.483 133.282 126.934C123.192 164.589 92.3775 181.955 62.0878 175.762C95.1649 186.759 129.552 168.857 140.283 128.81ZM105.002 44.4102C138.333 55.2645 158.751 88.7064 147.488 130.741C136.331 172.379 101.512 191.878 67.368 184.863C104.1 196.625 142.637 176.846 154.489 132.617C166.233 88.7878 143.548 52.6042 105.002 44.4102ZM113.925 39.1146C151.859 51.1989 173.66 89.0726 161.489 134.493C149.318 179.916 110.743 202.248 72.5009 193.71C112.983 206.695 155.776 184.635 168.695 136.423C181.666 88.0146 155.821 48.4174 113.925 39.1146ZM182.897 140.229C196.936 87.8342 168.693 44.3945 122.999 34.0706C164.583 46.922 189.188 88.7468 175.896 138.353C162.605 187.959 119.73 211.917 77.8372 202.616C121.918 216.561 168.857 192.627 182.897 140.229ZM77.7926 217.976L0.368033 197.23L53.2158 -0.000244141L130.64 20.7456C182.46 34.6306 212.69 85.8635 197.103 144.035C181.729 201.413 129.612 231.861 77.7926 217.976Z"
                fill="white"
              />
            </svg>
          </div>
          <p
            className={`mt-[2vw] text-[5vw] tracking-wider text-[#D2BEFF] ipadair:mt-[1vw] ipadair:text-[2.5vw]`}
            style={{ fontFamily: "Rocket Thunder" }}
          >
            <span>{6 - level}</span> more to Collect
          </p>
        </div>
      </div>
      {/* Collections Section */}

      {/* Leaderboard 1st 2nd 3rd Section */}
      <div
        className={`relative mt-[-5vw] flex h-[110vw] items-center justify-center rounded-t-[4vw] border-[1.75vw] border-black bg-[#FAE00D] ipadair:mt-[-2vw] ipadair:h-[60vw] ipadair:rounded-t-[2vw] ipadair:border-[0.75vw]`}
      >
        <div
          className={`absolute inset-0 bg-[url('/assets/landing/maze.webp')] bg-cover bg-center bg-no-repeat opacity-40`}
        ></div>
        <p
          className={`absolute left-[6vw] top-[2vw] text-[13vw] leading-[15vw] tracking-widest ipadair:left-[3vw] ipadair:top-[1vw] ipadair:text-[9vw] ipadair:leading-[10vw]`}
          style={{ fontFamily: "Rocket Thunder" }}
        >
          LEADER
          <br />B<span className={`text-[#E1067B]`}>O</span>ARD
        </p>
        <div
          className={`absolute bottom-[3.25vw] right-[14vw] w-[18.1vw] ipadair:bottom-[2.25vw] ipadair:right-[10vw] ipadair:w-[17.1vw]`}
        >
          <Image
            className="animate-spinSlow"
            src="/assets/Game/logo_two.webp"
            layout="responsive"
            width={100}
            height={100}
            alt="logo"
            unoptimized
          />
        </div>
        <div className={`absolute bottom-0 hidden w-[95%] ipadair:block`}>
          <Image
            src="/assets/Game/leaderboard_ladder.webp"
            layout="responsive"
            width={100}
            height={100}
            alt="logo"
            unoptimized
          />
        </div>
        <div className={`absolute bottom-0 block w-[90%] ipadair:hidden`}>
          <Image
            src="/assets/Game/leaderboard_ladder_mobile.webp"
            layout="responsive"
            width={100}
            height={100}
            alt="logo"
            unoptimized
          />
        </div>
        {/* Third Position */}
        <div
          className={`absolute left-[5vw] top-[33.5vw] hidden flex-col items-center justify-center ipadair:flex`}
        >
          <div className={`h-[10.5vw] w-[10.5vw] rotate-[17deg]`}>
            <Image
              className={`rounded-[0.5vw] object-cover`}
              src={top10Players[2]?.pic ?? "/assets/Game/placeholder.webp"}
              layout="responsive"
              width={100}
              height={100}
              alt="logo"
            />
          </div>
          <svg
            className={`relative left-[-0.5vw] top-[-0.35vw] w-[6vw]`}
            viewBox="0 0 108 119"
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_2319_7864)">
              <path
                d="M38.8107 106.064C17.7926 99.2353 6.31393 76.6724 13.1362 55.6755L89.2207 80.3969C82.3773 101.387 59.8287 112.894 38.8107 106.064Z"
                fill="black"
              />
              <path
                d="M51.1681 68.0329C33.985 62.4498 24.5878 44.0066 30.1709 26.8235L92.3988 47.0425C86.8013 64.1976 68.3513 73.616 51.1681 68.0329Z"
                fill="black"
              />
              <path
                d="M61.2809 36.9083C47.8904 32.5575 40.5671 18.1847 44.918 4.79419L93.4163 20.5522C89.0442 33.9359 74.6715 41.2592 61.2809 36.9083Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_2319_7864">
                <rect
                  width="80"
                  height="98.2011"
                  fill="white"
                  transform="translate(31.125 0.3125) rotate(18)"
                />
              </clipPath>
            </defs>
          </svg>
          <div
            className={`relative right-[2vw] top-[-1vw] flex items-center justify-center`}
          >
            <p
              className={`w-[20vw] text-center text-[3vw] leading-[3vw] text-white`}
              style={{
                fontFamily: "Rocket Thunder",
                whiteSpace: "normal",
                wordBreak: "break-word",
              }}
            >
              @{" "}
              {top10Players[2]?.name
                .split(" ")[0]
                ?.slice(0, maxCharsForUserID) ?? "Jayz"}
            </p>
          </div>
        </div>
        {/* Third Position */}

        {/* Second Position */}
        <div
          className={`absolute left-[11vw] top-[57.25vw] flex flex-col items-center justify-center ipadair:left-[25vw] ipadair:top-[24.5vw]`}
        >
          <div
            className={`h-[26vw] w-[26vw] ipadair:h-[13vw] ipadair:w-[13vw]`}
          >
            <Image
              className={`rounded-[0.5vw] object-cover`}
              src={top10Players[1]?.pic ?? "/assets/Game/placeholder.webp"}
              layout="responsive"
              width={100}
              height={100}
              alt="logo"
            />
          </div>
          <div
            className={`flex items-center justify-center gap-[8vw] ipadair:gap-[4vw]`}
          >
            <svg
              className={`w-[6vw] ipadair:w-[3vw]`}
              viewBox="0 0 50 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25 24.9733C38.8071 24.9733 50 19.3828 50 12.4866C50 5.59045 38.8071 0 25 0C11.1929 0 0 5.59045 0 12.4866C0 19.3828 11.1929 24.9733 25 24.9733Z"
                fill="black"
              />
              <path
                d="M25 39.7327C38.8071 39.7327 50 36.4287 50 32.3531C50 28.2774 38.8071 24.9734 25 24.9734C11.1929 24.9734 0 28.2774 0 32.3531C0 36.4287 11.1929 39.7327 25 39.7327Z"
                fill="black"
              />
              <path
                d="M25 48.2086C38.8071 48.2086 50 46.3112 50 43.9706C50 41.6301 38.8071 39.7327 25 39.7327C11.1929 39.7327 0 41.6301 0 43.9706C0 46.3112 11.1929 48.2086 25 48.2086Z"
                fill="black"
              />
              <path
                d="M25 52.4598C38.8071 52.4598 50 51.5081 50 50.3342C50 49.1602 38.8071 48.2085 25 48.2085C11.1929 48.2085 0 49.1602 0 50.3342C0 51.5081 11.1929 52.4598 25 52.4598Z"
                fill="black"
              />
            </svg>
            <svg
              className={`w-[6vw] ipadair:w-[3vw]`}
              viewBox="0 0 50 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25 24.9733C38.8071 24.9733 50 19.3828 50 12.4866C50 5.59045 38.8071 0 25 0C11.1929 0 0 5.59045 0 12.4866C0 19.3828 11.1929 24.9733 25 24.9733Z"
                fill="black"
              />
              <path
                d="M25 39.7327C38.8071 39.7327 50 36.4287 50 32.3531C50 28.2774 38.8071 24.9734 25 24.9734C11.1929 24.9734 0 28.2774 0 32.3531C0 36.4287 11.1929 39.7327 25 39.7327Z"
                fill="black"
              />
              <path
                d="M25 48.2086C38.8071 48.2086 50 46.3112 50 43.9706C50 41.6301 38.8071 39.7327 25 39.7327C11.1929 39.7327 0 41.6301 0 43.9706C0 46.3112 11.1929 48.2086 25 48.2086Z"
                fill="black"
              />
              <path
                d="M25 52.4598C38.8071 52.4598 50 51.5081 50 50.3342C50 49.1602 38.8071 48.2085 25 48.2085C11.1929 48.2085 0 49.1602 0 50.3342C0 51.5081 11.1929 52.4598 25 52.4598Z"
                fill="black"
              />
            </svg>
          </div>
          <div className={`relative flex items-center justify-center`}>
            <p
              className={`w-[30vw] text-center text-[5vw] leading-[5vw] text-white ipadair:text-[3vw] ipadair:leading-[3vw]`}
              style={{
                fontFamily: "Rocket Thunder",
                whiteSpace: "normal",
                wordBreak: "break-word",
              }}
            >
              @{" "}
              {top10Players[1]?.name
                .split(" ")[0]
                ?.slice(0, maxCharsForUserID) ?? "Jayz"}
            </p>
          </div>
        </div>
        {/* Second Position */}

        {/* First Position */}
        <div
          className={`absolute right-[13vw] top-[33.8vw] flex flex-col items-center justify-center ipadair:right-[10vw] ipadair:top-[11vw]`}
        >
          <div
            className={`relative bottom-[-0.9vw] left-[-1vw] h-[31vw] w-[31vw] -rotate-[11deg] ipadair:h-[15.5vw] ipadair:w-[15.5vw]`}
          >
            <Image
              className={`rounded-[0.5vw] object-cover`}
              src={top10Players[0]?.pic ?? "/assets/Game/placeholder.webp"}
              layout="responsive"
              width={100}
              height={100}
              alt="logo"
            />
          </div>
          <div className={`w-[21vw] ipadair:w-[10.5vw]`}>
            <Image
              src="/assets/Game/brutalist_svg.webp"
              layout="responsive"
              width={100}
              height={100}
              alt="logo"
              unoptimized
            />
          </div>
          <div
            className={`relative top-[-1vw] flex items-center justify-center`}
          >
            <p
              className={`w-[30vw] text-center text-[5vw] leading-[5vw] text-white ipadair:text-[3vw] ipadair:leading-[3vw]`}
              style={{
                fontFamily: "Rocket Thunder",
                whiteSpace: "normal",
                wordBreak: "break-word",
              }}
            >
              @{" "}
              {top10Players[0]?.name
                .split(" ")[0]
                ?.slice(0, maxCharsForUserID) ?? "Jayz"}
            </p>
          </div>
        </div>
        {/* First Position */}
      </div>
      {/* Leaderboard 1st 2nd 3rd Section */}

      {/* Leaderboard 4-10 Section */}
      {top10Players.length > leaderboardStartsFrom - 1 && (
        <div
          className={`relative mt-[-5.1vw] flex flex-col items-center justify-center gap-[4vw] overflow-x-hidden rounded-t-[4vw] border-[1.75vw] border-black bg-gradient-to-b from-[#001E30] to-[#001E30] py-[12vw] ipadair:mt-[-3.1vw] ipadair:gap-[2vw] ipadair:rounded-t-[2vw] ipadair:border-[0.75vw] ipadair:py-[6vw]`}
        >
          <div
            className={`absolute inset-0 bg-[url('/assets/Game/maze_white.webp')] bg-cover bg-center bg-no-repeat`}
          ></div>
          {top10Players
            .slice(leaderboardStartsFrom - 1)
            .map((player, index) => (
              <div
                key={player.name.toString() + index.toString()}
                className={`relative flex rounded-[1.8vw] border-[0.3vw] border-black bg-[#9C8FFE] shadow-[0.3vw_0.3vw_0px_#000000] ipadair:rounded-[1vw]`}
              >
                <p
                  className={`border-r-[0.5vw] border-black px-[4vw] py-[3vw] text-[6vw] ipadair:border-r-[0.3vw] ipadair:px-[3vw] ipadair:py-[0.2vw] ipadair:text-[2.5vw]`}
                  style={{ fontFamily: "Rocket Thunder" }}
                >
                  {index + leaderboardStartsFrom === 10
                    ? index + leaderboardStartsFrom
                    : "\u00A0" + (index + leaderboardStartsFrom)}
                </p>
                <p
                  className={`w-[45vw] border-r-[0.5vw] border-black px-[4vw] py-[3vw] text-[6vw] text-black ipadair:border-r-[0.3vw] ipadair:px-[3vw] ipadair:py-[0.2vw] ipadair:text-[2.5vw]`}
                  style={{ fontFamily: "Rocket Thunder" }}
                >
                  {player.name.length > maxCharsForUserID
                    ? "@ " + player.name.substring(0, maxCharsForUserID) + "..."
                    : "@ " + player.name}
                </p>
                <div
                  className={`flex items-center justify-center gap-[1vw] border-r-[0.5vw] border-black px-[1vw] py-[0.2vw] ipadair:gap-[0.5vw] ipadair:border-r-[0.3vw]`}
                >
                  <svg
                    className={`w-[2.5vw] ipadair:w-[1.5vw]`}
                    viewBox="0 0 166 328"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    opacity={player.letters.startsWith("1") ? "1" : "0.16"}
                  >
                    <path
                      d="M129.484 137.455L29.0791 158.797L54.3164 183.44L118.226 169.856L129.484 137.455Z"
                      fill="black"
                    />
                    <path
                      d="M109.572 180.805L65.54 190.164L86.9267 252.056L112.044 221.874L109.572 180.805Z"
                      fill="black"
                    />
                    <path
                      d="M129.484 137.455L29.0791 158.797L54.3164 183.44L118.226 169.856L129.484 137.455Z"
                      stroke="black"
                      stroke-width="0.821485"
                    />
                    <path
                      d="M109.572 180.805L65.54 190.164L86.9267 252.056L112.044 221.874L109.572 180.805Z"
                      stroke="black"
                      stroke-width="0.821485"
                    />
                    <path
                      d="M113.815 232.233L89.0655 262.57L106.613 318.493L122.905 315.03L113.815 232.233Z"
                      fill="black"
                    />
                    <path
                      d="M93.2017 75.8149C100.205 85.0946 112.472 106.127 105.52 116.019C98.8156 125.561 85.5329 133.892 79.0916 137.213C95.2353 113.788 85.9991 107.013 79.3639 106.553C64.8938 106.624 62.302 94.9043 62.8151 89.0354C57.2758 111.248 70.4226 130.742 77.6875 137.713L74.8008 138.326L61.6128 136.621L40.896 95.9483L42.2667 63.3521L69.528 42.5319L74.5447 76.7755L93.2017 75.8149Z"
                      fill="#D25A5A"
                    />
                    <path
                      d="M114.377 79.5785C119.297 105.578 100.125 124.93 89.9226 131.357C108.5 105.169 99.3983 86.0177 92.5245 79.7155C93.659 87.8886 86.8988 89.9267 83.3777 89.9239C64.3777 88.5533 65.6749 59.8794 68.698 45.7138C21.9611 89.9062 53.7763 125.766 75.5273 138.173C64.7984 141.654 52.4369 139.575 47.5965 138.097C27.3724 130.978 26.7102 116.744 28.9071 110.517C29.0879 113.734 30.6572 119.461 35.4879 116.631C40.3185 113.802 37.445 110.455 35.4043 109.136C14.1687 94.4172 31.9383 66.7996 43.4773 54.8309C58.6551 35.3771 47.4665 19.1736 39.9744 13.5038C77.3001 7.37298 82.3327 35.3027 80.1814 50.0342C76.5171 64.0357 84.2929 68.1928 88.6383 68.521C98.9971 63.3141 94.3306 51.5343 90.7033 46.2952C106.607 50.127 113.11 70.0811 114.377 79.5785Z"
                      fill="#FF676B"
                    />
                    <path
                      d="M35.4822 38.5052C27.798 44.9465 29.1258 52.3774 30.7505 55.2878C20.377 49.0785 26.4916 41.1675 30.8456 37.9882C36.0094 33.8852 35.5737 29.4703 33.9122 27.5697C41.6978 30.1219 38.2029 35.9234 35.4822 38.5052Z"
                      fill="#FF676B"
                    />
                  </svg>
                  <svg
                    className={`w-[2.5vw] ipadair:w-[1.5vw]`}
                    viewBox="0 0 206 245"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    opacity={player.letters[1] === "1" ? "1" : "0.16"}
                  >
                    <path
                      d="M0.218544 190.919L51.2861 0.331787L145.496 171.501L178.726 47.4858L205.771 54.7326L155.044 244.048L60.7413 73.226L27.2639 198.165L0.218544 190.919Z"
                      fill="black"
                    />
                  </svg>
                  <svg
                    className={`w-[2.5vw] ipadair:w-[1.5vw]`}
                    viewBox="0 0 205 214"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    opacity={player.letters[2] === "1" ? "1" : "0.16"}
                  >
                    <path
                      d="M0.0205078 141.976H24.9439V177.734C13.3266 169.74 5.30204 157.54 0.0205078 141.976ZM28.9597 142.608V141.976H50.2939V142.608C50.2939 151.231 55.7836 156.279 64.4462 156.279V177.523C43.7432 177.523 28.9597 163.009 28.9597 142.608ZM28.9597 185.096H64.4462V204.655C50.2939 201.502 39.0962 194.561 28.9597 185.096ZM75.0058 205.708H126.333C119.152 210.336 112.393 213.91 102.253 213.91C90.847 213.91 81.9762 210.336 75.0058 205.708ZM100.775 177.523C83.4535 177.523 69.7243 163.852 69.7243 146.603V141.976H91.0585V146.603C91.0585 151.863 95.4939 156.279 100.775 156.279C106.269 156.279 110.281 152.073 110.281 146.603V141.976H131.827V146.603C131.827 163.641 117.674 177.523 100.775 177.523ZM69.7243 185.096H131.827C128.234 196.875 113.45 202.341 101.41 202.341H100.141C87.8924 202.341 72.8939 196.875 69.7243 185.096ZM135.627 177.523H134.785V156.279H135.627C141.332 156.279 145.767 154.176 148.302 151.441C150.626 149.338 151.892 146.182 151.892 141.976H173.437C173.437 162.799 156.538 177.523 135.627 177.523ZM134.785 206.548V185.096H175.549C164.143 195.611 146.825 204.655 134.785 206.548ZM177.661 177.523H176.607V141.976H204.488C199.842 156.069 187.801 172.053 177.661 177.523ZM5.51358 107.271V106.639C5.51358 93.3893 12.4839 82.2424 24.9439 77.4045L24.7324 136.717C13.9612 131.668 5.51358 120.311 5.51358 107.271ZM28.9597 107.061C28.9597 90.6544 42.2659 77.4045 58.7416 77.4045H64.4462V98.6486H58.7416C54.0947 98.6486 50.2939 102.433 50.2939 107.061C50.2939 111.688 54.3062 115.262 58.7416 115.262H64.4462V136.717H58.7416C42.2659 136.717 28.9597 123.256 28.9597 107.061ZM24.9439 36.8085V72.1452H0.0205078C5.30204 56.371 15.2305 43.3282 24.9439 36.8085ZM50.2939 71.092V72.1452H28.9597V71.092C28.9597 50.4798 43.7432 36.1766 64.4462 36.1766V57.4207C59.1647 57.4207 55.9951 58.8953 54.0947 60.9983C52.1943 62.8906 50.2939 66.0434 50.2939 71.092ZM64.4462 9.46467V28.8144H28.9597C39.0962 19.5608 53.8832 11.3577 64.4462 9.46467ZM91.0585 67.0966V72.1452H69.7243V67.0966C69.7243 49.8479 83.6651 36.1766 100.775 36.1766C117.886 36.1766 131.827 49.8479 131.827 67.0966V72.1452H110.281V67.0966C110.281 61.4161 106.269 57.4207 100.775 57.4207C98.0289 57.4207 95.4939 58.474 94.0166 60.1557C92.3277 61.8374 91.0585 64.3617 91.0585 67.0966ZM131.827 28.8144H69.7243C73.5285 16.8266 88.1039 10.9371 100.352 10.9371H100.987C113.239 10.9371 128.026 16.8266 131.827 28.8144ZM135.204 57.4207H134.785V36.1766H135.204C156.327 36.1766 173.437 50.9011 173.437 72.1452H151.892C151.892 62.2587 144.502 57.4207 135.204 57.4207ZM204.488 72.1452H176.607V36.1766C187.801 43.5388 200.053 56.5816 204.488 72.1452ZM126.333 7.78225H76.0635C84.7227 2.73401 93.805 -0.000244141 102.253 -0.000244141C110.069 -0.000244141 117.674 2.73401 126.333 7.78225ZM171.748 28.8144H134.785V7.78225C148.091 10.9371 161.82 18.9299 171.748 28.8144Z"
                      fill="black"
                    />
                  </svg>
                  <svg
                    className={`w-[2.5vw] ipadair:w-[1.5vw]`}
                    viewBox="0 0 214 217"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    opacity={player.letters[3] === "1" ? "1" : "0.16"}
                  >
                    <path
                      d="M180.1 50.3147L213.165 182.929L79.9846 216.135L5.39497 171.999L60.6485 80.0974L16.7138 91.0516L0.146941 24.6055L96.8054 0.505852L180.1 50.3147ZM85.66 144.147L129.871 133.124L118.826 88.8248L85.66 144.147Z"
                      fill="black"
                    />
                  </svg>
                  <svg
                    className={`w-[2.5vw] ipadair:w-[1.5vw]`}
                    viewBox="0 0 188 205"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    opacity={player.letters[4] === "1" ? "1" : "0.16"}
                  >
                    <path
                      d="M129.793 24.314C128.184 24.314 127.38 23.5129 127.38 21.9141C127.38 20.7123 127.983 19.9112 129.19 19.5106H126.173V13.509V9.90623L123.763 12.3076L121.349 9.90623L123.763 7.50452L126.173 9.90623V7.8046H125.871V4.20256L123.763 6.30383L121.349 3.90248L123.763 1.50077L125.871 3.60206V0H131.902H137.932H143.959H151.797V1.20069H156.621V6.60391H151.797V7.20444H156.621V12.6077H151.495V13.2082H156.621V18.6128H151.495V19.2102H156.621V24.6145H151.197V19.5106H148.481C149.688 19.9112 150.292 20.7123 150.292 21.9141C150.292 23.5129 149.487 24.314 147.878 24.314C146.272 24.314 145.468 23.5129 145.468 21.9141C145.468 20.7123 146.071 19.9112 147.275 19.5106H144.261H142.454C143.658 19.9112 144.261 20.7123 144.261 21.9141C144.261 23.5129 143.457 24.314 141.851 24.314C140.242 24.314 139.437 23.5129 139.437 21.9141C139.437 20.7123 140.041 19.9112 141.248 19.5106H138.234H136.424C137.631 19.9112 138.234 20.7123 138.234 21.9141C138.234 23.5129 137.429 24.314 135.82 24.314C134.211 24.314 133.41 23.5129 133.41 21.9141C133.41 20.7123 134.014 19.9112 135.217 19.5106H132.203H130.393C131.6 19.9112 132.203 20.7123 132.203 21.9141C132.203 23.5129 131.399 24.314 129.793 24.314ZM178.024 0.600185L181.041 6.60391L184.055 0.600185L187.37 7.20444H184.356L187.068 12.9081H184.055L187.068 18.9132H184.055L187.068 24.9149H184.055L187.068 30.92H181.041L184.055 24.9149H181.041H178.024L181.041 30.92H175.01L178.024 24.9149H175.01L178.024 18.9132H175.01L178.024 12.9081H175.01L177.722 7.20444H174.709L178.024 0.600185ZM3.17856 24.9149L0.165039 21.9141L3.17856 18.9132L0.165039 15.9089L3.17856 12.9081L0.165039 9.90623L3.17856 6.90436L0.165039 3.90248L3.17856 0.900608L6.19208 3.90248L9.2092 0.900608L12.2227 3.90248L15.2362 0.900608L18.2499 3.90248L21.2669 0.900608L24.2804 3.90248L27.294 0.900608L30.311 3.90248L33.3246 0.900608L36.3382 3.90248L39.3552 0.900608L42.3687 3.90248L45.3823 0.900608L48.3959 3.90248L51.4129 0.900608L54.4264 3.90248L57.44 0.900608L60.457 3.90248L63.4705 0.900608L66.4842 3.90248L63.4705 6.90436L66.4842 9.90623L63.4705 12.9081L66.4842 15.9089L69.5012 12.9081L72.5147 15.9089L69.5012 18.9132L72.5147 21.9141L75.5283 18.9132L78.5418 21.9141L75.5283 24.9149L72.5147 21.9141L69.5012 24.9149L66.4842 21.9141L63.4705 24.9149L60.457 21.9141L57.44 24.9149L54.4264 21.9141L51.4129 24.9149L48.3959 21.9141L45.3823 24.9149L42.3687 21.9141L45.3823 18.9132L42.3687 15.9089L39.3552 18.9132L42.3687 21.9141L39.3552 24.9149L36.3382 21.9141L39.3552 18.9132L36.3382 15.9089L33.3246 18.9132L36.3382 21.9141L33.3246 24.9149L30.311 21.9141L33.3246 18.9132L30.311 15.9089L27.294 18.9132L30.311 21.9141L27.294 24.9149L24.2804 21.9141L27.294 18.9132L24.2804 15.9089L21.2669 18.9132L24.2804 21.9141L21.2669 24.9149L18.2499 21.9141L21.2669 18.9132L18.2499 15.9089L15.2362 18.9132L18.2499 21.9141L15.2362 24.9149L12.2227 21.9141L15.2362 18.9132L12.2227 15.9089L9.2092 18.9132L12.2227 21.9141L9.2092 24.9149L6.19208 21.9141L9.2092 18.9132L6.19208 15.9089L3.17856 18.9132L6.19208 21.9141L3.17856 24.9149ZM174.709 6.60391H169.282V1.20069H174.709V6.60391ZM168.678 6.60391H163.255V1.20069H168.678V6.60391ZM162.651 6.60391H157.224V1.20069H162.651V6.60391ZM117.732 6.30383L115.322 3.90248L117.732 1.50077L120.146 3.90248L117.732 6.30383ZM3.17856 6.90436L6.19208 9.90623L9.2092 6.90436L6.19208 3.90248L3.17856 6.90436ZM9.2092 6.90436L12.2227 9.90623L15.2362 6.90436L12.2227 3.90248L9.2092 6.90436ZM15.2362 6.90436L18.2499 9.90623L21.2669 6.90436L18.2499 3.90248L15.2362 6.90436ZM21.2669 6.90436L24.2804 9.90623L27.294 6.90436L24.2804 3.90248L21.2669 6.90436ZM27.294 6.90436L30.311 9.90623L33.3246 6.90436L30.311 3.90248L27.294 6.90436ZM33.3246 6.90436L36.3382 9.90623L39.3552 6.90436L36.3382 3.90248L33.3246 6.90436ZM39.3552 6.90436L42.3687 9.90623L45.3823 6.90436L42.3687 3.90248L39.3552 6.90436ZM45.3823 6.90436L48.3959 9.90623L51.4129 6.90436L48.3959 3.90248L45.3823 6.90436ZM51.4129 6.90436L54.4264 9.90623L57.44 6.90436L54.4264 3.90248L51.4129 6.90436ZM57.44 6.90436L60.457 9.90623L63.4705 6.90436L60.457 3.90248L57.44 6.90436ZM180.739 7.20444H178.326L181.041 12.9081L183.753 7.20444H180.739ZM174.709 12.6077H169.282V7.20444H174.709V12.6077ZM168.678 12.6077H163.255V7.20444H168.678V12.6077ZM162.651 12.6077H157.224V7.20444H162.651V12.6077ZM117.732 12.3076L115.322 9.90623L117.732 7.50452L120.146 9.90623L117.732 12.3076ZM3.17856 12.9081L6.19208 15.9089L9.2092 12.9081L6.19208 9.90623L3.17856 12.9081ZM9.2092 12.9081L12.2227 15.9089L15.2362 12.9081L12.2227 9.90623L9.2092 12.9081ZM15.2362 12.9081L18.2499 15.9089L21.2669 12.9081L18.2499 9.90623L15.2362 12.9081ZM21.2669 12.9081L24.2804 15.9089L27.294 12.9081L24.2804 9.90623L21.2669 12.9081ZM27.294 12.9081L30.311 15.9089L33.3246 12.9081L30.311 9.90623L27.294 12.9081ZM33.3246 12.9081L36.3382 15.9089L39.3552 12.9081L36.3382 9.90623L33.3246 12.9081ZM39.3552 12.9081L42.3687 15.9089L45.3823 12.9081L42.3687 9.90623L39.3552 12.9081ZM45.3823 12.9081L48.3959 15.9089L51.4129 12.9081L48.3959 9.90623L45.3823 12.9081ZM51.4129 12.9081L54.4264 15.9089L57.44 12.9081L54.4264 9.90623L51.4129 12.9081ZM57.44 12.9081L60.457 15.9089L63.4705 12.9081L60.457 9.90623L57.44 12.9081ZM181.041 12.9081H178.024L181.041 18.9132L184.055 12.9081H181.041ZM174.709 18.6128H169.282V13.2082H174.709V18.6128ZM168.678 18.6128H163.255V13.2082H168.678V18.6128ZM162.651 18.6128H157.224V13.2082H162.651V18.6128ZM123.763 18.3124L121.349 15.9089L123.763 13.509L126.173 15.9089L123.763 18.3124ZM117.732 18.3124L115.322 15.9089L117.732 13.509L120.146 15.9089L117.732 18.3124ZM45.3823 18.9132L48.3959 21.9141L51.4129 18.9132L48.3959 15.9089L45.3823 18.9132ZM51.4129 18.9132L54.4264 21.9141L57.44 18.9132L54.4264 15.9089L51.4129 18.9132ZM57.44 18.9132L60.457 21.9141L63.4705 18.9132L60.457 15.9089L57.44 18.9132ZM63.4705 18.9132L66.4842 21.9141L69.5012 18.9132L66.4842 15.9089L63.4705 18.9132ZM181.041 18.9132H178.024L181.041 24.9149L184.055 18.9132H181.041ZM174.709 24.6145H169.282V19.2102H174.709V24.6145ZM168.678 24.6145H163.255V19.2102H168.678V24.6145ZM162.651 24.6145H157.224V19.2102H162.651V24.6145ZM123.763 24.314L121.349 21.9141L123.763 19.5106L126.173 21.9141L123.763 24.314ZM117.732 24.314L115.322 21.9141L117.732 19.5106L120.146 21.9141L117.732 24.314ZM75.5283 30.92L72.5147 27.9157L75.5283 24.9149L78.5418 27.9157L75.5283 30.92ZM69.5012 30.92L66.4842 27.9157L69.5012 24.9149L72.5147 27.9157L69.5012 30.92ZM63.4705 30.92L60.457 27.9157L63.4705 24.9149L66.4842 27.9157L63.4705 30.92ZM57.44 30.92L54.4264 27.9157L57.44 24.9149L60.457 27.9157L57.44 30.92ZM51.4129 30.92L48.3959 27.9157L51.4129 24.9149L54.4264 27.9157L51.4129 30.92ZM45.3823 30.92L42.3687 27.9157L45.3823 24.9149L48.3959 27.9157L45.3823 30.92ZM39.3552 30.92L36.3382 27.9157L39.3552 24.9149L42.3687 27.9157L39.3552 30.92ZM33.3246 30.92L30.311 27.9157L33.3246 24.9149L36.3382 27.9157L33.3246 30.92ZM27.294 30.92L24.2804 27.9157L27.294 24.9149L30.311 27.9157L27.294 30.92ZM21.2669 30.92L18.2499 27.9157L21.2669 24.9149L24.2804 27.9157L21.2669 30.92ZM15.2362 30.92L12.2227 27.9157L15.2362 24.9149L18.2499 27.9157L15.2362 30.92ZM9.2092 30.92L6.19208 27.9157L9.2092 24.9149L12.2227 27.9157L9.2092 30.92ZM3.17856 30.92L0.165039 27.9157L3.17856 24.9149L6.19208 27.9157L3.17856 30.92ZM174.407 30.3192H169.583V25.5157H174.407V30.3192ZM168.38 30.3192H163.556V25.5157H168.38V30.3192ZM162.349 30.3192H157.526V25.5157H162.349V30.3192ZM156.319 30.3192H151.495V25.5157H156.319V30.3192ZM147.878 30.3192C146.272 30.3192 145.468 29.518 145.468 27.9157C145.468 26.3169 146.272 25.5157 147.878 25.5157C149.487 25.5157 150.292 26.3169 150.292 27.9157C150.292 29.518 149.487 30.3192 147.878 30.3192ZM141.851 30.3192C140.242 30.3192 139.437 29.518 139.437 27.9157C139.437 26.3169 140.242 25.5157 141.851 25.5157C143.457 25.5157 144.261 26.3169 144.261 27.9157C144.261 29.518 143.457 30.3192 141.851 30.3192ZM135.82 30.3192C134.211 30.3192 133.41 29.518 133.41 27.9157C133.41 26.3169 134.211 25.5157 135.82 25.5157C137.429 25.5157 138.234 26.3169 138.234 27.9157C138.234 29.518 137.429 30.3192 135.82 30.3192ZM129.793 30.3192C128.184 30.3192 127.38 29.518 127.38 27.9157C127.38 26.3169 128.184 25.5157 129.793 25.5157C131.399 25.5157 132.203 26.3169 132.203 27.9157C132.203 29.518 131.399 30.3192 129.793 30.3192ZM123.763 30.0187L121.651 27.9157L123.763 25.8162L125.871 27.9157L123.763 30.0187ZM117.732 30.0187L115.624 27.9157L117.732 25.8162L119.844 27.9157L117.732 30.0187ZM184.055 30.92L187.068 36.9217H181.041L184.055 30.92ZM178.024 30.92L181.041 36.9217H175.01L178.024 30.92ZM81.5589 36.9217L78.5418 33.9209L81.5589 30.92L84.5725 33.9209L81.5589 36.9217ZM75.5283 36.9217L72.5147 33.9209L75.5283 30.92L78.5418 33.9209L75.5283 36.9217ZM69.5012 36.9217L66.4842 33.9209L69.5012 30.92L72.5147 33.9209L69.5012 36.9217ZM63.4705 36.9217L60.457 33.9209L63.4705 30.92L66.4842 33.9209L63.4705 36.9217ZM57.44 36.9217L54.4264 33.9209L57.44 30.92L60.457 33.9209L57.44 36.9217ZM51.4129 36.9217L48.3959 33.9209L51.4129 30.92L54.4264 33.9209L51.4129 36.9217ZM45.3823 36.9217L42.3687 33.9209L45.3823 30.92L48.3959 33.9209L45.3823 36.9217ZM39.3552 36.9217L36.3382 33.9209L39.3552 30.92L42.3687 33.9209L39.3552 36.9217ZM33.3246 36.9217L30.311 33.9209L33.3246 30.92L36.3382 33.9209L33.3246 36.9217ZM27.294 36.9217L24.2804 33.9209L27.294 30.92L30.311 33.9209L27.294 36.9217ZM21.2669 36.9217L18.2499 33.9209L21.2669 30.92L24.2804 33.9209L21.2669 36.9217ZM15.2362 36.9217L12.2227 33.9209L15.2362 30.92L18.2499 33.9209L15.2362 36.9217ZM9.2092 36.9217L6.19208 33.9209L9.2092 30.92L12.2227 33.9209L9.2092 36.9217ZM3.17856 36.9217L0.165039 33.9209L3.17856 30.92L6.19208 33.9209L3.17856 36.9217ZM174.407 36.3209H169.583V31.5209H174.407V36.3209ZM168.38 36.3209H163.556V31.5209H168.38V36.3209ZM162.349 36.3209H157.526V31.5209H162.349V36.3209ZM156.319 36.3209H151.495V31.5209H156.319V36.3209ZM147.878 36.3209C146.272 36.3209 145.468 35.5232 145.468 33.9209C145.468 32.3186 146.272 31.5209 147.878 31.5209C149.487 31.5209 150.292 32.3186 150.292 33.9209C150.292 35.5232 149.487 36.3209 147.878 36.3209ZM141.851 36.3209C140.242 36.3209 139.437 35.5232 139.437 33.9209C139.437 32.3186 140.242 31.5209 141.851 31.5209C143.457 31.5209 144.261 32.3186 144.261 33.9209C144.261 35.5232 143.457 36.3209 141.851 36.3209ZM135.82 36.3209C134.211 36.3209 133.41 35.5232 133.41 33.9209C133.41 32.3186 134.211 31.5209 135.82 31.5209C137.429 31.5209 138.234 32.3186 138.234 33.9209C138.234 35.5232 137.429 36.3209 135.82 36.3209ZM129.793 36.3209C128.184 36.3209 127.38 35.5232 127.38 33.9209C127.38 32.3186 128.184 31.5209 129.793 31.5209C131.399 31.5209 132.203 32.3186 132.203 33.9209C132.203 35.5232 131.399 36.3209 129.793 36.3209ZM123.763 36.0239L121.651 33.9209L123.763 31.8213L125.871 33.9209L123.763 36.0239ZM117.732 36.0239L115.624 33.9209L117.732 31.8213L119.844 33.9209L117.732 36.0239ZM184.055 36.9217L187.068 42.9268H181.041L184.055 36.9217ZM178.024 36.9217L181.041 42.9268H175.01L178.024 36.9217ZM81.5589 42.9268L78.5418 39.926L81.5589 36.9217L84.5725 39.926L81.5589 42.9268ZM75.5283 42.9268L72.5147 39.926L75.5283 36.9217L78.5418 39.926L75.5283 42.9268ZM69.5012 42.9268L66.4842 39.926L69.5012 36.9217L72.5147 39.926L69.5012 42.9268ZM63.4705 42.9268L60.457 39.926L63.4705 36.9217L66.4842 39.926L63.4705 42.9268ZM57.44 42.9268L54.4264 39.926L57.44 36.9217L60.457 39.926L57.44 42.9268ZM51.4129 42.9268L48.3959 39.926L51.4129 36.9217L54.4264 39.926L51.4129 42.9268ZM45.3823 42.9268L42.3687 39.926L45.3823 36.9217L48.3959 39.926L45.3823 42.9268ZM39.3552 42.9268L36.3382 39.926L39.3552 36.9217L42.3687 39.926L39.3552 42.9268ZM33.3246 42.9268L30.311 39.926L33.3246 36.9217L36.3382 39.926L33.3246 42.9268ZM27.294 42.9268L24.2804 39.926L27.294 36.9217L30.311 39.926L27.294 42.9268ZM21.2669 42.6264L18.5516 39.926L21.2669 36.9217L24.2804 39.926L21.2669 42.6264ZM15.2362 42.6264L12.5244 39.926L15.2362 37.2221L17.9516 39.926L15.2362 42.6264ZM9.2092 42.6264L6.4938 39.926L9.2092 37.2221L11.921 39.926L9.2092 42.6264ZM3.17856 42.6264L0.466656 39.926L3.17856 37.2221L5.89046 39.926L3.17856 42.6264ZM174.407 42.326H169.583V37.5226H174.407V42.326ZM168.38 42.326H163.556V37.5226H168.38V42.326ZM162.349 42.326H157.526V37.5226H162.349V42.326ZM156.319 42.326H151.495V37.5226H156.319V42.326ZM147.878 42.326C146.272 42.326 145.468 41.5248 145.468 39.926C145.468 38.3237 146.272 37.5226 147.878 37.5226C149.487 37.5226 150.292 38.3237 150.292 39.926C150.292 41.5248 149.487 42.326 147.878 42.326ZM141.851 42.326C140.242 42.326 139.437 41.5248 139.437 39.926C139.437 38.3237 140.242 37.5226 141.851 37.5226C143.457 37.5226 144.261 38.3237 144.261 39.926C144.261 41.5248 143.457 42.326 141.851 42.326ZM135.82 42.326C134.211 42.326 133.41 41.5248 133.41 39.926C133.41 38.3237 134.211 37.5226 135.82 37.5226C137.429 37.5226 138.234 38.3237 138.234 39.926C138.234 41.5248 137.429 42.326 135.82 42.326ZM129.793 42.326C128.184 42.326 127.38 41.5248 127.38 39.926C127.38 38.3237 128.184 37.5226 129.793 37.5226C131.399 37.5226 132.203 38.3237 132.203 39.926C132.203 41.5248 131.399 42.326 129.793 42.326ZM123.763 42.0256L121.651 39.926L123.763 37.823L125.871 39.926L123.763 42.0256ZM117.732 42.0256L115.624 39.926L117.732 37.823L119.844 39.926L117.732 42.0256ZM184.055 43.2273L186.767 48.6315H181.343L184.055 43.2273ZM178.024 43.2273L180.739 48.6315H175.312L178.024 43.2273ZM87.586 48.6315L84.8742 45.9277L87.586 43.2273L90.3013 45.9277L87.586 48.6315ZM81.5589 48.6315L78.8436 45.9277L81.5589 43.2273L84.2708 45.9277L81.5589 48.6315ZM75.5283 48.6315L72.8164 45.9277L75.5283 43.2273L78.2401 45.9277L75.5283 48.6315ZM69.5012 48.6315L66.7859 45.9277L69.5012 43.2273L72.2131 45.9277L69.5012 48.6315ZM63.4705 48.6315L60.7588 45.9277L63.4705 43.2273L66.1824 45.9277L63.4705 48.6315ZM57.44 48.6315L54.7281 45.9277L57.44 43.2273L60.1553 45.9277L57.44 48.6315ZM51.4129 48.6315L48.6976 45.9277L51.4129 43.2273L54.1248 45.9277L51.4129 48.6315ZM45.3823 48.6315L42.6704 45.9277L45.3823 43.2273L48.0941 45.9277L45.3823 48.6315ZM39.3552 48.6315L36.6398 45.9277L39.3552 43.2273L42.067 45.9277L39.3552 48.6315ZM33.3246 48.6315L30.6128 45.9277L33.3246 43.2273L36.0365 45.9277L33.3246 48.6315ZM27.294 48.6315L24.5821 45.9277L27.294 43.2273L30.0093 45.9277L27.294 48.6315ZM21.2669 48.6315L18.5516 45.9277L21.2669 43.2273L23.9787 45.9277L21.2669 48.6315ZM15.2362 48.6315L12.5244 45.9277L15.2362 43.2273L17.9516 45.9277L15.2362 48.6315ZM9.2092 48.6315L6.4938 45.9277L9.2092 43.2273L11.921 45.9277L9.2092 48.6315ZM3.17856 48.6315L0.466656 45.9277L3.17856 43.2273L5.89046 45.9277L3.17856 48.6315ZM174.407 48.3311H169.583V43.5277H174.407V48.3311ZM168.38 48.3311H163.556V43.5277H168.38V48.3311ZM162.349 48.3311H157.526V43.5277H162.349V48.3311ZM156.319 48.3311H151.495V43.5277H156.319V48.3311ZM147.878 48.0307C146.474 48.0307 145.77 47.3297 145.77 45.9277C145.77 44.5291 146.474 43.8281 147.878 43.8281C149.286 43.8281 149.99 44.5291 149.99 45.9277C149.99 47.3297 149.286 48.0307 147.878 48.0307ZM141.851 48.0307C140.443 48.0307 139.739 47.3297 139.739 45.9277C139.739 44.5291 140.443 43.8281 141.851 43.8281C143.255 43.8281 143.959 44.5291 143.959 45.9277C143.959 47.3297 143.255 48.0307 141.851 48.0307ZM135.82 48.0307C134.412 48.0307 133.712 47.3297 133.712 45.9277C133.712 44.5291 134.412 43.8281 135.82 43.8281C137.228 43.8281 137.932 44.5291 137.932 45.9277C137.932 47.3297 137.228 48.0307 135.82 48.0307ZM129.793 48.0307C128.385 48.0307 127.681 47.3297 127.681 45.9277C127.681 44.5291 128.385 43.8281 129.793 43.8281C131.198 43.8281 131.902 44.5291 131.902 45.9277C131.902 47.3297 131.198 48.0307 129.793 48.0307ZM123.763 48.0307L121.651 45.9277L123.763 43.8281L125.871 45.9277L123.763 48.0307ZM117.732 48.0307L115.624 45.9277L117.732 43.8281L119.844 45.9277L117.732 48.0307ZM184.055 49.2289L186.767 54.6332H181.343L184.055 49.2289ZM178.024 49.2289L180.739 54.6332H175.312L178.024 49.2289ZM93.6166 54.6332L90.9047 51.9328L93.6166 49.2289L96.3284 51.9328L93.6166 54.6332ZM87.586 54.6332L84.8742 51.9328L87.586 49.2289L90.3013 51.9328L87.586 54.6332ZM81.5589 54.6332L78.8436 51.9328L81.5589 49.2289L84.2708 51.9328L81.5589 54.6332ZM75.5283 54.6332L72.8164 51.9328L75.5283 49.2289L78.2401 51.9328L75.5283 54.6332ZM69.5012 54.6332L66.7859 51.9328L69.5012 49.2289L72.2131 51.9328L69.5012 54.6332ZM63.4705 54.6332L60.7588 51.9328L63.4705 49.2289L66.1824 51.9328L63.4705 54.6332ZM57.44 54.6332L54.7281 51.9328L57.44 49.2289L60.1553 51.9328L57.44 54.6332ZM51.4129 54.6332L48.6976 51.9328L51.4129 49.2289L54.1248 51.9328L51.4129 54.6332ZM45.3823 54.6332L42.6704 51.9328L45.3823 49.2289L48.0941 51.9328L45.3823 54.6332ZM39.3552 54.6332L36.6398 51.9328L39.3552 49.2289L42.067 51.9328L39.3552 54.6332ZM33.3246 54.6332L30.6128 51.9328L33.3246 49.2289L36.0365 51.9328L33.3246 54.6332ZM27.294 54.6332L24.5821 51.9328L27.294 49.2289L30.0093 51.9328L27.294 54.6332ZM21.2669 54.6332L18.5516 51.9328L21.2669 49.2289L23.9787 51.9328L21.2669 54.6332ZM15.2362 54.6332L12.5244 51.9328L15.2362 49.2289L17.9516 51.9328L15.2362 54.6332ZM9.2092 54.6332L6.4938 51.9328L9.2092 49.2289L11.921 51.9328L9.2092 54.6332ZM3.17856 54.6332L0.466656 51.9328L3.17856 49.2289L5.89046 51.9328L3.17856 54.6332ZM174.407 54.3328H169.583V49.5294H174.407V54.3328ZM168.38 54.3328H163.556V49.5294H168.38V54.3328ZM162.349 54.3328H157.526V49.5294H162.349V54.3328ZM156.319 54.3328H151.495V49.5294H156.319V54.3328ZM147.878 54.0323C146.474 54.0323 145.77 53.3348 145.77 51.9328C145.77 50.5308 146.474 49.8298 147.878 49.8298C149.286 49.8298 149.99 50.5308 149.99 51.9328C149.99 53.3348 149.286 54.0323 147.878 54.0323ZM141.851 54.0323C140.443 54.0323 139.739 53.3348 139.739 51.9328C139.739 50.5308 140.443 49.8298 141.851 49.8298C143.255 49.8298 143.959 50.5308 143.959 51.9328C143.959 53.3348 143.255 54.0323 141.851 54.0323ZM135.82 54.0323C134.412 54.0323 133.712 53.3348 133.712 51.9328C133.712 50.5308 134.412 49.8298 135.82 49.8298C137.228 49.8298 137.932 50.5308 137.932 51.9328C137.932 53.3348 137.228 54.0323 135.82 54.0323ZM129.793 54.0323C128.385 54.0323 127.681 53.3348 127.681 51.9328C127.681 50.5308 128.385 49.8298 129.793 49.8298C131.198 49.8298 131.902 50.5308 131.902 51.9328C131.902 53.3348 131.198 54.0323 129.793 54.0323ZM123.763 54.0323L121.651 51.9328L123.763 49.8298L125.871 51.9328L123.763 54.0323ZM117.732 54.0323L115.624 51.9328L117.732 49.8298L119.844 51.9328L117.732 54.0323ZM184.055 55.2341L186.767 60.6383H181.343L184.055 55.2341ZM178.024 55.2341L180.739 60.6383H175.312L178.024 55.2341ZM93.6166 60.6383L90.9047 57.9345L93.6166 55.2341L96.3284 57.9345L93.6166 60.6383ZM87.586 60.6383L84.8742 57.9345L87.586 55.2341L90.3013 57.9345L87.586 60.6383ZM81.5589 60.6383L78.8436 57.9345L81.5589 55.2341L84.2708 57.9345L81.5589 60.6383ZM75.5283 60.6383L72.8164 57.9345L75.5283 55.2341L78.2401 57.9345L75.5283 60.6383ZM69.5012 60.6383L66.7859 57.9345L69.5012 55.2341L72.2131 57.9345L69.5012 60.6383ZM63.4705 60.6383L60.7588 57.9345L63.4705 55.2341L66.1824 57.9345L63.4705 60.6383ZM57.44 60.6383L54.7281 57.9345L57.44 55.2341L60.1553 57.9345L57.44 60.6383ZM51.4129 60.6383L48.6976 57.9345L51.4129 55.2341L54.1248 57.9345L51.4129 60.6383ZM45.3823 60.6383L42.6704 57.9345L45.3823 55.2341L48.0941 57.9345L45.3823 60.6383ZM39.3552 60.6383L36.6398 57.9345L39.3552 55.2341L42.067 57.9345L39.3552 60.6383ZM33.3246 60.6383L30.6128 57.9345L33.3246 55.2341L36.0365 57.9345L33.3246 60.6383ZM27.294 60.6383L24.5821 57.9345L27.294 55.2341L30.0093 57.9345L27.294 60.6383ZM21.2669 60.6383L18.5516 57.9345L21.2669 55.2341L23.9787 57.9345L21.2669 60.6383ZM15.2362 60.6383L12.5244 57.9345L15.2362 55.2341L17.9516 57.9345L15.2362 60.6383ZM9.2092 60.6383L6.4938 57.9345L9.2092 55.2341L11.921 57.9345L9.2092 60.6383ZM3.17856 60.6383L0.466656 57.9345L3.17856 55.2341L5.89046 57.9345L3.17856 60.6383ZM174.407 60.3379H169.583V55.5345H174.407V60.3379ZM168.38 60.3379H163.556V55.5345H168.38V60.3379ZM162.349 60.3379H157.526V55.5345H162.349V60.3379ZM156.319 60.3379H151.495V55.5345H156.319V60.3379ZM147.878 60.0375C146.474 60.0375 145.77 59.3365 145.77 57.9345C145.77 56.5359 146.474 55.8349 147.878 55.8349C149.286 55.8349 149.99 56.5359 149.99 57.9345C149.99 59.3365 149.286 60.0375 147.878 60.0375ZM141.851 60.0375C140.443 60.0375 139.739 59.3365 139.739 57.9345C139.739 56.5359 140.443 55.8349 141.851 55.8349C143.255 55.8349 143.959 56.5359 143.959 57.9345C143.959 59.3365 143.255 60.0375 141.851 60.0375ZM135.82 60.0375C134.412 60.0375 133.712 59.3365 133.712 57.9345C133.712 56.5359 134.412 55.8349 135.82 55.8349C137.228 55.8349 137.932 56.5359 137.932 57.9345C137.932 59.3365 137.228 60.0375 135.82 60.0375ZM129.793 60.0375C128.385 60.0375 127.681 59.3365 127.681 57.9345C127.681 56.5359 128.385 55.8349 129.793 55.8349C131.198 55.8349 131.902 56.5359 131.902 57.9345C131.902 59.3365 131.198 60.0375 129.793 60.0375ZM123.763 60.0375L121.651 57.9345L123.763 55.8349L125.871 57.9345L123.763 60.0375ZM117.732 60.0375L115.624 57.9345L117.732 55.8349L119.844 57.9345L117.732 60.0375ZM184.055 61.2392L186.767 66.64H181.343L184.055 61.2392ZM178.024 61.2392L180.739 66.64H175.312L178.024 61.2392ZM93.6166 66.64L90.9047 63.9396L93.6166 61.2392L96.3284 63.9396L93.6166 66.64ZM87.586 66.64L84.8742 63.9396L87.586 61.2392L90.3013 63.9396L87.586 66.64ZM81.5589 66.64L78.8436 63.9396L81.5589 61.2392L84.2708 63.9396L81.5589 66.64ZM75.5283 66.64L72.8164 63.9396L75.5283 61.2392L78.2401 63.9396L75.5283 66.64ZM69.5012 66.64L66.7859 63.9396L69.5012 61.2392L72.2131 63.9396L69.5012 66.64ZM63.4705 66.64L60.7588 63.9396L63.4705 61.2392L66.1824 63.9396L63.4705 66.64ZM57.44 66.64L54.7281 63.9396L57.44 61.2392L60.1553 63.9396L57.44 66.64ZM51.4129 66.64L48.6976 63.9396L51.4129 61.2392L54.1248 63.9396L51.4129 66.64ZM45.3823 66.64L42.6704 63.9396L45.3823 61.2392L48.0941 63.9396L45.3823 66.64ZM39.3552 66.64L36.6398 63.9396L39.3552 61.2392L42.067 63.9396L39.3552 66.64ZM33.3246 66.64L30.6128 63.9396L33.3246 61.2392L36.0365 63.9396L33.3246 66.64ZM27.294 66.64L24.5821 63.9396L27.294 61.2392L30.0093 63.9396L27.294 66.64ZM21.2669 66.64L18.5516 63.9396L21.2669 61.2392L23.9787 63.9396L21.2669 66.64ZM15.2362 66.64L12.5244 63.9396L15.2362 61.2392L17.9516 63.9396L15.2362 66.64ZM9.2092 66.64L6.4938 63.9396L9.2092 61.2392L11.921 63.9396L9.2092 66.64ZM3.17856 66.64L0.466656 63.9396L3.17856 61.2392L5.89046 63.9396L3.17856 66.64ZM174.105 66.0426H169.885V61.84H174.105V66.0426ZM168.078 66.0426H163.858V61.84H168.078V66.0426ZM162.048 66.0426H157.827V61.84H162.048V66.0426ZM156.017 66.0426H151.797V61.84H156.017V66.0426ZM147.878 66.0426C146.474 66.0426 145.77 65.3416 145.77 63.9396C145.77 62.5376 146.474 61.84 147.878 61.84C149.286 61.84 149.99 62.5376 149.99 63.9396C149.99 65.3416 149.286 66.0426 147.878 66.0426ZM141.851 66.0426C140.443 66.0426 139.739 65.3416 139.739 63.9396C139.739 62.5376 140.443 61.84 141.851 61.84C143.255 61.84 143.959 62.5376 143.959 63.9396C143.959 65.3416 143.255 66.0426 141.851 66.0426ZM135.82 66.0426C134.412 66.0426 133.712 65.3416 133.712 63.9396C133.712 62.5376 134.412 61.84 135.82 61.84C137.228 61.84 137.932 62.5376 137.932 63.9396C137.932 65.3416 137.228 66.0426 135.82 66.0426ZM129.793 66.0426C128.385 66.0426 127.681 65.3416 127.681 63.9396C127.681 62.5376 128.385 61.84 129.793 61.84C131.198 61.84 131.902 62.5376 131.902 63.9396C131.902 65.3416 131.198 66.0426 129.793 66.0426ZM123.763 65.7422L121.952 63.9396L123.763 62.137L125.569 63.9396L123.763 65.7422ZM117.732 65.7422L115.925 63.9396L117.732 62.137L119.542 63.9396L117.732 65.7422ZM99.6472 65.7422L97.837 63.9396L99.6472 62.137L101.454 63.9396L99.6472 65.7422ZM184.055 67.2408L186.767 72.6451H181.343L184.055 67.2408ZM178.024 67.2408L180.739 72.6451H175.312L178.024 67.2408ZM93.6166 72.6451L90.9047 69.9447L93.6166 67.2408L96.3284 69.9447L93.6166 72.6451ZM87.586 72.6451L84.8742 69.9447L87.586 67.2408L90.3013 69.9447L87.586 72.6451ZM81.5589 72.6451L78.8436 69.9447L81.5589 67.2408L84.2708 69.9447L81.5589 72.6451ZM75.5283 72.6451L72.8164 69.9447L75.5283 67.2408L78.2401 69.9447L75.5283 72.6451ZM69.5012 72.6451L66.7859 69.9447L69.5012 67.2408L72.2131 69.9447L69.5012 72.6451ZM63.4705 72.6451L60.7588 69.9447L63.4705 67.2408L66.1824 69.9447L63.4705 72.6451ZM57.44 72.6451L54.7281 69.9447L57.44 67.2408L60.1553 69.9447L57.44 72.6451ZM51.4129 72.6451L48.6976 69.9447L51.4129 67.2408L54.1248 69.9447L51.4129 72.6451ZM45.3823 72.6451L42.6704 69.9447L45.3823 67.2408L48.0941 69.9447L45.3823 72.6451ZM39.3552 72.6451L36.6398 69.9447L39.3552 67.2408L42.067 69.9447L39.3552 72.6451ZM33.3246 72.6451L30.6128 69.9447L33.3246 67.2408L36.0365 69.9447L33.3246 72.6451ZM27.294 72.6451L24.5821 69.9447L27.294 67.2408L30.0093 69.9447L27.294 72.6451ZM21.2669 72.6451L18.5516 69.9447L21.2669 67.2408L23.9787 69.9447L21.2669 72.6451ZM15.2362 72.6451L12.5244 69.9447L15.2362 67.2408L17.9516 69.9447L15.2362 72.6451ZM9.2092 72.6451L6.4938 69.9447L9.2092 67.2408L11.921 69.9447L9.2092 72.6451ZM3.17856 72.6451L0.466656 69.9447L3.17856 67.2408L5.89046 69.9447L3.17856 72.6451ZM174.105 72.0443H169.885V67.8417H174.105V72.0443ZM168.078 72.0443H163.858V67.8417H168.078V72.0443ZM162.048 72.0443H157.827V67.8417H162.048V72.0443ZM156.017 72.0443H151.797V67.8417H156.017V72.0443ZM147.878 72.0443C146.474 72.0443 145.77 71.3433 145.77 69.9447C145.77 68.5427 146.474 67.8417 147.878 67.8417C149.286 67.8417 149.99 68.5427 149.99 69.9447C149.99 71.3433 149.286 72.0443 147.878 72.0443ZM141.851 72.0443C140.443 72.0443 139.739 71.3433 139.739 69.9447C139.739 68.5427 140.443 67.8417 141.851 67.8417C143.255 67.8417 143.959 68.5427 143.959 69.9447C143.959 71.3433 143.255 72.0443 141.851 72.0443ZM135.82 72.0443C134.412 72.0443 133.712 71.3433 133.712 69.9447C133.712 68.5427 134.412 67.8417 135.82 67.8417C137.228 67.8417 137.932 68.5427 137.932 69.9447C137.932 71.3433 137.228 72.0443 135.82 72.0443ZM129.793 72.0443C128.385 72.0443 127.681 71.3433 127.681 69.9447C127.681 68.5427 128.385 67.8417 129.793 67.8417C131.198 67.8417 131.902 68.5427 131.902 69.9447C131.902 71.3433 131.198 72.0443 129.793 72.0443ZM123.763 71.7438L121.952 69.9447L123.763 68.1421L125.569 69.9447L123.763 71.7438ZM117.732 71.7438L115.925 69.9447L117.732 68.1421L119.542 69.9447L117.732 71.7438ZM99.6472 71.7438L97.837 69.9447L99.6472 68.1421L101.454 69.9447L99.6472 71.7438ZM184.055 73.246L186.767 78.6502H181.343L184.055 73.246ZM178.024 73.246L180.739 78.6502H175.312L178.024 73.246ZM93.6166 78.6502L90.9047 75.9464L93.6166 73.246L96.3284 75.9464L93.6166 78.6502ZM87.586 78.6502L84.8742 75.9464L87.586 73.246L90.3013 75.9464L87.586 78.6502ZM81.5589 78.6502L78.8436 75.9464L81.5589 73.246L84.2708 75.9464L81.5589 78.6502ZM75.5283 78.6502L72.8164 75.9464L75.5283 73.246L78.2401 75.9464L75.5283 78.6502ZM69.5012 78.6502L66.7859 75.9464L69.5012 73.246L72.2131 75.9464L69.5012 78.6502ZM63.4705 78.6502L60.7588 75.9464L63.4705 73.246L66.1824 75.9464L63.4705 78.6502ZM57.44 78.6502L54.7281 75.9464L57.44 73.246L60.1553 75.9464L57.44 78.6502ZM51.4129 78.6502L48.6976 75.9464L51.4129 73.246L54.1248 75.9464L51.4129 78.6502ZM45.3823 78.6502L42.6704 75.9464L45.3823 73.246L48.0941 75.9464L45.3823 78.6502ZM39.3552 78.6502L36.6398 75.9464L39.3552 73.246L42.067 75.9464L39.3552 78.6502ZM33.3246 78.6502L30.6128 75.9464L33.3246 73.246L36.0365 75.9464L33.3246 78.6502ZM27.294 78.6502L24.5821 75.9464L27.294 73.246L30.0093 75.9464L27.294 78.6502ZM21.2669 78.6502L18.5516 75.9464L21.2669 73.246L23.9787 75.9464L21.2669 78.6502ZM15.2362 78.6502L12.5244 75.9464L15.2362 73.246L17.9516 75.9464L15.2362 78.6502ZM9.2092 78.6502L6.4938 75.9464L9.2092 73.246L11.921 75.9464L9.2092 78.6502ZM3.17856 78.6502L0.466656 75.9464L3.17856 73.246L5.89046 75.9464L3.17856 78.6502ZM174.105 78.0494H169.885V73.8468H174.105V78.0494ZM168.078 78.0494H163.858V73.8468H168.078V78.0494ZM162.048 78.0494H157.827V73.8468H162.048V78.0494ZM156.017 78.0494H151.797V73.8468H156.017V78.0494ZM147.878 78.0494C146.474 78.0494 145.77 77.3484 145.77 75.9464C145.77 74.5478 146.474 73.8468 147.878 73.8468C149.286 73.8468 149.99 74.5478 149.99 75.9464C149.99 77.3484 149.286 78.0494 147.878 78.0494ZM141.851 78.0494C140.443 78.0494 139.739 77.3484 139.739 75.9464C139.739 74.5478 140.443 73.8468 141.851 73.8468C143.255 73.8468 143.959 74.5478 143.959 75.9464C143.959 77.3484 143.255 78.0494 141.851 78.0494ZM135.82 78.0494C134.412 78.0494 133.712 77.3484 133.712 75.9464C133.712 74.5478 134.412 73.8468 135.82 73.8468C137.228 73.8468 137.932 74.5478 137.932 75.9464C137.932 77.3484 137.228 78.0494 135.82 78.0494ZM129.793 78.0494C128.385 78.0494 127.681 77.3484 127.681 75.9464C127.681 74.5478 128.385 73.8468 129.793 73.8468C131.198 73.8468 131.902 74.5478 131.902 75.9464C131.902 77.3484 131.198 78.0494 129.793 78.0494ZM123.763 77.749L121.952 75.9464L123.763 74.1473L125.569 75.9464L123.763 77.749ZM117.732 77.749L115.925 75.9464L117.732 74.1473L119.542 75.9464L117.732 77.749ZM105.674 77.749L103.868 75.9464L105.674 74.1473L107.485 75.9464L105.674 77.749ZM99.6472 77.749L97.837 75.9464L99.6472 74.1473L101.454 75.9464L99.6472 77.749ZM184.055 79.2477L186.767 84.6519H181.343L184.055 79.2477ZM178.024 79.2477L180.739 84.6519H175.312L178.024 79.2477ZM93.6166 84.3515L91.203 81.9515L93.6166 79.5481L96.0267 81.9515L93.6166 84.3515ZM87.586 84.3515L85.1758 81.9515L87.586 79.5481L89.9997 81.9515L87.586 84.3515ZM81.5589 84.3515L79.1453 81.9515L81.5589 79.5481L83.969 81.9515L81.5589 84.3515ZM75.5283 84.3515L73.1181 81.9515L75.5283 79.5481L77.9419 81.9515L75.5283 84.3515ZM69.5012 84.3515L67.0875 81.9515L69.5012 79.5481L71.9114 81.9515L69.5012 84.3515ZM63.4705 84.3515L61.057 81.9515L63.4705 79.5481L65.8807 81.9515L63.4705 84.3515ZM57.44 84.3515L55.0298 81.9515L57.44 79.5481L59.8536 81.9515L57.44 84.3515ZM51.4129 84.3515L48.9993 81.9515L51.4129 79.5481L53.8231 81.9515L51.4129 84.3515ZM45.3823 84.3515L42.9722 81.9515L45.3823 79.5481L47.7959 81.9515L45.3823 84.3515ZM39.3552 84.3515L36.9415 81.9515L39.3552 79.5481L41.7653 81.9515L39.3552 84.3515ZM33.3246 84.3515L30.911 81.9515L33.3246 79.5481L35.7347 81.9515L33.3246 84.3515ZM27.294 84.3515L24.8838 81.9515L27.294 79.5481L29.7076 81.9515L27.294 84.3515ZM21.2669 84.3515L18.8532 81.9515L21.2669 79.5481L23.6771 81.9515L21.2669 84.3515ZM15.2362 84.3515L12.8262 81.9515L15.2362 79.5481L17.6499 81.9515L15.2362 84.3515ZM9.2092 84.3515L6.79552 81.9515L9.2092 79.5481L11.6193 81.9515L9.2092 84.3515ZM3.17856 84.3515L0.768378 81.9515L3.17856 79.5481L5.58874 81.9515L3.17856 84.3515ZM174.105 84.0511H169.885V79.8485H174.105V84.0511ZM168.078 84.0511H163.858V79.8485H168.078V84.0511ZM162.048 84.0511H157.827V79.8485H162.048V84.0511ZM156.017 84.0511H151.797V79.8485H156.017V84.0511ZM147.878 83.7506C146.675 83.7506 146.071 83.1532 146.071 81.9515C146.071 80.7498 146.675 80.1489 147.878 80.1489C149.085 80.1489 149.688 80.7498 149.688 81.9515C149.688 83.1532 149.085 83.7506 147.878 83.7506ZM141.851 83.7506C140.644 83.7506 140.041 83.1532 140.041 81.9515C140.041 80.7498 140.644 80.1489 141.851 80.1489C143.054 80.1489 143.658 80.7498 143.658 81.9515C143.658 83.1532 143.054 83.7506 141.851 83.7506ZM135.82 83.7506C134.613 83.7506 134.014 83.1532 134.014 81.9515C134.014 80.7498 134.613 80.1489 135.82 80.1489C137.027 80.1489 137.631 80.7498 137.631 81.9515C137.631 83.1532 137.027 83.7506 135.82 83.7506ZM129.793 83.7506C128.586 83.7506 127.983 83.1532 127.983 81.9515C127.983 80.7498 128.586 80.1489 129.793 80.1489C130.997 80.1489 131.6 80.7498 131.6 81.9515C131.6 83.1532 130.997 83.7506 129.793 83.7506ZM123.763 83.7506L121.952 81.9515L123.763 80.1489L125.569 81.9515L123.763 83.7506ZM117.732 83.7506L115.925 81.9515L117.732 80.1489L119.542 81.9515L117.732 83.7506ZM111.705 83.7506L109.895 81.9515L111.705 80.1489L113.512 81.9515L111.705 83.7506ZM105.674 83.7506L103.868 81.9515L105.674 80.1489L107.485 81.9515L105.674 83.7506ZM99.6472 83.7506L97.837 81.9515L99.6472 80.1489L101.454 81.9515L99.6472 83.7506ZM184.055 85.5532L186.465 90.3566H181.641L184.055 85.5532ZM178.024 85.5532L180.438 90.3566H175.614L178.024 85.5532ZM93.6166 90.3566L91.203 87.9532L93.6166 85.5532L96.0267 87.9532L93.6166 90.3566ZM87.586 90.3566L85.1758 87.9532L87.586 85.5532L89.9997 87.9532L87.586 90.3566ZM81.5589 90.3566L79.1453 87.9532L81.5589 85.5532L83.969 87.9532L81.5589 90.3566ZM75.5283 90.3566L73.1181 87.9532L75.5283 85.5532L77.9419 87.9532L75.5283 90.3566ZM69.5012 90.3566L67.0875 87.9532L69.5012 85.5532L71.9114 87.9532L69.5012 90.3566ZM63.4705 90.3566L61.057 87.9532L63.4705 85.5532L65.8807 87.9532L63.4705 90.3566ZM57.44 90.3566L55.0298 87.9532L57.44 85.5532L59.8536 87.9532L57.44 90.3566ZM51.4129 90.3566L48.9993 87.9532L51.4129 85.5532L53.8231 87.9532L51.4129 90.3566ZM45.3823 90.3566L42.9722 87.9532L45.3823 85.5532L47.7959 87.9532L45.3823 90.3566ZM39.3552 90.3566L36.9415 87.9532L39.3552 85.5532L41.7653 87.9532L39.3552 90.3566ZM33.3246 90.3566L30.911 87.9532L33.3246 85.5532L35.7347 87.9532L33.3246 90.3566ZM27.294 90.3566L24.8838 87.9532L27.294 85.5532L29.7076 87.9532L27.294 90.3566ZM21.2669 90.3566L18.8532 87.9532L21.2669 85.5532L23.6771 87.9532L21.2669 90.3566ZM15.2362 90.3566L12.8262 87.9532L15.2362 85.5532L17.6499 87.9532L15.2362 90.3566ZM9.2092 90.3566L6.79552 87.9532L9.2092 85.5532L11.6193 87.9532L9.2092 90.3566ZM3.17856 90.3566L0.768378 87.9532L3.17856 85.5532L5.58874 87.9532L3.17856 90.3566ZM174.105 90.0562H169.885V85.8536H174.105V90.0562ZM168.078 90.0562H163.858V85.8536H168.078V90.0562ZM162.048 90.0562H157.827V85.8536H162.048V90.0562ZM156.017 90.0562H151.797V85.8536H156.017V90.0562ZM147.878 89.7558C146.675 89.7558 146.071 89.1549 146.071 87.9532C146.071 86.7549 146.675 86.1541 147.878 86.1541C149.085 86.1541 149.688 86.7549 149.688 87.9532C149.688 89.1549 149.085 89.7558 147.878 89.7558ZM141.851 89.7558C140.644 89.7558 140.041 89.1549 140.041 87.9532C140.041 86.7549 140.644 86.1541 141.851 86.1541C143.054 86.1541 143.658 86.7549 143.658 87.9532C143.658 89.1549 143.054 89.7558 141.851 89.7558ZM135.82 89.7558C134.613 89.7558 134.014 89.1549 134.014 87.9532C134.014 86.7549 134.613 86.1541 135.82 86.1541C137.027 86.1541 137.631 86.7549 137.631 87.9532C137.631 89.1549 137.027 89.7558 135.82 89.7558ZM129.793 89.7558C128.586 89.7558 127.983 89.1549 127.983 87.9532C127.983 86.7549 128.586 86.1541 129.793 86.1541C130.997 86.1541 131.6 86.7549 131.6 87.9532C131.6 89.1549 130.997 89.7558 129.793 89.7558ZM123.763 89.7558L121.952 87.9532L123.763 86.1541L125.569 87.9532L123.763 89.7558ZM117.732 89.7558L115.925 87.9532L117.732 86.1541L119.542 87.9532L117.732 89.7558ZM111.705 89.7558L109.895 87.9532L111.705 86.1541L113.512 87.9532L111.705 89.7558ZM105.674 89.7558L103.868 87.9532L105.674 86.1541L107.485 87.9532L105.674 89.7558ZM99.6472 89.7558L97.837 87.9532L99.6472 86.1541L101.454 87.9532L99.6472 89.7558ZM90.603 96.9592H84.5725V90.9575H90.603V96.9592ZM84.5725 96.9592H78.5418V90.9575H84.5725V96.9592ZM78.5418 96.9592H72.5147V90.9575H78.5418V96.9592ZM72.5147 96.9592H66.4842V90.9575H72.5147V96.9592ZM66.4842 96.9592H60.457V90.9575H66.4842V96.9592ZM60.457 96.9592H54.4264V90.9575H60.457V96.9592ZM54.4264 96.9592H48.3959V90.9575H54.4264V96.9592ZM48.3959 96.9592H42.3687V90.9575H48.3959V96.9592ZM42.3687 96.9592H36.3382V90.9575H42.3687V96.9592ZM36.3382 96.9592H30.311V90.9575H36.3382V96.9592ZM30.311 96.9592H24.2804V90.9575H30.311V96.9592ZM24.2804 96.9592H18.2499V90.9575H24.2804V96.9592ZM18.2499 96.9592H12.2227V90.9575H18.2499V96.9592ZM12.2227 96.9592H6.19208V90.9575H12.2227V96.9592ZM6.19208 96.9592H0.165039V90.9575H6.19208V96.9592ZM102.359 96.6587H96.9319V91.2579H102.359V96.6587ZM96.3284 96.6587H90.9047V91.2579H96.3284V96.6587ZM184.055 96.3583C182.446 96.3583 181.641 95.5606 181.641 93.9583C181.641 92.356 182.446 91.5583 184.055 91.5583C185.664 91.5583 186.465 92.356 186.465 93.9583C186.465 95.5606 185.664 96.3583 184.055 96.3583ZM178.024 96.3583C176.418 96.3583 175.614 95.5606 175.614 93.9583C175.614 92.356 176.418 91.5583 178.024 91.5583C179.633 91.5583 180.438 92.356 180.438 93.9583C180.438 95.5606 179.633 96.3583 178.024 96.3583ZM171.997 92.4562L173.502 95.4605H170.488L171.997 92.4562ZM165.966 92.4562L167.475 95.4605H164.458L165.966 92.4562ZM159.939 92.4562L161.444 95.4605H158.431L159.939 92.4562ZM153.909 92.4562L155.417 95.4605H152.4L153.909 92.4562ZM147.878 92.4562L149.387 95.4605H146.373L147.878 92.4562ZM141.851 92.4562L143.356 95.4605H140.342L141.851 92.4562ZM135.82 92.4562L137.329 95.4605H134.312L135.82 92.4562ZM129.793 92.4562L131.298 95.4605H128.285L129.793 92.4562ZM123.763 92.4562L125.271 95.4605H122.254L123.763 92.4562ZM117.732 92.4562L119.241 95.4605H116.227L117.732 92.4562ZM111.705 92.4562L113.21 95.4605H110.196L111.705 92.4562ZM105.674 92.4562L107.183 95.4605H104.166L105.674 92.4562ZM90.3013 102.664H84.8742V97.2596H90.3013V102.664ZM84.2708 102.664H78.8436V97.2596H84.2708V102.664ZM78.2401 102.664H72.8164V97.2596H78.2401V102.664ZM72.2131 102.664H66.7859V97.2596H72.2131V102.664ZM66.1824 102.664H60.7588V97.2596H66.1824V102.664ZM60.1553 102.664H54.7281V97.2596H60.1553V102.664ZM54.1248 102.664H48.6976V97.2596H54.1248V102.664ZM48.0941 102.664H42.6704V97.2596H48.0941V102.664ZM42.067 102.664H36.6398V97.2596H42.067V102.664ZM36.0365 102.664H30.6128V97.2596H36.0365V102.664ZM30.0093 102.664H24.5821V97.2596H30.0093V102.664ZM23.9787 102.664H18.5516V97.2596H23.9787V102.664ZM17.9516 102.664H12.5244V97.2596H17.9516V102.664ZM11.921 102.664H6.4938V97.2596H11.921V102.664ZM5.89046 102.664H0.466656V97.2596H5.89046V102.664ZM102.057 102.363H97.2336V97.56H102.057V102.363ZM96.0267 102.363H91.203V97.56H96.0267V102.363ZM184.055 102.363C182.446 102.363 181.641 101.562 181.641 99.9635C181.641 98.3612 182.446 97.56 184.055 97.56C185.664 97.56 186.465 98.3612 186.465 99.9635C186.465 101.562 185.664 102.363 184.055 102.363ZM178.024 102.363C176.418 102.363 175.614 101.562 175.614 99.9635C175.614 98.3612 176.418 97.56 178.024 97.56C179.633 97.56 180.438 98.3612 180.438 99.9635C180.438 101.562 179.633 102.363 178.024 102.363ZM171.997 98.4613L173.502 101.462H170.488L171.997 98.4613ZM165.966 98.4613L167.475 101.462H164.458L165.966 98.4613ZM159.939 98.4613L161.444 101.462H158.431L159.939 98.4613ZM153.909 98.4613L155.417 101.462H152.4L153.909 98.4613ZM147.878 98.4613L149.387 101.462H146.373L147.878 98.4613ZM141.851 98.4613L143.356 101.462H140.342L141.851 98.4613ZM135.82 98.4613L137.329 101.462H134.312L135.82 98.4613ZM129.793 98.4613L131.298 101.462H128.285L129.793 98.4613ZM123.763 98.4613L125.271 101.462H122.254L123.763 98.4613ZM117.732 98.4613L119.241 101.462H116.227L117.732 98.4613ZM111.705 98.4613L113.21 101.462H110.196L111.705 98.4613ZM105.674 98.4613L107.183 101.462H104.166L105.674 98.4613ZM184.055 103.265L186.767 108.669H181.343L184.055 103.265ZM178.024 103.265L180.739 108.669H175.312L178.024 103.265ZM90.3013 108.669H84.8742V103.265H90.3013V108.669ZM84.2708 108.669H78.8436V103.265H84.2708V108.669ZM78.2401 108.669H72.8164V103.265H78.2401V108.669ZM72.2131 108.669H66.7859V103.265H72.2131V108.669ZM66.1824 108.669H60.7588V103.265H66.1824V108.669ZM60.1553 108.669H54.7281V103.265H60.1553V108.669ZM54.1248 108.669H48.6976V103.265H54.1248V108.669ZM48.0941 108.669H42.6704V103.265H48.0941V108.669ZM42.067 108.669H36.6398V103.265H42.067V108.669ZM36.0365 108.669H30.6128V103.265H36.0365V108.669ZM30.0093 108.669H24.5821V103.265H30.0093V108.669ZM23.9787 108.669H18.5516V103.265H23.9787V108.669ZM17.9516 108.669H12.5244V103.265H17.9516V108.669ZM11.921 108.669H6.4938V103.265H11.921V108.669ZM5.89046 108.669H0.466656V103.265H5.89046V108.669ZM102.057 108.369H97.2336V103.565H102.057V108.369ZM96.0267 108.369H91.203V103.565H96.0267V108.369ZM171.997 104.466L173.502 107.467H170.488L171.997 104.466ZM165.966 104.466L167.475 107.467H164.458L165.966 104.466ZM159.939 104.466L161.444 107.467H158.431L159.939 104.466ZM153.909 104.466L155.417 107.467H152.4L153.909 104.466ZM147.878 104.466L149.387 107.467H146.373L147.878 104.466ZM141.851 104.466L143.356 107.467H140.342L141.851 104.466ZM135.82 104.466L137.329 107.467H134.312L135.82 104.466ZM129.793 104.466L131.298 107.467H128.285L129.793 104.466ZM123.763 104.466L125.271 107.467H122.254L123.763 104.466ZM117.732 104.466L119.241 107.467H116.227L117.732 104.466ZM111.705 104.466L113.21 107.467H110.196L111.705 104.466ZM105.674 104.466L107.183 107.467H104.166L105.674 104.466ZM184.055 109.266L186.767 114.671H181.343L184.055 109.266ZM178.024 109.266L180.739 114.671H175.312L178.024 109.266ZM90.3013 114.671H84.8742V109.266H90.3013V114.671ZM84.2708 114.671H78.8436V109.266H84.2708V114.671ZM78.2401 114.671H72.8164V109.266H78.2401V114.671ZM72.2131 114.671H66.7859V109.266H72.2131V114.671ZM66.1824 114.671H60.7588V109.266H66.1824V114.671ZM60.1553 114.671H54.7281V109.266H60.1553V114.671ZM54.1248 114.671H48.6976V109.266H54.1248V114.671ZM48.0941 114.671H42.6704V109.266H48.0941V114.671ZM42.067 114.671H36.6398V109.266H42.067V114.671ZM36.0365 114.671H30.6128V109.266H36.0365V114.671ZM30.0093 114.671H24.5821V109.266H30.0093V114.671ZM23.9787 114.671H18.5516V109.266H23.9787V114.671ZM17.9516 114.671H12.5244V109.266H17.9516V114.671ZM11.921 114.671H6.4938V109.266H11.921V114.671ZM5.89046 114.671H0.466656V109.266H5.89046V114.671ZM102.057 114.37H97.2336V109.567H102.057V114.37ZM96.0267 114.37H91.203V109.567H96.0267V114.37ZM171.997 110.468L173.502 113.469H170.488L171.997 110.468ZM165.966 110.468L167.475 113.469H164.458L165.966 110.468ZM159.939 110.468L161.444 113.469H158.431L159.939 110.468ZM153.909 110.468L155.417 113.469H152.4L153.909 110.468ZM147.878 110.468L149.387 113.469H146.373L147.878 110.468ZM141.851 110.468L143.356 113.469H140.342L141.851 110.468ZM135.82 110.468L137.329 113.469H134.312L135.82 110.468ZM129.793 110.468L131.298 113.469H128.285L129.793 110.468ZM123.763 110.468L125.271 113.469H122.254L123.763 110.468ZM117.732 110.468L119.241 113.469H116.227L117.732 110.468ZM111.705 110.468L113.21 113.469H110.196L111.705 110.468ZM105.674 110.468L107.183 113.469H104.166L105.674 110.468ZM184.055 115.271L186.767 120.676H181.343L184.055 115.271ZM178.024 115.271L180.739 120.676H175.312L178.024 115.271ZM90.3013 120.676H84.8742V115.271H90.3013V120.676ZM84.2708 120.676H78.8436V115.271H84.2708V120.676ZM78.2401 120.676H72.8164V115.271H78.2401V120.676ZM72.2131 120.676H66.7859V115.271H72.2131V120.676ZM66.1824 120.676H60.7588V115.271H66.1824V120.676ZM60.1553 120.676H54.7281V115.271H60.1553V120.676ZM54.1248 120.676H48.6976V115.271H54.1248V120.676ZM48.0941 120.676H42.6704V115.271H48.0941V120.676ZM42.067 120.676H36.6398V115.271H42.067V120.676ZM36.0365 120.676H30.6128V115.271H36.0365V120.676ZM30.0093 120.676H24.5821V115.271H30.0093V120.676ZM23.9787 120.676H18.5516V115.271H23.9787V120.676ZM17.9516 120.676H12.5244V115.271H17.9516V120.676ZM11.921 120.676H6.4938V115.271H11.921V120.676ZM5.89046 120.676H0.466656V115.271H5.89046V120.676ZM102.057 120.375H97.2336V115.572H102.057V120.375ZM96.0267 120.375H91.203V115.572H96.0267V120.375ZM171.997 116.473L173.502 119.474H170.488L171.997 116.473ZM165.966 116.473L167.475 119.474H164.458L165.966 116.473ZM159.939 116.473L161.444 119.474H158.431L159.939 116.473ZM153.909 116.473L155.417 119.474H152.4L153.909 116.473ZM147.878 116.473L149.387 119.474H146.373L147.878 116.473ZM141.851 116.473L143.356 119.474H140.342L141.851 116.473ZM135.82 116.473L137.329 119.474H134.312L135.82 116.473ZM129.793 116.473L131.298 119.474H128.285L129.793 116.473ZM123.763 116.473L125.271 119.474H122.254L123.763 116.473ZM117.732 116.473L119.241 119.174H116.529L117.732 116.473ZM111.705 116.774L112.908 119.174H110.498L111.705 116.774ZM105.674 116.774L106.881 119.174H104.468L105.674 116.774ZM184.055 121.277L186.767 126.677H181.343L184.055 121.277ZM178.024 121.277L180.739 126.677H175.312L178.024 121.277ZM90.3013 126.677H84.8742V121.277H90.3013V126.677ZM84.2708 126.677H78.8436V121.277H84.2708V126.677ZM78.2401 126.677H72.8164V121.277H78.2401V126.677ZM72.2131 126.677H66.7859V121.277H72.2131V126.677ZM66.1824 126.677H60.7588V121.277H66.1824V126.677ZM60.1553 126.677H54.7281V121.277H60.1553V126.677ZM54.1248 126.677H48.6976V121.277H54.1248V126.677ZM48.0941 126.677H42.6704V121.277H48.0941V126.677ZM42.067 126.677H36.6398V121.277H42.067V126.677ZM36.0365 126.677H30.6128V121.277H36.0365V126.677ZM30.0093 126.677H24.5821V121.277H30.0093V126.677ZM23.9787 126.677H18.5516V121.277H23.9787V126.677ZM17.9516 126.677H12.5244V121.277H17.9516V126.677ZM11.921 126.677H6.4938V121.277H11.921V126.677ZM5.89046 126.677H0.466656V121.277H5.89046V126.677ZM102.057 126.377H97.2336V121.577H102.057V126.377ZM96.0267 126.377H91.203V121.577H96.0267V126.377ZM171.997 122.775L173.2 125.179H170.79L171.997 122.775ZM165.966 122.775L167.173 125.179H164.76L165.966 122.775ZM159.939 122.775L161.143 125.179H158.732L159.939 122.775ZM153.909 122.775L155.115 125.179H152.702L153.909 122.775ZM147.878 122.775L149.085 125.179H146.675L147.878 122.775ZM141.851 122.775L143.054 125.179H140.644L141.851 122.775ZM135.82 122.775L137.027 125.179H134.614L135.82 122.775ZM129.793 122.775L130.997 125.179H128.586L129.793 122.775ZM123.763 122.775L124.969 125.179H122.556L123.763 122.775ZM117.732 122.775L118.939 125.179H116.529L117.732 122.775ZM111.705 122.775L112.908 125.179H110.498L111.705 122.775ZM105.674 122.775L106.881 125.179H104.468L105.674 122.775ZM184.055 127.278L186.767 132.683H181.343L184.055 127.278ZM178.024 127.278L180.739 132.683H175.312L178.024 127.278ZM90.3013 132.683H84.8742V127.278H90.3013V132.683ZM84.2708 132.683H78.8436V127.278H84.2708V132.683ZM78.2401 132.683H72.8164V127.278H78.2401V132.683ZM66.1824 132.683H60.7588V127.278H66.1824V132.683ZM60.1553 132.683H54.7281V127.278H60.1553V132.683ZM54.1248 132.683H48.6976V127.278H54.1248V132.683ZM48.0941 132.683H42.6704V127.278H48.0941V132.683ZM42.067 132.683H36.6398V127.278H42.067V132.683ZM36.0365 132.683H30.6128V127.278H36.0365V132.683ZM30.0093 132.683H24.5821V127.278H30.0093V132.683ZM23.9787 132.683H18.5516V127.278H23.9787V132.683ZM17.9516 132.683H12.5244V127.278H17.9516V132.683ZM11.921 132.683H6.4938V127.278H11.921V132.683ZM5.89046 132.683H0.466656V127.278H5.89046V132.683ZM102.057 132.382H97.2336V127.579H102.057V132.382ZM96.0267 132.382H91.203V127.579H96.0267V132.382ZM171.997 128.78L173.2 131.18H170.79L171.997 128.78ZM165.966 128.78L167.173 131.18H164.76L165.966 128.78ZM159.939 128.78L161.143 131.18H158.732L159.939 128.78ZM153.909 128.78L155.115 131.18H152.702L153.909 128.78ZM147.878 128.78L149.085 131.18H146.675L147.878 128.78ZM141.851 128.78L143.054 131.18H140.644L141.851 128.78ZM135.82 128.78L137.027 131.18H134.614L135.82 128.78ZM129.793 128.78L130.997 131.18H128.586L129.793 128.78ZM123.763 128.78L124.969 131.18H122.556L123.763 128.78ZM117.732 128.78L118.939 131.18H116.529L117.732 128.78ZM111.705 128.78L112.908 131.18H110.498L111.705 128.78ZM105.674 128.78L106.881 131.18H104.468L105.674 128.78ZM184.055 138.688L181.343 135.984L184.055 133.283L186.767 135.984L184.055 138.688ZM178.024 138.688L175.312 135.984L178.024 133.283L180.739 135.984L178.024 138.688ZM89.9997 138.387H85.1758V133.584H89.9997V138.387ZM83.969 138.387H79.1453V133.584H83.969V138.387ZM65.8807 138.387H61.057V133.584H65.8807V138.387ZM59.8536 138.387H55.0298V133.584H59.8536V138.387ZM53.8231 138.387H48.9993V133.584H53.8231V138.387ZM47.7959 138.387H42.9722V133.584H47.7959V138.387ZM41.7653 138.387H36.9415V133.584H41.7653V138.387ZM35.7347 138.387H30.911V133.584H35.7347V138.387ZM29.7076 138.387H24.8838V133.584H29.7076V138.387ZM23.6771 138.387H18.8532V133.584H23.6771V138.387ZM17.6499 138.387H12.8262V133.584H17.6499V138.387ZM11.6193 138.387H6.79552V133.584H11.6193V138.387ZM5.58874 138.387H0.768378V133.584H5.58874V138.387ZM102.057 138.387H97.2336V133.584H102.057V138.387ZM96.0267 138.087H91.5047V133.584H96.0267V138.087ZM171.997 134.485L173.502 137.486H170.488L171.997 134.485ZM165.966 134.485L167.475 137.486H164.458L165.966 134.485ZM159.939 134.485L161.444 137.486H158.431L159.939 134.485ZM153.909 134.485L155.417 137.486H152.4L153.909 134.485ZM147.878 134.485L149.387 137.486H146.373L147.878 134.485ZM141.851 134.485L143.356 137.486H140.342L141.851 134.485ZM135.82 134.485L137.329 137.486H134.312L135.82 134.485ZM129.793 134.485L131.298 137.486H128.285L129.793 134.485ZM123.763 134.485L125.271 137.486H122.254L123.763 134.485ZM117.732 134.485L119.241 137.486H116.227L117.732 134.485ZM111.705 134.485L113.21 137.486H110.196L111.705 134.485ZM105.674 134.485L107.183 137.486H104.166L105.674 134.485ZM184.055 144.389L181.641 141.989L184.055 139.586L186.465 141.989L184.055 144.389ZM178.024 144.389L175.614 141.989L178.024 139.586L180.438 141.989L178.024 144.389ZM89.9997 144.389H85.1758V139.586H89.9997V144.389ZM83.969 144.389H79.1453V139.586H83.969V144.389ZM65.8807 144.389H61.057V139.586H65.8807V144.389ZM59.8536 144.389H55.0298V139.586H59.8536V144.389ZM53.8231 144.389H48.9993V139.586H53.8231V144.389ZM47.7959 144.389H42.9722V139.586H47.7959V144.389ZM41.7653 144.389H36.9415V139.586H41.7653V144.389ZM35.7347 144.389H30.911V139.586H35.7347V144.389ZM29.7076 144.389H24.8838V139.586H29.7076V144.389ZM23.6771 144.389H18.8532V139.586H23.6771V144.389ZM17.6499 144.389H12.8262V139.586H17.6499V144.389ZM11.6193 144.389H6.79552V139.586H11.6193V144.389ZM5.58874 144.389H0.768378V139.586H5.58874V144.389ZM101.756 144.089H97.5352V139.886H101.756V144.089ZM95.7251 144.089H91.5047V139.886H95.7251V144.089ZM171.997 140.787L173.2 143.191H170.79L171.997 140.787ZM165.966 140.787L167.173 143.191H164.76L165.966 140.787ZM159.939 140.787L161.143 143.191H158.732L159.939 140.787ZM153.909 140.787L155.115 143.191H152.702L153.909 140.787ZM147.878 140.787L149.085 143.191H146.675L147.878 140.787ZM141.851 140.787L143.054 143.191H140.644L141.851 140.787ZM135.82 140.787L137.027 143.191H134.614L135.82 140.787ZM129.793 140.787L130.997 143.191H128.586L129.793 140.787ZM123.763 140.787L124.969 143.191H122.556L123.763 140.787ZM117.732 140.787L118.939 143.191H116.529L117.732 140.787ZM111.705 140.787L112.908 143.191H110.498L111.705 140.787ZM105.674 140.787L106.881 143.191H104.468L105.674 140.787ZM184.055 150.394L181.641 147.991L184.055 145.591L186.465 147.991L184.055 150.394ZM178.024 150.394L175.614 147.991L178.024 145.591L180.438 147.991L178.024 150.394ZM89.9997 150.394H85.1758V145.591H89.9997V150.394ZM65.8807 150.394H61.057V145.591H65.8807V150.394ZM59.8536 150.394H55.0298V145.591H59.8536V150.394ZM53.8231 150.394H48.9993V145.591H53.8231V150.394ZM47.7959 150.394H42.9722V145.591H47.7959V150.394ZM41.7653 150.394H36.9415V145.591H41.7653V150.394ZM35.7347 150.394H30.911V145.591H35.7347V150.394ZM29.7076 150.394H24.8838V145.591H29.7076V150.394ZM23.6771 150.394H18.8532V145.591H23.6771V150.394ZM17.6499 150.394H12.8262V145.591H17.6499V150.394ZM11.6193 150.394H6.79552V145.591H11.6193V150.394ZM5.58874 150.394H0.768378V145.591H5.58874V150.394ZM101.756 150.094H97.5352V145.891H101.756V150.094ZM95.7251 150.094H91.5047V145.891H95.7251V150.094ZM171.997 146.792L173.2 149.192H170.79L171.997 146.792ZM165.966 146.792L167.173 149.192H164.76L165.966 146.792ZM159.939 146.792L161.143 149.192H158.732L159.939 146.792ZM153.909 146.792L155.115 149.192H152.702L153.909 146.792ZM147.878 146.792L149.085 149.192H146.675L147.878 146.792ZM141.851 146.792L143.054 149.192H140.644L141.851 146.792ZM135.82 146.792L137.027 149.192H134.614L135.82 146.792ZM129.793 146.792L130.997 149.192H128.586L129.793 146.792ZM123.763 146.792L124.969 149.192H122.556L123.763 146.792ZM117.732 146.792L118.939 149.192H116.529L117.732 146.792ZM111.705 146.792L112.908 149.192H110.498L111.705 146.792ZM105.674 146.792L106.881 149.192H104.468L105.674 146.792ZM184.055 156.396L181.641 153.996L184.055 151.596L186.465 153.996L184.055 156.396ZM178.024 156.396L175.614 153.996L178.024 151.596L180.438 153.996L178.024 156.396ZM89.9997 156.396H85.1758V151.596H89.9997V156.396ZM65.8807 156.396H61.057V151.596H65.8807V156.396ZM59.8536 156.396H55.0298V151.596H59.8536V156.396ZM53.8231 156.396H48.9993V151.596H53.8231V156.396ZM47.7959 156.396H42.9722V151.596H47.7959V156.396ZM41.7653 156.396H36.9415V151.596H41.7653V156.396ZM35.7347 156.396H30.911V151.596H35.7347V156.396ZM29.7076 156.396H24.8838V151.596H29.7076V156.396ZM23.6771 156.396H18.8532V151.596H23.6771V156.396ZM17.6499 156.396H12.8262V151.596H17.6499V156.396ZM11.6193 156.396H6.79552V151.596H11.6193V156.396ZM5.58874 156.396H0.768378V151.596H5.58874V156.396ZM101.756 156.099H97.5352V151.896H101.756V156.099ZM95.7251 156.099H91.5047V151.896H95.7251V156.099ZM171.997 152.794L173.2 155.198H170.79L171.997 152.794ZM165.966 152.794L167.173 155.198H164.76L165.966 152.794ZM159.939 152.794L161.143 155.198H158.732L159.939 152.794ZM153.909 152.794L155.115 155.198H152.702L153.909 152.794ZM147.878 152.794L149.085 155.198H146.675L147.878 152.794ZM141.851 152.794L143.054 155.198H140.644L141.851 152.794ZM135.82 152.794L137.027 155.198H134.614L135.82 152.794ZM129.793 152.794L130.997 155.198H128.586L129.793 152.794ZM123.763 152.794L124.969 155.198H122.556L123.763 152.794ZM117.732 152.794L118.939 155.198H116.529L117.732 152.794ZM111.705 152.794L112.908 155.198H110.498L111.705 152.794ZM105.674 152.794L106.881 155.198H104.468L105.674 152.794ZM184.055 162.401L181.641 160.001L184.055 157.597L186.465 160.001L184.055 162.401ZM178.024 162.401L175.614 160.001L178.024 157.597L180.438 160.001L178.024 162.401ZM65.8807 162.401H61.057V157.597H65.8807V162.401ZM59.8536 162.401H55.0298V157.597H59.8536V162.401ZM53.8231 162.401H48.9993V157.597H53.8231V162.401ZM47.7959 162.401H42.9722V157.597H47.7959V162.401ZM41.7653 162.401H36.9415V157.597H41.7653V162.401ZM35.7347 162.401H30.911V157.597H35.7347V162.401ZM29.7076 162.401H24.8838V157.597H29.7076V162.401ZM23.6771 162.401H18.8532V157.597H23.6771V162.401ZM17.6499 162.401H12.8262V157.597H17.6499V162.401ZM11.6193 162.401H6.79552V157.597H11.6193V162.401ZM5.58874 162.401H0.768378V157.597H5.58874V162.401ZM101.756 162.1H97.5352V157.898H101.756V162.1ZM95.7251 162.1H91.5047V157.898H95.7251V162.1ZM171.997 158.799L173.2 161.199H170.79L171.997 158.799ZM165.966 158.799L167.173 161.199H164.76L165.966 158.799ZM159.939 158.799L161.143 161.199H158.732L159.939 158.799ZM153.909 158.799L155.115 161.199H152.702L153.909 158.799ZM147.878 158.799L149.085 161.199H146.675L147.878 158.799ZM141.851 158.799L143.054 161.199H140.644L141.851 158.799ZM135.82 158.799L137.027 161.199H134.614L135.82 158.799ZM129.793 158.799L130.997 161.199H128.586L129.793 158.799ZM123.763 158.799L124.969 161.199H122.556L123.763 158.799ZM117.732 158.799L118.939 161.199H116.529L117.732 158.799ZM111.705 158.799L112.908 161.199H110.498L111.705 158.799ZM105.674 158.799L106.881 161.199H104.468L105.674 158.799ZM184.055 168.406L181.641 166.003L184.055 163.603L186.465 166.003L184.055 168.406ZM178.024 168.406L175.614 166.003L178.024 163.603L180.438 166.003L178.024 168.406ZM65.8807 168.406H61.057V163.603H65.8807V168.406ZM59.8536 168.406H55.0298V163.603H59.8536V168.406ZM53.8231 168.406H48.9993V163.603H53.8231V168.406ZM47.7959 168.406H42.9722V163.603H47.7959V168.406ZM41.7653 168.406H36.9415V163.603H41.7653V168.406ZM35.7347 168.406H30.911V163.603H35.7347V168.406ZM29.7076 168.406H24.8838V163.603H29.7076V168.406ZM23.6771 168.406H18.8532V163.603H23.6771V168.406ZM17.6499 168.406H12.8262V163.603H17.6499V168.406ZM11.6193 168.406H6.79552V163.603H11.6193V168.406ZM5.58874 168.406H0.768378V163.603H5.58874V168.406ZM101.756 168.106H97.5352V163.903H101.756V168.106ZM171.997 164.804L173.2 167.204H170.79L171.997 164.804ZM165.966 164.804L167.173 167.204H164.76L165.966 164.804ZM159.939 164.804L161.143 167.204H158.732L159.939 164.804ZM153.909 164.804L155.115 167.204H152.702L153.909 164.804ZM147.878 164.804L149.085 167.204H146.675L147.878 164.804ZM141.851 164.804L143.054 167.204H140.644L141.851 164.804ZM135.82 164.804L137.027 167.204H134.614L135.82 164.804ZM129.793 164.804L130.997 167.204H128.586L129.793 164.804ZM123.763 164.804L124.969 167.204H122.556L123.763 164.804ZM117.732 164.804L118.939 167.204H116.529L117.732 164.804ZM111.705 164.804L112.908 167.204H110.498L111.705 164.804ZM105.674 164.804L106.881 167.204H104.468L105.674 164.804ZM184.055 174.408L181.641 172.008L184.055 169.604L186.465 172.008L184.055 174.408ZM178.024 174.408L175.614 172.008L178.024 169.604L180.438 172.008L178.024 174.408ZM65.8807 174.408H61.057V169.604H65.8807V174.408ZM59.8536 174.408H55.0298V169.604H59.8536V174.408ZM53.8231 174.408H48.9993V169.604H53.8231V174.408ZM47.7959 174.107H43.2739V169.604H47.7959V174.107ZM41.4636 174.107H37.2432V169.905H41.4636V174.107ZM35.433 174.107H31.2126V169.905H35.433V174.107ZM29.4059 174.107H25.1856V169.905H29.4059V174.107ZM23.3753 174.107H19.1549V169.905H23.3753V174.107ZM17.3482 174.107H13.1278V169.905H17.3482V174.107ZM11.3175 174.107H7.09725V169.905H11.3175V174.107ZM5.28702 174.107H1.06661V169.905H5.28702V174.107ZM101.756 174.107H97.5352V169.905H101.756V174.107ZM171.997 170.806L173.2 173.209H170.79L171.997 170.806ZM165.966 170.806L167.173 173.209H164.76L165.966 170.806ZM159.939 170.806L161.143 173.209H158.732L159.939 170.806ZM153.909 170.806L155.115 173.209H152.702L153.909 170.806ZM147.878 170.806L149.085 173.209H146.675L147.878 170.806ZM141.851 170.806L143.054 173.209H140.644L141.851 170.806ZM135.82 170.806L137.027 173.209H134.614L135.82 170.806ZM129.793 170.806L130.997 173.209H128.586L129.793 170.806ZM123.763 170.806L124.969 173.209H122.556L123.763 170.806ZM117.732 170.806L118.939 173.209H116.529L117.732 170.806ZM111.705 170.806L112.908 173.209H110.498L111.705 170.806ZM105.674 170.806L106.881 173.209H104.468L105.674 170.806ZM184.055 180.112L181.943 178.009L184.055 175.91L186.163 178.009L184.055 180.112ZM178.024 180.112L175.916 178.009L178.024 175.91L180.136 178.009L178.024 180.112ZM65.579 180.112H61.3587V175.91H65.579V180.112ZM59.552 180.112H55.3316V175.91H59.552V180.112ZM53.5213 180.112H49.3009V175.91H53.5213V180.112ZM47.4942 180.112H43.2739V175.91H47.4942V180.112ZM41.4636 180.112H37.2432V175.91H41.4636V180.112ZM35.433 180.112H31.2126V175.91H35.433V180.112ZM29.4059 180.112H25.1856V175.91H29.4059V180.112ZM23.3753 180.112H19.1549V175.91H23.3753V180.112ZM17.3482 180.112H13.1278V175.91H17.3482V180.112ZM11.3175 180.112H7.09725V175.91H11.3175V180.112ZM5.28702 180.112H1.06661V175.91H5.28702V180.112ZM171.997 177.112L172.899 178.911H171.092L171.997 177.112ZM165.966 177.112L166.871 178.911H165.061L165.966 177.112ZM159.939 177.112L160.841 178.911H159.034L159.939 177.112ZM153.909 177.112L154.814 178.911H153.004L153.909 177.112ZM147.878 177.112L148.783 178.911H146.976L147.878 177.112ZM141.851 177.112L142.753 178.911H140.946L141.851 177.112ZM135.82 177.112L136.725 178.911H134.915L135.82 177.112ZM129.793 177.112L130.695 178.911H128.888L129.793 177.112ZM123.763 177.112L124.668 178.911H122.857L123.763 177.112ZM117.732 177.112L118.637 178.911H116.83L117.732 177.112ZM111.705 177.112L112.61 178.911H110.8L111.705 177.112ZM105.674 177.112L106.579 178.911H104.769L105.674 177.112ZM184.055 186.118L181.943 184.015L184.055 181.915L186.163 184.015L184.055 186.118ZM178.024 186.118L175.916 184.015L178.024 181.915L180.136 184.015L178.024 186.118ZM65.579 186.118H61.3587V181.915H65.579V186.118ZM59.552 186.118H55.3316V181.915H59.552V186.118ZM53.5213 186.118H49.3009V181.915H53.5213V186.118ZM47.4942 186.118H43.2739V181.915H47.4942V186.118ZM41.4636 186.118H37.2432V181.915H41.4636V186.118ZM35.433 186.118H31.2126V181.915H35.433V186.118ZM29.4059 186.118H25.1856V181.915H29.4059V186.118ZM23.3753 186.118H19.1549V181.915H23.3753V186.118ZM17.3482 186.118H13.1278V181.915H17.3482V186.118ZM11.3175 186.118H7.09725V181.915H11.3175V186.118ZM5.28702 186.118H1.06661V181.915H5.28702V186.118ZM171.997 183.113L172.899 184.916H171.092L171.997 183.113ZM165.966 183.113L166.871 184.916H165.061L165.966 183.113ZM159.939 183.113L160.841 184.916H159.034L159.939 183.113ZM153.909 183.113L154.814 184.916H153.004L153.909 183.113ZM147.878 183.113L148.783 184.916H146.976L147.878 183.113ZM141.851 183.113L142.753 184.916H140.946L141.851 183.113ZM135.82 183.113L136.725 184.916H134.915L135.82 183.113ZM129.793 183.113L130.695 184.916H128.888L129.793 183.113ZM123.763 183.113L124.668 184.916H122.857L123.763 183.113ZM117.732 183.113L118.637 184.916H116.83L117.732 183.113ZM111.705 183.113L112.61 184.916H110.8L111.705 183.113ZM184.055 192.119L181.943 190.02L184.055 187.917L186.163 190.02L184.055 192.119ZM178.024 192.119L175.916 190.02L178.024 187.917L180.136 190.02L178.024 192.119ZM65.579 192.119H61.3587V187.917H65.579V192.119ZM59.552 192.119H55.3316V187.917H59.552V192.119ZM53.5213 192.119H49.3009V187.917H53.5213V192.119ZM47.4942 192.119H43.2739V187.917H47.4942V192.119ZM41.4636 192.119H37.2432V187.917H41.4636V192.119ZM35.433 192.119H31.2126V187.917H35.433V192.119ZM29.4059 192.119H25.1856V187.917H29.4059V192.119ZM23.3753 192.119H19.1549V187.917H23.3753V192.119ZM17.3482 192.119H13.1278V187.917H17.3482V192.119ZM11.3175 192.119H7.09725V187.917H11.3175V192.119ZM5.28702 192.119H1.06661V187.917H5.28702V192.119ZM171.997 189.118L172.899 190.917H171.092L171.997 189.118ZM165.966 189.118L166.871 190.917H165.061L165.966 189.118ZM159.939 189.118L160.841 190.917H159.034L159.939 189.118ZM153.909 189.118L154.814 190.917H153.004L153.909 189.118ZM147.878 189.118L148.783 190.917H146.976L147.878 189.118ZM141.851 189.118L142.753 190.917H140.946L141.851 189.118ZM135.82 189.118L136.725 190.917H134.915L135.82 189.118ZM129.793 189.118L130.695 190.917H128.888L129.793 189.118ZM123.763 189.118L124.668 190.917H122.857L123.763 189.118ZM117.732 189.118L118.637 190.917H116.83L117.732 189.118ZM111.705 189.118L112.61 190.917H110.8L111.705 189.118ZM184.055 198.124L181.943 196.021L184.055 193.922L186.163 196.021L184.055 198.124ZM178.024 198.124L175.916 196.021L178.024 193.922L180.136 196.021L178.024 198.124ZM65.579 198.124H61.3587V193.922H65.579V198.124ZM59.552 198.124H55.3316V193.922H59.552V198.124ZM53.5213 198.124H49.3009V193.922H53.5213V198.124ZM47.4942 198.124H43.2739V193.922H47.4942V198.124ZM41.4636 198.124H37.2432V193.922H41.4636V198.124ZM35.433 198.124H31.2126V193.922H35.433V198.124ZM29.4059 198.124H25.1856V193.922H29.4059V198.124ZM23.3753 198.124H19.1549V193.922H23.3753V198.124ZM17.3482 198.124H13.1278V193.922H17.3482V198.124ZM11.3175 198.124H7.09725V193.922H11.3175V198.124ZM5.28702 198.124H1.06661V193.922H5.28702V198.124ZM171.997 195.12L172.899 196.923H171.092L171.997 195.12ZM165.966 195.12L166.871 196.923H165.061L165.966 195.12ZM159.939 195.12L160.841 196.923H159.034L159.939 195.12ZM153.909 195.12L154.814 196.923H153.004L153.909 195.12ZM147.878 195.12L148.783 196.923H146.976L147.878 195.12ZM141.851 195.12L142.753 196.923H140.946L141.851 195.12ZM135.82 195.12L136.725 196.923H134.915L135.82 195.12ZM129.793 195.12L130.695 196.923H128.888L129.793 195.12ZM123.763 195.12L124.668 196.923H122.857L123.763 195.12ZM117.732 195.12L118.637 196.923H116.83L117.732 195.12ZM184.055 204.126L181.943 202.026L184.055 199.923L186.163 202.026L184.055 204.126ZM178.024 204.126L175.916 202.026L178.024 199.923L180.136 202.026L178.024 204.126ZM65.579 204.126H61.3587V199.923H65.579V204.126ZM59.552 204.126H55.3316V199.923H59.552V204.126ZM53.5213 204.126H49.3009V199.923H53.5213V204.126ZM47.4942 204.126H43.2739V199.923H47.4942V204.126ZM41.4636 204.126H37.2432V199.923H41.4636V204.126ZM35.433 204.126H31.2126V199.923H35.433V204.126ZM29.4059 204.126H25.1856V199.923H29.4059V204.126ZM23.3753 204.126H19.1549V199.923H23.3753V204.126ZM17.3482 204.126H13.1278V199.923H17.3482V204.126ZM11.3175 204.126H7.09725V199.923H11.3175V204.126ZM5.28702 204.126H1.06661V199.923H5.28702V204.126ZM171.997 201.125L172.899 202.928H171.092L171.997 201.125ZM165.966 201.125L166.871 202.928H165.061L165.966 201.125ZM159.939 201.125L160.841 202.928H159.034L159.939 201.125ZM153.909 201.125L154.814 202.928H153.004L153.909 201.125ZM147.878 201.125L148.783 202.928H146.976L147.878 201.125ZM141.851 201.125L142.753 202.928H140.946L141.851 201.125ZM135.82 201.125L136.725 202.928H134.915L135.82 201.125ZM129.793 201.125L130.695 202.928H128.888L129.793 201.125ZM123.763 201.125L124.668 202.928H122.857L123.763 201.125Z"
                      fill="black"
                    />
                  </svg>
                  <svg
                    className={`w-[2.5vw] ipadair:w-[1.5vw]`}
                    viewBox="0 0 202 222"
                    fill="none"
                    opacity={player.letters[5] === "1" ? "1" : "0.16"}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.5492 107.52C32.5769 110.629 39.2203 109.846 41.2492 102.274C42.9571 95.9002 39.1588 91.6792 31.0332 90.7853C34.7697 92.8519 34.7535 96.9052 33.8464 100.291C32.832 104.077 31.2305 106.851 26.5492 107.52ZM30.897 121.709C43.7279 126.641 52.4246 116.587 55.2542 106.027C58.1902 95.0698 56.1778 82.5757 41.8938 80.6681C50.4955 86.1761 50.015 97.5768 48.2534 104.151C46.5445 110.529 40.9931 121.64 30.897 121.709ZM69.4602 109.834C73.4633 94.8936 68.9558 78.0987 50.9636 75.6265C64.1395 80.8658 65.392 96.9995 62.456 107.957C59.5727 118.717 49.8617 132.557 36.1237 131.01C52.3419 137.704 65.5634 124.376 69.4602 109.834ZM76.461 111.709C71.2826 131.036 55.6352 142.215 41.2566 139.857C58.7837 146.477 77.847 135.358 83.6662 113.64C89.3246 92.5227 79.9759 73.7907 59.9397 70.1308C77.0154 76.8405 80.5714 96.3692 76.461 111.709ZM46.392 148.708C67.6112 156.743 90.0343 145.881 97.6679 117.392C105.248 89.103 92.3016 69.407 68.8127 65.033C90.1383 72.6705 96.5917 93.4046 90.667 115.516C84.6878 137.831 68.0797 152.596 46.392 148.708ZM51.6722 157.81C76.5493 166.61 103.373 153.727 112.075 121.252C120.722 88.9807 104.825 65.0763 77.8825 59.9914C100.062 67.6433 113.024 89.6923 105.071 119.375C97.0636 149.258 74.1605 161.912 51.6722 157.81ZM126.278 125.058C135.886 89.1973 118.099 61.1579 86.8082 54.6968C112.79 63.3674 128.204 89.0621 119.076 123.128C109.947 157.197 83.0407 171.981 56.9524 166.911C86.0828 176.639 116.562 161.318 126.278 125.058ZM140.283 128.81C151.012 88.7671 130.623 56.8272 95.7306 49.4012C126.115 59.2479 143.317 89.483 133.282 126.934C123.192 164.589 92.3775 181.955 62.0878 175.762C95.1649 186.759 129.552 168.857 140.283 128.81ZM105.002 44.4102C138.333 55.2645 158.751 88.7064 147.488 130.741C136.331 172.379 101.512 191.878 67.368 184.863C104.1 196.625 142.637 176.846 154.489 132.617C166.233 88.7878 143.548 52.6042 105.002 44.4102ZM113.925 39.1146C151.859 51.1989 173.66 89.0726 161.489 134.493C149.318 179.916 110.743 202.248 72.5009 193.71C112.983 206.695 155.776 184.635 168.695 136.423C181.666 88.0146 155.821 48.4174 113.925 39.1146ZM182.897 140.229C196.936 87.8342 168.693 44.3945 122.999 34.0706C164.583 46.922 189.188 88.7468 175.896 138.353C162.605 187.959 119.73 211.917 77.8372 202.616C121.918 216.561 168.857 192.627 182.897 140.229ZM77.7926 217.976L0.368033 197.23L53.2158 -0.000244141L130.64 20.7456C182.46 34.6306 212.69 85.8635 197.103 144.035C181.729 201.413 129.612 231.861 77.7926 217.976Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <p
                  className={`hidden px-[3vw] py-[0.2vw] text-[2.5vw] ipadair:block`}
                  style={{ fontFamily: "Rocket Thunder" }}
                >
                  {new Date(player.flag).toLocaleTimeString()}
                </p>
              </div>
            ))}
        </div>
      )}

      {/* <div
        id="uploadContainer"
        className={`relative mt-[-5vw] flex flex-col items-center justify-center overflow-x-hidden rounded-t-[4vw] border-[1.75vw] border-black bg-[#FAE00D] pb-[5vw] pt-[3vw] ipadair:mt-[-2vw] ipadair:flex-row ipadair:rounded-t-[2vw] ipadair:border-[0.75vw]`}
      >
        <div
          className={`absolute inset-0 bg-[url('/assets/Game/maze_white_one.webp')] bg-cover bg-center bg-no-repeat`}
        ></div>
        <div className={`flex`}>
          <p
            className={`relative w-[42.5vw] text-[15.25vw] leading-[18.5vw] tracking-wider text-black ipadair:text-[6.25vw] ipadair:leading-[7.5vw]`}
            style={{ fontFamily: "Rocket Thunder" }}
          >
            UPL<span className={`text-[#E1067B]`}>O</span>AD<br></br>Y
            <span className={`text-[#E1067B]`}>O</span>UR SH
            <span className={`text-[#E1067B]`}>O</span>TS!
          </p>
          <svg
            className={`me-[-15vw] ms-[5vw] w-[45vw] rotate-90 ipadair:me-0 ipadair:ms-0 ipadair:w-[16vw] ipadair:rotate-0`}
            viewBox="0 0 323 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.666667 15C0.666667 22.3638 6.6362 28.3333 14 28.3333C21.3638 28.3333 27.3333 22.3638 27.3333 15C27.3333 7.6362 21.3638 1.66667 14 1.66667C6.6362 1.66667 0.666667 7.6362 0.666667 15ZM322.018 15L297.018 0.566243V29.4338L322.018 15ZM14 17.5H299.518V12.5H14V17.5Z"
              fill="black"
            />
          </svg>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            setUploadPopup(true);
          }}
          className={`relative my-[8vw] ms-[3vw] rounded-[15vw] border-[0.6vw] border-black bg-[#F8DB59] px-[1.5vw] py-[1vw] shadow-[0px_1.2vw_0px_#E1067B] transition-all duration-200 hover:scale-[1.1] ipadair:my-0 ipadair:rounded-[3vw] ipadair:border-[0.3vw] ipadair:px-[1vw] ipadair:py-[0.5vw] ipadair:shadow-[0px_0.4vw_0px_#E1067B]`}
        >
          <div
            className={`flex items-center justify-center gap-[4vw] ipadair:gap-[2vw]`}
          >
            <svg
              className={`w-[13.7vw] ipadair:w-[4.7vw]`}
              viewBox="0 0 93 94"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="92.6897"
                height="92.6897"
                rx="46.3448"
                transform="matrix(1 0 0 -1 0.310547 93.5518)"
                fill="black"
              />
              <path
                d="M71.7567 50.5526C74.3314 49.0661 74.3314 45.3498 71.7567 43.8633L36.9981 23.7954C34.4234 22.3089 31.205 24.167 31.205 27.14V67.2758C31.205 70.2489 34.4234 72.107 36.9981 70.6205L71.7567 50.5526Z"
                fill="#EEFCFE"
              />
            </svg>
            <p
              className={`hover me-[4vw] text-[6.135vw] text-black transition-all duration-200 ipadair:me-[2vw] ipadair:text-[2.135vw]`}
              style={{ fontFamily: "Mochiy Pop P One" }}
            >
              UPLOAD
            </p>
          </div>
        </button>
      </div> */}

      <div
        className={`relative mt-[-5vw] flex items-center overflow-x-hidden rounded-t-[4vw] border-[1.75vw] border-black bg-[#001E30] py-[8vw] ipadair:mt-[-2vw] ipadair:rounded-t-[2vw] ipadair:border-[0.75vw] ipadair:py-0`}
      >
        <div className={`relative w-[35vw] ipadair:w-[20vw]`}>
          <Image
            src="/assets/Game/brutalist_three.webp"
            layout="responsive"
            width={100}
            height={100}
            alt="logo"
            unoptimized
          />
        </div>
        <p
          className={
            `w-full text-center text-[8.333vw] leading-[8.333vw] text-white ipadair:text-[3.333vw] ` +
            styles.dashboardText
          }
          style={{ fontFamily: "Rocket Thunder" }}
        >
          Go to user dashboard
        </p>
        <Link href="/Dashboard">
          <button
            className={`me-[4vw] rounded-full bg-[#FAE00D] px-[0.5vw] py-[2.5vw] ipadair:me-[10vw] ipadair:py-[1.5vw]`}
          >
            <svg
              className={`w-[13vw] ipadair:w-[7vw]`}
              viewBox="0 0 136 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M132.895 45.9987C134.35 46.9363 134.35 49.0637 132.895 50.0013L75.1708 87.2035C73.5864 88.2246 71.5 87.0871 71.5 85.2021V10.7979C71.5 8.9129 73.5864 7.77541 75.1708 8.79654L132.895 45.9987Z"
                fill="black"
              />
              <path
                d="M96.2347 45.8333C97.8724 46.7395 97.8724 49.0939 96.2347 50L28.5336 87.4586C26.9467 88.3366 25 87.1889 25 85.3753V10.4581C25 8.64447 26.9467 7.49673 28.5336 8.37476L96.2347 45.8333Z"
                fill="black"
              />
            </svg>
          </button>
        </Link>
      </div>
      {/* <div className='flex flex-col items-center justify-center text-[#ffffff]'>
        <div className="flex flex-row items-center justify-center">
          <h1 className="text-md xl:text-2xl" style={{ fontFamily: "Rocket Thunder" }}>PHOTOS APPROVED</h1>
        </div>
      </div> */}
      {<ApprovedPhotos />}
    </div>
  );
};

export default GameMobileView;
