import React, { useRef, useEffect } from "react";

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  fb: string;
  linkedin: string;
  git: string;
  ind: number; // for alternating background colors in team grid
}

const TeamCard: React.FC<TeamCardProps> = ({
  name,
  role,
  image,
  fb,
  linkedin,
  git,
  ind,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  let bounds: DOMRect | undefined;

  const rotateToMouse = (e: MouseEvent) => {
    if (!bounds || !cardRef.current) return;

    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    cardRef.current.style.transform = `
      scale3d(1.08, 1.08, 1.08)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 2}deg
      )
    `;

    const glow = cardRef.current.querySelector<HTMLElement>(".glow");
    if (glow) {
      glow.style.backgroundImage = `
        radial-gradient(
          circle at
          ${center.x * 2 + bounds.width / 2}px
          ${center.y * 2 + bounds.height / 2}px,
          #ffffff55,
          #0000000f
        )
      `;
    }
  };

  useEffect(() => {
    const card = cardRef.current;

    const handleMouseEnter = () => {
      if (card) bounds = card.getBoundingClientRect();
      document.addEventListener("mousemove", rotateToMouse);
    };

    const handleMouseLeave = () => {
      document.removeEventListener("mousemove", rotateToMouse);
      if (card) {
        card.style.transform = "";
        card.style.boxShadow = "";
        const glow = card.querySelector<HTMLElement>(".glow");
        if (glow) glow.style.background = "";
      }
    };

    if (card) {
      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (card) {
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      }
      document.removeEventListener("mousemove", rotateToMouse);
    };
  }, []);

  const bgImage =
    ind % 2 === 0 ? "/assets/Team/even.svg" : "/assets/Team/Odd.svg";

  return (
    <div
      ref={cardRef}
      className="group relative flex h-[18rem] w-[14rem] scale-100 flex-col items-center justify-end overflow-hidden bg-[#FAF8E0] bg-transparent pb-8 tablet:scale-100 ipadpro:h-[20rem] ipadpro:w-[16rem] ipadair:h-[22rem] ipadair:w-[18rem] xl:h-[22rem] xl:w-[20rem] xl:pb-6"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "100% 103%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transition: "transform 0.3s ease-out",
      }}
    >
      {/* <div
    className="absolute inset-0"
    style={{
      boxShadow: "0 5px 15px 5px transparent", // Default shadow
      transition: "box-shadow 0.3s ease-out",
    }}
  ></div> */}

      {/* Add hover effects */}
      {/* <style jsx>{`
    div:hover .absolute {
    box-shadow: 0 20px 50px 20px rgba(0, 0, 0, 0.7);
    }
  `}</style> */}
      {/* Glow Effect */}
      <div
        className="glow absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% -20%, #ffffff22, #0000000f)",
          transition: "background-image 0.3s ease-in",
        }}
      ></div>

      {/* Card Content */}
      <div className="relative z-10 h-[35%] w-[35%] rounded-md border border-white lg:h-[40%] lg:w-[40%] xl:h-[45%] xl:w-[45%]">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>

      <div className="relative z-10 flex h-[2.25rem] w-[80%] items-center justify-center text-center">
        <p className="text-nowrap font-tusker2 text-base tracking-widest text-[#FAF8E0] ipadpro:text-lg ipadair:text-xl">
          {name}
        </p>
      </div>

      <div className="relative z-10 flex h-[2.25rem] w-[80%] items-center justify-center pb-4 text-center">
        <p
          className={`font-oxygen ${ind % 2 === 0 ? "text-[#EF7BE3]" : "text-[#FFD231]"} font-bold tracking-normal`}
        >
          {role}
        </p>
      </div>

      {/* Social Media Icons */}
      <div
        id="icons"
        className="relative z-10 flex h-[2.5rem] w-[60%] justify-evenly overflow-hidden text-center opacity-100"
      >
        {fb && (
          <a href={fb} target="_blank" rel="noreferrer">
            <img
              className="h-6 w-6"
              src="/assets/Team/newFacebook.webp"
              alt="facebook"
            />
          </a>
        )}

        {linkedin && (
          <a href={linkedin} target="_blank" rel="noreferrer">
            {ind % 2 === 0 ? (
              <img
                className="h-6 w-6"
                src="/assets/Team/blueLinedin.webp"
                alt="linkedin"
              />
            ) : (
              <img
                className="h-6 w-6"
                src="/assets/Team/orangeLinkedin.webp"
                alt="linkedin"
              />
            )}
          </a>
        )}
        {git && (
          <a href={git} target="_blank" rel="noreferrer">
            <img
              className="h-6 w-6"
              src="/assets/Team/newGithub.webp"
              alt="github"
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
