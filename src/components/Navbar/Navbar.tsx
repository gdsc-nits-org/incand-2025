"use client";
import { useEffect, useState } from "react";
import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";

const Navbar = () => {
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Ensures the code runs only on the client side
  useEffect(() => {
    setIsClient(true);
    setIsMobile(window.innerWidth < 768); // Set initial state based on window size

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isClient) {
    return null;
  }

  return <>{isMobile ? <NavbarMobile /> : <NavbarDesktop />}</>;
};

export default Navbar;
