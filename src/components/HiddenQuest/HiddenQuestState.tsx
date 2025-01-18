"use client";
import type { Dispatch, SetStateAction } from "react";
import EnticingButton from "./EnticingButton";

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

  return (
    <>
      <div onClick={handleOpen}>
        <EnticingButton />
      </div>
    </>
  );
};

export default HiddenQuest;
