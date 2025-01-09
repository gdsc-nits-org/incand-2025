"use client"; // Add this at the top to mark the file as a Client Component

import { useState } from "react";
const HiddenQuestMobile = () => {
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
          className="w-[14px]rounded-md fixed left-1/2 top-1/2 h-[14px]"
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
        <div
          className={`fixed inset-0 z-[10004] flex animate-grow items-center justify-center ${isVisible ? "bg-black/15 backdrop-blur-sm" : ""}`}
        >
          {isVisible && (
            <div className="scrollbar-hide fixed left-0 top-0 z-[10004] box-border h-screen w-full scale-75 overflow-y-auto p-4">
              {/* <img  src="/assets/HiddenQuest&Button/Rectangle.png"className="absolute -left-4 -top-4 z-[4] h-14 w-14 "/> */}
              <div className="absolute right-5 top-2 z-[4] h-4 w-4 border-2 border-black bg-yellow-500 xs:right-8"></div>
              <div className="absolute left-2 top-2 z-[4] h-4 w-4 border-2 border-black bg-yellow-500"></div>

              <div className="md-height:bottom-6 absolute bottom-4 left-2 z-[4] h-4 w-4 border-2 border-black bg-yellow-500"></div>
              <div className="md-height:bottom-6 absolute bottom-4 right-5 z-[4] h-4 w-4 border-2 border-black bg-yellow-500 xs:right-8"></div>

              <div
                id="container"
                className="scrollbar-hide relative box-border h-[98%] w-[98%] overflow-y-auto"
              >
                <div
                  id="firstDiv"
                  className="relative box-border h-[100%] w-[98%] overflow-hidden bg-[url('/assets/HiddenQuest&Button/bgImage.gif')] bg-[length:100%_100%]"
                >
                  <div className="fixed right-6 z-[3] box-border h-[20%] w-[15%]">
                    <img
                      src="/assets/HiddenQuest&Button/newCross.gif"
                      className="ml-4 mt-4 h-[60%] w-[60%] cursor-pointer"
                      onClick={() => setIsVisible(false)}
                    ></img>
                  </div>
                  <div className="w-[70%} mx-auto mt-14 flex h-[30%] flex-col justify-center">
                    <img
                      src="/assets/HiddenQuest&Button/HiddenMobile.png"
                      className="ml-14 h-[30%] w-[55%]"
                    />
                    <img
                      src="/assets/HiddenQuest&Button/QuestMobile.png"
                      className="ml-24 mt-6 h-[30%] w-[55%]"
                    />
                    {/* <h1 className="font-tusker2 text-[#FAE00D] shadow-text-shadow text-[36px] font-medium leading-[52.38px] tracking-[0.24em] ">Hidden</h1>
                 <h1>Quest</h1> */}
                  </div>
                  <div className="mx-auto my-auto flex h-[30%] w-[80%] flex-col items-center gap-8">
                    <p className="mx-auto font-ahsing text-[28.49px] font-normal leading-[20.49px] tracking-[0.04em] text-white">
                      Dive Into
                    </p>
                    <p className="text-center font-ahsing text-[52.5px] font-normal leading-[52.5px] tracking-[0.04em] sm:text-[62.5px] sm:leading-[62.5px]">
                      Luminis
                      <br />
                      Lookout
                    </p>
                  </div>

                  <button
                    className="absolute bottom-0 left-9 box-border h-[20%] w-[80%]"
                    onClick={handleScrollToNext}
                  >
                    <div className="group relative m-auto flex h-[100%] w-[100%] flex-row items-center justify-center">
                      <img
                        src="/assets/HiddenQuest&Button/arrow_yellow.gif"
                        className="h-[100%] w-[30%] scale-50 object-cover"
                      />
                      <span className="r text-nowrap font-tusker2 text-xl text-white lg:text-3xl">
                        Scroll Up
                      </span>
                      <img
                        src="/assets/HiddenQuest&Button/arrow_yellow.gif"
                        className="h-[100%] w-[30%] scale-50 object-cover"
                      />
                    </div>
                  </button>
                </div>

                <div
                  id="secondDiv"
                  className="relative box-border h-[100%] w-[98%] overflow-hidden bg-black px-2 pt-8"
                >
                  <div className="h-[10%] w-[100%] overflow-hidden">
                    <img
                      src="/assets/HiddenQuest&Button/door.gif"
                      className="h-[100%] w-[100%]"
                    />
                  </div>
                  <div className="my-auto -mb-6 flex h-[72%] w-[100%] flex-col items-center justify-center overflow-hidden">
                    <div className="mx-auto w-full text-wrap text-center font-ahsing text-lg tracking-wide text-[#FAE00D] xs:text-xl xs:tracking-wider">
                      “Pictures narrate a story,”
                      <span className="font-tusker2 text-sm text-white">
                        {" "}
                        they say
                      </span>
                    </div>
                    <div className="flex h-[80%] w-full flex-col items-center justify-center">
                      <p className="xs:text-md mb-4 w-[100%] text-center font-tusker2 text-sm font-medium leading-[1.75rem] tracking-normal text-white xs:leading-8 xs:tracking-wider">
                        Tell us your story, and if our stars align, together{" "}
                        <br /> we might just weave another.Where, when and{" "}
                        <br /> what you ask? Patience has always been key,
                        <br />
                        just stay curious!
                      </p>
                      <div className="box-border flex h-[50%] w-[80%] flex-col items-center justify-center">
                        <img
                          src="/assets/HiddenQuest&Button/Gif.gif"
                          className="h-auto max-w-full scale-50"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-6 h-[10%] w-[100%] overflow-hidden pr-4">
                    <img
                      src="/assets/HiddenQuest&Button/door.gif"
                      className="h-[100%] w-[100%]"
                    />
                  </div>
                </div>

                <div
                  id="thirdDiv"
                  className="box-border flex h-[100%] w-[98%] flex-col items-center justify-center bg-black px-2 pt-8"
                >
                  <div className="box-border flex h-[60%] w-[100%] flex-col items-center justify-center overflow-hidden bg-[url('/assets/HiddenQuest&Button/Rounded.gif')] bg-[length:100%_100%]">
                    <p className="text-center font-ahsing text-[42.08px] font-normal leading-[30.08px] tracking-widest text-white">
                      Stay
                      <br />
                      Tuned
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default HiddenQuestMobile;