import { useEffect, useState } from "react";
import {
  useMotionValue,
  useTransform,
  animate,
  useMotionValueEvent,
} from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import gsap from "gsap";

const LoadingScreen = () => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const [progress, setProgress] = useState(100);
  const [isVisible, setIsVisible] = useState(true);
  const [loadingFinished, setLoadingFinished] = useState(true);

  useEffect(() => {
    const controls = animate(count, 100, {
      duration: 5,
    });

    return () => controls.stop();
  }, [count]);

  useMotionValueEvent(rounded, "change", (latest) => {
    setProgress(latest);
    if (latest === 100) {
      setTimeout(() => {
        setIsVisible(false);
        setLoadingFinished(false);
      }, 500);
    }
  });

  useEffect(() => {
    gsap.to(".counter", 0.25, {
      delay: 5,
      opacity: 0,
    });

    gsap.to(".bar", 1.5, {
      delay: 4.5,
      height: 0,
      stagger: {
        amount: 0.5,
      },
      ease: "power4.inOut",
    });
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[1000] flex h-screen w-screen items-center justify-center">
      <div className="counter fixed z-[10] flex min-h-[100vh] w-full items-center justify-center bg-[url('/assets/Loader/load.webp')] bg-cover font-tusker text-[2.5rem] text-[#ffffff]">
        <div className="flex flex-col items-center gap-y-4 font-tusker">
          <DotLottieReact
            src="/assets/lottie/flame.lottie"
            className="w-[15rem]"
            loop
            autoplay
          />
          <img
            src="/assets/Loader/flame-hold.svg"
            className="relative top-[-2rem] h-[5rem]"
            alt="flame"
          />
          <span>{progress}%</span>
        </div>
      </div>
      <div className="overlay z-2 fixed flex h-[100vh] w-[100vw]">
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="bar h-[105vh] w-[10vw] bg-[#1a1a1a] bg-[url('/assets/Loader/load.webp')] bg-cover"
            ></div>
          ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
