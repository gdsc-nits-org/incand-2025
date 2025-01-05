"use client";
import dotsAnimation from "../../../public/assets/lottie/gdg-animation.json";
import dynamic from "next/dynamic";

const LottiePlayer = dynamic(() => import("lottie-react"), {
  ssr: false,
});

const LottieAnimation = () => {
  return (
    <LottiePlayer
      animationData={dotsAnimation}
      loop
      className="left-0 right-[2.29vw] m-0 h-[10vw] w-[20vw] p-0 md:h-[5vw] md:w-[8vw] lg:h-[5vw] lg:w-[8vw]"
    />
  );
};

export default LottieAnimation;
