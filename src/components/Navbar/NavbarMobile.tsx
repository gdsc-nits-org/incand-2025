"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const NavbarMobile = () => {
  const navColors = {
    home: "#7139CE",
    about1: "#FFA6F6",
    about2: "#C4FDFF",
    sponsors: "#9EC92C",
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
    if (percentage < 25) {
      setNavColor(navColors.home);
    } else if (percentage < 50) {
      setNavColor(navColors.about1);
    } else if (percentage < 75) {
      setNavColor(navColors.about2);
    } else {
      setNavColor(navColors.sponsors);
    }
    // console.log(window.scrollY);
    // if (window.scrollY <= 700) {
    //   setNavColor(navColors.home);
    // } else if (window.scrollY <= 1400) {
    //   setNavColor(navColors.about);
    // } else if (window.scrollY <= 2100) {
    //   setNavColor(navColors.sponsors);
    // }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 ${isMenuOpen ? "h-screen w-screen bg-[#141414]" : "h-[76px]"} z-[10000] transition-all delay-100 duration-500 ease-linear ipadpro:hidden`}
    >
      <div
        className={`flex h-[76px] w-full items-center justify-between px-6 transition-colors duration-500 ease-linear`}
        style={
          !isMenuOpen
            ? { backgroundColor: navColor }
            : { backgroundColor: "#141414" }
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
            alt="hamburger-menu"
          />
        </button>
      </div>
      <hr
        className={`${isMenuOpen ? "mx-6 border-2 border-[#CFCFCFEB]" : "border-4 border-[#00000018]"}`}
      />
      <div
        className={`flex w-screen flex-col items-center justify-center gap-10 py-10 ${isMenuOpen ? "h-full bg-maze-pattern opacity-100" : "h-0 opacity-0"} overflow-hidden transition-all delay-100 duration-500 ease-linear`}
      >
        {NavDetails.map((data) => {
          return (
            <Link
              href={data.link}
              onClick={() => {
                setIsMenuOpen(false);
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
        <Image
          className={`absolute bottom-0 ${isMenuOpen ? "opacity-100" : "opacity-0"} transition-opacity duration-500 ease-linear`}
          src="/assets/navbar/navbar-bottom.svg"
          width={1000}
          height={100}
          alt=""
        />
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
    desc: "this is the nav details",
  },
  {
    title: "About",
    link: "/#about",
    bgColor: "#65C8FF",
    bigTextColor: "#068AC2",
    smallTextColor: "#0893CF",
    desc: "this is the nav details",
  },
  {
    title: "Sponsors",
    link: "/#sponsors",
    bgColor: "#FFF066",
    bigTextColor: "#EBB200",
    smallTextColor: "#E8B002",
    desc: "this is the nav details",
  },
];

const NavTab = (data: NavDetailsProps) => {
  return (
    <div
      className={`z-50 flex h-[6rem] w-[20rem] flex-col ${data.active ? `items-end` : "items-start shadow-[4px_4px_0px_black]"} justify-center rounded-xl px-6 shadow-lg transition-all duration-100 ease-linear`}
      style={
        data.active
          ? {
              backgroundColor: "black",
              boxShadow: "6px 6px 0px " + data.bigTextColor,
            }
          : { backgroundColor: data.bgColor }
      }
    >
      <h1
        className="font-tusker text-2xl uppercase"
        style={{ color: data.bigTextColor }}
      >
        {data.title}
      </h1>
      <p
        className="text-[${data.smallTextColor}] text-md font-oxygen font-bold"
        style={{ color: data.smallTextColor }}
      >
        {data.desc}
      </p>
    </div>
  );
};
