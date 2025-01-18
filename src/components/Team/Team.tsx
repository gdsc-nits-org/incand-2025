import React, { useState } from 'react';

import TeamCard from './TeamCard';
import teamDataCore from './Core.json'; // Assuming the team data is stored here
import teamDataTech from './Tech.json';
import teamDataModule from './Modules.json';
const Team: React.FC = () => {
    const [isCore, setIsCore] = useState(true);
    const [isTech, setIsTech] = useState(false);
    const [isModule, setIsModule] = useState(false);
    return (
        <div className="w-[100vw] h-[100vh] bg-green-400 box-border "   style={{
            scrollbarWidth: 'none', /* For Firefox */
            msOverflowStyle: 'none', /* For Internet Explorer and Edge */
            overflowY: 'scroll',
            WebkitOverflowScrolling: 'touch', /* For smooth scrolling */
          }}>
            <div id="section1" className="flex items-center justify-center w-[100%] h-[100%] box-border bg-red-600 bg-[url('/assets/Team/TeamBg.gif')] bg-repeat">

                <div className="w-[70%] h-[60%]">
                    <img src="/assets/Team/Meet.png" className="w-[100%] h-[100%] " alt="Meet Our Team" />
                </div>

            </div>

            <div id="section2" className="relative w-[100%] h-[200%] bg-[#FAF8E0]  box-border overflow-x-hidden">
                <div className="flex flex-row justify-between align-center w-[88%] h-[5%] mx-auto">
                    <div className="w-[33%] h-[100%] bg-red-500" onClick={() => {
                            setIsTech(false);
                            setIsModule(false);
                            setIsCore(true);
                            }}>
                           {isCore &&   <img src="/assets/Team/CoreClick.png" className="w-[100%] h-[100%] " alt="Core Clicked" /> }
                      {!isCore &&   <img src="/assets/Team/CoreUnClick.png" className="w-[100%] h-[100%] " alt="Core UnClicked" /> }
                      
                    </div>
                    <div className="w-[30%] h-[100%] bg-yellow-500" onClick={() => {
                            setIsCore(false);
                            setIsModule(false);
                            setIsTech(true);
                            }}>
                       {isTech && <img src="/assets/Team/TechClick.png" className="w-[100%] h-[100%] " alt="Tech Clicked" /> }
                       {!isTech && <img src="/assets/Team/TechUnClick.png" className="w-[100%] h-[100%] " alt="Tech unClicked" /> }
                    </div>
                    <div className="w-[30%] h-[100%] bg-pink-500" onClick={() => {
                            setIsCore(false);
                            setIsTech(false);
                            setIsModule(true);
                            }}>
                       {isModule && <img src="/assets/Team/ModulesClick.png" className="w-[100%] h-[100%] " alt="Modules Clicked" />}
                       {!isModule && <img src="/assets/Team/ModulesUnClick.png" className="w-[100%] h-[100%] " alt="Modules unClicked" />}

                    </div>
                </div>

                <div className="absolute left-0 w-[6%] h-[90%]   bg-black overflow-y-hidden">
                    <img src="/assets/Team/LeftSide.png" className="w-[100%] h-[200%] " alt="LeftBar" />
                </div>
                <div className="absolute right-0 w-[6%]  h-[90%]    bg-black overflow-y-hidden">
                    <img src="/assets/Team/RightSide.png" className="w-[100%] h-[100%] " alt="RightBar" />
                </div>
                <div id="Member_container" className="w-[85%] h-[75%] mt-24 pt-12 grid grid-cols-3 gap-4 overflow-y-scroll place-items-center mx-auto"
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
                                fb={member.fb || ''}
                                linkedin={member.linkedin || ''}
                                git={member.git || ''}
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
                                fb={member.fb || ''}
                                linkedin={member.linkedin || ''}
                                git={member.git || ''}
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
                                fb={member.fb || ''}
                                linkedin={member.linkedin || ''}
                                git={member.git || ''}
                            />
                        ))
                    }
                </div>
                <div className="absolute bottom-0 w-[100%] h-[5%]  bg-black">
                    <img src="/assets/Team/Bootom.png" className="w-[100%] h-[100%] " alt="BottomBar" />
                </div>

            </div>

        </div>
    )
}

export default Team;