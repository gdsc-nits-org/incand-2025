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
    <>
      {!isVisible && (
        <div
          className="fixed left-1/2 top-1/2 h-[24px] w-[24px] rounded-md"
          onClick={handleOpen}
        >
          <img
            src="/assets/HiddenQuest&Button/yellowBox.png"
            className="scale-50 cursor-pointer"
            alt="HiddenQuest"
          />
        </div>
      )}

      {isVisible && (
        <div className="fixed left-36 top-48 box-border h-[50vh] w-[80vw] bg-green-600 shadow-gray-600">
          <div className="absolute -left-2 -top-2 z-[4] h-4 w-4 bg-yellow-500 border-2 border-black"></div>

          <div className="absolute -right-2 -top-2 z-[2] h-4 w-4 bg-yellow-500 border-2 border-black"></div>

          <div className="absolute -bottom-1 -left-2 z-[2] h-4 w-4 bg-yellow-500 border-2 border-black"></div>

          <div className="absolute -bottom-1 -right-2 z-[2] h-4 w-4 bg-yellow-500 border-2 border-black"></div>
          <div className="absolute right-0 top-0 z-[3] box-border h-[25%] w-[12%]">
            <img
              src="/assets/HiddenQuest&Button/newCross.gif"
              className="ml-8 mt-4 h-[60%] w-[60%] cursor-pointer"
              onClick={() => setIsVisible(false)}
            ></img>
          </div>

          <div className="scrollbar-hide relative box-border h-[50vh] w-full overflow-y-auto bg-black">
            <div
              id="firstDiv"
              className="relative box-border h-[50vh] w-[98%] overflow-hidden border-8 border-black bg-gray-100 bg-[url('/assets/HiddenQuest&Button/bgImage.gif')] bg-[length:100%_100%]"
            >
              <div className="flex h-[100%] w-full items-center justify-between">
                <img
                  src="/assets/HiddenQuest&Button/Hidden.png"
                  className="ml-4 mt-4 h-[60%] w-[5%]"
                />
                <div className="flex h-[100%] w-[70%] flex-col items-center justify-center">
                  <h1 className="w-[100%] text-left font-ahsing text-3xl lg:text-5xl text-white">
                    Dive into
                  </h1>
                  <p className="w-[100%] -translate-y-6 text-left font-ahsing text-[3.25rem] lg:[4rem] xL:text-[5.5rem] text-black">
                    Luminis Lookout
                  </p>
                </div>
                <img
                  src="/assets/HiddenQuest&Button/Quest.png"
                  className="mr-4 mt-4 h-[60%] w-[5%]"
                />
              </div>
              <button
                className="absolute bottom-0 left-[40%] h-[30%] w-[30%]"
                onClick={handleScrollToNext}
              >
                <div className="group relative flex h-[100%] w-[100%] flex-row items-center justify-center">
                  <img
                    src="/assets/HiddenQuest&Button/arrow_yellow.gif"
                    className="h-[100%] w-[100%] object-cover"
                  />
                  <span className="r text-nowrap font-tusker2 text-xl text-black lg:text-3xl">
                    Scroll Up
                  </span>
                  <img
                    src="/assets/HiddenQuest&Button/arrow_yellow.gif"
                    className="h-[100%] w-[100%] object-cover"
                  />
                </div>
              </button>
            </div>

            <div
              id="secondDiv"
              className="relative box-border flex h-[50vh] w-full  items-center justify-between overflow-hidden border-8 border-black flex-row"
            >
              <div className="h-full overflow-hidden w-[15%]">
                <img
                  src="/assets/HiddenQuest&Button/door.gif"
                  className="h-full w-[200%]"
                />
              </div>
              <div className="flex h-[100%] w-[70%] flex-col items-center justify-center">
                <div className="ml-14 w-full text-wrap text-left font-ahsing text-lg text-[#FAE00D] md:text-3xl xL:text-5xl">
                  “Pictures narrate a story,”
                  <span className="font-tusker2 text-sm text-white">
                    {" "}
                    they say
                  </span>
                </div>
                <div className="flex h-[80%] w-full  items-center justify-center flex-row">
                  <p className="mb-4  font-tusker2 text-sm font-medium leading-6 lg:leading-8 tracking-wide lg:tracking-widest text-white w-[40%]">
                    Tell us your story, and if our stars align, together we
                    might just weave another.
                    <br />
                    Where, when and what you ask?
                    <br />
                    Patience has always been key,
                    <br />
                    just stay curious!
                  </p>
                  <img
                    src="/assets/HiddenQuest&Button/Gif.gif"
                    className="h-[80%] w-[40%] scale-75 object-cover"
                  />
                </div>
              </div>
              <div className="h-full w-[15%] overflow-hidden">
                <img
                  src="/assets/HiddenQuest&Button/door.gif"
                  className="h-full w-[200%]"
                />
              </div>
            </div>
            <div
              id="thirdDiv"
              className="relative box-border flex h-[50vh] w-full  items-center justify-between overflow-hidden border-8 border-gray-700 bg-black flex-row"
            >
              <img
                src="/assets/HiddenQuest&Button/mummy.gif"
                className="h-[100%] w-[30%] scale-x-[-1] object-cover"
              />
              <div className="flex h-[100%] w-[100%] flex-col items-center justify-center gap-0">
                <img
                  src="/assets/HiddenQuest&Button/sand.gif"
                  className="h-[60%]"
                />
                <span className="text-center font-ahsing text-5xl text-white">
                  Stay
                  <br />
                  Tuned
                </span>
              </div>
              <img
                src="/assets/HiddenQuest&Button/mummy.gif"
                className="h-[100%] w-[30%] object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HiddenQuest;
