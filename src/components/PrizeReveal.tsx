import Image from "next/image";

const PrizeReveal = () => {
  return (
    <section className="relative -top-4 w-screen rounded-t-3xl bg-[#001E30] bg-[url('/assets/Game/maze_white.webp')] bg-cover py-32 laptop:pt-16 4k:pb-80 4k:pt-40">
      <svg
        className="absolute left-[-16rem] top-[-14rem] z-40 scale-[0.2] tablet:left-[-32rem] tablet:top-[-32rem] tablet:scale-[0.1] ipadpro:left-[-40rem] ipadpro:top-[-40rem] laptop:left-[-75rem] laptop:top-[-75rem] laptop:scale-[0.06] 4k:left-[-200rem] 4k:top-[-200rem] 4k:scale-[0.05]"
        viewBox="0 0 386 367"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="mainPath"
          d="M362.745 27.3357C364.631 29.5045 365.39 32.6868 364.957 36.9047C364.525 41.1222 362.909 46.28 360.167 52.2674C354.686 64.2377 344.781 79.3613 331.225 96.6245C304.12 131.141 262.516 174.089 212.836 217.276C163.155 260.462 114.835 295.684 76.8822 317.721C57.9004 328.743 41.5455 336.446 28.9288 340.209C22.618 342.091 17.2855 342.973 13.049 342.814C8.81194 342.655 5.76627 341.461 3.88094 339.292C1.9956 337.123 1.23675 333.941 1.66891 329.723C2.10103 325.505 3.71702 320.348 6.45888 314.36C11.9405 302.39 21.8453 287.266 35.4014 270.003C62.5059 235.487 104.11 192.539 153.791 149.352C203.471 106.165 251.791 70.9433 289.744 48.9063C308.726 37.8847 325.081 30.181 337.697 26.4187C344.008 24.5369 349.341 23.6544 353.577 23.8135C357.814 23.9725 360.86 25.1669 362.745 27.3357Z"
          stroke="black"
          stroke-width="1.5"
        />
        <g>
          <image
            x="-25"
            y="-25"
            width="50"
            height="50"
            href="/assets/landing/logo_one.png"
          />

          <animateMotion repeatCount="indefinite" dur="8s">
            <mpath href="#mainPath" />
          </animateMotion>
        </g>
      </svg>
      <Image
        className="absolute left-0 top-0 laptop:h-80 laptop:w-80"
        src="/assets/Game/topLeft.svg"
        width={120}
        height={120}
        alt="svg"
      ></Image>
      <Image
        className="absolute right-0 top-0"
        src="/assets/Game/topRight.svg"
        width={150}
        height={150}
        alt="svg"
      ></Image>
      <Image
        className="absolute bottom-0 left-0"
        src="/assets/Game/bottomLeft.svg"
        width={120}
        height={120}
        alt="svg"
      ></Image>
      <Image
        className="absolute bottom-0 right-0"
        src="/assets/Game/bottomRight.svg"
        width={250}
        height={250}
        alt="svg"
      ></Image>

      <h1 className="text-center font-rocket text-3xl text-[#D3FF23] tablet:text-5xl laptop:text-7xl 4k:text-9xl">
        WIN EXCITING PRiZES!!
      </h1>
      <div className="mt-16 flex flex-col items-center justify-center gap-20 tablet:flex-row tablet:gap-20 laptop:gap-40 4k:mt-40 4k:gap-60">
        <div className="bg-dotted flex -rotate-12 flex-col items-center gap-8 rounded-2xl bg-[#8EE3FF] p-10 transition-colors duration-200 ease-linear hover:bg-[#e1067b]">
          <div className="relative flex h-[10rem] w-[10rem] scale-125 items-center justify-center bg-[url('/assets/Game/imageBorder.png')] bg-cover bg-center laptop:h-[16rem] laptop:w-[16rem] laptop:scale-100 4k:h-[32rem] 4k:w-[32rem]">
            <Image
              className="h-[80%] w-[80%]"
              src="/assets/Game/1stPrize.png"
              width={100}
              height={100}
              alt="1st prize"
            ></Image>
          </div>
          <h1 className="font-rocket text-sm xl:text-lg 4k:text-7xl">PHOTO WITH THE MAIN ARTIST</h1>
        </div>
        <div className="bg-dotted flex rotate-12 flex-col items-center gap-8 rounded-2xl bg-[#BFFF8E] p-10 transition-colors duration-200 ease-linear hover:bg-[#e1067b]">
          <div className="relative flex h-[10rem] w-[10rem] scale-125 items-center justify-center bg-[url('/assets/Game/imageBorder.png')] bg-cover bg-center laptop:h-[16rem] laptop:w-[16rem] laptop:scale-100 4k:h-[32rem] 4k:w-[32rem]">
            <Image
              className="h-[80%] w-[80%]"
              src="/assets/Game/2ndPrize.png"
              width={100}
              height={100}
              alt="1st prize"
            ></Image>
          </div>
          <h1 className="font-rocket text-sm xl:text-lg 4k:text-7xl">OFFICIAL INCAND MERCH
          </h1>
        </div>
      </div>
    </section>
  );
};
export default PrizeReveal;
