
"use client"; // Add this at the top to mark the file as a Client Component

import { useState } from "react";
const HiddenQuestMobile = () =>{
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
        <div className="fixed left-1/2 top-1/2  h-[14px] w-[14px]rounded-md" onClick={handleOpen}>
          <img
            src="/assets/HiddenQuest&Button/yellowBox.png"
            className="scale-50 cursor-pointer"
            alt="HiddenQuest"
          />
        </div>
      )}
       
       {isVisible && (<div className="fixed top-0 left-0  w-full h-screen overflow-y-auto p-4 scrollbar-hide box-border z-[10004]">
                       {/* <img  src="/assets/HiddenQuest&Button/Rectangle.png"className="absolute -left-4 -top-4 z-[4] h-14 w-14 "/> */}
                   <div className="absolute right-8 top-2 z-[4] h-4 w-4 bg-yellow-500"></div>
                   <div className="absolute left-2 top-2 z-[4] h-4 w-4 bg-yellow-500"></div>

                  <div className="absolute left-2 bottom-6 z-[4] h-4 w-4 bg-yellow-500"></div>
                  <div className="absolute right-8 bottom-6 z-[4] h-4 w-4 bg-yellow-500"></div>

            <div id="container" className="relative w-[98%] h-[98%]  box-border overflow-y-auto scrollbar-hide  ">

            <div id="firstDiv" className=" relative  w-[98%] h-[100%]  box-border bg-[url('/assets/HiddenQuest&Button/bgImage.gif')] bg-[length:100%_100%] overflow-hidden">

             <div className="fixed right-6   z-[3] box-border h-[20%] w-[15%]">
              <img
                src="/assets/HiddenQuest&Button/newCross.gif"
                className="h-[60%] w-[60%] mt-4 ml-4 cursor-pointer"
                onClick={() => setIsVisible(false)}
              ></img>
            </div> 

              <div className="absolute left-10 top-96 flex flex-col gap-8 w-[80%] h-[30%]">
                  <p className="font-ahsing text-[28.49px] font-normal leading-[20.49px] tracking-[0.04em] text-white mx-auto">Dive Into</p>
                  <p className="font-ahsing text-[62.5px] font-normal leading-[62.5px] tracking-[0.04em] text-center">Luminis<br/> 
                  Lookout</p>

              </div>

               <div className="w-[70%} h-[30%] mt-14 flex flex-col justify-center">
               <img src="/assets/HiddenQuest&Button/HiddenMobile.png" className="w-[55%] h-[30%] ml-14" />
               <img src="/assets/HiddenQuest&Button/QuestMobile.png" className="w-[55%] h-[30%] mt-6 ml-24" />
                 {/* <h1 className="font-tusker2 text-[#FAE00D] shadow-text-shadow text-[36px] font-medium leading-[52.38px] tracking-[0.24em] ">Hidden</h1>
                 <h1>Quest</h1> */}
                </div> 
               
                  
            <button
              className="absolute bottom-0 left-9 box-border h-[20%] w-[80%] "
              onClick={handleScrollToNext}

            >
              <div className="group relative m-auto flex h-[100%] w-[100%] flex-row justify-center items-center">
                <img
                  src="/assets/HiddenQuest&Button/arrow_yellow.gif"
                  className="h-[100%] w-[30%] object-cover scale-50"
                />
                <span className="text-white font-tusker2 r text-xl lg:text-3xl text-nowrap">Scroll Up</span>
                <img
                  src="/assets/HiddenQuest&Button/arrow_yellow.gif"
                  className="h-[100%] w-[30%] object-cover scale-50"
                />
              </div>
            </button>
            </div>


            <div id="secondDiv" className=" relative    w-[98%] h-[100%] pt-8 px-2 box-border bg-black">
            <div className="h-[10%]  w-[100%] overflow-hidden">
              <img
                src="/assets/HiddenQuest&Button/door.gif"
                className="h-[100%] w-[100%]"
              />
            </div>
            <div className="flex flex-col mt-24 -mb-6 items-center justify-center w-[100%] h-[72%]">
              <div className="font-ahsing text-[#FAE00D] text-xl  w-full text-center mx-auto text-nowrap tracking-wider">
                “Pictures narrate a story,”<span className="text-white font-tusker2 text-sm"> they say</span>
              </div>
              <div className="flex flex-col items-center justify-center w-full h-[80%]">
                <p className="text-md font-tusker2 text-center font-medium text-white mb-4 leading-8 w-[100%] tracking-wider">
                  Tell us your story, and if our stars align, together <br/> we might just
                  weave another.Where, when and <br/> what you ask?
                  Patience has always been key,
                  <br />just stay curious!
                </p>
                <div className="h-[50%] w-[80%] box-border flex flex-col justify-center items-center">
                <img
                  src="/assets/HiddenQuest&Button/Gif.gif"
                  className="max-w-full h-auto  scale-50 "
                />
                </div>
              </div>
            </div>
            <div className="w-[100%] h-[10%] overflow-hidden">
              <img
                src="/assets/HiddenQuest&Button/door.gif"
                className="h-full w-[200%]"
              />
            </div>

            </div>

            <div id="thirdDiv" className="w-[98%] h-[100%] pt-8 px-2 flex flex-col justify-center items-center box-border  bg-black">
                    <div className="w-[100%] h-[60%] box-border overflow-hidden flex flex-col justify-center items-center bg-[url('/assets/HiddenQuest&Button/Rounded.gif')] bg-[length:100%_100%]">
                         <p className="font-ahsing text-[42.08px] font-normal leading-[30.08px]  text-center text-white tracking-widest">Stay<br/>
                          Tuned</p>
                    </div>
            </div>

            </div>
    
        </div>
       )}

        </>
     );

}

export default HiddenQuestMobile;