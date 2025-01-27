// Deepanshu made this not me.

import Link from "next/link";
import React from "react";

const GalleryAll: React.FC = () => {
  return (
    <div
      className="h-fit p-8"
      style={{
        backgroundImage: "url(/assets/Gallery/cardboard-texture.png)",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundColor: "rgba(201,52,29,0.8)",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="mb-6 flex justify-center text-center">
        <Link
          href="/gallery"
          className="rounded-full bg-white px-4 py-2 font-tusker font-bold text-[#EB6459] shadow-md hover:opacity-80"
        >
          SCROLL VIEW
        </Link>
      </div>

      <div
        className="grid-rows-13 relative hidden grid-cols-10 gap-10 lg:grid"
        style={{ width: "95vw", height: "1700px" }}
      >
        {/* First Grid */}
        <div className="col-span-4 row-span-3 translate-x-6 translate-y-7 rounded-[25px] bg-black opacity-40">
          1
        </div>
        <div className="col-span-4 col-start-5 row-span-3 translate-x-6 translate-y-7 rounded-[25px] bg-black opacity-40">
          2
        </div>
        <div className="col-span-2 col-start-9 row-span-3 translate-x-6 translate-y-7 rounded-[25px] bg-black opacity-40">
          3
        </div>
        <div className="col-span-3 row-span-2 row-start-4 translate-x-6 translate-y-7 rounded-[25px] bg-black opacity-40">
          4
        </div>
        <div className="col-span-3 col-start-4 row-span-2 row-start-4 translate-x-6 translate-y-7 rounded-[25px] bg-black opacity-40">
          5
        </div>
        <div className="col-span-4 col-start-7 row-span-3 row-start-4 translate-x-6 translate-y-7 rounded-[25px] bg-black opacity-40">
          6
        </div>
        <div className="col-span-3 col-start-1 row-span-2 row-start-12 translate-x-6 translate-y-7 rounded-[25px] bg-black opacity-40">
          7
        </div>
        <div className="col-span-3 col-start-1 row-span-2 row-start-10 translate-x-6 translate-y-7 rounded-[25px] bg-black opacity-40">
          9
        </div>
        <div className="col-span-3 col-start-1 row-span-4 row-start-6 translate-x-6 translate-y-7 rounded-[25px] bg-black opacity-40">
          10
        </div>
        <div className="col-span-5 col-start-4 row-span-3 row-start-11 translate-x-6 translate-y-7 rounded-[25px] bg-black opacity-40">
          11
        </div>
        <div className="col-span-2 col-start-9 row-span-3 row-start-11 translate-x-6 translate-y-7 rounded-[25px] bg-black opacity-40">
          12
        </div>
        <div className="col-span-3 col-start-4 row-span-5 row-start-6 translate-x-6 translate-y-7 rounded-[25px] bg-black opacity-40">
          13
        </div>
        <div className="col-span-4 col-start-7 row-span-4 row-start-7 translate-x-6 translate-y-7 rounded-[25px] bg-black opacity-40">
          14
        </div>

        {/* Second Grid placed on top */}
        <div
          className="grid-rows-13 absolute left-0 top-0 grid w-full grid-cols-10 gap-10"
          style={{ height: "1300px" }}
        >
          <div
            className="grid-rows-13 absolute left-0 top-0 grid w-full grid-cols-10 gap-6"
            style={{ height: "1700px" }}
          >
            <div className="relative col-span-4 row-span-3 flex items-center justify-center rounded-[25px] bg-white">
              <img
                className="absolute h-[93%] w-[96%] rounded-[25px] object-cover"
                src="https://res.cloudinary.com/dieef3h1w/image/upload/v1737309103/BACKGROUND_2_2_wcgagz.png"
                alt="event photo"
              />
              1
            </div>
            <div className="relative col-span-4 col-start-5 row-span-3 flex items-center justify-center rounded-[25px] bg-white">
              <img
                className="absolute h-[93%] w-[96%] rounded-[25px] object-cover"
                src="https://res.cloudinary.com/dieef3h1w/image/upload/v1737309103/BACKGROUND_2_2_wcgagz.png"
                alt="event photo"
              />
              2
            </div>
            <div className="relative col-span-2 col-start-9 row-span-3 flex items-center justify-center rounded-[25px] bg-white">
              <img
                className="absolute h-[95%] w-[93%] rounded-[25px] object-cover"
                src="https://res.cloudinary.com/dieef3h1w/image/upload/v1737309103/BACKGROUND_2_2_wcgagz.png"
                alt="event photo"
              />
              3
            </div>
            <div className="relative col-span-3 row-span-2 row-start-4 flex items-center justify-center rounded-[25px] bg-white">
              <img
                className="absolute h-[93%] w-[96%] rounded-[25px] object-cover"
                src="https://res.cloudinary.com/dieef3h1w/image/upload/v1737309103/BACKGROUND_2_2_wcgagz.png"
                alt="event photo"
              />
              4
            </div>
            <div className="relative col-span-3 col-start-4 row-span-2 row-start-4 flex items-center justify-center rounded-[25px] bg-white">
              <img
                className="absolute h-[93%] w-[96%] rounded-[25px] object-cover"
                src="https://res.cloudinary.com/dieef3h1w/image/upload/v1737309103/BACKGROUND_2_2_wcgagz.png"
                alt="event photo"
              />
              5
            </div>
            <div className="relative col-span-4 col-start-7 row-span-3 row-start-4 flex items-center justify-center rounded-[25px] bg-white">
              <img
                className="absolute h-[95%] w-[96%] rounded-[25px] object-cover"
                src="https://res.cloudinary.com/dieef3h1w/image/upload/v1737309103/BACKGROUND_2_2_wcgagz.png"
                alt="event photo"
              />
              6
            </div>
            <div className="relative col-span-3 col-start-1 row-span-2 row-start-12 flex items-center justify-center rounded-[25px] bg-white">
              <img
                className="absolute h-[96%] w-[96%] rounded-[25px] object-cover"
                src="https://res.cloudinary.com/dieef3h1w/image/upload/v1737309103/BACKGROUND_2_2_wcgagz.png"
                alt="event photo"
              />
              7
            </div>
            <div className="relative col-span-3 col-start-1 row-span-2 row-start-10 flex items-center justify-center rounded-[25px] bg-white">
              <img
                className="absolute h-[93%] w-[96%] rounded-[25px] object-cover"
                src="https://res.cloudinary.com/dieef3h1w/image/upload/v1737309103/BACKGROUND_2_2_wcgagz.png"
                alt="event photo"
              />
              9
            </div>
            <div className="relative col-span-3 col-start-1 row-span-4 row-start-6 flex items-center justify-center rounded-[25px] bg-white">
              <img
                className="absolute h-[96%] w-[95%] rounded-[25px] object-cover"
                src="https://res.cloudinary.com/dieef3h1w/image/upload/v1737309103/BACKGROUND_2_2_wcgagz.png"
                alt="event photo"
              />
              10
            </div>
            <div className="relative col-span-5 col-start-4 row-span-3 row-start-11 flex items-center justify-center rounded-[25px] bg-white">
              <img
                className="absolute h-[93%] w-[96%] rounded-[25px] object-cover"
                src="https://res.cloudinary.com/dieef3h1w/image/upload/v1737309103/BACKGROUND_2_2_wcgagz.png"
                alt="event photo"
              />
              11
            </div>
            <div className="relative col-span-2 col-start-9 row-span-3 row-start-11 flex items-center justify-center rounded-[25px] bg-white">
              <img
                className="absolute h-[96%] w-[93%] rounded-[25px] object-cover"
                src="https://res.cloudinary.com/dieef3h1w/image/upload/v1737309103/BACKGROUND_2_2_wcgagz.png"
                alt="event photo"
              />
              12
            </div>
            <div className="relative col-span-3 col-start-4 row-span-5 row-start-6 flex items-center justify-center rounded-[25px] bg-white">
              <img
                className="absolute h-[97%] w-[94%] rounded-[25px] object-cover"
                src="https://res.cloudinary.com/dieef3h1w/image/upload/v1737309103/BACKGROUND_2_2_wcgagz.png"
                alt="event photo"
              />
              13
            </div>
            <div className="relative col-span-4 col-start-7 row-span-4 row-start-7 flex items-center justify-center rounded-[25px] bg-white">
              <img
                className="absolute h-[96%] w-[96%] rounded-[25px] object-cover"
                src="https://res.cloudinary.com/dieef3h1w/image/upload/v1737309103/BACKGROUND_2_2_wcgagz.png"
                alt="event photo"
              />
              14
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="relative mx-auto h-[1900px] w-full">
        {/* First grid with bg-red-100 */}
        <div className="grid-rows-33 grid h-[1900px] w-full grid-cols-6 gap-4 lg:hidden">
          <div className="col-span-6 row-span-5 translate-x-3 translate-y-3 rounded-[25px] bg-black opacity-40">
            2
          </div>
          <div className="col-span-3 row-span-6 row-start-6 translate-x-3 translate-y-4 rounded-[25px] bg-black opacity-40">
            4
          </div>
          <div className="col-span-3 col-start-4 row-span-3 row-start-6 translate-x-3 translate-y-4 rounded-[25px] bg-black opacity-40">
            5
          </div>
          <div className="col-span-3 col-start-4 row-span-3 row-start-9 translate-x-3 translate-y-4 rounded-[25px] bg-black opacity-40">
            6
          </div>
          <div className="col-span-3 row-span-6 row-start-12 translate-x-3 translate-y-4 rounded-[25px] bg-black opacity-40">
            7
          </div>
          <div className="col-span-3 col-start-4 row-span-6 row-start-12 translate-x-3 translate-y-4 rounded-[25px] bg-black opacity-40">
            8
          </div>
          <div className="row-start-18 col-span-6 row-span-5 translate-x-3 translate-y-4 rounded-[25px] bg-black opacity-40">
            9
          </div>
          <div className="row-start-23 col-span-6 row-span-5 translate-x-3 translate-y-4 rounded-[25px] bg-black opacity-40">
            10
          </div>
          <div className="row-start-28 col-span-3 row-span-6 translate-x-3 translate-y-4 rounded-[25px] bg-black opacity-40">
            11
          </div>
          <div className="row-start-28 col-span-3 col-start-4 row-span-3 translate-x-3 translate-y-4 rounded-[25px] bg-black opacity-40">
            12
          </div>
          <div className="row-start-31 col-span-3 col-start-4 row-span-3 translate-x-3 translate-y-4 rounded-[25px] bg-black opacity-40">
            13
          </div>
        </div>

        {/* Second grid with bg-red-100 placed on top */}
        <div className="grid-rows-33 absolute left-0 top-0 grid h-[1900px] w-full grid-cols-6 gap-4 lg:hidden">
          <div className="relative col-span-6 row-span-5 flex items-center justify-center rounded-[25px] bg-white">
            <img
              className="absolute h-[94%] w-[96%] rounded-[25px] object-cover"
              src="https://res.cloudinary.com/dieef3h1w/image/upload/v1737309103/BACKGROUND_2_2_wcgagz.png"
              alt="event photo"
            />
            2
          </div>
          <div className="relative col-span-3 row-span-6 row-start-6 flex items-center justify-center rounded-[25px] bg-white">
            <img
              className="absolute h-[95%] w-[94%] rounded-[25px] object-cover"
              src="https://res.cloudinary.com/dieef3h1w/image/upload/v1737309103/BACKGROUND_2_2_wcgagz.png"
              alt="event photo"
            />
            4
          </div>
          <div className="relative col-span-3 col-start-4 row-span-3 row-start-6 flex items-center justify-center rounded-[25px] bg-white">
            <img
              className="absolute h-[93%] w-[95%] rounded-[25px] object-cover"
              src="https://res.cloudinary.com/dieef3h1w/image/upload/v1737309103/BACKGROUND_2_2_wcgagz.png"
              alt="event photo"
            />
            5
          </div>
          <div className="relative col-span-3 col-start-4 row-span-3 row-start-9 flex items-center justify-center rounded-[25px] bg-white">
            <img
              className="absolute h-[93%] w-[95%] rounded-[25px] object-cover"
              src="https://res.cloudinary.com/dieef3h1w/image/upload/v1737309103/BACKGROUND_2_2_wcgagz.png"
              alt="event photo"
            />
            6
          </div>
          <div className="relative col-span-3 row-span-6 row-start-12 flex items-center justify-center rounded-[25px] bg-white">
            <img
              className="absolute h-[95%] w-[95%] rounded-[25px] object-cover"
              src="https://res.cloudinary.com/dieef3h1w/image/upload/v1737309103/BACKGROUND_2_2_wcgagz.png"
              alt="event photo"
            />
            7
          </div>
          <div className="relative col-span-3 col-start-4 row-span-6 row-start-12 flex items-center justify-center rounded-[25px] bg-white">
            <img
              className="absolute h-[95%] w-[95%] rounded-[25px] object-cover"
              src="https://res.cloudinary.com/dieef3h1w/image/upload/v1737309103/BACKGROUND_2_2_wcgagz.png"
              alt="event photo"
            />
            8
          </div>
          <div className="row-start-18 relative col-span-6 row-span-5 flex items-center justify-center rounded-[25px] bg-white">
            <img
              className="absolute h-[93%] w-[96%] rounded-[25px] object-cover"
              src="https://res.cloudinary.com/dieef3h1w/image/upload/v1737309103/BACKGROUND_2_2_wcgagz.png"
              alt="event photo"
            />
            9
          </div>
          <div className="row-start-23 relative col-span-6 row-span-5 flex items-center justify-center rounded-[25px] bg-white">
            <img
              className="absolute h-[93%] w-[96%] rounded-[25px] object-cover"
              src="https://res.cloudinary.com/dieef3h1w/image/upload/v1737309103/BACKGROUND_2_2_wcgagz.png"
              alt="event photo"
            />
            10
          </div>
          <div className="row-start-28 relative col-span-3 row-span-6 flex items-center justify-center rounded-[25px] bg-white">
            <img
              className="absolute h-[96%] w-[95%] rounded-[25px] object-cover"
              src="https://res.cloudinary.com/dieef3h1w/image/upload/v1737309103/BACKGROUND_2_2_wcgagz.png"
              alt="event photo"
            />
            11
          </div>
          <div className="row-start-28 relative col-span-3 col-start-4 row-span-3 flex items-center justify-center rounded-[25px] bg-white">
            <img
              className="absolute h-[93%] w-[95%] rounded-[25px] object-cover"
              src="https://res.cloudinary.com/dieef3h1w/image/upload/v1737309103/BACKGROUND_2_2_wcgagz.png"
              alt="event photo"
            />
            12
          </div>
          <div className="row-start-31 relative col-span-3 col-start-4 row-span-3 flex items-center justify-center rounded-[25px] bg-white">
            <img
              className="absolute h-[93%] w-[95%] rounded-[25px] object-cover"
              src="https://res.cloudinary.com/dieef3h1w/image/upload/v1737309103/BACKGROUND_2_2_wcgagz.png"
              alt="event photo"
            />
            13
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryAll;
