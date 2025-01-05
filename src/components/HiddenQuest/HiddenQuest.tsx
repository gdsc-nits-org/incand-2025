
"use client"; // Add this at the top to mark the file as a Client Component

import { useState } from "react";
const HiddenQuest = () =>{

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
        <div className="w-full h-[50vh] overflow-y-auto shadow-gray-600">
            <button
          className="fixed m-auto left-[50%] top-6rounded-md "
         onClick={handleOpen}
           >
          <img src="/Button1.png" className="w-[15%] h-[15%]"/>
         </button>

         {isVisible &&( <div className="w-full box-border h-[100vh] bg-black ">
             <div className="w-full box-border  h-[50vh] relative overflow-hidden bg-gray-100 bg-[url('/bgImage.gif')] bg-[length:100%_100%]">
                <div className="absolute box-border top-0 right-0 bg-blue-600 w-[8%] h-[20%]">
                    <img src="/cross.gif" className="w-[100%] h-[100%] " onClick={() => setIsVisible(false)} ></img>
                </div>

                <div className="top-[18%] gap-3 left-[30%] box-border flex flex-col justify-center items-center absolute w-[50vw] h-[20vh]">
                    <h1 className="font-ahsing text-[500%] font-[400] text-white text-left decoration-skip-ink-none"
                    >Hidden Quest</h1>
                    <p className="font-ahsing text-[38.22px] font-normal text-white leading-[48.22px] text-left ">find <span className="text-yellow-500">INCAND</span>ESCENCE</p>
                </div>
                <div className=" absolute box-border flex flex-col justify-center text-left items-center h-[30%] w-[18%] right-0 bottom-0">
                    <p className="font-ahsing leading-tight text-[22.22px] font-normal text-white text-left ">Scroll to</p>
                    <p className="font-ahsing leading-tight text-[22.22px] font-normal  text-white text-left ">know more</p>
                </div>
                <button className="absolute w-[30%] h-[30%] bottom-0 left-[40%] " onClick={handleScrollToNext}>
                                    <div className="w-[100%] h-[100%] relative flex flex-row justify-between group">
                    <img  src="/mainStar.png"  className="w-[30%] h-[70%] inline-block absolute left-[40%] bottom-7 group-hover:bottom-0 transition-all duration-300"/>  
                    <img  src="/mainStar.png"  className="w-[30%] h-[70%] absolute left-0 -bottom-7 group-hover:bottom-0 transition-all duration-300"/> 
                    <img  src="/mainStar.png"  className="w-[30%] h-[70%] absolute right-0 -bottom-7 group-hover:bottom-0 transition-all duration-300"/>
               </div>                   
                </button>
           </div>
            
            
            <div id="secondDiv" className="relative box-border w-full h-[50vh] overflow-hidden " >
               
               <img src="/image1.png" className="w-[40%] h-[full] absolute -left-[10%] -top-[40%] rotate-[220.26deg] "/>
                

               <img src="/image1.png" className="w-[40%] h-[full] absolute -right-[10%] -top-[45%] -rotate-[220.26deg] "/>
               <img src="/Gif.gif" className="w-[30%] h-[full] absolute left-[35%]  -top-[7%]"/>

               <div className="absolute box-border top-0 right-0 bg-blue-600 w-[8%] h-[20%]">
                    <img src="/cross.gif" className="w-[100%] h-[100%] " onClick={() => setIsVisible(false)} ></img>
                </div>
                <div className="w-[40vw] h-[10vh] absolute left-[40%] top-[15%] ">
                    <h1 className="font-ahsing text-[54px] text-white font-normal leading-[64px] text-left ">How it works ?</h1>
                </div>
                <div className="w-[20vw] h-[30vh] gap-3 absolute left-[8%] bottom-0 ">
                    <div className="w-[40%] h-[22%] box-border border-black border-2 rounded-sm shadow-custom-white bg-yellow-400 font-bricolage text-[24.06px] font-extrabold leading-[28.87px] p-2">Step 01</div>
                    <p className="font-bricolage tracking-wider leading-tight text-[14px] mt-4 text-[#D3D3D3]  text-left ">Register in various <br/>
                    events to get a letter <br/>
                    from the word</p>
                    <img src="/oneStar.png" className="w-[15%] h-[15%] filter invert rotate-180 inline-block ml-[20%] mt-[5%]"/>
                    <img src="/incand.png" className="w-[60%] h-[20%] -mt-4 block "/>
                </div>
                <div className="w-[20vw] h-[25vh] absolute left-[40%]  -bottom-[8%] ">
                <div className="w-[40%] h-[22%] mx-auto box-border border-black border-2 rounded-sm shadow-custom-white bg-yellow-400 font-bricolage text-[24.06px] font-extrabold leading-[28.87px] p-2">Step 02</div>

                    <p className="font-bricolage tracking-wider leading-tight text-[14px] mt-4 text-[#D3D3D3]  text-center ">Share with your friends or <br/>
                     request them to collect all six <br/>
                      letters of the fest!</p>
                </div>
                <div className="w-[20vw] h-[30vh] absolute right-[8%] bottom-0 ">
               
                <div className="w-[40%] h-[22%] mx-[57%] box-border border-black border-2 rounded-sm shadow-custom-white bg-yellow-400 font-bricolage text-[24.06px] font-extrabold leading-[28.87px] p-2">Step 03</div>

                    <p className="font-bricolage tracking-wider leading-tight text-[14px] mt-4 text-[#D3D3D3]  text-right">Win exciting gifts <br/> and be on the <br/>winning dashboard</p>
                    
                </div>


            </div>
          </div>
         )}
          </div>
      )
}

export default HiddenQuest;