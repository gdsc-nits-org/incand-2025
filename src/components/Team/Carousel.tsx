import React, { useState, useEffect } from "react";

const MAX_VISIBILITY = 2;
const AUTOPLAY_INTERVAL = 3000;

interface CarouselProps {
  children: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [active, setActive] = useState(0);
  const count = React.Children.count(children);

  useEffect(() => {
    const autoplay = setInterval(() => {
      setActive((prevActive) => (prevActive + 1) % count);
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(autoplay);
  }, [count]);

  return (
    <div className="w-full h-[25rem] relative flex flex-col justify-center items-center overflow-hidden">
      {/* Carousel Wrapper */}
      <div className="w-full h-full relative">
        {active > 0 && (
          <button
            className="absolute left-8 top-1/2 transform -translate-y-1/2 text-yellow-400 text-3xl z-10 cursor-pointer p-2 rounded-full bg-transparent hover:bg-gray-200"
            onClick={() => setActive((i) => i - 1)}
          >
             <img src="/assets/Team/leftArrow.png" className="w-[100%] h-[100%]" alt="Meet Our Team" />
          </button>
        )}
        {React.Children.map(children, (child, i) => (
          <div
            className={`absolute flex flex-row justify-center items-center w-full h-full transition-all duration-300 ease-out ${
              Math.abs(active - i) >= MAX_VISIBILITY
                ? "opacity-0 pointer-events-none"
                : "opacity-100"
            }`}
            style={{
              transform: `scaleY(${1 - Math.abs(active - i) * 0.4}) translateX(${
                (active - i) * -16
              }%) translateZ(${Math.abs(active - i) * -30}px)`,
              filter: `blur(${Math.abs(active - i) * 4}px)`,
              zIndex: `${i === active ? 5 : 0}`,
            }}
          >
            {child}
          </div>
        ))}
        {active < count - 1 && (
          <button
            className="absolute right-8 top-1/2 transform -translate-y-1/2 text-yellow-400 text-3xl z-10 cursor-pointer p-2 rounded-full bg-transparent hover:bg-gray-200"
            onClick={() => setActive((i) => i + 1)}
          >
             <img src="/assets/Team/rightArrow.png" className="w-[100%] h-[100%]" alt="Meet Our Team" />
          </button>
        )}
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 flex space-x-2">
        {React.Children.map(children, (_, i) => (
          <div
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === active ? "bg-white" : "bg-yellow-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
