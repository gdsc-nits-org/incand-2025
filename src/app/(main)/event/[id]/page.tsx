import Image from "next/image";
import Link from "next/link";
import styles from "~/styles/Events.module.css";
const TOTAL_EVENT = 30;
const data = {
  eventNo: 1,
  eventName: "Costopia",
  eventDesc:
    "Espremiere is your platform to unleash your inner storyteller. Whether you're a seasoned performer or a budding talent, we welcome you to bring your unique voice and vision to life. From poignant social commentary to hilarious satire, from heartwarming tales to thrilling mysteries, Espremier is where your monologue takes center stage.",
  eventDate: "19.02",
  eventPhoto: "/assets/events/event-pic.png",
};

export const runtime = "edge";

export default function Page({ params }: { params: { id: string } }) {
  const id = +params.id;
  return (
    <section
      className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-[#FFEDFD] p-6 pt-[80px] font-tusker ipadair:p-10 ipadair:pt-[7.5rem]"
      style={{ backgroundColor: colors[(id - 1) % 6] }}
    >
      <section className="flex h-full w-full flex-col items-center justify-between gap-4 ipadair:flex-grow-0 ipadair:gap-0">
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
              src={data.eventPhoto}
              height={320}
              width={240}
              alt="event-pic"
            ></Image>
          </div>
          <div className="flex h-full w-full flex-grow flex-col gap-4 overflow-hidden bg-white bg-evnet-pattern bg-cover bg-center p-4 pt-10 ipadair:h-full ipadair:max-w-[70%] ipadair:flex-grow ipadair:gap-10 ipadair:p-20">
            <h1
              className="flex w-full items-center justify-between px-4 text-4xl uppercase mobile3:text-6xl ipadair:h-20 ipadair:text-8xl"
              style={{ color: textColors[(id - 1) % 6] }}
            >
              <span className="drop-shadow-[4px_4px_0px_black]">
                {data.eventName}
              </span>
              <span className="drop-shadow-[4px_4px_0px_black]">
                {data.eventNo < 10 ? "0" + data.eventNo : data.eventNo}
              </span>
            </h1>
            <p className="text-wrap font-tusker2 text-sm leading-8 tracking-wider mobile3:text-2xl mobile3:leading-10 ipadair:text-3xl ipadair:leading-[3rem] ipadair:tracking-wider">
              {data.eventDesc}
            </p>
          </div>
        </div>

        <div className="flex h-16 w-full mobile3:h-20 ipadair:px-0">
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
            <h2 className="mb-2 hidden font-tusker2 font-bold uppercase tracking-widest text-white drop-shadow-[4px_4px_0px_black] tablet:block tablet:text-3xl ipadair:text-5xl">
              {data.eventName}
            </h2>
            <Image
              className="hidden h-16 w-16 ipadair:block"
              src="/assets/events/smile.svg"
              width={80}
              height={80}
              alt="smile"
            ></Image>
            <span className="relative right-2 flex flex-grow items-center gap-2 mobile3:left-3 mobile3:right-0 mobile3:flex-grow-0 ipadair:static ipadair:left-0 ipadair:gap-4">
              <Image
                className="h-4 w-6 mobile3:h-[20%] mobile3:w-[20%]"
                src="/assets/events/stars.svg"
                width={200}
                height={100}
                alt="stars"
              ></Image>
              <span className="rounded-[50%] bg-black px-4 py-2 text-sm text-[#FFD23C] ipadair:px-8 ipadair:py-4 ipadair:text-2xl">
                {data.eventDate}
              </span>
              <Image
                className="h-4 w-6 scale-x-[-1] mobile3:h-[20%] mobile3:w-[20%]"
                src="/assets/events/stars.svg"
                width={200}
                height={100}
                alt="stars"
              ></Image>
            </span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F5CF6C] mobile3:h-10 mobile3:w-10 ipadair:h-14 ipadair:w-14">
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
            href={`/event/${Math.min(TOTAL_EVENT, id + 1)}`}
            className="flex h-full w-[30%] items-center justify-center gap-2 bg-[#FF93EE] px-2 ipadair:w-[20%]"
          >
            <p className="text-sm text-[#FFDE70] drop-shadow-[3px_3px_0px_black] mobile3:text-xl ipadair:text-3xl">
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
