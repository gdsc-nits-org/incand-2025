

import TeamCard from './TeamCard';
import teamDataCore from './Core.json'; // Assuming the team data is stored here
 import teamDataTech from './Tech.json';
 import teamDataModule from './Modules.json';
import React from "react";
import Carousel from './Carousel';

const TeamMobile: React.FC = () => { 
    // var settings = {
    //     dots:false,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     nextArrow: <NextArrow />,
    //     prevArrow: <PrevArrow />,
    //   };
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
            <div id="section1" className="flex items-center justify-center w-[100%] h-[50%] box-border">

                <div className=" w-[85%] h-[100%]">
                    <img src="/assets/Team/Meet.svg" className="w-[100%] h-[100%] " alt="Meet Our Team" />
                </div>

            </div>

            <div id="section2" className=" flex flex-col justify-center items-center  w-[100%]  box-border overflow-x-hidden">
            <div className={`w-[16rem] h-[4rem] rounded-full  bg-[#E1067B] flex gap-x-4 justify-start items-center`}>
                        <div className={`z-10 w-[3rem] h-[3rem] ml-2 rounded-full   bg-[url('/assets/Team/Handle.png')] bg-cover `}></div>
                        <p className={`font-oxygen text-lg font-extrabold leading-[35.36px] text-[#FFD231] my-auto tracking-[0.06em] text-center`}
                        >CORE MEMBERS</p>   
                      
                    </div>
               

            
            <div className="w-[80%] h-[30rem]  box-border  -mt-4 px-4">
        {/* <Slider {...settings}> */}
        <Carousel>
          {teamDataCore.map((member) => (
            <div
              key={member.id}
              className="transition-transform transform hover:scale-105 duration-300 ease-in-out"
            >
              <TeamCard
                name={member.name}
                role={member.designation}
                image={member.img}
                fb={member.fb || ""}
                linkedin={member.linkedin || ""}
                git={member.git || ""}
                ind={member.id}
              />
            </div>
          ))}
      </Carousel>

        {/* </Slider> */}
      </div>
       


      <div className={`w-[16rem] h-[4rem] rounded-full  bg-[#E1067B] flex gap-x-4 justify-start items-center`}>
                        <div className={`z-10 w-[3rem] h-[3rem] ml-2 rounded-full   bg-[url('/assets/Team/Handle.png')] bg-cover `}></div>
                        <p className={`font-oxygen text-lg font-extrabold leading-[35.36px] text-[#FFD231] my-auto tracking-[0.06em] text-center`}
                        >TECH MEMBERS</p>   
                      
                    </div>
               

          
            <div className="w-[80%] h-[30rem]  box-border  -mt-4 px-4">
        {/* <Slider {...settings}> */}
        <Carousel>
          {teamDataTech.map((member) => (
            <div
              key={member.id}
              className="transition-transform transform hover:scale-105 duration-300 ease-in-out"
            >
              <TeamCard
                name={member.name}
                role={member.designation}
                image={member.img}
                fb={member.fb || ""}
                linkedin={member.linkedin || ""}
                git={member.git || ""}
                ind={member.id}
              />
            </div>
          ))}
      </Carousel>

        {/* </Slider> */}
      </div>
         
      <div className={`w-[16rem] h-[4rem] rounded-full  bg-[#E1067B] flex gap-x-4 justify-start items-center`}>
                        <div className={`z-10 w-[3rem] h-[3rem] ml-2 rounded-full   bg-[url('/assets/Team/Handle.png')] bg-cover `}></div>
                        <p className={`font-oxygen text-lg font-extrabold leading-[35.36px] text-[#FFD231] my-auto tracking-[0.06em] text-center`}
                        >MODULE HEADS</p>   
                      
                    </div>
               

           
            <div className="w-[80%] h-[30rem]  box-border  -mt-4 px-4">
        {/* <Slider {...settings}> */}
        <Carousel>
          {teamDataModule.map((member) => (
            <div
              key={member.id}
              className="transition-transform transform hover:scale-105 duration-300 ease-in-out"
            >
              <TeamCard
                name={member.name}
                role={member.designation}
                image={member.img}
                fb={member.fb || ""}
                linkedin={member.linkedin || ""}
                git={member.git || ""}
                ind={member.id}
              />
            </div>
          ))}
      </Carousel>

        {/* </Slider> */}
      </div>

      </div>

        </div>
    )
}
       


export default TeamMobile;