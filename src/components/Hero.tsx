"use client";

import React, { useEffect, useState } from "react";
import HeroMobileView from "./Hero/HeroMobileView";
import HeroTabView from "./Hero/HeroTabView";
import { set } from "zod";

interface PopupProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hero: React.FC<PopupProps> = ({ isVisible, setIsVisible }) => {
  const [isTabView, setIsTabView] = useState(false);
  // const [isScaled, setIsScaled] = useState(false);
  // const [isCHovered, setIsCHovered] = useState(false);
  // const [isMHovered, setIsMHovered] = useState(false);

  useEffect(() => {

    const checkViewport = () => {
      setIsTabView(false);
      if (window.innerWidth < 1180 && window.innerWidth >= 768) {
        if (window.innerWidth > window.innerHeight) {
          setIsTabView(false);
        } else {
          setIsTabView(true);
        }
      }
    }
    checkViewport();

    window.addEventListener("resize", checkViewport);

    return () => window.removeEventListener("resize", checkViewport);
  }, [isTabView]);


  return (
   <>{isTabView ? <HeroTabView/> : <HeroMobileView/>}</>

  );
};

export default Hero;
