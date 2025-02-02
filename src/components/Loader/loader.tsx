import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Loader from "~/app/loading";

interface LoadingScreenProps {
  onFinish: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinish }) => {
  const count = useMotionValue(0); // Start from 100
  const rounded = useTransform(count, Math.round);
  const [progress, setProgress] = useState(100);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const controls = animate(count, 100, {
      // Animate to 0 instead of 100
      duration: 7,
      ease: "easeInOut",
    });

    return () => controls.stop();
  }, [count]);

  useMotionValueEvent(rounded, "change", (latest) => {
    setProgress(latest);
    if (latest === 0) {
      setTimeout(() => {
        setIsVisible(false);
        onFinish(); // Notify parent to show home page
      }, 500);
    }
  });

  if (!isVisible) return null; // Remove component from DOM after fade-out

  return (
    <motion.div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-[url('/assets/Loader/load.svg')] bg-cover bg-no-repeat text-4xl font-bold text-white transition-opacity duration-500">
      <div className="flex flex-col items-center gap-y-4">
        <DotLottieReact
          src="https://lottie.host/1ec34d07-86b0-4b73-a4f3-87048b85e8e0/afqLS8MlAd.lottie"
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
    </motion.div>
  );
};

export default LoadingScreen;
