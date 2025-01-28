import React, { useState, useEffect } from "react";

interface Card {
  id: number;
  image: string;
  className: string;
  name: string;
}

const GalleryAll: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 700);

  const cards: Card[] = [
    { id: 1, image: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737965116/lamp_cxfiru.jpg", className: "bg-white col-span-3 row-span-3 rounded-[25px] flex justify-center items-center relative", name: "LAMP LIGHTING" }, 
    { id: 2, image: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737964559/monali1_hr1pa2.jpg", className: "bg-white col-span-3 row-span-3 col-start-4 rounded-[25px] flex justify-center items-center relative", name: "CARPEDIEM" }, 
    { id: 3, image: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737984313/Ground0_pysuww.jpg", className: "bg-white col-span-2 row-span-3 col-start-7 rounded-[25px] flex justify-center items-center relative", name: "PUMP IT UP" }, 
    { id: 4, image: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737965417/Glitteratti_bunp2d.jpg", className: "bg-white col-span-2 row-span-2 row-start-4 rounded-[25px] flex justify-center items-center relative", name: "GLITTERATI" }, 
    { id: 5, image: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737965882/DJ0_r767lz.jpg", className: "bg-white col-span-2 row-span-2 col-start-3 row-start-4 rounded-[25px] flex justify-center items-center relative", name: "DAY 0 DJ NIGHT" }, 
    { id: 6, image: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737992871/IMG_1272_ss08me.jpg", className: "bg-white col-span-4 row-span-4 col-start-5 row-start-4 rounded-[25px] flex justify-center items-center relative", name: "MR NIT" }, 
    { id: 7, image: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737983583/Thunder_agsrn6.jpg", className: "bg-white col-span-2 row-span-4 row-start-6 rounded-[25px] flex justify-center items-center relative", name: "THUNDERMARCH" }, 
    { id: 8, image: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737990498/DSC_0496_zfqlp0.jpg", className: "bg-white col-span-2 row-span-4 col-start-3 row-start-6 rounded-[25px] flex justify-center items-center relative", name: "GROUND ZERO" }, 
    { id: 9, image: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737983335/Deprador_lv8lqf.jpg", className: "bg-white col-span-2 row-span-4 col-start-5 row-start-8 rounded-[25px] flex justify-center items-center relative", name: "DEPRADOR" }, 
    { id: 10, image: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737990498/IMG_1047_pflyt4.jpg", className: "bg-white col-span-2 row-span-4 col-start-7 row-start-8 rounded-[25px] flex justify-center items-center relative", name: "COSTOPIA" }, 
    { id: 11, image: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737990499/IMG_3144_bbimue.jpg", className: "bg-white col-span-4 row-span-4 row-start-10 rounded-[25px] flex justify-center items-center relative", name: "BATTLE OF BANDS" }, 
    { id: 12, image: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737990499/IMG_1102_rr6bpf.jpg", className: "bg-white col-span-2 row-span-3 col-start-5 row-start-12 rounded-[25px] flex justify-center items-center relative", name: "INDIE UNPLUGGED" }, 
    { id: 13, image: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737990498/DSC_0242_ uh31as.jpg", className: "bg-white col-span-2 row-span-3 col-start-7 row-start-12 rounded-[25px] flex justify-center items-center relative", name: "SHRINANDYAM" }, 
    { id: 14, image: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737991569/_DSC0058_mgg7n5.jpg", className: "bg-white col-span-2 row-span-4 row-start-14 rounded-[25px] flex justify-center items-center relative", name: "PROM NIGHT" }, 
    { id: 15, image: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737991607/IMG_0744_hopmyq.jpg", className: "bg-white col-span-2 row-span-4 col-start-3 row-start-14 rounded-[25px] flex justify-center items-center relative", name: "SOKRATIC" }, 
    { id: 16, image: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1738003904/Bihu_q4o1jc.jpg", className: "bg-white col-span-4 row-span-4 col-start-5 row-start-15 rounded-[25px] flex justify-center items-center relative", name: "BIHU" }, 
    { id: 17, image: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737991939/Flashmob_mf5cex.jpg", className: "bg-white col-span-4 row-span-4 row-start-18 rounded-[25px] flex justify-center items-center relative", name: "FLASHMOB" }, 
    { id: 18, image: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737991922/Nukkad_Naatak_mj7irh.jpg", className: "bg-white col-span-4 row-span-3 col-start-5 row-start-19 rounded-[25px] flex justify-center items-center relative", name: "NUKKAD NAATAK" }, 
    { id: 19, image: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737991941/ECSTACY_heuk3n.jpg", className: "bg-white col-span-3 row-span-4 row-start-22 rounded-[25px] flex justify-center items-center relative", name: "NIRVANA" }, 
    { id: 20, image: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737991952/NITSMUN_gn0sab.jpg", className: "bg-white col-span-3 row-span-4 col-start-4 row-start-22 rounded-[25px] flex justify-center items-center relative", name: "NITSMUN" }, 
    { id: 21, image: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737984313/Ground0_pysuww.jpg", className: "bg-white col-span-2 row-span-4 col-start-7 row-start-22 rounded-[25px] flex justify-center items-center relative", name: "PUMP IT UP" }
  ];

  const mobileCards: Card[] = [
    { id: 1, className: "bg-white col-span-6 row-span-4 rounded-[25px] flex justify-center items-center relative", image: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737965116/lamp_cxfiru.jpg", name: "LAMP LIGHTING" }, 
    { id: 2, className: "bg-white col-span-3 row-span-3 row-start-5 rounded-[25px] flex justify-center items-center relative", image: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737964559/monali1_hr1pa2.jpg", name: "CARPEDIEM" }, 
    { id: 3, className: "bg-white col-span-3 row-span-3 col-start-4 row-start-5 rounded-[25px] flex justify-center items-center relative", image: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737984313/Ground0_pysuww.jpg", name: "PUMP IT UP" }, 
    { id: 4, className: "bg-white col-span-4 row-span-3 row-start-8 rounded-[25px] flex justify-center items-center relative", image: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737965417/Glitteratti_bunp 2d.jpg", name: "GLITTERATI" }, 
    { id: 5, className: "bg-white col-span-2 row-span-3 col-start-5 row-start-8 rounded-[25px] flex justify-center items-center relative", image: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737965882/DJ0_r767lz.jpg", name: "DAY 0 DJ NIGHT" }, 
    { id: 6, className: "bg-white col-span-6 row-span-4 row-start-11 rounded-[25px] flex justify-center items-center relative", image: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737990498/DSC_0242_uh31as.jpg", name: "SHRINANDYAM" }, 
    { id: 7, className: "bg-white col-span-3 row-span-4 row-start-15 rounded-[25px] flex justify-center items-center relative", image: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737983583/Thunder_agsrn6.jpg", name: "THUNDERMARCH" }, 
    { id: 8, className: "bg-white col-span-3 row-span-4 col-start-4 row-start-15 rounded-[25px] flex justify-center items-center relative", image: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737990498/DSC_0496_zfqlp0.jpg", name: "GROUND ZERO" }, 
    { id: 9, className: "bg-white col-span-6 row-span-3 col-start-1 row-start-19 rounded-[25px] flex justify-center items-center relative", image: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737990499/IMG_3144_bbimue.jpg", name: "BATTLE OF BANDS" }, 
    { id: 10, className: "bg-white col-span-4 row-span-4 row-start-22 rounded-[25px] flex justify-center items-center relative", image: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737990499/IMG_1102_rr6bpf.jpg", name: "INDIE UNPLUGGED" }, 
    { id: 11, className: "bg-white col-span-2 row-span-2 col-start-5 row-start-22 rounded-[25px] flex justify-center items-center relative", image: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737992871/IMG_1272_ss08me.jpg", name: "MR NIT" }, 
    { id: 12, className: "bg-white col-span-2 row-span-2 col-start-5 row-start-24 rounded-[25px] flex justify-center items-center relative", image: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737991569/_DSC0058_mgg7n5.jpg", name: "PROM NIGHT" }, 
    { id: 13, className: "bg-white col-span-6 row-span-3 row-start-26 rounded-[25px] flex justify-center items-center relative", image: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737991607/IMG_0744_hopmyq.jpg", name: "SOKRATIC" }, 
    { id: 14, className: "bg-white col-span-4 row-span-4 row-start-29 rounded-[25px] flex justify-center items-center relative", image: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1738003904/Bihu_q4o1jc.jpg", name: "BIHU" }, 
    { id: 15, className: "bg-white col-span-2 row-span-4 col-start-5 row-start-29 rounded-[25px] flex justify-center items-center relative", image: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737991941/ECSTACY_heuk3n.jpg", name: "NIRVANA" }, 
    { id: 16, className: "bg-white col-span-6 row-span-5 row-start-33 rounded-[25px] flex justify-center items-center relative", image: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737991922/Nukkad_Naatak_mj7irh.jpg", name: "NUKKAD NAATAK" }, 
    { id: 17, className: "bg-white col-span-6 row-span -4 row-start-38 rounded-[25px] flex justify-center items-center relative", image: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737991939/Flashmob_mf5cex.jpg", name: "FLASHMOB" }, 
    { id: 18, className: "bg-white col-span-3 row-span-4 row-start-42 rounded-[25px] flex justify-center items-center relative", image: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737991952/NITSMUN_gn0sab.jpg", name: "NITSMUN" }, 
    { id: 19, className: "bg-white col-span-3 row-span-4 col-start-4 row-start-42 rounded-[25px] flex justify-center items-center relative", image: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737984313/Ground0_pysuww.jpg", name: "PUMP IT UP" }, 
    { id: 20, className: "bg-white col-span-6 row-span-5 row-start-46 rounded-[25px] flex justify-center items-center relative", image: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1737990498/DSC_0496_zfqlp0.jpg", name: "GROUND ZERO" }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="p-6 lg:p-12 relative"
      style={{
        backgroundImage: url('https://res.cloudinary.com/dieef3h1w/image/upload/v1737316260/cardboard-texture_1194-5419_2_onpn2h.png'),
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
        {/* Conditional rendering for desktop and mobile grids */}
        <div className={grid ${isMobile ? "grid-cols-6" : "lg:grid grid-cols-8"} grid-rows-50 w-full h-[200rem] gap-4 relative}>
          {(isMobile ? mobileCards : cards).map(card => (
            <div key={card.id} className={${card.className} relative}>
              {/* Shadow Div */}
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-[25px] z-0"></div>

              {/* Image */}
              <img 
                className="absolute w-[96%] h-[96%] object-cover rounded-[25px] z-10" 
                src={card.image} 
                alt={photo ${card.id}} 
              />
              
              {/* Bottom-left positioned text */}
              <div className="absolute bottom-2 left-2 text-sm lg:text-3xl lg:left-4 lg:bottom-4 bg-transparent bg-opacity-50 text-white font-extrabold w-[90%] flex flex-wrap p-2 rounded-md z-10">
                <h1>{card.name}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryAll;
