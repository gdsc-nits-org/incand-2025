import React, { useState, useEffect } from "react";

interface Card {
  id: number;
  image: string;
  className: string;
}

const GalleryAll: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 800);

  const cards: Card[] = [
    { id: 1, image: "https://res.cloudinary.com/dieef3h1w/image/upload/v1737309103/BACKGROUND_2_2_wcgagz.png", className: "bg-white col-span-3 row-span-3 rounded-[25px] flex justify-center items-center relative" },
    { id: 2, image: "https://res.cloudinary.com/dieef3h1w/image/upload/v1737309103/BACKGROUND_2_2_wcgagz.png", className: "bg-white col-span-3 row-span-3 col-start-4 rounded-[25px] flex justify-center items-center relative" },
    { id: 3, image: "https://res.cloudinary.com/dieef3h1w/image/upload/v1737309103/BACKGROUND_2_2_wcgagz.png", className: "bg-white col-span-2 row-span-3 col-start-7 rounded-[25px] flex justify-center items-center relative" },
    { id: 4, image: "https://res.cloudinary.com/dieef3h1w/image/upload/v1737309103/BACKGROUND_2_2_wcgagz.png", className: "bg-white col-span-2 row-span-2 row-start-4 rounded-[25px] flex justify-center items-center relative" },
    { id: 5, image: "https://res.cloudinary.com/dieef3h1w/image/upload/v1737309103/BACKGROUND_2_2_wcgagz.png", className: "bg-white col-span-2 row-span-2 col-start-3 row-start-4 rounded-[25px] flex justify-center items-center relative" },
    { id: 6, image: "https://res.cloudinary.com/dieef3h1w/image/upload/v1737309103/BACKGROUND_2_2_wcgagz.png", className: "bg-white col-span-4 row-span-4 col-start-5 row-start-4 rounded-[25px] flex justify-center items-center relative" },
    { id: 7, image: "https://res.cloudinary.com/dieef3h1w/image/upload/v1737309103/BACKGROUND_2_2_wcgagz.png", className: "bg-white col-span-2 row-span-4 row-start-6 rounded-[25px] flex justify-center items-center relative" },
    { id: 8, image: "https://res.cloudinary.com/dieef3h1w/image/upload/v1737309103/BACKGROUND_2_2_wcgagz.png", className: "bg-white col-span-2 row-span-4 col-start-3 row-start-6 rounded-[25px] flex justify-center items-center relative" },
    { id: 9, image: "https://res.cloudinary.com/dieef3h1w/image/upload/v1737309103/BACKGROUND_2_2_wcgagz.png", className: "bg-white col-span-2 row-span-4 col-start-5 row-start-8 rounded-[25px] flex justify-center items-center relative" },
    { id: 10, image: "https://res.cloudinary.com/dieef3h1w/image/upload/v1737309103/BACKGROUND_2_2_wcgagz.png", className: "bg-white col-span-2 row-span-4 col-start-7 row-start-8 rounded-[25px] flex justify-center items-center relative" },
    { id: 11, image: "https://res.cloudinary.com/dieef3h1w/image/upload/v1737309103/BACKGROUND_2_2_wcgagz.png", className: "bg-white col-span-4 row-span-4 row-start-10 rounded-[25px] flex justify-center items-center relative" },
    { id: 12, image: "https://res.cloudinary.com/dieef3h1w/image/upload/v1737309103/BACKGROUND_2_2_wcgagz.png", className: "bg-white col-span-2 row-span-3 col-start-5 row-start-12 rounded-[25px] flex justify-center items-center relative" },
    { id: 13, image: "https://res.cloudinary.com/dieef3h1w/image/upload/v1737309103/BACKGROUND_2_2_wcgagz.png", className: "bg-white col-span-2 row-span-3 col-start-7 row-start-12 rounded-[25px] flex justify-center items-center relative" },
    { id: 14, image: "https://res.cloudinary.com/dieef3h1w/image/upload/v1737309103/BACKGROUND_2_2_wcgagz.png", className: "bg-white col-span-2 row-span-4 row-start-14 rounded-[25px] flex justify-center items-center relative" },
    { id: 15, image: "https://res.cloudinary.com/dieef3h1w/image/upload/v1737309103/BACKGROUND_2_2_wcgagz.png", className: "bg-white col-span-2 row-span-4 col-start-3 row-start-14 rounded-[25px] flex justify-center items-center relative" },
    { id: 16, image: "https://res.cloudinary.com/dieef3h1w/image/upload/v1737309103/BACKGROUND_2_2_wcgagz.png", className: "bg-white col-span-4 row-span-4 col-start-5 row-start-15 rounded-[25px] flex justify-center items-center relative" },
    { id: 17, image: "https://res.cloudinary.com/dieef3h1w/image/upload/v1737309103/BACKGROUND_2_2_wcgagz.png", className: "bg-white col-span-4 row-span-4 row-start-18 rounded-[25px] flex justify-center items-center relative" },
    { id: 18, image: "https://res.cloudinary.com/dieef3h1w/image/upload/v1737309103/BACKGROUND_2_2_wcgagz.png", className: "bg-white col-span-4 row-span-3 col-start-5 row-start-19 rounded-[25px] flex justify-center items-center relative" },
    { id: 19, image: "https://res.cloudinary.com/dieef3h1w/image/upload/v1737309103/BACKGROUND_2_2_wcgagz.png", className: "bg-white col-span-3 row-span-4 row-start-22 rounded-[25px] flex justify-center items-center relative" },
    { id: 20, image: "https://res.cloudinary.com/dieef3h1w/image/upload/v1737309103/BACKGROUND_2_2_wcgagz.png", className: "bg-white col-span-3 row-span-4 col-start-4 row-start-22 rounded-[25px] flex justify-center items-center relative" },
    { id: 21, image: "https://res.cloudinary.com/dieef3h1w/image/upload/v1737309103/BACKGROUND_2_2_wcgagz.png", className: "bg-white col-span-2 row-span-4 col-start-7 row-start-22 rounded-[25px] flex justify-center items-center relative" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="p-6 lg:p-12 relative"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dieef3h1w/image/upload/v1737316260/cardboard-texture_1194-5419_2_onpn2h.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(201,52,29,0.8)",
        backgroundBlendMode: 'multiply',
      }}
    >
      <div className="text-center mb-6 ">
        <button>
          <img src="https://res.cloudinary.com/dieef3h1w/image/upload/v1737380310/Frame_1171279499_noq87v.png" alt="scroll view" />
        </button>
      </div>
      <div className="relative flex items-center">
        {/* Shadow grid */}
        <div className="absolute lg:grid grid grid-cols-8 grid-rows-25 gap-8 w-full translate-x-4 translate-y-5 opacity-50" style={{ height: "2700px" }}>
          {/* Shadow cards mapping here */}
        </div>

        {/* Conditional rendering for desktop and mobile grids */}
        {isMobile ? (
          <div className="grid grid-cols-6 grid-rows-50 w-full h-[200rem] gap-4 lg:hidden">
            {mobileCards.map(card => (
              <div key={card.id} className={card.className}>
                <img 
                  className="absolute w-[96%] h-[96%] object-cover rounded-[25px]" 
                  src={card.image} 
                  alt={`mobile photo ${card.id}`} 
                />
                {card.id}
              </div>
            ))}
          </div>
        ) : (
          <div className="grid lg:grid grid-cols-8 grid-rows-25 gap-8 w-full" style={{ height: "2700px" }}>
            {cards.map(card => (
              <div key={card.id} className={card.className}>
                <img 
                  className="absolute w-[96%] h-[96%] object-cover rounded-[25px]" 
                  src={card.image} 
                  alt={`event photo ${card.id}`} 
                />
                {card.id}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryAll;
