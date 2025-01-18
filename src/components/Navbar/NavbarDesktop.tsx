import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const NavbarDesktop = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWhite, setIsWhite] = useState(false);
  const [isTHovered, setIsTHovered] = useState(false);
  const [isEHovered, setIsEHovered] = useState(false);
  const [isPHovered, setIsPHovered] = useState(false);
  const [isUHovered, setIsUHovered] = useState(false);
  const [isWHovered, setIsWHovered] = useState(false);

  useEffect(() => {
    const navbar = document.querySelector("nav")!;
    const bgColor = window.getComputedStyle(navbar).backgroundColor;
    if (bgColor === "rgb(255, 255, 255)") {
      setIsWhite(true);
    } else {
      setIsWhite(false);
    }
  }, []);

  return (
    <nav
      className={`flex items-center justify-between bg-[#00A3FF] px-6 py-4 transition-colors duration-300 ${
        isWhite ? "border-b-4 border-[#FFA6F6]" : ""
      }`}
    >
      {!isWhite ? (
        <>
          {" "}
          <div className="ml-11 flex items-center">
            {/* Torch Icon */}
            <Image
              src="/assets/NavbarDesktop/incandlogo.png"
              alt="Torch"
              width={15}
              height={14}
            />
          </div>
          <div className="flex items-center gap-20">
            <Link
              href="/"
              className="font-semibold text-black"
              onMouseEnter={() => setIsTHovered(true)}
              onMouseLeave={() => setIsTHovered(false)}
            >
              {!isTHovered ? (
                <>Home</>
              ) : (
                <>
                  Home
                  <Image
                    src="/assets/NavbarDesktop/wave.gif"
                    alt="wave"
                    width={40}
                    height={60}
                  />
                </>
              )}
            </Link>
            <Link
              href="/"
              className="font-semibold text-black"
              onMouseEnter={() => setIsEHovered(true)}
              onMouseLeave={() => setIsEHovered(false)}
            >
              {!isEHovered ? (
                <>Home</>
              ) : (
                <>
                  Home
                  <Image
                    src="/assets/NavbarDesktop/wave.gif"
                    alt="wave"
                    width={40}
                    height={60}
                  />
                </>
              )}
            </Link>
            <Link
              href="/"
              className="font-semibold text-black"
              onMouseEnter={() => setIsPHovered(true)}
              onMouseLeave={() => setIsPHovered(false)}
            >
              {!isPHovered ? (
                <>Home</>
              ) : (
                <>
                  Home
                  <Image
                    src="/assets/NavbarDesktop/wave.gif"
                    alt="wave"
                    width={40}
                    height={60}
                  />
                </>
              )}
            </Link>
            <Link
              href="/"
              className="font-semibold text-black"
              onMouseEnter={() => setIsUHovered(true)}
              onMouseLeave={() => setIsUHovered(false)}
            >
              {!isUHovered ? (
                <>Home</>
              ) : (
                <>
                  Home
                  <Image
                    src="/assets/NavbarDesktop/wave.gif"
                    alt="wave"
                    width={40}
                    height={60}
                  />
                </>
              )}
            </Link>
            <Link
              href="/"
              className="font-semibold text-black"
              onMouseEnter={() => setIsWHovered(true)}
              onMouseLeave={() => setIsWHovered(false)}
            >
              {!isWHovered ? (
                <>Home</>
              ) : (
                <>
                  Home
                  <Image
                    src="/assets/NavbarDesktop/wave.gif"
                    alt="wave"
                    width={40}
                    height={60}
                  />
                </>
              )}
            </Link>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className="ml-11 flex items-center">
            {/* Torch Icon */}
            <Image
              src="/assets/NavbarDesktop/incandlogo-white.png"
              alt="Torch"
              width={15}
              height={14}
            />
          </div>
          <div className="flex items-center gap-20">
            <Link
              href="/"
              className="font-semibold text-black"
              onMouseEnter={() => setIsTHovered(true)}
              onMouseLeave={() => setIsTHovered(false)}
            >
              {!isTHovered ? (
                <>Home</>
              ) : (
                <>
                  Home
                  <Image
                    src="/assets/NavbarDesktop/wave.gif"
                    alt="wave"
                    width={40}
                    height={60}
                  />
                </>
              )}
            </Link>
            <Link
              href="/"
              className="font-semibold text-black"
              onMouseEnter={() => setIsEHovered(true)}
              onMouseLeave={() => setIsEHovered(false)}
            >
              {!isEHovered ? (
                <>Home</>
              ) : (
                <>
                  Home
                  <Image
                    src="/assets/NavbarDesktop/wave.gif"
                    alt="wave"
                    width={40}
                    height={60}
                  />
                </>
              )}
            </Link>
            <Link
              href="/"
              className="font-semibold text-black"
              onMouseEnter={() => setIsPHovered(true)}
              onMouseLeave={() => setIsPHovered(false)}
            >
              {!isPHovered ? (
                <>Home</>
              ) : (
                <>
                  Home
                  <Image
                    src="/assets/NavbarDesktop/wave.gif"
                    alt="wave"
                    width={40}
                    height={60}
                  />
                </>
              )}
            </Link>
            <Link
              href="/"
              className="font-semibold text-black"
              onMouseEnter={() => setIsUHovered(true)}
              onMouseLeave={() => setIsUHovered(false)}
            >
              {!isUHovered ? (
                <>Home</>
              ) : (
                <>
                  Home
                  <Image
                    src="/assets/NavbarDesktop/wave.gif"
                    alt="wave"
                    width={40}
                    height={60}
                  />
                </>
              )}
            </Link>
            <Link
              href="/"
              className="font-semibold text-black"
              onMouseEnter={() => setIsWHovered(true)}
              onMouseLeave={() => setIsWHovered(false)}
            >
              {!isWHovered ? (
                <>Home</>
              ) : (
                <>
                  Home
                  <Image
                    src="/assets/NavbarDesktop/wave.gif"
                    alt="wave"
                    width={40}
                    height={60}
                  />
                </>
              )}
            </Link>
          </div>
        </>
      )}

      <div className="mr-5 flex items-center">
        {/* Profile Icon Button */}
        <button
          className={`relative mb-2 mt-2 flex items-center rounded-lg bg-white shadow-md transition-transform ${isHovered ? "-translate-x-2 -translate-y-2 scale-110" : "scale-100"}`}
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
                className="relative ml-0.5 h-10 w-10 overflow-hidden rounded-l-lg"
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
                className="ml-2 font-oxygen font-semibold"
                style={{ color: "#562828" }}
              >
                @Jayz
              </span>
            </>
          ) : (
            // Hovered Button Content
            <div className="relative h-[40px] w-full">
              {/* Blue Layer */}
              <div
                className="absolute h-full w-full rounded-lg bg-blue-500"
                style={{
                  transform: "translate(8px, 8px)",
                  boxShadow: "2px 2px 0 black", // Proper shadow for bottom effect
                  zIndex: 1,
                }}
              ></div>
              {/* Yellow Layer */}
              <div
                className="absolute h-full w-full rounded-lg bg-yellow-400"
                style={{
                  transform: "translate(4px, 4px)",
                  boxShadow: "0px 2px 0 black", // Proper shadow for bottom effect
                  zIndex: 2,
                }}
              ></div>
              {/* Red Layer */}
              <div
                className="absolute flex h-full w-full items-center justify-center rounded-lg bg-red-400"
                style={{
                  transform: "translate(0, 0)", // No offset for the topmost layer
                  boxShadow: "0 2px 0 black", // Black outline
                  zIndex: 3,
                }}
              >
                <span
                  className="font-semibold text-black"
                  style={{ fontFamily: "'Oxygen', sans-serif" }}
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
