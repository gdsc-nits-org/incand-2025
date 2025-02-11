"use client";

import Image from "next/image";
import { useState } from "react";

const Thundermarch = () => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setHover(!hover)}
      className="relative flex h-full w-full items-center justify-center overflow-hidden mobile3:py-6"
    >
      <div
        style={{ transform: hover ? "translateY(0vh)" : "translateY(20vh)" }}
        className="absolute top-0 z-30 flex h-full w-full items-start justify-center transition-all duration-500 ease-linear"
      >
        <Image
          className="h-auto w-[60%]"
          src="/assets/events/thundermerchgif.gif"
          width={500}
          height={100}
          alt="gif"
        ></Image>
      </div>
      <h1 className="flex select-none items-center font-tusker2 text-4xl tracking-widest mobile3:text-7xl ipadair:text-6xl 4k:text-[10rem]">
        <span className="font-bold text-white drop-shadow-[4px_4px_0px_black]">
          TH
        </span>
        <span>
          <svg
            className="scale-50 mobile3:scale-90 ipadair:scale-75 4k:mx-8 4k:scale-[2]"
            width="40"
            height="104"
            viewBox="0 0 40 104"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_2229_96)">
              <path
                d="M2 49.7019L24.6909 2L15.9636 39.5652H34L7.23636 98L17.7091 49.7019H2Z"
                fill="#FFCD28"
              />
              <path
                d="M1.09696 49.2723C0.949586 49.5821 0.971326 49.9459 1.15455 50.2359C1.33778 50.526 1.65692 50.7019 2 50.7019H16.469L6.25907 97.7881C6.15088 98.2871 6.43595 98.7874 6.92036 98.9488C7.40477 99.1101 7.93293 98.8806 8.14554 98.4164L34.9092 39.9816C35.051 39.6721 35.0255 39.3116 34.8415 39.025C34.6576 38.7385 34.3405 38.5652 34 38.5652H17.2226L25.665 2.2263C25.7805 1.72893 25.5028 1.22439 25.0208 1.05596C24.5387 0.887541 24.0072 1.10933 23.7879 1.57044L1.09696 49.2723Z"
                stroke="#FFCD28"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1.09696 49.2723C0.949586 49.5821 0.971326 49.9459 1.15455 50.2359C1.33778 50.526 1.65692 50.7019 2 50.7019H16.469L6.25907 97.7881C6.15088 98.2871 6.43595 98.7874 6.92036 98.9488C7.40477 99.1101 7.93293 98.8806 8.14554 98.4164L34.9092 39.9816C35.051 39.6721 35.0255 39.3116 34.8415 39.025C34.6576 38.7385 34.3405 38.5652 34 38.5652H17.2226L25.665 2.2263C25.7805 1.72893 25.5028 1.22439 25.0208 1.05596C24.5387 0.887541 24.0072 1.10933 23.7879 1.57044L1.09696 49.2723Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_2229_96"
                x="0"
                y="-0.000350952"
                width="40"
                height="104.001"
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
                <feOffset dx="4" dy="4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2229_96"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2229_96"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </span>
        <span className="font-bold text-white drop-shadow-[4px_4px_0px_black]">
          NDERMARCH
        </span>
      </h1>
    </div>
  );
};
export default Thundermarch;
