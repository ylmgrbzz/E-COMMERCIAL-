import React from "react";
import Photo from "../../assets/unsplash_Lks7vei-eAg.jpg";
import Photo1 from "../../assets/1.jpg";
import Photo2 from "../../assets/2jpg.jpg";
import Photo3 from "../../assets/3.jpg";
import Photo4 from "../../assets/4.jpg";

function Top() {
  return (
    <>
      <div className="py-12">
        <p className="text-gray-500 text-center font-montserrat text-16 font-bold ">
          WHAT WE DO
        </p>
        <p className="text-abony-950 text-center font-montserrat text-58 font-bold leading-80 text-5xl py-4">
          Innovation tailored for you
        </p>
        <div className="flex justify-center gap-5">
          <p className="text-abony-950 font-montserrat text-14 font-bold ">
            Home
          </p>
          <p className="text-gray-500 font-montserrat text-14 font-bold  ">
            Team
          </p>
        </div>
      </div>
      <div className="anadiv flex gap-5 sm:flex-row flex-col">
        <div className="soldiv sm:w-1/2 w-full">
          <img src={Photo} className="w-full" />
        </div>
        <div className="sagdiv ">
          <div className="sagust parent grid grid-cols-2 grid-rows-2 gap-x-5 gap-y-5 h-full">
            <img src={Photo1} className="h-[271px]" />
            <img src={Photo2} className="h-[271px]" />
            <img src={Photo3} className="h-[271px]" />
            <img src={Photo4} className="h-[271px]" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Top;
