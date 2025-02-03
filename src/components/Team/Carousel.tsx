import React, { useState } from "react";

const MAX_VISIBILITY = 2;

interface CarouselProps {
  children: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [active, setActive] = useState(0);
  const count = React.Children.count(children);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance to trigger movement
  const SWIPE_THRESHOLD = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    const touchX = e.touches[0]?.clientX;
    if (touchX !== undefined) {
      setTouchStart(touchX);
      setTouchEnd(null);
    }
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    const touchX = e.touches[0]?.clientX;
    if (touchX !== undefined) {
      setTouchEnd(touchX);
    }
  };
  
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;

    if (Math.abs(distance) > SWIPE_THRESHOLD) {
      if (distance > 0 && active < count - 1) {
        setActive((i) => i + 1);
      } else if (distance < 0 && active > 0) {
        setActive((i) => i - 1);
      }
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div
      className="relative flex h-[25rem] w-full flex-col items-center justify-center overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Carousel Wrapper */}
      <div className="relative h-full w-full">
        {active > 0 && (
          <button
            className="absolute left-8 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer rounded-full bg-transparent p-2 text-3xl text-yellow-400 mobile2:left-16"
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
            className="absolute right-8 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer rounded-full bg-transparent p-2 text-3xl text-yellow-400 mobile2:right-16"
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
