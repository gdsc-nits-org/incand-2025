"use client";
import { useEffect, useState } from "react";
import NavbarMobile from "./NavbarMobile";
const Navbar = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <>
      <NavbarMobile />
    </>
  );
};

export default Navbar;
