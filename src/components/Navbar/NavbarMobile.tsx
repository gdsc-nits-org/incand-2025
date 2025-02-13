"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import Login from "../GoogleAuth";
import { usePathname } from "next/navigation";

const NavbarMobile = () => {
  const pathname = usePathname();
  useEffect(() => {
    updateColor();
    handleScroll();
  }, [pathname]);
  const [navColor, setNavColor] = useState(navColors.home);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const documentHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight;
    const percentage = (scrollY / (documentHeight - windowHeight)) * 100;
    if (pathname === "/" || pathname === "/#home") {
      if (percentage < 17) {
        setNavColor(navColors.home);
      } else if (percentage < 38) {
        setNavColor(navColors.about1);
      } else if (percentage < 60) {
        setNavColor(navColors.about2);
      } else if (percentage < 80) {
        setNavColor(navColors.sponsors);
      } else {
        setNavColor(navColors.merch);
      }
    }
  };

  const updateColor = () => {
    setTimeout(() => {
      // idk
    }, 1000);
    setNavColor(linkColors.get(pathname) ?? "#F1D22B");
  };
  useEffect(() => {
    if (pathname.startsWith("/event/")) {
      const eventId = pathname.split("/")[2] as unknown as number;
      setNavColor(
        eventPageNavColors[(eventId - 1) % eventPageNavColors.length] ??
          "#F1D22B",
      );
    } else {
      setNavColor(linkColors.get(pathname) ?? "#F1D22B");
    }
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 overflow-y-auto ${isMenuOpen ? "h-screen w-screen bg-[#121212] bg-maze-pattern" : "h-[76px] tablet:h-[100px]"} z-[10000] transition-all delay-100 duration-500 ease-linear ipadair:hidden`}
    >
      <div
        className={`z-50 flex h-[76px] w-full items-center justify-between px-6 transition-colors duration-500 ease-linear tablet:h-[100px]`}
        style={
          !isMenuOpen
            ? { backgroundColor: navColor }
            : { backgroundColor: "transparent" }
        }
      >
        <Link href="/">
          <Image
            src="/assets/navbar/incand-logo.svg"
            width={14.71}
            height={44.83}
            alt="incand-logo"
          />
        </Link>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="justify-self-end p-1"
        >
          {""}
          <Image
            src={`/assets/navbar/hamburger-${isMenuOpen ? "close" : "open"}.svg`}
            width={38.7}
            height={38.7}
            alt="hamburger-menu "
          />
        </button>
      </div>
      <hr
        className={`${isMenuOpen ? "mx-6 border-2 border-[#CFCFCFEB]" : "border-4 border-[#00000018]"}`}
      />
      <div
        className={`flex w-screen flex-col items-center justify-between gap-10 pt-10 ${isMenuOpen ? "h-full opacity-100" : "h-0 opacity-0"} overflow-scroll transition-all delay-100 duration-300 ease-linear`}
      >
        {/* Login */}
        <div
          className={`ease-linaer flex h-auto min-h-10 w-auto min-w-32 scale-100 items-center rounded-lg bg-white shadow-[8px_8px_0px_black] transition-transform duration-300 hover:-translate-x-2 hover:-translate-y-2 hover:scale-110`}
        >
          <Login />
        </div>
        {/* Tabs */}
        {NavDetails.map((data) => {
          return (
            <Link
              href={data.link}
              onClick={() => {
                setTimeout(() => {
                  setIsMenuOpen(false);
                }, 300);
              }}
              key={data.title}
            >
              <NavTab
                title={data.title}
                desc={data.desc}
                link={data.link}
                bgColor={data.bgColor}
                bigTextColor={data.bigTextColor}
                smallTextColor={data.smallTextColor}
                active={data.link === pathname}
              />
            </Link>
          );
        })}
        {/* Marquee */}
        <div
          className={`w-full ${isMenuOpen ? "opacity-100" : "opacity-0"} transition-opacity duration-500 ease-linear`}
        >
          <Marquee speed={100} direction="left" gradientColor="transparent">
            <Image
              layout="responsive"
              src="/assets/navbar/navbar-bottom.svg"
              width={1000}
              height={100}
              alt=""
            />
            <Image
              layout="responsive"
              src="/assets/navbar/navbar-bottom.svg"
              width={1000}
              height={100}
              alt=""
            />
            <Image
              layout="responsive"
              src="/assets/navbar/navbar-bottom.svg"
              width={1000}
              height={100}
              alt=""
            />
            <Image
              layout="responsive"
              src="/assets/navbar/navbar-bottom.svg"
              width={1000}
              height={100}
              alt=""
            />
          </Marquee>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMobile;

interface NavDetailsProps {
  title: string;
  desc: string;
  link: string;
  bgColor: string;
  bigTextColor: string;
  smallTextColor: string;
  active: boolean;
}

// if possible keep the description short (5 or 6 words)
const NavDetails = [
  {
    title: "Home",
    link: "/",
    bgColor: "#FFA6F6",
    bigTextColor: "#E1067B",
    smallTextColor: "#F12390",
    desc: "Enter the maze where brilliance begins",
  },
  // {
  //   title: "Event",
  //   link: "/events",
  //   bgColor: "#65C8FF",
  //   bigTextColor: "#068AC2",
  //   smallTextColor: "#0893CF",
  //   desc: "Trace the path of creativity and culture",
  // },
  {
    title: "ArtistLineup",
    link: "/lineup_reveal",
    bgColor: "#65C8FF",
    bigTextColor: "#068AC2",
    smallTextColor: "#0893CF",
    desc: "Trace the path of creativity and culture",
  },
  {
    title: "Gallery",
    link: "/gallery",
    bgColor: "#FFF066",
    bigTextColor: "#EBB200",
    smallTextColor: "#E8B002",
    desc: "The guiding beacons in our labyrinth of dreams",
  },
  {
    title: "LuminisLookout",
    link: "/game",
    bgColor: "#3C0FD5",
    bigTextColor: "#180569",
    smallTextColor: "#180569",
    desc: "Unveil keepstakes from the maze of memories",
  },
  {
    title: "Team",
    link: "/team",
    bgColor: "#FC7566",
    bigTextColor: "#9b1203",
    smallTextColor: "#9b1203",
    desc: "Meet the minds shaping the journey through the Labyrinth",
  },
];

const navColors = {
  home: "#F1D22B",
  about1: "#FFA6F6",
  about2: "#C4FDFF",
  sponsors: "#9EC92C",
  merch: "#3C0FD5",
};

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
  ["/lineup_reveal", "#FFEDFD"],
]);

const eventPageNavColors = [
  "#8CF9FC",
  "#ABA8FF",
  "#8BF965",
  "#FFA4F6",
  "#F6E659",
  "#54B4FF",
];

const NavTab = (data: NavDetailsProps) => {
  return (
    <div
      style={
        data.active
          ? {
              backgroundColor: "black",
              boxShadow: "6px 6px 0px " + data.bigTextColor,
            }
          : { backgroundColor: data.bgColor }
      }
      className={`z-50 flex h-fit w-[80vw] items-center justify-center py-4 pb-2 pt-2 tablet:py-8 tablet:text-xl ${data.active ? "" : "shadow-[4px_4px_0px_black]"} rounded-xl px-6 shadow-lg transition-all duration-200 ease-linear`}
    >
      <div
        className={`flex w-full flex-col ${data.active && ""} transition-all duration-200 ease-linear`}
      >
        <div className="flex">
          <div
            className={`${data.active && "flex-grow"} transition-all duration-200 ease-linear`}
          ></div>
          <h1
            className={`font-tusker text-2xl uppercase transition-all duration-200 ease-linear`}
            style={{ color: data.bigTextColor }}
          >
            {data.title}
          </h1>
        </div>
        <div className="flex">
          <div
            className={`${data.active && "flex-grow"} transition-all duration-200 ease-linear`}
          ></div>
          <p
            className={`text-[${data.smallTextColor}] text-md font-oxygen font-bold leading-tight transition-all duration-200 ease-linear`}
            style={{ color: data.smallTextColor }}
          >
            {data.desc}
          </p>
        </div>
      </div>
    </div>
  );
};
