import Link from "next/link";
import Image from "next/image";
import { useState,useEffect } from "react";

const NavbarDesktop = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWhite,setIsWhite]=useState(false);
  const [isTHovered,setIsTHovered]=useState(false);
  const [isEHovered,setIsEHovered]=useState(false);
  const [isPHovered,setIsPHovered]=useState(false);
  const [isUHovered,setIsUHovered]=useState(false);
  const [isWHovered,setIsWHovered]=useState(false);

  useEffect(() => {
    const navbar = document.querySelector('nav')!; 
    const bgColor = window.getComputedStyle(navbar).backgroundColor;
    if (bgColor === 'rgb(255, 255, 255)') {
      setIsWhite(true);
    } else {
      setIsWhite(false);
    }
  }, []); 


  return (
    <nav
      className={`flex items-center justify-between px-6 py-4 transition-colors duration-300 bg-[#00A3FF] ${
        isWhite ? "border-b-4 border-[#FFA6F6]" : ""}`}
    >
      {!isWhite?(<> <div className="flex items-center ml-11">
        {/* Torch Icon */}
        <Image
          src="/assets/NavbarDesktop/incandlogo.png"
          alt="Torch"
          width={15}
          height={14}
        />
      </div>
      <div className="flex items-center gap-20">
        <Link href="/" className="text-black font-semibold"
        onMouseEnter={()=>setIsTHovered(true)}
        onMouseLeave={()=>setIsTHovered(false)}>
          {!isTHovered?(<>Home</>):(<>Home<Image
          src="/assets/NavbarDesktop/wave.gif"
          alt="wave"
          width={40}
          height={60}
        /></>)}
        </Link>
        <Link href="/" className="text-black font-semibold"
        onMouseEnter={()=>setIsEHovered(true)}
        onMouseLeave={()=>setIsEHovered(false)}>
          {!isEHovered?(<>Home</>):(<>Home<Image
          src="/assets/NavbarDesktop/wave.gif"
          alt="wave"
          width={40}
          height={60}
        /></>)}
        </Link>
        <Link href="/" className="text-black font-semibold"
        onMouseEnter={()=>setIsPHovered(true)}
        onMouseLeave={()=>setIsPHovered(false)}>
          {!isPHovered?(<>Home</>):(<>Home<Image
          src="/assets/NavbarDesktop/wave.gif"
          alt="wave"
          width={40}
          height={60}
        /></>)}
        </Link>
        <Link href="/" className="text-black font-semibold"
        onMouseEnter={()=>setIsUHovered(true)}
        onMouseLeave={()=>setIsUHovered(false)}>
          {!isUHovered?(<>Home</>):(<>Home<Image
          src="/assets/NavbarDesktop/wave.gif"
          alt="wave"
          width={40}
          height={60}
        /></>)}
        </Link>
        <Link href="/" className="text-black font-semibold"
        onMouseEnter={()=>setIsWHovered(true)}
        onMouseLeave={()=>setIsWHovered(false)}>
          {!isWHovered?(<>Home</>):(<>Home<Image
          src="/assets/NavbarDesktop/wave.gif"
          alt="wave"
          width={40}
          height={60}
        /></>)}
        </Link>
      </div></>):(<> <div className="flex items-center ml-11">
        {/* Torch Icon */}
        <Image
          src="/assets/NavbarDesktop/incandlogo-white.png"
          alt="Torch"
          width={15}
          height={14}
        />
      </div>
      <div className="flex items-center gap-20">
      <Link href="/" className="text-black font-semibold"
        onMouseEnter={()=>setIsTHovered(true)}
        onMouseLeave={()=>setIsTHovered(false)}>
          {!isTHovered?(<>Home</>):(<>Home<Image
          src="/assets/NavbarDesktop/wave.gif"
          alt="wave"
          width={40}
          height={60}
        /></>)}
        </Link>
        <Link href="/" className="text-black font-semibold"
        onMouseEnter={()=>setIsEHovered(true)}
        onMouseLeave={()=>setIsEHovered(false)}>
          {!isEHovered?(<>Home</>):(<>Home<Image
          src="/assets/NavbarDesktop/wave.gif"
          alt="wave"
          width={40}
          height={60}
        /></>)}
        </Link>
        <Link href="/" className="text-black font-semibold"
        onMouseEnter={()=>setIsPHovered(true)}
        onMouseLeave={()=>setIsPHovered(false)}>
          {!isPHovered?(<>Home</>):(<>Home<Image
          src="/assets/NavbarDesktop/wave.gif"
          alt="wave"
          width={40}
          height={60}
        /></>)}
        </Link>
        <Link href="/" className="text-black font-semibold"
        onMouseEnter={()=>setIsUHovered(true)}
        onMouseLeave={()=>setIsUHovered(false)}>
          {!isUHovered?(<>Home</>):(<>Home<Image
          src="/assets/NavbarDesktop/wave.gif"
          alt="wave"
          width={40}
          height={60}
        /></>)}
        </Link>
        <Link href="/" className="text-black font-semibold"
        onMouseEnter={()=>setIsWHovered(true)}
        onMouseLeave={()=>setIsWHovered(false)}>
          {!isWHovered?(<>Home</>):(<>Home<Image
          src="/assets/NavbarDesktop/wave.gif"
          alt="wave"
          width={40}
          height={60}
        /></>)}
        </Link>
      </div></>)}
     
      <div className="mr-5 flex items-center">
        {/* Profile Icon Button */}
        <button
          className={`relative flex items-center mt-2 mb-2 bg-white rounded-lg shadow-md transition-transform  ${isHovered ? "scale-110 -translate-x-2 -translate-y-2" : "scale-100"}`}
          style={{
            width: "115px",
            height: "40px",
            boxShadow: "4px 4px 0px black",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {!isHovered ? (
            // Default Button Content
            <>
              <div
                className="relative w-10 h-10 ml-0.5  overflow-hidden rounded-l-lg"
                style={{ backgroundColor: "#FF676B" }}
              >
                <Image
                  src="/assets/NavbarDesktop/incandlogo.png" // Replace with your image path
                  alt="Profile Icon"
                  width={13} // Adjust width
                  height={13} // Adjust height
                  className="object-cover" // Ensures the image fills the circular container
                />
              </div>
              <span
                className="ml-2 font-semibold font-oxygen"
                style={{ color: "#562828" }}
              >
                @Jayz
              </span>
            </>
          ) : (
            // Hovered Button Content
            <div className="relative w-full h-[40px] ">
              {/* Blue Layer */}
              <div
                className="absolute w-full h-full bg-blue-500 rounded-lg"
                style={{  transform: "translate(8px, 8px)",
                  boxShadow: "2px 2px 0 black", // Proper shadow for bottom effect
                  zIndex: 1, }}
              ></div>
              {/* Yellow Layer */}
              <div
                className="absolute w-full h-full bg-yellow-400 rounded-lg"
                style={{ transform: "translate(4px, 4px)",
                  boxShadow: "0px 2px 0 black", // Proper shadow for bottom effect
                  zIndex: 2,}}
              ></div>
              {/* Red Layer */}
              <div
                className="absolute w-full h-full bg-red-400 rounded-lg flex items-center justify-center" style={{
                  transform: "translate(0, 0)", // No offset for the topmost layer
                  boxShadow: "0 2px 0 black", // Black outline
                  zIndex: 3,
                }}
              >
                <span
                  className="text-black font-semibold"
                  style={{ fontFamily: "'Oxygen', sans-serif",  }}
                >
                  Sign-Up
                </span>
              </div>
            </div>
          )}
        </button>
      </div>
    </nav>
  );
};

export default NavbarDesktop;
