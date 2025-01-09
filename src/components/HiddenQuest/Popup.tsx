
import React from "react";
import { useState, useEffect } from "react";

interface PopupProps {
    isVisible: boolean;
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}


const Popup: React.FC<PopupProps> = ({ isVisible, setIsVisible }) => {
  

    const [isMobile, setIsMobile] = useState(false);
      useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
        };
    
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

      return isMobile ? <HiddenQuestMobile isVisible={isVisible} setIsVisible={setIsVisible} /> : <HiddenQuestDesktop isVisible={isVisible} setIsVisible={setIsVisible}  />
}

export const HiddenQuestDesktop: React.FC<PopupProps> = ({isVisible,setIsVisible}) =>{
    const handleScrollToNext = () => {
        const secondDiv = document.getElementById("secondDiv");
        if (secondDiv) {
            secondDiv.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to second div
        }
    };

    const [animation,setAnimation]=useState('animate-grow');
    return (
        <>
        {isVisible && (<div
            className={`fixed inset-0 z-[10004] flex items-center ${animation} justify-center 
      ${isVisible ? 'bg-black/15 backdrop-blur-sm' : ''}`}
        >


            {isVisible && (
                <div className="fixed box-border h-[50vh] w-[80vw] bg-green-600 shadow-gray-600  ">
                    <div className="absolute -left-2 -top-2 z-[4] h-4 w-4 bg-yellow-500 border-2 border-black"></div>

                    <div className="absolute -right-2 -top-2 z-[2] h-4 w-4 bg-yellow-500 border-2 border-black"></div>

                    <div className="absolute -bottom-1 -left-2 z-[2] h-4 w-4 bg-yellow-500 border-2 border-black"></div>

                    <div className="absolute -bottom-1 -right-2 z-[2] h-4 w-4 bg-yellow-500 border-2 border-black"></div>
                    <div className="absolute right-0 top-0 z-[3] box-border h-[25%] w-[12%]">
                        <img
                            src="/assets/HiddenQuest&Button/newCross.gif"
                            className="ml-8 mt-4 h-[60%] w-[60%] cursor-pointer"
                            onClick={() =>{
                                setAnimation('animate-screw');
                                setTimeout(()=>{setIsVisible(false);setAnimation('animate-grow')},400)}}
                        ></img>
                    </div>

                    <div
                        style={{
                            overflowY: 'scroll',
                            msOverflowStyle: 'none', // IE 10+
                            scrollbarWidth: 'none', // Firefox
                        }}
                        className="relative box-border h-[50vh] w-full bg-black"
                    >
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
        </div>)}
    </>
    );
 }

 export const HiddenQuestMobile: React.FC<PopupProps> = ({isVisible,setIsVisible}) =>{
    const handleScrollToNext = () => {
        const secondDiv = document.getElementById("secondDiv");
        if (secondDiv) {
            secondDiv.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to second div
        }
    };
    const [animation,setAnimation]=useState('animate-grow');
    return (
        <>
        {isVisible && (<div
        className={`fixed inset-0 z-[10004] flex items-center ${animation} justify-center 
          ${isVisible ? 'bg-black/15 backdrop-blur-sm' : ''}`}
      > 

      {isVisible && (
        <div className="scrollbar-hide fixed left-0 top-0 z-[10004] translate-y-4 box-border h-screen w-full scale-75  overflow-y-auto p-4">
          {/* <img  src="/assets/HiddenQuest&Button/Rectangle.png"className="absolute -left-4 -top-4 z-[4] h-14 w-14 "/> */}
          <div className="absolute right-5 xs:right-8 top-2 z-[4] h-4 w-4 bg-yellow-500 border-2 border-black"></div>
          <div className="absolute left-2 top-2 z-[4] h-4 w-4 bg-yellow-500 border-2 border-black"></div>

          <div className="absolute bottom-4 md-height:bottom-6 left-2 z-[4] h-4 w-4 bg-yellow-500 border-2 border-black"></div>
          <div className="absolute bottom-4 md-height:bottom-6 right-5 xs:right-8 z-[4] h-4 w-4 bg-yellow-500 border-2 border-black"></div>

          <div
            id="container"
            className="scrollbar-hide relative box-border h-[98%] w-[98%] overflow-y-auto"
          >
            <div
              id="firstDiv"
              className="relative box-border h-[100%] w-[98%] overflow-hidden bg-[url('/assets/HiddenQuest&Button/bgImage.gif')] bg-[length:100%_100%]"
            >
              <div className="fixed right-8 z-[3] box-border h-[20%] w-[15%]">
                <img
                  src="/assets/HiddenQuest&Button/newCross.gif"
                  className="ml-4 mt-4 h-[60%] w-[100%] cursor-pointer"
                  onClick={() =>{
                    setAnimation('animate-screw');
                    setTimeout(()=>{setIsVisible(false);setAnimation('animate-grow')},400)}}
                ></img>
              </div>
              <div className="w-[70%} mt-14 mx-auto flex h-[30%] flex-col justify-center">
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
              <div className=" my-auto mx-auto flex h-[30%] w-[80%] flex-col items-center gap-8">
                <p className="mx-auto font-ahsing text-[28.49px] font-normal leading-[20.49px] tracking-[0.04em] text-white">
                  Dive Into
                </p>
                <p className="text-center font-ahsing text-[52.5px] sm:text-[62.5px] font-normal leading-[52.5px] sm:leading-[62.5px] tracking-[0.04em]">
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
              className="relative box-border h-[100%] w-[98%] bg-black px-2 pt-8 overflow-hidden"
            >
              <div className="h-[10%] w-[100%] overflow-hidden">
                <img
                  src="/assets/HiddenQuest&Button/door.gif"
                  className="h-[100%] w-[100%]"
                />
              </div>
              <div className="-mb-6 my-auto flex h-[72%] w-[100%] flex-col items-center justify-center overflow-hidden">
                <div className="mx-auto w-full text-wrap text-center font-ahsing text-xl  xs:text-xl tracking-wide xs:tracking-wider text-[#FAE00D]">
                  “Pictures narrate a story,”
                  <span className="font-tusker2 text-sm text-white">
                    {" "}
                    they say
                  </span>
                </div>
                <div className="flex h-[80%] w-full pt-8 flex-col items-center justify-center">
                  <p className="text-[1.1rem] xs:text-md mb-4 w-[100%] text-center font-tusker2 font-medium leading-[1.75rem] xs:leading-8 tracking-normal xs:tracking-wider text-white">
                    Tell us your story, and if our stars align, together <br />{" "}
                    we might just weave another.Where, when and <br /> what you
                    ask? Patience has always been key,
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
              <div className="absolute bottom-6 h-[10%] w-[100%] pr-4 overflow-hidden">
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
      </div> )}
    </>
    );
 }

export default Popup;