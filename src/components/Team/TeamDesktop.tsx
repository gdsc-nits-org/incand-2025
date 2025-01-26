import React, { useState } from 'react';

import TeamCard from './TeamCard';
import teamDataCore from './Core.json'; // Assuming the team data is stored here
import teamDataTech from './Tech.json';
import teamDataModule from './Modules.json';
const TeamDesktop: React.FC = () => {
    const [isCore, setIsCore] = useState(true);
    const [isTech, setIsTech] = useState(false);
    const [isModule, setIsModule] = useState(false);
    return (
        <div className="w-[100vw] h-[100vh]  bg-[#FAF8E0] box-border overflow-y-scroll"   style={{
            scrollbarWidth: 'none', /* For Firefox */
            msOverflowStyle: 'none', /* For Internet Explorer and Edge */
            overflowY: 'scroll',
            WebkitOverflowScrolling: 'touch', /* For smooth scrolling */
            backgroundImage: `url('/assets/Team/Team.png')`, /* Replace with your image path */
            backgroundPosition: 'bottom', /* Aligns the image to the bottom */
            backgroundSize: '100% 40%', /* Sets the image width to 100% and height to 30% */
            backgroundRepeat: 'no-repeat', /* Prevents the image from repeating */
          }}>
            <div id="section1" className="flex items-center justify-center w-[100%] h-[60%] xL:h-[100%] box-border">

                <div className=" w-[85%]  h-[90%] xL:h-[60%]">
                    <img src="/assets/Team/Meet.svg" className="w-[100%] h-[100%] " alt="Meet Our Team" />
                </div>

            </div>

            <div id="section2" className="relative  w-[100%]   box-border overflow-x-hidden">
                <div className="flex flex-row justify-between align-center  w-[90%] tablet2:w-[78%] h-[4rem]  mx-auto">
                    <div className={`w-[32%] xL:w-[20rem] h-[100%] rounded-full  ${isCore ? "bg-[#E1067B]" : "bg-transparent border-2 border-black"} flex gap-x-4 justify-start items-center`} onClick={() => {
                            setIsTech(false);
                            setIsModule(false);
                            setIsCore(true);
                            }}>
                        <div className={`z-10 w-[3rem] h-[3rem] ml-2 rounded-full  ${isCore ? "bg-[url('/assets/Team/Handle.png')] bg-cover" : "  bg-black border-8 border-yellow-500"}`}></div>
                        <p className={`font-oxygen text-xs tablet:text-sm ipadpro:text-base ipadair:text-lg font-extrabold leading-[35.36px] ${isCore ? "text-[#FFD231]" : "text-black"} my-auto tracking-[0.06em] text-center`}
                        >CORE MEMBERS</p>   
                      
                    </div>
                     
                    <div className={`w-[32%] xL:w-[20rem] h-[100%] rounded-full  ${isTech ? "bg-[#E1067B]" : "bg-transparent border-2 border-black"} flex gap-x-4 justify-start items-center`} onClick={() => {
                             setIsCore(false);
                             setIsModule(false);
                            setIsTech(true);
                          
                           
                            }}>
                        <div className={`z-10 w-[3rem] h-[3rem] ml-2 rounded-full  ${isTech ? "bg-[url('/assets/Team/Handle.png')] bg-cover" : "  bg-black border-8 border-yellow-500"}`}></div>
                        <p className={`font-oxygen text-xs tablet:text-sm  ipadpro:text-base ipadair:text-lg font-extrabold leading-[35.36px] ${isTech ? "text-[#FFD231]" : "text-black"} my-auto tracking-[0.06em] text-center`}
                        >TECH MEMBERS</p>   
                      
                    </div>

                    <div className={`w-[32%] xL:w-[20rem]  h-[100%] rounded-full  ${isModule ? "bg-[#E1067B]" : "bg-transparent border-2 border-black"} flex gap-x-4 justify-start items-center`} onClick={() => {
                            setIsCore(false);
                            setIsTech(false);
                            setIsModule(true);
                            
                            }}>
                        <div className={`z-10 w-[3rem] h-[3rem] ml-2 rounded-full  ${isModule ? "bg-[url('/assets/Team/Handle.png')] bg-cover" : "  bg-black border-8 border-yellow-500"}`}></div>
                        <p className={`font-oxygen  text-xs tablet:text-sm  ipadpro:text-base ipadair:text-lg font-extrabold leading-[35.36px] ${isModule ? "text-[#FFD231]" : "text-black"} my-auto tracking-[0.06em] text-center`}
                        >MODULE HEADS</p>   
                      
                    </div>
                </div>

                <div id="Member_container" className="w-[85%] h-[85%] mt-14 pt-8 grid grid-cols-2 tablet2:grid-cols-3 gap-4 overflow-y-scroll place-items-center mx-auto"
                    style={{
                        scrollbarWidth: 'none', /* For Firefox */
                        msOverflowStyle: 'none', /* For Internet Explorer and Edge */
                        overflowY: 'scroll',
                        WebkitOverflowScrolling: 'touch', /* For smooth scrolling */
                      }}>
                    {isCore &&
                        teamDataCore.map((member) => (
                            <TeamCard
                            key={member.id}
                            name={member.name}
                            role={member.designation}
                            image={member.img}
                            fb={member.fb ?? ''}
                            linkedin={member.linkedin ?? ''}
                            git={member.git ?? ''}
                            ind={member.id}
                          />
                          
                        ))
                    }

                 {isTech && 
                 teamDataTech.map((member) => (
                    <TeamCard
                    key={member.id}
                    name={member.name}
                    role={member.designation}
                    image={member.img}
                    fb={member.fb ?? ''}
                    linkedin={member.linkedin ?? ''}
                    git={member.git ?? ''}
                    ind={member.id}
                  />
                  
                        ))
                    }

                   {isModule &&
                        teamDataModule.map((member) => (
                            <TeamCard
                            key={member.id}
                            name={member.name}
                            role={member.designation}
                            image={member.img}
                            fb={member.fb ?? ''}
                            linkedin={member.linkedin ?? ''}
                            git={member.git ?? ''}
                            ind={member.id}
                          />
                          
                        ))
                    }
                </div>
               

            </div>

        </div>
    )
}

export default TeamDesktop;