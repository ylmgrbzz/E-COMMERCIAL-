import React from "react";
import Photo1 from "../../assets/hero.jpg";

function Hero() {
  return (
    <div className="relative flex flex-col ">
      <div>
        <img src={Photo1} className=" h-[70vh] w-full object-cover" />
      </div>
      <div className="w-full max-w-[1030px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-3">
        <div className="text-abony-950 mb-7 font-bold text-lg font-montserrat">
          ABOUT COMPANY
        </div>
        <div className="text-abony-950 font-bold text-5xl mb-7 font-montserrat leading-tight -tracking-tight ">
          ABOUT US
        </div>

        <div className="text-gray-400  font-montserrat text-xl font-normal tracking-tight leading-7">
          We know how large objects will act,
        </div>

        <div className="text-gray-400 mb-7 font-montserrat text-xl font-normal tracking-tight leading-7">
          but things on a small scale
        </div>
        <button className="mt-5 font-montserrat bg-blue-500 rounded-md text-white-50 font-medium text2xl px-10 py-[15px] ">
          Get Quote Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
