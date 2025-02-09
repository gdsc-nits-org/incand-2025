import Image from "next/image";
import Link from "next/link";

import allEvents from "../../../../../public/assets/Data/events.json";

export const runtime = "edge";
export default function Page({ params }: { params: { id: string } }) {
  const id = +params.id;
  const TOTAL_EVENT = allEvents.length;
  const data = allEvents[id - 1];
  return (
    <section
      className="flex h-auto min-h-screen w-screen flex-col items-center justify-center bg-[#FFEDFD] p-6 pt-[80px] font-tusker ipadair:p-10 ipadair:pt-[7.5rem] 4k:p-20 4k:pt-[10rem]"
      style={{ backgroundColor: colors[(id - 1) % 6] }}
    >
      <section className="mb-8 flex min-h-full w-full flex-col items-center justify-between gap-4 ipadair:flex-grow-0 ipadair:gap-0">
        <div className="flex w-full flex-grow flex-col items-center gap-6 ipadair:h-[80%] ipadair:flex-row ipadair:gap-0">
          <div
            style={
              {
                "--box-shadow-color": textColors[(id - 1) % 6],
              } as React.CSSProperties
            }
            className={`h-auto shadow-[16px_16px_0px_var(--box-shadow-color)] mobile3:w-[60%] ipadair:h-full ipadair:w-[30%] ipadair:shadow-none`}
          >
            <Image
              className="h-full w-full"
              src={
                data?.imgUrls[0] ??
                data?.thumbnail ??
                "/assets/events/default.jpg"
              }
              height={320}
              width={240}
              alt="event-pic"
            ></Image>
          </div>
          <div className="flex h-fit w-full flex-grow flex-col gap-4 overflow-hidden bg-event-pattern bg-cover bg-center p-4 pt-10 ipadair:h-full ipadair:max-w-[70%] ipadair:flex-grow ipadair:gap-10 ipadair:p-20 4k:h-full 4k:p-[8rem] 4k:py-[10rem]">
            <h1
              className="flex w-full items-center justify-between px-4 text-3xl uppercase mobile3:text-6xl ipadair:h-20 ipadair:text-6xl 4k:text-[14rem]"
              style={{ color: textColors[(id - 1) % 6] }}
            >
              <span className="drop-shadow-[4px_4px_0px_black]">
                {data?.header}
              </span>
              <span className="drop-shadow-[4px_4px_0px_black]">
                {data?.id.length === 1 ? "0" + data?.id : data?.id}
              </span>
            </h1>
            <p className="text-wrap font-tusker2 text-sm leading-8 tracking-wider mobile3:text-2xl mobile3:leading-10 ipadair:text-2xl ipadair:leading-[3rem] ipadair:tracking-wider 4k:mt-[5rem] 4k:text-8xl 4k:leading-[8rem]">
              {data?.text}
            </p>
          </div>
        </div>

        <div className="flex h-16 w-full mobile3:h-20 ipadair:px-0 4k:h-40">
          <Link
            href={id > 1 ? `/event/${id - 1}` : "/events"}
            className="flex h-full w-[18%] items-center justify-center bg-[#FAE00D] ipadair:w-[15%]"
          >
            {}
            <Image
              className="h-8 w-12 mobile3:h-[60%] mobile3:w-[60%] ipadair:h-[65%] ipadair:w-auto"
              src="/assets/events/prev_triangles.svg"
              width={100}
              height={50}
              alt="prev"
            ></Image>
          </Link>
          <div className="flex h-full flex-grow items-center justify-between overflow-hidden bg-[#00D1FF] pl-0 ipadair:justify-around ipadair:gap-4 ipadair:pr-4">
            <Image
              className="mt-6 h-8 w-10 place-content-end mobile:mt-8 mobile3:h-[65%] mobile3:w-auto"
              src="/assets/events/fire.svg"
              width={80}
              height={80}
              alt="fire-svg"
            ></Image>
            <h2 className="mb-2 hidden font-tusker2 font-bold uppercase tracking-widest text-white drop-shadow-[4px_4px_0px_black] tablet:block tablet:text-3xl ipadair:text-5xl 4k:text-6xl">
              {data?.header}
            </h2>
            <Image
              className="hidden h-16 w-16 ipadair:block 4k:h-24 4k:w-24"
              src="/assets/events/smile.svg"
              width={80}
              height={80}
              alt="smile"
            ></Image>
            <span className="relative right-2 flex flex-grow items-center gap-2 mobile3:left-3 mobile3:right-0 mobile3:flex-grow-0 ipadair:static ipadair:left-0 ipadair:gap-4">
              <Image
                className="h-4 w-6 mobile3:h-[20%] mobile3:w-[20%] 4k:w-32"
                src="/assets/events/stars.svg"
                width={200}
                height={100}
                alt="stars"
              ></Image>
              <span className="rounded-[50%] bg-black px-4 py-2 text-sm text-[#FFD23C] ipadair:px-8 ipadair:py-4 ipadair:text-2xl 4k:px-12 4k:py-8 4k:text-6xl">
                {/* {data.eventDate} */}
              </span>
              <Image
                className="h-4 w-6 scale-x-[-1] mobile3:h-[20%] mobile3:w-[20%] 4k:w-32"
                src="/assets/events/stars.svg"
                width={200}
                height={100}
                alt="stars"
              ></Image>
            </span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F5CF6C] mobile3:h-10 mobile3:w-10 ipadair:h-14 ipadair:w-14 4k:scale-150">
              <Image
                className="h-5 w-5 ipadair:h-[60%] ipadair:w-[60%]"
                src="/assets/events/music.svg"
                width={40}
                height={40}
                alt="music"
              ></Image>
            </span>
          </div>
          <Link
            href={`/event/${id !== 19 ? Math.min(TOTAL_EVENT, id + 1) : 1}`}
            className="flex h-full w-[30%] items-center justify-center gap-2 bg-[#FF93EE] px-2 ipadair:w-[20%]"
          >
            <p className="text-[.5rem] text-[#FFDE70] drop-shadow-[3px_3px_0px_black] mobile1:text-sm mobile3:text-xl ipadair:text-3xl 4k:text-6xl">
              NEXT
            </p>
            <Image
              className="h-8 w-12 mobile3:h-[50%] mobile3:w-[50%] ipadair:h-[65%] ipadair:w-auto"
              src="/assets/events/next_triangles.svg"
              width={100}
              height={50}
              alt="prev"
            ></Image>
          </Link>
        </div>
      </section>
    </section>
  );
}

const textColors = [
  "#00E9F4",
  "#A4A1FF",
  "#8BF965",
  "#FFA4F6",
  "#F6E659",
  "#54B4FF",
];
const colors = [
  "#B5FCFF",
  "#C2C0FF",
  "#B8FF9F",
  "#FFC0F9",
  "#FFF5A0",
  "#86CAFF",
];
