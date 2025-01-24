import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Login from "../GoogleAuth";

const NavbarDesktop = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWhite, setIsWhite] = useState(false);
  const [isTHovered, setIsTHovered] = useState(false);
  const [isEHovered, setIsEHovered] = useState(false);
  const [isPHovered, setIsPHovered] = useState(false);
  const [isUHovered, setIsUHovered] = useState(false);
  const [isWHovered, setIsWHovered] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const navbar = document.querySelector("nav")!;
    const bgColor = window.getComputedStyle(navbar).backgroundColor;
    setIsClient(true);
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
        {isClient && (
          <div
            className={`relative mb-2 mt-2 flex items-center rounded-lg bg-white shadow-md transition-transform ${
              isHovered
                ? "-translate-x-2 -translate-y-2 scale-110"
                : "scale-100"
            }`}
            style={{
              width: "125px",
              height: "40px",
              boxShadow: "4px 4px 0px black",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Login />
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarDesktop;
