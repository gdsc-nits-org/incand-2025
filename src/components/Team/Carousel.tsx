import React, { useState } from "react";

const MAX_VISIBILITY = 2;


interface CarouselProps {
  children: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [active, setActive] = useState(0);
  const count = React.Children.count(children);


  return (
    <div className="relative flex h-[25rem] w-full flex-col items-center justify-center overflow-hidden">
      {/* Carousel Wrapper */}
      <div className="relative h-full w-full">
        {active > 0 && (
          <button
            className="absolute left-12 mobile2:left-16 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer rounded-full bg-transparent p-2 text-3xl text-yellow-400"
            onClick={() => setActive((i) => i - 1)}
          >
            <img
              src="/assets/Team/leftArrow.png"
              className="h-[100%] w-[100%] opacity-90"
              alt="Meet Our Team"
            />
          </button>
        )}
        {React.Children.map(children, (child, i) => (
          <div
            className={`absolute flex h-full w-full flex-row items-center justify-center transition-all duration-300 ease-out ${
              Math.abs(active - i) >= MAX_VISIBILITY
                ? "pointer-events-none opacity-0"
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
            className="absolute right-12 mobile2:right-16 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer rounded-full bg-transparent p-2 text-3xl text-yellow-400"
            onClick={() => setActive((i) => i + 1)}
          >
            <img
              src="/assets/Team/rightArrow.png"
              className="h-[100%] w-[100%] opacity-90"
              alt="Meet Our Team"
            />
          </button>
        )}
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 flex space-x-2">
        {React.Children.map(children, (_, i) => (
          <div
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              i === active ? "bg-white" : "bg-yellow-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
