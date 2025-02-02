"use client";
import { useState, useEffect } from "react";
import TeamMobile from "../../../components/Team/TeamMobile";
import TeamDesktop from "../../../components/Team/TeamDesktop";
export const runtime = "edge";

const Team = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <TeamMobile /> : <TeamDesktop />;
};

export default Team;
