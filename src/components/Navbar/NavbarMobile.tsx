"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarMobile = () => {
  const navColors = { home: "#7139CE", about: "#FFA6F6", sponsors: "#B5FCFF" };
  const [navColor, setNavColor] = useState(navColors.home);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname == "/") setNavColor(navColors.home);
    if (pathname == "/about") setNavColor(navColors.about);
    if (pathname == "/sponsors") setNavColor(navColors.sponsors);
  }, [pathname]);
  return (
    <nav
      className={`fixed ${isMenuOpen ? "h-screen bg-[#141414]" : "h-[76px]"} z-50 w-full transition-all duration-500 ease-linear`}
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
      {isMenuOpen && <hr className="mx-6 border-2" />}
      <div
        className={`flex w-screen flex-col items-center justify-center gap-10 py-10 ${isMenuOpen ? "h-full bg-maze-pattern opacity-100" : "h-0 opacity-0"} overflow-hidden transition-all duration-500 ease-linear`}
      >
        {NavDetails.map((data) => {
          return (
            <Link
              href={data.link}
              onClick={() => setIsMenuOpen(false)}
              key={data.title}
            >
              <NavTab
                title={data.title}
                desc={data.desc}
                link={data.link}
                bgColor={data.bgColor}
                bigTextColor={data.bigTextColor}
                smallTextColor={data.smallTextColor}
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
}
const NavDetails = [
  {
    title: "Home",
    link: "/",
    bgColor: "#FFA6F6",
    bigTextColor: "#E1067B",
    smallTextColor: "#F12390",
    desc: "this is the nav details",
  },
  {
    title: "About",
    link: "/about",
    bgColor: "#65C8FF",
    bigTextColor: "#068AC2",
    smallTextColor: "#0893CF",
    desc: "this is the nav details",
  },
  {
    title: "Sponsors",
    link: "/sponsors",
    bgColor: "#FFF066",
    bigTextColor: "#EBB200",
    smallTextColor: "#E8B002",
    desc: "this is the nav details",
  },
];

const NavTab = (data: NavDetailsProps) => {
  return (
    <div
      className="z-50 flex h-[6rem] w-[20rem] flex-col items-start justify-center rounded-xl px-6 shadow-lg"
      style={{ backgroundColor: data.bgColor }}
    >
      <h1
        className="font-tusker text-2xl uppercase"
        style={{ color: data.bigTextColor }}
      >
        {data.title}
      </h1>
      <p
        className="text-[${data.smallTextColor}] font-oxygen text-md font-bold"
        style={{ color: data.smallTextColor }}
      >
        {data.desc}
      </p>
    </div>
  );
};
