"use client"; // Add this at the top to mark the file as a Client Component
import React, { Dispatch, SetStateAction } from "react";

interface HiddenQuestProps {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const HiddenQuest: React.FC<HiddenQuestProps> = ({
  isVisible,
  setIsVisible,
}) => {
  const handleOpen = () => {
    setIsVisible(!isVisible);
  };

  const handleScrollToNext = () => {
    const secondDiv = document.getElementById("secondDiv");
    if (secondDiv) {
      secondDiv.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <button className="h-[24px] w-[24px] rounded-md" onClick={handleOpen}>
        <img
          src="/assets/HiddenQuest&Button/yellowBox.png"
          className="z-[10000000] scale-50 cursor-pointer"
          alt="HiddenQuest"
        />
      </button>
    </>
  );
};

export default HiddenQuest;
