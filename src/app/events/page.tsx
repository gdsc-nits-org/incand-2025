import Image from "next/image";
import Thundermerch from "./Thundermerch";
import AllEvents from "./EventCard";
const Page = () => {
  return (
    <section className="flex h-screen w-screen flex-col bg-[#FFEDFD] pt-20">
      <div className="flex h-[50%] w-full border-t-2 border-black">
        <div className="h-full flex-grow py-4 pl-8 pr-0">
          <div
            id="imageContainer"
            className="h-full w-full rounded-3xl bg-blue-300"
          ></div>
        </div>
        <div className="flex h-full w-[40%] flex-col gap-6 px-4 py-4 pr-8">
          <div className="h-[40%] w-full rounded-3xl bg-[#FFDD6A] drop-shadow-[8px_8px_0px_black]">
            <Thundermerch />
          </div>
          <div className="flex w-full flex-grow items-center justify-center gap-2 rounded-3xl bg-[#86CAFF] px-4 drop-shadow-[8px_8px_0px_black]">
            <svg
              className="absolute left-0 top-0 z-50 w-[7.1rem] translate-x-[-40%] translate-y-[-35%]"
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

            <div className="flex flex-col gap-2 font-tusker2">
              <h1 className="text-5xl font-[800] uppercase tracking-[0.2rem] text-white drop-shadow-[3px_3px_0px_black]">
                CARPE DIEM
              </h1>
              <h3 className="text-2xl font-semibold tracking-[0.2rem] text-[#008DFA]">
                THE INCAND FLAGSHIP
              </h3>
            </div>
            <div>
              <Image
                src="/assets/events/carpediemgif.gif"
                width={100}
                height={100}
                alt="dancing-boy"
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <AllEvents />
    </section>
  );
};
export default Page;
