"use client"; // Add this at the top to mark the file as a Client Component

import { useState } from "react";
const HiddenQuest = () => {
  const [isVisible, setIsVisible] = useState(false); // State for visibility

  const handleOpen = () => {
    setIsVisible(true); // Show HiddenQuest component
  };

  const handleScrollToNext = () => {
    const secondDiv = document.getElementById("secondDiv");
    if (secondDiv) {
      secondDiv.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to second div
    }
  };

  return (
    <div className="scrollbar-hide relative mx-auto mt-40 box-border h-[50vh] w-[80vw] overflow-y-auto shadow-gray-600">
      {!isVisible && (
        <div className="fixed left-1/2 top-1/2 rounded-md" onClick={handleOpen}>
          <img
            src="/assets/HiddenQuest&Button/yellowBox.png"
            className="scale-125 cursor-pointer"
            alt="HiddenQuest"
          />
        </div>
      )}
      {isVisible && (
        <div className="fixed left-32 top-[9.1rem] z-[4] h-4 w-4 bg-yellow-500"></div>
      )}
      {isVisible && (
        <div className="fixed right-32 top-[9.1rem] z-[2] h-4 w-4 bg-yellow-500"></div>
      )}

      {isVisible && (
        <div className="fixed bottom-52 left-32 z-[2] h-4 w-4 bg-yellow-500"></div>
      )}

      {isVisible && (
        <div className="fixed bottom-52 right-32 z-[2] h-4 w-4 bg-yellow-500"></div>
      )}

      {isVisible && (
        <div className="box-border h-[100vh] w-full bg-black">
          <div className="relative box-border h-[50vh] w-full overflow-hidden bg-gray-100 bg-[url('/assets/HiddenQuest&Button/bgImage.gif')] bg-[length:100%_100%]">
            <div className="fixed right-32 top-36 z-[3] box-border h-[20%] w-[8%]">
              <img
                src="/assets/HiddenQuest&Button/newCross.gif"
                className="h-[60%] w-[60%] mt-4 ml-8 cursor-pointer"
                onClick={() => setIsVisible(false)}
              ></img>
            </div>

            <div className="absolute left-[25%] top-[18%] box-border flex h-[20vh] w-[50vw] flex-col items-center justify-center gap-3">
              <h1 className="decoration-skip-ink-none text-left font-ahsing text-[500%] font-[400] text-white">
                Hidden Quest
              </h1>
              <p className="text-left font-ahsing text-[38.22px] font-normal leading-[48.22px] text-white">
                find <span className="text-yellow-500">INCAND</span>ESCENCE
              </p>
            </div>
            <div className="absolute bottom-0 right-0 box-border flex h-[30%] w-[18%] flex-col items-center justify-center text-left">
              <p className="text-left font-ahsing text-[22.22px] font-normal leading-tight text-white">
                Scroll to
              </p>
              <p className="text-left font-ahsing text-[22.22px] font-normal leading-tight text-white">
                know more
              </p>
            </div>
            <button
              className="absolute bottom-0 left-[40%] h-[30%] w-[30%]"
              onClick={handleScrollToNext}
            >
              <div className="group relative flex h-[100%] w-[100%] flex-row justify-between">
                <img
                  src="/assets/HiddenQuest&Button/mainStar.png"
                  className="absolute bottom-7 left-[40%] inline-block h-[70%] w-[30%] transition-all duration-300 group-hover:bottom-0"
                />
                <img
                  src="/assets/HiddenQuest&Button/mainStar.png"
                  className="absolute -bottom-7 left-0 h-[70%] w-[30%] transition-all duration-300 group-hover:bottom-0"
                />
                <img
                  src="/assets/HiddenQuest&Button/mainStar.png"
                  className="absolute -bottom-7 right-0 h-[70%] w-[30%] transition-all duration-300 group-hover:bottom-0"
                />
              </div>
            </button>
          </div>

          <div
            id="secondDiv"
            className="relative box-border h-[50vh] w-full overflow-hidden"
          >
            <img
              src="/assets/HiddenQuest&Button/image1.png"
              className="absolute -left-[10%] -top-[40%] h-[full] w-[40%] rotate-[220.26deg]"
            />

            <img
              src="/assets/HiddenQuest&Button/image1.png"
              className="absolute -right-[10%] -top-[45%] h-[full] w-[40%] -rotate-[220.26deg]"
            />
            <img
              src="/assets/HiddenQuest&Button/Gif.gif"
              className="absolute -top-[7%] left-[35%] h-[full] w-[30%]"
            />

            <div className="absolute left-[40%] top-[15%] h-[10vh] w-[40vw]">
              <h1 className="text-left font-ahsing text-[54px] font-normal leading-[64px] text-white">
                How it works ?
              </h1>
            </div>
            <div className="absolute bottom-0 left-[8%] h-[30vh] w-[20vw] gap-3">
              <div className="box-border text-black h-[22%] w-[40%] rounded-sm border-2 border-black bg-yellow-400 p-2 font-tusker text-xl font-extrabold leading-[28.87px] shadow-custom-white">
                Step 01
              </div>
              <p className="mt-4 text-left font-bricolage text-[14px] leading-tight tracking-wider text-[#D3D3D3]">
                Register in various <br />
                events to get a letter <br />
                from the word
              </p>
              <img
                src="/assets/HiddenQuest&Button/star.png"
                className="ml-[20%] mt-[5%] inline-block h-[8%] w-[8%] mb-3"
              />
              <img
                src="/assets/HiddenQuest&Button/incand.png"
                className="-mt-4 block h-[20%] w-[60%]"
              />
            </div>
            <div className="absolute -bottom-[8%] left-[40%] h-[25vh] w-[20vw]">
              <div className="mx-auto text-black box-border h-[22%] w-[40%] rounded-sm border-2 border-black bg-yellow-400 p-2 font-tusker text-xl font-extrabold leading-[28.87px] shadow-custom-white">
                Step 02
              </div>

              <p className="mt-4 text-center font-bricolage text-[14px] leading-tight tracking-wider text-[#D3D3D3]">
                Share with your friends or <br />
                request them to collect all six <br />
                letters of the fest!
              </p>
            </div>
            <div className="absolute bottom-0 right-[8%] h-[30vh] w-[20vw]">
              <div className="mx-[57%]  text-black box-border h-[22%] w-[40%] rounded-sm border-2 border-black bg-yellow-400 p-2 font-tusker text-xl font-extrabold leading-[28.87px] shadow-custom-white">
                Step 03
              </div>

              <p className="mt-4 text-right font-bricolage text-[14px] leading-tight tracking-wider text-[#D3D3D3]">
                Win exciting gifts <br /> and be on the <br />
                winning dashboard
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HiddenQuest;