import { useState, useEffect } from "react";
import TeamMobile from "./TeamMobile";
import TeamDesktop from "./TeamDesktop";

const Team = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <TeamMobile /> : <TeamDesktop />;
};

export default Team;
