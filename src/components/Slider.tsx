import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const InfiniteTextSlider = () => {
  const [direction, setDirection] = useState<1 | -1>(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection((prev) => (prev === 1 ? -1 : 1));
    }, 5000); // Change direction every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <Link href="/main_events">
    <div className="relative overflow-hidden w-full bg-black py-2 pt-20">
      <motion.div
        className="flex whitespace-nowrap text-white text-lg font-bold"
        animate={{ x: direction === 1 ? ["-100%", "0%"] : ["0%", "-100%"] }}
        transition={{ ease: "linear", duration: 5, repeat: Infinity }}
      >
        {Array.from({ length: 10 }, (_, index) => (
          <span key={index} className="mx-4">CLICK HERE TO CHECK  ! ✳</span>
        ))}
      </motion.div>
    </div>
    </Link>
  );
};

export default InfiniteTextSlider;