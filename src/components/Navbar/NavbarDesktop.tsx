"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Login from "../GoogleAuth";
import { usePathname, useRouter } from "next/navigation";

const NavbarDesktop = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [isWhite, setIsWhite] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isLoaded, setIsLoaded] = useState(true);
  const [currentColor, setCurrentColor] = useState("#F1D22B");
  const [textColor, setTextColor] = useState("#000000");

  useEffect(() => {
    if (pathname !== "/gallery") {
      setIsLoaded(false);
    }
    if (pathname === "/game") {
      setTextColor("#FFFFFF");
    } else {
      setTextColor("#000000");
    }
    setTimeout(() => {
      setIsLoaded(false);
    }, 2300);
  }, [pathname]);

  useEffect(() => {
    if (!pathname) return;

    setTimeout(() => {
      if (pathname === "/gallery") {
        setCurrentColor("transparent");
      } else if (pathname.startsWith("/event/")) {
        const parts = pathname.split("/");
        const eventId = parseInt(parts[2] ?? "", 10);
        if (!isNaN(eventId)) {
          setCurrentColor(
            eventPageNavColors[(eventId - 1) % eventPageNavColors.length] ??
              "#F1D22B",
          );
        }
      } else {
        setCurrentColor(linkColors.get(pathname) ?? "#F1D22B");
      }
    }, 50); // Small delay ensures correct pathname update
  }, [pathname, router]);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const documentHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight;
    const percentage = (scrollY / (documentHeight - windowHeight)) * 100;

    if (pathname === "/") {
      if (percentage < 17) {
        setTextColor("#000000");
        setCurrentColor("#F1D22B");
      } else if (percentage < 38) {
        setTextColor("#000000");
        setCurrentColor("#FFA6F6");
      } else if (percentage < 60) {
        setTextColor("#000000");
        setCurrentColor("#C4FDFF");
      } else if (percentage < 80) {
        setTextColor("#000000");
        setCurrentColor("#9EC92C");
      } else if (percentage < 97) {
        setCurrentColor("#3C0FD5");
        setTextColor("#000000");
      } else {
        setCurrentColor("#000000");
        setTextColor("#FFFFFF");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const navbar = document.querySelector("nav")!;
    const bgColor = window.getComputedStyle(navbar).backgroundColor;
    setIsClient(true);
    setIsWhite(bgColor === "rgb(255, 255, 255)");
  }, []);

  return (
    <nav
      className={`fixed z-[10000] flex min-w-[100vw] items-center justify-between px-6 py-4 4k:h-[10rem] 4k:px-8 4k:py-10 ${
        isWhite ? "border-b-4 border-[#FFA6F6]" : ""
      }`}
      style={{
        backgroundColor: currentColor,
        transform: "all 5s ease",
        filter: isLoaded ? "blur(10rem)" : "blur(0px)",
        transition: pathname === "/gallery" ? "ease 1000ms" : "",
      }}
    >
      {!isWhite ? (
        <>
          <div className="ml-11 flex items-center 4k:scale-125">
            <Image
              src="/assets/NavbarDesktop/incandlogo.png"
              alt="Torch"
              width={15}
              height={14}
            />
          </div>
          <div className="-mb-2 flex items-center md:gap-10 lg:gap-20 4k:gap-40">
            {NavDetails.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="group font-semibold text-black transition-all duration-200 hover:text-white"
              >
                <div className="flex">
                  <Image
                    className="me-2 mt-2 h-[10px] w-[10px] object-contain opacity-0 transition-all duration-200 group-hover:opacity-100 4k:h-10 4k:w-10"
                    src="/assets/NavbarDesktop/arrow.png"
                    alt="arrow"
                    width={10}
                    height={10}
                  />
                  <div className="flex flex-col items-center justify-center font-tusker font-thin 4k:text-4xl">
                    <p style={{ color: textColor }}>{item.name}</p>
                    <Image
                      className="opacity-0 transition-all duration-200 group-hover:opacity-100"
                      src="/assets/NavbarDesktop/wave.gif"
                      alt="wave"
                      width={40}
                      height={60}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="ml-11 flex items-center">
            <Image
              src="/assets/NavbarDesktop/incandlogo-white.png"
              alt="Torch"
              width={15}
              height={14}
            />
          </div>
          <div className="flex items-center gap-20">
            {NavDetails.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="group font-semibold text-black transition-all duration-200 hover:text-white"
              >
                <div className="flex">
                  <Image
                    className="me-2 mt-2 h-[10px] w-[10px] object-contain opacity-0 transition-all duration-200 group-hover:opacity-100"
                    src="/assets/NavbarDesktop/arrow.png"
                    alt="arrow"
                    width={10}
                    height={10}
                  />
                  <div className="flex flex-col items-center justify-center">
                    <p>{item.name}</p>
                    <Image
                      className="opacity-0 transition-all duration-200 group-hover:opacity-100"
                      src="/assets/NavbarDesktop/wave.gif"
                      alt="wave"
                      width={40}
                      height={60}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
      <div className="mr-5 flex items-center">
        {isClient && (
          <div className="flex h-auto min-h-10 w-auto min-w-32 scale-100 items-center rounded-lg bg-white shadow-[4px_4px_0px_black] transition-transform duration-300 hover:-translate-x-2 hover:-translate-y-2 hover:scale-110">
            <Login />
          </div>
        )}
      </div>
    </nav>
  );
};

const NavDetails = [
  { name: "Home", link: "/" },
  // { name: "Events", link: "/events" },
  { name: "ArtistLineup", link: "/lineup" },
  { name: "Gallery", link: "/gallery" },
  { name: "LuminisLookout", link: "/game" },
  { name: "Team", link: "/team" },
];

const linkColors = new Map<string, string>([
  ["/", "#F1D22B"],
  ["/events", "#FFA6F6"],
  ["/gallery", "transparent"],
  ["/game", "#000E16"],
  ["/team", "#FFF361"],
  ["/CarpeDiem1", "#00A3FF"],
  ["/CarpeDiem2", "#00A3FF"],
  ["/Dashboard", "#FFAB17"],
  ["/gallery_page", "#FC7566"],
  ["/game/gallery", "#FAE00D"],
  ["/lineup", "#FFEDFD"],
]);

const eventPageNavColors = [
  "#8CF9FC",
  "#ABA8FF",
  "#8BF965",
  "#FFA4F6",
  "#F6E659",
  "#54B4FF",
];

export default NavbarDesktop;
