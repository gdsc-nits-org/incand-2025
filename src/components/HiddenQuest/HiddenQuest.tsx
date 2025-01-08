"use client"; 

import { useState, useEffect } from "react";

import HiddenQuestDesktop from "./HiddenQuestDesktop";
import HiddenQuestMobile from "./HiddenQuestMobile";

const HiddenQuest = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <HiddenQuestMobile /> : <HiddenQuestDesktop />;
};

export default HiddenQuest;
