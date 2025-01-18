"use client"
import { useState } from 'react';
import styles from '../../styles/CarpeDiem.module.css';
import Image from 'next/image';

const CarpeDiem = () => {
     const [isTHovered, setIsTHovered] = useState(false);
     const [isOHovered, setIsOHovered] = useState(false);
     const [isTwHovered, setIsTwHovered] = useState(false);
     const [isFHovered, setIsFHovered] = useState(false);
     const [isClicked,setIsClicked]= useState(false);
  return (
    <div className={""+styles.carped}>
        <Image src="/assets/CarpeDiem/background.png" fill={true} alt="background"   className="absolute inset-0 "/>
              {/* Overlayed GIF */}
      <div className={"absolute w-[25vw] h-[77vh] top-10 left-12 rounded-lg"}>
        <Image
          src="/assets/CarpeDiem/disc.gif" // Path to your GIF
          alt="overlay gif"
          fill={true}
          className={"object contain rounded-lg"+styles.disc}
          style={{
            clipPath: "inset(0% round 24px)", // Custom clip for rounded corners
          }}
        />
      </div>
      <div className="absolute w-[13vw] h-[11vh] top-[57%] left-[10%]">
      <Image
          src="/assets/CarpeDiem/Date.png" // Path to your GIF
          alt="date"
          fill={true}
          className={" "}
          
        />
      </div>
      <div className="absolute w-[9vw] h-[10vh] top-[69%] left-[12%]">
      <Image
          src="/assets/CarpeDiem/Time.png" // Path to your GIF
          alt="time"
          fill={true}
          className={" "}
          
        />
      </div>
      <div className={"absolute w-[4vw] h-[10vh] top-[79%] left-[6%] "}>
      <Image
          src="/assets/CarpeDiem/Shape.png" // Path to your GIF
          alt="shape"
          fill={true}
          className={" "}
          
        />
      </div>
      <div className="absolute w-[4vw] h-[10vh] top-[79%] left-[22%]">
      <Image
          src="/assets/CarpeDiem/Shape.png" // Path to your GIF
          alt="shape"
          fill={true}
          className={" "}
          
        />
      </div>
      <div className="absolute w-[0.3vw] h-[70vh] top-[10%] left-[28.3%]">
      <Image
          src="/assets/CarpeDiem/Line.png" // Path to your GIF
          alt="line"
          fill={true}
          className={" "}
          
        />
      </div>
      <div className="absolute w-[69vw] h-[77vh] top-[6%] left-[28.5%]">
      <Image
          src="/assets/CarpeDiem/Main.png" // Path to your GIF
          alt="main"
          fill={true}
          className={" "}
          
        />
      </div>
      <div className="absolute w-[41.5vw] h-[61vh] top-[7%] left-[28.8%]">
      <Image
          src="/assets/CarpeDiem/Geometric.gif" // Path to your GIF
          alt="geometric"
          fill={true}
          className={" "}
          style={{
            borderTopLeftRadius: "30px", // Rounding the top-left corner
            borderTopRightRadius: "0px",
            borderBottomLeftRadius: "0px",
            borderBottomRightRadius: "0px",
            zIndex:'2',
          }}
        />
      </div>
      <div className="absolute w-[37.5vw] h-[43vh] top-[14%] left-[31%]">
      <Image
          src="/assets/CarpeDiem/Rectangle.png" // Path to your GIF
          alt="rectangle"
          fill={true}
          className={" "}
          style={{zIndex:'3',}}
        />
      </div>
      <div className="absolute w-[33vw] h-[30vh] top-[17%] left-[34%]">
      <Image
          src="/assets/CarpeDiem/CarpeText.png" // Path to your GIF
          alt="text"
          fill={true}
          className={" "}
          style={{zIndex:'3',}}
        />
      </div>
      <div className="absolute w-[6vw] h-[13vh] top-[18%] left-[55.5%]">
      <Image
          src="/assets/CarpeDiem/ELetter.png" // Path to your GIF
          alt="text"
          fill={true}
          className={" "}
          style={{zIndex:'3',}}
        />
      </div>
      <p
              className={
                "absolute top-[20%] left-[33.5%] w-[6vw] text-[10vw] font-normal leading-[15.261vw] tracking-wide text-white " +
                styles.cText
              }
              onMouseEnter={() => setIsTHovered(true)}
              style={
                isTHovered
                  ? {
                      fontFamily: "Tusker Grotes",
                       animation:"",
                    
                      zIndex:'3',
                    }
                  : { fontFamily: "Ahsing" ,
                    animation: "none",
                    zIndex:"4",
                  }
              }
            >
              2
            </p>
            <p
              className={
                "absolute top-[24%] left-[38%] w-[0vw] text-[9vw] font-normal leading-[15.261vw] tracking-wide text-white " +
                styles.cText
              }
              onMouseEnter={() => setIsOHovered(true)}
              style={
                isOHovered
                  ? {
                      fontFamily: "Tusker Grotes",
                     
                      scale: "0.8",
                      zIndex:"3",
                    }
                  : { fontFamily: "Ahsing" ,
                    animation: "none",
                    zIndex:"3",
                  }
              }
            >
              0
            </p>
            <p
              className={
                "absolute top-[35%] left-[34.5%] w-[6vw] text-[10vw] font-normal leading-[15.261vw] tracking-wide text-white " +
                styles.cText
              }
              onMouseEnter={() => setIsTwHovered(true)}
              style={
                isTwHovered
                  ? {
                      fontFamily: "Tusker Grotes",
                     
                      scale: "0.8",
                      zIndex:"3",
                    }
                  : { fontFamily: "Ahsing" ,
                    animation: "none",
                    zIndex:"3",
                  }
              }
            >
              2
            </p>
            <p
              className={
                "absolute top-[39%] left-[40%] w-[6vw] text-[10vw] font-normal leading-[15.261vw] tracking-wide text-white " +
                styles.cText
              }
              onMouseEnter={() => setIsFHovered(true)}
              style={
                isFHovered
                  ? {
                      fontFamily: "Tusker Grotes",
                     
                      scale: "0.8",
                      zIndex:"3",
                    }
                  : { fontFamily: "Ahsing" ,
                    animation: "none",
                    zIndex:"3",
                  }
              }
            >
              5
            </p>
      <div className="absolute w-[43vw] h-[50vh] top-[36%] left-[36%]">
      <Image
          src="/assets/CarpeDiem/Radio.png" // Path to your GIF
          alt="radio"
          fill={true}
          className={" "}
          style={{zIndex:'3',}}
        />
      </div>
      <div className="absolute w-[27vw] h-[8vh] top-[6%] left-[70.5%]">
      <Image
          src="/assets/CarpeDiem/Border.gif" // Path to your GIF
          alt="border"
          fill={true}
          className={" "}
          style={{
            borderTopLeftRadius: "10px", // Rounding the top-left corner
            borderTopRightRadius: "30px",
            borderBottomLeftRadius: "0px",
            borderBottomRightRadius: "0px",
            zIndex:'5'
          }}
        />
      </div>
      <div className="absolute w-[29vw] h-[50vh] top-[36%] left-[68%]">
      <Image
          src="/assets/CarpeDiem/Checks.gif" // Path to your GIF
          alt="checks"
          fill={true}
          className={" "}
          style={{
            borderTopLeftRadius: "10px", // Rounding the top-left corner
            borderTopRightRadius: "0px",
            borderBottomLeftRadius: "0px",
            borderBottomRightRadius: "30px",
            zIndex:'1',
          }}
        />
      </div>
      <div className="absolute w-[29vw] h-[57vh] top-[15%] left-[68.5%]">
      <Image
          src="/assets/CarpeDiem/SingerBackg.png" // Path to your GIF
          alt="backgrond"
          fill={true}
          className={" "}
          style={{zIndex:'1',}}
        />
      </div>
      <div className="absolute w-[4.2vw] h-[63vh] top-[8%] left-[93%]">
      <Image
          src="/assets/CarpeDiem/SingerName.png" // Path to your GIF
          alt="Name"
          fill={true}
          className={" "}
          style={{zIndex:'2',}}
        />
      </div>
      <div className="absolute w-[20vw] h-[50vh] top-[24%] left-[72%]">
      <Image
          src="/assets/CarpeDiem/Singer.png" // Path to your GIF
          alt="Singer"
          fill={true}
          className={" "}
          style={{zIndex:'2',}}
        />
      </div>
      <div className="absolute w-[19vw] h-[12vh] top-[77%] left-[73%]">
      <Image
          src="/assets/CarpeDiem/Button.png" // Path to your GIF
          alt="Button"
          fill={true}
          className={" "}
          style={{zIndex:'2',}}
        />
      </div>
      {!isClicked?(<><div className="absolute w-[4vw] h-[8vh] top-[78%] left-[73.8%] cursor-pointer" onClick={()=>setIsClicked(true)}>
      <Image
          src="/assets/CarpeDiem/Circle.png" // Path to your GIF
          alt="Circle"
          fill={true}
          className={" cursor-pointer"}
          style={{zIndex:'3',}}
          onClick={()=>setIsClicked(true)}
        />
      </div>
      <div className="absolute w-[2vw] h-[5vh] top-[80%] left-[75%] cursor-pointer" onClick={()=>setIsClicked(true)}>
      <Image
          src="/assets/CarpeDiem/Play.png" // Path to your GIF
          alt="PLay"
          fill={true}
          className={" cursor-pointer "}
          style={{zIndex:'3',}}
          onClick={()=>setIsClicked(true)}
        />
      </div>
      <div className="absolute w-[11vw] h-[4vh] top-[80.5%] left-[79%]" >
      <Image
          src="/assets/CarpeDiem/SongName.png" // Path to your GIF
          alt="Song"
          fill={true}
          className={" "}
          style={{zIndex:'2',}}
        />
      </div>
      
     
      </>

    ):(<>
    <div className="absolute w-[4vw] h-[8vh] top-[78%] left-[73.8%] cursor-pointer" onClick={()=>setIsClicked(false)}>
      <Image
          src="/assets/CarpeDiem/Circle.png" // Path to your GIF
          alt="Circle"
          fill={true}
          className={" "}
          style={{zIndex:'3',}}
          onClick={()=>setIsClicked(false)}
        />
      </div>
      <div className="absolute w-[2vw] h-[7vh] top-[79%] left-[74.8%] cursor-pointer" onClick={()=>setIsClicked(false)}>
      <Image
          src="/assets/CarpeDiem/Pause.png" // Path to your GIF
          alt="Pause"
          fill={true}
          className={" "}
          style={{zIndex:'3',}}
          onClick={()=>setIsClicked(false)}
        />
      </div>
      <div className="absolute w-[11vw] h-[4vh] top-[80.5%] left-[79%] cursor-pointer">
      <Image
          src="/assets/CarpeDiem/PlayState.gif" // Path to your GIF
          alt="Music Play"
          fill={true}
          className={" "}
          style={{zIndex:'3',}}
 
        />
      </div>
    </>)}
      
    </div>
  )
}

export default CarpeDiem