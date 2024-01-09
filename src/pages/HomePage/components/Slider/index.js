import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

const Slider = () => {
  const data = [
    {
      banner: "./assets/home/shop-hero-1-product-slide-1.jpg",
      subTitle: "SUMMER 2020",
      title: "NEW COLLECTION",
      description: "We know how large objects will act, ",
      description2: "but things on a small scale.",
      action: "SHOP NOW",
    },
    {
      banner: "./assets/home/home-page-slider2-2.jpg",
      subTitle: "AUTUMN 2023",
      title: "BLACK FİRDAY",
      description:
        "But things on a small scale, we know how large objects will act.",

      action: "START NOW",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    // console.log("handlenext1", activeIndex);
    const next = activeIndex === data.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(next);
    // console.log("handlenext", next);
  };
  const handlePrev = () => {
    // console.log("handleprev1", activeIndex);

    const prev = activeIndex === data.length - 1 ? 0 : activeIndex + 1;

    setActiveIndex(prev);
    // console.log("handleprev", prev);
  };

  return (
    <div className="relative w-full h-[70vh]">
      <button className="z-20 absolute top-1/2 left-6" onClick={handlePrev}>
        <FaAngleLeft className=" text-abony-50 text-4xl" />
      </button>
      <button className="z-20 absolute top-1/2 right-6" onClick={handleNext}>
        <FaAngleRight className=" text-abony-50 text-4xl" />
      </button>
      {data.map((collection, idx) => (
        <div
          className={`w-full ${idx === activeIndex ? "block" : "hidden"}`}
          key={idx}
        >
          <img
            src={collection.banner}
            className="object-right lg:object-left-top h-[70vh] left-0 top-0 w-full object-cover"
            alt=""
          />
          <div className="z-0 w-full max-w-[1030px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-3 flex flex-col justify-start items-center lg:items-start">
            <div className="text-white-50 mb-7 font-bold text-lg font-montserrat">
              {collection.subTitle}
            </div>
            <div className="text-white-50 font-bold text-5xl mb-7 font-montserrat leading-tight -tracking-tight ">
              {collection.title}
            </div>

            <div className="text-white-50  font-montserrat text-xl font-normal tracking-tight leading-7">
              {collection.description}
            </div>

            <div className="text-white-50 mb-7 font-montserrat text-xl font-normal tracking-tight leading-7">
              {collection.description2}
            </div>
            <button className="uppercase mt-5 font-montserrat bg-emerald-500 rounded-md text-white-50 font-medium text2xl px-10 py-[15px] ">
              {collection.action}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
