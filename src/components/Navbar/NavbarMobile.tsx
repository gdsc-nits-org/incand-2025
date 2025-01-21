"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const NavbarMobile = () => {
  const navColors = {
    home: "#7139CE",
    about1: "#FFA6F6",
    about2: "#C4FDFF",
    sponsors: "#9EC92C",
    merch: "#3C0FD5",
  };
  const [currentLink, setCurrentLink] = useState("");
  useEffect(() => {
    const link = window.location.pathname + window.location.hash;
    setCurrentLink(link);
    handleScroll();
  }, [window.location.pathname, window.location.hash]);
  const [navColor, setNavColor] = useState(navColors.home);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const documentHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight;
    const percentage = (scrollY / (documentHeight - windowHeight)) * 100;
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
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 ${isMenuOpen ? "h-screen w-screen bg-[#121212] bg-maze-pattern" : "h-[76px] tablet:h-[100px]"} z-[10000] transition-all delay-100 duration-500 ease-linear ipadair:hidden`}
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
        className={`flex w-screen flex-col items-center justify-start gap-10 py-10 ${isMenuOpen ? "h-full opacity-100" : "h-0 opacity-0"} overflow-scroll transition-all delay-100 duration-300 ease-linear`}
      >
        {NavDetails.map((data) => {
          return (
            <Link
              href={data.link}
              onClick={() => {
                setTimeout(() => {
                  setIsMenuOpen(false);
                }, 300);
                setCurrentLink(data.link);
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
                active={data.link === currentLink}
              />
            </Link>
          );
        })}
        <div
          className={`absolute bottom-0 w-full ${isMenuOpen ? "opacity-100" : "opacity-0"} transition-opacity duration-500 ease-linear`}
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
const NavDetails = [
  {
    title: "Home",
    link: "/#home",
    bgColor: "#FFA6F6",
    bigTextColor: "#E1067B",
    smallTextColor: "#F12390",
    desc: "Enter the maze where brilliance begins",
  },
  {
    title: "About",
    link: "/#about",
    bgColor: "#65C8FF",
    bigTextColor: "#068AC2",
    smallTextColor: "#0893CF",
    desc: "Trace the path of creativity and culture",
  },
  {
    title: "Sponsors",
    link: "/#sponsors",
    bgColor: "#FFF066",
    bigTextColor: "#EBB200",
    smallTextColor: "#E8B002",
    desc: "The guiding beacons in our labyrinth of dreams",
  },
  {
    title: "Merch",
    link: "/#merch",
    bgColor: "#3C0FD5",
    bigTextColor: "#180569",
    smallTextColor: "#180569",
    desc: "Claim your keepsakes from the maze of memories",
  },
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
      className={`z-50 flex h-fit w-[80vw] items-center justify-center pb-2 pt-2 ${data.active ? "" : "shadow-[4px_4px_0px_black]"} rounded-xl px-6 shadow-lg transition-all duration-200 ease-linear`}
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