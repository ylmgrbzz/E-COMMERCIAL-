import React, { useState } from "react";

import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

const Slider2 = () => {
  const data = [
    {
      banner: "./assets/home/shop-slider-product-slide-1.jpg",
      subTitle: "SUMMER 2020",
      title1: "Vita Classic",
      title2: "Product",

      description: "We know how large objects will act, We know ",
      description2: "how are objects will act, We know",
      price: " $16.48",
      action: "ADD TO CARD",
    },
    {
      banner: "./assets/home/home-page-slider2-2.jpg",
      // subTitle: " 2020",
      title1: "-15 BONUS",
      title2: "Problems trying to resolve the conflict between the two ",

      // description:
      //   "We know how large objects will act, but things on a small scale.",
      price: " SHOP NOW",
      action: "ADD TO CARD",
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
      <button className="absolute top-1/2 left-6" onClick={handleNext}>
        <FaAngleLeft className=" text-abony-50 text-4xl" />
      </button>

      <button className={`absolute top-1/2 right-6`} onClick={handlePrev}>
        <FaAngleRight className=" text-abony-50 text-4xl" />
      </button>
      {data.map((collection, idx) => (
        <div
          className={`w-full ${idx === activeIndex ? "block" : "hidden"}`}
          key={idx}
        >
          <img
            src={collection.banner}
            // alt={collection.title}
            className="absolute -z-10 object-left-top h-[70vh] left-0 top-0 w-full object-cover"
          />
          <div className="w-full max-w-[1030px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-3">
            <div className="text-white-50 mb-7 font-bold text-lg">
              {collection.subTitle}
            </div>
            <div className="text-white-50 font-bold text-4xl mb-3">
              {collection.title1}
            </div>
            <div className="text-white-50 font-bold text-4xl mb-7">
              {collection.title2}
            </div>

            <div className="text-white-50 font-bold text-sm">
              {collection.description}
            </div>
            <div className="text-white-50 font-medium text-sm">
              {collection.description2}
            </div>
            <div className="flex gap-8">
              <div className="text-white-50 font-medium text-2xl pt-7">
                {collection.price}
              </div>
              <button className="uppercase mt-5 bg-emerald-500 text-white-50 font-medium text2xl px-10 py-[15px] rounded-md">
                {collection.action}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider2;
