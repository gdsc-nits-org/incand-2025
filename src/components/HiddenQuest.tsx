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
            className="scale-50 cursor-pointer"
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
        <div className="fixed bottom-48 left-32 z-[2] h-4 w-4 bg-yellow-500"></div>
      )}

      {isVisible && (
        <div className="fixed bottom-48 right-32 z-[2] h-4 w-4 bg-yellow-500"></div>
      )}

      {isVisible && (
        <div className="box-border h-[100vh] w-full bg-black">
          <div className="relative box-border h-[50vh] w-full overflow-hidden bg-gray-100 bg-[url('/assets/HiddenQuest&Button/bgImage.gif')] bg-[length:100%_100%] border-8 border-black">
            <div className="fixed right-32 top-36 z-[3] box-border h-[20%] w-[8%]">
              <img
                src="/assets/HiddenQuest&Button/newCross.gif"
                className="h-[60%] w-[60%] mt-4 ml-8 cursor-pointer"
                onClick={() => setIsVisible(false)}
              ></img>
            </div>
            <div className="flex w-full items-center justify-between h-[100%] ">
              <img src="/assets/HiddenQuest&Button/Hidden.png" className="w-[5%] h-[60%] mt-4 ml-4" />
              <div className="flex flex-col items-center justify-center w-[70%] h-[100%]">
                <h1 className="text-white font-ahsing text-5xl  text-left w-[100%]">
                  Dive into
                </h1>
                <p className="text-black font-ahsing text-[5.5rem] text-left w-[100%] -translate-y-6">
                  Luminis Lookout
                </p>
              </div>
              <img src="/assets/HiddenQuest&Button/Quest.png" className="w-[5%] h-[60%] mt-4 mr-4" />
            </div>

            <button
              className="absolute bottom-0 left-[40%] h-[30%] w-[30%]"
              onClick={handleScrollToNext}
            >
              <div className="group relative flex h-[100%] w-[100%] flex-row justify-center items-center">
                <img
                  src="/assets/HiddenQuest&Button/arrow_yellow.gif"
                  className="h-[100%] w-[100%] object-cover"
                />
                <span className="text-black font-tusker2 r text-xl lg:text-3xl text-nowrap">Scroll Up</span>
                <img
                  src="/assets/HiddenQuest&Button/arrow_yellow.gif"
                  className="h-[100%] w-[100%] object-cover"
                />
              </div>
            </button>
          </div>

          <div
            id="secondDiv"
            className="relative box-border h-[50vh] w-full overflow-hidden flex flex-col lg:flex-row items-center justify-between border-8 border-black"
          >
            <div className="lg:w-[15%] h-full overflow-hidden">
              <img
                src="/assets/HiddenQuest&Button/door.gif"
                className="h-full w-[200%]"
              />
            </div>
            <div className="flex flex-col items-center justify-center w-[70%] h-[100%]">
              <div className="font-ahsing text-[#FAE00D] text-lg md:text-3xl xl:text-5xl w-full text-left ml-14 text-nowrap">
                “Pictures narrate a story,”<span className="text-white font-tusker2 text-sm"> they say</span>
              </div>
              <div className="flex flex-col lg:flex-row items-center justify-center w-full h-[80%]">
                <p className="text-sm font-tusker2 font-medium text-white mb-4 leading-8 w-[100%] lg:w-[40%] tracking-widest">
                  Tell us your story, and if our stars align, together we might just
                  weave another.
                  <br />Where, when and what you ask?
                  <br />Patience has always been key,
                  <br />just stay curious!
                </p>
                <img
                  src="/assets/HiddenQuest&Button/Gif.gif"
                  className="h-[80%] w-[40%] object-cover scale-75"
                />
              </div>
            </div>
            <div className="w-[15%] h-full overflow-hidden">
              <img
                src="/assets/HiddenQuest&Button/door.gif"
                className="h-full w-[200%]"
              />
            </div>
          </div>

          <div
            id="thirdDiv"
            className="relative box-border h-[50vh] w-full overflow-hidden flex flex-col lg:flex-row items-center justify-between bg-black border-8 border-gray-700"
          >
            <img
              src="/assets/HiddenQuest&Button/mummy.gif"
              className="h-[100%] w-[30%] object-cover scale-x-[-1]"
            />
            <div className="flex flex-col items-center justify-center w-[100%] h-[100%] gap-0">
              <img
                src = "/assets/HiddenQuest&Button/sand.gif"
                className="h-[60%]"
                />
              <span className="text-5xl font-ahsing text-white text-center">Stay 
                <br/>Tuned</span>  
              </div>
            <img
              src="/assets/HiddenQuest&Button/mummy.gif"
              className="h-[100%] w-[30%] object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HiddenQuest;