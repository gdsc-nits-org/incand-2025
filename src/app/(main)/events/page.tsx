import Image from "next/image";
import Thundermerch from "~/components/Thundermerch";
import AllEvents from "~/components/EventCard";
import EventsEffect from "~/components/EventsEffect";
import Link from "next/link";
const Page = () => {
  return (
    <section
      id="event-page"
      className="flex h-auto min-h-screen w-screen flex-col gap-4 bg-[#FFEDFD] pt-20 tablet:pt-24 ipadair:h-screen ipadair:gap-0 laptop:pt-20 4k:pt-40"
    >
      <div className="flex h-[70%] w-full flex-col ipadair:flex-row 4k:gap-12">
        <div className="h-[50%] px-4 ipadair:h-full ipadair:flex-grow ipadair:py-4 ipadair:pl-8 ipadair:pr-0 4k:rounded-[4rem] 4k:pl-16">
          <EventsEffect />
        </div>
        <div className="flex h-full w-full flex-grow flex-col gap-4 px-4 py-4 ipadair:w-[42%] ipadair:flex-grow-0 ipadair:gap-6 ipadair:pr-8 4k:gap-12 4k:pr-16">
          <div className="h-[50%] w-full rounded-3xl bg-[#FFDD6A] drop-shadow-[8px_8px_0px_black] ipadair:h-[40%] 4k:rounded-[4rem] 4k:drop-shadow-[16px_16px_0px_black]">
            <Thundermerch />
          </div>
          <div className="flex h-[50%] w-full items-center justify-center gap-2 rounded-3xl bg-[#86CAFF] px-4 drop-shadow-[8px_8px_0px_black] ipadair:h-auto ipadair:flex-grow 4k:rounded-[4rem] 4k:drop-shadow-[16px_16px_0px_black]">
            <svg
              className="absolute left-0 top-0 z-50 hidden w-[7.1rem] translate-x-[-40%] translate-y-[-35%] ipadair:block 4k:scale-[2]"
              style={{ border: "#f855ac00" }}
              width="136"
              height="76"
              viewBox="0 0 136 76"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="ellipsePath"
                d="M129.39 2.9273C129.718 3.49484 129.788 4.30172 129.447 5.43292C129.106 6.56378 128.379 7.92646 127.256 9.49825C125.012 12.6376 121.297 16.4649 116.371 20.7303C106.527 29.2529 91.9643 39.4227 75.0165 49.2075C58.0687 58.9923 41.98 66.5191 29.6774 70.7828C23.5201 72.9167 18.3483 74.22 14.5078 74.5932C12.5849 74.7801 11.041 74.7289 9.89116 74.4587C8.74099 74.1885 8.07756 73.7238 7.74989 73.1563C7.42222 72.5888 7.35153 71.7819 7.69258 70.6507C8.03354 69.5198 8.76118 68.1571 9.88442 66.5853C12.1279 63.4459 15.8425 59.6187 20.7692 55.3533C30.6129 46.8307 45.1757 36.6609 62.1235 26.8761C79.0713 17.0913 95.1599 9.56444 107.463 5.3008C113.62 3.1669 118.792 1.86358 122.632 1.49038C124.555 1.30353 126.099 1.35471 127.249 1.62487C128.399 1.8951 129.062 2.35977 129.39 2.9273Z"
                stroke="black"
                stroke-width="1.51682"
              />

              <circle cx="0" cy="0" r="7" fill="#E1067B">
                <animateMotion repeatCount="indefinite" dur="5s">
                  <mpath href="#ellipsePath" />
                </animateMotion>
              </circle>
            </svg>
            <Link
              href="/carpediem"
              className="flex h-full w-full items-center justify-center gap-2"
            >
              <div className="flex flex-col gap-2 font-tusker mobile3:py-6 ipadair:font-tusker2">
                <h1 className="select-none text-2xl font-[800] uppercase text-white drop-shadow-[3px_3px_0px_black] mobile3:text-5xl ipadair:text-5xl ipadair:tracking-[0.5rem] 4k:text-[12rem]">
                  CARPE DIEM
                </h1>
                <h3 className="select-none text-sm font-semibold text-[#008DFA] mobile3:text-3xl ipadair:text-2xl ipadair:leading-[4.5vh] ipadair:tracking-[0.08vh] 4k:text-[6rem] 4k:leading-[8rem]">
                  THE INCAND FLAGSHIP
                </h3>
              </div>
              <Image
                className="scale-75 mobile3:scale-100 ipadair:scale-110 4k:h-[25rem] 4k:w-[25rem]"
                src="/assets/events/carpediemgif.gif"
                width={100}
                height={100}
                alt="dancing-boy"
              ></Image>
            </Link>
          </div>
        </div>
      </div>
      <AllEvents />
    </section>
  );
};
export default Page;
